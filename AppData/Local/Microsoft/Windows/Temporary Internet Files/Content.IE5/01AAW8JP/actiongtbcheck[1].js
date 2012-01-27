//
// Copyright (C) 2010 Solid State Networks, Inc.  All rights reserved.
//
// This usage of this software is restricted to entities which have signed a license agreement
// with Solid State Networks, Inc.
//
// Licenses are valid for only one PRODUCT usage.  Please see the license agreement for further details.
//

ActionGtbCheck = function(actionList, actionItem) {
    this.actionList = actionList;
    this.actionItem = actionItem;
    this.onStateChange = null;
    this.onComplete = null;
    this.onProgress = null;
};

ActionGtbCheck.prototype = {
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
        if (this.onComplete != null) {
            this.onComplete({ "successful": successful });
        }
    },
	
    release: function() {
    },

    start: function() {
        var process, self;

        self = this;
        self.internalRaiseProgress(0.0);
        
        process = createProcess();
        process.setApplicationName(host.app.expandString("{ModulePath}gtbcheck.exe"));
        process.setArguments("");
        process.setWorkingDirectory(host.app.expandString("{ModulePath}"));
        process.setShowWindow(false);
        process.setElevate(true);

        process.onExit = function(info) {
            var flag, exitCode = -1;
			
            self.actionList.setPingParam("pre_installed", (info.exitCode & 1) ? "1":"0");
            self.actionList.setPingParam("not_admin", (info.exitCode & 2) ? "1":"0");
            self.actionList.setPingParam("br_not_def", (info.exitCode & 4) ? "1":"0");
            self.actionList.setPingParam("bho_disabled", (info.exitCode & 8) ? "1":"0");
            self.actionList.setPingParam("br_not_min", (info.exitCode & 10) ? "1":"0");
			
			flag = self.actionList.getActionItemGetFirstFlagFromExitCode(self.actionItem, info.exitCode);
			
			if ((flag === -1) && (info.exitCode !== 0)) {
				exitCode = info.exitCode;
			} else {
				exitCode = flag;
			}
			
			if (exitCode > 0) {
				self.internalRaiseStateChange(self.actionList.getActionItemState(self.actionItem, exitCode));
				self.internalRaiseProgress(1.1);				
				self.internalRaiseComplete(false);
				return;
			}
			
			self.internalRaiseProgress(1.0);
            self.internalRaiseComplete(self.actionList.getActionItemSuccess(self.actionItem, info.exitCode));
        };

        process.onComplete = function(info) {
            if (info.successful === false) {
                self.actionList.setPingParam("exitcode", "launchfail");
                self.internalRaiseStateChange(self.actionList.getActionItemState(self.actionItem, "launchfail"));
				self.internalRaiseComplete(false);
            }
            this.release();
        };

        process.launch();
    }
};

