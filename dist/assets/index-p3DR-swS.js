(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function vv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gf={exports:{}},aa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function XS(){if(Zm)return aa;Zm=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:h,ref:o!==void 0?o:null,props:c}}return aa.Fragment=t,aa.jsx=i,aa.jsxs=i,aa}var Jm;function WS(){return Jm||(Jm=1,gf.exports=XS()),gf.exports}var J=WS(),vf={exports:{}},Z={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function ZS(){if($m)return Z;$m=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function S(b){return b===null||typeof b!="object"?null:(b=E&&b[E]||b["@@iterator"],typeof b=="function"?b:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,X={};function ee(b,x,P){this.props=b,this.context=x,this.refs=X,this.updater=P||k}ee.prototype.isReactComponent={},ee.prototype.setState=function(b,x){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,x,"setState")},ee.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function Le(){}Le.prototype=ee.prototype;function Oe(b,x,P){this.props=b,this.context=x,this.refs=X,this.updater=P||k}var _e=Oe.prototype=new Le;_e.constructor=Oe,L(_e,ee.prototype),_e.isPureReactComponent=!0;var qe=Array.isArray,le={H:null,A:null,T:null,S:null,V:null},We=Object.prototype.hasOwnProperty;function nt(b,x,P,z,V,ue){return P=ue.ref,{$$typeof:s,type:b,key:x,ref:P!==void 0?P:null,props:ue}}function ot(b,x){return nt(b.type,x,void 0,void 0,void 0,b.props)}function pt(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function Mn(b){var x={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(P){return x[P]})}var on=/\/+/g;function it(b,x){return typeof b=="object"&&b!==null&&b.key!=null?Mn(""+b.key):x.toString(36)}function Ei(){}function Si(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Ei,Ei):(b.status="pending",b.then(function(x){b.status==="pending"&&(b.status="fulfilled",b.value=x)},function(x){b.status==="pending"&&(b.status="rejected",b.reason=x)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function st(b,x,P,z,V){var ue=typeof b;(ue==="undefined"||ue==="boolean")&&(b=null);var W=!1;if(b===null)W=!0;else switch(ue){case"bigint":case"string":case"number":W=!0;break;case"object":switch(b.$$typeof){case s:case t:W=!0;break;case y:return W=b._init,st(W(b._payload),x,P,z,V)}}if(W)return V=V(b),W=z===""?"."+it(b,0):z,qe(V)?(P="",W!=null&&(P=W.replace(on,"$&/")+"/"),st(V,x,P,"",function(xn){return xn})):V!=null&&(pt(V)&&(V=ot(V,P+(V.key==null||b&&b.key===V.key?"":(""+V.key).replace(on,"$&/")+"/")+W)),x.push(V)),1;W=0;var bt=z===""?".":z+":";if(qe(b))for(var we=0;we<b.length;we++)z=b[we],ue=bt+it(z,we),W+=st(z,x,P,ue,V);else if(we=S(b),typeof we=="function")for(b=we.call(b),we=0;!(z=b.next()).done;)z=z.value,ue=bt+it(z,we++),W+=st(z,x,P,ue,V);else if(ue==="object"){if(typeof b.then=="function")return st(Si(b),x,P,z,V);throw x=String(b),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return W}function D(b,x,P){if(b==null)return b;var z=[],V=0;return st(b,z,"","",function(ue){return x.call(P,ue,V++)}),z}function H(b){if(b._status===-1){var x=b._result;x=x(),x.then(function(P){(b._status===0||b._status===-1)&&(b._status=1,b._result=P)},function(P){(b._status===0||b._status===-1)&&(b._status=2,b._result=P)}),b._status===-1&&(b._status=0,b._result=x)}if(b._status===1)return b._result.default;throw b._result}var Y=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function Se(){}return Z.Children={map:D,forEach:function(b,x,P){D(b,function(){x.apply(this,arguments)},P)},count:function(b){var x=0;return D(b,function(){x++}),x},toArray:function(b){return D(b,function(x){return x})||[]},only:function(b){if(!pt(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Z.Component=ee,Z.Fragment=i,Z.Profiler=o,Z.PureComponent=Oe,Z.StrictMode=a,Z.Suspense=_,Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,Z.__COMPILER_RUNTIME={__proto__:null,c:function(b){return le.H.useMemoCache(b)}},Z.cache=function(b){return function(){return b.apply(null,arguments)}},Z.cloneElement=function(b,x,P){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var z=L({},b.props),V=b.key,ue=void 0;if(x!=null)for(W in x.ref!==void 0&&(ue=void 0),x.key!==void 0&&(V=""+x.key),x)!We.call(x,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&x.ref===void 0||(z[W]=x[W]);var W=arguments.length-2;if(W===1)z.children=P;else if(1<W){for(var bt=Array(W),we=0;we<W;we++)bt[we]=arguments[we+2];z.children=bt}return nt(b.type,V,void 0,void 0,ue,z)},Z.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:c,_context:b},b},Z.createElement=function(b,x,P){var z,V={},ue=null;if(x!=null)for(z in x.key!==void 0&&(ue=""+x.key),x)We.call(x,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(V[z]=x[z]);var W=arguments.length-2;if(W===1)V.children=P;else if(1<W){for(var bt=Array(W),we=0;we<W;we++)bt[we]=arguments[we+2];V.children=bt}if(b&&b.defaultProps)for(z in W=b.defaultProps,W)V[z]===void 0&&(V[z]=W[z]);return nt(b,ue,void 0,void 0,null,V)},Z.createRef=function(){return{current:null}},Z.forwardRef=function(b){return{$$typeof:p,render:b}},Z.isValidElement=pt,Z.lazy=function(b){return{$$typeof:y,_payload:{_status:-1,_result:b},_init:H}},Z.memo=function(b,x){return{$$typeof:m,type:b,compare:x===void 0?null:x}},Z.startTransition=function(b){var x=le.T,P={};le.T=P;try{var z=b(),V=le.S;V!==null&&V(P,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(Se,Y)}catch(ue){Y(ue)}finally{le.T=x}},Z.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},Z.use=function(b){return le.H.use(b)},Z.useActionState=function(b,x,P){return le.H.useActionState(b,x,P)},Z.useCallback=function(b,x){return le.H.useCallback(b,x)},Z.useContext=function(b){return le.H.useContext(b)},Z.useDebugValue=function(){},Z.useDeferredValue=function(b,x){return le.H.useDeferredValue(b,x)},Z.useEffect=function(b,x,P){var z=le.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return z.useEffect(b,x)},Z.useId=function(){return le.H.useId()},Z.useImperativeHandle=function(b,x,P){return le.H.useImperativeHandle(b,x,P)},Z.useInsertionEffect=function(b,x){return le.H.useInsertionEffect(b,x)},Z.useLayoutEffect=function(b,x){return le.H.useLayoutEffect(b,x)},Z.useMemo=function(b,x){return le.H.useMemo(b,x)},Z.useOptimistic=function(b,x){return le.H.useOptimistic(b,x)},Z.useReducer=function(b,x,P){return le.H.useReducer(b,x,P)},Z.useRef=function(b){return le.H.useRef(b)},Z.useState=function(b){return le.H.useState(b)},Z.useSyncExternalStore=function(b,x,P){return le.H.useSyncExternalStore(b,x,P)},Z.useTransition=function(){return le.H.useTransition()},Z.version="19.1.0",Z}var eg;function lh(){return eg||(eg=1,vf.exports=ZS()),vf.exports}var ct=lh();const JS=vv(ct);var yf={exports:{}},la={},Ef={exports:{}},Sf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function $S(){return tg||(tg=1,function(s){function t(D,H){var Y=D.length;D.push(H);e:for(;0<Y;){var Se=Y-1>>>1,b=D[Se];if(0<o(b,H))D[Se]=H,D[Y]=b,Y=Se;else break e}}function i(D){return D.length===0?null:D[0]}function a(D){if(D.length===0)return null;var H=D[0],Y=D.pop();if(Y!==H){D[0]=Y;e:for(var Se=0,b=D.length,x=b>>>1;Se<x;){var P=2*(Se+1)-1,z=D[P],V=P+1,ue=D[V];if(0>o(z,Y))V<b&&0>o(ue,z)?(D[Se]=ue,D[V]=Y,Se=V):(D[Se]=z,D[P]=Y,Se=P);else if(V<b&&0>o(ue,Y))D[Se]=ue,D[V]=Y,Se=V;else break e}}return H}function o(D,H){var Y=D.sortIndex-H.sortIndex;return Y!==0?Y:D.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();s.unstable_now=function(){return h.now()-p}}var _=[],m=[],y=1,E=null,S=3,k=!1,L=!1,X=!1,ee=!1,Le=typeof setTimeout=="function"?setTimeout:null,Oe=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;function qe(D){for(var H=i(m);H!==null;){if(H.callback===null)a(m);else if(H.startTime<=D)a(m),H.sortIndex=H.expirationTime,t(_,H);else break;H=i(m)}}function le(D){if(X=!1,qe(D),!L)if(i(_)!==null)L=!0,We||(We=!0,it());else{var H=i(m);H!==null&&st(le,H.startTime-D)}}var We=!1,nt=-1,ot=5,pt=-1;function Mn(){return ee?!0:!(s.unstable_now()-pt<ot)}function on(){if(ee=!1,We){var D=s.unstable_now();pt=D;var H=!0;try{e:{L=!1,X&&(X=!1,Oe(nt),nt=-1),k=!0;var Y=S;try{t:{for(qe(D),E=i(_);E!==null&&!(E.expirationTime>D&&Mn());){var Se=E.callback;if(typeof Se=="function"){E.callback=null,S=E.priorityLevel;var b=Se(E.expirationTime<=D);if(D=s.unstable_now(),typeof b=="function"){E.callback=b,qe(D),H=!0;break t}E===i(_)&&a(_),qe(D)}else a(_);E=i(_)}if(E!==null)H=!0;else{var x=i(m);x!==null&&st(le,x.startTime-D),H=!1}}break e}finally{E=null,S=Y,k=!1}H=void 0}}finally{H?it():We=!1}}}var it;if(typeof _e=="function")it=function(){_e(on)};else if(typeof MessageChannel<"u"){var Ei=new MessageChannel,Si=Ei.port2;Ei.port1.onmessage=on,it=function(){Si.postMessage(null)}}else it=function(){Le(on,0)};function st(D,H){nt=Le(function(){D(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ot=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(D){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var Y=S;S=H;try{return D()}finally{S=Y}},s.unstable_requestPaint=function(){ee=!0},s.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Y=S;S=D;try{return H()}finally{S=Y}},s.unstable_scheduleCallback=function(D,H,Y){var Se=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Se+Y:Se):Y=Se,D){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=Y+b,D={id:y++,callback:H,priorityLevel:D,startTime:Y,expirationTime:b,sortIndex:-1},Y>Se?(D.sortIndex=Y,t(m,D),i(_)===null&&D===i(m)&&(X?(Oe(nt),nt=-1):X=!0,st(le,Y-Se))):(D.sortIndex=b,t(_,D),L||k||(L=!0,We||(We=!0,it()))),D},s.unstable_shouldYield=Mn,s.unstable_wrapCallback=function(D){var H=S;return function(){var Y=S;S=H;try{return D.apply(this,arguments)}finally{S=Y}}}}(Sf)),Sf}var ng;function eb(){return ng||(ng=1,Ef.exports=$S()),Ef.exports}var bf={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function tb(){if(ig)return lt;ig=1;var s=lh();function t(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(_,m,y){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:_,containerInfo:m,implementation:y}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,lt.createPortal=function(_,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(_,m,null,y)},lt.flushSync=function(_){var m=h.T,y=a.p;try{if(h.T=null,a.p=2,_)return _()}finally{h.T=m,a.p=y,a.d.f()}},lt.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(_,m))},lt.prefetchDNS=function(_){typeof _=="string"&&a.d.D(_)},lt.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var y=m.as,E=p(y,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,k=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?a.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:S,fetchPriority:k}):y==="script"&&a.d.X(_,{crossOrigin:E,integrity:S,fetchPriority:k,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},lt.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=p(m.as,m.crossOrigin);a.d.M(_,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(_)},lt.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,E=p(y,m.crossOrigin);a.d.L(_,y,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},lt.preloadModule=function(_,m){if(typeof _=="string")if(m){var y=p(m.as,m.crossOrigin);a.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(_)},lt.requestFormReset=function(_){a.d.r(_)},lt.unstable_batchedUpdates=function(_,m){return _(m)},lt.useFormState=function(_,m,y){return h.H.useFormState(_,m,y)},lt.useFormStatus=function(){return h.H.useHostTransitionStatus()},lt.version="19.1.0",lt}var sg;function nb(){if(sg)return bf.exports;sg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),bf.exports=tb(),bf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function ib(){if(rg)return la;rg=1;var s=eb(),t=lh(),i=nb();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function _(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,l=n;;){var u=r.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){r=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===r)return p(u),e;if(f===l)return p(u),n;f=f.sibling}throw Error(a(188))}if(r.return!==l.return)r=u,l=f;else{for(var d=!1,g=u.child;g;){if(g===r){d=!0,r=u,l=f;break}if(g===l){d=!0,l=u,r=f;break}g=g.sibling}if(!d){for(g=f.child;g;){if(g===r){d=!0,r=f,l=u;break}if(g===l){d=!0,l=f,r=u;break}g=g.sibling}if(!d)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,E=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),Oe=Symbol.for("react.consumer"),_e=Symbol.for("react.context"),qe=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),We=Symbol.for("react.suspense_list"),nt=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),pt=Symbol.for("react.activity"),Mn=Symbol.for("react.memo_cache_sentinel"),on=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=on&&e[on]||e["@@iterator"],typeof e=="function"?e:null)}var Ei=Symbol.for("react.client.reference");function Si(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ei?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case ee:return"Profiler";case X:return"StrictMode";case le:return"Suspense";case We:return"SuspenseList";case pt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case _e:return(e.displayName||"Context")+".Provider";case Oe:return(e._context.displayName||"Context")+".Consumer";case qe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nt:return n=e.displayName||null,n!==null?n:Si(e.type)||"Memo";case ot:n=e._payload,e=e._init;try{return Si(e(n))}catch{}}return null}var st=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Se=[],b=-1;function x(e){return{current:e}}function P(e){0>b||(e.current=Se[b],Se[b]=null,b--)}function z(e,n){b++,Se[b]=e.current,e.current=n}var V=x(null),ue=x(null),W=x(null),bt=x(null);function we(e,n){switch(z(W,n),z(ue,e),z(V,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Am(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Am(n),e=wm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(V),z(V,e)}function xn(){P(V),P(ue),P(W)}function tu(e){e.memoizedState!==null&&z(bt,e);var n=V.current,r=wm(n,e.type);n!==r&&(z(ue,e),z(V,r))}function Va(e){ue.current===e&&(P(V),P(ue)),bt.current===e&&(P(bt),ta._currentValue=Y)}var nu=Object.prototype.hasOwnProperty,iu=s.unstable_scheduleCallback,su=s.unstable_cancelCallback,R0=s.unstable_shouldYield,N0=s.unstable_requestPaint,Jt=s.unstable_now,O0=s.unstable_getCurrentPriorityLevel,rd=s.unstable_ImmediatePriority,ad=s.unstable_UserBlockingPriority,ja=s.unstable_NormalPriority,D0=s.unstable_LowPriority,ld=s.unstable_IdlePriority,I0=s.log,M0=s.unstable_setDisableYieldValue,ur=null,Tt=null;function kn(e){if(typeof I0=="function"&&M0(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(ur,e)}catch{}}var Ct=Math.clz32?Math.clz32:U0,x0=Math.log,k0=Math.LN2;function U0(e){return e>>>=0,e===0?32:31-(x0(e)/k0|0)|0}var Ga=256,Ya=4194304;function bi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fa(e,n,r){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~f,l!==0?u=bi(l):(d&=g,d!==0?u=bi(d):r||(r=g&~e,r!==0&&(u=bi(r))))):(g=l&~f,g!==0?u=bi(g):d!==0?u=bi(d):r||(r=l&~e,r!==0&&(u=bi(r)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:u}function cr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function L0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function od(){var e=Ga;return Ga<<=1,(Ga&4194048)===0&&(Ga=256),e}function ud(){var e=Ya;return Ya<<=1,(Ya&62914560)===0&&(Ya=4194304),e}function ru(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function fr(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function z0(e,n,r,l,u,f){var d=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var g=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(r=d&~r;0<r;){var O=31-Ct(r),M=1<<O;g[O]=0,v[O]=-1;var R=w[O];if(R!==null)for(w[O]=null,O=0;O<R.length;O++){var N=R[O];N!==null&&(N.lane&=-536870913)}r&=~M}l!==0&&cd(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(d&~n))}function cd(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Ct(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|r&4194090}function fd(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var l=31-Ct(r),u=1<<l;u&n|e[l]&n&&(e[l]|=n),r&=~u}}function au(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hd(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Ym(e.type))}function H0(e,n){var r=H.p;try{return H.p=e,n()}finally{H.p=r}}var Un=Math.random().toString(36).slice(2),rt="__reactFiber$"+Un,_t="__reactProps$"+Un,es="__reactContainer$"+Un,ou="__reactEvents$"+Un,P0="__reactListeners$"+Un,B0="__reactHandles$"+Un,dd="__reactResources$"+Un,hr="__reactMarker$"+Un;function uu(e){delete e[rt],delete e[_t],delete e[ou],delete e[P0],delete e[B0]}function ts(e){var n=e[rt];if(n)return n;for(var r=e.parentNode;r;){if(n=r[es]||r[rt]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Dm(e);e!==null;){if(r=e[rt])return r;e=Dm(e)}return n}e=r,r=e.parentNode}return null}function ns(e){if(e=e[rt]||e[es]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function dr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function is(e){var n=e[dd];return n||(n=e[dd]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ve(e){e[hr]=!0}var pd=new Set,_d={};function Ti(e,n){ss(e,n),ss(e+"Capture",n)}function ss(e,n){for(_d[e]=n,e=0;e<n.length;e++)pd.add(n[e])}var q0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),md={},gd={};function V0(e){return nu.call(gd,e)?!0:nu.call(md,e)?!1:q0.test(e)?gd[e]=!0:(md[e]=!0,!1)}function Qa(e,n,r){if(V0(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function Ka(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function un(e,n,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+l)}}var cu,vd;function rs(e){if(cu===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);cu=n&&n[1]||"",vd=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cu+e+vd}var fu=!1;function hu(e,n){if(!e||fu)return"";fu=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(N){var R=N}Reflect.construct(e,[],M)}else{try{M.call()}catch(N){R=N}e.call(M.prototype)}}else{try{throw Error()}catch(N){R=N}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),d=f[0],g=f[1];if(d&&g){var v=d.split(`
`),w=g.split(`
`);for(u=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;u<w.length&&!w[u].includes("DetermineComponentFrameRoot");)u++;if(l===v.length||u===w.length)for(l=v.length-1,u=w.length-1;1<=l&&0<=u&&v[l]!==w[u];)u--;for(;1<=l&&0<=u;l--,u--)if(v[l]!==w[u]){if(l!==1||u!==1)do if(l--,u--,0>u||v[l]!==w[u]){var O=`
`+v[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=u);break}}}finally{fu=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?rs(r):""}function j0(e){switch(e.tag){case 26:case 27:case 5:return rs(e.type);case 16:return rs("Lazy");case 13:return rs("Suspense");case 19:return rs("SuspenseList");case 0:case 15:return hu(e.type,!1);case 11:return hu(e.type.render,!1);case 1:return hu(e.type,!0);case 31:return rs("Activity");default:return""}}function yd(e){try{var n="";do n+=j0(e),e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ed(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function G0(e){var n=Ed(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(d){l=""+d,f.call(this,d)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(d){l=""+d},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xa(e){e._valueTracker||(e._valueTracker=G0(e))}function Sd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return e&&(l=Ed(e)?e.checked?"true":"false":e.value),e=l,e!==r?(n.setValue(e),!0):!1}function Wa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Y0=/[\n"\\]/g;function xt(e){return e.replace(Y0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function du(e,n,r,l,u,f,d,g){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),n!=null?d==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Mt(n)):e.value!==""+Mt(n)&&(e.value=""+Mt(n)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),n!=null?pu(e,d,Mt(n)):r!=null?pu(e,d,Mt(r)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Mt(g):e.removeAttribute("name")}function bd(e,n,r,l,u,f,d,g){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;r=r!=null?""+Mt(r):"",n=n!=null?""+Mt(n):r,g||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function pu(e,n,r){n==="number"&&Wa(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function as(e,n,r,l){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Mt(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Td(e,n,r){if(n!=null&&(n=""+Mt(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+Mt(r):""}function Cd(e,n,r,l){if(n==null){if(l!=null){if(r!=null)throw Error(a(92));if(st(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),n=r}r=Mt(n),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l)}function ls(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var F0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ad(e,n,r){var l=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,r):typeof r!="number"||r===0||F0.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function wd(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&r[u]!==l&&Ad(e,u,l)}else for(var f in n)n.hasOwnProperty(f)&&Ad(e,f,n[f])}function _u(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Za(e){return K0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var mu=null;function gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var os=null,us=null;function Rd(e){var n=ns(e);if(n&&(e=n.stateNode)){var r=e[_t]||null;e:switch(e=n.stateNode,n.type){case"input":if(du(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+xt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==e&&l.form===e.form){var u=l[_t]||null;if(!u)throw Error(a(90));du(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)l=r[n],l.form===e.form&&Sd(l)}break e;case"textarea":Td(e,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&as(e,!!r.multiple,n,!1)}}}var vu=!1;function Nd(e,n,r){if(vu)return e(n,r);vu=!0;try{var l=e(n);return l}finally{if(vu=!1,(os!==null||us!==null)&&(Ll(),os&&(n=os,e=us,us=os=null,Rd(n),e)))for(n=0;n<e.length;n++)Rd(e[n])}}function pr(e,n){var r=e.stateNode;if(r===null)return null;var l=r[_t]||null;if(l===null)return null;r=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(cn)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){yu=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{yu=!1}var Ln=null,Eu=null,Ja=null;function Od(){if(Ja)return Ja;var e,n=Eu,r=n.length,l,u="value"in Ln?Ln.value:Ln.textContent,f=u.length;for(e=0;e<r&&n[e]===u[e];e++);var d=r-e;for(l=1;l<=d&&n[r-l]===u[f-l];l++);return Ja=u.slice(e,1<l?1-l:void 0)}function $a(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Dd(){return!1}function mt(e){function n(r,l,u,f,d){this._reactName=r,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(r=e[g],this[g]=r?r(f):f[g]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:Dd,this.isPropagationStopped=Dd,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=mt(Ci),mr=y({},Ci,{view:0,detail:0}),X0=mt(mr),Su,bu,gr,nl=y({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(Su=e.screenX-gr.screenX,bu=e.screenY-gr.screenY):bu=Su=0,gr=e),Su)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),Id=mt(nl),W0=y({},nl,{dataTransfer:0}),Z0=mt(W0),J0=y({},mr,{relatedTarget:0}),Tu=mt(J0),$0=y({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),eE=mt($0),tE=y({},Ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nE=mt(tE),iE=y({},Ci,{data:0}),Md=mt(iE),sE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lE(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=aE[e])?!!n[e]:!1}function Cu(){return lE}var oE=y({},mr,{key:function(e){if(e.key){var n=sE[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?$a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uE=mt(oE),cE=y({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=mt(cE),fE=y({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),hE=mt(fE),dE=y({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),pE=mt(dE),_E=y({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mE=mt(_E),gE=y({},Ci,{newState:0,oldState:0}),vE=mt(gE),yE=[9,13,27,32],Au=cn&&"CompositionEvent"in window,vr=null;cn&&"documentMode"in document&&(vr=document.documentMode);var EE=cn&&"TextEvent"in window&&!vr,kd=cn&&(!Au||vr&&8<vr&&11>=vr),Ud=" ",Ld=!1;function zd(e,n){switch(e){case"keyup":return yE.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cs=!1;function SE(e,n){switch(e){case"compositionend":return Hd(n);case"keypress":return n.which!==32?null:(Ld=!0,Ud);case"textInput":return e=n.data,e===Ud&&Ld?null:e;default:return null}}function bE(e,n){if(cs)return e==="compositionend"||!Au&&zd(e,n)?(e=Od(),Ja=Eu=Ln=null,cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kd&&n.locale!=="ko"?null:n.data;default:return null}}var TE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!TE[e.type]:n==="textarea"}function Bd(e,n,r,l){os?us?us.push(l):us=[l]:os=l,n=Vl(n,"onChange"),0<n.length&&(r=new tl("onChange","change",null,r,l),e.push({event:r,listeners:n}))}var yr=null,Er=null;function CE(e){Em(e,0)}function il(e){var n=dr(e);if(Sd(n))return e}function qd(e,n){if(e==="change")return n}var Vd=!1;if(cn){var wu;if(cn){var Ru="oninput"in document;if(!Ru){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),Ru=typeof jd.oninput=="function"}wu=Ru}else wu=!1;Vd=wu&&(!document.documentMode||9<document.documentMode)}function Gd(){yr&&(yr.detachEvent("onpropertychange",Yd),Er=yr=null)}function Yd(e){if(e.propertyName==="value"&&il(Er)){var n=[];Bd(n,Er,e,gu(e)),Nd(CE,n)}}function AE(e,n,r){e==="focusin"?(Gd(),yr=n,Er=r,yr.attachEvent("onpropertychange",Yd)):e==="focusout"&&Gd()}function wE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(Er)}function RE(e,n){if(e==="click")return il(n)}function NE(e,n){if(e==="input"||e==="change")return il(n)}function OE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var At=typeof Object.is=="function"?Object.is:OE;function Sr(e,n){if(At(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var u=r[l];if(!nu.call(n,u)||!At(e[u],n[u]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qd(e,n){var r=Fd(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=n&&l>=n)return{node:r,offset:n-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Fd(r)}}function Kd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Kd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Wa(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Wa(e.document)}return n}function Nu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var DE=cn&&"documentMode"in document&&11>=document.documentMode,fs=null,Ou=null,br=null,Du=!1;function Wd(e,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Du||fs==null||fs!==Wa(l)||(l=fs,"selectionStart"in l&&Nu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),br&&Sr(br,l)||(br=l,l=Vl(Ou,"onSelect"),0<l.length&&(n=new tl("onSelect","select",null,n,r),e.push({event:n,listeners:l}),n.target=fs)))}function Ai(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var hs={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionrun:Ai("Transition","TransitionRun"),transitionstart:Ai("Transition","TransitionStart"),transitioncancel:Ai("Transition","TransitionCancel"),transitionend:Ai("Transition","TransitionEnd")},Iu={},Zd={};cn&&(Zd=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function wi(e){if(Iu[e])return Iu[e];if(!hs[e])return e;var n=hs[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Zd)return Iu[e]=n[r];return e}var Jd=wi("animationend"),$d=wi("animationiteration"),ep=wi("animationstart"),IE=wi("transitionrun"),ME=wi("transitionstart"),xE=wi("transitioncancel"),tp=wi("transitionend"),np=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function jt(e,n){np.set(e,n),Ti(n,[e])}var ip=new WeakMap;function kt(e,n){if(typeof e=="object"&&e!==null){var r=ip.get(e);return r!==void 0?r:(n={value:e,source:n,stack:yd(n)},ip.set(e,n),n)}return{value:e,source:n,stack:yd(n)}}var Ut=[],ds=0,xu=0;function sl(){for(var e=ds,n=xu=ds=0;n<e;){var r=Ut[n];Ut[n++]=null;var l=Ut[n];Ut[n++]=null;var u=Ut[n];Ut[n++]=null;var f=Ut[n];if(Ut[n++]=null,l!==null&&u!==null){var d=l.pending;d===null?u.next=u:(u.next=d.next,d.next=u),l.pending=u}f!==0&&sp(r,u,f)}}function rl(e,n,r,l){Ut[ds++]=e,Ut[ds++]=n,Ut[ds++]=r,Ut[ds++]=l,xu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ku(e,n,r,l){return rl(e,n,r,l),al(e)}function ps(e,n){return rl(e,null,null,n),al(e)}function sp(e,n,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var u=!1,f=e.return;f!==null;)f.childLanes|=r,l=f.alternate,l!==null&&(l.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ct(r),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=r|536870912),f):null}function al(e){if(50<Qr)throw Qr=0,Bc=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var _s={};function kE(e,n,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,n,r,l){return new kE(e,n,r,l)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fn(e,n){var r=e.alternate;return r===null?(r=wt(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function rp(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,r,l,u,f){var d=0;if(l=e,typeof e=="function")Uu(e)&&(d=1);else if(typeof e=="string")d=LS(e,r,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case pt:return e=wt(31,r,n,u),e.elementType=pt,e.lanes=f,e;case L:return Ri(r.children,u,f,n);case X:d=8,u|=24;break;case ee:return e=wt(12,r,n,u|2),e.elementType=ee,e.lanes=f,e;case le:return e=wt(13,r,n,u),e.elementType=le,e.lanes=f,e;case We:return e=wt(19,r,n,u),e.elementType=We,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:case _e:d=10;break e;case Oe:d=9;break e;case qe:d=11;break e;case nt:d=14;break e;case ot:d=16,l=null;break e}d=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=wt(d,r,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function Ri(e,n,r,l){return e=wt(7,e,l,n),e.lanes=r,e}function Lu(e,n,r){return e=wt(6,e,null,n),e.lanes=r,e}function zu(e,n,r){return n=wt(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ms=[],gs=0,ol=null,ul=0,Lt=[],zt=0,Ni=null,hn=1,dn="";function Oi(e,n){ms[gs++]=ul,ms[gs++]=ol,ol=e,ul=n}function ap(e,n,r){Lt[zt++]=hn,Lt[zt++]=dn,Lt[zt++]=Ni,Ni=e;var l=hn;e=dn;var u=32-Ct(l)-1;l&=~(1<<u),r+=1;var f=32-Ct(n)+u;if(30<f){var d=u-u%5;f=(l&(1<<d)-1).toString(32),l>>=d,u-=d,hn=1<<32-Ct(n)+u|r<<u|l,dn=f+e}else hn=1<<f|r<<u|l,dn=e}function Hu(e){e.return!==null&&(Oi(e,1),ap(e,1,0))}function Pu(e){for(;e===ol;)ol=ms[--gs],ms[gs]=null,ul=ms[--gs],ms[gs]=null;for(;e===Ni;)Ni=Lt[--zt],Lt[zt]=null,dn=Lt[--zt],Lt[zt]=null,hn=Lt[--zt],Lt[zt]=null}var ut=null,De=null,fe=!1,Di=null,$t=!1,Bu=Error(a(519));function Ii(e){var n=Error(a(418,""));throw Ar(kt(n,e)),Bu}function lp(e){var n=e.stateNode,r=e.type,l=e.memoizedProps;switch(n[rt]=e,n[_t]=l,r){case"dialog":re("cancel",n),re("close",n);break;case"iframe":case"object":case"embed":re("load",n);break;case"video":case"audio":for(r=0;r<Xr.length;r++)re(Xr[r],n);break;case"source":re("error",n);break;case"img":case"image":case"link":re("error",n),re("load",n);break;case"details":re("toggle",n);break;case"input":re("invalid",n),bd(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Xa(n);break;case"select":re("invalid",n);break;case"textarea":re("invalid",n),Cd(n,l.value,l.defaultValue,l.children),Xa(n)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||l.suppressHydrationWarning===!0||Cm(n.textContent,r)?(l.popover!=null&&(re("beforetoggle",n),re("toggle",n)),l.onScroll!=null&&re("scroll",n),l.onScrollEnd!=null&&re("scrollend",n),l.onClick!=null&&(n.onclick=jl),n=!0):n=!1,n||Ii(e)}function op(e){for(ut=e.return;ut;)switch(ut.tag){case 5:case 13:$t=!1;return;case 27:case 3:$t=!0;return;default:ut=ut.return}}function Tr(e){if(e!==ut)return!1;if(!fe)return op(e),fe=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||nf(e.type,e.memoizedProps)),r=!r),r&&De&&Ii(e),op(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(n===0){De=Yt(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;e=e.nextSibling}De=null}}else n===27?(n=De,Jn(e.type)?(e=lf,lf=null,De=e):De=n):De=ut?Yt(e.stateNode.nextSibling):null;return!0}function Cr(){De=ut=null,fe=!1}function up(){var e=Di;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),Di=null),e}function Ar(e){Di===null?Di=[e]:Di.push(e)}var qu=x(null),Mi=null,pn=null;function zn(e,n,r){z(qu,n._currentValue),n._currentValue=r}function _n(e){e._currentValue=qu.current,P(qu)}function Vu(e,n,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===r)break;e=e.return}}function ju(e,n,r,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var d=u.child;f=f.firstContext;e:for(;f!==null;){var g=f;f=u;for(var v=0;v<n.length;v++)if(g.context===n[v]){f.lanes|=r,g=f.alternate,g!==null&&(g.lanes|=r),Vu(f.return,r,e),l||(d=null);break e}f=g.next}}else if(u.tag===18){if(d=u.return,d===null)throw Error(a(341));d.lanes|=r,f=d.alternate,f!==null&&(f.lanes|=r),Vu(d,r,e),d=null}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===e){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}}function wr(e,n,r,l){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var d=u.alternate;if(d===null)throw Error(a(387));if(d=d.memoizedProps,d!==null){var g=u.type;At(u.pendingProps.value,d.value)||(e!==null?e.push(g):e=[g])}}else if(u===bt.current){if(d=u.alternate,d===null)throw Error(a(387));d.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ta):e=[ta])}u=u.return}e!==null&&ju(n,e,r,l),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xi(e){Mi=e,pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return cp(Mi,e)}function fl(e,n){return Mi===null&&xi(e),cp(e,n)}function cp(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},pn===null){if(e===null)throw Error(a(308));pn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else pn=pn.next=n;return r}var UE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},LE=s.unstable_scheduleCallback,zE=s.unstable_NormalPriority,Pe={$$typeof:_e,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new UE,data:new Map,refCount:0}}function Rr(e){e.refCount--,e.refCount===0&&LE(zE,function(){e.controller.abort()})}var Nr=null,Yu=0,vs=0,ys=null;function HE(e,n){if(Nr===null){var r=Nr=[];Yu=0,vs=Qc(),ys={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Yu++,n.then(fp,fp),n}function fp(){if(--Yu===0&&Nr!==null){ys!==null&&(ys.status="fulfilled");var e=Nr;Nr=null,vs=0,ys=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function PE(e,n){var r=[],l={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),l}var hp=D.S;D.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&HE(e,n),hp!==null&&hp(e,n)};var ki=x(null);function Fu(){var e=ki.current;return e!==null?e:Te.pooledCache}function hl(e,n){n===null?z(ki,ki.current):z(ki,n.pool)}function dp(){var e=Fu();return e===null?null:{parent:Pe._currentValue,pool:e}}var Or=Error(a(460)),pp=Error(a(474)),dl=Error(a(542)),Qu={then:function(){}};function _p(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pl(){}function mp(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(pl,pl),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vp(e),e;default:if(typeof n.status=="string")n.then(pl,pl);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vp(e),e}throw Dr=n,Or}}var Dr=null;function gp(){if(Dr===null)throw Error(a(459));var e=Dr;return Dr=null,e}function vp(e){if(e===Or||e===dl)throw Error(a(483))}var Hn=!1;function Ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Bn(e,n,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(de&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=al(e),sp(e,null,r),n}return rl(e,l,n,r),al(e)}function Ir(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,fd(e,r)}}function Wu(e,n){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var u=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var d={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?u=f=d:f=f.next=d,r=r.next}while(r!==null);f===null?u=f=n:f=f.next=n}else u=f=n;r={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Zu=!1;function Mr(){if(Zu){var e=ys;if(e!==null)throw e}}function xr(e,n,r,l){Zu=!1;var u=e.updateQueue;Hn=!1;var f=u.firstBaseUpdate,d=u.lastBaseUpdate,g=u.shared.pending;if(g!==null){u.shared.pending=null;var v=g,w=v.next;v.next=null,d===null?f=w:d.next=w,d=v;var O=e.alternate;O!==null&&(O=O.updateQueue,g=O.lastBaseUpdate,g!==d&&(g===null?O.firstBaseUpdate=w:g.next=w,O.lastBaseUpdate=v))}if(f!==null){var M=u.baseState;d=0,O=w=v=null,g=f;do{var R=g.lane&-536870913,N=R!==g.lane;if(N?(oe&R)===R:(l&R)===R){R!==0&&R===vs&&(Zu=!0),O!==null&&(O=O.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var Q=e,j=g;R=n;var ve=r;switch(j.tag){case 1:if(Q=j.payload,typeof Q=="function"){M=Q.call(ve,M,R);break e}M=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=j.payload,R=typeof Q=="function"?Q.call(ve,M,R):Q,R==null)break e;M=y({},M,R);break e;case 2:Hn=!0}}R=g.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=u.callbacks,N===null?u.callbacks=[R]:N.push(R))}else N={lane:R,tag:g.tag,payload:g.payload,callback:g.callback,next:null},O===null?(w=O=N,v=M):O=O.next=N,d|=R;if(g=g.next,g===null){if(g=u.shared.pending,g===null)break;N=g,g=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);O===null&&(v=M),u.baseState=v,u.firstBaseUpdate=w,u.lastBaseUpdate=O,f===null&&(u.shared.lanes=0),Kn|=d,e.lanes=d,e.memoizedState=M}}function yp(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Ep(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)yp(r[e],n)}var Es=x(null),_l=x(0);function Sp(e,n){e=bn,z(_l,e),z(Es,n),bn=e|n.baseLanes}function Ju(){z(_l,bn),z(Es,Es.current)}function $u(){bn=_l.current,P(Es),P(_l)}var qn=0,$=null,me=null,ze=null,ml=!1,Ss=!1,Ui=!1,gl=0,kr=0,bs=null,BE=0;function ke(){throw Error(a(321))}function ec(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!At(e[r],n[r]))return!1;return!0}function tc(e,n,r,l,u,f){return qn=f,$=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?s_:r_,Ui=!1,f=r(l,u),Ui=!1,Ss&&(f=Tp(n,r,l,u)),bp(e),f}function bp(e){D.H=Tl;var n=me!==null&&me.next!==null;if(qn=0,ze=me=$=null,ml=!1,kr=0,bs=null,n)throw Error(a(300));e===null||je||(e=e.dependencies,e!==null&&cl(e)&&(je=!0))}function Tp(e,n,r,l){$=e;var u=0;do{if(Ss&&(bs=null),kr=0,Ss=!1,25<=u)throw Error(a(301));if(u+=1,ze=me=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=QE,f=n(r,l)}while(Ss);return f}function qE(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?Ur(n):n,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&($.flags|=1024),n}function nc(){var e=gl!==0;return gl=0,e}function ic(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function sc(e){if(ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ml=!1}qn=0,ze=me=$=null,Ss=!1,kr=gl=0,bs=null}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?$.memoizedState=ze=e:ze=ze.next=e,ze}function He(){if(me===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var n=ze===null?$.memoizedState:ze.next;if(n!==null)ze=n,me=e;else{if(e===null)throw $.alternate===null?Error(a(467)):Error(a(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ze===null?$.memoizedState=ze=e:ze=ze.next=e}return ze}function rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ur(e){var n=kr;return kr+=1,bs===null&&(bs=[]),e=mp(bs,e,n),n=$,(ze===null?n.memoizedState:ze.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?s_:r_),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ur(e);if(e.$$typeof===_e)return at(e)}throw Error(a(438,String(e)))}function ac(e){var n=null,r=$.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var l=$.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=rc(),$.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),l=0;l<e;l++)r[l]=Mn;return n.index++,r}function mn(e,n){return typeof n=="function"?n(e):n}function yl(e){var n=He();return lc(n,me,e)}function lc(e,n,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var d=u.next;u.next=f.next,f.next=d}n.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var g=d=null,v=null,w=n,O=!1;do{var M=w.lane&-536870913;if(M!==w.lane?(oe&M)===M:(qn&M)===M){var R=w.revertLane;if(R===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),M===vs&&(O=!0);else if((qn&R)===R){w=w.next,R===vs&&(O=!0);continue}else M={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(g=v=M,d=f):v=v.next=M,$.lanes|=R,Kn|=R;M=w.action,Ui&&r(f,M),f=w.hasEagerState?w.eagerState:r(f,M)}else R={lane:M,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(g=v=R,d=f):v=v.next=R,$.lanes|=M,Kn|=M;w=w.next}while(w!==null&&w!==n);if(v===null?d=f:v.next=g,!At(f,e.memoizedState)&&(je=!0,O&&(r=ys,r!==null)))throw r;e.memoizedState=f,e.baseState=d,e.baseQueue=v,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function oc(e){var n=He(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,u=r.pending,f=n.memoizedState;if(u!==null){r.pending=null;var d=u=u.next;do f=e(f,d.action),d=d.next;while(d!==u);At(f,n.memoizedState)||(je=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,l]}function Cp(e,n,r){var l=$,u=He(),f=fe;if(f){if(r===void 0)throw Error(a(407));r=r()}else r=n();var d=!At((me||u).memoizedState,r);d&&(u.memoizedState=r,je=!0),u=u.queue;var g=Rp.bind(null,l,u,e);if(Lr(2048,8,g,[e]),u.getSnapshot!==n||d||ze!==null&&ze.memoizedState.tag&1){if(l.flags|=2048,Ts(9,El(),wp.bind(null,l,u,r,n),null),Te===null)throw Error(a(349));f||(qn&124)!==0||Ap(l,n,r)}return r}function Ap(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=$.updateQueue,n===null?(n=rc(),$.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function wp(e,n,r,l){n.value=r,n.getSnapshot=l,Np(n)&&Op(e)}function Rp(e,n,r){return r(function(){Np(n)&&Op(e)})}function Np(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!At(e,r)}catch{return!0}}function Op(e){var n=ps(e,2);n!==null&&It(n,e,2)}function uc(e){var n=gt();if(typeof e=="function"){var r=e;if(e=r(),Ui){kn(!0);try{r()}finally{kn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},n}function Dp(e,n,r,l){return e.baseState=r,lc(e,me,typeof l=="function"?l:mn)}function VE(e,n,r,l,u){if(bl(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){f.listeners.push(d)}};D.T!==null?r(!0):f.isTransition=!1,l(f),r=n.pending,r===null?(f.next=n.pending=f,Ip(n,f)):(f.next=r.next,n.pending=r.next=f)}}function Ip(e,n){var r=n.action,l=n.payload,u=e.state;if(n.isTransition){var f=D.T,d={};D.T=d;try{var g=r(u,l),v=D.S;v!==null&&v(d,g),Mp(e,n,g)}catch(w){cc(e,n,w)}finally{D.T=f}}else try{f=r(u,l),Mp(e,n,f)}catch(w){cc(e,n,w)}}function Mp(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){xp(e,n,l)},function(l){return cc(e,n,l)}):xp(e,n,r)}function xp(e,n,r){n.status="fulfilled",n.value=r,kp(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,Ip(e,r)))}function cc(e,n,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=r,kp(n),n=n.next;while(n!==l)}e.action=null}function kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Up(e,n){return n}function Lp(e,n){if(fe){var r=Te.formState;if(r!==null){e:{var l=$;if(fe){if(De){t:{for(var u=De,f=$t;u.nodeType!==8;){if(!f){u=null;break t}if(u=Yt(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){De=Yt(u.nextSibling),l=u.data==="F!";break e}}Ii(l)}l=!1}l&&(n=r[0])}}return r=gt(),r.memoizedState=r.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Up,lastRenderedState:n},r.queue=l,r=t_.bind(null,$,l),l.dispatch=r,l=uc(!1),f=_c.bind(null,$,!1,l.queue),l=gt(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,r=VE.bind(null,$,u,f,r),u.dispatch=r,l.memoizedState=e,[n,r,!1]}function zp(e){var n=He();return Hp(n,me,e)}function Hp(e,n,r){if(n=lc(e,n,Up)[0],e=yl(mn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ur(n)}catch(d){throw d===Or?dl:d}else l=n;n=He();var u=n.queue,f=u.dispatch;return r!==n.memoizedState&&($.flags|=2048,Ts(9,El(),jE.bind(null,u,r),null)),[l,f,e]}function jE(e,n){e.action=n}function Pp(e){var n=He(),r=me;if(r!==null)return Hp(n,r,e);He(),n=n.memoizedState,r=He();var l=r.queue.dispatch;return r.memoizedState=e,[n,l,!1]}function Ts(e,n,r,l){return e={tag:e,create:r,deps:l,inst:n,next:null},n=$.updateQueue,n===null&&(n=rc(),$.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,n.lastEffect=e),e}function El(){return{destroy:void 0,resource:void 0}}function Bp(){return He().memoizedState}function Sl(e,n,r,l){var u=gt();l=l===void 0?null:l,$.flags|=e,u.memoizedState=Ts(1|n,El(),r,l)}function Lr(e,n,r,l){var u=He();l=l===void 0?null:l;var f=u.memoizedState.inst;me!==null&&l!==null&&ec(l,me.memoizedState.deps)?u.memoizedState=Ts(n,f,r,l):($.flags|=e,u.memoizedState=Ts(1|n,f,r,l))}function qp(e,n){Sl(8390656,8,e,n)}function Vp(e,n){Lr(2048,8,e,n)}function jp(e,n){return Lr(4,2,e,n)}function Gp(e,n){return Lr(4,4,e,n)}function Yp(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fp(e,n,r){r=r!=null?r.concat([e]):null,Lr(4,4,Yp.bind(null,n,e),r)}function fc(){}function Qp(e,n){var r=He();n=n===void 0?null:n;var l=r.memoizedState;return n!==null&&ec(n,l[1])?l[0]:(r.memoizedState=[e,n],e)}function Kp(e,n){var r=He();n=n===void 0?null:n;var l=r.memoizedState;if(n!==null&&ec(n,l[1]))return l[0];if(l=e(),Ui){kn(!0);try{e()}finally{kn(!1)}}return r.memoizedState=[l,n],l}function hc(e,n,r){return r===void 0||(qn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=r,e=Z_(),$.lanes|=e,Kn|=e,r)}function Xp(e,n,r,l){return At(r,n)?r:Es.current!==null?(e=hc(e,r,l),At(e,n)||(je=!0),e):(qn&42)===0?(je=!0,e.memoizedState=r):(e=Z_(),$.lanes|=e,Kn|=e,n)}function Wp(e,n,r,l,u){var f=H.p;H.p=f!==0&&8>f?f:8;var d=D.T,g={};D.T=g,_c(e,!1,n,r);try{var v=u(),w=D.S;if(w!==null&&w(g,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=PE(v,l);zr(e,n,O,Dt(e))}else zr(e,n,l,Dt(e))}catch(M){zr(e,n,{then:function(){},status:"rejected",reason:M},Dt())}finally{H.p=f,D.T=d}}function GE(){}function dc(e,n,r,l){if(e.tag!==5)throw Error(a(476));var u=Zp(e).queue;Wp(e,u,n,Y,r===null?GE:function(){return Jp(e),r(l)})}function Zp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:Y},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Jp(e){var n=Zp(e).next.queue;zr(e,n,{},Dt())}function pc(){return at(ta)}function $p(){return He().memoizedState}function e_(){return He().memoizedState}function YE(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Dt();e=Pn(r);var l=Bn(n,e,r);l!==null&&(It(l,n,r),Ir(l,n,r)),n={cache:Gu()},e.payload=n;return}n=n.return}}function FE(e,n,r){var l=Dt();r={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},bl(e)?n_(n,r):(r=ku(e,n,r,l),r!==null&&(It(r,e,l),i_(r,n,l)))}function t_(e,n,r){var l=Dt();zr(e,n,r,l)}function zr(e,n,r,l){var u={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(bl(e))n_(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var d=n.lastRenderedState,g=f(d,r);if(u.hasEagerState=!0,u.eagerState=g,At(g,d))return rl(e,n,u,0),Te===null&&sl(),!1}catch{}finally{}if(r=ku(e,n,u,l),r!==null)return It(r,e,l),i_(r,n,l),!0}return!1}function _c(e,n,r,l){if(l={lane:2,revertLane:Qc(),action:l,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(a(479))}else n=ku(e,r,l,2),n!==null&&It(n,e,2)}function bl(e){var n=e.alternate;return e===$||n!==null&&n===$}function n_(e,n){Ss=ml=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function i_(e,n,r){if((r&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,fd(e,r)}}var Tl={readContext:at,use:vl,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke},s_={readContext:at,use:vl,useCallback:function(e,n){return gt().memoizedState=[e,n===void 0?null:n],e},useContext:at,useEffect:qp,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,Sl(4194308,4,Yp.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Sl(4194308,4,e,n)},useInsertionEffect:function(e,n){Sl(4,2,e,n)},useMemo:function(e,n){var r=gt();n=n===void 0?null:n;var l=e();if(Ui){kn(!0);try{e()}finally{kn(!1)}}return r.memoizedState=[l,n],l},useReducer:function(e,n,r){var l=gt();if(r!==void 0){var u=r(n);if(Ui){kn(!0);try{r(n)}finally{kn(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=FE.bind(null,$,e),[l.memoizedState,e]},useRef:function(e){var n=gt();return e={current:e},n.memoizedState=e},useState:function(e){e=uc(e);var n=e.queue,r=t_.bind(null,$,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:fc,useDeferredValue:function(e,n){var r=gt();return hc(r,e,n)},useTransition:function(){var e=uc(!1);return e=Wp.bind(null,$,e.queue,!0,!1),gt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var l=$,u=gt();if(fe){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Te===null)throw Error(a(349));(oe&124)!==0||Ap(l,n,r)}u.memoizedState=r;var f={value:r,getSnapshot:n};return u.queue=f,qp(Rp.bind(null,l,f,e),[e]),l.flags|=2048,Ts(9,El(),wp.bind(null,l,f,r,n),null),r},useId:function(){var e=gt(),n=Te.identifierPrefix;if(fe){var r=dn,l=hn;r=(l&~(1<<32-Ct(l)-1)).toString(32)+r,n="«"+n+"R"+r,r=gl++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=BE++,n="«"+n+"r"+r.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:pc,useFormState:Lp,useActionState:Lp,useOptimistic:function(e){var n=gt();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=_c.bind(null,$,!0,r),r.dispatch=n,[e,n]},useMemoCache:ac,useCacheRefresh:function(){return gt().memoizedState=YE.bind(null,$)}},r_={readContext:at,use:vl,useCallback:Qp,useContext:at,useEffect:Vp,useImperativeHandle:Fp,useInsertionEffect:jp,useLayoutEffect:Gp,useMemo:Kp,useReducer:yl,useRef:Bp,useState:function(){return yl(mn)},useDebugValue:fc,useDeferredValue:function(e,n){var r=He();return Xp(r,me.memoizedState,e,n)},useTransition:function(){var e=yl(mn)[0],n=He().memoizedState;return[typeof e=="boolean"?e:Ur(e),n]},useSyncExternalStore:Cp,useId:$p,useHostTransitionStatus:pc,useFormState:zp,useActionState:zp,useOptimistic:function(e,n){var r=He();return Dp(r,me,e,n)},useMemoCache:ac,useCacheRefresh:e_},QE={readContext:at,use:vl,useCallback:Qp,useContext:at,useEffect:Vp,useImperativeHandle:Fp,useInsertionEffect:jp,useLayoutEffect:Gp,useMemo:Kp,useReducer:oc,useRef:Bp,useState:function(){return oc(mn)},useDebugValue:fc,useDeferredValue:function(e,n){var r=He();return me===null?hc(r,e,n):Xp(r,me.memoizedState,e,n)},useTransition:function(){var e=oc(mn)[0],n=He().memoizedState;return[typeof e=="boolean"?e:Ur(e),n]},useSyncExternalStore:Cp,useId:$p,useHostTransitionStatus:pc,useFormState:Pp,useActionState:Pp,useOptimistic:function(e,n){var r=He();return me!==null?Dp(r,me,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:ac,useCacheRefresh:e_},Cs=null,Hr=0;function Cl(e){var n=Hr;return Hr+=1,Cs===null&&(Cs=[]),mp(Cs,e,n)}function Pr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===E?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function a_(e){var n=e._init;return n(e._payload)}function l_(e){function n(C,T){if(e){var A=C.deletions;A===null?(C.deletions=[T],C.flags|=16):A.push(T)}}function r(C,T){if(!e)return null;for(;T!==null;)n(C,T),T=T.sibling;return null}function l(C){for(var T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function u(C,T){return C=fn(C,T),C.index=0,C.sibling=null,C}function f(C,T,A){return C.index=A,e?(A=C.alternate,A!==null?(A=A.index,A<T?(C.flags|=67108866,T):A):(C.flags|=67108866,T)):(C.flags|=1048576,T)}function d(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function g(C,T,A,I){return T===null||T.tag!==6?(T=Lu(A,C.mode,I),T.return=C,T):(T=u(T,A),T.return=C,T)}function v(C,T,A,I){var B=A.type;return B===L?O(C,T,A.props.children,I,A.key):T!==null&&(T.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ot&&a_(B)===T.type)?(T=u(T,A.props),Pr(T,A),T.return=C,T):(T=ll(A.type,A.key,A.props,null,C.mode,I),Pr(T,A),T.return=C,T)}function w(C,T,A,I){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=zu(A,C.mode,I),T.return=C,T):(T=u(T,A.children||[]),T.return=C,T)}function O(C,T,A,I,B){return T===null||T.tag!==7?(T=Ri(A,C.mode,I,B),T.return=C,T):(T=u(T,A),T.return=C,T)}function M(C,T,A){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Lu(""+T,C.mode,A),T.return=C,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case S:return A=ll(T.type,T.key,T.props,null,C.mode,A),Pr(A,T),A.return=C,A;case k:return T=zu(T,C.mode,A),T.return=C,T;case ot:var I=T._init;return T=I(T._payload),M(C,T,A)}if(st(T)||it(T))return T=Ri(T,C.mode,A,null),T.return=C,T;if(typeof T.then=="function")return M(C,Cl(T),A);if(T.$$typeof===_e)return M(C,fl(C,T),A);Al(C,T)}return null}function R(C,T,A,I){var B=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return B!==null?null:g(C,T,""+A,I);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case S:return A.key===B?v(C,T,A,I):null;case k:return A.key===B?w(C,T,A,I):null;case ot:return B=A._init,A=B(A._payload),R(C,T,A,I)}if(st(A)||it(A))return B!==null?null:O(C,T,A,I,null);if(typeof A.then=="function")return R(C,T,Cl(A),I);if(A.$$typeof===_e)return R(C,T,fl(C,A),I);Al(C,A)}return null}function N(C,T,A,I,B){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return C=C.get(A)||null,g(T,C,""+I,B);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case S:return C=C.get(I.key===null?A:I.key)||null,v(T,C,I,B);case k:return C=C.get(I.key===null?A:I.key)||null,w(T,C,I,B);case ot:var te=I._init;return I=te(I._payload),N(C,T,A,I,B)}if(st(I)||it(I))return C=C.get(A)||null,O(T,C,I,B,null);if(typeof I.then=="function")return N(C,T,A,Cl(I),B);if(I.$$typeof===_e)return N(C,T,A,fl(T,I),B);Al(T,I)}return null}function Q(C,T,A,I){for(var B=null,te=null,q=T,G=T=0,Ye=null;q!==null&&G<A.length;G++){q.index>G?(Ye=q,q=null):Ye=q.sibling;var ce=R(C,q,A[G],I);if(ce===null){q===null&&(q=Ye);break}e&&q&&ce.alternate===null&&n(C,q),T=f(ce,T,G),te===null?B=ce:te.sibling=ce,te=ce,q=Ye}if(G===A.length)return r(C,q),fe&&Oi(C,G),B;if(q===null){for(;G<A.length;G++)q=M(C,A[G],I),q!==null&&(T=f(q,T,G),te===null?B=q:te.sibling=q,te=q);return fe&&Oi(C,G),B}for(q=l(q);G<A.length;G++)Ye=N(q,C,G,A[G],I),Ye!==null&&(e&&Ye.alternate!==null&&q.delete(Ye.key===null?G:Ye.key),T=f(Ye,T,G),te===null?B=Ye:te.sibling=Ye,te=Ye);return e&&q.forEach(function(ii){return n(C,ii)}),fe&&Oi(C,G),B}function j(C,T,A,I){if(A==null)throw Error(a(151));for(var B=null,te=null,q=T,G=T=0,Ye=null,ce=A.next();q!==null&&!ce.done;G++,ce=A.next()){q.index>G?(Ye=q,q=null):Ye=q.sibling;var ii=R(C,q,ce.value,I);if(ii===null){q===null&&(q=Ye);break}e&&q&&ii.alternate===null&&n(C,q),T=f(ii,T,G),te===null?B=ii:te.sibling=ii,te=ii,q=Ye}if(ce.done)return r(C,q),fe&&Oi(C,G),B;if(q===null){for(;!ce.done;G++,ce=A.next())ce=M(C,ce.value,I),ce!==null&&(T=f(ce,T,G),te===null?B=ce:te.sibling=ce,te=ce);return fe&&Oi(C,G),B}for(q=l(q);!ce.done;G++,ce=A.next())ce=N(q,C,G,ce.value,I),ce!==null&&(e&&ce.alternate!==null&&q.delete(ce.key===null?G:ce.key),T=f(ce,T,G),te===null?B=ce:te.sibling=ce,te=ce);return e&&q.forEach(function(KS){return n(C,KS)}),fe&&Oi(C,G),B}function ve(C,T,A,I){if(typeof A=="object"&&A!==null&&A.type===L&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case S:e:{for(var B=A.key;T!==null;){if(T.key===B){if(B=A.type,B===L){if(T.tag===7){r(C,T.sibling),I=u(T,A.props.children),I.return=C,C=I;break e}}else if(T.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ot&&a_(B)===T.type){r(C,T.sibling),I=u(T,A.props),Pr(I,A),I.return=C,C=I;break e}r(C,T);break}else n(C,T);T=T.sibling}A.type===L?(I=Ri(A.props.children,C.mode,I,A.key),I.return=C,C=I):(I=ll(A.type,A.key,A.props,null,C.mode,I),Pr(I,A),I.return=C,C=I)}return d(C);case k:e:{for(B=A.key;T!==null;){if(T.key===B)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){r(C,T.sibling),I=u(T,A.children||[]),I.return=C,C=I;break e}else{r(C,T);break}else n(C,T);T=T.sibling}I=zu(A,C.mode,I),I.return=C,C=I}return d(C);case ot:return B=A._init,A=B(A._payload),ve(C,T,A,I)}if(st(A))return Q(C,T,A,I);if(it(A)){if(B=it(A),typeof B!="function")throw Error(a(150));return A=B.call(A),j(C,T,A,I)}if(typeof A.then=="function")return ve(C,T,Cl(A),I);if(A.$$typeof===_e)return ve(C,T,fl(C,A),I);Al(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,T!==null&&T.tag===6?(r(C,T.sibling),I=u(T,A),I.return=C,C=I):(r(C,T),I=Lu(A,C.mode,I),I.return=C,C=I),d(C)):r(C,T)}return function(C,T,A,I){try{Hr=0;var B=ve(C,T,A,I);return Cs=null,B}catch(q){if(q===Or||q===dl)throw q;var te=wt(29,q,null,C.mode);return te.lanes=I,te.return=C,te}finally{}}}var As=l_(!0),o_=l_(!1),Ht=x(null),en=null;function Vn(e){var n=e.alternate;z(Be,Be.current&1),z(Ht,e),en===null&&(n===null||Es.current!==null||n.memoizedState!==null)&&(en=e)}function u_(e){if(e.tag===22){if(z(Be,Be.current),z(Ht,e),en===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(en=e)}}else jn()}function jn(){z(Be,Be.current),z(Ht,Ht.current)}function gn(e){P(Ht),en===e&&(en=null),P(Be)}var Be=x(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||af(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function mc(e,n,r,l){n=e.memoizedState,r=r(l,n),r=r==null?n:y({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var gc={enqueueSetState:function(e,n,r){e=e._reactInternals;var l=Dt(),u=Pn(l);u.payload=n,r!=null&&(u.callback=r),n=Bn(e,u,l),n!==null&&(It(n,e,l),Ir(n,e,l))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var l=Dt(),u=Pn(l);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Bn(e,u,l),n!==null&&(It(n,e,l),Ir(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Dt(),l=Pn(r);l.tag=2,n!=null&&(l.callback=n),n=Bn(e,l,r),n!==null&&(It(n,e,r),Ir(n,e,r))}};function c_(e,n,r,l,u,f,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,d):n.prototype&&n.prototype.isPureReactComponent?!Sr(r,l)||!Sr(u,f):!0}function f_(e,n,r,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==e&&gc.enqueueReplaceState(n,n.state,null)}function Li(e,n){var r=n;if("ref"in n){r={};for(var l in n)l!=="ref"&&(r[l]=n[l])}if(e=e.defaultProps){r===n&&(r=y({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}var Rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function h_(e){Rl(e)}function d_(e){console.error(e)}function p_(e){Rl(e)}function Nl(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function __(e,n,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vc(e,n,r){return r=Pn(r),r.tag=3,r.payload={element:null},r.callback=function(){Nl(e,n)},r}function m_(e){return e=Pn(e),e.tag=3,e}function g_(e,n,r,l){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){__(n,r,l)}}var d=r.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){__(n,r,l),typeof u!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function KE(e,n,r,l,u){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=r.alternate,n!==null&&wr(n,r,u,!0),r=Ht.current,r!==null){switch(r.tag){case 13:return en===null?Vc():r.alternate===null&&Ie===0&&(Ie=3),r.flags&=-257,r.flags|=65536,r.lanes=u,l===Qu?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([l]):n.add(l),Gc(e,l,u)),!1;case 22:return r.flags|=65536,l===Qu?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([l]):r.add(l)),Gc(e,l,u)),!1}throw Error(a(435,r.tag))}return Gc(e,l,u),Vc(),!1}if(fe)return n=Ht.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Bu&&(e=Error(a(422),{cause:l}),Ar(kt(e,r)))):(l!==Bu&&(n=Error(a(423),{cause:l}),Ar(kt(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=kt(l,r),u=vc(e.stateNode,l,u),Wu(e,u),Ie!==4&&(Ie=2)),!1;var f=Error(a(520),{cause:l});if(f=kt(f,r),Fr===null?Fr=[f]:Fr.push(f),Ie!==4&&(Ie=2),n===null)return!0;l=kt(l,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=vc(r.stateNode,l,e),Wu(r,e),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Xn===null||!Xn.has(f))))return r.flags|=65536,u&=-u,r.lanes|=u,u=m_(u),g_(u,e,r,l),Wu(r,u),!1}r=r.return}while(r!==null);return!1}var v_=Error(a(461)),je=!1;function Ze(e,n,r,l){n.child=e===null?o_(n,null,r,l):As(n,e.child,r,l)}function y_(e,n,r,l,u){r=r.render;var f=n.ref;if("ref"in l){var d={};for(var g in l)g!=="ref"&&(d[g]=l[g])}else d=l;return xi(n),l=tc(e,n,r,d,f,u),g=nc(),e!==null&&!je?(ic(e,n,u),vn(e,n,u)):(fe&&g&&Hu(n),n.flags|=1,Ze(e,n,l,u),n.child)}function E_(e,n,r,l,u){if(e===null){var f=r.type;return typeof f=="function"&&!Uu(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,S_(e,n,f,l,u)):(e=ll(r.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!wc(e,u)){var d=f.memoizedProps;if(r=r.compare,r=r!==null?r:Sr,r(d,l)&&e.ref===n.ref)return vn(e,n,u)}return n.flags|=1,e=fn(f,l),e.ref=n.ref,e.return=n,n.child=e}function S_(e,n,r,l,u){if(e!==null){var f=e.memoizedProps;if(Sr(f,l)&&e.ref===n.ref)if(je=!1,n.pendingProps=l=f,wc(e,u))(e.flags&131072)!==0&&(je=!0);else return n.lanes=e.lanes,vn(e,n,u)}return yc(e,n,r,l,u)}function b_(e,n,r){var l=n.pendingProps,u=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|r:r,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return T_(e,n,l,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?Sp(n,f):Ju(),u_(n);else return n.lanes=n.childLanes=536870912,T_(e,n,f!==null?f.baseLanes|r:r,r)}else f!==null?(hl(n,f.cachePool),Sp(n,f),jn(),n.memoizedState=null):(e!==null&&hl(n,null),Ju(),jn());return Ze(e,n,u,r),n.child}function T_(e,n,r,l){var u=Fu();return u=u===null?null:{parent:Pe._currentValue,pool:u},n.memoizedState={baseLanes:r,cachePool:u},e!==null&&hl(n,null),Ju(),u_(n),e!==null&&wr(e,n,l,!0),null}function Ol(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function yc(e,n,r,l,u){return xi(n),r=tc(e,n,r,l,void 0,u),l=nc(),e!==null&&!je?(ic(e,n,u),vn(e,n,u)):(fe&&l&&Hu(n),n.flags|=1,Ze(e,n,r,u),n.child)}function C_(e,n,r,l,u,f){return xi(n),n.updateQueue=null,r=Tp(n,l,r,u),bp(e),l=nc(),e!==null&&!je?(ic(e,n,f),vn(e,n,f)):(fe&&l&&Hu(n),n.flags|=1,Ze(e,n,r,f),n.child)}function A_(e,n,r,l,u){if(xi(n),n.stateNode===null){var f=_s,d=r.contextType;typeof d=="object"&&d!==null&&(f=at(d)),f=new r(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},Ku(n),d=r.contextType,f.context=typeof d=="object"&&d!==null?at(d):_s,f.state=n.memoizedState,d=r.getDerivedStateFromProps,typeof d=="function"&&(mc(n,r,d,l),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(d=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),d!==f.state&&gc.enqueueReplaceState(f,f.state,null),xr(n,l,f,u),Mr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var g=n.memoizedProps,v=Li(r,g);f.props=v;var w=f.context,O=r.contextType;d=_s,typeof O=="object"&&O!==null&&(d=at(O));var M=r.getDerivedStateFromProps;O=typeof M=="function"||typeof f.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,O||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g||w!==d)&&f_(n,f,l,d),Hn=!1;var R=n.memoizedState;f.state=R,xr(n,l,f,u),Mr(),w=n.memoizedState,g||R!==w||Hn?(typeof M=="function"&&(mc(n,r,M,l),w=n.memoizedState),(v=Hn||c_(n,r,v,l,R,w,d))?(O||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=w),f.props=l,f.state=w,f.context=d,l=v):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Xu(e,n),d=n.memoizedProps,O=Li(r,d),f.props=O,M=n.pendingProps,R=f.context,w=r.contextType,v=_s,typeof w=="object"&&w!==null&&(v=at(w)),g=r.getDerivedStateFromProps,(w=typeof g=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(d!==M||R!==v)&&f_(n,f,l,v),Hn=!1,R=n.memoizedState,f.state=R,xr(n,l,f,u),Mr();var N=n.memoizedState;d!==M||R!==N||Hn||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof g=="function"&&(mc(n,r,g,l),N=n.memoizedState),(O=Hn||c_(n,r,O,l,R,N,v)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(w||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,N,v),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,N,v)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),f.props=l,f.state=N,f.context=v,l=O):(typeof f.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,Ol(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=As(n,e.child,null,u),n.child=As(n,null,r,u)):Ze(e,n,r,u),n.memoizedState=f.state,e=n.child):e=vn(e,n,u),e}function w_(e,n,r,l){return Cr(),n.flags|=256,Ze(e,n,r,l),n.child}var Ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:dp()}}function bc(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=Pt),e}function R_(e,n,r){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,d;if((d=f)||(d=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),d&&(u=!0,n.flags&=-129),d=(n.flags&32)!==0,n.flags&=-33,e===null){if(fe){if(u?Vn(n):jn(),fe){var g=De,v;if(v=g){e:{for(v=g,g=$t;v.nodeType!==8;){if(!g){g=null;break e}if(v=Yt(v.nextSibling),v===null){g=null;break e}}g=v}g!==null?(n.memoizedState={dehydrated:g,treeContext:Ni!==null?{id:hn,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},v=wt(18,null,null,0),v.stateNode=g,v.return=n,n.child=v,ut=n,De=null,v=!0):v=!1}v||Ii(n)}if(g=n.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return af(g)?n.lanes=32:n.lanes=536870912,null;gn(n)}return g=l.children,l=l.fallback,u?(jn(),u=n.mode,g=Dl({mode:"hidden",children:g},u),l=Ri(l,u,r,null),g.return=n,l.return=n,g.sibling=l,n.child=g,u=n.child,u.memoizedState=Sc(r),u.childLanes=bc(e,d,r),n.memoizedState=Ec,l):(Vn(n),Tc(n,g))}if(v=e.memoizedState,v!==null&&(g=v.dehydrated,g!==null)){if(f)n.flags&256?(Vn(n),n.flags&=-257,n=Cc(e,n,r)):n.memoizedState!==null?(jn(),n.child=e.child,n.flags|=128,n=null):(jn(),u=l.fallback,g=n.mode,l=Dl({mode:"visible",children:l.children},g),u=Ri(u,g,r,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,As(n,e.child,null,r),l=n.child,l.memoizedState=Sc(r),l.childLanes=bc(e,d,r),n.memoizedState=Ec,n=u);else if(Vn(n),af(g)){if(d=g.nextSibling&&g.nextSibling.dataset,d)var w=d.dgst;d=w,l=Error(a(419)),l.stack="",l.digest=d,Ar({value:l,source:null,stack:null}),n=Cc(e,n,r)}else if(je||wr(e,n,r,!1),d=(r&e.childLanes)!==0,je||d){if(d=Te,d!==null&&(l=r&-r,l=(l&42)!==0?1:au(l),l=(l&(d.suspendedLanes|r))!==0?0:l,l!==0&&l!==v.retryLane))throw v.retryLane=l,ps(e,l),It(d,e,l),v_;g.data==="$?"||Vc(),n=Cc(e,n,r)}else g.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=v.treeContext,De=Yt(g.nextSibling),ut=n,fe=!0,Di=null,$t=!1,e!==null&&(Lt[zt++]=hn,Lt[zt++]=dn,Lt[zt++]=Ni,hn=e.id,dn=e.overflow,Ni=n),n=Tc(n,l.children),n.flags|=4096);return n}return u?(jn(),u=l.fallback,g=n.mode,v=e.child,w=v.sibling,l=fn(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,w!==null?u=fn(w,u):(u=Ri(u,g,r,null),u.flags|=2),u.return=n,l.return=n,l.sibling=u,n.child=l,l=u,u=n.child,g=e.child.memoizedState,g===null?g=Sc(r):(v=g.cachePool,v!==null?(w=Pe._currentValue,v=v.parent!==w?{parent:w,pool:w}:v):v=dp(),g={baseLanes:g.baseLanes|r,cachePool:v}),u.memoizedState=g,u.childLanes=bc(e,d,r),n.memoizedState=Ec,l):(Vn(n),r=e.child,e=r.sibling,r=fn(r,{mode:"visible",children:l.children}),r.return=n,r.sibling=null,e!==null&&(d=n.deletions,d===null?(n.deletions=[e],n.flags|=16):d.push(e)),n.child=r,n.memoizedState=null,r)}function Tc(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=wt(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Cc(e,n,r){return As(n,e.child,null,r),e=Tc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function N_(e,n,r){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Vu(e.return,n,r)}function Ac(e,n,r,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=r,f.tailMode=u)}function O_(e,n,r){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(Ze(e,n,l.children,r),l=Be.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&N_(e,r,n);else if(e.tag===19)N_(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(z(Be,l),u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&wl(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Ac(n,!1,u,r,f);break;case"backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}Ac(n,!0,r,null,f);break;case"together":Ac(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function vn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Kn|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(wr(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=fn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=fn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function wc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function XE(e,n,r){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),zn(n,Pe,e.memoizedState.cache),Cr();break;case 27:case 5:tu(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:zn(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Vn(n),n.flags|=128,null):(r&n.child.childLanes)!==0?R_(e,n,r):(Vn(n),e=vn(e,n,r),e!==null?e.sibling:null);Vn(n);break;case 19:var u=(e.flags&128)!==0;if(l=(r&n.childLanes)!==0,l||(wr(e,n,r,!1),l=(r&n.childLanes)!==0),u){if(l)return O_(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),z(Be,Be.current),l)break;return null;case 22:case 23:return n.lanes=0,b_(e,n,r);case 24:zn(n,Pe,e.memoizedState.cache)}return vn(e,n,r)}function D_(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)je=!0;else{if(!wc(e,r)&&(n.flags&128)===0)return je=!1,XE(e,n,r);je=(e.flags&131072)!==0}else je=!1,fe&&(n.flags&1048576)!==0&&ap(n,ul,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var l=n.elementType,u=l._init;if(l=u(l._payload),n.type=l,typeof l=="function")Uu(l)?(e=Li(l,e),n.tag=1,n=A_(null,n,l,e,r)):(n.tag=0,n=yc(null,n,l,e,r));else{if(l!=null){if(u=l.$$typeof,u===qe){n.tag=11,n=y_(null,n,l,e,r);break e}else if(u===nt){n.tag=14,n=E_(null,n,l,e,r);break e}}throw n=Si(l)||l,Error(a(306,n,""))}}return n;case 0:return yc(e,n,n.type,n.pendingProps,r);case 1:return l=n.type,u=Li(l,n.pendingProps),A_(e,n,l,u,r);case 3:e:{if(we(n,n.stateNode.containerInfo),e===null)throw Error(a(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,Xu(e,n),xr(n,l,null,r);var d=n.memoizedState;if(l=d.cache,zn(n,Pe,l),l!==f.cache&&ju(n,[Pe],r,!0),Mr(),l=d.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:d.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=w_(e,n,l,r);break e}else if(l!==u){u=kt(Error(a(424)),n),Ar(u),n=w_(e,n,l,r);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(De=Yt(e.firstChild),ut=n,fe=!0,Di=null,$t=!0,r=o_(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Cr(),l===u){n=vn(e,n,r);break e}Ze(e,n,l,r)}n=n.child}return n;case 26:return Ol(e,n),e===null?(r=km(n.type,null,n.pendingProps,null))?n.memoizedState=r:fe||(r=n.type,e=n.pendingProps,l=Gl(W.current).createElement(r),l[rt]=n,l[_t]=e,$e(l,r,e),Ve(l),n.stateNode=l):n.memoizedState=km(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return tu(n),e===null&&fe&&(l=n.stateNode=Im(n.type,n.pendingProps,W.current),ut=n,$t=!0,u=De,Jn(n.type)?(lf=u,De=Yt(l.firstChild)):De=u),Ze(e,n,n.pendingProps.children,r),Ol(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&fe&&((u=l=De)&&(l=TS(l,n.type,n.pendingProps,$t),l!==null?(n.stateNode=l,ut=n,De=Yt(l.firstChild),$t=!1,u=!0):u=!1),u||Ii(n)),tu(n),u=n.type,f=n.pendingProps,d=e!==null?e.memoizedProps:null,l=f.children,nf(u,f)?l=null:d!==null&&nf(u,d)&&(n.flags|=32),n.memoizedState!==null&&(u=tc(e,n,qE,null,null,r),ta._currentValue=u),Ol(e,n),Ze(e,n,l,r),n.child;case 6:return e===null&&fe&&((e=r=De)&&(r=CS(r,n.pendingProps,$t),r!==null?(n.stateNode=r,ut=n,De=null,e=!0):e=!1),e||Ii(n)),null;case 13:return R_(e,n,r);case 4:return we(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=As(n,null,l,r):Ze(e,n,l,r),n.child;case 11:return y_(e,n,n.type,n.pendingProps,r);case 7:return Ze(e,n,n.pendingProps,r),n.child;case 8:return Ze(e,n,n.pendingProps.children,r),n.child;case 12:return Ze(e,n,n.pendingProps.children,r),n.child;case 10:return l=n.pendingProps,zn(n,n.type,l.value),Ze(e,n,l.children,r),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,xi(n),u=at(u),l=l(u),n.flags|=1,Ze(e,n,l,r),n.child;case 14:return E_(e,n,n.type,n.pendingProps,r);case 15:return S_(e,n,n.type,n.pendingProps,r);case 19:return O_(e,n,r);case 31:return l=n.pendingProps,r=n.mode,l={mode:l.mode,children:l.children},e===null?(r=Dl(l,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=fn(e.child,l),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return b_(e,n,r);case 24:return xi(n),l=at(Pe),e===null?(u=Fu(),u===null&&(u=Te,f=Gu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=r),u=f),n.memoizedState={parent:l,cache:u},Ku(n),zn(n,Pe,u)):((e.lanes&r)!==0&&(Xu(e,n),xr(n,null,null,r),Mr()),u=e.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),zn(n,Pe,l)):(l=f.cache,zn(n,Pe,l),l!==u.cache&&ju(n,[Pe],r,!0))),Ze(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function yn(e){e.flags|=4}function I_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pm(n)){if(n=Ht.current,n!==null&&((oe&4194048)===oe?en!==null:(oe&62914560)!==oe&&(oe&536870912)===0||n!==en))throw Dr=Qu,pp;e.flags|=8192}}function Il(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ud():536870912,e.lanes|=n,Os|=n)}function Br(e,n){if(!fe)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=r,n}function WE(e,n,r){var l=n.pendingProps;switch(Pu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(n),null;case 1:return Ne(n),null;case 3:return r=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),_n(Pe),xn(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tr(n)?yn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,up())),Ne(n),null;case 26:return r=n.memoizedState,e===null?(yn(n),r!==null?(Ne(n),I_(n,r)):(Ne(n),n.flags&=-16777217)):r?r!==e.memoizedState?(yn(n),Ne(n),I_(n,r)):(Ne(n),n.flags&=-16777217):(e.memoizedProps!==l&&yn(n),Ne(n),n.flags&=-16777217),null;case 27:Va(n),r=W.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&yn(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Ne(n),null}e=V.current,Tr(n)?lp(n):(e=Im(u,l,r),n.stateNode=e,yn(n))}return Ne(n),null;case 5:if(Va(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&yn(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Ne(n),null}if(e=V.current,Tr(n))lp(n);else{switch(u=Gl(W.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(r,{is:l.is}):u.createElement(r)}}e[rt]=n,e[_t]=l;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch($e(e,r,l),r){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&yn(n)}}return Ne(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&yn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=W.current,Tr(n)){if(e=n.stateNode,r=n.memoizedProps,l=null,u=ut,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[rt]=n,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Cm(e.nodeValue,r)),e||Ii(n)}else e=Gl(e).createTextNode(l),e[rt]=n,n.stateNode=e}return Ne(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Tr(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[rt]=n}else Cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ne(n),u=!1}else u=up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(gn(n),n):(gn(n),null)}if(gn(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=l!==null,e=e!==null&&e.memoizedState!==null,r){l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)}return r!==e&&r&&(n.child.flags|=8192),Il(n,n.updateQueue),Ne(n),null;case 4:return xn(),e===null&&Zc(n.stateNode.containerInfo),Ne(n),null;case 10:return _n(n.type),Ne(n),null;case 19:if(P(Be),u=n.memoizedState,u===null)return Ne(n),null;if(l=(n.flags&128)!==0,f=u.rendering,f===null)if(l)Br(u,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,Br(u,!1),e=f.updateQueue,n.updateQueue=e,Il(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)rp(r,e),r=r.sibling;return z(Be,Be.current&1|2),n.child}e=e.sibling}u.tail!==null&&Jt()>kl&&(n.flags|=128,l=!0,Br(u,!1),n.lanes=4194304)}else{if(!l)if(e=wl(f),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Il(n,e),Br(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!fe)return Ne(n),null}else 2*Jt()-u.renderingStartTime>kl&&r!==536870912&&(n.flags|=128,l=!0,Br(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Jt(),n.sibling=null,e=Be.current,z(Be,l?e&1|2:e&1),n):(Ne(n),null);case 22:case 23:return gn(n),$u(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(r&536870912)!==0&&(n.flags&128)===0&&(Ne(n),n.subtreeFlags&6&&(n.flags|=8192)):Ne(n),r=n.updateQueue,r!==null&&Il(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==r&&(n.flags|=2048),e!==null&&P(ki),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),_n(Pe),Ne(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function ZE(e,n){switch(Pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _n(Pe),xn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Va(n),null;case 13:if(gn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return P(Be),null;case 4:return xn(),null;case 10:return _n(n.type),null;case 22:case 23:return gn(n),$u(),e!==null&&P(ki),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return _n(Pe),null;case 25:return null;default:return null}}function M_(e,n){switch(Pu(n),n.tag){case 3:_n(Pe),xn();break;case 26:case 27:case 5:Va(n);break;case 4:xn();break;case 13:gn(n);break;case 19:P(Be);break;case 10:_n(n.type);break;case 22:case 23:gn(n),$u(),e!==null&&P(ki);break;case 24:_n(Pe)}}function qr(e,n){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){l=void 0;var f=r.create,d=r.inst;l=f(),d.destroy=l}r=r.next}while(r!==u)}}catch(g){be(n,n.return,g)}}function Gn(e,n,r){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var d=l.inst,g=d.destroy;if(g!==void 0){d.destroy=void 0,u=n;var v=r,w=g;try{w()}catch(O){be(u,v,O)}}}l=l.next}while(l!==f)}}catch(O){be(n,n.return,O)}}function x_(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{Ep(n,r)}catch(l){be(e,e.return,l)}}}function k_(e,n,r){r.props=Li(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){be(e,n,l)}}function Vr(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(u){be(e,n,u)}}function tn(e,n){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(u){be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){be(e,n,u)}else r.current=null}function U_(e){var n=e.type,r=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(u){be(e,e.return,u)}}function Rc(e,n,r){try{var l=e.stateNode;vS(l,e.type,r,n),l[_t]=n}catch(u){be(e,e.return,u)}}function L_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Jn(e.type)||e.tag===4}function Nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||L_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=jl));else if(l!==4&&(l===27&&Jn(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(Oc(e,n,r),e=e.sibling;e!==null;)Oc(e,n,r),e=e.sibling}function Ml(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(l!==4&&(l===27&&Jn(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ml(e,n,r),e=e.sibling;e!==null;)Ml(e,n,r),e=e.sibling}function z_(e){var n=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);$e(n,l,r),n[rt]=e,n[_t]=r}catch(f){be(e,e.return,f)}}var En=!1,Ue=!1,Dc=!1,H_=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function JE(e,n){if(e=e.containerInfo,ef=Wl,e=Xd(e),Nu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var d=0,g=-1,v=-1,w=0,O=0,M=e,R=null;t:for(;;){for(var N;M!==r||u!==0&&M.nodeType!==3||(g=d+u),M!==f||l!==0&&M.nodeType!==3||(v=d+l),M.nodeType===3&&(d+=M.nodeValue.length),(N=M.firstChild)!==null;)R=M,M=N;for(;;){if(M===e)break t;if(R===r&&++w===u&&(g=d),R===f&&++O===l&&(v=d),(N=M.nextSibling)!==null)break;M=R,R=M.parentNode}M=N}r=g===-1||v===-1?null:{start:g,end:v}}else r=null}r=r||{start:0,end:0}}else r=null;for(tf={focusedElem:e,selectionRange:r},Wl=!1,Ge=n;Ge!==null;)if(n=Ge,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Ge=e;else for(;Ge!==null;){switch(n=Ge,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=n,u=f.memoizedProps,f=f.memoizedState,l=r.stateNode;try{var Q=Li(r.type,u,r.elementType===r.type);e=l.getSnapshotBeforeUpdate(Q,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(j){be(r,r.return,j)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)rf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Ge=e;break}Ge=n.return}}function P_(e,n,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Yn(e,r),l&4&&qr(5,r);break;case 1:if(Yn(e,r),l&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(d){be(r,r.return,d)}else{var u=Li(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(d){be(r,r.return,d)}}l&64&&x_(r),l&512&&Vr(r,r.return);break;case 3:if(Yn(e,r),l&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Ep(e,n)}catch(d){be(r,r.return,d)}}break;case 27:n===null&&l&4&&z_(r);case 26:case 5:Yn(e,r),n===null&&l&4&&U_(r),l&512&&Vr(r,r.return);break;case 12:Yn(e,r);break;case 13:Yn(e,r),l&4&&V_(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=lS.bind(null,r),AS(e,r))));break;case 22:if(l=r.memoizedState!==null||En,!l){n=n!==null&&n.memoizedState!==null||Ue,u=En;var f=Ue;En=l,(Ue=n)&&!f?Fn(e,r,(r.subtreeFlags&8772)!==0):Yn(e,r),En=u,Ue=f}break;case 30:break;default:Yn(e,r)}}function B_(e){var n=e.alternate;n!==null&&(e.alternate=null,B_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&uu(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,vt=!1;function Sn(e,n,r){for(r=r.child;r!==null;)q_(e,n,r),r=r.sibling}function q_(e,n,r){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(ur,r)}catch{}switch(r.tag){case 26:Ue||tn(r,n),Sn(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ue||tn(r,n);var l=Re,u=vt;Jn(r.type)&&(Re=r.stateNode,vt=!1),Sn(e,n,r),Zr(r.stateNode),Re=l,vt=u;break;case 5:Ue||tn(r,n);case 6:if(l=Re,u=vt,Re=null,Sn(e,n,r),Re=l,vt=u,Re!==null)if(vt)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(r.stateNode)}catch(f){be(r,n,f)}else try{Re.removeChild(r.stateNode)}catch(f){be(r,n,f)}break;case 18:Re!==null&&(vt?(e=Re,Om(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),ra(e)):Om(Re,r.stateNode));break;case 4:l=Re,u=vt,Re=r.stateNode.containerInfo,vt=!0,Sn(e,n,r),Re=l,vt=u;break;case 0:case 11:case 14:case 15:Ue||Gn(2,r,n),Ue||Gn(4,r,n),Sn(e,n,r);break;case 1:Ue||(tn(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"&&k_(r,n,l)),Sn(e,n,r);break;case 21:Sn(e,n,r);break;case 22:Ue=(l=Ue)||r.memoizedState!==null,Sn(e,n,r),Ue=l;break;default:Sn(e,n,r)}}function V_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ra(e)}catch(r){be(n,n.return,r)}}function $E(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new H_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new H_),n;default:throw Error(a(435,e.tag))}}function Ic(e,n){var r=$E(e);n.forEach(function(l){var u=oS.bind(null,e,l);r.has(l)||(r.add(l),l.then(u,u))})}function Rt(e,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],f=e,d=n,g=d;e:for(;g!==null;){switch(g.tag){case 27:if(Jn(g.type)){Re=g.stateNode,vt=!1;break e}break;case 5:Re=g.stateNode,vt=!1;break e;case 3:case 4:Re=g.stateNode.containerInfo,vt=!0;break e}g=g.return}if(Re===null)throw Error(a(160));q_(f,d,u),Re=null,vt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)j_(n,e),n=n.sibling}var Gt=null;function j_(e,n){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(n,e),Nt(e),l&4&&(Gn(3,e,e.return),qr(3,e),Gn(5,e,e.return));break;case 1:Rt(n,e),Nt(e),l&512&&(Ue||r===null||tn(r,r.return)),l&64&&En&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var u=Gt;if(Rt(n,e),Nt(e),l&512&&(Ue||r===null||tn(r,r.return)),l&4){var f=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){e:{l=e.type,r=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[hr]||f[rt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),$e(f,l,r),f[rt]=e,Ve(f),l=f;break e;case"link":var d=zm("link","href",u).get(l+(r.href||""));if(d){for(var g=0;g<d.length;g++)if(f=d[g],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){d.splice(g,1);break t}}f=u.createElement(l),$e(f,l,r),u.head.appendChild(f);break;case"meta":if(d=zm("meta","content",u).get(l+(r.content||""))){for(g=0;g<d.length;g++)if(f=d[g],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){d.splice(g,1);break t}}f=u.createElement(l),$e(f,l,r),u.head.appendChild(f);break;default:throw Error(a(468,l))}f[rt]=e,Ve(f),l=f}e.stateNode=l}else Hm(u,e.type,e.stateNode);else e.stateNode=Lm(u,l,e.memoizedProps);else f!==l?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,l===null?Hm(u,e.type,e.stateNode):Lm(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Rc(e,e.memoizedProps,r.memoizedProps)}break;case 27:Rt(n,e),Nt(e),l&512&&(Ue||r===null||tn(r,r.return)),r!==null&&l&4&&Rc(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Rt(n,e),Nt(e),l&512&&(Ue||r===null||tn(r,r.return)),e.flags&32){u=e.stateNode;try{ls(u,"")}catch(N){be(e,e.return,N)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Rc(e,u,r!==null?r.memoizedProps:u)),l&1024&&(Dc=!0);break;case 6:if(Rt(n,e),Nt(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(N){be(e,e.return,N)}}break;case 3:if(Ql=null,u=Gt,Gt=Yl(n.containerInfo),Rt(n,e),Gt=u,Nt(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{ra(n.containerInfo)}catch(N){be(e,e.return,N)}Dc&&(Dc=!1,G_(e));break;case 4:l=Gt,Gt=Yl(e.stateNode.containerInfo),Rt(n,e),Nt(e),Gt=l;break;case 12:Rt(n,e),Nt(e);break;case 13:Rt(n,e),Nt(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(zc=Jt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ic(e,l)));break;case 22:u=e.memoizedState!==null;var v=r!==null&&r.memoizedState!==null,w=En,O=Ue;if(En=w||u,Ue=O||v,Rt(n,e),Ue=O,En=w,Nt(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||v||En||Ue||zi(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){v=r=n;try{if(f=v.stateNode,u)d=f.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{g=v.stateNode;var M=v.memoizedProps.style,R=M!=null&&M.hasOwnProperty("display")?M.display:null;g.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(N){be(v,v.return,N)}}}else if(n.tag===6){if(r===null){v=n;try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(N){be(v,v.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Ic(e,r))));break;case 19:Rt(n,e),Nt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ic(e,l)));break;case 30:break;case 21:break;default:Rt(n,e),Nt(e)}}function Nt(e){var n=e.flags;if(n&2){try{for(var r,l=e.return;l!==null;){if(L_(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,f=Nc(e);Ml(e,f,u);break;case 5:var d=r.stateNode;r.flags&32&&(ls(d,""),r.flags&=-33);var g=Nc(e);Ml(e,g,d);break;case 3:case 4:var v=r.stateNode.containerInfo,w=Nc(e);Oc(e,w,v);break;default:throw Error(a(161))}}catch(O){be(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function G_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;G_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Yn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)P_(e,n.alternate,n),n=n.sibling}function zi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Gn(4,n,n.return),zi(n);break;case 1:tn(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&k_(n,n.return,r),zi(n);break;case 27:Zr(n.stateNode);case 26:case 5:tn(n,n.return),zi(n);break;case 22:n.memoizedState===null&&zi(n);break;case 30:zi(n);break;default:zi(n)}e=e.sibling}}function Fn(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,f=n,d=f.flags;switch(f.tag){case 0:case 11:case 15:Fn(u,f,r),qr(4,f);break;case 1:if(Fn(u,f,r),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(w){be(l,l.return,w)}if(l=f,u=l.updateQueue,u!==null){var g=l.stateNode;try{var v=u.shared.hiddenCallbacks;if(v!==null)for(u.shared.hiddenCallbacks=null,u=0;u<v.length;u++)yp(v[u],g)}catch(w){be(l,l.return,w)}}r&&d&64&&x_(f),Vr(f,f.return);break;case 27:z_(f);case 26:case 5:Fn(u,f,r),r&&l===null&&d&4&&U_(f),Vr(f,f.return);break;case 12:Fn(u,f,r);break;case 13:Fn(u,f,r),r&&d&4&&V_(u,f);break;case 22:f.memoizedState===null&&Fn(u,f,r),Vr(f,f.return);break;case 30:break;default:Fn(u,f,r)}n=n.sibling}}function Mc(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Rr(r))}function xc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Rr(e))}function nn(e,n,r,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Y_(e,n,r,l),n=n.sibling}function Y_(e,n,r,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:nn(e,n,r,l),u&2048&&qr(9,n);break;case 1:nn(e,n,r,l);break;case 3:nn(e,n,r,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Rr(e)));break;case 12:if(u&2048){nn(e,n,r,l),e=n.stateNode;try{var f=n.memoizedProps,d=f.id,g=f.onPostCommit;typeof g=="function"&&g(d,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){be(n,n.return,v)}}else nn(e,n,r,l);break;case 13:nn(e,n,r,l);break;case 23:break;case 22:f=n.stateNode,d=n.alternate,n.memoizedState!==null?f._visibility&2?nn(e,n,r,l):jr(e,n):f._visibility&2?nn(e,n,r,l):(f._visibility|=2,ws(e,n,r,l,(n.subtreeFlags&10256)!==0)),u&2048&&Mc(d,n);break;case 24:nn(e,n,r,l),u&2048&&xc(n.alternate,n);break;default:nn(e,n,r,l)}}function ws(e,n,r,l,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,d=n,g=r,v=l,w=d.flags;switch(d.tag){case 0:case 11:case 15:ws(f,d,g,v,u),qr(8,d);break;case 23:break;case 22:var O=d.stateNode;d.memoizedState!==null?O._visibility&2?ws(f,d,g,v,u):jr(f,d):(O._visibility|=2,ws(f,d,g,v,u)),u&&w&2048&&Mc(d.alternate,d);break;case 24:ws(f,d,g,v,u),u&&w&2048&&xc(d.alternate,d);break;default:ws(f,d,g,v,u)}n=n.sibling}}function jr(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,l=n,u=l.flags;switch(l.tag){case 22:jr(r,l),u&2048&&Mc(l.alternate,l);break;case 24:jr(r,l),u&2048&&xc(l.alternate,l);break;default:jr(r,l)}n=n.sibling}}var Gr=8192;function Rs(e){if(e.subtreeFlags&Gr)for(e=e.child;e!==null;)F_(e),e=e.sibling}function F_(e){switch(e.tag){case 26:Rs(e),e.flags&Gr&&e.memoizedState!==null&&HS(Gt,e.memoizedState,e.memoizedProps);break;case 5:Rs(e);break;case 3:case 4:var n=Gt;Gt=Yl(e.stateNode.containerInfo),Rs(e),Gt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Gr,Gr=16777216,Rs(e),Gr=n):Rs(e));break;default:Rs(e)}}function Q_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Yr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];Ge=l,X_(l,e)}Q_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)K_(e),e=e.sibling}function K_(e){switch(e.tag){case 0:case 11:case 15:Yr(e),e.flags&2048&&Gn(9,e,e.return);break;case 3:Yr(e);break;case 12:Yr(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,xl(e)):Yr(e);break;default:Yr(e)}}function xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];Ge=l,X_(l,e)}Q_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Gn(8,n,n.return),xl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,xl(n));break;default:xl(n)}e=e.sibling}}function X_(e,n){for(;Ge!==null;){var r=Ge;switch(r.tag){case 0:case 11:case 15:Gn(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Rr(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Ge=l;else e:for(r=e;Ge!==null;){l=Ge;var u=l.sibling,f=l.return;if(B_(l),l===r){Ge=null;break e}if(u!==null){u.return=f,Ge=u;break e}Ge=f}}}var eS={getCacheForType:function(e){var n=at(Pe),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r}},tS=typeof WeakMap=="function"?WeakMap:Map,de=0,Te=null,se=null,oe=0,pe=0,Ot=null,Qn=!1,Ns=!1,kc=!1,bn=0,Ie=0,Kn=0,Hi=0,Uc=0,Pt=0,Os=0,Fr=null,yt=null,Lc=!1,zc=0,kl=1/0,Ul=null,Xn=null,Je=0,Wn=null,Ds=null,Is=0,Hc=0,Pc=null,W_=null,Qr=0,Bc=null;function Dt(){if((de&2)!==0&&oe!==0)return oe&-oe;if(D.T!==null){var e=vs;return e!==0?e:Qc()}return hd()}function Z_(){Pt===0&&(Pt=(oe&536870912)===0||fe?od():536870912);var e=Ht.current;return e!==null&&(e.flags|=32),Pt}function It(e,n,r){(e===Te&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Ms(e,0),Zn(e,oe,Pt,!1)),fr(e,r),((de&2)===0||e!==Te)&&(e===Te&&((de&2)===0&&(Hi|=r),Ie===4&&Zn(e,oe,Pt,!1)),sn(e))}function J_(e,n,r){if((de&6)!==0)throw Error(a(327));var l=!r&&(n&124)===0&&(n&e.expiredLanes)===0||cr(e,n),u=l?sS(e,n):jc(e,n,!0),f=l;do{if(u===0){Ns&&!l&&Zn(e,n,0,!1);break}else{if(r=e.current.alternate,f&&!nS(r)){u=jc(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){n=d;e:{var g=e;u=Fr;var v=g.current.memoizedState.isDehydrated;if(v&&(Ms(g,d).flags|=256),d=jc(g,d,!1),d!==2){if(kc&&!v){g.errorRecoveryDisabledLanes|=f,Hi|=f,u=4;break e}f=yt,yt=u,f!==null&&(yt===null?yt=f:yt.push.apply(yt,f))}u=d}if(f=!1,u!==2)continue}}if(u===1){Ms(e,0),Zn(e,n,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Zn(l,n,Pt,!Qn);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=zc+300-Jt(),10<u)){if(Zn(l,n,Pt,!Qn),Fa(l,0,!0)!==0)break e;l.timeoutHandle=Rm($_.bind(null,l,r,yt,Ul,Lc,n,Pt,Hi,Os,Qn,f,2,-0,0),u);break e}$_(l,r,yt,Ul,Lc,n,Pt,Hi,Os,Qn,f,0,-0,0)}}break}while(!0);sn(e)}function $_(e,n,r,l,u,f,d,g,v,w,O,M,R,N){if(e.timeoutHandle=-1,M=n.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(ea={stylesheets:null,count:0,unsuspend:zS},F_(n),M=PS(),M!==null)){e.cancelPendingCommit=M(am.bind(null,e,n,f,r,l,u,d,g,v,O,1,R,N)),Zn(e,f,d,!w);return}am(e,n,f,r,l,u,d,g,v)}function nS(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var u=r[l],f=u.getSnapshot;u=u.value;try{if(!At(f(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zn(e,n,r,l){n&=~Uc,n&=~Hi,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var f=31-Ct(u),d=1<<f;l[f]=-1,u&=~d}r!==0&&cd(e,r,n)}function Ll(){return(de&6)===0?(Kr(0),!1):!0}function qc(){if(se!==null){if(pe===0)var e=se.return;else e=se,pn=Mi=null,sc(e),Cs=null,Hr=0,e=se;for(;e!==null;)M_(e.alternate,e),e=e.return;se=null}}function Ms(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,ES(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),qc(),Te=e,se=r=fn(e.current,null),oe=n,pe=0,Ot=null,Qn=!1,Ns=cr(e,n),kc=!1,Os=Pt=Uc=Hi=Kn=Ie=0,yt=Fr=null,Lc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-Ct(l),f=1<<u;n|=e[u],l&=~f}return bn=n,sl(),r}function em(e,n){$=null,D.H=Tl,n===Or||n===dl?(n=gp(),pe=3):n===pp?(n=gp(),pe=4):pe=n===v_?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ot=n,se===null&&(Ie=1,Nl(e,kt(n,e.current)))}function tm(){var e=D.H;return D.H=Tl,e===null?Tl:e}function nm(){var e=D.A;return D.A=eS,e}function Vc(){Ie=4,Qn||(oe&4194048)!==oe&&Ht.current!==null||(Ns=!0),(Kn&134217727)===0&&(Hi&134217727)===0||Te===null||Zn(Te,oe,Pt,!1)}function jc(e,n,r){var l=de;de|=2;var u=tm(),f=nm();(Te!==e||oe!==n)&&(Ul=null,Ms(e,n)),n=!1;var d=Ie;e:do try{if(pe!==0&&se!==null){var g=se,v=Ot;switch(pe){case 8:qc(),d=6;break e;case 3:case 2:case 9:case 6:Ht.current===null&&(n=!0);var w=pe;if(pe=0,Ot=null,xs(e,g,v,w),r&&Ns){d=0;break e}break;default:w=pe,pe=0,Ot=null,xs(e,g,v,w)}}iS(),d=Ie;break}catch(O){em(e,O)}while(!0);return n&&e.shellSuspendCounter++,pn=Mi=null,de=l,D.H=u,D.A=f,se===null&&(Te=null,oe=0,sl()),d}function iS(){for(;se!==null;)im(se)}function sS(e,n){var r=de;de|=2;var l=tm(),u=nm();Te!==e||oe!==n?(Ul=null,kl=Jt()+500,Ms(e,n)):Ns=cr(e,n);e:do try{if(pe!==0&&se!==null){n=se;var f=Ot;t:switch(pe){case 1:pe=0,Ot=null,xs(e,n,f,1);break;case 2:case 9:if(_p(f)){pe=0,Ot=null,sm(n);break}n=function(){pe!==2&&pe!==9||Te!==e||(pe=7),sn(e)},f.then(n,n);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:_p(f)?(pe=0,Ot=null,sm(n)):(pe=0,Ot=null,xs(e,n,f,7));break;case 5:var d=null;switch(se.tag){case 26:d=se.memoizedState;case 5:case 27:var g=se;if(!d||Pm(d)){pe=0,Ot=null;var v=g.sibling;if(v!==null)se=v;else{var w=g.return;w!==null?(se=w,zl(w)):se=null}break t}}pe=0,Ot=null,xs(e,n,f,5);break;case 6:pe=0,Ot=null,xs(e,n,f,6);break;case 8:qc(),Ie=6;break e;default:throw Error(a(462))}}rS();break}catch(O){em(e,O)}while(!0);return pn=Mi=null,D.H=l,D.A=u,de=r,se!==null?0:(Te=null,oe=0,sl(),Ie)}function rS(){for(;se!==null&&!R0();)im(se)}function im(e){var n=D_(e.alternate,e,bn);e.memoizedProps=e.pendingProps,n===null?zl(e):se=n}function sm(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=C_(r,n,n.pendingProps,n.type,void 0,oe);break;case 11:n=C_(r,n,n.pendingProps,n.type.render,n.ref,oe);break;case 5:sc(n);default:M_(r,n),n=se=rp(n,bn),n=D_(r,n,bn)}e.memoizedProps=e.pendingProps,n===null?zl(e):se=n}function xs(e,n,r,l){pn=Mi=null,sc(n),Cs=null,Hr=0;var u=n.return;try{if(KE(e,u,n,r,oe)){Ie=1,Nl(e,kt(r,e.current)),se=null;return}}catch(f){if(u!==null)throw se=u,f;Ie=1,Nl(e,kt(r,e.current)),se=null;return}n.flags&32768?(fe||l===1?e=!0:Ns||(oe&536870912)!==0?e=!1:(Qn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ht.current,l!==null&&l.tag===13&&(l.flags|=16384))),rm(n,e)):zl(n)}function zl(e){var n=e;do{if((n.flags&32768)!==0){rm(n,Qn);return}e=n.return;var r=WE(n.alternate,n,bn);if(r!==null){se=r;return}if(n=n.sibling,n!==null){se=n;return}se=n=e}while(n!==null);Ie===0&&(Ie=5)}function rm(e,n){do{var r=ZE(e.alternate,e);if(r!==null){r.flags&=32767,se=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){se=e;return}se=e=r}while(e!==null);Ie=6,se=null}function am(e,n,r,l,u,f,d,g,v){e.cancelPendingCommit=null;do Hl();while(Je!==0);if((de&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=xu,z0(e,r,f,d,g,v),e===Te&&(se=Te=null,oe=0),Ds=n,Wn=e,Is=r,Hc=f,Pc=u,W_=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uS(ja,function(){return fm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,u=H.p,H.p=2,d=de,de|=4;try{JE(e,n,r)}finally{de=d,H.p=u,D.T=l}}Je=1,lm(),om(),um()}}function lm(){if(Je===1){Je=0;var e=Wn,n=Ds,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=D.T,D.T=null;var l=H.p;H.p=2;var u=de;de|=4;try{j_(n,e);var f=tf,d=Xd(e.containerInfo),g=f.focusedElem,v=f.selectionRange;if(d!==g&&g&&g.ownerDocument&&Kd(g.ownerDocument.documentElement,g)){if(v!==null&&Nu(g)){var w=v.start,O=v.end;if(O===void 0&&(O=w),"selectionStart"in g)g.selectionStart=w,g.selectionEnd=Math.min(O,g.value.length);else{var M=g.ownerDocument||document,R=M&&M.defaultView||window;if(R.getSelection){var N=R.getSelection(),Q=g.textContent.length,j=Math.min(v.start,Q),ve=v.end===void 0?j:Math.min(v.end,Q);!N.extend&&j>ve&&(d=ve,ve=j,j=d);var C=Qd(g,j),T=Qd(g,ve);if(C&&T&&(N.rangeCount!==1||N.anchorNode!==C.node||N.anchorOffset!==C.offset||N.focusNode!==T.node||N.focusOffset!==T.offset)){var A=M.createRange();A.setStart(C.node,C.offset),N.removeAllRanges(),j>ve?(N.addRange(A),N.extend(T.node,T.offset)):(A.setEnd(T.node,T.offset),N.addRange(A))}}}}for(M=[],N=g;N=N.parentNode;)N.nodeType===1&&M.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<M.length;g++){var I=M[g];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}Wl=!!ef,tf=ef=null}finally{de=u,H.p=l,D.T=r}}e.current=n,Je=2}}function om(){if(Je===2){Je=0;var e=Wn,n=Ds,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=D.T,D.T=null;var l=H.p;H.p=2;var u=de;de|=4;try{P_(e,n.alternate,n)}finally{de=u,H.p=l,D.T=r}}Je=3}}function um(){if(Je===4||Je===3){Je=0,N0();var e=Wn,n=Ds,r=Is,l=W_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Je=5:(Je=0,Ds=Wn=null,cm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Xn=null),lu(r),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(ur,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=D.T,u=H.p,H.p=2,D.T=null;try{for(var f=e.onRecoverableError,d=0;d<l.length;d++){var g=l[d];f(g.value,{componentStack:g.stack})}}finally{D.T=n,H.p=u}}(Is&3)!==0&&Hl(),sn(e),u=e.pendingLanes,(r&4194090)!==0&&(u&42)!==0?e===Bc?Qr++:(Qr=0,Bc=e):Qr=0,Kr(0)}}function cm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Rr(n)))}function Hl(e){return lm(),om(),um(),fm()}function fm(){if(Je!==5)return!1;var e=Wn,n=Hc;Hc=0;var r=lu(Is),l=D.T,u=H.p;try{H.p=32>r?32:r,D.T=null,r=Pc,Pc=null;var f=Wn,d=Is;if(Je=0,Ds=Wn=null,Is=0,(de&6)!==0)throw Error(a(331));var g=de;if(de|=4,K_(f.current),Y_(f,f.current,d,r),de=g,Kr(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(ur,f)}catch{}return!0}finally{H.p=u,D.T=l,cm(e,n)}}function hm(e,n,r){n=kt(r,n),n=vc(e.stateNode,n,2),e=Bn(e,n,2),e!==null&&(fr(e,2),sn(e))}function be(e,n,r){if(e.tag===3)hm(e,e,r);else for(;n!==null;){if(n.tag===3){hm(n,e,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xn===null||!Xn.has(l))){e=kt(r,e),r=m_(2),l=Bn(n,r,2),l!==null&&(g_(r,l,n,e),fr(l,2),sn(l));break}}n=n.return}}function Gc(e,n,r){var l=e.pingCache;if(l===null){l=e.pingCache=new tS;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(r)||(kc=!0,u.add(r),e=aS.bind(null,e,n,r),n.then(e,e))}function aS(e,n,r){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Te===e&&(oe&r)===r&&(Ie===4||Ie===3&&(oe&62914560)===oe&&300>Jt()-zc?(de&2)===0&&Ms(e,0):Uc|=r,Os===oe&&(Os=0)),sn(e)}function dm(e,n){n===0&&(n=ud()),e=ps(e,n),e!==null&&(fr(e,n),sn(e))}function lS(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),dm(e,r)}function oS(e,n){var r=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),dm(e,r)}function uS(e,n){return iu(e,n)}var Pl=null,ks=null,Yc=!1,Bl=!1,Fc=!1,Pi=0;function sn(e){e!==ks&&e.next===null&&(ks===null?Pl=ks=e:ks=ks.next=e),Bl=!0,Yc||(Yc=!0,fS())}function Kr(e,n){if(!Fc&&Bl){Fc=!0;do for(var r=!1,l=Pl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var d=l.suspendedLanes,g=l.pingedLanes;f=(1<<31-Ct(42|e)+1)-1,f&=u&~(d&~g),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,gm(l,f))}else f=oe,f=Fa(l,l===Te?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||cr(l,f)||(r=!0,gm(l,f));l=l.next}while(r);Fc=!1}}function cS(){pm()}function pm(){Bl=Yc=!1;var e=0;Pi!==0&&(yS()&&(e=Pi),Pi=0);for(var n=Jt(),r=null,l=Pl;l!==null;){var u=l.next,f=_m(l,n);f===0?(l.next=null,r===null?Pl=u:r.next=u,u===null&&(ks=r)):(r=l,(e!==0||(f&3)!==0)&&(Bl=!0)),l=u}Kr(e)}function _m(e,n){for(var r=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var d=31-Ct(f),g=1<<d,v=u[d];v===-1?((g&r)===0||(g&l)!==0)&&(u[d]=L0(g,n)):v<=n&&(e.expiredLanes|=g),f&=~g}if(n=Te,r=oe,r=Fa(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===n&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&su(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||cr(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(l!==null&&su(l),lu(r)){case 2:case 8:r=ad;break;case 32:r=ja;break;case 268435456:r=ld;break;default:r=ja}return l=mm.bind(null,e),r=iu(r,l),e.callbackPriority=n,e.callbackNode=r,n}return l!==null&&l!==null&&su(l),e.callbackPriority=2,e.callbackNode=null,2}function mm(e,n){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Hl()&&e.callbackNode!==r)return null;var l=oe;return l=Fa(e,e===Te?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(J_(e,l,n),_m(e,Jt()),e.callbackNode!=null&&e.callbackNode===r?mm.bind(null,e):null)}function gm(e,n){if(Hl())return null;J_(e,n,!0)}function fS(){SS(function(){(de&6)!==0?iu(rd,cS):pm()})}function Qc(){return Pi===0&&(Pi=od()),Pi}function vm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Za(""+e)}function ym(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function hS(e,n,r,l,u){if(n==="submit"&&r&&r.stateNode===u){var f=vm((u[_t]||null).action),d=l.submitter;d&&(n=(n=d[_t]||null)?vm(n.formAction):d.getAttribute("formAction"),n!==null&&(f=n,d=null));var g=new tl("action","action",null,l,u);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Pi!==0){var v=d?ym(u,d):new FormData(u);dc(r,{pending:!0,data:v,method:u.method,action:f},null,v)}}else typeof f=="function"&&(g.preventDefault(),v=d?ym(u,d):new FormData(u),dc(r,{pending:!0,data:v,method:u.method,action:f},f,v))},currentTarget:u}]})}}for(var Kc=0;Kc<Mu.length;Kc++){var Xc=Mu[Kc],dS=Xc.toLowerCase(),pS=Xc[0].toUpperCase()+Xc.slice(1);jt(dS,"on"+pS)}jt(Jd,"onAnimationEnd"),jt($d,"onAnimationIteration"),jt(ep,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(IE,"onTransitionRun"),jt(ME,"onTransitionStart"),jt(xE,"onTransitionCancel"),jt(tp,"onTransitionEnd"),ss("onMouseEnter",["mouseout","mouseover"]),ss("onMouseLeave",["mouseout","mouseover"]),ss("onPointerEnter",["pointerout","pointerover"]),ss("onPointerLeave",["pointerout","pointerover"]),Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xr));function Em(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var d=l.length-1;0<=d;d--){var g=l[d],v=g.instance,w=g.currentTarget;if(g=g.listener,v!==f&&u.isPropagationStopped())break e;f=g,u.currentTarget=w;try{f(u)}catch(O){Rl(O)}u.currentTarget=null,f=v}else for(d=0;d<l.length;d++){if(g=l[d],v=g.instance,w=g.currentTarget,g=g.listener,v!==f&&u.isPropagationStopped())break e;f=g,u.currentTarget=w;try{f(u)}catch(O){Rl(O)}u.currentTarget=null,f=v}}}}function re(e,n){var r=n[ou];r===void 0&&(r=n[ou]=new Set);var l=e+"__bubble";r.has(l)||(Sm(n,e,2,!1),r.add(l))}function Wc(e,n,r){var l=0;n&&(l|=4),Sm(r,e,l,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Zc(e){if(!e[ql]){e[ql]=!0,pd.forEach(function(r){r!=="selectionchange"&&(_S.has(r)||Wc(r,!1,e),Wc(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Wc("selectionchange",!1,n))}}function Sm(e,n,r,l){switch(Ym(n)){case 2:var u=VS;break;case 8:u=jS;break;default:u=hf}r=u.bind(null,n,r,e),u=void 0,!yu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function Jc(e,n,r,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var g=l.stateNode.containerInfo;if(g===u)break;if(d===4)for(d=l.return;d!==null;){var v=d.tag;if((v===3||v===4)&&d.stateNode.containerInfo===u)return;d=d.return}for(;g!==null;){if(d=ts(g),d===null)return;if(v=d.tag,v===5||v===6||v===26||v===27){l=f=d;continue e}g=g.parentNode}}l=l.return}Nd(function(){var w=f,O=gu(r),M=[];e:{var R=np.get(e);if(R!==void 0){var N=tl,Q=e;switch(e){case"keypress":if($a(r)===0)break e;case"keydown":case"keyup":N=uE;break;case"focusin":Q="focus",N=Tu;break;case"focusout":Q="blur",N=Tu;break;case"beforeblur":case"afterblur":N=Tu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=hE;break;case Jd:case $d:case ep:N=eE;break;case tp:N=pE;break;case"scroll":case"scrollend":N=X0;break;case"wheel":N=mE;break;case"copy":case"cut":case"paste":N=nE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=xd;break;case"toggle":case"beforetoggle":N=vE}var j=(n&4)!==0,ve=!j&&(e==="scroll"||e==="scrollend"),C=j?R!==null?R+"Capture":null:R;j=[];for(var T=w,A;T!==null;){var I=T;if(A=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||A===null||C===null||(I=pr(T,C),I!=null&&j.push(Wr(T,I,A))),ve)break;T=T.return}0<j.length&&(R=new N(R,Q,null,r,O),M.push({event:R,listeners:j}))}}if((n&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",R&&r!==mu&&(Q=r.relatedTarget||r.fromElement)&&(ts(Q)||Q[es]))break e;if((N||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,N?(Q=r.relatedTarget||r.toElement,N=w,Q=Q?ts(Q):null,Q!==null&&(ve=c(Q),j=Q.tag,Q!==ve||j!==5&&j!==27&&j!==6)&&(Q=null)):(N=null,Q=w),N!==Q)){if(j=Id,I="onMouseLeave",C="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(j=xd,I="onPointerLeave",C="onPointerEnter",T="pointer"),ve=N==null?R:dr(N),A=Q==null?R:dr(Q),R=new j(I,T+"leave",N,r,O),R.target=ve,R.relatedTarget=A,I=null,ts(O)===w&&(j=new j(C,T+"enter",Q,r,O),j.target=A,j.relatedTarget=ve,I=j),ve=I,N&&Q)t:{for(j=N,C=Q,T=0,A=j;A;A=Us(A))T++;for(A=0,I=C;I;I=Us(I))A++;for(;0<T-A;)j=Us(j),T--;for(;0<A-T;)C=Us(C),A--;for(;T--;){if(j===C||C!==null&&j===C.alternate)break t;j=Us(j),C=Us(C)}j=null}else j=null;N!==null&&bm(M,R,N,j,!1),Q!==null&&ve!==null&&bm(M,ve,Q,j,!0)}}e:{if(R=w?dr(w):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var B=qd;else if(Pd(R))if(Vd)B=NE;else{B=wE;var te=AE}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?w&&_u(w.elementType)&&(B=qd):B=RE;if(B&&(B=B(e,w))){Bd(M,B,r,O);break e}te&&te(e,R,w),e==="focusout"&&w&&R.type==="number"&&w.memoizedProps.value!=null&&pu(R,"number",R.value)}switch(te=w?dr(w):window,e){case"focusin":(Pd(te)||te.contentEditable==="true")&&(fs=te,Ou=w,br=null);break;case"focusout":br=Ou=fs=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Wd(M,r,O);break;case"selectionchange":if(DE)break;case"keydown":case"keyup":Wd(M,r,O)}var q;if(Au)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else cs?zd(e,r)&&(G="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(G="onCompositionStart");G&&(kd&&r.locale!=="ko"&&(cs||G!=="onCompositionStart"?G==="onCompositionEnd"&&cs&&(q=Od()):(Ln=O,Eu="value"in Ln?Ln.value:Ln.textContent,cs=!0)),te=Vl(w,G),0<te.length&&(G=new Md(G,e,null,r,O),M.push({event:G,listeners:te}),q?G.data=q:(q=Hd(r),q!==null&&(G.data=q)))),(q=EE?SE(e,r):bE(e,r))&&(G=Vl(w,"onBeforeInput"),0<G.length&&(te=new Md("onBeforeInput","beforeinput",null,r,O),M.push({event:te,listeners:G}),te.data=q)),hS(M,e,w,r,O)}Em(M,n)})}function Wr(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Vl(e,n){for(var r=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=pr(e,r),u!=null&&l.unshift(Wr(e,u,f)),u=pr(e,n),u!=null&&l.push(Wr(e,u,f))),e.tag===3)return l;e=e.return}return[]}function Us(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bm(e,n,r,l,u){for(var f=n._reactName,d=[];r!==null&&r!==l;){var g=r,v=g.alternate,w=g.stateNode;if(g=g.tag,v!==null&&v===l)break;g!==5&&g!==26&&g!==27||w===null||(v=w,u?(w=pr(r,f),w!=null&&d.unshift(Wr(r,w,v))):u||(w=pr(r,f),w!=null&&d.push(Wr(r,w,v)))),r=r.return}d.length!==0&&e.push({event:n,listeners:d})}var mS=/\r\n?/g,gS=/\u0000|\uFFFD/g;function Tm(e){return(typeof e=="string"?e:""+e).replace(mS,`
`).replace(gS,"")}function Cm(e,n){return n=Tm(n),Tm(e)===n}function jl(){}function ge(e,n,r,l,u,f){switch(r){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ls(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ls(e,""+l);break;case"className":Ka(e,"class",l);break;case"tabIndex":Ka(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ka(e,r,l);break;case"style":wd(e,l,f);break;case"data":if(n!=="object"){Ka(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Za(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&ge(e,n,"name",u.name,u,null),ge(e,n,"formEncType",u.formEncType,u,null),ge(e,n,"formMethod",u.formMethod,u,null),ge(e,n,"formTarget",u.formTarget,u,null)):(ge(e,n,"encType",u.encType,u,null),ge(e,n,"method",u.method,u,null),ge(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Za(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=jl);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Za(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":re("beforetoggle",e),re("toggle",e),Qa(e,"popover",l);break;case"xlinkActuate":un(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":un(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":un(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":un(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":un(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":un(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":un(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":un(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":un(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Qa(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Q0.get(r)||r,Qa(e,r,l))}}function $c(e,n,r,l,u,f){switch(r){case"style":wd(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?ls(e,l):(typeof l=="number"||typeof l=="bigint")&&ls(e,""+l);break;case"onScroll":l!=null&&re("scroll",e);break;case"onScrollEnd":l!=null&&re("scrollend",e);break;case"onClick":l!=null&&(e.onclick=jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_d.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),f=e[_t]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,l,u);break e}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Qa(e,r,l)}}}function $e(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var l=!1,u=!1,f;for(f in r)if(r.hasOwnProperty(f)){var d=r[f];if(d!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ge(e,n,f,d,r,null)}}u&&ge(e,n,"srcSet",r.srcSet,r,null),l&&ge(e,n,"src",r.src,r,null);return;case"input":re("invalid",e);var g=f=d=u=null,v=null,w=null;for(l in r)if(r.hasOwnProperty(l)){var O=r[l];if(O!=null)switch(l){case"name":u=O;break;case"type":d=O;break;case"checked":v=O;break;case"defaultChecked":w=O;break;case"value":f=O;break;case"defaultValue":g=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(a(137,n));break;default:ge(e,n,l,O,r,null)}}bd(e,f,g,v,w,d,u,!1),Xa(e);return;case"select":re("invalid",e),l=d=f=null;for(u in r)if(r.hasOwnProperty(u)&&(g=r[u],g!=null))switch(u){case"value":f=g;break;case"defaultValue":d=g;break;case"multiple":l=g;default:ge(e,n,u,g,r,null)}n=f,r=d,e.multiple=!!l,n!=null?as(e,!!l,n,!1):r!=null&&as(e,!!l,r,!0);return;case"textarea":re("invalid",e),f=u=l=null;for(d in r)if(r.hasOwnProperty(d)&&(g=r[d],g!=null))switch(d){case"value":l=g;break;case"defaultValue":u=g;break;case"children":f=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(a(91));break;default:ge(e,n,d,g,r,null)}Cd(e,l,u,f),Xa(e);return;case"option":for(v in r)if(r.hasOwnProperty(v)&&(l=r[v],l!=null))switch(v){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ge(e,n,v,l,r,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(l=0;l<Xr.length;l++)re(Xr[l],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in r)if(r.hasOwnProperty(w)&&(l=r[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ge(e,n,w,l,r,null)}return;default:if(_u(n)){for(O in r)r.hasOwnProperty(O)&&(l=r[O],l!==void 0&&$c(e,n,O,l,r,void 0));return}}for(g in r)r.hasOwnProperty(g)&&(l=r[g],l!=null&&ge(e,n,g,l,r,null))}function vS(e,n,r,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,d=null,g=null,v=null,w=null,O=null;for(N in r){var M=r[N];if(r.hasOwnProperty(N)&&M!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=M;default:l.hasOwnProperty(N)||ge(e,n,N,null,l,M)}}for(var R in l){var N=l[R];if(M=r[R],l.hasOwnProperty(R)&&(N!=null||M!=null))switch(R){case"type":f=N;break;case"name":u=N;break;case"checked":w=N;break;case"defaultChecked":O=N;break;case"value":d=N;break;case"defaultValue":g=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(137,n));break;default:N!==M&&ge(e,n,R,N,l,M)}}du(e,d,g,v,w,O,f,u);return;case"select":N=d=g=R=null;for(f in r)if(v=r[f],r.hasOwnProperty(f)&&v!=null)switch(f){case"value":break;case"multiple":N=v;default:l.hasOwnProperty(f)||ge(e,n,f,null,l,v)}for(u in l)if(f=l[u],v=r[u],l.hasOwnProperty(u)&&(f!=null||v!=null))switch(u){case"value":R=f;break;case"defaultValue":g=f;break;case"multiple":d=f;default:f!==v&&ge(e,n,u,f,l,v)}n=g,r=d,l=N,R!=null?as(e,!!r,R,!1):!!l!=!!r&&(n!=null?as(e,!!r,n,!0):as(e,!!r,r?[]:"",!1));return;case"textarea":N=R=null;for(g in r)if(u=r[g],r.hasOwnProperty(g)&&u!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ge(e,n,g,null,l,u)}for(d in l)if(u=l[d],f=r[d],l.hasOwnProperty(d)&&(u!=null||f!=null))switch(d){case"value":R=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==f&&ge(e,n,d,u,l,f)}Td(e,R,N);return;case"option":for(var Q in r)if(R=r[Q],r.hasOwnProperty(Q)&&R!=null&&!l.hasOwnProperty(Q))switch(Q){case"selected":e.selected=!1;break;default:ge(e,n,Q,null,l,R)}for(v in l)if(R=l[v],N=r[v],l.hasOwnProperty(v)&&R!==N&&(R!=null||N!=null))switch(v){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:ge(e,n,v,R,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var j in r)R=r[j],r.hasOwnProperty(j)&&R!=null&&!l.hasOwnProperty(j)&&ge(e,n,j,null,l,R);for(w in l)if(R=l[w],N=r[w],l.hasOwnProperty(w)&&R!==N&&(R!=null||N!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(137,n));break;default:ge(e,n,w,R,l,N)}return;default:if(_u(n)){for(var ve in r)R=r[ve],r.hasOwnProperty(ve)&&R!==void 0&&!l.hasOwnProperty(ve)&&$c(e,n,ve,void 0,l,R);for(O in l)R=l[O],N=r[O],!l.hasOwnProperty(O)||R===N||R===void 0&&N===void 0||$c(e,n,O,R,l,N);return}}for(var C in r)R=r[C],r.hasOwnProperty(C)&&R!=null&&!l.hasOwnProperty(C)&&ge(e,n,C,null,l,R);for(M in l)R=l[M],N=r[M],!l.hasOwnProperty(M)||R===N||R==null&&N==null||ge(e,n,M,R,l,N)}var ef=null,tf=null;function Gl(e){return e.nodeType===9?e:e.ownerDocument}function Am(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function nf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sf=null;function yS(){var e=window.event;return e&&e.type==="popstate"?e===sf?!1:(sf=e,!0):(sf=null,!1)}var Rm=typeof setTimeout=="function"?setTimeout:void 0,ES=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(e){return Nm.resolve(null).then(e).catch(bS)}:Rm;function bS(e){setTimeout(function(){throw e})}function Jn(e){return e==="head"}function Om(e,n){var r=n,l=0,u=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<l&&8>l){r=l;var d=e.ownerDocument;if(r&1&&Zr(d.documentElement),r&2&&Zr(d.body),r&4)for(r=d.head,Zr(r),d=r.firstChild;d;){var g=d.nextSibling,v=d.nodeName;d[hr]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=g}}if(u===0){e.removeChild(f),ra(n);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:l=r.charCodeAt(0)-48;else l=0;r=f}while(r);ra(n)}function rf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":rf(r),uu(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function TS(e,n,r,l){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[hr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Yt(e.nextSibling),e===null)break}return null}function CS(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Yt(e.nextSibling),e===null))return null;return e}function af(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function AS(e,n){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")n();else{var l=function(){n(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Yt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var lf=null;function Dm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}function Im(e,n,r){switch(n=Gl(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Zr(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);uu(e)}var Bt=new Map,Mm=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tn=H.d;H.d={f:wS,r:RS,D:NS,C:OS,L:DS,m:IS,X:xS,S:MS,M:kS};function wS(){var e=Tn.f(),n=Ll();return e||n}function RS(e){var n=ns(e);n!==null&&n.tag===5&&n.type==="form"?Jp(n):Tn.r(e)}var Ls=typeof document>"u"?null:document;function xm(e,n,r){var l=Ls;if(l&&typeof n=="string"&&n){var u=xt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Mm.has(u)||(Mm.add(u),e={rel:e,crossOrigin:r,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),$e(n,"link",e),Ve(n),l.head.appendChild(n)))}}function NS(e){Tn.D(e),xm("dns-prefetch",e,null)}function OS(e,n){Tn.C(e,n),xm("preconnect",e,n)}function DS(e,n,r){Tn.L(e,n,r);var l=Ls;if(l&&e&&n){var u='link[rel="preload"][as="'+xt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+xt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+xt(r.imageSizes)+'"]')):u+='[href="'+xt(e)+'"]';var f=u;switch(n){case"style":f=zs(e);break;case"script":f=Hs(e)}Bt.has(f)||(e=y({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),Bt.set(f,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(Jr(f))||n==="script"&&l.querySelector($r(f))||(n=l.createElement("link"),$e(n,"link",e),Ve(n),l.head.appendChild(n)))}}function IS(e,n){Tn.m(e,n);var r=Ls;if(r&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xt(l)+'"][href="'+xt(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Hs(e)}if(!Bt.has(f)&&(e=y({rel:"modulepreload",href:e},n),Bt.set(f,e),r.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector($r(f)))return}l=r.createElement("link"),$e(l,"link",e),Ve(l),r.head.appendChild(l)}}}function MS(e,n,r){Tn.S(e,n,r);var l=Ls;if(l&&e){var u=is(l).hoistableStyles,f=zs(e);n=n||"default";var d=u.get(f);if(!d){var g={loading:0,preload:null};if(d=l.querySelector(Jr(f)))g.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},r),(r=Bt.get(f))&&of(e,r);var v=d=l.createElement("link");Ve(v),$e(v,"link",e),v._p=new Promise(function(w,O){v.onload=w,v.onerror=O}),v.addEventListener("load",function(){g.loading|=1}),v.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Fl(d,n,l)}d={type:"stylesheet",instance:d,count:1,state:g},u.set(f,d)}}}function xS(e,n){Tn.X(e,n);var r=Ls;if(r&&e){var l=is(r).hoistableScripts,u=Hs(e),f=l.get(u);f||(f=r.querySelector($r(u)),f||(e=y({src:e,async:!0},n),(n=Bt.get(u))&&uf(e,n),f=r.createElement("script"),Ve(f),$e(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function kS(e,n){Tn.M(e,n);var r=Ls;if(r&&e){var l=is(r).hoistableScripts,u=Hs(e),f=l.get(u);f||(f=r.querySelector($r(u)),f||(e=y({src:e,async:!0,type:"module"},n),(n=Bt.get(u))&&uf(e,n),f=r.createElement("script"),Ve(f),$e(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function km(e,n,r,l){var u=(u=W.current)?Yl(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=zs(r.href),r=is(u).hoistableStyles,l=r.get(n),l||(l={type:"style",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=zs(r.href);var f=is(u).hoistableStyles,d=f.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,d),(f=u.querySelector(Jr(e)))&&!f._p&&(d.instance=f,d.state.loading=5),Bt.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Bt.set(e,r),f||US(u,e,r,d.state))),n&&l===null)throw Error(a(528,""));return d}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Hs(r),r=is(u).hoistableScripts,l=r.get(n),l||(l={type:"script",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function zs(e){return'href="'+xt(e)+'"'}function Jr(e){return'link[rel="stylesheet"]['+e+"]"}function Um(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function US(e,n,r,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),$e(n,"link",r),Ve(n),e.head.appendChild(n))}function Hs(e){return'[src="'+xt(e)+'"]'}function $r(e){return"script[async]"+e}function Lm(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+xt(r.href)+'"]');if(l)return n.instance=l,Ve(l),l;var u=y({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ve(l),$e(l,"style",u),Fl(l,r.precedence,e),n.instance=l;case"stylesheet":u=zs(r.href);var f=e.querySelector(Jr(u));if(f)return n.state.loading|=4,n.instance=f,Ve(f),f;l=Um(r),(u=Bt.get(u))&&of(l,u),f=(e.ownerDocument||e).createElement("link"),Ve(f);var d=f;return d._p=new Promise(function(g,v){d.onload=g,d.onerror=v}),$e(f,"link",l),n.state.loading|=4,Fl(f,r.precedence,e),n.instance=f;case"script":return f=Hs(r.src),(u=e.querySelector($r(f)))?(n.instance=u,Ve(u),u):(l=r,(u=Bt.get(f))&&(l=y({},r),uf(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ve(u),$e(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Fl(l,r.precedence,e));return n.instance}function Fl(e,n,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,d=0;d<l.length;d++){var g=l[d];if(g.dataset.precedence===n)f=g;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function of(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function uf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ql=null;function zm(e,n,r){if(Ql===null){var l=new Map,u=Ql=new Map;u.set(r,l)}else u=Ql,l=u.get(r),l||(l=new Map,u.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var f=r[u];if(!(f[hr]||f[rt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var d=f.getAttribute(n)||"";d=e+d;var g=l.get(d);g?g.push(f):l.set(d,[f])}}return l}function Hm(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function LS(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Pm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ea=null;function zS(){}function HS(e,n,r){if(ea===null)throw Error(a(475));var l=ea;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=zs(r.href),f=e.querySelector(Jr(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Kl.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=f,Ve(f);return}f=e.ownerDocument||e,r=Um(r),(u=Bt.get(u))&&of(r,u),f=f.createElement("link"),Ve(f);var d=f;d._p=new Promise(function(g,v){d.onload=g,d.onerror=v}),$e(f,"link",r),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=Kl.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function PS(){if(ea===null)throw Error(a(475));var e=ea;return e.stylesheets&&e.count===0&&cf(e,e.stylesheets),0<e.count?function(n){var r=setTimeout(function(){if(e.stylesheets&&cf(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Kl(){if(this.count--,this.count===0){if(this.stylesheets)cf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function cf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(BS,e),Xl=null,Kl.call(e))}function BS(e,n){if(!(n.state.loading&4)){var r=Xl.get(e);if(r)var l=r.get(null);else{r=new Map,Xl.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var d=u[f];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(r.set(d.dataset.precedence,d),l=d)}l&&r.set(null,l)}u=n.instance,d=u.getAttribute("data-precedence"),f=r.get(d)||l,f===l&&r.set(null,u),r.set(d,u),this.count++,l=Kl.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ta={$$typeof:_e,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function qS(e,n,r,l,u,f,d,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ru(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.hiddenUpdates=ru(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function Bm(e,n,r,l,u,f,d,g,v,w,O,M){return e=new qS(e,n,r,d,g,v,w,M),n=1,f===!0&&(n|=24),f=wt(3,null,null,n),e.current=f,f.stateNode=e,n=Gu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:r,cache:n},Ku(f),e}function qm(e){return e?(e=_s,e):_s}function Vm(e,n,r,l,u,f){u=qm(u),l.context===null?l.context=u:l.pendingContext=u,l=Pn(n),l.payload={element:r},f=f===void 0?null:f,f!==null&&(l.callback=f),r=Bn(e,l,n),r!==null&&(It(r,e,n),Ir(r,e,n))}function jm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function ff(e,n){jm(e,n),(e=e.alternate)&&jm(e,n)}function Gm(e){if(e.tag===13){var n=ps(e,67108864);n!==null&&It(n,e,67108864),ff(e,67108864)}}var Wl=!0;function VS(e,n,r,l){var u=D.T;D.T=null;var f=H.p;try{H.p=2,hf(e,n,r,l)}finally{H.p=f,D.T=u}}function jS(e,n,r,l){var u=D.T;D.T=null;var f=H.p;try{H.p=8,hf(e,n,r,l)}finally{H.p=f,D.T=u}}function hf(e,n,r,l){if(Wl){var u=df(l);if(u===null)Jc(e,n,l,Zl,r),Fm(e,l);else if(YS(u,e,n,r,l))l.stopPropagation();else if(Fm(e,l),n&4&&-1<GS.indexOf(e)){for(;u!==null;){var f=ns(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var d=bi(f.pendingLanes);if(d!==0){var g=f;for(g.pendingLanes|=2,g.entangledLanes|=2;d;){var v=1<<31-Ct(d);g.entanglements[1]|=v,d&=~v}sn(f),(de&6)===0&&(kl=Jt()+500,Kr(0))}}break;case 13:g=ps(f,2),g!==null&&It(g,f,2),Ll(),ff(f,2)}if(f=df(l),f===null&&Jc(e,n,l,Zl,r),f===u)break;u=f}u!==null&&l.stopPropagation()}else Jc(e,n,l,null,r)}}function df(e){return e=gu(e),pf(e)}var Zl=null;function pf(e){if(Zl=null,e=ts(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=h(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Zl=e,null}function Ym(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(O0()){case rd:return 2;case ad:return 8;case ja:case D0:return 32;case ld:return 268435456;default:return 32}default:return 32}}var _f=!1,$n=null,ei=null,ti=null,na=new Map,ia=new Map,ni=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fm(e,n){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":na.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(n.pointerId)}}function sa(e,n,r,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ns(n),n!==null&&Gm(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function YS(e,n,r,l,u){switch(n){case"focusin":return $n=sa($n,e,n,r,l,u),!0;case"dragenter":return ei=sa(ei,e,n,r,l,u),!0;case"mouseover":return ti=sa(ti,e,n,r,l,u),!0;case"pointerover":var f=u.pointerId;return na.set(f,sa(na.get(f)||null,e,n,r,l,u)),!0;case"gotpointercapture":return f=u.pointerId,ia.set(f,sa(ia.get(f)||null,e,n,r,l,u)),!0}return!1}function Qm(e){var n=ts(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=h(r),n!==null){e.blockedOn=n,H0(e.priority,function(){if(r.tag===13){var l=Dt();l=au(l);var u=ps(r,l);u!==null&&It(u,r,l),ff(r,l)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=df(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);mu=l,r.target.dispatchEvent(l),mu=null}else return n=ns(r),n!==null&&Gm(n),e.blockedOn=r,!1;n.shift()}return!0}function Km(e,n,r){Jl(e)&&r.delete(n)}function FS(){_f=!1,$n!==null&&Jl($n)&&($n=null),ei!==null&&Jl(ei)&&(ei=null),ti!==null&&Jl(ti)&&(ti=null),na.forEach(Km),ia.forEach(Km)}function $l(e,n){e.blockedOn===n&&(e.blockedOn=null,_f||(_f=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,FS)))}var eo=null;function Xm(e){eo!==e&&(eo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){eo===e&&(eo=null);for(var n=0;n<e.length;n+=3){var r=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(pf(l||r)===null)continue;break}var f=ns(r);f!==null&&(e.splice(n,3),n-=3,dc(f,{pending:!0,data:u,method:r.method,action:l},l,u))}}))}function ra(e){function n(v){return $l(v,e)}$n!==null&&$l($n,e),ei!==null&&$l(ei,e),ti!==null&&$l(ti,e),na.forEach(n),ia.forEach(n);for(var r=0;r<ni.length;r++){var l=ni[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ni.length&&(r=ni[0],r.blockedOn===null);)Qm(r),r.blockedOn===null&&ni.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var u=r[l],f=r[l+1],d=u[_t]||null;if(typeof f=="function")d||Xm(r);else if(d){var g=null;if(f&&f.hasAttribute("formAction")){if(u=f,d=f[_t]||null)g=d.formAction;else if(pf(u)!==null)continue}else g=d.action;typeof g=="function"?r[l+1]=g:(r.splice(l,3),l-=3),Xm(r)}}}function mf(e){this._internalRoot=e}to.prototype.render=mf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,l=Dt();Vm(r,l,e,n,null,null)},to.prototype.unmount=mf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vm(e.current,2,null,e,null,null),Ll(),n[es]=null}};function to(e){this._internalRoot=e}to.prototype.unstable_scheduleHydration=function(e){if(e){var n=hd();e={blockedOn:null,target:e,priority:n};for(var r=0;r<ni.length&&n!==0&&n<ni[r].priority;r++);ni.splice(r,0,e),r===0&&Qm(e)}};var Wm=t.version;if(Wm!=="19.1.0")throw Error(a(527,Wm,"19.1.0"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=_(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var QS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{ur=no.inject(QS),Tt=no}catch{}}return la.createRoot=function(e,n){if(!o(e))throw Error(a(299));var r=!1,l="",u=h_,f=d_,d=p_,g=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(g=n.unstable_transitionCallbacks)),n=Bm(e,1,!1,null,null,r,l,u,f,d,g,null),e[es]=n.current,Zc(e),new mf(n)},la.hydrateRoot=function(e,n,r){if(!o(e))throw Error(a(299));var l=!1,u="",f=h_,d=d_,g=p_,v=null,w=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(g=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(v=r.unstable_transitionCallbacks),r.formState!==void 0&&(w=r.formState)),n=Bm(e,1,!0,n,r??null,l,u,f,d,g,v,w),n.context=qm(null),r=n.current,l=Dt(),l=au(l),u=Pn(l),u.callback=null,Bn(r,u,l),r=l,n.current.lanes=r,fr(n,r),sn(n),e[es]=n.current,Zc(e),new to(n)},la.version="19.1.0",la}var ag;function sb(){if(ag)return yf.exports;ag=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),yf.exports=ib(),yf.exports}var rb=sb();const ab=vv(rb),lb=()=>{};var lg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(s,t){if(!s)throw tr(t)},tr=function(s){return new Error("Firebase Database ("+yv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=function(s){const t=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++a)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},ob=function(s){const t=[];let i=0,a=0;for(;i<s.length;){const o=s[i++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const c=s[i++];t[a++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=s[i++],h=s[i++],p=s[i++],_=((o&7)<<18|(c&63)<<12|(h&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(_>>10)),t[a++]=String.fromCharCode(56320+(_&1023))}else{const c=s[i++],h=s[i++];t[a++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<s.length;o+=3){const c=s[o],h=o+1<s.length,p=h?s[o+1]:0,_=o+2<s.length,m=_?s[o+2]:0,y=c>>2,E=(c&3)<<4|p>>4;let S=(p&15)<<2|m>>6,k=m&63;_||(k=64,h||(S=64)),a.push(i[y],i[E],i[S],i[k])}return a.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(Ev(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):ob(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<s.length;){const c=i[s.charAt(o++)],p=o<s.length?i[s.charAt(o)]:0;++o;const m=o<s.length?i[s.charAt(o)]:64;++o;const E=o<s.length?i[s.charAt(o)]:64;if(++o,c==null||p==null||m==null||E==null)throw new ub;const S=c<<2|p>>4;if(a.push(S),m!==64){const k=p<<4&240|m>>2;if(a.push(k),E!==64){const L=m<<6&192|E;a.push(L)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class ub extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sv=function(s){const t=Ev(s);return oh.encodeByteArray(t,!0)},po=function(s){return Sv(s).replace(/\./g,"")},_o=function(s){try{return oh.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(s){return bv(void 0,s)}function bv(s,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return t}for(const i in t)!t.hasOwnProperty(i)||!fb(i)||(s[i]=bv(s[i],t[i]));return s}function fb(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=()=>hb().__FIREBASE_DEFAULTS__,pb=()=>{if(typeof process>"u"||typeof lg>"u")return;const s=lg.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},_b=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&_o(s[1]);return t&&JSON.parse(t)},uh=()=>{try{return lb()||db()||pb()||_b()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Tv=s=>{var t,i;return(i=(t=uh())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[s]},mb=s=>{const t=Tv(s);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},Cv=()=>{var s;return(s=uh())===null||s===void 0?void 0:s.config},Av=s=>{var t;return(t=uh())===null||t===void 0?void 0:t[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wv(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",o=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},s);return[po(JSON.stringify(i)),po(JSON.stringify(h)),""].join(".")}const pa={};function vb(){const s={prod:[],emulator:[]};for(const t of Object.keys(pa))pa[t]?s.emulator.push(t):s.prod.push(t);return s}function yb(s){let t=document.getElementById(s),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",s),i=!0),{created:i,element:t}}let og=!1;function Rv(s,t){if(typeof window>"u"||typeof document>"u"||!nr(window.location.host)||pa[s]===t||pa[s]||og)return;pa[s]=t;function i(S){return`__firebase__banner__${S}`}const a="__firebase__banner",c=vb().prod.length>0;function h(){const S=document.getElementById(a);S&&S.remove()}function p(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function _(S,k){S.setAttribute("width","24"),S.setAttribute("id",k),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function m(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{og=!0,h()},S}function y(S,k){S.setAttribute("id",k),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=yb(a),k=i("text"),L=document.getElementById(k)||document.createElement("span"),X=i("learnmore"),ee=document.getElementById(X)||document.createElement("a"),Le=i("preprendIcon"),Oe=document.getElementById(Le)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const _e=S.element;p(_e),y(ee,X);const qe=m();_(Oe,Le),_e.append(Oe,L,ee,qe),document.body.appendChild(_e)}c?(L.innerText="Preview backend disconnected.",Oe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Oe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ch(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function Eb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sb(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Nv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bb(){const s=ht();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Tb(){return yv.NODE_ADMIN===!0}function Cb(){try{return typeof indexedDB=="object"}catch{return!1}}function Ab(){return new Promise((s,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="FirebaseError";class mi extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=wb,Object.setPrototypeOf(this,mi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xa.prototype.create)}}class xa{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?Rb(c,a):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new mi(o,p,a)}}function Rb(s,t){return s.replace(Nb,(i,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const Nb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(s){return JSON.parse(s)}function Xe(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=function(s){let t={},i={},a={},o="";try{const c=s.split(".");t=Sa(_o(c[0])||""),i=Sa(_o(c[1])||""),o=c[2],a=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:a,signature:o}},Ob=function(s){const t=Ov(s),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},Db=function(s){const t=Ov(s).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function Ks(s,t){if(Object.prototype.hasOwnProperty.call(s,t))return s[t]}function zf(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function mo(s,t,i){const a={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=t.call(i,s[o],o,s));return a}function ji(s,t){if(s===t)return!0;const i=Object.keys(s),a=Object.keys(t);for(const o of i){if(!a.includes(o))return!1;const c=s[o],h=t[o];if(ug(c)&&ug(h)){if(!ji(c,h))return!1}else if(c!==h)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function ug(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(s){const t=[];for(const[i,a]of Object.entries(s))Array.isArray(a)?a.forEach(o=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function ha(s){const t={};return s.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[o,c]=a.split("=");t[decodeURIComponent(o)]=decodeURIComponent(c)}}),t}function da(s){const t=s.indexOf("?");if(!t)return"";const i=s.indexOf("#",t);return s.substring(t,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const a=this.W_;if(typeof t=="string")for(let E=0;E<16;E++)a[E]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let E=0;E<16;E++)a[E]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let E=16;E<80;E++){const S=a[E-3]^a[E-8]^a[E-14]^a[E-16];a[E]=(S<<1|S>>>31)&4294967295}let o=this.chain_[0],c=this.chain_[1],h=this.chain_[2],p=this.chain_[3],_=this.chain_[4],m,y;for(let E=0;E<80;E++){E<40?E<20?(m=p^c&(h^p),y=1518500249):(m=c^h^p,y=1859775393):E<60?(m=c&h|p&(c|h),y=2400959708):(m=c^h^p,y=3395469782);const S=(o<<5|o>>>27)+m+_+y+a[E]&4294967295;_=p,p=h,h=(c<<30|c>>>2)&4294967295,c=o,o=S}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const a=i-this.blockSize;let o=0;const c=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=a;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(c[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}else for(;o<i;)if(c[h]=t[o],++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let a=0;for(let o=0;o<5;o++)for(let c=24;c>=0;c-=8)t[a]=this.chain_[o]>>c&255,++a;return t}}function Mb(s,t){const i=new xb(s,t);return i.subscribe.bind(i)}class xb{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let o;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");kb(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:a},o.next===void 0&&(o.next=Tf),o.error===void 0&&(o.error=Tf),o.complete===void 0&&(o.complete=Tf);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kb(s,t){if(typeof s!="object"||s===null)return!1;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}function Tf(){}function zo(s,t){return`${s} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=function(s){const t=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);if(o>=55296&&o<=56319){const c=o-55296;a++,U(a<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(a)-56320;o=65536+(c<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},Ho=function(s){let t=0;for(let i=0;i<s.length;i++){const a=s.charCodeAt(i);a<128?t++:a<2048?t+=2:a>=55296&&a<=56319?(t+=4,i++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(s){return s&&s._delegate?s._delegate:s}class Gi{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new Ma;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const a=this.normalizeInstanceIdentifier(t?.identifier),o=(i=t?.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hb(t))try{this.getOrInitializeService({instanceIdentifier:Bi})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});a.resolve(c)}catch{}}}}clearInstance(t=Bi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Bi){return this.instances.has(t)}getOptions(t=Bi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[c,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);a===p&&h.resolve(o)}return o}onInit(t,i){var a;const o=this.normalizeInstanceIdentifier(i),c=(a=this.onInitCallbacks.get(o))!==null&&a!==void 0?a:new Set;c.add(t),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&t(h,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:zb(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Bi){return this.component?this.component.multipleInstances?t:Bi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zb(s){return s===Bi?void 0:s}function Hb(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new Lb(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(ye||(ye={}));const Bb={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},qb=ye.INFO,Vb={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},jb=(s,t,...i)=>{if(t<s.logLevel)return;const a=new Date().toISOString(),o=Vb[t];if(o)console[o](`[${a}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fh{constructor(t){this.name=t,this._logLevel=qb,this._logHandler=jb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ye))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Bb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...t),this._logHandler(this,ye.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...t),this._logHandler(this,ye.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...t),this._logHandler(this,ye.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...t),this._logHandler(this,ye.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...t),this._logHandler(this,ye.ERROR,...t)}}const Gb=(s,t)=>t.some(i=>s instanceof i);let cg,fg;function Yb(){return cg||(cg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fb(){return fg||(fg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dv=new WeakMap,Hf=new WeakMap,Iv=new WeakMap,Cf=new WeakMap,hh=new WeakMap;function Qb(s){const t=new Promise((i,a)=>{const o=()=>{s.removeEventListener("success",c),s.removeEventListener("error",h)},c=()=>{i(ci(s.result)),o()},h=()=>{a(s.error),o()};s.addEventListener("success",c),s.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&Dv.set(i,s)}).catch(()=>{}),hh.set(t,s),t}function Kb(s){if(Hf.has(s))return;const t=new Promise((i,a)=>{const o=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",h),s.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{a(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",c),s.addEventListener("error",h),s.addEventListener("abort",h)});Hf.set(s,t)}let Pf={get(s,t,i){if(s instanceof IDBTransaction){if(t==="done")return Hf.get(s);if(t==="objectStoreNames")return s.objectStoreNames||Iv.get(s);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return ci(s[t])},set(s,t,i){return s[t]=i,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function Xb(s){Pf=s(Pf)}function Wb(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=s.call(Af(this),t,...i);return Iv.set(a,t.sort?t.sort():[t]),ci(a)}:Fb().includes(s)?function(...t){return s.apply(Af(this),t),ci(Dv.get(this))}:function(...t){return ci(s.apply(Af(this),t))}}function Zb(s){return typeof s=="function"?Wb(s):(s instanceof IDBTransaction&&Kb(s),Gb(s,Yb())?new Proxy(s,Pf):s)}function ci(s){if(s instanceof IDBRequest)return Qb(s);if(Cf.has(s))return Cf.get(s);const t=Zb(s);return t!==s&&(Cf.set(s,t),hh.set(t,s)),t}const Af=s=>hh.get(s);function Jb(s,t,{blocked:i,upgrade:a,blocking:o,terminated:c}={}){const h=indexedDB.open(s,t),p=ci(h);return a&&h.addEventListener("upgradeneeded",_=>{a(ci(h.result),_.oldVersion,_.newVersion,ci(h.transaction),_)}),i&&h.addEventListener("blocked",_=>i(_.oldVersion,_.newVersion,_)),p.then(_=>{c&&_.addEventListener("close",()=>c()),o&&_.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),p}const $b=["get","getKey","getAll","getAllKeys","count"],eT=["put","add","delete","clear"],wf=new Map;function hg(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(wf.get(t))return wf.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,o=eT.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||$b.includes(i)))return;const c=async function(h,...p){const _=this.transaction(h,o?"readwrite":"readonly");let m=_.store;return a&&(m=m.index(p.shift())),(await Promise.all([m[i](...p),o&&_.done]))[0]};return wf.set(t,c),c}Xb(s=>({...s,get:(t,i,a)=>hg(t,i)||s.get(t,i,a),has:(t,i)=>!!hg(t,i)||s.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(nT(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function nT(s){const t=s.getComponent();return t?.type==="VERSION"}const Bf="@firebase/app",dg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new fh("@firebase/app"),iT="@firebase/app-compat",sT="@firebase/analytics-compat",rT="@firebase/analytics",aT="@firebase/app-check-compat",lT="@firebase/app-check",oT="@firebase/auth",uT="@firebase/auth-compat",cT="@firebase/database",fT="@firebase/data-connect",hT="@firebase/database-compat",dT="@firebase/functions",pT="@firebase/functions-compat",_T="@firebase/installations",mT="@firebase/installations-compat",gT="@firebase/messaging",vT="@firebase/messaging-compat",yT="@firebase/performance",ET="@firebase/performance-compat",ST="@firebase/remote-config",bT="@firebase/remote-config-compat",TT="@firebase/storage",CT="@firebase/storage-compat",AT="@firebase/firestore",wT="@firebase/ai",RT="@firebase/firestore-compat",NT="firebase",OT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="[DEFAULT]",DT={[Bf]:"fire-core",[iT]:"fire-core-compat",[rT]:"fire-analytics",[sT]:"fire-analytics-compat",[lT]:"fire-app-check",[aT]:"fire-app-check-compat",[oT]:"fire-auth",[uT]:"fire-auth-compat",[cT]:"fire-rtdb",[fT]:"fire-data-connect",[hT]:"fire-rtdb-compat",[dT]:"fire-fn",[pT]:"fire-fn-compat",[_T]:"fire-iid",[mT]:"fire-iid-compat",[gT]:"fire-fcm",[vT]:"fire-fcm-compat",[yT]:"fire-perf",[ET]:"fire-perf-compat",[ST]:"fire-rc",[bT]:"fire-rc-compat",[TT]:"fire-gcs",[CT]:"fire-gcs-compat",[AT]:"fire-fst",[RT]:"fire-fst-compat",[wT]:"fire-vertex","fire-js":"fire-js",[NT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new Map,IT=new Map,Vf=new Map;function pg(s,t){try{s.container.addComponent(t)}catch(i){On.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,i)}}function Xs(s){const t=s.name;if(Vf.has(t))return On.debug(`There were multiple attempts to register component ${t}.`),!1;Vf.set(t,s);for(const i of go.values())pg(i,s);for(const i of IT.values())pg(i,s);return!0}function dh(s,t){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(t)}function qt(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fi=new xa("app","Firebase",MT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(t,i,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw fi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=OT;function Mv(s,t={}){let i=s;typeof t!="object"&&(t={name:t});const a=Object.assign({name:qf,automaticDataCollectionEnabled:!0},t),o=a.name;if(typeof o!="string"||!o)throw fi.create("bad-app-name",{appName:String(o)});if(i||(i=Cv()),!i)throw fi.create("no-options");const c=go.get(o);if(c){if(ji(i,c.options)&&ji(a,c.config))return c;throw fi.create("duplicate-app",{appName:o})}const h=new Pb(o);for(const _ of Vf.values())h.addComponent(_);const p=new xT(i,a,h);return go.set(o,p),p}function xv(s=qf){const t=go.get(s);if(!t&&s===qf&&Cv())return Mv();if(!t)throw fi.create("no-app",{appName:s});return t}function hi(s,t,i){var a;let o=(a=DT[s])!==null&&a!==void 0?a:s;i&&(o+=`-${i}`);const c=o.match(/\s|\//),h=t.match(/\s|\//);if(c||h){const p=[`Unable to register library "${o}" with version "${t}":`];c&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&p.push("and"),h&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),On.warn(p.join(" "));return}Xs(new Gi(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="firebase-heartbeat-database",UT=1,ba="firebase-heartbeat-store";let Rf=null;function kv(){return Rf||(Rf=Jb(kT,UT,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(ba)}catch(i){console.warn(i)}}}}).catch(s=>{throw fi.create("idb-open",{originalErrorMessage:s.message})})),Rf}async function LT(s){try{const i=(await kv()).transaction(ba),a=await i.objectStore(ba).get(Uv(s));return await i.done,a}catch(t){if(t instanceof mi)On.warn(t.message);else{const i=fi.create("idb-get",{originalErrorMessage:t?.message});On.warn(i.message)}}}async function _g(s,t){try{const a=(await kv()).transaction(ba,"readwrite");await a.objectStore(ba).put(t,Uv(s)),await a.done}catch(i){if(i instanceof mi)On.warn(i.message);else{const a=fi.create("idb-set",{originalErrorMessage:i?.message});On.warn(a.message)}}}function Uv(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=1024,HT=30;class PT{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new qT(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=mg();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>HT){const h=VT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){On.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=mg(),{heartbeatsToSend:a,unsentEntries:o}=BT(this._heartbeatsCache.heartbeats),c=po(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return On.warn(i),""}}}function mg(){return new Date().toISOString().substring(0,10)}function BT(s,t=zT){const i=[];let a=s.slice();for(const o of s){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),gg(i)>t){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),gg(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class qT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cb()?Ab().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await LT(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return _g(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return _g(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function gg(s){return po(JSON.stringify({version:2,heartbeats:s})).length}function VT(s){if(s.length===0)return-1;let t=0,i=s[0].date;for(let a=1;a<s.length;a++)s[a].date<i&&(i=s[a].date,t=a);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(s){Xs(new Gi("platform-logger",t=>new tT(t),"PRIVATE")),Xs(new Gi("heartbeat",t=>new PT(t),"PRIVATE")),hi(Bf,dg,s),hi(Bf,dg,"esm2017"),hi("fire-js","")}jT("");var vg={};const yg="@firebase/database",Eg="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lv="";function GT(s){Lv=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Xe(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:Sa(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,i){i==null?delete this.cache_[t]:this.cache_[t]=i}get(t){return ln(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const t=window[s];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new YT(t)}}catch{}return new FT},Vi=zv("localStorage"),QT=zv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new fh("@firebase/database"),KT=function(){let s=1;return function(){return s++}}(),Hv=function(s){const t=Ub(s),i=new Ib;i.update(t);const a=i.digest();return oh.encodeByteArray(a)},ka=function(...s){let t="";for(let i=0;i<s.length;i++){const a=s[i];Array.isArray(a)||a&&typeof a=="object"&&typeof a.length=="number"?t+=ka.apply(null,a):typeof a=="object"?t+=Xe(a):t+=a,t+=" "}return t};let _a=null,Sg=!0;const XT=function(s,t){U(!0,"Can't turn on custom loggers persistently."),Vs.logLevel=ye.VERBOSE,_a=Vs.log.bind(Vs)},et=function(...s){if(Sg===!0&&(Sg=!1,_a===null&&QT.get("logging_enabled")===!0&&XT()),_a){const t=ka.apply(null,s);_a(t)}},Ua=function(s){return function(...t){et(s,...t)}},jf=function(...s){const t="FIREBASE INTERNAL ERROR: "+ka(...s);Vs.error(t)},Dn=function(...s){const t=`FIREBASE FATAL ERROR: ${ka(...s)}`;throw Vs.error(t),new Error(t)},ft=function(...s){const t="FIREBASE WARNING: "+ka(...s);Vs.warn(t)},WT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ft("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ph=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},ZT=function(s){if(document.readyState==="complete")s();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},Ws="[MIN_NAME]",Yi="[MAX_NAME]",Zi=function(s,t){if(s===t)return 0;if(s===Ws||t===Yi)return-1;if(t===Ws||s===Yi)return 1;{const i=bg(s),a=bg(t);return i!==null?a!==null?i-a===0?s.length-t.length:i-a:-1:a!==null?1:s<t?-1:1}},JT=function(s,t){return s===t?0:s<t?-1:1},oa=function(s,t){if(t&&s in t)return t[s];throw new Error("Missing required key ("+s+") in object: "+Xe(t))},_h=function(s){if(typeof s!="object"||s===null)return Xe(s);const t=[];for(const a in s)t.push(a);t.sort();let i="{";for(let a=0;a<t.length;a++)a!==0&&(i+=","),i+=Xe(t[a]),i+=":",i+=_h(s[t[a]]);return i+="}",i},Pv=function(s,t){const i=s.length;if(i<=t)return[s];const a=[];for(let o=0;o<i;o+=t)o+t>i?a.push(s.substring(o,i)):a.push(s.substring(o,o+t));return a};function tt(s,t){for(const i in s)s.hasOwnProperty(i)&&t(i,s[i])}const Bv=function(s){U(!ph(s),"Invalid JSON number");const t=11,i=52,a=(1<<t-1)-1;let o,c,h,p,_;s===0?(c=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-a)?(p=Math.min(Math.floor(Math.log(s)/Math.LN2),a),c=p+a,h=Math.round(s*Math.pow(2,i-p)-Math.pow(2,i))):(c=0,h=Math.round(s/Math.pow(2,1-a-i))));const m=[];for(_=i;_;_-=1)m.push(h%2?1:0),h=Math.floor(h/2);for(_=t;_;_-=1)m.push(c%2?1:0),c=Math.floor(c/2);m.push(o?1:0),m.reverse();const y=m.join("");let E="";for(_=0;_<64;_+=8){let S=parseInt(y.substr(_,8),2).toString(16);S.length===1&&(S="0"+S),E=E+S}return E.toLowerCase()},$T=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},e1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function t1(s,t){let i="Unknown Error";s==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?i="Client doesn't have permission to access the desired data.":s==="unavailable"&&(i="The service is unavailable");const a=new Error(s+" at "+t._path.toString()+": "+i);return a.code=s.toUpperCase(),a}const n1=new RegExp("^-?(0*)\\d{1,10}$"),i1=-2147483648,s1=2147483647,bg=function(s){if(n1.test(s)){const t=Number(s);if(t>=i1&&t<=s1)return t}return null},rr=function(s){try{s()}catch(t){setTimeout(()=>{const i=t.stack||"";throw ft("Exception was thrown by user callback.",i),t},Math.floor(0))}},r1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ma=function(s,t){const i=setTimeout(s,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,qt(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i?.getImmediate({optional:!0}),this.appCheck||i?.get().then(a=>this.appCheck=a)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,a)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,a):i(null)},0)})}addTokenChangeListener(t){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(a=>a.addTokenListener(t))}notifyForInvalidToken(){ft(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(t,i,a){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,a)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,a):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ft(t)}}class ao{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}ao.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="5",qv="v",Vv="s",jv="r",Gv="f",Yv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fv="ls",Qv="p",Gf="ac",Kv="websocket",Xv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(t,i,a,o,c=!1,h="",p=!1,_=!1,m=null){this.secure=i,this.namespace=a,this.webSocketOnly=o,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=_,this.emulatorOptions=m,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Vi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function o1(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function Zv(s,t,i){U(typeof t=="string","typeof type must == string"),U(typeof i=="object","typeof params must == object");let a;if(t===Kv)a=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(t===Xv)a=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);o1(s)&&(i.ns=s.namespace);const o=[];return tt(i,(c,h)=>{o.push(c+"="+h)}),a+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(){this.counters_={}}incrementCounter(t,i=1){ln(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=i}get(){return cb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf={},Of={};function gh(s){const t=s.toString();return Nf[t]||(Nf[t]=new u1),Nf[t]}function c1(s,t){const i=s.toString();return Of[i]||(Of[i]=t()),Of[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const a=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<a.length;++o)a[o]&&rr(()=>{this.onMessage_(a[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="start",h1="close",d1="pLPCommand",p1="pRTLPCB",Jv="id",$v="pw",ey="ser",_1="cb",m1="seg",g1="ts",v1="d",y1="dframe",ty=1870,ny=30,E1=ty-ny,S1=25e3,b1=3e4;class Bs{constructor(t,i,a,o,c,h,p){this.connId=t,this.repoInfo=i,this.applicationId=a,this.appCheckToken=o,this.authToken=c,this.transportSessionId=h,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ua(t),this.stats_=gh(i),this.urlFn=_=>(this.appCheckToken&&(_[Gf]=this.appCheckToken),Zv(i,Xv,_))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new f1(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(b1)),ZT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vh((...c)=>{const[h,p,_,m,y]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===Tg)this.id=p,this.password=_;else if(h===h1)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,p]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,p)},()=>{this.onClosed_()},this.urlFn);const a={};a[Tg]="t",a[ey]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(a[_1]=this.scriptTagHolder.uniqueCallbackIdentifier),a[qv]=mh,this.transportSessionId&&(a[Vv]=this.transportSessionId),this.lastSessionId&&(a[Fv]=this.lastSessionId),this.applicationId&&(a[Qv]=this.applicationId),this.appCheckToken&&(a[Gf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Yv.test(location.hostname)&&(a[jv]=Gv);const o=this.urlFn(a);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bs.forceAllow_=!0}static forceDisallow(){Bs.forceDisallow_=!0}static isAvailable(){return Bs.forceAllow_?!0:!Bs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$T()&&!e1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=Xe(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=Sv(i),o=Pv(a,E1);for(let c=0;c<o.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[c]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const a={};a[y1]="t",a[Jv]=t,a[$v]=i,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=Xe(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class vh{constructor(t,i,a,o){this.onDisconnect=a,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KT(),window[d1+this.uniqueCallbackIdentifier]=t,window[p1+this.uniqueCallbackIdentifier]=i,this.myIFrame=vh.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(p){et("frame writing exception"),p.stack&&et(p.stack),et(p)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||et("No IE domain setting required")}catch{const a=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Jv]=this.myID,t[$v]=this.myPW,t[ey]=this.currentSerial;let i=this.urlFn(t),a="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ny+a.length<=ty;){const h=this.pendingSegs.shift();a=a+"&"+m1+o+"="+h.seg+"&"+g1+o+"="+h.ts+"&"+v1+o+"="+h.d,o++}return i=i+a,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,a){this.pendingSegs.push({seg:t,ts:i,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const a=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(a,Math.floor(S1)),c=()=>{clearTimeout(o),a()};this.addTag(t,c)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=t,a.onload=a.onreadystatechange=function(){const o=a.readyState;(!o||o==="loaded"||o==="complete")&&(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),i())},a.onerror=()=>{et("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=16384,C1=45e3;let vo=null;typeof MozWebSocket<"u"?vo=MozWebSocket:typeof WebSocket<"u"&&(vo=WebSocket);class Ft{constructor(t,i,a,o,c,h,p){this.connId=t,this.applicationId=a,this.appCheckToken=o,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ua(this.connId),this.stats_=gh(i),this.connURL=Ft.connectionURL_(i,h,p,o,a),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,a,o,c){const h={};return h[qv]=mh,typeof location<"u"&&location.hostname&&Yv.test(location.hostname)&&(h[jv]=Gv),i&&(h[Vv]=i),a&&(h[Fv]=a),o&&(h[Gf]=o),c&&(h[Qv]=c),Zv(t,Kv,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vi.set("previous_websocket_failure",!0);try{let a;Tb(),this.mySock=new vo(this.connURL,[],a)}catch(a){this.log_("Error instantiating WebSocket.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=a=>{this.handleIncomingFrame(a)},this.mySock.onerror=a=>{this.log_("WebSocket error.  Closing connection.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Ft.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(i);a&&a.length>1&&parseFloat(a[1])<4.4&&(t=!0)}return!t&&vo!==null&&!Ft.forceDisallow_}static previouslyFailed(){return Vi.isInMemoryStorage||Vi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const a=Sa(i);this.onMessage(a)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(U(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const a=this.extractFrameCount_(i);a!==null&&this.appendFrame_(a)}}send(t){this.resetKeepAlive();const i=Xe(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=Pv(i,T1);a.length>1&&this.sendString_(String(a.length));for(let o=0;o<a.length;o++)this.sendString_(a[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(C1))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ft.responsesRequiredToBeHealthy=2;Ft.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{static get ALL_TRANSPORTS(){return[Bs,Ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=Ft&&Ft.isAvailable();let a=i&&!Ft.previouslyFailed();if(t.webSocketOnly&&(i||ft("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[Ft];else{const o=this.transports_=[];for(const c of Ta.ALL_TRANSPORTS)c&&c.isAvailable()&&o.push(c);Ta.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ta.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=6e4,w1=5e3,R1=10*1024,N1=100*1024,Df="t",Cg="d",O1="s",Ag="r",D1="e",wg="o",Rg="a",Ng="n",Og="p",I1="h";class M1{constructor(t,i,a,o,c,h,p,_,m,y){this.id=t,this.repoInfo_=i,this.applicationId_=a,this.appCheckToken_=o,this.authToken_=c,this.onMessage_=h,this.onReady_=p,this.onDisconnect_=_,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ua("c:"+this.id+":"),this.transportManager_=new Ta(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,a)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=ma(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>N1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>R1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Df in t){const i=t[Df];i===Rg?this.upgradeIfSecondaryHealthy_():i===Ag?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===wg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=oa("t",t),a=oa("d",t);if(i==="c")this.onSecondaryControl_(a);else if(i==="d")this.pendingDataMessages.push(a);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Og,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ng,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=oa("t",t),a=oa("d",t);i==="c"?this.onControl_(a):i==="d"&&this.onDataMessage_(a)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=oa(Df,t);if(Cg in t){const a=t[Cg];if(i===I1){const o=Object.assign({},a);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===Ng){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===O1?this.onConnectionShutdown_(a):i===Ag?this.onReset_(a):i===D1?jf("Server Error: "+a):i===wg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jf("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,a=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),mh!==a&&ft("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,a),ma(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(A1))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ma(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(w1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Og,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{put(t,i,a,o){}merge(t,i,a,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,a){}onDisconnectMerge(t,i,a){}onDisconnectCancel(t,i){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(t){this.allowedEvents_=t,this.listeners_={},U(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const a=[...this.listeners_[t]];for(let o=0;o<a.length;o++)a[o].callback.apply(a[o].context,i)}}on(t,i,a){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:a});const o=this.getInitialEvent(t);o&&i.apply(a,o)}off(t,i,a){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let c=0;c<o.length;c++)if(o[c].callback===i&&(!a||a===o[c].context)){o.splice(c,1);return}}validateEventType_(t){U(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends sy{static getInstance(){return new yo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ch()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return U(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=32,Ig=768;class Ee{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let a=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[a]=this.pieces_[o],a++);this.pieces_.length=a,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function he(){return new Ee("")}function ne(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function pi(s){return s.pieces_.length-s.pieceNum_}function Ae(s){let t=s.pieceNum_;return t<s.pieces_.length&&t++,new Ee(s.pieces_,t)}function yh(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function x1(s){let t="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(s.pieces_[i])));return t||"/"}function Ca(s,t=0){return s.pieces_.slice(s.pieceNum_+t)}function ry(s){if(s.pieceNum_>=s.pieces_.length)return null;const t=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)t.push(s.pieces_[i]);return new Ee(t,0)}function Me(s,t){const i=[];for(let a=s.pieceNum_;a<s.pieces_.length;a++)i.push(s.pieces_[a]);if(t instanceof Ee)for(let a=t.pieceNum_;a<t.pieces_.length;a++)i.push(t.pieces_[a]);else{const a=t.split("/");for(let o=0;o<a.length;o++)a[o].length>0&&i.push(a[o])}return new Ee(i,0)}function ae(s){return s.pieceNum_>=s.pieces_.length}function Et(s,t){const i=ne(s),a=ne(t);if(i===null)return t;if(i===a)return Et(Ae(s),Ae(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+s+")")}function k1(s,t){const i=Ca(s,0),a=Ca(t,0);for(let o=0;o<i.length&&o<a.length;o++){const c=Zi(i[o],a[o]);if(c!==0)return c}return i.length===a.length?0:i.length<a.length?-1:1}function Eh(s,t){if(pi(s)!==pi(t))return!1;for(let i=s.pieceNum_,a=t.pieceNum_;i<=s.pieces_.length;i++,a++)if(s.pieces_[i]!==t.pieces_[a])return!1;return!0}function Vt(s,t){let i=s.pieceNum_,a=t.pieceNum_;if(pi(s)>pi(t))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==t.pieces_[a])return!1;++i,++a}return!0}class U1{constructor(t,i){this.errorPrefix_=i,this.parts_=Ca(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=Ho(this.parts_[a]);ay(this)}}function L1(s,t){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(t),s.byteLength_+=Ho(t),ay(s)}function z1(s){const t=s.parts_.pop();s.byteLength_-=Ho(t),s.parts_.length>0&&(s.byteLength_-=1)}function ay(s){if(s.byteLength_>Ig)throw new Error(s.errorPrefix_+"has a key path longer than "+Ig+" bytes ("+s.byteLength_+").");if(s.parts_.length>Dg)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dg+") or object contains a cycle "+qi(s))}function qi(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh extends sy{static getInstance(){return new Sh}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const a=!document[t];a!==this.visible_&&(this.visible_=a,this.trigger("visible",a))},!1)}getInitialEvent(t){return U(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=1e3,H1=60*5*1e3,Mg=30*1e3,P1=1.3,B1=3e4,q1="server_kill",xg=3;class Rn extends iy{constructor(t,i,a,o,c,h,p,_){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=a,this.onConnectStatus_=o,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=p,this.authOverride_=_,this.id=Rn.nextPersistentConnectionId_++,this.log_=Ua("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ua,this.maxReconnectDelay_=H1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sh.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&yo.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,a){const o=++this.requestNumber_,c={r:o,a:t,b:i};this.log_(Xe(c)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),a&&(this.requestCBHash_[o]=a)}get(t){this.initConnection_();const i=new Ma,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const p=h.d;h.s==="ok"?i.resolve(p):i.reject(p)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),i.promise}listen(t,i,a,o){this.initConnection_();const c=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const p={onComplete:o,hashFn:i,query:t,tag:a};this.listens.get(h).set(c,p),this.connected_&&this.sendListen_(p)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,a=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(a)})}sendListen_(t){const i=t.query,a=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+a+" for "+o);const c={p:a},h="q";t.tag&&(c.q=i._queryObject,c.t=t.tag),c.h=t.hashFn(),this.sendRequest(h,c,p=>{const _=p.d,m=p.s;Rn.warnOnListenWarnings_(_,i),(this.listens.get(a)&&this.listens.get(a).get(o))===t&&(this.log_("listen response",p),m!=="ok"&&this.removeListen_(a,o),t.onComplete&&t.onComplete(m,_))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&ln(t,"w")){const a=Ks(t,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',c=i._path.toString();ft(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||Db(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Mg)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=Ob(t)?"auth":"gauth",a={cred:t};this.authOverride_===null?a.noauth=!0:typeof this.authOverride_=="object"&&(a.authvar=this.authOverride_),this.sendRequest(i,a,o=>{const c=o.s,h=o.d||"error";this.authToken_===t&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,a=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,a)})}unlisten(t,i){const a=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+a+" "+o),U(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(a,o)&&this.connected_&&this.sendUnlisten_(a,o,t._queryObject,i)}sendUnlisten_(t,i,a,o){this.log_("Unlisten on "+t+" for "+i);const c={p:t},h="n";o&&(c.q=a,c.t=o),this.sendRequest(h,c)}onDisconnectPut(t,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,a):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:a})}onDisconnectMerge(t,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,a):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:a})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,a,o){const c={p:i,d:a};this.log_("onDisconnect "+t,c),this.sendRequest(t,c,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,a,o){this.putInternal("p",t,i,a,o)}merge(t,i,a,o){this.putInternal("m",t,i,a,o)}putInternal(t,i,a,o,c){this.initConnection_();const h={p:i,d:a};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,a=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,a,c=>{this.log_(i+" response",c),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(c.s,c.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,a=>{if(a.s!=="ok"){const c=a.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Xe(t));const i=t.r,a=this.requestCBHash_[i];a&&(delete this.requestCBHash_[i],a(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):jf("Unrecognized action received from server: "+Xe(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>B1&&(this.reconnectDelay_=ua),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*P1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Rn.nextConnectionId_++,c=this.lastSessionId;let h=!1,p=null;const _=function(){p?p.close():(h=!0,a())},m=function(E){U(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(E)};this.realtime_={close:_,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,S]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);h?et("getToken() completed but was canceled"):(et("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=S&&S.token,p=new M1(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,a,k=>{ft(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(q1)},c))}catch(E){this.log_("Failed to get token: "+E),h||(this.repoInfo_.nodeAdmin&&ft(E),_())}}}interrupt(t){et("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){et("Resuming connection for reason: "+t),delete this.interruptReasons_[t],zf(this.interruptReasons_)&&(this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let a;i?a=i.map(c=>_h(c)).join("$"):a="default";const o=this.removeListen_(t,a);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const a=new Ee(t).toString();let o;if(this.listens.has(a)){const c=this.listens.get(a);o=c.get(i),c.delete(i),c.size===0&&this.listens.delete(a)}else o=void 0;return o}onAuthRevoked_(t,i){et("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xg&&(this.reconnectDelay_=Mg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){et("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const i of t.values())this.sendListen_(i);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let i="js";t["sdk."+i+"."+Lv.replace(/\./g,"-")]=1,ch()?t["framework.cordova"]=1:Nv()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=yo.getInstance().currentlyOnline();return zf(this.interruptReasons_)&&t}}Rn.nextPersistentConnectionId_=0;Rn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new ie(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const a=new ie(Ws,t),o=new ie(Ws,i);return this.compare(a,o)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io;class ly extends Po{static get __EMPTY_NODE(){return io}static set __EMPTY_NODE(t){io=t}compare(t,i){return Zi(t.name,i.name)}isDefinedOn(t){throw tr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return ie.MIN}maxPost(){return new ie(Yi,io)}makePost(t,i){return U(typeof t=="string","KeyIndex indexValue must always be a string."),new ie(t,io)}toString(){return".key"}}const js=new ly;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,i,a,o,c=null){this.isReverse_=o,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?a(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Qe{constructor(t,i,a,o,c){this.key=t,this.value=i,this.color=a??Qe.RED,this.left=o??St.EMPTY_NODE,this.right=c??St.EMPTY_NODE}copy(t,i,a,o,c){return new Qe(t??this.key,i??this.value,a??this.color,o??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let o=this;const c=a(t,o.key);return c<0?o=o.copy(null,null,null,o.left.insert(t,i,a),null):c===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,a)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return St.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let a,o;if(a=this,i(t,a.key)<0)!a.left.isEmpty()&&!a.left.isRed_()&&!a.left.left.isRed_()&&(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(t,i),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),!a.right.isEmpty()&&!a.right.isRed_()&&!a.right.left.isRed_()&&(a=a.moveRedRight_()),i(t,a.key)===0){if(a.right.isEmpty())return St.EMPTY_NODE;o=a.right.min_(),a=a.copy(o.key,o.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(t,i))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class V1{copy(t,i,a,o,c){return this}insert(t,i,a){return new Qe(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class St{constructor(t,i=St.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new St(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(t){return new St(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(t){let i,a=this.root_;for(;!a.isEmpty();){if(i=this.comparator_(t,a.key),i===0)return a.value;i<0?a=a.left:i>0&&(a=a.right)}return null}getPredecessorKey(t){let i,a=this.root_,o=null;for(;!a.isEmpty();)if(i=this.comparator_(t,a.key),i===0){if(a.left.isEmpty())return o?o.key:null;for(a=a.left;!a.right.isEmpty();)a=a.right;return a.key}else i<0?a=a.left:i>0&&(o=a,a=a.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new so(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new so(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new so(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new so(this.root_,null,this.comparator_,!0,t)}}St.EMPTY_NODE=new V1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(s,t){return Zi(s.name,t.name)}function bh(s,t){return Zi(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yf;function G1(s){Yf=s}const oy=function(s){return typeof s=="number"?"number:"+Bv(s):"string:"+s},uy=function(s){if(s.isLeafNode()){const t=s.val();U(typeof t=="string"||typeof t=="number"||typeof t=="object"&&ln(t,".sv"),"Priority must be a string or number.")}else U(s===Yf||s.isEmpty(),"priority of unexpected type.");U(s===Yf||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kg;class Fe{static set __childrenNodeConstructor(t){kg=t}static get __childrenNodeConstructor(){return kg}constructor(t,i=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),uy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Fe(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ae(t)?this:ne(t)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const a=ne(t);return a===null?i:i.isEmpty()&&a!==".priority"?this:(U(a!==".priority"||pi(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(a,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+oy(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=Bv(this.value_):t+=this.value_,this.lazyHash_=Hv(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Fe.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Fe.__childrenNodeConstructor?-1:(U(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,a=typeof this.value_,o=Fe.VALUE_TYPE_ORDER.indexOf(i),c=Fe.VALUE_TYPE_ORDER.indexOf(a);return U(o>=0,"Unknown leaf type: "+i),U(c>=0,"Unknown leaf type: "+a),o===c?a==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:c-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cy,fy;function Y1(s){cy=s}function F1(s){fy=s}class Q1 extends Po{compare(t,i){const a=t.node.getPriority(),o=i.node.getPriority(),c=a.compareTo(o);return c===0?Zi(t.name,i.name):c}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(Yi,new Fe("[PRIORITY-POST]",fy))}makePost(t,i){const a=cy(t);return new ie(i,new Fe("[PRIORITY-POST]",a))}toString(){return".priority"}}const xe=new Q1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=Math.log(2);class X1{constructor(t){const i=c=>parseInt(Math.log(c)/K1,10),a=c=>parseInt(Array(c+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=a(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Eo=function(s,t,i,a){s.sort(t);const o=function(_,m){const y=m-_;let E,S;if(y===0)return null;if(y===1)return E=s[_],S=i?i(E):E,new Qe(S,E.node,Qe.BLACK,null,null);{const k=parseInt(y/2,10)+_,L=o(_,k),X=o(k+1,m);return E=s[k],S=i?i(E):E,new Qe(S,E.node,Qe.BLACK,L,X)}},c=function(_){let m=null,y=null,E=s.length;const S=function(L,X){const ee=E-L,Le=E;E-=L;const Oe=o(ee+1,Le),_e=s[ee],qe=i?i(_e):_e;k(new Qe(qe,_e.node,X,null,Oe))},k=function(L){m?(m.left=L,m=L):(y=L,m=L)};for(let L=0;L<_.count;++L){const X=_.nextBitIsOne(),ee=Math.pow(2,_.count-(L+1));X?S(ee,Qe.BLACK):(S(ee,Qe.BLACK),S(ee,Qe.RED))}return y},h=new X1(s.length),p=c(h);return new St(a||t,p)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let If;const Ps={};class Cn{static get Default(){return U(Ps&&xe,"ChildrenNode.ts has not been loaded"),If=If||new Cn({".priority":Ps},{".priority":xe}),If}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=Ks(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof St?i:null}hasIndex(t){return ln(this.indexSet_,t.toString())}addIndex(t,i){U(t!==js,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let o=!1;const c=i.getIterator(ie.Wrap);let h=c.getNext();for(;h;)o=o||t.isDefinedOn(h.node),a.push(h),h=c.getNext();let p;o?p=Eo(a,t.getCompare()):p=Ps;const _=t.toString(),m=Object.assign({},this.indexSet_);m[_]=t;const y=Object.assign({},this.indexes_);return y[_]=p,new Cn(y,m)}addToIndexes(t,i){const a=mo(this.indexes_,(o,c)=>{const h=Ks(this.indexSet_,c);if(U(h,"Missing index implementation for "+c),o===Ps)if(h.isDefinedOn(t.node)){const p=[],_=i.getIterator(ie.Wrap);let m=_.getNext();for(;m;)m.name!==t.name&&p.push(m),m=_.getNext();return p.push(t),Eo(p,h.getCompare())}else return Ps;else{const p=i.get(t.name);let _=o;return p&&(_=_.remove(new ie(t.name,p))),_.insert(t,t.node)}});return new Cn(a,this.indexSet_)}removeFromIndexes(t,i){const a=mo(this.indexes_,o=>{if(o===Ps)return o;{const c=i.get(t.name);return c?o.remove(new ie(t.name,c)):o}});return new Cn(a,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca;class K{static get EMPTY_NODE(){return ca||(ca=new K(new St(bh),null,Cn.Default))}constructor(t,i,a){this.children_=t,this.priorityNode_=i,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&uy(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ca}updatePriority(t){return this.children_.isEmpty()?this:new K(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?ca:i}}getChild(t){const i=ne(t);return i===null?this:this.getImmediateChild(i).getChild(Ae(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(U(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const a=new ie(t,i);let o,c;i.isEmpty()?(o=this.children_.remove(t),c=this.indexMap_.removeFromIndexes(a,this.children_)):(o=this.children_.insert(t,i),c=this.indexMap_.addToIndexes(a,this.children_));const h=o.isEmpty()?ca:this.priorityNode_;return new K(o,h,c)}}updateChild(t,i){const a=ne(t);if(a===null)return i;{U(ne(t)!==".priority"||pi(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(a).updateChild(Ae(t),i);return this.updateImmediateChild(a,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let a=0,o=0,c=!0;if(this.forEachChild(xe,(h,p)=>{i[h]=p.val(t),a++,c&&K.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):c=!1}),!t&&c&&o<2*a){const h=[];for(const p in i)h[p]=i[p];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+oy(this.getPriority().val())+":"),this.forEachChild(xe,(i,a)=>{const o=a.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":Hv(t)}return this.lazyHash_}getPredecessorChildName(t,i,a){const o=this.resolveIndex_(a);if(o){const c=o.getPredecessorKey(new ie(t,i));return c?c.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const a=i.minKey();return a&&a.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new ie(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const a=i.maxKey();return a&&a.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new ie(i,this.children_.get(i)):null}forEachChild(t,i){const a=this.resolveIndex_(t);return a?a.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const a=this.resolveIndex_(i);if(a)return a.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,ie.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)<0;)o.getNext(),c=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const a=this.resolveIndex_(i);if(a)return a.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,ie.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)>0;)o.getNext(),c=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===La?-1:0}withIndex(t){if(t===js||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new K(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===js||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const a=this.getIterator(xe),o=i.getIterator(xe);let c=a.getNext(),h=o.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=a.getNext(),h=o.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===js?null:this.indexMap_.get(t.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class W1 extends K{constructor(){super(new St(bh),K.EMPTY_NODE,Cn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return K.EMPTY_NODE}isEmpty(){return!1}}const La=new W1;Object.defineProperties(ie,{MIN:{value:new ie(Ws,K.EMPTY_NODE)},MAX:{value:new ie(Yi,La)}});ly.__EMPTY_NODE=K.EMPTY_NODE;Fe.__childrenNodeConstructor=K;G1(La);F1(La);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=!0;function Ke(s,t=null){if(s===null)return K.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(t=s[".priority"]),U(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new Fe(i,Ke(t))}if(!(s instanceof Array)&&Z1){const i=[];let a=!1;if(tt(s,(h,p)=>{if(h.substring(0,1)!=="."){const _=Ke(p);_.isEmpty()||(a=a||!_.getPriority().isEmpty(),i.push(new ie(h,_)))}}),i.length===0)return K.EMPTY_NODE;const c=Eo(i,j1,h=>h.name,bh);if(a){const h=Eo(i,xe.getCompare());return new K(c,Ke(t),new Cn({".priority":h},{".priority":xe}))}else return new K(c,Ke(t),Cn.Default)}else{let i=K.EMPTY_NODE;return tt(s,(a,o)=>{if(ln(s,a)&&a.substring(0,1)!=="."){const c=Ke(o);(c.isLeafNode()||!c.isEmpty())&&(i=i.updateImmediateChild(a,c))}}),i.updatePriority(Ke(t))}}Y1(Ke);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1 extends Po{constructor(t){super(),this.indexPath_=t,U(!ae(t)&&ne(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const a=this.extractChild(t.node),o=this.extractChild(i.node),c=a.compareTo(o);return c===0?Zi(t.name,i.name):c}makePost(t,i){const a=Ke(t),o=K.EMPTY_NODE.updateChild(this.indexPath_,a);return new ie(i,o)}maxPost(){const t=K.EMPTY_NODE.updateChild(this.indexPath_,La);return new ie(Yi,t)}toString(){return Ca(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1 extends Po{compare(t,i){const a=t.node.compareTo(i.node);return a===0?Zi(t.name,i.name):a}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(t,i){const a=Ke(t);return new ie(i,a)}toString(){return".value"}}const eC=new $1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(s){return{type:"value",snapshotNode:s}}function Zs(s,t){return{type:"child_added",snapshotNode:t,childName:s}}function Aa(s,t){return{type:"child_removed",snapshotNode:t,childName:s}}function wa(s,t,i){return{type:"child_changed",snapshotNode:t,childName:s,oldSnap:i}}function tC(s,t){return{type:"child_moved",snapshotNode:t,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.index_=t}updateChild(t,i,a,o,c,h){U(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const p=t.getImmediateChild(i);return p.getChild(o).equals(a.getChild(o))&&p.isEmpty()===a.isEmpty()||(h!=null&&(a.isEmpty()?t.hasChild(i)?h.trackChildChange(Aa(i,p)):U(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):p.isEmpty()?h.trackChildChange(Zs(i,a)):h.trackChildChange(wa(i,a,p))),t.isLeafNode()&&a.isEmpty())?t:t.updateImmediateChild(i,a).withIndex(this.index_)}updateFullNode(t,i,a){return a!=null&&(t.isLeafNode()||t.forEachChild(xe,(o,c)=>{i.hasChild(o)||a.trackChildChange(Aa(o,c))}),i.isLeafNode()||i.forEachChild(xe,(o,c)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(c)||a.trackChildChange(wa(o,c,h))}else a.trackChildChange(Zs(o,c))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?K.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t){this.indexedFilter_=new Th(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Ra.getStartPost_(t),this.endPost_=Ra.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,a=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&a}updateChild(t,i,a,o,c,h){return this.matches(new ie(i,a))||(a=K.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,a,o,c,h)}updateFullNode(t,i,a){i.isLeafNode()&&(i=K.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(K.EMPTY_NODE);const c=this;return i.forEachChild(xe,(h,p)=>{c.matches(new ie(h,p))||(o=o.updateImmediateChild(h,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,a)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const a=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?a<=0:a<0},this.withinEndPost=i=>{const a=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?a<=0:a<0},this.rangedFilter_=new Ra(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,a,o,c,h){return this.rangedFilter_.matches(new ie(i,a))||(a=K.EMPTY_NODE),t.getImmediateChild(i).equals(a)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,a,o,c,h):this.fullLimitUpdateChild_(t,i,a,c,h)}updateFullNode(t,i,a){let o;if(i.isLeafNode()||i.isEmpty())o=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=K.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const p=c.getNext();if(this.withinDirectionalStart(p))if(this.withinDirectionalEnd(p))o=o.updateImmediateChild(p.name,p.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(K.EMPTY_NODE);let c;this.reverse_?c=o.getReverseIterator(this.index_):c=o.getIterator(this.index_);let h=0;for(;c.hasNext();){const p=c.getNext();h<this.limit_&&this.withinDirectionalStart(p)&&this.withinDirectionalEnd(p)?h++:o=o.updateImmediateChild(p.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,a)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,a,o,c){let h;if(this.reverse_){const E=this.index_.getCompare();h=(S,k)=>E(k,S)}else h=this.index_.getCompare();const p=t;U(p.numChildren()===this.limit_,"");const _=new ie(i,a),m=this.reverse_?p.getFirstChild(this.index_):p.getLastChild(this.index_),y=this.rangedFilter_.matches(_);if(p.hasChild(i)){const E=p.getImmediateChild(i);let S=o.getChildAfterChild(this.index_,m,this.reverse_);for(;S!=null&&(S.name===i||p.hasChild(S.name));)S=o.getChildAfterChild(this.index_,S,this.reverse_);const k=S==null?1:h(S,_);if(y&&!a.isEmpty()&&k>=0)return c?.trackChildChange(wa(i,a,E)),p.updateImmediateChild(i,a);{c?.trackChildChange(Aa(i,E));const X=p.updateImmediateChild(i,K.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(c?.trackChildChange(Zs(S.name,S.node)),X.updateImmediateChild(S.name,S.node)):X}}else return a.isEmpty()?t:y&&h(m,_)>=0?(c!=null&&(c.trackChildChange(Aa(m.name,m.node)),c.trackChildChange(Zs(i,a))),p.updateImmediateChild(i,a).updateImmediateChild(m.name,K.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ws}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const t=new Ch;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function iC(s){return s.loadsAllData()?new Th(s.getIndex()):s.hasLimit()?new nC(s):new Ra(s)}function Ug(s){const t={};if(s.isDefault())return t;let i;if(s.index_===xe?i="$priority":s.index_===eC?i="$value":s.index_===js?i="$key":(U(s.index_ instanceof J1,"Unrecognized index type!"),i=s.index_.toString()),t.orderBy=Xe(i),s.startSet_){const a=s.startAfterSet_?"startAfter":"startAt";t[a]=Xe(s.indexStartValue_),s.startNameSet_&&(t[a]+=","+Xe(s.indexStartName_))}if(s.endSet_){const a=s.endBeforeSet_?"endBefore":"endAt";t[a]=Xe(s.indexEndValue_),s.endNameSet_&&(t[a]+=","+Xe(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?t.limitToFirst=s.limit_:t.limitToLast=s.limit_),t}function Lg(s){const t={};if(s.startSet_&&(t.sp=s.indexStartValue_,s.startNameSet_&&(t.sn=s.indexStartName_),t.sin=!s.startAfterSet_),s.endSet_&&(t.ep=s.indexEndValue_,s.endNameSet_&&(t.en=s.indexEndName_),t.ein=!s.endBeforeSet_),s.limitSet_){t.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),t.vf=i}return s.index_!==xe&&(t.i=s.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends iy{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(U(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,a,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=a,this.appCheckTokenProvider_=o,this.log_=Ua("p:rest:"),this.listens_={}}listen(t,i,a,o){const c=t._path.toString();this.log_("Listen called for "+c+" "+t._queryIdentifier);const h=So.getListenId_(t,a),p={};this.listens_[h]=p;const _=Ug(t._queryParams);this.restRequest_(c+".json",_,(m,y)=>{let E=y;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(c,E,!1,a),Ks(this.listens_,h)===p){let S;m?m===401?S="permission_denied":S="rest_error:"+m:S="ok",o(S,null)}})}unlisten(t,i){const a=So.getListenId_(t,i);delete this.listens_[a]}get(t){const i=Ug(t._queryParams),a=t._path.toString(),o=new Ma;return this.restRequest_(a+".json",i,(c,h)=>{let p=h;c===404&&(p=null,c=null),c===null?(this.onDataUpdate_(a,p,!1,null),o.resolve(p)):o.reject(new Error(p))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},a){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,c])=>{o&&o.accessToken&&(i.auth=o.accessToken),c&&c.token&&(i.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+ir(i);this.log_("Sending REST request for "+h);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(a&&p.readyState===4){this.log_("REST Response for "+h+" received. status:",p.status,"response:",p.responseText);let _=null;if(p.status>=200&&p.status<300){try{_=Sa(p.responseText)}catch{ft("Failed to parse JSON response for "+h+": "+p.responseText)}a(null,_)}else p.status!==401&&p.status!==404&&ft("Got unsuccessful REST response for "+h+" Status: "+p.status),a(p.status);a=null}},p.open("GET",h,!0),p.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(){return{value:null,children:new Map}}function dy(s,t,i){if(ae(t))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(t,i);else{const a=ne(t);s.children.has(a)||s.children.set(a,bo());const o=s.children.get(a);t=Ae(t),dy(o,t,i)}}function Ff(s,t,i){s.value!==null?i(t,s.value):rC(s,(a,o)=>{const c=new Ee(t.toString()+"/"+a);Ff(o,c,i)})}function rC(s,t){s.children.forEach((i,a)=>{t(a,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i=Object.assign({},t);return this.last_&&tt(this.last_,(a,o)=>{i[a]=i[a]-o}),this.last_=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=10*1e3,lC=30*1e3,oC=5*60*1e3;class uC{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new aC(t);const a=zg+(lC-zg)*Math.random();ma(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const t=this.statsListener_.get(),i={};let a=!1;tt(t,(o,c)=>{c>0&&ln(this.statsToReport_,o)&&(i[o]=c,a=!0)}),a&&this.server_.reportStats(i),ma(this.reportStats_.bind(this),Math.floor(Math.random()*2*oC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qt;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qt||(Qt={}));function Ah(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rh(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,i,a){this.path=t,this.affectedTree=i,this.revert=a,this.type=Qt.ACK_USER_WRITE,this.source=Ah()}operationForChild(t){if(ae(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Ee(t));return new To(he(),i,this.revert)}}else return U(ne(this.path)===t,"operationForChild called for unrelated child."),new To(Ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,i){this.source=t,this.path=i,this.type=Qt.LISTEN_COMPLETE}operationForChild(t){return ae(this.path)?new Na(this.source,he()):new Na(this.source,Ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,i,a){this.source=t,this.path=i,this.snap=a,this.type=Qt.OVERWRITE}operationForChild(t){return ae(this.path)?new Fi(this.source,he(),this.snap.getImmediateChild(t)):new Fi(this.source,Ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,i,a){this.source=t,this.path=i,this.children=a,this.type=Qt.MERGE}operationForChild(t){if(ae(this.path)){const i=this.children.subtree(new Ee(t));return i.isEmpty()?null:i.value?new Fi(this.source,he(),i.value):new Js(this.source,he(),i)}else return U(ne(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Js(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,i,a){this.node_=t,this.fullyInitialized_=i,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ae(t))return this.isFullyInitialized()&&!this.filtered_;const i=ne(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function fC(s,t,i,a){const o=[],c=[];return t.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(tC(h.childName,h.snapshotNode))}),fa(s,o,"child_removed",t,a,i),fa(s,o,"child_added",t,a,i),fa(s,o,"child_moved",c,a,i),fa(s,o,"child_changed",t,a,i),fa(s,o,"value",t,a,i),o}function fa(s,t,i,a,o,c){const h=a.filter(p=>p.type===i);h.sort((p,_)=>dC(s,p,_)),h.forEach(p=>{const _=hC(s,p,c);o.forEach(m=>{m.respondsTo(p.type)&&t.push(m.createEvent(_,s.query_))})})}function hC(s,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,s.index_)),t}function dC(s,t,i){if(t.childName==null||i.childName==null)throw tr("Should only compare child_ events.");const a=new ie(t.childName,t.snapshotNode),o=new ie(i.childName,i.snapshotNode);return s.index_.compare(a,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(s,t){return{eventCache:s,serverCache:t}}function ga(s,t,i,a){return Bo(new Qi(t,i,a),s.serverCache)}function py(s,t,i,a){return Bo(s.eventCache,new Qi(t,i,a))}function Qf(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function Ki(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mf;const pC=()=>(Mf||(Mf=new St(JT)),Mf);class Ce{static fromObject(t){let i=new Ce(null);return tt(t,(a,o)=>{i=i.set(new Ee(a),o)}),i}constructor(t,i=pC()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:he(),value:this.value};if(ae(t))return null;{const a=ne(t),o=this.children.get(a);if(o!==null){const c=o.findRootMostMatchingPathAndValue(Ae(t),i);return c!=null?{path:Me(new Ee(a),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ae(t))return this;{const i=ne(t),a=this.children.get(i);return a!==null?a.subtree(Ae(t)):new Ce(null)}}set(t,i){if(ae(t))return new Ce(i,this.children);{const a=ne(t),c=(this.children.get(a)||new Ce(null)).set(Ae(t),i),h=this.children.insert(a,c);return new Ce(this.value,h)}}remove(t){if(ae(t))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const i=ne(t),a=this.children.get(i);if(a){const o=a.remove(Ae(t));let c;return o.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,o),this.value===null&&c.isEmpty()?new Ce(null):new Ce(this.value,c)}else return this}}get(t){if(ae(t))return this.value;{const i=ne(t),a=this.children.get(i);return a?a.get(Ae(t)):null}}setTree(t,i){if(ae(t))return i;{const a=ne(t),c=(this.children.get(a)||new Ce(null)).setTree(Ae(t),i);let h;return c.isEmpty()?h=this.children.remove(a):h=this.children.insert(a,c),new Ce(this.value,h)}}fold(t){return this.fold_(he(),t)}fold_(t,i){const a={};return this.children.inorderTraversal((o,c)=>{a[o]=c.fold_(Me(t,o),i)}),i(t,this.value,a)}findOnPath(t,i){return this.findOnPath_(t,he(),i)}findOnPath_(t,i,a){const o=this.value?a(i,this.value):!1;if(o)return o;if(ae(t))return null;{const c=ne(t),h=this.children.get(c);return h?h.findOnPath_(Ae(t),Me(i,c),a):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,he(),i)}foreachOnPath_(t,i,a){if(ae(t))return this;{this.value&&a(i,this.value);const o=ne(t),c=this.children.get(o);return c?c.foreachOnPath_(Ae(t),Me(i,o),a):new Ce(null)}}foreach(t){this.foreach_(he(),t)}foreach_(t,i){this.children.inorderTraversal((a,o)=>{o.foreach_(Me(t,a),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,a)=>{a.value&&t(i,a.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.writeTree_=t}static empty(){return new Xt(new Ce(null))}}function va(s,t,i){if(ae(t))return new Xt(new Ce(i));{const a=s.writeTree_.findRootMostValueAndPath(t);if(a!=null){const o=a.path;let c=a.value;const h=Et(o,t);return c=c.updateChild(h,i),new Xt(s.writeTree_.set(o,c))}else{const o=new Ce(i),c=s.writeTree_.setTree(t,o);return new Xt(c)}}}function Kf(s,t,i){let a=s;return tt(i,(o,c)=>{a=va(a,Me(t,o),c)}),a}function Hg(s,t){if(ae(t))return Xt.empty();{const i=s.writeTree_.setTree(t,new Ce(null));return new Xt(i)}}function Xf(s,t){return Ji(s,t)!=null}function Ji(s,t){const i=s.writeTree_.findRootMostValueAndPath(t);return i!=null?s.writeTree_.get(i.path).getChild(Et(i.path,t)):null}function Pg(s){const t=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(xe,(a,o)=>{t.push(new ie(a,o))}):s.writeTree_.children.inorderTraversal((a,o)=>{o.value!=null&&t.push(new ie(a,o.value))}),t}function di(s,t){if(ae(t))return s;{const i=Ji(s,t);return i!=null?new Xt(new Ce(i)):new Xt(s.writeTree_.subtree(t))}}function Wf(s){return s.writeTree_.isEmpty()}function $s(s,t){return _y(he(),s.writeTree_,t)}function _y(s,t,i){if(t.value!=null)return i.updateChild(s,t.value);{let a=null;return t.children.inorderTraversal((o,c)=>{o===".priority"?(U(c.value!==null,"Priority writes must always be leaf nodes"),a=c.value):i=_y(Me(s,o),c,i)}),!i.getChild(s).isEmpty()&&a!==null&&(i=i.updateChild(Me(s,".priority"),a)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(s,t){return yy(t,s)}function _C(s,t,i,a,o){U(a>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:t,snap:i,writeId:a,visible:o}),o&&(s.visibleWrites=va(s.visibleWrites,t,i)),s.lastWriteId=a}function mC(s,t,i,a){U(a>s.lastWriteId,"Stacking an older merge on top of newer ones"),s.allWrites.push({path:t,children:i,writeId:a,visible:!0}),s.visibleWrites=Kf(s.visibleWrites,t,i),s.lastWriteId=a}function gC(s,t){for(let i=0;i<s.allWrites.length;i++){const a=s.allWrites[i];if(a.writeId===t)return a}return null}function vC(s,t){const i=s.allWrites.findIndex(p=>p.writeId===t);U(i>=0,"removeWrite called with nonexistent writeId.");const a=s.allWrites[i];s.allWrites.splice(i,1);let o=a.visible,c=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const p=s.allWrites[h];p.visible&&(h>=i&&yC(p,a.path)?o=!1:Vt(a.path,p.path)&&(c=!0)),h--}if(o){if(c)return EC(s),!0;if(a.snap)s.visibleWrites=Hg(s.visibleWrites,a.path);else{const p=a.children;tt(p,_=>{s.visibleWrites=Hg(s.visibleWrites,Me(a.path,_))})}return!0}else return!1}function yC(s,t){if(s.snap)return Vt(s.path,t);for(const i in s.children)if(s.children.hasOwnProperty(i)&&Vt(Me(s.path,i),t))return!0;return!1}function EC(s){s.visibleWrites=my(s.allWrites,SC,he()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function SC(s){return s.visible}function my(s,t,i){let a=Xt.empty();for(let o=0;o<s.length;++o){const c=s[o];if(t(c)){const h=c.path;let p;if(c.snap)Vt(i,h)?(p=Et(i,h),a=va(a,p,c.snap)):Vt(h,i)&&(p=Et(h,i),a=va(a,he(),c.snap.getChild(p)));else if(c.children){if(Vt(i,h))p=Et(i,h),a=Kf(a,p,c.children);else if(Vt(h,i))if(p=Et(h,i),ae(p))a=Kf(a,he(),c.children);else{const _=Ks(c.children,ne(p));if(_){const m=_.getChild(Ae(p));a=va(a,he(),m)}}}else throw tr("WriteRecord should have .snap or .children")}}return a}function gy(s,t,i,a,o){if(!a&&!o){const c=Ji(s.visibleWrites,t);if(c!=null)return c;{const h=di(s.visibleWrites,t);if(Wf(h))return i;if(i==null&&!Xf(h,he()))return null;{const p=i||K.EMPTY_NODE;return $s(h,p)}}}else{const c=di(s.visibleWrites,t);if(!o&&Wf(c))return i;if(!o&&i==null&&!Xf(c,he()))return null;{const h=function(m){return(m.visible||o)&&(!a||!~a.indexOf(m.writeId))&&(Vt(m.path,t)||Vt(t,m.path))},p=my(s.allWrites,h,t),_=i||K.EMPTY_NODE;return $s(p,_)}}}function bC(s,t,i){let a=K.EMPTY_NODE;const o=Ji(s.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(xe,(c,h)=>{a=a.updateImmediateChild(c,h)}),a;if(i){const c=di(s.visibleWrites,t);return i.forEachChild(xe,(h,p)=>{const _=$s(di(c,new Ee(h)),p);a=a.updateImmediateChild(h,_)}),Pg(c).forEach(h=>{a=a.updateImmediateChild(h.name,h.node)}),a}else{const c=di(s.visibleWrites,t);return Pg(c).forEach(h=>{a=a.updateImmediateChild(h.name,h.node)}),a}}function TC(s,t,i,a,o){U(a||o,"Either existingEventSnap or existingServerSnap must exist");const c=Me(t,i);if(Xf(s.visibleWrites,c))return null;{const h=di(s.visibleWrites,c);return Wf(h)?o.getChild(i):$s(h,o.getChild(i))}}function CC(s,t,i,a){const o=Me(t,i),c=Ji(s.visibleWrites,o);if(c!=null)return c;if(a.isCompleteForChild(i)){const h=di(s.visibleWrites,o);return $s(h,a.getNode().getImmediateChild(i))}else return null}function AC(s,t){return Ji(s.visibleWrites,t)}function wC(s,t,i,a,o,c,h){let p;const _=di(s.visibleWrites,t),m=Ji(_,he());if(m!=null)p=m;else if(i!=null)p=$s(_,i);else return[];if(p=p.withIndex(h),!p.isEmpty()&&!p.isLeafNode()){const y=[],E=h.getCompare(),S=c?p.getReverseIteratorFrom(a,h):p.getIteratorFrom(a,h);let k=S.getNext();for(;k&&y.length<o;)E(k,a)!==0&&y.push(k),k=S.getNext();return y}else return[]}function RC(){return{visibleWrites:Xt.empty(),allWrites:[],lastWriteId:-1}}function Co(s,t,i,a){return gy(s.writeTree,s.treePath,t,i,a)}function Oh(s,t){return bC(s.writeTree,s.treePath,t)}function Bg(s,t,i,a){return TC(s.writeTree,s.treePath,t,i,a)}function Ao(s,t){return AC(s.writeTree,Me(s.treePath,t))}function NC(s,t,i,a,o,c){return wC(s.writeTree,s.treePath,t,i,a,o,c)}function Dh(s,t,i){return CC(s.writeTree,s.treePath,t,i)}function vy(s,t){return yy(Me(s.treePath,t),s.writeTree)}function yy(s,t){return{treePath:s,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,a=t.childName;U(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),U(a!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(a);if(o){const c=o.type;if(i==="child_added"&&c==="child_removed")this.changeMap.set(a,wa(a,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&c==="child_added")this.changeMap.delete(a);else if(i==="child_removed"&&c==="child_changed")this.changeMap.set(a,Aa(a,o.oldSnap));else if(i==="child_changed"&&c==="child_added")this.changeMap.set(a,Zs(a,t.snapshotNode));else if(i==="child_changed"&&c==="child_changed")this.changeMap.set(a,wa(a,t.snapshotNode,o.oldSnap));else throw tr("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(a,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{getCompleteChild(t){return null}getChildAfterChild(t,i,a){return null}}const Ey=new DC;class Ih{constructor(t,i,a=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=a}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const a=this.optCompleteServerCache_!=null?new Qi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dh(this.writes_,t,a)}}getChildAfterChild(t,i,a){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ki(this.viewCache_),c=NC(this.writes_,o,i,1,a,t);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(s){return{filter:s}}function MC(s,t){U(t.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),U(t.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function xC(s,t,i,a,o){const c=new OC;let h,p;if(i.type===Qt.OVERWRITE){const m=i;m.source.fromUser?h=Zf(s,t,m.path,m.snap,a,o,c):(U(m.source.fromServer,"Unknown source."),p=m.source.tagged||t.serverCache.isFiltered()&&!ae(m.path),h=wo(s,t,m.path,m.snap,a,o,p,c))}else if(i.type===Qt.MERGE){const m=i;m.source.fromUser?h=UC(s,t,m.path,m.children,a,o,c):(U(m.source.fromServer,"Unknown source."),p=m.source.tagged||t.serverCache.isFiltered(),h=Jf(s,t,m.path,m.children,a,o,p,c))}else if(i.type===Qt.ACK_USER_WRITE){const m=i;m.revert?h=HC(s,t,m.path,a,o,c):h=LC(s,t,m.path,m.affectedTree,a,o,c)}else if(i.type===Qt.LISTEN_COMPLETE)h=zC(s,t,i.path,a,c);else throw tr("Unknown operation type: "+i.type);const _=c.getChanges();return kC(t,h,_),{viewCache:h,changes:_}}function kC(s,t,i){const a=t.eventCache;if(a.isFullyInitialized()){const o=a.getNode().isLeafNode()||a.getNode().isEmpty(),c=Qf(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!a.getNode().equals(c)||!a.getNode().getPriority().equals(c.getPriority()))&&i.push(hy(Qf(t)))}}function Sy(s,t,i,a,o,c){const h=t.eventCache;if(Ao(a,i)!=null)return t;{let p,_;if(ae(i))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const m=Ki(t),y=m instanceof K?m:K.EMPTY_NODE,E=Oh(a,y);p=s.filter.updateFullNode(t.eventCache.getNode(),E,c)}else{const m=Co(a,Ki(t));p=s.filter.updateFullNode(t.eventCache.getNode(),m,c)}else{const m=ne(i);if(m===".priority"){U(pi(i)===1,"Can't have a priority with additional path components");const y=h.getNode();_=t.serverCache.getNode();const E=Bg(a,i,y,_);E!=null?p=s.filter.updatePriority(y,E):p=h.getNode()}else{const y=Ae(i);let E;if(h.isCompleteForChild(m)){_=t.serverCache.getNode();const S=Bg(a,i,h.getNode(),_);S!=null?E=h.getNode().getImmediateChild(m).updateChild(y,S):E=h.getNode().getImmediateChild(m)}else E=Dh(a,m,t.serverCache);E!=null?p=s.filter.updateChild(h.getNode(),m,E,y,o,c):p=h.getNode()}}return ga(t,p,h.isFullyInitialized()||ae(i),s.filter.filtersNodes())}}function wo(s,t,i,a,o,c,h,p){const _=t.serverCache;let m;const y=h?s.filter:s.filter.getIndexedFilter();if(ae(i))m=y.updateFullNode(_.getNode(),a,null);else if(y.filtersNodes()&&!_.isFiltered()){const k=_.getNode().updateChild(i,a);m=y.updateFullNode(_.getNode(),k,null)}else{const k=ne(i);if(!_.isCompleteForPath(i)&&pi(i)>1)return t;const L=Ae(i),ee=_.getNode().getImmediateChild(k).updateChild(L,a);k===".priority"?m=y.updatePriority(_.getNode(),ee):m=y.updateChild(_.getNode(),k,ee,L,Ey,null)}const E=py(t,m,_.isFullyInitialized()||ae(i),y.filtersNodes()),S=new Ih(o,E,c);return Sy(s,E,i,o,S,p)}function Zf(s,t,i,a,o,c,h){const p=t.eventCache;let _,m;const y=new Ih(o,t,c);if(ae(i))m=s.filter.updateFullNode(t.eventCache.getNode(),a,h),_=ga(t,m,!0,s.filter.filtersNodes());else{const E=ne(i);if(E===".priority")m=s.filter.updatePriority(t.eventCache.getNode(),a),_=ga(t,m,p.isFullyInitialized(),p.isFiltered());else{const S=Ae(i),k=p.getNode().getImmediateChild(E);let L;if(ae(S))L=a;else{const X=y.getCompleteChild(E);X!=null?yh(S)===".priority"&&X.getChild(ry(S)).isEmpty()?L=X:L=X.updateChild(S,a):L=K.EMPTY_NODE}if(k.equals(L))_=t;else{const X=s.filter.updateChild(p.getNode(),E,L,S,y,h);_=ga(t,X,p.isFullyInitialized(),s.filter.filtersNodes())}}}return _}function qg(s,t){return s.eventCache.isCompleteForChild(t)}function UC(s,t,i,a,o,c,h){let p=t;return a.foreach((_,m)=>{const y=Me(i,_);qg(t,ne(y))&&(p=Zf(s,p,y,m,o,c,h))}),a.foreach((_,m)=>{const y=Me(i,_);qg(t,ne(y))||(p=Zf(s,p,y,m,o,c,h))}),p}function Vg(s,t,i){return i.foreach((a,o)=>{t=t.updateChild(a,o)}),t}function Jf(s,t,i,a,o,c,h,p){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let _=t,m;ae(i)?m=a:m=new Ce(null).setTree(i,a);const y=t.serverCache.getNode();return m.children.inorderTraversal((E,S)=>{if(y.hasChild(E)){const k=t.serverCache.getNode().getImmediateChild(E),L=Vg(s,k,S);_=wo(s,_,new Ee(E),L,o,c,h,p)}}),m.children.inorderTraversal((E,S)=>{const k=!t.serverCache.isCompleteForChild(E)&&S.value===null;if(!y.hasChild(E)&&!k){const L=t.serverCache.getNode().getImmediateChild(E),X=Vg(s,L,S);_=wo(s,_,new Ee(E),X,o,c,h,p)}}),_}function LC(s,t,i,a,o,c,h){if(Ao(o,i)!=null)return t;const p=t.serverCache.isFiltered(),_=t.serverCache;if(a.value!=null){if(ae(i)&&_.isFullyInitialized()||_.isCompleteForPath(i))return wo(s,t,i,_.getNode().getChild(i),o,c,p,h);if(ae(i)){let m=new Ce(null);return _.getNode().forEachChild(js,(y,E)=>{m=m.set(new Ee(y),E)}),Jf(s,t,i,m,o,c,p,h)}else return t}else{let m=new Ce(null);return a.foreach((y,E)=>{const S=Me(i,y);_.isCompleteForPath(S)&&(m=m.set(y,_.getNode().getChild(S)))}),Jf(s,t,i,m,o,c,p,h)}}function zC(s,t,i,a,o){const c=t.serverCache,h=py(t,c.getNode(),c.isFullyInitialized()||ae(i),c.isFiltered());return Sy(s,h,i,a,Ey,o)}function HC(s,t,i,a,o,c){let h;if(Ao(a,i)!=null)return t;{const p=new Ih(a,t,o),_=t.eventCache.getNode();let m;if(ae(i)||ne(i)===".priority"){let y;if(t.serverCache.isFullyInitialized())y=Co(a,Ki(t));else{const E=t.serverCache.getNode();U(E instanceof K,"serverChildren would be complete if leaf node"),y=Oh(a,E)}y=y,m=s.filter.updateFullNode(_,y,c)}else{const y=ne(i);let E=Dh(a,y,t.serverCache);E==null&&t.serverCache.isCompleteForChild(y)&&(E=_.getImmediateChild(y)),E!=null?m=s.filter.updateChild(_,y,E,Ae(i),p,c):t.eventCache.getNode().hasChild(y)?m=s.filter.updateChild(_,y,K.EMPTY_NODE,Ae(i),p,c):m=_,m.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=Co(a,Ki(t)),h.isLeafNode()&&(m=s.filter.updateFullNode(m,h,c)))}return h=t.serverCache.isFullyInitialized()||Ao(a,he())!=null,ga(t,m,h,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const a=this.query_._queryParams,o=new Th(a.getIndex()),c=iC(a);this.processor_=IC(c);const h=i.serverCache,p=i.eventCache,_=o.updateFullNode(K.EMPTY_NODE,h.getNode(),null),m=c.updateFullNode(K.EMPTY_NODE,p.getNode(),null),y=new Qi(_,h.isFullyInitialized(),o.filtersNodes()),E=new Qi(m,p.isFullyInitialized(),c.filtersNodes());this.viewCache_=Bo(E,y),this.eventGenerator_=new cC(this.query_)}get query(){return this.query_}}function BC(s){return s.viewCache_.serverCache.getNode()}function qC(s,t){const i=Ki(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!ae(t)&&!i.getImmediateChild(ne(t)).isEmpty())?i.getChild(t):null}function jg(s){return s.eventRegistrations_.length===0}function VC(s,t){s.eventRegistrations_.push(t)}function Gg(s,t,i){const a=[];if(i){U(t==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(i,o);h&&a.push(h)})}if(t){let o=[];for(let c=0;c<s.eventRegistrations_.length;++c){const h=s.eventRegistrations_[c];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(c+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return a}function Yg(s,t,i,a){t.type===Qt.MERGE&&t.source.queryId!==null&&(U(Ki(s.viewCache_),"We should always have a full cache before handling merges"),U(Qf(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,c=xC(s.processor_,o,t,i,a);return MC(s.processor_,c.viewCache),U(c.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=c.viewCache,by(s,c.changes,c.viewCache.eventCache.getNode(),null)}function jC(s,t){const i=s.viewCache_.eventCache,a=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(xe,(c,h)=>{a.push(Zs(c,h))}),i.isFullyInitialized()&&a.push(hy(i.getNode())),by(s,a,i.getNode(),t)}function by(s,t,i,a){const o=a?[a]:s.eventRegistrations_;return fC(s.eventGenerator_,t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro;class GC{constructor(){this.views=new Map}}function YC(s){U(!Ro,"__referenceConstructor has already been defined"),Ro=s}function FC(){return U(Ro,"Reference.ts has not been loaded"),Ro}function QC(s){return s.views.size===0}function Mh(s,t,i,a){const o=t.source.queryId;if(o!==null){const c=s.views.get(o);return U(c!=null,"SyncTree gave us an op for an invalid query."),Yg(c,t,i,a)}else{let c=[];for(const h of s.views.values())c=c.concat(Yg(h,t,i,a));return c}}function KC(s,t,i,a,o){const c=t._queryIdentifier,h=s.views.get(c);if(!h){let p=Co(i,o?a:null),_=!1;p?_=!0:a instanceof K?(p=Oh(i,a),_=!1):(p=K.EMPTY_NODE,_=!1);const m=Bo(new Qi(p,_,!1),new Qi(a,o,!1));return new PC(t,m)}return h}function XC(s,t,i,a,o,c){const h=KC(s,t,a,o,c);return s.views.has(t._queryIdentifier)||s.views.set(t._queryIdentifier,h),VC(h,i),jC(h,i)}function WC(s,t,i,a){const o=t._queryIdentifier,c=[];let h=[];const p=_i(s);if(o==="default")for(const[_,m]of s.views.entries())h=h.concat(Gg(m,i,a)),jg(m)&&(s.views.delete(_),m.query._queryParams.loadsAllData()||c.push(m.query));else{const _=s.views.get(o);_&&(h=h.concat(Gg(_,i,a)),jg(_)&&(s.views.delete(o),_.query._queryParams.loadsAllData()||c.push(_.query)))}return p&&!_i(s)&&c.push(new(FC())(t._repo,t._path)),{removed:c,events:h}}function Ty(s){const t=[];for(const i of s.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function Gs(s,t){let i=null;for(const a of s.views.values())i=i||qC(a,t);return i}function Cy(s,t){if(t._queryParams.loadsAllData())return qo(s);{const a=t._queryIdentifier;return s.views.get(a)}}function Ay(s,t){return Cy(s,t)!=null}function _i(s){return qo(s)!=null}function qo(s){for(const t of s.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No;function ZC(s){U(!No,"__referenceConstructor has already been defined"),No=s}function JC(){return U(No,"Reference.ts has not been loaded"),No}let $C=1;class Fg{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=RC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wy(s,t,i,a,o){return _C(s.pendingWriteTree_,t,i,a,o),o?ar(s,new Fi(Ah(),t,i)):[]}function eA(s,t,i,a){mC(s.pendingWriteTree_,t,i,a);const o=Ce.fromObject(i);return ar(s,new Js(Ah(),t,o))}function ui(s,t,i=!1){const a=gC(s.pendingWriteTree_,t);if(vC(s.pendingWriteTree_,t)){let c=new Ce(null);return a.snap!=null?c=c.set(he(),!0):tt(a.children,h=>{c=c.set(new Ee(h),!0)}),ar(s,new To(a.path,c,i))}else return[]}function Vo(s,t,i){return ar(s,new Fi(wh(),t,i))}function tA(s,t,i){const a=Ce.fromObject(i);return ar(s,new Js(wh(),t,a))}function nA(s,t){return ar(s,new Na(wh(),t))}function iA(s,t,i){const a=kh(s,i);if(a){const o=Uh(a),c=o.path,h=o.queryId,p=Et(c,t),_=new Na(Rh(h),p);return Lh(s,c,_)}else return[]}function $f(s,t,i,a,o=!1){const c=t._path,h=s.syncPointTree_.get(c);let p=[];if(h&&(t._queryIdentifier==="default"||Ay(h,t))){const _=WC(h,t,i,a);QC(h)&&(s.syncPointTree_=s.syncPointTree_.remove(c));const m=_.removed;if(p=_.events,!o){const y=m.findIndex(S=>S._queryParams.loadsAllData())!==-1,E=s.syncPointTree_.findOnPath(c,(S,k)=>_i(k));if(y&&!E){const S=s.syncPointTree_.subtree(c);if(!S.isEmpty()){const k=aA(S);for(let L=0;L<k.length;++L){const X=k[L],ee=X.query,Le=Oy(s,X);s.listenProvider_.startListening(ya(ee),Oo(s,ee),Le.hashFn,Le.onComplete)}}}!E&&m.length>0&&!a&&(y?s.listenProvider_.stopListening(ya(t),null):m.forEach(S=>{const k=s.queryToTagMap.get(jo(S));s.listenProvider_.stopListening(ya(S),k)}))}lA(s,m)}return p}function sA(s,t,i,a){const o=kh(s,a);if(o!=null){const c=Uh(o),h=c.path,p=c.queryId,_=Et(h,t),m=new Fi(Rh(p),_,i);return Lh(s,h,m)}else return[]}function rA(s,t,i,a){const o=kh(s,a);if(o){const c=Uh(o),h=c.path,p=c.queryId,_=Et(h,t),m=Ce.fromObject(i),y=new Js(Rh(p),_,m);return Lh(s,h,y)}else return[]}function Qg(s,t,i,a=!1){const o=t._path;let c=null,h=!1;s.syncPointTree_.foreachOnPath(o,(S,k)=>{const L=Et(S,o);c=c||Gs(k,L),h=h||_i(k)});let p=s.syncPointTree_.get(o);p?(h=h||_i(p),c=c||Gs(p,he())):(p=new GC,s.syncPointTree_=s.syncPointTree_.set(o,p));let _;c!=null?_=!0:(_=!1,c=K.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((k,L)=>{const X=Gs(L,he());X&&(c=c.updateImmediateChild(k,X))}));const m=Ay(p,t);if(!m&&!t._queryParams.loadsAllData()){const S=jo(t);U(!s.queryToTagMap.has(S),"View does not exist, but we have a tag");const k=oA();s.queryToTagMap.set(S,k),s.tagToQueryMap.set(k,S)}const y=Nh(s.pendingWriteTree_,o);let E=XC(p,t,i,y,c,_);if(!m&&!h&&!a){const S=Cy(p,t);E=E.concat(uA(s,t,S))}return E}function xh(s,t,i){const o=s.pendingWriteTree_,c=s.syncPointTree_.findOnPath(t,(h,p)=>{const _=Et(h,t),m=Gs(p,_);if(m)return m});return gy(o,t,c,i,!0)}function ar(s,t){return Ry(t,s.syncPointTree_,null,Nh(s.pendingWriteTree_,he()))}function Ry(s,t,i,a){if(ae(s.path))return Ny(s,t,i,a);{const o=t.get(he());i==null&&o!=null&&(i=Gs(o,he()));let c=[];const h=ne(s.path),p=s.operationForChild(h),_=t.children.get(h);if(_&&p){const m=i?i.getImmediateChild(h):null,y=vy(a,h);c=c.concat(Ry(p,_,m,y))}return o&&(c=c.concat(Mh(o,s,a,i))),c}}function Ny(s,t,i,a){const o=t.get(he());i==null&&o!=null&&(i=Gs(o,he()));let c=[];return t.children.inorderTraversal((h,p)=>{const _=i?i.getImmediateChild(h):null,m=vy(a,h),y=s.operationForChild(h);y&&(c=c.concat(Ny(y,p,_,m)))}),o&&(c=c.concat(Mh(o,s,a,i))),c}function Oy(s,t){const i=t.query,a=Oo(s,i);return{hashFn:()=>(BC(t)||K.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return a?iA(s,i._path,a):nA(s,i._path);{const c=t1(o,i);return $f(s,i,null,c)}}}}function Oo(s,t){const i=jo(t);return s.queryToTagMap.get(i)}function jo(s){return s._path.toString()+"$"+s._queryIdentifier}function kh(s,t){return s.tagToQueryMap.get(t)}function Uh(s){const t=s.indexOf("$");return U(t!==-1&&t<s.length-1,"Bad queryKey."),{queryId:s.substr(t+1),path:new Ee(s.substr(0,t))}}function Lh(s,t,i){const a=s.syncPointTree_.get(t);U(a,"Missing sync point for query tag that we're tracking");const o=Nh(s.pendingWriteTree_,t);return Mh(a,i,o,null)}function aA(s){return s.fold((t,i,a)=>{if(i&&_i(i))return[qo(i)];{let o=[];return i&&(o=Ty(i)),tt(a,(c,h)=>{o=o.concat(h)}),o}})}function ya(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(JC())(s._repo,s._path):s}function lA(s,t){for(let i=0;i<t.length;++i){const a=t[i];if(!a._queryParams.loadsAllData()){const o=jo(a),c=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(c)}}}function oA(){return $C++}function uA(s,t,i){const a=t._path,o=Oo(s,t),c=Oy(s,i),h=s.listenProvider_.startListening(ya(t),o,c.hashFn,c.onComplete),p=s.syncPointTree_.subtree(a);if(o)U(!_i(p.value),"If we're adding a query, it shouldn't be shadowed");else{const _=p.fold((m,y,E)=>{if(!ae(m)&&y&&_i(y))return[qo(y).query];{let S=[];return y&&(S=S.concat(Ty(y).map(k=>k.query))),tt(E,(k,L)=>{S=S.concat(L)}),S}});for(let m=0;m<_.length;++m){const y=_[m];s.listenProvider_.stopListening(ya(y),Oo(s,y))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new zh(i)}node(){return this.node_}}class Hh{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=Me(this.path_,t);return new Hh(this.syncTree_,i)}node(){return xh(this.syncTree_,this.path_)}}const cA=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},Kg=function(s,t,i){if(!s||typeof s!="object")return s;if(U(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return fA(s[".sv"],t,i);if(typeof s[".sv"]=="object")return hA(s[".sv"],t);U(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},fA=function(s,t,i){switch(s){case"timestamp":return i.timestamp;default:U(!1,"Unexpected server value: "+s)}},hA=function(s,t,i){s.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const a=s.increment;typeof a!="number"&&U(!1,"Unexpected increment value: "+a);const o=t.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return a;const h=o.getValue();return typeof h!="number"?a:h+a},Dy=function(s,t,i,a){return Ph(t,new Hh(i,s),a)},Iy=function(s,t,i){return Ph(s,new zh(t),i)};function Ph(s,t,i){const a=s.getPriority().val(),o=Kg(a,t.getImmediateChild(".priority"),i);let c;if(s.isLeafNode()){const h=s,p=Kg(h.getValue(),t,i);return p!==h.getValue()||o!==h.getPriority().val()?new Fe(p,Ke(o)):s}else{const h=s;return c=h,o!==h.getPriority().val()&&(c=c.updatePriority(new Fe(o))),h.forEachChild(xe,(p,_)=>{const m=Ph(_,t.getImmediateChild(p),i);m!==_&&(c=c.updateImmediateChild(p,m))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t="",i=null,a={children:{},childCount:0}){this.name=t,this.parent=i,this.node=a}}function qh(s,t){let i=t instanceof Ee?t:new Ee(t),a=s,o=ne(i);for(;o!==null;){const c=Ks(a.node.children,o)||{children:{},childCount:0};a=new Bh(o,a,c),i=Ae(i),o=ne(i)}return a}function lr(s){return s.node.value}function My(s,t){s.node.value=t,eh(s)}function xy(s){return s.node.childCount>0}function dA(s){return lr(s)===void 0&&!xy(s)}function Go(s,t){tt(s.node.children,(i,a)=>{t(new Bh(i,s,a))})}function ky(s,t,i,a){i&&t(s),Go(s,o=>{ky(o,t,!0)})}function pA(s,t,i){let a=s.parent;for(;a!==null;){if(t(a))return!0;a=a.parent}return!1}function za(s){return new Ee(s.parent===null?s.name:za(s.parent)+"/"+s.name)}function eh(s){s.parent!==null&&_A(s.parent,s.name,s)}function _A(s,t,i){const a=dA(i),o=ln(s.node.children,t);a&&o?(delete s.node.children[t],s.node.childCount--,eh(s)):!a&&!o&&(s.node.children[t]=i.node,s.node.childCount++,eh(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=/[\[\].#$\/\u0000-\u001F\u007F]/,gA=/[\[\].#$\u0000-\u001F\u007F]/,xf=10*1024*1024,Vh=function(s){return typeof s=="string"&&s.length!==0&&!mA.test(s)},Uy=function(s){return typeof s=="string"&&s.length!==0&&!gA.test(s)},vA=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),Uy(s)},yA=function(s){return s===null||typeof s=="string"||typeof s=="number"&&!ph(s)||s&&typeof s=="object"&&ln(s,".sv")},Ly=function(s,t,i,a){a&&t===void 0||Yo(zo(s,"value"),t,i)},Yo=function(s,t,i){const a=i instanceof Ee?new U1(i,s):i;if(t===void 0)throw new Error(s+"contains undefined "+qi(a));if(typeof t=="function")throw new Error(s+"contains a function "+qi(a)+" with contents = "+t.toString());if(ph(t))throw new Error(s+"contains "+t.toString()+" "+qi(a));if(typeof t=="string"&&t.length>xf/3&&Ho(t)>xf)throw new Error(s+"contains a string greater than "+xf+" utf8 bytes "+qi(a)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,c=!1;if(tt(t,(h,p)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!Vh(h)))throw new Error(s+" contains an invalid key ("+h+") "+qi(a)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);L1(a,h),Yo(s,p,a),z1(a)}),o&&c)throw new Error(s+' contains ".value" child '+qi(a)+" in addition to actual children.")}},EA=function(s,t){let i,a;for(i=0;i<t.length;i++){a=t[i];const c=Ca(a);for(let h=0;h<c.length;h++)if(!(c[h]===".priority"&&h===c.length-1)){if(!Vh(c[h]))throw new Error(s+"contains an invalid key ("+c[h]+") in path "+a.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(k1);let o=null;for(i=0;i<t.length;i++){if(a=t[i],o!==null&&Vt(o,a))throw new Error(s+"contains a path "+o.toString()+" that is ancestor of another path "+a.toString());o=a}},SA=function(s,t,i,a){const o=zo(s,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const c=[];tt(t,(h,p)=>{const _=new Ee(h);if(Yo(o,p,Me(i,_)),yh(_)===".priority"&&!yA(p))throw new Error(o+"contains an invalid value for '"+_.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(_)}),EA(o,c)},zy=function(s,t,i,a){if(!Uy(i))throw new Error(zo(s,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},bA=function(s,t,i,a){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),zy(s,t,i)},jh=function(s,t){if(ne(t)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},TA=function(s,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Vh(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!vA(i))throw new Error(zo(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fo(s,t){let i=null;for(let a=0;a<t.length;a++){const o=t[a],c=o.getPath();i!==null&&!Eh(c,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:c}),i.events.push(o)}i&&s.eventLists_.push(i)}function Hy(s,t,i){Fo(s,i),Py(s,a=>Eh(a,t))}function Wt(s,t,i){Fo(s,i),Py(s,a=>Vt(a,t)||Vt(t,a))}function Py(s,t){s.recursionDepth_++;let i=!0;for(let a=0;a<s.eventLists_.length;a++){const o=s.eventLists_[a];if(o){const c=o.path;t(c)?(AA(s.eventLists_[a]),s.eventLists_[a]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function AA(s){for(let t=0;t<s.events.length;t++){const i=s.events[t];if(i!==null){s.events[t]=null;const a=i.getEventRunner();_a&&et("event: "+i.toString()),rr(a)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="repo_interrupt",RA=25;class NA{constructor(t,i,a,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=a,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new CA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bo(),this.transactionQueueTree_=new Bh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function OA(s,t,i){if(s.stats_=gh(s.repoInfo_),s.forceRestClient_||r1())s.server_=new So(s.repoInfo_,(a,o,c,h)=>{Xg(s,a,o,c,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>Wg(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(i)}catch(a){throw new Error("Invalid authOverride provided: "+a)}}s.persistentConnection_=new Rn(s.repoInfo_,t,(a,o,c,h)=>{Xg(s,a,o,c,h)},a=>{Wg(s,a)},a=>{DA(s,a)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(a=>{s.server_.refreshAuthToken(a)}),s.appCheckProvider_.addTokenChangeListener(a=>{s.server_.refreshAppCheckToken(a.token)}),s.statsReporter_=c1(s.repoInfo_,()=>new uC(s.stats_,s.server_)),s.infoData_=new sC,s.infoSyncTree_=new Fg({startListening:(a,o,c,h)=>{let p=[];const _=s.infoData_.getNode(a._path);return _.isEmpty()||(p=Vo(s.infoSyncTree_,a._path,_),setTimeout(()=>{h("ok")},0)),p},stopListening:()=>{}}),Gh(s,"connected",!1),s.serverSyncTree_=new Fg({startListening:(a,o,c,h)=>(s.server_.listen(a,c,o,(p,_)=>{const m=h(p,_);Wt(s.eventQueue_,a._path,m)}),[]),stopListening:(a,o)=>{s.server_.unlisten(a,o)}})}function By(s){const i=s.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function Qo(s){return cA({timestamp:By(s)})}function Xg(s,t,i,a,o){s.dataUpdateCount++;const c=new Ee(t);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(a){const _=mo(i,m=>Ke(m));h=rA(s.serverSyncTree_,c,_,o)}else{const _=Ke(i);h=sA(s.serverSyncTree_,c,_,o)}else if(a){const _=mo(i,m=>Ke(m));h=tA(s.serverSyncTree_,c,_)}else{const _=Ke(i);h=Vo(s.serverSyncTree_,c,_)}let p=c;h.length>0&&(p=er(s,c)),Wt(s.eventQueue_,p,h)}function Wg(s,t){Gh(s,"connected",t),t===!1&&xA(s)}function DA(s,t){tt(t,(i,a)=>{Gh(s,i,a)})}function Gh(s,t,i){const a=new Ee("/.info/"+t),o=Ke(i);s.infoData_.updateSnapshot(a,o);const c=Vo(s.infoSyncTree_,a,o);Wt(s.eventQueue_,a,c)}function Yh(s){return s.nextWriteId_++}function IA(s,t,i,a,o){Ko(s,"set",{path:t.toString(),value:i,priority:a});const c=Qo(s),h=Ke(i,a),p=xh(s.serverSyncTree_,t),_=Iy(h,p,c),m=Yh(s),y=wy(s.serverSyncTree_,t,_,m,!0);Fo(s.eventQueue_,y),s.server_.put(t.toString(),h.val(!0),(S,k)=>{const L=S==="ok";L||ft("set at "+t+" failed: "+S);const X=ui(s.serverSyncTree_,m,!L);Wt(s.eventQueue_,t,X),th(s,o,S,k)});const E=Qh(s,t);er(s,E),Wt(s.eventQueue_,E,[])}function MA(s,t,i,a){Ko(s,"update",{path:t.toString(),value:i});let o=!0;const c=Qo(s),h={};if(tt(i,(p,_)=>{o=!1,h[p]=Dy(Me(t,p),Ke(_),s.serverSyncTree_,c)}),o)et("update() called with empty data.  Don't do anything."),th(s,a,"ok",void 0);else{const p=Yh(s),_=eA(s.serverSyncTree_,t,h,p);Fo(s.eventQueue_,_),s.server_.merge(t.toString(),i,(m,y)=>{const E=m==="ok";E||ft("update at "+t+" failed: "+m);const S=ui(s.serverSyncTree_,p,!E),k=S.length>0?er(s,t):t;Wt(s.eventQueue_,k,S),th(s,a,m,y)}),tt(i,m=>{const y=Qh(s,Me(t,m));er(s,y)}),Wt(s.eventQueue_,t,[])}}function xA(s){Ko(s,"onDisconnectEvents");const t=Qo(s),i=bo();Ff(s.onDisconnect_,he(),(o,c)=>{const h=Dy(o,c,s.serverSyncTree_,t);dy(i,o,h)});let a=[];Ff(i,he(),(o,c)=>{a=a.concat(Vo(s.serverSyncTree_,o,c));const h=Qh(s,o);er(s,h)}),s.onDisconnect_=bo(),Wt(s.eventQueue_,he(),a)}function kA(s,t,i){let a;ne(t._path)===".info"?a=Qg(s.infoSyncTree_,t,i):a=Qg(s.serverSyncTree_,t,i),Hy(s.eventQueue_,t._path,a)}function UA(s,t,i){let a;ne(t._path)===".info"?a=$f(s.infoSyncTree_,t,i):a=$f(s.serverSyncTree_,t,i),Hy(s.eventQueue_,t._path,a)}function LA(s){s.persistentConnection_&&s.persistentConnection_.interrupt(wA)}function Ko(s,...t){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),et(i,...t)}function th(s,t,i,a){t&&rr(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let c=o;a&&(c+=": "+a);const h=new Error(c);h.code=o,t(h)}})}function qy(s,t,i){return xh(s.serverSyncTree_,t,i)||K.EMPTY_NODE}function Fh(s,t=s.transactionQueueTree_){if(t||Xo(s,t),lr(t)){const i=jy(s,t);U(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&zA(s,za(t),i)}else xy(t)&&Go(t,i=>{Fh(s,i)})}function zA(s,t,i){const a=i.map(m=>m.currentWriteId),o=qy(s,t,a);let c=o;const h=o.hash();for(let m=0;m<i.length;m++){const y=i[m];U(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=Et(t,y.path);c=c.updateChild(E,y.currentOutputSnapshotRaw)}const p=c.val(!0),_=t;s.server_.put(_.toString(),p,m=>{Ko(s,"transaction put response",{path:_.toString(),status:m});let y=[];if(m==="ok"){const E=[];for(let S=0;S<i.length;S++)i[S].status=2,y=y.concat(ui(s.serverSyncTree_,i[S].currentWriteId)),i[S].onComplete&&E.push(()=>i[S].onComplete(null,!0,i[S].currentOutputSnapshotResolved)),i[S].unwatcher();Xo(s,qh(s.transactionQueueTree_,t)),Fh(s,s.transactionQueueTree_),Wt(s.eventQueue_,t,y);for(let S=0;S<E.length;S++)rr(E[S])}else{if(m==="datastale")for(let E=0;E<i.length;E++)i[E].status===3?i[E].status=4:i[E].status=0;else{ft("transaction at "+_.toString()+" failed: "+m);for(let E=0;E<i.length;E++)i[E].status=4,i[E].abortReason=m}er(s,t)}},h)}function er(s,t){const i=Vy(s,t),a=za(i),o=jy(s,i);return HA(s,o,a),a}function HA(s,t,i){if(t.length===0)return;const a=[];let o=[];const h=t.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<t.length;p++){const _=t[p],m=Et(i,_.path);let y=!1,E;if(U(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)y=!0,E=_.abortReason,o=o.concat(ui(s.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=RA)y=!0,E="maxretry",o=o.concat(ui(s.serverSyncTree_,_.currentWriteId,!0));else{const S=qy(s,_.path,h);_.currentInputSnapshot=S;const k=t[p].update(S.val());if(k!==void 0){Yo("transaction failed: Data returned ",k,_.path);let L=Ke(k);typeof k=="object"&&k!=null&&ln(k,".priority")||(L=L.updatePriority(S.getPriority()));const ee=_.currentWriteId,Le=Qo(s),Oe=Iy(L,S,Le);_.currentOutputSnapshotRaw=L,_.currentOutputSnapshotResolved=Oe,_.currentWriteId=Yh(s),h.splice(h.indexOf(ee),1),o=o.concat(wy(s.serverSyncTree_,_.path,Oe,_.currentWriteId,_.applyLocally)),o=o.concat(ui(s.serverSyncTree_,ee,!0))}else y=!0,E="nodata",o=o.concat(ui(s.serverSyncTree_,_.currentWriteId,!0))}Wt(s.eventQueue_,i,o),o=[],y&&(t[p].status=2,function(S){setTimeout(S,Math.floor(0))}(t[p].unwatcher),t[p].onComplete&&(E==="nodata"?a.push(()=>t[p].onComplete(null,!1,t[p].currentInputSnapshot)):a.push(()=>t[p].onComplete(new Error(E),!1,null))))}Xo(s,s.transactionQueueTree_);for(let p=0;p<a.length;p++)rr(a[p]);Fh(s,s.transactionQueueTree_)}function Vy(s,t){let i,a=s.transactionQueueTree_;for(i=ne(t);i!==null&&lr(a)===void 0;)a=qh(a,i),t=Ae(t),i=ne(t);return a}function jy(s,t){const i=[];return Gy(s,t,i),i.sort((a,o)=>a.order-o.order),i}function Gy(s,t,i){const a=lr(t);if(a)for(let o=0;o<a.length;o++)i.push(a[o]);Go(t,o=>{Gy(s,o,i)})}function Xo(s,t){const i=lr(t);if(i){let a=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[a]=i[o],a++);i.length=a,My(t,i.length>0?i:void 0)}Go(t,a=>{Xo(s,a)})}function Qh(s,t){const i=za(Vy(s,t)),a=qh(s.transactionQueueTree_,t);return pA(a,o=>{kf(s,o)}),kf(s,a),ky(a,o=>{kf(s,o)}),i}function kf(s,t){const i=lr(t);if(i){const a=[];let o=[],c=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(U(c===h-1,"All SENT items should be at beginning of queue."),c=h,i[h].status=3,i[h].abortReason="set"):(U(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(ui(s.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&a.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?My(t,void 0):i.length=c+1,Wt(s.eventQueue_,za(t),o);for(let h=0;h<a.length;h++)rr(a[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(s){let t="";const i=s.split("/");for(let a=0;a<i.length;a++)if(i[a].length>0){let o=i[a];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function BA(s){const t={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const a=i.split("=");a.length===2?t[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):ft(`Invalid query segment '${i}' in query '${s}'`)}return t}const Zg=function(s,t){const i=qA(s),a=i.namespace;i.domain==="firebase.com"&&Dn(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!a||a==="undefined")&&i.domain!=="localhost"&&Dn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||WT();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new Wv(i.host,i.secure,a,o,t,"",a!==i.subdomain),path:new Ee(i.pathString)}},qA=function(s){let t="",i="",a="",o="",c="",h=!0,p="https",_=443;if(typeof s=="string"){let m=s.indexOf("//");m>=0&&(p=s.substring(0,m-1),s=s.substring(m+2));let y=s.indexOf("/");y===-1&&(y=s.length);let E=s.indexOf("?");E===-1&&(E=s.length),t=s.substring(0,Math.min(y,E)),y<E&&(o=PA(s.substring(y,E)));const S=BA(s.substring(Math.min(s.length,E)));m=t.indexOf(":"),m>=0?(h=p==="https"||p==="wss",_=parseInt(t.substring(m+1),10)):m=t.length;const k=t.slice(0,m);if(k.toLowerCase()==="localhost")i="localhost";else if(k.split(".").length<=2)i=k;else{const L=t.indexOf(".");a=t.substring(0,L).toLowerCase(),i=t.substring(L+1),c=a}"ns"in S&&(c=S.ns)}return{host:t,port:_,domain:i,subdomain:a,secure:h,scheme:p,pathString:o,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",VA=function(){let s=0;const t=[];return function(i){const a=i===s;s=i;let o;const c=new Array(8);for(o=7;o>=0;o--)c[o]=Jg.charAt(i%64),i=Math.floor(i/64);U(i===0,"Cannot push at time == 0");let h=c.join("");if(a){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)h+=Jg.charAt(t[o]);return U(h.length===20,"nextPushId: Length should be 20."),h}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(t,i,a,o){this.eventType=t,this.eventRegistration=i,this.snapshot=a,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Xe(this.snapshot.exportVal())}}class GA{constructor(t,i,a){this.eventRegistration=t,this.error=i,this.path=a}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(t,i){this.snapshotCallback=t,this.cancelCallback=i}onValue(t,i){this.snapshotCallback.call(null,t,i)}onCancel(t){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,i,a,o){this._repo=t,this._path=i,this._queryParams=a,this._orderByCalled=o}get key(){return ae(this._path)?null:yh(this._path)}get ref(){return new gi(this._repo,this._path)}get _queryIdentifier(){const t=Lg(this._queryParams),i=_h(t);return i==="{}"?"default":i}get _queryObject(){return Lg(this._queryParams)}isEqual(t){if(t=dt(t),!(t instanceof Kh))return!1;const i=this._repo===t._repo,a=Eh(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&a&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+x1(this._path)}}class gi extends Kh{constructor(t,i){super(t,i,new Ch,!1)}get parent(){const t=ry(this._path);return t===null?null:new gi(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Do{constructor(t,i,a){this._node=t,this.ref=i,this._index=a}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new Ee(t),a=Oa(this.ref,t);return new Do(this._node.getChild(i),a,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(a,o)=>t(new Do(o,Oa(this.ref,a),xe)))}hasChild(t){const i=new Ee(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lo(s,t){return s=dt(s),s._checkNotDeleted("ref"),t!==void 0?Oa(s._root,t):s._root}function Oa(s,t){return s=dt(s),ne(s._path)===null?bA("child","path",t):zy("child","path",t),new gi(s._repo,Me(s._path,t))}function FA(s,t){s=dt(s),jh("push",s._path),Ly("push",t,s._path,!0);const i=By(s._repo),a=VA(i),o=Oa(s,a),c=Oa(s,a);let h;return t!=null?h=Yy(c,t).then(()=>c):h=Promise.resolve(c),o.then=h.then.bind(h),o.catch=h.then.bind(h,void 0),o}function QA(s){return jh("remove",s._path),Yy(s,null)}function Yy(s,t){s=dt(s),jh("set",s._path),Ly("set",t,s._path,!1);const i=new Ma;return IA(s._repo,s._path,t,null,i.wrapCallback(()=>{})),i.promise}function KA(s,t){SA("update",t,s._path);const i=new Ma;return MA(s._repo,s._path,t,i.wrapCallback(()=>{})),i.promise}class Xh{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const a=i._queryParams.getIndex();return new jA("value",this,new Do(t.snapshotNode,new gi(i._repo,i._path),a))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new GA(this,t,i):null}matches(t){return t instanceof Xh?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function XA(s,t,i,a,o){const c=new YA(i,void 0),h=new Xh(c);return kA(s._repo,s,h),()=>UA(s._repo,s,h)}function WA(s,t,i,a){return XA(s,"value",t)}YC(gi);ZC(gi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="FIREBASE_DATABASE_EMULATOR_HOST",nh={};let JA=!1;function $A(s,t,i,a){const o=t.lastIndexOf(":"),c=t.substring(0,o),h=nr(c);s.repoInfo_=new Wv(t,h,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),a&&(s.authTokenProvider_=a)}function ew(s,t,i,a,o){let c=a||s.options.databaseURL;c===void 0&&(s.options.projectId||Dn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),et("Using default host for project ",s.options.projectId),c=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=Zg(c,o),p=h.repoInfo,_;typeof process<"u"&&vg&&(_=vg[ZA]),_?(c=`http://${_}?ns=${p.namespace}`,h=Zg(c,o),p=h.repoInfo):h.repoInfo.secure;const m=new l1(s.name,s.options,t);TA("Invalid Firebase Database URL",h),ae(h.path)||Dn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=nw(p,s,m,new a1(s,i));return new iw(y,s)}function tw(s,t){const i=nh[t];(!i||i[s.key]!==s)&&Dn(`Database ${t}(${s.repoInfo_}) has already been deleted.`),LA(s),delete i[s.key]}function nw(s,t,i,a){let o=nh[t.name];o||(o={},nh[t.name]=o);let c=o[s.toURLString()];return c&&Dn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new NA(s,JA,i,a),o[s.toURLString()]=c,c}class iw{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(OA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gi(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Dn("Cannot call "+t+" on a deleted database.")}}function sw(s=xv(),t){const i=dh(s,"database").getImmediate({identifier:t});if(!i._instanceStarted){const a=mb("database");a&&rw(i,...a)}return i}function rw(s,t,i,a={}){s=dt(s),s._checkNotDeleted("useEmulator");const o=`${t}:${i}`,c=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&ji(a,c.repoInfo_.emulatorOptions))return;Dn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)a.mockUserToken&&Dn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new ao(ao.OWNER);else if(a.mockUserToken){const p=typeof a.mockUserToken=="string"?a.mockUserToken:gb(a.mockUserToken,s.app.options.projectId);h=new ao(p)}nr(t)&&(wv(t),Rv("Database",!0)),$A(c,o,a,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(s){GT(sr),Xs(new Gi("database",(t,{instanceIdentifier:i})=>{const a=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),c=t.getProvider("app-check-internal");return ew(a,o,c,i)},"PUBLIC").setMultipleInstances(!0)),hi(yg,Eg,s),hi(yg,Eg,"esm2017")}Rn.prototype.simpleListen=function(s,t){this.sendRequest("q",{p:s},t)};Rn.prototype.echo=function(s,t){this.sendRequest("echo",{d:s},t)};aw();var lw="firebase",ow="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi(lw,ow,"app");function Wh(s,t){var i={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&t.indexOf(a)<0&&(i[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(s);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(s,a[o])&&(i[a[o]]=s[a[o]]);return i}function Fy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uw=Fy,Qy=new xa("auth","Firebase",Fy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new fh("@firebase/auth");function cw(s,...t){Io.logLevel<=ye.WARN&&Io.warn(`Auth (${sr}): ${s}`,...t)}function oo(s,...t){Io.logLevel<=ye.ERROR&&Io.error(`Auth (${sr}): ${s}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(s,...t){throw Zh(s,...t)}function rn(s,...t){return Zh(s,...t)}function Ky(s,t,i){const a=Object.assign(Object.assign({},uw()),{[t]:i});return new xa("auth","Firebase",a).create(t,{appName:s.name})}function Nn(s){return Ky(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zh(s,...t){if(typeof s!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=s.name),s._errorFactory.create(i,...a)}return Qy.create(s,...t)}function F(s,t,...i){if(!s)throw Zh(t,...i)}function An(s){const t="INTERNAL ASSERTION FAILED: "+s;throw oo(t),new Error(t)}function In(s,t){s||An(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function fw(){return $g()==="http:"||$g()==="https:"}function $g(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fw()||Sb()||"connection"in navigator)?navigator.onLine:!0}function dw(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,i){this.shortDelay=t,this.longDelay=i,In(i>t,"Short delay should be less than long delay!"),this.isMobile=ch()||Nv()}get(){return hw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(s,t){In(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mw=new Ha(3e4,6e4);function vi(s,t){return s.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:s.tenantId}):t}async function yi(s,t,i,a,o={}){return Wy(s,o,async()=>{let c={},h={};a&&(t==="GET"?h=a:c={body:JSON.stringify(a)});const p=ir(Object.assign({key:s.config.apiKey},h)).slice(1),_=await s._getAdditionalHeaders();_["Content-Type"]="application/json",s.languageCode&&(_["X-Firebase-Locale"]=s.languageCode);const m=Object.assign({method:t,headers:_},c);return Eb()||(m.referrerPolicy="no-referrer"),s.emulatorConfig&&nr(s.emulatorConfig.host)&&(m.credentials="include"),Xy.fetch()(await Zy(s,s.config.apiHost,i,p),m)})}async function Wy(s,t,i){s._canInitEmulator=!1;const a=Object.assign(Object.assign({},pw),t);try{const o=new vw(s),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw ro(s,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const p=c.ok?h.errorMessage:h.error.message,[_,m]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(s,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw ro(s,"email-already-in-use",h);if(_==="USER_DISABLED")throw ro(s,"user-disabled",h);const y=a[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Ky(s,y,m);Zt(s,y)}}catch(o){if(o instanceof mi)throw o;Zt(s,"network-request-failed",{message:String(o)})}}async function Pa(s,t,i,a,o={}){const c=await yi(s,t,i,a,o);return"mfaPendingCredential"in c&&Zt(s,"multi-factor-auth-required",{_serverResponse:c}),c}async function Zy(s,t,i,a){const o=`${t}${i}?${a}`,c=s,h=c.config.emulator?Jh(s.config,o):`${s.config.apiScheme}://${o}`;return _w.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function gw(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(rn(this.auth,"network-request-failed")),mw.get())})}}function ro(s,t,i){const a={appName:s.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const o=rn(s,t,a);return o.customData._tokenResponse=i,o}function ev(s){return s!==void 0&&s.enterprise!==void 0}class yw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return gw(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ew(s,t){return yi(s,"GET","/v2/recaptchaConfig",vi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(s,t){return yi(s,"POST","/v1/accounts:delete",t)}async function Mo(s,t){return yi(s,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function bw(s,t=!1){const i=dt(s),a=await i.getIdToken(t),o=$h(a);F(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c?.sign_in_provider;return{claims:o,token:a,authTime:Ea(Uf(o.auth_time)),issuedAtTime:Ea(Uf(o.iat)),expirationTime:Ea(Uf(o.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Uf(s){return Number(s)*1e3}function $h(s){const[t,i,a]=s.split(".");if(t===void 0||i===void 0||a===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{const o=_o(i);return o?JSON.parse(o):(oo("Failed to decode base64 JWT payload"),null)}catch(o){return oo("Caught error parsing JWT payload as JSON",o?.toString()),null}}function tv(s){const t=$h(s);return F(t,"internal-error"),F(typeof t.exp<"u","internal-error"),F(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(s,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof mi&&Tw(a)&&s.auth.currentUser===s&&await s.auth.signOut(),a}}function Tw({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ea(this.lastLoginAt),this.creationTime=Ea(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(s){var t;const i=s.auth,a=await s.getIdToken(),o=await Da(s,Mo(i,{idToken:a}));F(o?.users.length,i,"internal-error");const c=o.users[0];s._notifyReloadListener(c);const h=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?Jy(c.providerUserInfo):[],p=ww(s.providerData,h),_=s.isAnonymous,m=!(s.email&&c.passwordHash)&&!p?.length,y=_?m:!1,E={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:p,metadata:new sh(c.createdAt,c.lastLoginAt),isAnonymous:y};Object.assign(s,E)}async function Aw(s){const t=dt(s);await xo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ww(s,t){return[...s.filter(a=>!t.some(o=>o.providerId===a.providerId)),...t]}function Jy(s){return s.map(t=>{var{providerId:i}=t,a=Wh(t,["providerId"]);return{providerId:i,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(s,t){const i=await Wy(s,{},async()=>{const a=ir({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=s.config,h=await Zy(s,o,"/v1/token",`key=${c}`),p=await s._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:a};return s.emulatorConfig&&nr(s.emulatorConfig.host)&&(_.credentials="include"),Xy.fetch()(h,_)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function Nw(s,t){return yi(s,"POST","/v2/accounts:revokeToken",vi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){F(t.idToken,"internal-error"),F(typeof t.idToken<"u","internal-error"),F(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):tv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){F(t.length!==0,"internal-error");const i=tv(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:o,expiresIn:c}=await Rw(t,i);this.updateTokensAndExpiration(a,o,Number(c))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:o,expirationTime:c}=i,h=new Ys;return a&&(F(typeof a=="string","internal-error",{appName:t}),h.refreshToken=a),o&&(F(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(F(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(s,t){F(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class Kt{constructor(t){var{uid:i,auth:a,stsTokenManager:o}=t,c=Wh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Cw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=a,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new sh(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const i=await Da(this,this.stsTokenManager.getToken(this.auth,t));return F(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return bw(this,t)}reload(){return Aw(this)}_assign(t){this!==t&&(F(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Kt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await xo(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(Nn(this.auth));const t=await this.getIdToken();return await Da(this,Sw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var a,o,c,h,p,_,m,y;const E=(a=i.displayName)!==null&&a!==void 0?a:void 0,S=(o=i.email)!==null&&o!==void 0?o:void 0,k=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,L=(h=i.photoURL)!==null&&h!==void 0?h:void 0,X=(p=i.tenantId)!==null&&p!==void 0?p:void 0,ee=(_=i._redirectEventId)!==null&&_!==void 0?_:void 0,Le=(m=i.createdAt)!==null&&m!==void 0?m:void 0,Oe=(y=i.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:_e,emailVerified:qe,isAnonymous:le,providerData:We,stsTokenManager:nt}=i;F(_e&&nt,t,"internal-error");const ot=Ys.fromJSON(this.name,nt);F(typeof _e=="string",t,"internal-error"),si(E,t.name),si(S,t.name),F(typeof qe=="boolean",t,"internal-error"),F(typeof le=="boolean",t,"internal-error"),si(k,t.name),si(L,t.name),si(X,t.name),si(ee,t.name),si(Le,t.name),si(Oe,t.name);const pt=new Kt({uid:_e,auth:t,email:S,emailVerified:qe,displayName:E,isAnonymous:le,photoURL:L,phoneNumber:k,tenantId:X,stsTokenManager:ot,createdAt:Le,lastLoginAt:Oe});return We&&Array.isArray(We)&&(pt.providerData=We.map(Mn=>Object.assign({},Mn))),ee&&(pt._redirectEventId=ee),pt}static async _fromIdTokenResponse(t,i,a=!1){const o=new Ys;o.updateFromServerResponse(i);const c=new Kt({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:a});return await xo(c),c}static async _fromGetAccountInfoResponse(t,i,a){const o=i.users[0];F(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Jy(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!c?.length,p=new Ys;p.updateFromIdToken(a);const _=new Kt({uid:o.localId,auth:t,stsTokenManager:p,isAnonymous:h}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new sh(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(_,m),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=new Map;function wn(s){In(s instanceof Function,"Expected a class definition");let t=nv.get(s);return t?(In(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,nv.set(s,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}$y.type="NONE";const iv=$y;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(s,t,i){return`firebase:${s}:${t}:${i}`}class Fs{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:o,name:c}=this.auth;this.fullUserKey=uo(this.userKey,o.apiKey,c),this.fullPersistenceKey=uo("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await Mo(this.auth,{idToken:t}).catch(()=>{});return i?Kt._fromGetAccountInfoResponse(this.auth,i,t):null}return Kt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new Fs(wn(iv),t,a);const o=(await Promise.all(i.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let c=o[0]||wn(iv);const h=uo(a,t.config.apiKey,t.name);let p=null;for(const m of i)try{const y=await m._get(h);if(y){let E;if(typeof y=="string"){const S=await Mo(t,{idToken:y}).catch(()=>{});if(!S)break;E=await Kt._fromGetAccountInfoResponse(t,S,y)}else E=Kt._fromJSON(t,y);m!==c&&(p=E),c=m;break}}catch{}const _=o.filter(m=>m._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new Fs(c,t,a):(c=_[0],p&&await c._set(h,p.toJSON()),await Promise.all(i.map(async m=>{if(m!==c)try{await m._remove(h)}catch{}})),new Fs(c,t,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(i0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(e0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(r0(t))return"Blackberry";if(a0(t))return"Webos";if(t0(t))return"Safari";if((t.includes("chrome/")||n0(t))&&!t.includes("edge/"))return"Chrome";if(s0(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=s.match(i);if(a?.length===2)return a[1]}return"Other"}function e0(s=ht()){return/firefox\//i.test(s)}function t0(s=ht()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function n0(s=ht()){return/crios\//i.test(s)}function i0(s=ht()){return/iemobile/i.test(s)}function s0(s=ht()){return/android/i.test(s)}function r0(s=ht()){return/blackberry/i.test(s)}function a0(s=ht()){return/webos/i.test(s)}function ed(s=ht()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Ow(s=ht()){var t;return ed(s)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Dw(){return bb()&&document.documentMode===10}function l0(s=ht()){return ed(s)||s0(s)||a0(s)||r0(s)||/windows phone/i.test(s)||i0(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(s,t=[]){let i;switch(s){case"Browser":i=sv(ht());break;case"Worker":i=`${sv(ht())}-${s}`;break;default:i=s}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${sr}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=c=>new Promise((h,p)=>{try{const _=t(c);h(_)}catch(_){p(_)}});a.onAbort=i,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(s,t={}){return yi(s,"GET","/v2/passwordPolicy",vi(s,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=6;class kw{constructor(t){var i,a,o,c;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:xw,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(a=t.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,a,o,c,h,p;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,_),this.validatePasswordCharacterOptions(t,_),_.isValid&&(_.isValid=(i=_.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(a=_.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),_.isValid&&(_.isValid=(o=_.containsLowercaseLetter)!==null&&o!==void 0?o:!0),_.isValid&&(_.isValid=(c=_.containsUppercaseLetter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(h=_.containsNumericCharacter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(p=_.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),_}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let o=0;o<t.length;o++)a=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t,i,a,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rv(this),this.idTokenSubscription=new rv(this),this.beforeStateQueue=new Iw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=wn(i)),this._initializationPromise=this.queue(async()=>{var a,o,c;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,t),(a=this._resolvePersistenceManagerAvailable)===null||a===void 0||a.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await Mo(this,{idToken:t}),a=await Kt._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(qt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let o=a,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,p=o?._redirectEventId,_=await this.tryRedirectSignIn(t);(!h||h===p)&&_?.user&&(o=_.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await xo(t)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=dw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(qt(this.app))return Promise.reject(Nn(this));const i=t?dt(t):null;return i&&F(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&F(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return qt(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Mw(this),i=new kw(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new xa("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await Nw(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&wn(t)||this._popupRedirectResolver;F(i,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[wn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,a;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(p,this,"internal-error"),p.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const _=t.addObserver(i,a,o);return()=>{h=!0,_()}}else{const _=t.addObserver(i);return()=>{h=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=o0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(i["X-Firebase-Client"]=a);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var t;if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i?.error&&cw(`Error while retrieving App Check token: ${i.error}`),i?.token}}function $i(s){return dt(s)}class rv{constructor(t){this.auth=t,this.observer=null,this.addObserver=Mb(i=>this.observer=i)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lw(s){Wo=s}function u0(s){return Wo.loadJS(s)}function zw(){return Wo.recaptchaEnterpriseScript}function Hw(){return Wo.gapiScript}function Pw(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class Bw{constructor(){this.enterprise=new qw}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class qw{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const Vw="recaptcha-enterprise",c0="NO_RECAPTCHA";class jw{constructor(t){this.type=Vw,this.auth=$i(t)}async verify(t="verify",i=!1){async function a(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,p)=>{Ew(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const m=new yw(_);return c.tenantId==null?c._agentRecaptchaConfig=m:c._tenantRecaptchaConfigs[c.tenantId]=m,h(m.siteKey)}}).catch(_=>{p(_)})})}function o(c,h,p){const _=window.grecaptcha;ev(_)?_.enterprise.ready(()=>{_.enterprise.execute(c,{action:t}).then(m=>{h(m)}).catch(()=>{h(c0)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Bw().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{a(this.auth).then(p=>{if(!i&&ev(window.grecaptcha))o(p,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let _=zw();_.length!==0&&(_+=p),u0(_).then(()=>{o(p,c,h)}).catch(m=>{h(m)})}}).catch(p=>{h(p)})})}}async function av(s,t,i,a=!1,o=!1){const c=new jw(s);let h;if(o)h=c0;else try{h=await c.verify(i)}catch{h=await c.verify(i,!0)}const p=Object.assign({},t);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const _=p.phoneEnrollmentInfo.phoneNumber,m=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const _=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return a?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function rh(s,t,i,a,o){var c;if(!((c=s._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await av(s,t,i,i==="getOobCode");return a(s,h)}else return a(s,t).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await av(s,t,i,i==="getOobCode");return a(s,p)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(s,t){const i=dh(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(ji(c,t??{}))return o;Zt(o,"already-initialized")}return i.initialize({options:t})}function Yw(s,t){const i=t?.persistence||[],a=(Array.isArray(i)?i:[i]).map(wn);t?.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(a,t?.popupRedirectResolver)}function Fw(s,t,i){const a=$i(s);F(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const o=!1,c=f0(t),{host:h,port:p}=Qw(t),_=p===null?"":`:${p}`,m={url:`${c}//${h}${_}/`},y=Object.freeze({host:h,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){F(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),F(ji(m,a.config.emulator)&&ji(y,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=m,a.emulatorConfig=y,a.settings.appVerificationDisabledForTesting=!0,nr(h)?(wv(`${c}//${h}${_}`),Rv("Auth",!0)):Kw()}function f0(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function Qw(s){const t=f0(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const c=o[1];return{host:c,port:lv(a.substr(c.length+1))}}else{const[c,h]=a.split(":");return{host:c,port:lv(h)}}}function lv(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function Kw(){function s(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return An("not implemented")}_getIdTokenResponse(t){return An("not implemented")}_linkToIdToken(t,i){return An("not implemented")}_getReauthenticationResolver(t){return An("not implemented")}}async function Xw(s,t){return yi(s,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ww(s,t){return Pa(s,"POST","/v1/accounts:signInWithPassword",vi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(s,t){return Pa(s,"POST","/v1/accounts:signInWithEmailLink",vi(s,t))}async function Jw(s,t){return Pa(s,"POST","/v1/accounts:signInWithEmailLink",vi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends td{constructor(t,i,a,o=null){super("password",a),this._email=t,this._password=i,this._tenantId=o}static _fromEmailAndPassword(t,i){return new Ia(t,i,"password")}static _fromEmailAndCode(t,i,a=null){return new Ia(t,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rh(t,i,"signInWithPassword",Ww);case"emailLink":return Zw(t,{email:this._email,oobCode:this._password});default:Zt(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rh(t,a,"signUpPassword",Xw);case"emailLink":return Jw(t,{idToken:i,email:this._email,oobCode:this._password});default:Zt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(s,t){return Pa(s,"POST","/v1/accounts:signInWithIdp",vi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="http://localhost";class Xi extends td{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Xi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):Zt("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:o}=i,c=Wh(i,["providerId","signInMethod"]);if(!a||!o)return null;const h=new Xi(a,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Qs(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,Qs(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Qs(t,i)}buildRequest(){const t={requestUri:$w,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=ir(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tR(s){const t=ha(da(s)).link,i=t?ha(da(t)).deep_link_id:null,a=ha(da(s)).deep_link_id;return(a?ha(da(a)).link:null)||a||i||t||s}class nd{constructor(t){var i,a,o,c,h,p;const _=ha(da(t)),m=(i=_.apiKey)!==null&&i!==void 0?i:null,y=(a=_.oobCode)!==null&&a!==void 0?a:null,E=eR((o=_.mode)!==null&&o!==void 0?o:null);F(m&&y&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=y,this.continueUrl=(c=_.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(h=_.lang)!==null&&h!==void 0?h:null,this.tenantId=(p=_.tenantId)!==null&&p!==void 0?p:null}static parseLink(t){const i=tR(t);try{return new nd(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.providerId=or.PROVIDER_ID}static credential(t,i){return Ia._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const a=nd.parseLink(i);return F(a,"argument-error"),Ia._fromEmailAndCode(t,a.code,a.tenantId)}}or.PROVIDER_ID="password";or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends h0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Ba{constructor(){super("facebook.com")}static credential(t){return Xi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ri.credentialFromTaggedObject(t)}static credentialFromError(t){return ri.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ri.credential(t.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Ba{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Xi._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return ai.credentialFromTaggedObject(t)}static credentialFromError(t){return ai.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return ai.credential(i,a)}catch{return null}}}ai.GOOGLE_SIGN_IN_METHOD="google.com";ai.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Ba{constructor(){super("github.com")}static credential(t){return Xi._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return li.credentialFromTaggedObject(t)}static credentialFromError(t){return li.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return li.credential(t.oauthAccessToken)}catch{return null}}}li.GITHUB_SIGN_IN_METHOD="github.com";li.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Ba{constructor(){super("twitter.com")}static credential(t,i){return Xi._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return oi.credentialFromTaggedObject(t)}static credentialFromError(t){return oi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return oi.credential(i,a)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(s,t){return Pa(s,"POST","/v1/accounts:signUp",vi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,o=!1){const c=await Kt._fromIdTokenResponse(t,a,o),h=ov(a);return new Wi({user:c,providerId:h,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const o=ov(a);return new Wi({user:t,providerId:o,_tokenResponse:a,operationType:i})}}function ov(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends mi{constructor(t,i,a,o){var c;super(i.code,i.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,o){return new ko(t,i,a,o)}}function d0(s,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(s,c,t,a):c})}async function iR(s,t,i=!1){const a=await Da(s,t._linkToIdToken(s.auth,await s.getIdToken()),i);return Wi._forOperation(s,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(s,t,i=!1){const{auth:a}=s;if(qt(a.app))return Promise.reject(Nn(a));const o="reauthenticate";try{const c=await Da(s,d0(a,o,t,s),i);F(c.idToken,a,"internal-error");const h=$h(c.idToken);F(h,a,"internal-error");const{sub:p}=h;return F(s.uid===p,a,"user-mismatch"),Wi._forOperation(s,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&Zt(a,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(s,t,i=!1){if(qt(s.app))return Promise.reject(Nn(s));const a="signIn",o=await d0(s,a,t),c=await Wi._fromIdTokenResponse(s,a,o);return i||await s._updateCurrentUser(c.user),c}async function rR(s,t){return p0($i(s),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(s){const t=$i(s);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function aR(s,t,i){if(qt(s.app))return Promise.reject(Nn(s));const a=$i(s),h=await rh(a,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nR).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&_0(s),_}),p=await Wi._fromIdTokenResponse(a,"signIn",h);return await a._updateCurrentUser(p.user),p}function lR(s,t,i){return qt(s.app)?Promise.reject(Nn(s)):rR(dt(s),or.credential(t,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&_0(s),a})}function oR(s,t,i,a){return dt(s).onIdTokenChanged(t,i,a)}function uR(s,t,i){return dt(s).beforeAuthStateChanged(t,i)}function cR(s,t,i,a){return dt(s).onAuthStateChanged(t,i,a)}function fR(s){return dt(s).signOut()}const Uo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=1e3,dR=10;class g0 extends m0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=l0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),o=this.localCache[i];a!==o&&t(i,o,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,p,_)=>{this.notifyListeners(h,_)});return}const a=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(a);!i&&this.localCache[a]===h||this.notifyListeners(a,h)},c=this.storage.getItem(a);Dw()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,dR):o()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},hR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}g0.type="LOCAL";const pR=g0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0 extends m0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}v0.type="SESSION";const y0=v0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const a=new Zo(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!h?.size)return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const p=Array.from(h).map(async m=>m(i.origin,c)),_=await _R(p);i.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:_})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(s="",t=10){let i="";for(let a=0;a<t;a++)i+=Math.floor(Math.random()*10);return s+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((p,_)=>{const m=id("",20);o.port1.start();const y=setTimeout(()=>{_(new Error("unsupported_event"))},a);h={messageChannel:o,onMessage(E){const S=E;if(S.data.eventId===m)switch(S.data.status){case"ack":clearTimeout(y),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(S.data.response);break;default:clearTimeout(y),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:m,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function gR(s){an().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function vR(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yR(){var s;return((s=navigator?.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function ER(){return E0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="firebaseLocalStorageDb",SR=1,Lo="firebaseLocalStorage",b0="fbase_key";class qa{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Jo(s,t){return s.transaction([Lo],t?"readwrite":"readonly").objectStore(Lo)}function bR(){const s=indexedDB.deleteDatabase(S0);return new qa(s).toPromise()}function ah(){const s=indexedDB.open(S0,SR);return new Promise((t,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const a=s.result;try{a.createObjectStore(Lo,{keyPath:b0})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const a=s.result;a.objectStoreNames.contains(Lo)?t(a):(a.close(),await bR(),t(await ah()))})})}async function uv(s,t,i){const a=Jo(s,!0).put({[b0]:t,value:i});return new qa(a).toPromise()}async function TR(s,t){const i=Jo(s,!1).get(t),a=await new qa(i).toPromise();return a===void 0?null:a.value}function cv(s,t){const i=Jo(s,!0).delete(t);return new qa(i).toPromise()}const CR=800,AR=3;class T0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>AR)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return E0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zo._getInstance(ER()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await vR(),!this.activeServiceWorker)return;this.sender=new mR(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((i=a[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||yR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ah();return await uv(t,Uo,"1"),await cv(t,Uo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>uv(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>TR(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>cv(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=Jo(o,!1).getAll();return new qa(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}T0.type="LOCAL";const wR=T0;new Ha(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(s,t){return t?wn(t):(F(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd extends td{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Qs(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Qs(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Qs(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function NR(s){return p0(s.auth,new sd(s),s.bypassAuthState)}function OR(s){const{auth:t,user:i}=s;return F(i,t,"internal-error"),sR(i,new sd(s),s.bypassAuthState)}async function DR(s){const{auth:t,user:i}=s;return F(i,t,"internal-error"),iR(i,new sd(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(t,i,a,o,c=!1){this.auth=t,this.resolver=a,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:o,tenantId:c,error:h,type:p}=t;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:i,sessionId:a,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(m){this.reject(m)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return NR;case"linkViaPopup":case"linkViaRedirect":return DR;case"reauthViaPopup":case"reauthViaRedirect":return OR;default:Zt(this.auth,"internal-error")}}resolve(t){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new Ha(2e3,1e4);class qs extends C0{constructor(t,i,a,o,c){super(t,i,o,c),this.provider=a,this.authWindow=null,this.pollId=null,qs.currentPopupAction&&qs.currentPopupAction.cancel(),qs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return F(t,this.auth,"internal-error"),t}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const t=id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,a;if(!((a=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,IR.get())};t()}}qs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="pendingRedirect",co=new Map;class xR extends C0{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=co.get(this.auth._key());if(!t){try{const a=await kR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}co.set(this.auth._key(),t)}return this.bypassAuthState||co.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kR(s,t){const i=zR(t),a=LR(s);if(!await a._isAvailable())return!1;const o=await a._get(i)==="true";return await a._remove(i),o}function UR(s,t){co.set(s._key(),t)}function LR(s){return wn(s._redirectPersistence)}function zR(s){return uo(MR,s.config.apiKey,s.name)}async function HR(s,t,i=!1){if(qt(s.app))return Promise.reject(Nn(s));const a=$i(s),o=RR(a,t),h=await new xR(a,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,t)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=10*60*1e3;class BR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!qR(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var a;if(t.error&&!A0(t)){const o=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";i.onError(rn(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=PR&&this.cachedEventUids.clear(),this.cachedEventUids.has(fv(t))}saveEventToCache(t){this.cachedEventUids.add(fv(t)),this.lastProcessedEventTime=Date.now()}}function fv(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function A0({type:s,error:t}){return s==="unknown"&&t?.code==="auth/no-auth-event"}function qR(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A0(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(s,t={}){return yi(s,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GR=/^https?/;async function YR(s){if(s.config.emulator)return;const{authorizedDomains:t}=await VR(s);for(const i of t)try{if(FR(i))return}catch{}Zt(s,"unauthorized-domain")}function FR(s){const t=ih(),{protocol:i,hostname:a}=new URL(t);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&a===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===a}if(!GR.test(i))return!1;if(jR.test(s))return a===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=new Ha(3e4,6e4);function hv(){const s=an().___jsl;if(s?.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function KR(s){return new Promise((t,i)=>{var a,o,c;function h(){hv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{hv(),i(rn(s,"network-request-failed"))},timeout:QR.get()})}if(!((o=(a=an().gapi)===null||a===void 0?void 0:a.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=an().gapi)===null||c===void 0)&&c.load)h();else{const p=Pw("iframefcb");return an()[p]=()=>{gapi.load?h():i(rn(s,"network-request-failed"))},u0(`${Hw()}?onload=${p}`).catch(_=>i(_))}}).catch(t=>{throw fo=null,t})}let fo=null;function XR(s){return fo=fo||KR(s),fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=new Ha(5e3,15e3),ZR="__/auth/iframe",JR="emulator/auth/iframe",$R={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tN(s){const t=s.config;F(t.authDomain,s,"auth-domain-config-required");const i=t.emulator?Jh(t,JR):`https://${s.config.authDomain}/${ZR}`,a={apiKey:t.apiKey,appName:s.name,v:sr},o=eN.get(s.config.apiHost);o&&(a.eid=o);const c=s._getFrameworks();return c.length&&(a.fw=c.join(",")),`${i}?${ir(a).slice(1)}`}async function nN(s){const t=await XR(s),i=an().gapi;return F(i,s,"internal-error"),t.open({where:document.body,url:tN(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$R,dontclear:!0},a=>new Promise(async(o,c)=>{await a.restyle({setHideOnLeave:!1});const h=rn(s,"network-request-failed"),p=an().setTimeout(()=>{c(h)},WR.get());function _(){an().clearTimeout(p),o(a)}a.ping(_).then(_,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sN=500,rN=600,aN="_blank",lN="http://localhost";class dv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oN(s,t,i,a=sN,o=rN){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let p="";const _=Object.assign(Object.assign({},iN),{width:a.toString(),height:o.toString(),top:c,left:h}),m=ht().toLowerCase();i&&(p=n0(m)?aN:i),e0(m)&&(t=t||lN,_.scrollbars="yes");const y=Object.entries(_).reduce((S,[k,L])=>`${S}${k}=${L},`,"");if(Ow(m)&&p!=="_self")return uN(t||"",p),new dv(null);const E=window.open(t||"",p,y);F(E,s,"popup-blocked");try{E.focus()}catch{}return new dv(E)}function uN(s,t){const i=document.createElement("a");i.href=s,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="__/auth/handler",fN="emulator/auth/handler",hN=encodeURIComponent("fac");async function pv(s,t,i,a,o,c){F(s.config.authDomain,s,"auth-domain-config-required"),F(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:a,v:sr,eventId:o};if(t instanceof h0){t.setDefaultLanguage(s.languageCode),h.providerId=t.providerId||"",zf(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,E]of Object.entries({}))h[y]=E}if(t instanceof Ba){const y=t.getScopes().filter(E=>E!=="");y.length>0&&(h.scopes=y.join(","))}s.tenantId&&(h.tid=s.tenantId);const p=h;for(const y of Object.keys(p))p[y]===void 0&&delete p[y];const _=await s._getAppCheckToken(),m=_?`#${hN}=${encodeURIComponent(_)}`:"";return`${dN(s)}?${ir(p).slice(1)}${m}`}function dN({config:s}){return s.emulator?Jh(s,fN):`https://${s.authDomain}/${cN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="webStorageSupport";class pN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=y0,this._completeRedirectFn=HR,this._overrideRedirectResult=UR}async _openPopup(t,i,a,o){var c;In((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await pv(t,i,a,ih(),o);return oN(t,h,id())}async _openRedirect(t,i,a,o){await this._originValidation(t);const c=await pv(t,i,a,ih(),o);return gR(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(In(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await nN(t),a=new BR(t);return i.register("authEvent",o=>(F(o?.authEvent,t,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(Lf,{type:Lf},o=>{var c;const h=(c=o?.[0])===null||c===void 0?void 0:c[Lf];h!==void 0&&i(!!h),Zt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=YR(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return l0()||t0()||ed()}}const _N=pN;var _v="@firebase/auth",mv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vN(s){Xs(new Gi("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=a.options;F(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const _={apiKey:h,authDomain:p,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:o0(s)},m=new Uw(a,o,c,_);return Yw(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),Xs(new Gi("auth-internal",t=>{const i=$i(t.getProvider("auth").getImmediate());return(a=>new mN(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),hi(_v,mv,gN(s)),hi(_v,mv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=5*60,EN=Av("authIdTokenMaxAge")||yN;let gv=null;const SN=s=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>EN)return;const o=i?.token;gv!==o&&(gv=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function bN(s=xv()){const t=dh(s,"auth");if(t.isInitialized())return t.getImmediate();const i=Gw(s,{popupRedirectResolver:_N,persistence:[wR,pR,y0]}),a=Av("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(a,location.origin);if(location.origin===c.origin){const h=SN(c.toString());uR(i,h,()=>h(i.currentUser)),oR(i,p=>h(p))}}const o=Tv("auth");return o&&Fw(i,`http://${o}`),i}function TN(){var s,t;return(t=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&t!==void 0?t:document}Lw({loadJS(s){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",s),a.onload=t,a.onerror=o=>{const c=rn("internal-error");c.customData=o,i(c)},a.type="text/javascript",a.charset="UTF-8",TN().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vN("Browser");const CN={apiKey:"AIzaSyA3C7hTOt4HGr9WZwmsuC3l0tVjU9v17Uo",authDomain:"test-698b1.firebaseapp.com",projectId:"test-698b1",storageBucket:"test-698b1.firebasestorage.app",messagingSenderId:"952752023990",appId:"1:952752023990:web:77fbc9ca1e72ef3c4b7917"},w0=Mv(CN),ho=sw(w0),$o=bN(w0),eu=ct.createContext();function AN({children:s}){const[t,i]=ct.useState(null),[a,o]=ct.useState(!0);return ct.useEffect(()=>{const c=cR($o,h=>{i(h),o(!1)});return()=>c()},[]),J.jsx(eu.Provider,{value:{currentUser:t},children:!a&&s})}function wN(){const[s,t]=ct.useState(""),{currentUser:i}=ct.useContext(eu),a=async o=>{if(o.preventDefault(),!i){alert("You must be logged in to add items.");return}try{await FA(lo(ho,"items"),{name:s,createdAt:Date.now(),createdBy:{uid:i.uid,email:i.email}}),t("")}catch(c){console.error("Error adding item:",c)}};return J.jsxs("form",{onSubmit:a,className:"p-4 flex",children:[J.jsx("input",{type:"text",placeholder:"Enter item name",value:s,onChange:o=>t(o.target.value),className:"border p-2 flex-grow mr-2"}),J.jsx("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded",children:"Add"})]})}function RN(){const[s,t]=ct.useState([]),{currentUser:i}=ct.useContext(eu);ct.useEffect(()=>{const c=lo(ho,"items"),h=WA(c,p=>{const _=p.val();if(_){const m=Object.entries(_).map(([y,E])=>({id:y,...E}));t(m)}else t([])});return()=>h()},[]);const a=async c=>{await QA(lo(ho,`items/${c}`))},o=async c=>{if(!i){alert("You must be logged in to edit items.");return}const h=prompt("Enter new name:");h&&await KA(lo(ho,`items/${c}`),{name:h,editedAt:Date.now(),editedBy:{uid:i.uid,email:i.email}})};return J.jsx("ul",{className:"p-4 space-y-2",children:s.map(c=>J.jsxs("li",{className:"border p-2 space-y-1",children:[J.jsxs("div",{className:"flex justify-between items-center",children:[J.jsx("span",{className:"font-semibold",children:c.name}),J.jsxs("div",{className:"space-x-2",children:[J.jsx("button",{onClick:()=>o(c.id),className:"text-yellow-600",children:"Edit"}),J.jsx("button",{onClick:()=>a(c.id),className:"text-red-600",children:"Delete"})]})]}),J.jsxs("div",{className:"text-sm text-gray-600",children:[c.createdBy&&J.jsxs("p",{children:["Added by: ",J.jsx("strong",{children:c.createdBy.email})]}),c.editedBy&&J.jsxs("p",{children:["Edited by: ",J.jsx("strong",{children:c.editedBy.email})]})]})]},c.id))})}function NN(){const[s,t]=ct.useState(""),[i,a]=ct.useState(""),o=async c=>{c.preventDefault();try{await aR($o,s,i),alert("User created!"),t(""),a("")}catch(h){console.error(h),alert(h.message)}};return J.jsxs("form",{onSubmit:o,className:"p-4 space-y-2",children:[J.jsx("input",{type:"email",placeholder:"Email",value:s,className:"border p-2 w-full",onChange:c=>t(c.target.value)}),J.jsx("input",{type:"password",placeholder:"Password",value:i,className:"border p-2 w-full",onChange:c=>a(c.target.value)}),J.jsx("button",{type:"submit",className:"bg-green-500 text-white p-2 rounded w-full",children:"Sign Up"})]})}function ON(){const[s,t]=ct.useState(""),[i,a]=ct.useState(""),o=async c=>{c.preventDefault();try{await lR($o,s,i),alert("Logged in!"),t(""),a("")}catch(h){console.error(h),alert(h.message)}};return J.jsxs("form",{onSubmit:o,className:"p-4 space-y-2",children:[J.jsx("input",{type:"email",placeholder:"Email",value:s,className:"border p-2 w-full",onChange:c=>t(c.target.value)}),J.jsx("input",{type:"password",placeholder:"Password",value:i,className:"border p-2 w-full",onChange:c=>a(c.target.value)}),J.jsx("button",{type:"submit",className:"bg-blue-500 text-white p-2 rounded w-full",children:"Log In"})]})}function DN(){const s=async()=>{try{await fR($o),alert("Logged out!")}catch(t){console.error(t),alert(t.message)}};return J.jsx("button",{onClick:s,className:"bg-red-500 text-white p-2 rounded",children:"Log Out"})}function IN(){const{currentUser:s}=ct.useContext(eu);return J.jsxs("div",{className:"max-w-xl mx-auto my-10",children:[J.jsx("h1",{className:"text-2xl font-bold mb-4 text-center",children:"Firebase Auth + Database"}),s?J.jsxs(J.Fragment,{children:[J.jsxs("p",{className:"text-center mb-4",children:["Logged in as ",s.email]}),J.jsx(DN,{}),J.jsx(wN,{}),J.jsx(RN,{})]}):J.jsxs(J.Fragment,{children:[J.jsx(NN,{}),J.jsx(ON,{})]})]})}ab.createRoot(document.getElementById("root")).render(J.jsx(JS.StrictMode,{children:J.jsx(AN,{children:J.jsx(IN,{})})}));
