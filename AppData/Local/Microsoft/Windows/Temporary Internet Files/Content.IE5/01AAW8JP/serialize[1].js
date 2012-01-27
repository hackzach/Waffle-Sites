
function saveObjectToFile(obj,fileName){var isOk,fileLocation,jsonString,textFileWriter,current,maxChunk,len,writeString,bytesWritten;fileLocation=host.app.expandString("{LocalStorage}")+fileName;jsonString=JSON.stringify(obj);maxChunk=2048;len=jsonString.length;current=0;textFileWriter=createTextFileWriter();isOk=false;if(textFileWriter.open(fileLocation)===true){isOk=true;while(isOk===true&&current<len){writeString=jsonString.substr(current,maxChunk);bytesWritten=textFileWriter.write(writeString);if(bytesWritten<=0){isOk=false;break;}
current+=bytesWritten;}
textFileWriter.close();}
textFileWriter.release();return isOk;}
function loadObjectFromFile(fileName,onLoadComplete){var fileLocation,jsonString,textFileReader,obj;fileLocation=host.app.expandString("{LocalStorage}")+fileName;textFileReader=createTextFileReader();textFileReader.setFileName(fileLocation);jsonString="";textFileReader.onRead=function(info){jsonString+=info.text;};textFileReader.onComplete=function(info){obj=null;if(info.successful===true){try{obj=JSON.parse(jsonString);}catch(err){obj=null;}}
if(onLoadComplete!==null){onLoadComplete({"loadedObject":obj});}
this.release();};textFileReader.start();}