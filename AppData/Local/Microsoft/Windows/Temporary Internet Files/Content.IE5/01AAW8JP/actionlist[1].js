//
// Copyright (C) 2010 Solid State Networks, Inc.  All rights reserved.
//
// This usage of this software is restricted to entities which have signed a license agreement
// with Solid State Networks, Inc.
//
// Licenses are valid for only one PRODUCT usage.  Please see the license agreement for further details.
//

ActionList = function(actionList) {
    this.onStart = null;
	this.percent = 0;
    this.onStateChange = null;
    this.onProgress = null;
    this.onComplete = null;
    this.onPopulatePing = null;    
    this.onAction = null;
    this.actionList = actionList;
    this.actionHandlers = [];
    this.currentActionIndex = -1;
    this.currentActionList = null;
    this.failure = false;
    this.failureString = null;
    this.failureSendToParent = true;
    this.paused = false;
    this.parent = null;
};

ActionList.prototype =
{
    internalRaiseStart: function() {
        this.cancelled = false;
        if (this.onStart != null) {
            this.onStart();
        }
    },

    internalRaiseStateChange: function(state) {
        if (this.onStateChange != null) {
            this.onStateChange({ "state": state });
        }
    },
    
    internalizePercent: function(percent) {
        var percentPortion = 1.0 / this.actionList.actions.length;
        return (this.currentActionIndex * percentPortion) + (percent * percentPortion);
    }, 
    
    internalRaiseProgress: function(percent) {
        if (this.onProgress != null) {
			if (percent > 1.0) {
				percent = 1.0;
			} else {
				percent = this.internalizePercent(percent);
			}
			this.percent = percent;
            this.onProgress({ "percent": percent });
        }
    },
   
    internalRaiseComplete: function(successful, failureString, failureSendToParent) {
        if (this.onPopulatePing != null) {
            this.onPopulatePing({ "successful": successful, "failureString": failureString });
        }
        ping(this.actionList.properties.ping.url, this.actionList.properties.ping.parameters);
        if (this.onComplete != null) {
            this.onComplete({ "successful": successful, "failureString": failureString, "failureSendToParent": failureSendToParent });
        }
    },
	
    getActionItemState: function(actionItem, id) {
		var state = "Unable to locate language string";
		var stringId = "notfound";
		if (typeof id == "number") {
			id = id.toString();
		}
        if (this.cancelled == true)
            return "Cancelled";
	    if (actionItem.exitCodeLookup != null) {
			if (actionItem.exitCodeLookup.hasOwnProperty(id) === false) {
				if (actionItem.exitCodeLookup.hasOwnProperty(stringId) === true) {
					stringId = actionItem.exitCodeLookup[stringId];
				}
			} else {
				stringId = actionItem.exitCodeLookup[id];
			}
		}
		if (actionItem.messageLookup != null) {
			if (actionItem.messageLookup.hasOwnProperty(id) === false) {
				if (actionItem.messageLookup.hasOwnProperty(stringId) === true) {
					stringId = actionItem.messageLookup[stringId];
				}
			} else {
				stringId = actionItem.messageLookup[id];
			}
		}
		if (stringId === "notfound") {
			stringId = "Launch_NotFound";
		}
		if (Language.hasOwnProperty(stringId) === true) {
			state = Language[stringId];
		} else {
			state += ": " + id;
		}
		return state;
	},
	
	getActionItemSuccess: function(actionItem, exitCode) {
		var successful = false, i = 0;
		if (actionItem.exitCodeSuccess == null) {
			successful = (exitCode === 0);
		} else {
			if (typeof actionItem.exitCodeSuccess == "number") {
				successful = (exitCode === actionItem.exitCodeSuccess);
			} else {
				for (i = 0; i < actionItem.exitCodeSuccess.length; i += 1) {
					if (exitCode === actionItem.exitCodeSuccess[i]) {
						successful = true;
						break;
					}
				}
			}
		}
		return successful;
	},
	
	getActionItemGetFirstFlagFromExitCode: function(actionItem, exitCode) {
		var i = 0, keys, flag;
		if (actionItem.exitCodeLookup != null) {
			keys = getObjectProperties(actionItem.exitCodeLookup);
			for (i = 0; i < keys.length; i += 1) {
				flag = parseInt(keys[i]);
				if (flag == NaN) {
					continue;
				}
				if (((flag == 0) && (exitCode == flag)) || (exitCode & flag)) {
					return flag;
				}
			}
		}
		return -1;
	},
	
    getTitle: function() {
        return this.actionList.properties["title"];
    },
    
    getPingParam: function(paramName) {
        if (this.actionList.properties.ping.parameters.hasOwnProperty(paramName) === false) {
            return null;
        }

        return this.actionList.properties.ping.parameters[paramName];
    },

    setPingParam: function(paramName, value) {
        if (this.actionList.properties.ping.parameters.hasOwnProperty(paramName) === false) {
            return;
        }

        this.actionList.properties.ping.parameters[paramName] = value;
    },
    
    resume: function() {
        this.paused = false;
    },
    pause: function() {
        this.paused = true;
    },
    cancel: function() {
        if (this.currentActionList != null) {
            this.currentActionList.cancel();
        }
        this.cancelled = true;
        this.internalRaiseStateChange("Cancelled");
        this.internalRaiseProgress(0);
        this.failure = true;
        this.internalRaiseComplete(false, null, this.failureSendToParent);
    },

    release: function() {
        var length = this.actionHandlers.length, i;
        for (i = 0; i < length; i += 1) {
            this.actionHandlers[i].release();
        }
        this.actionHandlers = [];
    },
	
	containsAction: function(actionName) {
		var i = 0, actionKey;
		for (i = 0; i < this.actionList.actions.length; i += 1) {
			if (this.actionList.actions[i] == null) {
				continue;
			}
			actionKey = getObjectProperties(this.actionList.actions[i])[0];
			if (actionName == actionKey) {
				return true;
			}
		}
		
		return false;
	},
	
    dispatchAction: function() {
        var self, key, actionHandler = null;

        self = this;

        if (this.cancelled === true) {
            return;
        }

        if ((this.actionList.actions[this.currentActionIndex] == null) || (this.failure === true)) {
            this.internalRaiseComplete(!this.failure, this.failureString, this.failureSendToParent);
            return;
        }

        if (this.paused === true) {
            // Try again in a bit
            window.setTimeout(function() { self.dispatchAction(); }, 500);
            return;
        }

        if (this.currentActionIndex === 0) {
            this.internalRaiseStart();
        }
        
        this.currentActionList = null;
        
        key = getObjectProperties(this.actionList.actions[this.currentActionIndex])[0];
        
        if (key.toLowerCase() == "items") {
            if (typeof ActionActionList != 'undefined') {
                actionHandler = new ActionActionList(this, this.actionList.actions[this.currentActionIndex][key]);
                this.currentActionList = actionHandler;
            }
        } else if (this.onAction != null) {
            actionHandler = this.onAction({ "key": key.toLowerCase(), "actionList": this, "actionItem": this.actionList.actions[this.currentActionIndex][key] });
        }

        if (actionHandler != null) {
            this.actionHandlers.push(actionHandler);

            if (actionHandler.hasOwnProperty("onStateChange")) {
                actionHandler.onStateChange = function(info) {
                    self.internalRaiseStateChange(info.state);
                };
            }
            if (actionHandler.hasOwnProperty("onProgress")) {
                actionHandler.onProgress = function(info) {
                    self.internalRaiseProgress(info.percent);
                };
            }
            if (actionHandler.hasOwnProperty("onComplete")) {
                actionHandler.onComplete = function(info) {
                    if (typeof info.failureSendToParent != 'undefined') {
                        self.failureSendToParent = info.failureSendToParent;
                    }
                    if (info.successful === false) {
                        self.failure = true;
                        self.failureString = info.exitCodeString;
                    }
                    self.currentActionIndex += 1;
                    self.dispatchAction();
                };
            }
            
            actionHandler.start();
        }
    },

    start: function() {
        this.currentActionIndex = 0;
        this.dispatchAction();
    }
};

