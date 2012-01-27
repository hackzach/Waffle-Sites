//
// Copyright (C) 2011 Solid State Networks, Inc.  All rights reserved.
//
// This usage of this software is restricted to entities which have signed a license agreement
// with Solid State Networks, Inc.
//
// Licenses are valid for only one PRODUCT usage.  Please see the license agreement for further details.
//


var ActionDownload = function(actionList, actionItem) {
    this.actionList = actionList;
    this.actionItem = actionItem;
    this.downloadContainer = null;
    this.onStateChange = null;
    this.onProgress = null;
    this.onComplete = null;
    this.currentState = -1;
	this.progressEventHandler = null;
	this.stateChangeEventHandler = null;
	this.completeEventHandler = null;
    this.stateMultiplier = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 5.0, 10.0, 10.0, 0.0, 70.0, 0.0, 5.0, 0.0 ];
};

var actionDownloadCleanupList = {};

var actionDownloadAddCleanup = function(info) {
	if (actionDownloadCleanupList.hasOwnProperty(info.id) === true) {
		actionDownloadCleanupList[info.id].refCount += 1;
		return;
	}
	actionDownloadCleanupList[info.id] = { "refCount": 1 };
};
var actionDownloadRemoveCleanup = function(info) {
	if (actionDownloadCleanupList.hasOwnProperty(info.id) === false) {
		return;
	}
	actionDownloadCleanupList[info.id].refCount -=1;
	if (actionDownloadCleanupList[info.id].refCount > 0) {
		return;
	}
	info.download.eraseContent();
};

ActionDownload.prototype =
{
    internalRaiseStateChange: function(state) {
        if (this.onStateChange != null) {
            this.onStateChange({ "state": state });
        }
    },
    
    internalizePercent: function(percent)
    {
        var percentTotal = 0.0;
        var i = 0;
        if (percent < 0) {
            percent = 1;
		}
        for (i = 0; i < this.stateMultiplier.length; i += 1) {
            if (i - 1 === this.currentState) {
                break;
            }
            percentTotal += this.stateMultiplier[i];
        }
        percentTotal += (this.stateMultiplier[i] + 0.0) * (percent + 0.0);
        return (percentTotal / 100.0);
    },
    
    internalRaiseProgress: function(percent) {
        if (this.onProgress != null) {
            this.onProgress({ "percent": this.internalizePercent(percent) });
        }
    },

    internalRaiseComplete: function(successful) {
        if (this.onComplete != null) {
            this.onComplete({ "successful": successful });
        }
    },

	removeEventHandlers: function() {
		if (this.progressEventHandler != null) {
			downloadManager.removeDownloadProgressEventHandler(this.progressEventHandler);
			this.progressEventHandler = null;
		}
		if (this.stateChangeEventHandler != null) {
			downloadManager.removeDownloadStateChangeEventHandler(this.stateChangeEventHandler);
			this.stateChangeEventHandler = null;
		}
		if (this.completeEventHandler != null) {
			downloadManager.removeDownloadCompleteEventHandler(this.completeEventHandler);
			this.completeEventHandler = null;
		}	
	},
	
    release: function() {
        if (this.downloadContainer != null) {
			this.removeEventHandlers();
            if (this.actionItem.cleanup === true) {
				actionDownloadRemoveCleanup({ "id": this.downloadContainer.id, "download": this.downloadContainer.download });
            }
            downloadManager.removeDownload(this.downloadContainer.id);
            this.downloadContainer = null;
        }
    },

    start: function() {
        var self;

        self = this;

        this.downloadContainer = downloadManager.addDownload(host.app.expandString(this.actionItem.configurl), host.app.expandString(this.actionItem.metafile), host.app.expandString("{ModulePath}"));
		
		if (this.actionItem.cleanup === true) {
			actionDownloadAddCleanup({ "id": this.downloadContainer.id });
		}
			
		this.progressEventHandler = function(info) {
			if (info.downloadId !== self.downloadContainer.id) {
				return;
			}
            if (info.percent >= 0) { 
                self.internalRaiseProgress(info.percent);
            }
		};
		
		this.stateChangeEventHandler = function(info) {
			var state, failure;
			if (info.downloadId !== self.downloadContainer.id) {
				return;
			}
            self.currentState = info.state;
            if (self.currentState === downloadState.DOWNLOADWITHCHECK) {
                self.currentState = downloadState.DOWNLOAD;
            }
			if (self.currentState === downloadState.DOWNLOADSTALLED) {
                failure = downloadFailure.nameFromId(self.downloadContainer.download.getLastFailure());
                if (failure == "None") {
                    state = "DownloadState_" + downloadState.nameFromId(info.state);
                } else {
                    state = "DownloadError_" + failure;
                }
                self.internalRaiseStateChange(state);
				self.internalRaiseComplete(false);
				self.removeEventHandlers();
				self.onProgress = null;
				return;
			}
            if (info.state <= downloadState.DOWNLOAD) {
                state = "DownloadState_" + downloadState.nameFromId(info.state);
                self.internalRaiseStateChange(state);
            }
		};
		this.completeEventHandler = function(info) {
            var state;
			if (info.downloadId !== self.downloadContainer.id) {
				return;
			}
            if (info.successful === false) {
                state = "DownloadError_" + downloadError.nameFromId(self.downloadContainer.download.getLastError());
                self.internalRaiseStateChange(state);
            }
            self.internalRaiseComplete(info.successful);
			self.removeEventHandlers();
			self.onProgress = null;
        };

		downloadManager.addDownloadProgressEventHandler(this.progressEventHandler);
		downloadManager.addDownloadStateChangeEventHandler(this.stateChangeEventHandler);		
		downloadManager.addDownloadCompleteEventHandler(this.completeEventHandler);		
		
		if (this.downloadContainer.download.getIsRunning() === false) {
			this.downloadContainer.download.start();
		}
		
    }
};
