//
// Copyright (C) 2010 Solid State Networks, Inc.  All rights reserved.
//
// This usage of this software is restricted to entities which have signed a license agreement
// with Solid State Networks, Inc.
//
// Licenses are valid for only one PRODUCT usage.  Please see the license agreement for further details.
//

ActionRegistryValueCheck = function(actionList, actionItem, launcher) {
    this.actionList = actionList;
    this.actionItem = actionItem;
    this.launcher = launcher;
    this.onStateChange = null;
    this.onComplete = null;
    this.onProgress = null;
};

ActionRegistryValueCheck.prototype = {
    internalRaiseStateChange: function(state) {
        if (this.onStateChange != null) {
            this.onStateChange({ "state": state });
        }
    },

    internalRaiseProgress: function(percent) {
        if (this.onProgress != null) {
            this.onProgress({ "percent": percent });
        }
    },

    internalRaiseComplete: function(successful) {
		if (successful === true) {
			this.internalRaiseProgress(1.0);
		} else {
			this.internalRaiseProgress(1.1);
		}
        if (this.onComplete != null) {
            this.onComplete({ "successful": successful });
        }
    },

    release: function() {
    },

    start: function() {
		var success = false;
		this.internalRaiseProgress(0.0);
        success = (this.launcher.getRegistryString(this.actionItem.hive, this.actionItem.location, this.actionItem.key, "") === this.actionItem.value);
        if (success === this.actionItem.success) {
            this.internalRaiseComplete(true);
        } else {
		this.internalRaiseStateChange(this.actionList.getActionItemState(this.actionItem, "fail"));
        this.internalRaiseComplete(false);
        }
    }
};