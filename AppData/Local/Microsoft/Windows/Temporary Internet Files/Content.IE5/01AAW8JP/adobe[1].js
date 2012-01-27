//
// Copyright (C) 2009 Solid State Networks, Inc.  All rights reserved.
//
// This usage of this software is restricted to entities which have signed a license agreement
// with Solid State Networks, Inc.
//
// Licenses are valid for only one PRODUCT usage.  Please see the license agreement for further details.
//


//

_Adobe = function() {
    this.actionListAdding = false;
    this.launcher = null;
    this.mainActionList = null;
    this.pauseAdditionalInstalls = false;
};

function fileToHexString(url, progressCallback, completeCallback) 
{
    var httpDownload, hexString;

    hexString = "";
    httpDownload = createHttpDownload();
    httpDownload.setUrl(url);
    httpDownload.setUseCache(false);
    httpDownload.setUseWriteCallback(true);

    httpDownload.onProgress = function(info) {
        if (progressCallback !== null) {
            progressCallback(info);
        }
    };

    httpDownload.onWrite = function(info) {
        hexString += info.buffer;
    }

    httpDownload.onComplete = function(info) {
        httpDownload.release();

        completeCallback({ "successful": info.successful, "hexString": hexString });
    };

    httpDownload.start();
}

_Adobe.prototype = {

    init: function() {
        if (this.launcher != null) {
            throw "launcher already initialized";
        }

        this.launcher = createLauncher();
    },
    resume: function() {
        if (this.mainActionList != null) {
            this.mainActionList.resume();
        }
    },
    pause: function() {
        if (this.mainActionList != null) {
            this.mainActionList.pause();
        }
    },
    pauseAdditionalInstallations: function() {
        if (this.pauseAdditionalInstalls !== true) {
            ActiveLaunches += 1;
            this.pauseAdditionalInstalls = true;
        }
    },
    resumeAdditionalInstallations: function() {
        if (this.pauseAdditionalInstalls === true) {
            ActiveLaunches -= 1;
            this.pauseAdditionalInstalls = false;
        }
    },
    hasInstallationsPending: function() {
        if (this.pauseAdditionalInstalls === true) {
            return (ActiveLaunches > 1);
        }
        return (ActiveLaunches > 0);
    },
    cancel: function() {
        if (this.mainActionList != null) {
            this.mainActionList.cancel();
        }
    },
    release: function() {
        if (this.launcher != null) {
            this.launcher.release();
            this.launcher = null;
        }
    },

    reboot: function() {
        this.launcher.reboot();
    },
    
    launchChrome: function() {
        var chromeExe;
		
		chromeExe = this.getRegistryString("machine", "SOFTWARE\\Google\\Update", "LastInstallerSuccessLaunchCmdLine", host.app.expandString("{UserAppData}Google\\Chrome\\Application\\"));

        setTimeout(function() { Adobe.openCompletionPage(); waitForClose(); }, 2300);

        process = createProcess();
        process.setApplicationName(chromeExe);
        process.setArguments("");
        process.setWorkingDirectory("");
        process.setShowWindow(true);
        process.setElevate(false);
        process.launch();
		process.release();
    },

    registryKeyPathExists: function(type, keyPath) {
        return this.launcher.registryKeyPathExists(type, keyPath);
    },

    getRegistryString: function(type, keyPath, key, defaultValue) {
        return this.launcher.getRegistryString(type, keyPath, key, defaultValue);
    },
	
    getRegistryInt32: function(type, keyPath, key, defaultValue) {
        return this.launcher.getRegistryInt32(type, keyPath, key, defaultValue);
    },

    getActionList: function() {
        return host.app.getConfig("ActionList", "unknown");
    },

    getAIHSite: function() {
        return host.app.getConfig("AIHSite", "unknown");
    },

    getAIHName: function() {
        return host.app.getConfig("AIHName", "unknown");
    },
    
    getAIHVersion: function() {
        return host.app.getConfig("AIHVersion", "unknown");
    },
    
    getCompletionUrl: function() {
        return host.app.getConfig("CompletionUrl", "unknown") + '?exitcode=' + AdobeExitCode + ((AdobePreinstalled == 1) ? "&preinstalled=1": "");
    },
    
    getName: function() {
        return host.app.getConfig("Name", "unknown");
    },

    is64Bit: function() {
        var arch = this.getRegistryString("machine", "SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment", "PROCESSOR_ARCHITECTURE", "");
        return (arch.indexOf("64") != -1);
    },
    
    getServicePack: function() {
        var productVersion = this.getRegistryString("machine", "Software\\Microsoft\\Windows NT\\CurrentVersion", "CSDVersion", "0");
        if (productVersion.indexOf("0") != -1) {
            return 0;
        }
        if (productVersion.indexOf("1") != -1) {
            return 1;
        }
        if (productVersion.indexOf("2") != -1) {
            return 2;
        }
        if (productVersion.indexOf("3") != -1) {
            return 3;
        }

        return 0;
    },

    getPlatformId: function() {
        var productName = this.getRegistryString("machine", "Software\\Microsoft\\Windows NT\\CurrentVersion", "ProductName", "").toLowerCase();
        
        if (productName.indexOf("xp") != -1) {
            return "XP";
        }
        if (productName.indexOf("2000") != -1) {
            return "2K";
        }
        if (productName.indexOf("2003") != -1) {
            return "2K3";
        }
        if (productName.indexOf("2008") != -1) {
            return "2K8";
        }
        if (productName.indexOf("vista") != -1) {
            return "VISTA";
        }
        if (productName.indexOf("7") != -1) {
            return "7";
        }

        return "UNK";
    },
    
    getOsVer: function() {
        var osVersion = Adobe.getPlatformId();
        var osSP = Adobe.getServicePack();
        if (osSP > 0) {
            osVersion += '-SP' + osSP;
        }
        if (Adobe.is64Bit() == true) {
            osVersion += '_64';
        }

        return osVersion;
    },
    
    getLocaleId: function() {
        return host.app.expandString("{UserLCID}");
    },
    
    isVersionGreaterThanUninstallVersion: function(productName, incomingVersion) {
        var x, currentVersionOctet, versionArray;

		versionArray = this.getRegistryString("machine", "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\" + productName, "DisplayVersion", "0.0.0.0").split(".");
        
        for (x = 0; x < versionArray.length; x += 1) {
            currentVersionOctet = parseInt(versionArray[x], 10);
            if (currentVersionOctet >= 0) {
                if (incomingVersion[x] > currentVersionOctet) {
                    return true;
                } else if (incomingVersion[x] < currentVersionOctet) {
                    return false;
                }
            }
        }

        return false;
    },

    openExternalBrowser: function(url) {
        if (this.launcher != null) {
            this.launcher.shellOpen(url);
        }
    },
    openCompletionPage: function() {
        this.openExternalBrowser(Adobe.getCompletionUrl());
    },

    addActionList: function(actionListUrl) {
        var attempt = 0, retrieveScript, self, id, httpDownload, hexString = "", completeActionList = null, actionListProgress, actionListComplete;

        
        actionListUrl += ((actionListUrl.indexOf("?") !== -1) ? "&" : "?") + "noCache=" + new Date().getTime();
        
        self = this;
        id = host.app.expandString("{SHA1:" + actionListUrl + "}");
        actionlist = null;
        
        rowAdd(id, "images/iconBlank.gif");
        rowSetTitle(id, Language["ActionList_Download"]);
        rowSetProgress(id, 0);
        rowSetMessage(id, "");

        if (this.actionListAdding === true) {
            rowSetMessage(id, Language["ActionList_Pending"]);
            setTimeout(function() { self.addActionList(actionListUrl); }, 250);
            return;
        }

        this.actionListAdding = true;

        if (host.app.authorizeUrl(actionListUrl) === false) {
            self.actionListAdding = false;
            rowSetType(id, "alert");
            rowSetMessage(id, Language["ActionList_AuthFailed"]);
            return;
        }
        
        actionListProgress = function(info) {
            if (info.percent > -1) {
                rowSetProgress(id, info.percent);
            }
        };
        actionListComplete = function(info) {
            if (info.successful == false) {
                if (info.download.getExitCode() == 407) {
                    self.actionListAdding = false;
                    askProxyCredentials(info, function() { info.retry(); }, function() { doCloseConfirm(); });
                    return;
                } else if (info.attempt <= 10) {
                    setTimeout(info.retry(), 250);
                    return;
                }
            } else {
                if (window.execScript) { 
                    window.execScript(info.content); 
                } else {
                    setTimeout(info.content, 0);
                }
                if ((typeof actionlist != 'undefined') && (actionlist != null)) {
                    completeActionList = actionlist;
                    self.actionListAdding = false;
                    rowRemove(id);
                    if (completeActionList.hasOwnProperty("config") === true) {
                        if (completeActionList.config.hasOwnProperty("banner") === true) {
                            setOpenXBanner(completeActionList.config.banner.url, completeActionList.config.banner.width, completeActionList.config.banner.height);
                        }
                    }
                    self.mainActionList = new ActionActionList(null, completeActionList.items);
                    self.mainActionList.start();                    
                    dlmRunPing();                    
                    return;
                }
            }
            self.actionListAdding = false;            
            rowSetType(id, "alert");
            rowSetMessage(id, Language["ActionList_Error"]);
            confirm(Language["ActionList_ErrorHeader"], Language["ActionList_ErrorMessage"], function() { doCloseConfirm(); }, null);                
        };
        host.downloadContent(actionListUrl, actionListProgress, actionListComplete);
    }
};

var Adobe = new _Adobe();
