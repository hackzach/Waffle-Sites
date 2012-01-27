//
// Copyright (C) 2010 Solid State Networks, Inc.  All rights reserved.
//
// This usage of this software is restricted to entities which have signed a license agreement
// with Solid State Networks, Inc.
//
// Licenses are valid for only one PRODUCT usage.  Please see the license agreement for further details.
//

ActionCheckUninstall = function(actionList, actionItem) {
    this.actionList = actionList;
    this.actionItem = actionItem;
    this.onStateChange = null;
    this.onComplete = null;
    this.onProgress = null;
};

ActionCheckUninstall.prototype = {
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
        this.internalRaiseProgress(0.0);
        if (Adobe.isVersionGreaterThanUninstallVersion(this.actionItem.productName, this.actionItem.productVersion) === true) {
            this.internalRaiseProgress(1.0);
            this.internalRaiseComplete(true);
        } else {
            this.actionList.setPingParam("pre_installed", "1");
            this.internalRaiseProgress(1.1);
			this.internalRaiseStateChange(this.actionList.getActionItemState(this.actionItem, "fail"));
			this.internalRaiseComplete(false);		
        }
    }
};
