const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BBAQzahJ.js","assets/CreatePost-Dcf42kOH.js","assets/client-B4NVMnKm.js","assets/FacebookEmbed-C9p7eZKw.js","assets/image-BGaX_SeK.js","assets/users-round-k8TNosK2.js","assets/PostCard-Z1lLfIwW.js","assets/notify-COyFylhr.js","assets/Profile-BBvXPXBK.js","assets/Messenger-BzKX2eCo.js","assets/Search-DIh1s1UI.js","assets/Hashtag-DZepCyRv.js","assets/Settings-BLiC4GWR.js","assets/PostPage-DsAO5B9c.js","assets/CreatePostPage-CYpFST7O.js"])))=>i.map(i=>d[i]);
function Uw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Im={exports:{}},Ya={},km={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vs=Symbol.for("react.element"),Ww=Symbol.for("react.portal"),$w=Symbol.for("react.fragment"),Bw=Symbol.for("react.strict_mode"),Vw=Symbol.for("react.profiler"),Hw=Symbol.for("react.provider"),Gw=Symbol.for("react.context"),Kw=Symbol.for("react.forward_ref"),qw=Symbol.for("react.suspense"),Qw=Symbol.for("react.memo"),Yw=Symbol.for("react.lazy"),$h=Symbol.iterator;function Jw(t){return t===null||typeof t!="object"?null:(t=$h&&t[$h]||t["@@iterator"],typeof t=="function"?t:null)}var Tm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pm=Object.assign,Nm={};function vi(t,e,n){this.props=t,this.context=e,this.refs=Nm,this.updater=n||Tm}vi.prototype.isReactComponent={};vi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rm(){}Rm.prototype=vi.prototype;function Qc(t,e,n){this.props=t,this.context=e,this.refs=Nm,this.updater=n||Tm}var Yc=Qc.prototype=new Rm;Yc.constructor=Qc;Pm(Yc,vi.prototype);Yc.isPureReactComponent=!0;var Bh=Array.isArray,xm=Object.prototype.hasOwnProperty,Jc={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xm.call(e,r)&&!Am.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vs,type:t,key:s,ref:o,props:i,_owner:Jc.current}}function Xw(t,e){return{$$typeof:Vs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vs}function Zw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vh=/\/+/g;function Fl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zw(""+t.key):e.toString(36)}function Fo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vs:case Ww:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Fl(o,0):r,Bh(i)?(n="",t!=null&&(n=t.replace(Vh,"$&/")+"/"),Fo(i,e,n,"",function(u){return u})):i!=null&&(Xc(i)&&(i=Xw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Bh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Fl(s,a);o+=Fo(s,e,n,l,i)}else if(l=Jw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Fl(s,a++),o+=Fo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function po(t,e,n){if(t==null)return t;var r=[],i=0;return Fo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function e0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Fe={current:null},jo={transition:null},t0={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:jo,ReactCurrentOwner:Jc};function bm(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:po,forEach:function(t,e,n){po(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return po(t,function(){e++}),e},toArray:function(t){return po(t,function(e){return e})||[]},only:function(t){if(!Xc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=vi;z.Fragment=$w;z.Profiler=Vw;z.PureComponent=Qc;z.StrictMode=Bw;z.Suspense=qw;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t0;z.act=bm;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Pm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xm.call(e,l)&&!Am.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vs,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:Gw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Hw,_context:t},t.Consumer=t};z.createElement=Om;z.createFactory=function(t){var e=Om.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Kw,render:t}};z.isValidElement=Xc;z.lazy=function(t){return{$$typeof:Yw,_payload:{_status:-1,_result:t},_init:e0}};z.memo=function(t,e){return{$$typeof:Qw,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=jo.transition;jo.transition={};try{t()}finally{jo.transition=e}};z.unstable_act=bm;z.useCallback=function(t,e){return Fe.current.useCallback(t,e)};z.useContext=function(t){return Fe.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Fe.current.useDeferredValue(t)};z.useEffect=function(t,e){return Fe.current.useEffect(t,e)};z.useId=function(){return Fe.current.useId()};z.useImperativeHandle=function(t,e,n){return Fe.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Fe.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Fe.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Fe.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Fe.current.useReducer(t,e,n)};z.useRef=function(t){return Fe.current.useRef(t)};z.useState=function(t){return Fe.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Fe.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Fe.current.useTransition()};z.version="18.3.1";km.exports=z;var w=km.exports;const Lm=zw(w),n0=Uw({__proto__:null,default:Lm},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=w,i0=Symbol.for("react.element"),s0=Symbol.for("react.fragment"),o0=Object.prototype.hasOwnProperty,a0=r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l0={key:!0,ref:!0,__self:!0,__source:!0};function Dm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)o0.call(e,r)&&!l0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:i0,type:t,key:s,ref:o,props:i,_owner:a0.current}}Ya.Fragment=s0;Ya.jsx=Dm;Ya.jsxs=Dm;Im.exports=Ya;var p=Im.exports,Pu={},Mm={exports:{}},Ze={},Fm={exports:{}},jm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,D){var j=R.length;R.push(D);e:for(;0<j;){var ce=j-1>>>1,ge=R[ce];if(0<i(ge,D))R[ce]=D,R[j]=ge,j=ce;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var D=R[0],j=R.pop();if(j!==D){R[0]=j;e:for(var ce=0,ge=R.length,ho=ge>>>1;ce<ho;){var Qn=2*(ce+1)-1,Ml=R[Qn],Yn=Qn+1,fo=R[Yn];if(0>i(Ml,j))Yn<ge&&0>i(fo,Ml)?(R[ce]=fo,R[Yn]=j,ce=Yn):(R[ce]=Ml,R[Qn]=j,ce=Qn);else if(Yn<ge&&0>i(fo,j))R[ce]=fo,R[Yn]=j,ce=Yn;else break e}}return D}function i(R,D){var j=R.sortIndex-D.sortIndex;return j!==0?j:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,h=3,_=!1,v=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=R)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function E(R){if(y=!1,g(R),!v)if(n(l)!==null)v=!0,Pr(P);else{var D=n(u);D!==null&&co(E,D.startTime-R)}}function P(R,D){v=!1,y&&(y=!1,m(S),S=-1),_=!0;var j=h;try{for(g(D),c=n(l);c!==null&&(!(c.expirationTime>D)||R&&!K());){var ce=c.callback;if(typeof ce=="function"){c.callback=null,h=c.priorityLevel;var ge=ce(c.expirationTime<=D);D=t.unstable_now(),typeof ge=="function"?c.callback=ge:c===n(l)&&r(l),g(D)}else r(l);c=n(l)}if(c!==null)var ho=!0;else{var Qn=n(u);Qn!==null&&co(E,Qn.startTime-D),ho=!1}return ho}finally{c=null,h=j,_=!1}}var N=!1,C=null,S=-1,A=5,O=-1;function K(){return!(t.unstable_now()-O<A)}function W(){if(C!==null){var R=t.unstable_now();O=R;var D=!0;try{D=C(!0,R)}finally{D?Pe():(N=!1,C=null)}}else N=!1}var Pe;if(typeof f=="function")Pe=function(){f(W)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,rn=Ge.port2;Ge.port1.onmessage=W,Pe=function(){rn.postMessage(null)}}else Pe=function(){I(W,0)};function Pr(R){C=R,N||(N=!0,Pe())}function co(R,D){S=I(function(){R(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,Pr(P))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var j=h;h=D;try{return R()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=h;h=R;try{return D()}finally{h=j}},t.unstable_scheduleCallback=function(R,D,j){var ce=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ce+j:ce):j=ce,R){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=j+ge,R={id:d++,callback:D,priorityLevel:R,startTime:j,expirationTime:ge,sortIndex:-1},j>ce?(R.sortIndex=j,e(u,R),n(l)===null&&R===n(u)&&(y?(m(S),S=-1):y=!0,co(E,j-ce))):(R.sortIndex=ge,e(l,R),v||_||(v=!0,Pr(P))),R},t.unstable_shouldYield=K,t.unstable_wrapCallback=function(R){var D=h;return function(){var j=h;h=D;try{return R.apply(this,arguments)}finally{h=j}}}})(jm);Fm.exports=jm;var u0=Fm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0=w,Je=u0;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Um=new Set,ds={};function Cr(t,e){ei(t,e),ei(t+"Capture",e)}function ei(t,e){for(ds[t]=e,t=0;t<e.length;t++)Um.add(e[t])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=Object.prototype.hasOwnProperty,d0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hh={},Gh={};function h0(t){return Nu.call(Gh,t)?!0:Nu.call(Hh,t)?!1:d0.test(t)?Gh[t]=!0:(Hh[t]=!0,!1)}function f0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function p0(t,e,n,r){if(e===null||typeof e>"u"||f0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Te[t]=new je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Te[e]=new je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Te[t]=new je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Te[t]=new je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Te[t]=new je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Te[t]=new je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Te[t]=new je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Te[t]=new je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Te[t]=new je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zc=/[\-:]([a-z])/g;function ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zc,ed);Te[e]=new je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zc,ed);Te[e]=new je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zc,ed);Te[e]=new je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Te[t]=new je(t,1,!1,t.toLowerCase(),null,!1,!1)});Te.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Te[t]=new je(t,1,!1,t.toLowerCase(),null,!0,!0)});function td(t,e,n,r){var i=Te.hasOwnProperty(e)?Te[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(p0(e,n,i,r)&&(n=null),r||i===null?h0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tn=c0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mo=Symbol.for("react.element"),Ar=Symbol.for("react.portal"),Or=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),zm=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),$m=Symbol.for("react.offscreen"),Kh=Symbol.iterator;function xi(t){return t===null||typeof t!="object"?null:(t=Kh&&t[Kh]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,jl;function Bi(t){if(jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jl=e&&e[1]||""}return`
`+jl+t}var Ul=!1;function zl(t,e){if(!t||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bi(t):""}function m0(t){switch(t.tag){case 5:return Bi(t.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 2:case 15:return t=zl(t.type,!1),t;case 11:return t=zl(t.type.render,!1),t;case 1:return t=zl(t.type,!0),t;default:return""}}function Ou(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Or:return"Fragment";case Ar:return"Portal";case Ru:return"Profiler";case nd:return"StrictMode";case xu:return"Suspense";case Au:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wm:return(t.displayName||"Context")+".Consumer";case zm:return(t._context.displayName||"Context")+".Provider";case rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case id:return e=t.displayName||null,e!==null?e:Ou(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return Ou(t(e))}catch{}}return null}function g0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ou(e);case 8:return e===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ln(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _0(t){var e=Bm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function go(t){t._valueTracker||(t._valueTracker=_0(t))}function Vm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ea(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bu(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ln(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hm(t,e){e=e.checked,e!=null&&td(t,"checked",e,!1)}function Lu(t,e){Hm(t,e);var n=Ln(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Du(t,e.type,n):e.hasOwnProperty("defaultValue")&&Du(t,e.type,Ln(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Du(t,e,n){(e!=="number"||ea(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vi=Array.isArray;function Vr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ln(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Mu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Vi(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ln(n)}}function Gm(t,e){var n=Ln(e.value),r=Ln(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Km(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Km(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _o,qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_o=_o||document.createElement("div"),_o.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_o.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v0=["Webkit","ms","Moz","O"];Object.keys(Qi).forEach(function(t){v0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qi[e]=Qi[t]})});function Qm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qi.hasOwnProperty(t)&&Qi[t]?(""+e).trim():e+"px"}function Ym(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var y0=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(t,e){if(e){if(y0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Uu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zu=null;function sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wu=null,Hr=null,Gr=null;function Xh(t){if(t=Ks(t)){if(typeof Wu!="function")throw Error(k(280));var e=t.stateNode;e&&(e=tl(e),Wu(t.stateNode,t.type,e))}}function Jm(t){Hr?Gr?Gr.push(t):Gr=[t]:Hr=t}function Xm(){if(Hr){var t=Hr,e=Gr;if(Gr=Hr=null,Xh(t),e)for(t=0;t<e.length;t++)Xh(e[t])}}function Zm(t,e){return t(e)}function eg(){}var Wl=!1;function tg(t,e,n){if(Wl)return t(e,n);Wl=!0;try{return Zm(t,e,n)}finally{Wl=!1,(Hr!==null||Gr!==null)&&(eg(),Xm())}}function fs(t,e){var n=t.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var $u=!1;if(qt)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){$u=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{$u=!1}function w0(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Yi=!1,ta=null,na=!1,Bu=null,E0={onError:function(t){Yi=!0,ta=t}};function C0(t,e,n,r,i,s,o,a,l){Yi=!1,ta=null,w0.apply(E0,arguments)}function S0(t,e,n,r,i,s,o,a,l){if(C0.apply(this,arguments),Yi){if(Yi){var u=ta;Yi=!1,ta=null}else throw Error(k(198));na||(na=!0,Bu=u)}}function Sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ng(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zh(t){if(Sr(t)!==t)throw Error(k(188))}function I0(t){var e=t.alternate;if(!e){if(e=Sr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zh(i),t;if(s===r)return Zh(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function rg(t){return t=I0(t),t!==null?ig(t):null}function ig(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ig(t);if(e!==null)return e;t=t.sibling}return null}var sg=Je.unstable_scheduleCallback,ef=Je.unstable_cancelCallback,k0=Je.unstable_shouldYield,T0=Je.unstable_requestPaint,de=Je.unstable_now,P0=Je.unstable_getCurrentPriorityLevel,od=Je.unstable_ImmediatePriority,og=Je.unstable_UserBlockingPriority,ra=Je.unstable_NormalPriority,N0=Je.unstable_LowPriority,ag=Je.unstable_IdlePriority,Ja=null,Nt=null;function R0(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Ja,t,void 0,(t.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:O0,x0=Math.log,A0=Math.LN2;function O0(t){return t>>>=0,t===0?32:31-(x0(t)/A0|0)|0}var vo=64,yo=4194304;function Hi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ia(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Hi(a):(s&=o,s!==0&&(r=Hi(s)))}else o=n&~i,o!==0?r=Hi(o):s!==0&&(r=Hi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_t(e),i=1<<n,r|=t[n],e&=~i;return r}function b0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_t(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=b0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lg(){var t=vo;return vo<<=1,!(vo&4194240)&&(vo=64),t}function $l(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_t(e),t[e]=n}function D0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var H=0;function ug(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cg,ld,dg,hg,fg,Hu=!1,wo=[],wn=null,En=null,Cn=null,ps=new Map,ms=new Map,un=[],M0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tf(t,e){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":ps.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(e.pointerId)}}function Oi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ks(e),e!==null&&ld(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function F0(t,e,n,r,i){switch(e){case"focusin":return wn=Oi(wn,t,e,n,r,i),!0;case"dragenter":return En=Oi(En,t,e,n,r,i),!0;case"mouseover":return Cn=Oi(Cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ps.set(s,Oi(ps.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ms.set(s,Oi(ms.get(s)||null,t,e,n,r,i)),!0}return!1}function pg(t){var e=ir(t.target);if(e!==null){var n=Sr(e);if(n!==null){if(e=n.tag,e===13){if(e=ng(n),e!==null){t.blockedOn=e,fg(t.priority,function(){dg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zu=r,n.target.dispatchEvent(r),zu=null}else return e=Ks(n),e!==null&&ld(e),t.blockedOn=n,!1;e.shift()}return!0}function nf(t,e,n){Uo(t)&&n.delete(e)}function j0(){Hu=!1,wn!==null&&Uo(wn)&&(wn=null),En!==null&&Uo(En)&&(En=null),Cn!==null&&Uo(Cn)&&(Cn=null),ps.forEach(nf),ms.forEach(nf)}function bi(t,e){t.blockedOn===e&&(t.blockedOn=null,Hu||(Hu=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,j0)))}function gs(t){function e(i){return bi(i,t)}if(0<wo.length){bi(wo[0],t);for(var n=1;n<wo.length;n++){var r=wo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wn!==null&&bi(wn,t),En!==null&&bi(En,t),Cn!==null&&bi(Cn,t),ps.forEach(e),ms.forEach(e),n=0;n<un.length;n++)r=un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)pg(n),n.blockedOn===null&&un.shift()}var Kr=tn.ReactCurrentBatchConfig,sa=!0;function U0(t,e,n,r){var i=H,s=Kr.transition;Kr.transition=null;try{H=1,ud(t,e,n,r)}finally{H=i,Kr.transition=s}}function z0(t,e,n,r){var i=H,s=Kr.transition;Kr.transition=null;try{H=4,ud(t,e,n,r)}finally{H=i,Kr.transition=s}}function ud(t,e,n,r){if(sa){var i=Gu(t,e,n,r);if(i===null)Xl(t,e,r,oa,n),tf(t,r);else if(F0(i,t,e,n,r))r.stopPropagation();else if(tf(t,r),e&4&&-1<M0.indexOf(t)){for(;i!==null;){var s=Ks(i);if(s!==null&&cg(s),s=Gu(t,e,n,r),s===null&&Xl(t,e,r,oa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xl(t,e,r,null,n)}}var oa=null;function Gu(t,e,n,r){if(oa=null,t=sd(r),t=ir(t),t!==null)if(e=Sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ng(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return oa=t,null}function mg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P0()){case od:return 1;case og:return 4;case ra:case N0:return 16;case ag:return 536870912;default:return 16}default:return 16}}var pn=null,cd=null,zo=null;function gg(){if(zo)return zo;var t,e=cd,n=e.length,r,i="value"in pn?pn.value:pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zo=i.slice(t,1<r?1-r:void 0)}function Wo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Eo(){return!0}function rf(){return!1}function et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Eo:rf,this.isPropagationStopped=rf,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),e}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dd=et(yi),Gs=se({},yi,{view:0,detail:0}),W0=et(Gs),Bl,Vl,Li,Xa=se({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Li&&(Li&&t.type==="mousemove"?(Bl=t.screenX-Li.screenX,Vl=t.screenY-Li.screenY):Vl=Bl=0,Li=t),Bl)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),sf=et(Xa),$0=se({},Xa,{dataTransfer:0}),B0=et($0),V0=se({},Gs,{relatedTarget:0}),Hl=et(V0),H0=se({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=et(H0),K0=se({},yi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q0=et(K0),Q0=se({},yi,{data:0}),of=et(Q0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=X0[t])?!!e[t]:!1}function hd(){return Z0}var eE=se({},Gs,{key:function(t){if(t.key){var e=Y0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hd,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tE=et(eE),nE=se({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),af=et(nE),rE=se({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hd}),iE=et(rE),sE=se({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),oE=et(sE),aE=se({},Xa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lE=et(aE),uE=[9,13,27,32],fd=qt&&"CompositionEvent"in window,Ji=null;qt&&"documentMode"in document&&(Ji=document.documentMode);var cE=qt&&"TextEvent"in window&&!Ji,_g=qt&&(!fd||Ji&&8<Ji&&11>=Ji),lf=" ",uf=!1;function vg(t,e){switch(t){case"keyup":return uE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var br=!1;function dE(t,e){switch(t){case"compositionend":return yg(e);case"keypress":return e.which!==32?null:(uf=!0,lf);case"textInput":return t=e.data,t===lf&&uf?null:t;default:return null}}function hE(t,e){if(br)return t==="compositionend"||!fd&&vg(t,e)?(t=gg(),zo=cd=pn=null,br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _g&&e.locale!=="ko"?null:e.data;default:return null}}var fE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fE[t.type]:e==="textarea"}function wg(t,e,n,r){Jm(r),e=aa(e,"onChange"),0<e.length&&(n=new dd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xi=null,_s=null;function pE(t){Ag(t,0)}function Za(t){var e=Mr(t);if(Vm(e))return t}function mE(t,e){if(t==="change")return e}var Eg=!1;if(qt){var Gl;if(qt){var Kl="oninput"in document;if(!Kl){var df=document.createElement("div");df.setAttribute("oninput","return;"),Kl=typeof df.oninput=="function"}Gl=Kl}else Gl=!1;Eg=Gl&&(!document.documentMode||9<document.documentMode)}function hf(){Xi&&(Xi.detachEvent("onpropertychange",Cg),_s=Xi=null)}function Cg(t){if(t.propertyName==="value"&&Za(_s)){var e=[];wg(e,_s,t,sd(t)),tg(pE,e)}}function gE(t,e,n){t==="focusin"?(hf(),Xi=e,_s=n,Xi.attachEvent("onpropertychange",Cg)):t==="focusout"&&hf()}function _E(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Za(_s)}function vE(t,e){if(t==="click")return Za(e)}function yE(t,e){if(t==="input"||t==="change")return Za(e)}function wE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Et=typeof Object.is=="function"?Object.is:wE;function vs(t,e){if(Et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nu.call(e,i)||!Et(t[i],e[i]))return!1}return!0}function ff(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pf(t,e){var n=ff(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ff(n)}}function Sg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ig(){for(var t=window,e=ea();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ea(t.document)}return e}function pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function EE(t){var e=Ig(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sg(n.ownerDocument.documentElement,n)){if(r!==null&&pd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=pf(n,s);var o=pf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CE=qt&&"documentMode"in document&&11>=document.documentMode,Lr=null,Ku=null,Zi=null,qu=!1;function mf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qu||Lr==null||Lr!==ea(r)||(r=Lr,"selectionStart"in r&&pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zi&&vs(Zi,r)||(Zi=r,r=aa(Ku,"onSelect"),0<r.length&&(e=new dd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Lr)))}function Co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Dr={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},ql={},kg={};qt&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function el(t){if(ql[t])return ql[t];if(!Dr[t])return t;var e=Dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kg)return ql[t]=e[n];return t}var Tg=el("animationend"),Pg=el("animationiteration"),Ng=el("animationstart"),Rg=el("transitionend"),xg=new Map,gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(t,e){xg.set(t,e),Cr(e,[t])}for(var Ql=0;Ql<gf.length;Ql++){var Yl=gf[Ql],SE=Yl.toLowerCase(),IE=Yl[0].toUpperCase()+Yl.slice(1);$n(SE,"on"+IE)}$n(Tg,"onAnimationEnd");$n(Pg,"onAnimationIteration");$n(Ng,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Rg,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function _f(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,S0(r,e,void 0,t),t.currentTarget=null}function Ag(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;_f(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;_f(i,a,u),s=l}}}if(na)throw t=Bu,na=!1,Bu=null,t}function J(t,e){var n=e[Zu];n===void 0&&(n=e[Zu]=new Set);var r=t+"__bubble";n.has(r)||(Og(e,t,2,!1),n.add(r))}function Jl(t,e,n){var r=0;e&&(r|=4),Og(n,t,r,e)}var So="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[So]){t[So]=!0,Um.forEach(function(n){n!=="selectionchange"&&(kE.has(n)||Jl(n,!1,t),Jl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[So]||(e[So]=!0,Jl("selectionchange",!1,e))}}function Og(t,e,n,r){switch(mg(e)){case 1:var i=U0;break;case 4:i=z0;break;default:i=ud}n=i.bind(null,e,n,t),i=void 0,!$u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ir(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}tg(function(){var u=s,d=sd(n),c=[];e:{var h=xg.get(t);if(h!==void 0){var _=dd,v=t;switch(t){case"keypress":if(Wo(n)===0)break e;case"keydown":case"keyup":_=tE;break;case"focusin":v="focus",_=Hl;break;case"focusout":v="blur",_=Hl;break;case"beforeblur":case"afterblur":_=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=iE;break;case Tg:case Pg:case Ng:_=G0;break;case Rg:_=oE;break;case"scroll":_=W0;break;case"wheel":_=lE;break;case"copy":case"cut":case"paste":_=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=af}var y=(e&4)!==0,I=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=fs(f,m),E!=null&&y.push(ws(f,E,g)))),I)break;f=f.return}0<y.length&&(h=new _(h,v,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==zu&&(v=n.relatedTarget||n.fromElement)&&(ir(v)||v[Qt]))break e;if((_||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?ir(v):null,v!==null&&(I=Sr(v),v!==I||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=sf,E="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=af,E="onPointerLeave",m="onPointerEnter",f="pointer"),I=_==null?h:Mr(_),g=v==null?h:Mr(v),h=new y(E,f+"leave",_,n,d),h.target=I,h.relatedTarget=g,E=null,ir(d)===u&&(y=new y(m,f+"enter",v,n,d),y.target=g,y.relatedTarget=I,E=y),I=E,_&&v)t:{for(y=_,m=v,f=0,g=y;g;g=Nr(g))f++;for(g=0,E=m;E;E=Nr(E))g++;for(;0<f-g;)y=Nr(y),f--;for(;0<g-f;)m=Nr(m),g--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=Nr(y),m=Nr(m)}y=null}else y=null;_!==null&&vf(c,h,_,y,!1),v!==null&&I!==null&&vf(c,I,v,y,!0)}}e:{if(h=u?Mr(u):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var P=mE;else if(cf(h))if(Eg)P=yE;else{P=_E;var N=gE}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=vE);if(P&&(P=P(t,u))){wg(c,P,n,d);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Du(h,"number",h.value)}switch(N=u?Mr(u):window,t){case"focusin":(cf(N)||N.contentEditable==="true")&&(Lr=N,Ku=u,Zi=null);break;case"focusout":Zi=Ku=Lr=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,mf(c,n,d);break;case"selectionchange":if(CE)break;case"keydown":case"keyup":mf(c,n,d)}var C;if(fd)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else br?vg(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(_g&&n.locale!=="ko"&&(br||S!=="onCompositionStart"?S==="onCompositionEnd"&&br&&(C=gg()):(pn=d,cd="value"in pn?pn.value:pn.textContent,br=!0)),N=aa(u,S),0<N.length&&(S=new of(S,t,null,n,d),c.push({event:S,listeners:N}),C?S.data=C:(C=yg(n),C!==null&&(S.data=C)))),(C=cE?dE(t,n):hE(t,n))&&(u=aa(u,"onBeforeInput"),0<u.length&&(d=new of("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=C))}Ag(c,e)})}function ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function aa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fs(t,n),s!=null&&r.unshift(ws(t,s,i)),s=fs(t,e),s!=null&&r.push(ws(t,s,i))),t=t.return}return r}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fs(n,s),l!=null&&o.unshift(ws(n,l,a))):i||(l=fs(n,s),l!=null&&o.push(ws(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TE=/\r\n?/g,PE=/\u0000|\uFFFD/g;function yf(t){return(typeof t=="string"?t:""+t).replace(TE,`
`).replace(PE,"")}function Io(t,e,n){if(e=yf(e),yf(t)!==e&&n)throw Error(k(425))}function la(){}var Qu=null,Yu=null;function Ju(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xu=typeof setTimeout=="function"?setTimeout:void 0,NE=typeof clearTimeout=="function"?clearTimeout:void 0,wf=typeof Promise=="function"?Promise:void 0,RE=typeof queueMicrotask=="function"?queueMicrotask:typeof wf<"u"?function(t){return wf.resolve(null).then(t).catch(xE)}:Xu;function xE(t){setTimeout(function(){throw t})}function Zl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),gs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);gs(e)}function Sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ef(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wi=Math.random().toString(36).slice(2),Pt="__reactFiber$"+wi,Es="__reactProps$"+wi,Qt="__reactContainer$"+wi,Zu="__reactEvents$"+wi,AE="__reactListeners$"+wi,OE="__reactHandles$"+wi;function ir(t){var e=t[Pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qt]||n[Pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ef(t);t!==null;){if(n=t[Pt])return n;t=Ef(t)}return e}t=n,n=t.parentNode}return null}function Ks(t){return t=t[Pt]||t[Qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function tl(t){return t[Es]||null}var ec=[],Fr=-1;function Bn(t){return{current:t}}function X(t){0>Fr||(t.current=ec[Fr],ec[Fr]=null,Fr--)}function Y(t,e){Fr++,ec[Fr]=t.current,t.current=e}var Dn={},Ae=Bn(Dn),Be=Bn(!1),dr=Dn;function ti(t,e){var n=t.type.contextTypes;if(!n)return Dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(t){return t=t.childContextTypes,t!=null}function ua(){X(Be),X(Ae)}function Cf(t,e,n){if(Ae.current!==Dn)throw Error(k(168));Y(Ae,e),Y(Be,n)}function bg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,g0(t)||"Unknown",i));return se({},n,r)}function ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,dr=Ae.current,Y(Ae,t),Y(Be,Be.current),!0}function Sf(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=bg(t,e,dr),r.__reactInternalMemoizedMergedChildContext=t,X(Be),X(Ae),Y(Ae,t)):X(Be),Y(Be,n)}var Mt=null,nl=!1,eu=!1;function Lg(t){Mt===null?Mt=[t]:Mt.push(t)}function bE(t){nl=!0,Lg(t)}function Vn(){if(!eu&&Mt!==null){eu=!0;var t=0,e=H;try{var n=Mt;for(H=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mt=null,nl=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(t+1)),sg(od,Vn),i}finally{H=e,eu=!1}}return null}var jr=[],Ur=0,da=null,ha=0,tt=[],nt=0,hr=null,Ut=1,zt="";function er(t,e){jr[Ur++]=ha,jr[Ur++]=da,da=t,ha=e}function Dg(t,e,n){tt[nt++]=Ut,tt[nt++]=zt,tt[nt++]=hr,hr=t;var r=Ut;t=zt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var s=32-_t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ut=1<<32-_t(e)+i|n<<i|r,zt=s+t}else Ut=1<<s|n<<i|r,zt=t}function md(t){t.return!==null&&(er(t,1),Dg(t,1,0))}function gd(t){for(;t===da;)da=jr[--Ur],jr[Ur]=null,ha=jr[--Ur],jr[Ur]=null;for(;t===hr;)hr=tt[--nt],tt[nt]=null,zt=tt[--nt],tt[nt]=null,Ut=tt[--nt],tt[nt]=null}var Ye=null,Qe=null,ee=!1,ht=null;function Mg(t,e){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function If(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ye=t,Qe=Sn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ye=t,Qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:Ut,overflow:zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ye=t,Qe=null,!0):!1;default:return!1}}function tc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nc(t){if(ee){var e=Qe;if(e){var n=e;if(!If(t,e)){if(tc(t))throw Error(k(418));e=Sn(n.nextSibling);var r=Ye;e&&If(t,e)?Mg(r,n):(t.flags=t.flags&-4097|2,ee=!1,Ye=t)}}else{if(tc(t))throw Error(k(418));t.flags=t.flags&-4097|2,ee=!1,Ye=t}}}function kf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ye=t}function ko(t){if(t!==Ye)return!1;if(!ee)return kf(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ju(t.type,t.memoizedProps)),e&&(e=Qe)){if(tc(t))throw Fg(),Error(k(418));for(;e;)Mg(t,e),e=Sn(e.nextSibling)}if(kf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qe=Sn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qe=null}}else Qe=Ye?Sn(t.stateNode.nextSibling):null;return!0}function Fg(){for(var t=Qe;t;)t=Sn(t.nextSibling)}function ni(){Qe=Ye=null,ee=!1}function _d(t){ht===null?ht=[t]:ht.push(t)}var LE=tn.ReactCurrentBatchConfig;function Di(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function To(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Tf(t){var e=t._init;return e(t._payload)}function jg(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Pn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,E){return f===null||f.tag!==6?(f=au(g,m.mode,E),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,E){var P=g.type;return P===Or?d(m,f,g.props.children,E,g.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===an&&Tf(P)===f.type)?(E=i(f,g.props),E.ref=Di(m,f,g),E.return=m,E):(E=qo(g.type,g.key,g.props,null,m.mode,E),E.ref=Di(m,f,g),E.return=m,E)}function u(m,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=lu(g,m.mode,E),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function d(m,f,g,E,P){return f===null||f.tag!==7?(f=ur(g,m.mode,E,P),f.return=m,f):(f=i(f,g),f.return=m,f)}function c(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=au(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mo:return g=qo(f.type,f.key,f.props,null,m.mode,g),g.ref=Di(m,null,f),g.return=m,g;case Ar:return f=lu(f,m.mode,g),f.return=m,f;case an:var E=f._init;return c(m,E(f._payload),g)}if(Vi(f)||xi(f))return f=ur(f,m.mode,g,null),f.return=m,f;To(m,f)}return null}function h(m,f,g,E){var P=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(m,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case mo:return g.key===P?l(m,f,g,E):null;case Ar:return g.key===P?u(m,f,g,E):null;case an:return P=g._init,h(m,f,P(g._payload),E)}if(Vi(g)||xi(g))return P!==null?null:d(m,f,g,E,null);To(m,g)}return null}function _(m,f,g,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,a(f,m,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case mo:return m=m.get(E.key===null?g:E.key)||null,l(f,m,E,P);case Ar:return m=m.get(E.key===null?g:E.key)||null,u(f,m,E,P);case an:var N=E._init;return _(m,f,g,N(E._payload),P)}if(Vi(E)||xi(E))return m=m.get(g)||null,d(f,m,E,P,null);To(f,E)}return null}function v(m,f,g,E){for(var P=null,N=null,C=f,S=f=0,A=null;C!==null&&S<g.length;S++){C.index>S?(A=C,C=null):A=C.sibling;var O=h(m,C,g[S],E);if(O===null){C===null&&(C=A);break}t&&C&&O.alternate===null&&e(m,C),f=s(O,f,S),N===null?P=O:N.sibling=O,N=O,C=A}if(S===g.length)return n(m,C),ee&&er(m,S),P;if(C===null){for(;S<g.length;S++)C=c(m,g[S],E),C!==null&&(f=s(C,f,S),N===null?P=C:N.sibling=C,N=C);return ee&&er(m,S),P}for(C=r(m,C);S<g.length;S++)A=_(C,m,S,g[S],E),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?S:A.key),f=s(A,f,S),N===null?P=A:N.sibling=A,N=A);return t&&C.forEach(function(K){return e(m,K)}),ee&&er(m,S),P}function y(m,f,g,E){var P=xi(g);if(typeof P!="function")throw Error(k(150));if(g=P.call(g),g==null)throw Error(k(151));for(var N=P=null,C=f,S=f=0,A=null,O=g.next();C!==null&&!O.done;S++,O=g.next()){C.index>S?(A=C,C=null):A=C.sibling;var K=h(m,C,O.value,E);if(K===null){C===null&&(C=A);break}t&&C&&K.alternate===null&&e(m,C),f=s(K,f,S),N===null?P=K:N.sibling=K,N=K,C=A}if(O.done)return n(m,C),ee&&er(m,S),P;if(C===null){for(;!O.done;S++,O=g.next())O=c(m,O.value,E),O!==null&&(f=s(O,f,S),N===null?P=O:N.sibling=O,N=O);return ee&&er(m,S),P}for(C=r(m,C);!O.done;S++,O=g.next())O=_(C,m,S,O.value,E),O!==null&&(t&&O.alternate!==null&&C.delete(O.key===null?S:O.key),f=s(O,f,S),N===null?P=O:N.sibling=O,N=O);return t&&C.forEach(function(W){return e(m,W)}),ee&&er(m,S),P}function I(m,f,g,E){if(typeof g=="object"&&g!==null&&g.type===Or&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case mo:e:{for(var P=g.key,N=f;N!==null;){if(N.key===P){if(P=g.type,P===Or){if(N.tag===7){n(m,N.sibling),f=i(N,g.props.children),f.return=m,m=f;break e}}else if(N.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===an&&Tf(P)===N.type){n(m,N.sibling),f=i(N,g.props),f.ref=Di(m,N,g),f.return=m,m=f;break e}n(m,N);break}else e(m,N);N=N.sibling}g.type===Or?(f=ur(g.props.children,m.mode,E,g.key),f.return=m,m=f):(E=qo(g.type,g.key,g.props,null,m.mode,E),E.ref=Di(m,f,g),E.return=m,m=E)}return o(m);case Ar:e:{for(N=g.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=lu(g,m.mode,E),f.return=m,m=f}return o(m);case an:return N=g._init,I(m,f,N(g._payload),E)}if(Vi(g))return v(m,f,g,E);if(xi(g))return y(m,f,g,E);To(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=au(g,m.mode,E),f.return=m,m=f),o(m)):n(m,f)}return I}var ri=jg(!0),Ug=jg(!1),fa=Bn(null),pa=null,zr=null,vd=null;function yd(){vd=zr=pa=null}function wd(t){var e=fa.current;X(fa),t._currentValue=e}function rc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qr(t,e){pa=t,vd=zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(We=!0),t.firstContext=null)}function ot(t){var e=t._currentValue;if(vd!==t)if(t={context:t,memoizedValue:e,next:null},zr===null){if(pa===null)throw Error(k(308));zr=t,pa.dependencies={lanes:0,firstContext:t}}else zr=zr.next=t;return e}var sr=null;function Ed(t){sr===null?sr=[t]:sr.push(t)}function zg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ed(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yt(t,r)}function Yt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ln=!1;function Cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ht(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function In(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yt(t,n)}return i=r.interleaved,i===null?(e.next=e,Ed(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yt(t,n)}function $o(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}function Pf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ma(t,e,n,r){var i=t.updateQueue;ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,_=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(_,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(_,c,h):v,h==null)break e;c=se({},c,h);break e;case 2:ln=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else _={eventTime:_,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=_,l=c):d=d.next=_,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);pr|=o,t.lanes=o,t.memoizedState=c}}function Nf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var qs={},Rt=Bn(qs),Cs=Bn(qs),Ss=Bn(qs);function or(t){if(t===qs)throw Error(k(174));return t}function Sd(t,e){switch(Y(Ss,e),Y(Cs,t),Y(Rt,qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fu(e,t)}X(Rt),Y(Rt,e)}function ii(){X(Rt),X(Cs),X(Ss)}function $g(t){or(Ss.current);var e=or(Rt.current),n=Fu(e,t.type);e!==n&&(Y(Cs,t),Y(Rt,n))}function Id(t){Cs.current===t&&(X(Rt),X(Cs))}var te=Bn(0);function ga(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tu=[];function kd(){for(var t=0;t<tu.length;t++)tu[t]._workInProgressVersionPrimary=null;tu.length=0}var Bo=tn.ReactCurrentDispatcher,nu=tn.ReactCurrentBatchConfig,fr=0,ie=null,fe=null,ye=null,_a=!1,es=!1,Is=0,DE=0;function Ne(){throw Error(k(321))}function Td(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Et(t[n],e[n]))return!1;return!0}function Pd(t,e,n,r,i,s){if(fr=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bo.current=t===null||t.memoizedState===null?UE:zE,t=n(r,i),es){s=0;do{if(es=!1,Is=0,25<=s)throw Error(k(301));s+=1,ye=fe=null,e.updateQueue=null,Bo.current=WE,t=n(r,i)}while(es)}if(Bo.current=va,e=fe!==null&&fe.next!==null,fr=0,ye=fe=ie=null,_a=!1,e)throw Error(k(300));return t}function Nd(){var t=Is!==0;return Is=0,t}function Tt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ie.memoizedState=ye=t:ye=ye.next=t,ye}function at(){if(fe===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=fe.next;var e=ye===null?ie.memoizedState:ye.next;if(e!==null)ye=e,fe=t;else{if(t===null)throw Error(k(310));fe=t,t={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ye===null?ie.memoizedState=ye=t:ye=ye.next=t}return ye}function ks(t,e){return typeof e=="function"?e(t):e}function ru(t){var e=at(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((fr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,ie.lanes|=d,pr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Et(r,e.memoizedState)||(We=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,pr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function iu(t){var e=at(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Et(s,e.memoizedState)||(We=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Bg(){}function Vg(t,e){var n=ie,r=at(),i=e(),s=!Et(r.memoizedState,i);if(s&&(r.memoizedState=i,We=!0),r=r.queue,Rd(Kg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Ts(9,Gg.bind(null,n,r,i,e),void 0,null),Ce===null)throw Error(k(349));fr&30||Hg(n,e,i)}return i}function Hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gg(t,e,n,r){e.value=n,e.getSnapshot=r,qg(e)&&Qg(t)}function Kg(t,e,n){return n(function(){qg(e)&&Qg(t)})}function qg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Et(t,n)}catch{return!0}}function Qg(t){var e=Yt(t,1);e!==null&&vt(e,t,1,-1)}function Rf(t){var e=Tt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},e.queue=t,t=t.dispatch=jE.bind(null,ie,t),[e.memoizedState,t]}function Ts(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Yg(){return at().memoizedState}function Vo(t,e,n,r){var i=Tt();ie.flags|=t,i.memoizedState=Ts(1|e,n,void 0,r===void 0?null:r)}function rl(t,e,n,r){var i=at();r=r===void 0?null:r;var s=void 0;if(fe!==null){var o=fe.memoizedState;if(s=o.destroy,r!==null&&Td(r,o.deps)){i.memoizedState=Ts(e,n,s,r);return}}ie.flags|=t,i.memoizedState=Ts(1|e,n,s,r)}function xf(t,e){return Vo(8390656,8,t,e)}function Rd(t,e){return rl(2048,8,t,e)}function Jg(t,e){return rl(4,2,t,e)}function Xg(t,e){return rl(4,4,t,e)}function Zg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function e_(t,e,n){return n=n!=null?n.concat([t]):null,rl(4,4,Zg.bind(null,e,t),n)}function xd(){}function t_(t,e){var n=at();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Td(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function n_(t,e){var n=at();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Td(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function r_(t,e,n){return fr&21?(Et(n,e)||(n=lg(),ie.lanes|=n,pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=n)}function ME(t,e){var n=H;H=n!==0&&4>n?n:4,t(!0);var r=nu.transition;nu.transition={};try{t(!1),e()}finally{H=n,nu.transition=r}}function i_(){return at().memoizedState}function FE(t,e,n){var r=Tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},s_(t))o_(e,n);else if(n=zg(t,e,n,r),n!==null){var i=Le();vt(n,t,r,i),a_(n,e,r)}}function jE(t,e,n){var r=Tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(s_(t))o_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Et(a,o)){var l=e.interleaved;l===null?(i.next=i,Ed(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=zg(t,e,i,r),n!==null&&(i=Le(),vt(n,t,r,i),a_(n,e,r))}}function s_(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function o_(t,e){es=_a=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function a_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}var va={readContext:ot,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},UE={readContext:ot,useCallback:function(t,e){return Tt().memoizedState=[t,e===void 0?null:e],t},useContext:ot,useEffect:xf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vo(4194308,4,Zg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vo(4,2,t,e)},useMemo:function(t,e){var n=Tt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=FE.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=Tt();return t={current:t},e.memoizedState=t},useState:Rf,useDebugValue:xd,useDeferredValue:function(t){return Tt().memoizedState=t},useTransition:function(){var t=Rf(!1),e=t[0];return t=ME.bind(null,t[1]),Tt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=Tt();if(ee){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Ce===null)throw Error(k(349));fr&30||Hg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,xf(Kg.bind(null,r,s,t),[t]),r.flags|=2048,Ts(9,Gg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tt(),e=Ce.identifierPrefix;if(ee){var n=zt,r=Ut;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Is++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zE={readContext:ot,useCallback:t_,useContext:ot,useEffect:Rd,useImperativeHandle:e_,useInsertionEffect:Jg,useLayoutEffect:Xg,useMemo:n_,useReducer:ru,useRef:Yg,useState:function(){return ru(ks)},useDebugValue:xd,useDeferredValue:function(t){var e=at();return r_(e,fe.memoizedState,t)},useTransition:function(){var t=ru(ks)[0],e=at().memoizedState;return[t,e]},useMutableSource:Bg,useSyncExternalStore:Vg,useId:i_,unstable_isNewReconciler:!1},WE={readContext:ot,useCallback:t_,useContext:ot,useEffect:Rd,useImperativeHandle:e_,useInsertionEffect:Jg,useLayoutEffect:Xg,useMemo:n_,useReducer:iu,useRef:Yg,useState:function(){return iu(ks)},useDebugValue:xd,useDeferredValue:function(t){var e=at();return fe===null?e.memoizedState=t:r_(e,fe.memoizedState,t)},useTransition:function(){var t=iu(ks)[0],e=at().memoizedState;return[t,e]},useMutableSource:Bg,useSyncExternalStore:Vg,useId:i_,unstable_isNewReconciler:!1};function ct(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ic(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var il={isMounted:function(t){return(t=t._reactInternals)?Sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Le(),i=Tn(t),s=Ht(r,i);s.payload=e,n!=null&&(s.callback=n),e=In(t,s,i),e!==null&&(vt(e,t,i,r),$o(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Le(),i=Tn(t),s=Ht(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=In(t,s,i),e!==null&&(vt(e,t,i,r),$o(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Le(),r=Tn(t),i=Ht(n,r);i.tag=2,e!=null&&(i.callback=e),e=In(t,i,r),e!==null&&(vt(e,t,r,n),$o(e,t,r))}};function Af(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vs(n,r)||!vs(i,s):!0}function l_(t,e,n){var r=!1,i=Dn,s=e.contextType;return typeof s=="object"&&s!==null?s=ot(s):(i=Ve(e)?dr:Ae.current,r=e.contextTypes,s=(r=r!=null)?ti(t,i):Dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=il,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Of(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&il.enqueueReplaceState(e,e.state,null)}function sc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Cd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ot(s):(s=Ve(e)?dr:Ae.current,i.context=ti(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ic(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&il.enqueueReplaceState(i,i.state,null),ma(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function si(t,e){try{var n="",r=e;do n+=m0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function oc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $E=typeof WeakMap=="function"?WeakMap:Map;function u_(t,e,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wa||(wa=!0,gc=r),oc(t,e)},n}function c_(t,e,n){n=Ht(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){oc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){oc(t,e),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $E;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=nC.bind(null,t,e,n),e.then(t,t))}function Lf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Df(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ht(-1,1),e.tag=2,In(n,e,1))),n.lanes|=1),t)}var BE=tn.ReactCurrentOwner,We=!1;function Oe(t,e,n,r){e.child=t===null?Ug(e,null,n,r):ri(e,t.child,n,r)}function Mf(t,e,n,r,i){n=n.render;var s=e.ref;return qr(e,i),r=Pd(t,e,n,r,s,i),n=Nd(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(ee&&n&&md(e),e.flags|=1,Oe(t,e,r,i),e.child)}function Ff(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,d_(t,e,s,r,i)):(t=qo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vs,n(o,r)&&t.ref===e.ref)return Jt(t,e,i)}return e.flags|=1,t=Pn(s,r),t.ref=e.ref,t.return=e,e.child=t}function d_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vs(s,r)&&t.ref===e.ref)if(We=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(We=!0);else return e.lanes=t.lanes,Jt(t,e,i)}return ac(t,e,n,r,i)}function h_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y($r,qe),qe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y($r,qe),qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y($r,qe),qe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y($r,qe),qe|=r;return Oe(t,e,i,n),e.child}function f_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ac(t,e,n,r,i){var s=Ve(n)?dr:Ae.current;return s=ti(e,s),qr(e,i),n=Pd(t,e,n,r,s,i),r=Nd(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jt(t,e,i)):(ee&&r&&md(e),e.flags|=1,Oe(t,e,n,i),e.child)}function jf(t,e,n,r,i){if(Ve(n)){var s=!0;ca(e)}else s=!1;if(qr(e,i),e.stateNode===null)Ho(t,e),l_(e,n,r),sc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=Ve(n)?dr:Ae.current,u=ti(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Of(e,o,r,u),ln=!1;var h=e.memoizedState;o.state=h,ma(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Be.current||ln?(typeof d=="function"&&(ic(e,n,d,r),l=e.memoizedState),(a=ln||Af(e,n,a,r,h,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Wg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ct(e.type,a),o.props=u,c=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ot(l):(l=Ve(n)?dr:Ae.current,l=ti(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||h!==l)&&Of(e,o,r,l),ln=!1,h=e.memoizedState,o.state=h,ma(e,r,o,i);var v=e.memoizedState;a!==c||h!==v||Be.current||ln?(typeof _=="function"&&(ic(e,n,_,r),v=e.memoizedState),(u=ln||Af(e,n,u,r,h,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return lc(t,e,n,r,s,i)}function lc(t,e,n,r,i,s){f_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sf(e,n,!1),Jt(t,e,s);r=e.stateNode,BE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ri(e,t.child,null,s),e.child=ri(e,null,a,s)):Oe(t,e,a,s),e.memoizedState=r.state,i&&Sf(e,n,!0),e.child}function p_(t){var e=t.stateNode;e.pendingContext?Cf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cf(t,e.context,!1),Sd(t,e.containerInfo)}function Uf(t,e,n,r,i){return ni(),_d(i),e.flags|=256,Oe(t,e,n,r),e.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function cc(t){return{baseLanes:t,cachePool:null,transitions:null}}function m_(t,e,n){var r=e.pendingProps,i=te.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(te,i&1),t===null)return nc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=al(o,r,0,null),t=ur(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cc(n),e.memoizedState=uc,t):Ad(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return VE(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Pn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Pn(a,s):(s=ur(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?cc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=uc,r}return s=t.child,t=s.sibling,r=Pn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ad(t,e){return e=al({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Po(t,e,n,r){return r!==null&&_d(r),ri(e,t.child,null,n),t=Ad(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=su(Error(k(422))),Po(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=al({mode:"visible",children:r.children},i,0,null),s=ur(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ri(e,t.child,null,o),e.child.memoizedState=cc(o),e.memoizedState=uc,s);if(!(e.mode&1))return Po(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=su(s,r,void 0),Po(t,e,o,r)}if(a=(o&t.childLanes)!==0,We||a){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yt(t,i),vt(r,t,i,-1))}return Fd(),r=su(Error(k(421))),Po(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=rC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qe=Sn(i.nextSibling),Ye=e,ee=!0,ht=null,t!==null&&(tt[nt++]=Ut,tt[nt++]=zt,tt[nt++]=hr,Ut=t.id,zt=t.overflow,hr=e),e=Ad(e,r.children),e.flags|=4096,e)}function zf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rc(t.return,e,n)}function ou(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function g_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Oe(t,e,r.children,n),r=te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zf(t,n,e);else if(t.tag===19)zf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ga(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ou(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ga(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ou(e,!0,n,null,s);break;case"together":ou(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Pn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function HE(t,e,n){switch(e.tag){case 3:p_(e),ni();break;case 5:$g(e);break;case 1:Ve(e.type)&&ca(e);break;case 4:Sd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(fa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(te,te.current&1),e.flags|=128,null):n&e.child.childLanes?m_(t,e,n):(Y(te,te.current&1),t=Jt(t,e,n),t!==null?t.sibling:null);Y(te,te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return g_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(te,te.current),r)break;return null;case 22:case 23:return e.lanes=0,h_(t,e,n)}return Jt(t,e,n)}var __,dc,v_,y_;__=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dc=function(){};v_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,or(Rt.current);var s=null;switch(n){case"input":i=bu(t,i),r=bu(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=Mu(t,i),r=Mu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=la)}ju(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ds.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ds.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};y_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Mi(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Re(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GE(t,e,n){var r=e.pendingProps;switch(gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(e),null;case 1:return Ve(e.type)&&ua(),Re(e),null;case 3:return r=e.stateNode,ii(),X(Be),X(Ae),kd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ko(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ht!==null&&(yc(ht),ht=null))),dc(t,e),Re(e),null;case 5:Id(e);var i=or(Ss.current);if(n=e.type,t!==null&&e.stateNode!=null)v_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Re(e),null}if(t=or(Rt.current),ko(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pt]=e,r[Es]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Gi.length;i++)J(Gi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":qh(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Yh(r,s),J("invalid",r)}ju(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Io(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Io(r.textContent,a,t),i=["children",""+a]):ds.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":go(r),Qh(r,s,!0);break;case"textarea":go(r),Jh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=la)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Km(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pt]=e,t[Es]=r,__(t,e,!1,!1),e.stateNode=t;e:{switch(o=Uu(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gi.length;i++)J(Gi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":qh(t,r),i=bu(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),J("invalid",t);break;case"textarea":Yh(t,r),i=Mu(t,r),J("invalid",t);break;default:i=r}ju(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ym(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&hs(t,l):typeof l=="number"&&hs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ds.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&td(t,s,l,o))}switch(n){case"input":go(t),Qh(t,r,!1);break;case"textarea":go(t),Jh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ln(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=la)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Re(e),null;case 6:if(t&&e.stateNode!=null)y_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=or(Ss.current),or(Rt.current),ko(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pt]=e,(s=r.nodeValue!==n)&&(t=Ye,t!==null))switch(t.tag){case 3:Io(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Io(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=e,e.stateNode=r}return Re(e),null;case 13:if(X(te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&Qe!==null&&e.mode&1&&!(e.flags&128))Fg(),ni(),e.flags|=98560,s=!1;else if(s=ko(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Pt]=e}else ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Re(e),s=!1}else ht!==null&&(yc(ht),ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||te.current&1?me===0&&(me=3):Fd())),e.updateQueue!==null&&(e.flags|=4),Re(e),null);case 4:return ii(),dc(t,e),t===null&&ys(e.stateNode.containerInfo),Re(e),null;case 10:return wd(e.type._context),Re(e),null;case 17:return Ve(e.type)&&ua(),Re(e),null;case 19:if(X(te),s=e.memoizedState,s===null)return Re(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Mi(s,!1);else{if(me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ga(t),o!==null){for(e.flags|=128,Mi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(te,te.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>oi&&(e.flags|=128,r=!0,Mi(s,!1),e.lanes=4194304)}else{if(!r)if(t=ga(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return Re(e),null}else 2*de()-s.renderingStartTime>oi&&n!==1073741824&&(e.flags|=128,r=!0,Mi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=te.current,Y(te,r?n&1|2:n&1),e):(Re(e),null);case 22:case 23:return Md(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qe&1073741824&&(Re(e),e.subtreeFlags&6&&(e.flags|=8192)):Re(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function KE(t,e){switch(gd(e),e.tag){case 1:return Ve(e.type)&&ua(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ii(),X(Be),X(Ae),kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Id(e),null;case 13:if(X(te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(te),null;case 4:return ii(),null;case 10:return wd(e.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var No=!1,xe=!1,qE=typeof WeakSet=="function"?WeakSet:Set,x=null;function Wr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function hc(t,e,n){try{n()}catch(r){le(t,e,r)}}var Wf=!1;function QE(t,e){if(Qu=sa,t=Ig(),pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var _;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(_=c.firstChild)!==null;)h=c,c=_;for(;;){if(c===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(_=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yu={focusedElem:t,selectionRange:n},sa=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,I=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:ct(e.type,y),I);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){le(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return v=Wf,Wf=!1,v}function ts(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&hc(e,n,s)}i=i.next}while(i!==r)}}function sl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w_(t){var e=t.alternate;e!==null&&(t.alternate=null,w_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pt],delete e[Es],delete e[Zu],delete e[AE],delete e[OE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E_(t){return t.tag===5||t.tag===3||t.tag===4}function $f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=la));else if(r!==4&&(t=t.child,t!==null))for(pc(t,e,n),t=t.sibling;t!==null;)pc(t,e,n),t=t.sibling}function mc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(mc(t,e,n),t=t.sibling;t!==null;)mc(t,e,n),t=t.sibling}var Ie=null,dt=!1;function sn(t,e,n){for(n=n.child;n!==null;)C_(t,e,n),n=n.sibling}function C_(t,e,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Ja,n)}catch{}switch(n.tag){case 5:xe||Wr(n,e);case 6:var r=Ie,i=dt;Ie=null,sn(t,e,n),Ie=r,dt=i,Ie!==null&&(dt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(dt?(t=Ie,n=n.stateNode,t.nodeType===8?Zl(t.parentNode,n):t.nodeType===1&&Zl(t,n),gs(t)):Zl(Ie,n.stateNode));break;case 4:r=Ie,i=dt,Ie=n.stateNode.containerInfo,dt=!0,sn(t,e,n),Ie=r,dt=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hc(n,e,o),i=i.next}while(i!==r)}sn(t,e,n);break;case 1:if(!xe&&(Wr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){le(n,e,a)}sn(t,e,n);break;case 21:sn(t,e,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,sn(t,e,n),xe=r):sn(t,e,n);break;default:sn(t,e,n)}}function Bf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qE),e.forEach(function(r){var i=iC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,dt=!1;break e;case 3:Ie=a.stateNode.containerInfo,dt=!0;break e;case 4:Ie=a.stateNode.containerInfo,dt=!0;break e}a=a.return}if(Ie===null)throw Error(k(160));C_(s,o,i),Ie=null,dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S_(e,t),e=e.sibling}function S_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ut(e,t),It(t),r&4){try{ts(3,t,t.return),sl(3,t)}catch(y){le(t,t.return,y)}try{ts(5,t,t.return)}catch(y){le(t,t.return,y)}}break;case 1:ut(e,t),It(t),r&512&&n!==null&&Wr(n,n.return);break;case 5:if(ut(e,t),It(t),r&512&&n!==null&&Wr(n,n.return),t.flags&32){var i=t.stateNode;try{hs(i,"")}catch(y){le(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hm(i,s),Uu(a,o);var u=Uu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?Ym(i,c):d==="dangerouslySetInnerHTML"?qm(i,c):d==="children"?hs(i,c):td(i,d,c,u)}switch(a){case"input":Lu(i,s);break;case"textarea":Gm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Vr(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?Vr(i,!!s.multiple,s.defaultValue,!0):Vr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Es]=s}catch(y){le(t,t.return,y)}}break;case 6:if(ut(e,t),It(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){le(t,t.return,y)}}break;case 3:if(ut(e,t),It(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gs(e.containerInfo)}catch(y){le(t,t.return,y)}break;case 4:ut(e,t),It(t);break;case 13:ut(e,t),It(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ld=de())),r&4&&Bf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(xe=(u=xe)||d,ut(e,t),xe=u):ut(e,t),It(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(x=t,d=t.child;d!==null;){for(c=x=d;x!==null;){switch(h=x,_=h.child,h.tag){case 0:case 11:case 14:case 15:ts(4,h,h.return);break;case 1:Wr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){le(r,n,y)}}break;case 5:Wr(h,h.return);break;case 22:if(h.memoizedState!==null){Hf(c);continue}}_!==null?(_.return=h,x=_):Hf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Qm("display",o))}catch(y){le(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){le(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ut(e,t),It(t),r&4&&Bf(t);break;case 21:break;default:ut(e,t),It(t)}}function It(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E_(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hs(i,""),r.flags&=-33);var s=$f(t);mc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$f(t);pc(t,a,o);break;default:throw Error(k(161))}}catch(l){le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YE(t,e,n){x=t,I_(t)}function I_(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||No;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||xe;a=No;var u=xe;if(No=o,(xe=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?Gf(i):l!==null?(l.return=o,x=l):Gf(i);for(;s!==null;)x=s,I_(s),s=s.sibling;x=i,No=a,xe=u}Vf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):Vf(t)}}function Vf(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xe||sl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ct(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&gs(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}xe||e.flags&512&&fc(e)}catch(h){le(e,e.return,h)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function Hf(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function Gf(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sl(4,e)}catch(l){le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){le(e,i,l)}}var s=e.return;try{fc(e)}catch(l){le(e,s,l)}break;case 5:var o=e.return;try{fc(e)}catch(l){le(e,o,l)}}}catch(l){le(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var JE=Math.ceil,ya=tn.ReactCurrentDispatcher,Od=tn.ReactCurrentOwner,st=tn.ReactCurrentBatchConfig,$=0,Ce=null,he=null,ke=0,qe=0,$r=Bn(0),me=0,Ps=null,pr=0,ol=0,bd=0,ns=null,ze=null,Ld=0,oi=1/0,Dt=null,wa=!1,gc=null,kn=null,Ro=!1,mn=null,Ea=0,rs=0,_c=null,Go=-1,Ko=0;function Le(){return $&6?de():Go!==-1?Go:Go=de()}function Tn(t){return t.mode&1?$&2&&ke!==0?ke&-ke:LE.transition!==null?(Ko===0&&(Ko=lg()),Ko):(t=H,t!==0||(t=window.event,t=t===void 0?16:mg(t.type)),t):1}function vt(t,e,n,r){if(50<rs)throw rs=0,_c=null,Error(k(185));Hs(t,n,r),(!($&2)||t!==Ce)&&(t===Ce&&(!($&2)&&(ol|=n),me===4&&cn(t,ke)),He(t,r),n===1&&$===0&&!(e.mode&1)&&(oi=de()+500,nl&&Vn()))}function He(t,e){var n=t.callbackNode;L0(t,e);var r=ia(t,t===Ce?ke:0);if(r===0)n!==null&&ef(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ef(n),e===1)t.tag===0?bE(Kf.bind(null,t)):Lg(Kf.bind(null,t)),RE(function(){!($&6)&&Vn()}),n=null;else{switch(ug(r)){case 1:n=od;break;case 4:n=og;break;case 16:n=ra;break;case 536870912:n=ag;break;default:n=ra}n=O_(n,k_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function k_(t,e){if(Go=-1,Ko=0,$&6)throw Error(k(327));var n=t.callbackNode;if(Qr()&&t.callbackNode!==n)return null;var r=ia(t,t===Ce?ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ca(t,r);else{e=r;var i=$;$|=2;var s=P_();(Ce!==t||ke!==e)&&(Dt=null,oi=de()+500,lr(t,e));do try{eC();break}catch(a){T_(t,a)}while(!0);yd(),ya.current=s,$=i,he!==null?e=0:(Ce=null,ke=0,e=me)}if(e!==0){if(e===2&&(i=Vu(t),i!==0&&(r=i,e=vc(t,i))),e===1)throw n=Ps,lr(t,0),cn(t,r),He(t,de()),n;if(e===6)cn(t,r);else{if(i=t.current.alternate,!(r&30)&&!XE(i)&&(e=Ca(t,r),e===2&&(s=Vu(t),s!==0&&(r=s,e=vc(t,s))),e===1))throw n=Ps,lr(t,0),cn(t,r),He(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:tr(t,ze,Dt);break;case 3:if(cn(t,r),(r&130023424)===r&&(e=Ld+500-de(),10<e)){if(ia(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Le(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xu(tr.bind(null,t,ze,Dt),e);break}tr(t,ze,Dt);break;case 4:if(cn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*JE(r/1960))-r,10<r){t.timeoutHandle=Xu(tr.bind(null,t,ze,Dt),r);break}tr(t,ze,Dt);break;case 5:tr(t,ze,Dt);break;default:throw Error(k(329))}}}return He(t,de()),t.callbackNode===n?k_.bind(null,t):null}function vc(t,e){var n=ns;return t.current.memoizedState.isDehydrated&&(lr(t,e).flags|=256),t=Ca(t,e),t!==2&&(e=ze,ze=n,e!==null&&yc(e)),t}function yc(t){ze===null?ze=t:ze.push.apply(ze,t)}function XE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Et(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~bd,e&=~ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_t(e),r=1<<n;t[n]=-1,e&=~r}}function Kf(t){if($&6)throw Error(k(327));Qr();var e=ia(t,0);if(!(e&1))return He(t,de()),null;var n=Ca(t,e);if(t.tag!==0&&n===2){var r=Vu(t);r!==0&&(e=r,n=vc(t,r))}if(n===1)throw n=Ps,lr(t,0),cn(t,e),He(t,de()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tr(t,ze,Dt),He(t,de()),null}function Dd(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(oi=de()+500,nl&&Vn())}}function mr(t){mn!==null&&mn.tag===0&&!($&6)&&Qr();var e=$;$|=1;var n=st.transition,r=H;try{if(st.transition=null,H=1,t)return t()}finally{H=r,st.transition=n,$=e,!($&6)&&Vn()}}function Md(){qe=$r.current,X($r)}function lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NE(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ua();break;case 3:ii(),X(Be),X(Ae),kd();break;case 5:Id(r);break;case 4:ii();break;case 13:X(te);break;case 19:X(te);break;case 10:wd(r.type._context);break;case 22:case 23:Md()}n=n.return}if(Ce=t,he=t=Pn(t.current,null),ke=qe=e,me=0,Ps=null,bd=ol=pr=0,ze=ns=null,sr!==null){for(e=0;e<sr.length;e++)if(n=sr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}sr=null}return t}function T_(t,e){do{var n=he;try{if(yd(),Bo.current=va,_a){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_a=!1}if(fr=0,ye=fe=ie=null,es=!1,Is=0,Od.current=null,n===null||n.return===null){me=1,Ps=e,he=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ke,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Lf(o);if(_!==null){_.flags&=-257,Df(_,o,a,s,e),_.mode&1&&bf(s,u,e),e=_,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){bf(s,u,e),Fd();break e}l=Error(k(426))}}else if(ee&&a.mode&1){var I=Lf(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Df(I,o,a,s,e),_d(si(l,a));break e}}s=l=si(l,a),me!==4&&(me=2),ns===null?ns=[s]:ns.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=u_(s,l,e);Pf(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(kn===null||!kn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=c_(s,a,e);Pf(s,E);break e}}s=s.return}while(s!==null)}R_(n)}catch(P){e=P,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function P_(){var t=ya.current;return ya.current=va,t===null?va:t}function Fd(){(me===0||me===3||me===2)&&(me=4),Ce===null||!(pr&268435455)&&!(ol&268435455)||cn(Ce,ke)}function Ca(t,e){var n=$;$|=2;var r=P_();(Ce!==t||ke!==e)&&(Dt=null,lr(t,e));do try{ZE();break}catch(i){T_(t,i)}while(!0);if(yd(),$=n,ya.current=r,he!==null)throw Error(k(261));return Ce=null,ke=0,me}function ZE(){for(;he!==null;)N_(he)}function eC(){for(;he!==null&&!k0();)N_(he)}function N_(t){var e=A_(t.alternate,t,qe);t.memoizedProps=t.pendingProps,e===null?R_(t):he=e,Od.current=null}function R_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=KE(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{me=6,he=null;return}}else if(n=GE(n,e,qe),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);me===0&&(me=5)}function tr(t,e,n){var r=H,i=st.transition;try{st.transition=null,H=1,tC(t,e,n,r)}finally{st.transition=i,H=r}return null}function tC(t,e,n,r){do Qr();while(mn!==null);if($&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(D0(t,s),t===Ce&&(he=Ce=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ro||(Ro=!0,O_(ra,function(){return Qr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=st.transition,st.transition=null;var o=H;H=1;var a=$;$|=4,Od.current=null,QE(t,n),S_(n,t),EE(Yu),sa=!!Qu,Yu=Qu=null,t.current=n,YE(n),T0(),$=a,H=o,st.transition=s}else t.current=n;if(Ro&&(Ro=!1,mn=t,Ea=i),s=t.pendingLanes,s===0&&(kn=null),R0(n.stateNode),He(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wa)throw wa=!1,t=gc,gc=null,t;return Ea&1&&t.tag!==0&&Qr(),s=t.pendingLanes,s&1?t===_c?rs++:(rs=0,_c=t):rs=0,Vn(),null}function Qr(){if(mn!==null){var t=ug(Ea),e=st.transition,n=H;try{if(st.transition=null,H=16>t?16:t,mn===null)var r=!1;else{if(t=mn,mn=null,Ea=0,$&6)throw Error(k(331));var i=$;for($|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var d=x;switch(d.tag){case 0:case 11:case 15:ts(8,d,s)}var c=d.child;if(c!==null)c.return=d,x=c;else for(;x!==null;){d=x;var h=d.sibling,_=d.return;if(w_(d),d===u){x=null;break}if(h!==null){h.return=_,x=h;break}x=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ts(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,x=m;break e}x=s.return}}var f=t.current;for(x=f;x!==null;){o=x;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,x=g;else e:for(o=f;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(P){le(a,a.return,P)}if(a===o){x=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,x=E;break e}x=a.return}}if($=i,Vn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Ja,t)}catch{}r=!0}return r}finally{H=n,st.transition=e}}return!1}function qf(t,e,n){e=si(n,e),e=u_(t,e,1),t=In(t,e,1),e=Le(),t!==null&&(Hs(t,1,e),He(t,e))}function le(t,e,n){if(t.tag===3)qf(t,t,n);else for(;e!==null;){if(e.tag===3){qf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){t=si(n,t),t=c_(e,t,1),e=In(e,t,1),t=Le(),e!==null&&(Hs(e,1,t),He(e,t));break}}e=e.return}}function nC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Le(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(ke&n)===n&&(me===4||me===3&&(ke&130023424)===ke&&500>de()-Ld?lr(t,0):bd|=n),He(t,e)}function x_(t,e){e===0&&(t.mode&1?(e=yo,yo<<=1,!(yo&130023424)&&(yo=4194304)):e=1);var n=Le();t=Yt(t,e),t!==null&&(Hs(t,e,n),He(t,n))}function rC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),x_(t,n)}function iC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),x_(t,n)}var A_;A_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)We=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return We=!1,HE(t,e,n);We=!!(t.flags&131072)}else We=!1,ee&&e.flags&1048576&&Dg(e,ha,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ho(t,e),t=e.pendingProps;var i=ti(e,Ae.current);qr(e,n),i=Pd(null,e,r,t,i,n);var s=Nd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ve(r)?(s=!0,ca(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cd(e),i.updater=il,e.stateNode=i,i._reactInternals=e,sc(e,r,t,n),e=lc(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&md(e),Oe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ho(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=oC(r),t=ct(r,t),i){case 0:e=ac(null,e,r,t,n);break e;case 1:e=jf(null,e,r,t,n);break e;case 11:e=Mf(null,e,r,t,n);break e;case 14:e=Ff(null,e,r,ct(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),ac(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),jf(t,e,r,i,n);case 3:e:{if(p_(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Wg(t,e),ma(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=si(Error(k(423)),e),e=Uf(t,e,r,n,i);break e}else if(r!==i){i=si(Error(k(424)),e),e=Uf(t,e,r,n,i);break e}else for(Qe=Sn(e.stateNode.containerInfo.firstChild),Ye=e,ee=!0,ht=null,n=Ug(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),r===i){e=Jt(t,e,n);break e}Oe(t,e,r,n)}e=e.child}return e;case 5:return $g(e),t===null&&nc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ju(r,i)?o=null:s!==null&&Ju(r,s)&&(e.flags|=32),f_(t,e),Oe(t,e,o,n),e.child;case 6:return t===null&&nc(e),null;case 13:return m_(t,e,n);case 4:return Sd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ri(e,null,r,n):Oe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Mf(t,e,r,i,n);case 7:return Oe(t,e,e.pendingProps,n),e.child;case 8:return Oe(t,e,e.pendingProps.children,n),e.child;case 12:return Oe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(fa,r._currentValue),r._currentValue=o,s!==null)if(Et(s.value,o)){if(s.children===i.children&&!Be.current){e=Jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ht(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Oe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qr(e,n),i=ot(i),r=r(i),e.flags|=1,Oe(t,e,r,n),e.child;case 14:return r=e.type,i=ct(r,e.pendingProps),i=ct(r.type,i),Ff(t,e,r,i,n);case 15:return d_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Ho(t,e),e.tag=1,Ve(r)?(t=!0,ca(e)):t=!1,qr(e,n),l_(e,r,i),sc(e,r,i,n),lc(null,e,r,!0,t,n);case 19:return g_(t,e,n);case 22:return h_(t,e,n)}throw Error(k(156,e.tag))};function O_(t,e){return sg(t,e)}function sC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(t,e,n,r){return new sC(t,e,n,r)}function jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oC(t){if(typeof t=="function")return jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rd)return 11;if(t===id)return 14}return 2}function Pn(t,e){var n=t.alternate;return n===null?(n=rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Or:return ur(n.children,i,s,e);case nd:o=8,i|=8;break;case Ru:return t=rt(12,n,e,i|2),t.elementType=Ru,t.lanes=s,t;case xu:return t=rt(13,n,e,i),t.elementType=xu,t.lanes=s,t;case Au:return t=rt(19,n,e,i),t.elementType=Au,t.lanes=s,t;case $m:return al(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zm:o=10;break e;case Wm:o=9;break e;case rd:o=11;break e;case id:o=14;break e;case an:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ur(t,e,n,r){return t=rt(7,t,r,e),t.lanes=n,t}function al(t,e,n,r){return t=rt(22,t,r,e),t.elementType=$m,t.lanes=n,t.stateNode={isHidden:!1},t}function au(t,e,n){return t=rt(6,t,null,e),t.lanes=n,t}function lu(t,e,n){return e=rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ud(t,e,n,r,i,s,o,a,l){return t=new aC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cd(s),t}function lC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ar,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function b_(t){if(!t)return Dn;t=t._reactInternals;e:{if(Sr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ve(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Ve(n))return bg(t,n,e)}return e}function L_(t,e,n,r,i,s,o,a,l){return t=Ud(n,r,!0,t,i,s,o,a,l),t.context=b_(null),n=t.current,r=Le(),i=Tn(n),s=Ht(r,i),s.callback=e??null,In(n,s,i),t.current.lanes=i,Hs(t,i,r),He(t,r),t}function ll(t,e,n,r){var i=e.current,s=Le(),o=Tn(i);return n=b_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ht(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=In(i,e,o),t!==null&&(vt(t,i,o,s),$o(t,i,o)),o}function Sa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zd(t,e){Qf(t,e),(t=t.alternate)&&Qf(t,e)}function uC(){return null}var D_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wd(t){this._internalRoot=t}ul.prototype.render=Wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));ll(t,e,null,null)};ul.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mr(function(){ll(null,t,null,null)}),e[Qt]=null}};function ul(t){this._internalRoot=t}ul.prototype.unstable_scheduleHydration=function(t){if(t){var e=hg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<un.length&&e!==0&&e<un[n].priority;n++);un.splice(n,0,t),n===0&&pg(t)}};function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yf(){}function cC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Sa(o);s.call(u)}}var o=L_(e,r,t,0,null,!1,!1,"",Yf);return t._reactRootContainer=o,t[Qt]=o.current,ys(t.nodeType===8?t.parentNode:t),mr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Sa(l);a.call(u)}}var l=Ud(t,0,!1,null,null,!1,!1,"",Yf);return t._reactRootContainer=l,t[Qt]=l.current,ys(t.nodeType===8?t.parentNode:t),mr(function(){ll(e,l,n,r)}),l}function dl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Sa(o);a.call(l)}}ll(e,o,t,i)}else o=cC(n,e,t,i,r);return Sa(o)}cg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Hi(e.pendingLanes);n!==0&&(ad(e,n|1),He(e,de()),!($&6)&&(oi=de()+500,Vn()))}break;case 13:mr(function(){var r=Yt(t,1);if(r!==null){var i=Le();vt(r,t,1,i)}}),zd(t,1)}};ld=function(t){if(t.tag===13){var e=Yt(t,134217728);if(e!==null){var n=Le();vt(e,t,134217728,n)}zd(t,134217728)}};dg=function(t){if(t.tag===13){var e=Tn(t),n=Yt(t,e);if(n!==null){var r=Le();vt(n,t,e,r)}zd(t,e)}};hg=function(){return H};fg=function(t,e){var n=H;try{return H=t,e()}finally{H=n}};Wu=function(t,e,n){switch(e){case"input":if(Lu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=tl(r);if(!i)throw Error(k(90));Vm(r),Lu(r,i)}}}break;case"textarea":Gm(t,n);break;case"select":e=n.value,e!=null&&Vr(t,!!n.multiple,e,!1)}};Zm=Dd;eg=mr;var dC={usingClientEntryPoint:!1,Events:[Ks,Mr,tl,Jm,Xm,Dd]},Fi={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hC={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rg(t),t===null?null:t.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||uC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Ja=xo.inject(hC),Nt=xo}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dC;Ze.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(e))throw Error(k(200));return lC(t,e,null,n)};Ze.createRoot=function(t,e){if(!$d(t))throw Error(k(299));var n=!1,r="",i=D_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ud(t,1,!1,null,null,n,!1,r,i),t[Qt]=e.current,ys(t.nodeType===8?t.parentNode:t),new Wd(e)};Ze.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=rg(e),t=t===null?null:t.stateNode,t};Ze.flushSync=function(t){return mr(t)};Ze.hydrate=function(t,e,n){if(!cl(e))throw Error(k(200));return dl(null,t,e,!0,n)};Ze.hydrateRoot=function(t,e,n){if(!$d(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=D_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=L_(e,null,t,1,n??null,i,!1,s,o),t[Qt]=e.current,ys(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ul(e)};Ze.render=function(t,e,n){if(!cl(e))throw Error(k(200));return dl(null,t,e,!1,n)};Ze.unmountComponentAtNode=function(t){if(!cl(t))throw Error(k(40));return t._reactRootContainer?(mr(function(){dl(null,null,t,!1,function(){t._reactRootContainer=null,t[Qt]=null})}),!0):!1};Ze.unstable_batchedUpdates=Dd;Ze.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return dl(t,e,n,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function M_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M_)}catch(t){console.error(t)}}M_(),Mm.exports=Ze;var fC=Mm.exports,Jf=fC;Pu.createRoot=Jf.createRoot,Pu.hydrateRoot=Jf.hydrateRoot;const pC="modulepreload",mC=function(t){return"/community/"+t},Xf={},Ct=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=mC(l),l in Xf)return;Xf[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":pC,u||(c.as="script"),c.crossOrigin="",c.href=l,a&&c.setAttribute("nonce",a),document.head.appendChild(c),u)return new Promise((h,_)=>{c.addEventListener("load",h),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ns(){return Ns=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ns.apply(null,arguments)}var gn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gn||(gn={}));const Zf="popstate";function gC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return wc("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ia(i)}return vC(e,n,null,t)}function ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function F_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _C(){return Math.random().toString(36).substr(2,8)}function ep(t,e){return{usr:t.state,key:t.key,idx:e}}function wc(t,e,n,r){return n===void 0&&(n=null),Ns({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ei(e):e,{state:n,key:e&&e.key||r||_C()})}function Ia(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ei(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function vC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=gn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Ns({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=gn.Pop;let I=d(),m=I==null?null:I-u;u=I,l&&l({action:a,location:y.location,delta:m})}function h(I,m){a=gn.Push;let f=wc(y.location,I,m);u=d()+1;let g=ep(f,u),E=y.createHref(f);try{o.pushState(g,"",E)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function _(I,m){a=gn.Replace;let f=wc(y.location,I,m);u=d();let g=ep(f,u),E=y.createHref(f);o.replaceState(g,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function v(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof I=="string"?I:Ia(I);return f=f.replace(/ $/,"%20"),ue(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Zf,c),l=I,()=>{i.removeEventListener(Zf,c),l=null}},createHref(I){return e(i,I)},createURL:v,encodeLocation(I){let m=v(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:_,go(I){return o.go(I)}};return y}var tp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(tp||(tp={}));function yC(t,e,n){return n===void 0&&(n="/"),wC(t,e,n)}function wC(t,e,n,r){let i=typeof e=="string"?Ei(e):e,s=ai(i.pathname||"/",n);if(s==null)return null;let o=j_(t);EC(o);let a=null,l=OC(s);for(let u=0;a==null&&u<o.length;++u)a=xC(o[u],l);return a}function j_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Nn([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),j_(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:NC(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of U_(s.path))i(s,o,l)}),e}function U_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=U_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function EC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:RC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const CC=/^:[\w-]+$/,SC=3,IC=2,kC=1,TC=10,PC=-2,np=t=>t==="*";function NC(t,e){let n=t.split("/"),r=n.length;return n.some(np)&&(r+=PC),e&&(r+=IC),n.filter(i=>!np(i)).reduce((i,s)=>i+(CC.test(s)?SC:s===""?kC:TC),r)}function RC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function xC(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=Ec({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:Nn([s,c.pathname]),pathnameBase:DC(Nn([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=Nn([s,c.pathnameBase]))}return o}function Ec(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=AC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:_}=d;if(h==="*"){let y=a[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[c];return _&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function AC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),F_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function OC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return F_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ai(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function bC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ei(t):t,s;return n?(n=$_(n),n.startsWith("/")?s=rp(n.substring(1),"/"):s=rp(n,e)):s=e,{pathname:s,search:MC(r),hash:FC(i)}}function rp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function z_(t,e){let n=LC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function W_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ei(t):(i=Ns({},t),ue(!i.pathname||!i.pathname.includes("?"),uu("?","pathname","search",i)),ue(!i.pathname||!i.pathname.includes("#"),uu("#","pathname","hash",i)),ue(!i.search||!i.search.includes("#"),uu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?e[c]:"/"}let l=bC(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const $_=t=>t.replace(/\/\/+/g,"/"),Nn=t=>$_(t.join("/")),DC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),MC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,FC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const B_=["post","put","patch","delete"];new Set(B_);const UC=["get",...B_];new Set(UC);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rs(){return Rs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rs.apply(null,arguments)}const hl=w.createContext(null),V_=w.createContext(null),Hn=w.createContext(null),fl=w.createContext(null),nn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),H_=w.createContext(null);function zC(t,e){let{relative:n}=e===void 0?{}:e;Qs()||ue(!1);let{basename:r,navigator:i}=w.useContext(Hn),{hash:s,pathname:o,search:a}=pl(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Nn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Qs(){return w.useContext(fl)!=null}function At(){return Qs()||ue(!1),w.useContext(fl).location}function G_(t){w.useContext(Hn).static||w.useLayoutEffect(t)}function Ys(){let{isDataRoute:t}=w.useContext(nn);return t?tS():WC()}function WC(){Qs()||ue(!1);let t=w.useContext(hl),{basename:e,future:n,navigator:r}=w.useContext(Hn),{matches:i}=w.useContext(nn),{pathname:s}=At(),o=JSON.stringify(z_(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return G_(()=>{a.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=W_(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Nn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const $C=w.createContext(null);function BC(t){let e=w.useContext(nn).outlet;return e&&w.createElement($C.Provider,{value:t},e)}function Kx(){let{matches:t}=w.useContext(nn),e=t[t.length-1];return e?e.params:{}}function pl(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=w.useContext(Hn),{matches:i}=w.useContext(nn),{pathname:s}=At(),o=JSON.stringify(z_(i,r.v7_relativeSplatPath));return w.useMemo(()=>W_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function VC(t,e){return HC(t,e)}function HC(t,e,n,r){Qs()||ue(!1);let{navigator:i}=w.useContext(Hn),{matches:s}=w.useContext(nn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=At(),d;if(e){var c;let I=typeof e=="string"?Ei(e):e;l==="/"||(c=I.pathname)!=null&&c.startsWith(l)||ue(!1),d=I}else d=u;let h=d.pathname||"/",_=h;if(l!=="/"){let I=l.replace(/^\//,"").split("/");_="/"+h.replace(/^\//,"").split("/").slice(I.length).join("/")}let v=yC(t,{pathname:_}),y=YC(v&&v.map(I=>Object.assign({},I,{params:Object.assign({},a,I.params),pathname:Nn([l,i.encodeLocation?i.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?l:Nn([l,i.encodeLocation?i.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),s,n,r);return e&&y?w.createElement(fl.Provider,{value:{location:Rs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:gn.Pop}},y):y}function GC(){let t=eS(),e=jC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,null)}const KC=w.createElement(GC,null);class qC extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(nn.Provider,{value:this.props.routeContext},w.createElement(H_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QC(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(hl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(nn.Provider,{value:e},r)}function YC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||ue(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:_}=n,v=c.route.loader&&h[c.route.id]===void 0&&(!_||_[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let _,v=!1,y=null,I=null;n&&(_=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||KC,l&&(u<0&&h===0?(nS("route-fallback"),v=!0,I=null):u===h&&(v=!0,I=c.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,h+1)),f=()=>{let g;return _?g=y:v?g=I:c.route.Component?g=w.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=d,w.createElement(QC,{match:c,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?w.createElement(qC,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var K_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(K_||{}),q_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(q_||{});function JC(t){let e=w.useContext(hl);return e||ue(!1),e}function XC(t){let e=w.useContext(V_);return e||ue(!1),e}function ZC(t){let e=w.useContext(nn);return e||ue(!1),e}function Q_(t){let e=ZC(),n=e.matches[e.matches.length-1];return n.route.id||ue(!1),n.route.id}function eS(){var t;let e=w.useContext(H_),n=XC(),r=Q_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function tS(){let{router:t}=JC(K_.UseNavigateStable),e=Q_(q_.UseNavigateStable),n=w.useRef(!1);return G_(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Rs({fromRouteId:e},s)))},[t,e])}const ip={};function nS(t,e,n){ip[t]||(ip[t]=!0)}function rS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Y_(t){return BC(t.context)}function _e(t){ue(!1)}function iS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=gn.Pop,navigator:s,static:o=!1,future:a}=t;Qs()&&ue(!1);let l=e.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:s,static:o,future:Rs({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ei(r));let{pathname:d="/",search:c="",hash:h="",state:_=null,key:v="default"}=r,y=w.useMemo(()=>{let I=ai(d,l);return I==null?null:{location:{pathname:I,search:c,hash:h,state:_,key:v},navigationType:i}},[l,d,c,h,_,v,i]);return y==null?null:w.createElement(Hn.Provider,{value:u},w.createElement(fl.Provider,{children:n,value:y}))}function sS(t){let{children:e,location:n}=t;return VC(Cc(e),n)}new Promise(()=>{});function Cc(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,Cc(r.props.children,s));return}r.type!==_e&&ue(!1),!r.props.index||!r.props.children||ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Cc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ka.apply(null,arguments)}function J_(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function oS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function aS(t,e){return t.button===0&&(!e||e==="_self")&&!oS(t)}function Sc(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function lS(t,e){let n=Sc(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const uS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],dS="6";try{window.__reactRouterVersion=dS}catch{}const hS=w.createContext({isTransitioning:!1}),fS="startTransition",sp=n0[fS];function pS(t){let{basename:e,children:n,future:r,window:i}=t,s=w.useRef();s.current==null&&(s.current=gC({window:i,v5Compat:!0}));let o=s.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=w.useCallback(c=>{u&&sp?sp(()=>l(c)):l(c)},[l,u]);return w.useLayoutEffect(()=>o.listen(d),[o,d]),w.useEffect(()=>rS(r),[r]),w.createElement(iS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const mS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xs=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,viewTransition:c}=e,h=J_(e,uS),{basename:_}=w.useContext(Hn),v,y=!1;if(typeof u=="string"&&gS.test(u)&&(v=u,mS))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),P=ai(E.pathname,_);E.origin===g.origin&&P!=null?u=P+E.search+E.hash:y=!0}catch{}let I=zC(u,{relative:i}),m=vS(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:c});function f(g){r&&r(g),g.defaultPrevented||m(g)}return w.createElement("a",ka({},h,{href:v||I,onClick:y||s?r:f,ref:n,target:l}))}),Ft=w.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:u,children:d}=e,c=J_(e,cS),h=pl(l,{relative:c.relative}),_=At(),v=w.useContext(V_),{navigator:y,basename:I}=w.useContext(Hn),m=v!=null&&yS(h)&&u===!0,f=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,g=_.pathname,E=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(g=g.toLowerCase(),E=E?E.toLowerCase():null,f=f.toLowerCase()),E&&I&&(E=ai(E,I)||E);const P=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let N=g===f||!o&&g.startsWith(f)&&g.charAt(P)==="/",C=E!=null&&(E===f||!o&&E.startsWith(f)&&E.charAt(f.length)==="/"),S={isActive:N,isPending:C,isTransitioning:m},A=N?r:void 0,O;typeof s=="function"?O=s(S):O=[s,N?"active":null,C?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let K=typeof a=="function"?a(S):a;return w.createElement(xs,ka({},c,{"aria-current":A,className:O,ref:n,style:K,to:l,viewTransition:u}),typeof d=="function"?d(S):d)});var Ic;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ic||(Ic={}));var op;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(op||(op={}));function _S(t){let e=w.useContext(hl);return e||ue(!1),e}function vS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Ys(),u=At(),d=pl(t,{relative:o});return w.useCallback(c=>{if(aS(c,n)){c.preventDefault();let h=r!==void 0?r:Ia(u)===Ia(d);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}function qx(t){let e=w.useRef(Sc(t)),n=w.useRef(!1),r=At(),i=w.useMemo(()=>lS(r.search,n.current?null:e.current),[r.search]),s=Ys(),o=w.useCallback((a,l)=>{const u=Sc(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,l)},[s,i]);return[i,o]}function yS(t,e){e===void 0&&(e={});let n=w.useContext(hS);n==null&&ue(!1);let{basename:r}=_S(Ic.useViewTransitionState),i=pl(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=ai(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ai(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ec(i.pathname,o)!=null||Ec(i.pathname,s)!=null}var ap={};/**
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
 */const X_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw Ci(e)},Ci=function(t){return new Error("Firebase Database ("+X_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Z_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(h=64)),r.push(n[d],n[c],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Z_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new ES;const h=s<<2|a>>4;if(r.push(h),u!==64){const _=a<<4&240|u>>2;if(r.push(_),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ES extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ev=function(t){const e=Z_(t);return Bd.encodeByteArray(e,!0)},Ta=function(t){return ev(t).replace(/\./g,"")},Pa=function(t){try{return Bd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function CS(t){return tv(void 0,t)}function tv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!SS(n)||(t[n]=tv(t[n],e[n]));return t}function SS(t){return t!=="__proto__"}/**
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
 */function IS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kS=()=>IS().__FIREBASE_DEFAULTS__,TS=()=>{if(typeof process>"u"||typeof ap>"u")return;const t=ap.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pa(t[1]);return e&&JSON.parse(e)},Vd=()=>{try{return kS()||TS()||PS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nv=t=>{var e,n;return(n=(e=Vd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NS=t=>{const e=nv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rv=()=>{var t;return(t=Vd())===null||t===void 0?void 0:t.config},iv=t=>{var e;return(e=Vd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function RS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),""].join(".")}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function xS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function AS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OS(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bS(){return X_.NODE_ADMIN===!0}function LS(){try{return typeof indexedDB=="object"}catch{return!1}}function DS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const MS="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MS,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?FS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gn(i,a,r)}}function FS(t,e){return t.replace(jS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jS=/\{\$([^}]+)}/g;/**
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
 */function As(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
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
 */const ov=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=As(Pa(s[0])||""),n=As(Pa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},US=function(t){const e=ov(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zS=function(t){const e=ov(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function St(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function gr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Na(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ra(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function xa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(lp(s)&&lp(o)){if(!xa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function lp(t){return t!==null&&typeof t=="object"}/**
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
 */function Si(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ki(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class WS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function $S(t,e){const n=new BS(t,e);return n.subscribe.bind(n)}class BS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=cu),i.error===void 0&&(i.error=cu),i.complete===void 0&&(i.complete=cu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cu(){}function li(t,e){return`${t} failed: ${e} argument `}/**
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
 */const HS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ml=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function oe(t){return t&&t._delegate?t._delegate:t}class _r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class GS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ft;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qS(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KS(t){return t===nr?void 0:t}function qS(t){return t.instantiationMode==="EAGER"}/**
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
 */class QS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const YS={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},JS=G.INFO,XS={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},ZS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=XS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gd{constructor(e){this.name=e,this._logLevel=JS,this._logHandler=ZS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const eI=(t,e)=>e.some(n=>t instanceof n);let up,cp;function tI(){return up||(up=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nI(){return cp||(cp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const av=new WeakMap,kc=new WeakMap,lv=new WeakMap,du=new WeakMap,Kd=new WeakMap;function rI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&av.set(n,t)}).catch(()=>{}),Kd.set(e,t),e}function iI(t){if(kc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kc.set(t,e)}let Tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sI(t){Tc=t(Tc)}function oI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hu(this),e,...n);return lv.set(r,e.sort?e.sort():[e]),Rn(r)}:nI().includes(t)?function(...e){return t.apply(hu(this),e),Rn(av.get(this))}:function(...e){return Rn(t.apply(hu(this),e))}}function aI(t){return typeof t=="function"?oI(t):(t instanceof IDBTransaction&&iI(t),eI(t,tI())?new Proxy(t,Tc):t)}function Rn(t){if(t instanceof IDBRequest)return rI(t);if(du.has(t))return du.get(t);const e=aI(t);return e!==t&&(du.set(t,e),Kd.set(e,t)),e}const hu=t=>Kd.get(t);function lI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rn(o.result),l.oldVersion,l.newVersion,Rn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const uI=["get","getKey","getAll","getAllKeys","count"],cI=["put","add","delete","clear"],fu=new Map;function dp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fu.get(e))return fu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return fu.set(e,s),s}sI(t=>({...t,get:(e,n,r)=>dp(e,n)||t.get(e,n,r),has:(e,n)=>!!dp(e,n)||t.has(e,n)}));/**
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
 */class dI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pc="@firebase/app",hp="0.10.13";/**
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
 */const Xt=new Gd("@firebase/app"),fI="@firebase/app-compat",pI="@firebase/analytics-compat",mI="@firebase/analytics",gI="@firebase/app-check-compat",_I="@firebase/app-check",vI="@firebase/auth",yI="@firebase/auth-compat",wI="@firebase/database",EI="@firebase/data-connect",CI="@firebase/database-compat",SI="@firebase/functions",II="@firebase/functions-compat",kI="@firebase/installations",TI="@firebase/installations-compat",PI="@firebase/messaging",NI="@firebase/messaging-compat",RI="@firebase/performance",xI="@firebase/performance-compat",AI="@firebase/remote-config",OI="@firebase/remote-config-compat",bI="@firebase/storage",LI="@firebase/storage-compat",DI="@firebase/firestore",MI="@firebase/vertexai-preview",FI="@firebase/firestore-compat",jI="firebase",UI="10.14.1";/**
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
 */const Nc="[DEFAULT]",zI={[Pc]:"fire-core",[fI]:"fire-core-compat",[mI]:"fire-analytics",[pI]:"fire-analytics-compat",[_I]:"fire-app-check",[gI]:"fire-app-check-compat",[vI]:"fire-auth",[yI]:"fire-auth-compat",[wI]:"fire-rtdb",[EI]:"fire-data-connect",[CI]:"fire-rtdb-compat",[SI]:"fire-fn",[II]:"fire-fn-compat",[kI]:"fire-iid",[TI]:"fire-iid-compat",[PI]:"fire-fcm",[NI]:"fire-fcm-compat",[RI]:"fire-perf",[xI]:"fire-perf-compat",[AI]:"fire-rc",[OI]:"fire-rc-compat",[bI]:"fire-gcs",[LI]:"fire-gcs-compat",[DI]:"fire-fst",[FI]:"fire-fst-compat",[MI]:"fire-vertex","fire-js":"fire-js",[jI]:"fire-js-all"};/**
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
 */const Aa=new Map,WI=new Map,Rc=new Map;function fp(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if(Rc.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of Aa.values())fp(n,t);for(const n of WI.values())fp(n,t);return!0}function qd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t.settings!==void 0}/**
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
 */const $I={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xn=new Js("app","Firebase",$I);/**
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
 */class BI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ii=UI;function uv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xn.create("bad-app-name",{appName:String(i)});if(n||(n=rv()),!n)throw xn.create("no-options");const s=Aa.get(i);if(s){if(xa(n,s.options)&&xa(r,s.config))return s;throw xn.create("duplicate-app",{appName:i})}const o=new QS(i);for(const l of Rc.values())o.addComponent(l);const a=new BI(n,r,o);return Aa.set(i,a),a}function cv(t=Nc){const e=Aa.get(t);if(!e&&t===Nc&&rv())return uv();if(!e)throw xn.create("no-app",{appName:t});return e}function An(t,e,n){var r;let i=(r=zI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}ui(new _r(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const VI="firebase-heartbeat-database",HI=1,Os="firebase-heartbeat-store";let pu=null;function dv(){return pu||(pu=lI(VI,HI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Os)}catch(n){console.warn(n)}}}}).catch(t=>{throw xn.create("idb-open",{originalErrorMessage:t.message})})),pu}async function GI(t){try{const n=(await dv()).transaction(Os),r=await n.objectStore(Os).get(hv(t));return await n.done,r}catch(e){if(e instanceof Gn)Xt.warn(e.message);else{const n=xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function pp(t,e){try{const r=(await dv()).transaction(Os,"readwrite");await r.objectStore(Os).put(e,hv(t)),await r.done}catch(n){if(n instanceof Gn)Xt.warn(n.message);else{const r=xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(r.message)}}}function hv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KI=1024,qI=30*24*60*60*1e3;class QI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=qI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Xt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mp(),{heartbeatsToSend:r,unsentEntries:i}=YI(this._heartbeatsCache.heartbeats),s=Ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Xt.warn(n),""}}}function mp(){return new Date().toISOString().substring(0,10)}function YI(t,e=KI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LS()?DS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gp(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XI(t){ui(new _r("platform-logger",e=>new dI(e),"PRIVATE")),ui(new _r("heartbeat",e=>new QI(e),"PRIVATE")),An(Pc,hp,t),An(Pc,hp,"esm2017"),An("fire-js","")}XI("");function Qd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Qx(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(d){try{u(r.next(d))}catch(c){o(c)}}function l(d){try{u(r.throw(d))}catch(c){o(c)}}function u(d){d.done?s(d.value):i(d.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function fv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZI=fv,pv=new Js("auth","Firebase",fv());/**
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
 */const Oa=new Gd("@firebase/auth");function ek(t,...e){Oa.logLevel<=G.WARN&&Oa.warn(`Auth (${Ii}): ${t}`,...e)}function Qo(t,...e){Oa.logLevel<=G.ERROR&&Oa.error(`Auth (${Ii}): ${t}`,...e)}/**
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
 */function lt(t,...e){throw Xd(t,...e)}function yt(t,...e){return Xd(t,...e)}function Yd(t,e,n){const r=Object.assign(Object.assign({},ZI()),{[e]:n});return new Js("auth","Firebase",r).create(e,{appName:t.name})}function Gt(t){return Yd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jd(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&lt(t,"argument-error"),Yd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pv.create(t,...e)}function L(t,e,...n){if(!t)throw Xd(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qo(e),new Error(e)}function Zt(t,e){t||Wt(e)}/**
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
 */function xc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tk(){return _p()==="http:"||_p()==="https:"}function _p(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tk()||AS()||"connection"in navigator)?navigator.onLine:!0}function rk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=Hd()||sv()}get(){return nk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zd(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ik={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sk=new Xs(3e4,6e4);function Kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ot(t,e,n,r,i={}){return gv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Si(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},s);return xS()||(u.referrerPolicy="no-referrer"),mv.fetch()(_v(t,t.config.apiHost,n,a),u)})}async function gv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ik),e);try{const i=new ak(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ao(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ao(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ao(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ao(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yd(t,d,u);lt(t,d)}}catch(i){if(i instanceof Gn)throw i;lt(t,"network-request-failed",{message:String(i)})}}async function gl(t,e,n,r,i={}){const s=await Ot(t,e,n,r,i);return"mfaPendingCredential"in s&&lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _v(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zd(t.config,i):`${t.config.apiScheme}://${i}`}function ok(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ak{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),sk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ao(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(t,e,r);return i.customData._tokenResponse=n,i}function vp(t){return t!==void 0&&t.enterprise!==void 0}class lk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ok(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function uk(t,e){return Ot(t,"GET","/v2/recaptchaConfig",Kn(t,e))}/**
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
 */async function ck(t,e){return Ot(t,"POST","/v1/accounts:delete",e)}async function vv(t,e){return Ot(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function is(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dk(t,e=!1){const n=oe(t),r=await n.getIdToken(e),i=eh(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:is(mu(i.auth_time)),issuedAtTime:is(mu(i.iat)),expirationTime:is(mu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mu(t){return Number(t)*1e3}function eh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pa(n);return i?JSON.parse(i):(Qo("Failed to decode base64 JWT payload"),null)}catch(i){return Qo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yp(t){const e=eh(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&hk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ac{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=is(this.lastLoginAt),this.creationTime=is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bs(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ci(t,vv(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?yv(s.providerUserInfo):[],a=mk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ac(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function pk(t){const e=oe(t);await bs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yv(t){return t.map(e=>{var{providerId:n}=e,r=Qd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function gk(t,e){const n=await gv(t,{},async()=>{const r=Si({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=_v(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _k(t,e){return Ot(t,"POST","/v2/accounts:revokeToken",Kn(t,e))}/**
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
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=yp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Yr;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function on(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ac(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ci(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dk(this,e)}reload(){return pk(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Gt(this.auth));const e=await this.getIdToken();return await ci(this,ck(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:E,isAnonymous:P,providerData:N,stsTokenManager:C}=n;L(g&&C,e,"internal-error");const S=Yr.fromJSON(this.name,C);L(typeof g=="string",e,"internal-error"),on(c,e.name),on(h,e.name),L(typeof E=="boolean",e,"internal-error"),L(typeof P=="boolean",e,"internal-error"),on(_,e.name),on(v,e.name),on(y,e.name),on(I,e.name),on(m,e.name),on(f,e.name);const A=new $t({uid:g,auth:e,email:h,emailVerified:E,displayName:c,isAnonymous:P,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:S,createdAt:m,lastLoginAt:f});return N&&Array.isArray(N)&&(A.providerData=N.map(O=>Object.assign({},O))),I&&(A._redirectEventId=I),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Yr;i.updateFromServerResponse(n);const s=new $t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bs(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Yr;a.updateFromIdToken(r);const l=new $t({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ac(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const wp=new Map;function Bt(t){Zt(t instanceof Function,"Expected a class definition");let e=wp.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wp.set(t,e),e)}/**
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
 */class wv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wv.type="NONE";const Ep=wv;/**
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
 */function Yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jr(Bt(Ep),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Bt(Ep);const o=Yo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=$t._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Jr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Jr(s,e,r))}}/**
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
 */function Cp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ev(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tv(e))return"Blackberry";if(Pv(e))return"Webos";if(Cv(e))return"Safari";if((e.includes("chrome/")||Sv(e))&&!e.includes("edge/"))return"Chrome";if(kv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ev(t=Me()){return/firefox\//i.test(t)}function Cv(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sv(t=Me()){return/crios\//i.test(t)}function Iv(t=Me()){return/iemobile/i.test(t)}function kv(t=Me()){return/android/i.test(t)}function Tv(t=Me()){return/blackberry/i.test(t)}function Pv(t=Me()){return/webos/i.test(t)}function th(t=Me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vk(t=Me()){var e;return th(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yk(){return OS()&&document.documentMode===10}function Nv(t=Me()){return th(t)||kv(t)||Pv(t)||Tv(t)||/windows phone/i.test(t)||Iv(t)}/**
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
 */function Rv(t,e=[]){let n;switch(t){case"Browser":n=Cp(Me());break;case"Worker":n=`${Cp(Me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${r}`}/**
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
 */class wk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ek(t,e={}){return Ot(t,"GET","/v2/passwordPolicy",Kn(t,e))}/**
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
 */const Ck=6;class Sk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ck,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ik{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sp(this),this.idTokenSubscription=new Sp(this),this.beforeStateQueue=new wk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vv(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(Gt(this));const n=e?oe(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ek(this),n=new Sk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _k(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ek(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bt(t){return oe(t)}class Sp{constructor(e){this.auth=e,this.observer=null,this.addObserver=$S(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _l={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kk(t){_l=t}function xv(t){return _l.loadJS(t)}function Tk(){return _l.recaptchaEnterpriseScript}function Pk(){return _l.gapiScript}function Nk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Rk="recaptcha-enterprise",xk="NO_RECAPTCHA";class Ak{constructor(e){this.type=Rk,this.auth=bt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{uk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new lk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;vp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(xk)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&vp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Tk();l.length!==0&&(l+=a),xv(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ip(t,e,n,r=!1){const i=new Ak(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Oc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ip(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ip(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function Ok(t,e){const n=qd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xa(s,e??{}))return i;lt(i,"already-initialized")}return n.initialize({options:e})}function bk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Lk(t,e,n){const r=bt(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Av(e),{host:o,port:a}=Dk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Mk()}function Av(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Dk(t){const e=Av(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kp(o)}}}function kp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Mk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class nh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function Fk(t,e){return Ot(t,"POST","/v1/accounts:update",e)}async function jk(t,e){return Ot(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Uk(t,e){return gl(t,"POST","/v1/accounts:signInWithPassword",Kn(t,e))}async function zk(t,e){return Ot(t,"POST","/v1/accounts:sendOobCode",Kn(t,e))}async function Wk(t,e){return zk(t,e)}/**
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
 */async function $k(t,e){return gl(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}async function Bk(t,e){return gl(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}/**
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
 */class Ls extends nh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ls(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ls(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oc(e,n,"signInWithPassword",Uk);case"emailLink":return $k(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oc(e,r,"signUpPassword",jk);case"emailLink":return Bk(e,{idToken:n,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xr(t,e){return gl(t,"POST","/v1/accounts:signInWithIdp",Kn(t,e))}/**
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
 */const Vk="http://localhost";class vr extends nh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xr(e,n)}buildRequest(){const e={requestUri:Vk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Si(n)}return e}}/**
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
 */function Hk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gk(t){const e=Ki(qi(t)).link,n=e?Ki(qi(e)).deep_link_id:null,r=Ki(qi(t)).deep_link_id;return(r?Ki(qi(r)).link:null)||r||n||e||t}class rh{constructor(e){var n,r,i,s,o,a;const l=Ki(qi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=Hk((i=l.mode)!==null&&i!==void 0?i:null);L(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Gk(e);try{return new rh(n)}catch{return null}}}/**
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
 */class Mn{constructor(){this.providerId=Mn.PROVIDER_ID}static credential(e,n){return Ls._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rh.parseLink(n);return L(r,"argument-error"),Ls._fromEmailAndCode(e,r.code,r.tenantId)}}Mn.PROVIDER_ID="password";Mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eo extends Zs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends eo{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class jt extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
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
 */class hn extends eo{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class fn extends eo{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $t._fromIdTokenResponse(e,r,i),o=Tp(r);return new di({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Tp(r);return new di({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Tp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ba extends Gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ba.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ba(e,n,r,i)}}function Ov(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function Kk(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}async function bv(t,e,n=!1){const r=await ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",r)}async function qk(t,e,n){await bs(e);const r=Kk(e.providerData);L(r.has(n)===t,e.auth,"provider-already-linked")}/**
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
 */async function Lv(t,e,n=!1){const{auth:r}=t;if(mt(r.app))return Promise.reject(Gt(r));const i="reauthenticate";try{const s=await ci(t,Ov(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=eh(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),di._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),s}}/**
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
 */async function Dv(t,e,n=!1){if(mt(t.app))return Promise.reject(Gt(t));const r="signIn",i=await Ov(t,r,e),s=await di._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Qk(t,e){return Dv(bt(t),e)}async function Yk(t,e){const n=oe(t);return await qk(!1,n,e.providerId),bv(n,e)}async function Jk(t,e){return Lv(oe(t),e)}/**
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
 */async function Xk(t){const e=bt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Zk(t,e,n){const r=bt(t);await Oc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Wk)}function e1(t,e,n){return mt(t.app)?Promise.reject(Gt(t)):Qk(oe(t),Mn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xk(t),r})}function t1(t,e){return n1(oe(t),null,e)}async function n1(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(s.password=n);const o=await ci(t,Fk(r,s));await t._updateTokensIfNecessary(o,!0)}function r1(t,e,n,r){return oe(t).onIdTokenChanged(e,n,r)}function i1(t,e,n){return oe(t).beforeAuthStateChanged(e,n)}function s1(t,e,n,r){return oe(t).onAuthStateChanged(e,n,r)}function gu(t){return oe(t).signOut()}const La="__sak";/**
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
 */class Mv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(La,"1"),this.storage.removeItem(La),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const o1=1e3,a1=10;class Fv extends Mv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);yk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,a1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},o1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fv.type="LOCAL";const l1=Fv;/**
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
 */class jv extends Mv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jv.type="SESSION";const Uv=jv;/**
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
 */function u1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await u1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vl.receivers=[];/**
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
 */function ih(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class c1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ih("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xt(){return window}function d1(t){xt().location.href=t}/**
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
 */function zv(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function h1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function p1(){return zv()?self:null}/**
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
 */const Wv="firebaseLocalStorageDb",m1=1,Da="firebaseLocalStorage",$v="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yl(t,e){return t.transaction([Da],e?"readwrite":"readonly").objectStore(Da)}function g1(){const t=indexedDB.deleteDatabase(Wv);return new to(t).toPromise()}function bc(){const t=indexedDB.open(Wv,m1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Da,{keyPath:$v})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Da)?e(r):(r.close(),await g1(),e(await bc()))})})}async function Pp(t,e,n){const r=yl(t,!0).put({[$v]:e,value:n});return new to(r).toPromise()}async function _1(t,e){const n=yl(t,!1).get(e),r=await new to(n).toPromise();return r===void 0?null:r.value}function Np(t,e){const n=yl(t,!0).delete(e);return new to(n).toPromise()}const v1=800,y1=3;class Bv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>y1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vl._getInstance(p1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await h1(),!this.activeServiceWorker)return;this.sender=new c1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bc();return await Pp(e,La,"1"),await Np(e,La),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Np(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=yl(i,!1).getAll();return new to(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),v1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bv.type="LOCAL";const w1=Bv;new Xs(3e4,6e4);/**
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
 */function wl(t,e){return e?Bt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sh extends nh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function E1(t){return Dv(t.auth,new sh(t),t.bypassAuthState)}function C1(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),Lv(n,new sh(t),t.bypassAuthState)}async function S1(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),bv(n,new sh(t),t.bypassAuthState)}/**
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
 */class Vv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E1;case"linkViaPopup":case"linkViaRedirect":return S1;case"reauthViaPopup":case"reauthViaRedirect":return C1;default:lt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const I1=new Xs(2e3,1e4);async function k1(t,e,n){if(mt(t.app))return Promise.reject(yt(t,"operation-not-supported-in-this-environment"));const r=bt(t);Jd(t,e,Zs);const i=wl(r,n);return new _n(r,"signInViaPopup",e,i).executeNotNull()}async function T1(t,e,n){const r=oe(t);Jd(r.auth,e,Zs);const i=wl(r.auth,n);return new _n(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class _n extends Vv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=ih();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I1.get())};e()}}_n.currentPopupAction=null;/**
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
 */const P1="pendingRedirect",Jo=new Map;class N1 extends Vv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jo.get(this.auth._key());if(!e){try{const r=await R1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R1(t,e){const n=Gv(e),r=Hv(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function x1(t,e){return Hv(t)._set(Gv(e),"true")}function A1(t,e){Jo.set(t._key(),e)}function Hv(t){return Bt(t._redirectPersistence)}function Gv(t){return Yo(P1,t.config.apiKey,t.name)}/**
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
 */function Rp(t,e,n){return O1(t,e,n)}async function O1(t,e,n){if(mt(t.app))return Promise.reject(Gt(t));const r=bt(t);Jd(t,e,Zs),await r._initializationPromise;const i=wl(r,n);return await x1(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function b1(t,e){return await bt(t)._initializationPromise,Kv(t,e,!1)}async function Kv(t,e,n=!1){if(mt(t.app))return Promise.reject(Gt(t));const r=bt(t),i=wl(r,e),o=await new N1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const L1=10*60*1e3;class D1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!M1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=L1&&this.cachedEventUids.clear(),this.cachedEventUids.has(xp(e))}saveEventToCache(e){this.cachedEventUids.add(xp(e)),this.lastProcessedEventTime=Date.now()}}function xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function M1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qv(t);default:return!1}}/**
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
 */async function F1(t,e={}){return Ot(t,"GET","/v1/projects",e)}/**
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
 */const j1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U1=/^https?/;async function z1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await F1(t);for(const n of e)try{if(W1(n))return}catch{}lt(t,"unauthorized-domain")}function W1(t){const e=xc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!U1.test(n))return!1;if(j1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $1=new Xs(3e4,6e4);function Ap(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function B1(t){return new Promise((e,n)=>{var r,i,s;function o(){Ap(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ap(),n(yt(t,"network-request-failed"))},timeout:$1.get()})}if(!((i=(r=xt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xt().gapi)===null||s===void 0)&&s.load)o();else{const a=Nk("iframefcb");return xt()[a]=()=>{gapi.load?o():n(yt(t,"network-request-failed"))},xv(`${Pk()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function V1(t){return Xo=Xo||B1(t),Xo}/**
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
 */const H1=new Xs(5e3,15e3),G1="__/auth/iframe",K1="emulator/auth/iframe",q1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Q1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y1(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zd(e,K1):`https://${t.config.authDomain}/${G1}`,r={apiKey:e.apiKey,appName:t.name,v:Ii},i=Q1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Si(r).slice(1)}`}async function J1(t){const e=await V1(t),n=xt().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:Y1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:q1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yt(t,"network-request-failed"),a=xt().setTimeout(()=>{s(o)},H1.get());function l(){xt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const X1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z1=500,eT=600,tT="_blank",nT="http://localhost";class Op{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rT(t,e,n,r=Z1,i=eT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},X1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Me().toLowerCase();n&&(a=Sv(u)?tT:n),Ev(u)&&(e=e||nT,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[_,v])=>`${h}${_}=${v},`,"");if(vk(u)&&a!=="_self")return iT(e||"",a),new Op(null);const c=window.open(e||"",a,d);L(c,t,"popup-blocked");try{c.focus()}catch{}return new Op(c)}function iT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sT="__/auth/handler",oT="emulator/auth/handler",aT=encodeURIComponent("fac");async function bp(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ii,eventId:i};if(e instanceof Zs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Na(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof eo){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${aT}=${encodeURIComponent(l)}`:"";return`${lT(t)}?${Si(a).slice(1)}${u}`}function lT({config:t}){return t.emulator?Zd(t,oT):`https://${t.authDomain}/${sT}`}/**
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
 */const _u="webStorageSupport";class uT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uv,this._completeRedirectFn=Kv,this._overrideRedirectResult=A1}async _openPopup(e,n,r,i){var s;Zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bp(e,n,r,xc(),i);return rT(e,o,ih())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bp(e,n,r,xc(),i);return d1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await J1(e),r=new D1(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_u,{type:_u},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_u];o!==void 0&&n(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nv()||Cv()||th()}}const cT=uT;var Lp="@firebase/auth",Dp="1.7.9";/**
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
 */class dT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fT(t){ui(new _r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rv(t)},u=new Ik(r,i,s,l);return bk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new _r("auth-internal",e=>{const n=bt(e.getProvider("auth").getImmediate());return(r=>new dT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(Lp,Dp,hT(t)),An(Lp,Dp,"esm2017")}/**
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
 */const pT=5*60,mT=iv("authIdTokenMaxAge")||pT;let Mp=null;const gT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mT)return;const i=n==null?void 0:n.token;Mp!==i&&(Mp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _T(t=cv()){const e=qd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ok(t,{popupRedirectResolver:cT,persistence:[w1,l1,Uv]}),r=iv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gT(s.toString());i1(n,o,()=>o(n.currentUser)),r1(n,a=>o(a))}}const i=nv("auth");return i&&Lk(n,`http://${i}`),n}function vT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fT("Browser");var Fp={};const jp="@firebase/database",Up="1.0.8";/**
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
 */let Qv="";function yT(t){Qv=t}/**
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
 */class wT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:As(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ET{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return St(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Yv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wT(e)}}catch{}return new ET},ar=Yv("localStorage"),CT=Yv("sessionStorage");/**
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
 */const Zr=new Gd("@firebase/database"),Jv=function(){let t=1;return function(){return t++}}(),Xv=function(t){const e=HS(t),n=new WS;n.update(e);const r=n.digest();return Bd.encodeByteArray(r)},no=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=no.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let ss=null,zp=!0;const ST=function(t,e){T(!0,"Can't turn on custom loggers persistently."),Zr.logLevel=G.VERBOSE,ss=Zr.log.bind(Zr)},Ee=function(...t){if(zp===!0&&(zp=!1,ss===null&&CT.get("logging_enabled")===!0&&ST()),ss){const e=no.apply(null,t);ss(e)}},ro=function(t){return function(...e){Ee(t,...e)}},Lc=function(...t){const e="FIREBASE INTERNAL ERROR: "+no(...t);Zr.error(e)},en=function(...t){const e=`FIREBASE FATAL ERROR: ${no(...t)}`;throw Zr.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+no(...t);Zr.warn(e)},IT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},El=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},yr="[MIN_NAME]",Fn="[MAX_NAME]",Ir=function(t,e){if(t===e)return 0;if(t===yr||e===Fn)return-1;if(e===yr||t===Fn)return 1;{const n=Wp(t),r=Wp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},TT=function(t,e){return t===e?0:t<e?-1:1},ji=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},oh=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=oh(t[e[r]]);return n+="}",n},Zv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Se(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ey=function(t){T(!El(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},PT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},NT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function RT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const xT=new RegExp("^-?(0*)\\d{1,10}$"),AT=-2147483648,OT=2147483647,Wp=function(t){if(xT.test(t)){const e=Number(t);if(e>=AT&&e<=OT)return e}return null},ki=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},bT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},os=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class LT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class DT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class Zo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zo.OWNER="owner";/**
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
 */const ah="5",ty="v",ny="s",ry="r",iy="f",sy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oy="ls",ay="p",Dc="ac",ly="websocket",uy="long_polling";/**
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
 */class cy{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ar.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ar.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function MT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dy(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===ly)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===uy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);MT(t)&&(n.ns=t.namespace);const i=[];return Se(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class FT{constructor(){this.counters_={}}incrementCounter(e,n=1){St(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return CS(this.counters_)}}/**
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
 */const vu={},yu={};function lh(t){const e=t.toString();return vu[e]||(vu[e]=new FT),vu[e]}function jT(t,e){const n=t.toString();return yu[n]||(yu[n]=e()),yu[n]}/**
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
 */class UT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ki(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const $p="start",zT="close",WT="pLPCommand",$T="pRTLPCB",hy="id",fy="pw",py="ser",BT="cb",VT="seg",HT="ts",GT="d",KT="dframe",my=1870,gy=30,qT=my-gy,QT=25e3,YT=3e4;class Br{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ro(e),this.stats_=lh(n),this.urlFn=l=>(this.appCheckToken&&(l[Dc]=this.appCheckToken),dy(n,uy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new UT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(YT)),kT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new uh((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$p)this.id=a,this.password=l;else if(o===zT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[$p]="t",r[py]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[BT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[ty]=ah,this.transportSessionId&&(r[ny]=this.transportSessionId),this.lastSessionId&&(r[oy]=this.lastSessionId),this.applicationId&&(r[ay]=this.applicationId),this.appCheckToken&&(r[Dc]=this.appCheckToken),typeof location<"u"&&location.hostname&&sy.test(location.hostname)&&(r[ry]=iy);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Br.forceAllow_=!0}static forceDisallow(){Br.forceDisallow_=!0}static isAvailable(){return Br.forceAllow_?!0:!Br.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PT()&&!NT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ev(n),i=Zv(r,qT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[KT]="t",r[hy]=e,r[fy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class uh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jv(),window[WT+this.uniqueCallbackIdentifier]=e,window[$T+this.uniqueCallbackIdentifier]=n,this.myIFrame=uh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ee("frame writing exception"),a.stack&&Ee(a.stack),Ee(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hy]=this.myID,e[fy]=this.myPW,e[py]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gy+r.length<=my;){const o=this.pendingSegs.shift();r=r+"&"+VT+i+"="+o.seg+"&"+HT+i+"="+o.ts+"&"+GT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(QT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const JT=16384,XT=45e3;let Ma=null;typeof MozWebSocket<"u"?Ma=MozWebSocket:typeof WebSocket<"u"&&(Ma=WebSocket);class pt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ro(this.connId),this.stats_=lh(n),this.connURL=pt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[ty]=ah,typeof location<"u"&&location.hostname&&sy.test(location.hostname)&&(o[ry]=iy),n&&(o[ny]=n),r&&(o[oy]=r),i&&(o[Dc]=i),s&&(o[ay]=s),dy(e,ly,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ar.set("previous_websocket_failure",!0);try{let r;bS(),this.mySock=new Ma(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){pt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ma!==null&&!pt.forceDisallow_}static previouslyFailed(){return ar.isInMemoryStorage||ar.get("previous_websocket_failure")===!0}markConnectionHealthy(){ar.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=As(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Zv(n,JT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pt.responsesRequiredToBeHealthy=2;pt.healthyTimeout=3e4;/**
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
 */class Ds{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Br,pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=pt&&pt.isAvailable();let r=n&&!pt.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[pt];else{const i=this.transports_=[];for(const s of Ds.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ds.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ds.globalTransportInitialized_=!1;/**
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
 */const ZT=6e4,eP=5e3,tP=10*1024,nP=100*1024,wu="t",Bp="d",rP="s",Vp="r",iP="e",Hp="o",Gp="a",Kp="n",qp="p",sP="h";class oP{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ro("c:"+this.id+":"),this.transportManager_=new Ds(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=os(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wu in e){const n=e[wu];n===Gp?this.upgradeIfSecondaryHealthy_():n===Vp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ji("t",e),r=ji("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ji("t",e),r=ji("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ji(wu,e);if(Bp in e){const r=e[Bp];if(n===sP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Kp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rP?this.onConnectionShutdown_(r):n===Vp?this.onReset_(r):n===iP?Lc("Server Error: "+r):n===Hp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ah!==r&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),os(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):os(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ar.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class _y{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class vy{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Fa extends vy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fa}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Qp=32,Yp=768;class V{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new V("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jn(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new V(t.pieces_,e)}function ch(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function aP(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ms(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function yy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new V(e,0)}function re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof V)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new V(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function be(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return be(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function lP(t,e){const n=Ms(t,0),r=Ms(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ir(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function dh(t,e){if(jn(t)!==jn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function it(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(jn(t)>jn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class uP{constructor(e,n){this.errorPrefix_=n,this.parts_=Ms(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ml(this.parts_[r]);wy(this)}}function cP(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ml(e),wy(t)}function dP(t){const e=t.parts_.pop();t.byteLength_-=ml(e),t.parts_.length>0&&(t.byteLength_-=1)}function wy(t){if(t.byteLength_>Yp)throw new Error(t.errorPrefix_+"has a key path longer than "+Yp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Qp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qp+") or object contains a cycle "+rr(t))}function rr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class hh extends vy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new hh}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ui=1e3,hP=60*5*1e3,Jp=30*1e3,fP=1.3,pP=3e4,mP="server_kill",Xp=3;class Kt extends _y{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Kt.nextPersistentConnectionId_++,this.log_=ro("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ui,this.maxReconnectDelay_=hP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(pe(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ft,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Kt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&St(e,"w")){const r=gr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=US(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Lc("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pP&&(this.reconnectDelay_=Ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Kt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,a=new oP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{De(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(mP)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&De(c),l())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Na(this.interruptReasons_)&&(this.reconnectDelay_=Ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>oh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new V(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xp&&(this.reconnectDelay_=Jp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Qv.replace(/\./g,"-")]=1,Hd()?e["framework.cordova"]=1:sv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fa.getInstance().currentlyOnline();return Na(this.interruptReasons_)&&e}}Kt.nextPersistentConnectionId_=0;Kt.nextConnectionId_=0;/**
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
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
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
 */class Cl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(yr,e),i=new U(yr,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
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
 */let Oo;class Ey extends Cl{static get __EMPTY_NODE(){return Oo}static set __EMPTY_NODE(e){Oo=e}compare(e,n){return Ir(e.name,n.name)}isDefinedOn(e){throw Ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Fn,Oo)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,Oo)}toString(){return".key"}}const cr=new Ey;/**
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
 */class bo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??we.RED,this.left=i??$e.EMPTY_NODE,this.right=s??$e.EMPTY_NODE}copy(e,n,r,i,s){return new we(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $e.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class gP{copy(e,n,r,i,s){return this}insert(e,n,r){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bo(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new gP;/**
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
 */function _P(t,e){return Ir(t.name,e.name)}function fh(t,e){return Ir(t,e)}/**
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
 */let Mc;function vP(t){Mc=t}const Cy=function(t){return typeof t=="number"?"number:"+ey(t):"string:"+t},Sy=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&St(e,".sv"),"Priority must be a string or number.")}else T(t===Mc||t.isEmpty(),"priority of unexpected type.");T(t===Mc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Zp;class ve{constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sy(this.priorityNode_)}static set __childrenNodeConstructor(e){Zp=e}static get __childrenNodeConstructor(){return Zp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:M(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ey(this.value_):e+=this.value_,this.lazyHash_=Xv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),s=ve.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Iy,ky;function yP(t){Iy=t}function wP(t){ky=t}class EP extends Cl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ir(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Fn,new ve("[PRIORITY-POST]",ky))}makePost(e,n){const r=Iy(e);return new U(n,new ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const Z=new EP;/**
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
 */const CP=Math.log(2);class SP{constructor(e){const n=s=>parseInt(Math.log(s)/CP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ja=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,h;if(d===0)return null;if(d===1)return c=t[l],h=n?n(c):c,new we(h,c.node,we.BLACK,null,null);{const _=parseInt(d/2,10)+l,v=i(l,_),y=i(_+1,u);return c=t[_],h=n?n(c):c,new we(h,c.node,we.BLACK,v,y)}},s=function(l){let u=null,d=null,c=t.length;const h=function(v,y){const I=c-v,m=c;c-=v;const f=i(I+1,m),g=t[I],E=n?n(g):g;_(new we(E,g.node,y,null,f))},_=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),I=Math.pow(2,l.count-(v+1));y?h(I,we.BLACK):(h(I,we.BLACK),h(I,we.RED))}return d},o=new SP(t.length),a=s(o);return new $e(r||e,a)};/**
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
 */let Eu;const Rr={};class Vt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Rr&&Z,"ChildrenNode.ts has not been loaded"),Eu=Eu||new Vt({".priority":Rr},{".priority":Z}),Eu}get(e){const n=gr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return St(this.indexSet_,e.toString())}addIndex(e,n){T(e!==cr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ja(r,e.getCompare()):a=Rr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Vt(d,u)}addToIndexes(e,n){const r=Ra(this.indexes_,(i,s)=>{const o=gr(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===Rr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),ja(a,o.getCompare())}else return Rr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new Vt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ra(this.indexes_,i=>{if(i===Rr)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new Vt(r,this.indexSet_)}}/**
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
 */let zi;class b{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Sy(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zi||(zi=new b(new $e(fh),null,Vt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zi}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zi:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?zi:this.priorityNode_;return new b(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{T(M(e)!==".priority"||jn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Z,(o,a)=>{n[o]=a.val(e),r++,s&&b.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cy(this.getPriority().val())+":"),this.forEachChild(Z,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Xv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===io?-1:0}withIndex(e){if(e===cr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===cr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Z),i=n.getIterator(Z);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===cr?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class IP extends b{constructor(){super(new $e(fh),b.EMPTY_NODE,Vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const io=new IP;Object.defineProperties(U,{MIN:{value:new U(yr,b.EMPTY_NODE)},MAX:{value:new U(Fn,io)}});Ey.__EMPTY_NODE=b.EMPTY_NODE;ve.__childrenNodeConstructor=b;vP(io);wP(io);/**
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
 */const kP=!0;function ne(t,e=null){if(t===null)return b.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,ne(e))}if(!(t instanceof Array)&&kP){const n=[];let r=!1;if(Se(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ne(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new U(o,l)))}}),n.length===0)return b.EMPTY_NODE;const s=ja(n,_P,o=>o.name,fh);if(r){const o=ja(n,Z.getCompare());return new b(s,ne(e),new Vt({".priority":o},{".priority":Z}))}else return new b(s,ne(e),Vt.Default)}else{let n=b.EMPTY_NODE;return Se(t,(r,i)=>{if(St(t,r)&&r.substring(0,1)!=="."){const s=ne(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ne(e))}}yP(ne);/**
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
 */class ph extends Cl{constructor(e){super(),this.indexPath_=e,T(!F(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ir(e.name,n.name):s}makePost(e,n){const r=ne(e),i=b.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,io);return new U(Fn,e)}toString(){return Ms(this.indexPath_,0).join("/")}}/**
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
 */class TP extends Cl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ir(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=ne(e);return new U(n,r)}toString(){return".value"}}const Ty=new TP;/**
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
 */function Py(t){return{type:"value",snapshotNode:t}}function hi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Fs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function js(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function PP(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class mh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Fs(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(hi(n,r)):o.trackChildChange(js(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Z,(i,s)=>{n.hasChild(i)||r.trackChildChange(Fs(i,s))}),n.isLeafNode()||n.forEachChild(Z,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(js(i,s,o))}else r.trackChildChange(hi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Us{constructor(e){this.indexedFilter_=new mh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Us.getStartPost_(e),this.endPost_=Us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=b.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(b.EMPTY_NODE);const s=this;return n.forEachChild(Z,(o,a)=>{s.matches(new U(o,a))||(i=i.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class NP{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=b.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=b.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(b.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,_)=>c(_,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new U(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,l);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(js(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Fs(n,c));const y=a.updateImmediateChild(n,b.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(hi(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Fs(u.name,u.node)),s.trackChildChange(hi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,b.EMPTY_NODE)):e}}/**
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
 */class gh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yr}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new gh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function RP(t){return t.loadsAllData()?new mh(t.getIndex()):t.hasLimit()?new NP(t):new Us(t)}function xP(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function AP(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function OP(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function bP(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function LP(t,e){const n=t.copy();return n.index_=e,n}function em(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Z?n="$priority":t.index_===Ty?n="$value":t.index_===cr?n="$key":(T(t.index_ instanceof ph,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function tm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Z&&(e.i=t.index_.toString()),e}/**
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
 */class Ua extends _y{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ro("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ua.getListenId_(e,r),a={};this.listens_[o]=a;const l=em(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),gr(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Ua.getListenId_(e,n);delete this.listens_[r]}get(e){const n=em(e._queryParams),r=e._path.toString(),i=new ft;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Si(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=As(a.responseText)}catch{De("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class DP{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function za(){return{value:null,children:new Map}}function Ti(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,za());const i=t.children.get(r);e=q(e),Ti(i,e,n)}}function Fc(t,e){if(F(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Z,(r,i)=>{Ti(t,new V(r),i)}),Fc(t,e)}}else if(t.children.size>0){const n=M(e);return e=q(e),t.children.has(n)&&Fc(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function jc(t,e,n){t.value!==null?n(e,t.value):MP(t,(r,i)=>{const s=new V(e.toString()+"/"+r);jc(i,s,n)})}function MP(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class FP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Se(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const nm=10*1e3,jP=30*1e3,UP=5*60*1e3;class zP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FP(e);const r=nm+(jP-nm)*Math.random();os(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Se(e,(i,s)=>{s>0&&St(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),os(this.reportStats_.bind(this),Math.floor(Math.random()*2*UP))}}/**
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
 */var gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gt||(gt={}));function _h(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Wa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=gt.ACK_USER_WRITE,this.source=_h()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new V(e));return new Wa(B(),n,this.revert)}}else return T(M(this.path)===e,"operationForChild called for unrelated child."),new Wa(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class zs{constructor(e,n){this.source=e,this.path=n,this.type=gt.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new zs(this.source,B()):new zs(this.source,q(this.path))}}/**
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
 */class wr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=gt.OVERWRITE}operationForChild(e){return F(this.path)?new wr(this.source,B(),this.snap.getImmediateChild(e)):new wr(this.source,q(this.path),this.snap)}}/**
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
 */class fi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=gt.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new V(e));return n.isEmpty()?null:n.value?new wr(this.source,B(),n.value):new fi(this.source,B(),n)}else return T(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fi(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Un{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class WP{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $P(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(PP(o.childName,o.snapshotNode))}),Wi(t,i,"child_removed",e,r,n),Wi(t,i,"child_added",e,r,n),Wi(t,i,"child_moved",s,r,n),Wi(t,i,"child_changed",e,r,n),Wi(t,i,"value",e,r,n),i}function Wi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>VP(t,a,l)),o.forEach(a=>{const l=BP(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function BP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VP(t,e,n){if(e.childName==null||n.childName==null)throw Ci("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Sl(t,e){return{eventCache:t,serverCache:e}}function as(t,e,n,r){return Sl(new Un(e,n,r),t.serverCache)}function Ny(t,e,n,r){return Sl(t.eventCache,new Un(e,n,r))}function $a(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Er(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Cu;const HP=()=>(Cu||(Cu=new $e(TT)),Cu);class Q{constructor(e,n=HP()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return Se(e,(r,i)=>{n=n.set(new V(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(F(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:re(new V(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new Q(null)}}set(e,n){if(F(e))return new Q(n,this.children);{const r=M(e),s=(this.children.get(r)||new Q(null)).set(q(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(F(e))return n;{const r=M(e),s=(this.children.get(r)||new Q(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(q(e),re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),re(n,i),r):new Q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new Q(null))}}function ls(t,e,n){if(F(e))return new wt(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=be(i,e);return s=s.updateChild(o,n),new wt(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new wt(s)}}}function Uc(t,e,n){let r=t;return Se(n,(i,s)=>{r=ls(r,re(e,i),s)}),r}function rm(t,e){if(F(e))return wt.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new wt(n)}}function zc(t,e){return kr(t,e)!=null}function kr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(be(n.path,e)):null}function im(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function On(t,e){if(F(e))return t;{const n=kr(t,e);return n!=null?new wt(new Q(n)):new wt(t.writeTree_.subtree(e))}}function Wc(t){return t.writeTree_.isEmpty()}function pi(t,e){return Ry(B(),t.writeTree_,e)}function Ry(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ry(re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(re(t,".priority"),r)),n}}/**
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
 */function Il(t,e){return by(e,t)}function GP(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ls(t.visibleWrites,e,n)),t.lastWriteId=r}function KP(t,e,n,r){T(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Uc(t.visibleWrites,e,n),t.lastWriteId=r}function qP(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function QP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&YP(a,r.path)?i=!1:it(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return JP(t),!0;if(r.snap)t.visibleWrites=rm(t.visibleWrites,r.path);else{const a=r.children;Se(a,l=>{t.visibleWrites=rm(t.visibleWrites,re(r.path,l))})}return!0}else return!1}function YP(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(re(t.path,n),e))return!0;return!1}function JP(t){t.visibleWrites=xy(t.allWrites,XP,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function XP(t){return t.visible}function xy(t,e,n){let r=wt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)it(n,o)?(a=be(n,o),r=ls(r,a,s.snap)):it(o,n)&&(a=be(o,n),r=ls(r,B(),s.snap.getChild(a)));else if(s.children){if(it(n,o))a=be(n,o),r=Uc(r,a,s.children);else if(it(o,n))if(a=be(o,n),F(a))r=Uc(r,B(),s.children);else{const l=gr(s.children,M(a));if(l){const u=l.getChild(q(a));r=ls(r,B(),u)}}}else throw Ci("WriteRecord should have .snap or .children")}}return r}function Ay(t,e,n,r,i){if(!r&&!i){const s=kr(t.visibleWrites,e);if(s!=null)return s;{const o=On(t.visibleWrites,e);if(Wc(o))return n;if(n==null&&!zc(o,B()))return null;{const a=n||b.EMPTY_NODE;return pi(o,a)}}}else{const s=On(t.visibleWrites,e);if(!i&&Wc(s))return n;if(!i&&n==null&&!zc(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(it(u.path,e)||it(e,u.path))},a=xy(t.allWrites,o,e),l=n||b.EMPTY_NODE;return pi(a,l)}}}function ZP(t,e,n){let r=b.EMPTY_NODE;const i=kr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=On(t.visibleWrites,e);return n.forEachChild(Z,(o,a)=>{const l=pi(On(s,new V(o)),a);r=r.updateImmediateChild(o,l)}),im(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=On(t.visibleWrites,e);return im(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function eN(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=re(e,n);if(zc(t.visibleWrites,s))return null;{const o=On(t.visibleWrites,s);return Wc(o)?i.getChild(n):pi(o,i.getChild(n))}}function tN(t,e,n,r){const i=re(e,n),s=kr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=On(t.visibleWrites,i);return pi(o,r.getNode().getImmediateChild(n))}else return null}function nN(t,e){return kr(t.visibleWrites,e)}function rN(t,e,n,r,i,s,o){let a;const l=On(t.visibleWrites,e),u=kr(l,B());if(u!=null)a=u;else if(n!=null)a=pi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=h.getNext();for(;_&&d.length<i;)c(_,r)!==0&&d.push(_),_=h.getNext();return d}else return[]}function iN(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function Ba(t,e,n,r){return Ay(t.writeTree,t.treePath,e,n,r)}function wh(t,e){return ZP(t.writeTree,t.treePath,e)}function sm(t,e,n,r){return eN(t.writeTree,t.treePath,e,n,r)}function Va(t,e){return nN(t.writeTree,re(t.treePath,e))}function sN(t,e,n,r,i,s){return rN(t.writeTree,t.treePath,e,n,r,i,s)}function Eh(t,e,n){return tN(t.writeTree,t.treePath,e,n)}function Oy(t,e){return by(re(t.treePath,e),t.writeTree)}function by(t,e){return{treePath:t,writeTree:e}}/**
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
 */class oN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,js(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Fs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,hi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,js(r,e.snapshotNode,i.oldSnap));else throw Ci("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class aN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ly=new aN;class Ch{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Un(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Eh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Er(this.viewCache_),s=sN(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function lN(t){return{filter:t}}function uN(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function cN(t,e,n,r,i){const s=new oN;let o,a;if(n.type===gt.OVERWRITE){const u=n;u.source.fromUser?o=$c(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=Ha(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===gt.MERGE){const u=n;u.source.fromUser?o=hN(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Bc(t,e,u.path,u.children,r,i,a,s))}else if(n.type===gt.ACK_USER_WRITE){const u=n;u.revert?o=mN(t,e,u.path,r,i,s):o=fN(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===gt.LISTEN_COMPLETE)o=pN(t,e,n.path,r,s);else throw Ci("Unknown operation type: "+n.type);const l=s.getChanges();return dN(e,o,l),{viewCache:o,changes:l}}function dN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$a(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Py($a(e)))}}function Dy(t,e,n,r,i,s){const o=e.eventCache;if(Va(r,n)!=null)return e;{let a,l;if(F(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Er(e),d=u instanceof b?u:b.EMPTY_NODE,c=wh(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Ba(r,Er(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=M(n);if(u===".priority"){T(jn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=sm(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=q(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=sm(r,n,o.getNode(),l);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Eh(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return as(e,a,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function Ha(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),_,null)}else{const _=M(n);if(!l.isCompleteForPath(n)&&jn(n)>1)return e;const v=q(n),I=l.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=d.updatePriority(l.getNode(),I):u=d.updateChild(l.getNode(),_,I,v,Ly,null)}const c=Ny(e,u,l.isFullyInitialized()||F(n),d.filtersNodes()),h=new Ch(i,c,s);return Dy(t,c,n,i,h,a)}function $c(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new Ch(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=as(e,u,!0,t.filter.filtersNodes());else{const c=M(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=as(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=q(n),_=a.getNode().getImmediateChild(c);let v;if(F(h))v=r;else{const y=d.getCompleteChild(c);y!=null?ch(h)===".priority"&&y.getChild(yy(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=b.EMPTY_NODE}if(_.equals(v))l=e;else{const y=t.filter.updateChild(a.getNode(),c,v,h,d,o);l=as(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function om(t,e){return t.eventCache.isCompleteForChild(e)}function hN(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=re(n,l);om(e,M(d))&&(a=$c(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=re(n,l);om(e,M(d))||(a=$c(t,a,d,u,i,s,o))}),a}function am(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Bc(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;F(n)?u=r:u=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const _=e.serverCache.getNode().getImmediateChild(c),v=am(t,_,h);l=Ha(t,l,new V(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,h)=>{const _=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!_){const v=e.serverCache.getNode().getImmediateChild(c),y=am(t,v,h);l=Ha(t,l,new V(c),y,i,s,o,a)}}),l}function fN(t,e,n,r,i,s,o){if(Va(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(F(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ha(t,e,n,l.getNode().getChild(n),i,s,a,o);if(F(n)){let u=new Q(null);return l.getNode().forEachChild(cr,(d,c)=>{u=u.set(new V(d),c)}),Bc(t,e,n,u,i,s,a,o)}else return e}else{let u=new Q(null);return r.foreach((d,c)=>{const h=re(n,d);l.isCompleteForPath(h)&&(u=u.set(d,l.getNode().getChild(h)))}),Bc(t,e,n,u,i,s,a,o)}}function pN(t,e,n,r,i){const s=e.serverCache,o=Ny(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return Dy(t,o,n,r,Ly,i)}function mN(t,e,n,r,i,s){let o;if(Va(r,n)!=null)return e;{const a=new Ch(r,e,i),l=e.eventCache.getNode();let u;if(F(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ba(r,Er(e));else{const c=e.serverCache.getNode();T(c instanceof b,"serverChildren would be complete if leaf node"),d=wh(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=M(n);let c=Eh(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,q(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,b.EMPTY_NODE,q(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ba(r,Er(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Va(r,B())!=null,as(e,u,o,t.filter.filtersNodes())}}/**
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
 */class gN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new mh(r.getIndex()),s=RP(r);this.processor_=lN(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(b.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(b.EMPTY_NODE,a.getNode(),null),d=new Un(l,o.isFullyInitialized(),i.filtersNodes()),c=new Un(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Sl(c,d),this.eventGenerator_=new WP(this.query_)}get query(){return this.query_}}function _N(t){return t.viewCache_.serverCache.getNode()}function vN(t){return $a(t.viewCache_)}function yN(t,e){const n=Er(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function lm(t){return t.eventRegistrations_.length===0}function wN(t,e){t.eventRegistrations_.push(e)}function um(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function cm(t,e,n,r){e.type===gt.MERGE&&e.source.queryId!==null&&(T(Er(t.viewCache_),"We should always have a full cache before handling merges"),T($a(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=cN(t.processor_,i,e,n,r);return uN(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,My(t,s.changes,s.viewCache.eventCache.getNode(),null)}function EN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(s,o)=>{r.push(hi(s,o))}),n.isFullyInitialized()&&r.push(Py(n.getNode())),My(t,r,n.getNode(),e)}function My(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return $P(t.eventGenerator_,e,n,i)}/**
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
 */let Ga;class Fy{constructor(){this.views=new Map}}function CN(t){T(!Ga,"__referenceConstructor has already been defined"),Ga=t}function SN(){return T(Ga,"Reference.ts has not been loaded"),Ga}function IN(t){return t.views.size===0}function Sh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),cm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(cm(o,e,n,r));return s}}function jy(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ba(n,i?r:null),l=!1;a?l=!0:r instanceof b?(a=wh(n,r),l=!1):(a=b.EMPTY_NODE,l=!1);const u=Sl(new Un(a,l,!1),new Un(r,i,!1));return new gN(e,u)}return o}function kN(t,e,n,r,i,s){const o=jy(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),wN(o,n),EN(o,n)}function TN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=zn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(um(u,n,r)),lm(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(um(l,n,r)),lm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!zn(t)&&s.push(new(SN())(e._repo,e._path)),{removed:s,events:o}}function Uy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function bn(t,e){let n=null;for(const r of t.views.values())n=n||yN(r,e);return n}function zy(t,e){if(e._queryParams.loadsAllData())return kl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Wy(t,e){return zy(t,e)!=null}function zn(t){return kl(t)!=null}function kl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ka;function PN(t){T(!Ka,"__referenceConstructor has already been defined"),Ka=t}function NN(){return T(Ka,"Reference.ts has not been loaded"),Ka}let RN=1;class dm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=iN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ih(t,e,n,r,i){return GP(t.pendingWriteTree_,e,n,r,i),i?Pi(t,new wr(_h(),e,n)):[]}function xN(t,e,n,r){KP(t.pendingWriteTree_,e,n,r);const i=Q.fromObject(n);return Pi(t,new fi(_h(),e,i))}function vn(t,e,n=!1){const r=qP(t.pendingWriteTree_,e);if(QP(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(B(),!0):Se(r.children,o=>{s=s.set(new V(o),!0)}),Pi(t,new Wa(r.path,s,n))}else return[]}function so(t,e,n){return Pi(t,new wr(vh(),e,n))}function AN(t,e,n){const r=Q.fromObject(n);return Pi(t,new fi(vh(),e,r))}function ON(t,e){return Pi(t,new zs(vh(),e))}function bN(t,e,n){const r=kh(t,n);if(r){const i=Th(r),s=i.path,o=i.queryId,a=be(s,e),l=new zs(yh(o),a);return Ph(t,s,l)}else return[]}function qa(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Wy(o,e))){const l=TN(o,e,n,r);IN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,_)=>zn(_));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=MN(h);for(let v=0;v<_.length;++v){const y=_[v],I=y.query,m=Hy(t,y);t.listenProvider_.startListening(us(I),Ws(t,I),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(us(e),null):u.forEach(h=>{const _=t.queryToTagMap.get(Pl(h));t.listenProvider_.stopListening(us(h),_)}))}FN(t,u)}return a}function $y(t,e,n,r){const i=kh(t,r);if(i!=null){const s=Th(i),o=s.path,a=s.queryId,l=be(o,e),u=new wr(yh(a),l,n);return Ph(t,o,u)}else return[]}function LN(t,e,n,r){const i=kh(t,r);if(i){const s=Th(i),o=s.path,a=s.queryId,l=be(o,e),u=Q.fromObject(n),d=new fi(yh(a),l,u);return Ph(t,o,d)}else return[]}function Vc(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const v=be(h,i);s=s||bn(_,v),o=o||zn(_)});let a=t.syncPointTree_.get(i);a?(o=o||zn(a),s=s||bn(a,B())):(a=new Fy,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=b.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const y=bn(v,B());y&&(s=s.updateImmediateChild(_,y))}));const u=Wy(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=Pl(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=jN();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const d=Il(t.pendingWriteTree_,i);let c=kN(a,e,n,d,s,l);if(!u&&!o&&!r){const h=zy(a,e);c=c.concat(UN(t,e,h))}return c}function Tl(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=be(o,e),u=bn(a,l);if(u)return u});return Ay(i,e,s,n,!0)}function DN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=be(u,n);r=r||bn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||bn(i,B()):(i=new Fy,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Un(r,!0,!1):null,a=Il(t.pendingWriteTree_,e._path),l=jy(i,e,a,s?o.getNode():b.EMPTY_NODE,s);return vN(l)}function Pi(t,e){return By(e,t.syncPointTree_,null,Il(t.pendingWriteTree_,B()))}function By(t,e,n,r){if(F(t.path))return Vy(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=bn(i,B()));let s=[];const o=M(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=Oy(r,o);s=s.concat(By(a,l,u,d))}return i&&(s=s.concat(Sh(i,t,r,n))),s}}function Vy(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=bn(i,B()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Oy(r,o),d=t.operationForChild(o);d&&(s=s.concat(Vy(d,a,l,u)))}),i&&(s=s.concat(Sh(i,t,r,n))),s}function Hy(t,e){const n=e.query,r=Ws(t,n);return{hashFn:()=>(_N(e)||b.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?bN(t,n._path,r):ON(t,n._path);{const s=RT(i,n);return qa(t,n,null,s)}}}}function Ws(t,e){const n=Pl(e);return t.queryToTagMap.get(n)}function Pl(t){return t._path.toString()+"$"+t._queryIdentifier}function kh(t,e){return t.tagToQueryMap.get(e)}function Th(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new V(t.substr(0,e))}}function Ph(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=Il(t.pendingWriteTree_,e);return Sh(r,n,i,null)}function MN(t){return t.fold((e,n,r)=>{if(n&&zn(n))return[kl(n)];{let i=[];return n&&(i=Uy(n)),Se(r,(s,o)=>{i=i.concat(o)}),i}})}function us(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(NN())(t._repo,t._path):t}function FN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Pl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function jN(){return RN++}function UN(t,e,n){const r=e._path,i=Ws(t,e),s=Hy(t,n),o=t.listenProvider_.startListening(us(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)T(!zn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!F(u)&&d&&zn(d))return[kl(d).query];{let h=[];return d&&(h=h.concat(Uy(d).map(_=>_.query))),Se(c,(_,v)=>{h=h.concat(v)}),h}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(us(d),Ws(t,d))}}return o}/**
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
 */class Nh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Nh(n)}node(){return this.node_}}class Rh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new Rh(this.syncTree_,n)}node(){return Tl(this.syncTree_,this.path_)}}const zN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hm=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return WN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $N(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},WN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},$N=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Gy=function(t,e,n,r){return Ah(e,new Rh(n,t),r)},xh=function(t,e,n){return Ah(t,new Nh(e),n)};function Ah(t,e,n){const r=t.getPriority().val(),i=hm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=hm(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ve(a,ne(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ve(i))),o.forEachChild(Z,(a,l)=>{const u=Ah(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Oh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Nl(t,e){let n=e instanceof V?e:new V(e),r=t,i=M(n);for(;i!==null;){const s=gr(r.node.children,i)||{children:{},childCount:0};r=new Oh(i,r,s),n=q(n),i=M(n)}return r}function Tr(t){return t.node.value}function bh(t,e){t.node.value=e,Hc(t)}function Ky(t){return t.node.childCount>0}function BN(t){return Tr(t)===void 0&&!Ky(t)}function Rl(t,e){Se(t.node.children,(n,r)=>{e(new Oh(n,t,r))})}function qy(t,e,n,r){n&&e(t),Rl(t,i=>{qy(i,e,!0)})}function VN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function oo(t){return new V(t.parent===null?t.name:oo(t.parent)+"/"+t.name)}function Hc(t){t.parent!==null&&HN(t.parent,t.name,t)}function HN(t,e,n){const r=BN(n),i=St(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Hc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Hc(t))}/**
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
 */const GN=/[\[\].#$\/\u0000-\u001F\u007F]/,KN=/[\[\].#$\u0000-\u001F\u007F]/,Su=10*1024*1024,Lh=function(t){return typeof t=="string"&&t.length!==0&&!GN.test(t)},Qy=function(t){return typeof t=="string"&&t.length!==0&&!KN.test(t)},qN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Qy(t)},$s=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!El(t)||t&&typeof t=="object"&&St(t,".sv")},mi=function(t,e,n,r){r&&e===void 0||ao(li(t,"value"),e,n)},ao=function(t,e,n){const r=n instanceof V?new uP(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+rr(r));if(typeof e=="function")throw new Error(t+"contains a function "+rr(r)+" with contents = "+e.toString());if(El(e))throw new Error(t+"contains "+e.toString()+" "+rr(r));if(typeof e=="string"&&e.length>Su/3&&ml(e)>Su)throw new Error(t+"contains a string greater than "+Su+" utf8 bytes "+rr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Se(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Lh(o)))throw new Error(t+" contains an invalid key ("+o+") "+rr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cP(r,o),ao(t,a,r),dP(r)}),i&&s)throw new Error(t+' contains ".value" child '+rr(r)+" in addition to actual children.")}},QN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ms(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Lh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(lP);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&it(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Yy=function(t,e,n,r){const i=li(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Se(e,(o,a)=>{const l=new V(o);if(ao(i,a,re(n,l)),ch(l)===".priority"&&!$s(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),QN(i,s)},YN=function(t,e,n){if(El(e))throw new Error(li(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!$s(e))throw new Error(li(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Dh=function(t,e,n,r){if(!Qy(n))throw new Error(li(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},JN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Dh(t,e,n)},yn=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},XN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qN(n))throw new Error(li(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ZN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!dh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Jy(t,e,n){xl(t,n),Xy(t,r=>dh(r,e))}function Xe(t,e,n){xl(t,n),Xy(t,r=>it(r,e)||it(e,r))}function Xy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(eR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function eR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ss&&Ee("event: "+n.toString()),ki(r)}}}/**
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
 */const tR="repo_interrupt",nR=25;class rR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=za(),this.transactionQueueTree_=new Oh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iR(t,e,n){if(t.stats_=lh(t.repoInfo_),t.forceRestClient_||bT())t.server_=new Ua(t.repoInfo_,(r,i,s,o)=>{fm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>pm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Kt(t.repoInfo_,e,(r,i,s,o)=>{fm(t,r,i,s,o)},r=>{pm(t,r)},r=>{sR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=jT(t.repoInfo_,()=>new zP(t.stats_,t.server_)),t.infoData_=new DP,t.infoSyncTree_=new dm({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=so(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Mh(t,"connected",!1),t.serverSyncTree_=new dm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Xe(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Zy(t){const n=t.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function lo(t){return zN({timestamp:Zy(t)})}function fm(t,e,n,r,i){t.dataUpdateCount++;const s=new V(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Ra(n,u=>ne(u));o=LN(t.serverSyncTree_,s,l,i)}else{const l=ne(n);o=$y(t.serverSyncTree_,s,l,i)}else if(r){const l=Ra(n,u=>ne(u));o=AN(t.serverSyncTree_,s,l)}else{const l=ne(n);o=so(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=gi(t,s)),Xe(t.eventQueue_,a,o)}function pm(t,e){Mh(t,"connected",e),e===!1&&uR(t)}function sR(t,e){Se(e,(n,r)=>{Mh(t,n,r)})}function Mh(t,e,n){const r=new V("/.info/"+e),i=ne(n);t.infoData_.updateSnapshot(r,i);const s=so(t.infoSyncTree_,r,i);Xe(t.eventQueue_,r,s)}function Al(t){return t.nextWriteId_++}function oR(t,e,n){const r=DN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ne(i).withIndex(e._queryParams.getIndex());Vc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=so(t.serverSyncTree_,e._path,s);else{const a=Ws(t.serverSyncTree_,e);o=$y(t.serverSyncTree_,e._path,s,a)}return Xe(t.eventQueue_,e._path,o),qa(t.serverSyncTree_,e,n,null,!0),s},i=>(Ni(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function aR(t,e,n,r,i){Ni(t,"set",{path:e.toString(),value:n,priority:r});const s=lo(t),o=ne(n,r),a=Tl(t.serverSyncTree_,e),l=xh(o,a,s),u=Al(t),d=Ih(t.serverSyncTree_,e,l,u,!0);xl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const v=h==="ok";v||De("set at "+e+" failed: "+h);const y=vn(t.serverSyncTree_,u,!v);Xe(t.eventQueue_,e,y),Wn(t,i,h,_)});const c=jh(t,e);gi(t,c),Xe(t.eventQueue_,c,[])}function lR(t,e,n,r){Ni(t,"update",{path:e.toString(),value:n});let i=!0;const s=lo(t),o={};if(Se(n,(a,l)=>{i=!1,o[a]=Gy(re(e,a),ne(l),t.serverSyncTree_,s)}),i)Ee("update() called with empty data.  Don't do anything."),Wn(t,r,"ok",void 0);else{const a=Al(t),l=xN(t.serverSyncTree_,e,o,a);xl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||De("update at "+e+" failed: "+u);const h=vn(t.serverSyncTree_,a,!c),_=h.length>0?gi(t,e):e;Xe(t.eventQueue_,_,h),Wn(t,r,u,d)}),Se(n,u=>{const d=jh(t,re(e,u));gi(t,d)}),Xe(t.eventQueue_,e,[])}}function uR(t){Ni(t,"onDisconnectEvents");const e=lo(t),n=za();jc(t.onDisconnect_,B(),(i,s)=>{const o=Gy(i,s,t.serverSyncTree_,e);Ti(n,i,o)});let r=[];jc(n,B(),(i,s)=>{r=r.concat(so(t.serverSyncTree_,i,s));const o=jh(t,i);gi(t,o)}),t.onDisconnect_=za(),Xe(t.eventQueue_,B(),r)}function cR(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Fc(t.onDisconnect_,e),Wn(t,n,r,i)})}function mm(t,e,n,r){const i=ne(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Ti(t.onDisconnect_,e,i),Wn(t,r,s,o)})}function dR(t,e,n,r,i){const s=ne(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ti(t.onDisconnect_,e,s),Wn(t,i,o,a)})}function hR(t,e,n,r){if(Na(n)){Ee("onDisconnect().update() called with empty data.  Don't do anything."),Wn(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Se(n,(o,a)=>{const l=ne(a);Ti(t.onDisconnect_,re(e,o),l)}),Wn(t,r,i,s)})}function fR(t,e,n){let r;M(e._path)===".info"?r=Vc(t.infoSyncTree_,e,n):r=Vc(t.serverSyncTree_,e,n),Jy(t.eventQueue_,e._path,r)}function gm(t,e,n){let r;M(e._path)===".info"?r=qa(t.infoSyncTree_,e,n):r=qa(t.serverSyncTree_,e,n),Jy(t.eventQueue_,e._path,r)}function pR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(tR)}function Ni(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function Wn(t,e,n,r){e&&ki(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function mR(t,e,n,r,i,s){Ni(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:Jv(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Fh(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{ao("transaction failed: Data returned ",l,o.path),o.status=0;const u=Nl(t.transactionQueueTree_,e),d=Tr(u)||[];d.push(o),bh(u,d);let c;typeof l=="object"&&l!==null&&St(l,".priority")?(c=gr(l,".priority"),T($s(c),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):c=(Tl(t.serverSyncTree_,e)||b.EMPTY_NODE).getPriority().val();const h=lo(t),_=ne(l,c),v=xh(_,a,h);o.currentOutputSnapshotRaw=_,o.currentOutputSnapshotResolved=v,o.currentWriteId=Al(t);const y=Ih(t.serverSyncTree_,e,v,o.currentWriteId,o.applyLocally);Xe(t.eventQueue_,e,y),Ol(t,t.transactionQueueTree_)}}function Fh(t,e,n){return Tl(t.serverSyncTree_,e,n)||b.EMPTY_NODE}function Ol(t,e=t.transactionQueueTree_){if(e||bl(t,e),Tr(e)){const n=tw(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gR(t,oo(e),n)}else Ky(e)&&Rl(e,n=>{Ol(t,n)})}function gR(t,e,n){const r=n.map(u=>u.currentWriteId),i=Fh(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];T(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=be(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ni(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(vn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();bl(t,Nl(t.transactionQueueTree_,e)),Ol(t,t.transactionQueueTree_),Xe(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ki(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{De("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}gi(t,e)}},o)}function gi(t,e){const n=ew(t,e),r=oo(n),i=tw(t,n);return _R(t,i,r),r}function _R(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=be(n,l.path);let d=!1,c;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(vn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=nR)d=!0,c="maxretry",i=i.concat(vn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Fh(t,l.path,o);l.currentInputSnapshot=h;const _=e[a].update(h.val());if(_!==void 0){ao("transaction failed: Data returned ",_,l.path);let v=ne(_);typeof _=="object"&&_!=null&&St(_,".priority")||(v=v.updatePriority(h.getPriority()));const I=l.currentWriteId,m=lo(t),f=xh(v,h,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=f,l.currentWriteId=Al(t),o.splice(o.indexOf(I),1),i=i.concat(Ih(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(vn(t.serverSyncTree_,I,!0))}else d=!0,c="nodata",i=i.concat(vn(t.serverSyncTree_,l.currentWriteId,!0))}Xe(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}bl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ki(r[a]);Ol(t,t.transactionQueueTree_)}function ew(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&Tr(r)===void 0;)r=Nl(r,n),e=q(e),n=M(e);return r}function tw(t,e){const n=[];return nw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function nw(t,e,n){const r=Tr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Rl(e,i=>{nw(t,i,n)})}function bl(t,e){const n=Tr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,bh(e,n.length>0?n:void 0)}Rl(e,r=>{bl(t,r)})}function jh(t,e){const n=oo(ew(t,e)),r=Nl(t.transactionQueueTree_,e);return VN(r,i=>{Iu(t,i)}),Iu(t,r),qy(r,i=>{Iu(t,i)}),n}function Iu(t,e){const n=Tr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?bh(e,void 0):n.length=s+1,Xe(t.eventQueue_,oo(e),i);for(let o=0;o<r.length;o++)ki(r[o])}}/**
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
 */function vR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function yR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const _m=function(t,e){const n=wR(t),r=n.namespace;n.domain==="firebase.com"&&en(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||IT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new cy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new V(n.pathString)}},wR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=vR(t.substring(d,c)));const h=yR(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const vm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ER=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=vm.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=vm.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class CR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class SR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class rw{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class IR{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new ft;return cR(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){yn("OnDisconnect.remove",this._path);const e=new ft;return mm(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){yn("OnDisconnect.set",this._path),mi("OnDisconnect.set",e,this._path,!1);const n=new ft;return mm(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){yn("OnDisconnect.setWithPriority",this._path),mi("OnDisconnect.setWithPriority",e,this._path,!1),YN("OnDisconnect.setWithPriority",n);const r=new ft;return dR(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){yn("OnDisconnect.update",this._path),Yy("OnDisconnect.update",e,this._path);const n=new ft;return hR(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class qn{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:ch(this._path)}get ref(){return new Lt(this._repo,this._path)}get _queryIdentifier(){const e=tm(this._queryParams),n=oh(e);return n==="{}"?"default":n}get _queryObject(){return tm(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof qn))return!1;const n=this._repo===e._repo,r=dh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+aP(this._path)}}function kR(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Uh(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===cr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==yr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Fn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Z){if(e!=null&&!$s(e)||n!=null&&!$s(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(t.getIndex()instanceof ph||t.getIndex()===Ty,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function iw(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Lt extends qn{constructor(e,n){super(e,n,new gh,!1)}get parent(){const e=yy(this._path);return e===null?null:new Lt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _i{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new V(e),r=Bs(this.ref,e);return new _i(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new _i(i,Bs(this.ref,r),Z)))}hasChild(e){const n=new V(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jn(t,e){return t=oe(t),t._checkNotDeleted("ref"),e!==void 0?Bs(t._root,e):t._root}function Bs(t,e){return t=oe(t),M(t._path)===null?JN("child","path",e):Dh("child","path",e),new Lt(t._repo,re(t._path,e))}function TR(t){return t=oe(t),new IR(t._repo,t._path)}function Yx(t,e){t=oe(t),yn("push",t._path),mi("push",e,t._path,!0);const n=Zy(t._repo),r=ER(n),i=Bs(t,r),s=Bs(t,r);let o;return e!=null?o=cs(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Jx(t){return yn("remove",t._path),cs(t,null)}function cs(t,e){t=oe(t),yn("set",t._path),mi("set",e,t._path,!1);const n=new ft;return aR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function PR(t,e){Yy("update",e,t._path);const n=new ft;return lR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function NR(t){t=oe(t);const e=new rw(()=>{}),n=new Ll(e);return oR(t._repo,t,n).then(r=>new _i(r,new Lt(t._repo,t._path),t._queryParams.getIndex()))}class Ll{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new CR("value",this,new _i(e.snapshotNode,new Lt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new SR(this,e,n):null}matches(e){return e instanceof Ll?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function RR(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(d,c)=>{gm(t._repo,t,a),l(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new rw(n,s||void 0),a=new Ll(o);return fR(t._repo,t,a),()=>gm(t._repo,t,a)}function Gc(t,e,n,r){return RR(t,"value",e,n,r)}class uo{}class xR extends uo{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){mi("endAt",this._value,e._path,!0);const n=bP(e._queryParams,this._value,this._key);if(iw(n),Uh(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new qn(e._repo,e._path,n,e._orderByCalled)}}function Xx(t,e){return new xR(t,e)}class AR extends uo{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){mi("startAt",this._value,e._path,!0);const n=OP(e._queryParams,this._value,this._key);if(iw(n),Uh(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new qn(e._repo,e._path,n,e._orderByCalled)}}function Zx(t=null,e){return new AR(t,e)}class OR extends uo{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new qn(e._repo,e._path,xP(e._queryParams,this._limit),e._orderByCalled)}}function eA(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new OR(t)}class bR extends uo{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new qn(e._repo,e._path,AP(e._queryParams,this._limit),e._orderByCalled)}}function tA(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new bR(t)}class LR extends uo{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){kR(e,"orderByChild");const n=new V(this._path);if(F(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new ph(n),i=LP(e._queryParams,r);return Uh(i),new qn(e._repo,e._path,i,!0)}}function nA(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Dh("orderByChild","path",t),new LR(t)}function rA(t,...e){let n=oe(t);for(const r of e)n=r._apply(n);return n}CN(Lt);PN(Lt);/**
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
 */const DR="FIREBASE_DATABASE_EMULATOR_HOST",Kc={};let MR=!1;function FR(t,e,n,r){t.repoInfo_=new cy(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function jR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=_m(s,i),a=o.repoInfo,l;typeof process<"u"&&Fp&&(l=Fp[DR]),l?(s=`http://${l}?ns=${a.namespace}`,o=_m(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new DT(t.name,t.options,e);XN("Invalid Firebase Database URL",o),F(o.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const d=zR(a,t,u,new LT(t.name,n));return new WR(d,t)}function UR(t,e){const n=Kc[e];(!n||n[t.key]!==t)&&en(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pR(t),delete n[t.key]}function zR(t,e,n,r){let i=Kc[e.name];i||(i={},Kc[e.name]=i);let s=i[t.toURLString()];return s&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new rR(t,MR,n,r),i[t.toURLString()]=s,s}class WR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(UR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function $R(t=cv(),e){const n=qd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=NS("database");r&&BR(n,...r)}return n}function BR(t,e,n,r={}){t=oe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&en("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&en('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Zo(Zo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:RS(r.mockUserToken,t.app.options.projectId);s=new Zo(o)}FR(i,e,n,s)}/**
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
 */function VR(t){yT(Ii),ui(new _r("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return jR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),An(jp,Up,t),An(jp,Up,"esm2017")}/**
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
 */const HR={".sv":"timestamp"};function Lo(){return HR}/**
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
 */class GR{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function KR(t,e,n){var r;if(t=oe(t),yn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=void 0)!==null&&r!==void 0?r:!0,s=new ft,o=(l,u,d)=>{let c=null;l?s.reject(l):(c=new _i(d,new Lt(t._repo,t._path),Z),s.resolve(new GR(u,c)))},a=Gc(t,()=>{});return mR(t._repo,t._path,e,o,a,i),s.promise}Kt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};VR();var qR="firebase",QR="10.14.1";/**
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
 */An(qR,QR,"app");const ym={apiKey:"AIzaSyC_SzEe95tFFvPrVUWXwpTedeCKhMQOvrE",authDomain:"mylatestweb-fd3d7.firebaseapp.com",databaseURL:"https://mylatestweb-fd3d7-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mylatestweb-fd3d7",storageBucket:"mylatestweb-fd3d7.appspot.com",messagingSenderId:"1079484393919",appId:"1:1079484393919:web:798256eeab7f28ecacd90a"},YR={...ym,apiKey:"AIzaSyC_SzEe95tFFvPrVUWXwpTedeCKhMQOvrE",authDomain:"mylatestweb-fd3d7.firebaseapp.com",databaseURL:"https://mylatestweb-fd3d7-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mylatestweb-fd3d7",storageBucket:ym.storageBucket,messagingSenderId:"1079484393919",appId:"1:1079484393919:web:798256eeab7f28ecacd90a"},sw=uv(YR),Ke=_T(sw),Xn=$R(sw),Do=new jt;function iA(t){if(!t)return"";const e=Math.floor((Date.now()-t)/1e3);return e<60?"just now":e<3600?`${Math.floor(e/60)}m`:e<86400?`${Math.floor(e/3600)}h`:e<2592e3?`${Math.floor(e/86400)}d`:new Date(t).toLocaleDateString()}function sA(t=""){const e=t.match(/#[\p{L}0-9_]+/gu)||[],n=new Set,r=[];for(const i of e){const o=i.slice(1).toLowerCase();n.has(o)||(n.add(o),r.push(o))}return r}function oA(t=""){return t.split(/(\s+)/).map((e,n)=>e.startsWith("#")&&e.length>1?{type:"hashtag",value:e,key:n}:{type:"text",value:e,key:n})}const ow=t=>new URL(t).hostname.toLowerCase().replace(/^www\./,"");function aA(t){if(!t)return null;try{const e=new URL(t),n=ow(t);if(n==="youtube.com"||n==="m.youtube.com"||n==="music.youtube.com"){const r=e.searchParams.get("v");if(r)return`https://www.youtube.com/embed/${r}`;const i=e.pathname.match(/\/shorts\/([\w-]+)/);if(i)return`https://www.youtube.com/embed/${i[1]}`}if(n==="youtu.be"){const r=e.pathname.slice(1);if(r)return`https://www.youtube.com/embed/${r}`}if(n==="vimeo.com"){const r=e.pathname.split("/").filter(Boolean)[0];if(r)return`https://player.vimeo.com/video/${r}`}if(Dl(t)){const r=JR(t);return`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(r)}&show_text=false&width=560`}if(n==="instagram.com"){const r=e.pathname.match(/\/(p|reel|reels)\/([^/]+)/i);if(r)return`https://www.instagram.com/${r[1].toLowerCase()}/${r[2]}/embed`}if(n==="tiktok.com"){const r=e.pathname.match(/\/video\/(\d+)/i);if(r)return`https://www.tiktok.com/player/v1/${r[1]}?description=1&music_info=1`}if(n==="x.com"||n==="twitter.com"){const r=e.pathname.match(/\/status\/(\d+)/i);if(r)return`https://platform.twitter.com/embed/Tweet.html?id=${r[1]}`}if(n==="threads.net"||n==="threads.com"){const r=e.pathname.match(/(\/[@\w.-]+\/post\/[^/]+)/i);if(r)return`https://www.threads.net${r[1]}/embed`}if(n==="pinterest.com"||n==="pin.it"){const r=e.pathname.match(/\/pin\/(\d+)/i);if(r)return`https://assets.pinterest.com/ext/embed.html?id=${r[1]}`}if(n==="soundcloud.com")return`https://w.soundcloud.com/player/?url=${encodeURIComponent(`${e.origin}${e.pathname}`)}&color=%23ff5500&auto_play=false`;if(n==="open.spotify.com"){const r=e.pathname.match(/^\/(track|album|playlist|episode|show)\/([^/]+)/i);if(r)return`https://open.spotify.com/embed/${r[1]}/${r[2]}`}if(/\.(mp4|webm|ogg|mov|m4v)$/i.test(e.pathname))return t}catch{return null}return null}function JR(t=""){try{const e=new URL(t);return Dl(t)?`https://www.facebook.com${e.pathname}`:t}catch{return t}}function lA(t=""){try{const e=ow(t);if(e==="youtube.com"||e==="m.youtube.com"||e==="music.youtube.com"||e==="youtu.be")return"youtube";if(e==="vimeo.com")return"vimeo";if(Dl(t))return"facebook";if(e==="instagram.com")return"instagram";if(e==="tiktok.com")return"tiktok";if(e==="x.com"||e==="twitter.com")return"x";if(e==="threads.net"||e==="threads.com")return"threads";if(e==="pinterest.com"||e==="pin.it")return"pinterest";if(e==="soundcloud.com")return"soundcloud";if(e==="open.spotify.com")return"spotify";if(/\.(mp4|webm|ogg|mov|m4v)$/i.test(new URL(t).pathname))return"direct"}catch{return null}return null}function Dl(t=""){try{const e=new URL(t).hostname;return e==="facebook.com"||e.endsWith(".facebook.com")||e==="fb.watch"}catch{return!1}}function uA(t=""){try{return Dl(t)&&/\/(reel|reels|share\/r)\//i.test(new URL(t).pathname)}catch{return!1}}function cA(t){try{const e=new URL(t);return e.protocol==="https:"||e.protocol==="http:"}catch{return!1}}function XR(t=""){return t.trim().toLowerCase()}function ZR(t){return/^[a-zA-Z0-9_.]{3,20}$/.test(t)}function ex(){return typeof window<"u"&&window.CODEWITHSIAM_AUTH_API?window.CODEWITHSIAM_AUTH_API.replace(/\/$/,""):typeof window<"u"&&["localhost","127.0.0.1"].includes(window.location.hostname)?"http://localhost:3001":""}async function ku(t,e){const n=ex();if(!n)throw new Error("Email verification service is not configured.");let r;try{r=await fetch(`${n}/auth/register/${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch{throw new Error("Cannot reach the verification service. Please try again later.")}const i=await r.json().catch(()=>null);if(!r.ok)throw new Error((i==null?void 0:i.error)||"The verification request failed. Please try again.");return i||{}}const aw=w.createContext(null);function Ri(){return w.useContext(aw)}function tx({children:t}){const[e,n]=w.useState(null),[r,i]=w.useState(null),[s,o]=w.useState(!0),[a,l]=w.useState(""),[u,d]=w.useState("");w.useEffect(()=>{const C=s1(Ke,S=>{const A=(S==null?void 0:S.emailVerified)||(S==null?void 0:S.providerData.some(O=>O.providerId==="google.com"));n(A?S:null),o(!1),A||(i(null),S&&gu(Ke).catch(()=>{}))});return()=>{C()}},[]),w.useEffect(()=>{let C=!0;return b1(Ke).then(S=>{if(C&&(S!=null&&S.user))return c(S.user)}).catch(S=>{C&&l((S==null?void 0:S.code)||"auth/unknown")}),()=>{C=!1}},[]),w.useEffect(()=>{if(!e)return;const C=Jn(Xn,`users/${e.uid}`),S=setTimeout(()=>o(!1),600),A=Gc(C,O=>{i(O.val()),o(!1)});return()=>{clearTimeout(S),A()}},[e]),w.useEffect(()=>{if(!e)return;const C=Jn(Xn,`presence/${e.uid}`),S=Jn(Xn,".info/connected");return Gc(S,O=>{O.val()!==!1&&TR(C).set({state:"offline",lastChanged:Lo()}).then(()=>{cs(C,{state:"online",lastChanged:Lo()})})})},[e]);async function c(C,S={}){if(!C.emailVerified&&!C.providerData.some(rn=>rn.providerId==="google.com"))return;const A=Jn(Xn,`users/${C.uid}`);if((await NR(A)).exists())return;const K=(S.username||(C.email?C.email.split("@")[0]:`user${C.uid.slice(0,6)}`)).replace(/[^a-zA-Z0-9_.]/g,"").slice(0,20)||`user${C.uid.slice(0,6)}`;let W=K,Pe="",Ge=!1;for(let rn=0;rn<8;rn+=1){const Pr=rn===0?"":rn.toString(36);if(W=`${K.slice(0,20-Pr.length)}${Pr}`,Pe=XR(W),(await KR(Jn(Xn,`usernames/${Pe}`),R=>{if(R===null||R===C.uid)return C.uid})).committed){Ge=!0;break}}if(!Ge)throw new Error("A unique username could not be reserved. Please try again.");await cs(A,{uid:C.uid,fullName:S.fullName||C.displayName||W,username:W,usernameLower:finalKey,bio:"",photoURL:C.photoURL||"",coverURL:"",createdAt:Lo(),followersCount:0,followingCount:0,friendsCount:0,isPrivate:!1}),await cs(Jn(Xn,`users/${C.uid}/private/email`),C.email||"")}async function h({email:C,password:S,fullName:A,username:O}){if(S.length<8)throw new Error("Password must be at least 8 characters.");if(O&&!ZR(O))throw new Error('Username must be 3-20 characters: letters, numbers, "_" or "." only.');const K=C.trim().toLowerCase(),W=(A==null?void 0:A.trim())||K.split("@")[0];return await ku("start",{name:W,email:K,password:S}),{email:K}}async function _(C,S){return ku("verify",{email:C.trim().toLowerCase(),otp:S.trim()})}async function v(C){return ku("resend",{email:C.trim().toLowerCase()})}async function y(C,S){const A=await e1(Ke,C.trim().toLowerCase(),S);if(!A.user.emailVerified&&!A.user.providerData.some(O=>O.providerId==="google.com"))throw await gu(Ke),new Error("Please verify your email with the 6-digit code sent during registration.");return await c(A.user),A.user}function I(){var C;return typeof window<"u"&&(((C=window.matchMedia)==null?void 0:C.call(window,"(max-width: 768px)").matches)||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent))}async function m(){if(I())return await Rp(Ke,Do),null;let C;try{C=await k1(Ke,Do)}catch(S){if((S==null?void 0:S.code)==="auth/popup-blocked"||(S==null?void 0:S.code)==="auth/operation-not-supported-in-this-environment")return await Rp(Ke,Do),null;throw S}return await c(C.user),C.user}async function f(C){return Zk(Ke,C.trim().toLowerCase())}async function g(){if(!Ke.currentUser)throw new Error("Please sign in first.");const C=await T1(Ke.currentUser,Do);return await c(C.user),C.user}async function E(C,S){const A=Ke.currentUser;if(!(A!=null&&A.email))throw new Error("Please sign in with an email account first.");if(S.length<8)throw new Error("Password must be at least 8 characters.");if(A.providerData.some(K=>K.providerId==="password")){if(!C)throw new Error("Enter your current password.");const K=Mn.credential(A.email,C);await Jk(A,K),await t1(A,S)}else await Yk(A,Mn.credential(A.email,S))}async function P(){return e&&await PR(Jn(Xn,`presence/${e.uid}`),{state:"offline",lastChanged:Lo()}),gu(Ke)}const N={user:e,profile:r,loading:s,authError:a,clearAuthError:()=>l(""),authPrompt:u,requestSignIn:(C="Please sign in to continue.")=>d(C),dismissAuthPrompt:()=>d(""),signup:h,verifySignupCode:_,resendSignupCode:v,login:y,loginWithGoogle:m,resetPassword:f,linkGoogleAccount:g,changeAccountPassword:E,logout:P};return p.jsx(aw.Provider,{value:N,children:t})}const lw=w.createContext(null);function dA(){return w.useContext(lw)}function nx({children:t}){const[e,n]=w.useState(()=>{const i=localStorage.getItem("mc-theme");return i||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});w.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("mc-theme",e)},[e]);const r=()=>n(i=>i==="dark"?"light":"dark");return p.jsx(lw.Provider,{value:{theme:e,setTheme:n,toggleTheme:r},children:t})}const uw=w.createContext(null);function rx(){return w.useContext(uw)}let ix=0;function sx({children:t}){const[e,n]=w.useState([]),r=w.useCallback((i,s="info")=>{const o=++ix;n(a=>[...a,{id:o,message:i,type:s}]),setTimeout(()=>{n(a=>a.filter(l=>l.id!==o))},3500)},[]);return p.jsxs(uw.Provider,{value:{showToast:r},children:[t,p.jsx("div",{className:"toast-stack",children:e.map(i=>p.jsx("div",{className:`toast toast-${i.type}`,children:i.message},i.id))})]})}function cw({label:t="Loading...",full:e=!1}){return p.jsxs("div",{className:e?"spinner-full":"spinner-inline",children:[p.jsx("div",{className:"spinner","aria-hidden":"true"}),p.jsx("span",{className:"spinner-label",children:t})]})}function ox({children:t}){const{user:e,loading:n}=Ri(),r=At();if(n)return p.jsx(cw,{full:!0,label:"Checking session..."});if(!e){const i=`${r.pathname}${r.search}${r.hash}`;return p.jsx("div",{className:"auth-page",children:p.jsxs("section",{className:"auth-card","aria-labelledby":"protected-route-title",children:[p.jsx("h1",{id:"protected-route-title",children:"Sign in to continue"}),p.jsx("p",{className:"muted",children:"This community feature is available to members. Your current page will be restored after sign-in."}),p.jsxs("div",{className:"auth-links",children:[p.jsx(xs,{className:"btn btn-primary",to:"/login",state:{returnTo:i},children:"Sign In"}),p.jsx(xs,{className:"btn btn-ghost",to:"/signup",state:{returnTo:i},children:"Create Account"})]})]})})}return t||p.jsx(Y_,{})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function lx(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:ax(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=t=>{let e="",n=!1;for(const r of t){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=t=>{const e=ux(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Tu(t){return t!=null}function dx(t,e={}){var h,_;const n=e.attributeNames??{},r=v=>n[v]??v,i=t.size??t.width??Zn.width,s=t.size??t.height??Zn.height,o=((h=t.aliases)==null?void 0:h.filter(v=>typeof v=="string"&&v.trim()!=="").map(v=>`lucide-${v}`))??[],a=[...t.name?[`lucide-${t.name}`]:[],...o],l=((_=e.className)==null?void 0:_.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?qc(...l):qc("lucide",...a,...l),d=e.absoluteStrokeWidth?Number(e.strokeWidth??Zn["stroke-width"])*Number(t.size??t.width??Zn.width)/Number(e.size??e.width??Zn.width):e.strokeWidth??Zn["stroke-width"];return["svg",{...Object.entries(Zn).reduce((v,[y,I])=>(v[r(y)]=I,v),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Tu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Tu(e.width)&&{[r("width")]:e.width},..."height"in e&&Tu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:d,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(v=>{const[y,I,m]=v,f=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...I}:I;return m?[y,f,m]:[y,f]})]}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function hx(t,e={}){return dx(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},px=w.createContext({}),mx=()=>w.useContext(px),gx=w.forwardRef(({color:t,size:e,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:s,nonScalingStroke:o,className:a="",children:l,iconNode:u=[],icon:d={node:u,aliases:[],size:24},...c},h)=>{const{size:_=24,strokeWidth:v=2,absoluteStrokeWidth:y=!1,nonScalingStroke:I=!1,color:m="currentColor",className:f=""}=mx()??{},g=!!l||fx(c),[E,P,N=[]]=hx(d,{color:t??m,width:n??e??_,height:r??e??_,strokeWidth:i??v,absoluteStrokeWidth:s??y,nonScalingStroke:o??I,className:qc(f,a),hasA11yProp:g,attributes:c});return w.createElement(E,{ref:h,...P},[...N.map(([C,S])=>w.createElement(C,S)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ae(t,e=[],n=[]){const r=typeof t=="string"?lx(t,e,n):t,i=w.forwardRef(({className:s,...o},a)=>w.createElement(gx,{ref:a,icon:r,className:s,...o}));return r.name&&(i.displayName=cx(r.name)),i}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};dw.node;const zh=ae(dw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};hw.node;const _x=ae(hw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw={name:"bookmark",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]};fw.node;const vx=ae(fw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};pw.node;const yx=ae(pw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw={name:"circle-plus",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],aliases:["plus-circle"]};mw.node;const gw=ae(mw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w={name:"clock-3",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]]};_w.node;const wx=ae(_w);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw={name:"gamepad-2",size:24,node:[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]};vw.node;const Ex=ae(vw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw={name:"grid-2x2",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],aliases:["grid-2-x-2"]};yw.node;const Cx=ae(yw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};ww.node;const Wh=ae(ww);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew={name:"megaphone",size:24,node:[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]]};Ew.node;const Sx=ae(Ew);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};Cw.node;const Ix=ae(Cw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw={name:"message-circle",size:24,node:[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]};Sw.node;const kx=ae(Sw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw={name:"message-square-text",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M7 11h10",key:"1twpyw"}],["path",{d:"M7 15h6",key:"d9of3u"}],["path",{d:"M7 7h8",key:"af5zfr"}]]};Iw.node;const wm=ae(Iw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};kw.node;const Qa=ae(kw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Tw.node;const Tx=ae(Tw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Pw.node;const Px=ae(Pw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw={name:"square-play",size:24,node:[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}]],aliases:["play-square"]};Nw.node;const Nx=ae(Nw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]};Rw.node;const xw=ae(Rw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw={name:"user-round",size:24,node:[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],aliases:["user-2"]};Aw.node;const Ow=ae(Aw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};bw.node;const Lw=ae(bw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};Dw.node;const Mw=ae(Dw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw={name:"video",size:24,node:[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]};Fw.node;const Rx=ae(Fw);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};jw.node;const xx=ae(jw),kt={size:19,strokeWidth:1.8,"aria-hidden":!0};function Ax({onMenu:t}){const[e,n]=w.useState(""),[r,i]=w.useState(!1),s=Ys(),{profile:o}=Ri();function a(l){l.preventDefault(),e.trim()&&s(`/search?q=${encodeURIComponent(e.trim())}`)}return p.jsxs("header",{className:"navbar",children:[p.jsx("button",{className:"mobile-menu-btn icon-btn",type:"button",onClick:t,"aria-label":"Open menu",children:p.jsx(Ix,{...kt})}),p.jsx("div",{className:"navbar-brand",onClick:()=>s("/"),"aria-label":"Go home",children:p.jsx("span",{className:"brand-mark",children:"C"})}),p.jsxs("form",{className:`navbar-search${r?" is-mobile-open":""}`,onSubmit:l=>{a(l),i(!1)},children:[p.jsx(Qa,{className:"navbar-search-icon",size:17,"aria-hidden":"true"}),p.jsx("input",{value:e,onChange:l=>n(l.target.value),placeholder:"Search Facebook","aria-label":"Search"})]}),p.jsxs("nav",{className:"navbar-quick-actions","aria-label":"Community navigation",children:[p.jsx("button",{className:"quick-action active",type:"button","aria-label":"Home",onClick:()=>s("/"),children:p.jsx(Wh,{...kt})}),p.jsx("button",{className:"quick-action",type:"button","aria-label":"Watch",onClick:()=>s("/search?view=videos"),children:p.jsx(Nx,{...kt})}),p.jsx("button",{className:"quick-action",type:"button","aria-label":"Marketplace",onClick:()=>s("/search?view=marketplace"),children:p.jsx(xw,{...kt})}),p.jsx("button",{className:"quick-action",type:"button","aria-label":"Groups",onClick:()=>s("/search?view=groups"),children:p.jsx(Mw,{...kt})}),p.jsx("button",{className:"quick-action",type:"button","aria-label":"Messenger",onClick:()=>s("/messenger"),children:p.jsx(wm,{...kt})})]}),p.jsxs("div",{className:"navbar-actions",children:[p.jsx("button",{className:"icon-btn ghost-btn",type:"button","aria-label":"Apps",children:p.jsx(Cx,{...kt})}),p.jsx("button",{className:"icon-btn ghost-btn",type:"button","aria-label":"Messages",onClick:()=>s("/messenger"),children:p.jsx(wm,{...kt})}),p.jsx("button",{className:"icon-btn ghost-btn",type:"button","aria-label":"Notifications",children:p.jsx(zh,{...kt})}),p.jsx("button",{className:"avatar-action",type:"button","aria-label":"Profile",onClick:()=>s("/profile"),children:p.jsx("img",{className:"navbar-avatar",src:(o==null?void 0:o.photoURL)||"/default-avatar.png",alt:"Profile"})}),p.jsx("button",{className:"mobile-search-btn icon-btn",type:"button",onClick:()=>i(!0),title:"Search","aria-label":"Open search",children:p.jsx(Qa,{...kt})})]})]})}const Ox=[{to:"/",label:"Home",icon:Wh},{to:"/search?view=friends",label:"Friends",icon:Ow},{to:"/search?view=saved",label:"Saved",icon:vx},{to:"/search",label:"Search",icon:Qa},{to:"/create",label:"Create Post",icon:gw},{to:"/messenger",label:"Messenger",icon:kx},{to:"/notifications",label:"Notifications",icon:zh}],xr={size:20,strokeWidth:1.5,"aria-hidden":!0};function bx({mobileOpen:t=!1,onClose:e}){var s;const{user:n,profile:r}=Ri(),i=((s=n==null?void 0:n.email)==null?void 0:s.toLowerCase())==="mdsiamahmmedloselovestroy@gmail.com";return p.jsxs(p.Fragment,{children:[t&&p.jsx("button",{className:"sidebar-backdrop",type:"button","aria-label":"Close menu",onClick:e}),p.jsxs("nav",{className:`sidebar${t?" is-open":""}`,children:[p.jsxs("div",{className:"sidebar-mobile-head",children:[p.jsx("strong",{children:"Menu"}),p.jsx("button",{className:"icon-btn",type:"button",onClick:e,"aria-label":"Close menu",children:p.jsx(xx,{...xr})})]}),Ox.map(o=>p.jsxs(Ft,{to:o.to,onClick:e,className:({isActive:a})=>`sidebar-link${a?" active":""}`,children:[p.jsx(o.icon,{className:"sidebar-icon",...xr}),p.jsx("span",{children:o.label})]},o.to)),p.jsx("div",{className:"sidebar-section-divider",children:p.jsx("span",{children:"More community"})}),[{to:"/search?view=memories",label:"Memories",icon:wx},{to:"/search?view=groups",label:"Groups",icon:Mw},{to:"/search?view=reels",label:"Reels",icon:Rx},{to:"/search?view=marketplace",label:"Marketplace",icon:xw},{to:"/search?view=feeds",label:"Feeds",icon:_x},{to:"/search?view=gaming",label:"Gaming",icon:Ex}].map(o=>p.jsxs(Ft,{to:o.to,onClick:e,className:({isActive:a})=>`sidebar-link sidebar-more-link${a?" active":""}`,children:[p.jsx(o.icon,{className:"sidebar-icon",...xr}),p.jsx("span",{children:o.label})]},o.to)),r&&p.jsxs(Ft,{to:`/profile/${r.uid}`,onClick:e,className:({isActive:o})=>`sidebar-link${o?" active":""}`,children:[p.jsx(Lw,{className:"sidebar-icon",...xr}),p.jsx("span",{children:"Profile"})]}),i&&p.jsxs("a",{className:"sidebar-link",href:"/admin",children:[p.jsx(Px,{className:"sidebar-icon",...xr}),p.jsx("span",{children:"Admin Panel"})]}),p.jsxs(Ft,{to:"/settings",onClick:e,className:({isActive:o})=>`sidebar-link${o?" active":""}`,children:[p.jsx(Tx,{className:"sidebar-icon",...xr}),p.jsx("span",{children:"Settings"})]})]})]})}const $i={size:20,strokeWidth:1.75,"aria-hidden":!0};function Lx(){const{profile:t}=Ri();return p.jsxs("nav",{className:"bottom-nav",children:[p.jsx(Ft,{to:"/",end:!0,title:"Home","aria-label":"Home",className:({isActive:e})=>e?"active":"",children:p.jsx(Wh,{...$i})}),p.jsx(Ft,{to:"/search",title:"Search","aria-label":"Search",className:({isActive:e})=>e?"active":"",children:p.jsx(Qa,{...$i})}),p.jsx(Ft,{to:"/create",title:"Create Post","aria-label":"Create Post",className:({isActive:e})=>e?"active":"",children:p.jsx(gw,{...$i})}),p.jsx(Ft,{to:"/notifications",title:"Notifications","aria-label":"Notifications",className:({isActive:e})=>e?"active":"",children:p.jsx(zh,{...$i})}),p.jsx(Ft,{to:t?`/profile/${t.uid}`:"/login",title:"Profile","aria-label":"Profile",className:({isActive:e})=>e?"active":"",children:p.jsx(Lw,{...$i})})]})}function Dx(){const[t,e]=w.useState(!1),{pathname:n}=At(),r=n.startsWith("/messenger");return p.jsxs("div",{className:"app-shell",children:[p.jsx(Ax,{onMenu:()=>e(!0)}),p.jsxs("div",{className:`app-body${r?" messenger-layout":""}`,children:[p.jsx(bx,{mobileOpen:t,onClose:()=>e(!1)}),p.jsx("main",{className:"app-main",children:p.jsx(Y_,{})}),!r&&p.jsx("div",{className:"app-right-rail trending-rail",children:p.jsxs("div",{className:"rail-stack",children:[p.jsxs("section",{className:"rail-card friend-requests-card",children:[p.jsxs("div",{className:"rail-card-heading",children:[p.jsx("h4",{children:"Friend Requests"}),p.jsx("a",{href:"/community/search?view=friends",children:"See all"})]}),p.jsxs("div",{className:"friend-request-empty",children:[p.jsx("span",{children:p.jsx(Ow,{size:18})}),p.jsx("p",{children:"No new requests right now."})]})]}),p.jsxs("section",{className:"rail-card sponsored-card",children:[p.jsxs("div",{className:"rail-card-heading",children:[p.jsx("span",{className:"rail-eyebrow",children:"COMMUNITY PICKS"}),p.jsx(Sx,{size:16})]}),p.jsxs("div",{className:"sponsored-placeholder",children:[p.jsx("span",{className:"sponsored-placeholder-image"}),p.jsxs("div",{children:[p.jsx("strong",{children:"Build your next idea in public"}),p.jsx("small",{children:"CodeWithSiam community"})]}),p.jsx(yx,{size:16})]})]}),p.jsxs("section",{className:"rail-card",children:[p.jsx("span",{className:"rail-eyebrow",children:"DISCOVER"}),p.jsx("h4",{children:"Trending hashtags"}),p.jsx("p",{className:"muted",children:"Follow the conversations shaping your community."}),p.jsxs("div",{className:"rail-tags",children:[p.jsx("span",{children:"#Python"}),p.jsx("span",{children:"#Programming"}),p.jsx("span",{children:"#AI"}),p.jsx("span",{children:"#MyCommunity"})]})]}),p.jsxs("section",{className:"rail-card",children:[p.jsx("span",{className:"rail-eyebrow",children:"PEOPLE"}),p.jsx("h4",{children:"People you may know"}),p.jsx("p",{className:"muted",children:"Discover learners and builders with similar interests."}),p.jsx("button",{className:"rail-action",type:"button",children:"Find people"})]}),p.jsxs("section",{className:"rail-card",children:[p.jsx("span",{className:"rail-eyebrow",children:"YOUR SPACE"}),p.jsx("h4",{children:"Suggested groups"}),p.jsx("p",{className:"muted",children:"Join focused conversations around code, AI, and projects."}),p.jsx("button",{className:"rail-action",type:"button",children:"Explore groups"})]})]})})]}),p.jsx(Lx,{})]})}function Mx(){const{authPrompt:t,dismissAuthPrompt:e}=Ri(),n=At(),r=Ys();if(!t)return null;function i(s){const o=`${n.pathname}${n.search}${n.hash}`;e(),r(s,{state:{returnTo:o}})}return p.jsx("div",{className:"modal-overlay",role:"presentation",onClick:e,children:p.jsxs("section",{className:"modal-card",role:"dialog","aria-modal":"true","aria-labelledby":"auth-prompt-title",onClick:s=>s.stopPropagation(),children:[p.jsx("h2",{id:"auth-prompt-title",children:"Sign in to continue"}),p.jsx("p",{children:t}),p.jsxs("div",{className:"auth-links",children:[p.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>i("/login"),children:"Sign In"}),p.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>i("/signup"),children:"Create Account"}),p.jsx("button",{className:"link-btn",type:"button",onClick:e,children:"Continue browsing"})]})]})})}function Fx(){var K;const{user:t,login:e,loginWithGoogle:n,verifySignupCode:r,resendSignupCode:i,authError:s,clearAuthError:o}=Ri(),{showToast:a}=rx(),l=Ys(),u=At(),[d,c]=w.useState(((K=u.state)==null?void 0:K.email)||""),[h,_]=w.useState(""),[v,y]=w.useState(!1),[I,m]=w.useState(""),[f,g]=w.useState(!1),[E,P]=w.useState(""),[N,C]=w.useState(0);w.useEffect(()=>{var W;t&&l(((W=u.state)==null?void 0:W.returnTo)||"/",{replace:!0})},[u.state,l,t]),w.useEffect(()=>{var W;(W=u.state)!=null&&W.notice&&m(u.state.notice)},[u.state]),w.useEffect(()=>{if(!f||N<=0)return;const W=setTimeout(()=>C(Pe=>Pe-1),1e3);return()=>clearTimeout(W)},[N,f]),w.useEffect(()=>{s&&(a(Mo({code:s}),"error"),o())},[s,o,a]);async function S(W){var Pe;W.preventDefault(),y(!0),m(f?"Verifying email...":"Signing in...");try{f&&(await r(d,E),g(!1),P(""),m("Email verified. Signing in...")),await e(d,h),l(((Pe=u.state)==null?void 0:Pe.returnTo)||"/",{replace:!0})}catch(Ge){(Ge==null?void 0:Ge.code)==="auth/user-disabled"||/verify your email with the 6-digit code/i.test((Ge==null?void 0:Ge.message)||"")?(g(!0),m("This account is awaiting email verification. Request its 6-digit code below.")):(a(Mo(Ge),"error"),m(""))}finally{y(!1)}}async function A(){y(!0);try{await i(d),C(60),m("A new verification code was sent.")}catch(W){a(Mo(W),"error")}finally{y(!1)}}async function O(){var W;y(!0),m("Connecting to Google...");try{await n()&&l(((W=u.state)==null?void 0:W.returnTo)||"/",{replace:!0})}catch(Pe){a(Mo(Pe),"error"),m("")}finally{y(!1)}}return p.jsx("div",{className:"auth-page",children:p.jsxs("form",{className:"auth-card",onSubmit:S,children:[p.jsx("h1",{children:"My Community"}),p.jsx("p",{className:"muted",children:"Log in to continue"}),p.jsx("label",{className:"auth-field-label",htmlFor:"login-user-id",children:"User ID"}),p.jsx("input",{id:"login-user-id",type:"email",placeholder:"Enter your email",value:d,required:!0,autoComplete:"email",onChange:W=>c(W.target.value)}),p.jsx("label",{className:"auth-field-label",htmlFor:"login-password",children:"Password"}),p.jsx("input",{id:"login-password",type:"password",placeholder:"Enter your password",value:h,required:!0,autoComplete:"current-password",onChange:W=>_(W.target.value)}),p.jsx("button",{className:"btn btn-primary",type:"submit",disabled:v,children:"Log In"}),f&&p.jsxs(p.Fragment,{children:[p.jsx("label",{className:"auth-field-label",htmlFor:"login-otp",children:"6-digit verification code"}),p.jsx("input",{id:"login-otp",type:"text",inputMode:"numeric",autoComplete:"one-time-code",pattern:"[0-9]{6}",maxLength:6,value:E,onChange:W=>P(W.target.value.replace(/\D/g,"").slice(0,6))}),p.jsx("button",{className:"btn btn-primary",type:"submit",disabled:v||E.length!==6,children:"Verify and Sign In"}),p.jsx("button",{className:"link-btn",type:"button",disabled:v||N>0,onClick:A,children:N>0?`Resend code in ${N}s`:"Resend verification code"})]}),p.jsx("button",{type:"button",className:"btn btn-google",onClick:O,disabled:v,children:"Continue with Google"}),I&&p.jsx("p",{className:"muted small auth-status",role:"status","aria-live":"polite",children:I}),p.jsxs("div",{className:"auth-links auth-links-stack",children:[p.jsx(xs,{to:"/forgot-password",children:"Forgot password?"}),p.jsxs("span",{children:["Don't have an account? ",p.jsx(xs,{to:"/signup",children:"Create an account"})]})]})]})})}function Mo(t){const e=(t==null?void 0:t.code)||"",n={"auth/invalid-credential":"Incorrect email or password. If you use Google, continue with Google.","auth/user-not-found":"No account found with that email.","auth/wrong-password":"Incorrect email or password.","auth/operation-not-allowed":"Email/password login is not enabled in Firebase Authentication.","auth/too-many-requests":"Too many attempts. Please wait and try again.","auth/user-disabled":"This account is awaiting email verification. Request a code to continue.","auth/email-already-in-use":"This email is already registered. Please sign in.","auth/weak-password":"Password must be at least 8 characters.","auth/popup-closed-by-user":"Google sign-in was cancelled.","auth/popup-blocked":"Google sign-in was blocked. Please allow popups and try again.","auth/cancelled-popup-request":"Another Google sign-in is already in progress.","auth/unauthorized-domain":"Google sign-in is not enabled for this website domain.","auth/network-request-failed":"Network connection failed. Check your connection and try again.","auth/account-exists-with-different-credential":"This email already belongs to another sign-in method. Use that method to access the existing account.","auth/operation-not-supported-in-this-environment":"Google sign-in is unavailable in this browser. Please try again.","auth/redirect-cancelled-by-user":"Google sign-in was cancelled."};return n[e]?n[e]:!e&&/^(This (email|account)|Please |Password |Enter |Cannot reach |Could not |The verification)/.test((t==null?void 0:t.message)||"")||!e&&/^(Passwords do not match\.|Password must be at least 8 characters\.|Please verify your email before signing in\..*)$/.test((t==null?void 0:t.message)||"")?t.message:"Something went wrong. Please try again."}const jx=w.lazy(()=>Ct(()=>import("./Signup-DpIt50_r.js"),[])),Ux=w.lazy(()=>Ct(()=>import("./ForgotPassword-B6iBVW2n.js"),[])),Em=w.lazy(()=>Ct(()=>import("./Home-BBAQzahJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),zx=w.lazy(()=>Ct(()=>import("./Profile-BBvXPXBK.js"),__vite__mapDeps([8,2,7,6,3,5]))),Cm=w.lazy(()=>Ct(()=>import("./Messenger-BzKX2eCo.js"),__vite__mapDeps([9,2,7,4,5]))),Sm=w.lazy(()=>Ct(()=>import("./Notifications-DDl0dLIm.js"),[])),Wx=w.lazy(()=>Ct(()=>import("./Search-DIh1s1UI.js"),__vite__mapDeps([10,6,7,3,5]))),$x=w.lazy(()=>Ct(()=>import("./Hashtag-DZepCyRv.js"),__vite__mapDeps([11,6,7,3,5]))),Bx=w.lazy(()=>Ct(()=>import("./Settings-BLiC4GWR.js"),__vite__mapDeps([12,2]))),Vx=w.lazy(()=>Ct(()=>import("./PostPage-DsAO5B9c.js"),__vite__mapDeps([13,6,7,3,5]))),Hx=w.lazy(()=>Ct(()=>import("./CreatePostPage-CYpFST7O.js"),__vite__mapDeps([14,1,2,3,4,5])));function Ue({children:t}){return p.jsx(w.Suspense,{fallback:p.jsx(cw,{full:!0,label:"Loading Community..."}),children:t})}function Gx(){return p.jsx(nx,{children:p.jsx(sx,{children:p.jsx(tx,{children:p.jsxs(pS,{basename:"/community",children:[p.jsxs(sS,{children:[p.jsx(_e,{path:"/login",element:p.jsx(Fx,{})}),p.jsx(_e,{path:"/signup",element:p.jsx(Ue,{children:p.jsx(jx,{})})}),p.jsx(_e,{path:"/forgot-password",element:p.jsx(Ue,{children:p.jsx(Ux,{})})}),p.jsxs(_e,{element:p.jsx(Dx,{}),children:[p.jsx(_e,{path:"/",element:p.jsx(Ue,{children:p.jsx(Em,{})})}),p.jsx(_e,{path:"/index.html",element:p.jsx(Ue,{children:p.jsx(Em,{})})}),p.jsx(_e,{path:"/post/:postId",element:p.jsx(Ue,{children:p.jsx(Vx,{})})}),p.jsxs(_e,{element:p.jsx(ox,{}),children:[p.jsx(_e,{path:"/profile/:uid",element:p.jsx(Ue,{children:p.jsx(zx,{})})}),p.jsx(_e,{path:"/messenger",element:p.jsx(Ue,{children:p.jsx(Cm,{})})}),p.jsx(_e,{path:"/messenger/:convId",element:p.jsx(Ue,{children:p.jsx(Cm,{})})}),p.jsx(_e,{path:"/notifications",element:p.jsx(Ue,{children:p.jsx(Sm,{})})}),p.jsx(_e,{path:"/message-notifications",element:p.jsx(Ue,{children:p.jsx(Sm,{kind:"messages"})})}),p.jsx(_e,{path:"/search",element:p.jsx(Ue,{children:p.jsx(Wx,{})})}),p.jsx(_e,{path:"/hashtag/:tag",element:p.jsx(Ue,{children:p.jsx($x,{})})}),p.jsx(_e,{path:"/settings",element:p.jsx(Ue,{children:p.jsx(Bx,{})})}),p.jsx(_e,{path:"/create",element:p.jsx(Ue,{children:p.jsx(Hx,{})})})]})]})]}),p.jsx(Mx,{})]})})})})}Pu.createRoot(document.getElementById("root")).render(p.jsx(Lm.StrictMode,{children:p.jsx(Gx,{})}));export{Zx as A,zh as B,vx as C,Tx as D,qx as E,dA as F,aA as G,lA as H,uA as I,oA as J,wm as K,cw as L,kx as M,cA as N,sA as O,Qd as P,JR as Q,Qa as S,Ow as U,Rx as V,xx as X,Qx as _,rx as a,Ys as b,At as c,xs as d,ae as e,Mo as f,Jn as g,NR as h,Xn as i,p as j,nA as k,tA as l,Jx as m,KR as n,Gc as o,Lo as p,rA as q,w as r,cs as s,Kx as t,Ri as u,PR as v,iA as w,Yx as x,eA as y,Xx as z};
