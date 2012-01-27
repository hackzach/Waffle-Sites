//
// Copyright (C) 2011 Solid State Networks, Inc.  All rights reserved.
//
// This usage of this software is restricted to entities which have signed a license agreement
// with Solid State Networks, Inc.
//
// Licenses are valid for only one PRODUCT usage.  Please see the license agreement for further details.
//


ActionLaunchFlashPlayer = function(actionLaunch) {
    this.actionLaunch = actionLaunch;
    this.onStateChange = null;
    this.onProgress = null;
    this.onComplete = null;
};

ActionLaunchFlashPlayer.prototype = {

    release: function() {
    },

    start: function() {
        var self = this;
        this.actionLaunch.onExitCodeLookup = function(info) {
            if ((this.actionItem.hasOwnProperty("settingsManagerIsOpen")) && (info.exitCode == this.actionItem.settingsManagerIsOpen)) {
                confirmConflictingProcesses(Language["ActionList_ConflictingProcessFlashPlayerSettingsMessage"], "", function() { self.start(); });
                return;
            }
            self.actionLaunch.exitCodeLookup(info);
        };
        this.actionLaunch.onStateChange = this.onStateChange;
        this.actionLaunch.onProgress = this.onProgress;
        this.actionLaunch.onComplete = this.onComplete;
        this.actionLaunch.start();
    }
};
