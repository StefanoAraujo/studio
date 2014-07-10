var AniJSLib=function(){var a=this,b="data-anijs",c="default",d="$",e="if",f="on",g="do",h="to";a._initializer=function(){a.helperCollection={},a.eventCollection={},a.eventIdCounter=0;var b=a._createDefaultHelper();a.registerHelper(c,b),a.helperDefaultIndex=c,a.rootDOMTravelScope=document,a.Parser=a._createParser(),a.animationEndEvent=a._animationEndPrefix(),a.classNamesWhenAnim=""},a.setDOMRootTravelScope=function(b){var c;try{"document"===b?c=document:(c=document.querySelector(b),c||(c=document))}catch(d){c=document}a.rootDOMTravelScope=c},a.run=function(){var c=[],d={};a.purgeAll(),c=a._findAniJSNodeCollection(a.rootDOMTravelScope);var e,f=c.length,g=0;for(g;f>g;g++)e=c[g],d=a._getParsedAniJSSentenceCollection(e.getAttribute(b)),a._setupElementAnim(e,d)},a.createAnimation=function(b,c){var d=c||"";a._setupElementAnim(d,b)},a.getHelper=function(b){var d=a.helperCollection;return d[b]||d[c]},a.registerHelper=function(b,c){a.helperCollection[b]=c},a.purge=function(b){if(b&&""!==b&&" "!==b){var c=document.querySelectorAll(b),d=c.length,e=0;for(e;d>e;e++)a._purgeNode(c[e])}},a.purgeAll=function(){var b,c,d=a.eventCollection,e=Object.keys(d),f=e.length,g=0;for(g;f>g;g++)b=e[g],c=d[b],c&&c.handleCollection&&c.handleCollection.length>0&&a._purgeNode(c.handleCollection[0].element)},a.setClassNamesWhenAnim=function(b){a.classNamesWhenAnim=" "+b},a._createDefaultHelper=function(){var a={removeAnim:function(a,b){b.nodeHelper.removeClass(a.target,b.behavior)}};return a},a._createParser=function(){return new j},a._setupElementAnim=function(b,c){var d,e=c.length,f=0;for(f;e>f;f++)d=c[f],a._setupElementSentenceAnim(b,d)},a._setupElementSentenceAnim=function(b,c){var d=a._eventHelper(c),e=a._eventTargetHelper(b,c);if(""!==d){var f,g=e.length,h=0;for(h;g>h;h++){f=e[h];var j=function(d){var e=a._behaviorTargetHelper(b,c),f=a._behaviorHelper(c),g=a._beforeHelper(b,c),h=a._afterHelper(b,c);""!==a.classNamesWhenAnim&&(f+=a.classNamesWhenAnim);var j={behaviorTargetList:e,nodeHelper:k,animationEndEvent:a.animationEndEvent,behavior:f,after:h},l=new i(j);g&&a._isFunction(g)?g(d,l):l.run()};f.addEventListener(d,j,!1),a._registerEventHandle(f,d,j)}}},a._registerEventHandle=function(b,c,d){var e=b._aniJSEventID,f=a.eventCollection,g={eventType:c,listener:d,element:b};if(e)f[e].handleCollection.push(g);else{var h={handleCollection:[g]};f[++a.eventIdCounter]=h,b._aniJSEventID=a.eventIdCounter}},a._purgeNode=function(b){var c,d=b._aniJSEventID;if(d){c=a.eventCollection[d].handleCollection;var e,f=c.length,g=0;for(g;f>g;g++)e=c[g],b.removeEventListener(e.eventType,e.listener);a.eventCollection[d]=null,b._aniJSEventID=null}},a._eventHelper=function(b){var c="",d=b.event||c;return"animationend"===d&&(d=a._animationEndPrefix()),d},a._eventTargetHelper=function(b,c){var d=b,e=[d],f=a.rootDOMTravelScope;if(c.eventTarget)if("document"===c.eventTarget)e=[document];else if("window"===c.eventTarget)e=[window];else try{e=f.querySelectorAll(c.eventTarget)}catch(g){e=[]}return e},a._behaviorTargetHelper=function(b,c){var e=b,f=[e],g=a.rootDOMTravelScope,h=c.behaviorTarget;if(h){h=h.split(d).join(",");try{f=g.querySelectorAll(h)}catch(i){f=[]}}return f},a._behaviorHelper=function(a){var b=a.behavior||"";return b},a._afterHelper=function(b,c){var d=a._callbackHelper(b,c,c.after);return d},a._beforeHelper=function(b,c){var d=a._callbackHelper(b,c,c.before);return d},a._callbackHelper=function(b,c,d){var e=d||"",f=a._helperHelper(c);if(e&&!a._isFunction(e)){var g=a.helperCollection,h=g[f];e=h&&h[e]?h[e]:!1}return e},a._helperHelper=function(b){var c=b.helper||a.helperDefaultIndex;return c},a._getParsedAniJSSentenceCollection=function(b){return a.Parser.parse(b)},a._findAniJSNodeCollection=function(a){var c="["+b+"]";return a.querySelectorAll(c)},a._animationEndPrefix=function(){var b=a._endPrefixBrowserDetectionIndex(),c=["animationend","oAnimationEnd","animationend","webkitAnimationEnd"];return c[b]},a._transitionEndPrefix=function(){var b=a._endPrefixBrowserDetectionIndex(),c=["transitionend","oTransitionEnd","transitionend","webkitTransitionEnd"];return c[b]},a._endPrefixBrowserDetectionIndex=function(){for(var a=document.createElement("fakeelement"),b=["animation","OAnimation","MozAnimation","webkitAnimation"],c=0;c<b.length;c++)if(void 0!==a.style[b[c]])return c},a._isFunction=function(a){return!!(a&&a.constructor&&a.call&&a.apply)};var i=function(a){var b=this;b.initializer=function(a){b.behaviorTargetList=a.behaviorTargetList||[],b.nodeHelper=a.nodeHelper,b.animationEndEvent=a.animationEndEvent,b.behavior=a.behavior,b.after=a.after},b.run=function(){var a,c=b.behaviorTargetList,d=c.length,e=b.nodeHelper,f=b.behavior,g=b.animationEndEvent,h=b.after,i=0;for(i;d>i;i++)a=c[i],e.addClass(a,f),a.addEventListener(g,function(a){a.target.removeEventListener(a.type,arguments.callee),h&&h(a,b)})},b.initializer(a)},j=function(){var a=this;a.parse=function(b){return a._parseDeclaration(b)},a._parseDeclaration=function(b){var c,d,e=[];c=b.split(";");var f=c.length,g=0;for(g;f>g;g++)d=a._parseSentence(c[g]),e.push(d);return e},a._parseSentence=function(b){var c,d,e={};c=b.split(",");var f=c.length,g=0;for(g;f>g;g++)d=a._parseDefinition(c[g]),e[d.key]=d.value;return e},a._parseDefinition=function(a){var b,c,d,i={},j="event",k="eventTarget",l="behavior",m="behaviorTarget";return b=a.split(":"),b.length>1&&(c=b[0].trim(),d=b[1].trim(),c===e?c=j:c===f?c=k:c===g?c=l:c===h&&(c=m),i.key=c,i.value=d),i}},k={addClass:function(a,b){b instanceof Array||(b=b.split(" "));for(var c=0,d=b.length;d>c;++c)b[c]&&!new RegExp("(\\s+|^)"+b[c]+"(\\s+|$)").test(a.className)&&(a.className=a.className.trim()+" "+b[c])},removeClass:function(a,b){b instanceof Array||(b=b.split(" "));for(var c=0,d=b.length;d>c;++c)a.className=a.className.replace(new RegExp("(\\s+|^)"+b[c]+"(\\s+|$)")," ").trim()},toggleClass:function(a,b){b&&(a.className=new RegExp("(\\s+|^)"+b+"(\\s+|$)").test(a.className)?a.className.replace(new RegExp("(\\s+|^)"+b+"(\\s+|$)")," ").trim():a.className.trim()+" "+b)},hasClass:function(a,b){return b&&new RegExp("(\\s+|^)"+b+"(\\s+|$)").test(a.className)}};a._initializer()},AniJS=new AniJSLib;AniJS.run();