const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BSX9EWP0.js","assets/CreatePost-B1NCTjJ4.js","assets/client-Bc7vqAhK.js","assets/FacebookEmbed-U7lNNvve.js","assets/PostCard-CzgXuSij.js","assets/sparkles-BKH-WuhR.js","assets/Profile-DOXKXBE5.js","assets/Messenger-Div9VF3h.js","assets/Search-DkxVEFly.js","assets/Hashtag-BjGroHq3.js","assets/Settings-xpMa7ekq.js","assets/PostPage-BmkERFbb.js","assets/CreatePostPage-Bq0Zkyj7.js"])))=>i.map(i=>d[i]);
function G1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function K1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var A0={exports:{}},Th={},P0={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dl=Symbol.for("react.element"),Q1=Symbol.for("react.portal"),Y1=Symbol.for("react.fragment"),X1=Symbol.for("react.strict_mode"),J1=Symbol.for("react.profiler"),Z1=Symbol.for("react.provider"),eA=Symbol.for("react.context"),tA=Symbol.for("react.forward_ref"),nA=Symbol.for("react.suspense"),rA=Symbol.for("react.memo"),iA=Symbol.for("react.lazy"),sv=Symbol.iterator;function sA(t){return t===null||typeof t!="object"?null:(t=sv&&t[sv]||t["@@iterator"],typeof t=="function"?t:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x0=Object.assign,b0={};function Co(t,e,n){this.props=t,this.context=e,this.refs=b0,this.updater=n||N0}Co.prototype.isReactComponent={};Co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D0(){}D0.prototype=Co.prototype;function Nm(t,e,n){this.props=t,this.context=e,this.refs=b0,this.updater=n||N0}var xm=Nm.prototype=new D0;xm.constructor=Nm;x0(xm,Co.prototype);xm.isPureReactComponent=!0;var ov=Array.isArray,O0=Object.prototype.hasOwnProperty,bm={current:null},L0={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)O0.call(e,r)&&!L0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Dl,type:t,key:s,ref:o,props:i,_owner:bm.current}}function oA(t,e){return{$$typeof:Dl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dl}function aA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var av=/\/+/g;function Kd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?aA(""+t.key):e.toString(36)}function Gu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Dl:case Q1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Kd(o,0):r,ov(i)?(n="",t!=null&&(n=t.replace(av,"$&/")+"/"),Gu(i,e,n,"",function(c){return c})):i!=null&&(Dm(i)&&(i=oA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(av,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ov(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Kd(s,a);o+=Gu(s,e,n,u,i)}else if(u=sA(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Kd(s,a++),o+=Gu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wu(t,e,n){if(t==null)return t;var r=[],i=0;return Gu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},Ku={transition:null},uA={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:Ku,ReactCurrentOwner:bm};function V0(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:wu,forEach:function(t,e,n){wu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wu(t,function(){e++}),e},toArray:function(t){return wu(t,function(e){return e})||[]},only:function(t){if(!Dm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Co;ue.Fragment=Y1;ue.Profiler=J1;ue.PureComponent=Nm;ue.StrictMode=X1;ue.Suspense=nA;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uA;ue.act=V0;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=x0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)O0.call(e,u)&&!L0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Dl,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:eA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Z1,_context:t},t.Consumer=t};ue.createElement=M0;ue.createFactory=function(t){var e=M0.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:tA,render:t}};ue.isValidElement=Dm;ue.lazy=function(t){return{$$typeof:iA,_payload:{_status:-1,_result:t},_init:lA}};ue.memo=function(t,e){return{$$typeof:rA,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Ku.transition;Ku.transition={};try{t()}finally{Ku.transition=e}};ue.unstable_act=V0;ue.useCallback=function(t,e){return Mt.current.useCallback(t,e)};ue.useContext=function(t){return Mt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Mt.current.useEffect(t,e)};ue.useId=function(){return Mt.current.useId()};ue.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Mt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};ue.useRef=function(t){return Mt.current.useRef(t)};ue.useState=function(t){return Mt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Mt.current.useTransition()};ue.version="18.3.1";P0.exports=ue;var D=P0.exports;const F0=K1(D),cA=G1({__proto__:null,default:F0},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hA=D,dA=Symbol.for("react.element"),fA=Symbol.for("react.fragment"),pA=Object.prototype.hasOwnProperty,mA=hA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gA={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pA.call(e,r)&&!gA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dA,type:t,key:s,ref:o,props:i,_owner:mA.current}}Th.Fragment=fA;Th.jsx=j0;Th.jsxs=j0;A0.exports=Th;var g=A0.exports,Wf={},U0={exports:{}},tn={},z0={exports:{}},B0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,K){var F=$.length;$.push(K);e:for(;0<F;){var re=F-1>>>1,ee=$[re];if(0<i(ee,K))$[re]=K,$[F]=ee,F=re;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],F=$.pop();if(F!==K){$[0]=F;e:for(var re=0,ee=$.length,se=ee>>>1;re<se;){var Qe=2*(re+1)-1,Ue=$[Qe],at=Qe+1,gt=$[at];if(0>i(Ue,F))at<ee&&0>i(gt,Ue)?($[re]=gt,$[at]=F,re=at):($[re]=Ue,$[Qe]=F,re=Qe);else if(at<ee&&0>i(gt,F))$[re]=gt,$[at]=F,re=at;else break e}}return K}function i($,K){var F=$.sortIndex-K.sortIndex;return F!==0?F:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,w=!1,C=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k($){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=$)r(c),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(c)}}function O($){if(A=!1,k($),!C)if(n(u)!==null)C=!0,De(j);else{var K=n(c);K!==null&&Re(O,K.startTime-$)}}function j($,K){C=!1,A&&(A=!1,S(_),_=-1),w=!0;var F=m;try{for(k(K),f=n(u);f!==null&&(!(f.expirationTime>K)||$&&!P());){var re=f.callback;if(typeof re=="function"){f.callback=null,m=f.priorityLevel;var ee=re(f.expirationTime<=K);K=t.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(u)&&r(u),k(K)}else r(u);f=n(u)}if(f!==null)var se=!0;else{var Qe=n(c);Qe!==null&&Re(O,Qe.startTime-K),se=!1}return se}finally{f=null,m=F,w=!1}}var M=!1,v=null,_=-1,I=5,R=-1;function P(){return!(t.unstable_now()-R<I)}function N(){if(v!==null){var $=t.unstable_now();R=$;var K=!0;try{K=v(!0,$)}finally{K?E():(M=!1,v=null)}}else M=!1}var E;if(typeof T=="function")E=function(){T(N)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ie=J.port2;J.port1.onmessage=N,E=function(){ie.postMessage(null)}}else E=function(){x(N,0)};function De($){v=$,M||(M=!0,E())}function Re($,K){_=x(function(){$(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){C||w||(C=!0,De(j))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var F=m;m=K;try{return $()}finally{m=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var F=m;m=$;try{return K()}finally{m=F}},t.unstable_scheduleCallback=function($,K,F){var re=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?re+F:re):F=re,$){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=F+ee,$={id:h++,callback:K,priorityLevel:$,startTime:F,expirationTime:ee,sortIndex:-1},F>re?($.sortIndex=F,e(c,$),n(u)===null&&$===n(c)&&(A?(S(_),_=-1):A=!0,Re(O,F-re))):($.sortIndex=ee,e(u,$),C||w||(C=!0,De(j))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var K=m;return function(){var F=m;m=K;try{return $.apply(this,arguments)}finally{m=F}}}})(B0);z0.exports=B0;var _A=z0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yA=D,Zt=_A;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $0=new Set,qa={};function os(t,e){Zs(t,e),Zs(t+"Capture",e)}function Zs(t,e){for(qa[t]=e,t=0;t<e.length;t++)$0.add(e[t])}var dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qf=Object.prototype.hasOwnProperty,vA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lv={},uv={};function wA(t){return qf.call(uv,t)?!0:qf.call(lv,t)?!1:vA.test(t)?uv[t]=!0:(lv[t]=!0,!1)}function EA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TA(t,e,n,r){if(e===null||typeof e>"u"||EA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Om=/[\-:]([a-z])/g;function Lm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Om,Lm);pt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Om,Lm);pt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Om,Lm);pt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mm(t,e,n,r){var i=pt.hasOwnProperty(e)?pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TA(e,n,i,r)&&(n=null),r||i===null?wA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Er=yA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eu=Symbol.for("react.element"),ks=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),Vm=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),W0=Symbol.for("react.provider"),q0=Symbol.for("react.context"),Fm=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),Kf=Symbol.for("react.suspense_list"),jm=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy"),H0=Symbol.for("react.offscreen"),cv=Symbol.iterator;function ea(t){return t===null||typeof t!="object"?null:(t=cv&&t[cv]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,Qd;function pa(t){if(Qd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qd=e&&e[1]||""}return`
`+Qd+t}var Yd=!1;function Xd(t,e){if(!t||Yd)return"";Yd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Yd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function IA(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=Xd(t.type,!1),t;case 11:return t=Xd(t.type.render,!1),t;case 1:return t=Xd(t.type,!0),t;default:return""}}function Qf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case ks:return"Portal";case Hf:return"Profiler";case Vm:return"StrictMode";case Gf:return"Suspense";case Kf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q0:return(t.displayName||"Context")+".Consumer";case W0:return(t._context.displayName||"Context")+".Provider";case Fm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jm:return e=t.displayName||null,e!==null?e:Qf(t.type)||"Memo";case Nr:e=t._payload,t=t._init;try{return Qf(t(e))}catch{}}return null}function CA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qf(e);case 8:return e===Vm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function G0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SA(t){var e=G0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tu(t){t._valueTracker||(t._valueTracker=SA(t))}function K0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=G0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yf(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Q0(t,e){e=e.checked,e!=null&&Mm(t,"checked",e,!1)}function Xf(t,e){Q0(t,e);var n=oi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jf(t,e.type,oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jf(t,e,n){(e!=="number"||gc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function zs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+oi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Zf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(ma(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:oi(n)}}function Y0(t,e){var n=oi(e.value),r=oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function X0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ep(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?X0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Iu,J0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Iu=Iu||document.createElement("div"),Iu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Iu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RA=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){RA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function Z0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function eT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Z0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var kA=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tp(t,e){if(e){if(kA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function np(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rp=null;function Um(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ip=null,Bs=null,$s=null;function mv(t){if(t=Ml(t)){if(typeof ip!="function")throw Error(z(280));var e=t.stateNode;e&&(e=kh(e),ip(t.stateNode,t.type,e))}}function tT(t){Bs?$s?$s.push(t):$s=[t]:Bs=t}function nT(){if(Bs){var t=Bs,e=$s;if($s=Bs=null,mv(t),e)for(t=0;t<e.length;t++)mv(e[t])}}function rT(t,e){return t(e)}function iT(){}var Jd=!1;function sT(t,e,n){if(Jd)return t(e,n);Jd=!0;try{return rT(t,e,n)}finally{Jd=!1,(Bs!==null||$s!==null)&&(iT(),nT())}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var r=kh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var sp=!1;if(dr)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){sp=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{sp=!1}function AA(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ra=!1,_c=null,yc=!1,op=null,PA={onError:function(t){Ra=!0,_c=t}};function NA(t,e,n,r,i,s,o,a,u){Ra=!1,_c=null,AA.apply(PA,arguments)}function xA(t,e,n,r,i,s,o,a,u){if(NA.apply(this,arguments),Ra){if(Ra){var c=_c;Ra=!1,_c=null}else throw Error(z(198));yc||(yc=!0,op=c)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function oT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gv(t){if(as(t)!==t)throw Error(z(188))}function bA(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gv(i),t;if(s===r)return gv(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function aT(t){return t=bA(t),t!==null?lT(t):null}function lT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lT(t);if(e!==null)return e;t=t.sibling}return null}var uT=Zt.unstable_scheduleCallback,_v=Zt.unstable_cancelCallback,DA=Zt.unstable_shouldYield,OA=Zt.unstable_requestPaint,qe=Zt.unstable_now,LA=Zt.unstable_getCurrentPriorityLevel,zm=Zt.unstable_ImmediatePriority,cT=Zt.unstable_UserBlockingPriority,vc=Zt.unstable_NormalPriority,MA=Zt.unstable_LowPriority,hT=Zt.unstable_IdlePriority,Ih=null,jn=null;function VA(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Ih,t,void 0,(t.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:UA,FA=Math.log,jA=Math.LN2;function UA(t){return t>>>=0,t===0?32:31-(FA(t)/jA|0)|0}var Cu=64,Su=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ga(a):(s&=o,s!==0&&(r=ga(s)))}else o=n&~i,o!==0?r=ga(o):s!==0&&(r=ga(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Sn(e),i=1<<n,r|=t[n],e&=~i;return r}function zA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Sn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=zA(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function ap(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dT(){var t=Cu;return Cu<<=1,!(Cu&4194240)&&(Cu=64),t}function Zd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ol(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Sn(e),t[e]=n}function $A(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function fT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pT,$m,mT,gT,_T,lp=!1,Ru=[],qr=null,Hr=null,Gr=null,Ka=new Map,Qa=new Map,br=[],WA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yv(t,e){switch(t){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function na(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ml(e),e!==null&&$m(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qA(t,e,n,r,i){switch(e){case"focusin":return qr=na(qr,t,e,n,r,i),!0;case"dragenter":return Hr=na(Hr,t,e,n,r,i),!0;case"mouseover":return Gr=na(Gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ka.set(s,na(Ka.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qa.set(s,na(Qa.get(s)||null,t,e,n,r,i)),!0}return!1}function yT(t){var e=Vi(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=oT(n),e!==null){t.blockedOn=e,_T(t.priority,function(){mT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=up(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);rp=r,n.target.dispatchEvent(r),rp=null}else return e=Ml(n),e!==null&&$m(e),t.blockedOn=n,!1;e.shift()}return!0}function vv(t,e,n){Qu(t)&&n.delete(e)}function HA(){lp=!1,qr!==null&&Qu(qr)&&(qr=null),Hr!==null&&Qu(Hr)&&(Hr=null),Gr!==null&&Qu(Gr)&&(Gr=null),Ka.forEach(vv),Qa.forEach(vv)}function ra(t,e){t.blockedOn===e&&(t.blockedOn=null,lp||(lp=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,HA)))}function Ya(t){function e(i){return ra(i,t)}if(0<Ru.length){ra(Ru[0],t);for(var n=1;n<Ru.length;n++){var r=Ru[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qr!==null&&ra(qr,t),Hr!==null&&ra(Hr,t),Gr!==null&&ra(Gr,t),Ka.forEach(e),Qa.forEach(e),n=0;n<br.length;n++)r=br[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<br.length&&(n=br[0],n.blockedOn===null);)yT(n),n.blockedOn===null&&br.shift()}var Ws=Er.ReactCurrentBatchConfig,Ec=!0;function GA(t,e,n,r){var i=ve,s=Ws.transition;Ws.transition=null;try{ve=1,Wm(t,e,n,r)}finally{ve=i,Ws.transition=s}}function KA(t,e,n,r){var i=ve,s=Ws.transition;Ws.transition=null;try{ve=4,Wm(t,e,n,r)}finally{ve=i,Ws.transition=s}}function Wm(t,e,n,r){if(Ec){var i=up(t,e,n,r);if(i===null)cf(t,e,r,Tc,n),yv(t,r);else if(qA(i,t,e,n,r))r.stopPropagation();else if(yv(t,r),e&4&&-1<WA.indexOf(t)){for(;i!==null;){var s=Ml(i);if(s!==null&&pT(s),s=up(t,e,n,r),s===null&&cf(t,e,r,Tc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else cf(t,e,r,null,n)}}var Tc=null;function up(t,e,n,r){if(Tc=null,t=Um(r),t=Vi(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=oT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tc=t,null}function vT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LA()){case zm:return 1;case cT:return 4;case vc:case MA:return 16;case hT:return 536870912;default:return 16}default:return 16}}var Vr=null,qm=null,Yu=null;function wT(){if(Yu)return Yu;var t,e=qm,n=e.length,r,i="value"in Vr?Vr.value:Vr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yu=i.slice(t,1<r?1-r:void 0)}function Xu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ku(){return!0}function wv(){return!1}function nn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ku:wv,this.isPropagationStopped=wv,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ku)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ku)},persist:function(){},isPersistent:ku}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hm=nn(So),Ll=Fe({},So,{view:0,detail:0}),QA=nn(Ll),ef,tf,ia,Ch=Fe({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(ef=t.screenX-ia.screenX,tf=t.screenY-ia.screenY):tf=ef=0,ia=t),ef)},movementY:function(t){return"movementY"in t?t.movementY:tf}}),Ev=nn(Ch),YA=Fe({},Ch,{dataTransfer:0}),XA=nn(YA),JA=Fe({},Ll,{relatedTarget:0}),nf=nn(JA),ZA=Fe({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),eP=nn(ZA),tP=Fe({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nP=nn(tP),rP=Fe({},So,{data:0}),Tv=nn(rP),iP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oP[t])?!!e[t]:!1}function Gm(){return aP}var lP=Fe({},Ll,{key:function(t){if(t.key){var e=iP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gm,charCode:function(t){return t.type==="keypress"?Xu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uP=nn(lP),cP=Fe({},Ch,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iv=nn(cP),hP=Fe({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gm}),dP=nn(hP),fP=Fe({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),pP=nn(fP),mP=Fe({},Ch,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gP=nn(mP),_P=[9,13,27,32],Km=dr&&"CompositionEvent"in window,ka=null;dr&&"documentMode"in document&&(ka=document.documentMode);var yP=dr&&"TextEvent"in window&&!ka,ET=dr&&(!Km||ka&&8<ka&&11>=ka),Cv=" ",Sv=!1;function TT(t,e){switch(t){case"keyup":return _P.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function IT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function vP(t,e){switch(t){case"compositionend":return IT(e);case"keypress":return e.which!==32?null:(Sv=!0,Cv);case"textInput":return t=e.data,t===Cv&&Sv?null:t;default:return null}}function wP(t,e){if(Ps)return t==="compositionend"||!Km&&TT(t,e)?(t=wT(),Yu=qm=Vr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ET&&e.locale!=="ko"?null:e.data;default:return null}}var EP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!EP[t.type]:e==="textarea"}function CT(t,e,n,r){tT(r),e=Ic(e,"onChange"),0<e.length&&(n=new Hm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Aa=null,Xa=null;function TP(t){LT(t,0)}function Sh(t){var e=bs(t);if(K0(e))return t}function IP(t,e){if(t==="change")return e}var ST=!1;if(dr){var rf;if(dr){var sf="oninput"in document;if(!sf){var kv=document.createElement("div");kv.setAttribute("oninput","return;"),sf=typeof kv.oninput=="function"}rf=sf}else rf=!1;ST=rf&&(!document.documentMode||9<document.documentMode)}function Av(){Aa&&(Aa.detachEvent("onpropertychange",RT),Xa=Aa=null)}function RT(t){if(t.propertyName==="value"&&Sh(Xa)){var e=[];CT(e,Xa,t,Um(t)),sT(TP,e)}}function CP(t,e,n){t==="focusin"?(Av(),Aa=e,Xa=n,Aa.attachEvent("onpropertychange",RT)):t==="focusout"&&Av()}function SP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sh(Xa)}function RP(t,e){if(t==="click")return Sh(e)}function kP(t,e){if(t==="input"||t==="change")return Sh(e)}function AP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:AP;function Ja(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qf.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function Pv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nv(t,e){var n=Pv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pv(n)}}function kT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function AT(){for(var t=window,e=gc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gc(t.document)}return e}function Qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PP(t){var e=AT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&kT(n.ownerDocument.documentElement,n)){if(r!==null&&Qm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Nv(n,s);var o=Nv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NP=dr&&"documentMode"in document&&11>=document.documentMode,Ns=null,cp=null,Pa=null,hp=!1;function xv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hp||Ns==null||Ns!==gc(r)||(r=Ns,"selectionStart"in r&&Qm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pa&&Ja(Pa,r)||(Pa=r,r=Ic(cp,"onSelect"),0<r.length&&(e=new Hm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ns)))}function Au(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:Au("Animation","AnimationEnd"),animationiteration:Au("Animation","AnimationIteration"),animationstart:Au("Animation","AnimationStart"),transitionend:Au("Transition","TransitionEnd")},of={},PT={};dr&&(PT=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Rh(t){if(of[t])return of[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in PT)return of[t]=e[n];return t}var NT=Rh("animationend"),xT=Rh("animationiteration"),bT=Rh("animationstart"),DT=Rh("transitionend"),OT=new Map,bv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yi(t,e){OT.set(t,e),os(e,[t])}for(var af=0;af<bv.length;af++){var lf=bv[af],xP=lf.toLowerCase(),bP=lf[0].toUpperCase()+lf.slice(1);yi(xP,"on"+bP)}yi(NT,"onAnimationEnd");yi(xT,"onAnimationIteration");yi(bT,"onAnimationStart");yi("dblclick","onDoubleClick");yi("focusin","onFocus");yi("focusout","onBlur");yi(DT,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DP=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Dv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,xA(r,e,void 0,t),t.currentTarget=null}function LT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Dv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Dv(i,a,c),s=u}}}if(yc)throw t=op,yc=!1,op=null,t}function Ae(t,e){var n=e[gp];n===void 0&&(n=e[gp]=new Set);var r=t+"__bubble";n.has(r)||(MT(e,t,2,!1),n.add(r))}function uf(t,e,n){var r=0;e&&(r|=4),MT(n,t,r,e)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function Za(t){if(!t[Pu]){t[Pu]=!0,$0.forEach(function(n){n!=="selectionchange"&&(DP.has(n)||uf(n,!1,t),uf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pu]||(e[Pu]=!0,uf("selectionchange",!1,e))}}function MT(t,e,n,r){switch(vT(e)){case 1:var i=GA;break;case 4:i=KA;break;default:i=Wm}n=i.bind(null,e,n,t),i=void 0,!sp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function cf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Vi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}sT(function(){var c=s,h=Um(n),f=[];e:{var m=OT.get(t);if(m!==void 0){var w=Hm,C=t;switch(t){case"keypress":if(Xu(n)===0)break e;case"keydown":case"keyup":w=uP;break;case"focusin":C="focus",w=nf;break;case"focusout":C="blur",w=nf;break;case"beforeblur":case"afterblur":w=nf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ev;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=XA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=dP;break;case NT:case xT:case bT:w=eP;break;case DT:w=pP;break;case"scroll":w=QA;break;case"wheel":w=gP;break;case"copy":case"cut":case"paste":w=nP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Iv}var A=(e&4)!==0,x=!A&&t==="scroll",S=A?m!==null?m+"Capture":null:m;A=[];for(var T=c,k;T!==null;){k=T;var O=k.stateNode;if(k.tag===5&&O!==null&&(k=O,S!==null&&(O=Ga(T,S),O!=null&&A.push(el(T,O,k)))),x)break;T=T.return}0<A.length&&(m=new w(m,C,null,n,h),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==rp&&(C=n.relatedTarget||n.fromElement)&&(Vi(C)||C[fr]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(C=n.relatedTarget||n.toElement,w=c,C=C?Vi(C):null,C!==null&&(x=as(C),C!==x||C.tag!==5&&C.tag!==6)&&(C=null)):(w=null,C=c),w!==C)){if(A=Ev,O="onMouseLeave",S="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(A=Iv,O="onPointerLeave",S="onPointerEnter",T="pointer"),x=w==null?m:bs(w),k=C==null?m:bs(C),m=new A(O,T+"leave",w,n,h),m.target=x,m.relatedTarget=k,O=null,Vi(h)===c&&(A=new A(S,T+"enter",C,n,h),A.target=k,A.relatedTarget=x,O=A),x=O,w&&C)t:{for(A=w,S=C,T=0,k=A;k;k=ws(k))T++;for(k=0,O=S;O;O=ws(O))k++;for(;0<T-k;)A=ws(A),T--;for(;0<k-T;)S=ws(S),k--;for(;T--;){if(A===S||S!==null&&A===S.alternate)break t;A=ws(A),S=ws(S)}A=null}else A=null;w!==null&&Ov(f,m,w,A,!1),C!==null&&x!==null&&Ov(f,x,C,A,!0)}}e:{if(m=c?bs(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var j=IP;else if(Rv(m))if(ST)j=kP;else{j=SP;var M=CP}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=RP);if(j&&(j=j(t,c))){CT(f,j,n,h);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Jf(m,"number",m.value)}switch(M=c?bs(c):window,t){case"focusin":(Rv(M)||M.contentEditable==="true")&&(Ns=M,cp=c,Pa=null);break;case"focusout":Pa=cp=Ns=null;break;case"mousedown":hp=!0;break;case"contextmenu":case"mouseup":case"dragend":hp=!1,xv(f,n,h);break;case"selectionchange":if(NP)break;case"keydown":case"keyup":xv(f,n,h)}var v;if(Km)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ps?TT(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ET&&n.locale!=="ko"&&(Ps||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ps&&(v=wT()):(Vr=h,qm="value"in Vr?Vr.value:Vr.textContent,Ps=!0)),M=Ic(c,_),0<M.length&&(_=new Tv(_,t,null,n,h),f.push({event:_,listeners:M}),v?_.data=v:(v=IT(n),v!==null&&(_.data=v)))),(v=yP?vP(t,n):wP(t,n))&&(c=Ic(c,"onBeforeInput"),0<c.length&&(h=new Tv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=v))}LT(f,e)})}function el(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ic(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ga(t,n),s!=null&&r.unshift(el(t,s,i)),s=Ga(t,e),s!=null&&r.push(el(t,s,i))),t=t.return}return r}function ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ov(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Ga(n,s),u!=null&&o.unshift(el(n,u,a))):i||(u=Ga(n,s),u!=null&&o.push(el(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OP=/\r\n?/g,LP=/\u0000|\uFFFD/g;function Lv(t){return(typeof t=="string"?t:""+t).replace(OP,`
`).replace(LP,"")}function Nu(t,e,n){if(e=Lv(e),Lv(t)!==e&&n)throw Error(z(425))}function Cc(){}var dp=null,fp=null;function pp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mp=typeof setTimeout=="function"?setTimeout:void 0,MP=typeof clearTimeout=="function"?clearTimeout:void 0,Mv=typeof Promise=="function"?Promise:void 0,VP=typeof queueMicrotask=="function"?queueMicrotask:typeof Mv<"u"?function(t){return Mv.resolve(null).then(t).catch(FP)}:mp;function FP(t){setTimeout(function(){throw t})}function hf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ya(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ya(e)}function Kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Ro,tl="__reactProps$"+Ro,fr="__reactContainer$"+Ro,gp="__reactEvents$"+Ro,jP="__reactListeners$"+Ro,UP="__reactHandles$"+Ro;function Vi(t){var e=t[Mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fr]||n[Mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vv(t);t!==null;){if(n=t[Mn])return n;t=Vv(t)}return e}t=n,n=t.parentNode}return null}function Ml(t){return t=t[Mn]||t[fr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function kh(t){return t[tl]||null}var _p=[],Ds=-1;function vi(t){return{current:t}}function Ne(t){0>Ds||(t.current=_p[Ds],_p[Ds]=null,Ds--)}function Se(t,e){Ds++,_p[Ds]=t.current,t.current=e}var ai={},kt=vi(ai),Bt=vi(!1),Hi=ai;function eo(t,e){var n=t.type.contextTypes;if(!n)return ai;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function Sc(){Ne(Bt),Ne(kt)}function Fv(t,e,n){if(kt.current!==ai)throw Error(z(168));Se(kt,e),Se(Bt,n)}function VT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,CA(t)||"Unknown",i));return Fe({},n,r)}function Rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ai,Hi=kt.current,Se(kt,t),Se(Bt,Bt.current),!0}function jv(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=VT(t,e,Hi),r.__reactInternalMemoizedMergedChildContext=t,Ne(Bt),Ne(kt),Se(kt,t)):Ne(Bt),Se(Bt,n)}var tr=null,Ah=!1,df=!1;function FT(t){tr===null?tr=[t]:tr.push(t)}function zP(t){Ah=!0,FT(t)}function wi(){if(!df&&tr!==null){df=!0;var t=0,e=ve;try{var n=tr;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tr=null,Ah=!1}catch(i){throw tr!==null&&(tr=tr.slice(t+1)),uT(zm,wi),i}finally{ve=e,df=!1}}return null}var Os=[],Ls=0,kc=null,Ac=0,rn=[],sn=0,Gi=null,rr=1,ir="";function Di(t,e){Os[Ls++]=Ac,Os[Ls++]=kc,kc=t,Ac=e}function jT(t,e,n){rn[sn++]=rr,rn[sn++]=ir,rn[sn++]=Gi,Gi=t;var r=rr;t=ir;var i=32-Sn(r)-1;r&=~(1<<i),n+=1;var s=32-Sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,rr=1<<32-Sn(e)+i|n<<i|r,ir=s+t}else rr=1<<s|n<<i|r,ir=t}function Ym(t){t.return!==null&&(Di(t,1),jT(t,1,0))}function Xm(t){for(;t===kc;)kc=Os[--Ls],Os[Ls]=null,Ac=Os[--Ls],Os[Ls]=null;for(;t===Gi;)Gi=rn[--sn],rn[sn]=null,ir=rn[--sn],rn[sn]=null,rr=rn[--sn],rn[sn]=null}var Jt=null,Yt=null,be=!1,wn=null;function UT(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jt=t,Yt=Kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jt=t,Yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gi!==null?{id:rr,overflow:ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jt=t,Yt=null,!0):!1;default:return!1}}function yp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vp(t){if(be){var e=Yt;if(e){var n=e;if(!Uv(t,e)){if(yp(t))throw Error(z(418));e=Kr(n.nextSibling);var r=Jt;e&&Uv(t,e)?UT(r,n):(t.flags=t.flags&-4097|2,be=!1,Jt=t)}}else{if(yp(t))throw Error(z(418));t.flags=t.flags&-4097|2,be=!1,Jt=t}}}function zv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jt=t}function xu(t){if(t!==Jt)return!1;if(!be)return zv(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pp(t.type,t.memoizedProps)),e&&(e=Yt)){if(yp(t))throw zT(),Error(z(418));for(;e;)UT(t,e),e=Kr(e.nextSibling)}if(zv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Yt=Kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Yt=null}}else Yt=Jt?Kr(t.stateNode.nextSibling):null;return!0}function zT(){for(var t=Yt;t;)t=Kr(t.nextSibling)}function to(){Yt=Jt=null,be=!1}function Jm(t){wn===null?wn=[t]:wn.push(t)}var BP=Er.ReactCurrentBatchConfig;function sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function bu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bv(t){var e=t._init;return e(t._payload)}function BT(t){function e(S,T){if(t){var k=S.deletions;k===null?(S.deletions=[T],S.flags|=16):k.push(T)}}function n(S,T){if(!t)return null;for(;T!==null;)e(S,T),T=T.sibling;return null}function r(S,T){for(S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function i(S,T){return S=Jr(S,T),S.index=0,S.sibling=null,S}function s(S,T,k){return S.index=k,t?(k=S.alternate,k!==null?(k=k.index,k<T?(S.flags|=2,T):k):(S.flags|=2,T)):(S.flags|=1048576,T)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,T,k,O){return T===null||T.tag!==6?(T=vf(k,S.mode,O),T.return=S,T):(T=i(T,k),T.return=S,T)}function u(S,T,k,O){var j=k.type;return j===As?h(S,T,k.props.children,O,k.key):T!==null&&(T.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nr&&Bv(j)===T.type)?(O=i(T,k.props),O.ref=sa(S,T,k),O.return=S,O):(O=ic(k.type,k.key,k.props,null,S.mode,O),O.ref=sa(S,T,k),O.return=S,O)}function c(S,T,k,O){return T===null||T.tag!==4||T.stateNode.containerInfo!==k.containerInfo||T.stateNode.implementation!==k.implementation?(T=wf(k,S.mode,O),T.return=S,T):(T=i(T,k.children||[]),T.return=S,T)}function h(S,T,k,O,j){return T===null||T.tag!==7?(T=$i(k,S.mode,O,j),T.return=S,T):(T=i(T,k),T.return=S,T)}function f(S,T,k){if(typeof T=="string"&&T!==""||typeof T=="number")return T=vf(""+T,S.mode,k),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Eu:return k=ic(T.type,T.key,T.props,null,S.mode,k),k.ref=sa(S,null,T),k.return=S,k;case ks:return T=wf(T,S.mode,k),T.return=S,T;case Nr:var O=T._init;return f(S,O(T._payload),k)}if(ma(T)||ea(T))return T=$i(T,S.mode,k,null),T.return=S,T;bu(S,T)}return null}function m(S,T,k,O){var j=T!==null?T.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return j!==null?null:a(S,T,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Eu:return k.key===j?u(S,T,k,O):null;case ks:return k.key===j?c(S,T,k,O):null;case Nr:return j=k._init,m(S,T,j(k._payload),O)}if(ma(k)||ea(k))return j!==null?null:h(S,T,k,O,null);bu(S,k)}return null}function w(S,T,k,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(k)||null,a(T,S,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Eu:return S=S.get(O.key===null?k:O.key)||null,u(T,S,O,j);case ks:return S=S.get(O.key===null?k:O.key)||null,c(T,S,O,j);case Nr:var M=O._init;return w(S,T,k,M(O._payload),j)}if(ma(O)||ea(O))return S=S.get(k)||null,h(T,S,O,j,null);bu(T,O)}return null}function C(S,T,k,O){for(var j=null,M=null,v=T,_=T=0,I=null;v!==null&&_<k.length;_++){v.index>_?(I=v,v=null):I=v.sibling;var R=m(S,v,k[_],O);if(R===null){v===null&&(v=I);break}t&&v&&R.alternate===null&&e(S,v),T=s(R,T,_),M===null?j=R:M.sibling=R,M=R,v=I}if(_===k.length)return n(S,v),be&&Di(S,_),j;if(v===null){for(;_<k.length;_++)v=f(S,k[_],O),v!==null&&(T=s(v,T,_),M===null?j=v:M.sibling=v,M=v);return be&&Di(S,_),j}for(v=r(S,v);_<k.length;_++)I=w(v,S,_,k[_],O),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?_:I.key),T=s(I,T,_),M===null?j=I:M.sibling=I,M=I);return t&&v.forEach(function(P){return e(S,P)}),be&&Di(S,_),j}function A(S,T,k,O){var j=ea(k);if(typeof j!="function")throw Error(z(150));if(k=j.call(k),k==null)throw Error(z(151));for(var M=j=null,v=T,_=T=0,I=null,R=k.next();v!==null&&!R.done;_++,R=k.next()){v.index>_?(I=v,v=null):I=v.sibling;var P=m(S,v,R.value,O);if(P===null){v===null&&(v=I);break}t&&v&&P.alternate===null&&e(S,v),T=s(P,T,_),M===null?j=P:M.sibling=P,M=P,v=I}if(R.done)return n(S,v),be&&Di(S,_),j;if(v===null){for(;!R.done;_++,R=k.next())R=f(S,R.value,O),R!==null&&(T=s(R,T,_),M===null?j=R:M.sibling=R,M=R);return be&&Di(S,_),j}for(v=r(S,v);!R.done;_++,R=k.next())R=w(v,S,_,R.value,O),R!==null&&(t&&R.alternate!==null&&v.delete(R.key===null?_:R.key),T=s(R,T,_),M===null?j=R:M.sibling=R,M=R);return t&&v.forEach(function(N){return e(S,N)}),be&&Di(S,_),j}function x(S,T,k,O){if(typeof k=="object"&&k!==null&&k.type===As&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Eu:e:{for(var j=k.key,M=T;M!==null;){if(M.key===j){if(j=k.type,j===As){if(M.tag===7){n(S,M.sibling),T=i(M,k.props.children),T.return=S,S=T;break e}}else if(M.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nr&&Bv(j)===M.type){n(S,M.sibling),T=i(M,k.props),T.ref=sa(S,M,k),T.return=S,S=T;break e}n(S,M);break}else e(S,M);M=M.sibling}k.type===As?(T=$i(k.props.children,S.mode,O,k.key),T.return=S,S=T):(O=ic(k.type,k.key,k.props,null,S.mode,O),O.ref=sa(S,T,k),O.return=S,S=O)}return o(S);case ks:e:{for(M=k.key;T!==null;){if(T.key===M)if(T.tag===4&&T.stateNode.containerInfo===k.containerInfo&&T.stateNode.implementation===k.implementation){n(S,T.sibling),T=i(T,k.children||[]),T.return=S,S=T;break e}else{n(S,T);break}else e(S,T);T=T.sibling}T=wf(k,S.mode,O),T.return=S,S=T}return o(S);case Nr:return M=k._init,x(S,T,M(k._payload),O)}if(ma(k))return C(S,T,k,O);if(ea(k))return A(S,T,k,O);bu(S,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,T!==null&&T.tag===6?(n(S,T.sibling),T=i(T,k),T.return=S,S=T):(n(S,T),T=vf(k,S.mode,O),T.return=S,S=T),o(S)):n(S,T)}return x}var no=BT(!0),$T=BT(!1),Pc=vi(null),Nc=null,Ms=null,Zm=null;function eg(){Zm=Ms=Nc=null}function tg(t){var e=Pc.current;Ne(Pc),t._currentValue=e}function wp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qs(t,e){Nc=t,Zm=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(Zm!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(Nc===null)throw Error(z(308));Ms=t,Nc.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Fi=null;function ng(t){Fi===null?Fi=[t]:Fi.push(t)}function WT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ng(e)):(n.next=i.next,i.next=n),e.interleaved=n,pr(t,r)}function pr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xr=!1;function rg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ur(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,pr(t,n)}return i=r.interleaved,i===null?(e.next=e,ng(r)):(e.next=i.next,i.next=e),r.interleaved=e,pr(t,n)}function Ju(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bm(t,n)}}function $v(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xc(t,e,n,r){var i=t.updateQueue;xr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var m=a.lane,w=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=t,A=a;switch(m=e,w=n,A.tag){case 1:if(C=A.payload,typeof C=="function"){f=C.call(w,f,m);break e}f=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=A.payload,m=typeof C=="function"?C.call(w,f,m):C,m==null)break e;f=Fe({},f,m);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=w,u=f):h=h.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qi|=o,t.lanes=o,t.memoizedState=f}}function Wv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Vl={},Un=vi(Vl),nl=vi(Vl),rl=vi(Vl);function ji(t){if(t===Vl)throw Error(z(174));return t}function ig(t,e){switch(Se(rl,e),Se(nl,t),Se(Un,Vl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ep(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ep(e,t)}Ne(Un),Se(Un,e)}function ro(){Ne(Un),Ne(nl),Ne(rl)}function HT(t){ji(rl.current);var e=ji(Un.current),n=ep(e,t.type);e!==n&&(Se(nl,t),Se(Un,n))}function sg(t){nl.current===t&&(Ne(Un),Ne(nl))}var Oe=vi(0);function bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ff=[];function og(){for(var t=0;t<ff.length;t++)ff[t]._workInProgressVersionPrimary=null;ff.length=0}var Zu=Er.ReactCurrentDispatcher,pf=Er.ReactCurrentBatchConfig,Ki=0,Ve=null,Ye=null,rt=null,Dc=!1,Na=!1,il=0,$P=0;function wt(){throw Error(z(321))}function ag(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function lg(t,e,n,r,i,s){if(Ki=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zu.current=t===null||t.memoizedState===null?GP:KP,t=n(r,i),Na){s=0;do{if(Na=!1,il=0,25<=s)throw Error(z(301));s+=1,rt=Ye=null,e.updateQueue=null,Zu.current=QP,t=n(r,i)}while(Na)}if(Zu.current=Oc,e=Ye!==null&&Ye.next!==null,Ki=0,rt=Ye=Ve=null,Dc=!1,e)throw Error(z(300));return t}function ug(){var t=il!==0;return il=0,t}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Ve.memoizedState=rt=t:rt=rt.next=t,rt}function cn(){if(Ye===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=rt===null?Ve.memoizedState:rt.next;if(e!==null)rt=e,Ye=t;else{if(t===null)throw Error(z(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},rt===null?Ve.memoizedState=rt=t:rt=rt.next=t}return rt}function sl(t,e){return typeof e=="function"?e(t):e}function mf(t){var e=cn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((Ki&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Ve.lanes|=h,Qi|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Pn(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ve.lanes|=s,Qi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gf(t){var e=cn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pn(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function GT(){}function KT(t,e){var n=Ve,r=cn(),i=e(),s=!Pn(r.memoizedState,i);if(s&&(r.memoizedState=i,zt=!0),r=r.queue,cg(XT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,ol(9,YT.bind(null,n,r,i,e),void 0,null),st===null)throw Error(z(349));Ki&30||QT(n,e,i)}return i}function QT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function YT(t,e,n,r){e.value=n,e.getSnapshot=r,JT(e)&&ZT(t)}function XT(t,e,n){return n(function(){JT(e)&&ZT(t)})}function JT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function ZT(t){var e=pr(t,1);e!==null&&Rn(e,t,1,-1)}function qv(t){var e=Ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:t},e.queue=t,t=t.dispatch=HP.bind(null,Ve,t),[e.memoizedState,t]}function ol(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eI(){return cn().memoizedState}function ec(t,e,n,r){var i=Ln();Ve.flags|=t,i.memoizedState=ol(1|e,n,void 0,r===void 0?null:r)}function Ph(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&ag(r,o.deps)){i.memoizedState=ol(e,n,s,r);return}}Ve.flags|=t,i.memoizedState=ol(1|e,n,s,r)}function Hv(t,e){return ec(8390656,8,t,e)}function cg(t,e){return Ph(2048,8,t,e)}function tI(t,e){return Ph(4,2,t,e)}function nI(t,e){return Ph(4,4,t,e)}function rI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iI(t,e,n){return n=n!=null?n.concat([t]):null,Ph(4,4,rI.bind(null,e,t),n)}function hg(){}function sI(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ag(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function oI(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ag(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function aI(t,e,n){return Ki&21?(Pn(n,e)||(n=dT(),Ve.lanes|=n,Qi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function WP(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=pf.transition;pf.transition={};try{t(!1),e()}finally{ve=n,pf.transition=r}}function lI(){return cn().memoizedState}function qP(t,e,n){var r=Xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uI(t))cI(e,n);else if(n=WT(t,e,n,r),n!==null){var i=Ot();Rn(n,t,r,i),hI(n,e,r)}}function HP(t,e,n){var r=Xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uI(t))cI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Pn(a,o)){var u=e.interleaved;u===null?(i.next=i,ng(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=WT(t,e,i,r),n!==null&&(i=Ot(),Rn(n,t,r,i),hI(n,e,r))}}function uI(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function cI(t,e){Na=Dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bm(t,n)}}var Oc={readContext:un,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},GP={readContext:un,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:Hv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ec(4194308,4,rI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ec(4194308,4,t,e)},useInsertionEffect:function(t,e){return ec(4,2,t,e)},useMemo:function(t,e){var n=Ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qP.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:qv,useDebugValue:hg,useDeferredValue:function(t){return Ln().memoizedState=t},useTransition:function(){var t=qv(!1),e=t[0];return t=WP.bind(null,t[1]),Ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=Ln();if(be){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),st===null)throw Error(z(349));Ki&30||QT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Hv(XT.bind(null,r,s,t),[t]),r.flags|=2048,ol(9,YT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ln(),e=st.identifierPrefix;if(be){var n=ir,r=rr;n=(r&~(1<<32-Sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=il++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$P++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},KP={readContext:un,useCallback:sI,useContext:un,useEffect:cg,useImperativeHandle:iI,useInsertionEffect:tI,useLayoutEffect:nI,useMemo:oI,useReducer:mf,useRef:eI,useState:function(){return mf(sl)},useDebugValue:hg,useDeferredValue:function(t){var e=cn();return aI(e,Ye.memoizedState,t)},useTransition:function(){var t=mf(sl)[0],e=cn().memoizedState;return[t,e]},useMutableSource:GT,useSyncExternalStore:KT,useId:lI,unstable_isNewReconciler:!1},QP={readContext:un,useCallback:sI,useContext:un,useEffect:cg,useImperativeHandle:iI,useInsertionEffect:tI,useLayoutEffect:nI,useMemo:oI,useReducer:gf,useRef:eI,useState:function(){return gf(sl)},useDebugValue:hg,useDeferredValue:function(t){var e=cn();return Ye===null?e.memoizedState=t:aI(e,Ye.memoizedState,t)},useTransition:function(){var t=gf(sl)[0],e=cn().memoizedState;return[t,e]},useMutableSource:GT,useSyncExternalStore:KT,useId:lI,unstable_isNewReconciler:!1};function yn(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ep(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nh={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=Xr(t),s=ur(r,i);s.payload=e,n!=null&&(s.callback=n),e=Qr(t,s,i),e!==null&&(Rn(e,t,i,r),Ju(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=Xr(t),s=ur(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qr(t,s,i),e!==null&&(Rn(e,t,i,r),Ju(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=Xr(t),i=ur(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qr(t,i,r),e!==null&&(Rn(e,t,r,n),Ju(e,t,r))}};function Gv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ja(n,r)||!Ja(i,s):!0}function dI(t,e,n){var r=!1,i=ai,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(i=$t(e)?Hi:kt.current,r=e.contextTypes,s=(r=r!=null)?eo(t,i):ai),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nh.enqueueReplaceState(e,e.state,null)}function Tp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},rg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=un(s):(s=$t(e)?Hi:kt.current,i.context=eo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ep(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nh.enqueueReplaceState(i,i.state,null),xc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e){try{var n="",r=e;do n+=IA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _f(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ip(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var YP=typeof WeakMap=="function"?WeakMap:Map;function fI(t,e,n){n=ur(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mc||(Mc=!0,Dp=r),Ip(t,e)},n}function pI(t,e,n){n=ur(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ip(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ip(t,e),typeof r!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new YP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cN.bind(null,t,e,n),e.then(t,t))}function Yv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ur(-1,1),e.tag=2,Qr(n,e,1))),n.lanes|=1),t)}var XP=Er.ReactCurrentOwner,zt=!1;function bt(t,e,n,r){e.child=t===null?$T(e,null,n,r):no(e,t.child,n,r)}function Jv(t,e,n,r,i){n=n.render;var s=e.ref;return qs(e,i),r=lg(t,e,n,r,s,i),n=ug(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mr(t,e,i)):(be&&n&&Ym(e),e.flags|=1,bt(t,e,r,i),e.child)}function Zv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!vg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mI(t,e,s,r,i)):(t=ic(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(o,r)&&t.ref===e.ref)return mr(t,e,i)}return e.flags|=1,t=Jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function mI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ja(s,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,mr(t,e,i)}return Cp(t,e,n,r,i)}function gI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(Fs,Kt),Kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(Fs,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(Fs,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Se(Fs,Kt),Kt|=r;return bt(t,e,i,n),e.child}function _I(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cp(t,e,n,r,i){var s=$t(n)?Hi:kt.current;return s=eo(e,s),qs(e,i),n=lg(t,e,n,r,s,i),r=ug(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,mr(t,e,i)):(be&&r&&Ym(e),e.flags|=1,bt(t,e,n,i),e.child)}function ew(t,e,n,r,i){if($t(n)){var s=!0;Rc(e)}else s=!1;if(qs(e,i),e.stateNode===null)tc(t,e),dI(e,n,r),Tp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=un(c):(c=$t(n)?Hi:kt.current,c=eo(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Kv(e,o,r,c),xr=!1;var m=e.memoizedState;o.state=m,xc(e,r,o,i),u=e.memoizedState,a!==r||m!==u||Bt.current||xr?(typeof h=="function"&&(Ep(e,n,h,r),u=e.memoizedState),(a=xr||Gv(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:yn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=un(u):(u=$t(n)?Hi:kt.current,u=eo(e,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Kv(e,o,r,u),xr=!1,m=e.memoizedState,o.state=m,xc(e,r,o,i);var C=e.memoizedState;a!==f||m!==C||Bt.current||xr?(typeof w=="function"&&(Ep(e,n,w,r),C=e.memoizedState),(c=xr||Gv(e,n,c,r,m,C,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Sp(t,e,n,r,s,i)}function Sp(t,e,n,r,i,s){_I(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&jv(e,n,!1),mr(t,e,s);r=e.stateNode,XP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=no(e,t.child,null,s),e.child=no(e,null,a,s)):bt(t,e,a,s),e.memoizedState=r.state,i&&jv(e,n,!0),e.child}function yI(t){var e=t.stateNode;e.pendingContext?Fv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fv(t,e.context,!1),ig(t,e.containerInfo)}function tw(t,e,n,r,i){return to(),Jm(i),e.flags|=256,bt(t,e,n,r),e.child}var Rp={dehydrated:null,treeContext:null,retryLane:0};function kp(t){return{baseLanes:t,cachePool:null,transitions:null}}function vI(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(Oe,i&1),t===null)return vp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dh(o,r,0,null),t=$i(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kp(n),e.memoizedState=Rp,t):dg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return JP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Jr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Jr(a,s):(s=$i(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rp,r}return s=t.child,t=s.sibling,r=Jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dg(t,e){return e=Dh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Du(t,e,n,r){return r!==null&&Jm(r),no(e,t.child,null,n),t=dg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function JP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_f(Error(z(422))),Du(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dh({mode:"visible",children:r.children},i,0,null),s=$i(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&no(e,t.child,null,o),e.child.memoizedState=kp(o),e.memoizedState=Rp,s);if(!(e.mode&1))return Du(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=_f(s,r,void 0),Du(t,e,o,r)}if(a=(o&t.childLanes)!==0,zt||a){if(r=st,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,pr(t,i),Rn(r,t,i,-1))}return yg(),r=_f(Error(z(421))),Du(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Yt=Kr(i.nextSibling),Jt=e,be=!0,wn=null,t!==null&&(rn[sn++]=rr,rn[sn++]=ir,rn[sn++]=Gi,rr=t.id,ir=t.overflow,Gi=e),e=dg(e,r.children),e.flags|=4096,e)}function nw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wp(t.return,e,n)}function yf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function wI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(bt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nw(t,n,e);else if(t.tag===19)nw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yf(e,!0,n,null,s);break;case"together":yf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZP(t,e,n){switch(e.tag){case 3:yI(e),to();break;case 5:HT(e);break;case 1:$t(e.type)&&Rc(e);break;case 4:ig(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(Pc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?vI(t,e,n):(Se(Oe,Oe.current&1),t=mr(t,e,n),t!==null?t.sibling:null);Se(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return wI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,gI(t,e,n)}return mr(t,e,n)}var EI,Ap,TI,II;EI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ap=function(){};TI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ji(Un.current);var s=null;switch(n){case"input":i=Yf(t,i),r=Yf(t,r),s=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),s=[];break;case"textarea":i=Zf(t,i),r=Zf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Cc)}tp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ae("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};II=function(t,e,n,r){n!==r&&(e.flags|=4)};function oa(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eN(t,e,n){var r=e.pendingProps;switch(Xm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return $t(e.type)&&Sc(),Et(e),null;case 3:return r=e.stateNode,ro(),Ne(Bt),Ne(kt),og(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wn!==null&&(Mp(wn),wn=null))),Ap(t,e),Et(e),null;case 5:sg(e);var i=ji(rl.current);if(n=e.type,t!==null&&e.stateNode!=null)TI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return Et(e),null}if(t=ji(Un.current),xu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Mn]=e,r[tl]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<_a.length;i++)Ae(_a[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":hv(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":fv(r,s),Ae("invalid",r)}tp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Nu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Nu(r.textContent,a,t),i=["children",""+a]):qa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Tu(r),dv(r,s,!0);break;case"textarea":Tu(r),pv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Cc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=X0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mn]=e,t[tl]=r,EI(t,e,!1,!1),e.stateNode=t;e:{switch(o=np(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<_a.length;i++)Ae(_a[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":hv(t,r),i=Yf(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":fv(t,r),i=Zf(t,r),Ae("invalid",t);break;default:i=r}tp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?eT(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&J0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ha(t,u):typeof u=="number"&&Ha(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ae("scroll",t):u!=null&&Mm(t,s,u,o))}switch(n){case"input":Tu(t),dv(t,r,!1);break;case"textarea":Tu(t),pv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+oi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zs(t,!!r.multiple,s,!1):r.defaultValue!=null&&zs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Cc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)II(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=ji(rl.current),ji(Un.current),xu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mn]=e,(s=r.nodeValue!==n)&&(t=Jt,t!==null))switch(t.tag){case 3:Nu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mn]=e,e.stateNode=r}return Et(e),null;case 13:if(Ne(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&Yt!==null&&e.mode&1&&!(e.flags&128))zT(),to(),e.flags|=98560,s=!1;else if(s=xu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Mn]=e}else to(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),s=!1}else wn!==null&&(Mp(wn),wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?Je===0&&(Je=3):yg())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return ro(),Ap(t,e),t===null&&Za(e.stateNode.containerInfo),Et(e),null;case 10:return tg(e.type._context),Et(e),null;case 17:return $t(e.type)&&Sc(),Et(e),null;case 19:if(Ne(Oe),s=e.memoizedState,s===null)return Et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)oa(s,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bc(t),o!==null){for(e.flags|=128,oa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>so&&(e.flags|=128,r=!0,oa(s,!1),e.lanes=4194304)}else{if(!r)if(t=bc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return Et(e),null}else 2*qe()-s.renderingStartTime>so&&n!==1073741824&&(e.flags|=128,r=!0,oa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=Oe.current,Se(Oe,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return _g(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function tN(t,e){switch(Xm(e),e.tag){case 1:return $t(e.type)&&Sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ro(),Ne(Bt),Ne(kt),og(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sg(e),null;case 13:if(Ne(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));to()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ne(Oe),null;case 4:return ro(),null;case 10:return tg(e.type._context),null;case 22:case 23:return _g(),null;case 24:return null;default:return null}}var Ou=!1,Ct=!1,nN=typeof WeakSet=="function"?WeakSet:Set,H=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Be(t,e,r)}else n.current=null}function Pp(t,e,n){try{n()}catch(r){Be(t,e,r)}}var rw=!1;function rN(t,e){if(dp=Ec,t=AT(),Qm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(u=o),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(fp={focusedElem:t,selectionRange:n},Ec=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var A=C.memoizedProps,x=C.memoizedState,S=e.stateNode,T=S.getSnapshotBeforeUpdate(e.elementType===e.type?A:yn(e.type,A),x);S.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(O){Be(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return C=rw,rw=!1,C}function xa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pp(e,n,s)}i=i.next}while(i!==r)}}function xh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Np(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function CI(t){var e=t.alternate;e!==null&&(t.alternate=null,CI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mn],delete e[tl],delete e[gp],delete e[jP],delete e[UP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function SI(t){return t.tag===5||t.tag===3||t.tag===4}function iw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||SI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cc));else if(r!==4&&(t=t.child,t!==null))for(xp(t,e,n),t=t.sibling;t!==null;)xp(t,e,n),t=t.sibling}function bp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bp(t,e,n),t=t.sibling;t!==null;)bp(t,e,n),t=t.sibling}var ut=null,vn=!1;function Ar(t,e,n){for(n=n.child;n!==null;)RI(t,e,n),n=n.sibling}function RI(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Ih,n)}catch{}switch(n.tag){case 5:Ct||Vs(n,e);case 6:var r=ut,i=vn;ut=null,Ar(t,e,n),ut=r,vn=i,ut!==null&&(vn?(t=ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(vn?(t=ut,n=n.stateNode,t.nodeType===8?hf(t.parentNode,n):t.nodeType===1&&hf(t,n),Ya(t)):hf(ut,n.stateNode));break;case 4:r=ut,i=vn,ut=n.stateNode.containerInfo,vn=!0,Ar(t,e,n),ut=r,vn=i;break;case 0:case 11:case 14:case 15:if(!Ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pp(n,e,o),i=i.next}while(i!==r)}Ar(t,e,n);break;case 1:if(!Ct&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Be(n,e,a)}Ar(t,e,n);break;case 21:Ar(t,e,n);break;case 22:n.mode&1?(Ct=(r=Ct)||n.memoizedState!==null,Ar(t,e,n),Ct=r):Ar(t,e,n);break;default:Ar(t,e,n)}}function sw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nN),e.forEach(function(r){var i=dN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ut=a.stateNode,vn=!1;break e;case 3:ut=a.stateNode.containerInfo,vn=!0;break e;case 4:ut=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(ut===null)throw Error(z(160));RI(s,o,i),ut=null,vn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Be(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kI(e,t),e=e.sibling}function kI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),Dn(t),r&4){try{xa(3,t,t.return),xh(3,t)}catch(A){Be(t,t.return,A)}try{xa(5,t,t.return)}catch(A){Be(t,t.return,A)}}break;case 1:gn(e,t),Dn(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(gn(e,t),Dn(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var i=t.stateNode;try{Ha(i,"")}catch(A){Be(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Q0(i,s),np(a,o);var c=np(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?eT(i,f):h==="dangerouslySetInnerHTML"?J0(i,f):h==="children"?Ha(i,f):Mm(i,h,f,c)}switch(a){case"input":Xf(i,s);break;case"textarea":Y0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?zs(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?zs(i,!!s.multiple,s.defaultValue,!0):zs(i,!!s.multiple,s.multiple?[]:"",!1))}i[tl]=s}catch(A){Be(t,t.return,A)}}break;case 6:if(gn(e,t),Dn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Be(t,t.return,A)}}break;case 3:if(gn(e,t),Dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ya(e.containerInfo)}catch(A){Be(t,t.return,A)}break;case 4:gn(e,t),Dn(t);break;case 13:gn(e,t),Dn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mg=qe())),r&4&&sw(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ct=(c=Ct)||h,gn(e,t),Ct=c):gn(e,t),Dn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(H=t,h=t.child;h!==null;){for(f=H=h;H!==null;){switch(m=H,w=m.child,m.tag){case 0:case 11:case 14:case 15:xa(4,m,m.return);break;case 1:Vs(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(A){Be(r,n,A)}}break;case 5:Vs(m,m.return);break;case 22:if(m.memoizedState!==null){aw(f);continue}}w!==null?(w.return=m,H=w):aw(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Z0("display",o))}catch(A){Be(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){Be(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gn(e,t),Dn(t),r&4&&sw(t);break;case 21:break;default:gn(e,t),Dn(t)}}function Dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(SI(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ha(i,""),r.flags&=-33);var s=iw(t);bp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=iw(t);xp(t,a,o);break;default:throw Error(z(161))}}catch(u){Be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iN(t,e,n){H=t,AI(t)}function AI(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ou;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ct;a=Ou;var c=Ct;if(Ou=o,(Ct=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?lw(i):u!==null?(u.return=o,H=u):lw(i);for(;s!==null;)H=s,AI(s),s=s.sibling;H=i,Ou=a,Ct=c}ow(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):ow(t)}}function ow(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ct||xh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Wv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ya(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ct||e.flags&512&&Np(e)}catch(m){Be(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function aw(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function lw(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xh(4,e)}catch(u){Be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Be(e,i,u)}}var s=e.return;try{Np(e)}catch(u){Be(e,s,u)}break;case 5:var o=e.return;try{Np(e)}catch(u){Be(e,o,u)}}}catch(u){Be(e,e.return,u)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var sN=Math.ceil,Lc=Er.ReactCurrentDispatcher,fg=Er.ReactCurrentOwner,ln=Er.ReactCurrentBatchConfig,fe=0,st=null,Ge=null,dt=0,Kt=0,Fs=vi(0),Je=0,al=null,Qi=0,bh=0,pg=0,ba=null,jt=null,mg=0,so=1/0,er=null,Mc=!1,Dp=null,Yr=null,Lu=!1,Fr=null,Vc=0,Da=0,Op=null,nc=-1,rc=0;function Ot(){return fe&6?qe():nc!==-1?nc:nc=qe()}function Xr(t){return t.mode&1?fe&2&&dt!==0?dt&-dt:BP.transition!==null?(rc===0&&(rc=dT()),rc):(t=ve,t!==0||(t=window.event,t=t===void 0?16:vT(t.type)),t):1}function Rn(t,e,n,r){if(50<Da)throw Da=0,Op=null,Error(z(185));Ol(t,n,r),(!(fe&2)||t!==st)&&(t===st&&(!(fe&2)&&(bh|=n),Je===4&&Dr(t,dt)),Wt(t,r),n===1&&fe===0&&!(e.mode&1)&&(so=qe()+500,Ah&&wi()))}function Wt(t,e){var n=t.callbackNode;BA(t,e);var r=wc(t,t===st?dt:0);if(r===0)n!==null&&_v(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_v(n),e===1)t.tag===0?zP(uw.bind(null,t)):FT(uw.bind(null,t)),VP(function(){!(fe&6)&&wi()}),n=null;else{switch(fT(r)){case 1:n=zm;break;case 4:n=cT;break;case 16:n=vc;break;case 536870912:n=hT;break;default:n=vc}n=MI(n,PI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function PI(t,e){if(nc=-1,rc=0,fe&6)throw Error(z(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var r=wc(t,t===st?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fc(t,r);else{e=r;var i=fe;fe|=2;var s=xI();(st!==t||dt!==e)&&(er=null,so=qe()+500,Bi(t,e));do try{lN();break}catch(a){NI(t,a)}while(!0);eg(),Lc.current=s,fe=i,Ge!==null?e=0:(st=null,dt=0,e=Je)}if(e!==0){if(e===2&&(i=ap(t),i!==0&&(r=i,e=Lp(t,i))),e===1)throw n=al,Bi(t,0),Dr(t,r),Wt(t,qe()),n;if(e===6)Dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!oN(i)&&(e=Fc(t,r),e===2&&(s=ap(t),s!==0&&(r=s,e=Lp(t,s))),e===1))throw n=al,Bi(t,0),Dr(t,r),Wt(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Oi(t,jt,er);break;case 3:if(Dr(t,r),(r&130023424)===r&&(e=mg+500-qe(),10<e)){if(wc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mp(Oi.bind(null,t,jt,er),e);break}Oi(t,jt,er);break;case 4:if(Dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sN(r/1960))-r,10<r){t.timeoutHandle=mp(Oi.bind(null,t,jt,er),r);break}Oi(t,jt,er);break;case 5:Oi(t,jt,er);break;default:throw Error(z(329))}}}return Wt(t,qe()),t.callbackNode===n?PI.bind(null,t):null}function Lp(t,e){var n=ba;return t.current.memoizedState.isDehydrated&&(Bi(t,e).flags|=256),t=Fc(t,e),t!==2&&(e=jt,jt=n,e!==null&&Mp(e)),t}function Mp(t){jt===null?jt=t:jt.push.apply(jt,t)}function oN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~pg,e&=~bh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Sn(e),r=1<<n;t[n]=-1,e&=~r}}function uw(t){if(fe&6)throw Error(z(327));Hs();var e=wc(t,0);if(!(e&1))return Wt(t,qe()),null;var n=Fc(t,e);if(t.tag!==0&&n===2){var r=ap(t);r!==0&&(e=r,n=Lp(t,r))}if(n===1)throw n=al,Bi(t,0),Dr(t,e),Wt(t,qe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Oi(t,jt,er),Wt(t,qe()),null}function gg(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(so=qe()+500,Ah&&wi())}}function Yi(t){Fr!==null&&Fr.tag===0&&!(fe&6)&&Hs();var e=fe;fe|=1;var n=ln.transition,r=ve;try{if(ln.transition=null,ve=1,t)return t()}finally{ve=r,ln.transition=n,fe=e,!(fe&6)&&wi()}}function _g(){Kt=Fs.current,Ne(Fs)}function Bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MP(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Xm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sc();break;case 3:ro(),Ne(Bt),Ne(kt),og();break;case 5:sg(r);break;case 4:ro();break;case 13:Ne(Oe);break;case 19:Ne(Oe);break;case 10:tg(r.type._context);break;case 22:case 23:_g()}n=n.return}if(st=t,Ge=t=Jr(t.current,null),dt=Kt=e,Je=0,al=null,pg=bh=Qi=0,jt=ba=null,Fi!==null){for(e=0;e<Fi.length;e++)if(n=Fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fi=null}return t}function NI(t,e){do{var n=Ge;try{if(eg(),Zu.current=Oc,Dc){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dc=!1}if(Ki=0,rt=Ye=Ve=null,Na=!1,il=0,fg.current=null,n===null||n.return===null){Je=1,al=e,Ge=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=dt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Yv(o);if(w!==null){w.flags&=-257,Xv(w,o,a,s,e),w.mode&1&&Qv(s,c,e),e=w,u=c;var C=e.updateQueue;if(C===null){var A=new Set;A.add(u),e.updateQueue=A}else C.add(u);break e}else{if(!(e&1)){Qv(s,c,e),yg();break e}u=Error(z(426))}}else if(be&&a.mode&1){var x=Yv(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Xv(x,o,a,s,e),Jm(io(u,a));break e}}s=u=io(u,a),Je!==4&&(Je=2),ba===null?ba=[s]:ba.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=fI(s,u,e);$v(s,S);break e;case 1:a=u;var T=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Yr===null||!Yr.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=pI(s,a,e);$v(s,O);break e}}s=s.return}while(s!==null)}DI(n)}catch(j){e=j,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function xI(){var t=Lc.current;return Lc.current=Oc,t===null?Oc:t}function yg(){(Je===0||Je===3||Je===2)&&(Je=4),st===null||!(Qi&268435455)&&!(bh&268435455)||Dr(st,dt)}function Fc(t,e){var n=fe;fe|=2;var r=xI();(st!==t||dt!==e)&&(er=null,Bi(t,e));do try{aN();break}catch(i){NI(t,i)}while(!0);if(eg(),fe=n,Lc.current=r,Ge!==null)throw Error(z(261));return st=null,dt=0,Je}function aN(){for(;Ge!==null;)bI(Ge)}function lN(){for(;Ge!==null&&!DA();)bI(Ge)}function bI(t){var e=LI(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?DI(t):Ge=e,fg.current=null}function DI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tN(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,Ge=null;return}}else if(n=eN(n,e,Kt),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);Je===0&&(Je=5)}function Oi(t,e,n){var r=ve,i=ln.transition;try{ln.transition=null,ve=1,uN(t,e,n,r)}finally{ln.transition=i,ve=r}return null}function uN(t,e,n,r){do Hs();while(Fr!==null);if(fe&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($A(t,s),t===st&&(Ge=st=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lu||(Lu=!0,MI(vc,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ln.transition,ln.transition=null;var o=ve;ve=1;var a=fe;fe|=4,fg.current=null,rN(t,n),kI(n,t),PP(fp),Ec=!!dp,fp=dp=null,t.current=n,iN(n),OA(),fe=a,ve=o,ln.transition=s}else t.current=n;if(Lu&&(Lu=!1,Fr=t,Vc=i),s=t.pendingLanes,s===0&&(Yr=null),VA(n.stateNode),Wt(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mc)throw Mc=!1,t=Dp,Dp=null,t;return Vc&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===Op?Da++:(Da=0,Op=t):Da=0,wi(),null}function Hs(){if(Fr!==null){var t=fT(Vc),e=ln.transition,n=ve;try{if(ln.transition=null,ve=16>t?16:t,Fr===null)var r=!1;else{if(t=Fr,Fr=null,Vc=0,fe&6)throw Error(z(331));var i=fe;for(fe|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(H=c;H!==null;){var h=H;switch(h.tag){case 0:case 11:case 15:xa(8,h,s)}var f=h.child;if(f!==null)f.return=h,H=f;else for(;H!==null;){h=H;var m=h.sibling,w=h.return;if(CI(h),h===c){H=null;break}if(m!==null){m.return=w,H=m;break}H=w}}}var C=s.alternate;if(C!==null){var A=C.child;if(A!==null){C.child=null;do{var x=A.sibling;A.sibling=null,A=x}while(A!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xa(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,H=S;break e}H=s.return}}var T=t.current;for(H=T;H!==null;){o=H;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,H=k;else e:for(o=T;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xh(9,a)}}catch(j){Be(a,a.return,j)}if(a===o){H=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,H=O;break e}H=a.return}}if(fe=i,wi(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Ih,t)}catch{}r=!0}return r}finally{ve=n,ln.transition=e}}return!1}function cw(t,e,n){e=io(n,e),e=fI(t,e,1),t=Qr(t,e,1),e=Ot(),t!==null&&(Ol(t,1,e),Wt(t,e))}function Be(t,e,n){if(t.tag===3)cw(t,t,n);else for(;e!==null;){if(e.tag===3){cw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yr===null||!Yr.has(r))){t=io(n,t),t=pI(e,t,1),e=Qr(e,t,1),t=Ot(),e!==null&&(Ol(e,1,t),Wt(e,t));break}}e=e.return}}function cN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(dt&n)===n&&(Je===4||Je===3&&(dt&130023424)===dt&&500>qe()-mg?Bi(t,0):pg|=n),Wt(t,e)}function OI(t,e){e===0&&(t.mode&1?(e=Su,Su<<=1,!(Su&130023424)&&(Su=4194304)):e=1);var n=Ot();t=pr(t,e),t!==null&&(Ol(t,e,n),Wt(t,n))}function hN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),OI(t,n)}function dN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),OI(t,n)}var LI;LI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,ZP(t,e,n);zt=!!(t.flags&131072)}else zt=!1,be&&e.flags&1048576&&jT(e,Ac,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tc(t,e),t=e.pendingProps;var i=eo(e,kt.current);qs(e,n),i=lg(null,e,r,t,i,n);var s=ug();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,Rc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rg(e),i.updater=Nh,e.stateNode=i,i._reactInternals=e,Tp(e,r,t,n),e=Sp(null,e,r,!0,s,n)):(e.tag=0,be&&s&&Ym(e),bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pN(r),t=yn(r,t),i){case 0:e=Cp(null,e,r,t,n);break e;case 1:e=ew(null,e,r,t,n);break e;case 11:e=Jv(null,e,r,t,n);break e;case 14:e=Zv(null,e,r,yn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Cp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),ew(t,e,r,i,n);case 3:e:{if(yI(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qT(t,e),xc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=io(Error(z(423)),e),e=tw(t,e,r,n,i);break e}else if(r!==i){i=io(Error(z(424)),e),e=tw(t,e,r,n,i);break e}else for(Yt=Kr(e.stateNode.containerInfo.firstChild),Jt=e,be=!0,wn=null,n=$T(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(to(),r===i){e=mr(t,e,n);break e}bt(t,e,r,n)}e=e.child}return e;case 5:return HT(e),t===null&&vp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pp(r,i)?o=null:s!==null&&pp(r,s)&&(e.flags|=32),_I(t,e),bt(t,e,o,n),e.child;case 6:return t===null&&vp(e),null;case 13:return vI(t,e,n);case 4:return ig(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=no(e,null,r,n):bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),Jv(t,e,r,i,n);case 7:return bt(t,e,e.pendingProps,n),e.child;case 8:return bt(t,e,e.pendingProps.children,n),e.child;case 12:return bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Se(Pc,r._currentValue),r._currentValue=o,s!==null)if(Pn(s.value,o)){if(s.children===i.children&&!Bt.current){e=mr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=ur(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),wp(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qs(e,n),i=un(i),r=r(i),e.flags|=1,bt(t,e,r,n),e.child;case 14:return r=e.type,i=yn(r,e.pendingProps),i=yn(r.type,i),Zv(t,e,r,i,n);case 15:return mI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yn(r,i),tc(t,e),e.tag=1,$t(r)?(t=!0,Rc(e)):t=!1,qs(e,n),dI(e,r,i),Tp(e,r,i,n),Sp(null,e,r,!0,t,n);case 19:return wI(t,e,n);case 22:return gI(t,e,n)}throw Error(z(156,e.tag))};function MI(t,e){return uT(t,e)}function fN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,r){return new fN(t,e,n,r)}function vg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pN(t){if(typeof t=="function")return vg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fm)return 11;if(t===jm)return 14}return 2}function Jr(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ic(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")vg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case As:return $i(n.children,i,s,e);case Vm:o=8,i|=8;break;case Hf:return t=on(12,n,e,i|2),t.elementType=Hf,t.lanes=s,t;case Gf:return t=on(13,n,e,i),t.elementType=Gf,t.lanes=s,t;case Kf:return t=on(19,n,e,i),t.elementType=Kf,t.lanes=s,t;case H0:return Dh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W0:o=10;break e;case q0:o=9;break e;case Fm:o=11;break e;case jm:o=14;break e;case Nr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=on(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $i(t,e,n,r){return t=on(7,t,r,e),t.lanes=n,t}function Dh(t,e,n,r){return t=on(22,t,r,e),t.elementType=H0,t.lanes=n,t.stateNode={isHidden:!1},t}function vf(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function wf(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zd(0),this.expirationTimes=Zd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wg(t,e,n,r,i,s,o,a,u){return t=new mN(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=on(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rg(s),t}function gN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function VI(t){if(!t)return ai;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if($t(n))return VT(t,n,e)}return e}function FI(t,e,n,r,i,s,o,a,u){return t=wg(n,r,!0,t,i,s,o,a,u),t.context=VI(null),n=t.current,r=Ot(),i=Xr(n),s=ur(r,i),s.callback=e??null,Qr(n,s,i),t.current.lanes=i,Ol(t,i,r),Wt(t,r),t}function Oh(t,e,n,r){var i=e.current,s=Ot(),o=Xr(i);return n=VI(n),e.context===null?e.context=n:e.pendingContext=n,e=ur(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qr(i,e,o),t!==null&&(Rn(t,i,o,s),Ju(t,i,o)),o}function jc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Eg(t,e){hw(t,e),(t=t.alternate)&&hw(t,e)}function _N(){return null}var jI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tg(t){this._internalRoot=t}Lh.prototype.render=Tg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Oh(t,e,null,null)};Lh.prototype.unmount=Tg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yi(function(){Oh(null,t,null,null)}),e[fr]=null}};function Lh(t){this._internalRoot=t}Lh.prototype.unstable_scheduleHydration=function(t){if(t){var e=gT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<br.length&&e!==0&&e<br[n].priority;n++);br.splice(n,0,t),n===0&&yT(t)}};function Ig(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dw(){}function yN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=jc(o);s.call(c)}}var o=FI(e,r,t,0,null,!1,!1,"",dw);return t._reactRootContainer=o,t[fr]=o.current,Za(t.nodeType===8?t.parentNode:t),Yi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=jc(u);a.call(c)}}var u=wg(t,0,!1,null,null,!1,!1,"",dw);return t._reactRootContainer=u,t[fr]=u.current,Za(t.nodeType===8?t.parentNode:t),Yi(function(){Oh(e,u,n,r)}),u}function Vh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=jc(o);a.call(u)}}Oh(e,o,t,i)}else o=yN(n,e,t,i,r);return jc(o)}pT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(Bm(e,n|1),Wt(e,qe()),!(fe&6)&&(so=qe()+500,wi()))}break;case 13:Yi(function(){var r=pr(t,1);if(r!==null){var i=Ot();Rn(r,t,1,i)}}),Eg(t,1)}};$m=function(t){if(t.tag===13){var e=pr(t,134217728);if(e!==null){var n=Ot();Rn(e,t,134217728,n)}Eg(t,134217728)}};mT=function(t){if(t.tag===13){var e=Xr(t),n=pr(t,e);if(n!==null){var r=Ot();Rn(n,t,e,r)}Eg(t,e)}};gT=function(){return ve};_T=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};ip=function(t,e,n){switch(e){case"input":if(Xf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=kh(r);if(!i)throw Error(z(90));K0(r),Xf(r,i)}}}break;case"textarea":Y0(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};rT=gg;iT=Yi;var vN={usingClientEntryPoint:!1,Events:[Ml,bs,kh,tT,nT,gg]},aa={findFiberByHostInstance:Vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wN={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=aT(t),t===null?null:t.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||_N,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Ih=Mu.inject(wN),jn=Mu}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vN;tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ig(e))throw Error(z(200));return gN(t,e,null,n)};tn.createRoot=function(t,e){if(!Ig(t))throw Error(z(299));var n=!1,r="",i=jI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wg(t,1,!1,null,null,n,!1,r,i),t[fr]=e.current,Za(t.nodeType===8?t.parentNode:t),new Tg(e)};tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=aT(e),t=t===null?null:t.stateNode,t};tn.flushSync=function(t){return Yi(t)};tn.hydrate=function(t,e,n){if(!Mh(e))throw Error(z(200));return Vh(null,t,e,!0,n)};tn.hydrateRoot=function(t,e,n){if(!Ig(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=jI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=FI(e,null,t,1,n??null,i,!1,s,o),t[fr]=e.current,Za(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lh(e)};tn.render=function(t,e,n){if(!Mh(e))throw Error(z(200));return Vh(null,t,e,!1,n)};tn.unmountComponentAtNode=function(t){if(!Mh(t))throw Error(z(40));return t._reactRootContainer?(Yi(function(){Vh(null,null,t,!1,function(){t._reactRootContainer=null,t[fr]=null})}),!0):!1};tn.unstable_batchedUpdates=gg;tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mh(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Vh(t,e,n,!1,r)};tn.version="18.3.1-next-f1338f8080-20240426";function UI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(UI)}catch(t){console.error(t)}}UI(),U0.exports=tn;var EN=U0.exports,fw=EN;Wf.createRoot=fw.createRoot,Wf.hydrateRoot=fw.hydrateRoot;const TN="modulepreload",IN=function(t){return"/community/"+t},pw={},xn=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=IN(u),u in pw)return;pw[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":TN,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,w)=>{f.addEventListener("load",m),f.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ll.apply(null,arguments)}var jr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(jr||(jr={}));const mw="popstate";function CN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Vp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Uc(i)}return RN(e,n,null,t)}function $e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SN(){return Math.random().toString(36).substr(2,8)}function gw(t,e){return{usr:t.state,key:t.key,idx:e}}function Vp(t,e,n,r){return n===void 0&&(n=null),ll({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ko(e):e,{state:n,key:e&&e.key||r||SN()})}function Uc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ko(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function RN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=jr.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(ll({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=jr.Pop;let x=h(),S=x==null?null:x-c;c=x,u&&u({action:a,location:A.location,delta:S})}function m(x,S){a=jr.Push;let T=Vp(A.location,x,S);c=h()+1;let k=gw(T,c),O=A.createHref(T);try{o.pushState(k,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&u&&u({action:a,location:A.location,delta:1})}function w(x,S){a=jr.Replace;let T=Vp(A.location,x,S);c=h();let k=gw(T,c),O=A.createHref(T);o.replaceState(k,"",O),s&&u&&u({action:a,location:A.location,delta:0})}function C(x){let S=i.location.origin!=="null"?i.location.origin:i.location.href,T=typeof x=="string"?x:Uc(x);return T=T.replace(/ $/,"%20"),$e(S,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,S)}let A={get action(){return a},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(mw,f),u=x,()=>{i.removeEventListener(mw,f),u=null}},createHref(x){return e(i,x)},createURL:C,encodeLocation(x){let S=C(x);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:w,go(x){return o.go(x)}};return A}var _w;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_w||(_w={}));function kN(t,e,n){return n===void 0&&(n="/"),AN(t,e,n)}function AN(t,e,n,r){let i=typeof e=="string"?ko(e):e,s=oo(i.pathname||"/",n);if(s==null)return null;let o=BI(t);PN(o);let a=null,u=UN(s);for(let c=0;a==null&&c<o.length;++c)a=FN(o[c],u);return a}function BI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&($e(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Zr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&($e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),BI(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:MN(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of $I(s.path))i(s,o,u)}),e}function $I(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$I(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function PN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const NN=/^:[\w-]+$/,xN=3,bN=2,DN=1,ON=10,LN=-2,yw=t=>t==="*";function MN(t,e){let n=t.split("/"),r=n.length;return n.some(yw)&&(r+=LN),e&&(r+=bN),n.filter(i=>!yw(i)).reduce((i,s)=>i+(NN.test(s)?xN:s===""?DN:ON),r)}function VN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function FN(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=Fp({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),m=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Zr([s,f.pathname]),pathnameBase:$N(Zr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Zr([s,f.pathnameBase]))}return o}function Fp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=jN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:w}=h;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const C=a[f];return w&&!C?c[m]=void 0:c[m]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function jN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function UN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function oo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function zN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ko(t):t,s;return n?(n=HI(n),n.startsWith("/")?s=vw(n.substring(1),"/"):s=vw(n,e)):s=e,{pathname:s,search:WN(r),hash:qN(i)}}function vw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ef(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function BN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function WI(t,e){let n=BN(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qI(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ko(t):(i=ll({},t),$e(!i.pathname||!i.pathname.includes("?"),Ef("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),Ef("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),Ef("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=zN(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const HI=t=>t.replace(/\/\/+/g,"/"),Zr=t=>HI(t.join("/")),$N=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),WN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function HN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const GI=["post","put","patch","delete"];new Set(GI);const GN=["get",...GI];new Set(GN);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ul(){return ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ul.apply(null,arguments)}const Fh=D.createContext(null),KI=D.createContext(null),Ei=D.createContext(null),jh=D.createContext(null),Tr=D.createContext({outlet:null,matches:[],isDataRoute:!1}),QI=D.createContext(null);function KN(t,e){let{relative:n}=e===void 0?{}:e;Fl()||$e(!1);let{basename:r,navigator:i}=D.useContext(Ei),{hash:s,pathname:o,search:a}=Uh(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Zr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Fl(){return D.useContext(jh)!=null}function dn(){return Fl()||$e(!1),D.useContext(jh).location}function YI(t){D.useContext(Ei).static||D.useLayoutEffect(t)}function ls(){let{isDataRoute:t}=D.useContext(Tr);return t?ux():QN()}function QN(){Fl()||$e(!1);let t=D.useContext(Fh),{basename:e,future:n,navigator:r}=D.useContext(Ei),{matches:i}=D.useContext(Tr),{pathname:s}=dn(),o=JSON.stringify(WI(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return YI(()=>{a.current=!0}),D.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=qI(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Zr([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}const YN=D.createContext(null);function XN(t){let e=D.useContext(Tr).outlet;return e&&D.createElement(YN.Provider,{value:t},e)}function h3(){let{matches:t}=D.useContext(Tr),e=t[t.length-1];return e?e.params:{}}function Uh(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(Ei),{matches:i}=D.useContext(Tr),{pathname:s}=dn(),o=JSON.stringify(WI(i,r.v7_relativeSplatPath));return D.useMemo(()=>qI(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function JN(t,e){return ZN(t,e)}function ZN(t,e,n,r){Fl()||$e(!1);let{navigator:i}=D.useContext(Ei),{matches:s}=D.useContext(Tr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=dn(),h;if(e){var f;let x=typeof e=="string"?ko(e):e;u==="/"||(f=x.pathname)!=null&&f.startsWith(u)||$e(!1),h=x}else h=c;let m=h.pathname||"/",w=m;if(u!=="/"){let x=u.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let C=kN(t,{pathname:w}),A=ix(C&&C.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:Zr([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:Zr([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&A?D.createElement(jh.Provider,{value:{location:ul({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:jr.Pop}},A):A}function ex(){let t=lx(),e=HN(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const tx=D.createElement(ex,null);class nx extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Tr.Provider,{value:this.props.routeContext},D.createElement(QI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rx(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(Fh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Tr.Provider,{value:e},r)}function ix(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||$e(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:w}=n,C=f.route.loader&&m[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let w,C=!1,A=null,x=null;n&&(w=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||tx,u&&(c<0&&m===0?(cx("route-fallback"),C=!0,x=null):c===m&&(C=!0,x=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),T=()=>{let k;return w?k=A:C?k=x:f.route.Component?k=D.createElement(f.route.Component,null):f.route.element?k=f.route.element:k=h,D.createElement(rx,{match:f,routeContext:{outlet:h,matches:S,isDataRoute:n!=null},children:k})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?D.createElement(nx,{location:n.location,revalidation:n.revalidation,component:A,error:w,children:T(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):T()},null)}var XI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(XI||{}),JI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(JI||{});function sx(t){let e=D.useContext(Fh);return e||$e(!1),e}function ox(t){let e=D.useContext(KI);return e||$e(!1),e}function ax(t){let e=D.useContext(Tr);return e||$e(!1),e}function ZI(t){let e=ax(),n=e.matches[e.matches.length-1];return n.route.id||$e(!1),n.route.id}function lx(){var t;let e=D.useContext(QI),n=ox(),r=ZI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ux(){let{router:t}=sx(XI.UseNavigateStable),e=ZI(JI.UseNavigateStable),n=D.useRef(!1);return YI(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ul({fromRouteId:e},s)))},[t,e])}const ww={};function cx(t,e,n){ww[t]||(ww[t]=!0)}function hx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function eC(t){return XN(t.context)}function et(t){$e(!1)}function dx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=jr.Pop,navigator:s,static:o=!1,future:a}=t;Fl()&&$e(!1);let u=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:u,navigator:s,static:o,future:ul({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=ko(r));let{pathname:h="/",search:f="",hash:m="",state:w=null,key:C="default"}=r,A=D.useMemo(()=>{let x=oo(h,u);return x==null?null:{location:{pathname:x,search:f,hash:m,state:w,key:C},navigationType:i}},[u,h,f,m,w,C,i]);return A==null?null:D.createElement(Ei.Provider,{value:c},D.createElement(jh.Provider,{children:n,value:A}))}function fx(t){let{children:e,location:n}=t;return JN(jp(e),n)}new Promise(()=>{});function jp(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,jp(r.props.children,s));return}r.type!==et&&$e(!1),!r.props.index||!r.props.children||$e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=jp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zc(){return zc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zc.apply(null,arguments)}function tC(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function px(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function mx(t,e){return t.button===0&&(!e||e==="_self")&&!px(t)}function Up(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function gx(t,e){let n=Up(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const _x=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],yx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],vx="6";try{window.__reactRouterVersion=vx}catch{}const wx=D.createContext({isTransitioning:!1}),Ex="startTransition",Ew=cA[Ex];function Tx(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=CN({window:i,v5Compat:!0}));let o=s.current,[a,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=D.useCallback(f=>{c&&Ew?Ew(()=>u(f)):u(f)},[u,c]);return D.useLayoutEffect(()=>o.listen(h),[o,h]),D.useEffect(()=>hx(r),[r]),D.createElement(dx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Ix=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cl=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,viewTransition:f}=e,m=tC(e,_x),{basename:w}=D.useContext(Ei),C,A=!1;if(typeof c=="string"&&Cx.test(c)&&(C=c,Ix))try{let k=new URL(window.location.href),O=c.startsWith("//")?new URL(k.protocol+c):new URL(c),j=oo(O.pathname,w);O.origin===k.origin&&j!=null?c=j+O.search+O.hash:A=!0}catch{}let x=KN(c,{relative:i}),S=Rx(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:f});function T(k){r&&r(k),k.defaultPrevented||S(k)}return D.createElement("a",zc({},m,{href:C||x,onClick:A||s?r:T,ref:n,target:u}))}),Vn=D.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,viewTransition:c,children:h}=e,f=tC(e,yx),m=Uh(u,{relative:f.relative}),w=dn(),C=D.useContext(KI),{navigator:A,basename:x}=D.useContext(Ei),S=C!=null&&kx(m)&&c===!0,T=A.encodeLocation?A.encodeLocation(m).pathname:m.pathname,k=w.pathname,O=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(k=k.toLowerCase(),O=O?O.toLowerCase():null,T=T.toLowerCase()),O&&x&&(O=oo(O,x)||O);const j=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let M=k===T||!o&&k.startsWith(T)&&k.charAt(j)==="/",v=O!=null&&(O===T||!o&&O.startsWith(T)&&O.charAt(T.length)==="/"),_={isActive:M,isPending:v,isTransitioning:S},I=M?r:void 0,R;typeof s=="function"?R=s(_):R=[s,M?"active":null,v?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(_):a;return D.createElement(cl,zc({},f,{"aria-current":I,className:R,ref:n,style:P,to:u,viewTransition:c}),typeof h=="function"?h(_):h)});var zp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(zp||(zp={}));var Tw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Tw||(Tw={}));function Sx(t){let e=D.useContext(Fh);return e||$e(!1),e}function Rx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=ls(),c=dn(),h=Uh(t,{relative:o});return D.useCallback(f=>{if(mx(f,n)){f.preventDefault();let m=r!==void 0?r:Uc(c)===Uc(h);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}function d3(t){let e=D.useRef(Up(t)),n=D.useRef(!1),r=dn(),i=D.useMemo(()=>gx(r.search,n.current?null:e.current),[r.search]),s=ls(),o=D.useCallback((a,u)=>{const c=Up(typeof a=="function"?a(i):a);n.current=!0,s("?"+c,u)},[s,i]);return[i,o]}function kx(t,e){e===void 0&&(e={});let n=D.useContext(wx);n==null&&$e(!1);let{basename:r}=Sx(zp.useViewTransitionState),i=Uh(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=oo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=oo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Fp(i.pathname,o)!=null||Fp(i.pathname,s)!=null}var Iw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw Ao(e)},Ao=function(t){return new Error("Firebase Database ("+nC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ax=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[h],n[f],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rC(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ax(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Px;const m=s<<2|a>>4;if(r.push(m),c!==64){const w=a<<4&240|c>>2;if(r.push(w),f!==64){const C=c<<6&192|f;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Px extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iC=function(t){const e=rC(t);return Cg.encodeByteArray(e,!0)},Bc=function(t){return iC(t).replace(/\./g,"")},$c=function(t){try{return Cg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(t){return sC(void 0,t)}function sC(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xx(n)||(t[n]=sC(t[n],e[n]));return t}function xx(t){return t!=="__proto__"}/**
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
 */function bx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dx=()=>bx().__FIREBASE_DEFAULTS__,Ox=()=>{if(typeof process>"u"||typeof Iw>"u")return;const t=Iw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$c(t[1]);return e&&JSON.parse(e)},zh=()=>{try{return Dx()||Ox()||Lx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oC=t=>{var e,n;return(n=(e=zh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aC=t=>{const e=oC(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lC=()=>{var t;return(t=zh())===null||t===void 0?void 0:t.config},uC=t=>{var e;return(e=zh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bc(JSON.stringify(n)),Bc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function Mx(){var t;const e=(t=zh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jx(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ux(){return nC.NODE_ADMIN===!0}function zx(){return!Mx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bx(){try{return typeof indexedDB=="object"}catch{return!1}}function $x(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx="FirebaseError";class Ir extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Wx,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jl.prototype.create)}}class jl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ir(i,a,r)}}function qx(t,e){return t.replace(Hx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Hx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t){return JSON.parse(t)}function Xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=hl($c(s[0])||""),n=hl($c(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Gx=function(t){const e=dC(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Kx=function(t){const e=dC(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Hc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cw(s)&&Cw(o)){if(!Hc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ya(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function va(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const m=(i<<5|i>>>27)+c+u+h+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Yx(t,e){const n=new Xx(t,e);return n.subscribe.bind(n)}class Xx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Jx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Tf),i.error===void 0&&(i.error=Tf),i.complete===void 0&&(i.complete=Tf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Tf(){}function ao(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function pe(t){return t&&t._delegate?t._delegate:t}class li{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Li="[DEFAULT]";/**
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
 */class eb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new En;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nb(e))try{this.getOrInitializeService({instanceIdentifier:Li})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Li){return this.instances.has(e)}getOptions(e=Li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Li){return this.component?this.component.multipleInstances?e:Li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tb(t){return t===Li?void 0:t}function nb(t){return t.instantiationMode==="EAGER"}/**
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
 */class rb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const ib={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},sb=ce.INFO,ob={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},ab=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ob[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $h{constructor(e){this.name=e,this._logLevel=sb,this._logHandler=ab,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ib[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const lb=(t,e)=>e.some(n=>t instanceof n);let Sw,Rw;function ub(){return Sw||(Sw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cb(){return Rw||(Rw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fC=new WeakMap,Bp=new WeakMap,pC=new WeakMap,If=new WeakMap,Rg=new WeakMap;function hb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ei(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fC.set(n,t)}).catch(()=>{}),Rg.set(e,t),e}function db(t){if(Bp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bp.set(t,e)}let $p={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ei(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fb(t){$p=t($p)}function pb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cf(this),e,...n);return pC.set(r,e.sort?e.sort():[e]),ei(r)}:cb().includes(t)?function(...e){return t.apply(Cf(this),e),ei(fC.get(this))}:function(...e){return ei(t.apply(Cf(this),e))}}function mb(t){return typeof t=="function"?pb(t):(t instanceof IDBTransaction&&db(t),lb(t,ub())?new Proxy(t,$p):t)}function ei(t){if(t instanceof IDBRequest)return hb(t);if(If.has(t))return If.get(t);const e=mb(t);return e!==t&&(If.set(t,e),Rg.set(e,t)),e}const Cf=t=>Rg.get(t);function gb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ei(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ei(o.result),u.oldVersion,u.newVersion,ei(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const _b=["get","getKey","getAll","getAllKeys","count"],yb=["put","add","delete","clear"],Sf=new Map;function kw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sf.get(e))return Sf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_b.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Sf.set(e,s),s}fb(t=>({...t,get:(e,n,r)=>kw(e,n)||t.get(e,n,r),has:(e,n)=>!!kw(e,n)||t.has(e,n)}));/**
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
 */class vb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wp="@firebase/app",Aw="0.10.13";/**
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
 */const gr=new $h("@firebase/app"),Eb="@firebase/app-compat",Tb="@firebase/analytics-compat",Ib="@firebase/analytics",Cb="@firebase/app-check-compat",Sb="@firebase/app-check",Rb="@firebase/auth",kb="@firebase/auth-compat",Ab="@firebase/database",Pb="@firebase/data-connect",Nb="@firebase/database-compat",xb="@firebase/functions",bb="@firebase/functions-compat",Db="@firebase/installations",Ob="@firebase/installations-compat",Lb="@firebase/messaging",Mb="@firebase/messaging-compat",Vb="@firebase/performance",Fb="@firebase/performance-compat",jb="@firebase/remote-config",Ub="@firebase/remote-config-compat",zb="@firebase/storage",Bb="@firebase/storage-compat",$b="@firebase/firestore",Wb="@firebase/vertexai-preview",qb="@firebase/firestore-compat",Hb="firebase",Gb="10.14.1";/**
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
 */const qp="[DEFAULT]",Kb={[Wp]:"fire-core",[Eb]:"fire-core-compat",[Ib]:"fire-analytics",[Tb]:"fire-analytics-compat",[Sb]:"fire-app-check",[Cb]:"fire-app-check-compat",[Rb]:"fire-auth",[kb]:"fire-auth-compat",[Ab]:"fire-rtdb",[Pb]:"fire-data-connect",[Nb]:"fire-rtdb-compat",[xb]:"fire-fn",[bb]:"fire-fn-compat",[Db]:"fire-iid",[Ob]:"fire-iid-compat",[Lb]:"fire-fcm",[Mb]:"fire-fcm-compat",[Vb]:"fire-perf",[Fb]:"fire-perf-compat",[jb]:"fire-rc",[Ub]:"fire-rc-compat",[zb]:"fire-gcs",[Bb]:"fire-gcs-compat",[$b]:"fire-fst",[qb]:"fire-fst-compat",[Wb]:"fire-vertex","fire-js":"fire-js",[Hb]:"fire-js-all"};/**
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
 */const Gc=new Map,Qb=new Map,Hp=new Map;function Pw(t,e){try{t.container.addComponent(e)}catch(n){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ji(t){const e=t.name;if(Hp.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;Hp.set(e,t);for(const n of Gc.values())Pw(n,t);for(const n of Qb.values())Pw(n,t);return!0}function Wh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function In(t){return t.settings!==void 0}/**
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
 */const Yb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ti=new jl("app","Firebase",Yb);/**
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
 */class Xb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}/**
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
 */const us=Gb;function mC(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ti.create("bad-app-name",{appName:String(i)});if(n||(n=lC()),!n)throw ti.create("no-options");const s=Gc.get(i);if(s){if(Hc(n,s.options)&&Hc(r,s.config))return s;throw ti.create("duplicate-app",{appName:i})}const o=new rb(i);for(const u of Hp.values())o.addComponent(u);const a=new Xb(n,r,o);return Gc.set(i,a),a}function kg(t=qp){const e=Gc.get(t);if(!e&&t===qp&&lC())return mC();if(!e)throw ti.create("no-app",{appName:t});return e}function zn(t,e,n){var r;let i=(r=Kb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(a.join(" "));return}Ji(new li(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Jb="firebase-heartbeat-database",Zb=1,dl="firebase-heartbeat-store";let Rf=null;function gC(){return Rf||(Rf=gb(Jb,Zb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(dl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ti.create("idb-open",{originalErrorMessage:t.message})})),Rf}async function eD(t){try{const n=(await gC()).transaction(dl),r=await n.objectStore(dl).get(_C(t));return await n.done,r}catch(e){if(e instanceof Ir)gr.warn(e.message);else{const n=ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gr.warn(n.message)}}}async function Nw(t,e){try{const r=(await gC()).transaction(dl,"readwrite");await r.objectStore(dl).put(e,_C(t)),await r.done}catch(n){if(n instanceof Ir)gr.warn(n.message);else{const r=ti.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gr.warn(r.message)}}}function _C(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tD=1024,nD=30*24*60*60*1e3;class rD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xw();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=nD}),this._storage.overwrite(this._heartbeatsCache))}catch(r){gr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xw(),{heartbeatsToSend:r,unsentEntries:i}=iD(this._heartbeatsCache.heartbeats),s=Bc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return gr.warn(n),""}}}function xw(){return new Date().toISOString().substring(0,10)}function iD(t,e=tD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bx()?$x().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bw(t){return Bc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oD(t){Ji(new li("platform-logger",e=>new vb(e),"PRIVATE")),Ji(new li("heartbeat",e=>new rD(e),"PRIVATE")),zn(Wp,Aw,t),zn(Wp,Aw,"esm2017"),zn("fire-js","")}oD("");function Ag(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function f3(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(h){try{c(r.next(h))}catch(f){o(f)}}function u(h){try{c(r.throw(h))}catch(f){o(f)}}function c(h){h.done?s(h.value):i(h.value).then(a,u)}c((r=r.apply(t,e||[])).next())})}function yC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aD=yC,vC=new jl("auth","Firebase",yC());/**
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
 */const Kc=new $h("@firebase/auth");function lD(t,...e){Kc.logLevel<=ce.WARN&&Kc.warn(`Auth (${us}): ${t}`,...e)}function sc(t,...e){Kc.logLevel<=ce.ERROR&&Kc.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw xg(t,...e)}function kn(t,...e){return xg(t,...e)}function Pg(t,e,n){const r=Object.assign(Object.assign({},aD()),{[e]:n});return new jl("auth","Firebase",r).create(e,{appName:t.name})}function cr(t){return Pg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ng(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&hn(t,"argument-error"),Pg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vC.create(t,...e)}function X(t,e,...n){if(!t)throw xg(e,...n)}function sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sc(e),new Error(e)}function _r(t,e){t||sr(e)}/**
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
 */function Gp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uD(){return Dw()==="http:"||Dw()==="https:"}function Dw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uD()||Fx()||"connection"in navigator)?navigator.onLine:!0}function hD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ul{constructor(e,n){this.shortDelay=e,this.longDelay=n,_r(n>e,"Short delay should be less than long delay!"),this.isMobile=Sg()||hC()}get(){return cD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bg(t,e){_r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fD=new Ul(3e4,6e4);function Ti(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kn(t,e,n,r,i={}){return EC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Po(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Vx()||(c.referrerPolicy="no-referrer"),wC.fetch()(TC(t,t.config.apiHost,n,a),c)})}async function EC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dD),e);try{const i=new mD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Vu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Vu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pg(t,h,c);hn(t,h)}}catch(i){if(i instanceof Ir)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function qh(t,e,n,r,i={}){const s=await Kn(t,e,n,r,i);return"mfaPendingCredential"in s&&hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function TC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bg(t.config,i):`${t.config.apiScheme}://${i}`}function pD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),fD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kn(t,e,r);return i.customData._tokenResponse=n,i}function Ow(t){return t!==void 0&&t.enterprise!==void 0}class gD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _D(t,e){return Kn(t,"GET","/v2/recaptchaConfig",Ti(t,e))}/**
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
 */async function yD(t,e){return Kn(t,"POST","/v1/accounts:delete",e)}async function IC(t,e){return Kn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Oa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vD(t,e=!1){const n=pe(t),r=await n.getIdToken(e),i=Dg(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oa(kf(i.auth_time)),issuedAtTime:Oa(kf(i.iat)),expirationTime:Oa(kf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kf(t){return Number(t)*1e3}function Dg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sc("JWT malformed, contained fewer than 3 sections"),null;try{const i=$c(n);return i?JSON.parse(i):(sc("Failed to decode base64 JWT payload"),null)}catch(i){return sc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lw(t){const e=Dg(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ir&&wD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ED{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oa(this.lastLoginAt),this.creationTime=Oa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await lo(t,IC(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?CC(s.providerUserInfo):[],a=ID(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Kp(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function TD(t){const e=pe(t);await fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ID(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function CC(t){return t.map(e=>{var{providerId:n}=e,r=Ag(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function CD(t,e){const n=await EC(t,{},async()=>{const r=Po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=TC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SD(t,e){return Kn(t,"POST","/v2/accounts:revokeToken",Ti(t,e))}/**
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
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Lw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await CD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Gs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return sr("not implemented")}}/**
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
 */function Pr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class or{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ag(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ED(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lo(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vD(this,e)}reload(){return TD(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(cr(this.auth));const e=await this.getIdToken();return await lo(this,yD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:k,emailVerified:O,isAnonymous:j,providerData:M,stsTokenManager:v}=n;X(k&&v,e,"internal-error");const _=Gs.fromJSON(this.name,v);X(typeof k=="string",e,"internal-error"),Pr(f,e.name),Pr(m,e.name),X(typeof O=="boolean",e,"internal-error"),X(typeof j=="boolean",e,"internal-error"),Pr(w,e.name),Pr(C,e.name),Pr(A,e.name),Pr(x,e.name),Pr(S,e.name),Pr(T,e.name);const I=new or({uid:k,auth:e,email:m,emailVerified:O,displayName:f,isAnonymous:j,photoURL:C,phoneNumber:w,tenantId:A,stsTokenManager:_,createdAt:S,lastLoginAt:T});return M&&Array.isArray(M)&&(I.providerData=M.map(R=>Object.assign({},R))),x&&(I._redirectEventId=x),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Gs;i.updateFromServerResponse(n);const s=new or({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?CC(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Gs;a.updateFromIdToken(r);const u=new or({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Kp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Mw=new Map;function ar(t){_r(t instanceof Function,"Expected a class definition");let e=Mw.get(t);return e?(_r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mw.set(t,e),e)}/**
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
 */class SC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}SC.type="NONE";const Vw=SC;/**
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
 */function oc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=oc(this.userKey,i.apiKey,s),this.fullPersistenceKey=oc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?or._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ks(ar(Vw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||ar(Vw);const o=oc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=or._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ks(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ks(s,e,r))}}/**
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
 */function Fw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xC(e))return"Blackberry";if(bC(e))return"Webos";if(kC(e))return"Safari";if((e.includes("chrome/")||AC(e))&&!e.includes("edge/"))return"Chrome";if(NC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RC(t=At()){return/firefox\//i.test(t)}function kC(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AC(t=At()){return/crios\//i.test(t)}function PC(t=At()){return/iemobile/i.test(t)}function NC(t=At()){return/android/i.test(t)}function xC(t=At()){return/blackberry/i.test(t)}function bC(t=At()){return/webos/i.test(t)}function Og(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function RD(t=At()){var e;return Og(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kD(){return jx()&&document.documentMode===10}function DC(t=At()){return Og(t)||NC(t)||bC(t)||xC(t)||/windows phone/i.test(t)||PC(t)}/**
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
 */function OC(t,e=[]){let n;switch(t){case"Browser":n=Fw(At());break;case"Worker":n=`${Fw(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class AD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function PD(t,e={}){return Kn(t,"GET","/v2/passwordPolicy",Ti(t,e))}/**
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
 */const ND=6;class xD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ND,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class bD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jw(this),this.idTokenSubscription=new jw(this),this.beforeStateQueue=new AD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ar(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await IC(this,{idToken:e}),r=await or._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(In(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(cr(this));const n=e?pe(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PD(this),n=new xD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ar(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qn(t){return pe(t)}class jw{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yx(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DD(t){Hh=t}function LC(t){return Hh.loadJS(t)}function OD(){return Hh.recaptchaEnterpriseScript}function LD(){return Hh.gapiScript}function MD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const VD="recaptcha-enterprise",FD="NO_RECAPTCHA";class jD{constructor(e){this.type=VD,this.auth=Qn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_D(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new gD(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Ow(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(FD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ow(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=OD();u.length!==0&&(u+=a),LC(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Uw(t,e,n,r=!1){const i=new jD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Uw(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Uw(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function UD(t,e){const n=Wh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Hc(s,e??{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function zD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BD(t,e,n){const r=Qn(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=MC(e),{host:o,port:a}=$D(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),WD()}function MC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $D(t){const e=MC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:zw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:zw(o)}}}function zw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sr("not implemented")}_getIdTokenResponse(e){return sr("not implemented")}_linkToIdToken(e,n){return sr("not implemented")}_getReauthenticationResolver(e){return sr("not implemented")}}async function qD(t,e){return Kn(t,"POST","/v1/accounts:update",e)}async function HD(t,e){return Kn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function GD(t,e){return qh(t,"POST","/v1/accounts:signInWithPassword",Ti(t,e))}async function KD(t,e){return Kn(t,"POST","/v1/accounts:sendOobCode",Ti(t,e))}async function QD(t,e){return KD(t,e)}/**
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
 */async function YD(t,e){return qh(t,"POST","/v1/accounts:signInWithEmailLink",Ti(t,e))}async function XD(t,e){return qh(t,"POST","/v1/accounts:signInWithEmailLink",Ti(t,e))}/**
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
 */class pl extends Lg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new pl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new pl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qp(e,n,"signInWithPassword",GD);case"emailLink":return YD(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qp(e,r,"signUpPassword",HD);case"emailLink":return XD(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qs(t,e){return qh(t,"POST","/v1/accounts:signInWithIdp",Ti(t,e))}/**
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
 */const JD="http://localhost";class Zi extends Lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ag(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qs(e,n)}buildRequest(){const e={requestUri:JD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Po(n)}return e}}/**
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
 */function ZD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eO(t){const e=ya(va(t)).link,n=e?ya(va(e)).deep_link_id:null,r=ya(va(t)).deep_link_id;return(r?ya(va(r)).link:null)||r||n||e||t}class Mg{constructor(e){var n,r,i,s,o,a;const u=ya(va(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=ZD((i=u.mode)!==null&&i!==void 0?i:null);X(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eO(e);try{return new Mg(n)}catch{return null}}}/**
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
 */class ui{constructor(){this.providerId=ui.PROVIDER_ID}static credential(e,n){return pl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mg.parseLink(n);return X(r,"argument-error"),pl._fromEmailAndCode(e,r.code,r.tenantId)}}ui.PROVIDER_ID="password";ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bl extends zl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Or extends Bl{constructor(){super("facebook.com")}static credential(e){return Zi._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
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
 */class nr extends Bl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zi._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
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
 */class Lr extends Bl{constructor(){super("github.com")}static credential(e){return Zi._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.GITHUB_SIGN_IN_METHOD="github.com";Lr.PROVIDER_ID="github.com";/**
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
 */class Mr extends Bl{constructor(){super("twitter.com")}static credential(e,n){return Zi._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mr.credential(n,r)}catch{return null}}}Mr.TWITTER_SIGN_IN_METHOD="twitter.com";Mr.PROVIDER_ID="twitter.com";/**
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
 */class uo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await or._fromIdTokenResponse(e,r,i),o=Bw(r);return new uo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Bw(r);return new uo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Bw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qc extends Ir{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qc(e,n,r,i)}}function VC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function tO(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}async function FC(t,e,n=!1){const r=await lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return uo._forOperation(t,"link",r)}async function nO(t,e,n){await fl(e);const r=tO(e.providerData);X(r.has(n)===t,e.auth,"provider-already-linked")}/**
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
 */async function jC(t,e,n=!1){const{auth:r}=t;if(In(r.app))return Promise.reject(cr(r));const i="reauthenticate";try{const s=await lo(t,VC(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Dg(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),uo._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),s}}/**
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
 */async function UC(t,e,n=!1){if(In(t.app))return Promise.reject(cr(t));const r="signIn",i=await VC(t,r,e),s=await uo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function rO(t,e){return UC(Qn(t),e)}async function iO(t,e){const n=pe(t);return await nO(!1,n,e.providerId),FC(n,e)}async function sO(t,e){return jC(pe(t),e)}/**
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
 */async function oO(t){const e=Qn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aO(t,e,n){const r=Qn(t);await Qp(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",QD)}function lO(t,e,n){return In(t.app)?Promise.reject(cr(t)):rO(pe(t),ui.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oO(t),r})}function uO(t,e){return cO(pe(t),null,e)}async function cO(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(s.password=n);const o=await lo(t,qD(r,s));await t._updateTokensIfNecessary(o,!0)}function hO(t,e,n,r){return pe(t).onIdTokenChanged(e,n,r)}function dO(t,e,n){return pe(t).beforeAuthStateChanged(e,n)}function fO(t,e,n,r){return pe(t).onAuthStateChanged(e,n,r)}function Af(t){return pe(t).signOut()}const Yc="__sak";/**
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
 */class zC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yc,"1"),this.storage.removeItem(Yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const pO=1e3,mO=10;class BC extends zC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=DC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);kD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}BC.type="LOCAL";const gO=BC;/**
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
 */class $C extends zC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$C.type="SESSION";const WC=$C;/**
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
 */function _O(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await _O(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gh.receivers=[];/**
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
 */function Vg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Vg("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bn(){return window}function vO(t){Bn().location.href=t}/**
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
 */function qC(){return typeof Bn().WorkerGlobalScope<"u"&&typeof Bn().importScripts=="function"}async function wO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TO(){return qC()?self:null}/**
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
 */const HC="firebaseLocalStorageDb",IO=1,Xc="firebaseLocalStorage",GC="fbase_key";class $l{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kh(t,e){return t.transaction([Xc],e?"readwrite":"readonly").objectStore(Xc)}function CO(){const t=indexedDB.deleteDatabase(HC);return new $l(t).toPromise()}function Yp(){const t=indexedDB.open(HC,IO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xc,{keyPath:GC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xc)?e(r):(r.close(),await CO(),e(await Yp()))})})}async function $w(t,e,n){const r=Kh(t,!0).put({[GC]:e,value:n});return new $l(r).toPromise()}async function SO(t,e){const n=Kh(t,!1).get(e),r=await new $l(n).toPromise();return r===void 0?null:r.value}function Ww(t,e){const n=Kh(t,!0).delete(e);return new $l(n).toPromise()}const RO=800,kO=3;class KC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gh._getInstance(TO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wO(),!this.activeServiceWorker)return;this.sender=new yO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yp();return await $w(e,Yc,"1"),await Ww(e,Yc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$w(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ww(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kh(i,!1).getAll();return new $l(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KC.type="LOCAL";const AO=KC;new Ul(3e4,6e4);/**
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
 */function Qh(t,e){return e?ar(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fg extends Lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PO(t){return UC(t.auth,new Fg(t),t.bypassAuthState)}function NO(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),jC(n,new Fg(t),t.bypassAuthState)}async function xO(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),FC(n,new Fg(t),t.bypassAuthState)}/**
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
 */class QC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PO;case"linkViaPopup":case"linkViaRedirect":return xO;case"reauthViaPopup":case"reauthViaRedirect":return NO;default:hn(this.auth,"internal-error")}}resolve(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bO=new Ul(2e3,1e4);async function DO(t,e,n){if(In(t.app))return Promise.reject(kn(t,"operation-not-supported-in-this-environment"));const r=Qn(t);Ng(t,e,zl);const i=Qh(r,n);return new Ur(r,"signInViaPopup",e,i).executeNotNull()}async function OO(t,e,n){const r=pe(t);Ng(r.auth,e,zl);const i=Qh(r.auth,n);return new Ur(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Ur extends QC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){_r(this.filter.length===1,"Popup operations only handle one event");const e=Vg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bO.get())};e()}}Ur.currentPopupAction=null;/**
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
 */const LO="pendingRedirect",ac=new Map;class MO extends QC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ac.get(this.auth._key());if(!e){try{const r=await VO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ac.set(this.auth._key(),e)}return this.bypassAuthState||ac.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VO(t,e){const n=XC(e),r=YC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function FO(t,e){return YC(t)._set(XC(e),"true")}function jO(t,e){ac.set(t._key(),e)}function YC(t){return ar(t._redirectPersistence)}function XC(t){return oc(LO,t.config.apiKey,t.name)}/**
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
 */function qw(t,e,n){return UO(t,e,n)}async function UO(t,e,n){if(In(t.app))return Promise.reject(cr(t));const r=Qn(t);Ng(t,e,zl),await r._initializationPromise;const i=Qh(r,n);return await FO(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function zO(t,e){return await Qn(t)._initializationPromise,JC(t,e,!1)}async function JC(t,e,n=!1){if(In(t.app))return Promise.reject(cr(t));const r=Qn(t),i=Qh(r,e),o=await new MO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const BO=10*60*1e3;class $O{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ZC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hw(e))}saveEventToCache(e){this.cachedEventUids.add(Hw(e)),this.lastProcessedEventTime=Date.now()}}function Hw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ZC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZC(t);default:return!1}}/**
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
 */async function qO(t,e={}){return Kn(t,"GET","/v1/projects",e)}/**
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
 */const HO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GO=/^https?/;async function KO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qO(t);for(const n of e)try{if(QO(n))return}catch{}hn(t,"unauthorized-domain")}function QO(t){const e=Gp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GO.test(n))return!1;if(HO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const YO=new Ul(3e4,6e4);function Gw(){const t=Bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XO(t){return new Promise((e,n)=>{var r,i,s;function o(){Gw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gw(),n(kn(t,"network-request-failed"))},timeout:YO.get()})}if(!((i=(r=Bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bn().gapi)===null||s===void 0)&&s.load)o();else{const a=MD("iframefcb");return Bn()[a]=()=>{gapi.load?o():n(kn(t,"network-request-failed"))},LC(`${LD()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw lc=null,e})}let lc=null;function JO(t){return lc=lc||XO(t),lc}/**
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
 */const ZO=new Ul(5e3,15e3),e2="__/auth/iframe",t2="emulator/auth/iframe",n2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},r2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function i2(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bg(e,t2):`https://${t.config.authDomain}/${e2}`,r={apiKey:e.apiKey,appName:t.name,v:us},i=r2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Po(r).slice(1)}`}async function s2(t){const e=await JO(t),n=Bn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:i2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kn(t,"network-request-failed"),a=Bn().setTimeout(()=>{s(o)},ZO.get());function u(){Bn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const o2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},a2=500,l2=600,u2="_blank",c2="http://localhost";class Kw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function h2(t,e,n,r=a2,i=l2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},o2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=At().toLowerCase();n&&(a=AC(c)?u2:n),RC(c)&&(e=e||c2,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[w,C])=>`${m}${w}=${C},`,"");if(RD(c)&&a!=="_self")return d2(e||"",a),new Kw(null);const f=window.open(e||"",a,h);X(f,t,"popup-blocked");try{f.focus()}catch{}return new Kw(f)}function d2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const f2="__/auth/handler",p2="emulator/auth/handler",m2=encodeURIComponent("fac");async function Qw(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:i};if(e instanceof zl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Bl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${m2}=${encodeURIComponent(u)}`:"";return`${g2(t)}?${Po(a).slice(1)}${c}`}function g2({config:t}){return t.emulator?bg(t,p2):`https://${t.authDomain}/${f2}`}/**
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
 */const Pf="webStorageSupport";class _2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=WC,this._completeRedirectFn=JC,this._overrideRedirectResult=jO}async _openPopup(e,n,r,i){var s;_r((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Qw(e,n,r,Gp(),i);return h2(e,o,Vg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Qw(e,n,r,Gp(),i);return vO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_r(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await s2(e),r=new $O(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pf,{type:Pf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pf];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return DC()||kC()||Og()}}const y2=_2;var Yw="@firebase/auth",Xw="1.7.9";/**
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
 */class v2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function w2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function E2(t){Ji(new li("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OC(t)},c=new bD(r,i,s,u);return zD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ji(new li("auth-internal",e=>{const n=Qn(e.getProvider("auth").getImmediate());return(r=>new v2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(Yw,Xw,w2(t)),zn(Yw,Xw,"esm2017")}/**
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
 */const T2=5*60,I2=uC("authIdTokenMaxAge")||T2;let Jw=null;const C2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>I2)return;const i=n==null?void 0:n.token;Jw!==i&&(Jw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function S2(t=kg()){const e=Wh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UD(t,{popupRedirectResolver:y2,persistence:[AO,gO,WC]}),r=uC("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=C2(s.toString());dO(n,o,()=>o(n.currentUser)),hO(n,a=>o(a))}}const i=oC("auth");return i&&BD(n,`http://${i}`),n}function R2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}DD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",R2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});E2("Browser");var Zw={};const eE="@firebase/database",tE="1.0.8";/**
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
 */let eS="";function k2(t){eS=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new A2(e)}}catch{}return new P2},Ui=tS("localStorage"),N2=tS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new $h("@firebase/database"),nS=function(){let t=1;return function(){return t++}}(),rS=function(t){const e=Zx(t),n=new Qx;n.update(e);const r=n.digest();return Cg.encodeByteArray(r)},Wl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Wl.apply(null,r):typeof r=="object"?e+=Xe(r):e+=r,e+=" "}return e};let La=null,nE=!0;const x2=function(t,e){B(!0,"Can't turn on custom loggers persistently."),Ys.logLevel=ce.VERBOSE,La=Ys.log.bind(Ys)},it=function(...t){if(nE===!0&&(nE=!1,La===null&&N2.get("logging_enabled")===!0&&x2()),La){const e=Wl.apply(null,t);La(e)}},ql=function(t){return function(...e){it(t,...e)}},Xp=function(...t){const e="FIREBASE INTERNAL ERROR: "+Wl(...t);Ys.error(e)},yr=function(...t){const e=`FIREBASE FATAL ERROR: ${Wl(...t)}`;throw Ys.error(e),new Error(e)},Lt=function(...t){const e="FIREBASE WARNING: "+Wl(...t);Ys.warn(e)},b2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},D2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},es="[MIN_NAME]",ci="[MAX_NAME]",cs=function(t,e){if(t===e)return 0;if(t===es||e===ci)return-1;if(e===es||t===ci)return 1;{const n=rE(t),r=rE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},O2=function(t,e){return t===e?0:t<e?-1:1},la=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Xe(e))},jg=function(t){if(typeof t!="object"||t===null)return Xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Xe(e[r]),n+=":",n+=jg(t[e[r]]);return n+="}",n},iS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const sS=function(t){B(!Yh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(h.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},L2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},M2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function V2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const F2=new RegExp("^-?(0*)\\d{1,10}$"),j2=-2147483648,U2=2147483647,rE=function(t){if(F2.test(t)){const e=Number(t);if(e>=j2&&e<=U2)return e}return null},No=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},z2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ma=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class B2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Lt(e)}}class uc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}uc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="5",oS="v",aS="s",lS="r",uS="f",cS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hS="ls",dS="p",Jp="ac",fS="websocket",pS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ui.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ui.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function W2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function gS(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===fS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===pS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);W2(t)&&(n.ns=t.namespace);const i=[];return ot(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(){this.counters_={}}incrementCounter(e,n=1){bn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Nx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf={},xf={};function zg(t){const e=t.toString();return Nf[e]||(Nf[e]=new q2),Nf[e]}function H2(t,e){const n=t.toString();return xf[n]||(xf[n]=e()),xf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&No(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="start",K2="close",Q2="pLPCommand",Y2="pRTLPCB",_S="id",yS="pw",vS="ser",X2="cb",J2="seg",Z2="ts",eL="d",tL="dframe",wS=1870,ES=30,nL=wS-ES,rL=25e3,iL=3e4;class js{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ql(e),this.stats_=zg(n),this.urlFn=u=>(this.appCheckToken&&(u[Jp]=this.appCheckToken),gS(n,pS,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new G2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iL)),D2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bg((...s)=>{const[o,a,u,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===iE)this.id=a,this.password=u;else if(o===K2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[iE]="t",r[vS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[X2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[oS]=Ug,this.transportSessionId&&(r[aS]=this.transportSessionId),this.lastSessionId&&(r[hS]=this.lastSessionId),this.applicationId&&(r[dS]=this.applicationId),this.appCheckToken&&(r[Jp]=this.appCheckToken),typeof location<"u"&&location.hostname&&cS.test(location.hostname)&&(r[lS]=uS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){js.forceAllow_=!0}static forceDisallow(){js.forceDisallow_=!0}static isAvailable(){return js.forceAllow_?!0:!js.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!L2()&&!M2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=iC(n),i=iS(r,nL);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[tL]="t",r[_S]=e,r[yS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nS(),window[Q2+this.uniqueCallbackIdentifier]=e,window[Y2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){it("frame writing exception"),a.stack&&it(a.stack),it(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_S]=this.myID,e[yS]=this.myPW,e[vS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ES+r.length<=wS;){const o=this.pendingSegs.shift();r=r+"&"+J2+i+"="+o.seg+"&"+Z2+i+"="+o.ts+"&"+eL+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(rL)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=16384,oL=45e3;let Jc=null;typeof MozWebSocket<"u"?Jc=MozWebSocket:typeof WebSocket<"u"&&(Jc=WebSocket);class Tn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ql(this.connId),this.stats_=zg(n),this.connURL=Tn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[oS]=Ug,typeof location<"u"&&location.hostname&&cS.test(location.hostname)&&(o[lS]=uS),n&&(o[aS]=n),r&&(o[hS]=r),i&&(o[Jp]=i),s&&(o[dS]=s),gS(e,fS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ui.set("previous_websocket_failure",!0);try{let r;Ux(),this.mySock=new Jc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Jc!==null&&!Tn.forceDisallow_}static previouslyFailed(){return Ui.isInMemoryStorage||Ui.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ui.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=hl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=iS(n,sL);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oL))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tn.responsesRequiredToBeHealthy=2;Tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[js,Tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Tn&&Tn.isAvailable();let r=n&&!Tn.previouslyFailed();if(e.webSocketOnly&&(n||Lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Tn];else{const i=this.transports_=[];for(const s of ml.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ml.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ml.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=6e4,lL=5e3,uL=10*1024,cL=100*1024,bf="t",sE="d",hL="s",oE="r",dL="e",aE="o",lE="a",uE="n",cE="p",fL="h";class pL{constructor(e,n,r,i,s,o,a,u,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ql("c:"+this.id+":"),this.transportManager_=new ml(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ma(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bf in e){const n=e[bf];n===lE?this.upgradeIfSecondaryHealthy_():n===oE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===aE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=la("t",e),r=la("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:uE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=la("t",e),r=la("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=la(bf,e);if(sE in e){const r=e[sE];if(n===fL){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===uE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hL?this.onConnectionShutdown_(r):n===oE?this.onReset_(r):n===dL?Xp("Server Error: "+r):n===aE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ug!==r&&Lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ma(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ma(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ui.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends IS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zc}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=32,dE=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new ye("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function hi(t){return t.pieces_.length-t.pieceNum_}function Ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function $g(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mL(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function gl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function CS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function Me(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ye(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function Dt(t,e){const n=oe(t),r=oe(e);if(n===null)return e;if(n===r)return Dt(Ie(t),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gL(t,e){const n=gl(t,0),r=gl(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=cs(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Wg(t,e){if(hi(t)!==hi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function an(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(hi(t)>hi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class _L{constructor(e,n){this.errorPrefix_=n,this.parts_=gl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Bh(this.parts_[r]);SS(this)}}function yL(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bh(e),SS(t)}function vL(t){const e=t.parts_.pop();t.byteLength_-=Bh(e),t.parts_.length>0&&(t.byteLength_-=1)}function SS(t){if(t.byteLength_>dE)throw new Error(t.errorPrefix_+"has a key path longer than "+dE+" bytes ("+t.byteLength_+").");if(t.parts_.length>hE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hE+") or object contains a cycle "+Mi(t))}function Mi(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg extends IS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new qg}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=1e3,wL=60*5*1e3,fE=30*1e3,EL=1.3,TL=3e4,IL="server_kill",pE=3;class hr extends TS{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=hr.nextPersistentConnectionId_++,this.log_=ql("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ua,this.maxReconnectDelay_=wL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Xe(s)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new En,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,c=a.s;hr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bn(e,"w")){const r=Xi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Kx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Gx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xp("Unrecognized action received from server: "+Xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TL&&(this.reconnectDelay_=ua),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*EL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+hr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new pL(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,w=>{Lt(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(IL)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Lt(f),u())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wc(this.interruptReasons_)&&(this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>jg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ye(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){it("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=pE&&(this.reconnectDelay_=fE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){it("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=pE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+eS.replace(/\./g,"-")]=1,Sg()?e["framework.cordova"]=1:hC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zc.getInstance().currentlyOnline();return Wc(this.interruptReasons_)&&e}}hr.nextPersistentConnectionId_=0;hr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new le(es,e),i=new le(es,n);return this.compare(r,i)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu;class RS extends Xh{static get __EMPTY_NODE(){return Fu}static set __EMPTY_NODE(e){Fu=e}compare(e,n){return cs(e.name,n.name)}isDefinedOn(e){throw Ao("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(ci,Fu)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,Fu)}toString(){return".key"}}const Wi=new RS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Qt=class wa{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??wa.RED,this.left=i??Fn.EMPTY_NODE,this.right=s??Fn.EMPTY_NODE}copy(e,n,r,i,s){return new wa(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Fn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,wa.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,wa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Qt.RED=!0;Qt.BLACK=!1;class CL{copy(e,n,r,i,s){return this}insert(e,n,r){return new Qt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Fn=class cc{constructor(e,n=cc.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new cc(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qt.BLACK,null,null))}remove(e){return new cc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ju(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ju(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ju(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ju(this.root_,null,this.comparator_,!0,e)}};Fn.EMPTY_NODE=new CL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(t,e){return cs(t.name,e.name)}function Hg(t,e){return cs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zp;function RL(t){Zp=t}const kS=function(t){return typeof t=="number"?"number:"+sS(t):"string:"+t},AS=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bn(e,".sv"),"Priority must be a string or number.")}else B(t===Zp||t.isEmpty(),"priority of unexpected type.");B(t===Zp||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mE;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),AS(this.priorityNode_)}static set __childrenNodeConstructor(e){mE=e}static get __childrenNodeConstructor(){return mE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:oe(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=oe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||hi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sS(this.value_):e+=this.value_,this.lazyHash_=rS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=tt.VALUE_TYPE_ORDER.indexOf(n),s=tt.VALUE_TYPE_ORDER.indexOf(r);return B(i>=0,"Unknown leaf type: "+n),B(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PS,NS;function kL(t){PS=t}function AL(t){NS=t}class PL extends Xh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?cs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(ci,new tt("[PRIORITY-POST]",NS))}makePost(e,n){const r=PS(e);return new le(n,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const xe=new PL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL=Math.log(2);class xL{constructor(e){const n=s=>parseInt(Math.log(s)/NL,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const eh=function(t,e,n,r){t.sort(e);const i=function(u,c){const h=c-u;let f,m;if(h===0)return null;if(h===1)return f=t[u],m=n?n(f):f,new Qt(m,f.node,Qt.BLACK,null,null);{const w=parseInt(h/2,10)+u,C=i(u,w),A=i(w+1,c);return f=t[w],m=n?n(f):f,new Qt(m,f.node,Qt.BLACK,C,A)}},s=function(u){let c=null,h=null,f=t.length;const m=function(C,A){const x=f-C,S=f;f-=C;const T=i(x+1,S),k=t[x],O=n?n(k):k;w(new Qt(O,k.node,A,null,T))},w=function(C){c?(c.left=C,c=C):(h=C,c=C)};for(let C=0;C<u.count;++C){const A=u.nextBitIsOne(),x=Math.pow(2,u.count-(C+1));A?m(x,Qt.BLACK):(m(x,Qt.BLACK),m(x,Qt.RED))}return h},o=new xL(t.length),a=s(o);return new Fn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Df;const Es={};class lr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(Es&&xe,"ChildrenNode.ts has not been loaded"),Df=Df||new lr({".priority":Es},{".priority":xe}),Df}get(e){const n=Xi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fn?n:null}hasIndex(e){return bn(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Wi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(le.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=eh(r,e.getCompare()):a=Es;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const h=Object.assign({},this.indexes_);return h[u]=a,new lr(h,c)}addToIndexes(e,n){const r=qc(this.indexes_,(i,s)=>{const o=Xi(this.indexSet_,s);if(B(o,"Missing index implementation for "+s),i===Es)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(le.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),eh(a,o.getCompare())}else return Es;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new le(e.name,a))),u.insert(e,e.node)}});return new lr(r,this.indexSet_)}removeFromIndexes(e,n){const r=qc(this.indexes_,i=>{if(i===Es)return i;{const s=n.get(e.name);return s?i.remove(new le(e.name,s)):i}});return new lr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca;class Y{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&AS(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ca||(ca=new Y(new Fn(Hg),null,lr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ca}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ca:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new le(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ca:this.priorityNode_;return new Y(i,o,s)}}updateChild(e,n){const r=oe(e);if(r===null)return n;{B(oe(e)!==".priority"||hi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ie(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(xe,(o,a)=>{n[o]=a.val(e),r++,s&&Y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kS(this.getPriority().val())+":"),this.forEachChild(xe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":rS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new le(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hl?-1:0}withIndex(e){if(e===Wi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Wi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(xe),i=n.getIterator(xe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Wi?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bL extends Y{constructor(){super(new Fn(Hg),Y.EMPTY_NODE,lr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const Hl=new bL;Object.defineProperties(le,{MIN:{value:new le(es,Y.EMPTY_NODE)},MAX:{value:new le(ci,Hl)}});RS.__EMPTY_NODE=Y.EMPTY_NODE;tt.__childrenNodeConstructor=Y;RL(Hl);AL(Hl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=!0;function Le(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,Le(e))}if(!(t instanceof Array)&&DL){const n=[];let r=!1;if(ot(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Le(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new le(o,u)))}}),n.length===0)return Y.EMPTY_NODE;const s=eh(n,SL,o=>o.name,Hg);if(r){const o=eh(n,xe.getCompare());return new Y(s,Le(e),new lr({".priority":o},{".priority":xe}))}else return new Y(s,Le(e),lr.Default)}else{let n=Y.EMPTY_NODE;return ot(t,(r,i)=>{if(bn(t,r)&&r.substring(0,1)!=="."){const s=Le(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Le(e))}}kL(Le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg extends Xh{constructor(e){super(),this.indexPath_=e,B(!ae(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?cs(e.name,n.name):s}makePost(e,n){const r=Le(e),i=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new le(n,i)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,Hl);return new le(ci,e)}toString(){return gl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL extends Xh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?cs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const r=Le(e);return new le(n,r)}toString(){return".value"}}const xS=new OL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t){return{type:"value",snapshotNode:t}}function co(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _l(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function yl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function LL(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(_l(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(co(n,r)):o.trackChildChange(yl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(xe,(i,s)=>{n.hasChild(i)||r.trackChildChange(_l(i,s))}),n.isLeafNode()||n.forEachChild(xe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(yl(i,s,o))}else r.trackChildChange(co(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.indexedFilter_=new Kg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vl.getStartPost_(e),this.endPost_=vl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new le(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Y.EMPTY_NODE);const s=this;return n.forEachChild(xe,(o,a)=>{s.matches(new le(o,a))||(i=i.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new vl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new le(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Y.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Y.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,w)=>f(w,m)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new le(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const w=m==null?1:o(m,u);if(h&&!r.isEmpty()&&w>=0)return s!=null&&s.trackChildChange(yl(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(_l(n,f));const A=a.updateImmediateChild(n,Y.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(co(m.name,m.node)),A.updateImmediateChild(m.name,m.node)):A}}else return r.isEmpty()?e:h&&o(c,u)>=0?(s!=null&&(s.trackChildChange(_l(c.name,c.node)),s.trackChildChange(co(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:es}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ci}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xe}copy(){const e=new Qg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function VL(t){return t.loadsAllData()?new Kg(t.getIndex()):t.hasLimit()?new ML(t):new vl(t)}function FL(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function jL(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function UL(t,e){const n=t.copy();return n.index_=e,n}function gE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===xe?n="$priority":t.index_===xS?n="$value":t.index_===Wi?n="$key":(B(t.index_ instanceof Gg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function _E(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==xe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends TS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ql("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=th.getListenId_(e,r),a={};this.listens_[o]=a;const u=gE(e._queryParams);this.restRequest_(s+".json",u,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),Xi(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=th.getListenId_(e,n);delete this.listens_[r]}get(e){const n=gE(e._queryParams),r=e._path.toString(),i=new En;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Po(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=hl(a.responseText)}catch{Lt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Lt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){return{value:null,children:new Map}}function xo(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=oe(e);t.children.has(r)||t.children.set(r,nh());const i=t.children.get(r);e=Ie(e),xo(i,e,n)}}function em(t,e){if(ae(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(xe,(r,i)=>{xo(t,new ye(r),i)}),em(t,e)}}else if(t.children.size>0){const n=oe(e);return e=Ie(e),t.children.has(n)&&em(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function tm(t,e,n){t.value!==null?n(e,t.value):BL(t,(r,i)=>{const s=new ye(e.toString()+"/"+r);tm(i,s,n)})}function BL(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=10*1e3,WL=30*1e3,qL=5*60*1e3;class HL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $L(e);const r=yE+(WL-yE)*Math.random();Ma(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ot(e,(i,s)=>{s>0&&bn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ma(this.reportStats_.bind(this),Math.floor(Math.random()*2*qL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Cn||(Cn={}));function Yg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Xg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Cn.ACK_USER_WRITE,this.source=Yg()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new rh(_e(),n,this.revert)}}else return B(oe(this.path)===e,"operationForChild called for unrelated child."),new rh(Ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){this.source=e,this.path=n,this.type=Cn.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new wl(this.source,_e()):new wl(this.source,Ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Cn.OVERWRITE}operationForChild(e){return ae(this.path)?new ts(this.source,_e(),this.snap.getImmediateChild(e)):new ts(this.source,Ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Cn.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new ts(this.source,_e(),n.value):new ho(this.source,_e(),n)}else return B(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ho(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function KL(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(LL(o.childName,o.snapshotNode))}),ha(t,i,"child_removed",e,r,n),ha(t,i,"child_added",e,r,n),ha(t,i,"child_moved",s,r,n),ha(t,i,"child_changed",e,r,n),ha(t,i,"value",e,r,n),i}function ha(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>YL(t,a,u)),o.forEach(a=>{const u=QL(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function QL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function YL(t,e,n){if(e.childName==null||n.childName==null)throw Ao("Should only compare child_ events.");const r=new le(e.childName,e.snapshotNode),i=new le(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t,e){return{eventCache:t,serverCache:e}}function Va(t,e,n,r){return Jh(new di(e,n,r),t.serverCache)}function DS(t,e,n,r){return Jh(t.eventCache,new di(e,n,r))}function ih(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ns(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Of;const XL=()=>(Of||(Of=new Fn(O2)),Of);class Ce{constructor(e,n=XL()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return ot(e,(r,i)=>{n=n.set(new ye(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(ae(e))return null;{const r=oe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ie(e),n);return s!=null?{path:Me(new ye(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=oe(e),r=this.children.get(n);return r!==null?r.subtree(Ie(e)):new Ce(null)}}set(e,n){if(ae(e))return new Ce(n,this.children);{const r=oe(e),s=(this.children.get(r)||new Ce(null)).set(Ie(e),n),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=oe(e),r=this.children.get(n);if(r){const i=r.remove(Ie(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(ae(e))return this.value;{const n=oe(e),r=this.children.get(n);return r?r.get(Ie(e)):null}}setTree(e,n){if(ae(e))return n;{const r=oe(e),s=(this.children.get(r)||new Ce(null)).setTree(Ie(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Me(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ae(e))return null;{const s=oe(e),o=this.children.get(s);return o?o.findOnPath_(Ie(e),Me(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,r){if(ae(e))return this;{this.value&&r(n,this.value);const i=oe(e),s=this.children.get(i);return s?s.foreachOnPath_(Ie(e),Me(n,i),r):new Ce(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Me(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.writeTree_=e}static empty(){return new An(new Ce(null))}}function Fa(t,e,n){if(ae(e))return new An(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Dt(i,e);return s=s.updateChild(o,n),new An(t.writeTree_.set(i,s))}else{const i=new Ce(n),s=t.writeTree_.setTree(e,i);return new An(s)}}}function nm(t,e,n){let r=t;return ot(n,(i,s)=>{r=Fa(r,Me(e,i),s)}),r}function vE(t,e){if(ae(e))return An.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new An(n)}}function rm(t,e){return hs(t,e)!=null}function hs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Dt(n.path,e)):null}function wE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xe,(r,i)=>{e.push(new le(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new le(r,i.value))}),e}function ni(t,e){if(ae(e))return t;{const n=hs(t,e);return n!=null?new An(new Ce(n)):new An(t.writeTree_.subtree(e))}}function im(t){return t.writeTree_.isEmpty()}function fo(t,e){return OS(_e(),t.writeTree_,e)}function OS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(B(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=OS(Me(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Me(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t,e){return FS(e,t)}function JL(t,e,n,r,i){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Fa(t.visibleWrites,e,n)),t.lastWriteId=r}function ZL(t,e,n,r){B(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=nm(t.visibleWrites,e,n),t.lastWriteId=r}function eM(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function tM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&nM(a,r.path)?i=!1:an(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return rM(t),!0;if(r.snap)t.visibleWrites=vE(t.visibleWrites,r.path);else{const a=r.children;ot(a,u=>{t.visibleWrites=vE(t.visibleWrites,Me(r.path,u))})}return!0}else return!1}function nM(t,e){if(t.snap)return an(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&an(Me(t.path,n),e))return!0;return!1}function rM(t){t.visibleWrites=LS(t.allWrites,iM,_e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function iM(t){return t.visible}function LS(t,e,n){let r=An.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)an(n,o)?(a=Dt(n,o),r=Fa(r,a,s.snap)):an(o,n)&&(a=Dt(o,n),r=Fa(r,_e(),s.snap.getChild(a)));else if(s.children){if(an(n,o))a=Dt(n,o),r=nm(r,a,s.children);else if(an(o,n))if(a=Dt(o,n),ae(a))r=nm(r,_e(),s.children);else{const u=Xi(s.children,oe(a));if(u){const c=u.getChild(Ie(a));r=Fa(r,_e(),c)}}}else throw Ao("WriteRecord should have .snap or .children")}}return r}function MS(t,e,n,r,i){if(!r&&!i){const s=hs(t.visibleWrites,e);if(s!=null)return s;{const o=ni(t.visibleWrites,e);if(im(o))return n;if(n==null&&!rm(o,_e()))return null;{const a=n||Y.EMPTY_NODE;return fo(o,a)}}}else{const s=ni(t.visibleWrites,e);if(!i&&im(s))return n;if(!i&&n==null&&!rm(s,_e()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(an(c.path,e)||an(e,c.path))},a=LS(t.allWrites,o,e),u=n||Y.EMPTY_NODE;return fo(a,u)}}}function sM(t,e,n){let r=Y.EMPTY_NODE;const i=hs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(xe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ni(t.visibleWrites,e);return n.forEachChild(xe,(o,a)=>{const u=fo(ni(s,new ye(o)),a);r=r.updateImmediateChild(o,u)}),wE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ni(t.visibleWrites,e);return wE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function oM(t,e,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Me(e,n);if(rm(t.visibleWrites,s))return null;{const o=ni(t.visibleWrites,s);return im(o)?i.getChild(n):fo(o,i.getChild(n))}}function aM(t,e,n,r){const i=Me(e,n),s=hs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ni(t.visibleWrites,i);return fo(o,r.getNode().getImmediateChild(n))}else return null}function lM(t,e){return hs(t.visibleWrites,e)}function uM(t,e,n,r,i,s,o){let a;const u=ni(t.visibleWrites,e),c=hs(u,_e());if(c!=null)a=c;else if(n!=null)a=fo(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let w=m.getNext();for(;w&&h.length<i;)f(w,r)!==0&&h.push(w),w=m.getNext();return h}else return[]}function cM(){return{visibleWrites:An.empty(),allWrites:[],lastWriteId:-1}}function sh(t,e,n,r){return MS(t.writeTree,t.treePath,e,n,r)}function Zg(t,e){return sM(t.writeTree,t.treePath,e)}function EE(t,e,n,r){return oM(t.writeTree,t.treePath,e,n,r)}function oh(t,e){return lM(t.writeTree,Me(t.treePath,e))}function hM(t,e,n,r,i,s){return uM(t.writeTree,t.treePath,e,n,r,i,s)}function e_(t,e,n){return aM(t.writeTree,t.treePath,e,n)}function VS(t,e){return FS(Me(t.treePath,e),t.writeTree)}function FS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,yl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,_l(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,co(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,yl(r,e.snapshotNode,i.oldSnap));else throw Ao("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const jS=new fM;class t_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new di(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return e_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ns(this.viewCache_),s=hM(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t){return{filter:t}}function mM(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gM(t,e,n,r,i){const s=new dM;let o,a;if(n.type===Cn.OVERWRITE){const c=n;c.source.fromUser?o=sm(t,e,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ae(c.path),o=ah(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Cn.MERGE){const c=n;c.source.fromUser?o=yM(t,e,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=om(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Cn.ACK_USER_WRITE){const c=n;c.revert?o=EM(t,e,c.path,r,i,s):o=vM(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Cn.LISTEN_COMPLETE)o=wM(t,e,n.path,r,s);else throw Ao("Unknown operation type: "+n.type);const u=s.getChanges();return _M(e,o,u),{viewCache:o,changes:u}}function _M(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ih(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(bS(ih(e)))}}function US(t,e,n,r,i,s){const o=e.eventCache;if(oh(r,n)!=null)return e;{let a,u;if(ae(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ns(e),h=c instanceof Y?c:Y.EMPTY_NODE,f=Zg(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=sh(r,ns(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=oe(n);if(c===".priority"){B(hi(n)===1,"Can't have a priority with additional path components");const h=o.getNode();u=e.serverCache.getNode();const f=EE(r,n,h,u);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Ie(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=EE(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(c).updateChild(h,m):f=o.getNode().getImmediateChild(c)}else f=e_(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return Va(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function ah(t,e,n,r,i,s,o,a){const u=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(ae(n))c=h.updateFullNode(u.getNode(),r,null);else if(h.filtersNodes()&&!u.isFiltered()){const w=u.getNode().updateChild(n,r);c=h.updateFullNode(u.getNode(),w,null)}else{const w=oe(n);if(!u.isCompleteForPath(n)&&hi(n)>1)return e;const C=Ie(n),x=u.getNode().getImmediateChild(w).updateChild(C,r);w===".priority"?c=h.updatePriority(u.getNode(),x):c=h.updateChild(u.getNode(),w,x,C,jS,null)}const f=DS(e,c,u.isFullyInitialized()||ae(n),h.filtersNodes()),m=new t_(i,f,s);return US(t,f,n,i,m,a)}function sm(t,e,n,r,i,s,o){const a=e.eventCache;let u,c;const h=new t_(i,e,s);if(ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=Va(e,c,!0,t.filter.filtersNodes());else{const f=oe(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=Va(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Ie(n),w=a.getNode().getImmediateChild(f);let C;if(ae(m))C=r;else{const A=h.getCompleteChild(f);A!=null?$g(m)===".priority"&&A.getChild(CS(m)).isEmpty()?C=A:C=A.updateChild(m,r):C=Y.EMPTY_NODE}if(w.equals(C))u=e;else{const A=t.filter.updateChild(a.getNode(),f,C,m,h,o);u=Va(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function TE(t,e){return t.eventCache.isCompleteForChild(e)}function yM(t,e,n,r,i,s,o){let a=e;return r.foreach((u,c)=>{const h=Me(n,u);TE(e,oe(h))&&(a=sm(t,a,h,c,i,s,o))}),r.foreach((u,c)=>{const h=Me(n,u);TE(e,oe(h))||(a=sm(t,a,h,c,i,s,o))}),a}function IE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function om(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ae(n)?c=r:c=new Ce(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const w=e.serverCache.getNode().getImmediateChild(f),C=IE(t,w,m);u=ah(t,u,new ye(f),C,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const w=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!w){const C=e.serverCache.getNode().getImmediateChild(f),A=IE(t,C,m);u=ah(t,u,new ye(f),A,i,s,o,a)}}),u}function vM(t,e,n,r,i,s,o){if(oh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ae(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return ah(t,e,n,u.getNode().getChild(n),i,s,a,o);if(ae(n)){let c=new Ce(null);return u.getNode().forEachChild(Wi,(h,f)=>{c=c.set(new ye(h),f)}),om(t,e,n,c,i,s,a,o)}else return e}else{let c=new Ce(null);return r.foreach((h,f)=>{const m=Me(n,h);u.isCompleteForPath(m)&&(c=c.set(h,u.getNode().getChild(m)))}),om(t,e,n,c,i,s,a,o)}}function wM(t,e,n,r,i){const s=e.serverCache,o=DS(e,s.getNode(),s.isFullyInitialized()||ae(n),s.isFiltered());return US(t,o,n,r,jS,i)}function EM(t,e,n,r,i,s){let o;if(oh(r,n)!=null)return e;{const a=new t_(r,e,i),u=e.eventCache.getNode();let c;if(ae(n)||oe(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=sh(r,ns(e));else{const f=e.serverCache.getNode();B(f instanceof Y,"serverChildren would be complete if leaf node"),h=Zg(r,f)}h=h,c=t.filter.updateFullNode(u,h,s)}else{const h=oe(n);let f=e_(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=u.getImmediateChild(h)),f!=null?c=t.filter.updateChild(u,h,f,Ie(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(u,h,Y.EMPTY_NODE,Ie(n),a,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=sh(r,ns(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||oh(r,_e())!=null,Va(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Kg(r.getIndex()),s=VL(r);this.processor_=pM(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),h=new di(u,o.isFullyInitialized(),i.filtersNodes()),f=new di(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Jh(f,h),this.eventGenerator_=new GL(this.query_)}get query(){return this.query_}}function IM(t){return t.viewCache_.serverCache.getNode()}function CM(t){return ih(t.viewCache_)}function SM(t,e){const n=ns(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function CE(t){return t.eventRegistrations_.length===0}function RM(t,e){t.eventRegistrations_.push(e)}function SE(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function RE(t,e,n,r){e.type===Cn.MERGE&&e.source.queryId!==null&&(B(ns(t.viewCache_),"We should always have a full cache before handling merges"),B(ih(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=gM(t.processor_,i,e,n,r);return mM(t.processor_,s.viewCache),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,zS(t,s.changes,s.viewCache.eventCache.getNode(),null)}function kM(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(xe,(s,o)=>{r.push(co(s,o))}),n.isFullyInitialized()&&r.push(bS(n.getNode())),zS(t,r,n.getNode(),e)}function zS(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return KL(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh;class BS{constructor(){this.views=new Map}}function AM(t){B(!lh,"__referenceConstructor has already been defined"),lh=t}function PM(){return B(lh,"Reference.ts has not been loaded"),lh}function NM(t){return t.views.size===0}function n_(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return B(s!=null,"SyncTree gave us an op for an invalid query."),RE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(RE(o,e,n,r));return s}}function $S(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=sh(n,i?r:null),u=!1;a?u=!0:r instanceof Y?(a=Zg(n,r),u=!1):(a=Y.EMPTY_NODE,u=!1);const c=Jh(new di(a,u,!1),new di(r,i,!1));return new TM(e,c)}return o}function xM(t,e,n,r,i,s){const o=$S(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),RM(o,n),kM(o,n)}function bM(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=fi(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(SE(c,n,r)),CE(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(SE(u,n,r)),CE(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!fi(t)&&s.push(new(PM())(e._repo,e._path)),{removed:s,events:o}}function WS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ri(t,e){let n=null;for(const r of t.views.values())n=n||SM(r,e);return n}function qS(t,e){if(e._queryParams.loadsAllData())return ed(t);{const r=e._queryIdentifier;return t.views.get(r)}}function HS(t,e){return qS(t,e)!=null}function fi(t){return ed(t)!=null}function ed(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh;function DM(t){B(!uh,"__referenceConstructor has already been defined"),uh=t}function OM(){return B(uh,"Reference.ts has not been loaded"),uh}let LM=1;class kE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=cM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function r_(t,e,n,r,i){return JL(t.pendingWriteTree_,e,n,r,i),i?bo(t,new ts(Yg(),e,n)):[]}function MM(t,e,n,r){ZL(t.pendingWriteTree_,e,n,r);const i=Ce.fromObject(n);return bo(t,new ho(Yg(),e,i))}function zr(t,e,n=!1){const r=eM(t.pendingWriteTree_,e);if(tM(t.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(_e(),!0):ot(r.children,o=>{s=s.set(new ye(o),!0)}),bo(t,new rh(r.path,s,n))}else return[]}function Gl(t,e,n){return bo(t,new ts(Xg(),e,n))}function VM(t,e,n){const r=Ce.fromObject(n);return bo(t,new ho(Xg(),e,r))}function FM(t,e){return bo(t,new wl(Xg(),e))}function jM(t,e,n){const r=i_(t,n);if(r){const i=s_(r),s=i.path,o=i.queryId,a=Dt(s,e),u=new wl(Jg(o),a);return o_(t,s,u)}else return[]}function ch(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||HS(o,e))){const u=bM(o,e,n,r);NM(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(a=u.events,!i){const h=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,w)=>fi(w));if(h&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const w=BM(m);for(let C=0;C<w.length;++C){const A=w[C],x=A.query,S=YS(t,A);t.listenProvider_.startListening(ja(x),El(t,x),S.hashFn,S.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(ja(e),null):c.forEach(m=>{const w=t.queryToTagMap.get(nd(m));t.listenProvider_.stopListening(ja(m),w)}))}$M(t,c)}return a}function GS(t,e,n,r){const i=i_(t,r);if(i!=null){const s=s_(i),o=s.path,a=s.queryId,u=Dt(o,e),c=new ts(Jg(a),u,n);return o_(t,o,c)}else return[]}function UM(t,e,n,r){const i=i_(t,r);if(i){const s=s_(i),o=s.path,a=s.queryId,u=Dt(o,e),c=Ce.fromObject(n),h=new ho(Jg(a),u,c);return o_(t,o,h)}else return[]}function am(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,w)=>{const C=Dt(m,i);s=s||ri(w,C),o=o||fi(w)});let a=t.syncPointTree_.get(i);a?(o=o||fi(a),s=s||ri(a,_e())):(a=new BS,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=Y.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((w,C)=>{const A=ri(C,_e());A&&(s=s.updateImmediateChild(w,A))}));const c=HS(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=nd(e);B(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const w=WM();t.queryToTagMap.set(m,w),t.tagToQueryMap.set(w,m)}const h=Zh(t.pendingWriteTree_,i);let f=xM(a,e,n,h,s,u);if(!c&&!o&&!r){const m=qS(a,e);f=f.concat(qM(t,e,m))}return f}function td(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Dt(o,e),c=ri(a,u);if(c)return c});return MS(i,e,s,n,!0)}function zM(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Dt(c,n);r=r||ri(h,f)});let i=t.syncPointTree_.get(n);i?r=r||ri(i,_e()):(i=new BS,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new di(r,!0,!1):null,a=Zh(t.pendingWriteTree_,e._path),u=$S(i,e,a,s?o.getNode():Y.EMPTY_NODE,s);return CM(u)}function bo(t,e){return KS(e,t.syncPointTree_,null,Zh(t.pendingWriteTree_,_e()))}function KS(t,e,n,r){if(ae(t.path))return QS(t,e,n,r);{const i=e.get(_e());n==null&&i!=null&&(n=ri(i,_e()));let s=[];const o=oe(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,h=VS(r,o);s=s.concat(KS(a,u,c,h))}return i&&(s=s.concat(n_(i,t,r,n))),s}}function QS(t,e,n,r){const i=e.get(_e());n==null&&i!=null&&(n=ri(i,_e()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=VS(r,o),h=t.operationForChild(o);h&&(s=s.concat(QS(h,a,u,c)))}),i&&(s=s.concat(n_(i,t,r,n))),s}function YS(t,e){const n=e.query,r=El(t,n);return{hashFn:()=>(IM(e)||Y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?jM(t,n._path,r):FM(t,n._path);{const s=V2(i,n);return ch(t,n,null,s)}}}}function El(t,e){const n=nd(e);return t.queryToTagMap.get(n)}function nd(t){return t._path.toString()+"$"+t._queryIdentifier}function i_(t,e){return t.tagToQueryMap.get(e)}function s_(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function o_(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const i=Zh(t.pendingWriteTree_,e);return n_(r,n,i,null)}function BM(t){return t.fold((e,n,r)=>{if(n&&fi(n))return[ed(n)];{let i=[];return n&&(i=WS(n)),ot(r,(s,o)=>{i=i.concat(o)}),i}})}function ja(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(OM())(t._repo,t._path):t}function $M(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=nd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function WM(){return LM++}function qM(t,e,n){const r=e._path,i=El(t,e),s=YS(t,n),o=t.listenProvider_.startListening(ja(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)B(!fi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,h,f)=>{if(!ae(c)&&h&&fi(h))return[ed(h).query];{let m=[];return h&&(m=m.concat(WS(h).map(w=>w.query))),ot(f,(w,C)=>{m=m.concat(C)}),m}});for(let c=0;c<u.length;++c){const h=u[c];t.listenProvider_.stopListening(ja(h),El(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new a_(n)}node(){return this.node_}}class l_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new l_(this.syncTree_,n)}node(){return td(this.syncTree_,this.path_)}}const HM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},AE=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return GM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return KM(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},GM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},KM=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const i=e.node();if(B(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},XS=function(t,e,n,r){return c_(e,new l_(n,t),r)},u_=function(t,e,n){return c_(t,new a_(e),n)};function c_(t,e,n){const r=t.getPriority().val(),i=AE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=AE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new tt(a,Le(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new tt(i))),o.forEachChild(xe,(a,u)=>{const c=c_(u,e.getImmediateChild(a),n);c!==u&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function rd(t,e){let n=e instanceof ye?e:new ye(e),r=t,i=oe(n);for(;i!==null;){const s=Xi(r.node.children,i)||{children:{},childCount:0};r=new h_(i,r,s),n=Ie(n),i=oe(n)}return r}function ds(t){return t.node.value}function d_(t,e){t.node.value=e,lm(t)}function JS(t){return t.node.childCount>0}function QM(t){return ds(t)===void 0&&!JS(t)}function id(t,e){ot(t.node.children,(n,r)=>{e(new h_(n,t,r))})}function ZS(t,e,n,r){n&&e(t),id(t,i=>{ZS(i,e,!0)})}function YM(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Kl(t){return new ye(t.parent===null?t.name:Kl(t.parent)+"/"+t.name)}function lm(t){t.parent!==null&&XM(t.parent,t.name,t)}function XM(t,e,n){const r=QM(n),i=bn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,lm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,lm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=/[\[\].#$\/\u0000-\u001F\u007F]/,ZM=/[\[\].#$\u0000-\u001F\u007F]/,Lf=10*1024*1024,f_=function(t){return typeof t=="string"&&t.length!==0&&!JM.test(t)},eR=function(t){return typeof t=="string"&&t.length!==0&&!ZM.test(t)},eV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),eR(t)},Tl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Yh(t)||t&&typeof t=="object"&&bn(t,".sv")},hh=function(t,e,n,r){r&&e===void 0||Ql(ao(t,"value"),e,n)},Ql=function(t,e,n){const r=n instanceof ye?new _L(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mi(r));if(typeof e=="function")throw new Error(t+"contains a function "+Mi(r)+" with contents = "+e.toString());if(Yh(e))throw new Error(t+"contains "+e.toString()+" "+Mi(r));if(typeof e=="string"&&e.length>Lf/3&&Bh(e)>Lf)throw new Error(t+"contains a string greater than "+Lf+" utf8 bytes "+Mi(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ot(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!f_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mi(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yL(r,o),Ql(t,a,r),vL(r)}),i&&s)throw new Error(t+' contains ".value" child '+Mi(r)+" in addition to actual children.")}},tV=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=gl(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!f_(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gL);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&an(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},tR=function(t,e,n,r){const i=ao(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ot(e,(o,a)=>{const u=new ye(o);if(Ql(i,a,Me(n,u)),$g(u)===".priority"&&!Tl(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),tV(i,s)},nV=function(t,e,n){if(Yh(e))throw new Error(ao(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Tl(e))throw new Error(ao(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},p_=function(t,e,n,r){if(!eR(n))throw new Error(ao(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),p_(t,e,n)},Br=function(t,e){if(oe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},iV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!f_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!eV(n))throw new Error(ao(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Wg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function nR(t,e,n){sd(t,n),rR(t,r=>Wg(r,e))}function en(t,e,n){sd(t,n),rR(t,r=>an(r,e)||an(e,r))}function rR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(oV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function oV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();La&&it("event: "+n.toString()),No(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV="repo_interrupt",lV=25;class uV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nh(),this.transactionQueueTree_=new h_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cV(t,e,n){if(t.stats_=zg(t.repoInfo_),t.forceRestClient_||z2())t.server_=new th(t.repoInfo_,(r,i,s,o)=>{PE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>NE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new hr(t.repoInfo_,e,(r,i,s,o)=>{PE(t,r,i,s,o)},r=>{NE(t,r)},r=>{hV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=H2(t.repoInfo_,()=>new HL(t.stats_,t.server_)),t.infoData_=new zL,t.infoSyncTree_=new kE({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Gl(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),m_(t,"connected",!1),t.serverSyncTree_=new kE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const c=o(a,u);en(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function iR(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yl(t){return HM({timestamp:iR(t)})}function PE(t,e,n,r,i){t.dataUpdateCount++;const s=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=qc(n,c=>Le(c));o=UM(t.serverSyncTree_,s,u,i)}else{const u=Le(n);o=GS(t.serverSyncTree_,s,u,i)}else if(r){const u=qc(n,c=>Le(c));o=VM(t.serverSyncTree_,s,u)}else{const u=Le(n);o=Gl(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=po(t,s)),en(t.eventQueue_,a,o)}function NE(t,e){m_(t,"connected",e),e===!1&&mV(t)}function hV(t,e){ot(e,(n,r)=>{m_(t,n,r)})}function m_(t,e,n){const r=new ye("/.info/"+e),i=Le(n);t.infoData_.updateSnapshot(r,i);const s=Gl(t.infoSyncTree_,r,i);en(t.eventQueue_,r,s)}function od(t){return t.nextWriteId_++}function dV(t,e,n){const r=zM(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Le(i).withIndex(e._queryParams.getIndex());am(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Gl(t.serverSyncTree_,e._path,s);else{const a=El(t.serverSyncTree_,e);o=GS(t.serverSyncTree_,e._path,s,a)}return en(t.eventQueue_,e._path,o),ch(t.serverSyncTree_,e,n,null,!0),s},i=>(Do(t,"get for query "+Xe(e)+" failed: "+i),Promise.reject(new Error(i))))}function fV(t,e,n,r,i){Do(t,"set",{path:e.toString(),value:n,priority:r});const s=Yl(t),o=Le(n,r),a=td(t.serverSyncTree_,e),u=u_(o,a,s),c=od(t),h=r_(t.serverSyncTree_,e,u,c,!0);sd(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(m,w)=>{const C=m==="ok";C||Lt("set at "+e+" failed: "+m);const A=zr(t.serverSyncTree_,c,!C);en(t.eventQueue_,e,A),pi(t,i,m,w)});const f=__(t,e);po(t,f),en(t.eventQueue_,f,[])}function pV(t,e,n,r){Do(t,"update",{path:e.toString(),value:n});let i=!0;const s=Yl(t),o={};if(ot(n,(a,u)=>{i=!1,o[a]=XS(Me(e,a),Le(u),t.serverSyncTree_,s)}),i)it("update() called with empty data.  Don't do anything."),pi(t,r,"ok",void 0);else{const a=od(t),u=MM(t.serverSyncTree_,e,o,a);sd(t.eventQueue_,u),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Lt("update at "+e+" failed: "+c);const m=zr(t.serverSyncTree_,a,!f),w=m.length>0?po(t,e):e;en(t.eventQueue_,w,m),pi(t,r,c,h)}),ot(n,c=>{const h=__(t,Me(e,c));po(t,h)}),en(t.eventQueue_,e,[])}}function mV(t){Do(t,"onDisconnectEvents");const e=Yl(t),n=nh();tm(t.onDisconnect_,_e(),(i,s)=>{const o=XS(i,s,t.serverSyncTree_,e);xo(n,i,o)});let r=[];tm(n,_e(),(i,s)=>{r=r.concat(Gl(t.serverSyncTree_,i,s));const o=__(t,i);po(t,o)}),t.onDisconnect_=nh(),en(t.eventQueue_,_e(),r)}function gV(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&em(t.onDisconnect_,e),pi(t,n,r,i)})}function xE(t,e,n,r){const i=Le(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&xo(t.onDisconnect_,e,i),pi(t,r,s,o)})}function _V(t,e,n,r,i){const s=Le(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&xo(t.onDisconnect_,e,s),pi(t,i,o,a)})}function yV(t,e,n,r){if(Wc(n)){it("onDisconnect().update() called with empty data.  Don't do anything."),pi(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&ot(n,(o,a)=>{const u=Le(a);xo(t.onDisconnect_,Me(e,o),u)}),pi(t,r,i,s)})}function vV(t,e,n){let r;oe(e._path)===".info"?r=am(t.infoSyncTree_,e,n):r=am(t.serverSyncTree_,e,n),nR(t.eventQueue_,e._path,r)}function bE(t,e,n){let r;oe(e._path)===".info"?r=ch(t.infoSyncTree_,e,n):r=ch(t.serverSyncTree_,e,n),nR(t.eventQueue_,e._path,r)}function wV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(aV)}function Do(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),it(n,...e)}function pi(t,e,n,r){e&&No(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function EV(t,e,n,r,i,s){Do(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:nS(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=g_(t,e,void 0);o.currentInputSnapshot=a;const u=o.update(a.val());if(u===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ql("transaction failed: Data returned ",u,o.path),o.status=0;const c=rd(t.transactionQueueTree_,e),h=ds(c)||[];h.push(o),d_(c,h);let f;typeof u=="object"&&u!==null&&bn(u,".priority")?(f=Xi(u,".priority"),B(Tl(f),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):f=(td(t.serverSyncTree_,e)||Y.EMPTY_NODE).getPriority().val();const m=Yl(t),w=Le(u,f),C=u_(w,a,m);o.currentOutputSnapshotRaw=w,o.currentOutputSnapshotResolved=C,o.currentWriteId=od(t);const A=r_(t.serverSyncTree_,e,C,o.currentWriteId,o.applyLocally);en(t.eventQueue_,e,A),ad(t,t.transactionQueueTree_)}}function g_(t,e,n){return td(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function ad(t,e=t.transactionQueueTree_){if(e||ld(t,e),ds(e)){const n=oR(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&TV(t,Kl(e),n)}else JS(e)&&id(e,n=>{ad(t,n)})}function TV(t,e,n){const r=n.map(c=>c.currentWriteId),i=g_(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Dt(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Do(t,"transaction put response",{path:u.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(zr(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();ld(t,rd(t.transactionQueueTree_,e)),ad(t,t.transactionQueueTree_),en(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)No(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Lt("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}po(t,e)}},o)}function po(t,e){const n=sR(t,e),r=Kl(n),i=oR(t,n);return IV(t,i,r),r}function IV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Dt(n,u.path);let h=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)h=!0,f=u.abortReason,i=i.concat(zr(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=lV)h=!0,f="maxretry",i=i.concat(zr(t.serverSyncTree_,u.currentWriteId,!0));else{const m=g_(t,u.path,o);u.currentInputSnapshot=m;const w=e[a].update(m.val());if(w!==void 0){Ql("transaction failed: Data returned ",w,u.path);let C=Le(w);typeof w=="object"&&w!=null&&bn(w,".priority")||(C=C.updatePriority(m.getPriority()));const x=u.currentWriteId,S=Yl(t),T=u_(C,m,S);u.currentOutputSnapshotRaw=C,u.currentOutputSnapshotResolved=T,u.currentWriteId=od(t),o.splice(o.indexOf(x),1),i=i.concat(r_(t.serverSyncTree_,u.path,T,u.currentWriteId,u.applyLocally)),i=i.concat(zr(t.serverSyncTree_,x,!0))}else h=!0,f="nodata",i=i.concat(zr(t.serverSyncTree_,u.currentWriteId,!0))}en(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}ld(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)No(r[a]);ad(t,t.transactionQueueTree_)}function sR(t,e){let n,r=t.transactionQueueTree_;for(n=oe(e);n!==null&&ds(r)===void 0;)r=rd(r,n),e=Ie(e),n=oe(e);return r}function oR(t,e){const n=[];return aR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function aR(t,e,n){const r=ds(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);id(e,i=>{aR(t,i,n)})}function ld(t,e){const n=ds(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,d_(e,n.length>0?n:void 0)}id(e,r=>{ld(t,r)})}function __(t,e){const n=Kl(sR(t,e)),r=rd(t.transactionQueueTree_,e);return YM(r,i=>{Mf(t,i)}),Mf(t,r),ZS(r,i=>{Mf(t,i)}),n}function Mf(t,e){const n=ds(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(zr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?d_(e,void 0):n.length=s+1,en(t.eventQueue_,Kl(e),i);for(let o=0;o<r.length;o++)No(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function SV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const DE=function(t,e){const n=RV(t),r=n.namespace;n.domain==="firebase.com"&&yr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&yr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||b2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ye(n.pathString)}},RV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=CV(t.substring(h,f)));const m=SV(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const w=e.slice(0,c);if(w.toLowerCase()==="localhost")n="localhost";else if(w.split(".").length<=2)n=w;else{const C=e.indexOf(".");r=e.substring(0,C).toLowerCase(),n=e.substring(C+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",kV=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=OE.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=OE.charAt(e[i]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Xe(this.snapshot.exportVal())}}class PV{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class NV{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new En;return gV(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Br("OnDisconnect.remove",this._path);const e=new En;return xE(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Br("OnDisconnect.set",this._path),hh("OnDisconnect.set",e,this._path,!1);const n=new En;return xE(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Br("OnDisconnect.setWithPriority",this._path),hh("OnDisconnect.setWithPriority",e,this._path,!1),nV("OnDisconnect.setWithPriority",n);const r=new En;return _V(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Br("OnDisconnect.update",this._path),tR("OnDisconnect.update",e,this._path);const n=new En;return yV(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Oo{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ae(this._path)?null:$g(this._path)}get ref(){return new Yn(this._repo,this._path)}get _queryIdentifier(){const e=_E(this._queryParams),n=jg(e);return n==="{}"?"default":n}get _queryObject(){return _E(this._queryParams)}isEqual(e){if(e=pe(e),!(e instanceof Oo))return!1;const n=this._repo===e._repo,r=Wg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mL(this._path)}}function xV(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function bV(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Wi){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==es)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==ci)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===xe){if(e!=null&&!Tl(e)||n!=null&&!Tl(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(B(t.getIndex()instanceof Gg||t.getIndex()===xS,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class Yn extends Oo{constructor(e,n){super(e,n,new Qg,!1)}get parent(){const e=CS(this._path);return e===null?null:new Yn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class mo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),r=Il(this.ref,e);return new mo(this._node.getChild(n),r,xe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new mo(i,Il(this.ref,r),xe)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Pi(t,e){return t=pe(t),t._checkNotDeleted("ref"),e!==void 0?Il(t._root,e):t._root}function Il(t,e){return t=pe(t),oe(t._path)===null?rV("child","path",e):p_("child","path",e),new Yn(t._repo,Me(t._path,e))}function DV(t){return t=pe(t),new NV(t._repo,t._path)}function m3(t,e){t=pe(t),Br("push",t._path),hh("push",e,t._path,!0);const n=iR(t._repo),r=kV(n),i=Il(t,r),s=Il(t,r);let o;return e!=null?o=Ua(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function g3(t){return Br("remove",t._path),Ua(t,null)}function Ua(t,e){t=pe(t),Br("set",t._path),hh("set",e,t._path,!1);const n=new En;return fV(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function OV(t,e){tR("update",e,t._path);const n=new En;return pV(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function LV(t){t=pe(t);const e=new lR(()=>{}),n=new ud(e);return dV(t._repo,t,n).then(r=>new mo(r,new Yn(t._repo,t._path),t._queryParams.getIndex()))}class ud{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new AV("value",this,new mo(e.snapshotNode,new Yn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new PV(this,e,n):null}matches(e){return e instanceof ud?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function MV(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const u=n,c=(h,f)=>{bE(t._repo,t,a),u(h,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new lR(n,s||void 0),a=new ud(o);return vV(t._repo,t,a),()=>bE(t._repo,t,a)}function um(t,e,n,r){return MV(t,"value",e,n,r)}let y_=class{};class VV extends y_{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Oo(e._repo,e._path,FL(e._queryParams,this._limit),e._orderByCalled)}}function y3(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new VV(t)}class FV extends y_{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Oo(e._repo,e._path,jL(e._queryParams,this._limit),e._orderByCalled)}}function v3(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new FV(t)}class jV extends y_{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){xV(e,"orderByChild");const n=new ye(this._path);if(ae(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Gg(n),i=UL(e._queryParams,r);return bV(i),new Oo(e._repo,e._path,i,!0)}}function w3(t){return p_("orderByChild","path",t),new jV(t)}function E3(t,...e){let n=pe(t);for(const r of e)n=r._apply(n);return n}AM(Yn);DM(Yn);/**
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
 */const UV="FIREBASE_DATABASE_EMULATOR_HOST",cm={};let zV=!1;function BV(t,e,n,r){t.repoInfo_=new mS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function $V(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||yr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=DE(s,i),a=o.repoInfo,u;typeof process<"u"&&Zw&&(u=Zw[UV]),u?(s=`http://${u}?ns=${a.namespace}`,o=DE(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new $2(t.name,t.options,e);iV("Invalid Firebase Database URL",o),ae(o.path)||yr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=qV(a,t,c,new B2(t.name,n));return new HV(h,t)}function WV(t,e){const n=cm[e];(!n||n[t.key]!==t)&&yr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wV(t),delete n[t.key]}function qV(t,e,n,r){let i=cm[e.name];i||(i={},cm[e.name]=i);let s=i[t.toURLString()];return s&&yr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new uV(t,zV,n,r),i[t.toURLString()]=s,s}class HV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yn(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(WV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yr("Cannot call "+e+" on a deleted database.")}}function GV(t=kg(),e){const n=Wh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=aC("database");r&&KV(n,...r)}return n}function KV(t,e,n,r={}){t=pe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&yr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&yr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new uc(uc.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:cC(r.mockUserToken,t.app.options.projectId);s=new uc(o)}BV(i,e,n,s)}/**
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
 */function QV(t){k2(us),Ji(new li("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return $V(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),zn(eE,tE,t),zn(eE,tE,"esm2017")}/**
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
 */const YV={".sv":"timestamp"};function $r(){return YV}/**
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
 */class XV{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function JV(t,e,n){var r;if(t=pe(t),Br("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=void 0)!==null&&r!==void 0?r:!0,s=new En,o=(u,c,h)=>{let f=null;u?s.reject(u):(f=new mo(h,new Yn(t._repo,t._path),xe),s.resolve(new XV(c,f)))},a=um(t,()=>{});return EV(t._repo,t._path,e,o,a,i),s.promise}hr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};hr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};QV();var LE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qi,uR;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function I(){}I.prototype=_.prototype,v.D=_.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(R,P,N){for(var E=Array(arguments.length-2),J=2;J<arguments.length;J++)E[J-2]=arguments[J];return _.prototype[P].apply(R,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,_,I){I||(I=0);var R=Array(16);if(typeof _=="string")for(var P=0;16>P;++P)R[P]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(P=0;16>P;++P)R[P]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=v.g[0],I=v.g[1],P=v.g[2];var N=v.g[3],E=_+(N^I&(P^N))+R[0]+3614090360&4294967295;_=I+(E<<7&4294967295|E>>>25),E=N+(P^_&(I^P))+R[1]+3905402710&4294967295,N=_+(E<<12&4294967295|E>>>20),E=P+(I^N&(_^I))+R[2]+606105819&4294967295,P=N+(E<<17&4294967295|E>>>15),E=I+(_^P&(N^_))+R[3]+3250441966&4294967295,I=P+(E<<22&4294967295|E>>>10),E=_+(N^I&(P^N))+R[4]+4118548399&4294967295,_=I+(E<<7&4294967295|E>>>25),E=N+(P^_&(I^P))+R[5]+1200080426&4294967295,N=_+(E<<12&4294967295|E>>>20),E=P+(I^N&(_^I))+R[6]+2821735955&4294967295,P=N+(E<<17&4294967295|E>>>15),E=I+(_^P&(N^_))+R[7]+4249261313&4294967295,I=P+(E<<22&4294967295|E>>>10),E=_+(N^I&(P^N))+R[8]+1770035416&4294967295,_=I+(E<<7&4294967295|E>>>25),E=N+(P^_&(I^P))+R[9]+2336552879&4294967295,N=_+(E<<12&4294967295|E>>>20),E=P+(I^N&(_^I))+R[10]+4294925233&4294967295,P=N+(E<<17&4294967295|E>>>15),E=I+(_^P&(N^_))+R[11]+2304563134&4294967295,I=P+(E<<22&4294967295|E>>>10),E=_+(N^I&(P^N))+R[12]+1804603682&4294967295,_=I+(E<<7&4294967295|E>>>25),E=N+(P^_&(I^P))+R[13]+4254626195&4294967295,N=_+(E<<12&4294967295|E>>>20),E=P+(I^N&(_^I))+R[14]+2792965006&4294967295,P=N+(E<<17&4294967295|E>>>15),E=I+(_^P&(N^_))+R[15]+1236535329&4294967295,I=P+(E<<22&4294967295|E>>>10),E=_+(P^N&(I^P))+R[1]+4129170786&4294967295,_=I+(E<<5&4294967295|E>>>27),E=N+(I^P&(_^I))+R[6]+3225465664&4294967295,N=_+(E<<9&4294967295|E>>>23),E=P+(_^I&(N^_))+R[11]+643717713&4294967295,P=N+(E<<14&4294967295|E>>>18),E=I+(N^_&(P^N))+R[0]+3921069994&4294967295,I=P+(E<<20&4294967295|E>>>12),E=_+(P^N&(I^P))+R[5]+3593408605&4294967295,_=I+(E<<5&4294967295|E>>>27),E=N+(I^P&(_^I))+R[10]+38016083&4294967295,N=_+(E<<9&4294967295|E>>>23),E=P+(_^I&(N^_))+R[15]+3634488961&4294967295,P=N+(E<<14&4294967295|E>>>18),E=I+(N^_&(P^N))+R[4]+3889429448&4294967295,I=P+(E<<20&4294967295|E>>>12),E=_+(P^N&(I^P))+R[9]+568446438&4294967295,_=I+(E<<5&4294967295|E>>>27),E=N+(I^P&(_^I))+R[14]+3275163606&4294967295,N=_+(E<<9&4294967295|E>>>23),E=P+(_^I&(N^_))+R[3]+4107603335&4294967295,P=N+(E<<14&4294967295|E>>>18),E=I+(N^_&(P^N))+R[8]+1163531501&4294967295,I=P+(E<<20&4294967295|E>>>12),E=_+(P^N&(I^P))+R[13]+2850285829&4294967295,_=I+(E<<5&4294967295|E>>>27),E=N+(I^P&(_^I))+R[2]+4243563512&4294967295,N=_+(E<<9&4294967295|E>>>23),E=P+(_^I&(N^_))+R[7]+1735328473&4294967295,P=N+(E<<14&4294967295|E>>>18),E=I+(N^_&(P^N))+R[12]+2368359562&4294967295,I=P+(E<<20&4294967295|E>>>12),E=_+(I^P^N)+R[5]+4294588738&4294967295,_=I+(E<<4&4294967295|E>>>28),E=N+(_^I^P)+R[8]+2272392833&4294967295,N=_+(E<<11&4294967295|E>>>21),E=P+(N^_^I)+R[11]+1839030562&4294967295,P=N+(E<<16&4294967295|E>>>16),E=I+(P^N^_)+R[14]+4259657740&4294967295,I=P+(E<<23&4294967295|E>>>9),E=_+(I^P^N)+R[1]+2763975236&4294967295,_=I+(E<<4&4294967295|E>>>28),E=N+(_^I^P)+R[4]+1272893353&4294967295,N=_+(E<<11&4294967295|E>>>21),E=P+(N^_^I)+R[7]+4139469664&4294967295,P=N+(E<<16&4294967295|E>>>16),E=I+(P^N^_)+R[10]+3200236656&4294967295,I=P+(E<<23&4294967295|E>>>9),E=_+(I^P^N)+R[13]+681279174&4294967295,_=I+(E<<4&4294967295|E>>>28),E=N+(_^I^P)+R[0]+3936430074&4294967295,N=_+(E<<11&4294967295|E>>>21),E=P+(N^_^I)+R[3]+3572445317&4294967295,P=N+(E<<16&4294967295|E>>>16),E=I+(P^N^_)+R[6]+76029189&4294967295,I=P+(E<<23&4294967295|E>>>9),E=_+(I^P^N)+R[9]+3654602809&4294967295,_=I+(E<<4&4294967295|E>>>28),E=N+(_^I^P)+R[12]+3873151461&4294967295,N=_+(E<<11&4294967295|E>>>21),E=P+(N^_^I)+R[15]+530742520&4294967295,P=N+(E<<16&4294967295|E>>>16),E=I+(P^N^_)+R[2]+3299628645&4294967295,I=P+(E<<23&4294967295|E>>>9),E=_+(P^(I|~N))+R[0]+4096336452&4294967295,_=I+(E<<6&4294967295|E>>>26),E=N+(I^(_|~P))+R[7]+1126891415&4294967295,N=_+(E<<10&4294967295|E>>>22),E=P+(_^(N|~I))+R[14]+2878612391&4294967295,P=N+(E<<15&4294967295|E>>>17),E=I+(N^(P|~_))+R[5]+4237533241&4294967295,I=P+(E<<21&4294967295|E>>>11),E=_+(P^(I|~N))+R[12]+1700485571&4294967295,_=I+(E<<6&4294967295|E>>>26),E=N+(I^(_|~P))+R[3]+2399980690&4294967295,N=_+(E<<10&4294967295|E>>>22),E=P+(_^(N|~I))+R[10]+4293915773&4294967295,P=N+(E<<15&4294967295|E>>>17),E=I+(N^(P|~_))+R[1]+2240044497&4294967295,I=P+(E<<21&4294967295|E>>>11),E=_+(P^(I|~N))+R[8]+1873313359&4294967295,_=I+(E<<6&4294967295|E>>>26),E=N+(I^(_|~P))+R[15]+4264355552&4294967295,N=_+(E<<10&4294967295|E>>>22),E=P+(_^(N|~I))+R[6]+2734768916&4294967295,P=N+(E<<15&4294967295|E>>>17),E=I+(N^(P|~_))+R[13]+1309151649&4294967295,I=P+(E<<21&4294967295|E>>>11),E=_+(P^(I|~N))+R[4]+4149444226&4294967295,_=I+(E<<6&4294967295|E>>>26),E=N+(I^(_|~P))+R[11]+3174756917&4294967295,N=_+(E<<10&4294967295|E>>>22),E=P+(_^(N|~I))+R[2]+718787259&4294967295,P=N+(E<<15&4294967295|E>>>17),E=I+(N^(P|~_))+R[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(P+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+P&4294967295,v.g[3]=v.g[3]+N&4294967295}r.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var I=_-this.blockSize,R=this.B,P=this.h,N=0;N<_;){if(P==0)for(;N<=I;)i(this,v,N),N+=this.blockSize;if(typeof v=="string"){for(;N<_;)if(R[P++]=v.charCodeAt(N++),P==this.blockSize){i(this,R),P=0;break}}else for(;N<_;)if(R[P++]=v[N++],P==this.blockSize){i(this,R),P=0;break}}this.h=P,this.o+=_},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var I=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=I&255,I/=256;for(this.u(v),v=Array(16),_=I=0;4>_;++_)for(var R=0;32>R;R+=8)v[I++]=this.g[_]>>>R&255;return v};function s(v,_){var I=a;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=_(v)}function o(v,_){this.h=_;for(var I=[],R=!0,P=v.length-1;0<=P;P--){var N=v[P]|0;R&&N==_||(I[P]=N,R=!1)}this.g=I}var a={};function u(v){return-128<=v&&128>v?s(v,function(_){return new o([_|0],0>_?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return f;if(0>v)return x(c(-v));for(var _=[],I=1,R=0;v>=I;R++)_[R]=v/I|0,I*=4294967296;return new o(_,0)}function h(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return x(h(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),R=f,P=0;P<v.length;P+=8){var N=Math.min(8,v.length-P),E=parseInt(v.substring(P,P+N),_);8>N?(N=c(Math.pow(_,N)),R=R.j(N).add(c(E))):(R=R.j(I),R=R.add(c(E)))}return R}var f=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-x(this).m();for(var v=0,_=1,I=0;I<this.g.length;I++){var R=this.i(I);v+=(0<=R?R:4294967296+R)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(A(this))return"-"+x(this).toString(v);for(var _=c(Math.pow(v,6)),I=this,R="";;){var P=O(I,_).g;I=S(I,P.j(_));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=P,C(I))return N+R;for(;6>N.length;)N="0"+N;R=N+R}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function A(v){return v.h==-1}t.l=function(v){return v=S(this,v),A(v)?-1:C(v)?0:1};function x(v){for(var _=v.g.length,I=[],R=0;R<_;R++)I[R]=~v.g[R];return new o(I,~v.h).add(m)}t.abs=function(){return A(this)?x(this):this},t.add=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],R=0,P=0;P<=_;P++){var N=R+(this.i(P)&65535)+(v.i(P)&65535),E=(N>>>16)+(this.i(P)>>>16)+(v.i(P)>>>16);R=E>>>16,N&=65535,E&=65535,I[P]=E<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function S(v,_){return v.add(x(_))}t.j=function(v){if(C(this)||C(v))return f;if(A(this))return A(v)?x(this).j(x(v)):x(x(this).j(v));if(A(v))return x(this.j(x(v)));if(0>this.l(w)&&0>v.l(w))return c(this.m()*v.m());for(var _=this.g.length+v.g.length,I=[],R=0;R<2*_;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(var P=0;P<v.g.length;P++){var N=this.i(R)>>>16,E=this.i(R)&65535,J=v.i(P)>>>16,ie=v.i(P)&65535;I[2*R+2*P]+=E*ie,T(I,2*R+2*P),I[2*R+2*P+1]+=N*ie,T(I,2*R+2*P+1),I[2*R+2*P+1]+=E*J,T(I,2*R+2*P+1),I[2*R+2*P+2]+=N*J,T(I,2*R+2*P+2)}for(R=0;R<_;R++)I[R]=I[2*R+1]<<16|I[2*R];for(R=_;R<2*_;R++)I[R]=0;return new o(I,0)};function T(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function k(v,_){this.g=v,this.h=_}function O(v,_){if(C(_))throw Error("division by zero");if(C(v))return new k(f,f);if(A(v))return _=O(x(v),_),new k(x(_.g),x(_.h));if(A(_))return _=O(v,x(_)),new k(x(_.g),_.h);if(30<v.g.length){if(A(v)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,R=_;0>=R.l(v);)I=j(I),R=j(R);var P=M(I,1),N=M(R,1);for(R=M(R,2),I=M(I,2);!C(R);){var E=N.add(R);0>=E.l(v)&&(P=P.add(I),N=E),R=M(R,1),I=M(I,1)}return _=S(v,P.j(_)),new k(P,_)}for(P=f;0<=v.l(_);){for(I=Math.max(1,Math.floor(v.m()/_.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),N=c(I),E=N.j(_);A(E)||0<E.l(v);)I-=R,N=c(I),E=N.j(_);C(N)&&(N=m),P=P.add(N),v=S(v,E)}return new k(P,v)}t.A=function(v){return O(this,v).h},t.and=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],R=0;R<_;R++)I[R]=this.i(R)&v.i(R);return new o(I,this.h&v.h)},t.or=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],R=0;R<_;R++)I[R]=this.i(R)|v.i(R);return new o(I,this.h|v.h)},t.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],R=0;R<_;R++)I[R]=this.i(R)^v.i(R);return new o(I,this.h^v.h)};function j(v){for(var _=v.g.length+1,I=[],R=0;R<_;R++)I[R]=v.i(R)<<1|v.i(R-1)>>>31;return new o(I,v.h)}function M(v,_){var I=_>>5;_%=32;for(var R=v.g.length-I,P=[],N=0;N<R;N++)P[N]=0<_?v.i(N+I)>>>_|v.i(N+I+1)<<32-_:v.i(N+I);return new o(P,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,uR=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,qi=o}).apply(typeof LE<"u"?LE:typeof self<"u"?self:typeof window<"u"?window:{});var Uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cR,Ea,hR,hc,hm,dR,fR,pR;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uu=="object"&&Uu];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var b=l[y];if(!(b in p))break e;p=p[b]}l=l[l.length-1],y=p[l],d=d(y),d!=y&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,y=!1,b={next:function(){if(!y&&p<l.length){var L=p++;return{value:d(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,y),l.apply(d,b)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function w(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function C(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(y,b,L){for(var W=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)W[Te-2]=arguments[Te];return d.prototype[b].apply(y,W)}}function A(l){const d=l.length;if(0<d){const p=Array(d);for(let y=0;y<d;y++)p[y]=l[y];return p}return[]}function x(l,d){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(u(y)){const b=l.length||0,L=y.length||0;l.length=b+L;for(let W=0;W<L;W++)l[b+W]=y[W]}else l.push(y)}}class S{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function T(l){return/^[\s\xa0]*$/.test(l)}function k(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var j=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function M(l,d,p){for(const y in l)d.call(p,l[y],y,l)}function v(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function _(l){const d={};for(const p in l)d[p]=l[p];return d}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,d){let p,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(p in y)l[p]=y[p];for(let L=0;L<I.length;L++)p=I[L],Object.prototype.hasOwnProperty.call(y,p)&&(l[p]=y[p])}}function P(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function E(){var l=K;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class J{constructor(){this.h=this.g=null}add(d,p){const y=ie.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var ie=new S(()=>new De,l=>l.reset());class De{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,$=!1,K=new J,F=()=>{const l=a.Promise.resolve(void 0);Re=()=>{l.then(re)}};var re=()=>{for(var l;l=E();){try{l.h.call(l.g)}catch(p){N(p)}var d=ie;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}$=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var Qe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Ue(l,d){if(se.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(j){e:{try{O(d.nodeName);var b=!0;break e}catch{}b=!1}b||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:at[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ue.aa.h.call(this)}}C(Ue,se);var at={2:"touch",3:"pen",4:"mouse"};Ue.prototype.h=function(){Ue.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var gt="closure_listenable_"+(1e6*Math.random()|0),qt=0;function ms(l,d,p,y,b){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=b,this.key=++qt,this.da=this.fa=!1}function fn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function pn(l){this.src=l,this.g={},this.h=0}pn.prototype.add=function(l,d,p,y,b){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var W=Uo(l,d,y,b);return-1<W?(d=l[W],p||(d.fa=!1)):(d=new ms(d,this.src,L,!!y,b),d.fa=p,l.push(d)),d};function Xn(l,d){var p=d.type;if(p in l.g){var y=l.g[p],b=Array.prototype.indexOf.call(y,d,void 0),L;(L=0<=b)&&Array.prototype.splice.call(y,b,1),L&&(fn(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Uo(l,d,p,y){for(var b=0;b<l.length;++b){var L=l[b];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==y)return b}return-1}var Cr="closure_lm_"+(1e6*Math.random()|0),Ad={};function oy(l,d,p,y,b){if(Array.isArray(d)){for(var L=0;L<d.length;L++)oy(l,d[L],p,y,b);return null}return p=uy(p),l&&l[gt]?l.K(d,p,c(y)?!!y.capture:!1,b):y1(l,d,p,!1,y,b)}function y1(l,d,p,y,b,L){if(!d)throw Error("Invalid event type");var W=c(b)?!!b.capture:!!b,Te=Nd(l);if(Te||(l[Cr]=Te=new pn(l)),p=Te.add(d,p,y,W,L),p.proxy)return p;if(y=v1(),p.proxy=y,y.src=l,y.listener=p,l.addEventListener)Qe||(b=W),b===void 0&&(b=!1),l.addEventListener(d.toString(),y,b);else if(l.attachEvent)l.attachEvent(ly(d.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function v1(){function l(p){return d.call(l.src,l.listener,p)}const d=w1;return l}function ay(l,d,p,y,b){if(Array.isArray(d))for(var L=0;L<d.length;L++)ay(l,d[L],p,y,b);else y=c(y)?!!y.capture:!!y,p=uy(p),l&&l[gt]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],p=Uo(L,p,y,b),-1<p&&(fn(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=Nd(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Uo(d,p,y,b)),(p=-1<l?d[l]:null)&&Pd(p))}function Pd(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[gt])Xn(d.i,l);else{var p=l.type,y=l.proxy;d.removeEventListener?d.removeEventListener(p,y,l.capture):d.detachEvent?d.detachEvent(ly(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=Nd(d))?(Xn(p,l),p.h==0&&(p.src=null,d[Cr]=null)):fn(l)}}}function ly(l){return l in Ad?Ad[l]:Ad[l]="on"+l}function w1(l,d){if(l.da)l=!0;else{d=new Ue(d,this);var p=l.listener,y=l.ha||l.src;l.fa&&Pd(l),l=p.call(y,d)}return l}function Nd(l){return l=l[Cr],l instanceof pn?l:null}var xd="__closure_events_fn_"+(1e9*Math.random()>>>0);function uy(l){return typeof l=="function"?l:(l[xd]||(l[xd]=function(d){return l.handleEvent(d)}),l[xd])}function _t(){ee.call(this),this.i=new pn(this),this.M=this,this.F=null}C(_t,ee),_t.prototype[gt]=!0,_t.prototype.removeEventListener=function(l,d,p,y){ay(this,l,d,p,y)};function Pt(l,d){var p,y=l.F;if(y)for(p=[];y;y=y.F)p.push(y);if(l=l.M,y=d.type||d,typeof d=="string")d=new se(d,l);else if(d instanceof se)d.target=d.target||l;else{var b=d;d=new se(y,l),R(d,b)}if(b=!0,p)for(var L=p.length-1;0<=L;L--){var W=d.g=p[L];b=iu(W,y,!0,d)&&b}if(W=d.g=l,b=iu(W,y,!0,d)&&b,b=iu(W,y,!1,d)&&b,p)for(L=0;L<p.length;L++)W=d.g=p[L],b=iu(W,y,!1,d)&&b}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],y=0;y<p.length;y++)fn(p[y]);delete l.g[d],l.h--}}this.F=null},_t.prototype.K=function(l,d,p,y){return this.i.add(String(l),d,!1,p,y)},_t.prototype.L=function(l,d,p,y){return this.i.add(String(l),d,!0,p,y)};function iu(l,d,p,y){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var b=!0,L=0;L<d.length;++L){var W=d[L];if(W&&!W.da&&W.capture==p){var Te=W.listener,lt=W.ha||W.src;W.fa&&Xn(l.i,W),b=Te.call(lt,y)!==!1&&b}}return b&&!y.defaultPrevented}function cy(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function hy(l){l.g=cy(()=>{l.g=null,l.i&&(l.i=!1,hy(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class E1 extends ee{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:hy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zo(l){ee.call(this),this.h=l,this.g={}}C(zo,ee);var dy=[];function fy(l){M(l.g,function(d,p){this.g.hasOwnProperty(p)&&Pd(d)},l),l.g={}}zo.prototype.N=function(){zo.aa.N.call(this),fy(this)},zo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bd=a.JSON.stringify,T1=a.JSON.parse,I1=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Dd(){}Dd.prototype.h=null;function py(l){return l.h||(l.h=l.i())}function my(){}var Bo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Od(){se.call(this,"d")}C(Od,se);function Ld(){se.call(this,"c")}C(Ld,se);var Si={},gy=null;function su(){return gy=gy||new _t}Si.La="serverreachability";function _y(l){se.call(this,Si.La,l)}C(_y,se);function $o(l){const d=su();Pt(d,new _y(d))}Si.STAT_EVENT="statevent";function yy(l,d){se.call(this,Si.STAT_EVENT,l),this.stat=d}C(yy,se);function Nt(l){const d=su();Pt(d,new yy(d,l))}Si.Ma="timingevent";function vy(l,d){se.call(this,Si.Ma,l),this.size=d}C(vy,se);function Wo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function qo(){this.g=!0}qo.prototype.xa=function(){this.g=!1};function C1(l,d,p,y,b,L){l.info(function(){if(l.g)if(L)for(var W="",Te=L.split("&"),lt=0;lt<Te.length;lt++){var me=Te[lt].split("=");if(1<me.length){var yt=me[0];me=me[1];var vt=yt.split("_");W=2<=vt.length&&vt[1]=="type"?W+(yt+"="+me+"&"):W+(yt+"=redacted&")}}else W=null;else W=L;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+d+`
`+p+`
`+W})}function S1(l,d,p,y,b,L,W){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+d+`
`+p+`
`+L+" "+W})}function gs(l,d,p,y){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+k1(l,p)+(y?" "+y:"")})}function R1(l,d){l.info(function(){return"TIMEOUT: "+d})}qo.prototype.info=function(){};function k1(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var y=p[l];if(!(2>y.length)){var b=y[1];if(Array.isArray(b)&&!(1>b.length)){var L=b[0];if(L!="noop"&&L!="stop"&&L!="close")for(var W=1;W<b.length;W++)b[W]=""}}}}return bd(p)}catch{return d}}var ou={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Md;function au(){}C(au,Dd),au.prototype.g=function(){return new XMLHttpRequest},au.prototype.i=function(){return{}},Md=new au;function Sr(l,d,p,y){this.j=l,this.i=d,this.l=p,this.R=y||1,this.U=new zo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ey}function Ey(){this.i=null,this.g="",this.h=!1}var Ty={},Vd={};function Fd(l,d,p){l.L=1,l.v=hu(Jn(d)),l.m=p,l.P=!0,Iy(l,null)}function Iy(l,d){l.F=Date.now(),lu(l),l.A=Jn(l.v);var p=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Vy(p.i,"t",y),l.C=0,p=l.j.J,l.h=new Ey,l.g=tv(l.j,p?d:null,!l.m),0<l.O&&(l.M=new E1(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,y=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(dy[0]=b.toString()),b=dy);for(var L=0;L<b.length;L++){var W=oy(p,b[L],y||d.handleEvent,!1,d.h||d);if(!W)break;d.g[W.key]=W}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),$o(),C1(l.i,l.u,l.A,l.l,l.R,l.m)}Sr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Zn(l)==3?d.j():this.Y(l)},Sr.prototype.Y=function(l){try{if(l==this.g)e:{const vt=Zn(this.g);var d=this.g.Ba();const vs=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Wy(this.g)))){this.J||vt!=4||d==7||(d==8||0>=vs?$o(3):$o(2)),jd(this);var p=this.g.Z();this.X=p;t:if(Cy(this)){var y=Wy(this.g);l="";var b=y.length,L=Zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ri(this),Ho(this);var W="";break t}this.h.i=new a.TextDecoder}for(d=0;d<b;d++)this.h.h=!0,l+=this.h.i.decode(y[d],{stream:!(L&&d==b-1)});y.length=0,this.h.g+=l,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,S1(this.i,this.u,this.A,this.l,this.R,vt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,lt=this.g;if((Te=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(Te)){var me=Te;break t}}me=null}if(p=me)gs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ud(this,p);else{this.o=!1,this.s=3,Nt(12),Ri(this),Ho(this);break e}}if(this.P){p=!0;let mn;for(;!this.J&&this.C<W.length;)if(mn=A1(this,W),mn==Vd){vt==4&&(this.s=4,Nt(14),p=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(mn==Ty){this.s=4,Nt(15),gs(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else gs(this.i,this.l,mn,null),Ud(this,mn);if(Cy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||W.length!=0||this.h.h||(this.s=1,Nt(16),p=!1),this.o=this.o&&p,!p)gs(this.i,this.l,W,"[Invalid Chunked Response]"),Ri(this),Ho(this);else if(0<W.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Hd(yt),yt.M=!0,Nt(11))}}else gs(this.i,this.l,W,null),Ud(this,W);vt==4&&Ri(this),this.o&&!this.J&&(vt==4?Xy(this.j,this):(this.o=!1,lu(this)))}else q1(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),Ri(this),Ho(this)}}}catch{}finally{}};function Cy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function A1(l,d){var p=l.C,y=d.indexOf(`
`,p);return y==-1?Vd:(p=Number(d.substring(p,y)),isNaN(p)?Ty:(y+=1,y+p>d.length?Vd:(d=d.slice(y,y+p),l.C=y+p,d)))}Sr.prototype.cancel=function(){this.J=!0,Ri(this)};function lu(l){l.S=Date.now()+l.I,Sy(l,l.I)}function Sy(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Wo(m(l.ba,l),d)}function jd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Sr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(R1(this.i,this.A),this.L!=2&&($o(),Nt(17)),Ri(this),this.s=2,Ho(this)):Sy(this,this.S-l)};function Ho(l){l.j.G==0||l.J||Xy(l.j,l)}function Ri(l){jd(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,fy(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Ud(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||zd(p.h,l))){if(!l.K&&zd(p.h,l)&&p.G==3){try{var y=p.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)_u(p),mu(p);else break e;qd(p),Nt(18)}}else p.za=b[1],0<p.za-p.T&&37500>b[2]&&p.F&&p.v==0&&!p.C&&(p.C=Wo(m(p.Za,p),6e3));if(1>=Ay(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Ai(p,11)}else if((l.K||p.g==l)&&_u(p),!T(d))for(b=p.Da.g.parse(d),d=0;d<b.length;d++){let me=b[d];if(p.T=me[0],me=me[1],p.G==2)if(me[0]=="c"){p.K=me[1],p.ia=me[2];const yt=me[3];yt!=null&&(p.la=yt,p.j.info("VER="+p.la));const vt=me[4];vt!=null&&(p.Aa=vt,p.j.info("SVER="+p.Aa));const vs=me[5];vs!=null&&typeof vs=="number"&&0<vs&&(y=1.5*vs,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const mn=l.g;if(mn){const vu=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vu){var L=y.h;L.g||vu.indexOf("spdy")==-1&&vu.indexOf("quic")==-1&&vu.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Bd(L,L.h),L.h=null))}if(y.D){const Gd=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Gd&&(y.ya=Gd,ke(y.I,y.D,Gd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var W=l;if(y.qa=ev(y,y.J?y.ia:null,y.W),W.K){Py(y.h,W);var Te=W,lt=y.L;lt&&(Te.I=lt),Te.B&&(jd(Te),lu(Te)),y.g=W}else Qy(y);0<p.i.length&&gu(p)}else me[0]!="stop"&&me[0]!="close"||Ai(p,7);else p.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Ai(p,7):Wd(p):me[0]!="noop"&&p.l&&p.l.ta(me),p.v=0)}}$o(4)}catch{}}var P1=class{constructor(l,d){this.g=l,this.map=d}};function Ry(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ky(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ay(l){return l.h?1:l.g?l.g.size:0}function zd(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Bd(l,d){l.g?l.g.add(d):l.h=d}function Py(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Ry.prototype.cancel=function(){if(this.i=Ny(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ny(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return A(l.i)}function N1(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,y=0;y<p;y++)d.push(l[y]);return d}d=[],p=0;for(y in l)d[p++]=l[y];return d}function x1(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const y in l)d[p++]=y;return d}}}function xy(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=x1(l),y=N1(l),b=y.length,L=0;L<b;L++)d.call(void 0,y[L],p&&p[L],l)}var by=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function b1(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var y=l[p].indexOf("="),b=null;if(0<=y){var L=l[p].substring(0,y);b=l[p].substring(y+1)}else L=l[p];d(L,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function ki(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ki){this.h=l.h,uu(this,l.j),this.o=l.o,this.g=l.g,cu(this,l.s),this.l=l.l;var d=l.i,p=new Qo;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Dy(this,p),this.m=l.m}else l&&(d=String(l).match(by))?(this.h=!1,uu(this,d[1]||"",!0),this.o=Go(d[2]||""),this.g=Go(d[3]||"",!0),cu(this,d[4]),this.l=Go(d[5]||"",!0),Dy(this,d[6]||"",!0),this.m=Go(d[7]||"")):(this.h=!1,this.i=new Qo(null,this.h))}ki.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Ko(d,Oy,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Ko(d,Oy,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Ko(p,p.charAt(0)=="/"?L1:O1,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Ko(p,V1)),l.join("")};function Jn(l){return new ki(l)}function uu(l,d,p){l.j=p?Go(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function cu(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Dy(l,d,p){d instanceof Qo?(l.i=d,F1(l.i,l.h)):(p||(d=Ko(d,M1)),l.i=new Qo(d,l.h))}function ke(l,d,p){l.i.set(d,p)}function hu(l){return ke(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Go(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ko(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,D1),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function D1(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Oy=/[#\/\?@]/g,O1=/[#\?:]/g,L1=/[#\?]/g,M1=/[#\?@]/g,V1=/#/g;function Qo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Rr(l){l.g||(l.g=new Map,l.h=0,l.i&&b1(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Qo.prototype,t.add=function(l,d){Rr(this),this.i=null,l=_s(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Ly(l,d){Rr(l),d=_s(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function My(l,d){return Rr(l),d=_s(l,d),l.g.has(d)}t.forEach=function(l,d){Rr(this),this.g.forEach(function(p,y){p.forEach(function(b){l.call(d,b,y,this)},this)},this)},t.na=function(){Rr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let y=0;y<d.length;y++){const b=l[y];for(let L=0;L<b.length;L++)p.push(d[y])}return p},t.V=function(l){Rr(this);let d=[];if(typeof l=="string")My(this,l)&&(d=d.concat(this.g.get(_s(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return Rr(this),this.i=null,l=_s(this,l),My(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Vy(l,d,p){Ly(l,d),0<p.length&&(l.i=null,l.g.set(_s(l,d),A(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var y=d[p];const L=encodeURIComponent(String(y)),W=this.V(y);for(y=0;y<W.length;y++){var b=L;W[y]!==""&&(b+="="+encodeURIComponent(String(W[y]))),l.push(b)}}return this.i=l.join("&")};function _s(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function F1(l,d){d&&!l.j&&(Rr(l),l.i=null,l.g.forEach(function(p,y){var b=y.toLowerCase();y!=b&&(Ly(this,y),Vy(this,b,p))},l)),l.j=d}function j1(l,d){const p=new qo;if(a.Image){const y=new Image;y.onload=w(kr,p,"TestLoadImage: loaded",!0,d,y),y.onerror=w(kr,p,"TestLoadImage: error",!1,d,y),y.onabort=w(kr,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=w(kr,p,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else d(!1)}function U1(l,d){const p=new qo,y=new AbortController,b=setTimeout(()=>{y.abort(),kr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(b),L.ok?kr(p,"TestPingServer: ok",!0,d):kr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),kr(p,"TestPingServer: error",!1,d)})}function kr(l,d,p,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(p)}catch{}}function z1(){this.g=new I1}function B1(l,d,p){const y=p||"";try{xy(l,function(b,L){let W=b;c(b)&&(W=bd(b)),d.push(y+L+"="+encodeURIComponent(W))})}catch(b){throw d.push(y+"type="+encodeURIComponent("_badmap")),b}}function du(l){this.l=l.Ub||null,this.j=l.eb||!1}C(du,Dd),du.prototype.g=function(){return new fu(this.l,this.j)},du.prototype.i=function(l){return function(){return l}}({});function fu(l,d){_t.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(fu,_t),t=fu.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Xo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Xo(this)),this.g&&(this.readyState=3,Xo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Yo(this):Xo(this),this.readyState==3&&Fy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Yo(this))},t.Qa=function(l){this.g&&(this.response=l,Yo(this))},t.ga=function(){this.g&&Yo(this)};function Yo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Xo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Xo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(fu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function jy(l){let d="";return M(l,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function $d(l,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=jy(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):ke(l,d,p))}function ze(l){_t.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ze,_t);var $1=/^https?$/i,W1=["POST","PUT"];t=ze.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Md.g(),this.v=this.o?py(this.o):py(Md),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){Uy(this,L);return}if(l=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)p.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),b=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(W1,d,void 0))||y||b||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,W]of p)this.g.setRequestHeader(L,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$y(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){Uy(this,L)}};function Uy(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,zy(l),pu(l)}function zy(l){l.A||(l.A=!0,Pt(l,"complete"),Pt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Pt(this,"complete"),Pt(this,"abort"),pu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pu(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?By(this):this.bb())},t.bb=function(){By(this)};function By(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Zn(l)!=4||l.Z()!=2)){if(l.u&&Zn(l)==4)cy(l.Ea,0,l);else if(Pt(l,"readystatechange"),Zn(l)==4){l.h=!1;try{const W=l.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=W===0){var b=String(l.D).match(by)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),y=!$1.test(b?b.toLowerCase():"")}p=y}if(p)Pt(l,"complete"),Pt(l,"success");else{l.m=6;try{var L=2<Zn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",zy(l)}}finally{pu(l)}}}}function pu(l,d){if(l.g){$y(l);const p=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||Pt(l,"ready");try{p.onreadystatechange=y}catch{}}}function $y(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Zn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Zn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),T1(d)}};function Wy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function q1(l){const d={};l=(l.g&&2<=Zn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(T(l[y]))continue;var p=P(l[y]);const b=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[b]||[];d[b]=L,L.push(p)}v(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jo(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function qy(l){this.Aa=0,this.i=[],this.j=new qo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jo("baseRetryDelayMs",5e3,l),this.cb=Jo("retryDelaySeedMs",1e4,l),this.Wa=Jo("forwardChannelMaxRetries",2,l),this.wa=Jo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ry(l&&l.concurrentRequestLimit),this.Da=new z1,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=qy.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,y){Nt(0),this.W=l,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=ev(this,null,this.W),gu(this)};function Wd(l){if(Hy(l),l.G==3){var d=l.U++,p=Jn(l.I);if(ke(p,"SID",l.K),ke(p,"RID",d),ke(p,"TYPE","terminate"),Zo(l,p),d=new Sr(l,l.j,d),d.L=2,d.v=hu(Jn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=tv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),lu(d)}Zy(l)}function mu(l){l.g&&(Hd(l),l.g.cancel(),l.g=null)}function Hy(l){mu(l),l.u&&(a.clearTimeout(l.u),l.u=null),_u(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function gu(l){if(!ky(l.h)&&!l.s){l.s=!0;var d=l.Ga;Re||F(),$||(Re(),$=!0),K.add(d,l),l.B=0}}function H1(l,d){return Ay(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Wo(m(l.Ga,l,d),Jy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new Sr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=_(L),R(L,this.S)):L=this.S),this.m!==null||this.O||(b.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Ky(this,b,d),p=Jn(this.I),ke(p,"RID",l),ke(p,"CVER",22),this.D&&ke(p,"X-HTTP-Session-Id",this.D),Zo(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(jy(L)))+"&"+d:this.m&&$d(p,this.m,L)),Bd(this.h,b),this.Ua&&ke(p,"TYPE","init"),this.P?(ke(p,"$req",d),ke(p,"SID","null"),b.T=!0,Fd(b,p,null)):Fd(b,p,d),this.G=2}}else this.G==3&&(l?Gy(this,l):this.i.length==0||ky(this.h)||Gy(this))};function Gy(l,d){var p;d?p=d.l:p=l.U++;const y=Jn(l.I);ke(y,"SID",l.K),ke(y,"RID",p),ke(y,"AID",l.T),Zo(l,y),l.m&&l.o&&$d(y,l.m,l.o),p=new Sr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Ky(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Bd(l.h,p),Fd(p,y,d)}function Zo(l,d){l.H&&M(l.H,function(p,y){ke(d,y,p)}),l.l&&xy({},function(p,y){ke(d,y,p)})}function Ky(l,d,p){p=Math.min(l.i.length,p);var y=l.l?m(l.l.Na,l.l,l):null;e:{var b=l.i;let L=-1;for(;;){const W=["count="+p];L==-1?0<p?(L=b[0].g,W.push("ofs="+L)):L=0:W.push("ofs="+L);let Te=!0;for(let lt=0;lt<p;lt++){let me=b[lt].g;const yt=b[lt].map;if(me-=L,0>me)L=Math.max(0,b[lt].g-100),Te=!1;else try{B1(yt,W,"req"+me+"_")}catch{y&&y(yt)}}if(Te){y=W.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,y}function Qy(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Re||F(),$||(Re(),$=!0),K.add(d,l),l.v=0}}function qd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Wo(m(l.Fa,l),Jy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Yy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Wo(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),mu(this),Yy(this))};function Hd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Yy(l){l.g=new Sr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Jn(l.qa);ke(d,"RID","rpc"),ke(d,"SID",l.K),ke(d,"AID",l.T),ke(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&ke(d,"TO",l.ja),ke(d,"TYPE","xmlhttp"),Zo(l,d),l.m&&l.o&&$d(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=hu(Jn(d)),p.m=null,p.P=!0,Iy(p,l)}t.Za=function(){this.C!=null&&(this.C=null,mu(this),qd(this),Nt(19))};function _u(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Xy(l,d){var p=null;if(l.g==d){_u(l),Hd(l),l.g=null;var y=2}else if(zd(l.h,d))p=d.D,Py(l.h,d),y=1;else return;if(l.G!=0){if(d.o)if(y==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var b=l.B;y=su(),Pt(y,new vy(y,p)),gu(l)}else Qy(l);else if(b=d.s,b==3||b==0&&0<d.X||!(y==1&&H1(l,d)||y==2&&qd(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),b){case 1:Ai(l,5);break;case 4:Ai(l,10);break;case 3:Ai(l,6);break;default:Ai(l,2)}}}function Jy(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function Ai(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),y=l.Xa;const b=!y;y=new ki(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||uu(y,"https"),hu(y),b?j1(y.toString(),p):U1(y.toString(),p)}else Nt(2);l.G=0,l.l&&l.l.sa(d),Zy(l),Hy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function Zy(l){if(l.G=0,l.ka=[],l.l){const d=Ny(l.h);(d.length!=0||l.i.length!=0)&&(x(l.ka,d),x(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function ev(l,d,p){var y=p instanceof ki?Jn(p):new ki(p);if(y.g!="")d&&(y.g=d+"."+y.g),cu(y,y.s);else{var b=a.location;y=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;var L=new ki(null);y&&uu(L,y),d&&(L.g=d),b&&cu(L,b),p&&(L.l=p),y=L}return p=l.D,d=l.ya,p&&d&&ke(y,p,d),ke(y,"VER",l.la),Zo(l,y),y}function tv(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new ze(new du({eb:p})):new ze(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function nv(){}t=nv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function yu(){}yu.prototype.g=function(l,d){return new Ht(l,d)};function Ht(l,d){_t.call(this),this.g=new qy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!T(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ys(this)}C(Ht,_t),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Wd(this.g)},Ht.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=bd(l),l=p);d.i.push(new P1(d.Ya++,l)),d.G==3&&gu(d)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Wd(this.g),delete this.g,Ht.aa.N.call(this)};function rv(l){Od.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}C(rv,Od);function iv(){Ld.call(this),this.status=1}C(iv,Ld);function ys(l){this.g=l}C(ys,nv),ys.prototype.ua=function(){Pt(this.g,"a")},ys.prototype.ta=function(l){Pt(this.g,new rv(l))},ys.prototype.sa=function(l){Pt(this.g,new iv)},ys.prototype.ra=function(){Pt(this.g,"b")},yu.prototype.createWebChannel=yu.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,pR=function(){return new yu},fR=function(){return su()},dR=Si,hm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ou.NO_ERROR=0,ou.TIMEOUT=8,ou.HTTP_ERROR=6,hc=ou,wy.COMPLETE="complete",hR=wy,my.EventType=Bo,Bo.OPEN="a",Bo.CLOSE="b",Bo.ERROR="c",Bo.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Ea=my,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,cR=ze}).apply(typeof Uu<"u"?Uu:typeof self<"u"?self:typeof window<"u"?window:{});const ME="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let It=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new $h("@firebase/firestore");function da(){return rs.logLevel}function G(t,...e){if(rs.logLevel<=ce.DEBUG){const n=e.map(v_);rs.debug(`Firestore (${Lo}): ${t}`,...n)}}function vr(t,...e){if(rs.logLevel<=ce.ERROR){const n=e.map(v_);rs.error(`Firestore (${Lo}): ${t}`,...n)}}function go(t,...e){if(rs.logLevel<=ce.WARN){const n=e.map(v_);rs.warn(`Firestore (${Lo}): ${t}`,...n)}}function v_(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Lo}) INTERNAL ASSERTION FAILED: `+t;throw vr(e),new Error(e)}function we(t,e){t||Z()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class eF{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tF{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ii;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ii,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ii)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new mR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new It(e)}}class nF{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rF{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new nF(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iF{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sF{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){we(this.o===void 0);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new iF(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function oF(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=oF(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function _o(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Ze(0,0))}static max(){return new te(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Cl{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const aF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Cl{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return aF.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Pe.fromString(e))}static fromName(e){return new Q(Pe.fromString(e).popFirst(5))}static empty(){return new Q(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Pe(e.slice()))}}function lF(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new mi(i,Q.empty(),e)}function uF(t){return new mi(t.readTime,t.key,-1)}class mi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mi(te.min(),Q.empty(),-1)}static max(){return new mi(te.max(),Q.empty(),-1)}}function cF(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const hF="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xl(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==hF)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function fF(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Jl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class w_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}w_.oe=-1;function cd(t){return t==null}function dh(t){return t===0&&1/t==-1/0}function pF(t){return typeof t=="number"&&Number.isInteger(t)&&!dh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _R(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zu(this.root,e,this.comparator,!0)}}class zu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=s??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ct(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ct(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new FE(this.data.getIterator())}getIteratorFrom(e){return new FE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class FE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ft(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class yR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yR("Invalid base64 string: "+s):s}}(e);return new mt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const mF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(t){if(we(!!t),typeof t=="string"){let e=0;const n=mF.exec(t);if(we(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function is(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */function E_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function T_(t){const e=t.mapValue.fields.__previous_value__;return E_(e)?T_(e):e}function Sl(t){const e=gi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Rl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Rl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Bu={mapValue:{}};function ss(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?E_(t)?4:yF(t)?9007199254740991:_F(t)?10:11:Z()}function Gn(t,e){if(t===e)return!0;const n=ss(t);if(n!==ss(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sl(t).isEqual(Sl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=gi(i.timestampValue),a=gi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return is(i.bytesValue).isEqual(is(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return We(i.geoPointValue.latitude)===We(s.geoPointValue.latitude)&&We(i.geoPointValue.longitude)===We(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return We(i.integerValue)===We(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=We(i.doubleValue),a=We(s.doubleValue);return o===a?dh(o)===dh(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return _o(t.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(VE(o)!==VE(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Gn(o[u],a[u])))return!1;return!0}(t,e);default:return Z()}}function kl(t,e){return(t.values||[]).find(n=>Gn(n,e))!==void 0}function yo(t,e){if(t===e)return 0;const n=ss(t),r=ss(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=We(s.integerValue||s.doubleValue),u=We(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return jE(t.timestampValue,e.timestampValue);case 4:return jE(Sl(t),Sl(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(s,o){const a=is(s),u=is(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ge(a[c],u[c]);if(h!==0)return h}return ge(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ge(We(s.latitude),We(o.latitude));return a!==0?a:ge(We(s.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return UE(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},m=o.fields||{},w=(a=f.value)===null||a===void 0?void 0:a.arrayValue,C=(u=m.value)===null||u===void 0?void 0:u.arrayValue,A=ge(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:UE(w,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Bu.mapValue&&o===Bu.mapValue)return 0;if(s===Bu.mapValue)return 1;if(o===Bu.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=ge(u[f],h[f]);if(m!==0)return m;const w=yo(a[u[f]],c[h[f]]);if(w!==0)return w}return ge(u.length,h.length)}(t.mapValue,e.mapValue);default:throw Z()}}function jE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=gi(t),r=gi(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function UE(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=yo(n[i],r[i]);if(s)return s}return ge(n.length,r.length)}function vo(t){return dm(t)}function dm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dm(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function zE(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fm(t){return!!t&&"integerValue"in t}function I_(t){return!!t&&"arrayValue"in t}function BE(t){return!!t&&"nullValue"in t}function $E(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dc(t){return!!t&&"mapValue"in t}function _F(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function za(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=za(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=za(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=za(n)}setAll(e){let n=ht.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=za(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());dc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];dc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ut(za(this.value))}}function vR(t){const e=[];return fs(t.fields,(n,r)=>{const i=new ht([n]);if(dc(r)){const s=vR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new St(e,0,te.min(),te.min(),te.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new St(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new St(e,2,n,te.min(),te.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,te.min(),te.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fh{constructor(e,n){this.position=e,this.inclusive=n}}function WE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=yo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Al{constructor(e,n="asc"){this.field=e,this.dir=n}}function vF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class wR{}class Ke extends wR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new EF(e,n,r):n==="array-contains"?new CF(e,r):n==="in"?new SF(e,r):n==="not-in"?new RF(e,r):n==="array-contains-any"?new kF(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new TF(e,r):new IF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(yo(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(yo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends wR{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Nn(e,n)}matches(e){return ER(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ER(t){return t.op==="and"}function TR(t){return wF(t)&&ER(t)}function wF(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function pm(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+vo(t.value);if(TR(t))return t.filters.map(e=>pm(e)).join(",");{const e=t.filters.map(n=>pm(n)).join(",");return`${t.op}(${e})`}}function IR(t,e){return t instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&Gn(r.value,i.value)}(t,e):t instanceof Nn?function(r,i){return i instanceof Nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&IR(o,i.filters[a]),!0):!1}(t,e):void Z()}function CR(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${vo(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(CR).join(" ,")+"}"}(t):"Filter"}class EF extends Ke{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class TF extends Ke{constructor(e,n){super(e,"in",n),this.keys=SR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IF extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=SR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function SR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class CF extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return I_(n)&&kl(n.arrayValue,this.value)}}class SF extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&kl(this.value.arrayValue,n)}}class RF extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!kl(this.value.arrayValue,n)}}class kF extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!I_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>kl(this.value.arrayValue,r))}}/**
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
 */class AF{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function HE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new AF(t,e,n,r,i,s,o)}function C_(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),cd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vo(r)).join(",")),e.ue=n}return e.ue}function S_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!IR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qE(t.startAt,e.startAt)&&qE(t.endAt,e.endAt)}function mm(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function PF(t,e,n,r,i,s,o,a){return new Mo(t,e,n,r,i,s,o,a)}function hd(t){return new Mo(t)}function GE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RR(t){return t.collectionGroup!==null}function Ba(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ft(ht.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Al(s,r))}),n.has(ht.keyField().canonicalString())||e.ce.push(new Al(ht.keyField(),r))}return e.ce}function $n(t){const e=ne(t);return e.le||(e.le=NF(e,Ba(t))),e.le}function NF(t,e){if(t.limitType==="F")return HE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Al(i.field,s)});const n=t.endAt?new fh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fh(t.startAt.position,t.startAt.inclusive):null;return HE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gm(t,e){const n=t.filters.concat([e]);return new Mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ph(t,e,n){return new Mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dd(t,e){return S_($n(t),$n(e))&&t.limitType===e.limitType}function kR(t){return`${C_($n(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>CR(i)).join(", ")}]`),cd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vo(i)).join(",")),`Target(${r})`}($n(t))}; limitType=${t.limitType})`}function fd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ba(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=WE(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ba(r),i)||r.endAt&&!function(o,a,u){const c=WE(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ba(r),i))}(t,e)}function xF(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function AR(t){return(e,n)=>{let r=!1;for(const i of Ba(t)){const s=bF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bF(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?yo(u,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _R(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DF=new je(Q.comparator);function wr(){return DF}const PR=new je(Q.comparator);function Ta(...t){let e=PR;for(const n of t)e=e.insert(n.key,n);return e}function NR(t){let e=PR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zi(){return $a()}function xR(){return $a()}function $a(){return new Vo(t=>t.toString(),(t,e)=>t.isEqual(e))}const OF=new je(Q.comparator),LF=new ft(Q.comparator);function he(...t){let e=LF;for(const n of t)e=e.add(n);return e}const MF=new ft(ge);function VF(){return MF}/**
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
 */function R_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dh(e)?"-0":e}}function bR(t){return{integerValue:""+t}}function FF(t,e){return pF(e)?bR(e):R_(t,e)}/**
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
 */class pd{constructor(){this._=void 0}}function jF(t,e,n){return t instanceof Pl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&E_(s)&&(s=T_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Nl?OR(t,e):t instanceof xl?LR(t,e):function(i,s){const o=DR(i,s),a=KE(o)+KE(i.Pe);return fm(o)&&fm(i.Pe)?bR(a):R_(i.serializer,a)}(t,e)}function UF(t,e,n){return t instanceof Nl?OR(t,e):t instanceof xl?LR(t,e):n}function DR(t,e){return t instanceof mh?function(r){return fm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pl extends pd{}class Nl extends pd{constructor(e){super(),this.elements=e}}function OR(t,e){const n=MR(e);for(const r of t.elements)n.some(i=>Gn(i,r))||n.push(r);return{arrayValue:{values:n}}}class xl extends pd{constructor(e){super(),this.elements=e}}function LR(t,e){let n=MR(e);for(const r of t.elements)n=n.filter(i=>!Gn(i,r));return{arrayValue:{values:n}}}class mh extends pd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function KE(t){return We(t.integerValue||t.doubleValue)}function MR(t){return I_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(e,n){this.field=e,this.transform=n}}function BF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Nl&&i instanceof Nl||r instanceof xl&&i instanceof xl?_o(r.elements,i.elements,Gn):r instanceof mh&&i instanceof mh?Gn(r.Pe,i.Pe):r instanceof Pl&&i instanceof Pl}(t.transform,e.transform)}class $F{constructor(e,n){this.version=e,this.transformResults=n}}class Wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class md{}function VR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jR(t.key,Wn.none()):new Zl(t.key,t.data,Wn.none());{const n=t.data,r=Ut.empty();let i=new ft(ht.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ii(t.key,r,new Xt(i.toArray()),Wn.none())}}function WF(t,e,n){t instanceof Zl?function(i,s,o){const a=i.value.clone(),u=YE(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ii?function(i,s,o){if(!fc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=YE(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(FR(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wa(t,e,n,r){return t instanceof Zl?function(s,o,a,u){if(!fc(s.precondition,o))return a;const c=s.value.clone(),h=XE(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ii?function(s,o,a,u){if(!fc(s.precondition,o))return a;const c=XE(s.fieldTransforms,u,o),h=o.data;return h.setAll(FR(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return fc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function qF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DR(r.transform,i||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,s))}return n||null}function QE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_o(r,i,(s,o)=>BF(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zl extends md{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ii extends md{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function FR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function YE(t,e,n){const r=new Map;we(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,UF(o,a,n[i]))}return r}function XE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jF(s,o,e))}return r}class jR extends md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HF extends md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=VR(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,(n,r)=>QE(n,r))&&_o(this.baseMutations,e.baseMutations,(n,r)=>QE(n,r))}}class k_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){we(e.mutations.length===r.length);let i=function(){return OF}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new k_(e,n,r,i)}}/**
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
 */class KF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class QF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,de;function YF(t){switch(t){default:return Z();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function UR(t){if(t===void 0)return vr("GRPC error has no .code"),V.UNKNOWN;switch(t){case He.OK:return V.OK;case He.CANCELLED:return V.CANCELLED;case He.UNKNOWN:return V.UNKNOWN;case He.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case He.INTERNAL:return V.INTERNAL;case He.UNAVAILABLE:return V.UNAVAILABLE;case He.UNAUTHENTICATED:return V.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case He.NOT_FOUND:return V.NOT_FOUND;case He.ALREADY_EXISTS:return V.ALREADY_EXISTS;case He.PERMISSION_DENIED:return V.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case He.ABORTED:return V.ABORTED;case He.OUT_OF_RANGE:return V.OUT_OF_RANGE;case He.UNIMPLEMENTED:return V.UNIMPLEMENTED;case He.DATA_LOSS:return V.DATA_LOSS;default:return Z()}}(de=He||(He={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function XF(){return new TextEncoder}/**
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
 */const JF=new qi([4294967295,4294967295],0);function JE(t){const e=XF().encode(t),n=new uR;return n.update(e),new Uint8Array(n.digest())}function ZE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qi([n,r],0),new qi([i,s],0)]}class A_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ia(`Invalid padding: ${n}`);if(r<0)throw new Ia(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ia(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ia(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=qi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(qi.fromNumber(r)));return i.compare(JF)===1&&(i=new qi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=JE(e),[r,i]=ZE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new A_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=JE(e),[r,i]=ZE(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,eu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gd(te.min(),i,new je(ge),wr(),he())}}class eu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new eu(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class zR{constructor(e,n){this.targetId=e,this.me=n}}class BR{constructor(e,n,r=mt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class e0{constructor(){this.fe=0,this.ge=n0(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=he(),n=he(),r=he();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new eu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=n0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ZF{constructor(e){this.Le=e,this.Be=new Map,this.ke=wr(),this.qe=t0(),this.Qe=new je(ge)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(mm(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,St.newNoDocument(o,te.min()))}else we(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=is(r).toUint8Array()}catch(u){if(u instanceof yR)return go("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new A_(o,i,s)}catch(u){return go(u instanceof Ia?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&mm(a.target)){const u=new Q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,St.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=he();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new gd(e,n,this.Qe,this.ke,r);return this.ke=wr(),this.qe=t0(),this.Qe=new je(ge),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new e0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ft(ge),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new e0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function t0(){return new je(Q.comparator)}function n0(){return new je(Q.comparator)}const e4={asc:"ASCENDING",desc:"DESCENDING"},t4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n4={and:"AND",or:"OR"};class r4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _m(t,e){return t.useProto3Json||cd(e)?e:{value:e}}function gh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $R(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function i4(t,e){return gh(t,e.toTimestamp())}function qn(t){return we(!!t),te.fromTimestamp(function(n){const r=gi(n);return new Ze(r.seconds,r.nanos)}(t))}function P_(t,e){return ym(t,e).canonicalString()}function ym(t,e){const n=function(i){return new Pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function WR(t){const e=Pe.fromString(t);return we(QR(e)),e}function vm(t,e){return P_(t.databaseId,e.path)}function Vf(t,e){const n=WR(e);if(n.get(1)!==t.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(HR(n))}function qR(t,e){return P_(t.databaseId,e)}function s4(t){const e=WR(t);return e.length===4?Pe.emptyPath():HR(e)}function wm(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function HR(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function r0(t,e,n){return{name:vm(t,e),fields:n.value.mapValue.fields}}function o4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(we(h===void 0||typeof h=="string"),mt.fromBase64String(h||"")):(we(h===void 0||h instanceof Buffer||h instanceof Uint8Array),mt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?V.UNKNOWN:UR(c.code);return new q(h,c.message||"")}(o);n=new BR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vf(t,r.document.name),s=qn(r.document.updateTime),o=r.document.createTime?qn(r.document.createTime):te.min(),a=new Ut({mapValue:{fields:r.document.fields}}),u=St.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new pc(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vf(t,r.document),s=r.readTime?qn(r.readTime):te.min(),o=St.newNoDocument(i,s),a=r.removedTargetIds||[];n=new pc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vf(t,r.document),s=r.removedTargetIds||[];n=new pc([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new QF(i,s),a=r.targetId;n=new zR(a,o)}}return n}function a4(t,e){let n;if(e instanceof Zl)n={update:r0(t,e.key,e.value)};else if(e instanceof jR)n={delete:vm(t,e.key)};else if(e instanceof Ii)n={update:r0(t,e.key,e.data),updateMask:g4(e.fieldMask)};else{if(!(e instanceof HF))return Z();n={verify:vm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Pl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Nl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof mh)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:i4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function l4(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?qn(i.updateTime):qn(s);return o.isEqual(te.min())&&(o=qn(s)),new $F(o,i.transformResults||[])}(n,e))):[]}function u4(t,e){return{documents:[qR(t,e.path)]}}function c4(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=qR(t,i);const s=function(c){if(c.length!==0)return KR(Nn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Ss(m.field),direction:f4(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=_m(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function h4(t){let e=s4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=GR(f);return m instanceof Nn&&TR(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(C){return new Al(Rs(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,cd(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,w=f.values||[];return new fh(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,w=f.values||[];return new fh(w,m)}(n.endAt)),PF(e,i,o,s,a,"F",u,c)}function d4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Rs(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Rs(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rs(n.unaryFilter.field);return Ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rs(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Rs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>GR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function f4(t){return e4[t]}function p4(t){return t4[t]}function m4(t){return n4[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function Rs(t){return ht.fromServerFormat(t.fieldPath)}function KR(t){return t instanceof Ke?function(n){if(n.op==="=="){if($E(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NAN"}};if(BE(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($E(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NAN"}};if(BE(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(n.field),op:p4(n.op),value:n.value}}}(t):t instanceof Nn?function(n){const r=n.getFilters().map(i=>KR(i));return r.length===1?r[0]:{compositeFilter:{op:m4(n.op),filters:r}}}(t):Z()}function g4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function QR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r,i,s=te.min(),o=te.min(),a=mt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(e){this.ct=e}}function y4(t){const e=h4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ph(e,e.limit,"L"):e}/**
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
 */class v4{constructor(){this.un=new w4}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(mi.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(mi.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class w4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ft(Pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ft(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new wo(0)}static kn(){return new wo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(){this.changes=new Vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class T4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Wa(r.mutation,i,Xt.empty(),Ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=zi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ta();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=wr();const o=$a(),a=function(){return $a()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ii)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Wa(h.mutation,c,h.mutation.getFieldMask(),Ze.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new T4(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=$a();let i=new je((o,a)=>o-a),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Xt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||he()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=xR();h.forEach(m=>{if(!s.has(m)){const w=VR(n.get(m),r.get(m));w!==null&&f.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):RR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(zi());let a=-1,u=s;return o.next(c=>U.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?U.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,he())).next(h=>({batchId:a,changes:NR(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Ta();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ta();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,u=>{const c=function(f,m){return new Mo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,St.newInvalidDocument(h)))});let a=Ta();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Wa(h.mutation,c,Xt.empty(),Ze.now()),fd(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class C4{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:qn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:y4(i.bundledQuery),readTime:qn(i.readTime)}}(n)),U.resolve()}}/**
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
 */class S4{constructor(){this.overlays=new je(Q.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zi();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=zi(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new je((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=zi(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=zi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KF(n,r));let s=this.Ir.get(n);s===void 0&&(s=he(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class R4{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.Tr=new ft(nt.Er),this.dr=new ft(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new Pe([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new Pe([])),r=new nt(n,e),i=new nt(n,e+1);let s=he();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||ge(e.wr,n.wr)}static Ar(e,n){return ge(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ft(nt.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(ge);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new nt(new Q(s),0);let a=new ft(ge);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),U.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e){this.Mr=e,this.docs=function(){return new je(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=wr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():St.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=wr();const o=n.path,a=new Q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||cF(uF(h),r)<=0||(i.has(h.key)||fd(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new P4(this)}getSize(e){return U.resolve(this.size)}}class P4 extends E4{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(e){this.persistence=e,this.Nr=new Vo(n=>C_(n),S_),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new N_,this.targetCount=0,this.kr=wo.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new wo(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e,n){this.qr={},this.overlays={},this.Qr=new w_(0),this.Kr=!1,this.Kr=!0,this.$r=new R4,this.referenceDelegate=e(this),this.Ur=new N4(this),this.indexManager=new v4,this.remoteDocumentCache=function(i){return new A4(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new _4(n),this.Gr=new C4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new S4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new k4(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new b4(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class b4 extends dF{constructor(e){super(),this.currentSequenceNumber=e}}class x_{constructor(e){this.persistence=e,this.Jr=new N_,this.Yr=null}static Zr(e){return new x_(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new b_(e,n.fromCache,r,i)}}/**
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
 */class D4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class O4{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return zx()?8:fF(At())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new D4;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(da()<=ce.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(da()<=ce.DEBUG&&G("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(da()<=ce.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$n(n))):U.resolve())}Yi(e,n){if(GE(n))return U.resolve(null);let r=$n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ph(n,null,"F"),r=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,ph(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return GE(n)||i.isEqual(te.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(da()<=ce.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cs(n)),this.rs(e,o,n,lF(i,-1)).next(a=>a))})}ts(e,n){let r=new ft(AR(e));return n.forEach((i,s)=>{fd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return da()<=ce.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.Ji.getDocumentsMatchingQuery(e,n,mi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class L4{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new je(ge),this._s=new Vo(s=>C_(s),S_),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new I4(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function M4(t,e,n,r){return new L4(t,e,n,r)}async function YR(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=he();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function V4(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,m=f.keys();let w=U.resolve();return m.forEach(C=>{w=w.next(()=>h.getEntry(u,C)).next(A=>{const x=c.docVersions.get(C);we(x!==null),A.version.compareTo(x)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=he();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function XR(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function F4(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(mt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),i=i.insert(f,w),function(A,x,S){return A.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,w,h)&&a.push(n.Ur.updateTargetData(s,w))});let u=wr(),c=he();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(j4(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(te.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function j4(t,e,n){let r=he(),i=he();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=wr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function U4(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function z4(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Em(t,e,n){const r=ne(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Jl(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function i0(t,e,n){const r=ne(t);let i=te.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=ne(u),m=f._s.get(h);return m!==void 0?U.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,$n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:he())).next(a=>(B4(r,xF(e),a),{documents:a,Ts:s})))}function B4(t,e,n){let r=t.us.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class s0{constructor(){this.activeTargetIds=VF()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $4{constructor(){this.so=new s0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new s0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class W4{_o(e){}shutdown(){}}/**
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
 */class o0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $u=null;function Ff(){return $u===null?$u=function(){return 268435456+Math.round(2147483648*Math.random())}():$u++,"0x"+$u.toString(16)}/**
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
 */const q4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class G4 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Ff(),u=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(G("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw go("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Lo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=q4[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Ff();return new Promise((o,a)=>{const u=new cR;u.setWithCredentials(!0),u.listenOnce(hR.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case hc.NO_ERROR:const h=u.getResponseJson();G(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case hc.TIMEOUT:G(Tt,`RPC '${e}' ${s} timed out`),a(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case hc.HTTP_ERROR:const f=u.getStatus();if(G(Tt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const C=function(x){const S=x.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(S)>=0?S:V.UNKNOWN}(w.status);a(new q(C,w.message))}else a(new q(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new q(V.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{G(Tt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);G(Tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Ff(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pR(),a=fR(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");G(Tt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,w=!1;const C=new H4({Io:x=>{w?G(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(G(Tt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),G(Tt,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},To:()=>f.close()}),A=(x,S,T)=>{x.listen(S,k=>{try{T(k)}catch(O){setTimeout(()=>{throw O},0)}})};return A(f,Ea.EventType.OPEN,()=>{w||(G(Tt,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),A(f,Ea.EventType.CLOSE,()=>{w||(w=!0,G(Tt,`RPC '${e}' stream ${i} transport closed`),C.So())}),A(f,Ea.EventType.ERROR,x=>{w||(w=!0,go(Tt,`RPC '${e}' stream ${i} transport errored:`,x),C.So(new q(V.UNAVAILABLE,"The operation could not be completed")))}),A(f,Ea.EventType.MESSAGE,x=>{var S;if(!w){const T=x.data[0];we(!!T);const k=T,O=k.error||((S=k[0])===null||S===void 0?void 0:S.error);if(O){G(Tt,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let M=function(I){const R=He[I];if(R!==void 0)return UR(R)}(j),v=O.message;M===void 0&&(M=V.INTERNAL,v="Unknown error status: "+j+" with message "+O.message),w=!0,C.So(new q(M,v)),f.close()}else G(Tt,`RPC '${e}' stream ${i} received:`,T),C.bo(T)}}),A(a,dR.STAT_EVENT,x=>{x.stat===hm.PROXY?G(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===hm.NOPROXY&&G(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function jf(){return typeof document<"u"?document:null}/**
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
 */function _d(t){return new r4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new JR(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(vr(n.toString()),vr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class K4 extends ZR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=o4(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?qn(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=wm(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=mm(u)?{documents:u4(s,u)}:{query:c4(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$R(s,o.resumeToken);const c=_m(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=gh(s,o.snapshotVersion.toTimestamp());const c=_m(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=d4(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=wm(this.serializer),n.removeTarget=e,this.a_(n)}}class Q4 extends ZR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=l4(e.writeResults,e.commitTime),r=qn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=wm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>a4(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,ym(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,ym(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class X4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(vr(n),this.D_=!1):G("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ps(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.L_.add(4),await tu(c),c.q_.set("Unknown"),c.L_.delete(4),await yd(c)}(this))})}),this.q_=new X4(r,i)}}async function yd(t){if(ps(t))for(const e of t.B_)await e(!0)}async function tu(t){for(const e of t.B_)await e(!1)}function ek(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),M_(n)?L_(n):Fo(n).r_()&&O_(n,e))}function D_(t,e){const n=ne(t),r=Fo(n);n.N_.delete(e),r.r_()&&tk(n,e),n.N_.size===0&&(r.r_()?r.o_():ps(n)&&n.q_.set("Unknown"))}function O_(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fo(t).A_(e)}function tk(t,e){t.Q_.xe(e),Fo(t).R_(e)}function L_(t){t.Q_=new ZF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Fo(t).start(),t.q_.v_()}function M_(t){return ps(t)&&!Fo(t).n_()&&t.N_.size>0}function ps(t){return ne(t).L_.size===0}function nk(t){t.Q_=void 0}async function Z4(t){t.q_.set("Online")}async function ej(t){t.N_.forEach((e,n)=>{O_(t,e)})}async function tj(t,e){nk(t),M_(t)?(t.q_.M_(e),L_(t)):t.q_.set("Unknown")}async function nj(t,e,n){if(t.q_.set("Online"),e instanceof BR&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _h(t,r)}else if(e instanceof pc?t.Q_.Ke(e):e instanceof zR?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await XR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(mt.EMPTY_BYTE_STRING,h.snapshotVersion)),tk(s,u);const f=new Wr(h.target,u,c,h.sequenceNumber);O_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await _h(t,r)}}async function _h(t,e,n){if(!Jl(e))throw e;t.L_.add(1),await tu(t),t.q_.set("Offline"),n||(n=()=>XR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await yd(t)})}function rk(t,e){return e().catch(n=>_h(t,n,e))}async function vd(t){const e=ne(t),n=_i(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;rj(e);)try{const i=await U4(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ij(e,i)}catch(i){await _h(e,i)}ik(e)&&sk(e)}function rj(t){return ps(t)&&t.O_.length<10}function ij(t,e){t.O_.push(e);const n=_i(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ik(t){return ps(t)&&!_i(t).n_()&&t.O_.length>0}function sk(t){_i(t).start()}async function sj(t){_i(t).p_()}async function oj(t){const e=_i(t);for(const n of t.O_)e.m_(n.mutations)}async function aj(t,e,n){const r=t.O_.shift(),i=k_.from(r,e,n);await rk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vd(t)}async function lj(t,e){e&&_i(t).V_&&await async function(r,i){if(function(o){return YF(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();_i(r).s_(),await rk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await vd(r)}}(t,e),ik(t)&&sk(t)}async function a0(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=ps(n);n.L_.add(3),await tu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await yd(n)}async function uj(t,e){const n=ne(t);e?(n.L_.delete(2),await yd(n)):e||(n.L_.add(2),await tu(n),n.q_.set("Unknown"))}function Fo(t){return t.K_||(t.K_=function(n,r,i){const s=ne(n);return s.w_(),new K4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:Z4.bind(null,t),Ro:ej.bind(null,t),mo:tj.bind(null,t),d_:nj.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),M_(t)?L_(t):t.q_.set("Unknown")):(await t.K_.stop(),nk(t))})),t.K_}function _i(t){return t.U_||(t.U_=function(n,r,i){const s=ne(n);return s.w_(),new Q4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:sj.bind(null,t),mo:lj.bind(null,t),f_:oj.bind(null,t),g_:aj.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await vd(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new V_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function F_(t,e){if(vr("AsyncQueue",`${e}: ${t}`),Jl(t))return new q(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Ta(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(){this.W_=new je(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Eo{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Eo(e,n,Xs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cj{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class hj{constructor(){this.queries=u0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=u0(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new q(V.ABORTED,"Firestore shutting down"))}}function u0(){return new Vo(t=>kR(t),dd)}async function ok(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new cj,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=F_(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&j_(n)}async function ak(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function dj(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&j_(n)}function fj(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function j_(t){t.Y_.forEach(e=>{e.next()})}var Tm,c0;(c0=Tm||(Tm={})).ea="default",c0.Cache="cache";class lk{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Eo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Tm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.key=e}}class ck{constructor(e){this.key=e}}class pj{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=he(),this.mutatedKeys=he(),this.Aa=AR(e),this.Ra=new Xs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new l0,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),w=fd(this.query,f)?f:null,C=!!m&&this.mutatedKeys.has(m.key),A=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let x=!1;m&&w?m.data.isEqual(w.data)?C!==A&&(r.track({type:3,doc:w}),x=!0):this.ga(m,w)||(r.track({type:2,doc:w}),x=!0,(u&&this.Aa(w,u)>0||c&&this.Aa(w,c)<0)&&(a=!0)):!m&&w?(r.track({type:0,doc:w}),x=!0):m&&!w&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(a=!0)),x&&(w?(o=o.add(w),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(w,C){const A=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return A(w)-A(C)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Eo(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new l0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=he(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new ck(r))}),this.da.forEach(r=>{e.has(r)||n.push(new uk(r))}),n}ba(e){this.Ta=e.Ts,this.da=he();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Eo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class mj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gj{constructor(e){this.key=e,this.va=!1}}class _j{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Vo(a=>kR(a),dd),this.Ma=new Map,this.xa=new Set,this.Oa=new je(Q.comparator),this.Na=new Map,this.La=new N_,this.Ba={},this.ka=new Map,this.qa=wo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function yj(t,e,n=!0){const r=gk(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await hk(r,e,n,!0),i}async function vj(t,e){const n=gk(t);await hk(n,e,!0,!1)}async function hk(t,e,n,r){const i=await z4(t.localStore,$n(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await wj(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&ek(t.remoteStore,i),a}async function wj(t,e,n,r,i){t.Ka=(f,m,w)=>async function(A,x,S,T){let k=x.view.ma(S);k.ns&&(k=await i0(A.localStore,x.query,!1).then(({documents:v})=>x.view.ma(v,k)));const O=T&&T.targetChanges.get(x.targetId),j=T&&T.targetMismatches.get(x.targetId)!=null,M=x.view.applyChanges(k,A.isPrimaryClient,O,j);return d0(A,x.targetId,M.wa),M.snapshot}(t,f,m,w);const s=await i0(t.localStore,e,!0),o=new pj(e,s.Ts),a=o.ma(s.documents),u=eu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);d0(t,n,c.wa);const h=new mj(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function Ej(t,e,n){const r=ne(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!dd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Em(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&D_(r.remoteStore,i.targetId),Im(r,i.targetId)}).catch(Xl)):(Im(r,i.targetId),await Em(r.localStore,i.targetId,!0))}async function Tj(t,e){const n=ne(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),D_(n.remoteStore,r.targetId))}async function Ij(t,e,n){const r=Nj(t);try{const i=await function(o,a){const u=ne(o),c=Ze.now(),h=a.reduce((w,C)=>w.add(C.key),he());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=wr(),A=he();return u.cs.getEntries(w,h).next(x=>{C=x,C.forEach((S,T)=>{T.isValidDocument()||(A=A.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,C)).next(x=>{f=x;const S=[];for(const T of a){const k=qF(T,f.get(T.key).overlayedDocument);k!=null&&S.push(new Ii(T.key,k,vR(k.value.mapValue),Wn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,S,a)}).next(x=>{m=x;const S=x.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(w,x.batchId,S)})}).then(()=>({batchId:m.batchId,changes:NR(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new je(ge)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await nu(r,i.changes),await vd(r.remoteStore)}catch(i){const s=F_(i,"Failed to persist write");n.reject(s)}}async function dk(t,e){const n=ne(t);try{const r=await F4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?we(o.va):i.removedDocuments.size>0&&(we(o.va),o.va=!1))}),await nu(n,r,e)}catch(r){await Xl(r)}}function h0(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ne(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&j_(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Cj(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new je(Q.comparator);o=o.insert(s,St.newNoDocument(s,te.min()));const a=he().add(s),u=new gd(te.min(),new Map,new je(ge),o,a);await dk(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),U_(r)}else await Em(r.localStore,e,!1).then(()=>Im(r,e,n)).catch(Xl)}async function Sj(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await V4(n.localStore,e);pk(n,r,null),fk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nu(n,i)}catch(i){await Xl(i)}}async function Rj(t,e,n){const r=ne(t);try{const i=await function(o,a){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(we(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);pk(r,e,n),fk(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await nu(r,i)}catch(i){await Xl(i)}}function fk(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function pk(t,e,n){const r=ne(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Im(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||mk(t,r)})}function mk(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(D_(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),U_(t))}function d0(t,e,n){for(const r of n)r instanceof uk?(t.La.addReference(r.key,e),kj(t,r)):r instanceof ck?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||mk(t,r.key)):Z()}function kj(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),U_(t))}function U_(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(Pe.fromString(e)),r=t.qa.next();t.Na.set(r,new gj(n)),t.Oa=t.Oa.insert(n,r),ek(t.remoteStore,new Wr($n(hd(n.path)),r,"TargetPurposeLimboResolution",w_.oe))}}async function nu(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=b_.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=ne(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>U.forEach(c,m=>U.forEach(m.$i,w=>h.persistence.referenceDelegate.addReference(f,m.targetId,w)).next(()=>U.forEach(m.Ui,w=>h.persistence.referenceDelegate.removeReference(f,m.targetId,w)))))}catch(f){if(!Jl(f))throw f;G("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const w=h.os.get(m),C=w.snapshotVersion,A=w.withLastLimboFreeSnapshotVersion(C);h.os=h.os.insert(m,A)}}}(r.localStore,s))}async function Aj(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await YR(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new q(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nu(n,r.hs)}}function Pj(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return he().add(r.key);{let i=he();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function gk(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cj.bind(null,e),e.Ca.d_=dj.bind(null,e.eventManager),e.Ca.$a=fj.bind(null,e.eventManager),e}function Nj(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Sj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Rj.bind(null,e),e}class yh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_d(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return M4(this.persistence,new O4,e.initialUser,this.serializer)}Ga(e){return new x4(x_.Zr,this.serializer)}Wa(e){return new $4}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yh.provider={build:()=>new yh};class Cm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>h0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Aj.bind(null,this.syncEngine),await uj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hj}()}createDatastore(e){const n=_d(e.databaseInfo.databaseId),r=function(s){return new G4(s)}(e.databaseInfo);return function(s,o,a,u){return new Y4(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new J4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>h0(this.syncEngine,n,0),function(){return o0.D()?new o0:new W4}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new _j(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);G("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await tu(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Cm.provider={build:()=>new Cm};/**
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
 */class _k{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):vr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xj{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=gR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=F_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uf(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await YR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function f0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bj(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>a0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>a0(e.remoteStore,i)),t._onlineComponents=e}async function bj(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;go("Error using user provided cache. Falling back to memory cache: "+n),await Uf(t,new yh)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Uf(t,new yh);return t._offlineComponents}async function yk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await f0(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await f0(t,new Cm))),t._onlineComponents}function Dj(t){return yk(t).then(e=>e.syncEngine)}async function Sm(t){const e=await yk(t),n=e.eventManager;return n.onListen=yj.bind(null,e.syncEngine),n.onUnlisten=Ej.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vj.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Tj.bind(null,e.syncEngine),n}function Oj(t,e,n={}){const r=new ii;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new _k({next:m=>{h.Za(),o.enqueueAndForget(()=>ak(s,f));const w=m.docs.has(a);!w&&m.fromCache?c.reject(new q(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new q(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new lk(hd(a.path),h,{includeMetadataChanges:!0,_a:!0});return ok(s,f)}(await Sm(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function vk(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const p0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(t,e,n){if(!n)throw new q(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Lj(t,e,n,r){if(e===!0&&r===!0)throw new q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function m0(t){if(!Q.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function g0(t){if(Q.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wd(t);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Mj(t,e){if(e<=0)throw new q(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class _0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Lj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vk((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ed{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ZV;switch(r.type){case"firstParty":return new rF(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=p0.get(n);r&&(G("ComponentProvider","Removing Datastore"),p0.delete(n),r.terminate())}(this),Promise.resolve()}}function Vj(t,e,n,r={}){var i;const s=(t=Hn(t,Ed))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=It.MOCK_USER;else{a=cC(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new It(c)}t._authCredentials=new eF(new mR(a,u))}}/**
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
 */class Ci{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class si extends Ci{constructor(e,n,r){super(e,n,hd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new Q(e))}withConverter(e){return new si(this.firestore,e,this._path)}}function Js(t,e,...n){if(t=pe(t),wk("collection","path",e),t instanceof Ed){const r=Pe.fromString(e,...n);return g0(r),new si(t,null,r)}{if(!(t instanceof Rt||t instanceof si))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return g0(r),new si(t.firestore,null,r)}}function _n(t,e,...n){if(t=pe(t),arguments.length===1&&(e=gR.newId()),wk("doc","path",e),t instanceof Ed){const r=Pe.fromString(e,...n);return m0(r),new Rt(t,null,new Q(r))}{if(!(t instanceof Rt||t instanceof si))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return m0(r),new Rt(t.firestore,t instanceof si?t.converter:null,new Q(r))}}/**
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
 */class y0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new JR(this,"async_queue_retry"),this.Vu=()=>{const r=jf();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=jf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=jf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ii;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Jl(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw vr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=V_.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function v0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class To extends Ed{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new y0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new y0(e),this._firestoreClient=void 0,await e}}}function Fj(t,e){const n=typeof t=="object"?t:kg(),r=typeof t=="string"?t:"(default)",i=Wh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=aC("firestore");s&&Vj(i,...s)}return i}function z_(t){if(t._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jj(t),t._firestoreClient}function jj(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new gF(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,vk(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new xj(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Io(mt.fromBase64String(e))}catch(n){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Io(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Td{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Id{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */class $_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uj=/^__.*__$/;class zj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zl(e,this.data,n,this.fieldTransforms)}}class Ek{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Tk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class W_{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new W_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return vh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Tk(this.Cu)&&Uj.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Bj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_d(e)}Qu(e,n,r,i=!1){return new W_({Cu:e,methodName:n,qu:r,path:ht.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function q_(t){const e=t._freezeSettings(),n=_d(t._databaseId);return new Bj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $j(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);G_("Data must be an object, but it was:",o,r);const a=Ik(r,o);let u,c;if(s.merge)u=new Xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=Rm(e,f,n);if(!o.contains(m))throw new q(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Sk(h,m)||h.push(m)}u=new Xt(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new zj(new Ut(a),u,c)}class Cd extends Id{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cd}}class H_ extends Id{_toFieldTransform(e){return new zF(e.path,new Pl)}isEqual(e){return e instanceof H_}}function Wj(t,e,n,r){const i=t.Qu(1,e,n);G_("Data must be an object, but it was:",i,r);const s=[],o=Ut.empty();fs(r,(u,c)=>{const h=K_(e,u,n);c=pe(c);const f=i.Nu(h);if(c instanceof Cd)s.push(h);else{const m=ru(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new Xt(s);return new Ek(o,a,i.fieldTransforms)}function qj(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[Rm(e,r,n)],u=[i];if(s.length%2!=0)throw new q(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Rm(e,s[m])),u.push(s[m+1]);const c=[],h=Ut.empty();for(let m=a.length-1;m>=0;--m)if(!Sk(c,a[m])){const w=a[m];let C=u[m];C=pe(C);const A=o.Nu(w);if(C instanceof Cd)c.push(w);else{const x=ru(C,A);x!=null&&(c.push(w),h.set(w,x))}}const f=new Xt(c);return new Ek(h,f,o.fieldTransforms)}function Hj(t,e,n,r=!1){return ru(n,t.Qu(r?4:3,e))}function ru(t,e){if(Ck(t=pe(t)))return G_("Unsupported field value:",e,t),Ik(t,e);if(t instanceof Id)return function(r,i){if(!Tk(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ru(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return FF(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ze.fromDate(r);return{timestampValue:gh(i.serializer,s)}}if(r instanceof Ze){const s=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gh(i.serializer,s)}}if(r instanceof B_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Io)return{bytesValue:$R(i.serializer,r._byteString)};if(r instanceof Rt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:P_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof $_)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return R_(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${wd(r)}`)}(t,e)}function Ik(t,e){const n={};return _R(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(r,i)=>{const s=ru(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ck(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof B_||t instanceof Io||t instanceof Rt||t instanceof Id||t instanceof $_)}function G_(t,e,n){if(!Ck(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=wd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Rm(t,e,n){if((e=pe(e))instanceof Td)return e._internalPath;if(typeof e=="string")return K_(t,e);throw vh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Gj=new RegExp("[~\\*/\\[\\]]");function K_(t,e,n){if(e.search(Gj)>=0)throw vh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Td(...e.split("."))._internalPath}catch{throw vh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(V.INVALID_ARGUMENT,a+t+u)}function Sk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Rk{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Kj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Kj extends Rk{data(){return super.data()}}function Sd(t,e){return typeof e=="string"?K_(t,e):e instanceof Td?e._internalPath:e._delegate._internalPath}/**
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
 */function Qj(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Q_{}class Y_ extends Q_{}function wh(t,e,...n){let r=[];e instanceof Q_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof X_).length,a=s.filter(u=>u instanceof Rd).length;if(o>1||o>0&&a>0)throw new q(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Rd extends Y_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Rd(e,n,r)}_apply(e){const n=this._parse(e);return Ak(e._query,n),new Ci(e.firestore,e.converter,gm(e._query,n))}_parse(e){const n=q_(e.firestore);return function(s,o,a,u,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){E0(f,h);const w=[];for(const C of f)w.push(w0(u,s,C));m={arrayValue:{values:w}}}else m=w0(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||E0(f,h),m=Hj(a,o,f,h==="in"||h==="not-in");return Ke.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function kk(t,e,n){const r=e,i=Sd("where",t);return Rd._create(i,r,n)}class X_ extends Q_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new X_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)Ak(o,u),o=gm(o,u)}(e._query,n),new Ci(e.firestore,e.converter,gm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class J_ extends Y_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new J_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Al(s,o)}(e._query,this._field,this._direction);return new Ci(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Mo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Z_(t,e="asc"){const n=e,r=Sd("orderBy",t);return J_._create(r,n)}class ey extends Y_{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ey(e,n,r)}_apply(e){return new Ci(e.firestore,e.converter,ph(e._query,this._limit,this._limitType))}}function Yj(t){return Mj("limit",t),ey._create("limit",t,"F")}function w0(t,e,n){if(typeof(n=pe(n))=="string"){if(n==="")throw new q(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RR(e)&&n.indexOf("/")!==-1)throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!Q.isDocumentKey(r))throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zE(t,new Q(r))}if(n instanceof Rt)return zE(t,n._key);throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wd(n)}.`)}function E0(t,e){if(!Array.isArray(t)||t.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ak(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Xj{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>We(o.doubleValue));return new $_(s)}convertGeoPoint(e){return new B_(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=T_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Sl(e));default:return null}}convertTimestamp(e){const n=gi(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);we(QR(r));const i=new Rl(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||vr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Jj(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ca{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pk extends Rk{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class mc extends Pk{data(e={}){return super.data(e)}}class Zj{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ca(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new mc(this._firestore,this._userDataWriter,r.key,r,new Ca(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new mc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ca(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new mc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ca(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:eU(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function R3(t){t=Hn(t,Rt);const e=Hn(t.firestore,To);return Oj(z_(e),t._key).then(n=>bk(e,t,n))}class Nk extends Xj{constructor(e){super(),this.firestore=e}convertBytes(e){return new Io(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function Us(t,e,n){t=Hn(t,Rt);const r=Hn(t.firestore,To),i=Jj(t.converter,e,n);return xk(r,[$j(q_(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Wn.none())])}function fa(t,e,n,...r){t=Hn(t,Rt);const i=Hn(t.firestore,To),s=q_(i);let o;return o=typeof(e=pe(e))=="string"||e instanceof Td?qj(s,"updateDoc",t._key,e,n,r):Wj(s,"updateDoc",t._key,e),xk(i,[o.toMutation(t._key,Wn.exists(!0))])}function bl(t,...e){var n,r,i;t=pe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||v0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(v0(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof Rt)c=Hn(t.firestore,To),h=hd(t._key.path),u={next:f=>{e[o]&&e[o](bk(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Hn(t,Ci);c=Hn(f.firestore,To),h=f._query;const m=new Nk(c);u={next:w=>{e[o]&&e[o](new Zj(c,m,f,w))},error:e[o+1],complete:e[o+2]},Qj(t._query)}return function(m,w,C,A){const x=new _k(A),S=new lk(w,x,C);return m.asyncQueue.enqueueAndForget(async()=>ok(await Sm(m),S)),()=>{x.Za(),m.asyncQueue.enqueueAndForget(async()=>ak(await Sm(m),S))}}(z_(c),h,a,u)}function xk(t,e){return function(r,i){const s=new ii;return r.asyncQueue.enqueueAndForget(async()=>Ij(await Dj(r),i,s)),s.promise}(z_(t),e)}function bk(t,e,n){const r=n.docs.get(e._key),i=new Nk(t);return new Pk(t,i,e._key,r,new Ca(n.hasPendingWrites,n.fromCache),e.converter)}function Ts(){return new H_("serverTimestamp")}(function(e,n=!0){(function(i){Lo=i})(us),Ji(new li("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new To(new tF(r.getProvider("auth-internal")),new sF(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rl(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zn(ME,"4.7.3",e),zn(ME,"4.7.3","esm2017")})();var tU="firebase",nU="10.14.1";/**
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
 */zn(tU,nU,"app");const T0={apiKey:"AIzaSyC_SzEe95tFFvPrVUWXwpTedeCKhMQOvrE",authDomain:"mylatestweb-fd3d7.firebaseapp.com",databaseURL:"https://mylatestweb-fd3d7-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mylatestweb-fd3d7",storageBucket:"mylatestweb-fd3d7.appspot.com",messagingSenderId:"1079484393919",appId:"1:1079484393919:web:798256eeab7f28ecacd90a"},rU={...T0,apiKey:"AIzaSyC_SzEe95tFFvPrVUWXwpTedeCKhMQOvrE",authDomain:"mylatestweb-fd3d7.firebaseapp.com",databaseURL:"https://mylatestweb-fd3d7-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mylatestweb-fd3d7",storageBucket:T0.storageBucket,messagingSenderId:"1079484393919",appId:"1:1079484393919:web:798256eeab7f28ecacd90a"},ty=mC(rU),Gt=S2(ty),Ni=GV(ty),xt=Fj(ty),Wu=new nr;function k3(t){if(!t)return"";const e=Math.floor((Date.now()-t)/1e3);return e<60?"just now":e<3600?`${Math.floor(e/60)}m`:e<86400?`${Math.floor(e/3600)}h`:e<2592e3?`${Math.floor(e/86400)}d`:new Date(t).toLocaleDateString()}function A3(t=""){const e=t.match(/#[\p{L}0-9_]+/gu)||[],n=new Set,r=[];for(const i of e){const o=i.slice(1).toLowerCase();n.has(o)||(n.add(o),r.push(o))}return r}function P3(t=""){return t.split(/(\s+)/).map((e,n)=>e.startsWith("#")&&e.length>1?{type:"hashtag",value:e,key:n}:{type:"text",value:e,key:n})}const Dk=t=>new URL(t).hostname.toLowerCase().replace(/^www\./,"");function N3(t){if(!t)return null;try{const e=new URL(t),n=Dk(t);if(n==="youtube.com"||n==="m.youtube.com"||n==="music.youtube.com"){const r=e.searchParams.get("v");if(r)return`https://www.youtube.com/embed/${r}`;const i=e.pathname.match(/\/shorts\/([\w-]+)/);if(i)return`https://www.youtube.com/embed/${i[1]}`}if(n==="youtu.be"){const r=e.pathname.slice(1);if(r)return`https://www.youtube.com/embed/${r}`}if(n==="vimeo.com"){const r=e.pathname.split("/").filter(Boolean)[0];if(r)return`https://player.vimeo.com/video/${r}`}if(kd(t)){const r=iU(t);return`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(r)}&show_text=false&width=560`}if(n==="instagram.com"){const r=e.pathname.match(/\/(p|reel|reels)\/([^/]+)/i);if(r)return`https://www.instagram.com/${r[1].toLowerCase()}/${r[2]}/embed`}if(n==="tiktok.com"){const r=e.pathname.match(/\/video\/(\d+)/i);if(r)return`https://www.tiktok.com/player/v1/${r[1]}?description=1&music_info=1`}if(n==="x.com"||n==="twitter.com"){const r=e.pathname.match(/\/status\/(\d+)/i);if(r)return`https://platform.twitter.com/embed/Tweet.html?id=${r[1]}`}if(n==="threads.net"||n==="threads.com"){const r=e.pathname.match(/(\/[@\w.-]+\/post\/[^/]+)/i);if(r)return`https://www.threads.net${r[1]}/embed`}if(n==="pinterest.com"||n==="pin.it"){const r=e.pathname.match(/\/pin\/(\d+)/i);if(r)return`https://assets.pinterest.com/ext/embed.html?id=${r[1]}`}if(n==="soundcloud.com")return`https://w.soundcloud.com/player/?url=${encodeURIComponent(`${e.origin}${e.pathname}`)}&color=%23ff5500&auto_play=false`;if(n==="open.spotify.com"){const r=e.pathname.match(/^\/(track|album|playlist|episode|show)\/([^/]+)/i);if(r)return`https://open.spotify.com/embed/${r[1]}/${r[2]}`}if(/\.(mp4|webm|ogg|mov|m4v)$/i.test(e.pathname))return t}catch{return null}return null}function iU(t=""){try{const e=new URL(t);return kd(t)?`https://www.facebook.com${e.pathname}`:t}catch{return t}}function x3(t=""){try{const e=Dk(t);if(e==="youtube.com"||e==="m.youtube.com"||e==="music.youtube.com"||e==="youtu.be")return"youtube";if(e==="vimeo.com")return"vimeo";if(kd(t))return"facebook";if(e==="instagram.com")return"instagram";if(e==="tiktok.com")return"tiktok";if(e==="x.com"||e==="twitter.com")return"x";if(e==="threads.net"||e==="threads.com")return"threads";if(e==="pinterest.com"||e==="pin.it")return"pinterest";if(e==="soundcloud.com")return"soundcloud";if(e==="open.spotify.com")return"spotify";if(/\.(mp4|webm|ogg|mov|m4v)$/i.test(new URL(t).pathname))return"direct"}catch{return null}return null}function kd(t=""){try{const e=new URL(t).hostname;return e==="facebook.com"||e.endsWith(".facebook.com")||e==="fb.watch"}catch{return!1}}function b3(t=""){try{return kd(t)&&/\/(reel|reels|share\/r)\//i.test(new URL(t).pathname)}catch{return!1}}function D3(t){try{const e=new URL(t);return e.protocol==="https:"||e.protocol==="http:"}catch{return!1}}function sU(t=""){return t.trim().toLowerCase()}function oU(t){return/^[a-zA-Z0-9_.]{3,20}$/.test(t)}function aU(){return typeof window<"u"&&window.CODEWITHSIAM_AUTH_API?window.CODEWITHSIAM_AUTH_API.replace(/\/$/,""):typeof window<"u"&&["localhost","127.0.0.1"].includes(window.location.hostname)?"http://localhost:3001":""}async function zf(t,e){const n=aU();if(!n)throw new Error("Email verification service is not configured.");const r={start:"/api/auth/send-otp",verify:"/api/auth/verify-otp",resend:"/api/auth/resend-otp"}[t];if(!r)throw new Error("Invalid registration request.");let i;try{i=await fetch(`${n}${r}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch{throw new Error("Cannot reach the verification service. Please try again later.")}const s=await i.json().catch(()=>null);if(!i.ok||(s==null?void 0:s.success)===!1)throw new Error((s==null?void 0:s.message)||(s==null?void 0:s.error)||"The verification request failed. Please try again.");return s||{}}const Ok=D.createContext(null);async function I0(t,e={}){var o;if(!(t!=null&&t.uid))return;const n=e.displayName||t.displayName||((o=t.email)==null?void 0:o.split("@")[0])||"CodeWithSiam user",r=String(n).trim(),i=r.toLowerCase(),s={uid:t.uid,displayName:r,photoURL:t.photoURL||e.photoURL||"",email:t.email||e.email||"",username:e.username||"",searchName:i,online:!0,lastSeen:$r(),updatedAt:$r()};await Us(_n(xt,"users",t.uid),s,{merge:!0}).catch(()=>{})}async function qu(t,e){t&&await Us(_n(xt,"users",t),{online:e,lastSeen:$r(),updatedAt:$r()},{merge:!0}).catch(()=>{})}function jo(){return D.useContext(Ok)}function lU({children:t}){const[e,n]=D.useState(null),[r,i]=D.useState(null),[s,o]=D.useState(!0),[a,u]=D.useState(""),[c,h]=D.useState("");D.useEffect(()=>{const v=fO(Gt,async _=>{var R;const I=(_==null?void 0:_.emailVerified)||((R=_==null?void 0:_.providerData)==null?void 0:R.some(P=>P.providerId==="google.com"));n(I?_:null),I&&_&&await I0(_),o(!1),I||(i(null),_&&Af(Gt).catch(()=>{}))});return()=>{v()}},[]),D.useEffect(()=>{let v=!0;return zO(Gt).then(_=>{if(v&&(_!=null&&_.user))return f(_.user)}).catch(_=>{v&&u((_==null?void 0:_.code)||"auth/unknown")}),()=>{v=!1}},[]),D.useEffect(()=>{if(!e)return;const v=Pi(Ni,`users/${e.uid}`),_=setTimeout(()=>o(!1),600),I=um(v,R=>{i(R.val()),o(!1)});return()=>{clearTimeout(_),I()}},[e]),D.useEffect(()=>{if(!e)return;const v=Pi(Ni,`presence/${e.uid}`),_=Pi(Ni,".info/connected");return um(_,R=>{R.val()!==!1&&DV(v).set({state:"offline",lastChanged:$r()}).then(()=>{Ua(v,{state:"online",lastChanged:$r()})})})},[e]),D.useEffect(()=>{if(!(e!=null&&e.uid))return;const v=()=>{const _=document.visibilityState!=="hidden";qu(e.uid,_)};return v(),document.addEventListener("visibilitychange",v),window.addEventListener("beforeunload",()=>qu(e.uid,!1)),()=>{document.removeEventListener("visibilitychange",v),window.removeEventListener("beforeunload",()=>qu(e.uid,!1)),qu(e.uid,!1)}},[e==null?void 0:e.uid]);async function f(v,_={}){if(!v.emailVerified&&!v.providerData.some(ie=>ie.providerId==="google.com"))return;const I=Pi(Ni,`users/${v.uid}`);if((await LV(I)).exists())return;const P=(_.username||(v.email?v.email.split("@")[0]:`user${v.uid.slice(0,6)}`)).replace(/[^a-zA-Z0-9_.]/g,"").slice(0,20)||`user${v.uid.slice(0,6)}`;let N=P,E="",J=!1;for(let ie=0;ie<8;ie+=1){const De=ie===0?"":ie.toString(36);if(N=`${P.slice(0,20-De.length)}${De}`,E=sU(N),(await JV(Pi(Ni,`usernames/${E}`),$=>{if($===null||$===v.uid)return v.uid})).committed){J=!0;break}}if(!J)throw new Error("A unique username could not be reserved. Please try again.");await Ua(I,{uid:v.uid,fullName:_.fullName||v.displayName||N,username:N,usernameLower:E,bio:"",photoURL:v.photoURL||"",coverURL:"",createdAt:$r(),followersCount:0,followingCount:0,friendsCount:0,isPrivate:!1}),await Ua(Pi(Ni,`users/${v.uid}/private/email`),v.email||""),await I0(v,{username:N})}async function m({email:v,password:_,fullName:I,username:R}){if(_.length<8)throw new Error("Password must be at least 8 characters.");if(R&&!oU(R))throw new Error('Username must be 3-20 characters: letters, numbers, "_" or "." only.');const P=v.trim().toLowerCase(),N=(I==null?void 0:I.trim())||P.split("@")[0];return await zf("start",{name:N,email:P,password:_}),{email:P}}async function w(v,_,I=""){return zf("verify",{email:v.trim().toLowerCase(),otp:_.trim(),password:I})}async function C(v){return zf("resend",{email:v.trim().toLowerCase()})}async function A(v,_){const I=await lO(Gt,v.trim().toLowerCase(),_);if(!I.user.emailVerified&&!I.user.providerData.some(R=>R.providerId==="google.com"))throw await Af(Gt),new Error("Please verify your email with the 6-digit code sent during registration.");return await f(I.user),I.user}function x(){var v;return typeof window<"u"&&(((v=window.matchMedia)==null?void 0:v.call(window,"(max-width: 768px)").matches)||/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent))}async function S(){if(x())return await qw(Gt,Wu),null;let v;try{v=await DO(Gt,Wu)}catch(_){if((_==null?void 0:_.code)==="auth/popup-blocked"||(_==null?void 0:_.code)==="auth/operation-not-supported-in-this-environment")return await qw(Gt,Wu),null;throw _}return await f(v.user),v.user}async function T(v){return aO(Gt,v.trim().toLowerCase())}async function k(){if(!Gt.currentUser)throw new Error("Please sign in first.");const v=await OO(Gt.currentUser,Wu);return await f(v.user),v.user}async function O(v,_){const I=Gt.currentUser;if(!(I!=null&&I.email))throw new Error("Please sign in with an email account first.");if(_.length<8)throw new Error("Password must be at least 8 characters.");if(I.providerData.some(P=>P.providerId==="password")){if(!v)throw new Error("Enter your current password.");const P=ui.credential(I.email,v);await sO(I,P),await uO(I,_)}else await iO(I,ui.credential(I.email,_))}async function j(){return e&&await OV(Pi(Ni,`presence/${e.uid}`),{state:"offline",lastChanged:$r()}),Af(Gt)}const M={user:e,profile:r,loading:s,authError:a,clearAuthError:()=>u(""),authPrompt:c,requestSignIn:(v="Please sign in to continue.")=>h(v),dismissAuthPrompt:()=>h(""),signup:m,verifySignupCode:w,resendSignupCode:C,login:A,loginWithGoogle:S,resetPassword:T,linkGoogleAccount:k,changeAccountPassword:O,logout:j};return g.jsx(Ok.Provider,{value:M,children:t})}const Lk=D.createContext(null);function O3(){return D.useContext(Lk)}function uU({children:t}){const[e,n]=D.useState(()=>{const i=localStorage.getItem("mc-theme");return i||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});D.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("mc-theme",e)},[e]);const r=()=>n(i=>i==="dark"?"light":"dark");return g.jsx(Lk.Provider,{value:{theme:e,setTheme:n,toggleTheme:r},children:t})}const Mk=D.createContext(null);function Vk(){return D.useContext(Mk)}let cU=0;function hU({children:t}){const[e,n]=D.useState([]),r=D.useCallback((i,s="info")=>{const o=++cU;n(a=>[...a,{id:o,message:i,type:s}]),setTimeout(()=>{n(a=>a.filter(u=>u.id!==o))},3500)},[]);return g.jsxs(Mk.Provider,{value:{showToast:r},children:[t,g.jsx("div",{className:"toast-stack",children:e.map(i=>g.jsx("div",{className:`toast toast-${i.type}`,children:i.message},i.id))})]})}function Fk({label:t="Loading...",full:e=!1}){return g.jsxs("div",{className:e?"spinner-full":"spinner-inline",children:[g.jsx("div",{className:"spinner","aria-hidden":"true"}),g.jsx("span",{className:"spinner-label",children:t})]})}function dU({children:t}){const{user:e,loading:n}=jo(),r=dn();if(n)return g.jsx(Fk,{full:!0,label:"Checking session..."});if(!e){const i=`${r.pathname}${r.search}${r.hash}`;return g.jsx("div",{className:"auth-page",children:g.jsxs("section",{className:"auth-card","aria-labelledby":"protected-route-title",children:[g.jsx("h1",{id:"protected-route-title",children:"Sign in to continue"}),g.jsx("p",{className:"muted",children:"This community feature is available to members. Your current page will be restored after sign-in."}),g.jsxs("div",{className:"auth-links",children:[g.jsx(cl,{className:"btn btn-primary",to:"/login",state:{returnTo:i},children:"Sign In"}),g.jsx(cl,{className:"btn btn-ghost",to:"/signup",state:{returnTo:i},children:"Create Account"})]})]})})}return t||g.jsx(eC,{})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fU=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function pU(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:fU(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mU=t=>{let e="",n=!1;for(const r of t){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gU=t=>{const e=mU(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Bf(t){return t!=null}function _U(t,e={}){var m,w;const n=e.attributeNames??{},r=C=>n[C]??C,i=t.size??t.width??xi.width,s=t.size??t.height??xi.height,o=((m=t.aliases)==null?void 0:m.filter(C=>typeof C=="string"&&C.trim()!=="").map(C=>`lucide-${C}`))??[],a=[...t.name?[`lucide-${t.name}`]:[],...o],u=((w=e.className)==null?void 0:w.split(" ").filter(Boolean))??[],c=e.includeDefaultClasses===!1?km(...u):km("lucide",...a,...u),h=e.absoluteStrokeWidth?Number(e.strokeWidth??xi["stroke-width"])*Number(t.size??t.width??xi.width)/Number(e.size??e.width??xi.width):e.strokeWidth??xi["stroke-width"];return["svg",{...Object.entries(xi).reduce((C,[A,x])=>(C[r(A)]=x,C),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Bf(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Bf(e.width)&&{[r("width")]:e.width},..."height"in e&&Bf(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:h,...c&&{[r("class")]:c},[r("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(C=>{const[A,x,S]=C,T=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...x}:x;return S?[A,T,S]:[A,T]})]}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yU(t,e={}){return _U(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vU=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},wU=D.createContext({}),EU=()=>D.useContext(wU),TU=D.forwardRef(({color:t,size:e,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:s,nonScalingStroke:o,className:a="",children:u,iconNode:c=[],icon:h={node:c,aliases:[],size:24},...f},m)=>{const{size:w=24,strokeWidth:C=2,absoluteStrokeWidth:A=!1,nonScalingStroke:x=!1,color:S="currentColor",className:T=""}=EU()??{},k=!!u||vU(f),[O,j,M=[]]=yU(h,{color:t??S,width:n??e??w,height:r??e??w,strokeWidth:i??C,absoluteStrokeWidth:s??A,nonScalingStroke:o??x,className:km(T,a),hasA11yProp:k,attributes:f});return D.createElement(O,{ref:m,...j},[...M.map(([v,_])=>D.createElement(v,_)),...Array.isArray(u)?u:[u]])});/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ee(t,e=[],n=[]){const r=typeof t=="string"?pU(t,e,n):t,i=D.forwardRef(({className:s,...o},a)=>D.createElement(TU,{ref:a,icon:r,className:s,...o}));return r.name&&(i.displayName=gU(r.name)),i}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};jk.node;const IU=Ee(jk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};Uk.node;const ny=Ee(Uk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};zk.node;const CU=Ee(zk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk={name:"bookmark",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]};Bk.node;const SU=Ee(Bk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k={name:"check-check",size:24,node:[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]};$k.node;const RU=Ee($k);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Wk.node;const kU=Ee(Wk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk={name:"circle-plus",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],aliases:["plus-circle"]};qk.node;const AU=Ee(qk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk={name:"clock-3",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]]};Hk.node;const PU=Ee(Hk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};Gk.node;const NU=Ee(Gk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk={name:"gamepad-2",size:24,node:[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]};Kk.node;const Qk=Ee(Kk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk={name:"grid-2x2",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],aliases:["grid-2-x-2"]};Yk.node;const xU=Ee(Yk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};Xk.node;const ry=Ee(Xk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk={name:"image-plus",size:24,node:[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]};Jk.node;const bU=Ee(Jk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk={name:"megaphone",size:24,node:[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]]};Zk.node;const C0=Ee(Zk);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};e1.node;const t1=Ee(e1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1={name:"message-circle",size:24,node:[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]};n1.node;const DU=Ee(n1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1={name:"message-square-text",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M7 11h10",key:"1twpyw"}],["path",{d:"M7 15h6",key:"d9of3u"}],["path",{d:"M7 7h8",key:"af5zfr"}]]};r1.node;const OU=Ee(r1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};i1.node;const Am=Ee(i1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1={name:"send-horizontal",size:24,node:[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]],aliases:["send-horizonal"]};s1.node;const LU=Ee(s1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};o1.node;const MU=Ee(o1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};a1.node;const VU=Ee(a1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1={name:"square-play",size:24,node:[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}]],aliases:["play-square"]};l1.node;const u1=Ee(l1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]};c1.node;const iy=Ee(c1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1={name:"user-round",size:24,node:[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],aliases:["user-2"]};h1.node;const d1=Ee(h1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};f1.node;const FU=Ee(f1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};p1.node;const sy=Ee(p1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1={name:"video",size:24,node:[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]};m1.node;const jU=Ee(m1);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};g1.node;const _1=Ee(g1),UU=["👍","❤️","😂","🎉","😮","😢","😎"];function Eh(t){if(!t)return null;if(typeof t.toDate=="function")return t.toDate();if(t instanceof Date)return t;if(typeof t=="number")return new Date(t);if(typeof t=="string"){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}return typeof t.seconds=="number"?new Date(t.seconds*1e3):null}function zU(t){const e=Eh(t);return e?new Intl.DateTimeFormat("en",{hour:"numeric",minute:"2-digit"}).format(e):""}function $f(t){const e=Eh(t);if(!e)return"Today";const n=(Date.now()-e.getTime())/864e5;return n<1?"Today":n<2?"Yesterday":new Intl.DateTimeFormat("en",{month:"short",day:"numeric"}).format(e)}function BU({chat:t,chatId:e,currentUser:n,usersMap:r,onBack:i,compact:s=!1,onClose:o,onMinimize:a}){ls();const{showToast:u}=Vk(),[c,h]=D.useState([]),[f,m]=D.useState(""),[w,C]=D.useState(null),[A,x]=D.useState(!1),[S,T]=D.useState(!1),[k,O]=D.useState(null),[j,M]=D.useState(!1),[v,_]=D.useState(30),I=D.useRef(null),R=D.useRef(null),P=D.useRef(null),N=D.useMemo(()=>!(t!=null&&t.members)||!n?null:t.members.find(F=>F!==n.uid)||null,[t,n]),E=N&&(r==null?void 0:r[N])||null;D.useEffect(()=>{if(!e||!n||!N)return;const F=_n(xt,"chats",e);(async()=>{try{await fa(F,{unread:{...(t==null?void 0:t.unread)||{},[n.uid]:0}})}catch{}})()},[e,n,N,t==null?void 0:t.unread]),D.useEffect(()=>{if(!e)return;const F=wh(Js(xt,"chats",e,"messages"),Z_("createdAt","desc"),Yj(v)),re=bl(F,ee=>{const se=ee.docs.map(Qe=>({id:Qe.id,...Qe.data()})).sort((Qe,Ue)=>{var qt,ms,fn,pn;const at=((ms=(qt=Eh(Qe.createdAt))==null?void 0:qt.getTime)==null?void 0:ms.call(qt))||0,gt=((pn=(fn=Eh(Ue.createdAt))==null?void 0:fn.getTime)==null?void 0:pn.call(fn))||0;return at-gt});h(se),requestAnimationFrame(()=>{I.current&&(I.current.scrollTop=I.current.scrollHeight)})});return()=>re()},[e,v]),D.useEffect(()=>{if(!e||!n||!N)return;const F=_n(xt,"chats",e,"typing",N),re=bl(F,ee=>{var se;x(!!((se=ee.data())!=null&&se.isTyping))});return()=>re()},[e,n,N]),D.useEffect(()=>{R.current&&(R.current.style.height="auto",R.current.style.height=`${Math.min(R.current.scrollHeight,140)}px`)},[f]);const J=F=>{m(F),!(!n||!e)&&(Us(_n(xt,"chats",e,"typing",n.uid),{isTyping:F.trim().length>0,updatedAt:Ts()},{merge:!0}),clearTimeout(P.current),P.current=setTimeout(()=>{Us(_n(xt,"chats",e,"typing",n.uid),{isTyping:!1,updatedAt:Ts()},{merge:!0}).catch(()=>{})},1500))};async function ie(){if(!(!n||!e||!f.trim()||j)){M(!0);try{const F=_n(Js(xt,"chats",e,"messages")),re={senderId:n.uid,text:f.trim(),createdAt:Ts(),status:"sent",replyTo:w?{id:w.id,text:w.text,senderId:w.senderId}:null};await Us(F,re);const ee={...(t==null?void 0:t.unread)||{},[n.uid]:0};N&&(ee[N]=Number(ee[N]||0)+1),await fa(_n(xt,"chats",e),{lastMessage:f.trim(),lastMessageAt:Ts(),unread:ee}),m(""),C(null),T(!1)}catch{u("Message failed to send.","error")}finally{M(!1)}}}async function De(F){var ee;const re=(ee=F.target.files)==null?void 0:ee[0];if(!(!re||!e||!n)){if(!re.type.startsWith("image/")){u("Choose a valid image file.","error"),F.target.value="";return}try{const se=await createImageBitmap(re),Qe=Math.min(1,1600/Math.max(se.width,se.height)),Ue=document.createElement("canvas");Ue.width=Math.max(1,Math.round(se.width*Qe)),Ue.height=Math.max(1,Math.round(se.height*Qe));const at=Ue.getContext("2d");if(!at)throw new Error("Image processing is unavailable.");at.drawImage(se,0,0,Ue.width,Ue.height),se.close();let gt=.82,qt=await new Promise(Xn=>Ue.toBlob(Xn,"image/jpeg",gt));for(;qt&&qt.size>65e4&&gt>.4;)gt-=.12,qt=await new Promise(Xn=>Ue.toBlob(Xn,"image/jpeg",gt));if(!qt||qt.size>65e4)throw new Error("Image is too large to send. Choose a smaller image.");const ms=await new Promise((Xn,Uo)=>{const Cr=new FileReader;Cr.onload=()=>Xn(String(Cr.result||"")),Cr.onerror=()=>Uo(new Error("Could not read the selected image.")),Cr.readAsDataURL(qt)}),fn=_n(Js(xt,"chats",e,"messages"));await Us(fn,{senderId:n.uid,text:"",imageData:ms,createdAt:Ts(),status:"sent"});const pn={...(t==null?void 0:t.unread)||{},[n.uid]:0};N&&(pn[N]=Number(pn[N]||0)+1),await fa(_n(xt,"chats",e),{lastMessage:"Image",lastMessageAt:Ts(),unread:pn}),u("Image sent.","success")}catch(se){console.error("Image upload failed",se),u(se.message||"Image failed to send. Check your connection and try again.","error")}finally{F.target.value=""}}}async function Re(F,re){if(!e)return;const ee=_n(xt,"chats",e,"messages",F);if(re==="everyone"){await fa(ee,{deletedForEveryone:!0,text:"This message was deleted",imageData:"",status:"deleted"}).catch(()=>{}),O(null);return}await fa(ee,{deletedFor:[n.uid]}).catch(()=>{}),O(null)}async function $(F){if(F)try{await navigator.clipboard.writeText(F),u("Message copied.","success")}catch{u("Copy failed.","error")}}const K=()=>_(F=>F+30);return g.jsxs("div",{className:`cwschat chat-window-wrap${s?" compact":""}`,children:[g.jsxs("header",{className:"cwschat chat-header",children:[g.jsxs("div",{className:"cwschat header-left",children:[!s&&i&&g.jsx("button",{type:"button",className:"cwschat back-button",onClick:i,"aria-label":"Back to list",children:g.jsx(IU,{size:18})}),g.jsxs("div",{className:"cwschat header-avatar-wrap",children:[E!=null&&E.photoURL?g.jsx("img",{src:E.photoURL,alt:"",className:"cwschat header-avatar"}):g.jsx("span",{className:"cwschat header-avatar fallback",children:((E==null?void 0:E.displayName)||"C").slice(0,1).toUpperCase()}),(E==null?void 0:E.online)&&g.jsx("span",{className:"cwschat online-indicator"})]}),g.jsxs("div",{className:"cwschat header-identify",children:[g.jsx("strong",{children:(E==null?void 0:E.displayName)||"CodeWithSiam user"}),g.jsx("span",{children:A?"typing...":E!=null&&E.online?"Active now":"Last seen recently"})]})]}),s&&g.jsxs("div",{className:"cwschat compact-tools",children:[g.jsx("button",{type:"button",className:"cwschat tool-button","aria-label":"Minimize chat",onClick:a,children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{d:"M6 12h12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})}),g.jsx("button",{type:"button",className:"cwschat tool-button","aria-label":"Close chat",onClick:o,children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{d:"M6 6l12 12M18 6L6 18",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]})]}),g.jsx("div",{className:"cwschat chat-body",ref:I,children:g.jsxs("div",{className:"cwschat chat-scroll-inner",children:[g.jsx("button",{type:"button",className:"cwschat load-more-btn",onClick:K,children:"Load older messages"}),c.length===0?g.jsx("div",{className:"cwschat empty-message-state",children:"Say hello to start the conversation."}):c.map((F,re)=>{var at;const ee=F.senderId===(n==null?void 0:n.uid),se=re>0?c[re-1]:null,Qe=!se||$f(se.createdAt)!==$f(F.createdAt),Ue=!!(F.deletedForEveryone||(at=F.deletedFor)!=null&&at.includes(n==null?void 0:n.uid));return g.jsxs("div",{className:"cwschat message-group",children:[Qe&&g.jsx("div",{className:"cwschat date-chip",children:$f(F.createdAt)}),g.jsxs("div",{className:`cwschat message-bubble${ee?" mine":" theirs"}`,children:[F.replyTo&&g.jsxs("div",{className:"cwschat reply-preview",children:["Replying to ",F.replyTo.senderId===(n==null?void 0:n.uid)?"yourself":"message"]}),Ue?g.jsx("div",{className:"cwschat deleted-message",children:"Message deleted"}):g.jsxs(g.Fragment,{children:[F.imageData?g.jsx("img",{src:F.imageData,alt:"sent media",className:"cwschat message-image"}):null,F.text?g.jsx("p",{children:F.text}):null]}),g.jsxs("div",{className:"cwschat bubble-meta",children:[g.jsx("span",{children:zU(F.createdAt)}),ee&&g.jsx(RU,{size:12})]}),ee&&!Ue&&g.jsxs("div",{className:"cwschat bubble-actions",children:[g.jsx("button",{type:"button",onClick:()=>$(F.text||""),children:"Copy"}),g.jsx("button",{type:"button",onClick:()=>C({id:F.id,text:F.text||"Image",senderId:F.senderId}),children:"Reply"}),g.jsxs("div",{className:"cwschat dropdown-wrap",children:[g.jsx("button",{type:"button",onClick:()=>O(k===F.id?null:F.id),children:"Delete"}),k===F.id&&g.jsxs("div",{className:"cwschat delete-menu",children:[g.jsx("button",{type:"button",onClick:()=>Re(F.id,"me"),children:"For me"}),g.jsx("button",{type:"button",onClick:()=>Re(F.id,"everyone"),children:"For everyone"})]})]})]})]})]},F.id)})]})}),g.jsxs("div",{className:"cwschat input-row",children:[g.jsxs("div",{className:"cwschat composer-tools",children:[g.jsx("button",{type:"button",className:"cwschat tool-button","aria-label":"Emoji",onClick:()=>T(F=>!F),children:g.jsx(NU,{size:18})}),g.jsxs("label",{className:"cwschat tool-button","aria-label":"Attach image",children:[g.jsx(bU,{size:18}),g.jsx("input",{type:"file",accept:"image/*",onChange:De})]})]}),S&&g.jsx("div",{className:"cwschat emoji-picker",role:"dialog","aria-label":"Emoji picker",children:UU.map(F=>g.jsx("button",{type:"button",className:"cwschat emoji-option",onClick:()=>{m(re=>`${re}${F}`),T(!1)},children:F},F))}),w&&g.jsxs("div",{className:"cwschat reply-box",children:[g.jsxs("span",{children:["Replying to ",w.text]}),g.jsx("button",{type:"button",onClick:()=>C(null),children:g.jsx(_1,{size:12})})]}),g.jsx("textarea",{ref:R,value:f,onChange:F=>J(F.target.value),onKeyDown:F=>{F.key==="Enter"&&!F.shiftKey&&(F.preventDefault(),ie())},className:"cwschat message-input",placeholder:"Type a message",rows:1}),g.jsx("button",{type:"button",className:"cwschat send-button",onClick:ie,"aria-label":"Send message",disabled:j||!f.trim(),children:g.jsx(LU,{size:18})})]})]})}const On={size:19,strokeWidth:1.8,"aria-hidden":!0};function $U(t){return t?typeof t.toDate=="function"?new Intl.DateTimeFormat("en",{hour:"numeric",minute:"2-digit"}).format(t.toDate()):t instanceof Date?new Intl.DateTimeFormat("en",{hour:"numeric",minute:"2-digit"}).format(t):typeof t.seconds=="number"?new Intl.DateTimeFormat("en",{hour:"numeric",minute:"2-digit"}).format(new Date(t.seconds*1e3)):"Now":"Now"}function WU({onMenu:t}){const[e,n]=D.useState(""),[r,i]=D.useState(!1),[s,o]=D.useState(""),[a,u]=D.useState(!1),[c,h]=D.useState([]),[f,m]=D.useState({}),[w,C]=D.useState(0),[A,x]=D.useState([]),S=D.useRef(null),T=ls(),{pathname:k,search:O}=dn(),{profile:j,user:M}=jo(),v=k==="/"?"home":new URLSearchParams(O).get("view");D.useEffect(()=>{if(!M)return;const E=wh(Js(xt,"chats"),kk("members","array-contains",M.uid),Z_("lastMessageAt","desc")),J=bl(E,ie=>{const De=ie.docs.map(Re=>({id:Re.id,...Re.data()}));h(De),C(De.reduce((Re,$)=>{var K;return Re+Number(((K=$.unread)==null?void 0:K[M.uid])||0)},0))});return()=>J()},[M]),D.useEffect(()=>{if(!M)return;const E=wh(Js(xt,"users")),J=bl(E,ie=>{const De={};ie.docs.forEach(Re=>{De[Re.id]=Re.data()}),m(De)});return()=>J()},[M]),D.useEffect(()=>{function E(ie){S.current&&!S.current.contains(ie.target)&&u(!1)}function J(ie){ie.key==="Escape"&&u(!1)}return document.addEventListener("mousedown",E),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",E),document.removeEventListener("keydown",J)}},[]);const _=D.useMemo(()=>{const E=s.trim().toLowerCase();return E?c.filter(J=>{var $;const ie=(($=J.members)==null?void 0:$.find(K=>K!==(M==null?void 0:M.uid)))||"",De=f[ie]||{};return[De.displayName,De.email,J.lastMessage].join(" ").toLowerCase().includes(E)}):c},[c,s,M==null?void 0:M.uid,f]);function I(E){E.preventDefault(),e.trim()&&T(`/search?q=${encodeURIComponent(e.trim())}`)}function R(E){u(!1),x(J=>J.includes(E)?J:[...J.slice(-2),E]),k!=="/messenger"&&T(`/messenger/${E}`)}function P(E){x(J=>J.filter(ie=>ie!==E))}function N(E){x(J=>J.filter(ie=>ie!==E))}return g.jsxs(g.Fragment,{children:[g.jsxs("header",{className:"navbar",children:[g.jsx("button",{className:"mobile-menu-btn icon-btn",type:"button",onClick:t,"aria-label":"Open menu",children:g.jsx(t1,{...On})}),g.jsxs("a",{className:"navbar-brand",href:"/","aria-label":"Back to CodeWithSiam site",title:"Back to site",children:[g.jsx("img",{className:"brand-mark navbar-brand-avatar",src:(j==null?void 0:j.photoURL)||"/assets/images/profile-siam.webp",alt:""}),g.jsx("span",{className:"cwsfb-brand-name",children:"CodeWithSiam"})]}),g.jsxs("form",{className:`navbar-search${r?" is-mobile-open":""}`,onSubmit:E=>{I(E),i(!1)},children:[g.jsx(Am,{className:"navbar-search-icon",size:17,"aria-hidden":"true"}),g.jsx("input",{value:e,onChange:E=>n(E.target.value),placeholder:"Search CodeWithSiam","aria-label":"Search"})]}),g.jsxs("nav",{className:"navbar-quick-actions","aria-label":"Community navigation",children:[g.jsx("button",{className:`quick-action${v==="home"?" active":""}`,type:"button","aria-label":"Home","aria-current":v==="home"?"page":void 0,onClick:()=>T("/"),children:g.jsx(ry,{...On})}),g.jsx("button",{className:`quick-action${v==="reels"?" active":""}`,type:"button","aria-label":"Reels","aria-current":v==="reels"?"page":void 0,onClick:()=>T("/search?view=reels"),children:g.jsx(u1,{...On})}),g.jsx("button",{className:`quick-action${v==="marketplace"?" active":""}`,type:"button","aria-label":"Marketplace","aria-current":v==="marketplace"?"page":void 0,onClick:()=>T("/search?view=marketplace"),children:g.jsx(iy,{...On})}),g.jsx("button",{className:`quick-action${v==="groups"?" active":""}`,type:"button","aria-label":"Groups","aria-current":v==="groups"?"page":void 0,onClick:()=>T("/search?view=groups"),children:g.jsx(sy,{...On})}),g.jsx("button",{className:`quick-action${v==="gaming"?" active":""}`,type:"button","aria-label":"Games","aria-current":v==="gaming"?"page":void 0,onClick:()=>T("/search?view=gaming"),children:g.jsx(Qk,{...On})})]}),g.jsxs("div",{className:"navbar-actions",children:[g.jsx("button",{className:"icon-btn ghost-btn",type:"button","aria-label":"Apps",children:g.jsx(xU,{...On})}),g.jsxs("div",{className:"cwschat chat-trigger-wrap",ref:S,children:[g.jsxs("button",{className:"icon-btn ghost-btn cwschat-chat-button",type:"button","aria-label":"Chats",onClick:()=>u(E=>!E),children:[g.jsx(OU,{...On}),w>0&&g.jsx("span",{className:"cwschat-top-badge",children:w>9?"9+":w})]}),a&&g.jsxs("div",{className:"cwschat dropdown-panel",role:"dialog","aria-label":"Chats",children:[g.jsxs("div",{className:"cwschat dropdown-head",children:[g.jsx("span",{children:"Chats"}),g.jsx("button",{type:"button",className:"cwschat small-icon-button","aria-label":"Create new chat",children:g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{d:"M12 5v14M5 12h14",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})})})]}),g.jsxs("div",{className:"cwschat search-pill",children:[g.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:g.jsx("path",{d:"M11 4a7 7 0 015.6 11.9l3.7 3.7 1.4-1.4-3.7-3.7A7 7 0 1111 4zm0 2a5 5 0 100 10 5 5 0 000-10z",fill:"currentColor"})}),g.jsx("input",{value:s,onChange:E=>o(E.target.value),placeholder:"Search chats","aria-label":"Search chats"})]}),g.jsxs("div",{className:"cwschat tabs-row",children:[g.jsx("button",{type:"button",className:"cwschat tab active",children:"All"}),g.jsx("button",{type:"button",className:"cwschat tab",children:"Unread"})]}),g.jsx("div",{className:"cwschat dropdown-list",children:_.length===0?g.jsx("div",{className:"cwschat empty-list",children:"No chats yet."}):_.map(E=>{var $,K,F;const J=(($=E.members)==null?void 0:$.find(re=>re!==(M==null?void 0:M.uid)))||"",ie=f[J]||{},De=Number(((K=E.unread)==null?void 0:K[M==null?void 0:M.uid])||0),Re=E.lastMessage||"Start the conversation";return g.jsxs("button",{type:"button",className:"cwschat chat-row",onClick:()=>R(E.id),children:[g.jsxs("div",{className:"cwschat avatar-wrap",children:[ie.photoURL?g.jsx("img",{src:ie.photoURL,alt:"",className:"cwschat row-avatar"}):g.jsx("span",{className:"cwschat row-avatar fallback",children:(ie.displayName||"C").slice(0,1).toUpperCase()}),ie.online&&g.jsx("span",{className:"cwschat online-dot"})]}),g.jsxs("div",{className:"cwschat chat-row-copy",children:[g.jsxs("div",{className:"cwschat chat-row-top",children:[g.jsx("span",{className:"cwschat chat-name",children:ie.displayName||"CodeWithSiam user"}),g.jsx("span",{className:"cwschat chat-time",children:$U(E.lastMessageAt)})]}),g.jsxs("div",{className:"cwschat chat-row-bottom",children:[g.jsx("span",{className:"cwschat chat-preview",children:((F=E.lastMessage)!=null&&F.startsWith(M==null?void 0:M.uid),Re)}),De>0&&g.jsx("span",{className:"cwschat unread-pill",children:De>9?"9+":De})]})]})]},E.id)})}),g.jsx("div",{className:"cwschat dropdown-footer",onClick:()=>T("/messenger"),children:"See all in chats"})]})]}),g.jsx("button",{className:"icon-btn ghost-btn",type:"button","aria-label":"Notifications",children:g.jsx(ny,{...On})}),g.jsx("button",{className:"avatar-action",type:"button","aria-label":"Profile",onClick:()=>T("/profile"),children:g.jsx("img",{className:"navbar-avatar",src:(j==null?void 0:j.photoURL)||"/default-avatar.png",alt:"Profile"})}),g.jsx("button",{className:"mobile-search-btn icon-btn",type:"button",onClick:()=>i(!0),title:"Search","aria-label":"Open search",children:g.jsx(Am,{...On})})]})]}),A.length>0&&g.jsx("div",{className:"cwschat dock-stack",children:A.map(E=>{const J=c.find(ie=>ie.id===E)||null;return g.jsx(BU,{chat:J,chatId:E,currentUser:M,usersMap:f,compact:!0,onClose:()=>P(E),onMinimize:()=>N(E)},E)})})]})}const qU=[{to:"/",label:"Home",icon:ry},{to:"/search?view=friends",label:"Friends",icon:d1},{to:"/search?view=saved",label:"Saved",icon:SU},{to:"/search",label:"Search",icon:Am},{to:"/create",label:"Create Post",icon:AU},{to:"/messenger",label:"Messenger",icon:DU},{to:"/notifications",label:"Notifications",icon:ny}],HU=[{to:"/search?view=groups",label:"Groups",icon:sy},{to:"/search?view=reels",label:"Reels",icon:jU},{to:"/search?view=marketplace",label:"Marketplace",icon:iy}],GU=[{to:"/search?view=memories",label:"Memories",icon:PU},{to:"/search?view=feeds",label:"Feeds",icon:CU},{to:"/search?view=gaming",label:"Gaming",icon:Qk}],bi={size:20,strokeWidth:1.5,"aria-hidden":!0};function KU({mobileOpen:t=!1,onClose:e}){var c;const[n,r]=D.useState(!1),[i,s]=D.useState(0),{user:o,profile:a}=jo(),u=((c=o==null?void 0:o.email)==null?void 0:c.toLowerCase())==="mdsiamahmmedloselovestroy@gmail.com";return D.useEffect(()=>{if(!o)return;const h=wh(Js(xt,"chats"),kk("members","array-contains",o.uid),Z_("lastMessageAt","desc")),f=bl(h,m=>{const w=m.docs.reduce((C,A)=>{var x,S;return C+Number(((S=(x=A.data())==null?void 0:x.unread)==null?void 0:S[o.uid])||0)},0);s(w)});return()=>f()},[o]),g.jsxs(g.Fragment,{children:[t&&g.jsx("button",{className:"sidebar-backdrop",type:"button","aria-label":"Close menu",onClick:e}),g.jsxs("nav",{className:`sidebar${t?" is-open":""}`,children:[g.jsxs("div",{className:"sidebar-mobile-head",children:[g.jsx("strong",{children:"Menu"}),g.jsx("button",{className:"icon-btn",type:"button",onClick:e,"aria-label":"Close menu",children:g.jsx(_1,{...bi})})]}),g.jsxs(Vn,{to:a?`/profile/${a.uid}`:"/login",onClick:e,"aria-label":"Your profile",className:({isActive:h})=>`sidebar-link sidebar-profile${h?" active":""}`,children:[a!=null&&a.photoURL?g.jsx("img",{className:"sidebar-profile-avatar",src:a.photoURL,alt:""}):g.jsx(FU,{className:"sidebar-icon",...bi}),g.jsx("span",{children:(a==null?void 0:a.fullName)||"Your profile"})]}),qU.map(h=>{const f=h.to==="/messenger";return g.jsxs(Vn,{to:h.to,onClick:e,"aria-label":h.label,className:({isActive:m})=>`sidebar-link${m?" active":""}`,style:f?{position:"relative"}:void 0,children:[g.jsx(h.icon,{className:"sidebar-icon",...bi}),g.jsx("span",{children:h.label}),f&&i>0&&g.jsx("span",{style:{marginLeft:"auto",background:"#00a884",color:"#fff",borderRadius:"999px",minWidth:"18px",height:"18px",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:700,padding:"0 5px"},children:i>9?"9+":i})]},h.to)}),g.jsx("div",{className:"sidebar-section-divider",children:g.jsx("span",{children:"Your shortcuts"})}),HU.map(h=>g.jsxs(Vn,{to:h.to,onClick:e,"aria-label":h.label,className:({isActive:f})=>`sidebar-link sidebar-more-link${f?" active":""}`,children:[g.jsx(h.icon,{className:"sidebar-icon",...bi}),g.jsx("span",{children:h.label})]},h.to)),g.jsx("button",{className:"sidebar-see-more",type:"button","aria-expanded":n,onClick:()=>r(h=>!h),children:n?"See less":"See more"}),n&&GU.map(h=>g.jsxs(Vn,{to:h.to,onClick:e,"aria-label":h.label,className:({isActive:f})=>`sidebar-link sidebar-more-link${f?" active":""}`,children:[g.jsx(h.icon,{className:"sidebar-icon",...bi}),g.jsx("span",{children:h.label})]},h.to)),u&&g.jsxs("a",{className:"sidebar-link",href:"/admin",children:[g.jsx(VU,{className:"sidebar-icon",...bi}),g.jsx("span",{children:"Admin Panel"})]}),g.jsxs(Vn,{to:"/settings",onClick:e,className:({isActive:h})=>`sidebar-link${h?" active":""}`,children:[g.jsx(MU,{className:"sidebar-icon",...bi}),g.jsx("span",{children:"Settings"})]})]})]})}const Is={size:20,strokeWidth:1.75,"aria-hidden":!0};function QU({onMenu:t}){const{pathname:e,search:n}=dn(),r=new URLSearchParams(n).get("view");return g.jsxs("nav",{className:"bottom-nav",children:[g.jsx(Vn,{to:"/",end:!0,title:"Home","aria-label":"Home",className:({isActive:i})=>i?"active":"",children:g.jsx(ry,{...Is})}),g.jsx(Vn,{to:"/search?view=reels",title:"Reels","aria-label":"Reels",className:()=>e==="/search"&&r==="reels"?"active":"",children:g.jsx(u1,{...Is})}),g.jsx(Vn,{to:"/search?view=marketplace",title:"Marketplace","aria-label":"Marketplace",className:()=>e==="/search"&&r==="marketplace"?"active":"",children:g.jsx(iy,{...Is})}),g.jsx(Vn,{to:"/search?view=groups",title:"Groups","aria-label":"Groups",className:()=>e==="/search"&&r==="groups"?"active":"",children:g.jsx(sy,{...Is})}),g.jsx(Vn,{to:"/notifications",title:"Notifications","aria-label":"Notifications",className:({isActive:i})=>i?"active":"",children:g.jsx(ny,{...Is})}),g.jsx("button",{type:"button",title:"Menu","aria-label":"Menu",onClick:t,children:g.jsx(t1,{...Is})})]})}function Pm(t){if(!t)return null;if(typeof t.toDate=="function")return t.toDate();if(t instanceof Date)return t;if(typeof t=="number")return new Date(t);if(typeof t=="string"){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}return typeof t.seconds=="number"?new Date(t.seconds*1e3):null}function YU(t){const e=Pm(t);return e?new Intl.DateTimeFormat("en",{hour:"numeric",minute:"2-digit"}).format(e):"Now"}function XU(t,e){return!Array.isArray(t==null?void 0:t.members)||!e?null:t.members.find(n=>n!==e)||null}function JU(t){const{chats:e=[],activeChatId:n,currentUserUid:r,usersMap:i={},onSelect:s,onNewChat:o,activeId:a}=t,u=D.useMemo(()=>[...e].filter(Boolean).sort((c,h)=>{var w,C,A,x;const f=((C=(w=Pm(c==null?void 0:c.lastMessageAt))==null?void 0:w.getTime)==null?void 0:C.call(w))||0;return(((x=(A=Pm(h==null?void 0:h.lastMessageAt))==null?void 0:A.getTime)==null?void 0:x.call(A))||0)-f}).map(c=>{var C;const h=XU(c,r),f=h&&i[h]||null,m=Number(((C=c.unread)==null?void 0:C[r])||0),w=(f==null?void 0:f.displayName)||(f==null?void 0:f.fullName)||"New chat";return{id:c.id,title:w,previewText:c.lastMessage||"No messages yet",unread:m,isUnread:m>0,photo:(f==null?void 0:f.photoURL)||"",online:!!(f!=null&&f.online),time:YU(c.lastMessageAt)}}),[e,r,i]);return g.jsxs("div",{className:"cwschat conversation-list-wrap",children:[g.jsxs("div",{className:"cwschat list-toolbar",children:[g.jsx("span",{children:"Chats"}),g.jsx("button",{type:"button",className:"cwschat small-action",onClick:o||(()=>{}),children:"New chat"})]}),u.length===0?g.jsx("div",{className:"cwschat empty-list-state",children:g.jsx("p",{children:"No conversations yet."})}):u.map(c=>{var h,f;return g.jsxs("button",{type:"button",onClick:()=>s==null?void 0:s(c.id),className:`cwschat conversation-row${c.id===(n||a)?" active":""}${c.isUnread?" unread":""}`,children:[g.jsxs("div",{className:"cwschat avatar-stack",children:[c.photo?g.jsx("img",{src:c.photo,alt:"",className:"cwschat row-avatar"}):g.jsx("span",{className:"cwschat row-avatar fallback",children:((f=(h=c.title)==null?void 0:h.slice(0,1))==null?void 0:f.toUpperCase())||"?"}),c.online&&g.jsx("span",{className:"cwschat online-indicator"})]}),g.jsxs("div",{className:"cwschat row-copy",children:[g.jsxs("div",{className:"cwschat row-topline",children:[g.jsx("strong",{children:c.title}),g.jsx("time",{children:c.time||"Now"})]}),g.jsxs("div",{className:"cwschat row-bottomline",children:[g.jsx("span",{children:c.previewText}),c.isUnread&&g.jsx("span",{className:"cwschat unread-badge",children:c.unread>9?"9+":c.unread})]})]})]},c.id)})]})}function ZU(){const[t,e]=D.useState(!1),{pathname:n}=dn(),r=ls(),{user:i}=jo(),s=n.startsWith("/messenger");return g.jsxs("div",{className:"app-shell",children:[g.jsx(WU,{onMenu:()=>e(!0)}),g.jsxs("div",{className:`app-body${s?" messenger-layout":""}`,children:[!s&&g.jsx(KU,{mobileOpen:t,onClose:()=>e(!1)}),g.jsx("main",{className:"app-main",children:g.jsx(eC,{})}),!s&&g.jsx("div",{className:"app-right-rail trending-rail",children:g.jsxs("div",{className:"rail-stack",children:[g.jsxs("section",{className:"rail-card friend-requests-card",children:[g.jsxs("div",{className:"rail-card-heading",children:[g.jsx("h4",{children:"Friend Requests"}),g.jsx("a",{href:"/community/search?view=friends",children:"See all"})]}),g.jsxs("div",{className:"friend-request-empty",children:[g.jsx("span",{children:g.jsx(d1,{size:18})}),g.jsx("p",{children:"No new requests right now."})]})]}),g.jsxs("section",{className:"rail-card cwsfb-highlights",children:[g.jsxs("div",{className:"rail-card-heading",children:[g.jsx("span",{className:"rail-eyebrow",children:"HIGHLIGHTS"}),g.jsx(C0,{size:16})]}),g.jsx("h4",{children:"Community highlights"}),g.jsx("p",{className:"muted",children:"Stories, ideas, and recent posts from CodeWithSiam."}),g.jsx("a",{href:"/community/search?view=reels",children:"Explore Reels"})]}),g.jsxs("section",{className:"rail-card cwsfb-birthdays",children:[g.jsx("span",{className:"rail-eyebrow",children:"TODAY"}),g.jsx("h4",{children:"Birthdays"}),g.jsx("p",{className:"muted",children:"No birthdays today."})]}),g.jsxs("section",{className:"rail-card cwsfb-contacts",children:[g.jsx("div",{className:"rail-card-heading",children:g.jsx("h4",{children:"Contacts"})}),i?g.jsx(JU,{activeId:"",onSelect:o=>r(`/messenger/${o}`)}):g.jsx("p",{className:"muted",children:"Sign in to see your contacts."})]}),g.jsxs("section",{className:"rail-card sponsored-card",children:[g.jsxs("div",{className:"rail-card-heading",children:[g.jsx("span",{className:"rail-eyebrow",children:"COMMUNITY PICKS"}),g.jsx(C0,{size:16})]}),g.jsxs("div",{className:"sponsored-placeholder",children:[g.jsx("span",{className:"sponsored-placeholder-image"}),g.jsxs("div",{children:[g.jsx("strong",{children:"Build your next idea in public"}),g.jsx("small",{children:"CodeWithSiam community"})]}),g.jsx(kU,{size:16})]})]}),g.jsxs("section",{className:"rail-card",children:[g.jsx("span",{className:"rail-eyebrow",children:"DISCOVER"}),g.jsx("h4",{children:"Trending hashtags"}),g.jsx("p",{className:"muted",children:"Follow the conversations shaping your community."}),g.jsxs("div",{className:"rail-tags",children:[g.jsx("span",{children:"#Python"}),g.jsx("span",{children:"#Programming"}),g.jsx("span",{children:"#AI"}),g.jsx("span",{children:"#MyCommunity"})]})]}),g.jsxs("section",{className:"rail-card",children:[g.jsx("span",{className:"rail-eyebrow",children:"PEOPLE"}),g.jsx("h4",{children:"People you may know"}),g.jsx("p",{className:"muted",children:"Discover learners and builders with similar interests."}),g.jsx("button",{className:"rail-action",type:"button",children:"Find people"})]}),g.jsxs("section",{className:"rail-card",children:[g.jsx("span",{className:"rail-eyebrow",children:"YOUR SPACE"}),g.jsx("h4",{children:"Suggested groups"}),g.jsx("p",{className:"muted",children:"Join focused conversations around code, AI, and projects."}),g.jsx("button",{className:"rail-action",type:"button",children:"Explore groups"})]})]})})]}),!s&&g.jsx(QU,{onMenu:()=>e(!0)})]})}function e3(){const{authPrompt:t,dismissAuthPrompt:e}=jo(),n=dn(),r=ls();if(!t)return null;function i(s){const o=`${n.pathname}${n.search}${n.hash}`;e(),r(s,{state:{returnTo:o}})}return g.jsx("div",{className:"modal-overlay",role:"presentation",onClick:e,children:g.jsxs("section",{className:"modal-card",role:"dialog","aria-modal":"true","aria-labelledby":"auth-prompt-title",onClick:s=>s.stopPropagation(),children:[g.jsx("h2",{id:"auth-prompt-title",children:"Sign in to continue"}),g.jsx("p",{children:t}),g.jsxs("div",{className:"auth-links",children:[g.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>i("/login"),children:"Sign In"}),g.jsx("button",{className:"btn btn-ghost",type:"button",onClick:()=>i("/signup"),children:"Create Account"}),g.jsx("button",{className:"link-btn",type:"button",onClick:e,children:"Continue browsing"})]})]})})}function t3(){var P;const{user:t,login:e,loginWithGoogle:n,verifySignupCode:r,resendSignupCode:i,authError:s,clearAuthError:o}=jo(),{showToast:a}=Vk(),u=ls(),c=dn(),[h,f]=D.useState(((P=c.state)==null?void 0:P.email)||""),[m,w]=D.useState(""),[C,A]=D.useState(!1),[x,S]=D.useState(""),[T,k]=D.useState(!1),[O,j]=D.useState(""),[M,v]=D.useState(0);D.useEffect(()=>{var N;t&&u(((N=c.state)==null?void 0:N.returnTo)||"/",{replace:!0})},[c.state,u,t]),D.useEffect(()=>{var N;(N=c.state)!=null&&N.notice&&S(c.state.notice)},[c.state]),D.useEffect(()=>{if(!T||M<=0)return;const N=setTimeout(()=>v(E=>E-1),1e3);return()=>clearTimeout(N)},[M,T]),D.useEffect(()=>{s&&(a(Hu({code:s}),"error"),o())},[s,o,a]);async function _(N){var E;N.preventDefault(),A(!0),S(T?"Verifying email...":"Signing in...");try{T&&(await r(h,O),k(!1),j(""),S("Email verified. Signing in...")),await e(h,m),u(((E=c.state)==null?void 0:E.returnTo)||"/",{replace:!0})}catch(J){(J==null?void 0:J.code)==="auth/user-disabled"||/verify your email with the 6-digit code/i.test((J==null?void 0:J.message)||"")?(k(!0),S("This account is awaiting email verification. Request its 6-digit code below.")):(a(Hu(J),"error"),S(""))}finally{A(!1)}}async function I(){A(!0);try{await i(h),v(60),S("If a registration is pending, a new verification code will arrive shortly.")}catch(N){a(Hu(N),"error")}finally{A(!1)}}async function R(){var N;A(!0),S("Connecting to Google...");try{await n()&&u(((N=c.state)==null?void 0:N.returnTo)||"/",{replace:!0})}catch(E){a(Hu(E),"error"),S("")}finally{A(!1)}}return g.jsx("div",{className:"auth-page",children:g.jsxs("form",{className:"auth-card",onSubmit:_,children:[g.jsx("h1",{children:"My Community"}),g.jsx("p",{className:"muted",children:"Log in to continue"}),g.jsx("label",{className:"auth-field-label",htmlFor:"login-user-id",children:"User ID"}),g.jsx("input",{id:"login-user-id",type:"email",placeholder:"Enter your email",value:h,required:!0,autoComplete:"email",onChange:N=>f(N.target.value)}),g.jsx("label",{className:"auth-field-label",htmlFor:"login-password",children:"Password"}),g.jsx("input",{id:"login-password",type:"password",placeholder:"Enter your password",value:m,required:!0,autoComplete:"current-password",onChange:N=>w(N.target.value)}),g.jsx("button",{className:"btn btn-primary",type:"submit",disabled:C,children:"Log In"}),T&&g.jsxs(g.Fragment,{children:[g.jsx("p",{className:"muted small",children:"Enter the 6-digit code sent to this email. It expires in 10 minutes."}),g.jsx("label",{className:"auth-field-label",htmlFor:"login-otp",children:"6-digit verification code"}),g.jsx("input",{id:"login-otp",type:"text",inputMode:"numeric",autoComplete:"one-time-code",pattern:"[0-9]{6}",maxLength:6,value:O,onChange:N=>j(N.target.value.replace(/\D/g,"").slice(0,6))}),g.jsx("button",{className:"btn btn-primary",type:"submit",disabled:C||O.length!==6,children:"Verify and Sign In"}),g.jsx("button",{className:"link-btn",type:"button",disabled:C||M>0,onClick:I,children:M>0?`Resend code in ${M}s`:"Resend verification code"})]}),g.jsx("button",{type:"button",className:"btn btn-google",onClick:R,disabled:C,children:"Continue with Google"}),x&&g.jsx("p",{className:"muted small auth-status",role:"status","aria-live":"polite",children:x}),g.jsxs("div",{className:"auth-links auth-links-stack",children:[g.jsx(cl,{to:"/forgot-password",children:"Forgot password?"}),g.jsxs("span",{children:["Don't have an account? ",g.jsx(cl,{to:"/signup",children:"Create an account"})]})]})]})})}function Hu(t){const e=(t==null?void 0:t.code)||"",n={"auth/invalid-credential":"Incorrect email or password. If you use Google, continue with Google.","auth/user-not-found":"No account found with that email.","auth/wrong-password":"Incorrect email or password.","auth/operation-not-allowed":"Email/password login is not enabled in Firebase Authentication.","auth/too-many-requests":"Too many attempts. Please wait and try again.","auth/user-disabled":"This account is awaiting email verification. Request a code to continue.","auth/email-already-in-use":"This email is already registered. Please sign in.","auth/weak-password":"Password must be at least 8 characters.","auth/popup-closed-by-user":"Google sign-in was cancelled.","auth/popup-blocked":"Google sign-in was blocked. Please allow popups and try again.","auth/cancelled-popup-request":"Another Google sign-in is already in progress.","auth/unauthorized-domain":"Google sign-in is not enabled for this website domain.","auth/network-request-failed":"Network connection failed. Check your connection and try again.","auth/account-exists-with-different-credential":"This email already belongs to another sign-in method. Use that method to access the existing account.","auth/operation-not-supported-in-this-environment":"Google sign-in is unavailable in this browser. Please try again.","auth/redirect-cancelled-by-user":"Google sign-in was cancelled."};return n[e]?n[e]:!e&&/^The code is invalid or expired\./.test((t==null?void 0:t.message)||"")?"Invalid or expired verification code.":!e&&/^(Too many requests\. Please wait and try again\.|Unable to start signup\..*)$/.test((t==null?void 0:t.message)||"")||!e&&/^(This (email|account)|Please |Password |Enter |Cannot reach |Could not |The verification)/.test((t==null?void 0:t.message)||"")||!e&&/^(Passwords do not match\.|Password must be at least 8 characters\.|Please verify your email before signing in\..*)$/.test((t==null?void 0:t.message)||"")?t.message:"Something went wrong. Please try again."}const n3=D.lazy(()=>xn(()=>import("./Signup-DVMNJegc.js"),[])),r3=D.lazy(()=>xn(()=>import("./ForgotPassword-5pApY1Lg.js"),[])),S0=D.lazy(()=>xn(()=>import("./Home-BSX9EWP0.js"),__vite__mapDeps([0,1,2,3,4,5]))),i3=D.lazy(()=>xn(()=>import("./Profile-DOXKXBE5.js"),__vite__mapDeps([6,2,4,3]))),R0=D.lazy(()=>xn(()=>import("./Messenger-Div9VF3h.js"),__vite__mapDeps([7,5]))),k0=D.lazy(()=>xn(()=>import("./Notifications-CqA-7YRF.js"),[])),s3=D.lazy(()=>xn(()=>import("./Search-DkxVEFly.js"),__vite__mapDeps([8,4,3]))),o3=D.lazy(()=>xn(()=>import("./Hashtag-BjGroHq3.js"),__vite__mapDeps([9,4,3]))),a3=D.lazy(()=>xn(()=>import("./Settings-xpMa7ekq.js"),__vite__mapDeps([10,2]))),l3=D.lazy(()=>xn(()=>import("./PostPage-BmkERFbb.js"),__vite__mapDeps([11,4,3]))),u3=D.lazy(()=>xn(()=>import("./CreatePostPage-Bq0Zkyj7.js"),__vite__mapDeps([12,1,2,3])));function Ft({children:t}){return g.jsx(D.Suspense,{fallback:g.jsx(Fk,{full:!0,label:"Loading Community..."}),children:t})}function c3(){return g.jsx("div",{className:"cwsfb",children:g.jsx(uU,{children:g.jsx(hU,{children:g.jsx(lU,{children:g.jsxs(Tx,{basename:"/community",children:[g.jsxs(fx,{children:[g.jsx(et,{path:"/login",element:g.jsx(t3,{})}),g.jsx(et,{path:"/signup",element:g.jsx(Ft,{children:g.jsx(n3,{})})}),g.jsx(et,{path:"/forgot-password",element:g.jsx(Ft,{children:g.jsx(r3,{})})}),g.jsxs(et,{element:g.jsx(ZU,{}),children:[g.jsx(et,{path:"/",element:g.jsx(Ft,{children:g.jsx(S0,{})})}),g.jsx(et,{path:"/index.html",element:g.jsx(Ft,{children:g.jsx(S0,{})})}),g.jsx(et,{path:"/post/:postId",element:g.jsx(Ft,{children:g.jsx(l3,{})})}),g.jsxs(et,{element:g.jsx(dU,{}),children:[g.jsx(et,{path:"/profile/:uid",element:g.jsx(Ft,{children:g.jsx(i3,{})})}),g.jsx(et,{path:"/messenger",element:g.jsx(Ft,{children:g.jsx(R0,{})})}),g.jsx(et,{path:"/messenger/:convId",element:g.jsx(Ft,{children:g.jsx(R0,{})})}),g.jsx(et,{path:"/notifications",element:g.jsx(Ft,{children:g.jsx(k0,{})})}),g.jsx(et,{path:"/message-notifications",element:g.jsx(Ft,{children:g.jsx(k0,{kind:"messages"})})}),g.jsx(et,{path:"/search",element:g.jsx(Ft,{children:g.jsx(s3,{})})}),g.jsx(et,{path:"/hashtag/:tag",element:g.jsx(Ft,{children:g.jsx(o3,{})})}),g.jsx(et,{path:"/settings",element:g.jsx(Ft,{children:g.jsx(a3,{})})}),g.jsx(et,{path:"/create",element:g.jsx(Ft,{children:g.jsx(u3,{})})})]})]})]}),g.jsx(e3,{})]})})})})})}Wf.createRoot(document.getElementById("root")).render(g.jsx(F0.StrictMode,{children:g.jsx(c3,{})}));export{NU as $,Z_ as A,kk as B,Js as C,bl as D,Yj as E,JU as F,BU as G,R3 as H,Ts as I,Ee as J,ny as K,Fk as L,OU as M,DU as N,k3 as O,d3 as P,y3 as Q,O3 as R,Am as S,m3 as T,d1 as U,N3 as V,x3 as W,_1 as X,b3 as Y,P3 as Z,jU as _,Vk as a,D3 as a0,A3 as a1,f3 as a2,Ag as a3,iU as a4,ls as b,dn as c,cl as d,Pi as e,Hu as f,LV as g,Ni as h,w3 as i,g as j,g3 as k,v3 as l,JV as m,$r as n,um as o,h3 as p,E3 as q,D as r,Ua as s,OV as t,jo as u,_n as v,xt as w,Us as x,fa as y,wh as z};
