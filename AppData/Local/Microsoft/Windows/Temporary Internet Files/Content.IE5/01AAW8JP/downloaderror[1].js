
function DownloadError(){this.NONE=0;this.UNKNOWN=1;this.INVALIDMETAFILE=2;this.ALREADYDOWNLOADING=3;this.NOTENOUGHSPACE=4;this.UNACCEPTABLESOURCE=5;this.INVALIDSOURCE=6;this.CONFIGPARSEFAILED=7;this.CONFIGDOWNLOADFAILED=8;this.CONFIGUNZIPFAILED=9;this.DOWNLOADFAILED=10;this.METAFILEDOWNLOADFAILED=11;this.METAFILEUNZIPFAILED=12;this.USERABORT=13;}
DownloadError.prototype.nameFromId=function(id){var nameMap=["None","Unknown","InvalidMetafile","AlreadyDownloading","NotEnoughSpace","UnacceptableSource","InvalidSource","ConfigParseFailed","ConfigDownloadFailed","ConfigUnzipFailed","DownloadFailed","MetafileDownloadFailed","MetafileUnzipFailed","UserAbort"];return nameMap[id];};var downloadError=new DownloadError();