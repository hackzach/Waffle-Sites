var hidden = true;
var normal = true;
var create = false;
(function(a){var az,aC,O,V,v,ad,ac,ab,o,aa,c,ai,s,ag,am,t,l,D,n,U,A,ay,af,Y,aq,g,at,Z,y,h,S,p,an,M,H,b,ae,ap,d,ao,aj,aA,I,B,av,L,k,N,f,W,C,aw,e,T,au,m,ah,R,u;if((typeof a.RPXNOW!=="undefined")&&a.RPXNOW){return}t={};t.RPX_URL_PREFIX="https://rpxnow.com/";ab=a.document;V=typeof a.ActiveXObject!=="undefined";s=ab.compatMode!=="CSS1Compat";o=(function(){var aE=a.navigator&&a.navigator.userAgent,aD=aE.match(/MSIE\s([^;]*)/),aF;if(aD&&aD[1]){aF=0;return(6===parseFloat(aD[1].replace(/\./g,function(){return(aF++===1)?"":"."})))}else{return false}}());ai=(function(){var aE="",aD=new RegExp("iphone|ipod|ipad|android|palm|blackberry|windows ce");try{aE=a.navigator.userAgent.toLowerCase()}catch(aF){}return aE.search(aD)!==-1}());D=ab.location.protocol==="https:";l=a.location.protocol.replace(/[:]$/,"");v=(D?"https://s3.amazonaws.com/static.rpxnow.com":"http://cdn.rpxnow.com");aa={bg_social:["rel/img/5d24af2656cb7d5bfc959225ed93f78e.png","rel/img/48225b514e12863809a27dbbd77e3bc9.gif"],bg_auth:["images/bg_auth.png/072e699dadea176ace38e1f39c8b1c6f.png","images/bg_auth.gif/59b67dc6128043d53a89808c2e08678a.gif"],lb_close:["rel/img/43f137c98b7a6562f6ad5f076fce376b.png","images/close_ie.png/6e03cf22aa59b4844d0b78df3bc6787d.png"],lb_corners:["images/corners.png/47464b01c238fc81a5a537859e37e930.png","images/corners.gif/a5384cf51db4d3e85f3c4f95c546a9c5.gif"],lb_border:["images/border.png/01c40882d59520662e8cebae63d73a2c.png","images/border.gif/a7f3bf49b8e1d17d66a870e5b7d3b2b9.gif"],auth_background:["images/background.png/ce2da388a4e0fa1ef809b2c4cc4d5139.png","images/background.png/ce2da388a4e0fa1ef809b2c4cc4d5139.png"]};A=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g");af=new RegExp('[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',"g");am=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];ag=new RegExp("(\\"+am.join("|\\")+")","g");O=new RegExp("^https?://([a-z0-9]([\\-a-z0-9]*[a-z0-9])?\\.)*[a-z0-9]([\\-a-z0-9]*[a-z0-9])?(:[0-9]+)?(/[^?#]*(\\?[^#]*)?)?$","i");aC=new RegExp("^https?://([a-z0-9]([\\-a-z0-9]*[a-z0-9])?\\.)*[a-z0-9]([\\-a-z0-9]*[a-z0-9])?(:[0-9]+)?(/[^?#]*(\\?[^#]*)?)?(#.*)?$","i");az=new RegExp("^/[^?#]*(\\?[^#]*)?$");at=function(){return s?ab.body:ab.documentElement};R=function(aD){return ab.createElement(aD)};p=function(aD){var aE=aa[aD][o?1:0];return v+"/"+aE};S=function(aD){return"url('"+p(aD)+"')"};y=function(aG,aD){var aE,aF=aG.style;for(aE in aD){if(Object.hasOwnProperty.call(aD,aE)){aF[aE]=aD[aE]}}};ah=null;H=function(){if(!ah){ah=R("div");ah.setAttribute("id","FB_HiddenContainer");y(ah,{position:"absolute",top:"-10000px",left:"-10000px",width:"0",height:"0"});ab.body.insertBefore(ah,ab.body.firstChild)}return ah};b=function(aD,aE,aF){if(V){aE.attachEvent("on"+aD,aF)}else{aE.addEventListener(aD,aF,false)}};ae=function(aD,aE){b("click",aD,aE)};ap=function(aD,aE){return function(){aD[aE].apply(aD,arguments)}};d=function(aD){return(Object.prototype.toString.apply(aD)==="[object Array]")};ao=function(aD){return(typeof aD==="boolean")};aj=function(aD){return Object.prototype.toString.apply(aD)==="[object Function]"};aA=function(aD){return aD===null};I=function(aD){return typeof aD==="number"&&isFinite(aD)};B=function(aD){return(aD&&(typeof aD==="object"||aj(aD)))||false};av=function(aD){return typeof aD==="string"};L=function(aD){return typeof aD==="undefined"};k=function(aD,aF){for(var aE=0;aE<aD.length;aE++){if(aD[aE]===aF){return aE}}return -1};N=function(aD,aF){for(var aE=0;aE<aD.length;aE++){if(aD[aE]===aF){return true}}return false};f=function(aD){if(a.console){a.console.log(aD)}};W=function(){if(I(a.innerHeight)){return a.innerHeight}else{return at().clientHeight}};C=function(){if(I(a.innerWidth)){return a.innerWidth}else{return at().clientWidth}};aw=function(){return Math.max(at().scrollHeight,W())};e=function(){return Math.max(at().scrollWidth,C())};T=function(aG){var aF=new RegExp("([^=]+)=([^&]*)&?","g"),aE=null,aH=aG.match(/^[^?]*(?:\?([^#]*))?(?:$|#.*$)/)[1],aD={};while(!aA(aE=aF.exec(aH))){(aD[decodeURIComponent(aE[1])]=decodeURIComponent(aE[2]))}return aD};au=function(aD){return aD.replace(ag,"\\$1")};var F=function(aL,aJ){var aG,aF,aE,aI,aD,aM,aN,aK,aH;aN={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};aK=aJ[aL];aD=function(aO){af.lastIndex=0;return af.test(aO)?'"'+aO.replace(af,function(aP){aH=aN[aP];return typeof aH==="string"?aH:"\\u"+("0000"+aP.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+aO+'"'};switch(typeof aK){case"string":return aD(aK);case"number":return isFinite(aK)?String(aK):"null";case"boolean":case"null":return String(aK);case"object":if(!aK){return"null"}aI=[];if(Object.prototype.toString.apply(aK)==="[object Array]"){aE=aK.length;for(aG=0;aG<aE;aG+=1){aI[aG]=F(aG,aK)||"null"}aM=aI.length===0?"[]":"["+aI.join(",")+"]";return aM}for(aF in aK){if(Object.hasOwnProperty.call(aK,aF)){aM=F(aF,aK);if(aM){aI.push(aD(aF)+":"+aM)}}}aM=aI.length===0?"{}":"{"+aI.join(",")+"}";return aM}throw new Error("What happened?.")},x=function(aD){return F("",{"":aD})},G=(function(){var aG,aE,aD={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},aP,aN=function(aQ){throw {name:"SyntaxError",message:aQ,at:aG,text:aP}},aJ=function(aQ){if(aQ&&aQ!==aE){aN("Expected '"+aQ+"' instead of '"+aE+"'")}aE=aP.charAt(aG);aG+=1;return aE},aI=function(){var aR,aQ="";if(aE==="-"){aQ="-";aJ("-")}while(aE>="0"&&aE<="9"){aQ+=aE;aJ()}if(aE==="."){aQ+=".";while(aJ()&&aE>="0"&&aE<="9"){aQ+=aE}}if(aE==="e"||aE==="E"){aQ+=aE;aJ();if(aE==="-"||aE==="+"){aQ+=aE;aJ()}while(aE>="0"&&aE<="9"){aQ+=aE;aJ()}}aR=+aQ;if(isNaN(aR)){aN("Bad number")}else{return aR}},aK=function(){var aT,aS,aR="",aQ;if(aE==='"'){while(aJ()){if(aE==='"'){aJ();return aR}else{if(aE==="\\"){aJ();if(aE==="u"){aQ=0;for(aS=0;aS<4;aS+=1){aT=parseInt(aJ(),16);if(!isFinite(aT)){break}aQ=aQ*16+aT}aR+=String.fromCharCode(aQ)}else{if(typeof aD[aE]==="string"){aR+=aD[aE]}else{break}}}else{aR+=aE}}}}aN("Bad string")},aM=function(){while(aE&&aE<=" "){aJ()}},aF=function(){switch(aE){case"t":aJ("t");aJ("r");aJ("u");aJ("e");return true;case"f":aJ("f");aJ("a");aJ("l");aJ("s");aJ("e");return false;case"n":aJ("n");aJ("u");aJ("l");aJ("l");return null}aN("Unexpected '"+aE+"'")},aO,aL=function(){var aQ=[];if(aE==="["){aJ("[");aM();if(aE==="]"){aJ("]");return aQ}while(aE){aQ.push(aO());aM();if(aE==="]"){aJ("]");return aQ}aJ(",");aM()}}aN("Bad array")},aH=function(){var aR,aQ={};if(aE==="{"){aJ("{");aM();if(aE==="}"){aJ("}");return aQ}while(aE){aR=aK();aM();aJ(":");if(Object.hasOwnProperty.call(aQ,aR)){aN('Duplicate key "'+aR+'"')}aQ[aR]=aO();aM();if(aE==="}"){aJ("}");return aQ}aJ(",");aM()}}aN("Bad object")};aO=function(){aM();switch(aE){case"{":return aH();case"[":return aL();case'"':return aK();case"-":return aI();default:return aE>="0"&&aE<="9"?aI():aF()}};return function(aT,aR){var aQ;aP=aT;aG=0;aE=" ";aQ=aO();aM();if(aE){aN("Syntax error")}return typeof aR==="function"?(function aS(aX,aW){var aV,aU,aY=aX[aW];if(aY&&typeof aY==="object"){for(aV in aY){if(Object.hasOwnProperty.call(aY,aV)){aU=aS(aY,aV);if(aU!==undefined){aY[aV]=aU}else{delete aY[aV]}}}}return aR.call(aX,aW,aY)}({"":aQ},"")):aQ}}());var j={fetch:function(aD,aF){var aE=this._newRequest();aE.onreadystatechange=function(){if(aE.readyState!==4){return}switch(aE.status){case 200:case 304:aF.success(aE.responseText);return;case -1:return;default:break}aF.failure(aE.status,aE.statusText,aE.responseText)};aE.open("GET",aD,true);aE.send(null)},_newRequest:function(){if(L(a.XMLHttpRequest)){try{return new a.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(aG){}try{return new a.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(aF){}try{return new a.ActiveXObject("Msxml2.XMLHTTP")}catch(aE){}try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(aD){}throw new Error("This browser does not support XMLHttpRequest.")}else{return new a.XMLHttpRequest()}}};var ar={_cached:null,get:function(aD){return this._parsedCookies()[aD]},remove:function(aE,aD){aD=aD||{};aD.expires=new Date(0);return this.set(aE,"",aD)},set:function(aE,aF,aD){var aG=(encodeURIComponent(aE)+"="+encodeURIComponent(aF));if(B(aD)){if(aD.expires instanceof Date){aG+="; expires="+aD.expires.toGMTString()}if((aD.path)&&aD.path!==""){aG+="; path="+aD.path}if(av(aD.domain)&&aD.domain!==""){aG+="; domain="+aD.domain}if(aD.secure===true){aG+="; secure"}}ab.cookie=aG;return aG},_parsedCookies:function(){var aG,aM,aF,aH,aD,aL,aI,aE,aJ;if(aA(this._cached)){aG=this._cached={};aM=ab.cookie;if(/[^=]+=[^=;]?(?:; [^=]+=[^=]?)?/.test(aM)){aF=aM.split(/;\s/g);aD=null;aL=null;aI=null;aE=null;for(aH=0,aJ=aF.length;aH<aJ;aH++){aE=aF[aH];aI=aE.match(/([^=]+)=(.*)/i);if(aI instanceof Array){try{aD=decodeURIComponent(aI[1].replace(/\+/g," "));aL=decodeURIComponent(aI[2].replace(/\+/g," "));aG[aD]=aL}catch(aK){}}}}}return this._cached}};var z=function(aE){var aD;this.pairs=[];if(aE&&typeof aE==="object"){for(aD in aE){if(aE.hasOwnProperty(aD)){this.add(aD,aE[aD])}}}};z.prototype={add:function(aE,aF){var aD=encodeURIComponent;if(!L(aF)&&!aA(aF)){this.pairs.push([aD(aE),aD(aF)].join("="))}},toString:function(){return this.pairs.join("&")}};var K=function(aH,aI){var aG,aD,aF,aE;aG=this.formElem=R("form");aD=this.submitElem=R("input");aD.setAttribute("type","submit");aG.appendChild(aD);aF=H();aF.appendChild(aG);this.inputElems={};if(aH){this.setAction(aH)}if(aI&&aI instanceof Object){for(aE in aI){if(aI.hasOwnProperty(aE)){this.setHidden(aE,aI[aE])}}}};K.prototype={setAction:function(aD){this.formElem.setAttribute("action",aD)},setMethod:function(aD){this.formElem.setAttribute("method",aD)},setTarget:function(aD){this.formElem.setAttribute("target",aD)},setHidden:function(aD,aG){var aF,aE=this.inputElems;if(aA(aG)){this.deleteHidden(aD);return}aF=aE[aD];if(!aF){aF=aE[aD]=R("input");aF.setAttribute("type","hidden");aF.setAttribute("name",aD);this.formElem.appendChild(aF)}aF.setAttribute("value",aG)},deleteHidden:function(aD){var aF=this.inputElems,aE=aF[aD];if(aE){this.formElem.removeChild(aE);aF.slice(k(aF,aE),1)}},submit:function(){this.submitElem.click()},submitTo:function(aD){this.setTarget(aD.getName());this.submit()}};var ak=function(){var aG,aD,aE,aF;aG=R("div");aD=this.name=u();aE=H();aE.appendChild(aG);aF=o?t.RPX_URL_PREFIX+"blank.html":"";aG.innerHTML=('<iframe src="'+aF+'" name="'+aD+'" id="'+aD+'"></iframe>');this.iframeElem=ab.getElementById(aD);if(V){a.frames[aD].name=aD}};ak.prototype={getName:function(){return this.name},setSrc:function(aD){this.iframeElem.setAttribute("src",aD)},addOnloadListener:function(aE){var aD=this.iframeElem;if(V){aD.onreadystatechange=function(){if(aD.readyState==="complete"){aE()}}}else{aD.addEventListener("load",aE,false)}}};var r=function(aF,aD,aE){this.width=aF;this.height=aD;this.window=null;if(L(aE)){this.name=u()}else{this.name=aE}this.closeListeners=[]};r.prototype={show:function(aD){var aG,aF,aE;if(!this.window){aG=this._getCenteredCoords();this.window=a.open(aD||"",this.name,"width="+this.width+",height="+this.height+",status=1,location=1,resizable=yes,left="+aG[0]+",top="+aG[1]+",scrollbars=yes");aF=this;aE=a.setInterval(function(){if(aF.window.closed){a.clearInterval(aE);aF._onClose()}},500)}},setLocation:function(aD){if(this.window){this.window.location.href=aD}},setSize:function(aE,aD){this.width=aE;this.height=aD;if(this.window){this.window.outerWidth=aE;this.window.outerHeight=aD}},close:function(){if(this.window){this.window.close()}},addCloseListener:function(aD){this.closeListeners.push(aD)},removeCloseListener:function(aD){this.closeListeners.splice(k(this.closeListeners,aD),1)},getName:function(){return this.name},focus:function(){this.window.focus()},_getCenteredCoords:function(){var aG,aD,aF,aE;aG=null;aD=null;if(V){aG=a.event.screenX-(this.width/2)+100;aD=a.event.screenY-(this.height/2)-100}else{aF=[a.outerWidth,a.outerHeight];aE=[a.screenX,a.screenY];aG=aE[0]+Math.max(0,Math.floor((aF[0]-this.width)/2));aD=a.screenY+15}return[aG,aD]},_onClose:function(){var aD,aE;for(aD=0;aD<this.closeListeners.length;aD++){aE=this.closeListeners[aD];aE()}}};var P=function(aS,aQ,aP){var aT,aK,aG,aI,aM,aF,aW,aH,aV,aR,aE,aU,aD,aO,aJ,aN,aL;aS.style.position="relative";aL=R("div");aL.className="rpxnow_lightbox_trans";y(aL,{backgroundColor:"black",position:"absolute",top:0,left:0,width:"100%",height:"100%"});if(V){aL.style.filter="alpha(opacity=40)"}else{aD="0.4";y(aL,{opacity:aD,KhtmlOpacity:aD,MozOpacity:aD})}aF=R("img");aF.src=p("lb_close");aF.alt="close";y(aF,{position:"absolute",top:"-4px",right:"-4px",cursor:"pointer",width:"34px",height:"34px"});aW=this.containerElem=R("div");aW.className="rpxnow_lightbox_container";y(aW,{position:"absolute",display:"block",padding:"10px",width:(aQ+(o&&s?20:0))+"px",height:(aP+(o&&s?20:0))+"px"});aH={position:"absolute",width:"20px",height:"20px",backgroundImage:S("lb_corners")};aK={position:"absolute",backgroundImage:S("lb_border")};aJ=R("div");y(aJ,aH);y(aJ,{top:"0",left:"0"});aO=R("div");y(aO,aK);y(aO,{top:"0",left:"20px",width:(aQ-20)+"px",height:"20px"});aN=R("div");y(aN,aH);y(aN,{top:"0",right:"0",backgroundPosition:"top right"});aU=R("div");y(aU,aK);y(aU,{top:"20px",left:"0",width:(aQ+20)+"px",height:(aP-20)+"px"});aI=R("div");y(aI,aH);y(aI,{bottom:"0",left:"0",backgroundPosition:"0 -20px"});aG=R("div");y(aG,aK);y(aG,{bottom:"0",left:"20px",width:(aQ-20)+"px",height:"20px"});aM=R("div");y(aM,aH);y(aM,{bottom:"0",right:"0",backgroundPosition:"-20px -20px"});aV=[aJ,aO,aN,aI,aG,aM,aU,aS,aF];for(aR=0;aR<aV.length;aR++){aW.appendChild(aV[aR])}aE=this.lightboxElem=R("div");aE.className="rpxnow_lightbox";y(aE,{position:o?"absolute":"fixed",display:"none",top:0,left:0,zIndex:10000});aE.appendChild(aL);aE.appendChild(aW);aT=ab.body;if(aT.firstChild){aT.insertBefore(aE,aT.firstChild)}else{aT.appendChild(aE)}b("resize",a,ap(this,"resize"));b("click",aF,ap(this,"hide"));if(o){a.attachEvent("onscroll",ap(this,"scroll"))}this.closeListeners=[]};P.currentInstance=null;P.close=function(){P.currentInstance.hide()};P.prototype={show:function(){if(P.currentInstance===null){P.currentInstance=this}else{return false}this.containerElem.style.visibility="hidden";this.resize();if(o){this.scroll()}this.lightboxElem.style.display="block";return true},hide:function(){var aD,aE;this.lightboxElem.style.display="none";P.currentInstance=null;for(aD=0;aD<this.closeListeners.length;aD++){aE=this.closeListeners[aD];aE()}},addCloseListener:function(aD){this.closeListeners.push(aD)},removeCloseListener:function(aD){this.closeListeners.splice(k(this.closeListeners,aD),1)},isVisible:function(){return(this.lightboxElem.style.display==="block")},resize:function(){var aE,aG,aF,aD;aE=C();aG=W();y(this.lightboxElem,{width:aE+"px",height:aG+"px"});aF=this.containerElem;aD=function(){var aH=o&&s?0:10;y(aF,{top:(((aG-aF.offsetHeight)/2)+aH)+"px",left:(((aE-aF.offsetWidth)/2)+aH)+"px",visibility:"visible"})};if(aF.style.visibility==="hidden"){a.setTimeout(aD,0)}else{aD()}},scroll:function(){var aD=at();y(this.lightboxElem,{top:aD.scrollTop+"px",left:aD.scrollLeft+"px"})}};var ax,E,J,i,al,X,w,q,Q;w=T(a.location.href);q=(w.flags||"").split(",");Q=k(q,"stay_in_window")>-1;al=function(aE){var aD=document.createElement("a");aD.href="http://"+aE+"/";return aD.hostname};ax=function(aD,aE,aF){this.name=aD;this.popupWidth=aE;this.popupHeight=aF;this.base_params={}};ax.prototype={_start:function(aE,aD,aL,aF){var aM,aK,aI,aG,aJ,aH;if(!aE){m.setLastLoginTab(this.providerName())}aH=new z(this.base_params);aH.add("flags",w.flags);aH.add("language_preference",w.language_preference);aH.add("openid_proxy_url",w.openid_proxy_url);aH.add("token_url",aD);aH.add("bp_channel",w.bp_channel);aH.add("capture_domain",w.capture_domain);if(!aE){aH.add("display","popup")}if(aF){for(aJ in aF){if(Object.hasOwnProperty.call(aF,aJ)){aH.add(aJ,aF[aJ])}}}aK=null;aM=null;if(!ai||Q){aH.add("xdReceiver",t.config.xdReceiver);aH.add("callback",Z(function(aN){if(!aA(aK)){a.clearInterval(aM);aK.close()}aL(aN)}))}aI=this.startUrl()+"?"+aH.toString();if(aE){aG=new ak();aG.setSrc(aI)}else{if(ai&&!Q){a.top.location.href=aI}else{aK=new r(this.popupWidth,this.popupHeight,this.name);aK.show(aI);aM=a.setInterval(function(){if(aK.window.closed){a.clearInterval(aM);aL({stat:"fail",err:{code:-1}})}},1000)}}},startUrl:function(){return t.config.appUrlPrefix+this.name+"/start"},providerName:function(){return this.name}};X=function(aD){return function(aE){if(aE.stat==="ok"){if(L(aD.success)){a.setTimeout(function(){if(Q){a.location.href=aE.redirectUrl}else{a.top.location.href=aE.redirectUrl}},1)}else{aD.success(aE.redirectUrl)}}else{if(L(aD.error)){aD(aE.err)}else{aD.error(aE.err)}}}};i=function(aD,aE,aG,aI,aF,aH){ax.call(this,"openid",aF,aH);this.prefix=aE;this.suffix=aG;this.isSubdomain=aI;this._immediate={};this._providerName=aD};aq=i.prototype=new ax();aq.providerName=function(){return this._providerName};aq.immediate=function(aG){var aE,aD,aF;if(V){return}aE=m.getLastSuccessful();if(aE.providerName===this.providerName()){aF=this._inputToUrl(aE.userInput);aD=this;this._start(true,aG,function(aH){if(aH.stat==="ok"){aD._immediate.input=aE.userInput;aD._immediate.url=aH.redirectUrl}},{openid_identifier:aF,immediate:true})}};aq.start=function(aE,aI,aH,aG){if(!aA(this._immediate.url)&&aE===this._immediate.input){if(Q){a.location.href=this._immediate.url}else{a.top.location.href=this._immediate.url}return}m.setLastUserInput(aE);var aF=this._inputToUrl(aE);var aD=X(aH);if(aA(aG)||L(aG)){aG={}}aG.openid_identifier=aF;this._start(false,aI,aD,aG)};aq._inputToUrl=function(aD){var aG,aE,aF;if(this.prefix.length>0||this.suffix.length>0){if(this.isSubdomain){aD=aD.toLowerCase();aG=aD.split(".");for(aF=0;aF<aG.length;aF++){aE=aG[aF];aE=aE.replace(/[\x00-\x2C\x2E\x2F\x3A-\x60\x7B-\x7F]/g,"");aG[aF]=aE.replace(/(^-|-$)/g,"")}aD=al(aG.join("."))}else{aD=aD.replace(/^\s+|\s+$/g,"");aD=encodeURI(aD);aD=aD.replace("?","%3F").replace("#","%23")}}return this.prefix+aD+this.suffix};J=function(aD,aG,aE,aF){ax.call(this,"openid",aE,aF);this._providerName=aD;this.identifierSelectUrl=aG;this.immediateUrl=null};g=J.prototype=new ax();g.providerName=function(){return this._providerName};g.immediate=function(aG){if(V){return}var aF=m.getLastSuccessful();if(aF.providerName===this.providerName()){var aD=ar.get(this.providerName()+"_identifier");if(aD){var aE=this;this._start(true,aG,function(aH){if(aH.stat==="ok"){aE.immediateUrl=aH.redirectUrl}},{openid_identifier:aD,immediate:true})}}};g.start=function(aH,aG,aF){if(!aA(this.immediateUrl)){if(Q){a.location.href=this.immediateUrl}else{a.top.location.href=this.immediateUrl}return}var aE=ar.get(this.providerName()+"_identifier");if(!aE){aE=this.identifierSelectUrl}if(aA(aF)||L(aF)){aF={}}aF.openid_identifier=aE;var aD=X(aG);this._start(false,aH,aD,aF)};g.startFresh=function(aG,aF,aE){var aD=X(aF);this._start(false,aG,aD,{openid_identifier:this.identifierSelectUrl,force_reauth:aE})};E=function(aE,aF,aD){ax.call(this,aE,aF,aD)};U=E.prototype=new ax();U.start=function(aG,aF,aE){var aD=X(aF);this._start(false,aG,aD,aE)};U.startFresh=function(aH,aG,aE,aF){var aD=X(aG);if(aA(aF)||L(aF)){aF={force_reauth:aE}}else{aF.force_reauth=aE}this._start(false,aH,aD,aF)};m={setLastLoginTab:function(aD){var aE={expires:new Date(),path:"/"};aE.expires.setDate(aE.expires.getDate()+3650);ar.set("login_tab",aD,aE)},setLastUserInput:function(aD){var aE={expires:new Date(),path:"/"};aE.expires.setDate(aE.expires.getDate()+3650);ar.set("user_input",aD,aE)},getLastSuccessful:function(){var aD={providerName:ar.get("expected_tab"),userInput:ar.get("expected_user_input"),userName:null};var aF=ar.get("welcome_info");if(!aA(aF)){try{var aE=G(aF);if(aE[0]==="welcome_user"){aD.userName=aE[1].name}}catch(aG){}}return aD}};t.Auth={CustomProvider:E,OpenID2Provider:J,OpenID1Provider:i,CookieUserStateStore:m,providers:{aol:new i("aol","http://openid.aol.com/","",false,514,550),blogger:new i("blogger","","",false,800,600),livejournal:new i("livejournal","http://",".livejournal.com/",true,800,600),netlog:new i("netlog","http://netlog.com/","",false,800,600),openid:new i("openid","","",false,800,600),wordpress:new i("wordpress","http://",".wordpress.com/",true,800,600),flickr:new J("flickr","https://me.yahoo.com/",500,500),google:new J("google","https://www.google.com/accounts/o8/id",450,500),hyves:new J("hyves","http://hyves.nl/",800,600),myopenid:new J("myopenid","http://myopenid.com/",800,600),paypal:new J("paypal","https://www.paypal.com/webapps/auth/server",800,600),verisign:new J("verisign","http://pip.verisignlabs.com/",800,600),yahoo:new J("yahoo","https://me.yahoo.com/",500,500),facebook:new E("facebook",500,500),live_id:new E("liveid",900,600),linkedin:new E("linkedin",750,550),myspace:new E("myspace",800,500),twitter:new E("twitter",800,500),salesforce:new E("salesforce",800,500),foursquare:new E("foursquare",950,550),vzn:new E("vzn",600,450),orkut:new E("orkut",800,600),mixi:new E("mixi",950,550)}};t.Util={LightBox:P,PopupWindow:r,QueryBuilder:z,addListener:b,addClickListener:ae,bind:ap,indexOf:k,parseQueryString:T};t._xdCallbacks=[];Z=function(aF){var aD,aE;aD=t._xdCallbacks.length;aE="RPXNOW._xdCallbacks["+aD+"]";t._xdCallbacks.push(function(aI){var aG,aH;aG=k(t._xdCallbacks,this);t._xdCallbacks[aG]=null;aH=G(aI);aF(aH)});return aD};M=function(aH,aD,aK){var aI,aJ,aF,aE,aG;aI=Z(aK);aG=t.config.appUrlPrefix.replace(/^https?/,l);aJ=aG+"jsapi/v3/"+aH;aF=new K(aJ,aD);aF.setHidden("xdReceiver",t.config.xdReceiver);aF.setHidden("callback",aI);aE=new ak();aF.submitTo(aE)};ay=function(aH,aF,aG,aE,aD){aH.innerHTML=('<iframe src="'+(o?t.RPX_URL_PREFIX+"blank.html":"")+'" name="'+aF+'" id="'+aF+'" style="width: '+aG+"px; height: "+aE+'px; background: transparent; position: absolute; top: 0; left: 0; visibility: hidden; display: none;" scrolling="no" frameBorder="0" allowTransparency="true"></iframe>');y(aH,{backgroundColor:"transparent",backgroundImage:S(aD),backgroundRepeat:"no-repeat",backgroundPosition:"top left",fontSize:"17px",textAlign:"center",width:aG+"px",height:aE+"px",overflow:"hidden",fontFamily:"'lucida grande', Helvetica, Verdana, sans-serif"})};h=function(aD,aE){if(V){aD.onreadystatechange=function(){if(aD.readyState==="complete"){aE.style.visibility="hidden";aD.style.visibility="visible";a.setTimeout(function(){aD.style.display="block"},1500)}}}else{aD.addEventListener("load",function(){aD.style.display="block";a.setTimeout(function(){aE.style.visibility="hidden";aD.style.visibility="visible"},1)},false)}};var aB=t.Social={publishActivity:function(aG,aN){var aF;if(aA(aG.title)){aG.setTitle(ab.title)}var aE=u();var aD=R("div");var aH=new P(aD,423,280);ay(aD,aE,423,280,"bg_social");if(t.config.hasError()){var aL=R("div");y(aL,{lineHeight:"280px",padding:"0px 13px",whiteSpace:"nowrap"});aL.appendChild(ab.createTextNode("Error: "+t.config.error));aD.appendChild(aL)}else{aD.style.lineHeight="280px";aF=R("span");aF.appendChild(ab.createTextNode("Loading..."));aD.appendChild(aF)}var aI=ab.getElementById(aE);if(aj(aN)){aN={finishCallback:aN}}else{if(L(aN)){aN={}}else{if(!B(aN)){throw new Error("options must be an associative array")}else{if(!L(aN.finishCallback)&&!aj(aN.finishCallback)){throw new Error("finishCallback must be a function")}if(!L(aN.exclusionList)&&!d(aN.exclusionList)){throw new Error("exclusionList must be an array")}if(!L(aN.urlShortening)&&!ao(aN.urlShortening)){throw new Error("urlShortening must be a boolean")}if(!L(aN.postTruncation)&&!ao(aN.postTruncation)){throw new Error("postTruncation must be a boolean")}if(!L(aN.prependName)&&!ao(aN.prependName)){throw new Error("prependName must be a boolean")}if(!L(aN.primaryKey)){if(!av(aN.primaryKey)){throw new Error("primaryKey must be a string")}if(L(aN.timestamp)){throw new Error("timestamp required for primaryKey")}if(!I(aN.timestamp)){throw new Error("timestamp must be an integer")}if(L(aN.signature)){throw new Error("signature required for primaryKey")}if(!av(aN.signature)){throw new Error("signature must be a string")}}}}}var aK=null;if(!aj(aN.finishCallback)){aN.finishCallback=function(aO){}}var aJ=function(aQ){var aO=function(){aN.finishCallback(aQ.publishResults)};if(!aA(t.config.tokenCallbackUrl)&&aQ.authTokens.length>0){var aP=new K(t.config.tokenCallbackUrl);aP.setHidden("tokens",aQ.authTokens);var aR=new ak();aP.setTarget(aR.getName());aR.addOnloadListener(aO);aP.setMethod("POST");aP.submit()}else{a.setTimeout(aO,1)}};aK=Z(aJ);if(!t.config.hasError()){var aM=function(aR){var aQ,aP,aO;aQ=t.config.appUrlPrefix.replace(/^https?/,l);aP=aQ+"social/publish_activity";aO=new K(aP);aO.setMethod("POST");aO.setHidden("activity",x(aG));aO.setHidden("sessid",aR.sessid);aO.setHidden("appId",t.config.appId);aO.setHidden("language_preference",t.language_preference);if(!L(aN.exclusionList)){aO.setHidden("exclusionList",aN.exclusionList.join())}if(!L(aN.urlShortening)){aO.setHidden("urlShortening",aN.urlShortening)}if(!L(aN.postTruncation)){aO.setHidden("postTruncation",aN.postTruncation)}if(!L(aN.prependName)){aO.setHidden("prependActor",aN.prependName)}if(!L(aN.primaryKey)){aO.setHidden("primaryKey",aN.primaryKey);aO.setHidden("timestamp",aN.timestamp);aO.setHidden("signature",aN.signature)}aO.setHidden("xdReceiver",t.config.xdReceiver);aO.setHidden("callback",aK);aO.setHidden("loginCallbackUrl",t.config.loginCallbackUrl);aO.setTarget(aE);aO.submit();h(aI,aF)};if(t.config.noXdReceiver){aM({sessid:null})}else{M("popup_session",{},aM)}}aH.show();return false},clearSocialCookies:function(aE){if(!L(aE)){if(!aA(aE)&&!O.test(aE)){throw new Error("The dest must be an absolute URL")}var aD=new RegExp("^https?://"+au(ab.location.host)+"/");if(!aA(aE)&&!aD.test(aE)){throw new Error("dest host does not match the current page.")}}var aH=t.config.appUrlPrefix+"social/logout";var aG=new K(aH);aG.setHidden("appId",t.config.appId);var aF=new ak();aG.setTarget(aF.getName());if(!L(aE)){aF.addOnloadListener(function(){a.top.location.href=aE})}aG.submit();return false}};aB.Activity=function(aE,aF,aD){if(!av(aE)){throw new Error("a non-null share_display string is required.")}this.share_display=aE;if(!av(aF)){throw new Error("a non-null action string must be provided.")}this.action=aF;if(!av(aD)||!aC.test(aD)){throw new Error("a valid url must be provided.")}this.url=aD;this.provider_urls={};this.title=null;this.description=null;this.user_generated_content=null;this.properties={};this.action_links=[];this.media=null};aB.Activity.prototype={setTitle:function(aD){if(!av(aD)){throw new Error("title must be a string")}this.title=aD},setDescription:function(aD){if(!av(aD)){throw new Error("description must be a string")}this.description=aD},setUserGeneratedContent:function(aD){if(!av(aD)){throw new Error("user_generated_content must be a string")}this.user_generated_content=aD},addActionLink:function(aE,aD){if(!av(aD)||!aC.test(aD)){throw new Error("a valid url must be provided.")}this.action_links.push({text:aE,href:aD})},addTextProperty:function(aD,aE){if(!av(aD)||!av(aE)){throw new Error("The name and text must be strings")}this.properties[aD]=aE},addLinkProperty:function(aE,aF,aD){if(!av(aE)||!av(aF)){throw new Error("The name and text must be strings")}if(!av(aD)||!aC.test(aD)){throw new Error("a valid url must be provided.")}this.properties[aE]={text:aF,href:aD}},setMediaItem:function(aD){this.media=aD.toMediaArray()},addProviderUrl:function(aE,aD){if(!av(aE)){throw new Error("a valid provider must be provided.")}if(!av(aD)||!aC.test(aD)){throw new Error("a valid url must be provided.")}this.provider_urls[aE]=aD}};aB.Mp3MediaItem=function(aG,aF,aD,aE){if(!av(aG)||!O.test(aG)){throw new Error("The src must be a valid url")}this.type="mp3";this.src=aG;if(av(aF)){this.title=aF}if(av(aD)){this.artist=aD}if(av(aE)){this.album=aE}};aB.Mp3MediaItem.prototype={toMediaArray:function(){return[this]},setTitle:function(aD){this.title=aD},setArtist:function(aD){this.artist=aD},setAlbum:function(aD){this.album=aD}};aB.VideoMediaItem=function(aE,aD,aF,aG){if(!av(aE)||!O.test(aE)){throw new Error("video_src must be a valid url")}if(!av(aD)||!O.test(aD)){throw new Error("preview_img must be a valid url")}this.type="video";this.video_src=aE;this.preview_img=aD;if(av(aF)){if(!aC.test(aF)){throw new Error("video_link must be a valid url if provided")}}if(av(aG)){this.video_title=aG}};aB.VideoMediaItem.prototype={toMediaArray:function(){return[this]},setVideoLink:function(aD){if(!av(aD)||!aC.test(aD)){throw new Error("video_link must be a valid url")}},setVideoTitle:function(aD){this.video_title=aD}};aB.FlashMediaItem=function(aH,aI,aG,aE,aF,aD){if(!av(aH)||!O.test(aH)){throw new Error("swfsrc must be a valid url")}if(!av(aI)||!O.test(aI)){throw new Error("preview_img must be a valid url")}this.type="flash";this.swfsrc=aH;this.imgsrc=aI;if(av(aG)||I(aG)){this.width=""+aG}if(av(aE)||I(aE)){this.height=""+aE}if(av(aF)||I(aF)){this.expanded_width=""+aF}if(av(aD)||I(aD)){this.expanded_height=""+aD}};aB.FlashMediaItem.prototype={toMediaArray:function(){return[this]},setWidth:function(aD){if(!av(aD)&&!I(aD)){throw new Error("width must be a number")}this.width=""+aD},setHeight:function(aD){if(!av(aD)&&!I(aD)){throw new Error("height must be a number")}this.height=""+aD},setExpandedWidth:function(aD){if(!av(aD)&&!I(aD)){throw new Error("expanded_width must be a number")}this.expanded_width=""+aD},setExpandedHeight:function(aD){if(!av(aD)&&!I(aD)){throw new Error("expanded_height must be a number")}this.expanded_height=""+aD}};aB.ImageMediaCollection=function(){this.images=[]};aB.ImageMediaCollection.prototype={toMediaArray:function(){return this.images},addImage:function(aE,aD){if(this.images.length>=5){throw new Error("Cannot have more than 5 images.")}if(!av(aE)||!O.test(aE)){throw new Error("src must be a valid url")}if(!av(aD)||!aC.test(aD)){throw new Error("href must be a valid url")}this.images.push({type:"image",src:aE,href:aD})}};ac=function(){this.appId=null;this.xdReceiver=null;this.appUrlPrefix=null;this.error=null;this.tokenCallbackUrl=null;this.loginCallbackUrl=null};ac.prototype={initialize:function(aF,aE,aG,aD){this.appId=aF;this.xdReceiver=aE;this.tokenCallbackUrl=aG;this.loginCallbackUrl=aD},setError:function(aD){this.error=aD},hasError:function(){return !aA(this.error)}};if((L(t.config))||!t.config){t.config=new ac()}appUrlPrefixCallbacks=[];an=function(aD){if(aA(t.config.appUrlPrefix)){appUrlPrefixCallbacks.push(aD)}else{aD()}};t.loadAndRun=function(aD,aG){var aF=t.config.xdReceiver;var aE={success:function(aH){an(aG)},failure:function(){t.config.setError("unable to load "+aF);an(aG)}};if(N(aD,"Social")){j.fetch(aF,aE)}else{aE.success()}};t.init=function(aG,aM){var aP,aI,aN,aJ,aD,aL,aK,aH=null,aO=null,aE=null,aF=ab.location;if(B(aG)){aP=aG.appId;aI=aG.xdReceiver;aH=aG.rpxUrlPrefix;aO=aG.tokenCallbackUrl;aE=aG.loginCallbackUrl?aG.loginCallbackUrl:null}else{aP=aG;aI=aM}if(L(aI)){aI=aF.protocol+"//"+aF.host+"/rpx_xdcomm.html"}else{if(O.test(aI)){aN=new RegExp("^https?://"+au(aF.host)+"/");if(!aN.test(aI)){throw new Error("RPXNow:init: xdReceiver host does not match.")}}else{if(az.test(aI)){aI=aF.protocol+"//"+aF.host+aI}else{throw new Error("RPXNow:init: xdReceiver must be either an absolute URL or a relative URL path starting with /.")}}}if(aH){t.RPX_URL_PREFIX=aH}t.config.initialize(aP,aI,aO,aE);aK=t.RPX_URL_PREFIX.replace(/^https?/,l);aD=aK+"jsapi/v3/base_url";aD+="?appId="+aP;aD+="&xdReceiver="+a.escape(aI);aL=R("script");aL.src=aD;aL.type="text/javascript";ab.body.appendChild(aL)};t._base_cb=function(aF,aE){if(aF){t.config.appUrlPrefix=aE}else{t.config.setError(aE)}var aD=appUrlPrefixCallbacks.shift();while(aj(aD)){aD();aD=appUrlPrefixCallbacks.shift()}};t.loaded=false;t.show=function(){t.show_on_load=true};t.always_open=false;t.overlay=false;t.language_preference="en";t.default_provider=null;t.lso_submit_action=null;t.token_url=null;t.realm=null;t.domain=null;t.flags=null;t.bp_channel=null;t.email=null;t.openid_proxy_url=null;t.ssl=null;t._frame_count=(new Date()).getTime();u=function(){var aD=t._frame_count+=1;return"janrain_"+aD};ad=["token_url","language_preference","user_identifier","flags","bp_channel","default_provider","email","openid_proxy_url"];Y=function(aE,aG){var aL,aI,aJ,aF,aK,aD;if(!O.test(aE)){f(aE);f("Error - token_url must be an absolute URL with no fragment.")}aL=t.RPX_URL_PREFIX.split("/")[2];aI=null;if(t.rp_id){aI=t.rp_id}else{if(t.domain){aL=t.domain}else{if(t.realm){if(t.realm.match(/\./)){aL=t.realm}else{aL=t.realm+"."+aL}}else{if(aG){aL=aG}}}}aJ=new z();aJ.add("token_url",aE);aF=aA(t.ssl)?l:(t.ssl?"https":"http");aK=aF+"://"+aL+"/openid/embed?";if(aI){aJ.add("rp_id",aI)}for(aD=0;aD<ad.length;aD++){var aH=ad[aD];if(aH!=="token_url"&&t[aH]){aJ.add(aH,t[aH])}}return aK+aJ.toString()};c={bg:"Зареждане",cs:"Načítání",da:"Indlæser",de:"Lade",el:"loading",en:"Loading",es:"Cargando",et:"Laetakse",fi:"Ladataan",fr:"Chargement",hr:"Učitavanje",hu:"Betöltés",it:"Caricamento",ja:"読み込んでいます",ko:"로딩",nl:"Laden",no:"Laster",pl:"Loading",pt:"Carregando","pt-BR":"Carregando",ro:"Încărcare",ru:"Загрузка",sr:"Učitavam","sv-SE":"Laddar",uk:"Завантаження",vi:"Đang tải",zh:"载入中","zh-CHT":"載入中"};b("load",a,function(){var aE,aG,aH,aD,aF;aF=function(aJ){var aM,aL,aI,aK;aI=aJ.href;aK=aI.match(/https?:\/\/([^\/]+)/);if(!t.token_url){aM=T(aI).token_url}if(aK!==null){aL=aK[1]}aJ.onclick=function(){t.show(aM,aL);return false}};t.show=function(aL,aQ){var aM,aS,aK,aJ,aN,aO,aR,aP,aI;if(P.currentInstance!==null){return false}if(L(aL)){aL=t.token_url}aR=c[t.language_preference];if(!aR){aR=c.en}aM=373;aS=265;aK=u();aJ=R("div");aO=new P(aJ,aM,aS);ay(aJ,aK,aM,aS,"bg_auth");aJ.style.lineHeight=aS+"px";aN=R("span");aN.appendChild(ab.createTextNode(aR+"..."));aJ.appendChild(aN);aP=ab.getElementById(aK);aP.style.marginTop="12px";h(aP,aN);aO.show();aI=Y(aL,aQ);aP.contentWindow.location.replace(aI);if(!aL){f("Error - RPXNOW.token_url is undefined.")}return false};aG=ab.getElementsByTagName("a");aH=new RegExp("(^|\\s)rpxnow(\\s|$)");for(aE=0;aE<aG.length;aE++){aD=aG[aE];if(aH.test(aD.className)){aF(aD)}}if(t.show_on_load||t.always_open){t.show()}});a.RPXNOW=t}(this));
(function() {
    if (typeof window.janrain !== 'object') window.janrain = {};
    window.janrain.settings = {};
    
    janrain.settings.tokenUrl = 'http://'+window.location.hostname+'/login';

    function isReady() { janrain.ready = true; };
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", isReady, false);
    } else {
      window.attachEvent('onload', isReady);
    }

    var e = document.createElement('script');
    e.type = 'text/javascript';
    e.id = 'janrainAuthWidget';

    if (document.location.protocol === 'https:') {
      e.src = 'https://rpxnow.com/js/lib/rwave-chicago/engage.js';
    } else {
      e.src = 'http://widget-cdn.rpxnow.com/js/lib/rwave-chicago/engage.js';
    }

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
})();

  var rpxJsHost = (("https:" == document.location.protocol) ? "https://" : "http://static.");
  //document.write(unescape("%3Cscript src='" + rpxJsHost + "rpxnow.com/js/lib/rpx.js' type='text/javascript'%3E%3C/script%3E"));
  //document.write(unescape("%3Cscript src='http://" + window.location.hostname + "/js/rpx.js' type='text/javascript'%3E%3C/script%3E"));

  RPXNOW.overlay = true;
  RPXNOW.language_preference = 'en';


var xmlhttp;
function HTTPGet(url) <!-- url must be of same domain; drop basedomain to use relative paths -->
{
xmlhttp=null;
if (window.XMLHttpRequest)
  {// code for Firefox, Opera, IE7, etc.
  xmlhttp=new XMLHttpRequest();
  }
else if (window.ActiveXObject)
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
if (xmlhttp!=null)
  {
  xmlhttp.onreadystatechange=state_Change;
  xmlhttp.open("GET",url,true);
  xmlhttp.send(null);
  }
else
  {
  document.getElementById(Id).innerHTML='<p><span style="color:red;">Your browser does not support this framework.</span></p>';
  }
}

function state_Change()
{
if (xmlhttp.readyState==4)
  {// 4 = "loaded"
  if (xmlhttp.status==200)
    {// 200 = "OK"
    document.getElementById(Id).innerHTML=xmlhttp.responseText;
     if(xmlhttp.responseText!='') {
window.scrollBy(0,50);
}
    }
  else
    {
    document.getElementById(Id).innerHTML='<p><span style="color:red;">Problem retrieving data</span></p>';
    }
  }
}

var xmlHttp=null;

function query(str)
{
if (str.length==0)
  { 
  document.getElementById("keyListener").innerHTML="";
  return;
  }
try
  {// Firefox, Opera 8.0+, Safari, IE7
  xmlHttp=new XMLHttpRequest();
  }
catch(e)
  {// Old IE
  try
    {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  catch(e)
    {
    return;  
    }
  }

var url="search?ui&type=name&query=" + str;
xmlHttp.open("GET",url,false);
xmlHttp.send(null);
document.getElementById("txtHint").innerHTML=xmlHttp.responseText;
}

function getmsg(tid,fid) {
	HTTPGet('msg_queue.php?get=to&fid='+fid);
	HTTPGet('msg_queue.php?get=from&fid='+fid);
	var m=setTimeout("getmsg("+tid+","+fid+")",400)
}

function sendmsg(id,msg) {
	HTTPGet('msg_queue.php?send&tid='+id+'&msg='+msg);
	document.im.box.value='';
	return false;
}

function getallmsg() {
	toggleIM('msg_queue.php?getall');
	if(document.getElementById("toggleIM").innerHTML!='' && open!=document.getElementById("toggleIM").innerHTML) {
		popup(document.getElementById("toggleIM").innerHTML);
		document.getElementById("toggleIM").innerHTML='';
	}
	var a=setTimeout("getallmsg()",400);
}

function playlist(id) {

eval("page" + id + " = window.open('player.php?pid='+id, 'Chat', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=360,height=320');");
}

function songid(id) {

eval("page" + id + " = window.open('player.php?sid='+id, 'Chat', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=360,height=320');");
}
//<input type="text" id="txt1" onkeyup="query(this.value)">
//<div id="toggleIM"></div />
//<div id="keyListener"></div />
//<iframe id="new_frame"></iframe />

function bgcolor(color) {
document.create.bgcolor.value=color;
document.getElementById('curcolor').style.backgroundColor=color;
}

function fontcolor(color) {
document.create.fontcolor.value=color;
document.getElementById('curcolor').style.color=color;
}

function advanced() {
	if(hidden == false) {
		document.getElementById('bg_color').type='hidden';
		document.getElementById('font_color').type='hidden';
		hidden = true;
	}
	else {
		document.getElementById('bg_color').type='text';
		document.getElementById('font_color').type='text';
		hidden = false;
	}
}

function uiConfirm(Url, File) {
  if (confirm("Are you sure you want to delete "+File+"?")) {
    document.location = Url;
  }
}

function popup(url,title,width,height) {
window.open(url, title, 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width='+width+',height='+height);
}

            function removeTinyMCE(Id) {
		if(create) {
			tinyMCE_init();
			document.getElementById('MCE_mode').innerHTML='HTML Mode';
			document.getElementById('MCE_save').type='hidden';
		 	create = false;
		}
		else {
                	tinyMCE.execCommand('mceFocus', false, Id);                    
    			tinyMCE.execCommand('mceRemoveControl', false, Id);
			document.getElementById('MCE_mode').innerHTML='Graphical Mode';
			document.getElementById('MCE_save').type='submit';
			create = true;
		}
            }
/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;function FileProgress(file, targetID) {
	this.fileProgressID = file.id;

	this.opacity = 100;
	this.height = 0;
	

	this.fileProgressWrapper = document.getElementById(this.fileProgressID);
	if (!this.fileProgressWrapper) {
		this.fileProgressWrapper = document.createElement("div");
		this.fileProgressWrapper.className = "progressWrapper";
		this.fileProgressWrapper.id = this.fileProgressID;

		this.fileProgressElement = document.createElement("div");
		this.fileProgressElement.className = "progressContainer";

		var progressCancel = document.createElement("a");
		progressCancel.className = "progressCancel";
		progressCancel.href = "#";
		progressCancel.style.visibility = "hidden";
		progressCancel.appendChild(document.createTextNode(" "));

		var progressText = document.createElement("div");
		progressText.className = "progressName";
		progressText.appendChild(document.createTextNode(file.name));

		var progressBar = document.createElement("div");
		progressBar.className = "progressBarInProgress";

		var progressStatus = document.createElement("div");
		progressStatus.className = "progressBarStatus";
		progressStatus.innerHTML = "&nbsp;";

		this.fileProgressElement.appendChild(progressCancel);
		this.fileProgressElement.appendChild(progressText);
		this.fileProgressElement.appendChild(progressStatus);
		this.fileProgressElement.appendChild(progressBar);

		this.fileProgressWrapper.appendChild(this.fileProgressElement);

		document.getElementById(targetID).appendChild(this.fileProgressWrapper);
	} else {
		this.fileProgressElement = this.fileProgressWrapper.firstChild;
		this.reset();
	}

	this.height = this.fileProgressWrapper.offsetHeight;
	this.setTimer(null);


}

FileProgress.prototype.setTimer = function (timer) {
	this.fileProgressElement["FP_TIMER"] = timer;
};
FileProgress.prototype.getTimer = function (timer) {
	return this.fileProgressElement["FP_TIMER"] || null;
};

FileProgress.prototype.reset = function () {
	this.fileProgressElement.className = "progressContainer";

	this.fileProgressElement.childNodes[2].innerHTML = "&nbsp;";
	this.fileProgressElement.childNodes[2].className = "progressBarStatus";
	
	this.fileProgressElement.childNodes[3].className = "progressBarInProgress";
	this.fileProgressElement.childNodes[3].style.width = "0%";
	
	this.appear();	
};

FileProgress.prototype.setProgress = function (percentage) {
	this.fileProgressElement.className = "progressContainer green";
	this.fileProgressElement.childNodes[3].className = "progressBarInProgress";
	this.fileProgressElement.childNodes[3].style.width = percentage + "%";

	this.appear();	
};
FileProgress.prototype.setComplete = function () {
	this.fileProgressElement.className = "progressContainer blue";
	this.fileProgressElement.childNodes[3].className = "progressBarComplete";
	this.fileProgressElement.childNodes[3].style.width = "";

	var oSelf = this;
	this.setTimer(setTimeout(function () {
		oSelf.disappear();
	}, 10000));
};
FileProgress.prototype.setError = function () {
	this.fileProgressElement.className = "progressContainer red";
	this.fileProgressElement.childNodes[3].className = "progressBarError";
	this.fileProgressElement.childNodes[3].style.width = "";

	var oSelf = this;
	this.setTimer(setTimeout(function () {
		oSelf.disappear();
	}, 5000));
};
FileProgress.prototype.setCancelled = function () {
	this.fileProgressElement.className = "progressContainer";
	this.fileProgressElement.childNodes[3].className = "progressBarError";
	this.fileProgressElement.childNodes[3].style.width = "";

	var oSelf = this;
	this.setTimer(setTimeout(function () {
		oSelf.disappear();
	}, 2000));
};
FileProgress.prototype.setStatus = function (status) {
	this.fileProgressElement.childNodes[2].innerHTML = status;
};

// Show/Hide the cancel button
FileProgress.prototype.toggleCancel = function (show, swfUploadInstance) {
	this.fileProgressElement.childNodes[0].style.visibility = show ? "visible" : "hidden";
	if (swfUploadInstance) {
		var fileID = this.fileProgressID;
		this.fileProgressElement.childNodes[0].onclick = function () {
			swfUploadInstance.cancelUpload(fileID);
			return false;
		};
	}
};

FileProgress.prototype.appear = function () {
	if (this.getTimer() !== null) {
		clearTimeout(this.getTimer());
		this.setTimer(null);
	}
	
	if (this.fileProgressWrapper.filters) {
		try {
			this.fileProgressWrapper.filters.item("DXImageTransform.Microsoft.Alpha").opacity = 100;
		} catch (e) {
			// If it is not set initially, the browser will throw an error.  This will set it if it is not set yet.
			this.fileProgressWrapper.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=100)";
		}
	} else {
		this.fileProgressWrapper.style.opacity = 1;
	}
		
	this.fileProgressWrapper.style.height = "";
	
	this.height = this.fileProgressWrapper.offsetHeight;
	this.opacity = 100;
	this.fileProgressWrapper.style.display = "";
	
};

// Fades out and clips away the FileProgress box.
FileProgress.prototype.disappear = function () {

	var reduceOpacityBy = 15;
	var reduceHeightBy = 4;
	var rate = 30;	// 15 fps

	if (this.opacity > 0) {
		this.opacity -= reduceOpacityBy;
		if (this.opacity < 0) {
			this.opacity = 0;
		}

		if (this.fileProgressWrapper.filters) {
			try {
				this.fileProgressWrapper.filters.item("DXImageTransform.Microsoft.Alpha").opacity = this.opacity;
			} catch (e) {
				// If it is not set initially, the browser will throw an error.  This will set it if it is not set yet.
				this.fileProgressWrapper.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + this.opacity + ")";
			}
		} else {
			this.fileProgressWrapper.style.opacity = this.opacity / 100;
		}
	}

	if (this.height > 0) {
		this.height -= reduceHeightBy;
		if (this.height < 0) {
			this.height = 0;
		}

		this.fileProgressWrapper.style.height = this.height + "px";
	}

	if (this.height > 0 || this.opacity > 0) {
		var oSelf = this;
		this.setTimer(setTimeout(function () {
			oSelf.disappear();
		}, rate));
	} else {
		this.fileProgressWrapper.style.display = "none";
		this.setTimer(null);
	}
};/**
 * SWFUpload: http://www.swfupload.org, http://swfupload.googlecode.com
 *
 * mmSWFUpload 1.0: Flash upload dialog - http://profandesign.se/swfupload/,  http://www.vinterwebb.se/
 *
 * SWFUpload is (c) 2006-2007 Lars Huring, Olov Nilzén and Mammon Media and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * SWFUpload 2 is (c) 2007-2008 Jake Roberts and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
var SWFUpload;

if (SWFUpload == undefined) {
	SWFUpload = function (settings) {
		this.initSWFUpload(settings);
	};
}

SWFUpload.prototype.initSWFUpload = function (settings) {
	try {
		this.customSettings = {};	// A container where developers can place their own settings associated with this instance.
		this.settings = settings;
		this.eventQueue = [];
		this.movieName = "SWFUpload_" + SWFUpload.movieCount++;
		this.movieElement = null;


		// Setup global control tracking
		SWFUpload.instances[this.movieName] = this;

		// Load the settings.  Load the Flash movie.
		this.initSettings();
		this.loadFlash();
		this.displayDebugInfo();
	} catch (ex) {
		delete SWFUpload.instances[this.movieName];
		throw ex;
	}
};

/* *************** */
/* Static Members  */
/* *************** */
SWFUpload.instances = {};
SWFUpload.movieCount = 0;
SWFUpload.version = "2.2.0 2009-03-25";
SWFUpload.QUEUE_ERROR = {
	QUEUE_LIMIT_EXCEEDED	  		: -100,
	FILE_EXCEEDS_SIZE_LIMIT  		: -110,
	ZERO_BYTE_FILE			  		: -120,
	INVALID_FILETYPE		  		: -130
};
SWFUpload.UPLOAD_ERROR = {
	HTTP_ERROR				  		: -200,
	MISSING_UPLOAD_URL	      		: -210,
	IO_ERROR				  		: -220,
	SECURITY_ERROR			  		: -230,
	UPLOAD_LIMIT_EXCEEDED	  		: -240,
	UPLOAD_FAILED			  		: -250,
	SPECIFIED_FILE_ID_NOT_FOUND		: -260,
	FILE_VALIDATION_FAILED	  		: -270,
	FILE_CANCELLED			  		: -280,
	UPLOAD_STOPPED					: -290
};
SWFUpload.FILE_STATUS = {
	QUEUED		 : -1,
	IN_PROGRESS	 : -2,
	ERROR		 : -3,
	COMPLETE	 : -4,
	CANCELLED	 : -5
};
SWFUpload.BUTTON_ACTION = {
	SELECT_FILE  : -100,
	SELECT_FILES : -110,
	START_UPLOAD : -120
};
SWFUpload.CURSOR = {
	ARROW : -1,
	HAND : -2
};
SWFUpload.WINDOW_MODE = {
	WINDOW : "window",
	TRANSPARENT : "transparent",
	OPAQUE : "opaque"
};

// Private: takes a URL, determines if it is relative and converts to an absolute URL
// using the current site. Only processes the URL if it can, otherwise returns the URL untouched
SWFUpload.completeURL = function(url) {
	if (typeof(url) !== "string" || url.match(/^https?:\/\//i) || url.match(/^\//)) {
		return url;
	}
	
	var currentURL = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
	
	var indexSlash = window.location.pathname.lastIndexOf("/");
	if (indexSlash <= 0) {
		path = "/";
	} else {
		path = window.location.pathname.substr(0, indexSlash) + "/";
	}
	
	return /*currentURL +*/ path + url;
	
};


/* ******************** */
/* Instance Members  */
/* ******************** */

// Private: initSettings ensures that all the
// settings are set, getting a default value if one was not assigned.
SWFUpload.prototype.initSettings = function () {
	this.ensureDefault = function (settingName, defaultValue) {
		this.settings[settingName] = (this.settings[settingName] == undefined) ? defaultValue : this.settings[settingName];
	};
	
	// Upload backend settings
	this.ensureDefault("upload_url", "");
	this.ensureDefault("preserve_relative_urls", false);
	this.ensureDefault("file_post_name", "Filedata");
	this.ensureDefault("post_params", {});
	this.ensureDefault("use_query_string", false);
	this.ensureDefault("requeue_on_error", false);
	this.ensureDefault("http_success", []);
	this.ensureDefault("assume_success_timeout", 0);
	
	// File Settings
	this.ensureDefault("file_types", "*.*");
	this.ensureDefault("file_types_description", "All Files");
	this.ensureDefault("file_size_limit", 0);	// Default zero means "unlimited"
	this.ensureDefault("file_upload_limit", 0);
	this.ensureDefault("file_queue_limit", 0);

	// Flash Settings
	this.ensureDefault("flash_url", "swfupload.swf");
	this.ensureDefault("prevent_swf_caching", true);
	
	// Button Settings
	this.ensureDefault("button_image_url", "");
	this.ensureDefault("button_width", 1);
	this.ensureDefault("button_height", 1);
	this.ensureDefault("button_text", "");
	this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;");
	this.ensureDefault("button_text_top_padding", 0);
	this.ensureDefault("button_text_left_padding", 0);
	this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES);
	this.ensureDefault("button_disabled", false);
	this.ensureDefault("button_placeholder_id", "");
	this.ensureDefault("button_placeholder", null);
	this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW);
	this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW);
	
	// Debug Settings
	this.ensureDefault("debug", false);
	this.settings.debug_enabled = this.settings.debug;	// Here to maintain v2 API
	
	// Event Handlers
	this.settings.return_upload_start_handler = this.returnUploadStart;
	this.ensureDefault("swfupload_loaded_handler", null);
	this.ensureDefault("file_dialog_start_handler", null);
	this.ensureDefault("file_queued_handler", null);
	this.ensureDefault("file_queue_error_handler", null);
	this.ensureDefault("file_dialog_complete_handler", null);
	
	this.ensureDefault("upload_start_handler", null);
	this.ensureDefault("upload_progress_handler", null);
	this.ensureDefault("upload_error_handler", null);
	this.ensureDefault("upload_success_handler", null);
	this.ensureDefault("upload_complete_handler", null);
	
	this.ensureDefault("debug_handler", this.debugMessage);

	this.ensureDefault("custom_settings", {});

	// Other settings
	this.customSettings = this.settings.custom_settings;
	
	// Update the flash url if needed
	if (!!this.settings.prevent_swf_caching) {
		this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + new Date().getTime();
	}
	
	if (!this.settings.preserve_relative_urls) {
		//this.settings.flash_url = SWFUpload.completeURL(this.settings.flash_url);	// Don't need to do this one since flash doesn't look at it
		this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url);
		this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url);
	}
	
	delete this.ensureDefault;
};

// Private: loadFlash replaces the button_placeholder element with the flash movie.
SWFUpload.prototype.loadFlash = function () {
	var targetElement, tempParent;

	// Make sure an element with the ID we are going to use doesn't already exist
	if (document.getElementById(this.movieName) !== null) {
		throw "ID " + this.movieName + " is already in use. The Flash Object could not be added";
	}

	// Get the element where we will be placing the flash movie
	targetElement = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;

	if (targetElement == undefined) {
		throw "Could not find the placeholder element: " + this.settings.button_placeholder_id;
	}

	// Append the container and load the flash
	tempParent = document.createElement("div");
	tempParent.innerHTML = this.getFlashHTML();	// Using innerHTML is non-standard but the only sensible way to dynamically add Flash in IE (and maybe other browsers)
	targetElement.parentNode.replaceChild(tempParent.firstChild, targetElement);

	// Fix IE Flash/Form bug
	if (window[this.movieName] == undefined) {
		window[this.movieName] = this.getMovieElement();
	}
	
};

// Private: getFlashHTML generates the object tag needed to embed the flash in to the document
SWFUpload.prototype.getFlashHTML = function () {
	// Flash Satay object syntax: http://www.alistapart.com/articles/flashsatay
	return ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">',
				'<param name="wmode" value="', this.settings.button_window_mode, '" />',
				'<param name="movie" value="', this.settings.flash_url, '" />',
				'<param name="quality" value="high" />',
				'<param name="menu" value="false" />',
				'<param name="allowScriptAccess" value="always" />',
				'<param name="flashvars" value="' + this.getFlashVars() + '" />',
				'</object>'].join("");
};

// Private: getFlashVars builds the parameter string that will be passed
// to flash in the flashvars param.
SWFUpload.prototype.getFlashVars = function () {
	// Build a string from the post param object
	var paramString = this.buildParamString();
	var httpSuccessString = this.settings.http_success.join(",");
	
	// Build the parameter string
	return ["movieName=", encodeURIComponent(this.movieName),
			"&amp;uploadURL=", encodeURIComponent(this.settings.upload_url),
			"&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string),
			"&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error),
			"&amp;httpSuccess=", encodeURIComponent(httpSuccessString),
			"&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout),
			"&amp;params=", encodeURIComponent(paramString),
			"&amp;filePostName=", encodeURIComponent(this.settings.file_post_name),
			"&amp;fileTypes=", encodeURIComponent(this.settings.file_types),
			"&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description),
			"&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit),
			"&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit),
			"&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit),
			"&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled),
			"&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url),
			"&amp;buttonWidth=", encodeURIComponent(this.settings.button_width),
			"&amp;buttonHeight=", encodeURIComponent(this.settings.button_height),
			"&amp;buttonText=", encodeURIComponent(this.settings.button_text),
			"&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding),
			"&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding),
			"&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style),
			"&amp;buttonAction=", encodeURIComponent(this.settings.button_action),
			"&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled),
			"&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)
		].join("");
};

// Public: getMovieElement retrieves the DOM reference to the Flash element added by SWFUpload
// The element is cached after the first lookup
SWFUpload.prototype.getMovieElement = function () {
	if (this.movieElement == undefined) {
		this.movieElement = document.getElementById(this.movieName);
	}

	if (this.movieElement === null) {
		throw "Could not find Flash element";
	}
	
	return this.movieElement;
};

// Private: buildParamString takes the name/value pairs in the post_params setting object
// and joins them up in to a string formatted "name=value&amp;name=value"
SWFUpload.prototype.buildParamString = function () {
	var postParams = this.settings.post_params; 
	var paramStringPairs = [];

	if (typeof(postParams) === "object") {
		for (var name in postParams) {
			if (postParams.hasOwnProperty(name)) {
				paramStringPairs.push(encodeURIComponent(name.toString()) + "=" + encodeURIComponent(postParams[name].toString()));
			}
		}
	}

	return paramStringPairs.join("&amp;");
};

// Public: Used to remove a SWFUpload instance from the page. This method strives to remove
// all references to the SWF, and other objects so memory is properly freed.
// Returns true if everything was destroyed. Returns a false if a failure occurs leaving SWFUpload in an inconsistant state.
// Credits: Major improvements provided by steffen
SWFUpload.prototype.destroy = function () {
	try {
		// Make sure Flash is done before we try to remove it
		this.cancelUpload(null, false);
		

		// Remove the SWFUpload DOM nodes
		var movieElement = null;
		movieElement = this.getMovieElement();
		
		if (movieElement && typeof(movieElement.CallFunction) === "unknown") { // We only want to do this in IE
			// Loop through all the movie's properties and remove all function references (DOM/JS IE 6/7 memory leak workaround)
			for (var i in movieElement) {
				try {
					if (typeof(movieElement[i]) === "function") {
						movieElement[i] = null;
					}
				} catch (ex1) {}
			}

			// Remove the Movie Element from the page
			try {
				movieElement.parentNode.removeChild(movieElement);
			} catch (ex) {}
		}
		
		// Remove IE form fix reference
		window[this.movieName] = null;

		// Destroy other references
		SWFUpload.instances[this.movieName] = null;
		delete SWFUpload.instances[this.movieName];

		this.movieElement = null;
		this.settings = null;
		this.customSettings = null;
		this.eventQueue = null;
		this.movieName = null;
		
		
		return true;
	} catch (ex2) {
		return false;
	}
};


// Public: displayDebugInfo prints out settings and configuration
// information about this SWFUpload instance.
// This function (and any references to it) can be deleted when placing
// SWFUpload in production.
SWFUpload.prototype.displayDebugInfo = function () {
	this.debug(
		[
			"---SWFUpload Instance Info---\n",
			"Version: ", SWFUpload.version, "\n",
			"Movie Name: ", this.movieName, "\n",
			"Settings:\n",
			"\t", "upload_url:               ", this.settings.upload_url, "\n",
			"\t", "flash_url:                ", this.settings.flash_url, "\n",
			"\t", "use_query_string:         ", this.settings.use_query_string.toString(), "\n",
			"\t", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n",
			"\t", "http_success:             ", this.settings.http_success.join(", "), "\n",
			"\t", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n",
			"\t", "file_post_name:           ", this.settings.file_post_name, "\n",
			"\t", "post_params:              ", this.settings.post_params.toString(), "\n",
			"\t", "file_types:               ", this.settings.file_types, "\n",
			"\t", "file_types_description:   ", this.settings.file_types_description, "\n",
			"\t", "file_size_limit:          ", this.settings.file_size_limit, "\n",
			"\t", "file_upload_limit:        ", this.settings.file_upload_limit, "\n",
			"\t", "file_queue_limit:         ", this.settings.file_queue_limit, "\n",
			"\t", "debug:                    ", this.settings.debug.toString(), "\n",

			"\t", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n",

			"\t", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n",
			"\t", "button_placeholder:       ", (this.settings.button_placeholder ? "Set" : "Not Set"), "\n",
			"\t", "button_image_url:         ", this.settings.button_image_url.toString(), "\n",
			"\t", "button_width:             ", this.settings.button_width.toString(), "\n",
			"\t", "button_height:            ", this.settings.button_height.toString(), "\n",
			"\t", "button_text:              ", this.settings.button_text.toString(), "\n",
			"\t", "button_text_style:        ", this.settings.button_text_style.toString(), "\n",
			"\t", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n",
			"\t", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n",
			"\t", "button_action:            ", this.settings.button_action.toString(), "\n",
			"\t", "button_disabled:          ", this.settings.button_disabled.toString(), "\n",

			"\t", "custom_settings:          ", this.settings.custom_settings.toString(), "\n",
			"Event Handlers:\n",
			"\t", "swfupload_loaded_handler assigned:  ", (typeof this.settings.swfupload_loaded_handler === "function").toString(), "\n",
			"\t", "file_dialog_start_handler assigned: ", (typeof this.settings.file_dialog_start_handler === "function").toString(), "\n",
			"\t", "file_queued_handler assigned:       ", (typeof this.settings.file_queued_handler === "function").toString(), "\n",
			"\t", "file_queue_error_handler assigned:  ", (typeof this.settings.file_queue_error_handler === "function").toString(), "\n",
			"\t", "upload_start_handler assigned:      ", (typeof this.settings.upload_start_handler === "function").toString(), "\n",
			"\t", "upload_progress_handler assigned:   ", (typeof this.settings.upload_progress_handler === "function").toString(), "\n",
			"\t", "upload_error_handler assigned:      ", (typeof this.settings.upload_error_handler === "function").toString(), "\n",
			"\t", "upload_success_handler assigned:    ", (typeof this.settings.upload_success_handler === "function").toString(), "\n",
			"\t", "upload_complete_handler assigned:   ", (typeof this.settings.upload_complete_handler === "function").toString(), "\n",
			"\t", "debug_handler assigned:             ", (typeof this.settings.debug_handler === "function").toString(), "\n"
		].join("")
	);
};

/* Note: addSetting and getSetting are no longer used by SWFUpload but are included
	the maintain v2 API compatibility
*/
// Public: (Deprecated) addSetting adds a setting value. If the value given is undefined or null then the default_value is used.
SWFUpload.prototype.addSetting = function (name, value, default_value) {
    if (value == undefined) {
        return (this.settings[name] = default_value);
    } else {
        return (this.settings[name] = value);
	}
};

// Public: (Deprecated) getSetting gets a setting. Returns an empty string if the setting was not found.
SWFUpload.prototype.getSetting = function (name) {
    if (this.settings[name] != undefined) {
        return this.settings[name];
	}

    return "";
};



// Private: callFlash handles function calls made to the Flash element.
// Calls are made with a setTimeout for some functions to work around
// bugs in the ExternalInterface library.
SWFUpload.prototype.callFlash = function (functionName, argumentArray) {
	argumentArray = argumentArray || [];
	
	var movieElement = this.getMovieElement();
	var returnValue, returnString;

	// Flash's method if calling ExternalInterface methods (code adapted from MooTools).
	try {
		returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + '</invoke>');
		returnValue = eval(returnString);
	} catch (ex) {
		throw "Call to " + functionName + " failed";
	}
	
	// Unescape file post param values
	if (returnValue != undefined && typeof returnValue.post === "object") {
		returnValue = this.unescapeFilePostParams(returnValue);
	}

	return returnValue;
};

/* *****************************
	-- Flash control methods --
	Your UI should use these
	to operate SWFUpload
   ***************************** */

// WARNING: this function does not work in Flash Player 10
// Public: selectFile causes a File Selection Dialog window to appear.  This
// dialog only allows 1 file to be selected.
SWFUpload.prototype.selectFile = function () {
	this.callFlash("SelectFile");
};

// WARNING: this function does not work in Flash Player 10
// Public: selectFiles causes a File Selection Dialog window to appear/ This
// dialog allows the user to select any number of files
// Flash Bug Warning: Flash limits the number of selectable files based on the combined length of the file names.
// If the selection name length is too long the dialog will fail in an unpredictable manner.  There is no work-around
// for this bug.
SWFUpload.prototype.selectFiles = function () {
	this.callFlash("SelectFiles");
};


// Public: startUpload starts uploading the first file in the queue unless
// the optional parameter 'fileID' specifies the ID 
SWFUpload.prototype.startUpload = function (fileID) {
	this.callFlash("StartUpload", [fileID]);
};

// Public: cancelUpload cancels any queued file.  The fileID parameter may be the file ID or index.
// If you do not specify a fileID the current uploading file or first file in the queue is cancelled.
// If you do not want the uploadError event to trigger you can specify false for the triggerErrorEvent parameter.
SWFUpload.prototype.cancelUpload = function (fileID, triggerErrorEvent) {
	if (triggerErrorEvent !== false) {
		triggerErrorEvent = true;
	}
	this.callFlash("CancelUpload", [fileID, triggerErrorEvent]);
};

// Public: stopUpload stops the current upload and requeues the file at the beginning of the queue.
// If nothing is currently uploading then nothing happens.
SWFUpload.prototype.stopUpload = function () {
	this.callFlash("StopUpload");
};

/* ************************
 * Settings methods
 *   These methods change the SWFUpload settings.
 *   SWFUpload settings should not be changed directly on the settings object
 *   since many of the settings need to be passed to Flash in order to take
 *   effect.
 * *********************** */

// Public: getStats gets the file statistics object.
SWFUpload.prototype.getStats = function () {
	return this.callFlash("GetStats");
};

// Public: setStats changes the SWFUpload statistics.  You shouldn't need to 
// change the statistics but you can.  Changing the statistics does not
// affect SWFUpload accept for the successful_uploads count which is used
// by the upload_limit setting to determine how many files the user may upload.
SWFUpload.prototype.setStats = function (statsObject) {
	this.callFlash("SetStats", [statsObject]);
};

// Public: getFile retrieves a File object by ID or Index.  If the file is
// not found then 'null' is returned.
SWFUpload.prototype.getFile = function (fileID) {
	if (typeof(fileID) === "number") {
		return this.callFlash("GetFileByIndex", [fileID]);
	} else {
		return this.callFlash("GetFile", [fileID]);
	}
};

// Public: addFileParam sets a name/value pair that will be posted with the
// file specified by the Files ID.  If the name already exists then the
// exiting value will be overwritten.
SWFUpload.prototype.addFileParam = function (fileID, name, value) {
	return this.callFlash("AddFileParam", [fileID, name, value]);
};

// Public: removeFileParam removes a previously set (by addFileParam) name/value
// pair from the specified file.
SWFUpload.prototype.removeFileParam = function (fileID, name) {
	this.callFlash("RemoveFileParam", [fileID, name]);
};

// Public: setUploadUrl changes the upload_url setting.
SWFUpload.prototype.setUploadURL = function (url) {
	this.settings.upload_url = url.toString();
	this.callFlash("SetUploadURL", [url]);
};

// Public: setPostParams changes the post_params setting
SWFUpload.prototype.setPostParams = function (paramsObject) {
	this.settings.post_params = paramsObject;
	this.callFlash("SetPostParams", [paramsObject]);
};

// Public: addPostParam adds post name/value pair.  Each name can have only one value.
SWFUpload.prototype.addPostParam = function (name, value) {
	this.settings.post_params[name] = value;
	this.callFlash("SetPostParams", [this.settings.post_params]);
};

// Public: removePostParam deletes post name/value pair.
SWFUpload.prototype.removePostParam = function (name) {
	delete this.settings.post_params[name];
	this.callFlash("SetPostParams", [this.settings.post_params]);
};

// Public: setFileTypes changes the file_types setting and the file_types_description setting
SWFUpload.prototype.setFileTypes = function (types, description) {
	this.settings.file_types = types;
	this.settings.file_types_description = description;
	this.callFlash("SetFileTypes", [types, description]);
};

// Public: setFileSizeLimit changes the file_size_limit setting
SWFUpload.prototype.setFileSizeLimit = function (fileSizeLimit) {
	this.settings.file_size_limit = fileSizeLimit;
	this.callFlash("SetFileSizeLimit", [fileSizeLimit]);
};

// Public: setFileUploadLimit changes the file_upload_limit setting
SWFUpload.prototype.setFileUploadLimit = function (fileUploadLimit) {
	this.settings.file_upload_limit = fileUploadLimit;
	this.callFlash("SetFileUploadLimit", [fileUploadLimit]);
};

// Public: setFileQueueLimit changes the file_queue_limit setting
SWFUpload.prototype.setFileQueueLimit = function (fileQueueLimit) {
	this.settings.file_queue_limit = fileQueueLimit;
	this.callFlash("SetFileQueueLimit", [fileQueueLimit]);
};

// Public: setFilePostName changes the file_post_name setting
SWFUpload.prototype.setFilePostName = function (filePostName) {
	this.settings.file_post_name = filePostName;
	this.callFlash("SetFilePostName", [filePostName]);
};

// Public: setUseQueryString changes the use_query_string setting
SWFUpload.prototype.setUseQueryString = function (useQueryString) {
	this.settings.use_query_string = useQueryString;
	this.callFlash("SetUseQueryString", [useQueryString]);
};

// Public: setRequeueOnError changes the requeue_on_error setting
SWFUpload.prototype.setRequeueOnError = function (requeueOnError) {
	this.settings.requeue_on_error = requeueOnError;
	this.callFlash("SetRequeueOnError", [requeueOnError]);
};

// Public: setHTTPSuccess changes the http_success setting
SWFUpload.prototype.setHTTPSuccess = function (http_status_codes) {
	if (typeof http_status_codes === "string") {
		http_status_codes = http_status_codes.replace(" ", "").split(",");
	}
	
	this.settings.http_success = http_status_codes;
	this.callFlash("SetHTTPSuccess", [http_status_codes]);
};

// Public: setHTTPSuccess changes the http_success setting
SWFUpload.prototype.setAssumeSuccessTimeout = function (timeout_seconds) {
	this.settings.assume_success_timeout = timeout_seconds;
	this.callFlash("SetAssumeSuccessTimeout", [timeout_seconds]);
};

// Public: setDebugEnabled changes the debug_enabled setting
SWFUpload.prototype.setDebugEnabled = function (debugEnabled) {
	this.settings.debug_enabled = debugEnabled;
	this.callFlash("SetDebugEnabled", [debugEnabled]);
};

// Public: setButtonImageURL loads a button image sprite
SWFUpload.prototype.setButtonImageURL = function (buttonImageURL) {
	if (buttonImageURL == undefined) {
		buttonImageURL = "";
	}
	
	this.settings.button_image_url = buttonImageURL;
	this.callFlash("SetButtonImageURL", [buttonImageURL]);
};

// Public: setButtonDimensions resizes the Flash Movie and button
SWFUpload.prototype.setButtonDimensions = function (width, height) {
	this.settings.button_width = width;
	this.settings.button_height = height;
	
	var movie = this.getMovieElement();
	if (movie != undefined) {
		movie.style.width = width + "px";
		movie.style.height = height + "px";
	}
	
	this.callFlash("SetButtonDimensions", [width, height]);
};
// Public: setButtonText Changes the text overlaid on the button
SWFUpload.prototype.setButtonText = function (html) {
	this.settings.button_text = html;
	this.callFlash("SetButtonText", [html]);
};
// Public: setButtonTextPadding changes the top and left padding of the text overlay
SWFUpload.prototype.setButtonTextPadding = function (left, top) {
	this.settings.button_text_top_padding = top;
	this.settings.button_text_left_padding = left;
	this.callFlash("SetButtonTextPadding", [left, top]);
};

// Public: setButtonTextStyle changes the CSS used to style the HTML/Text overlaid on the button
SWFUpload.prototype.setButtonTextStyle = function (css) {
	this.settings.button_text_style = css;
	this.callFlash("SetButtonTextStyle", [css]);
};
// Public: setButtonDisabled disables/enables the button
SWFUpload.prototype.setButtonDisabled = function (isDisabled) {
	this.settings.button_disabled = isDisabled;
	this.callFlash("SetButtonDisabled", [isDisabled]);
};
// Public: setButtonAction sets the action that occurs when the button is clicked
SWFUpload.prototype.setButtonAction = function (buttonAction) {
	this.settings.button_action = buttonAction;
	this.callFlash("SetButtonAction", [buttonAction]);
};

// Public: setButtonCursor changes the mouse cursor displayed when hovering over the button
SWFUpload.prototype.setButtonCursor = function (cursor) {
	this.settings.button_cursor = cursor;
	this.callFlash("SetButtonCursor", [cursor]);
};

/* *******************************
	Flash Event Interfaces
	These functions are used by Flash to trigger the various
	events.
	
	All these functions a Private.
	
	Because the ExternalInterface library is buggy the event calls
	are added to a queue and the queue then executed by a setTimeout.
	This ensures that events are executed in a determinate order and that
	the ExternalInterface bugs are avoided.
******************************* */

SWFUpload.prototype.queueEvent = function (handlerName, argumentArray) {
	// Warning: Don't call this.debug inside here or you'll create an infinite loop
	
	if (argumentArray == undefined) {
		argumentArray = [];
	} else if (!(argumentArray instanceof Array)) {
		argumentArray = [argumentArray];
	}
	
	var self = this;
	if (typeof this.settings[handlerName] === "function") {
		// Queue the event
		this.eventQueue.push(function () {
			this.settings[handlerName].apply(this, argumentArray);
		});
		
		// Execute the next queued event
		setTimeout(function () {
			self.executeNextEvent();
		}, 0);
		
	} else if (this.settings[handlerName] !== null) {
		throw "Event handler " + handlerName + " is unknown or is not a function";
	}
};

// Private: Causes the next event in the queue to be executed.  Since events are queued using a setTimeout
// we must queue them in order to garentee that they are executed in order.
SWFUpload.prototype.executeNextEvent = function () {
	// Warning: Don't call this.debug inside here or you'll create an infinite loop

	var  f = this.eventQueue ? this.eventQueue.shift() : null;
	if (typeof(f) === "function") {
		f.apply(this);
	}
};

// Private: unescapeFileParams is part of a workaround for a flash bug where objects passed through ExternalInterface cannot have
// properties that contain characters that are not valid for JavaScript identifiers. To work around this
// the Flash Component escapes the parameter names and we must unescape again before passing them along.
SWFUpload.prototype.unescapeFilePostParams = function (file) {
	var reg = /[$]([0-9a-f]{4})/i;
	var unescapedPost = {};
	var uk;

	if (file != undefined) {
		for (var k in file.post) {
			if (file.post.hasOwnProperty(k)) {
				uk = k;
				var match;
				while ((match = reg.exec(uk)) !== null) {
					uk = uk.replace(match[0], String.fromCharCode(parseInt("0x" + match[1], 16)));
				}
				unescapedPost[uk] = file.post[k];
			}
		}

		file.post = unescapedPost;
	}

	return file;
};

// Private: Called by Flash to see if JS can call in to Flash (test if External Interface is working)
SWFUpload.prototype.testExternalInterface = function () {
	try {
		return this.callFlash("TestExternalInterface");
	} catch (ex) {
		return false;
	}
};

// Private: This event is called by Flash when it has finished loading. Don't modify this.
// Use the swfupload_loaded_handler event setting to execute custom code when SWFUpload has loaded.
SWFUpload.prototype.flashReady = function () {
	// Check that the movie element is loaded correctly with its ExternalInterface methods defined
	var movieElement = this.getMovieElement();

	if (!movieElement) {
		this.debug("Flash called back ready but the flash movie can't be found.");
		return;
	}

	this.cleanUp(movieElement);
	
	this.queueEvent("swfupload_loaded_handler");
};

// Private: removes Flash added fuctions to the DOM node to prevent memory leaks in IE.
// This function is called by Flash each time the ExternalInterface functions are created.
SWFUpload.prototype.cleanUp = function (movieElement) {
	// Pro-actively unhook all the Flash functions
	try {
		if (this.movieElement && typeof(movieElement.CallFunction) === "unknown") { // We only want to do this in IE
			this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
			for (var key in movieElement) {
				try {
					if (typeof(movieElement[key]) === "function") {
						movieElement[key] = null;
					}
				} catch (ex) {
				}
			}
		}
	} catch (ex1) {
	
	}

	// Fix Flashes own cleanup code so if the SWFMovie was removed from the page
	// it doesn't display errors.
	window["__flash__removeCallback"] = function (instance, name) {
		try {
			if (instance) {
				instance[name] = null;
			}
		} catch (flashEx) {
		
		}
	};

};


/* This is a chance to do something before the browse window opens */
SWFUpload.prototype.fileDialogStart = function () {
	this.queueEvent("file_dialog_start_handler");
};


/* Called when a file is successfully added to the queue. */
SWFUpload.prototype.fileQueued = function (file) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("file_queued_handler", file);
};


/* Handle errors that occur when an attempt to queue a file fails. */
SWFUpload.prototype.fileQueueError = function (file, errorCode, message) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("file_queue_error_handler", [file, errorCode, message]);
};

/* Called after the file dialog has closed and the selected files have been queued.
	You could call startUpload here if you want the queued files to begin uploading immediately. */
SWFUpload.prototype.fileDialogComplete = function (numFilesSelected, numFilesQueued, numFilesInQueue) {
	this.queueEvent("file_dialog_complete_handler", [numFilesSelected, numFilesQueued, numFilesInQueue]);
};

SWFUpload.prototype.uploadStart = function (file) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("return_upload_start_handler", file);
};

SWFUpload.prototype.returnUploadStart = function (file) {
	var returnValue;
	if (typeof this.settings.upload_start_handler === "function") {
		file = this.unescapeFilePostParams(file);
		returnValue = this.settings.upload_start_handler.call(this, file);
	} else if (this.settings.upload_start_handler != undefined) {
		throw "upload_start_handler must be a function";
	}

	// Convert undefined to true so if nothing is returned from the upload_start_handler it is
	// interpretted as 'true'.
	if (returnValue === undefined) {
		returnValue = true;
	}
	
	returnValue = !!returnValue;
	
	this.callFlash("ReturnUploadStart", [returnValue]);
};



SWFUpload.prototype.uploadProgress = function (file, bytesComplete, bytesTotal) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_progress_handler", [file, bytesComplete, bytesTotal]);
};

SWFUpload.prototype.uploadError = function (file, errorCode, message) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_error_handler", [file, errorCode, message]);
};

SWFUpload.prototype.uploadSuccess = function (file, serverData, responseReceived) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_success_handler", [file, serverData, responseReceived]);
};

SWFUpload.prototype.uploadComplete = function (file) {
	file = this.unescapeFilePostParams(file);
	this.queueEvent("upload_complete_handler", file);
};

/* Called by SWFUpload JavaScript and Flash functions when debug is enabled. By default it writes messages to the
   internal debug console.  You can override this event and have messages written where you want. */
SWFUpload.prototype.debug = function (message) {
	this.queueEvent("debug_handler", message);
};


/* **********************************
	Debug Console
	The debug console is a self contained, in page location
	for debug message to be sent.  The Debug Console adds
	itself to the body if necessary.

	The console is automatically scrolled as messages appear.
	
	If you are using your own debug handler or when you deploy to production and
	have debug disabled you can remove these functions to reduce the file size
	and complexity.
********************************** */
   
// Private: debugMessage is the default debug_handler.  If you want to print debug messages
// call the debug() function.  When overriding the function your own function should
// check to see if the debug setting is true before outputting debug information.
SWFUpload.prototype.debugMessage = function (message) {
	if (this.settings.debug) {
		var exceptionMessage, exceptionValues = [];

		// Check for an exception object and print it nicely
		if (typeof message === "object" && typeof message.name === "string" && typeof message.message === "string") {
			for (var key in message) {
				if (message.hasOwnProperty(key)) {
					exceptionValues.push(key + ": " + message[key]);
				}
			}
			exceptionMessage = exceptionValues.join("\n") || "";
			exceptionValues = exceptionMessage.split("\n");
			exceptionMessage = "EXCEPTION: " + exceptionValues.join("\nEXCEPTION: ");
			SWFUpload.Console.writeLine(exceptionMessage);
		} else {
			SWFUpload.Console.writeLine(message);
		}
	}
};

SWFUpload.Console = {};
SWFUpload.Console.writeLine = function (message) {
	var console, documentForm;

	try {
		console = document.getElementById("SWFUpload_Console");

		if (!console) {
			documentForm = document.createElement("form");
			document.getElementsByTagName("body")[0].appendChild(documentForm);

			console = document.createElement("textarea");
			console.id = "SWFUpload_Console";
			console.style.fontFamily = "monospace";
			console.setAttribute("wrap", "off");
			console.wrap = "off";
			console.style.overflow = "auto";
			console.style.width = "700px";
			console.style.height = "350px";
			console.style.margin = "5px";
			documentForm.appendChild(console);
		}

		console.value += message + "\n";

		console.scrollTop = console.scrollHeight - console.clientHeight;
	} catch (ex) {
		alert("Exception: " + ex.name + " Message: " + ex.message);
	}
};
var SWFUpload;
if (typeof(SWFUpload) === "function") {
	SWFUpload.queue = {};
	
	SWFUpload.prototype.initSettings = (function (oldInitSettings) {
		return function () {
			if (typeof(oldInitSettings) === "function") {
				oldInitSettings.call(this);
			}
			
			this.queueSettings = {};
			
			this.queueSettings.queue_cancelled_flag = false;
			this.queueSettings.queue_upload_count = 0;
			
			this.queueSettings.user_upload_complete_handler = this.settings.upload_complete_handler;
			this.queueSettings.user_upload_start_handler = this.settings.upload_start_handler;
			this.settings.upload_complete_handler = SWFUpload.queue.uploadCompleteHandler;
			this.settings.upload_start_handler = SWFUpload.queue.uploadStartHandler;
			
			this.settings.queue_complete_handler = this.settings.queue_complete_handler || null;
		};
	})(SWFUpload.prototype.initSettings);

	SWFUpload.prototype.startUpload = function (fileID) {
		this.queueSettings.queue_cancelled_flag = false;
		this.callFlash("StartUpload", [fileID]);
	};

	SWFUpload.prototype.cancelQueue = function () {
		this.queueSettings.queue_cancelled_flag = true;
		this.stopUpload();
		
		var stats = this.getStats();
		while (stats.files_queued > 0) {
			this.cancelUpload();
			stats = this.getStats();
		}
	};
	
	SWFUpload.queue.uploadStartHandler = function (file) {
		var returnValue;
		if (typeof(this.queueSettings.user_upload_start_handler) === "function") {
			returnValue = this.queueSettings.user_upload_start_handler.call(this, file);
		}
		
		// To prevent upload a real "FALSE" value must be returned, otherwise default to a real "TRUE" value.
		returnValue = (returnValue === false) ? false : true;
		
		this.queueSettings.queue_cancelled_flag = !returnValue;

		return returnValue;
	};
	
	SWFUpload.queue.uploadCompleteHandler = function (file) {
		var user_upload_complete_handler = this.queueSettings.user_upload_complete_handler;
		var continueUpload;
		
		if (file.filestatus === SWFUpload.FILE_STATUS.COMPLETE) {
			this.queueSettings.queue_upload_count++;
		}

		if (typeof(user_upload_complete_handler) === "function") {
			continueUpload = (user_upload_complete_handler.call(this, file) === false) ? false : true;
		} else if (file.filestatus === SWFUpload.FILE_STATUS.QUEUED) {
			// If the file was stopped and re-queued don't restart the upload
			continueUpload = false;
		} else {
			continueUpload = true;
		}
		
		if (continueUpload) {
			var stats = this.getStats();
			if (stats.files_queued > 0 && this.queueSettings.queue_cancelled_flag === false) {
				this.startUpload();
			} else if (this.queueSettings.queue_cancelled_flag === false) {
				this.queueEvent("queue_complete_handler", [this.queueSettings.queue_upload_count]);
				this.queueSettings.queue_upload_count = 0;
			} else {
				this.queueSettings.queue_cancelled_flag = false;
				this.queueSettings.queue_upload_count = 0;
			}
		}
	};
}function fileQueued(file) {
	try {
		var progress = new FileProgress(file, this.customSettings.progressTarget);
		progress.setStatus("Pending...");
		progress.toggleCancel(true, this);

	} catch (ex) {
		this.debug(ex);
	}
swfu.startUpload();
}

function swfUploadLoaded(swfupload) {


}

function fileQueueError(file, errorCode, message) {
	try {
		if (errorCode === SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) {
			alert("You have attempted to queue too many files.\n" + (message === 0 ? "You have reached the upload limit." : "You may select " + (message > 1 ? "up to " + message + " files." : "one file.")));
			return;
		}

		var progress = new FileProgress(file, this.customSettings.progressTarget);
		progress.setError();
		progress.toggleCancel(false);

		switch (errorCode) {
		case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
			progress.setStatus("File is too big.");
			this.debug("Error Code: File too big, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
			progress.setStatus("Cannot upload Zero Byte files.");
			this.debug("Error Code: Zero byte file, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
			progress.setStatus("Invalid File Type.");
			this.debug("Error Code: Invalid File Type, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		default:
			if (file !== null) {
				progress.setStatus("Unhandled Error");
			}
			this.debug("Error Code: " + errorCode + ", File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		}
	} catch (ex) {
        this.debug(ex);
    }
}

function fileDialogComplete(numFilesSelected, numFilesQueued) {
	try {
		if (numFilesSelected > 0) {
			document.getElementById(this.customSettings.cancelButtonId).disabled = false;
		}
				document.getElementById('fileSelected').innerHTML = numFilesSelected + " Selected.";
				document.getElementById('fileQueued').innerHTML = numFilesQueued + " Queued.";


		/* I want auto start the upload and I can do that here */
		this.startUpload();
	} catch (ex)  {
        this.debug(ex);
	}
}

function uploadStart(file) {
	try {
		/* I don't want to do any file validation or anything,  I'll just update the UI and
		return true to indicate that the upload should start.
		It's important to update the UI here because in Linux no uploadProgress events are called. The best
		we can do is say we are uploading.
		 */
		var progress = new FileProgress(file, this.customSettings.progressTarget);
		progress.setStatus("Uploading...");
		progress.toggleCancel(true, this);
	}
	catch (ex) {}
	
	return true;
}

function uploadProgress(file, bytesLoaded, bytesTotal) {
	try {
		var percent = Math.ceil((bytesLoaded / bytesTotal) * 100);

		var progress = new FileProgress(file, this.customSettings.progressTarget);
		progress.setProgress(percent);
		progress.setStatus("Uploading..."+percent+"%");
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadSuccess(file, serverData) {
	try {
		var progress = new FileProgress(file, this.customSettings.progressTarget);
		progress.setComplete();
		progress.setStatus("Complete.");
		progress.toggleCancel(false);
		this.startUpload();
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadError(file, errorCode, message) {
	try {
		var progress = new FileProgress(file, this.customSettings.progressTarget);
		progress.setError();
		progress.toggleCancel(false);

		switch (errorCode) {
		case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
			progress.setStatus("Upload Error: " + message);
			this.debug("Error Code: HTTP Error, File name: " + file.name + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
			progress.setStatus("Upload Failed.");
			this.debug("Error Code: Upload Failed, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.IO_ERROR:
			progress.setStatus("Server (IO) Error");
			this.debug("Error Code: IO Error, File name: " + file.name + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
			progress.setStatus("Security Error");
			this.debug("Error Code: Security Error, File name: " + file.name + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
			progress.setStatus("Upload limit exceeded.");
			this.debug("Error Code: Upload Limit Exceeded, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
			progress.setStatus("Failed Validation.  Upload skipped.");
			this.debug("Error Code: File Validation Failed, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
			// If there aren't any files left (they were all cancelled) disable the cancel button
			if (this.getStats().files_queued === 0) {
				document.getElementById(this.customSettings.cancelButtonId).disabled = true;
			}
			progress.setStatus("Cancelled");
			progress.setCancelled();
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
			progress.setStatus("Stopped");
			break;
		default:
			progress.setStatus("Unhandled Error: " + errorCode);
			this.debug("Error Code: " + errorCode + ", File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
			break;
		}
	} catch (ex) {
        this.debug(ex);
    }
}

function uploadComplete(file) {
	if (this.getStats().files_queued === 0) {
		document.getElementById(this.customSettings.cancelButtonId).disabled = true;
	}
		var status = document.getElementById("fileComplete");
		status.innerHTML = numFilesUploaded + " file" + (numFilesUploaded === 1 ? "" : "s") + " uploaded.";
}

// This event comes from the Queue Plugin
function queueComplete(numFilesUploaded) {
	var status = document.getElementById("fileComplete");
	status.innerHTML = numFilesUploaded + " file" + (numFilesUploaded === 1 ? "" : "s") + " uploaded.";
}
/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/
		  
var tb_pathToImage = "/images/loadingAnimation.gif";

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
$(document).ready(function(){   
	tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	imgLoader = new Image();// preload image
	imgLoader.src = tb_pathToImage;
});

//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk){
	$(domChunk).click(function(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	tb_show(t,a,g);
	this.blur();
	return false;
	});
}

function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link

	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			$("body","html").css({height: "100%", width: "100%"});
			$("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				$("body").append("<iframe id='TB_HideSelect'></iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
				$("#TB_overlay").click(tb_remove);
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				$("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
				$("#TB_overlay").click(tb_remove);
			}
		}
		
		if(tb_detectMacXFF()){
			$("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			$("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}
		
		if(caption===null){caption="";}
		$("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' /></div>");//add loader to the page
		$('#TB_load').show();//show loader
		
		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{ 
	   		baseURL = url;
	   }
	   
	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images
				
			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = $("a[@rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {						
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>Next &gt;</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>&lt; Prev</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = "Image " + (TB_Counter + 1) +" of "+ (TB_TempArray.length);											
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){		
			imgPreloader.onload = null;
				
			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 150;
			var y = pagesize[1] - 150;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth); 
				imageWidth = x; 
				if (imageHeight > y) { 
					imageWidth = imageWidth * (y / imageHeight); 
					imageHeight = y; 
				}
			} else if (imageHeight > y) { 
				imageWidth = imageWidth * (y / imageHeight); 
				imageHeight = y; 
				if (imageWidth > x) { 
					imageHeight = imageHeight * (x / imageWidth); 
					imageWidth = x;
				}
			}
			// End Resizing
			
			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			$("#TB_window").append("<a href='' id='TB_ImageOff' title='Close'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='Close'>close</a> or Esc Key</div>"); 		
			
			$("#TB_closeWindowButton").click(tb_remove);
			
			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if($(document).unbind("click",goPrev)){$(document).unbind("click",goPrev);}
					$("#TB_window").remove();
					$("body").append("<div id='TB_window'></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;	
				}
				$("#TB_prev").click(goPrev);
			}
			
			if (!(TB_NextHTML === "")) {		
				function goNext(){
					$("#TB_window").remove();
					$("body").append("<div id='TB_window'></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);				
					return false;	
				}
				$("#TB_next").click(goNext);
				
			}

			document.onkeydown = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					tb_remove();
				} else if(keycode == 190){ // display previous image
					if(!(TB_NextHTML == "")){
						document.onkeydown = "";
						goNext();
					}
				} else if(keycode == 188){ // display next image
					if(!(TB_PrevHTML == "")){
						document.onkeydown = "";
						goPrev();
					}
				}	
			};
			
			tb_position();
			$("#TB_load").remove();
			$("#TB_ImageOff").click(tb_remove);
			$("#TB_window").css({display:"block"}); //for safari using css instead of show
			};
			
			imgPreloader.src = url;
		}else{//code to show html
			
			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = tb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) + 30 || 630; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH - 30;
			ajaxContentH = TB_HEIGHT - 45;
			
			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window		
					urlNoQuery = url.split('TB_');
					$("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='Close'>close</a> or Esc Key</div></div><iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' > </iframe>");
					}else{//iframe modal
					$("#TB_overlay").unbind();
						$("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'> </iframe>");
					}
			}else{// not an iframe, ajax
					if($("#TB_window").css("display") != "block"){
						if(params['modal'] != "true"){//ajax no modal
						$("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'>close</a> or Esc Key</div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						$("#TB_overlay").unbind();
						$("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");	
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						$("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						$("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						$("#TB_ajaxContent")[0].scrollTop = 0;
						$("#TB_ajaxWindowTitle").html(caption);
					}
			}
					
			$("#TB_closeWindowButton").click(tb_remove);
			
				if(url.indexOf('TB_inline') != -1){	
					$("#TB_ajaxContent").append($('#' + params['inlineId']).children());
					$("#TB_window").unload(function () {
						$('#' + params['inlineId']).append( $("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					tb_position();
					$("#TB_load").remove();
					$("#TB_window").css({display:"block"}); 
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					if($.browser.safari){//safari needs help because it will not fire iframe onload
						$("#TB_load").remove();
						$("#TB_window").css({display:"block"});
					}
				}else{
					$("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						$("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						$("#TB_window").css({display:"block"});
					});
				}
			
		}

		if(!params['modal']){
			document.onkeyup = function(e){ 	
				if (e == null) { // ie
					keycode = event.keyCode;
				} else { // mozilla
					keycode = e.which;
				}
				if(keycode == 27){ // close
					tb_remove();
				}	
			};
		}
		
	} catch(e) {
		//nothing here
	}
}

//helper functions below
function tb_showIframe(){
	$("#TB_load").remove();
	$("#TB_window").css({display:"block"});
}

function tb_remove() {
 	$("#TB_imageOff").unbind("click");
	$("#TB_closeWindowButton").unbind("click");
	$("#TB_window").fadeOut("fast",function(){$('#TB_window,#TB_overlay,#TB_HideSelect').trigger("unload").unbind().remove();});
	$("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		$("body","html").css({height: "auto", width: "auto"});
		$("html").css("overflow","");
	}
	document.onkeydown = "";
	document.onkeyup = "";
	self.parent.location.reload();
	return false;
}

function tb_position() {
$("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
	if ( !(jQuery.browser.msie && jQuery.browser.version < 7)) { // take away IE6
		$("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
	}
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}