Start from version 1.1, GSVNCJ add parameters to allow change words, colors and messages.

The parameter name is case sensitive. Color format is ###### (RGB), value is hex, such as DD88FF. 

Here is full parameter list,

Name 			Default value

autoStart		"false" 
password		vncpassword
port			5900

titleLabel		Java VNC Server
portLabel		Port
passwordLabel		Password
startLabel		Start
stopLabel		Stop

mainBackground		system default
mainForeground  	system default
buttonBackground	system default
buttonForeground  	system default
msgBackground		system default
msgForeground  		system default

MSG1			Starting authenication: {0}
MSG2			authentication successfull: {0}
MSG3			authentication failed: {0}
MSG4			Can''t open socket: {0}
MSG5			Got an exception: {0}
MSG6			Start listening on {0}
MSG7			Client from: {0}
MSG8			shutting down server VNCServer for: {0} 
MSG9			Client closed: {0}

You can check samples,test_en.html for English and test_zh.html for Chinese 