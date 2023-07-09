function onePageScroll(e,t){var n=Object.extend({},{sectionContainer:"section",easing:"ease",animationTime:1e3,pagination:!0,updateURL:!1,keyboard:!0,beforeMove:null,afterMove:null,loop:!1,responsiveFallback:!1},t),a=document.querySelector(e),o=document.querySelectorAll(n.sectionContainer),i=o.length,s=0,r="",d=document.querySelector("body");this.init=function(){_addClass(a,"onepage-wrapper"),a.style.position="relative";for(var e=0;e<o.length;e++)_addClass(o[e],"ops-section"),o[e].dataset.index=e+1,100,1==n.pagination&&(r+="<li><a data-index='"+(e+1)+"' href='#"+o[e].dataset.id+"'></a></li>");if(_swipeEvents(a),document.addEventListener("swipeDown",(function(e){_hasClass(d,"disabled-onepage-scroll")||e.preventDefault(),moveUp(a)})),document.addEventListener("swipeUp",(function(e){_hasClass(d,"disabled-onepage-scroll")||e.preventDefault(),moveDown(a)})),1==n.pagination){var t=document.createElement("ul");t.setAttribute("class","onepage-pagination"),d.appendChild(t),t.innerHTML=r;var i=document.querySelector(".onepage-pagination").offsetHeight/2*-1;document.querySelector(".onepage-pagination").style.marginTop=i}if(""!=window.location.hash&&window.location.hash!="#"+o[0].id){var s=window.location.hash.replace("#",""),l=_getIndexFromId(s),c=document.querySelector(n.sectionContainer+"[data-index='"+l+"']"),u=c.dataset.index;if(_addClass(document.querySelector(n.sectionContainer+"[data-index='"+l+"']"),"active"),_addClass(d,"viewing-page-"+l),1==n.pagination&&_addClass(document.querySelector(".onepage-pagination li a[data-index='"+l+"']"),"active"),c&&(_addClass(c,"active"),1==n.pagination&&_addClass(document.querySelector(".onepage-pagination li a[data-index='"+l+"']"),"active"),d.className=d.className.replace(/\bviewing-page-\d.*?\b/g,""),_addClass(d,"viewing-page-"+u),history.replaceState&&1==n.updateURL)){var m=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+l;history.pushState({},document.title,m)}_transformPage(a,n,100*(l-1)*-1,l)}else _addClass(document.querySelector(n.sectionContainer+"[data-index='1']"),"active"),_addClass(d,"viewing-page-1"),1==n.pagination&&_addClass(document.querySelector(".onepage-pagination li a[data-index='1']"),"active");if(_paginationHandler=function(){var e=this.dataset.index;moveTo(a,e)},1==n.pagination){var p=document.querySelectorAll(".onepage-pagination li a");for(e=0;e<p.length;e++)p[e].addEventListener("click",_paginationHandler)}return _mouseWheelHandler=function(e){e.preventDefault();var t=e.wheelDelta||-e.detail;_hasClass(d,"disabled-onepage-scroll")||_init_scroll(e,t)},document.addEventListener("mousewheel",_mouseWheelHandler,{passive:!1}),document.addEventListener("DOMMouseScroll",_mouseWheelHandler,{passive:!1}),0!=n.responsiveFallback&&(window.onresize=function(){_responsive()},_responsive()),_keydownHandler=function(e){var t=e.target.tagName.toLowerCase();if(!_hasClass(d,"disabled-onepage-scroll"))switch(e.which){case 38:"input"!=t&&"textarea"!=t&&moveUp(a);break;case 40:"input"!=t&&"textarea"!=t&&moveDown(a);break;default:return}return!1},1==n.keyboard&&(document.onkeydown=_keydownHandler),!1},_getIndexFromId=function(e){var t=document.querySelector(n.sectionContainer+"[data-id='"+e+"']");return[...t.parentElement.children].indexOf(t)+1},_swipeEvents=function(e){var t,n;function a(e){var o=e.touches;if(o&&o.length){e.preventDefault();var i=t-o[0].pageX,s=n-o[0].pageY;if(i>=50){e=new Event("swipeLeft");document.dispatchEvent(e)}if(i<=-50){e=new Event("swipeRight");document.dispatchEvent(e)}if(s>=50){e=new Event("swipeUp");document.dispatchEvent(e)}if(s<=-50){e=new Event("swipeDown");document.dispatchEvent(e)}(Math.abs(i)>=50||Math.abs(s)>=50)&&document.removeEventListener("touchmove",a)}}document.addEventListener("touchstart",(function(e){var o=e.touches;o&&o.length&&(t=o[0].pageX,n=o[0].pageY,document.addEventListener("touchmove",a))}))},_trim=function(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},_hasClass=function(e,t){return e.className?e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")):e.className=t},_addClass=function(e,t){_hasClass(e,t)||(e.className+=" "+t),e.className=_trim(e.className)},_removeClass=function(e,t){if(_hasClass(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}e.className=_trim(e.className)},_whichTransitionEvent=function(){var e,t=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==t.style[e])return n[e]},_scrollTo=function(e,t,n){if(!(n<0)){var a=(t-e.scrollTop)/n*10;setTimeout((function(){e.scrollTop=e.scrollTop+a,e.scrollTop!=t&&_scrollTo(e,t,n-10)}),10)}},_transformPage=function(e,t,n,a,o){"function"==typeof t.beforeMove&&t.beforeMove(a,o);var i="-webkit-transform: translate3d(0, "+n+"%, 0); -webkit-transition: -webkit-transform "+t.animationTime+"ms "+t.easing+"; -moz-transform: translate3d(0, "+n+"%, 0); -moz-transition: -moz-transform "+t.animationTime+"ms "+t.easing+"; -ms-transform: translate3d(0, "+n+"%, 0); -ms-transition: -ms-transform "+t.animationTime+"ms "+t.easing+"; transform: translate3d(0, "+n+"%, 0); transition: transform "+t.animationTime+"ms "+t.easing+";";e.style.cssText=i;var s=_whichTransitionEvent();e.addEventListener(s,(function n(){"function"==typeof t.afterMove&&t.afterMove(a,o);e.removeEventListener(s,n)}),!1)},_responsive=function(){document.body.clientWidth<n.responsiveFallback?(_addClass(d,"disabled-onepage-scroll"),document.removeEventListener("mousewheel",_mouseWheelHandler),document.removeEventListener("DOMMouseScroll",_mouseWheelHandler),_swipeEvents(a),document.removeEventListener("swipeDown"),document.removeEventListener("swipeUp")):(_hasClass(d,"disabled-onepage-scroll")&&(_removeClass(d,"disabled-onepage-scroll"),_scrollTo(document.documentElement,0,2e3)),_swipeEvents(a),document.addEventListener("swipeDown",(function(e){_hasClass(d,"disabled-onepage-scroll")||e.preventDefault(),moveUp(a)})),document.addEventListener("swipeUp",(function(e){_hasClass(d,"disabled-onepage-scroll")||e.preventDefault(),moveDown(a)})),document.addEventListener("mousewheel",_mouseWheelHandler),document.addEventListener("DOMMouseScroll",_mouseWheelHandler))},_init_scroll=function(e,t){var o=t,i=(new Date).getTime();i-s<500+n.animationTime?e.preventDefault():(o<0?moveDown(a):moveUp(a),s=i)},this.moveDown=function(e){"string"==typeof e&&(e=document.querySelector(e));var t=document.querySelector(n.sectionContainer+".active").dataset.index,a=document.querySelector(n.sectionContainer+"[data-index='"+t+"']"),o=document.querySelector(n.sectionContainer+"[data-index='"+(parseInt(t)+1)+"']");if(o)pos=100*t*-1;else{if(1!=n.loop)return;pos=0,o=document.querySelector(n.sectionContainer+"[data-index='1']")}var i=o.dataset.index;if(_removeClass(a,"active"),_addClass(o,"active"),1==n.pagination&&(_removeClass(document.querySelector(".onepage-pagination li a[data-index='"+t+"']"),"active"),_addClass(document.querySelector(".onepage-pagination li a[data-index='"+i+"']"),"active")),d.className=d.className.replace(/\bviewing-page-\d.*?\b/g,""),_addClass(d,"viewing-page-"+i),history.replaceState&&1==n.updateURL){var s=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(parseInt(t)+1);history.pushState({},document.title,s)}_transformPage(e,n,pos,i,o)},this.moveUp=function(e){"string"==typeof e&&(e=document.querySelector(e));var t=document.querySelector(n.sectionContainer+".active").dataset.index,a=document.querySelector(n.sectionContainer+"[data-index='"+t+"']"),o=document.querySelector(n.sectionContainer+"[data-index='"+(parseInt(t)-1)+"']");if(o)pos=100*(o.dataset.index-1)*-1;else{if(1!=n.loop)return;pos=100*(i-1)*-1,o=document.querySelector(n.sectionContainer+"[data-index='"+i+"']")}var s=o.dataset.index;if(_removeClass(a,"active"),_addClass(o,"active"),1==n.pagination&&(_removeClass(document.querySelector(".onepage-pagination li a[data-index='"+t+"']"),"active"),_addClass(document.querySelector(".onepage-pagination li a[data-index='"+s+"']"),"active")),d.className=d.className.replace(/\bviewing-page-\d.*?\b/g,""),_addClass(d,"viewing-page-"+s),history.replaceState&&1==n.updateURL){var r=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(parseInt(t)-1);history.pushState({},document.title,r)}_transformPage(e,n,pos,s,o)},this.moveTo=function(e,t){"string"==typeof e&&(e=document.querySelector(e));var a=document.querySelector(n.sectionContainer+".active"),o=document.querySelector(n.sectionContainer+"[data-index='"+t+"']");if(o){var i=o.dataset.index;if(_removeClass(a,"active"),_addClass(o,"active"),_removeClass(document.querySelector(".onepage-pagination li a.active"),"active"),_addClass(document.querySelector(".onepage-pagination li a[data-index='"+t+"']"),"active"),d.className=d.className.replace(/\bviewing-page-\d.*?\b/g,""),_addClass(d,"viewing-page-"+i),pos=100*(t-1)*-1,history.replaceState&&1==n.updateURL){var s=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(parseInt(t)-1);history.pushState({},document.title,s)}_transformPage(e,n,pos,t,o)}},this.init()}Object.extend=function(e){if(null==e)return e;for(var t=1;t<arguments.length;t++){var n=arguments[t];if(null!=n)for(var a in n){var o=n.__lookupGetter__(a),i=n.__lookupSetter__(a);o||i?(o&&e.__defineGetter__(a,o),i&&e.__defineSetter__(a,i)):e[a]=n[a]}}return e};