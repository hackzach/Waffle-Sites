//
// Copyright (C) 2010 Solid State Networks, Inc.  All rights reserved.
//
// This usage of this software is restricted to entities which have signed a license agreement
// with Solid State Networks, Inc.
//
// Licenses are valid for only one PRODUCT usage.  Please see the license agreement for further details.
//

ActionAirAppInstall = function(actionList, actionItem) {
    this.actionList = actionList;
    this.actionItem = actionItem;
    this.onStateChange = null;
    this.onComplete = null;
    this.onProgress = null;
};

ActionAirAppInstall.prototype = {
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
        var process, self, args = "-installAppSilent";

        self = this;
        self.internalRaiseProgress(0.0);
        
		if (this.actionItem.desktopShortcut) {
			args += " -desktopShortcut";
			}
		if (this.actionItem.programMenu) {
			args += " -programMenu";
			}
		
		args += " \"" + this.actionItem.currentDirectory + this.actionItem.appName + "\"";
		
        process = createProcess();
        process.setApplicationName(host.app.expandString("{ModulePath}arh.exe"));
        process.setArguments(host.app.expandString(args));
        process.setWorkingDirectory(host.app.expandString("{ModulePath}"));
        process.setShowWindow(false);
        process.setElevate(true);

        process.onExit = function(info) {

            self.actionList.setPingParam("exitcode", info.exitCode);
			self.internalRaiseStateChange(self.actionList.getActionItemState(self.actionItem, info.exitCode));
            
            if (info.exitCode > 1) {
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

