const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BwfjbUuX.js","assets/CreatePost-r9UJfVsC.js","assets/client-DmLBYohH.js","assets/FacebookEmbed-3BF4vk1v.js","assets/face-slightly-smiling-JUtowrQp.js","assets/PostCard-i4lo2Yp-.js","assets/sparkles-B4wZvvyF.js","assets/Profile-BDDVNr5U.js","assets/Messenger-DTzKS3X-.js","assets/Search-DseTmqZK.js","assets/Hashtag-Qinr34kJ.js","assets/Settings-BhGFCBEt.js","assets/PostPage-C88bJ6i_.js","assets/CreatePostPage-BPaOi-99.js"])))=>i.map(i=>d[i]);
function bk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Dk(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f0={exports:{}},ah={},p0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=Symbol.for("react.element"),Ok=Symbol.for("react.portal"),Lk=Symbol.for("react.fragment"),Mk=Symbol.for("react.strict_mode"),Vk=Symbol.for("react.profiler"),Fk=Symbol.for("react.provider"),Uk=Symbol.for("react.context"),jk=Symbol.for("react.forward_ref"),Bk=Symbol.for("react.suspense"),zk=Symbol.for("react.memo"),$k=Symbol.for("react.lazy"),qy=Symbol.iterator;function Wk(t){return t===null||typeof t!="object"?null:(t=qy&&t[qy]||t["@@iterator"],typeof t=="function"?t:null)}var m0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g0=Object.assign,_0={};function co(t,e,n){this.props=t,this.context=e,this.refs=_0,this.updater=n||m0}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function y0(){}y0.prototype=co.prototype;function _m(t,e,n){this.props=t,this.context=e,this.refs=_0,this.updater=n||m0}var ym=_m.prototype=new y0;ym.constructor=_m;g0(ym,co.prototype);ym.isPureReactComponent=!0;var Hy=Array.isArray,v0=Object.prototype.hasOwnProperty,vm={current:null},w0={key:!0,ref:!0,__self:!0,__source:!0};function E0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)v0.call(e,r)&&!w0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yl,type:t,key:s,ref:o,props:i,_owner:vm.current}}function qk(t,e){return{$$typeof:yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wm(t){return typeof t=="object"&&t!==null&&t.$$typeof===yl}function Hk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gy=/\/+/g;function Md(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hk(""+t.key):e.toString(36)}function Ou(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yl:case Ok:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Md(o,0):r,Hy(i)?(n="",t!=null&&(n=t.replace(Gy,"$&/")+"/"),Ou(i,e,n,"",function(c){return c})):i!=null&&(wm(i)&&(i=qk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Md(s,a);o+=Ou(s,e,n,u,i)}else if(u=Wk(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Md(s,a++),o+=Ou(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function au(t,e,n){if(t==null)return t;var r=[],i=0;return Ou(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Gk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},Lu={transition:null},Kk={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Lu,ReactCurrentOwner:vm};function T0(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:au,forEach:function(t,e,n){au(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return au(t,function(){e++}),e},toArray:function(t){return au(t,function(e){return e})||[]},only:function(t){if(!wm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=co;ie.Fragment=Lk;ie.Profiler=Vk;ie.PureComponent=_m;ie.StrictMode=Mk;ie.Suspense=Bk;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kk;ie.act=T0;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=g0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)v0.call(e,u)&&!w0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:yl,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:Uk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fk,_context:t},t.Consumer=t};ie.createElement=E0;ie.createFactory=function(t){var e=E0.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:jk,render:t}};ie.isValidElement=wm;ie.lazy=function(t){return{$$typeof:$k,_payload:{_status:-1,_result:t},_init:Gk}};ie.memo=function(t,e){return{$$typeof:zk,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Lu.transition;Lu.transition={};try{t()}finally{Lu.transition=e}};ie.unstable_act=T0;ie.useCallback=function(t,e){return kt.current.useCallback(t,e)};ie.useContext=function(t){return kt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return kt.current.useEffect(t,e)};ie.useId=function(){return kt.current.useId()};ie.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return kt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};ie.useRef=function(t){return kt.current.useRef(t)};ie.useState=function(t){return kt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return kt.current.useTransition()};ie.version="18.3.1";p0.exports=ie;var O=p0.exports;const I0=Dk(O),Qk=bk({__proto__:null,default:I0},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yk=O,Xk=Symbol.for("react.element"),Jk=Symbol.for("react.fragment"),Zk=Object.prototype.hasOwnProperty,eP=Yk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tP={key:!0,ref:!0,__self:!0,__source:!0};function C0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Zk.call(e,r)&&!tP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Xk,type:t,key:s,ref:o,props:i,_owner:eP.current}}ah.Fragment=Jk;ah.jsx=C0;ah.jsxs=C0;f0.exports=ah;var I=f0.exports,xf={},S0={exports:{}},Gt={},R0={exports:{}},A0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,X){var ee=$.length;$.push(X);e:for(;0<ee;){var ke=ee-1>>>1,ge=$[ke];if(0<i(ge,X))$[ke]=X,$[ee]=ge,ee=ke;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],ee=$.pop();if(ee!==X){$[0]=ee;e:for(var ke=0,ge=$.length,Ue=ge>>>1;ke<Ue;){var Bn=2*(ke+1)-1,zn=$[Bn],$n=Bn+1,Wn=$[$n];if(0>i(zn,ee))$n<ge&&0>i(Wn,zn)?($[ke]=Wn,$[$n]=ee,ke=$n):($[ke]=zn,$[Bn]=ee,ke=Bn);else if($n<ge&&0>i(Wn,ee))$[ke]=Wn,$[$n]=ee,ke=$n;else break e}}return X}function i($,X){var ee=$.sortIndex-X.sortIndex;return ee!==0?ee:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,y=!1,T=!1,k=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=$)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function D($){if(k=!1,A($),!T)if(n(u)!==null)T=!0,_r(F);else{var X=n(c);X!==null&&Tn(D,X.startTime-$)}}function F($,X){T=!1,k&&(k=!1,C(g),g=-1),y=!0;var ee=m;try{for(A(X),f=n(u);f!==null&&(!(f.expirationTime>X)||$&&!P());){var ke=f.callback;if(typeof ke=="function"){f.callback=null,m=f.priorityLevel;var ge=ke(f.expirationTime<=X);X=t.unstable_now(),typeof ge=="function"?f.callback=ge:f===n(u)&&r(u),A(X)}else r(u);f=n(u)}if(f!==null)var Ue=!0;else{var Bn=n(c);Bn!==null&&Tn(D,Bn.startTime-X),Ue=!1}return Ue}finally{f=null,m=ee,y=!1}}var U=!1,v=null,g=-1,E=5,S=-1;function P(){return!(t.unstable_now()-S<E)}function N(){if(v!==null){var $=t.unstable_now();S=$;var X=!0;try{X=v(!0,$)}finally{X?R():(U=!1,v=null)}}else U=!1}var R;if(typeof w=="function")R=function(){w(N)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,Nt=Ae.port2;Ae.port1.onmessage=N,R=function(){Nt.postMessage(null)}}else R=function(){x(N,0)};function _r($){v=$,U||(U=!0,R())}function Tn($,X){g=x(function(){$(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){T||y||(T=!0,_r(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var ee=m;m=X;try{return $()}finally{m=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ee=m;m=$;try{return X()}finally{m=ee}},t.unstable_scheduleCallback=function($,X,ee){var ke=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ke+ee:ke):ee=ke,$){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ee+ge,$={id:h++,callback:X,priorityLevel:$,startTime:ee,expirationTime:ge,sortIndex:-1},ee>ke?($.sortIndex=ee,e(c,$),n(u)===null&&$===n(c)&&(k?(C(g),g=-1):k=!0,Tn(D,ee-ke))):($.sortIndex=ge,e(u,$),T||y||(T=!0,_r(F))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var X=m;return function(){var ee=m;m=X;try{return $.apply(this,arguments)}finally{m=ee}}}})(A0);R0.exports=A0;var nP=R0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rP=O,qt=nP;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k0=new Set,xa={};function Ji(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(xa[t]=e,t=0;t<e.length;t++)k0.add(e[t])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bf=Object.prototype.hasOwnProperty,iP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ky={},Qy={};function sP(t){return bf.call(Qy,t)?!0:bf.call(Ky,t)?!1:iP.test(t)?Qy[t]=!0:(Ky[t]=!0,!1)}function oP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aP(t,e,n,r){if(e===null||typeof e>"u"||oP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new Pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new Pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new Pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new Pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new Pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new Pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new Pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new Pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new Pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Em=/[\-:]([a-z])/g;function Tm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Em,Tm);lt[e]=new Pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Em,Tm);lt[e]=new Pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Em,Tm);lt[e]=new Pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new Pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Im(t,e,n,r){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aP(e,n,i,r)&&(n=null),r||i===null?sP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=rP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lu=Symbol.for("react.element"),gs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),Cm=Symbol.for("react.strict_mode"),Df=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),Sm=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),Lf=Symbol.for("react.suspense_list"),Rm=Symbol.for("react.memo"),Ir=Symbol.for("react.lazy"),x0=Symbol.for("react.offscreen"),Yy=Symbol.iterator;function Bo(t){return t===null||typeof t!="object"?null:(t=Yy&&t[Yy]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Vd;function ea(t){if(Vd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vd=e&&e[1]||""}return`
`+Vd+t}var Fd=!1;function Ud(t,e){if(!t||Fd)return"";Fd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Fd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ea(t):""}function lP(t){switch(t.tag){case 5:return ea(t.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return t=Ud(t.type,!1),t;case 11:return t=Ud(t.type.render,!1),t;case 1:return t=Ud(t.type,!0),t;default:return""}}function Mf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case gs:return"Portal";case Df:return"Profiler";case Cm:return"StrictMode";case Of:return"Suspense";case Lf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N0:return(t.displayName||"Context")+".Consumer";case P0:return(t._context.displayName||"Context")+".Provider";case Sm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rm:return e=t.displayName||null,e!==null?e:Mf(t.type)||"Memo";case Ir:e=t._payload,t=t._init;try{return Mf(t(e))}catch{}}return null}function uP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mf(e);case 8:return e===Cm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function b0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cP(t){var e=b0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uu(t){t._valueTracker||(t._valueTracker=cP(t))}function D0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=b0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function rc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vf(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function O0(t,e){e=e.checked,e!=null&&Im(t,"checked",e,!1)}function Ff(t,e){O0(t,e);var n=Jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uf(t,e.type,Jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uf(t,e,n){(e!=="number"||rc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ta=Array.isArray;function Ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(ta(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jr(n)}}function L0(t,e){var n=Jr(e.value),r=Jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ev(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function M0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?M0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cu,V0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cu=cu||document.createElement("div"),cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hP=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(t){hP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ha[e]=ha[t]})});function F0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ha.hasOwnProperty(t)&&ha[t]?(""+e).trim():e+"px"}function U0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=F0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dP=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zf(t,e){if(e){if(dP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function $f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wf=null;function Am(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qf=null,Ns=null,xs=null;function tv(t){if(t=El(t)){if(typeof qf!="function")throw Error(j(280));var e=t.stateNode;e&&(e=dh(e),qf(t.stateNode,t.type,e))}}function j0(t){Ns?xs?xs.push(t):xs=[t]:Ns=t}function B0(){if(Ns){var t=Ns,e=xs;if(xs=Ns=null,tv(t),e)for(t=0;t<e.length;t++)tv(e[t])}}function z0(t,e){return t(e)}function $0(){}var jd=!1;function W0(t,e,n){if(jd)return t(e,n);jd=!0;try{return z0(t,e,n)}finally{jd=!1,(Ns!==null||xs!==null)&&($0(),B0())}}function Da(t,e){var n=t.stateNode;if(n===null)return null;var r=dh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Hf=!1;if(sr)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){Hf=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{Hf=!1}function fP(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var da=!1,ic=null,sc=!1,Gf=null,pP={onError:function(t){da=!0,ic=t}};function mP(t,e,n,r,i,s,o,a,u){da=!1,ic=null,fP.apply(pP,arguments)}function gP(t,e,n,r,i,s,o,a,u){if(mP.apply(this,arguments),da){if(da){var c=ic;da=!1,ic=null}else throw Error(j(198));sc||(sc=!0,Gf=c)}}function Zi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function q0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nv(t){if(Zi(t)!==t)throw Error(j(188))}function _P(t){var e=t.alternate;if(!e){if(e=Zi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return nv(i),t;if(s===r)return nv(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function H0(t){return t=_P(t),t!==null?G0(t):null}function G0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=G0(t);if(e!==null)return e;t=t.sibling}return null}var K0=qt.unstable_scheduleCallback,rv=qt.unstable_cancelCallback,yP=qt.unstable_shouldYield,vP=qt.unstable_requestPaint,Be=qt.unstable_now,wP=qt.unstable_getCurrentPriorityLevel,km=qt.unstable_ImmediatePriority,Q0=qt.unstable_UserBlockingPriority,oc=qt.unstable_NormalPriority,EP=qt.unstable_LowPriority,Y0=qt.unstable_IdlePriority,lh=null,Pn=null;function TP(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(lh,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:SP,IP=Math.log,CP=Math.LN2;function SP(t){return t>>>=0,t===0?32:31-(IP(t)/CP|0)|0}var hu=64,du=4194304;function na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ac(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=na(a):(s&=o,s!==0&&(r=na(s)))}else o=n&~i,o!==0?r=na(o):s!==0&&(r=na(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function RP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=RP(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function X0(){var t=hu;return hu<<=1,!(hu&4194240)&&(hu=64),t}function Bd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function kP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function J0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Z0,Nm,eT,tT,nT,Qf=!1,fu=[],Vr=null,Fr=null,Ur=null,Oa=new Map,La=new Map,Sr=[],PP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iv(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(e.pointerId)}}function $o(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=El(e),e!==null&&Nm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NP(t,e,n,r,i){switch(e){case"focusin":return Vr=$o(Vr,t,e,n,r,i),!0;case"dragenter":return Fr=$o(Fr,t,e,n,r,i),!0;case"mouseover":return Ur=$o(Ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oa.set(s,$o(Oa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,La.set(s,$o(La.get(s)||null,t,e,n,r,i)),!0}return!1}function rT(t){var e=Pi(t.target);if(e!==null){var n=Zi(e);if(n!==null){if(e=n.tag,e===13){if(e=q0(n),e!==null){t.blockedOn=e,nT(t.priority,function(){eT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wf=r,n.target.dispatchEvent(r),Wf=null}else return e=El(n),e!==null&&Nm(e),t.blockedOn=n,!1;e.shift()}return!0}function sv(t,e,n){Mu(t)&&n.delete(e)}function xP(){Qf=!1,Vr!==null&&Mu(Vr)&&(Vr=null),Fr!==null&&Mu(Fr)&&(Fr=null),Ur!==null&&Mu(Ur)&&(Ur=null),Oa.forEach(sv),La.forEach(sv)}function Wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Qf||(Qf=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,xP)))}function Ma(t){function e(i){return Wo(i,t)}if(0<fu.length){Wo(fu[0],t);for(var n=1;n<fu.length;n++){var r=fu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vr!==null&&Wo(Vr,t),Fr!==null&&Wo(Fr,t),Ur!==null&&Wo(Ur,t),Oa.forEach(e),La.forEach(e),n=0;n<Sr.length;n++)r=Sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)rT(n),n.blockedOn===null&&Sr.shift()}var bs=pr.ReactCurrentBatchConfig,lc=!0;function bP(t,e,n,r){var i=pe,s=bs.transition;bs.transition=null;try{pe=1,xm(t,e,n,r)}finally{pe=i,bs.transition=s}}function DP(t,e,n,r){var i=pe,s=bs.transition;bs.transition=null;try{pe=4,xm(t,e,n,r)}finally{pe=i,bs.transition=s}}function xm(t,e,n,r){if(lc){var i=Yf(t,e,n,r);if(i===null)Xd(t,e,r,uc,n),iv(t,r);else if(NP(i,t,e,n,r))r.stopPropagation();else if(iv(t,r),e&4&&-1<PP.indexOf(t)){for(;i!==null;){var s=El(i);if(s!==null&&Z0(s),s=Yf(t,e,n,r),s===null&&Xd(t,e,r,uc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xd(t,e,r,null,n)}}var uc=null;function Yf(t,e,n,r){if(uc=null,t=Am(r),t=Pi(t),t!==null)if(e=Zi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=q0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uc=t,null}function iT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wP()){case km:return 1;case Q0:return 4;case oc:case EP:return 16;case Y0:return 536870912;default:return 16}default:return 16}}var Nr=null,bm=null,Vu=null;function sT(){if(Vu)return Vu;var t,e=bm,n=e.length,r,i="value"in Nr?Nr.value:Nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Vu=i.slice(t,1<r?1-r:void 0)}function Fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pu(){return!0}function ov(){return!1}function Kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pu:ov,this.isPropagationStopped=ov,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pu)},persist:function(){},isPersistent:pu}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dm=Kt(ho),wl=De({},ho,{view:0,detail:0}),OP=Kt(wl),zd,$d,qo,uh=De({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Om,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qo&&(qo&&t.type==="mousemove"?(zd=t.screenX-qo.screenX,$d=t.screenY-qo.screenY):$d=zd=0,qo=t),zd)},movementY:function(t){return"movementY"in t?t.movementY:$d}}),av=Kt(uh),LP=De({},uh,{dataTransfer:0}),MP=Kt(LP),VP=De({},wl,{relatedTarget:0}),Wd=Kt(VP),FP=De({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),UP=Kt(FP),jP=De({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BP=Kt(jP),zP=De({},ho,{data:0}),lv=Kt(zP),$P={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qP[t])?!!e[t]:!1}function Om(){return HP}var GP=De({},wl,{key:function(t){if(t.key){var e=$P[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Om,charCode:function(t){return t.type==="keypress"?Fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KP=Kt(GP),QP=De({},uh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uv=Kt(QP),YP=De({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Om}),XP=Kt(YP),JP=De({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZP=Kt(JP),e1=De({},uh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),t1=Kt(e1),n1=[9,13,27,32],Lm=sr&&"CompositionEvent"in window,fa=null;sr&&"documentMode"in document&&(fa=document.documentMode);var r1=sr&&"TextEvent"in window&&!fa,oT=sr&&(!Lm||fa&&8<fa&&11>=fa),cv=" ",hv=!1;function aT(t,e){switch(t){case"keyup":return n1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function i1(t,e){switch(t){case"compositionend":return lT(e);case"keypress":return e.which!==32?null:(hv=!0,cv);case"textInput":return t=e.data,t===cv&&hv?null:t;default:return null}}function s1(t,e){if(ys)return t==="compositionend"||!Lm&&aT(t,e)?(t=sT(),Vu=bm=Nr=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return oT&&e.locale!=="ko"?null:e.data;default:return null}}var o1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!o1[t.type]:e==="textarea"}function uT(t,e,n,r){j0(r),e=cc(e,"onChange"),0<e.length&&(n=new Dm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var pa=null,Va=null;function a1(t){wT(t,0)}function ch(t){var e=Es(t);if(D0(e))return t}function l1(t,e){if(t==="change")return e}var cT=!1;if(sr){var qd;if(sr){var Hd="oninput"in document;if(!Hd){var fv=document.createElement("div");fv.setAttribute("oninput","return;"),Hd=typeof fv.oninput=="function"}qd=Hd}else qd=!1;cT=qd&&(!document.documentMode||9<document.documentMode)}function pv(){pa&&(pa.detachEvent("onpropertychange",hT),Va=pa=null)}function hT(t){if(t.propertyName==="value"&&ch(Va)){var e=[];uT(e,Va,t,Am(t)),W0(a1,e)}}function u1(t,e,n){t==="focusin"?(pv(),pa=e,Va=n,pa.attachEvent("onpropertychange",hT)):t==="focusout"&&pv()}function c1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ch(Va)}function h1(t,e){if(t==="click")return ch(e)}function d1(t,e){if(t==="input"||t==="change")return ch(e)}function f1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:f1;function Fa(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bf.call(e,i)||!yn(t[i],e[i]))return!1}return!0}function mv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gv(t,e){var n=mv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mv(n)}}function dT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fT(){for(var t=window,e=rc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rc(t.document)}return e}function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function p1(t){var e=fT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dT(n.ownerDocument.documentElement,n)){if(r!==null&&Mm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gv(n,s);var o=gv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var m1=sr&&"documentMode"in document&&11>=document.documentMode,vs=null,Xf=null,ma=null,Jf=!1;function _v(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jf||vs==null||vs!==rc(r)||(r=vs,"selectionStart"in r&&Mm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ma&&Fa(ma,r)||(ma=r,r=cc(Xf,"onSelect"),0<r.length&&(e=new Dm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vs)))}function mu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:mu("Animation","AnimationEnd"),animationiteration:mu("Animation","AnimationIteration"),animationstart:mu("Animation","AnimationStart"),transitionend:mu("Transition","TransitionEnd")},Gd={},pT={};sr&&(pT=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function hh(t){if(Gd[t])return Gd[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pT)return Gd[t]=e[n];return t}var mT=hh("animationend"),gT=hh("animationiteration"),_T=hh("animationstart"),yT=hh("transitionend"),vT=new Map,yv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(t,e){vT.set(t,e),Ji(e,[t])}for(var Kd=0;Kd<yv.length;Kd++){var Qd=yv[Kd],g1=Qd.toLowerCase(),_1=Qd[0].toUpperCase()+Qd.slice(1);ci(g1,"on"+_1)}ci(mT,"onAnimationEnd");ci(gT,"onAnimationIteration");ci(_T,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(yT,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function vv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gP(r,e,void 0,t),t.currentTarget=null}function wT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;vv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;vv(i,a,c),s=u}}}if(sc)throw t=Gf,sc=!1,Gf=null,t}function Te(t,e){var n=e[rp];n===void 0&&(n=e[rp]=new Set);var r=t+"__bubble";n.has(r)||(ET(e,t,2,!1),n.add(r))}function Yd(t,e,n){var r=0;e&&(r|=4),ET(n,t,r,e)}var gu="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[gu]){t[gu]=!0,k0.forEach(function(n){n!=="selectionchange"&&(y1.has(n)||Yd(n,!1,t),Yd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gu]||(e[gu]=!0,Yd("selectionchange",!1,e))}}function ET(t,e,n,r){switch(iT(e)){case 1:var i=bP;break;case 4:i=DP;break;default:i=xm}n=i.bind(null,e,n,t),i=void 0,!Hf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}W0(function(){var c=s,h=Am(n),f=[];e:{var m=vT.get(t);if(m!==void 0){var y=Dm,T=t;switch(t){case"keypress":if(Fu(n)===0)break e;case"keydown":case"keyup":y=KP;break;case"focusin":T="focus",y=Wd;break;case"focusout":T="blur",y=Wd;break;case"beforeblur":case"afterblur":y=Wd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=av;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=MP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=XP;break;case mT:case gT:case _T:y=UP;break;case yT:y=ZP;break;case"scroll":y=OP;break;case"wheel":y=t1;break;case"copy":case"cut":case"paste":y=BP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=uv}var k=(e&4)!==0,x=!k&&t==="scroll",C=k?m!==null?m+"Capture":null:m;k=[];for(var w=c,A;w!==null;){A=w;var D=A.stateNode;if(A.tag===5&&D!==null&&(A=D,C!==null&&(D=Da(w,C),D!=null&&k.push(ja(w,D,A)))),x)break;w=w.return}0<k.length&&(m=new y(m,T,null,n,h),f.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Wf&&(T=n.relatedTarget||n.fromElement)&&(Pi(T)||T[or]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(T=n.relatedTarget||n.toElement,y=c,T=T?Pi(T):null,T!==null&&(x=Zi(T),T!==x||T.tag!==5&&T.tag!==6)&&(T=null)):(y=null,T=c),y!==T)){if(k=av,D="onMouseLeave",C="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(k=uv,D="onPointerLeave",C="onPointerEnter",w="pointer"),x=y==null?m:Es(y),A=T==null?m:Es(T),m=new k(D,w+"leave",y,n,h),m.target=x,m.relatedTarget=A,D=null,Pi(h)===c&&(k=new k(C,w+"enter",T,n,h),k.target=A,k.relatedTarget=x,D=k),x=D,y&&T)t:{for(k=y,C=T,w=0,A=k;A;A=cs(A))w++;for(A=0,D=C;D;D=cs(D))A++;for(;0<w-A;)k=cs(k),w--;for(;0<A-w;)C=cs(C),A--;for(;w--;){if(k===C||C!==null&&k===C.alternate)break t;k=cs(k),C=cs(C)}k=null}else k=null;y!==null&&wv(f,m,y,k,!1),T!==null&&x!==null&&wv(f,x,T,k,!0)}}e:{if(m=c?Es(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var F=l1;else if(dv(m))if(cT)F=d1;else{F=c1;var U=u1}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=h1);if(F&&(F=F(t,c))){uT(f,F,n,h);break e}U&&U(t,m,c),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Uf(m,"number",m.value)}switch(U=c?Es(c):window,t){case"focusin":(dv(U)||U.contentEditable==="true")&&(vs=U,Xf=c,ma=null);break;case"focusout":ma=Xf=vs=null;break;case"mousedown":Jf=!0;break;case"contextmenu":case"mouseup":case"dragend":Jf=!1,_v(f,n,h);break;case"selectionchange":if(m1)break;case"keydown":case"keyup":_v(f,n,h)}var v;if(Lm)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ys?aT(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(oT&&n.locale!=="ko"&&(ys||g!=="onCompositionStart"?g==="onCompositionEnd"&&ys&&(v=sT()):(Nr=h,bm="value"in Nr?Nr.value:Nr.textContent,ys=!0)),U=cc(c,g),0<U.length&&(g=new lv(g,t,null,n,h),f.push({event:g,listeners:U}),v?g.data=v:(v=lT(n),v!==null&&(g.data=v)))),(v=r1?i1(t,n):s1(t,n))&&(c=cc(c,"onBeforeInput"),0<c.length&&(h=new lv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=v))}wT(f,e)})}function ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Da(t,n),s!=null&&r.unshift(ja(t,s,i)),s=Da(t,e),s!=null&&r.push(ja(t,s,i))),t=t.return}return r}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Da(n,s),u!=null&&o.unshift(ja(n,u,a))):i||(u=Da(n,s),u!=null&&o.push(ja(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var v1=/\r\n?/g,w1=/\u0000|\uFFFD/g;function Ev(t){return(typeof t=="string"?t:""+t).replace(v1,`
`).replace(w1,"")}function _u(t,e,n){if(e=Ev(e),Ev(t)!==e&&n)throw Error(j(425))}function hc(){}var Zf=null,ep=null;function tp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var np=typeof setTimeout=="function"?setTimeout:void 0,E1=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,T1=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(t){return Tv.resolve(null).then(t).catch(I1)}:np;function I1(t){setTimeout(function(){throw t})}function Jd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ma(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ma(e)}function jr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Iv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),Rn="__reactFiber$"+fo,Ba="__reactProps$"+fo,or="__reactContainer$"+fo,rp="__reactEvents$"+fo,C1="__reactListeners$"+fo,S1="__reactHandles$"+fo;function Pi(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[or]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Iv(t);t!==null;){if(n=t[Rn])return n;t=Iv(t)}return e}t=n,n=t.parentNode}return null}function El(t){return t=t[Rn]||t[or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function dh(t){return t[Ba]||null}var ip=[],Ts=-1;function hi(t){return{current:t}}function Ce(t){0>Ts||(t.current=ip[Ts],ip[Ts]=null,Ts--)}function we(t,e){Ts++,ip[Ts]=t.current,t.current=e}var Zr={},wt=hi(Zr),Lt=hi(!1),Fi=Zr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return Zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(t){return t=t.childContextTypes,t!=null}function dc(){Ce(Lt),Ce(wt)}function Cv(t,e,n){if(wt.current!==Zr)throw Error(j(168));we(wt,e),we(Lt,n)}function TT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,uP(t)||"Unknown",i));return De({},n,r)}function fc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,Fi=wt.current,we(wt,t),we(Lt,Lt.current),!0}function Sv(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=TT(t,e,Fi),r.__reactInternalMemoizedMergedChildContext=t,Ce(Lt),Ce(wt),we(wt,t)):Ce(Lt),we(Lt,n)}var Kn=null,fh=!1,Zd=!1;function IT(t){Kn===null?Kn=[t]:Kn.push(t)}function R1(t){fh=!0,IT(t)}function di(){if(!Zd&&Kn!==null){Zd=!0;var t=0,e=pe;try{var n=Kn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kn=null,fh=!1}catch(i){throw Kn!==null&&(Kn=Kn.slice(t+1)),K0(km,di),i}finally{pe=e,Zd=!1}}return null}var Is=[],Cs=0,pc=null,mc=0,Qt=[],Yt=0,Ui=null,Yn=1,Xn="";function Si(t,e){Is[Cs++]=mc,Is[Cs++]=pc,pc=t,mc=e}function CT(t,e,n){Qt[Yt++]=Yn,Qt[Yt++]=Xn,Qt[Yt++]=Ui,Ui=t;var r=Yn;t=Xn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yn=1<<32-pn(e)+i|n<<i|r,Xn=s+t}else Yn=1<<s|n<<i|r,Xn=t}function Vm(t){t.return!==null&&(Si(t,1),CT(t,1,0))}function Fm(t){for(;t===pc;)pc=Is[--Cs],Is[Cs]=null,mc=Is[--Cs],Is[Cs]=null;for(;t===Ui;)Ui=Qt[--Yt],Qt[Yt]=null,Xn=Qt[--Yt],Qt[Yt]=null,Yn=Qt[--Yt],Qt[Yt]=null}var Wt=null,zt=null,Re=!1,un=null;function ST(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,zt=jr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ui!==null?{id:Yn,overflow:Xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,zt=null,!0):!1;default:return!1}}function sp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function op(t){if(Re){var e=zt;if(e){var n=e;if(!Rv(t,e)){if(sp(t))throw Error(j(418));e=jr(n.nextSibling);var r=Wt;e&&Rv(t,e)?ST(r,n):(t.flags=t.flags&-4097|2,Re=!1,Wt=t)}}else{if(sp(t))throw Error(j(418));t.flags=t.flags&-4097|2,Re=!1,Wt=t}}}function Av(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function yu(t){if(t!==Wt)return!1;if(!Re)return Av(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tp(t.type,t.memoizedProps)),e&&(e=zt)){if(sp(t))throw RT(),Error(j(418));for(;e;)ST(t,e),e=jr(e.nextSibling)}if(Av(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=jr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Wt?jr(t.stateNode.nextSibling):null;return!0}function RT(){for(var t=zt;t;)t=jr(t.nextSibling)}function zs(){zt=Wt=null,Re=!1}function Um(t){un===null?un=[t]:un.push(t)}var A1=pr.ReactCurrentBatchConfig;function Ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function vu(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kv(t){var e=t._init;return e(t._payload)}function AT(t){function e(C,w){if(t){var A=C.deletions;A===null?(C.deletions=[w],C.flags|=16):A.push(w)}}function n(C,w){if(!t)return null;for(;w!==null;)e(C,w),w=w.sibling;return null}function r(C,w){for(C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function i(C,w){return C=Wr(C,w),C.index=0,C.sibling=null,C}function s(C,w,A){return C.index=A,t?(A=C.alternate,A!==null?(A=A.index,A<w?(C.flags|=2,w):A):(C.flags|=2,w)):(C.flags|=1048576,w)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function a(C,w,A,D){return w===null||w.tag!==6?(w=af(A,C.mode,D),w.return=C,w):(w=i(w,A),w.return=C,w)}function u(C,w,A,D){var F=A.type;return F===_s?h(C,w,A.props.children,D,A.key):w!==null&&(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ir&&kv(F)===w.type)?(D=i(w,A.props),D.ref=Ho(C,w,A),D.return=C,D):(D=qu(A.type,A.key,A.props,null,C.mode,D),D.ref=Ho(C,w,A),D.return=C,D)}function c(C,w,A,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=lf(A,C.mode,D),w.return=C,w):(w=i(w,A.children||[]),w.return=C,w)}function h(C,w,A,D,F){return w===null||w.tag!==7?(w=Li(A,C.mode,D,F),w.return=C,w):(w=i(w,A),w.return=C,w)}function f(C,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=af(""+w,C.mode,A),w.return=C,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case lu:return A=qu(w.type,w.key,w.props,null,C.mode,A),A.ref=Ho(C,null,w),A.return=C,A;case gs:return w=lf(w,C.mode,A),w.return=C,w;case Ir:var D=w._init;return f(C,D(w._payload),A)}if(ta(w)||Bo(w))return w=Li(w,C.mode,A,null),w.return=C,w;vu(C,w)}return null}function m(C,w,A,D){var F=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return F!==null?null:a(C,w,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case lu:return A.key===F?u(C,w,A,D):null;case gs:return A.key===F?c(C,w,A,D):null;case Ir:return F=A._init,m(C,w,F(A._payload),D)}if(ta(A)||Bo(A))return F!==null?null:h(C,w,A,D,null);vu(C,A)}return null}function y(C,w,A,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return C=C.get(A)||null,a(w,C,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case lu:return C=C.get(D.key===null?A:D.key)||null,u(w,C,D,F);case gs:return C=C.get(D.key===null?A:D.key)||null,c(w,C,D,F);case Ir:var U=D._init;return y(C,w,A,U(D._payload),F)}if(ta(D)||Bo(D))return C=C.get(A)||null,h(w,C,D,F,null);vu(w,D)}return null}function T(C,w,A,D){for(var F=null,U=null,v=w,g=w=0,E=null;v!==null&&g<A.length;g++){v.index>g?(E=v,v=null):E=v.sibling;var S=m(C,v,A[g],D);if(S===null){v===null&&(v=E);break}t&&v&&S.alternate===null&&e(C,v),w=s(S,w,g),U===null?F=S:U.sibling=S,U=S,v=E}if(g===A.length)return n(C,v),Re&&Si(C,g),F;if(v===null){for(;g<A.length;g++)v=f(C,A[g],D),v!==null&&(w=s(v,w,g),U===null?F=v:U.sibling=v,U=v);return Re&&Si(C,g),F}for(v=r(C,v);g<A.length;g++)E=y(v,C,g,A[g],D),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?g:E.key),w=s(E,w,g),U===null?F=E:U.sibling=E,U=E);return t&&v.forEach(function(P){return e(C,P)}),Re&&Si(C,g),F}function k(C,w,A,D){var F=Bo(A);if(typeof F!="function")throw Error(j(150));if(A=F.call(A),A==null)throw Error(j(151));for(var U=F=null,v=w,g=w=0,E=null,S=A.next();v!==null&&!S.done;g++,S=A.next()){v.index>g?(E=v,v=null):E=v.sibling;var P=m(C,v,S.value,D);if(P===null){v===null&&(v=E);break}t&&v&&P.alternate===null&&e(C,v),w=s(P,w,g),U===null?F=P:U.sibling=P,U=P,v=E}if(S.done)return n(C,v),Re&&Si(C,g),F;if(v===null){for(;!S.done;g++,S=A.next())S=f(C,S.value,D),S!==null&&(w=s(S,w,g),U===null?F=S:U.sibling=S,U=S);return Re&&Si(C,g),F}for(v=r(C,v);!S.done;g++,S=A.next())S=y(v,C,g,S.value,D),S!==null&&(t&&S.alternate!==null&&v.delete(S.key===null?g:S.key),w=s(S,w,g),U===null?F=S:U.sibling=S,U=S);return t&&v.forEach(function(N){return e(C,N)}),Re&&Si(C,g),F}function x(C,w,A,D){if(typeof A=="object"&&A!==null&&A.type===_s&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case lu:e:{for(var F=A.key,U=w;U!==null;){if(U.key===F){if(F=A.type,F===_s){if(U.tag===7){n(C,U.sibling),w=i(U,A.props.children),w.return=C,C=w;break e}}else if(U.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Ir&&kv(F)===U.type){n(C,U.sibling),w=i(U,A.props),w.ref=Ho(C,U,A),w.return=C,C=w;break e}n(C,U);break}else e(C,U);U=U.sibling}A.type===_s?(w=Li(A.props.children,C.mode,D,A.key),w.return=C,C=w):(D=qu(A.type,A.key,A.props,null,C.mode,D),D.ref=Ho(C,w,A),D.return=C,C=D)}return o(C);case gs:e:{for(U=A.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(C,w.sibling),w=i(w,A.children||[]),w.return=C,C=w;break e}else{n(C,w);break}else e(C,w);w=w.sibling}w=lf(A,C.mode,D),w.return=C,C=w}return o(C);case Ir:return U=A._init,x(C,w,U(A._payload),D)}if(ta(A))return T(C,w,A,D);if(Bo(A))return k(C,w,A,D);vu(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(C,w.sibling),w=i(w,A),w.return=C,C=w):(n(C,w),w=af(A,C.mode,D),w.return=C,C=w),o(C)):n(C,w)}return x}var $s=AT(!0),kT=AT(!1),gc=hi(null),_c=null,Ss=null,jm=null;function Bm(){jm=Ss=_c=null}function zm(t){var e=gc.current;Ce(gc),t._currentValue=e}function ap(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){_c=t,jm=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(jm!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(_c===null)throw Error(j(308));Ss=t,_c.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Ni=null;function $m(t){Ni===null?Ni=[t]:Ni.push(t)}function PT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$m(e)):(n.next=i.next,i.next=n),e.interleaved=n,ar(t,r)}function ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cr=!1;function Wm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function NT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Br(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ar(t,n)}return i=r.interleaved,i===null?(e.next=e,$m(r)):(e.next=i.next,i.next=e),r.interleaved=e,ar(t,n)}function Uu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pm(t,n)}}function Pv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yc(t,e,n,r){var i=t.updateQueue;Cr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,k=a;switch(m=e,y=n,k.tag){case 1:if(T=k.payload,typeof T=="function"){f=T.call(y,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=k.payload,m=typeof T=="function"?T.call(y,f,m):T,m==null)break e;f=De({},f,m);break e;case 2:Cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,u=f):h=h.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Bi|=o,t.lanes=o,t.memoizedState=f}}function Nv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Tl={},Nn=hi(Tl),za=hi(Tl),$a=hi(Tl);function xi(t){if(t===Tl)throw Error(j(174));return t}function qm(t,e){switch(we($a,e),we(za,t),we(Nn,Tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bf(e,t)}Ce(Nn),we(Nn,e)}function Ws(){Ce(Nn),Ce(za),Ce($a)}function xT(t){xi($a.current);var e=xi(Nn.current),n=Bf(e,t.type);e!==n&&(we(za,t),we(Nn,n))}function Hm(t){za.current===t&&(Ce(Nn),Ce(za))}var Pe=hi(0);function vc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ef=[];function Gm(){for(var t=0;t<ef.length;t++)ef[t]._workInProgressVersionPrimary=null;ef.length=0}var ju=pr.ReactCurrentDispatcher,tf=pr.ReactCurrentBatchConfig,ji=0,be=null,qe=null,Je=null,wc=!1,ga=!1,Wa=0,k1=0;function ft(){throw Error(j(321))}function Km(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function Qm(t,e,n,r,i,s){if(ji=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ju.current=t===null||t.memoizedState===null?b1:D1,t=n(r,i),ga){s=0;do{if(ga=!1,Wa=0,25<=s)throw Error(j(301));s+=1,Je=qe=null,e.updateQueue=null,ju.current=O1,t=n(r,i)}while(ga)}if(ju.current=Ec,e=qe!==null&&qe.next!==null,ji=0,Je=qe=be=null,wc=!1,e)throw Error(j(300));return t}function Ym(){var t=Wa!==0;return Wa=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?be.memoizedState=Je=t:Je=Je.next=t,Je}function tn(){if(qe===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Je===null?be.memoizedState:Je.next;if(e!==null)Je=e,qe=t;else{if(t===null)throw Error(j(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Je===null?be.memoizedState=Je=t:Je=Je.next=t}return Je}function qa(t,e){return typeof e=="function"?e(t):e}function nf(t){var e=tn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((ji&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,be.lanes|=h,Bi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,yn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,Bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rf(t){var e=tn(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yn(s,e.memoizedState)||(Ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function bT(){}function DT(t,e){var n=be,r=tn(),i=e(),s=!yn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,Xm(MT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Ha(9,LT.bind(null,n,r,i,e),void 0,null),et===null)throw Error(j(349));ji&30||OT(n,e,i)}return i}function OT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function LT(t,e,n,r){e.value=n,e.getSnapshot=r,VT(e)&&FT(t)}function MT(t,e,n){return n(function(){VT(e)&&FT(t)})}function VT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function FT(t){var e=ar(t,1);e!==null&&mn(e,t,1,-1)}function xv(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},e.queue=t,t=t.dispatch=x1.bind(null,be,t),[e.memoizedState,t]}function Ha(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function UT(){return tn().memoizedState}function Bu(t,e,n,r){var i=Sn();be.flags|=t,i.memoizedState=Ha(1|e,n,void 0,r===void 0?null:r)}function ph(t,e,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&Km(r,o.deps)){i.memoizedState=Ha(e,n,s,r);return}}be.flags|=t,i.memoizedState=Ha(1|e,n,s,r)}function bv(t,e){return Bu(8390656,8,t,e)}function Xm(t,e){return ph(2048,8,t,e)}function jT(t,e){return ph(4,2,t,e)}function BT(t,e){return ph(4,4,t,e)}function zT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $T(t,e,n){return n=n!=null?n.concat([t]):null,ph(4,4,zT.bind(null,e,t),n)}function Jm(){}function WT(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Km(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function qT(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Km(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function HT(t,e,n){return ji&21?(yn(n,e)||(n=X0(),be.lanes|=n,Bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function P1(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=tf.transition;tf.transition={};try{t(!1),e()}finally{pe=n,tf.transition=r}}function GT(){return tn().memoizedState}function N1(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},KT(t))QT(e,n);else if(n=PT(t,e,n,r),n!==null){var i=Rt();mn(n,t,r,i),YT(n,e,r)}}function x1(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(KT(t))QT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,yn(a,o)){var u=e.interleaved;u===null?(i.next=i,$m(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=PT(t,e,i,r),n!==null&&(i=Rt(),mn(n,t,r,i),YT(n,e,r))}}function KT(t){var e=t.alternate;return t===be||e!==null&&e===be}function QT(t,e){ga=wc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function YT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pm(t,n)}}var Ec={readContext:en,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},b1={readContext:en,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:bv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bu(4194308,4,zT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bu(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=N1.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:xv,useDebugValue:Jm,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=xv(!1),e=t[0];return t=P1.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=Sn();if(Re){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),et===null)throw Error(j(349));ji&30||OT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,bv(MT.bind(null,r,s,t),[t]),r.flags|=2048,Ha(9,LT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=et.identifierPrefix;if(Re){var n=Xn,r=Yn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=k1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},D1={readContext:en,useCallback:WT,useContext:en,useEffect:Xm,useImperativeHandle:$T,useInsertionEffect:jT,useLayoutEffect:BT,useMemo:qT,useReducer:nf,useRef:UT,useState:function(){return nf(qa)},useDebugValue:Jm,useDeferredValue:function(t){var e=tn();return HT(e,qe.memoizedState,t)},useTransition:function(){var t=nf(qa)[0],e=tn().memoizedState;return[t,e]},useMutableSource:bT,useSyncExternalStore:DT,useId:GT,unstable_isNewReconciler:!1},O1={readContext:en,useCallback:WT,useContext:en,useEffect:Xm,useImperativeHandle:$T,useInsertionEffect:jT,useLayoutEffect:BT,useMemo:qT,useReducer:rf,useRef:UT,useState:function(){return rf(qa)},useDebugValue:Jm,useDeferredValue:function(t){var e=tn();return qe===null?e.memoizedState=t:HT(e,qe.memoizedState,t)},useTransition:function(){var t=rf(qa)[0],e=tn().memoizedState;return[t,e]},useMutableSource:bT,useSyncExternalStore:DT,useId:GT,unstable_isNewReconciler:!1};function an(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mh={isMounted:function(t){return(t=t._reactInternals)?Zi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Rt(),i=$r(t),s=nr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,i),e!==null&&(mn(e,t,i,r),Uu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Rt(),i=$r(t),s=nr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Br(t,s,i),e!==null&&(mn(e,t,i,r),Uu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Rt(),r=$r(t),i=nr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Br(t,i,r),e!==null&&(mn(e,t,r,n),Uu(e,t,r))}};function Dv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fa(n,r)||!Fa(i,s):!0}function XT(t,e,n){var r=!1,i=Zr,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=Mt(e)?Fi:wt.current,r=e.contextTypes,s=(r=r!=null)?Bs(t,i):Zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ov(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mh.enqueueReplaceState(e,e.state,null)}function up(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Wm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=Mt(e)?Fi:wt.current,i.context=Bs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&mh.enqueueReplaceState(i,i.state,null),yc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",r=e;do n+=lP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var L1=typeof WeakMap=="function"?WeakMap:Map;function JT(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ic||(Ic=!0,wp=r),cp(t,e)},n}function ZT(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){cp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cp(t,e),typeof r!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new L1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Q1.bind(null,t,e,n),e.then(t,t))}function Mv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,Br(n,e,1))),n.lanes|=1),t)}var M1=pr.ReactCurrentOwner,Ot=!1;function Ct(t,e,n,r){e.child=t===null?kT(e,null,n,r):$s(e,t.child,n,r)}function Fv(t,e,n,r,i){n=n.render;var s=e.ref;return Ds(e,i),r=Qm(t,e,n,r,s,i),n=Ym(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(Re&&n&&Vm(e),e.flags|=1,Ct(t,e,r,i),e.child)}function Uv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!og(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,eI(t,e,s,r,i)):(t=qu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fa,n(o,r)&&t.ref===e.ref)return lr(t,e,i)}return e.flags|=1,t=Wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function eI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fa(s,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,lr(t,e,i)}return hp(t,e,n,r,i)}function tI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(As,jt),jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(As,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(As,jt),jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(As,jt),jt|=r;return Ct(t,e,i,n),e.child}function nI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hp(t,e,n,r,i){var s=Mt(n)?Fi:wt.current;return s=Bs(e,s),Ds(e,i),n=Qm(t,e,n,r,s,i),r=Ym(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,lr(t,e,i)):(Re&&r&&Vm(e),e.flags|=1,Ct(t,e,n,i),e.child)}function jv(t,e,n,r,i){if(Mt(n)){var s=!0;fc(e)}else s=!1;if(Ds(e,i),e.stateNode===null)zu(t,e),XT(e,n,r),up(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=en(c):(c=Mt(n)?Fi:wt.current,c=Bs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ov(e,o,r,c),Cr=!1;var m=e.memoizedState;o.state=m,yc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Lt.current||Cr?(typeof h=="function"&&(lp(e,n,h,r),u=e.memoizedState),(a=Cr||Dv(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,NT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:an(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=en(u):(u=Mt(n)?Fi:wt.current,u=Bs(e,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Ov(e,o,r,u),Cr=!1,m=e.memoizedState,o.state=m,yc(e,r,o,i);var T=e.memoizedState;a!==f||m!==T||Lt.current||Cr?(typeof y=="function"&&(lp(e,n,y,r),T=e.memoizedState),(c=Cr||Dv(e,n,c,r,m,T,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return dp(t,e,n,r,s,i)}function dp(t,e,n,r,i,s){nI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sv(e,n,!1),lr(t,e,s);r=e.stateNode,M1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):Ct(t,e,a,s),e.memoizedState=r.state,i&&Sv(e,n,!0),e.child}function rI(t){var e=t.stateNode;e.pendingContext?Cv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cv(t,e.context,!1),qm(t,e.containerInfo)}function Bv(t,e,n,r,i){return zs(),Um(i),e.flags|=256,Ct(t,e,n,r),e.child}var fp={dehydrated:null,treeContext:null,retryLane:0};function pp(t){return{baseLanes:t,cachePool:null,transitions:null}}function iI(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Pe,i&1),t===null)return op(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yh(o,r,0,null),t=Li(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pp(n),e.memoizedState=fp,t):Zm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return V1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Wr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Wr(a,s):(s=Li(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?pp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fp,r}return s=t.child,t=s.sibling,r=Wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zm(t,e){return e=yh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wu(t,e,n,r){return r!==null&&Um(r),$s(e,t.child,null,n),t=Zm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function V1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sf(Error(j(422))),wu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yh({mode:"visible",children:r.children},i,0,null),s=Li(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=pp(o),e.memoizedState=fp,s);if(!(e.mode&1))return wu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=sf(s,r,void 0),wu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ar(t,i),mn(r,t,i,-1))}return sg(),r=sf(Error(j(421))),wu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Y1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,zt=jr(i.nextSibling),Wt=e,Re=!0,un=null,t!==null&&(Qt[Yt++]=Yn,Qt[Yt++]=Xn,Qt[Yt++]=Ui,Yn=t.id,Xn=t.overflow,Ui=e),e=Zm(e,r.children),e.flags|=4096,e)}function zv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ap(t.return,e,n)}function of(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ct(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zv(t,n,e);else if(t.tag===19)zv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&vc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),of(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&vc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}of(e,!0,n,null,s);break;case"together":of(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function F1(t,e,n){switch(e.tag){case 3:rI(e),zs();break;case 5:xT(e);break;case 1:Mt(e.type)&&fc(e);break;case 4:qm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(gc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?iI(t,e,n):(we(Pe,Pe.current&1),t=lr(t,e,n),t!==null?t.sibling:null);we(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,tI(t,e,n)}return lr(t,e,n)}var oI,mp,aI,lI;oI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mp=function(){};aI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xi(Nn.current);var s=null;switch(n){case"input":i=Vf(t,i),r=Vf(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=jf(t,i),r=jf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hc)}zf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Te("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};lI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Go(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function U1(t,e,n){var r=e.pendingProps;switch(Fm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Mt(e.type)&&dc(),pt(e),null;case 3:return r=e.stateNode,Ws(),Ce(Lt),Ce(wt),Gm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,un!==null&&(Ip(un),un=null))),mp(t,e),pt(e),null;case 5:Hm(e);var i=xi($a.current);if(n=e.type,t!==null&&e.stateNode!=null)aI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return pt(e),null}if(t=xi(Nn.current),yu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rn]=e,r[Ba]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<ra.length;i++)Te(ra[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Xy(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":Zy(r,s),Te("invalid",r)}zf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&_u(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_u(r.textContent,a,t),i=["children",""+a]):xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":uu(r),Jy(r,s,!0);break;case"textarea":uu(r),ev(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=M0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[Ba]=r,oI(t,e,!1,!1),e.stateNode=t;e:{switch(o=$f(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<ra.length;i++)Te(ra[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":Xy(t,r),i=Vf(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Te("invalid",t);break;case"textarea":Zy(t,r),i=jf(t,r),Te("invalid",t);break;default:i=r}zf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?U0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&V0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ba(t,u):typeof u=="number"&&ba(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Te("scroll",t):u!=null&&Im(t,s,u,o))}switch(n){case"input":uu(t),Jy(t,r,!1);break;case"textarea":uu(t),ev(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)lI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=xi($a.current),xi(Nn.current),yu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:_u(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_u(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return pt(e),null;case 13:if(Ce(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&zt!==null&&e.mode&1&&!(e.flags&128))RT(),zs(),e.flags|=98560,s=!1;else if(s=yu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Rn]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),s=!1}else un!==null&&(Ip(un),un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ge===0&&(Ge=3):sg())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Ws(),mp(t,e),t===null&&Ua(e.stateNode.containerInfo),pt(e),null;case 10:return zm(e.type._context),pt(e),null;case 17:return Mt(e.type)&&dc(),pt(e),null;case 19:if(Ce(Pe),s=e.memoizedState,s===null)return pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Go(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vc(t),o!==null){for(e.flags|=128,Go(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Be()>Hs&&(e.flags|=128,r=!0,Go(s,!1),e.lanes=4194304)}else{if(!r)if(t=vc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return pt(e),null}else 2*Be()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,r=!0,Go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Be(),e.sibling=null,n=Pe.current,we(Pe,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return ig(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function j1(t,e){switch(Fm(e),e.tag){case 1:return Mt(e.type)&&dc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),Ce(Lt),Ce(wt),Gm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hm(e),null;case 13:if(Ce(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Pe),null;case 4:return Ws(),null;case 10:return zm(e.type._context),null;case 22:case 23:return ig(),null;case 24:return null;default:return null}}var Eu=!1,_t=!1,B1=typeof WeakSet=="function"?WeakSet:Set,q=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function gp(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var $v=!1;function z1(t,e){if(Zf=lc,t=fT(),Mm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ep={focusedElem:t,selectionRange:n},lc=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var k=T.memoizedProps,x=T.memoizedState,C=e.stateNode,w=C.getSnapshotBeforeUpdate(e.elementType===e.type?k:an(e.type,k),x);C.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Ve(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return T=$v,$v=!1,T}function _a(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gp(e,n,s)}i=i.next}while(i!==r)}}function gh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function _p(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uI(t){var e=t.alternate;e!==null&&(t.alternate=null,uI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[Ba],delete e[rp],delete e[C1],delete e[S1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cI(t){return t.tag===5||t.tag===3||t.tag===4}function Wv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hc));else if(r!==4&&(t=t.child,t!==null))for(yp(t,e,n),t=t.sibling;t!==null;)yp(t,e,n),t=t.sibling}function vp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vp(t,e,n),t=t.sibling;t!==null;)vp(t,e,n),t=t.sibling}var rt=null,ln=!1;function Er(t,e,n){for(n=n.child;n!==null;)hI(t,e,n),n=n.sibling}function hI(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(lh,n)}catch{}switch(n.tag){case 5:_t||Rs(n,e);case 6:var r=rt,i=ln;rt=null,Er(t,e,n),rt=r,ln=i,rt!==null&&(ln?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(ln?(t=rt,n=n.stateNode,t.nodeType===8?Jd(t.parentNode,n):t.nodeType===1&&Jd(t,n),Ma(t)):Jd(rt,n.stateNode));break;case 4:r=rt,i=ln,rt=n.stateNode.containerInfo,ln=!0,Er(t,e,n),rt=r,ln=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gp(n,e,o),i=i.next}while(i!==r)}Er(t,e,n);break;case 1:if(!_t&&(Rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,Er(t,e,n),_t=r):Er(t,e,n);break;default:Er(t,e,n)}}function qv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new B1),e.forEach(function(r){var i=X1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,ln=!1;break e;case 3:rt=a.stateNode.containerInfo,ln=!0;break e;case 4:rt=a.stateNode.containerInfo,ln=!0;break e}a=a.return}if(rt===null)throw Error(j(160));hI(s,o,i),rt=null,ln=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ve(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dI(e,t),e=e.sibling}function dI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(on(e,t),In(t),r&4){try{_a(3,t,t.return),gh(3,t)}catch(k){Ve(t,t.return,k)}try{_a(5,t,t.return)}catch(k){Ve(t,t.return,k)}}break;case 1:on(e,t),In(t),r&512&&n!==null&&Rs(n,n.return);break;case 5:if(on(e,t),In(t),r&512&&n!==null&&Rs(n,n.return),t.flags&32){var i=t.stateNode;try{ba(i,"")}catch(k){Ve(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&O0(i,s),$f(a,o);var c=$f(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?U0(i,f):h==="dangerouslySetInnerHTML"?V0(i,f):h==="children"?ba(i,f):Im(i,h,f,c)}switch(a){case"input":Ff(i,s);break;case"textarea":L0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Ps(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ps(i,!!s.multiple,s.defaultValue,!0):Ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ba]=s}catch(k){Ve(t,t.return,k)}}break;case 6:if(on(e,t),In(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ve(t,t.return,k)}}break;case 3:if(on(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(k){Ve(t,t.return,k)}break;case 4:on(e,t),In(t);break;case 13:on(e,t),In(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ng=Be())),r&4&&qv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(c=_t)||h,on(e,t),_t=c):on(e,t),In(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(q=t,h=t.child;h!==null;){for(f=q=h;q!==null;){switch(m=q,y=m.child,m.tag){case 0:case 11:case 14:case 15:_a(4,m,m.return);break;case 1:Rs(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(k){Ve(r,n,k)}}break;case 5:Rs(m,m.return);break;case 22:if(m.memoizedState!==null){Gv(f);continue}}y!==null?(y.return=m,q=y):Gv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=F0("display",o))}catch(k){Ve(t,t.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){Ve(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:on(e,t),In(t),r&4&&qv(t);break;case 21:break;default:on(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cI(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ba(i,""),r.flags&=-33);var s=Wv(t);vp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Wv(t);yp(t,a,o);break;default:throw Error(j(161))}}catch(u){Ve(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $1(t,e,n){q=t,fI(t)}function fI(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Eu;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||_t;a=Eu;var c=_t;if(Eu=o,(_t=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Kv(i):u!==null?(u.return=o,q=u):Kv(i);for(;s!==null;)q=s,fI(s),s=s.sibling;q=i,Eu=a,_t=c}Hv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Hv(t)}}function Hv(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||gh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:an(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ma(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}_t||e.flags&512&&_p(e)}catch(m){Ve(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Gv(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Kv(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gh(4,e)}catch(u){Ve(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ve(e,i,u)}}var s=e.return;try{_p(e)}catch(u){Ve(e,s,u)}break;case 5:var o=e.return;try{_p(e)}catch(u){Ve(e,o,u)}}}catch(u){Ve(e,e.return,u)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var W1=Math.ceil,Tc=pr.ReactCurrentDispatcher,eg=pr.ReactCurrentOwner,Zt=pr.ReactCurrentBatchConfig,le=0,et=null,$e=null,ot=0,jt=0,As=hi(0),Ge=0,Ga=null,Bi=0,_h=0,tg=0,ya=null,bt=null,ng=0,Hs=1/0,Gn=null,Ic=!1,wp=null,zr=null,Tu=!1,xr=null,Cc=0,va=0,Ep=null,$u=-1,Wu=0;function Rt(){return le&6?Be():$u!==-1?$u:$u=Be()}function $r(t){return t.mode&1?le&2&&ot!==0?ot&-ot:A1.transition!==null?(Wu===0&&(Wu=X0()),Wu):(t=pe,t!==0||(t=window.event,t=t===void 0?16:iT(t.type)),t):1}function mn(t,e,n,r){if(50<va)throw va=0,Ep=null,Error(j(185));vl(t,n,r),(!(le&2)||t!==et)&&(t===et&&(!(le&2)&&(_h|=n),Ge===4&&Rr(t,ot)),Vt(t,r),n===1&&le===0&&!(e.mode&1)&&(Hs=Be()+500,fh&&di()))}function Vt(t,e){var n=t.callbackNode;AP(t,e);var r=ac(t,t===et?ot:0);if(r===0)n!==null&&rv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rv(n),e===1)t.tag===0?R1(Qv.bind(null,t)):IT(Qv.bind(null,t)),T1(function(){!(le&6)&&di()}),n=null;else{switch(J0(r)){case 1:n=km;break;case 4:n=Q0;break;case 16:n=oc;break;case 536870912:n=Y0;break;default:n=oc}n=EI(n,pI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pI(t,e){if($u=-1,Wu=0,le&6)throw Error(j(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var r=ac(t,t===et?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sc(t,r);else{e=r;var i=le;le|=2;var s=gI();(et!==t||ot!==e)&&(Gn=null,Hs=Be()+500,Oi(t,e));do try{G1();break}catch(a){mI(t,a)}while(!0);Bm(),Tc.current=s,le=i,$e!==null?e=0:(et=null,ot=0,e=Ge)}if(e!==0){if(e===2&&(i=Kf(t),i!==0&&(r=i,e=Tp(t,i))),e===1)throw n=Ga,Oi(t,0),Rr(t,r),Vt(t,Be()),n;if(e===6)Rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!q1(i)&&(e=Sc(t,r),e===2&&(s=Kf(t),s!==0&&(r=s,e=Tp(t,s))),e===1))throw n=Ga,Oi(t,0),Rr(t,r),Vt(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Ri(t,bt,Gn);break;case 3:if(Rr(t,r),(r&130023424)===r&&(e=ng+500-Be(),10<e)){if(ac(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=np(Ri.bind(null,t,bt,Gn),e);break}Ri(t,bt,Gn);break;case 4:if(Rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*W1(r/1960))-r,10<r){t.timeoutHandle=np(Ri.bind(null,t,bt,Gn),r);break}Ri(t,bt,Gn);break;case 5:Ri(t,bt,Gn);break;default:throw Error(j(329))}}}return Vt(t,Be()),t.callbackNode===n?pI.bind(null,t):null}function Tp(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(Oi(t,e).flags|=256),t=Sc(t,e),t!==2&&(e=bt,bt=n,e!==null&&Ip(e)),t}function Ip(t){bt===null?bt=t:bt.push.apply(bt,t)}function q1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~tg,e&=~_h,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function Qv(t){if(le&6)throw Error(j(327));Os();var e=ac(t,0);if(!(e&1))return Vt(t,Be()),null;var n=Sc(t,e);if(t.tag!==0&&n===2){var r=Kf(t);r!==0&&(e=r,n=Tp(t,r))}if(n===1)throw n=Ga,Oi(t,0),Rr(t,e),Vt(t,Be()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ri(t,bt,Gn),Vt(t,Be()),null}function rg(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Hs=Be()+500,fh&&di())}}function zi(t){xr!==null&&xr.tag===0&&!(le&6)&&Os();var e=le;le|=1;var n=Zt.transition,r=pe;try{if(Zt.transition=null,pe=1,t)return t()}finally{pe=r,Zt.transition=n,le=e,!(le&6)&&di()}}function ig(){jt=As.current,Ce(As)}function Oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,E1(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Fm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dc();break;case 3:Ws(),Ce(Lt),Ce(wt),Gm();break;case 5:Hm(r);break;case 4:Ws();break;case 13:Ce(Pe);break;case 19:Ce(Pe);break;case 10:zm(r.type._context);break;case 22:case 23:ig()}n=n.return}if(et=t,$e=t=Wr(t.current,null),ot=jt=e,Ge=0,Ga=null,tg=_h=Bi=0,bt=ya=null,Ni!==null){for(e=0;e<Ni.length;e++)if(n=Ni[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ni=null}return t}function mI(t,e){do{var n=$e;try{if(Bm(),ju.current=Ec,wc){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wc=!1}if(ji=0,Je=qe=be=null,ga=!1,Wa=0,eg.current=null,n===null||n.return===null){Ge=1,Ga=e,$e=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=ot,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Mv(o);if(y!==null){y.flags&=-257,Vv(y,o,a,s,e),y.mode&1&&Lv(s,c,e),e=y,u=c;var T=e.updateQueue;if(T===null){var k=new Set;k.add(u),e.updateQueue=k}else T.add(u);break e}else{if(!(e&1)){Lv(s,c,e),sg();break e}u=Error(j(426))}}else if(Re&&a.mode&1){var x=Mv(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Vv(x,o,a,s,e),Um(qs(u,a));break e}}s=u=qs(u,a),Ge!==4&&(Ge=2),ya===null?ya=[s]:ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var C=JT(s,u,e);Pv(s,C);break e;case 1:a=u;var w=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(zr===null||!zr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=ZT(s,a,e);Pv(s,D);break e}}s=s.return}while(s!==null)}yI(n)}catch(F){e=F,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function gI(){var t=Tc.current;return Tc.current=Ec,t===null?Ec:t}function sg(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),et===null||!(Bi&268435455)&&!(_h&268435455)||Rr(et,ot)}function Sc(t,e){var n=le;le|=2;var r=gI();(et!==t||ot!==e)&&(Gn=null,Oi(t,e));do try{H1();break}catch(i){mI(t,i)}while(!0);if(Bm(),le=n,Tc.current=r,$e!==null)throw Error(j(261));return et=null,ot=0,Ge}function H1(){for(;$e!==null;)_I($e)}function G1(){for(;$e!==null&&!yP();)_I($e)}function _I(t){var e=wI(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?yI(t):$e=e,eg.current=null}function yI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=j1(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,$e=null;return}}else if(n=U1(n,e,jt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Ge===0&&(Ge=5)}function Ri(t,e,n){var r=pe,i=Zt.transition;try{Zt.transition=null,pe=1,K1(t,e,n,r)}finally{Zt.transition=i,pe=r}return null}function K1(t,e,n,r){do Os();while(xr!==null);if(le&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kP(t,s),t===et&&($e=et=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tu||(Tu=!0,EI(oc,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=pe;pe=1;var a=le;le|=4,eg.current=null,z1(t,n),dI(n,t),p1(ep),lc=!!Zf,ep=Zf=null,t.current=n,$1(n),vP(),le=a,pe=o,Zt.transition=s}else t.current=n;if(Tu&&(Tu=!1,xr=t,Cc=i),s=t.pendingLanes,s===0&&(zr=null),TP(n.stateNode),Vt(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ic)throw Ic=!1,t=wp,wp=null,t;return Cc&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===Ep?va++:(va=0,Ep=t):va=0,di(),null}function Os(){if(xr!==null){var t=J0(Cc),e=Zt.transition,n=pe;try{if(Zt.transition=null,pe=16>t?16:t,xr===null)var r=!1;else{if(t=xr,xr=null,Cc=0,le&6)throw Error(j(331));var i=le;for(le|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(q=c;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:_a(8,h,s)}var f=h.child;if(f!==null)f.return=h,q=f;else for(;q!==null;){h=q;var m=h.sibling,y=h.return;if(uI(h),h===c){q=null;break}if(m!==null){m.return=y,q=m;break}q=y}}}var T=s.alternate;if(T!==null){var k=T.child;if(k!==null){T.child=null;do{var x=k.sibling;k.sibling=null,k=x}while(k!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_a(9,s,s.return)}var C=s.sibling;if(C!==null){C.return=s.return,q=C;break e}q=s.return}}var w=t.current;for(q=w;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=w;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gh(9,a)}}catch(F){Ve(a,a.return,F)}if(a===o){q=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,q=D;break e}q=a.return}}if(le=i,di(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(lh,t)}catch{}r=!0}return r}finally{pe=n,Zt.transition=e}}return!1}function Yv(t,e,n){e=qs(n,e),e=JT(t,e,1),t=Br(t,e,1),e=Rt(),t!==null&&(vl(t,1,e),Vt(t,e))}function Ve(t,e,n){if(t.tag===3)Yv(t,t,n);else for(;e!==null;){if(e.tag===3){Yv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zr===null||!zr.has(r))){t=qs(n,t),t=ZT(e,t,1),e=Br(e,t,1),t=Rt(),e!==null&&(vl(e,1,t),Vt(e,t));break}}e=e.return}}function Q1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Rt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(ot&n)===n&&(Ge===4||Ge===3&&(ot&130023424)===ot&&500>Be()-ng?Oi(t,0):tg|=n),Vt(t,e)}function vI(t,e){e===0&&(t.mode&1?(e=du,du<<=1,!(du&130023424)&&(du=4194304)):e=1);var n=Rt();t=ar(t,e),t!==null&&(vl(t,e,n),Vt(t,n))}function Y1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vI(t,n)}function X1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),vI(t,n)}var wI;wI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,F1(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Re&&e.flags&1048576&&CT(e,mc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zu(t,e),t=e.pendingProps;var i=Bs(e,wt.current);Ds(e,n),i=Qm(null,e,r,t,i,n);var s=Ym();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(s=!0,fc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wm(e),i.updater=mh,e.stateNode=i,i._reactInternals=e,up(e,r,t,n),e=dp(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&Vm(e),Ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Z1(r),t=an(r,t),i){case 0:e=hp(null,e,r,t,n);break e;case 1:e=jv(null,e,r,t,n);break e;case 11:e=Fv(null,e,r,t,n);break e;case 14:e=Uv(null,e,r,an(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),hp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),jv(t,e,r,i,n);case 3:e:{if(rI(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,NT(t,e),yc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qs(Error(j(423)),e),e=Bv(t,e,r,n,i);break e}else if(r!==i){i=qs(Error(j(424)),e),e=Bv(t,e,r,n,i);break e}else for(zt=jr(e.stateNode.containerInfo.firstChild),Wt=e,Re=!0,un=null,n=kT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),r===i){e=lr(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return xT(e),t===null&&op(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,tp(r,i)?o=null:s!==null&&tp(r,s)&&(e.flags|=32),nI(t,e),Ct(t,e,o,n),e.child;case 6:return t===null&&op(e),null;case 13:return iI(t,e,n);case 4:return qm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$s(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Fv(t,e,r,i,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(gc,r._currentValue),r._currentValue=o,s!==null)if(yn(s.value,o)){if(s.children===i.children&&!Lt.current){e=lr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=nr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ap(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ap(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ds(e,n),i=en(i),r=r(i),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,i=an(r,e.pendingProps),i=an(r.type,i),Uv(t,e,r,i,n);case 15:return eI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),zu(t,e),e.tag=1,Mt(r)?(t=!0,fc(e)):t=!1,Ds(e,n),XT(e,r,i),up(e,r,i,n),dp(null,e,r,!0,t,n);case 19:return sI(t,e,n);case 22:return tI(t,e,n)}throw Error(j(156,e.tag))};function EI(t,e){return K0(t,e)}function J1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new J1(t,e,n,r)}function og(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Z1(t){if(typeof t=="function")return og(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sm)return 11;if(t===Rm)return 14}return 2}function Wr(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")og(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return Li(n.children,i,s,e);case Cm:o=8,i|=8;break;case Df:return t=Xt(12,n,e,i|2),t.elementType=Df,t.lanes=s,t;case Of:return t=Xt(13,n,e,i),t.elementType=Of,t.lanes=s,t;case Lf:return t=Xt(19,n,e,i),t.elementType=Lf,t.lanes=s,t;case x0:return yh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P0:o=10;break e;case N0:o=9;break e;case Sm:o=11;break e;case Rm:o=14;break e;case Ir:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Li(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function yh(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=x0,t.lanes=n,t.stateNode={isHidden:!1},t}function af(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function lf(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bd(0),this.expirationTimes=Bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ag(t,e,n,r,i,s,o,a,u){return t=new eN(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wm(s),t}function tN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function TI(t){if(!t)return Zr;t=t._reactInternals;e:{if(Zi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Mt(n))return TT(t,n,e)}return e}function II(t,e,n,r,i,s,o,a,u){return t=ag(n,r,!0,t,i,s,o,a,u),t.context=TI(null),n=t.current,r=Rt(),i=$r(n),s=nr(r,i),s.callback=e??null,Br(n,s,i),t.current.lanes=i,vl(t,i,r),Vt(t,r),t}function vh(t,e,n,r){var i=e.current,s=Rt(),o=$r(i);return n=TI(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Br(i,e,o),t!==null&&(mn(t,i,o,s),Uu(t,i,o)),o}function Rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lg(t,e){Xv(t,e),(t=t.alternate)&&Xv(t,e)}function nN(){return null}var CI=typeof reportError=="function"?reportError:function(t){console.error(t)};function ug(t){this._internalRoot=t}wh.prototype.render=ug.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));vh(t,e,null,null)};wh.prototype.unmount=ug.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zi(function(){vh(null,t,null,null)}),e[or]=null}};function wh(t){this._internalRoot=t}wh.prototype.unstable_scheduleHydration=function(t){if(t){var e=tT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sr.length&&e!==0&&e<Sr[n].priority;n++);Sr.splice(n,0,t),n===0&&rT(t)}};function cg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jv(){}function rN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Rc(o);s.call(c)}}var o=II(e,r,t,0,null,!1,!1,"",Jv);return t._reactRootContainer=o,t[or]=o.current,Ua(t.nodeType===8?t.parentNode:t),zi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Rc(u);a.call(c)}}var u=ag(t,0,!1,null,null,!1,!1,"",Jv);return t._reactRootContainer=u,t[or]=u.current,Ua(t.nodeType===8?t.parentNode:t),zi(function(){vh(e,u,n,r)}),u}function Th(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Rc(o);a.call(u)}}vh(e,o,t,i)}else o=rN(n,e,t,i,r);return Rc(o)}Z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=na(e.pendingLanes);n!==0&&(Pm(e,n|1),Vt(e,Be()),!(le&6)&&(Hs=Be()+500,di()))}break;case 13:zi(function(){var r=ar(t,1);if(r!==null){var i=Rt();mn(r,t,1,i)}}),lg(t,1)}};Nm=function(t){if(t.tag===13){var e=ar(t,134217728);if(e!==null){var n=Rt();mn(e,t,134217728,n)}lg(t,134217728)}};eT=function(t){if(t.tag===13){var e=$r(t),n=ar(t,e);if(n!==null){var r=Rt();mn(n,t,e,r)}lg(t,e)}};tT=function(){return pe};nT=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};qf=function(t,e,n){switch(e){case"input":if(Ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=dh(r);if(!i)throw Error(j(90));D0(r),Ff(r,i)}}}break;case"textarea":L0(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};z0=rg;$0=zi;var iN={usingClientEntryPoint:!1,Events:[El,Es,dh,j0,B0,rg]},Ko={findFiberByHostInstance:Pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sN={bundleType:Ko.bundleType,version:Ko.version,rendererPackageName:Ko.rendererPackageName,rendererConfig:Ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=H0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ko.findFiberByHostInstance||nN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{lh=Iu.inject(sN),Pn=Iu}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iN;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cg(e))throw Error(j(200));return tN(t,e,null,n)};Gt.createRoot=function(t,e){if(!cg(t))throw Error(j(299));var n=!1,r="",i=CI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ag(t,1,!1,null,null,n,!1,r,i),t[or]=e.current,Ua(t.nodeType===8?t.parentNode:t),new ug(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=H0(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return zi(t)};Gt.hydrate=function(t,e,n){if(!Eh(e))throw Error(j(200));return Th(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!cg(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=CI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=II(e,null,t,1,n??null,i,!1,s,o),t[or]=e.current,Ua(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wh(e)};Gt.render=function(t,e,n){if(!Eh(e))throw Error(j(200));return Th(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!Eh(t))throw Error(j(40));return t._reactRootContainer?(zi(function(){Th(null,null,t,!1,function(){t._reactRootContainer=null,t[or]=null})}),!0):!1};Gt.unstable_batchedUpdates=rg;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Eh(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Th(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function SI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SI)}catch(t){console.error(t)}}SI(),S0.exports=Gt;var oN=S0.exports,Zv=oN;xf.createRoot=Zv.createRoot,xf.hydrateRoot=Zv.hydrateRoot;const aN="modulepreload",lN=function(t){return"/community/"+t},ew={},wn=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=lN(u),u in ew)return;ew[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":aN,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,y)=>{f.addEventListener("load",m),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ka.apply(null,arguments)}var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));const tw="popstate";function uN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Cp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ac(i)}return hN(e,n,null,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function RI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cN(){return Math.random().toString(36).substr(2,8)}function nw(t,e){return{usr:t.state,key:t.key,idx:e}}function Cp(t,e,n,r){return n===void 0&&(n=null),Ka({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?po(e):e,{state:n,key:e&&e.key||r||cN()})}function Ac(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function po(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=br.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Ka({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=br.Pop;let x=h(),C=x==null?null:x-c;c=x,u&&u({action:a,location:k.location,delta:C})}function m(x,C){a=br.Push;let w=Cp(k.location,x,C);c=h()+1;let A=nw(w,c),D=k.createHref(w);try{o.pushState(A,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(D)}s&&u&&u({action:a,location:k.location,delta:1})}function y(x,C){a=br.Replace;let w=Cp(k.location,x,C);c=h();let A=nw(w,c),D=k.createHref(w);o.replaceState(A,"",D),s&&u&&u({action:a,location:k.location,delta:0})}function T(x){let C=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof x=="string"?x:Ac(x);return w=w.replace(/ $/,"%20"),Fe(C,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,C)}let k={get action(){return a},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(tw,f),u=x,()=>{i.removeEventListener(tw,f),u=null}},createHref(x){return e(i,x)},createURL:T,encodeLocation(x){let C=T(x);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:m,replace:y,go(x){return o.go(x)}};return k}var rw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(rw||(rw={}));function dN(t,e,n){return n===void 0&&(n="/"),fN(t,e,n)}function fN(t,e,n,r){let i=typeof e=="string"?po(e):e,s=Gs(i.pathname||"/",n);if(s==null)return null;let o=AI(t);pN(o);let a=null,u=SN(s);for(let c=0;a==null&&c<o.length;++c)a=IN(o[c],u);return a}function AI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=qr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),AI(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:EN(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of kI(s.path))i(s,o,u)}),e}function kI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=kI(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function pN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:TN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mN=/^:[\w-]+$/,gN=3,_N=2,yN=1,vN=10,wN=-2,iw=t=>t==="*";function EN(t,e){let n=t.split("/"),r=n.length;return n.some(iw)&&(r+=wN),e&&(r+=_N),n.filter(i=>!iw(i)).reduce((i,s)=>i+(mN.test(s)?gN:s===""?yN:vN),r)}function TN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function IN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=Sp({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),m=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:qr([s,f.pathname]),pathnameBase:kN(qr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=qr([s,f.pathnameBase]))}return o}function Sp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=CN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:y}=h;if(m==="*"){let k=a[f]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const T=a[f];return y&&!T?c[m]=void 0:c[m]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function CN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),RI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function SN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return RI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Gs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function RN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?po(t):t,s;return n?(n=xI(n),n.startsWith("/")?s=sw(n.substring(1),"/"):s=sw(n,e)):s=e,{pathname:s,search:PN(r),hash:NN(i)}}function sw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function AN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function PI(t,e){let n=AN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function NI(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=po(t):(i=Ka({},t),Fe(!i.pathname||!i.pathname.includes("?"),uf("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),uf("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),uf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=RN(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const xI=t=>t.replace(/\/\/+/g,"/"),qr=t=>xI(t.join("/")),kN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),PN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,NN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const bI=["post","put","patch","delete"];new Set(bI);const bN=["get",...bI];new Set(bN);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qa(){return Qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qa.apply(null,arguments)}const Ih=O.createContext(null),DI=O.createContext(null),fi=O.createContext(null),Ch=O.createContext(null),mr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),OI=O.createContext(null);function DN(t,e){let{relative:n}=e===void 0?{}:e;Il()||Fe(!1);let{basename:r,navigator:i}=O.useContext(fi),{hash:s,pathname:o,search:a}=Sh(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:qr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Il(){return O.useContext(Ch)!=null}function rn(){return Il()||Fe(!1),O.useContext(Ch).location}function LI(t){O.useContext(fi).static||O.useLayoutEffect(t)}function mo(){let{isDataRoute:t}=O.useContext(mr);return t?KN():ON()}function ON(){Il()||Fe(!1);let t=O.useContext(Ih),{basename:e,future:n,navigator:r}=O.useContext(fi),{matches:i}=O.useContext(mr),{pathname:s}=rn(),o=JSON.stringify(PI(i,n.v7_relativeSplatPath)),a=O.useRef(!1);return LI(()=>{a.current=!0}),O.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=NI(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:qr([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}const LN=O.createContext(null);function MN(t){let e=O.useContext(mr).outlet;return e&&O.createElement(LN.Provider,{value:t},e)}function zj(){let{matches:t}=O.useContext(mr),e=t[t.length-1];return e?e.params:{}}function Sh(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(fi),{matches:i}=O.useContext(mr),{pathname:s}=rn(),o=JSON.stringify(PI(i,r.v7_relativeSplatPath));return O.useMemo(()=>NI(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function VN(t,e){return FN(t,e)}function FN(t,e,n,r){Il()||Fe(!1);let{navigator:i}=O.useContext(fi),{matches:s}=O.useContext(mr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=rn(),h;if(e){var f;let x=typeof e=="string"?po(e):e;u==="/"||(f=x.pathname)!=null&&f.startsWith(u)||Fe(!1),h=x}else h=c;let m=h.pathname||"/",y=m;if(u!=="/"){let x=u.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let T=dN(t,{pathname:y}),k=$N(T&&T.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:qr([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:qr([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&k?O.createElement(Ch.Provider,{value:{location:Qa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:br.Pop}},k):k}function UN(){let t=GN(),e=xN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const jN=O.createElement(UN,null);class BN extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(mr.Provider,{value:this.props.routeContext},O.createElement(OI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zN(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(Ih);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(mr.Provider,{value:e},r)}function $N(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Fe(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:y}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let y,T=!1,k=null,x=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,k=f.route.errorElement||jN,u&&(c<0&&m===0?(QN("route-fallback"),T=!0,x=null):c===m&&(T=!0,x=f.route.hydrateFallbackElement||null)));let C=e.concat(o.slice(0,m+1)),w=()=>{let A;return y?A=k:T?A=x:f.route.Component?A=O.createElement(f.route.Component,null):f.route.element?A=f.route.element:A=h,O.createElement(zN,{match:f,routeContext:{outlet:h,matches:C,isDataRoute:n!=null},children:A})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?O.createElement(BN,{location:n.location,revalidation:n.revalidation,component:k,error:y,children:w(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):w()},null)}var MI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(MI||{}),VI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(VI||{});function WN(t){let e=O.useContext(Ih);return e||Fe(!1),e}function qN(t){let e=O.useContext(DI);return e||Fe(!1),e}function HN(t){let e=O.useContext(mr);return e||Fe(!1),e}function FI(t){let e=HN(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function GN(){var t;let e=O.useContext(OI),n=qN(),r=FI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function KN(){let{router:t}=WN(MI.UseNavigateStable),e=FI(VI.UseNavigateStable),n=O.useRef(!1);return LI(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Qa({fromRouteId:e},s)))},[t,e])}const ow={};function QN(t,e,n){ow[t]||(ow[t]=!0)}function YN(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function UI(t){return MN(t.context)}function Qe(t){Fe(!1)}function XN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=br.Pop,navigator:s,static:o=!1,future:a}=t;Il()&&Fe(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:Qa({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=po(r));let{pathname:h="/",search:f="",hash:m="",state:y=null,key:T="default"}=r,k=O.useMemo(()=>{let x=Gs(h,u);return x==null?null:{location:{pathname:x,search:f,hash:m,state:y,key:T},navigationType:i}},[u,h,f,m,y,T,i]);return k==null?null:O.createElement(fi.Provider,{value:c},O.createElement(Ch.Provider,{children:n,value:k}))}function JN(t){let{children:e,location:n}=t;return VN(Rp(e),n)}new Promise(()=>{});function Rp(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,Rp(r.props.children,s));return}r.type!==Qe&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Rp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kc(){return kc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kc.apply(null,arguments)}function jI(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function ZN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ex(t,e){return t.button===0&&(!e||e==="_self")&&!ZN(t)}function Ap(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function tx(t,e){let n=Ap(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const nx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],ix="6";try{window.__reactRouterVersion=ix}catch{}const sx=O.createContext({isTransitioning:!1}),ox="startTransition",aw=Qk[ox];function ax(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=uN({window:i,v5Compat:!0}));let o=s.current,[a,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=O.useCallback(f=>{c&&aw?aw(()=>u(f)):u(f)},[u,c]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.useEffect(()=>YN(r),[r]),O.createElement(XN,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const lx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ux=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ya=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,viewTransition:f}=e,m=jI(e,nx),{basename:y}=O.useContext(fi),T,k=!1;if(typeof c=="string"&&ux.test(c)&&(T=c,lx))try{let A=new URL(window.location.href),D=c.startsWith("//")?new URL(A.protocol+c):new URL(c),F=Gs(D.pathname,y);D.origin===A.origin&&F!=null?c=F+D.search+D.hash:k=!0}catch{}let x=DN(c,{relative:i}),C=hx(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:f});function w(A){r&&r(A),A.defaultPrevented||C(A)}return O.createElement("a",kc({},m,{href:T||x,onClick:k||s?r:w,ref:n,target:u}))}),An=O.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,viewTransition:c,children:h}=e,f=jI(e,rx),m=Sh(u,{relative:f.relative}),y=rn(),T=O.useContext(DI),{navigator:k,basename:x}=O.useContext(fi),C=T!=null&&dx(m)&&c===!0,w=k.encodeLocation?k.encodeLocation(m).pathname:m.pathname,A=y.pathname,D=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;i||(A=A.toLowerCase(),D=D?D.toLowerCase():null,w=w.toLowerCase()),D&&x&&(D=Gs(D,x)||D);const F=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let U=A===w||!o&&A.startsWith(w)&&A.charAt(F)==="/",v=D!=null&&(D===w||!o&&D.startsWith(w)&&D.charAt(w.length)==="/"),g={isActive:U,isPending:v,isTransitioning:C},E=U?r:void 0,S;typeof s=="function"?S=s(g):S=[s,U?"active":null,v?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(g):a;return O.createElement(Ya,kc({},f,{"aria-current":E,className:S,ref:n,style:P,to:u,viewTransition:c}),typeof h=="function"?h(g):h)});var kp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(kp||(kp={}));var lw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(lw||(lw={}));function cx(t){let e=O.useContext(Ih);return e||Fe(!1),e}function hx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=mo(),c=rn(),h=Sh(t,{relative:o});return O.useCallback(f=>{if(ex(f,n)){f.preventDefault();let m=r!==void 0?r:Ac(c)===Ac(h);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}function $j(t){let e=O.useRef(Ap(t)),n=O.useRef(!1),r=rn(),i=O.useMemo(()=>tx(r.search,n.current?null:e.current),[r.search]),s=mo(),o=O.useCallback((a,u)=>{const c=Ap(typeof a=="function"?a(i):a);n.current=!0,s("?"+c,u)},[s,i]);return[i,o]}function dx(t,e){e===void 0&&(e={});let n=O.useContext(sx);n==null&&Fe(!1);let{basename:r}=cx(kp.useViewTransitionState),i=Sh(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Gs(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Gs(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Sp(i.pathname,o)!=null||Sp(i.pathname,s)!=null}var uw={};/**
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
 */const BI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const B=function(t,e){if(!t)throw go(e)},go=function(t){return new Error("Firebase Database ("+BI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const zI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(m=64)),r.push(n[h],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new px;const m=s<<2|a>>4;if(r.push(m),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class px extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $I=function(t){const e=zI(t);return hg.encodeByteArray(e,!0)},Pc=function(t){return $I(t).replace(/\./g,"")},Nc=function(t){try{return hg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mx(t){return WI(void 0,t)}function WI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gx(n)||(t[n]=WI(t[n],e[n]));return t}function gx(t){return t!=="__proto__"}/**
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
 */function _x(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yx=()=>_x().__FIREBASE_DEFAULTS__,vx=()=>{if(typeof process>"u"||typeof uw>"u")return;const t=uw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Nc(t[1]);return e&&JSON.parse(e)},Rh=()=>{try{return yx()||vx()||wx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qI=t=>{var e,n;return(n=(e=Rh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},HI=t=>{const e=qI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},GI=()=>{var t;return(t=Rh())===null||t===void 0?void 0:t.config},KI=t=>{var e;return(e=Rh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function QI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Pc(JSON.stringify(n)),Pc(JSON.stringify(o)),""].join(".")}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function Ex(){var t;const e=(t=Rh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ix(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cx(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sx(){return BI.NODE_ADMIN===!0}function Rx(){return!Ex()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ax(){try{return typeof indexedDB=="object"}catch{return!1}}function kx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Px="FirebaseError";class gr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Px,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cl.prototype.create)}}class Cl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Nx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gr(i,a,r)}}function Nx(t,e){return t.replace(xx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xx=/\{\$([^}]+)}/g;/**
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
 */function Xa(t){return JSON.parse(t)}function He(t){return JSON.stringify(t)}/**
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
 */const XI=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Xa(Nc(s[0])||""),n=Xa(Nc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},bx=function(t){const e=XI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Dx=function(t){const e=XI(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function En(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $i(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Dc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cw(s)&&cw(o)){if(!Dc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cw(t){return t!==null&&typeof t=="object"}/**
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
 */function _o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ia(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function sa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Ox{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const m=(i<<5|i>>>27)+c+u+h+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Lx(t,e){const n=new Mx(t,e);return n.subscribe.bind(n)}class Mx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Vx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=cf),i.error===void 0&&(i.error=cf),i.complete===void 0&&(i.complete=cf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cf(){}function Ks(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Fx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ah=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ue(t){return t&&t._delegate?t._delegate:t}class ei{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ai="[DEFAULT]";/**
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
 */class Ux{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bx(e))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ai){return this.instances.has(e)}getOptions(e=Ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ai){return this.component?this.component.multipleInstances?e:Ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jx(t){return t===Ai?void 0:t}function Bx(t){return t.instantiationMode==="EAGER"}/**
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
 */class zx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ux(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const $x={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Wx=se.INFO,qx={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Hx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kh{constructor(e){this.name=e,this._logLevel=Wx,this._logHandler=Hx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$x[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Gx=(t,e)=>e.some(n=>t instanceof n);let hw,dw;function Kx(){return hw||(hw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qx(){return dw||(dw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const JI=new WeakMap,Pp=new WeakMap,ZI=new WeakMap,hf=new WeakMap,fg=new WeakMap;function Yx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&JI.set(n,t)}).catch(()=>{}),fg.set(e,t),e}function Xx(t){if(Pp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pp.set(t,e)}let Np={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ZI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jx(t){Np=t(Np)}function Zx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(df(this),e,...n);return ZI.set(r,e.sort?e.sort():[e]),Hr(r)}:Qx().includes(t)?function(...e){return t.apply(df(this),e),Hr(JI.get(this))}:function(...e){return Hr(t.apply(df(this),e))}}function eb(t){return typeof t=="function"?Zx(t):(t instanceof IDBTransaction&&Xx(t),Gx(t,Kx())?new Proxy(t,Np):t)}function Hr(t){if(t instanceof IDBRequest)return Yx(t);if(hf.has(t))return hf.get(t);const e=eb(t);return e!==t&&(hf.set(t,e),fg.set(e,t)),e}const df=t=>fg.get(t);function tb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const nb=["get","getKey","getAll","getAllKeys","count"],rb=["put","add","delete","clear"],ff=new Map;function fw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ff.get(e))return ff.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nb.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return ff.set(e,s),s}Jx(t=>({...t,get:(e,n,r)=>fw(e,n)||t.get(e,n,r),has:(e,n)=>!!fw(e,n)||t.has(e,n)}));/**
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
 */class ib{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xp="@firebase/app",pw="0.10.13";/**
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
 */const ur=new kh("@firebase/app"),ob="@firebase/app-compat",ab="@firebase/analytics-compat",lb="@firebase/analytics",ub="@firebase/app-check-compat",cb="@firebase/app-check",hb="@firebase/auth",db="@firebase/auth-compat",fb="@firebase/database",pb="@firebase/data-connect",mb="@firebase/database-compat",gb="@firebase/functions",_b="@firebase/functions-compat",yb="@firebase/installations",vb="@firebase/installations-compat",wb="@firebase/messaging",Eb="@firebase/messaging-compat",Tb="@firebase/performance",Ib="@firebase/performance-compat",Cb="@firebase/remote-config",Sb="@firebase/remote-config-compat",Rb="@firebase/storage",Ab="@firebase/storage-compat",kb="@firebase/firestore",Pb="@firebase/vertexai-preview",Nb="@firebase/firestore-compat",xb="firebase",bb="10.14.1";/**
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
 */const bp="[DEFAULT]",Db={[xp]:"fire-core",[ob]:"fire-core-compat",[lb]:"fire-analytics",[ab]:"fire-analytics-compat",[cb]:"fire-app-check",[ub]:"fire-app-check-compat",[hb]:"fire-auth",[db]:"fire-auth-compat",[fb]:"fire-rtdb",[pb]:"fire-data-connect",[mb]:"fire-rtdb-compat",[gb]:"fire-fn",[_b]:"fire-fn-compat",[yb]:"fire-iid",[vb]:"fire-iid-compat",[wb]:"fire-fcm",[Eb]:"fire-fcm-compat",[Tb]:"fire-perf",[Ib]:"fire-perf-compat",[Cb]:"fire-rc",[Sb]:"fire-rc-compat",[Rb]:"fire-gcs",[Ab]:"fire-gcs-compat",[kb]:"fire-fst",[Nb]:"fire-fst-compat",[Pb]:"fire-vertex","fire-js":"fire-js",[xb]:"fire-js-all"};/**
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
 */const Oc=new Map,Ob=new Map,Dp=new Map;function mw(t,e){try{t.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wi(t){const e=t.name;if(Dp.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;Dp.set(e,t);for(const n of Oc.values())mw(n,t);for(const n of Ob.values())mw(n,t);return!0}function Ph(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dn(t){return t.settings!==void 0}/**
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
 */const Lb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new Cl("app","Firebase",Lb);/**
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
 */class Mb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
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
 */const es=bb;function eC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gr.create("bad-app-name",{appName:String(i)});if(n||(n=GI()),!n)throw Gr.create("no-options");const s=Oc.get(i);if(s){if(Dc(n,s.options)&&Dc(r,s.config))return s;throw Gr.create("duplicate-app",{appName:i})}const o=new zx(i);for(const u of Dp.values())o.addComponent(u);const a=new Mb(n,r,o);return Oc.set(i,a),a}function pg(t=bp){const e=Oc.get(t);if(!e&&t===bp&&GI())return eC();if(!e)throw Gr.create("no-app",{appName:t});return e}function xn(t,e,n){var r;let i=(r=Db[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(a.join(" "));return}Wi(new ei(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Vb="firebase-heartbeat-database",Fb=1,Ja="firebase-heartbeat-store";let pf=null;function tC(){return pf||(pf=tb(Vb,Fb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ja)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),pf}async function Ub(t){try{const n=(await tC()).transaction(Ja),r=await n.objectStore(Ja).get(nC(t));return await n.done,r}catch(e){if(e instanceof gr)ur.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ur.warn(n.message)}}}async function gw(t,e){try{const r=(await tC()).transaction(Ja,"readwrite");await r.objectStore(Ja).put(e,nC(t)),await r.done}catch(n){if(n instanceof gr)ur.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ur.warn(r.message)}}}function nC(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jb=1024,Bb=30*24*60*60*1e3;class zb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_w();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Bb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ur.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_w(),{heartbeatsToSend:r,unsentEntries:i}=$b(this._heartbeatsCache.heartbeats),s=Pc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ur.warn(n),""}}}function _w(){return new Date().toISOString().substring(0,10)}function $b(t,e=jb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Wb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ax()?kx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ub(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yw(t){return Pc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qb(t){Wi(new ei("platform-logger",e=>new ib(e),"PRIVATE")),Wi(new ei("heartbeat",e=>new zb(e),"PRIVATE")),xn(xp,pw,t),xn(xp,pw,"esm2017"),xn("fire-js","")}qb("");function mg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Wj(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(h){try{c(r.next(h))}catch(f){o(f)}}function u(h){try{c(r.throw(h))}catch(f){o(f)}}function c(h){h.done?s(h.value):i(h.value).then(a,u)}c((r=r.apply(t,e||[])).next())})}function rC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hb=rC,iC=new Cl("auth","Firebase",rC());/**
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
 */const Lc=new kh("@firebase/auth");function Gb(t,...e){Lc.logLevel<=se.WARN&&Lc.warn(`Auth (${es}): ${t}`,...e)}function Hu(t,...e){Lc.logLevel<=se.ERROR&&Lc.error(`Auth (${es}): ${t}`,...e)}/**
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
 */function nn(t,...e){throw yg(t,...e)}function gn(t,...e){return yg(t,...e)}function gg(t,e,n){const r=Object.assign(Object.assign({},Hb()),{[e]:n});return new Cl("auth","Firebase",r).create(e,{appName:t.name})}function rr(t){return gg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _g(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(t,"argument-error"),gg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iC.create(t,...e)}function Q(t,e,...n){if(!t)throw yg(e,...n)}function Jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hu(e),new Error(e)}function cr(t,e){t||Jn(e)}/**
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
 */function Op(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kb(){return vw()==="http:"||vw()==="https:"}function vw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Qb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kb()||Ix()||"connection"in navigator)?navigator.onLine:!0}function Yb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Sl{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=dg()||YI()}get(){return Qb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vg(t,e){cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Xb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Jb=new Sl(3e4,6e4);function pi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fn(t,e,n,r,i={}){return oC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_o(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Tx()||(c.referrerPolicy="no-referrer"),sC.fetch()(aC(t,t.config.apiHost,n,a),c)})}async function oC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xb),e);try{const i=new eD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Cu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Cu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Cu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw gg(t,h,c);nn(t,h)}}catch(i){if(i instanceof gr)throw i;nn(t,"network-request-failed",{message:String(i)})}}async function Nh(t,e,n,r,i={}){const s=await Fn(t,e,n,r,i);return"mfaPendingCredential"in s&&nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?vg(t.config,i):`${t.config.apiScheme}://${i}`}function Zb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),Jb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gn(t,e,r);return i.customData._tokenResponse=n,i}function ww(t){return t!==void 0&&t.enterprise!==void 0}class tD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Zb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function nD(t,e){return Fn(t,"GET","/v2/recaptchaConfig",pi(t,e))}/**
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
 */async function rD(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function lC(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iD(t,e=!1){const n=ue(t),r=await n.getIdToken(e),i=wg(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wa(mf(i.auth_time)),issuedAtTime:wa(mf(i.iat)),expirationTime:wa(mf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mf(t){return Number(t)*1e3}function wg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Nc(n);return i?JSON.parse(i):(Hu("Failed to decode base64 JWT payload"),null)}catch(i){return Hu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ew(t){const e=wg(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gr&&sD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class oD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wa(this.lastLoginAt),this.creationTime=wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Za(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Qs(t,lC(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?uC(s.providerUserInfo):[],a=lD(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Lp(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function aD(t){const e=ue(t);await Za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uC(t){return t.map(e=>{var{providerId:n}=e,r=mg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function uD(t,e){const n=await oC(t,{},async()=>{const r=_o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cD(t,e){return Fn(t,"POST","/v2/accounts:revokeToken",pi(t,e))}/**
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
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ew(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Ew(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ls;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Jn("not implemented")}}/**
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
 */function Tr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Qs(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iD(this,e)}reload(){return aD(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await Qs(this,rD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:D,isAnonymous:F,providerData:U,stsTokenManager:v}=n;Q(A&&v,e,"internal-error");const g=Ls.fromJSON(this.name,v);Q(typeof A=="string",e,"internal-error"),Tr(f,e.name),Tr(m,e.name),Q(typeof D=="boolean",e,"internal-error"),Q(typeof F=="boolean",e,"internal-error"),Tr(y,e.name),Tr(T,e.name),Tr(k,e.name),Tr(x,e.name),Tr(C,e.name),Tr(w,e.name);const E=new Zn({uid:A,auth:e,email:m,emailVerified:D,displayName:f,isAnonymous:F,photoURL:T,phoneNumber:y,tenantId:k,stsTokenManager:g,createdAt:C,lastLoginAt:w});return U&&Array.isArray(U)&&(E.providerData=U.map(S=>Object.assign({},S))),x&&(E._redirectEventId=x),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ls;i.updateFromServerResponse(n);const s=new Zn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Za(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?uC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ls;a.updateFromIdToken(r);const u=new Zn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Tw=new Map;function er(t){cr(t instanceof Function,"Expected a class definition");let e=Tw.get(t);return e?(cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tw.set(t,e),e)}/**
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
 */class cC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cC.type="NONE";const Iw=cC;/**
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
 */function Gu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Gu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Gu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ms(er(Iw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||er(Iw);const o=Gu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Zn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ms(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ms(s,e,r))}}/**
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
 */function Cw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gC(e))return"Blackberry";if(_C(e))return"Webos";if(dC(e))return"Safari";if((e.includes("chrome/")||fC(e))&&!e.includes("edge/"))return"Chrome";if(mC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hC(t=Et()){return/firefox\//i.test(t)}function dC(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fC(t=Et()){return/crios\//i.test(t)}function pC(t=Et()){return/iemobile/i.test(t)}function mC(t=Et()){return/android/i.test(t)}function gC(t=Et()){return/blackberry/i.test(t)}function _C(t=Et()){return/webos/i.test(t)}function Eg(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hD(t=Et()){var e;return Eg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dD(){return Cx()&&document.documentMode===10}function yC(t=Et()){return Eg(t)||mC(t)||_C(t)||gC(t)||/windows phone/i.test(t)||pC(t)}/**
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
 */function vC(t,e=[]){let n;switch(t){case"Browser":n=Cw(Et());break;case"Worker":n=`${Cw(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
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
 */class fD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pD(t,e={}){return Fn(t,"GET","/v2/passwordPolicy",pi(t,e))}/**
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
 */const mD=6;class gD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class _D{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sw(this),this.idTokenSubscription=new Sw(this),this.beforeStateQueue=new fD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lC(this,{idToken:e}),r=await Zn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Za(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(rr(this));const n=e?ue(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pD(this),n=new gD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Un(t){return ue(t)}class Sw{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lx(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yD(t){xh=t}function wC(t){return xh.loadJS(t)}function vD(){return xh.recaptchaEnterpriseScript}function wD(){return xh.gapiScript}function ED(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const TD="recaptcha-enterprise",ID="NO_RECAPTCHA";class CD{constructor(e){this.type=TD,this.auth=Un(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{nD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new tD(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;ww(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ID)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ww(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=vD();u.length!==0&&(u+=a),wC(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Rw(t,e,n,r=!1){const i=new CD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Mp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Rw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Rw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function SD(t,e){const n=Ph(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Dc(s,e??{}))return i;nn(i,"already-initialized")}return n.initialize({options:e})}function RD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AD(t,e,n){const r=Un(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=EC(e),{host:o,port:a}=kD(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),PD()}function EC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kD(t){const e=EC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Aw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Aw(o)}}}function Aw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Tg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jn("not implemented")}_getIdTokenResponse(e){return Jn("not implemented")}_linkToIdToken(e,n){return Jn("not implemented")}_getReauthenticationResolver(e){return Jn("not implemented")}}async function ND(t,e){return Fn(t,"POST","/v1/accounts:update",e)}async function xD(t,e){return Fn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function bD(t,e){return Nh(t,"POST","/v1/accounts:signInWithPassword",pi(t,e))}async function DD(t,e){return Fn(t,"POST","/v1/accounts:sendOobCode",pi(t,e))}async function OD(t,e){return DD(t,e)}/**
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
 */async function LD(t,e){return Nh(t,"POST","/v1/accounts:signInWithEmailLink",pi(t,e))}async function MD(t,e){return Nh(t,"POST","/v1/accounts:signInWithEmailLink",pi(t,e))}/**
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
 */class el extends Tg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new el(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new el(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mp(e,n,"signInWithPassword",bD);case"emailLink":return LD(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mp(e,r,"signUpPassword",xD);case"emailLink":return MD(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vs(t,e){return Nh(t,"POST","/v1/accounts:signInWithIdp",pi(t,e))}/**
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
 */const VD="http://localhost";class qi extends Tg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:VD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_o(n)}return e}}/**
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
 */function FD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UD(t){const e=ia(sa(t)).link,n=e?ia(sa(e)).deep_link_id:null,r=ia(sa(t)).deep_link_id;return(r?ia(sa(r)).link:null)||r||n||e||t}class Ig{constructor(e){var n,r,i,s,o,a;const u=ia(sa(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=FD((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UD(e);try{return new Ig(n)}catch{return null}}}/**
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
 */class ti{constructor(){this.providerId=ti.PROVIDER_ID}static credential(e,n){return el._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ig.parseLink(n);return Q(r,"argument-error"),el._fromEmailAndCode(e,r.code,r.tenantId)}}ti.PROVIDER_ID="password";ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Al extends Rl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ar extends Al{constructor(){super("facebook.com")}static credential(e){return qi._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
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
 */class Qn extends Al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qi._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
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
 */class kr extends Al{constructor(){super("github.com")}static credential(e){return qi._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
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
 */class Pr extends Al{constructor(){super("twitter.com")}static credential(e,n){return qi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
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
 */class Ys{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zn._fromIdTokenResponse(e,r,i),o=kw(r);return new Ys({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=kw(r);return new Ys({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function kw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Mc extends gr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mc(e,n,r,i)}}function TC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function jD(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}async function IC(t,e,n=!1){const r=await Qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ys._forOperation(t,"link",r)}async function BD(t,e,n){await Za(e);const r=jD(e.providerData);Q(r.has(n)===t,e.auth,"provider-already-linked")}/**
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
 */async function CC(t,e,n=!1){const{auth:r}=t;if(dn(r.app))return Promise.reject(rr(r));const i="reauthenticate";try{const s=await Qs(t,TC(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=wg(s.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),Ys._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),s}}/**
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
 */async function SC(t,e,n=!1){if(dn(t.app))return Promise.reject(rr(t));const r="signIn",i=await TC(t,r,e),s=await Ys._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function zD(t,e){return SC(Un(t),e)}async function $D(t,e){const n=ue(t);return await BD(!1,n,e.providerId),IC(n,e)}async function WD(t,e){return CC(ue(t),e)}/**
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
 */async function qD(t){const e=Un(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HD(t,e,n){const r=Un(t);await Mp(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",OD)}function GD(t,e,n){return dn(t.app)?Promise.reject(rr(t)):zD(ue(t),ti.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qD(t),r})}function KD(t,e){return QD(ue(t),null,e)}async function QD(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(s.password=n);const o=await Qs(t,ND(r,s));await t._updateTokensIfNecessary(o,!0)}function YD(t,e,n,r){return ue(t).onIdTokenChanged(e,n,r)}function XD(t,e,n){return ue(t).beforeAuthStateChanged(e,n)}function JD(t,e,n,r){return ue(t).onAuthStateChanged(e,n,r)}function gf(t){return ue(t).signOut()}const Vc="__sak";/**
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
 */class RC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vc,"1"),this.storage.removeItem(Vc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ZD=1e3,eO=10;class AC extends RC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,eO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}AC.type="LOCAL";const tO=AC;/**
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
 */class kC extends RC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kC.type="SESSION";const PC=kC;/**
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
 */function nO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await nO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bh.receivers=[];/**
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
 */function Cg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Cg("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bn(){return window}function iO(t){bn().location.href=t}/**
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
 */function NC(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function sO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aO(){return NC()?self:null}/**
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
 */const xC="firebaseLocalStorageDb",lO=1,Fc="firebaseLocalStorage",bC="fbase_key";class kl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dh(t,e){return t.transaction([Fc],e?"readwrite":"readonly").objectStore(Fc)}function uO(){const t=indexedDB.deleteDatabase(xC);return new kl(t).toPromise()}function Vp(){const t=indexedDB.open(xC,lO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fc,{keyPath:bC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fc)?e(r):(r.close(),await uO(),e(await Vp()))})})}async function Pw(t,e,n){const r=Dh(t,!0).put({[bC]:e,value:n});return new kl(r).toPromise()}async function cO(t,e){const n=Dh(t,!1).get(e),r=await new kl(n).toPromise();return r===void 0?null:r.value}function Nw(t,e){const n=Dh(t,!0).delete(e);return new kl(n).toPromise()}const hO=800,dO=3;class DC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return NC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bh._getInstance(aO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sO(),!this.activeServiceWorker)return;this.sender=new rO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vp();return await Pw(e,Vc,"1"),await Nw(e,Vc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dh(i,!1).getAll();return new kl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}DC.type="LOCAL";const fO=DC;new Sl(3e4,6e4);/**
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
 */function Oh(t,e){return e?er(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sg extends Tg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pO(t){return SC(t.auth,new Sg(t),t.bypassAuthState)}function mO(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),CC(n,new Sg(t),t.bypassAuthState)}async function gO(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),IC(n,new Sg(t),t.bypassAuthState)}/**
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
 */class OC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pO;case"linkViaPopup":case"linkViaRedirect":return gO;case"reauthViaPopup":case"reauthViaRedirect":return mO;default:nn(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _O=new Sl(2e3,1e4);async function yO(t,e,n){if(dn(t.app))return Promise.reject(gn(t,"operation-not-supported-in-this-environment"));const r=Un(t);_g(t,e,Rl);const i=Oh(r,n);return new Dr(r,"signInViaPopup",e,i).executeNotNull()}async function vO(t,e,n){const r=ue(t);_g(r.auth,e,Rl);const i=Oh(r.auth,n);return new Dr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Dr extends OC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=Cg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_O.get())};e()}}Dr.currentPopupAction=null;/**
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
 */const wO="pendingRedirect",Ku=new Map;class EO extends OC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ku.get(this.auth._key());if(!e){try{const r=await TO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ku.set(this.auth._key(),e)}return this.bypassAuthState||Ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TO(t,e){const n=MC(e),r=LC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function IO(t,e){return LC(t)._set(MC(e),"true")}function CO(t,e){Ku.set(t._key(),e)}function LC(t){return er(t._redirectPersistence)}function MC(t){return Gu(wO,t.config.apiKey,t.name)}/**
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
 */function xw(t,e,n){return SO(t,e,n)}async function SO(t,e,n){if(dn(t.app))return Promise.reject(rr(t));const r=Un(t);_g(t,e,Rl),await r._initializationPromise;const i=Oh(r,n);return await IO(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function RO(t,e){return await Un(t)._initializationPromise,VC(t,e,!1)}async function VC(t,e,n=!1){if(dn(t.app))return Promise.reject(rr(t));const r=Un(t),i=Oh(r,e),o=await new EO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const AO=10*60*1e3;class kO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!FC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AO&&this.cachedEventUids.clear(),this.cachedEventUids.has(bw(e))}saveEventToCache(e){this.cachedEventUids.add(bw(e)),this.lastProcessedEventTime=Date.now()}}function bw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function FC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return FC(t);default:return!1}}/**
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
 */async function NO(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
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
 */const xO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bO=/^https?/;async function DO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NO(t);for(const n of e)try{if(OO(n))return}catch{}nn(t,"unauthorized-domain")}function OO(t){const e=Op(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bO.test(n))return!1;if(xO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const LO=new Sl(3e4,6e4);function Dw(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MO(t){return new Promise((e,n)=>{var r,i,s;function o(){Dw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dw(),n(gn(t,"network-request-failed"))},timeout:LO.get()})}if(!((i=(r=bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=bn().gapi)===null||s===void 0)&&s.load)o();else{const a=ED("iframefcb");return bn()[a]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},wC(`${wD()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Qu=null,e})}let Qu=null;function VO(t){return Qu=Qu||MO(t),Qu}/**
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
 */const FO=new Sl(5e3,15e3),UO="__/auth/iframe",jO="emulator/auth/iframe",BO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $O(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vg(e,jO):`https://${t.config.authDomain}/${UO}`,r={apiKey:e.apiKey,appName:t.name,v:es},i=zO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_o(r).slice(1)}`}async function WO(t){const e=await VO(t),n=bn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:$O(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),a=bn().setTimeout(()=>{s(o)},FO.get());function u(){bn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const qO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HO=500,GO=600,KO="_blank",QO="http://localhost";class Ow{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YO(t,e,n,r=HO,i=GO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},qO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Et().toLowerCase();n&&(a=fC(c)?KO:n),hC(c)&&(e=e||QO,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[y,T])=>`${m}${y}=${T},`,"");if(hD(c)&&a!=="_self")return XO(e||"",a),new Ow(null);const f=window.open(e||"",a,h);Q(f,t,"popup-blocked");try{f.focus()}catch{}return new Ow(f)}function XO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const JO="__/auth/handler",ZO="emulator/auth/handler",eL=encodeURIComponent("fac");async function Lw(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:i};if(e instanceof Rl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Al){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${eL}=${encodeURIComponent(u)}`:"";return`${tL(t)}?${_o(a).slice(1)}${c}`}function tL({config:t}){return t.emulator?vg(t,ZO):`https://${t.authDomain}/${JO}`}/**
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
 */const _f="webStorageSupport";class nL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=PC,this._completeRedirectFn=VC,this._overrideRedirectResult=CO}async _openPopup(e,n,r,i){var s;cr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Lw(e,n,r,Op(),i);return YO(e,o,Cg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Lw(e,n,r,Op(),i);return iO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WO(e),r=new kO(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_f,{type:_f},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_f];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yC()||dC()||Eg()}}const rL=nL;var Mw="@firebase/auth",Vw="1.7.9";/**
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
 */class iL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oL(t){Wi(new ei("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vC(t)},c=new _D(r,i,s,u);return RD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wi(new ei("auth-internal",e=>{const n=Un(e.getProvider("auth").getImmediate());return(r=>new iL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Mw,Vw,sL(t)),xn(Mw,Vw,"esm2017")}/**
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
 */const aL=5*60,lL=KI("authIdTokenMaxAge")||aL;let Fw=null;const uL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lL)return;const i=n==null?void 0:n.token;Fw!==i&&(Fw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cL(t=pg()){const e=Ph(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SD(t,{popupRedirectResolver:rL,persistence:[fO,tO,PC]}),r=KI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=uL(s.toString());XD(n,o,()=>o(n.currentUser)),YD(n,a=>o(a))}}const i=qI("auth");return i&&AD(n,`http://${i}`),n}function hL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oL("Browser");var Uw={};const jw="@firebase/database",Bw="1.0.8";/**
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
 */let UC="";function dL(t){UC=t}/**
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
 */class fL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class pL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return En(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const jC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fL(e)}}catch{}return new pL},bi=jC("localStorage"),mL=jC("sessionStorage");/**
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
 */const Fs=new kh("@firebase/database"),BC=function(){let t=1;return function(){return t++}}(),zC=function(t){const e=Fx(t),n=new Ox;n.update(e);const r=n.digest();return hg.encodeByteArray(r)},Pl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Pl.apply(null,r):typeof r=="object"?e+=He(r):e+=r,e+=" "}return e};let Ea=null,zw=!0;const gL=function(t,e){B(!0,"Can't turn on custom loggers persistently."),Fs.logLevel=se.VERBOSE,Ea=Fs.log.bind(Fs)},Ze=function(...t){if(zw===!0&&(zw=!1,Ea===null&&mL.get("logging_enabled")===!0&&gL()),Ea){const e=Pl.apply(null,t);Ea(e)}},Nl=function(t){return function(...e){Ze(t,...e)}},Fp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pl(...t);Fs.error(e)},hr=function(...t){const e=`FIREBASE FATAL ERROR: ${Pl(...t)}`;throw Fs.error(e),new Error(e)},At=function(...t){const e="FIREBASE WARNING: "+Pl(...t);Fs.warn(e)},_L=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&At("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},yL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hi="[MIN_NAME]",ni="[MAX_NAME]",ts=function(t,e){if(t===e)return 0;if(t===Hi||e===ni)return-1;if(e===Hi||t===ni)return 1;{const n=$w(t),r=$w(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},vL=function(t,e){return t===e?0:t<e?-1:1},Qo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+He(e))},Rg=function(t){if(typeof t!="object"||t===null)return He(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=He(e[r]),n+=":",n+=Rg(t[e[r]]);return n+="}",n},$C=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const WC=function(t){B(!Lh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(h.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},wL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function TL(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const IL=new RegExp("^-?(0*)\\d{1,10}$"),CL=-2147483648,SL=2147483647,$w=function(t){if(IL.test(t)){const e=Number(t);if(e>=CL&&e<=SL)return e}return null},yo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw At("Exception was thrown by user callback.",n),e},Math.floor(0))}},RL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ta=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class AL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){At(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class kL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',At(e)}}class Yu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Yu.OWNER="owner";/**
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
 */const Ag="5",qC="v",HC="s",GC="r",KC="f",QC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,YC="ls",XC="p",Up="ac",JC="websocket",ZC="long_polling";/**
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
 */class eS{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function PL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function tS(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===JC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ZC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);PL(t)&&(n.ns=t.namespace);const i=[];return tt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class NL{constructor(){this.counters_={}}incrementCounter(e,n=1){En(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return mx(this.counters_)}}/**
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
 */const yf={},vf={};function kg(t){const e=t.toString();return yf[e]||(yf[e]=new NL),yf[e]}function xL(t,e){const n=t.toString();return vf[n]||(vf[n]=e()),vf[n]}/**
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
 */class bL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&yo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ww="start",DL="close",OL="pLPCommand",LL="pRTLPCB",nS="id",rS="pw",iS="ser",ML="cb",VL="seg",FL="ts",UL="d",jL="dframe",sS=1870,oS=30,BL=sS-oS,zL=25e3,$L=3e4;class ks{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nl(e),this.stats_=kg(n),this.urlFn=u=>(this.appCheckToken&&(u[Up]=this.appCheckToken),tS(n,ZC,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($L)),yL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pg((...s)=>{const[o,a,u,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ww)this.id=a,this.password=u;else if(o===DL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ww]="t",r[iS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[ML]=this.scriptTagHolder.uniqueCallbackIdentifier),r[qC]=Ag,this.transportSessionId&&(r[HC]=this.transportSessionId),this.lastSessionId&&(r[YC]=this.lastSessionId),this.applicationId&&(r[XC]=this.applicationId),this.appCheckToken&&(r[Up]=this.appCheckToken),typeof location<"u"&&location.hostname&&QC.test(location.hostname)&&(r[GC]=KC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ks.forceAllow_=!0}static forceDisallow(){ks.forceDisallow_=!0}static isAvailable(){return ks.forceAllow_?!0:!ks.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wL()&&!EL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$I(n),i=$C(r,BL);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[jL]="t",r[nS]=e,r[rS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=BC(),window[OL+this.uniqueCallbackIdentifier]=e,window[LL+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ze("frame writing exception"),a.stack&&Ze(a.stack),Ze(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[nS]=this.myID,e[rS]=this.myPW,e[iS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+oS+r.length<=sS;){const o=this.pendingSegs.shift();r=r+"&"+VL+i+"="+o.seg+"&"+FL+i+"="+o.ts+"&"+UL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(zL)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const WL=16384,qL=45e3;let Uc=null;typeof MozWebSocket<"u"?Uc=MozWebSocket:typeof WebSocket<"u"&&(Uc=WebSocket);class hn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nl(this.connId),this.stats_=kg(n),this.connURL=hn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[qC]=Ag,typeof location<"u"&&location.hostname&&QC.test(location.hostname)&&(o[GC]=KC),n&&(o[HC]=n),r&&(o[YC]=r),i&&(o[Up]=i),s&&(o[XC]=s),tS(e,JC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bi.set("previous_websocket_failure",!0);try{let r;Sx(),this.mySock=new Uc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Uc!==null&&!hn.forceDisallow_}static previouslyFailed(){return bi.isInMemoryStorage||bi.get("previous_websocket_failure")===!0}markConnectionHealthy(){bi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Xa(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$C(n,WL);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qL))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
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
 */class tl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ks,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let r=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||At("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[hn];else{const i=this.transports_=[];for(const s of tl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);tl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}tl.globalTransportInitialized_=!1;/**
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
 */const HL=6e4,GL=5e3,KL=10*1024,QL=100*1024,wf="t",qw="d",YL="s",Hw="r",XL="e",Gw="o",Kw="a",Qw="n",Yw="p",JL="h";class ZL{constructor(e,n,r,i,s,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nl("c:"+this.id+":"),this.transportManager_=new tl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ta(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wf in e){const n=e[wf];n===Kw?this.upgradeIfSecondaryHealthy_():n===Hw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qo("t",e),r=Qo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qo("t",e),r=Qo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qo(wf,e);if(qw in e){const r=e[qw];if(n===JL){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Qw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YL?this.onConnectionShutdown_(r):n===Hw?this.onReset_(r):n===XL?Fp("Server Error: "+r):n===Gw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ag!==r&&At("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ta(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(HL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ta(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class aS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class lS{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class jc extends lS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!dg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new jc}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Xw=32,Jw=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new fe("")}function te(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ri(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function Ng(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function e2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function nl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function uS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof fe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new fe(n,0)}function ne(t){return t.pieceNum_>=t.pieces_.length}function St(t,e){const n=te(t),r=te(e);if(n===null)return e;if(n===r)return St(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function t2(t,e){const n=nl(t,0),r=nl(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ts(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function xg(t,e){if(ri(t)!==ri(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Jt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ri(t)>ri(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class n2{constructor(e,n){this.errorPrefix_=n,this.parts_=nl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ah(this.parts_[r]);cS(this)}}function r2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ah(e),cS(t)}function i2(t){const e=t.parts_.pop();t.byteLength_-=Ah(e),t.parts_.length>0&&(t.byteLength_-=1)}function cS(t){if(t.byteLength_>Jw)throw new Error(t.errorPrefix_+"has a key path longer than "+Jw+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xw+") or object contains a cycle "+ki(t))}function ki(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class bg extends lS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new bg}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Yo=1e3,s2=60*5*1e3,Zw=30*1e3,o2=1.3,a2=3e4,l2="server_kill",eE=3;class ir extends aS{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=ir.nextPersistentConnectionId_++,this.log_=Nl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yo,this.maxReconnectDelay_=s2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&jc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(He(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new cn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;ir.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&En(e,"w")){const r=$i(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();At(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Dx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=bx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fp("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>a2&&(this.reconnectDelay_=Yo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*o2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ir.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new ZL(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{At(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(l2)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&At(f),u())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xc(this.interruptReasons_)&&(this.reconnectDelay_=Yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Rg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new fe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=eE&&(this.reconnectDelay_=Zw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=eE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+UC.replace(/\./g,"-")]=1,dg()?e["framework.cordova"]=1:YI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=jc.getInstance().currentlyOnline();return xc(this.interruptReasons_)&&e}}ir.nextPersistentConnectionId_=0;ir.nextConnectionId_=0;/**
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
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
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
 */class Mh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new re(Hi,e),i=new re(Hi,n);return this.compare(r,i)!==0}minPost(){return re.MIN}}/**
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
 */let Su;class hS extends Mh{static get __EMPTY_NODE(){return Su}static set __EMPTY_NODE(e){Su=e}compare(e,n){return ts(e.name,n.name)}isDefinedOn(e){throw go("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(ni,Su)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,Su)}toString(){return".key"}}const Mi=new hS;/**
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
 */let Ru=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Bt=class oa{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??oa.RED,this.left=i??kn.EMPTY_NODE,this.right=s??kn.EMPTY_NODE}copy(e,n,r,i,s){return new oa(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return kn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return kn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,oa.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,oa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Bt.RED=!0;Bt.BLACK=!1;class u2{copy(e,n,r,i,s){return this}insert(e,n,r){return new Bt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let kn=class Xu{constructor(e,n=Xu.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xu(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new Xu(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ru(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ru(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ru(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ru(this.root_,null,this.comparator_,!0,e)}};kn.EMPTY_NODE=new u2;/**
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
 */function c2(t,e){return ts(t.name,e.name)}function Dg(t,e){return ts(t,e)}/**
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
 */let jp;function h2(t){jp=t}const dS=function(t){return typeof t=="number"?"number:"+WC(t):"string:"+t},fS=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&En(e,".sv"),"Priority must be a string or number.")}else B(t===jp||t.isEmpty(),"priority of unexpected type.");B(t===jp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let tE;class Ye{constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),fS(this.priorityNode_)}static set __childrenNodeConstructor(e){tE=e}static get __childrenNodeConstructor(){return tE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:te(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=te(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||ri(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+dS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=WC(this.value_):e+=this.value_,this.lazyHash_=zC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ye.VALUE_TYPE_ORDER.indexOf(n),s=Ye.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let pS,mS;function d2(t){pS=t}function f2(t){mS=t}class p2 extends Mh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ts(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(ni,new Ye("[PRIORITY-POST]",mS))}makePost(e,n){const r=pS(e);return new re(n,new Ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const Se=new p2;/**
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
 */const m2=Math.log(2);class g2{constructor(e){const n=s=>parseInt(Math.log(s)/m2,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bc=function(t,e,n,r){t.sort(e);const i=function(u,c){const h=c-u;let f,m;if(h===0)return null;if(h===1)return f=t[u],m=n?n(f):f,new Bt(m,f.node,Bt.BLACK,null,null);{const y=parseInt(h/2,10)+u,T=i(u,y),k=i(y+1,c);return f=t[y],m=n?n(f):f,new Bt(m,f.node,Bt.BLACK,T,k)}},s=function(u){let c=null,h=null,f=t.length;const m=function(T,k){const x=f-T,C=f;f-=T;const w=i(x+1,C),A=t[x],D=n?n(A):A;y(new Bt(D,A.node,k,null,w))},y=function(T){c?(c.left=T,c=T):(h=T,c=T)};for(let T=0;T<u.count;++T){const k=u.nextBitIsOne(),x=Math.pow(2,u.count-(T+1));k?m(x,Bt.BLACK):(m(x,Bt.BLACK),m(x,Bt.RED))}return h},o=new g2(t.length),a=s(o);return new kn(r||e,a)};/**
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
 */let Ef;const hs={};class tr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(hs&&Se,"ChildrenNode.ts has not been loaded"),Ef=Ef||new tr({".priority":hs},{".priority":Se}),Ef}get(e){const n=$i(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof kn?n:null}hasIndex(e){return En(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Mi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(re.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Bc(r,e.getCompare()):a=hs;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new tr(h,c)}addToIndexes(e,n){const r=bc(this.indexes_,(i,s)=>{const o=$i(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===hs)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(re.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Bc(a,o.getCompare())}else return hs;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new re(e.name,a))),u.insert(e,e.node)}});return new tr(r,this.indexSet_)}removeFromIndexes(e,n){const r=bc(this.indexes_,i=>{if(i===hs)return i;{const s=n.get(e.name);return s?i.remove(new re(e.name,s)):i}});return new tr(r,this.indexSet_)}}/**
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
 */let Xo;class K{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&fS(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xo||(Xo=new K(new kn(Dg),null,tr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xo}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xo:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new re(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Xo:this.priorityNode_;return new K(i,o,s)}}updateChild(e,n){const r=te(e);if(r===null)return n;{B(te(e)!==".priority"||ri(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ye(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Se,(o,a)=>{n[o]=a.val(e),r++,s&&K.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+dS(this.getPriority().val())+":"),this.forEachChild(Se,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":zC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new re(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xl?-1:0}withIndex(e){if(e===Mi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Mi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Se),i=n.getIterator(Se);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Mi?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _2 extends K{constructor(){super(new kn(Dg),K.EMPTY_NODE,tr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const xl=new _2;Object.defineProperties(re,{MIN:{value:new re(Hi,K.EMPTY_NODE)},MAX:{value:new re(ni,xl)}});hS.__EMPTY_NODE=K.EMPTY_NODE;Ye.__childrenNodeConstructor=K;h2(xl);f2(xl);/**
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
 */const y2=!0;function Ne(t,e=null){if(t===null)return K.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ye(n,Ne(e))}if(!(t instanceof Array)&&y2){const n=[];let r=!1;if(tt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Ne(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new re(o,u)))}}),n.length===0)return K.EMPTY_NODE;const s=Bc(n,c2,o=>o.name,Dg);if(r){const o=Bc(n,Se.getCompare());return new K(s,Ne(e),new tr({".priority":o},{".priority":Se}))}else return new K(s,Ne(e),tr.Default)}else{let n=K.EMPTY_NODE;return tt(t,(r,i)=>{if(En(t,r)&&r.substring(0,1)!=="."){const s=Ne(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ne(e))}}d2(Ne);/**
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
 */class Og extends Mh{constructor(e){super(),this.indexPath_=e,B(!ne(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ts(e.name,n.name):s}makePost(e,n){const r=Ne(e),i=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new re(n,i)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,xl);return new re(ni,e)}toString(){return nl(this.indexPath_,0).join("/")}}/**
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
 */class v2 extends Mh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ts(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const r=Ne(e);return new re(n,r)}toString(){return".value"}}const gS=new v2;/**
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
 */function _S(t){return{type:"value",snapshotNode:t}}function Xs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function rl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function il(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function w2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Lg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(rl(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Xs(n,r)):o.trackChildChange(il(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Se,(i,s)=>{n.hasChild(i)||r.trackChildChange(rl(i,s))}),n.isLeafNode()||n.forEachChild(Se,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(il(i,s,o))}else r.trackChildChange(Xs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class sl{constructor(e){this.indexedFilter_=new Lg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=sl.getStartPost_(e),this.endPost_=sl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new re(n,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=K.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const s=this;return n.forEachChild(Se,(o,a)=>{s.matches(new re(o,a))||(i=i.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class E2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new sl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new re(n,r))||(r=K.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,y)=>f(y,m)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new re(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const y=m==null?1:o(m,u);if(h&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(il(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(rl(n,f));const k=a.updateImmediateChild(n,K.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(Xs(m.name,m.node)),k.updateImmediateChild(m.name,m.node)):k}}else return r.isEmpty()?e:h&&o(c,u)>=0?(s!=null&&(s.trackChildChange(rl(c.name,c.node)),s.trackChildChange(Xs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,K.EMPTY_NODE)):e}}/**
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
 */class Mg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hi}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ni}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Se}copy(){const e=new Mg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function T2(t){return t.loadsAllData()?new Lg(t.getIndex()):t.hasLimit()?new E2(t):new sl(t)}function I2(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function C2(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function S2(t,e){const n=t.copy();return n.index_=e,n}function nE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Se?n="$priority":t.index_===gS?n="$value":t.index_===Mi?n="$key":(B(t.index_ instanceof Og,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=He(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=He(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+He(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=He(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+He(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function rE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Se&&(e.i=t.index_.toString()),e}/**
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
 */class zc extends aS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Nl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=zc.getListenId_(e,r),a={};this.listens_[o]=a;const u=nE(e._queryParams);this.restRequest_(s+".json",u,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),$i(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=zc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=nE(e._queryParams),r=e._path.toString(),i=new cn;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_o(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Xa(a.responseText)}catch{At("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&At("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class R2{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function $c(){return{value:null,children:new Map}}function vo(t,e,n){if(ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=te(e);t.children.has(r)||t.children.set(r,$c());const i=t.children.get(r);e=ye(e),vo(i,e,n)}}function Bp(t,e){if(ne(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Se,(r,i)=>{vo(t,new fe(r),i)}),Bp(t,e)}}else if(t.children.size>0){const n=te(e);return e=ye(e),t.children.has(n)&&Bp(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function zp(t,e,n){t.value!==null?n(e,t.value):A2(t,(r,i)=>{const s=new fe(e.toString()+"/"+r);zp(i,s,n)})}function A2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class k2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const iE=10*1e3,P2=30*1e3,N2=5*60*1e3;class x2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new k2(e);const r=iE+(P2-iE)*Math.random();Ta(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;tt(e,(i,s)=>{s>0&&En(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ta(this.reportStats_.bind(this),Math.floor(Math.random()*2*N2))}}/**
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
 */var fn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fn||(fn={}));function Vg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ug(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Wc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=fn.ACK_USER_WRITE,this.source=Vg()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Wc(de(),n,this.revert)}}else return B(te(this.path)===e,"operationForChild called for unrelated child."),new Wc(ye(this.path),this.affectedTree,this.revert)}}/**
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
 */class ol{constructor(e,n){this.source=e,this.path=n,this.type=fn.LISTEN_COMPLETE}operationForChild(e){return ne(this.path)?new ol(this.source,de()):new ol(this.source,ye(this.path))}}/**
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
 */class Gi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=fn.OVERWRITE}operationForChild(e){return ne(this.path)?new Gi(this.source,de(),this.snap.getImmediateChild(e)):new Gi(this.source,ye(this.path),this.snap)}}/**
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
 */class Js{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=fn.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new Gi(this.source,de(),n.value):new Js(this.source,de(),n)}else return B(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Js(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ii{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class b2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function D2(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(w2(o.childName,o.snapshotNode))}),Jo(t,i,"child_removed",e,r,n),Jo(t,i,"child_added",e,r,n),Jo(t,i,"child_moved",s,r,n),Jo(t,i,"child_changed",e,r,n),Jo(t,i,"value",e,r,n),i}function Jo(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>L2(t,a,u)),o.forEach(a=>{const u=O2(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function O2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function L2(t,e,n){if(e.childName==null||n.childName==null)throw go("Should only compare child_ events.");const r=new re(e.childName,e.snapshotNode),i=new re(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Vh(t,e){return{eventCache:t,serverCache:e}}function Ia(t,e,n,r){return Vh(new ii(e,n,r),t.serverCache)}function yS(t,e,n,r){return Vh(t.eventCache,new ii(e,n,r))}function qc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ki(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Tf;const M2=()=>(Tf||(Tf=new kn(vL)),Tf);class ve{constructor(e,n=M2()){this.value=e,this.children=n}static fromObject(e){let n=new ve(null);return tt(e,(r,i)=>{n=n.set(new fe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(ne(e))return null;{const r=te(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ye(e),n);return s!=null?{path:xe(new fe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=te(e),r=this.children.get(n);return r!==null?r.subtree(ye(e)):new ve(null)}}set(e,n){if(ne(e))return new ve(n,this.children);{const r=te(e),s=(this.children.get(r)||new ve(null)).set(ye(e),n),o=this.children.insert(r,s);return new ve(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=te(e),r=this.children.get(n);if(r){const i=r.remove(ye(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ve(null):new ve(this.value,s)}else return this}}get(e){if(ne(e))return this.value;{const n=te(e),r=this.children.get(n);return r?r.get(ye(e)):null}}setTree(e,n){if(ne(e))return n;{const r=te(e),s=(this.children.get(r)||new ve(null)).setTree(ye(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ve(this.value,o)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(xe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ne(e))return null;{const s=te(e),o=this.children.get(s);return o?o.findOnPath_(ye(e),xe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,r){if(ne(e))return this;{this.value&&r(n,this.value);const i=te(e),s=this.children.get(i);return s?s.foreachOnPath_(ye(e),xe(n,i),r):new ve(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class _n{constructor(e){this.writeTree_=e}static empty(){return new _n(new ve(null))}}function Ca(t,e,n){if(ne(e))return new _n(new ve(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=St(i,e);return s=s.updateChild(o,n),new _n(t.writeTree_.set(i,s))}else{const i=new ve(n),s=t.writeTree_.setTree(e,i);return new _n(s)}}}function $p(t,e,n){let r=t;return tt(n,(i,s)=>{r=Ca(r,xe(e,i),s)}),r}function sE(t,e){if(ne(e))return _n.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new _n(n)}}function Wp(t,e){return ns(t,e)!=null}function ns(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(St(n.path,e)):null}function oE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Se,(r,i)=>{e.push(new re(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new re(r,i.value))}),e}function Kr(t,e){if(ne(e))return t;{const n=ns(t,e);return n!=null?new _n(new ve(n)):new _n(t.writeTree_.subtree(e))}}function qp(t){return t.writeTree_.isEmpty()}function Zs(t,e){return vS(de(),t.writeTree_,e)}function vS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=vS(xe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(xe(t,".priority"),r)),n}}/**
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
 */function Fh(t,e){return IS(e,t)}function V2(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ca(t.visibleWrites,e,n)),t.lastWriteId=r}function F2(t,e,n,r){B(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=$p(t.visibleWrites,e,n),t.lastWriteId=r}function U2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function j2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&B2(a,r.path)?i=!1:Jt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return z2(t),!0;if(r.snap)t.visibleWrites=sE(t.visibleWrites,r.path);else{const a=r.children;tt(a,u=>{t.visibleWrites=sE(t.visibleWrites,xe(r.path,u))})}return!0}else return!1}function B2(t,e){if(t.snap)return Jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Jt(xe(t.path,n),e))return!0;return!1}function z2(t){t.visibleWrites=wS(t.allWrites,$2,de()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $2(t){return t.visible}function wS(t,e,n){let r=_n.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Jt(n,o)?(a=St(n,o),r=Ca(r,a,s.snap)):Jt(o,n)&&(a=St(o,n),r=Ca(r,de(),s.snap.getChild(a)));else if(s.children){if(Jt(n,o))a=St(n,o),r=$p(r,a,s.children);else if(Jt(o,n))if(a=St(o,n),ne(a))r=$p(r,de(),s.children);else{const u=$i(s.children,te(a));if(u){const c=u.getChild(ye(a));r=Ca(r,de(),c)}}}else throw go("WriteRecord should have .snap or .children")}}return r}function ES(t,e,n,r,i){if(!r&&!i){const s=ns(t.visibleWrites,e);if(s!=null)return s;{const o=Kr(t.visibleWrites,e);if(qp(o))return n;if(n==null&&!Wp(o,de()))return null;{const a=n||K.EMPTY_NODE;return Zs(o,a)}}}else{const s=Kr(t.visibleWrites,e);if(!i&&qp(s))return n;if(!i&&n==null&&!Wp(s,de()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Jt(c.path,e)||Jt(e,c.path))},a=wS(t.allWrites,o,e),u=n||K.EMPTY_NODE;return Zs(a,u)}}}function W2(t,e,n){let r=K.EMPTY_NODE;const i=ns(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Se,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Kr(t.visibleWrites,e);return n.forEachChild(Se,(o,a)=>{const u=Zs(Kr(s,new fe(o)),a);r=r.updateImmediateChild(o,u)}),oE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Kr(t.visibleWrites,e);return oE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function q2(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=xe(e,n);if(Wp(t.visibleWrites,s))return null;{const o=Kr(t.visibleWrites,s);return qp(o)?i.getChild(n):Zs(o,i.getChild(n))}}function H2(t,e,n,r){const i=xe(e,n),s=ns(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Kr(t.visibleWrites,i);return Zs(o,r.getNode().getImmediateChild(n))}else return null}function G2(t,e){return ns(t.visibleWrites,e)}function K2(t,e,n,r,i,s,o){let a;const u=Kr(t.visibleWrites,e),c=ns(u,de());if(c!=null)a=c;else if(n!=null)a=Zs(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=m.getNext();for(;y&&h.length<i;)f(y,r)!==0&&h.push(y),y=m.getNext();return h}else return[]}function Q2(){return{visibleWrites:_n.empty(),allWrites:[],lastWriteId:-1}}function Hc(t,e,n,r){return ES(t.writeTree,t.treePath,e,n,r)}function jg(t,e){return W2(t.writeTree,t.treePath,e)}function aE(t,e,n,r){return q2(t.writeTree,t.treePath,e,n,r)}function Gc(t,e){return G2(t.writeTree,xe(t.treePath,e))}function Y2(t,e,n,r,i,s){return K2(t.writeTree,t.treePath,e,n,r,i,s)}function Bg(t,e,n){return H2(t.writeTree,t.treePath,e,n)}function TS(t,e){return IS(xe(t.treePath,e),t.writeTree)}function IS(t,e){return{treePath:t,writeTree:e}}/**
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
 */class X2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,il(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,rl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Xs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,il(r,e.snapshotNode,i.oldSnap));else throw go("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class J2{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const CS=new J2;class zg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ii(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ki(this.viewCache_),s=Y2(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Z2(t){return{filter:t}}function eM(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tM(t,e,n,r,i){const s=new X2;let o,a;if(n.type===fn.OVERWRITE){const c=n;c.source.fromUser?o=Hp(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ne(c.path),o=Kc(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===fn.MERGE){const c=n;c.source.fromUser?o=rM(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Gp(t,e,c.path,c.children,r,i,a,s))}else if(n.type===fn.ACK_USER_WRITE){const c=n;c.revert?o=oM(t,e,c.path,r,i,s):o=iM(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===fn.LISTEN_COMPLETE)o=sM(t,e,n.path,r,s);else throw go("Unknown operation type: "+n.type);const u=s.getChanges();return nM(e,o,u),{viewCache:o,changes:u}}function nM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=qc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(_S(qc(e)))}}function SS(t,e,n,r,i,s){const o=e.eventCache;if(Gc(r,n)!=null)return e;{let a,u;if(ne(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ki(e),h=c instanceof K?c:K.EMPTY_NODE,f=jg(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Hc(r,Ki(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=te(n);if(c===".priority"){B(ri(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const f=aE(r,n,h,u);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=ye(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=aE(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(h,m):f=o.getNode().getImmediateChild(c)}else f=Bg(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return Ia(e,a,o.isFullyInitialized()||ne(n),t.filter.filtersNodes())}}function Kc(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(ne(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const y=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),y,null)}else{const y=te(n);if(!u.isCompleteForPath(n)&&ri(n)>1)return e;const T=ye(n),x=u.getNode().getImmediateChild(y).updateChild(T,r);y===".priority"?c=h.updatePriority(u.getNode(),x):c=h.updateChild(u.getNode(),y,x,T,CS,null)}const f=yS(e,c,u.isFullyInitialized()||ne(n),h.filtersNodes()),m=new zg(i,f,s);return SS(t,f,n,i,m,a)}function Hp(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const h=new zg(i,e,s);if(ne(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Ia(e,c,!0,t.filter.filtersNodes());else{const f=te(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Ia(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=ye(n),y=a.getNode().getImmediateChild(f);let T;if(ne(m))T=r;else{const k=h.getCompleteChild(f);k!=null?Ng(m)===".priority"&&k.getChild(uS(m)).isEmpty()?T=k:T=k.updateChild(m,r):T=K.EMPTY_NODE}if(y.equals(T))u=e;else{const k=t.filter.updateChild(a.getNode(),f,T,m,h,o);u=Ia(e,k,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function lE(t,e){return t.eventCache.isCompleteForChild(e)}function rM(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const h=xe(n,u);lE(e,te(h))&&(a=Hp(t,a,h,c,i,s,o))}),r.foreach((u,c)=>{const h=xe(n,u);lE(e,te(h))||(a=Hp(t,a,h,c,i,s,o))}),a}function uE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Gp(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ne(n)?c=r:c=new ve(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),T=uE(t,y,m);u=Kc(t,u,new fe(f),T,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const y=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!y){const T=e.serverCache.getNode().getImmediateChild(f),k=uE(t,T,m);u=Kc(t,u,new fe(f),k,i,s,o,a)}}),u}function iM(t,e,n,r,i,s,o){if(Gc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ne(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Kc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(ne(n)){let c=new ve(null);return u.getNode().forEachChild(Mi,(h,f)=>{c=c.set(new fe(h),f)}),Gp(t,e,n,c,i,s,a,o)}else return e}else{let c=new ve(null);return r.foreach((h,f)=>{const m=xe(n,h);u.isCompleteForPath(m)&&(c=c.set(h,u.getNode().getChild(m)))}),Gp(t,e,n,c,i,s,a,o)}}function sM(t,e,n,r,i){const s=e.serverCache,o=yS(e,s.getNode(),s.isFullyInitialized()||ne(n),s.isFiltered());return SS(t,o,n,r,CS,i)}function oM(t,e,n,r,i,s){let o;if(Gc(r,n)!=null)return e;{const a=new zg(r,e,i),u=e.eventCache.getNode();let c;if(ne(n)||te(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Hc(r,Ki(e));else{const f=e.serverCache.getNode();B(f instanceof K,"serverChildren would be complete if leaf node"),h=jg(r,f)}h=h,c=t.filter.updateFullNode(u,h,s)}else{const h=te(n);let f=Bg(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=u.getImmediateChild(h)),f!=null?c=t.filter.updateChild(u,h,f,ye(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,K.EMPTY_NODE,ye(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Hc(r,Ki(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Gc(r,de())!=null,Ia(e,c,o,t.filter.filtersNodes())}}/**
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
 */class aM{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Lg(r.getIndex()),s=T2(r);this.processor_=Z2(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(K.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(K.EMPTY_NODE,a.getNode(),null),h=new ii(u,o.isFullyInitialized(),i.filtersNodes()),f=new ii(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Vh(f,h),this.eventGenerator_=new b2(this.query_)}get query(){return this.query_}}function lM(t){return t.viewCache_.serverCache.getNode()}function uM(t){return qc(t.viewCache_)}function cM(t,e){const n=Ki(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function cE(t){return t.eventRegistrations_.length===0}function hM(t,e){t.eventRegistrations_.push(e)}function hE(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function dE(t,e,n,r){e.type===fn.MERGE&&e.source.queryId!==null&&(B(Ki(t.viewCache_),"We should always have a full cache before handling merges"),B(qc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=tM(t.processor_,i,e,n,r);return eM(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,RS(t,s.changes,s.viewCache.eventCache.getNode(),null)}function dM(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Se,(s,o)=>{r.push(Xs(s,o))}),n.isFullyInitialized()&&r.push(_S(n.getNode())),RS(t,r,n.getNode(),e)}function RS(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return D2(t.eventGenerator_,e,n,i)}/**
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
 */let Qc;class AS{constructor(){this.views=new Map}}function fM(t){B(!Qc,"__referenceConstructor has already been defined"),Qc=t}function pM(){return B(Qc,"Reference.ts has not been loaded"),Qc}function mM(t){return t.views.size===0}function $g(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),dE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(dE(o,e,n,r));return s}}function kS(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Hc(n,i?r:null),u=!1;a?u=!0:r instanceof K?(a=jg(n,r),u=!1):(a=K.EMPTY_NODE,u=!1);const c=Vh(new ii(a,u,!1),new ii(r,i,!1));return new aM(e,c)}return o}function gM(t,e,n,r,i,s){const o=kS(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hM(o,n),dM(o,n)}function _M(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=si(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(hE(c,n,r)),cE(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(hE(u,n,r)),cE(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!si(t)&&s.push(new(pM())(e._repo,e._path)),{removed:s,events:o}}function PS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Qr(t,e){let n=null;for(const r of t.views.values())n=n||cM(r,e);return n}function NS(t,e){if(e._queryParams.loadsAllData())return Uh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function xS(t,e){return NS(t,e)!=null}function si(t){return Uh(t)!=null}function Uh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Yc;function yM(t){B(!Yc,"__referenceConstructor has already been defined"),Yc=t}function vM(){return B(Yc,"Reference.ts has not been loaded"),Yc}let wM=1;class fE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=Q2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wg(t,e,n,r,i){return V2(t.pendingWriteTree_,e,n,r,i),i?wo(t,new Gi(Vg(),e,n)):[]}function EM(t,e,n,r){F2(t.pendingWriteTree_,e,n,r);const i=ve.fromObject(n);return wo(t,new Js(Vg(),e,i))}function Or(t,e,n=!1){const r=U2(t.pendingWriteTree_,e);if(j2(t.pendingWriteTree_,e)){let s=new ve(null);return r.snap!=null?s=s.set(de(),!0):tt(r.children,o=>{s=s.set(new fe(o),!0)}),wo(t,new Wc(r.path,s,n))}else return[]}function bl(t,e,n){return wo(t,new Gi(Fg(),e,n))}function TM(t,e,n){const r=ve.fromObject(n);return wo(t,new Js(Fg(),e,r))}function IM(t,e){return wo(t,new ol(Fg(),e))}function CM(t,e,n){const r=qg(t,n);if(r){const i=Hg(r),s=i.path,o=i.queryId,a=St(s,e),u=new ol(Ug(o),a);return Gg(t,s,u)}else return[]}function Xc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||xS(o,e))){const u=_M(o,e,n,r);mM(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const h=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,y)=>si(y));if(h&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const y=AM(m);for(let T=0;T<y.length;++T){const k=y[T],x=k.query,C=LS(t,k);t.listenProvider_.startListening(Sa(x),al(t,x),C.hashFn,C.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(Sa(e),null):c.forEach(m=>{const y=t.queryToTagMap.get(Bh(m));t.listenProvider_.stopListening(Sa(m),y)}))}kM(t,c)}return a}function bS(t,e,n,r){const i=qg(t,r);if(i!=null){const s=Hg(i),o=s.path,a=s.queryId,u=St(o,e),c=new Gi(Ug(a),u,n);return Gg(t,o,c)}else return[]}function SM(t,e,n,r){const i=qg(t,r);if(i){const s=Hg(i),o=s.path,a=s.queryId,u=St(o,e),c=ve.fromObject(n),h=new Js(Ug(a),u,c);return Gg(t,o,h)}else return[]}function Kp(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,y)=>{const T=St(m,i);s=s||Qr(y,T),o=o||si(y)});let a=t.syncPointTree_.get(i);a?(o=o||si(a),s=s||Qr(a,de())):(a=new AS,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=K.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,T)=>{const k=Qr(T,de());k&&(s=s.updateImmediateChild(y,k))}));const c=xS(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=Bh(e);B(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const y=PM();t.queryToTagMap.set(m,y),t.tagToQueryMap.set(y,m)}const h=Fh(t.pendingWriteTree_,i);let f=gM(a,e,n,h,s,u);if(!c&&!o&&!r){const m=NS(a,e);f=f.concat(NM(t,e,m))}return f}function jh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=St(o,e),c=Qr(a,u);if(c)return c});return ES(i,e,s,n,!0)}function RM(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=St(c,n);r=r||Qr(h,f)});let i=t.syncPointTree_.get(n);i?r=r||Qr(i,de()):(i=new AS,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new ii(r,!0,!1):null,a=Fh(t.pendingWriteTree_,e._path),u=kS(i,e,a,s?o.getNode():K.EMPTY_NODE,s);return uM(u)}function wo(t,e){return DS(e,t.syncPointTree_,null,Fh(t.pendingWriteTree_,de()))}function DS(t,e,n,r){if(ne(t.path))return OS(t,e,n,r);{const i=e.get(de());n==null&&i!=null&&(n=Qr(i,de()));let s=[];const o=te(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=TS(r,o);s=s.concat(DS(a,u,c,h))}return i&&(s=s.concat($g(i,t,r,n))),s}}function OS(t,e,n,r){const i=e.get(de());n==null&&i!=null&&(n=Qr(i,de()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=TS(r,o),h=t.operationForChild(o);h&&(s=s.concat(OS(h,a,u,c)))}),i&&(s=s.concat($g(i,t,r,n))),s}function LS(t,e){const n=e.query,r=al(t,n);return{hashFn:()=>(lM(e)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?CM(t,n._path,r):IM(t,n._path);{const s=TL(i,n);return Xc(t,n,null,s)}}}}function al(t,e){const n=Bh(e);return t.queryToTagMap.get(n)}function Bh(t){return t._path.toString()+"$"+t._queryIdentifier}function qg(t,e){return t.tagToQueryMap.get(e)}function Hg(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function Gg(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=Fh(t.pendingWriteTree_,e);return $g(r,n,i,null)}function AM(t){return t.fold((e,n,r)=>{if(n&&si(n))return[Uh(n)];{let i=[];return n&&(i=PS(n)),tt(r,(s,o)=>{i=i.concat(o)}),i}})}function Sa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(vM())(t._repo,t._path):t}function kM(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Bh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function PM(){return wM++}function NM(t,e,n){const r=e._path,i=al(t,e),s=LS(t,n),o=t.listenProvider_.startListening(Sa(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!si(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,h,f)=>{if(!ne(c)&&h&&si(h))return[Uh(h).query];{let m=[];return h&&(m=m.concat(PS(h).map(y=>y.query))),tt(f,(y,T)=>{m=m.concat(T)}),m}});for(let c=0;c<u.length;++c){const h=u[c];t.listenProvider_.stopListening(Sa(h),al(t,h))}}return o}/**
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
 */class Kg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Kg(n)}node(){return this.node_}}class Qg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=xe(this.path_,e);return new Qg(this.syncTree_,n)}node(){return jh(this.syncTree_,this.path_)}}const xM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},pE=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return bM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return DM(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},bM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},DM=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},MS=function(t,e,n,r){return Xg(e,new Qg(n,t),r)},Yg=function(t,e,n){return Xg(t,new Kg(e),n)};function Xg(t,e,n){const r=t.getPriority().val(),i=pE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=pE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ye(a,Ne(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ye(i))),o.forEachChild(Se,(a,u)=>{const c=Xg(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Jg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function zh(t,e){let n=e instanceof fe?e:new fe(e),r=t,i=te(n);for(;i!==null;){const s=$i(r.node.children,i)||{children:{},childCount:0};r=new Jg(i,r,s),n=ye(n),i=te(n)}return r}function rs(t){return t.node.value}function Zg(t,e){t.node.value=e,Qp(t)}function VS(t){return t.node.childCount>0}function OM(t){return rs(t)===void 0&&!VS(t)}function $h(t,e){tt(t.node.children,(n,r)=>{e(new Jg(n,t,r))})}function FS(t,e,n,r){n&&e(t),$h(t,i=>{FS(i,e,!0)})}function LM(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Dl(t){return new fe(t.parent===null?t.name:Dl(t.parent)+"/"+t.name)}function Qp(t){t.parent!==null&&MM(t.parent,t.name,t)}function MM(t,e,n){const r=OM(n),i=En(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Qp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Qp(t))}/**
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
 */const VM=/[\[\].#$\/\u0000-\u001F\u007F]/,FM=/[\[\].#$\u0000-\u001F\u007F]/,If=10*1024*1024,e_=function(t){return typeof t=="string"&&t.length!==0&&!VM.test(t)},US=function(t){return typeof t=="string"&&t.length!==0&&!FM.test(t)},UM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),US(t)},ll=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Lh(t)||t&&typeof t=="object"&&En(t,".sv")},Jc=function(t,e,n,r){r&&e===void 0||Ol(Ks(t,"value"),e,n)},Ol=function(t,e,n){const r=n instanceof fe?new n2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ki(r));if(typeof e=="function")throw new Error(t+"contains a function "+ki(r)+" with contents = "+e.toString());if(Lh(e))throw new Error(t+"contains "+e.toString()+" "+ki(r));if(typeof e=="string"&&e.length>If/3&&Ah(e)>If)throw new Error(t+"contains a string greater than "+If+" utf8 bytes "+ki(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(tt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!e_(o)))throw new Error(t+" contains an invalid key ("+o+") "+ki(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);r2(r,o),Ol(t,a,r),i2(r)}),i&&s)throw new Error(t+' contains ".value" child '+ki(r)+" in addition to actual children.")}},jM=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=nl(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!e_(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(t2);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Jt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},jS=function(t,e,n,r){const i=Ks(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];tt(e,(o,a)=>{const u=new fe(o);if(Ol(i,a,xe(n,u)),Ng(u)===".priority"&&!ll(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),jM(i,s)},BM=function(t,e,n){if(Lh(e))throw new Error(Ks(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ll(e))throw new Error(Ks(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},t_=function(t,e,n,r){if(!US(n))throw new Error(Ks(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zM=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),t_(t,e,n)},Lr=function(t,e){if(te(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$M=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!e_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!UM(n))throw new Error(Ks(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class WM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!xg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function BS(t,e,n){Wh(t,n),zS(t,r=>xg(r,e))}function Ht(t,e,n){Wh(t,n),zS(t,r=>Jt(r,e)||Jt(e,r))}function zS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(qM(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ea&&Ze("event: "+n.toString()),yo(r)}}}/**
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
 */const HM="repo_interrupt",GM=25;class KM{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$c(),this.transactionQueueTree_=new Jg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QM(t,e,n){if(t.stats_=kg(t.repoInfo_),t.forceRestClient_||RL())t.server_=new zc(t.repoInfo_,(r,i,s,o)=>{mE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>gE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ir(t.repoInfo_,e,(r,i,s,o)=>{mE(t,r,i,s,o)},r=>{gE(t,r)},r=>{YM(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=xL(t.repoInfo_,()=>new x2(t.stats_,t.server_)),t.infoData_=new R2,t.infoSyncTree_=new fE({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=bl(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),n_(t,"connected",!1),t.serverSyncTree_=new fE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);Ht(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function $S(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ll(t){return xM({timestamp:$S(t)})}function mE(t,e,n,r,i){t.dataUpdateCount++;const s=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=bc(n,c=>Ne(c));o=SM(t.serverSyncTree_,s,u,i)}else{const u=Ne(n);o=bS(t.serverSyncTree_,s,u,i)}else if(r){const u=bc(n,c=>Ne(c));o=TM(t.serverSyncTree_,s,u)}else{const u=Ne(n);o=bl(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=eo(t,s)),Ht(t.eventQueue_,a,o)}function gE(t,e){n_(t,"connected",e),e===!1&&eV(t)}function YM(t,e){tt(e,(n,r)=>{n_(t,n,r)})}function n_(t,e,n){const r=new fe("/.info/"+e),i=Ne(n);t.infoData_.updateSnapshot(r,i);const s=bl(t.infoSyncTree_,r,i);Ht(t.eventQueue_,r,s)}function qh(t){return t.nextWriteId_++}function XM(t,e,n){const r=RM(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Ne(i).withIndex(e._queryParams.getIndex());Kp(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=bl(t.serverSyncTree_,e._path,s);else{const a=al(t.serverSyncTree_,e);o=bS(t.serverSyncTree_,e._path,s,a)}return Ht(t.eventQueue_,e._path,o),Xc(t.serverSyncTree_,e,n,null,!0),s},i=>(Eo(t,"get for query "+He(e)+" failed: "+i),Promise.reject(new Error(i))))}function JM(t,e,n,r,i){Eo(t,"set",{path:e.toString(),value:n,priority:r});const s=Ll(t),o=Ne(n,r),a=jh(t.serverSyncTree_,e),u=Yg(o,a,s),c=qh(t),h=Wg(t.serverSyncTree_,e,u,c,!0);Wh(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(m,y)=>{const T=m==="ok";T||At("set at "+e+" failed: "+m);const k=Or(t.serverSyncTree_,c,!T);Ht(t.eventQueue_,e,k),oi(t,i,m,y)});const f=i_(t,e);eo(t,f),Ht(t.eventQueue_,f,[])}function ZM(t,e,n,r){Eo(t,"update",{path:e.toString(),value:n});let i=!0;const s=Ll(t),o={};if(tt(n,(a,u)=>{i=!1,o[a]=MS(xe(e,a),Ne(u),t.serverSyncTree_,s)}),i)Ze("update() called with empty data.  Don't do anything."),oi(t,r,"ok",void 0);else{const a=qh(t),u=EM(t.serverSyncTree_,e,o,a);Wh(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||At("update at "+e+" failed: "+c);const m=Or(t.serverSyncTree_,a,!f),y=m.length>0?eo(t,e):e;Ht(t.eventQueue_,y,m),oi(t,r,c,h)}),tt(n,c=>{const h=i_(t,xe(e,c));eo(t,h)}),Ht(t.eventQueue_,e,[])}}function eV(t){Eo(t,"onDisconnectEvents");const e=Ll(t),n=$c();zp(t.onDisconnect_,de(),(i,s)=>{const o=MS(i,s,t.serverSyncTree_,e);vo(n,i,o)});let r=[];zp(n,de(),(i,s)=>{r=r.concat(bl(t.serverSyncTree_,i,s));const o=i_(t,i);eo(t,o)}),t.onDisconnect_=$c(),Ht(t.eventQueue_,de(),r)}function tV(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Bp(t.onDisconnect_,e),oi(t,n,r,i)})}function _E(t,e,n,r){const i=Ne(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&vo(t.onDisconnect_,e,i),oi(t,r,s,o)})}function nV(t,e,n,r,i){const s=Ne(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&vo(t.onDisconnect_,e,s),oi(t,i,o,a)})}function rV(t,e,n,r){if(xc(n)){Ze("onDisconnect().update() called with empty data.  Don't do anything."),oi(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&tt(n,(o,a)=>{const u=Ne(a);vo(t.onDisconnect_,xe(e,o),u)}),oi(t,r,i,s)})}function iV(t,e,n){let r;te(e._path)===".info"?r=Kp(t.infoSyncTree_,e,n):r=Kp(t.serverSyncTree_,e,n),BS(t.eventQueue_,e._path,r)}function yE(t,e,n){let r;te(e._path)===".info"?r=Xc(t.infoSyncTree_,e,n):r=Xc(t.serverSyncTree_,e,n),BS(t.eventQueue_,e._path,r)}function sV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(HM)}function Eo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ze(n,...e)}function oi(t,e,n,r){e&&yo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function oV(t,e,n,r,i,s){Eo(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:BC(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=r_(t,e,void 0);o.currentInputSnapshot=a;const u=o.update(a.val());if(u===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ol("transaction failed: Data returned ",u,o.path),o.status=0;const c=zh(t.transactionQueueTree_,e),h=rs(c)||[];h.push(o),Zg(c,h);let f;typeof u=="object"&&u!==null&&En(u,".priority")?(f=$i(u,".priority"),B(ll(f),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):f=(jh(t.serverSyncTree_,e)||K.EMPTY_NODE).getPriority().val();const m=Ll(t),y=Ne(u,f),T=Yg(y,a,m);o.currentOutputSnapshotRaw=y,o.currentOutputSnapshotResolved=T,o.currentWriteId=qh(t);const k=Wg(t.serverSyncTree_,e,T,o.currentWriteId,o.applyLocally);Ht(t.eventQueue_,e,k),Hh(t,t.transactionQueueTree_)}}function r_(t,e,n){return jh(t.serverSyncTree_,e,n)||K.EMPTY_NODE}function Hh(t,e=t.transactionQueueTree_){if(e||Gh(t,e),rs(e)){const n=qS(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&aV(t,Dl(e),n)}else VS(e)&&$h(e,n=>{Hh(t,n)})}function aV(t,e,n){const r=n.map(c=>c.currentWriteId),i=r_(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=St(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Eo(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Or(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Gh(t,zh(t.transactionQueueTree_,e)),Hh(t,t.transactionQueueTree_),Ht(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)yo(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{At("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}eo(t,e)}},o)}function eo(t,e){const n=WS(t,e),r=Dl(n),i=qS(t,n);return lV(t,i,r),r}function lV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=St(n,u.path);let h=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,f=u.abortReason,i=i.concat(Or(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=GM)h=!0,f="maxretry",i=i.concat(Or(t.serverSyncTree_,u.currentWriteId,!0));else{const m=r_(t,u.path,o);u.currentInputSnapshot=m;const y=e[a].update(m.val());if(y!==void 0){Ol("transaction failed: Data returned ",y,u.path);let T=Ne(y);typeof y=="object"&&y!=null&&En(y,".priority")||(T=T.updatePriority(m.getPriority()));const x=u.currentWriteId,C=Ll(t),w=Yg(T,m,C);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=w,u.currentWriteId=qh(t),o.splice(o.indexOf(x),1),i=i.concat(Wg(t.serverSyncTree_,u.path,w,u.currentWriteId,u.applyLocally)),i=i.concat(Or(t.serverSyncTree_,x,!0))}else h=!0,f="nodata",i=i.concat(Or(t.serverSyncTree_,u.currentWriteId,!0))}Ht(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Gh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)yo(r[a]);Hh(t,t.transactionQueueTree_)}function WS(t,e){let n,r=t.transactionQueueTree_;for(n=te(e);n!==null&&rs(r)===void 0;)r=zh(r,n),e=ye(e),n=te(e);return r}function qS(t,e){const n=[];return HS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function HS(t,e,n){const r=rs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);$h(e,i=>{HS(t,i,n)})}function Gh(t,e){const n=rs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Zg(e,n.length>0?n:void 0)}$h(e,r=>{Gh(t,r)})}function i_(t,e){const n=Dl(WS(t,e)),r=zh(t.transactionQueueTree_,e);return LM(r,i=>{Cf(t,i)}),Cf(t,r),FS(r,i=>{Cf(t,i)}),n}function Cf(t,e){const n=rs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Or(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Zg(e,void 0):n.length=s+1,Ht(t.eventQueue_,Dl(e),i);for(let o=0;o<r.length;o++)yo(r[o])}}/**
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
 */function uV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):At(`Invalid query segment '${n}' in query '${t}'`)}return e}const vE=function(t,e){const n=hV(t),r=n.namespace;n.domain==="firebase.com"&&hr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_L();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new eS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new fe(n.pathString)}},hV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=uV(t.substring(h,f)));const m=cV(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const wE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",dV=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=wE.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=wE.charAt(e[i]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class fV{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class pV{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class GS{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class mV{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new cn;return tV(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Lr("OnDisconnect.remove",this._path);const e=new cn;return _E(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Lr("OnDisconnect.set",this._path),Jc("OnDisconnect.set",e,this._path,!1);const n=new cn;return _E(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Lr("OnDisconnect.setWithPriority",this._path),Jc("OnDisconnect.setWithPriority",e,this._path,!1),BM("OnDisconnect.setWithPriority",n);const r=new cn;return nV(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Lr("OnDisconnect.update",this._path),jS("OnDisconnect.update",e,this._path);const n=new cn;return rV(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class To{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ne(this._path)?null:Ng(this._path)}get ref(){return new jn(this._repo,this._path)}get _queryIdentifier(){const e=rE(this._queryParams),n=Rg(e);return n==="{}"?"default":n}get _queryObject(){return rE(this._queryParams)}isEqual(e){if(e=ue(e),!(e instanceof To))return!1;const n=this._repo===e._repo,r=xg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+e2(this._path)}}function gV(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function _V(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Mi){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Hi)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==ni)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Se){if(e!=null&&!ll(e)||n!=null&&!ll(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(B(t.getIndex()instanceof Og||t.getIndex()===gS,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class jn extends To{constructor(e,n){super(e,n,new Mg,!1)}get parent(){const e=uS(this._path);return e===null?null:new jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class to{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),r=ul(this.ref,e);return new to(this._node.getChild(n),r,Se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new to(i,ul(this.ref,r),Se)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ei(t,e){return t=ue(t),t._checkNotDeleted("ref"),e!==void 0?ul(t._root,e):t._root}function ul(t,e){return t=ue(t),te(t._path)===null?zM("child","path",e):t_("child","path",e),new jn(t._repo,xe(t._path,e))}function yV(t){return t=ue(t),new mV(t._repo,t._path)}function Hj(t,e){t=ue(t),Lr("push",t._path),Jc("push",e,t._path,!0);const n=$S(t._repo),r=dV(n),i=ul(t,r),s=ul(t,r);let o;return e!=null?o=Ra(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Gj(t){return Lr("remove",t._path),Ra(t,null)}function Ra(t,e){t=ue(t),Lr("set",t._path),Jc("set",e,t._path,!1);const n=new cn;return JM(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function vV(t,e){jS("update",e,t._path);const n=new cn;return ZM(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function wV(t){t=ue(t);const e=new GS(()=>{}),n=new Kh(e);return XM(t._repo,t,n).then(r=>new to(r,new jn(t._repo,t._path),t._queryParams.getIndex()))}class Kh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new fV("value",this,new to(e.snapshotNode,new jn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pV(this,e,n):null}matches(e){return e instanceof Kh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function EV(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const u=n,c=(h,f)=>{yE(t._repo,t,a),u(h,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new GS(n,s||void 0),a=new Kh(o);return iV(t._repo,t,a),()=>yE(t._repo,t,a)}function Yp(t,e,n,r){return EV(t,"value",e,n,r)}let s_=class{};class TV extends s_{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new To(e._repo,e._path,I2(e._queryParams,this._limit),e._orderByCalled)}}function Qj(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new TV(t)}class IV extends s_{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new To(e._repo,e._path,C2(e._queryParams,this._limit),e._orderByCalled)}}function Yj(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new IV(t)}class CV extends s_{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){gV(e,"orderByChild");const n=new fe(this._path);if(ne(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Og(n),i=S2(e._queryParams,r);return _V(i),new To(e._repo,e._path,i,!0)}}function Xj(t){return t_("orderByChild","path",t),new CV(t)}function Jj(t,...e){let n=ue(t);for(const r of e)n=r._apply(n);return n}fM(jn);yM(jn);/**
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
 */const SV="FIREBASE_DATABASE_EMULATOR_HOST",Xp={};let RV=!1;function AV(t,e,n,r){t.repoInfo_=new eS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function kV(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||hr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vE(s,i),a=o.repoInfo,u;typeof process<"u"&&Uw&&(u=Uw[SV]),u?(s=`http://${u}?ns=${a.namespace}`,o=vE(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new kL(t.name,t.options,e);$M("Invalid Firebase Database URL",o),ne(o.path)||hr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=NV(a,t,c,new AL(t.name,n));return new xV(h,t)}function PV(t,e){const n=Xp[e];(!n||n[t.key]!==t)&&hr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sV(t),delete n[t.key]}function NV(t,e,n,r){let i=Xp[e.name];i||(i={},Xp[e.name]=i);let s=i[t.toURLString()];return s&&hr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new KM(t,RV,n,r),i[t.toURLString()]=s,s}class xV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jn(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hr("Cannot call "+e+" on a deleted database.")}}function bV(t=pg(),e){const n=Ph(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=HI("database");r&&DV(n,...r)}return n}function DV(t,e,n,r={}){t=ue(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&hr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Yu(Yu.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:QI(r.mockUserToken,t.app.options.projectId);s=new Yu(o)}AV(i,e,n,s)}/**
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
 */function OV(t){dL(es),Wi(new ei("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return kV(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),xn(jw,Bw,t),xn(jw,Bw,"esm2017")}/**
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
 */const LV={".sv":"timestamp"};function Au(){return LV}/**
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
 */class MV{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function VV(t,e,n){var r;if(t=ue(t),Lr("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=void 0)!==null&&r!==void 0?r:!0,s=new cn,o=(u,c,h)=>{let f=null;u?s.reject(u):(f=new to(h,new jn(t._repo,t._path),Se),s.resolve(new MV(c,f)))},a=Yp(t,()=>{});return oV(t._repo,t._path,e,o,a,i),s.promise}ir.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ir.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};OV();var FV="firebase",UV="10.14.1";/**
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
 */xn(FV,UV,"app");var EE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vi,KS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function E(){}E.prototype=g.prototype,v.D=g.prototype,v.prototype=new E,v.prototype.constructor=v,v.C=function(S,P,N){for(var R=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)R[Ae-2]=arguments[Ae];return g.prototype[P].apply(S,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,E){E||(E=0);var S=Array(16);if(typeof g=="string")for(var P=0;16>P;++P)S[P]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(P=0;16>P;++P)S[P]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=v.g[0],E=v.g[1],P=v.g[2];var N=v.g[3],R=g+(N^E&(P^N))+S[0]+3614090360&4294967295;g=E+(R<<7&4294967295|R>>>25),R=N+(P^g&(E^P))+S[1]+3905402710&4294967295,N=g+(R<<12&4294967295|R>>>20),R=P+(E^N&(g^E))+S[2]+606105819&4294967295,P=N+(R<<17&4294967295|R>>>15),R=E+(g^P&(N^g))+S[3]+3250441966&4294967295,E=P+(R<<22&4294967295|R>>>10),R=g+(N^E&(P^N))+S[4]+4118548399&4294967295,g=E+(R<<7&4294967295|R>>>25),R=N+(P^g&(E^P))+S[5]+1200080426&4294967295,N=g+(R<<12&4294967295|R>>>20),R=P+(E^N&(g^E))+S[6]+2821735955&4294967295,P=N+(R<<17&4294967295|R>>>15),R=E+(g^P&(N^g))+S[7]+4249261313&4294967295,E=P+(R<<22&4294967295|R>>>10),R=g+(N^E&(P^N))+S[8]+1770035416&4294967295,g=E+(R<<7&4294967295|R>>>25),R=N+(P^g&(E^P))+S[9]+2336552879&4294967295,N=g+(R<<12&4294967295|R>>>20),R=P+(E^N&(g^E))+S[10]+4294925233&4294967295,P=N+(R<<17&4294967295|R>>>15),R=E+(g^P&(N^g))+S[11]+2304563134&4294967295,E=P+(R<<22&4294967295|R>>>10),R=g+(N^E&(P^N))+S[12]+1804603682&4294967295,g=E+(R<<7&4294967295|R>>>25),R=N+(P^g&(E^P))+S[13]+4254626195&4294967295,N=g+(R<<12&4294967295|R>>>20),R=P+(E^N&(g^E))+S[14]+2792965006&4294967295,P=N+(R<<17&4294967295|R>>>15),R=E+(g^P&(N^g))+S[15]+1236535329&4294967295,E=P+(R<<22&4294967295|R>>>10),R=g+(P^N&(E^P))+S[1]+4129170786&4294967295,g=E+(R<<5&4294967295|R>>>27),R=N+(E^P&(g^E))+S[6]+3225465664&4294967295,N=g+(R<<9&4294967295|R>>>23),R=P+(g^E&(N^g))+S[11]+643717713&4294967295,P=N+(R<<14&4294967295|R>>>18),R=E+(N^g&(P^N))+S[0]+3921069994&4294967295,E=P+(R<<20&4294967295|R>>>12),R=g+(P^N&(E^P))+S[5]+3593408605&4294967295,g=E+(R<<5&4294967295|R>>>27),R=N+(E^P&(g^E))+S[10]+38016083&4294967295,N=g+(R<<9&4294967295|R>>>23),R=P+(g^E&(N^g))+S[15]+3634488961&4294967295,P=N+(R<<14&4294967295|R>>>18),R=E+(N^g&(P^N))+S[4]+3889429448&4294967295,E=P+(R<<20&4294967295|R>>>12),R=g+(P^N&(E^P))+S[9]+568446438&4294967295,g=E+(R<<5&4294967295|R>>>27),R=N+(E^P&(g^E))+S[14]+3275163606&4294967295,N=g+(R<<9&4294967295|R>>>23),R=P+(g^E&(N^g))+S[3]+4107603335&4294967295,P=N+(R<<14&4294967295|R>>>18),R=E+(N^g&(P^N))+S[8]+1163531501&4294967295,E=P+(R<<20&4294967295|R>>>12),R=g+(P^N&(E^P))+S[13]+2850285829&4294967295,g=E+(R<<5&4294967295|R>>>27),R=N+(E^P&(g^E))+S[2]+4243563512&4294967295,N=g+(R<<9&4294967295|R>>>23),R=P+(g^E&(N^g))+S[7]+1735328473&4294967295,P=N+(R<<14&4294967295|R>>>18),R=E+(N^g&(P^N))+S[12]+2368359562&4294967295,E=P+(R<<20&4294967295|R>>>12),R=g+(E^P^N)+S[5]+4294588738&4294967295,g=E+(R<<4&4294967295|R>>>28),R=N+(g^E^P)+S[8]+2272392833&4294967295,N=g+(R<<11&4294967295|R>>>21),R=P+(N^g^E)+S[11]+1839030562&4294967295,P=N+(R<<16&4294967295|R>>>16),R=E+(P^N^g)+S[14]+4259657740&4294967295,E=P+(R<<23&4294967295|R>>>9),R=g+(E^P^N)+S[1]+2763975236&4294967295,g=E+(R<<4&4294967295|R>>>28),R=N+(g^E^P)+S[4]+1272893353&4294967295,N=g+(R<<11&4294967295|R>>>21),R=P+(N^g^E)+S[7]+4139469664&4294967295,P=N+(R<<16&4294967295|R>>>16),R=E+(P^N^g)+S[10]+3200236656&4294967295,E=P+(R<<23&4294967295|R>>>9),R=g+(E^P^N)+S[13]+681279174&4294967295,g=E+(R<<4&4294967295|R>>>28),R=N+(g^E^P)+S[0]+3936430074&4294967295,N=g+(R<<11&4294967295|R>>>21),R=P+(N^g^E)+S[3]+3572445317&4294967295,P=N+(R<<16&4294967295|R>>>16),R=E+(P^N^g)+S[6]+76029189&4294967295,E=P+(R<<23&4294967295|R>>>9),R=g+(E^P^N)+S[9]+3654602809&4294967295,g=E+(R<<4&4294967295|R>>>28),R=N+(g^E^P)+S[12]+3873151461&4294967295,N=g+(R<<11&4294967295|R>>>21),R=P+(N^g^E)+S[15]+530742520&4294967295,P=N+(R<<16&4294967295|R>>>16),R=E+(P^N^g)+S[2]+3299628645&4294967295,E=P+(R<<23&4294967295|R>>>9),R=g+(P^(E|~N))+S[0]+4096336452&4294967295,g=E+(R<<6&4294967295|R>>>26),R=N+(E^(g|~P))+S[7]+1126891415&4294967295,N=g+(R<<10&4294967295|R>>>22),R=P+(g^(N|~E))+S[14]+2878612391&4294967295,P=N+(R<<15&4294967295|R>>>17),R=E+(N^(P|~g))+S[5]+4237533241&4294967295,E=P+(R<<21&4294967295|R>>>11),R=g+(P^(E|~N))+S[12]+1700485571&4294967295,g=E+(R<<6&4294967295|R>>>26),R=N+(E^(g|~P))+S[3]+2399980690&4294967295,N=g+(R<<10&4294967295|R>>>22),R=P+(g^(N|~E))+S[10]+4293915773&4294967295,P=N+(R<<15&4294967295|R>>>17),R=E+(N^(P|~g))+S[1]+2240044497&4294967295,E=P+(R<<21&4294967295|R>>>11),R=g+(P^(E|~N))+S[8]+1873313359&4294967295,g=E+(R<<6&4294967295|R>>>26),R=N+(E^(g|~P))+S[15]+4264355552&4294967295,N=g+(R<<10&4294967295|R>>>22),R=P+(g^(N|~E))+S[6]+2734768916&4294967295,P=N+(R<<15&4294967295|R>>>17),R=E+(N^(P|~g))+S[13]+1309151649&4294967295,E=P+(R<<21&4294967295|R>>>11),R=g+(P^(E|~N))+S[4]+4149444226&4294967295,g=E+(R<<6&4294967295|R>>>26),R=N+(E^(g|~P))+S[11]+3174756917&4294967295,N=g+(R<<10&4294967295|R>>>22),R=P+(g^(N|~E))+S[2]+718787259&4294967295,P=N+(R<<15&4294967295|R>>>17),R=E+(N^(P|~g))+S[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,v.g[2]=v.g[2]+P&4294967295,v.g[3]=v.g[3]+N&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var E=g-this.blockSize,S=this.B,P=this.h,N=0;N<g;){if(P==0)for(;N<=E;)i(this,v,N),N+=this.blockSize;if(typeof v=="string"){for(;N<g;)if(S[P++]=v.charCodeAt(N++),P==this.blockSize){i(this,S),P=0;break}}else for(;N<g;)if(S[P++]=v[N++],P==this.blockSize){i(this,S),P=0;break}}this.h=P,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var E=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=E&255,E/=256;for(this.u(v),v=Array(16),g=E=0;4>g;++g)for(var S=0;32>S;S+=8)v[E++]=this.g[g]>>>S&255;return v};function s(v,g){var E=a;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=g(v)}function o(v,g){this.h=g;for(var E=[],S=!0,P=v.length-1;0<=P;P--){var N=v[P]|0;S&&N==g||(E[P]=N,S=!1)}this.g=E}var a={};function u(v){return-128<=v&&128>v?s(v,function(g){return new o([g|0],0>g?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return f;if(0>v)return x(c(-v));for(var g=[],E=1,S=0;v>=E;S++)g[S]=v/E|0,E*=4294967296;return new o(g,0)}function h(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return x(h(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(g,8)),S=f,P=0;P<v.length;P+=8){var N=Math.min(8,v.length-P),R=parseInt(v.substring(P,P+N),g);8>N?(N=c(Math.pow(g,N)),S=S.j(N).add(c(R))):(S=S.j(E),S=S.add(c(R)))}return S}var f=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var v=0,g=1,E=0;E<this.g.length;E++){var S=this.i(E);v+=(0<=S?S:4294967296+S)*g,g*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T(this))return"0";if(k(this))return"-"+x(this).toString(v);for(var g=c(Math.pow(v,6)),E=this,S="";;){var P=D(E,g).g;E=C(E,P.j(g));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(v);if(E=P,T(E))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function T(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function k(v){return v.h==-1}t.l=function(v){return v=C(this,v),k(v)?-1:T(v)?0:1};function x(v){for(var g=v.g.length,E=[],S=0;S<g;S++)E[S]=~v.g[S];return new o(E,~v.h).add(m)}t.abs=function(){return k(this)?x(this):this},t.add=function(v){for(var g=Math.max(this.g.length,v.g.length),E=[],S=0,P=0;P<=g;P++){var N=S+(this.i(P)&65535)+(v.i(P)&65535),R=(N>>>16)+(this.i(P)>>>16)+(v.i(P)>>>16);S=R>>>16,N&=65535,R&=65535,E[P]=R<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function C(v,g){return v.add(x(g))}t.j=function(v){if(T(this)||T(v))return f;if(k(this))return k(v)?x(this).j(x(v)):x(x(this).j(v));if(k(v))return x(this.j(x(v)));if(0>this.l(y)&&0>v.l(y))return c(this.m()*v.m());for(var g=this.g.length+v.g.length,E=[],S=0;S<2*g;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var P=0;P<v.g.length;P++){var N=this.i(S)>>>16,R=this.i(S)&65535,Ae=v.i(P)>>>16,Nt=v.i(P)&65535;E[2*S+2*P]+=R*Nt,w(E,2*S+2*P),E[2*S+2*P+1]+=N*Nt,w(E,2*S+2*P+1),E[2*S+2*P+1]+=R*Ae,w(E,2*S+2*P+1),E[2*S+2*P+2]+=N*Ae,w(E,2*S+2*P+2)}for(S=0;S<g;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=g;S<2*g;S++)E[S]=0;return new o(E,0)};function w(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function A(v,g){this.g=v,this.h=g}function D(v,g){if(T(g))throw Error("division by zero");if(T(v))return new A(f,f);if(k(v))return g=D(x(v),g),new A(x(g.g),x(g.h));if(k(g))return g=D(v,x(g)),new A(x(g.g),g.h);if(30<v.g.length){if(k(v)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var E=m,S=g;0>=S.l(v);)E=F(E),S=F(S);var P=U(E,1),N=U(S,1);for(S=U(S,2),E=U(E,2);!T(S);){var R=N.add(S);0>=R.l(v)&&(P=P.add(E),N=R),S=U(S,1),E=U(E,1)}return g=C(v,P.j(g)),new A(P,g)}for(P=f;0<=v.l(g);){for(E=Math.max(1,Math.floor(v.m()/g.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=c(E),R=N.j(g);k(R)||0<R.l(v);)E-=S,N=c(E),R=N.j(g);T(N)&&(N=m),P=P.add(N),v=C(v,R)}return new A(P,v)}t.A=function(v){return D(this,v).h},t.and=function(v){for(var g=Math.max(this.g.length,v.g.length),E=[],S=0;S<g;S++)E[S]=this.i(S)&v.i(S);return new o(E,this.h&v.h)},t.or=function(v){for(var g=Math.max(this.g.length,v.g.length),E=[],S=0;S<g;S++)E[S]=this.i(S)|v.i(S);return new o(E,this.h|v.h)},t.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),E=[],S=0;S<g;S++)E[S]=this.i(S)^v.i(S);return new o(E,this.h^v.h)};function F(v){for(var g=v.g.length+1,E=[],S=0;S<g;S++)E[S]=v.i(S)<<1|v.i(S-1)>>>31;return new o(E,v.h)}function U(v,g){var E=g>>5;g%=32;for(var S=v.g.length-E,P=[],N=0;N<S;N++)P[N]=0<g?v.i(N+E)>>>g|v.i(N+E+1)<<32-g:v.i(N+E);return new o(P,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,KS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Vi=o}).apply(typeof EE<"u"?EE:typeof self<"u"?self:typeof window<"u"?window:{});var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var QS,aa,YS,Ju,Jp,XS,JS,ZS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ku=="object"&&ku];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var b=l[_];if(!(b in p))break e;p=p[b]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,_=!1,b={next:function(){if(!_&&p<l.length){var L=p++;return{value:d(L,l[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,_),l.apply(d,b)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function y(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function T(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,b,L){for(var z=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)z[_e-2]=arguments[_e];return d.prototype[b].apply(_,z)}}function k(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function x(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const b=l.length||0,L=_.length||0;l.length=b+L;for(let z=0;z<L;z++)l[b+z]=_[z]}else l.push(_)}}class C{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var F=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function U(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function v(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function g(l){const d={};for(const p in l)d[p]=l[p];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(l,d){let p,_;for(let b=1;b<arguments.length;b++){_=arguments[b];for(p in _)l[p]=_[p];for(let L=0;L<E.length;L++)p=E[L],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function P(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function R(){var l=X;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Ae{constructor(){this.h=this.g=null}add(d,p){const _=Nt.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Nt=new C(()=>new _r,l=>l.reset());class _r{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Tn,$=!1,X=new Ae,ee=()=>{const l=a.Promise.resolve(void 0);Tn=()=>{l.then(ke)}};var ke=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(p){N(p)}var d=Nt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}$=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Bn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function zn(l,d){if(Ue.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(F){e:{try{D(d.nodeName);var b=!0;break e}catch{}b=!1}b||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:$n[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&zn.aa.h.call(this)}}T(zn,Ue);var $n={2:"touch",3:"pen",4:"mouse"};zn.prototype.h=function(){zn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Wn="closure_listenable_"+(1e6*Math.random()|0),tk=0;function nk(l,d,p,_,b){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=b,this.key=++tk,this.da=this.fa=!1}function $l(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Wl(l){this.src=l,this.g={},this.h=0}Wl.prototype.add=function(l,d,p,_,b){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var z=pd(l,d,_,b);return-1<z?(d=l[z],p||(d.fa=!1)):(d=new nk(d,this.src,L,!!_,b),d.fa=p,l.push(d)),d};function fd(l,d){var p=d.type;if(p in l.g){var _=l.g[p],b=Array.prototype.indexOf.call(_,d,void 0),L;(L=0<=b)&&Array.prototype.splice.call(_,b,1),L&&($l(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function pd(l,d,p,_){for(var b=0;b<l.length;++b){var L=l[b];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==_)return b}return-1}var md="closure_lm_"+(1e6*Math.random()|0),gd={};function H_(l,d,p,_,b){if(Array.isArray(d)){for(var L=0;L<d.length;L++)H_(l,d[L],p,_,b);return null}return p=Q_(p),l&&l[Wn]?l.K(d,p,c(_)?!!_.capture:!1,b):rk(l,d,p,!1,_,b)}function rk(l,d,p,_,b,L){if(!d)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,_e=yd(l);if(_e||(l[md]=_e=new Wl(l)),p=_e.add(d,p,_,z,L),p.proxy)return p;if(_=ik(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)Bn||(b=z),b===void 0&&(b=!1),l.addEventListener(d.toString(),_,b);else if(l.attachEvent)l.attachEvent(K_(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ik(){function l(p){return d.call(l.src,l.listener,p)}const d=sk;return l}function G_(l,d,p,_,b){if(Array.isArray(d))for(var L=0;L<d.length;L++)G_(l,d[L],p,_,b);else _=c(_)?!!_.capture:!!_,p=Q_(p),l&&l[Wn]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],p=pd(L,p,_,b),-1<p&&($l(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=yd(l))&&(d=l.g[d.toString()],l=-1,d&&(l=pd(d,p,_,b)),(p=-1<l?d[l]:null)&&_d(p))}function _d(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Wn])fd(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(K_(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=yd(d))?(fd(p,l),p.h==0&&(p.src=null,d[md]=null)):$l(l)}}}function K_(l){return l in gd?gd[l]:gd[l]="on"+l}function sk(l,d){if(l.da)l=!0;else{d=new zn(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&_d(l),l=p.call(_,d)}return l}function yd(l){return l=l[md],l instanceof Wl?l:null}var vd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q_(l){return typeof l=="function"?l:(l[vd]||(l[vd]=function(d){return l.handleEvent(d)}),l[vd])}function ct(){ge.call(this),this.i=new Wl(this),this.M=this,this.F=null}T(ct,ge),ct.prototype[Wn]=!0,ct.prototype.removeEventListener=function(l,d,p,_){G_(this,l,d,p,_)};function Tt(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new Ue(d,l);else if(d instanceof Ue)d.target=d.target||l;else{var b=d;d=new Ue(_,l),S(d,b)}if(b=!0,p)for(var L=p.length-1;0<=L;L--){var z=d.g=p[L];b=ql(z,_,!0,d)&&b}if(z=d.g=l,b=ql(z,_,!0,d)&&b,b=ql(z,_,!1,d)&&b,p)for(L=0;L<p.length;L++)z=d.g=p[L],b=ql(z,_,!1,d)&&b}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)$l(p[_]);delete l.g[d],l.h--}}this.F=null},ct.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},ct.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function ql(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var b=!0,L=0;L<d.length;++L){var z=d[L];if(z&&!z.da&&z.capture==p){var _e=z.listener,nt=z.ha||z.src;z.fa&&fd(l.i,z),b=_e.call(nt,_)!==!1&&b}}return b&&!_.defaultPrevented}function Y_(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function X_(l){l.g=Y_(()=>{l.g=null,l.i&&(l.i=!1,X_(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class ok extends ge{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:X_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ko(l){ge.call(this),this.h=l,this.g={}}T(ko,ge);var J_=[];function Z_(l){U(l.g,function(d,p){this.g.hasOwnProperty(p)&&_d(d)},l),l.g={}}ko.prototype.N=function(){ko.aa.N.call(this),Z_(this)},ko.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wd=a.JSON.stringify,ak=a.JSON.parse,lk=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ed(){}Ed.prototype.h=null;function ey(l){return l.h||(l.h=l.i())}function ty(){}var Po={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Td(){Ue.call(this,"d")}T(Td,Ue);function Id(){Ue.call(this,"c")}T(Id,Ue);var _i={},ny=null;function Hl(){return ny=ny||new ct}_i.La="serverreachability";function ry(l){Ue.call(this,_i.La,l)}T(ry,Ue);function No(l){const d=Hl();Tt(d,new ry(d))}_i.STAT_EVENT="statevent";function iy(l,d){Ue.call(this,_i.STAT_EVENT,l),this.stat=d}T(iy,Ue);function It(l){const d=Hl();Tt(d,new iy(d,l))}_i.Ma="timingevent";function sy(l,d){Ue.call(this,_i.Ma,l),this.size=d}T(sy,Ue);function xo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function bo(){this.g=!0}bo.prototype.xa=function(){this.g=!1};function uk(l,d,p,_,b,L){l.info(function(){if(l.g)if(L)for(var z="",_e=L.split("&"),nt=0;nt<_e.length;nt++){var ce=_e[nt].split("=");if(1<ce.length){var ht=ce[0];ce=ce[1];var dt=ht.split("_");z=2<=dt.length&&dt[1]=="type"?z+(ht+"="+ce+"&"):z+(ht+"=redacted&")}}else z=null;else z=L;return"XMLHTTP REQ ("+_+") [attempt "+b+"]: "+d+`
`+p+`
`+z})}function ck(l,d,p,_,b,L,z){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+b+"]: "+d+`
`+p+`
`+L+" "+z})}function os(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+dk(l,p)+(_?" "+_:"")})}function hk(l,d){l.info(function(){return"TIMEOUT: "+d})}bo.prototype.info=function(){};function dk(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var b=_[1];if(Array.isArray(b)&&!(1>b.length)){var L=b[0];if(L!="noop"&&L!="stop"&&L!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return wd(p)}catch{return d}}var Gl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cd;function Kl(){}T(Kl,Ed),Kl.prototype.g=function(){return new XMLHttpRequest},Kl.prototype.i=function(){return{}},Cd=new Kl;function yr(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new ko(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ay}function ay(){this.i=null,this.g="",this.h=!1}var ly={},Sd={};function Rd(l,d,p){l.L=1,l.v=Jl(qn(d)),l.m=p,l.P=!0,uy(l,null)}function uy(l,d){l.F=Date.now(),Ql(l),l.A=qn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Iy(p.i,"t",_),l.C=0,p=l.j.J,l.h=new ay,l.g=By(l.j,p?d:null,!l.m),0<l.O&&(l.M=new ok(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(J_[0]=b.toString()),b=J_);for(var L=0;L<b.length;L++){var z=H_(p,b[L],_||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=l.H?g(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),No(),uk(l.i,l.u,l.A,l.l,l.R,l.m)}yr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Hn(l)==3?d.j():this.Y(l)},yr.prototype.Y=function(l){try{if(l==this.g)e:{const dt=Hn(this.g);var d=this.g.Ba();const us=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Ny(this.g)))){this.J||dt!=4||d==7||(d==8||0>=us?No(3):No(2)),Ad(this);var p=this.g.Z();this.X=p;t:if(cy(this)){var _=Ny(this.g);l="";var b=_.length,L=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yi(this),Do(this);var z="";break t}this.h.i=new a.TextDecoder}for(d=0;d<b;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(L&&d==b-1)});_.length=0,this.h.g+=l,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,ck(this.i,this.u,this.A,this.l,this.R,dt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,nt=this.g;if((_e=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(_e)){var ce=_e;break t}}ce=null}if(p=ce)os(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kd(this,p);else{this.o=!1,this.s=3,It(12),yi(this),Do(this);break e}}if(this.P){p=!0;let sn;for(;!this.J&&this.C<z.length;)if(sn=fk(this,z),sn==Sd){dt==4&&(this.s=4,It(14),p=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==ly){this.s=4,It(15),os(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else os(this.i,this.l,sn,null),kd(this,sn);if(cy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||z.length!=0||this.h.h||(this.s=1,It(16),p=!1),this.o=this.o&&p,!p)os(this.i,this.l,z,"[Invalid Chunked Response]"),yi(this),Do(this);else if(0<z.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Od(ht),ht.M=!0,It(11))}}else os(this.i,this.l,z,null),kd(this,z);dt==4&&yi(this),this.o&&!this.J&&(dt==4?Vy(this.j,this):(this.o=!1,Ql(this)))}else Nk(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),yi(this),Do(this)}}}catch{}finally{}};function cy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function fk(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?Sd:(p=Number(d.substring(p,_)),isNaN(p)?ly:(_+=1,_+p>d.length?Sd:(d=d.slice(_,_+p),l.C=_+p,d)))}yr.prototype.cancel=function(){this.J=!0,yi(this)};function Ql(l){l.S=Date.now()+l.I,hy(l,l.I)}function hy(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=xo(m(l.ba,l),d)}function Ad(l){l.B&&(a.clearTimeout(l.B),l.B=null)}yr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(hk(this.i,this.A),this.L!=2&&(No(),It(17)),yi(this),this.s=2,Do(this)):hy(this,this.S-l)};function Do(l){l.j.G==0||l.J||Vy(l.j,l)}function yi(l){Ad(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Z_(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function kd(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Pd(p.h,l))){if(!l.K&&Pd(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var b=_;if(b[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)iu(p),nu(p);else break e;Dd(p),It(18)}}else p.za=b[1],0<p.za-p.T&&37500>b[2]&&p.F&&p.v==0&&!p.C&&(p.C=xo(m(p.Za,p),6e3));if(1>=py(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else wi(p,11)}else if((l.K||p.g==l)&&iu(p),!w(d))for(b=p.Da.g.parse(d),d=0;d<b.length;d++){let ce=b[d];if(p.T=ce[0],ce=ce[1],p.G==2)if(ce[0]=="c"){p.K=ce[1],p.ia=ce[2];const ht=ce[3];ht!=null&&(p.la=ht,p.j.info("VER="+p.la));const dt=ce[4];dt!=null&&(p.Aa=dt,p.j.info("SVER="+p.Aa));const us=ce[5];us!=null&&typeof us=="number"&&0<us&&(_=1.5*us,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const sn=l.g;if(sn){const ou=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ou){var L=_.h;L.g||ou.indexOf("spdy")==-1&&ou.indexOf("quic")==-1&&ou.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Nd(L,L.h),L.h=null))}if(_.D){const Ld=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ld&&(_.ya=Ld,Ee(_.I,_.D,Ld))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var z=l;if(_.qa=jy(_,_.J?_.ia:null,_.W),z.K){my(_.h,z);var _e=z,nt=_.L;nt&&(_e.I=nt),_e.B&&(Ad(_e),Ql(_e)),_.g=z}else Ly(_);0<p.i.length&&ru(p)}else ce[0]!="stop"&&ce[0]!="close"||wi(p,7);else p.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?wi(p,7):bd(p):ce[0]!="noop"&&p.l&&p.l.ta(ce),p.v=0)}}No(4)}catch{}}var pk=class{constructor(l,d){this.g=l,this.map=d}};function dy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function py(l){return l.h?1:l.g?l.g.size:0}function Pd(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Nd(l,d){l.g?l.g.add(d):l.h=d}function my(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}dy.prototype.cancel=function(){if(this.i=gy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function gy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return k(l.i)}function mk(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function gk(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function _y(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=gk(l),_=mk(l),b=_.length,L=0;L<b;L++)d.call(void 0,_[L],p&&p[L],l)}var yy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _k(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),b=null;if(0<=_){var L=l[p].substring(0,_);b=l[p].substring(_+1)}else L=l[p];d(L,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function vi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof vi){this.h=l.h,Yl(this,l.j),this.o=l.o,this.g=l.g,Xl(this,l.s),this.l=l.l;var d=l.i,p=new Mo;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),vy(this,p),this.m=l.m}else l&&(d=String(l).match(yy))?(this.h=!1,Yl(this,d[1]||"",!0),this.o=Oo(d[2]||""),this.g=Oo(d[3]||"",!0),Xl(this,d[4]),this.l=Oo(d[5]||"",!0),vy(this,d[6]||"",!0),this.m=Oo(d[7]||"")):(this.h=!1,this.i=new Mo(null,this.h))}vi.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Lo(d,wy,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Lo(d,wy,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Lo(p,p.charAt(0)=="/"?wk:vk,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Lo(p,Tk)),l.join("")};function qn(l){return new vi(l)}function Yl(l,d,p){l.j=p?Oo(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Xl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function vy(l,d,p){d instanceof Mo?(l.i=d,Ik(l.i,l.h)):(p||(d=Lo(d,Ek)),l.i=new Mo(d,l.h))}function Ee(l,d,p){l.i.set(d,p)}function Jl(l){return Ee(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Oo(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Lo(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,yk),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function yk(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var wy=/[#\/\?@]/g,vk=/[#\?:]/g,wk=/[#\?]/g,Ek=/[#\?@]/g,Tk=/#/g;function Mo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function vr(l){l.g||(l.g=new Map,l.h=0,l.i&&_k(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Mo.prototype,t.add=function(l,d){vr(this),this.i=null,l=as(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Ey(l,d){vr(l),d=as(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Ty(l,d){return vr(l),d=as(l,d),l.g.has(d)}t.forEach=function(l,d){vr(this),this.g.forEach(function(p,_){p.forEach(function(b){l.call(d,b,_,this)},this)},this)},t.na=function(){vr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const b=l[_];for(let L=0;L<b.length;L++)p.push(d[_])}return p},t.V=function(l){vr(this);let d=[];if(typeof l=="string")Ty(this,l)&&(d=d.concat(this.g.get(as(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return vr(this),this.i=null,l=as(this,l),Ty(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Iy(l,d,p){Ey(l,d),0<p.length&&(l.i=null,l.g.set(as(l,d),k(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const L=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var b=L;z[_]!==""&&(b+="="+encodeURIComponent(String(z[_]))),l.push(b)}}return this.i=l.join("&")};function as(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Ik(l,d){d&&!l.j&&(vr(l),l.i=null,l.g.forEach(function(p,_){var b=_.toLowerCase();_!=b&&(Ey(this,_),Iy(this,b,p))},l)),l.j=d}function Ck(l,d){const p=new bo;if(a.Image){const _=new Image;_.onload=y(wr,p,"TestLoadImage: loaded",!0,d,_),_.onerror=y(wr,p,"TestLoadImage: error",!1,d,_),_.onabort=y(wr,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=y(wr,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function Sk(l,d){const p=new bo,_=new AbortController,b=setTimeout(()=>{_.abort(),wr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(L=>{clearTimeout(b),L.ok?wr(p,"TestPingServer: ok",!0,d):wr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),wr(p,"TestPingServer: error",!1,d)})}function wr(l,d,p,_,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),_(p)}catch{}}function Rk(){this.g=new lk}function Ak(l,d,p){const _=p||"";try{_y(l,function(b,L){let z=b;c(b)&&(z=wd(b)),d.push(_+L+"="+encodeURIComponent(z))})}catch(b){throw d.push(_+"type="+encodeURIComponent("_badmap")),b}}function Zl(l){this.l=l.Ub||null,this.j=l.eb||!1}T(Zl,Ed),Zl.prototype.g=function(){return new eu(this.l,this.j)},Zl.prototype.i=function(l){return function(){return l}}({});function eu(l,d){ct.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(eu,ct),t=eu.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Fo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Fo(this)),this.g&&(this.readyState=3,Fo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Vo(this):Fo(this),this.readyState==3&&Cy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Vo(this))},t.Qa=function(l){this.g&&(this.response=l,Vo(this))},t.ga=function(){this.g&&Vo(this)};function Vo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Fo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Fo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(eu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Sy(l){let d="";return U(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function xd(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Sy(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Ee(l,d,p))}function Me(l){ct.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Me,ct);var kk=/^https?$/i,Pk=["POST","PUT"];t=Me.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cd.g(),this.v=this.o?ey(this.o):ey(Cd),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){Ry(this,L);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var b in _)p.set(b,_[b]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())p.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Pk,d,void 0))||_||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of p)this.g.setRequestHeader(L,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Py(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){Ry(this,L)}};function Ry(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Ay(l),tu(l)}function Ay(l){l.A||(l.A=!0,Tt(l,"complete"),Tt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Tt(this,"complete"),Tt(this,"abort"),tu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tu(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ky(this):this.bb())},t.bb=function(){ky(this)};function ky(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Hn(l)!=4||l.Z()!=2)){if(l.u&&Hn(l)==4)Y_(l.Ea,0,l);else if(Tt(l,"readystatechange"),Hn(l)==4){l.h=!1;try{const z=l.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=z===0){var b=String(l.D).match(yy)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),_=!kk.test(b?b.toLowerCase():"")}p=_}if(p)Tt(l,"complete"),Tt(l,"success");else{l.m=6;try{var L=2<Hn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",Ay(l)}}finally{tu(l)}}}}function tu(l,d){if(l.g){Py(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||Tt(l,"ready");try{p.onreadystatechange=_}catch{}}}function Py(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Hn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),ak(d)}};function Ny(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Nk(l){const d={};l=(l.g&&2<=Hn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(w(l[_]))continue;var p=P(l[_]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[b]||[];d[b]=L,L.push(p)}v(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Uo(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function xy(l){this.Aa=0,this.i=[],this.j=new bo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Uo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Uo("baseRetryDelayMs",5e3,l),this.cb=Uo("retryDelaySeedMs",1e4,l),this.Wa=Uo("forwardChannelMaxRetries",2,l),this.wa=Uo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new dy(l&&l.concurrentRequestLimit),this.Da=new Rk,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xy.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,_){It(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=jy(this,null,this.W),ru(this)};function bd(l){if(by(l),l.G==3){var d=l.U++,p=qn(l.I);if(Ee(p,"SID",l.K),Ee(p,"RID",d),Ee(p,"TYPE","terminate"),jo(l,p),d=new yr(l,l.j,d),d.L=2,d.v=Jl(qn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=By(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ql(d)}Uy(l)}function nu(l){l.g&&(Od(l),l.g.cancel(),l.g=null)}function by(l){nu(l),l.u&&(a.clearTimeout(l.u),l.u=null),iu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ru(l){if(!fy(l.h)&&!l.s){l.s=!0;var d=l.Ga;Tn||ee(),$||(Tn(),$=!0),X.add(d,l),l.B=0}}function xk(l,d){return py(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=xo(m(l.Ga,l,d),Fy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new yr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=g(L),S(L,this.S)):L=this.S),this.m!==null||this.O||(b.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Oy(this,b,d),p=qn(this.I),Ee(p,"RID",l),Ee(p,"CVER",22),this.D&&Ee(p,"X-HTTP-Session-Id",this.D),jo(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(Sy(L)))+"&"+d:this.m&&xd(p,this.m,L)),Nd(this.h,b),this.Ua&&Ee(p,"TYPE","init"),this.P?(Ee(p,"$req",d),Ee(p,"SID","null"),b.T=!0,Rd(b,p,null)):Rd(b,p,d),this.G=2}}else this.G==3&&(l?Dy(this,l):this.i.length==0||fy(this.h)||Dy(this))};function Dy(l,d){var p;d?p=d.l:p=l.U++;const _=qn(l.I);Ee(_,"SID",l.K),Ee(_,"RID",p),Ee(_,"AID",l.T),jo(l,_),l.m&&l.o&&xd(_,l.m,l.o),p=new yr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Oy(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Nd(l.h,p),Rd(p,_,d)}function jo(l,d){l.H&&U(l.H,function(p,_){Ee(d,_,p)}),l.l&&_y({},function(p,_){Ee(d,_,p)})}function Oy(l,d,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var b=l.i;let L=-1;for(;;){const z=["count="+p];L==-1?0<p?(L=b[0].g,z.push("ofs="+L)):L=0:z.push("ofs="+L);let _e=!0;for(let nt=0;nt<p;nt++){let ce=b[nt].g;const ht=b[nt].map;if(ce-=L,0>ce)L=Math.max(0,b[nt].g-100),_e=!1;else try{Ak(ht,z,"req"+ce+"_")}catch{_&&_(ht)}}if(_e){_=z.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function Ly(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Tn||ee(),$||(Tn(),$=!0),X.add(d,l),l.v=0}}function Dd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=xo(m(l.Fa,l),Fy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,My(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=xo(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),nu(this),My(this))};function Od(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function My(l){l.g=new yr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=qn(l.qa);Ee(d,"RID","rpc"),Ee(d,"SID",l.K),Ee(d,"AID",l.T),Ee(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ee(d,"TO",l.ja),Ee(d,"TYPE","xmlhttp"),jo(l,d),l.m&&l.o&&xd(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Jl(qn(d)),p.m=null,p.P=!0,uy(p,l)}t.Za=function(){this.C!=null&&(this.C=null,nu(this),Dd(this),It(19))};function iu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Vy(l,d){var p=null;if(l.g==d){iu(l),Od(l),l.g=null;var _=2}else if(Pd(l.h,d))p=d.D,my(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var b=l.B;_=Hl(),Tt(_,new sy(_,p)),ru(l)}else Ly(l);else if(b=d.s,b==3||b==0&&0<d.X||!(_==1&&xk(l,d)||_==2&&Dd(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),b){case 1:wi(l,5);break;case 4:wi(l,10);break;case 3:wi(l,6);break;default:wi(l,2)}}}function Fy(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function wi(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),_=l.Xa;const b=!_;_=new vi(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Yl(_,"https"),Jl(_),b?Ck(_.toString(),p):Sk(_.toString(),p)}else It(2);l.G=0,l.l&&l.l.sa(d),Uy(l),by(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Uy(l){if(l.G=0,l.ka=[],l.l){const d=gy(l.h);(d.length!=0||l.i.length!=0)&&(x(l.ka,d),x(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function jy(l,d,p){var _=p instanceof vi?qn(p):new vi(p);if(_.g!="")d&&(_.g=d+"."+_.g),Xl(_,_.s);else{var b=a.location;_=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;var L=new vi(null);_&&Yl(L,_),d&&(L.g=d),b&&Xl(L,b),p&&(L.l=p),_=L}return p=l.D,d=l.ya,p&&d&&Ee(_,p,d),Ee(_,"VER",l.la),jo(l,_),_}function By(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Me(new Zl({eb:p})):new Me(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zy(){}t=zy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function su(){}su.prototype.g=function(l,d){return new Ft(l,d)};function Ft(l,d){ct.call(this),this.g=new xy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!w(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ls(this)}T(Ft,ct),Ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){bd(this.g)},Ft.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=wd(l),l=p);d.i.push(new pk(d.Ya++,l)),d.G==3&&ru(d)},Ft.prototype.N=function(){this.g.l=null,delete this.j,bd(this.g),delete this.g,Ft.aa.N.call(this)};function $y(l){Td.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}T($y,Td);function Wy(){Id.call(this),this.status=1}T(Wy,Id);function ls(l){this.g=l}T(ls,zy),ls.prototype.ua=function(){Tt(this.g,"a")},ls.prototype.ta=function(l){Tt(this.g,new $y(l))},ls.prototype.sa=function(l){Tt(this.g,new Wy)},ls.prototype.ra=function(){Tt(this.g,"b")},su.prototype.createWebChannel=su.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,ZS=function(){return new su},JS=function(){return Hl()},XS=_i,Jp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gl.NO_ERROR=0,Gl.TIMEOUT=8,Gl.HTTP_ERROR=6,Ju=Gl,oy.COMPLETE="complete",YS=oy,ty.EventType=Po,Po.OPEN="a",Po.CLOSE="b",Po.ERROR="c",Po.MESSAGE="d",ct.prototype.listen=ct.prototype.K,aa=ty,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,QS=Me}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});const TE="@firebase/firestore";/**
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
 */let gt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Io="10.14.0";/**
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
 */const Qi=new kh("@firebase/firestore");function Zo(){return Qi.logLevel}function H(t,...e){if(Qi.logLevel<=se.DEBUG){const n=e.map(o_);Qi.debug(`Firestore (${Io}): ${t}`,...n)}}function dr(t,...e){if(Qi.logLevel<=se.ERROR){const n=e.map(o_);Qi.error(`Firestore (${Io}): ${t}`,...n)}}function no(t,...e){if(Qi.logLevel<=se.WARN){const n=e.map(o_);Qi.warn(`Firestore (${Io}): ${t}`,...n)}}function o_(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: `+t;throw dr(e),new Error(e)}function me(t,e){t||Y()}function Z(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends gr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class eR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class BV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zV{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new eR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new gt(e)}}class $V{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class WV{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $V(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){me(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new qV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function GV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class tR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=GV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function ro(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ke(0,0))}static max(){return new J(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends cl{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const KV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends cl{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return KV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ie.fromString(e))}static fromName(e){return new G(Ie.fromString(e).popFirst(5))}static empty(){return new G(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ie(e.slice()))}}function QV(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ke(n+1,0):new Ke(n,r));return new ai(i,G.empty(),e)}function YV(t){return new ai(t.readTime,t.key,-1)}class ai{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ai(J.min(),G.empty(),-1)}static max(){return new ai(J.max(),G.empty(),-1)}}function XV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const JV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ml(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==JV)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function eF(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class a_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}a_.oe=-1;function Qh(t){return t==null}function Zc(t){return t===0&&1/t==-1/0}function tF(t){return typeof t=="number"&&Number.isInteger(t)&&!Zc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function IE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pu(this.root,e,this.comparator,!0)}}class Pu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new CE(this.data.getIterator())}getIteratorFrom(e){return new CE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class CE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new $t([])}unionWith(e){let n=new at(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ro(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class rR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new rR("Invalid base64 string: "+s):s}}(e);return new ut(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const nF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function li(t){if(me(!!t),typeof t=="string"){let e=0;const n=nF.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yi(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */function l_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function u_(t){const e=t.mapValue.fields.__previous_value__;return l_(e)?u_(e):e}function hl(t){const e=li(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class rF{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class dl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new dl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof dl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Nu={mapValue:{}};function Xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?l_(t)?4:sF(t)?9007199254740991:iF(t)?10:11:Y()}function Vn(t,e){if(t===e)return!0;const n=Xi(t);if(n!==Xi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hl(t).isEqual(hl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=li(i.timestampValue),a=li(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Yi(i.bytesValue).isEqual(Yi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=je(i.doubleValue),a=je(s.doubleValue);return o===a?Zc(o)===Zc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ro(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(IE(o)!==IE(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Vn(o[u],a[u])))return!1;return!0}(t,e);default:return Y()}}function fl(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function io(t,e){if(t===e)return 0;const n=Xi(t),r=Xi(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=je(s.integerValue||s.doubleValue),u=je(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return SE(t.timestampValue,e.timestampValue);case 4:return SE(hl(t),hl(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Yi(s),u=Yi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=he(a[c],u[c]);if(h!==0)return h}return he(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=he(je(s.latitude),je(o.latitude));return a!==0?a:he(je(s.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return RE(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},m=o.fields||{},y=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=he(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:RE(y,T)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Nu.mapValue&&o===Nu.mapValue)return 0;if(s===Nu.mapValue)return 1;if(o===Nu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=he(u[f],h[f]);if(m!==0)return m;const y=io(a[u[f]],c[h[f]]);if(y!==0)return y}return he(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Y()}}function SE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=li(t),r=li(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function RE(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=io(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function so(t){return Zp(t)}function Zp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=li(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Zp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Zp(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function AE(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function em(t){return!!t&&"integerValue"in t}function c_(t){return!!t&&"arrayValue"in t}function kE(t){return!!t&&"nullValue"in t}function PE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zu(t){return!!t&&"mapValue"in t}function iF(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Aa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Aa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Aa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Aa(n)}setAll(e){let n=st.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Aa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Zu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Zu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){is(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(Aa(this.value))}}function iR(t){const e=[];return is(t.fields,(n,r)=>{const i=new st([n]);if(Zu(r)){const s=iR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
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
 */class yt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,J.min(),J.min(),J.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new yt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new yt(e,2,n,J.min(),J.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,J.min(),J.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eh{constructor(e,n){this.position=e,this.inclusive=n}}function NE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=io(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function xE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pl{constructor(e,n="asc"){this.field=e,this.dir=n}}function oF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sR{}class We extends sR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lF(e,n,r):n==="array-contains"?new hF(e,r):n==="in"?new dF(e,r):n==="not-in"?new fF(e,r):n==="array-contains-any"?new pF(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uF(e,r):new cF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(io(n,this.value)):n!==null&&Xi(this.value)===Xi(n)&&this.matchesComparison(io(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends sR{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new vn(e,n)}matches(e){return oR(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function oR(t){return t.op==="and"}function aR(t){return aF(t)&&oR(t)}function aF(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function tm(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+so(t.value);if(aR(t))return t.filters.map(e=>tm(e)).join(",");{const e=t.filters.map(n=>tm(n)).join(",");return`${t.op}(${e})`}}function lR(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(t,e):t instanceof vn?function(r,i){return i instanceof vn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&lR(o,i.filters[a]),!0):!1}(t,e):void Y()}function uR(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${so(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(uR).join(" ,")+"}"}(t):"Filter"}class lF extends We{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class uF extends We{constructor(e,n){super(e,"in",n),this.keys=cR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cF extends We{constructor(e,n){super(e,"not-in",n),this.keys=cR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class hF extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return c_(n)&&fl(n.arrayValue,this.value)}}class dF extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fl(this.value.arrayValue,n)}}class fF extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fl(this.value.arrayValue,n)}}class pF extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!c_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fl(this.value.arrayValue,r))}}/**
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
 */class mF{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function bE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new mF(t,e,n,r,i,s,o)}function h_(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>tm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Qh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>so(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>so(r)).join(",")),e.ue=n}return e.ue}function d_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xE(t.startAt,e.startAt)&&xE(t.endAt,e.endAt)}function nm(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Co{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gF(t,e,n,r,i,s,o,a){return new Co(t,e,n,r,i,s,o,a)}function Yh(t){return new Co(t)}function DE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hR(t){return t.collectionGroup!==null}function ka(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new at(st.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new pl(s,r))}),n.has(st.keyField().canonicalString())||e.ce.push(new pl(st.keyField(),r))}return e.ce}function Dn(t){const e=Z(t);return e.le||(e.le=_F(e,ka(t))),e.le}function _F(t,e){if(t.limitType==="F")return bE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new pl(i.field,s)});const n=t.endAt?new eh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eh(t.startAt.position,t.startAt.inclusive):null;return bE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rm(t,e){const n=t.filters.concat([e]);return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function th(t,e,n){return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xh(t,e){return d_(Dn(t),Dn(e))&&t.limitType===e.limitType}function dR(t){return`${h_(Dn(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>uR(i)).join(", ")}]`),Qh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>so(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>so(i)).join(",")),`Target(${r})`}(Dn(t))}; limitType=${t.limitType})`}function Jh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ka(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=NE(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ka(r),i)||r.endAt&&!function(o,a,u){const c=NE(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ka(r),i))}(t,e)}function yF(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fR(t){return(e,n)=>{let r=!1;for(const i of ka(t)){const s=vF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function vF(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?io(u,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class So{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return nR(this.inner)}size(){return this.innerSize}}/**
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
 */const wF=new Oe(G.comparator);function fr(){return wF}const pR=new Oe(G.comparator);function la(...t){let e=pR;for(const n of t)e=e.insert(n.key,n);return e}function mR(t){let e=pR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Di(){return Pa()}function gR(){return Pa()}function Pa(){return new So(t=>t.toString(),(t,e)=>t.isEqual(e))}const EF=new Oe(G.comparator),TF=new at(G.comparator);function oe(...t){let e=TF;for(const n of t)e=e.add(n);return e}const IF=new at(he);function CF(){return IF}/**
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
 */function f_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zc(e)?"-0":e}}function _R(t){return{integerValue:""+t}}function SF(t,e){return tF(e)?_R(e):f_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Zh{constructor(){this._=void 0}}function RF(t,e,n){return t instanceof ml?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&l_(s)&&(s=u_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof gl?vR(t,e):t instanceof _l?wR(t,e):function(i,s){const o=yR(i,s),a=OE(o)+OE(i.Pe);return em(o)&&em(i.Pe)?_R(a):f_(i.serializer,a)}(t,e)}function AF(t,e,n){return t instanceof gl?vR(t,e):t instanceof _l?wR(t,e):n}function yR(t,e){return t instanceof nh?function(r){return em(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ml extends Zh{}class gl extends Zh{constructor(e){super(),this.elements=e}}function vR(t,e){const n=ER(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class _l extends Zh{constructor(e){super(),this.elements=e}}function wR(t,e){let n=ER(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class nh extends Zh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function OE(t){return je(t.integerValue||t.doubleValue)}function ER(t){return c_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class kF{constructor(e,n){this.field=e,this.transform=n}}function PF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof gl&&i instanceof gl||r instanceof _l&&i instanceof _l?ro(r.elements,i.elements,Vn):r instanceof nh&&i instanceof nh?Vn(r.Pe,i.Pe):r instanceof ml&&i instanceof ml}(t.transform,e.transform)}class NF{constructor(e,n){this.version=e,this.transformResults=n}}class On{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ec(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ed{}function TR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new CR(t.key,On.none()):new Fl(t.key,t.data,On.none());{const n=t.data,r=Dt.empty();let i=new at(st.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mi(t.key,r,new $t(i.toArray()),On.none())}}function xF(t,e,n){t instanceof Fl?function(i,s,o){const a=i.value.clone(),u=ME(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof mi?function(i,s,o){if(!ec(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ME(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(IR(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Na(t,e,n,r){return t instanceof Fl?function(s,o,a,u){if(!ec(s.precondition,o))return a;const c=s.value.clone(),h=VE(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof mi?function(s,o,a,u){if(!ec(s.precondition,o))return a;const c=VE(s.fieldTransforms,u,o),h=o.data;return h.setAll(IR(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return ec(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function bF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=yR(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function LE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ro(r,i,(s,o)=>PF(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fl extends ed{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mi extends ed{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function IR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ME(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,AF(o,a,n[i]))}return r}function VE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,RF(s,o,e))}return r}class CR extends ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DF extends ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class OF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&xF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Na(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Na(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=TR(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ro(this.mutations,e.mutations,(n,r)=>LE(n,r))&&ro(this.baseMutations,e.baseMutations,(n,r)=>LE(n,r))}}class p_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return EF}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new p_(e,n,r,i)}}/**
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
 */class LF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class MF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,ae;function VF(t){switch(t){default:return Y();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function SR(t){if(t===void 0)return dr("GRPC error has no .code"),M.UNKNOWN;switch(t){case ze.OK:return M.OK;case ze.CANCELLED:return M.CANCELLED;case ze.UNKNOWN:return M.UNKNOWN;case ze.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ze.INTERNAL:return M.INTERNAL;case ze.UNAVAILABLE:return M.UNAVAILABLE;case ze.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ze.NOT_FOUND:return M.NOT_FOUND;case ze.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ze.ABORTED:return M.ABORTED;case ze.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ze.DATA_LOSS:return M.DATA_LOSS;default:return Y()}}(ae=ze||(ze={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function FF(){return new TextEncoder}/**
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
 */const UF=new Vi([4294967295,4294967295],0);function FE(t){const e=FF().encode(t),n=new KS;return n.update(e),new Uint8Array(n.digest())}function UE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Vi([n,r],0),new Vi([i,s],0)]}class m_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ua(`Invalid padding: ${n}`);if(r<0)throw new ua(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ua(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ua(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Vi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Vi.fromNumber(r)));return i.compare(UF)===1&&(i=new Vi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=FE(e),[r,i]=UE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new m_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=FE(e),[r,i]=UE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ua extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class td{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ul.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new td(J.min(),i,new Oe(he),fr(),oe())}}class Ul{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ul(r,n,oe(),oe(),oe())}}/**
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
 */class tc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class RR{constructor(e,n){this.targetId=e,this.me=n}}class AR{constructor(e,n,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jE{constructor(){this.fe=0,this.ge=zE(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Ul(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=zE()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class jF{constructor(e){this.Le=e,this.Be=new Map,this.ke=fr(),this.qe=BE(),this.Qe=new Oe(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(nm(s))if(r===0){const o=new G(s.path);this.Ue(n,o,yt.newNoDocument(o,J.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Yi(r).toUint8Array()}catch(u){if(u instanceof rR)return no("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new m_(o,i,s)}catch(u){return no(u instanceof ua?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&nm(a.target)){const u=new G(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,yt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=oe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new td(e,n,this.Qe,this.ke,r);return this.ke=fr(),this.qe=BE(),this.Qe=new Oe(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new jE,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new jE),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function BE(){return new Oe(G.comparator)}function zE(){return new Oe(G.comparator)}const BF={asc:"ASCENDING",desc:"DESCENDING"},zF={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$F={and:"AND",or:"OR"};class WF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function im(t,e){return t.useProto3Json||Qh(e)?e:{value:e}}function rh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qF(t,e){return rh(t,e.toTimestamp())}function Ln(t){return me(!!t),J.fromTimestamp(function(n){const r=li(n);return new Ke(r.seconds,r.nanos)}(t))}function g_(t,e){return sm(t,e).canonicalString()}function sm(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function PR(t){const e=Ie.fromString(t);return me(OR(e)),e}function om(t,e){return g_(t.databaseId,e.path)}function Sf(t,e){const n=PR(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(xR(n))}function NR(t,e){return g_(t.databaseId,e)}function HF(t){const e=PR(t);return e.length===4?Ie.emptyPath():xR(e)}function am(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xR(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $E(t,e,n){return{name:om(t,e),fields:n.value.mapValue.fields}}function GF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(me(h===void 0||typeof h=="string"),ut.fromBase64String(h||"")):(me(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ut.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?M.UNKNOWN:SR(c.code);return new W(h,c.message||"")}(o);n=new AR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sf(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):J.min(),a=new Dt({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new tc(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Sf(t,r.document),s=r.readTime?Ln(r.readTime):J.min(),o=yt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new tc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Sf(t,r.document),s=r.removedTargetIds||[];n=new tc([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new MF(i,s),a=r.targetId;n=new RR(a,o)}}return n}function KF(t,e){let n;if(e instanceof Fl)n={update:$E(t,e.key,e.value)};else if(e instanceof CR)n={delete:om(t,e.key)};else if(e instanceof mi)n={update:$E(t,e.key,e.data),updateMask:r4(e.fieldMask)};else{if(!(e instanceof DF))return Y();n={verify:om(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ml)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof gl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _l)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof nh)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:qF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function QF(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(J.min())&&(o=Ln(s)),new NF(o,i.transformResults||[])}(n,e))):[]}function YF(t,e){return{documents:[NR(t,e.path)]}}function XF(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=NR(t,i);const s=function(c){if(c.length!==0)return DR(vn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:ps(m.field),direction:e4(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=im(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function JF(t){let e=HF(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=bR(f);return m instanceof vn&&aR(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new pl(ms(T.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Qh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,y=f.values||[];return new eh(y,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,y=f.values||[];return new eh(y,m)}(n.endAt)),gF(e,i,o,s,a,"F",u,c)}function ZF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ms(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ms(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ms(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return We.create(ms(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>bR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function e4(t){return BF[t]}function t4(t){return zF[t]}function n4(t){return $F[t]}function ps(t){return{fieldPath:t.canonicalString()}}function ms(t){return st.fromServerFormat(t.fieldPath)}function DR(t){return t instanceof We?function(n){if(n.op==="=="){if(PE(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(kE(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(PE(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(kE(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:t4(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(i=>DR(i));return r.length===1?r[0]:{compositeFilter:{op:n4(n.op),filters:r}}}(t):Y()}function r4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function OR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Mr{constructor(e,n,r,i,s=J.min(),o=J.min(),a=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class i4{constructor(e){this.ct=e}}function s4(t){const e=JF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?th(e,e.limit,"L"):e}/**
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
 */class o4{constructor(){this.un=new a4}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(ai.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(ai.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class a4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new at(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new at(Ie.comparator)).toArray()}}/**
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
 */class oo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new oo(0)}static kn(){return new oo(-1)}}/**
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
 */class l4{constructor(){this.changes=new So(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class u4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class c4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Na(r.mutation,i,$t.empty(),Ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=Di();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=la();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Di();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=fr();const o=Pa(),a=function(){return Pa()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof mi)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Na(h.mutation,c,h.mutation.getFieldMask(),Ke.now())):o.set(c.key,$t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new u4(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Pa();let i=new Oe((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||$t.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||oe()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=gR();h.forEach(m=>{if(!s.has(m)){const y=TR(n.get(m),r.get(m));y!==null&&f.set(m,y),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(Di());let a=-1,u=s;return o.next(c=>V.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,oe())).next(h=>({batchId:a,changes:mR(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=la();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=la();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,u=>{const c=function(f,m){return new Co(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,yt.newInvalidDocument(h)))});let a=la();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Na(h.mutation,c,$t.empty(),Ke.now()),Jh(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class h4{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ln(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:s4(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),V.resolve()}}/**
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
 */class d4{constructor(){this.overlays=new Oe(G.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Di();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=Di(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Di(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Di(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return V.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new LF(n,r));let s=this.Ir.get(n);s===void 0&&(s=oe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class f4{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class __{constructor(){this.Tr=new at(Xe.Er),this.dr=new at(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Xe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new Ie([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new Ie([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=oe();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||he(e.wr,n.wr)}static Ar(e,n){return he(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
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
 */class p4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(Xe.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new OF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(he);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new G(s),0);let a=new at(he);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),V.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Xe(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class m4{constructor(e){this.Mr=e,this.docs=function(){return new Oe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=fr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():yt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=fr();const o=n.path,a=new G(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||XV(YV(h),r)<=0||(i.has(h.key)||Jh(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new g4(this)}getSize(e){return V.resolve(this.size)}}class g4 extends l4{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class _4{constructor(e){this.persistence=e,this.Nr=new So(n=>h_(n),d_),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new __,this.targetCount=0,this.kr=oo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new oo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
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
 */class y4{constructor(e,n){this.qr={},this.overlays={},this.Qr=new a_(0),this.Kr=!1,this.Kr=!0,this.$r=new f4,this.referenceDelegate=e(this),this.Ur=new _4(this),this.indexManager=new o4,this.remoteDocumentCache=function(i){return new m4(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new i4(n),this.Gr=new h4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new d4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new p4(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new v4(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class v4 extends ZV{constructor(e){super(),this.currentSequenceNumber=e}}class y_{constructor(e){this.persistence=e,this.Jr=new __,this.Yr=null}static Zr(e){return new y_(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class v_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new v_(e,n.fromCache,r,i)}}/**
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
 */class w4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class E4{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Rx()?8:eF(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new w4;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Zo()<=se.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Zo()<=se.DEBUG&&H("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Zo()<=se.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dn(n))):V.resolve())}Yi(e,n){if(DE(n))return V.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=th(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,th(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return DE(n)||i.isEqual(J.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?V.resolve(null):(Zo()<=se.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fs(n)),this.rs(e,o,n,QV(i,-1)).next(a=>a))})}ts(e,n){let r=new at(fR(e));return n.forEach((i,s)=>{Jh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Zo()<=se.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",fs(n)),this.Ji.getDocumentsMatchingQuery(e,n,ai.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class T4{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Oe(he),this._s=new So(s=>h_(s),d_),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new c4(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function I4(t,e,n,r){return new T4(t,e,n,r)}async function LR(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=oe();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function C4(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,m=f.keys();let y=V.resolve();return m.forEach(T=>{y=y.next(()=>h.getEntry(u,T)).next(k=>{const x=c.docVersions.get(T);me(x!==null),k.version.compareTo(x)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),h.addEntry(k)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function MR(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function S4(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let y=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(ut.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),i=i.insert(f,y),function(k,x,C){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(m,y,h)&&a.push(n.Ur.updateTargetData(s,y))});let u=fr(),c=oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(R4(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(J.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return V.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function R4(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=fr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function A4(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function k4(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function lm(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vl(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function WE(t,e,n){const r=Z(t);let i=J.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=Z(u),m=f._s.get(h);return m!==void 0?V.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,Dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:oe())).next(a=>(P4(r,yF(e),a),{documents:a,Ts:s})))}function P4(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class qE{constructor(){this.activeTargetIds=CF()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class N4{constructor(){this.so=new qE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new qE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class x4{_o(e){}shutdown(){}}/**
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
 */class HE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xu=null;function Rf(){return xu===null?xu=function(){return 268435456+Math.round(2147483648*Math.random())}():xu++,"0x"+xu.toString(16)}/**
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
 */const b4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class D4{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const mt="WebChannelConnection";class O4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Rf(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(H("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw no("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Io}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=b4[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Rf();return new Promise((o,a)=>{const u=new QS;u.setWithCredentials(!0),u.listenOnce(YS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ju.NO_ERROR:const h=u.getResponseJson();H(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Ju.TIMEOUT:H(mt,`RPC '${e}' ${s} timed out`),a(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ju.HTTP_ERROR:const f=u.getStatus();if(H(mt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const T=function(x){const C=x.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(C)>=0?C:M.UNKNOWN}(y.status);a(new W(T,y.message))}else a(new W(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new W(M.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{H(mt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(mt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Rf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ZS(),a=JS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");H(mt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,y=!1;const T=new D4({Io:x=>{y?H(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(H(mt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),H(mt,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},To:()=>f.close()}),k=(x,C,w)=>{x.listen(C,A=>{try{w(A)}catch(D){setTimeout(()=>{throw D},0)}})};return k(f,aa.EventType.OPEN,()=>{y||(H(mt,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),k(f,aa.EventType.CLOSE,()=>{y||(y=!0,H(mt,`RPC '${e}' stream ${i} transport closed`),T.So())}),k(f,aa.EventType.ERROR,x=>{y||(y=!0,no(mt,`RPC '${e}' stream ${i} transport errored:`,x),T.So(new W(M.UNAVAILABLE,"The operation could not be completed")))}),k(f,aa.EventType.MESSAGE,x=>{var C;if(!y){const w=x.data[0];me(!!w);const A=w,D=A.error||((C=A[0])===null||C===void 0?void 0:C.error);if(D){H(mt,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let U=function(E){const S=ze[E];if(S!==void 0)return SR(S)}(F),v=D.message;U===void 0&&(U=M.INTERNAL,v="Unknown error status: "+F+" with message "+D.message),y=!0,T.So(new W(U,v)),f.close()}else H(mt,`RPC '${e}' stream ${i} received:`,w),T.bo(w)}}),k(a,XS.STAT_EVENT,x=>{x.stat===Jp.PROXY?H(mt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Jp.NOPROXY&&H(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function Af(){return typeof document<"u"?document:null}/**
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
 */function nd(t){return new WF(t,!0)}/**
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
 */class VR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class FR{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new VR(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(dr(n.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class L4 extends FR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=GF(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Ln(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=am(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=nm(u)?{documents:YF(s,u)}:{query:XF(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=kR(s,o.resumeToken);const c=im(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=rh(s,o.snapshotVersion.toTimestamp());const c=im(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=ZF(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=am(this.serializer),n.removeTarget=e,this.a_(n)}}class M4 extends FR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return me(!!e.streamToken),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=QF(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=am(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>KF(this.serializer,r))};this.a_(n)}}/**
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
 */class V4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,sm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,sm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class F4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(dr(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class U4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ss(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Z(u);c.L_.add(4),await jl(c),c.q_.set("Unknown"),c.L_.delete(4),await rd(c)}(this))})}),this.q_=new F4(r,i)}}async function rd(t){if(ss(t))for(const e of t.B_)await e(!0)}async function jl(t){for(const e of t.B_)await e(!1)}function UR(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),I_(n)?T_(n):Ro(n).r_()&&E_(n,e))}function w_(t,e){const n=Z(t),r=Ro(n);n.N_.delete(e),r.r_()&&jR(n,e),n.N_.size===0&&(r.r_()?r.o_():ss(n)&&n.q_.set("Unknown"))}function E_(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ro(t).A_(e)}function jR(t,e){t.Q_.xe(e),Ro(t).R_(e)}function T_(t){t.Q_=new jF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ro(t).start(),t.q_.v_()}function I_(t){return ss(t)&&!Ro(t).n_()&&t.N_.size>0}function ss(t){return Z(t).L_.size===0}function BR(t){t.Q_=void 0}async function j4(t){t.q_.set("Online")}async function B4(t){t.N_.forEach((e,n)=>{E_(t,e)})}async function z4(t,e){BR(t),I_(t)?(t.q_.M_(e),T_(t)):t.q_.set("Unknown")}async function $4(t,e,n){if(t.q_.set("Online"),e instanceof AR&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ih(t,r)}else if(e instanceof tc?t.Q_.Ke(e):e instanceof RR?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await MR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(ut.EMPTY_BYTE_STRING,h.snapshotVersion)),jR(s,u);const f=new Mr(h.target,u,c,h.sequenceNumber);E_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await ih(t,r)}}async function ih(t,e,n){if(!Vl(e))throw e;t.L_.add(1),await jl(t),t.q_.set("Offline"),n||(n=()=>MR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await rd(t)})}function zR(t,e){return e().catch(n=>ih(t,n,e))}async function id(t){const e=Z(t),n=ui(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;W4(e);)try{const i=await A4(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,q4(e,i)}catch(i){await ih(e,i)}$R(e)&&WR(e)}function W4(t){return ss(t)&&t.O_.length<10}function q4(t,e){t.O_.push(e);const n=ui(t);n.r_()&&n.V_&&n.m_(e.mutations)}function $R(t){return ss(t)&&!ui(t).n_()&&t.O_.length>0}function WR(t){ui(t).start()}async function H4(t){ui(t).p_()}async function G4(t){const e=ui(t);for(const n of t.O_)e.m_(n.mutations)}async function K4(t,e,n){const r=t.O_.shift(),i=p_.from(r,e,n);await zR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await id(t)}async function Q4(t,e){e&&ui(t).V_&&await async function(r,i){if(function(o){return VF(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();ui(r).s_(),await zR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await id(r)}}(t,e),$R(t)&&WR(t)}async function GE(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ss(n);n.L_.add(3),await jl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await rd(n)}async function Y4(t,e){const n=Z(t);e?(n.L_.delete(2),await rd(n)):e||(n.L_.add(2),await jl(n),n.q_.set("Unknown"))}function Ro(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new L4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:j4.bind(null,t),Ro:B4.bind(null,t),mo:z4.bind(null,t),d_:$4.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),I_(t)?T_(t):t.q_.set("Unknown")):(await t.K_.stop(),BR(t))})),t.K_}function ui(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new M4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:H4.bind(null,t),mo:Q4.bind(null,t),f_:G4.bind(null,t),g_:K4.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await id(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class C_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new C_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function S_(t,e){if(dr("AsyncQueue",`${e}: ${t}`),Vl(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Us{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=la(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class KE{constructor(){this.W_=new Oe(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ao{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ao(e,n,Us.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class X4{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class J4{constructor(){this.queries=QE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=QE(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function QE(){return new So(t=>dR(t),Xh)}async function qR(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new X4,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=S_(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&R_(n)}async function HR(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Z4(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&R_(n)}function eU(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function R_(t){t.Y_.forEach(e=>{e.next()})}var um,YE;(YE=um||(um={})).ea="default",YE.Cache="cache";class GR{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ao(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==um.Cache}}/**
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
 */class KR{constructor(e){this.key=e}}class QR{constructor(e){this.key=e}}class tU{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=fR(e),this.Ra=new Us(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new KE,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),y=Jh(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let x=!1;m&&y?m.data.isEqual(y.data)?T!==k&&(r.track({type:3,doc:y}),x=!0):this.ga(m,y)||(r.track({type:2,doc:y}),x=!0,(u&&this.Aa(y,u)>0||c&&this.Aa(y,c)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),x=!0):m&&!y&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(a=!0)),x&&(y?(o=o.add(y),s=k?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(y,T){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return k(y)-k(T)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ao(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new KE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new QR(r))}),this.da.forEach(r=>{e.has(r)||n.push(new KR(r))}),n}ba(e){this.Ta=e.Ts,this.da=oe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ao.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class nU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rU{constructor(e){this.key=e,this.va=!1}}class iU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new So(a=>dR(a),Xh),this.Ma=new Map,this.xa=new Set,this.Oa=new Oe(G.comparator),this.Na=new Map,this.La=new __,this.Ba={},this.ka=new Map,this.qa=oo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function sU(t,e,n=!0){const r=tA(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await YR(r,e,n,!0),i}async function oU(t,e){const n=tA(t);await YR(n,e,!0,!1)}async function YR(t,e,n,r){const i=await k4(t.localStore,Dn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await aU(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&UR(t.remoteStore,i),a}async function aU(t,e,n,r,i){t.Ka=(f,m,y)=>async function(k,x,C,w){let A=x.view.ma(C);A.ns&&(A=await WE(k.localStore,x.query,!1).then(({documents:v})=>x.view.ma(v,A)));const D=w&&w.targetChanges.get(x.targetId),F=w&&w.targetMismatches.get(x.targetId)!=null,U=x.view.applyChanges(A,k.isPrimaryClient,D,F);return JE(k,x.targetId,U.wa),U.snapshot}(t,f,m,y);const s=await WE(t.localStore,e,!0),o=new tU(e,s.Ts),a=o.ma(s.documents),u=Ul.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);JE(t,n,c.wa);const h=new nU(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function lU(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Xh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await lm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&w_(r.remoteStore,i.targetId),cm(r,i.targetId)}).catch(Ml)):(cm(r,i.targetId),await lm(r.localStore,i.targetId,!0))}async function uU(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),w_(n.remoteStore,r.targetId))}async function cU(t,e,n){const r=_U(t);try{const i=await function(o,a){const u=Z(o),c=Ke.now(),h=a.reduce((y,T)=>y.add(T.key),oe());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let T=fr(),k=oe();return u.cs.getEntries(y,h).next(x=>{T=x,T.forEach((C,w)=>{w.isValidDocument()||(k=k.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,T)).next(x=>{f=x;const C=[];for(const w of a){const A=bF(w,f.get(w.key).overlayedDocument);A!=null&&C.push(new mi(w.key,A,iR(A.value.mapValue),On.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,C,a)}).next(x=>{m=x;const C=x.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(y,x.batchId,C)})}).then(()=>({batchId:m.batchId,changes:mR(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Oe(he)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Bl(r,i.changes),await id(r.remoteStore)}catch(i){const s=S_(i,"Failed to persist write");n.reject(s)}}async function XR(t,e){const n=Z(t);try{const r=await S4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?me(o.va):i.removedDocuments.size>0&&(me(o.va),o.va=!1))}),await Bl(n,r,e)}catch(r){await Ml(r)}}function XE(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=Z(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&R_(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hU(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Oe(G.comparator);o=o.insert(s,yt.newNoDocument(s,J.min()));const a=oe().add(s),u=new td(J.min(),new Map,new Oe(he),o,a);await XR(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),A_(r)}else await lm(r.localStore,e,!1).then(()=>cm(r,e,n)).catch(Ml)}async function dU(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await C4(n.localStore,e);ZR(n,r,null),JR(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bl(n,i)}catch(i){await Ml(i)}}async function fU(t,e,n){const r=Z(t);try{const i=await function(o,a){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(me(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);ZR(r,e,n),JR(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bl(r,i)}catch(i){await Ml(i)}}function JR(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function ZR(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function cm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||eA(t,r)})}function eA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(w_(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),A_(t))}function JE(t,e,n){for(const r of n)r instanceof KR?(t.La.addReference(r.key,e),pU(t,r)):r instanceof QR?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||eA(t,r.key)):Y()}function pU(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),A_(t))}function A_(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(Ie.fromString(e)),r=t.qa.next();t.Na.set(r,new rU(n)),t.Oa=t.Oa.insert(n,r),UR(t.remoteStore,new Mr(Dn(Yh(n.path)),r,"TargetPurposeLimboResolution",a_.oe))}}async function Bl(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=v_.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=Z(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(c,m=>V.forEach(m.$i,y=>h.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>V.forEach(m.Ui,y=>h.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!Vl(f))throw f;H("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const y=h.os.get(m),T=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(T);h.os=h.os.insert(m,k)}}}(r.localStore,s))}async function mU(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await LR(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Bl(n,r.hs)}}function gU(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return oe().add(r.key);{let i=oe();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function tA(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=XR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hU.bind(null,e),e.Ca.d_=Z4.bind(null,e.eventManager),e.Ca.$a=eU.bind(null,e.eventManager),e}function _U(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fU.bind(null,e),e}class sh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return I4(this.persistence,new E4,e.initialUser,this.serializer)}Ga(e){return new y4(y_.Zr,this.serializer)}Wa(e){return new N4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sh.provider={build:()=>new sh};class hm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>XE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mU.bind(null,this.syncEngine),await Y4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new J4}()}createDatastore(e){const n=nd(e.databaseInfo.databaseId),r=function(s){return new O4(s)}(e.databaseInfo);return function(s,o,a,u){return new V4(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new U4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>XE(this.syncEngine,n,0),function(){return HE.D()?new HE:new x4}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new iU(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await jl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}hm.provider={build:()=>new hm};/**
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
 *//**
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
 */class nA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class yU{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=tR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=S_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kf(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await LR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ZE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vU(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>GE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>GE(e.remoteStore,i)),t._onlineComponents=e}async function vU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await kf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;no("Error using user provided cache. Falling back to memory cache: "+n),await kf(t,new sh)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await kf(t,new sh);return t._offlineComponents}async function rA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await ZE(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await ZE(t,new hm))),t._onlineComponents}function wU(t){return rA(t).then(e=>e.syncEngine)}async function dm(t){const e=await rA(t),n=e.eventManager;return n.onListen=sU.bind(null,e.syncEngine),n.onUnlisten=lU.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oU.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uU.bind(null,e.syncEngine),n}function EU(t,e,n={}){const r=new Yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new nA({next:m=>{h.Za(),o.enqueueAndForget(()=>HR(s,f));const y=m.docs.has(a);!y&&m.fromCache?c.reject(new W(M.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?c.reject(new W(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new GR(Yh(a.path),h,{includeMetadataChanges:!0,_a:!0});return qR(s,f)}(await dm(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function iA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const e0=new Map;/**
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
 */function sA(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TU(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function t0(t){if(!G.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function n0(t){if(G.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sd(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function IU(t,e){if(e<=0)throw new W(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class r0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class od{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jV;switch(r.type){case"firstParty":return new WV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=e0.get(n);r&&(H("ComponentProvider","Removing Datastore"),e0.delete(n),r.terminate())}(this),Promise.resolve()}}function CU(t,e,n,r={}){var i;const s=(t=Mn(t,od))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&no("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=gt.MOCK_USER;else{a=QI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new gt(c)}t._authCredentials=new BV(new eR(a,u))}}/**
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
 */class gi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gi(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Xr extends gi{constructor(e,n,r){super(e,n,Yh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new G(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function oA(t,e,...n){if(t=ue(t),sA("collection","path",e),t instanceof od){const r=Ie.fromString(e,...n);return n0(r),new Xr(t,null,r)}{if(!(t instanceof vt||t instanceof Xr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return n0(r),new Xr(t.firestore,null,r)}}function r3(t,e,...n){if(t=ue(t),arguments.length===1&&(e=tR.newId()),sA("doc","path",e),t instanceof od){const r=Ie.fromString(e,...n);return t0(r),new vt(t,null,new G(r))}{if(!(t instanceof vt||t instanceof Xr))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return t0(r),new vt(t.firestore,t instanceof Xr?t.converter:null,new G(r))}}/**
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
 */class i0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new VR(this,"async_queue_retry"),this.Vu=()=>{const r=Af();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Af();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Af();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Yr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Vl(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw dr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=C_.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function s0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class lo extends od{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new i0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new i0(e),this._firestoreClient=void 0,await e}}}function SU(t,e){const n=typeof t=="object"?t:pg(),r=typeof t=="string"?t:"(default)",i=Ph(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=HI("firestore");s&&CU(i,...s)}return i}function k_(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||RU(t),t._firestoreClient}function RU(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new rF(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,iA(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new yU(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class uo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uo(ut.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new uo(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ad{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ld{constructor(e){this._methodName=e}}/**
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
 */class P_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class N_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const AU=/^__.*__$/;class kU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fl(e,this.data,n,this.fieldTransforms)}}class aA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new mi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function lA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class x_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new x_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return oh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(lA(this.Cu)&&AU.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class PU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nd(e)}Qu(e,n,r,i=!1){return new x_({Cu:e,methodName:n,qu:r,path:st.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function b_(t){const e=t._freezeSettings(),n=nd(t._databaseId);return new PU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function NU(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);O_("Data must be an object, but it was:",o,r);const a=uA(r,o);let u,c;if(s.merge)u=new $t(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=fm(e,f,n);if(!o.contains(m))throw new W(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);hA(h,m)||h.push(m)}u=new $t(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new kU(new Dt(a),u,c)}class ud extends ld{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ud}}class D_ extends ld{_toFieldTransform(e){return new kF(e.path,new ml)}isEqual(e){return e instanceof D_}}function xU(t,e,n,r){const i=t.Qu(1,e,n);O_("Data must be an object, but it was:",i,r);const s=[],o=Dt.empty();is(r,(u,c)=>{const h=L_(e,u,n);c=ue(c);const f=i.Nu(h);if(c instanceof ud)s.push(h);else{const m=zl(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new $t(s);return new aA(o,a,i.fieldTransforms)}function bU(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[fm(e,r,n)],u=[i];if(s.length%2!=0)throw new W(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(fm(e,s[m])),u.push(s[m+1]);const c=[],h=Dt.empty();for(let m=a.length-1;m>=0;--m)if(!hA(c,a[m])){const y=a[m];let T=u[m];T=ue(T);const k=o.Nu(y);if(T instanceof ud)c.push(y);else{const x=zl(T,k);x!=null&&(c.push(y),h.set(y,x))}}const f=new $t(c);return new aA(h,f,o.fieldTransforms)}function DU(t,e,n,r=!1){return zl(n,t.Qu(r?4:3,e))}function zl(t,e){if(cA(t=ue(t)))return O_("Unsupported field value:",e,t),uA(t,e);if(t instanceof ld)return function(r,i){if(!lA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=zl(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SF(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ke.fromDate(r);return{timestampValue:rh(i.serializer,s)}}if(r instanceof Ke){const s=new Ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rh(i.serializer,s)}}if(r instanceof P_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof uo)return{bytesValue:kR(i.serializer,r._byteString)};if(r instanceof vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:g_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof N_)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return f_(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${sd(r)}`)}(t,e)}function uA(t,e){const n={};return nR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):is(t,(r,i)=>{const s=zl(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof P_||t instanceof uo||t instanceof vt||t instanceof ld||t instanceof N_)}function O_(t,e,n){if(!cA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=sd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function fm(t,e,n){if((e=ue(e))instanceof ad)return e._internalPath;if(typeof e=="string")return L_(t,e);throw oh("Field path arguments must be of type string or ",t,!1,void 0,n)}const OU=new RegExp("[~\\*/\\[\\]]");function L_(t,e,n){if(e.search(OU)>=0)throw oh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ad(...e.split("."))._internalPath}catch{throw oh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,a+t+u)}function hA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class dA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LU extends dA{data(){return super.data()}}function cd(t,e){return typeof e=="string"?L_(t,e):e instanceof ad?e._internalPath:e._delegate._internalPath}/**
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
 */function MU(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class M_{}class V_ extends M_{}function fA(t,e,...n){let r=[];e instanceof M_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof F_).length,a=s.filter(u=>u instanceof hd).length;if(o>1||o>0&&a>0)throw new W(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class hd extends V_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hd(e,n,r)}_apply(e){const n=this._parse(e);return gA(e._query,n),new gi(e.firestore,e.converter,rm(e._query,n))}_parse(e){const n=b_(e.firestore);return function(s,o,a,u,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){a0(f,h);const y=[];for(const T of f)y.push(o0(u,s,T));m={arrayValue:{values:y}}}else m=o0(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||a0(f,h),m=DU(a,o,f,h==="in"||h==="not-in");return We.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function pA(t,e,n){const r=e,i=cd("where",t);return hd._create(i,r,n)}class F_ extends M_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new F_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)gA(o,u),o=rm(o,u)}(e._query,n),new gi(e.firestore,e.converter,rm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class U_ extends V_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new U_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pl(s,o)}(e._query,this._field,this._direction);return new gi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Co(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function mA(t,e="asc"){const n=e,r=cd("orderBy",t);return U_._create(r,n)}class j_ extends V_{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new j_(e,n,r)}_apply(e){return new gi(e.firestore,e.converter,th(e._query,this._limit,this._limitType))}}function i3(t){return IU("limit",t),j_._create("limit",t,"F")}function o0(t,e,n){if(typeof(n=ue(n))=="string"){if(n==="")throw new W(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hR(e)&&n.indexOf("/")!==-1)throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!G.isDocumentKey(r))throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return AE(t,new G(r))}if(n instanceof vt)return AE(t,n._key);throw new W(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sd(n)}.`)}function a0(t,e){if(!Array.isArray(t)||t.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class VU{convertValue(e,n="none"){switch(Xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return is(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>je(o.doubleValue));return new N_(s)}convertGeoPoint(e){return new P_(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=u_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hl(e));default:return null}}convertTimestamp(e){const n=li(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);me(OR(r));const i=new dl(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||dr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function FU(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ca{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _A extends dA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class nc extends _A{data(e={}){return super.data(e)}}class UU{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ca(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new nc(this._firestore,this._userDataWriter,r.key,r,new ca(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new nc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ca(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new nc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ca(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:jU(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
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
 */function s3(t){t=Mn(t,vt);const e=Mn(t.firestore,lo);return EU(k_(e),t._key).then(n=>EA(e,t,n))}class yA extends VU{constructor(e){super(),this.firestore=e}convertBytes(e){return new uo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function o3(t,e,n){t=Mn(t,vt);const r=Mn(t.firestore,lo),i=FU(t.converter,e,n);return wA(r,[NU(b_(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,On.none())])}function a3(t,e,n,...r){t=Mn(t,vt);const i=Mn(t.firestore,lo),s=b_(i);let o;return o=typeof(e=ue(e))=="string"||e instanceof ad?bU(s,"updateDoc",t._key,e,n,r):xU(s,"updateDoc",t._key,e),wA(i,[o.toMutation(t._key,On.exists(!0))])}function vA(t,...e){var n,r,i;t=ue(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||s0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(s0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof vt)c=Mn(t.firestore,lo),h=Yh(t._key.path),u={next:f=>{e[o]&&e[o](EA(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Mn(t,gi);c=Mn(f.firestore,lo),h=f._query;const m=new yA(c);u={next:y=>{e[o]&&e[o](new UU(c,m,f,y))},error:e[o+1],complete:e[o+2]},MU(t._query)}return function(m,y,T,k){const x=new nA(k),C=new GR(y,x,T);return m.asyncQueue.enqueueAndForget(async()=>qR(await dm(m),C)),()=>{x.Za(),m.asyncQueue.enqueueAndForget(async()=>HR(await dm(m),C))}}(k_(c),h,a,u)}function wA(t,e){return function(r,i){const s=new Yr;return r.asyncQueue.enqueueAndForget(async()=>cU(await wU(r),i,s)),s.promise}(k_(t),e)}function EA(t,e,n){const r=n.docs.get(e._key),i=new yA(t);return new _A(t,i,e._key,r,new ca(n.hasPendingWrites,n.fromCache),e.converter)}function l3(){return new D_("serverTimestamp")}(function(e,n=!0){(function(i){Io=i})(es),Wi(new ei("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new lo(new zV(r.getProvider("auth-internal")),new HV(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dl(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),xn(TE,"4.7.3",e),xn(TE,"4.7.3","esm2017")})();const l0={apiKey:"AIzaSyC_SzEe95tFFvPrVUWXwpTedeCKhMQOvrE",authDomain:"mylatestweb-fd3d7.firebaseapp.com",databaseURL:"https://mylatestweb-fd3d7-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mylatestweb-fd3d7",storageBucket:"mylatestweb-fd3d7.appspot.com",messagingSenderId:"1079484393919",appId:"1:1079484393919:web:798256eeab7f28ecacd90a"},BU={...l0,apiKey:"AIzaSyC_SzEe95tFFvPrVUWXwpTedeCKhMQOvrE",authDomain:"mylatestweb-fd3d7.firebaseapp.com",databaseURL:"https://mylatestweb-fd3d7-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mylatestweb-fd3d7",storageBucket:l0.storageBucket,messagingSenderId:"1079484393919",appId:"1:1079484393919:web:798256eeab7f28ecacd90a"},B_=eC(BU),Ut=cL(B_),Ti=bV(B_),TA=SU(B_),bu=new Qn;function u3(t){if(!t)return"";const e=Math.floor((Date.now()-t)/1e3);return e<60?"just now":e<3600?`${Math.floor(e/60)}m`:e<86400?`${Math.floor(e/3600)}h`:e<2592e3?`${Math.floor(e/86400)}d`:new Date(t).toLocaleDateString()}function c3(t=""){const e=t.match(/#[\p{L}0-9_]+/gu)||[],n=new Set,r=[];for(const i of e){const o=i.slice(1).toLowerCase();n.has(o)||(n.add(o),r.push(o))}return r}function h3(t=""){return t.split(/(\s+)/).map((e,n)=>e.startsWith("#")&&e.length>1?{type:"hashtag",value:e,key:n}:{type:"text",value:e,key:n})}const IA=t=>new URL(t).hostname.toLowerCase().replace(/^www\./,"");function d3(t){if(!t)return null;try{const e=new URL(t),n=IA(t);if(n==="youtube.com"||n==="m.youtube.com"||n==="music.youtube.com"){const r=e.searchParams.get("v");if(r)return`https://www.youtube.com/embed/${r}`;const i=e.pathname.match(/\/shorts\/([\w-]+)/);if(i)return`https://www.youtube.com/embed/${i[1]}`}if(n==="youtu.be"){const r=e.pathname.slice(1);if(r)return`https://www.youtube.com/embed/${r}`}if(n==="vimeo.com"){const r=e.pathname.split("/").filter(Boolean)[0];if(r)return`https://player.vimeo.com/video/${r}`}if(dd(t)){const r=zU(t);return`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(r)}&show_text=false&width=560`}if(n==="instagram.com"){const r=e.pathname.match(/\/(p|reel|reels)\/([^/]+)/i);if(r)return`https://www.instagram.com/${r[1].toLowerCase()}/${r[2]}/embed`}if(n==="tiktok.com"){const r=e.pathname.match(/\/video\/(\d+)/i);if(r)return`https://www.tiktok.com/player/v1/${r[1]}?description=1&music_info=1`}if(n==="x.com"||n==="twitter.com"){const r=e.pathname.match(/\/status\/(\d+)/i);if(r)return`https://platform.twitter.com/embed/Tweet.html?id=${r[1]}`}if(n==="threads.net"||n==="threads.com"){const r=e.pathname.match(/(\/[@\w.-]+\/post\/[^/]+)/i);if(r)return`https://www.threads.net${r[1]}/embed`}if(n==="pinterest.com"||n==="pin.it"){const r=e.pathname.match(/\/pin\/(\d+)/i);if(r)return`https://assets.pinterest.com/ext/embed.html?id=${r[1]}`}if(n==="soundcloud.com")return`https://w.soundcloud.com/player/?url=${encodeURIComponent(`${e.origin}${e.pathname}`)}&color=%23ff5500&auto_play=false`;if(n==="open.spotify.com"){const r=e.pathname.match(/^\/(track|album|playlist|episode|show)\/([^/]+)/i);if(r)return`https://open.spotify.com/embed/${r[1]}/${r[2]}`}if(/\.(mp4|webm|ogg|mov|m4v)$/i.test(e.pathname))return t}catch{return null}return null}function zU(t=""){try{const e=new URL(t);return dd(t)?`https://www.facebook.com${e.pathname}`:t}catch{return t}}function f3(t=""){try{const e=IA(t);if(e==="youtube.com"||e==="m.youtube.com"||e==="music.youtube.com"||e==="youtu.be")return"youtube";if(e==="vimeo.com")return"vimeo";if(dd(t))return"facebook";if(e==="instagram.com")return"instagram";if(e==="tiktok.com")return"tiktok";if(e==="x.com"||e==="twitter.com")return"x";if(e==="threads.net"||e==="threads.com")return"threads";if(e==="pinterest.com"||e==="pin.it")return"pinterest";if(e==="soundcloud.com")return"soundcloud";if(e==="open.spotify.com")return"spotify";if(/\.(mp4|webm|ogg|mov|m4v)$/i.test(new URL(t).pathname))return"direct"}catch{return null}return null}function dd(t=""){try{const e=new URL(t).hostname;return e==="facebook.com"||e.endsWith(".facebook.com")||e==="fb.watch"}catch{return!1}}function p3(t=""){try{return dd(t)&&/\/(reel|reels|share\/r)\//i.test(new URL(t).pathname)}catch{return!1}}function m3(t){try{const e=new URL(t);return e.protocol==="https:"||e.protocol==="http:"}catch{return!1}}function $U(t=""){return t.trim().toLowerCase()}function WU(t){return/^[a-zA-Z0-9_.]{3,20}$/.test(t)}function qU(){return typeof window<"u"&&window.CODEWITHSIAM_AUTH_API?window.CODEWITHSIAM_AUTH_API.replace(/\/$/,""):typeof window<"u"&&["localhost","127.0.0.1"].includes(window.location.hostname)?"http://localhost:3001":""}async function Pf(t,e){const n=qU();if(!n)throw new Error("Email verification service is not configured.");const r={start:"/api/auth/send-otp",verify:"/api/auth/verify-otp",resend:"/api/auth/resend-otp"}[t];if(!r)throw new Error("Invalid registration request.");let i;try{i=await fetch(`${n}${r}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch{throw new Error("Cannot reach the verification service. Please try again later.")}const s=await i.json().catch(()=>null);if(!i.ok||(s==null?void 0:s.success)===!1)throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"The verification request failed. Please try again.");return s||{}}const CA=O.createContext(null);function Ao(){return O.useContext(CA)}function HU({children:t}){const[e,n]=O.useState(null),[r,i]=O.useState(null),[s,o]=O.useState(!0),[a,u]=O.useState(""),[c,h]=O.useState("");O.useEffect(()=>{const v=JD(Ut,g=>{const E=(g==null?void 0:g.emailVerified)||(g==null?void 0:g.providerData.some(S=>S.providerId==="google.com"));n(E?g:null),o(!1),E||(i(null),g&&gf(Ut).catch(()=>{}))});return()=>{v()}},[]),O.useEffect(()=>{let v=!0;return RO(Ut).then(g=>{if(v&&(g!=null&&g.user))return f(g.user)}).catch(g=>{v&&u((g==null?void 0:g.code)||"auth/unknown")}),()=>{v=!1}},[]),O.useEffect(()=>{if(!e)return;const v=Ei(Ti,`users/${e.uid}`),g=setTimeout(()=>o(!1),600),E=Yp(v,S=>{i(S.val()),o(!1)});return()=>{clearTimeout(g),E()}},[e]),O.useEffect(()=>{if(!e)return;const v=Ei(Ti,`presence/${e.uid}`),g=Ei(Ti,".info/connected");return Yp(g,S=>{S.val()!==!1&&yV(v).set({state:"offline",lastChanged:Au()}).then(()=>{Ra(v,{state:"online",lastChanged:Au()})})})},[e]);async function f(v,g={}){if(!v.emailVerified&&!v.providerData.some(Nt=>Nt.providerId==="google.com"))return;const E=Ei(Ti,`users/${v.uid}`);if((await wV(E)).exists())return;const P=(g.username||(v.email?v.email.split("@")[0]:`user${v.uid.slice(0,6)}`)).replace(/[^a-zA-Z0-9_.]/g,"").slice(0,20)||`user${v.uid.slice(0,6)}`;let N=P,R="",Ae=!1;for(let Nt=0;Nt<8;Nt+=1){const _r=Nt===0?"":Nt.toString(36);if(N=`${P.slice(0,20-_r.length)}${_r}`,R=$U(N),(await VV(Ei(Ti,`usernames/${R}`),$=>{if($===null||$===v.uid)return v.uid})).committed){Ae=!0;break}}if(!Ae)throw new Error("A unique username could not be reserved. Please try again.");await Ra(E,{uid:v.uid,fullName:g.fullName||v.displayName||N,username:N,usernameLower:R,bio:"",photoURL:v.photoURL||"",coverURL:"",createdAt:Au(),followersCount:0,followingCount:0,friendsCount:0,isPrivate:!1}),await Ra(Ei(Ti,`users/${v.uid}/private/email`),v.email||"")}async function m({email:v,password:g,fullName:E,username:S}){if(g.length<8)throw new Error("Password must be at least 8 characters.");if(S&&!WU(S))throw new Error('Username must be 3-20 characters: letters, numbers, "_" or "." only.');const P=v.trim().toLowerCase(),N=(E==null?void 0:E.trim())||P.split("@")[0];return await Pf("start",{name:N,email:P,password:g}),{email:P}}async function y(v,g,E=""){return Pf("verify",{email:v.trim().toLowerCase(),otp:g.trim(),password:E})}async function T(v){return Pf("resend",{email:v.trim().toLowerCase()})}async function k(v,g){const E=await GD(Ut,v.trim().toLowerCase(),g);if(!E.user.emailVerified&&!E.user.providerData.some(S=>S.providerId==="google.com"))throw await gf(Ut),new Error("Please verify your email with the 6-digit code sent during registration.");return await f(E.user),E.user}function x(){var v;return typeof window<"u"&&(((v=window.matchMedia)==null?void 0:v.call(window,"(max-width: 768px)").matches)||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent))}async function C(){if(x())return await xw(Ut,bu),null;let v;try{v=await yO(Ut,bu)}catch(g){if((g==null?void 0:g.code)==="auth/popup-blocked"||(g==null?void 0:g.code)==="auth/operation-not-supported-in-this-environment")return await xw(Ut,bu),null;throw g}return await f(v.user),v.user}async function w(v){return HD(Ut,v.trim().toLowerCase())}async function A(){if(!Ut.currentUser)throw new Error("Please sign in first.");const v=await vO(Ut.currentUser,bu);return await f(v.user),v.user}async function D(v,g){const E=Ut.currentUser;if(!(E!=null&&E.email))throw new Error("Please sign in with an email account first.");if(g.length<8)throw new Error("Password must be at least 8 characters.");if(E.providerData.some(P=>P.providerId==="password")){if(!v)throw new Error("Enter your current password.");const P=ti.credential(E.email,v);await WD(E,P),await KD(E,g)}else await $D(E,ti.credential(E.email,g))}async function F(){return e&&await vV(Ei(Ti,`presence/${e.uid}`),{state:"offline",lastChanged:Au()}),gf(Ut)}const U={user:e,profile:r,loading:s,authError:a,clearAuthError:()=>u(""),authPrompt:c,requestSignIn:(v="Please sign in to continue.")=>h(v),dismissAuthPrompt:()=>h(""),signup:m,verifySignupCode:y,resendSignupCode:T,login:k,loginWithGoogle:C,resetPassword:w,linkGoogleAccount:A,changeAccountPassword:D,logout:F};return I.jsx(CA.Provider,{value:U,children:t})}const SA=O.createContext(null);function g3(){return O.useContext(SA)}function GU({children:t}){const[e,n]=O.useState(()=>{const i=localStorage.getItem("mc-theme");return i||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});O.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("mc-theme",e)},[e]);const r=()=>n(i=>i==="dark"?"light":"dark");return I.jsx(SA.Provider,{value:{theme:e,setTheme:n,toggleTheme:r},children:t})}const RA=O.createContext(null);function KU(){return O.useContext(RA)}let QU=0;function YU({children:t}){const[e,n]=O.useState([]),r=O.useCallback((i,s="info")=>{const o=++QU;n(a=>[...a,{id:o,message:i,type:s}]),setTimeout(()=>{n(a=>a.filter(u=>u.id!==o))},3500)},[]);return I.jsxs(RA.Provider,{value:{showToast:r},children:[t,I.jsx("div",{className:"toast-stack",children:e.map(i=>I.jsx("div",{className:`toast toast-${i.type}`,children:i.message},i.id))})]})}function AA({label:t="Loading...",full:e=!1}){return I.jsxs("div",{className:e?"spinner-full":"spinner-inline",children:[I.jsx("div",{className:"spinner","aria-hidden":"true"}),I.jsx("span",{className:"spinner-label",children:t})]})}function XU({children:t}){const{user:e,loading:n}=Ao(),r=rn();if(n)return I.jsx(AA,{full:!0,label:"Checking session..."});if(!e){const i=`${r.pathname}${r.search}${r.hash}`;return I.jsx("div",{className:"auth-page",children:I.jsxs("section",{className:"auth-card","aria-labelledby":"protected-route-title",children:[I.jsx("h1",{id:"protected-route-title",children:"Sign in to continue"}),I.jsx("p",{className:"muted",children:"This community feature is available to members. Your current page will be restored after sign-in."}),I.jsxs("div",{className:"auth-links",children:[I.jsx(Ya,{className:"btn btn-primary",to:"/login",state:{returnTo:i},children:"Sign In"}),I.jsx(Ya,{className:"btn btn-ghost",to:"/signup",state:{returnTo:i},children:"Create Account"})]})]})})}return t||I.jsx(UI,{})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JU=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ZU(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:JU(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=t=>{let e="",n=!1;for(const r of t){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=t=>{const e=ej(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Nf(t){return t!=null}function nj(t,e={}){var m,y;const n=e.attributeNames??{},r=T=>n[T]??T,i=t.size??t.width??Ii.width,s=t.size??t.height??Ii.height,o=((m=t.aliases)==null?void 0:m.filter(T=>typeof T=="string"&&T.trim()!=="").map(T=>`lucide-${T}`))??[],a=[...t.name?[`lucide-${t.name}`]:[],...o],u=((y=e.className)==null?void 0:y.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?pm(...u):pm("lucide",...a,...u),h=e.absoluteStrokeWidth?Number(e.strokeWidth??Ii["stroke-width"])*Number(t.size??t.width??Ii.width)/Number(e.size??e.width??Ii.width):e.strokeWidth??Ii["stroke-width"];return["svg",{...Object.entries(Ii).reduce((T,[k,x])=>(T[r(k)]=x,T),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Nf(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Nf(e.width)&&{[r("width")]:e.width},..."height"in e&&Nf(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:h,...c&&{[r("class")]:c},[r("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(T=>{const[k,x,C]=T,w=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...x}:x;return C?[k,w,C]:[k,w]})]}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function rj(t,e={}){return nj(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},sj=O.createContext({}),oj=()=>O.useContext(sj),aj=O.forwardRef(({color:t,size:e,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:s,nonScalingStroke:o,className:a="",children:u,iconNode:c=[],icon:h={node:c,aliases:[],size:24},...f},m)=>{const{size:y=24,strokeWidth:T=2,absoluteStrokeWidth:k=!1,nonScalingStroke:x=!1,color:C="currentColor",className:w=""}=oj()??{},A=!!u||ij(f),[D,F,U=[]]=rj(h,{color:t??C,width:n??e??y,height:r??e??y,strokeWidth:i??T,absoluteStrokeWidth:s??k,nonScalingStroke:o??x,className:pm(w,a),hasA11yProp:A,attributes:f});return O.createElement(D,{ref:m,...F},[...U.map(([v,g])=>O.createElement(v,g)),...Array.isArray(u)?u:[u]])});/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Le(t,e=[],n=[]){const r=typeof t=="string"?ZU(t,e,n):t,i=O.forwardRef(({className:s,...o},a)=>O.createElement(aj,{ref:a,icon:r,className:s,...o}));return r.name&&(i.displayName=tj(r.name)),i}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};kA.node;const z_=Le(kA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};PA.node;const lj=Le(PA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA={name:"bookmark",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]};NA.node;const uj=Le(NA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};xA.node;const cj=Le(xA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA={name:"circle-plus",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],aliases:["plus-circle"]};bA.node;const hj=Le(bA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA={name:"clock-3",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]]};DA.node;const dj=Le(DA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA={name:"gamepad-2",size:24,node:[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]};OA.node;const LA=Le(OA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA={name:"grid-2x2",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],aliases:["grid-2-x-2"]};MA.node;const fj=Le(MA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};VA.node;const $_=Le(VA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA={name:"megaphone",size:24,node:[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]]};FA.node;const u0=Le(FA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};UA.node;const jA=Le(UA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA={name:"message-circle",size:24,node:[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]};BA.node;const pj=Le(BA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA={name:"message-square-text",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M7 11h10",key:"1twpyw"}],["path",{d:"M7 15h6",key:"d9of3u"}],["path",{d:"M7 7h8",key:"af5zfr"}]]};zA.node;const mj=Le(zA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};$A.node;const mm=Le($A);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};WA.node;const gj=Le(WA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};qA.node;const _j=Le(qA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA={name:"square-play",size:24,node:[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}]],aliases:["play-square"]};HA.node;const GA=Le(HA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]};KA.node;const W_=Le(KA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA={name:"user-round",size:24,node:[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],aliases:["user-2"]};QA.node;const YA=Le(QA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};XA.node;const yj=Le(XA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};JA.node;const q_=Le(JA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA={name:"video",size:24,node:[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]};ZA.node;const vj=Le(ZA);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};ek.node;const wj=Le(ek),Cn={size:19,strokeWidth:1.8,"aria-hidden":!0};function Ej({onMenu:t}){const[e,n]=O.useState(""),[r,i]=O.useState(!1),[s,o]=O.useState(0),a=mo(),{pathname:u,search:c}=rn(),{profile:h,user:f}=Ao(),m=u==="/"?"home":new URLSearchParams(c).get("view");O.useEffect(()=>{if(!f)return;const T=fA(oA(TA,"chats"),pA("members","array-contains",f.uid),mA("lastMessageAt","desc")),k=vA(T,x=>{const C=x.docs.reduce((w,A)=>{var D,F;return w+Number(((F=(D=A.data())==null?void 0:D.unread)==null?void 0:F[f.uid])||0)},0);o(C)});return()=>k()},[f]);function y(T){T.preventDefault(),e.trim()&&a(`/search?q=${encodeURIComponent(e.trim())}`)}return I.jsxs("header",{className:"navbar",children:[I.jsx("button",{className:"mobile-menu-btn icon-btn",type:"button",onClick:t,"aria-label":"Open menu",children:I.jsx(jA,{...Cn})}),I.jsxs("a",{className:"navbar-brand",href:"/","aria-label":"Back to CodeWithSiam site",title:"Back to site",children:[I.jsx("img",{className:"brand-mark navbar-brand-avatar",src:(h==null?void 0:h.photoURL)||"/assets/images/profile-siam.webp",alt:""}),I.jsx("span",{className:"cwsfb-brand-name",children:"CodeWithSiam"})]}),I.jsxs("form",{className:`navbar-search${r?" is-mobile-open":""}`,onSubmit:T=>{y(T),i(!1)},children:[I.jsx(mm,{className:"navbar-search-icon",size:17,"aria-hidden":"true"}),I.jsx("input",{value:e,onChange:T=>n(T.target.value),placeholder:"Search CodeWithSiam","aria-label":"Search"})]}),I.jsxs("nav",{className:"navbar-quick-actions","aria-label":"Community navigation",children:[I.jsx("button",{className:`quick-action${m==="home"?" active":""}`,type:"button","aria-label":"Home","aria-current":m==="home"?"page":void 0,onClick:()=>a("/"),children:I.jsx($_,{...Cn})}),I.jsx("button",{className:`quick-action${m==="reels"?" active":""}`,type:"button","aria-label":"Reels","aria-current":m==="reels"?"page":void 0,onClick:()=>a("/search?view=reels"),children:I.jsx(GA,{...Cn})}),I.jsx("button",{className:`quick-action${m==="marketplace"?" active":""}`,type:"button","aria-label":"Marketplace","aria-current":m==="marketplace"?"page":void 0,onClick:()=>a("/search?view=marketplace"),children:I.jsx(W_,{...Cn})}),I.jsx("button",{className:`quick-action${m==="groups"?" active":""}`,type:"button","aria-label":"Groups","aria-current":m==="groups"?"page":void 0,onClick:()=>a("/search?view=groups"),children:I.jsx(q_,{...Cn})}),I.jsx("button",{className:`quick-action${m==="gaming"?" active":""}`,type:"button","aria-label":"Games","aria-current":m==="gaming"?"page":void 0,onClick:()=>a("/search?view=gaming"),children:I.jsx(LA,{...Cn})})]}),I.jsxs("div",{className:"navbar-actions",children:[I.jsx("button",{className:"icon-btn ghost-btn",type:"button","aria-label":"Apps",children:I.jsx(fj,{...Cn})}),I.jsxs("button",{className:"icon-btn ghost-btn",type:"button","aria-label":"Messages",onClick:()=>a("/messenger"),style:{position:"relative"},children:[I.jsx(mj,{...Cn}),s>0&&I.jsx("span",{style:{position:"absolute",top:"-3px",right:"-2px",background:"#00a884",color:"#fff",borderRadius:"999px",minWidth:"18px",height:"18px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,padding:"0 5px"},children:s>9?"9+":s})]}),I.jsx("button",{className:"icon-btn ghost-btn",type:"button","aria-label":"Notifications",children:I.jsx(z_,{...Cn})}),I.jsx("button",{className:"avatar-action",type:"button","aria-label":"Profile",onClick:()=>a("/profile"),children:I.jsx("img",{className:"navbar-avatar",src:(h==null?void 0:h.photoURL)||"/default-avatar.png",alt:"Profile"})}),I.jsx("button",{className:"mobile-search-btn icon-btn",type:"button",onClick:()=>i(!0),title:"Search","aria-label":"Open search",children:I.jsx(mm,{...Cn})})]})]})}const Tj=[{to:"/",label:"Home",icon:$_},{to:"/search?view=friends",label:"Friends",icon:YA},{to:"/search?view=saved",label:"Saved",icon:uj},{to:"/search",label:"Search",icon:mm},{to:"/create",label:"Create Post",icon:hj},{to:"/messenger",label:"Messenger",icon:pj},{to:"/notifications",label:"Notifications",icon:z_}],Ij=[{to:"/search?view=groups",label:"Groups",icon:q_},{to:"/search?view=reels",label:"Reels",icon:vj},{to:"/search?view=marketplace",label:"Marketplace",icon:W_}],Cj=[{to:"/search?view=memories",label:"Memories",icon:dj},{to:"/search?view=feeds",label:"Feeds",icon:lj},{to:"/search?view=gaming",label:"Gaming",icon:LA}],Ci={size:20,strokeWidth:1.5,"aria-hidden":!0};function Sj({mobileOpen:t=!1,onClose:e}){var c;const[n,r]=O.useState(!1),[i,s]=O.useState(0),{user:o,profile:a}=Ao(),u=((c=o==null?void 0:o.email)==null?void 0:c.toLowerCase())==="mdsiamahmmedloselovestroy@gmail.com";return O.useEffect(()=>{if(!o)return;const h=fA(oA(TA,"chats"),pA("members","array-contains",o.uid),mA("lastMessageAt","desc")),f=vA(h,m=>{const y=m.docs.reduce((T,k)=>{var x,C;return T+Number(((C=(x=k.data())==null?void 0:x.unread)==null?void 0:C[o.uid])||0)},0);s(y)});return()=>f()},[o]),I.jsxs(I.Fragment,{children:[t&&I.jsx("button",{className:"sidebar-backdrop",type:"button","aria-label":"Close menu",onClick:e}),I.jsxs("nav",{className:`sidebar${t?" is-open":""}`,children:[I.jsxs("div",{className:"sidebar-mobile-head",children:[I.jsx("strong",{children:"Menu"}),I.jsx("button",{className:"icon-btn",type:"button",onClick:e,"aria-label":"Close menu",children:I.jsx(wj,{...Ci})})]}),I.jsxs(An,{to:a?`/profile/${a.uid}`:"/login",onClick:e,"aria-label":"Your profile",className:({isActive:h})=>`sidebar-link sidebar-profile${h?" active":""}`,children:[a!=null&&a.photoURL?I.jsx("img",{className:"sidebar-profile-avatar",src:a.photoURL,alt:""}):I.jsx(yj,{className:"sidebar-icon",...Ci}),I.jsx("span",{children:(a==null?void 0:a.fullName)||"Your profile"})]}),Tj.map(h=>{const f=h.to==="/messenger";return I.jsxs(An,{to:h.to,onClick:e,"aria-label":h.label,className:({isActive:m})=>`sidebar-link${m?" active":""}`,style:f?{position:"relative"}:void 0,children:[I.jsx(h.icon,{className:"sidebar-icon",...Ci}),I.jsx("span",{children:h.label}),f&&i>0&&I.jsx("span",{style:{marginLeft:"auto",background:"#00a884",color:"#fff",borderRadius:"999px",minWidth:"18px",height:"18px",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,padding:"0 5px"},children:i>9?"9+":i})]},h.to)}),I.jsx("div",{className:"sidebar-section-divider",children:I.jsx("span",{children:"Your shortcuts"})}),Ij.map(h=>I.jsxs(An,{to:h.to,onClick:e,"aria-label":h.label,className:({isActive:f})=>`sidebar-link sidebar-more-link${f?" active":""}`,children:[I.jsx(h.icon,{className:"sidebar-icon",...Ci}),I.jsx("span",{children:h.label})]},h.to)),I.jsx("button",{className:"sidebar-see-more",type:"button","aria-expanded":n,onClick:()=>r(h=>!h),children:n?"See less":"See more"}),n&&Cj.map(h=>I.jsxs(An,{to:h.to,onClick:e,"aria-label":h.label,className:({isActive:f})=>`sidebar-link sidebar-more-link${f?" active":""}`,children:[I.jsx(h.icon,{className:"sidebar-icon",...Ci}),I.jsx("span",{children:h.label})]},h.to)),u&&I.jsxs("a",{className:"sidebar-link",href:"/admin",children:[I.jsx(_j,{className:"sidebar-icon",...Ci}),I.jsx("span",{children:"Admin Panel"})]}),I.jsxs(An,{to:"/settings",onClick:e,className:({isActive:h})=>`sidebar-link${h?" active":""}`,children:[I.jsx(gj,{className:"sidebar-icon",...Ci}),I.jsx("span",{children:"Settings"})]})]})]})}const ds={size:20,strokeWidth:1.75,"aria-hidden":!0};function Rj({onMenu:t}){const{pathname:e,search:n}=rn(),r=new URLSearchParams(n).get("view");return I.jsxs("nav",{className:"bottom-nav",children:[I.jsx(An,{to:"/",end:!0,title:"Home","aria-label":"Home",className:({isActive:i})=>i?"active":"",children:I.jsx($_,{...ds})}),I.jsx(An,{to:"/search?view=reels",title:"Reels","aria-label":"Reels",className:()=>e==="/search"&&r==="reels"?"active":"",children:I.jsx(GA,{...ds})}),I.jsx(An,{to:"/search?view=marketplace",title:"Marketplace","aria-label":"Marketplace",className:()=>e==="/search"&&r==="marketplace"?"active":"",children:I.jsx(W_,{...ds})}),I.jsx(An,{to:"/search?view=groups",title:"Groups","aria-label":"Groups",className:()=>e==="/search"&&r==="groups"?"active":"",children:I.jsx(q_,{...ds})}),I.jsx(An,{to:"/notifications",title:"Notifications","aria-label":"Notifications",className:({isActive:i})=>i?"active":"",children:I.jsx(z_,{...ds})}),I.jsx("button",{type:"button",title:"Menu","aria-label":"Menu",onClick:t,children:I.jsx(jA,{...ds})})]})}function gm(t){if(!t)return null;if(typeof t.toDate=="function")return t.toDate();if(t instanceof Date)return t;if(typeof t=="number")return new Date(t);if(typeof t=="string"){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}return typeof t.seconds=="number"?new Date(t.seconds*1e3):null}function Aj(t){const e=gm(t);return e?new Intl.DateTimeFormat("en",{hour:"numeric",minute:"2-digit"}).format(e):"Now"}function kj(t,e){return!Array.isArray(t==null?void 0:t.members)||!e?null:t.members.find(n=>n!==e)||null}function Pj(t){const{chats:e=[],activeChatId:n,currentUserUid:r,usersMap:i={},onSelect:s,onNewChat:o,activeId:a}=t,u=O.useMemo(()=>[...e].filter(Boolean).sort((c,h)=>{var y,T,k,x;const f=((T=(y=gm(c==null?void 0:c.lastMessageAt))==null?void 0:y.getTime)==null?void 0:T.call(y))||0;return(((x=(k=gm(h==null?void 0:h.lastMessageAt))==null?void 0:k.getTime)==null?void 0:x.call(k))||0)-f}).map(c=>{var T;const h=kj(c,r),f=h&&i[h]||null,m=Number(((T=c.unread)==null?void 0:T[r])||0),y=(f==null?void 0:f.displayName)||(f==null?void 0:f.fullName)||"New chat";return{id:c.id,title:y,previewText:c.lastMessage||"No messages yet",unread:m,isUnread:m>0,photo:(f==null?void 0:f.photoURL)||"",online:!!(f!=null&&f.online),time:Aj(c.lastMessageAt)}}),[e,r,i]);return I.jsxs("div",{className:"cwschat conversation-list-wrap",children:[I.jsxs("div",{className:"cwschat list-toolbar",children:[I.jsx("span",{children:"Chats"}),I.jsx("button",{type:"button",className:"cwschat small-action",onClick:o||(()=>{}),children:"New chat"})]}),u.length===0?I.jsx("div",{className:"cwschat empty-list-state",children:I.jsx("p",{children:"No conversations yet."})}):u.map(c=>{var h,f;return I.jsxs("button",{type:"button",onClick:()=>s==null?void 0:s(c.id),className:`cwschat conversation-row${c.id===(n||a)?" active":""}${c.isUnread?" unread":""}`,children:[I.jsxs("div",{className:"cwschat avatar-stack",children:[c.photo?I.jsx("img",{src:c.photo,alt:"",className:"cwschat row-avatar"}):I.jsx("span",{className:"cwschat row-avatar fallback",children:((f=(h=c.title)==null?void 0:h.slice(0,1))==null?void 0:f.toUpperCase())||"?"}),c.online&&I.jsx("span",{className:"cwschat online-indicator"})]}),I.jsxs("div",{className:"cwschat row-copy",children:[I.jsxs("div",{className:"cwschat row-topline",children:[I.jsx("strong",{children:c.title}),I.jsx("time",{children:c.time||"Now"})]}),I.jsxs("div",{className:"cwschat row-bottomline",children:[I.jsx("span",{children:c.previewText}),c.isUnread&&I.jsx("span",{className:"cwschat unread-badge",children:c.unread>9?"9+":c.unread})]})]})]},c.id)})]})}function Nj(){const[t,e]=O.useState(!1),{pathname:n}=rn(),r=mo(),{user:i}=Ao(),s=n.startsWith("/messenger");return I.jsxs("div",{className:"app-shell",children:[I.jsx(Ej,{onMenu:()=>e(!0)}),I.jsxs("div",{className:`app-body${s?" messenger-layout":""}`,children:[I.jsx(Sj,{mobileOpen:t,onClose:()=>e(!1)}),I.jsx("main",{className:"app-main",children:I.jsx(UI,{})}),!s&&I.jsx("div",{className:"app-right-rail trending-rail",children:I.jsxs("div",{className:"rail-stack",children:[I.jsxs("section",{className:"rail-card friend-requests-card",children:[I.jsxs("div",{className:"rail-card-heading",children:[I.jsx("h4",{children:"Friend Requests"}),I.jsx("a",{href:"/community/search?view=friends",children:"See all"})]}),I.jsxs("div",{className:"friend-request-empty",children:[I.jsx("span",{children:I.jsx(YA,{size:18})}),I.jsx("p",{children:"No new requests right now."})]})]}),I.jsxs("section",{className:"rail-card cwsfb-highlights",children:[I.jsxs("div",{className:"rail-card-heading",children:[I.jsx("span",{className:"rail-eyebrow",children:"HIGHLIGHTS"}),I.jsx(u0,{size:16})]}),I.jsx("h4",{children:"Community highlights"}),I.jsx("p",{className:"muted",children:"Stories, ideas, and recent posts from CodeWithSiam."}),I.jsx("a",{href:"/community/search?view=reels",children:"Explore Reels"})]}),I.jsxs("section",{className:"rail-card cwsfb-birthdays",children:[I.jsx("span",{className:"rail-eyebrow",children:"TODAY"}),I.jsx("h4",{children:"Birthdays"}),I.jsx("p",{className:"muted",children:"No birthdays today."})]}),I.jsxs("section",{className:"rail-card cwsfb-contacts",children:[I.jsx("div",{className:"rail-card-heading",children:I.jsx("h4",{children:"Contacts"})}),i?I.jsx(Pj,{activeId:"",onSelect:o=>r(`/messenger/${o}`)}):I.jsx("p",{className:"muted",children:"Sign in to see your contacts."})]}),I.jsxs("section",{className:"rail-card sponsored-card",children:[I.jsxs("div",{className:"rail-card-heading",children:[I.jsx("span",{className:"rail-eyebrow",children:"COMMUNITY PICKS"}),I.jsx(u0,{size:16})]}),I.jsxs("div",{className:"sponsored-placeholder",children:[I.jsx("span",{className:"sponsored-placeholder-image"}),I.jsxs("div",{children:[I.jsx("strong",{children:"Build your next idea in public"}),I.jsx("small",{children:"CodeWithSiam community"})]}),I.jsx(cj,{size:16})]})]}),I.jsxs("section",{className:"rail-card",children:[I.jsx("span",{className:"rail-eyebrow",children:"DISCOVER"}),I.jsx("h4",{children:"Trending hashtags"}),I.jsx("p",{className:"muted",children:"Follow the conversations shaping your community."}),I.jsxs("div",{className:"rail-tags",children:[I.jsx("span",{children:"#Python"}),I.jsx("span",{children:"#Programming"}),I.jsx("span",{children:"#AI"}),I.jsx("span",{children:"#MyCommunity"})]})]}),I.jsxs("section",{className:"rail-card",children:[I.jsx("span",{className:"rail-eyebrow",children:"PEOPLE"}),I.jsx("h4",{children:"People you may know"}),I.jsx("p",{className:"muted",children:"Discover learners and builders with similar interests."}),I.jsx("button",{className:"rail-action",type:"button",children:"Find people"})]}),I.jsxs("section",{className:"rail-card",children:[I.jsx("span",{className:"rail-eyebrow",children:"YOUR SPACE"}),I.jsx("h4",{children:"Suggested groups"}),I.jsx("p",{className:"muted",children:"Join focused conversations around code, AI, and projects."}),I.jsx("button",{className:"rail-action",type:"button",children:"Explore groups"})]})]})})]}),I.jsx(Rj,{onMenu:()=>e(!0)})]})}function xj(){const{authPrompt:t,dismissAuthPrompt:e}=Ao(),n=rn(),r=mo();if(!t)return null;function i(s){const o=`${n.pathname}${n.search}${n.hash}`;e(),r(s,{state:{returnTo:o}})}return I.jsx("div",{className:"modal-overlay",role:"presentation",onClick:e,children:I.jsxs("section",{className:"modal-card",role:"dialog","aria-modal":"true","aria-labelledby":"auth-prompt-title",onClick:s=>s.stopPropagation(),children:[I.jsx("h2",{id:"auth-prompt-title",children:"Sign in to continue"}),I.jsx("p",{children:t}),I.jsxs("div",{className:"auth-links",children:[I.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>i("/login"),children:"Sign In"}),I.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>i("/signup"),children:"Create Account"}),I.jsx("button",{className:"link-btn",type:"button",onClick:e,children:"Continue browsing"})]})]})})}function bj(){var P;const{user:t,login:e,loginWithGoogle:n,verifySignupCode:r,resendSignupCode:i,authError:s,clearAuthError:o}=Ao(),{showToast:a}=KU(),u=mo(),c=rn(),[h,f]=O.useState(((P=c.state)==null?void 0:P.email)||""),[m,y]=O.useState(""),[T,k]=O.useState(!1),[x,C]=O.useState(""),[w,A]=O.useState(!1),[D,F]=O.useState(""),[U,v]=O.useState(0);O.useEffect(()=>{var N;t&&u(((N=c.state)==null?void 0:N.returnTo)||"/",{replace:!0})},[c.state,u,t]),O.useEffect(()=>{var N;(N=c.state)!=null&&N.notice&&C(c.state.notice)},[c.state]),O.useEffect(()=>{if(!w||U<=0)return;const N=setTimeout(()=>v(R=>R-1),1e3);return()=>clearTimeout(N)},[U,w]),O.useEffect(()=>{s&&(a(Du({code:s}),"error"),o())},[s,o,a]);async function g(N){var R;N.preventDefault(),k(!0),C(w?"Verifying email...":"Signing in...");try{w&&(await r(h,D),A(!1),F(""),C("Email verified. Signing in...")),await e(h,m),u(((R=c.state)==null?void 0:R.returnTo)||"/",{replace:!0})}catch(Ae){(Ae==null?void 0:Ae.code)==="auth/user-disabled"||/verify your email with the 6-digit code/i.test((Ae==null?void 0:Ae.message)||"")?(A(!0),C("This account is awaiting email verification. Request its 6-digit code below.")):(a(Du(Ae),"error"),C(""))}finally{k(!1)}}async function E(){k(!0);try{await i(h),v(60),C("If a registration is pending, a new verification code will arrive shortly.")}catch(N){a(Du(N),"error")}finally{k(!1)}}async function S(){var N;k(!0),C("Connecting to Google...");try{await n()&&u(((N=c.state)==null?void 0:N.returnTo)||"/",{replace:!0})}catch(R){a(Du(R),"error"),C("")}finally{k(!1)}}return I.jsx("div",{className:"auth-page",children:I.jsxs("form",{className:"auth-card",onSubmit:g,children:[I.jsx("h1",{children:"My Community"}),I.jsx("p",{className:"muted",children:"Log in to continue"}),I.jsx("label",{className:"auth-field-label",htmlFor:"login-user-id",children:"User ID"}),I.jsx("input",{id:"login-user-id",type:"email",placeholder:"Enter your email",value:h,required:!0,autoComplete:"email",onChange:N=>f(N.target.value)}),I.jsx("label",{className:"auth-field-label",htmlFor:"login-password",children:"Password"}),I.jsx("input",{id:"login-password",type:"password",placeholder:"Enter your password",value:m,required:!0,autoComplete:"current-password",onChange:N=>y(N.target.value)}),I.jsx("button",{className:"btn btn-primary",type:"submit",disabled:T,children:"Log In"}),w&&I.jsxs(I.Fragment,{children:[I.jsx("p",{className:"muted small",children:"Enter the 6-digit code sent to this email. It expires in 10 minutes."}),I.jsx("label",{className:"auth-field-label",htmlFor:"login-otp",children:"6-digit verification code"}),I.jsx("input",{id:"login-otp",type:"text",inputMode:"numeric",autoComplete:"one-time-code",pattern:"[0-9]{6}",maxLength:6,value:D,onChange:N=>F(N.target.value.replace(/\D/g,"").slice(0,6))}),I.jsx("button",{className:"btn btn-primary",type:"submit",disabled:T||D.length!==6,children:"Verify and Sign In"}),I.jsx("button",{className:"link-btn",type:"button",disabled:T||U>0,onClick:E,children:U>0?`Resend code in ${U}s`:"Resend verification code"})]}),I.jsx("button",{type:"button",className:"btn btn-google",onClick:S,disabled:T,children:"Continue with Google"}),x&&I.jsx("p",{className:"muted small auth-status",role:"status","aria-live":"polite",children:x}),I.jsxs("div",{className:"auth-links auth-links-stack",children:[I.jsx(Ya,{to:"/forgot-password",children:"Forgot password?"}),I.jsxs("span",{children:["Don't have an account? ",I.jsx(Ya,{to:"/signup",children:"Create an account"})]})]})]})})}function Du(t){const e=(t==null?void 0:t.code)||"",n={"auth/invalid-credential":"Incorrect email or password. If you use Google, continue with Google.","auth/user-not-found":"No account found with that email.","auth/wrong-password":"Incorrect email or password.","auth/operation-not-allowed":"Email/password login is not enabled in Firebase Authentication.","auth/too-many-requests":"Too many attempts. Please wait and try again.","auth/user-disabled":"This account is awaiting email verification. Request a code to continue.","auth/email-already-in-use":"This email is already registered. Please sign in.","auth/weak-password":"Password must be at least 8 characters.","auth/popup-closed-by-user":"Google sign-in was cancelled.","auth/popup-blocked":"Google sign-in was blocked. Please allow popups and try again.","auth/cancelled-popup-request":"Another Google sign-in is already in progress.","auth/unauthorized-domain":"Google sign-in is not enabled for this website domain.","auth/network-request-failed":"Network connection failed. Check your connection and try again.","auth/account-exists-with-different-credential":"This email already belongs to another sign-in method. Use that method to access the existing account.","auth/operation-not-supported-in-this-environment":"Google sign-in is unavailable in this browser. Please try again.","auth/redirect-cancelled-by-user":"Google sign-in was cancelled."};return n[e]?n[e]:!e&&/^The code is invalid or expired\./.test((t==null?void 0:t.message)||"")?"Invalid or expired verification code.":!e&&/^(Too many requests\. Please wait and try again\.|Unable to start signup\..*)$/.test((t==null?void 0:t.message)||"")||!e&&/^(This (email|account)|Please |Password |Enter |Cannot reach |Could not |The verification)/.test((t==null?void 0:t.message)||"")||!e&&/^(Passwords do not match\.|Password must be at least 8 characters\.|Please verify your email before signing in\..*)$/.test((t==null?void 0:t.message)||"")?t.message:"Something went wrong. Please try again."}const Dj=O.lazy(()=>wn(()=>import("./Signup-D5u6zXuF.js"),[])),Oj=O.lazy(()=>wn(()=>import("./ForgotPassword-DcTisyLv.js"),[])),c0=O.lazy(()=>wn(()=>import("./Home-BwfjbUuX.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),Lj=O.lazy(()=>wn(()=>import("./Profile-BDDVNr5U.js"),__vite__mapDeps([7,2,5,3]))),h0=O.lazy(()=>wn(()=>import("./Messenger-DTzKS3X-.js"),__vite__mapDeps([8,4,6]))),d0=O.lazy(()=>wn(()=>import("./Notifications-NQ5THlF4.js"),[])),Mj=O.lazy(()=>wn(()=>import("./Search-DseTmqZK.js"),__vite__mapDeps([9,5,3]))),Vj=O.lazy(()=>wn(()=>import("./Hashtag-Qinr34kJ.js"),__vite__mapDeps([10,5,3]))),Fj=O.lazy(()=>wn(()=>import("./Settings-BhGFCBEt.js"),__vite__mapDeps([11,2]))),Uj=O.lazy(()=>wn(()=>import("./PostPage-C88bJ6i_.js"),__vite__mapDeps([12,5,3]))),jj=O.lazy(()=>wn(()=>import("./CreatePostPage-BPaOi-99.js"),__vite__mapDeps([13,1,2,3,4])));function xt({children:t}){return I.jsx(O.Suspense,{fallback:I.jsx(AA,{full:!0,label:"Loading Community..."}),children:t})}function Bj(){return I.jsx("div",{className:"cwsfb",children:I.jsx(GU,{children:I.jsx(YU,{children:I.jsx(HU,{children:I.jsxs(ax,{basename:"/community",children:[I.jsxs(JN,{children:[I.jsx(Qe,{path:"/login",element:I.jsx(bj,{})}),I.jsx(Qe,{path:"/signup",element:I.jsx(xt,{children:I.jsx(Dj,{})})}),I.jsx(Qe,{path:"/forgot-password",element:I.jsx(xt,{children:I.jsx(Oj,{})})}),I.jsxs(Qe,{element:I.jsx(Nj,{}),children:[I.jsx(Qe,{path:"/",element:I.jsx(xt,{children:I.jsx(c0,{})})}),I.jsx(Qe,{path:"/index.html",element:I.jsx(xt,{children:I.jsx(c0,{})})}),I.jsx(Qe,{path:"/post/:postId",element:I.jsx(xt,{children:I.jsx(Uj,{})})}),I.jsxs(Qe,{element:I.jsx(XU,{}),children:[I.jsx(Qe,{path:"/profile/:uid",element:I.jsx(xt,{children:I.jsx(Lj,{})})}),I.jsx(Qe,{path:"/messenger",element:I.jsx(xt,{children:I.jsx(h0,{})})}),I.jsx(Qe,{path:"/messenger/:convId",element:I.jsx(xt,{children:I.jsx(h0,{})})}),I.jsx(Qe,{path:"/notifications",element:I.jsx(xt,{children:I.jsx(d0,{})})}),I.jsx(Qe,{path:"/message-notifications",element:I.jsx(xt,{children:I.jsx(d0,{kind:"messages"})})}),I.jsx(Qe,{path:"/search",element:I.jsx(xt,{children:I.jsx(Mj,{})})}),I.jsx(Qe,{path:"/hashtag/:tag",element:I.jsx(xt,{children:I.jsx(Vj,{})})}),I.jsx(Qe,{path:"/settings",element:I.jsx(xt,{children:I.jsx(Fj,{})})}),I.jsx(Qe,{path:"/create",element:I.jsx(xt,{children:I.jsx(jj,{})})})]})]})]}),I.jsx(xj,{})]})})})})})}xf.createRoot(document.getElementById("root")).render(I.jsx(I0.StrictMode,{children:I.jsx(Bj,{})}));export{Wj as $,vA as A,r3 as B,TA as C,o3 as D,l3 as E,a3 as F,pA as G,Pj as H,s3 as I,z_ as J,pj as K,AA as L,mj as M,u3 as N,$j as O,Qj as P,g3 as Q,Hj as R,mm as S,d3 as T,YA as U,f3 as V,p3 as W,wj as X,h3 as Y,m3 as Z,c3 as _,KU as a,mg as a0,zU as a1,mo as b,rn as c,Ya as d,Ei as e,Du as f,wV as g,Ti as h,Xj as i,I as j,Gj as k,Yj as l,VV as m,Au as n,Yp as o,zj as p,Jj as q,O as r,Ra as s,vV as t,Ao as u,Le as v,fA as w,i3 as x,mA as y,oA as z};
