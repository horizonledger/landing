(()=>{var e={433:(e,t,r)=>{var a=r(202);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,a,n,o){var s;return(null!=(s=e.invokePartial(r(238),t,{name:"header",data:o,helpers:a,partials:n,decorators:e.decorators}))?s:"")+"\n"+(null!=(s=e.invokePartial(r(379),t,{name:"main",data:o,helpers:a,partials:n,decorators:e.decorators}))?s:"")},usePartial:!0,useData:!0})},238:(e,t,r)=>{var a=r(202);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,a,n){return'<header>\n    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">\n        <a class="navbar-brand" href="#">Horizon</a>\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"\n            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">\n            <span class="navbar-toggler-icon"></span>\n        </button>\n        <div class="collapse navbar-collapse" id="navbarCollapse">\n            <ul class="navbar-nav mr-auto">\n                <li class="nav-item active">\n                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link" href="#">Link</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link disabled" href="#">Disabled</a>\n                </li>\n            </ul>\n            <form class="mt-2 mt-md-0">\n                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Github</button>\n                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Discord</button>\n            </form>\n        </div>\n    </nav>\n</header>'},useData:!0})},378:(e,t,r)=>{var a=r(202);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,a,n,o){var s;return'<!doctype html>\n<html lang="en">\n\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    <meta name="description" content="">\n    <meta name="author" content="">\n    <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">\n\n    <title>Carousel Template for Bootstrap</title>\n\n    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/carousel/">\n\n    \x3c!-- Bootstrap core CSS --\x3e\n    <link href="./styles/bootstrap.min.css" rel="stylesheet">\n\n    \x3c!-- Custom styles for this template --\x3e\n    <link href="./styles/carousel.css" rel="stylesheet">\n</head>\n\n<body>\n\n'+(null!=(s=e.invokePartial(r(433),t,{name:"content",data:o,indent:"    ",helpers:a,partials:n,decorators:e.decorators}))?s:"")+'\n    \x3c!-- Bootstrap core JavaScript\n    ================================================== --\x3e\n    \x3c!-- Placed at the end of the document so the pages load faster --\x3e\n    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"\n        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"\n        crossorigin="anonymous"><\/script>\n    <script>window.jQuery || document.write(\'<script src="../../assets/js/vendor/jquery-slim.min.js"><\\/script>\')<\/script>\n    <script src="../../assets/js/vendor/popper.min.js"><\/script>\n    <script src="../../dist/js/bootstrap.min.js"><\/script>\n    \x3c!-- Just to make our placeholder images work. Don\'t actually copy the next line! --\x3e\n    <script src="../../assets/js/vendor/holder.min.js"><\/script>\n</body>\n\n</html>\n\n\n\n'},usePartial:!0,useData:!0})},379:(e,t,r)=>{var a=r(202);e.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,a,n){return'<main role="main">\n\n    <div id="myCarousel" class="carousel slide" data-ride="carousel">\n        <ol class="carousel-indicators">\n            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>\n            <li data-target="#myCarousel" data-slide-to="1"></li>\n            <li data-target="#myCarousel" data-slide-to="2"></li>\n        </ol>\n        <div class="carousel-inner">\n            <div class="carousel-item active">\n                <img class="first-slide"\n                    src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="\n                    alt="First slide">\n                <div class="container">\n                    <div class="carousel-caption text-left">\n                        <h1>Example headline.</h1>\n                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta\n                            gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                        <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>\n                    </div>\n                </div>\n            </div>\n            <div class="carousel-item">\n                <img class="second-slide"\n                    src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="\n                    alt="Second slide">\n                <div class="container">\n                    <div class="carousel-caption">\n                        <h1>Another example headline.</h1>\n                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta\n                            gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                        <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>\n                    </div>\n                </div>\n            </div>\n            <div class="carousel-item">\n                <img class="third-slide"\n                    src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="\n                    alt="Third slide">\n                <div class="container">\n                    <div class="carousel-caption text-right">\n                        <h1>One more for good measure.</h1>\n                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta\n                            gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                        <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">\n            <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n            <span class="sr-only">Previous</span>\n        </a>\n        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">\n            <span class="carousel-control-next-icon" aria-hidden="true"></span>\n            <span class="sr-only">Next</span>\n        </a>\n    </div>\n\n\n    \x3c!-- FOOTER --\x3e\n    <footer class="container">\n        <p class="float-right"><a href="#">Back to top</a></p>\n        <p>&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>\n    </footer>\n</main>\n\n\x3c!-- Start block --\x3e\n'},useData:!0})},834:(e,t,r)=>{"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var o=n(r(67)),s=a(r(558)),i=a(r(728)),l=n(r(392)),u=n(r(628)),c=a(r(982));function d(){var e=new o.HandlebarsEnvironment;return l.extend(e,o),e.SafeString=s.default,e.Exception=i.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var p=d();p.create=d,c.default(p),p.default=p,t.default=p,e.exports=t.default},67:(e,t,r)=>{"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=d;var n=r(392),o=a(r(728)),s=r(638),i=r(881),l=a(r(37)),u=r(293);t.VERSION="4.7.7",t.COMPILER_REVISION=8,t.LAST_COMPATIBLE_COMPILER_REVISION=7,t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};var c="[object Object]";function d(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},s.registerDefaultHelpers(this),i.registerDefaultDecorators(this)}d.prototype={constructor:d,logger:l.default,log:l.default.log,registerHelper:function(e,t){if(n.toString.call(e)===c){if(t)throw new o.default("Arg not supported with multiple helpers");n.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(n.toString.call(e)===c)n.extend(this.partials,e);else{if(void 0===t)throw new o.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if(n.toString.call(e)===c){if(t)throw new o.default("Arg not supported with multiple decorators");n.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){u.resetLoggedProperties()}};var p=l.default.log;t.log=p,t.createFrame=n.createFrame,t.logger=l.default},881:(e,t,r)=>{"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){n.default(e)};var a,n=(a=r(670))&&a.__esModule?a:{default:a}},670:(e,t,r)=>{"use strict";t.__esModule=!0;var a=r(392);t.default=function(e){e.registerDecorator("inline",(function(e,t,r,n){var o=e;return t.partials||(t.partials={},o=function(n,o){var s=r.partials;r.partials=a.extend({},s,t.partials);var i=e(n,o);return r.partials=s,i}),t.partials[n.args[0]]=n.fn,o}))},e.exports=t.default},728:(e,t)=>{"use strict";t.__esModule=!0;var r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function a(e,t){var n=t&&t.loc,o=void 0,s=void 0,i=void 0,l=void 0;n&&(o=n.start.line,s=n.end.line,i=n.start.column,l=n.end.column,e+=" - "+o+":"+i);for(var u=Error.prototype.constructor.call(this,e),c=0;c<r.length;c++)this[r[c]]=u[r[c]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{n&&(this.lineNumber=o,this.endLineNumber=s,Object.defineProperty?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:l,enumerable:!0})):(this.column=i,this.endColumn=l))}catch(e){}}a.prototype=new Error,t.default=a,e.exports=t.default},638:(e,t,r)=>{"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){n.default(e),o.default(e),s.default(e),i.default(e),l.default(e),u.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var n=a(r(342)),o=a(r(822)),s=a(r(905)),i=a(r(405)),l=a(r(702)),u=a(r(593)),c=a(r(978))},342:(e,t,r)=>{"use strict";t.__esModule=!0;var a=r(392);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,r){var n=r.inverse,o=r.fn;if(!0===t)return o(this);if(!1===t||null==t)return n(this);if(a.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):n(this);if(r.data&&r.ids){var s=a.createFrame(r.data);s.contextPath=a.appendContextPath(r.data.contextPath,r.name),r={data:s}}return o(t,r)}))},e.exports=t.default},822:(e,t,r)=>{"use strict";t.__esModule=!0;var a,n=r(392),o=(a=r(728))&&a.__esModule?a:{default:a};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new o.default("Must pass iterator to #each");var a,s=t.fn,i=t.inverse,l=0,u="",c=void 0,d=void 0;function p(t,r,a){c&&(c.key=t,c.index=r,c.first=0===r,c.last=!!a,d&&(c.contextPath=d+t)),u+=s(e[t],{data:c,blockParams:n.blockParams([e[t],t],[d+t,null])})}if(t.data&&t.ids&&(d=n.appendContextPath(t.data.contextPath,t.ids[0])+"."),n.isFunction(e)&&(e=e.call(this)),t.data&&(c=n.createFrame(t.data)),e&&"object"==typeof e)if(n.isArray(e))for(var f=e.length;l<f;l++)l in e&&p(l,l,l===e.length-1);else if(r.g.Symbol&&e[r.g.Symbol.iterator]){for(var h=[],m=e[r.g.Symbol.iterator](),v=m.next();!v.done;v=m.next())h.push(v.value);for(f=(e=h).length;l<f;l++)p(l,l,l===e.length-1)}else a=void 0,Object.keys(e).forEach((function(e){void 0!==a&&p(a,l-1),a=e,l++})),void 0!==a&&p(a,l-1,!0);return 0===l&&(u=i(this)),u}))},e.exports=t.default},905:(e,t,r)=>{"use strict";t.__esModule=!0;var a,n=(a=r(728))&&a.__esModule?a:{default:a};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new n.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},405:(e,t,r)=>{"use strict";t.__esModule=!0;var a,n=r(392),o=(a=r(728))&&a.__esModule?a:{default:a};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new o.default("#if requires exactly one argument");return n.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||n.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,r){if(2!=arguments.length)throw new o.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})}))},e.exports=t.default},702:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],r=arguments[arguments.length-1],a=0;a<arguments.length-1;a++)t.push(arguments[a]);var n=1;null!=r.hash.level?n=r.hash.level:r.data&&null!=r.data.level&&(n=r.data.level),t[0]=n,e.log.apply(e,t)}))},e.exports=t.default},593:(e,t)=>{"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,r){return e?r.lookupProperty(e,t):e}))},e.exports=t.default},978:(e,t,r)=>{"use strict";t.__esModule=!0;var a,n=r(392),o=(a=r(728))&&a.__esModule?a:{default:a};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new o.default("#with requires exactly one argument");n.isFunction(e)&&(e=e.call(this));var r=t.fn;if(n.isEmpty(e))return t.inverse(this);var a=t.data;return t.data&&t.ids&&((a=n.createFrame(t.data)).contextPath=n.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:a,blockParams:n.blockParams([e],[a&&a.contextPath])})}))},e.exports=t.default},572:(e,t,r)=>{"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return a.extend.apply(void 0,[Object.create(null)].concat(t))};var a=r(392)},293:(e,t,r)=>{"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:a.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:a.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return function(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==o[e]&&(o[e]=!0,n.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){Object.keys(o).forEach((function(e){delete o[e]}))};var a=r(572),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(37)),o=Object.create(null)},5:(e,t)=>{"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){return"function"!=typeof e?e:function(){return arguments[arguments.length-1]=t(arguments[arguments.length-1]),e.apply(this,arguments)}}},37:(e,t,r)=>{"use strict";t.__esModule=!0;var a=r(392),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=a.indexOf(n.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=n.lookupLevel(e),"undefined"!=typeof console&&n.lookupLevel(n.level)<=e){var t=n.methodMap[e];console[t]||(t="log");for(var r=arguments.length,a=Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];console[t].apply(console,a)}}};t.default=n,e.exports=t.default},982:(e,t,r)=>{"use strict";t.__esModule=!0,t.default=function(e){var t=void 0!==r.g?r.g:window,a=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=a),e}},e.exports=t.default},628:(e,t,r)=>{"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=s.COMPILER_REVISION;if(!(t>=s.LAST_COMPATIBLE_COMPILER_REVISION&&t<=s.COMPILER_REVISION)){if(t<s.LAST_COMPATIBLE_COMPILER_REVISION){var a=s.REVISION_CHANGES[r],n=s.REVISION_CHANGES[t];throw new o.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+a+") or downgrade your runtime to an older version ("+n+").")}throw new o.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new o.default("No environment passed to template");if(!e||!e.main)throw new o.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0],a={strict:function(e,t,r){if(!e||!(t in e))throw new o.default('"'+t+'" not defined in '+e,{loc:r});return a.lookupProperty(e,t)},lookupProperty:function(e,t){var r=e[t];return null==r||Object.prototype.hasOwnProperty.call(e,t)||u.resultIsAllowed(r,a.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++)if(null!=(e[n]&&a.lookupProperty(e[n],t)))return e[n][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:n.escapeExpression,invokePartial:function(r,a,s){s.hash&&(a=n.extend({},a,s.hash),s.ids&&(s.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,a,s);var i=n.extend({},s,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),l=t.VM.invokePartial.call(this,r,a,i);if(null==l&&t.compile&&(s.partials[s.name]=t.compile(r,e.compilerOptions,t),l=s.partials[s.name](a,i)),null!=l){if(s.indent){for(var u=l.split("\n"),c=0,d=u.length;c<d&&(u[c]||c+1!==d);c++)u[c]=s.indent+u[c];l=u.join("\n")}return l}throw new o.default("The partial "+s.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,a,n){var o=this.programs[e],s=this.fn(e);return t||n||a||r?o=c(this,e,s,t,r,a,n):o||(o=this.programs[e]=c(this,e,s)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=n.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function d(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=r.data;d._setup(r),!r.partial&&e.useData&&(n=function(e,t){return t&&"root"in t||((t=t?s.createFrame(t):{}).root=e),t}(t,n));var o=void 0,i=e.useBlockParams?[]:void 0;function l(t){return""+e.main(a,t,a.helpers,a.partials,n,i,o)}return e.useDepths&&(o=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(l=p(e.main,l,a,r.depths||[],n,i))(t,r)}return d.isTop=!0,d._setup=function(o){if(o.partial)a.protoAccessControl=o.protoAccessControl,a.helpers=o.helpers,a.partials=o.partials,a.decorators=o.decorators,a.hooks=o.hooks;else{var s=n.extend({},t.helpers,o.helpers);!function(e,t){Object.keys(e).forEach((function(r){var a=e[r];e[r]=function(e,t){var r=t.lookupProperty;return l.wrapHelper(e,(function(e){return n.extend({lookupProperty:r},e)}))}(a,t)}))}(s,a),a.helpers=s,e.usePartial&&(a.partials=a.mergeIfNeeded(o.partials,t.partials)),(e.usePartial||e.useDecorators)&&(a.decorators=n.extend({},t.decorators,o.decorators)),a.hooks={},a.protoAccessControl=u.createProtoAccessControl(o);var c=o.allowCallsToHelperMissing||r;i.moveHelperToHooks(a,"helperMissing",c),i.moveHelperToHooks(a,"blockHelperMissing",c)}},d._child=function(t,r,n,s){if(e.useBlockParams&&!n)throw new o.default("must pass block params");if(e.useDepths&&!s)throw new o.default("must pass parent depths");return c(a,t,e[t],r,0,n,s)},d},t.wrapProgram=c,t.resolvePartial=function(e,t,r){return e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name],e},t.invokePartial=function(e,t,r){var a=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var i=void 0;if(r.fn&&r.fn!==d&&function(){r.data=s.createFrame(r.data);var e=r.fn;i=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=s.createFrame(r.data),r.data["partial-block"]=a,e(t,r)},e.partials&&(r.partials=n.extend({},r.partials,e.partials))}(),void 0===e&&i&&(e=i),void 0===e)throw new o.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=d;var a,n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(392)),o=(a=r(728))&&a.__esModule?a:{default:a},s=r(67),i=r(638),l=r(5),u=r(293);function c(e,t,r,a,n,o,s){function i(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=s;return!s||t==s[0]||t===e.nullContext&&null===s[0]||(i=[t].concat(s)),r(e,t,e.helpers,e.partials,n.data||a,o&&[n.blockParams].concat(o),i)}return(i=p(r,i,e,s,a,o)).program=t,i.depth=s?s.length:0,i.blockParams=n||0,i}function d(){return""}function p(e,t,r,a,o,s){if(e.decorator){var i={};t=e.decorator(t,i,r,a&&a[0],o,s,a),n.extend(t,i)}return t}},558:(e,t)=>{"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},392:(e,t)=>{"use strict";t.__esModule=!0,t.extend=s,t.indexOf=function(e,t){for(var r=0,a=e.length;r<a;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return n.test(e)?e.replace(a,o):e},t.isEmpty=function(e){return!e&&0!==e||!(!u(e)||0!==e.length)},t.createFrame=function(e){var t=s({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},a=/[&<>"'`=]/g,n=/[&<>"'`=]/;function o(e){return r[e]}function s(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var i=Object.prototype.toString;t.toString=i;var l=function(e){return"function"==typeof e};l(/x/)&&(t.isFunction=l=function(e){return"function"==typeof e&&"[object Function]"===i.call(e)}),t.isFunction=l;var u=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===i.call(e)};t.isArray=u},202:(e,t,r)=>{e.exports=r(834).default}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{console.log("start");const e=r(378);document.body.innerHTML=e({title:"Handlebars Webpack Example",message:"Hello, Handlebars!"})})()})();