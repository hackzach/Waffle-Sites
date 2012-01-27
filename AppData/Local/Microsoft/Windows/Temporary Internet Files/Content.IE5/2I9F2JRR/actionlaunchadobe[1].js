//
// Copyright (C) 2011 Solid State Networks, Inc.  All rights reserved.
//
// This usage of this software is restricted to entities which have signed a license agreement
// with Solid State Networks, Inc.
//
// Licenses are valid for only one PRODUCT usage.  Please see the license agreement for further details.
//


ActionLaunchAdobe = function(actionList, actionItem) {
    this.actionList = actionList;
    this.actionItem = actionItem;
    this.actionLaunch = new ActionLaunch(actionList, actionItem);
    this.onStateChange = null;
    this.onExitCodeLookup = null;
    this.exitCodeLookup = null;
    this.onProgress = null;
    this.onComplete = null;
};

ActionLaunchAdobe.prototype = {
	
    release: function() {
    },
    start: function() {
        var self = this, keys = null, failureString = null, exitCodeString = null, msiExitCode = 0, regLocation = null;
        
        this.exitCodeLookup = function(info) {
            var conflictingProcessList = "";
            if ((this.actionItem.hasOwnProperty("willRebootExitCode")) && (info.exitCode == this.actionItem.willRebootExitCode)) {
                RebootRequired = true;
            }
            if ((this.actionItem.hasOwnProperty("conflictingProcessExitCode")) && (info.exitCode == this.actionItem.conflictingProcessExitCode)) {
                if (this.actionItem.hasOwnProperty("conflictingProcessRegistryHive") && this.actionItem.hasOwnProperty("conflictingProcessRegistryLocation") && this.actionItem.hasOwnProperty("conflictingProcessRegistryKey")) {
                    /* Search for list of open processes in registry (used for Flash) */
                    conflictingProcessList = Adobe.getRegistryString(this.actionItem.conflictingProcessRegistryHive, this.actionItem.conflictingProcessRegistryLocation, this.actionItem.conflictingProcessRegistryKey, "");
                    if (conflictingProcessList !== "") {
                        confirmConflictingProcesses(Language[this.actionItem.conflictingProcessMessageId], conflictingProcessList, function() { self.start(); });
                        return;
                    }
                } else { 
                    /* There is no process list, simply display conflicting process message (used for Reader) */
                    confirmConflictingProcesses(Language[this.actionItem.conflictingProcessMessageId], conflictingProcessList, function() { self.start(); });
                    return;
                }
            }
            this.actionList.setPingParam("exitcode", info.exitCode);
            if (this.actionList.getTitle().indexOf("Adobe") !== -1) {
                AdobeExitCode = info.exitCode;
            }  
            if (this.actionItem.hasOwnProperty("msiErrorRegistryHive")) {
                if (Adobe.is64Bit()) {
                    regLocation = this.actionItem.msiErrorRegistryLocation64;
                } else {
                    regLocation = this.actionItem.msiErrorRegistryLocation;
                }
                msiExitCode = Adobe.getRegistryInt32(this.actionItem.msiErrorRegistryHive, regLocation, "ExitCode", 0);
                if (msiExitCode == info.exitCode) {
                    exitCodeString = Adobe.getRegistryString(this.actionItem.msiErrorRegistryHive, regLocation, "ErrorText", "");
                    if (exitCodeString == "") {
                        exitCodeString = null;
                    } else {
                        exitCodeString = host.app.convertToEntitizedString(exitCodeString);
                    }
                }
            }
            self.actionLaunch.exitCodeLookup({ "exitCode": info.exitCode, "exitCodeString": exitCodeString });
        };
        if (this.onExitCodeLookup == null) {
            this.onExitCodeLookup = this.exitCodeLookup;
        }
        this.actionLaunch.onExitCodeLookup = this.onExitCodeLookup;
        this.actionLaunch.onStateChange = this.onStateChange;
        this.actionLaunch.onProgress = this.onProgress;
        this.actionLaunch.onComplete = this.onComplete;
        this.actionLaunch.start();
    }
};
