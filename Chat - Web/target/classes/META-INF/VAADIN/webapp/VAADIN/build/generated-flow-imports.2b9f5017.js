import{i as m,r as b,T as R,e as mt,s as Lt,y as ct,t as bt,a as wi,b as Fo,c as Bo,d as G,f as Vo,x as Uo,g as $o,Z as jo,w as qo,h as Yo,j as Wo,_ as Go}from"./indexhtml.54b5b5ca.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=i=>t=>typeof t=="function"?((e,r)=>(customElements.define(e,r),r))(i,t):((e,r)=>{const{kind:o,elements:s}=r;return{kind:o,elements:s,finisher(n){customElements.define(e,n)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ko=({finisher:i,descriptor:t})=>(e,r)=>{var o;if(r===void 0){const s=(o=e.originalKey)!==null&&o!==void 0?o:e.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return i!=null&&(n.finisher=function(a){i(a,s)}),n}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),i==null||i(s,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ci(i,t){return Ko({descriptor:e=>{const r={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const o=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var s,n;return this[o]===void 0&&(this[o]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&n!==void 0?n:null),this[o]}}return r}})}const Ft=m`h2{color:red}.titlu{position:absolute;top:0px}chat-bubble{width:100%}chat-bubble-me{width:100%}.chat-container{height:80vh;width:100%;display:flex;justify-content:center;align-items:center}body{background-color:#f5f5f5}.input-container{width:100%;display:flex;justify-content:center;flex-wrap:nowrap;flex-direction:row;align-items:center}.input-text{width:90%}.chatarea{display:flex;flex-direction:column;align-items:flex-start;border-radius:10px;width:95%;height:95%;margin:10px;padding-left:25px;padding-top:25px;overflow-y:auto;background-color:#f8f5f5;border-style:groove;border-color:#d3d3d3}p{padding:0;margin:5px;color:#484545}blockquote{margin-bottom:.75em}div::-webkit-scrollbar{width:12px;height:50%}div::-webkit-scrollbar-track{height:100%}div::-webkit-scrollbar-thumb{background-color:#727272;border-radius:10px;height:50%}.him{background:#dbdbdb;float:left;font-size:small;margin-bottom:30px}.me{margin-bottom:30px;float:right;background:#137bdf;color:#fff;font-size:small;align-self:flex-end}.him+.me{border-bottom-right-radius:5px}.me+.me{border-top-right-radius:5px;border-bottom-right-radius:5px}
`,Jo=m`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;b("vaadin-vertical-layout",Jo,{moduleId:"lumo-vertical-layout"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(i,t){return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Xo=/(url\()([^)]*)(\))/g,Zo=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,yt,x;function dt(i,t){if(i&&Zo.test(i)||i==="//")return i;if(yt===void 0){yt=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",yt=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),yt)try{return new URL(i,t).href}catch{return i}return x||(x=document.implementation.createHTMLDocument("temp"),x.base=x.createElement("base"),x.head.appendChild(x.base),x.anchor=x.createElement("a"),x.body.appendChild(x.anchor)),x.base.href=t,x.anchor.href=i,x.anchor.href||i}function _e(i,t){return i.replace(Xo,function(e,r,o,s){return r+"'"+dt(o.replace(/["']/g,""),t)+"'"+s})}function me(i){return i.substring(0,i.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Qo=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const tr=Qo&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const i=new CSSStyleSheet;i.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[i],t.shadowRoot.adoptedStyleSheets[0]===i}catch{return!1}})();let er=window.Polymer&&window.Polymer.rootPath||me(document.baseURI||window.location.href),Et=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Ia=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Pt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ir=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,or=window.Polymer&&window.Polymer.legacyOptimizations||!1,xi=window.Polymer&&window.Polymer.legacyWarnings||!1,rr=window.Polymer&&window.Polymer.syncInitialRender||!1,Xt=window.Polymer&&window.Polymer.legacyUndefined||!1,sr=window.Polymer&&window.Polymer.orderedComputed||!1,nr=!0;const ar=function(i){nr=i};let Ie=window.Polymer&&window.Polymer.removeNestedTemplates||!1,lr=window.Polymer&&window.Polymer.fastDomIf||!1,Da=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Ha=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,dr=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let cr=0;const g=function(i){let t=i.__mixinApplications;t||(t=new WeakMap,i.__mixinApplications=t);let e=cr++;function r(o){let s=o.__mixinSet;if(s&&s[e])return o;let n=t,a=n.get(o);if(!a){a=i(o),n.set(o,a);let l=Object.create(a.__mixinSet||s||null);l[e]=!0,a.__mixinSet=l}return a}return r};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ge={},Ai={};function De(i,t){ge[i]=Ai[i.toLowerCase()]=t}function He(i){return ge[i]||Ai[i.toLowerCase()]}function hr(i){i.querySelector("style")&&console.warn("dom-module %s has style outside template",i.id)}class K extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let r=He(t);return r&&e?r.querySelector(e):r}return null}attributeChangedCallback(t,e,r,o){e!==r&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=dt(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=me(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(Pt&&He(t)!==void 0)throw De(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,De(t,this),hr(this)}}}K.prototype.modules=ge;customElements.define("dom-module",K);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ur="link[rel=import][type~=css]",pr="include",Re="shady-unscoped";function ve(i){return K.import(i)}function Fe(i){let t=i.body?i.body:i;const e=_e(t.textContent,i.baseURI),r=document.createElement("style");return r.textContent=e,r}function fr(i){const t=i.trim().split(/\s+/),e=[];for(let r=0;r<t.length;r++)e.push(..._r(t[r]));return e}function _r(i){const t=ve(i);if(!t)return console.warn("Could not find style data in module named",i),[];if(t._styles===void 0){const e=[];e.push(...be(t));const r=t.querySelector("template");r&&e.push(...It(r,t.assetpath)),t._styles=e}return t._styles}function It(i,t){if(!i._styles){const e=[],r=i.content.querySelectorAll("style");for(let o=0;o<r.length;o++){let s=r[o],n=s.getAttribute(pr);n&&e.push(...fr(n).filter(function(a,l,d){return d.indexOf(a)===l})),t&&(s.textContent=_e(s.textContent,t)),e.push(s)}i._styles=e}return i._styles}function mr(i){let t=ve(i);return t?be(t):[]}function be(i){const t=[],e=i.querySelectorAll(ur);for(let r=0;r<e.length;r++){let o=e[r];if(o.import){const s=o.import,n=o.hasAttribute(Re);if(n&&!s._unscopedStyle){const a=Fe(s);a.setAttribute(Re,""),s._unscopedStyle=a}else s._style||(s._style=Fe(s));t.push(n?s._unscopedStyle:s._style)}}return t}function Ra(i){let t=i.trim().split(/\s+/),e="";for(let r=0;r<t.length;r++)e+=gr(t[r]);return e}function gr(i){let t=ve(i);if(t&&t._cssText===void 0){let e=br(t),r=t.querySelector("template");r&&(e+=vr(r,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",i),t&&t._cssText||""}function vr(i,t){let e="";const r=It(i,t);for(let o=0;o<r.length;o++){let s=r[o];s.parentNode&&s.parentNode.removeChild(s),e+=s.textContent}return e}function br(i){let t="",e=be(i);for(let r=0;r<e.length;r++)t+=e[r].textContent;return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const v=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Zt(i){return i.indexOf(".")>=0}function F(i){let t=i.indexOf(".");return t===-1?i:i.slice(0,t)}function Ei(i,t){return i.indexOf(t+".")===0}function ht(i,t){return t.indexOf(i+".")===0}function Tt(i,t,e){return t+e.slice(i.length)}function Fa(i,t){return i===t||Ei(i,t)||ht(i,t)}function at(i){if(Array.isArray(i)){let t=[];for(let e=0;e<i.length;e++){let r=i[e].toString().split(".");for(let o=0;o<r.length;o++)t.push(r[o])}return t.join(".")}else return i}function Pi(i){return Array.isArray(i)?at(i).split("."):i.toString().split(".")}function y(i,t,e){let r=i,o=Pi(t);for(let s=0;s<o.length;s++){if(!r)return;let n=o[s];r=r[n]}return e&&(e.path=o.join(".")),r}function Be(i,t,e){let r=i,o=Pi(t),s=o[o.length-1];if(o.length>1){for(let n=0;n<o.length-1;n++){let a=o[n];if(r=r[a],!r)return}r[s]=e}else r[t]=e;return o.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ot={},yr=/-[a-z]/g,wr=/([A-Z])/g;function Ti(i){return Ot[i]||(Ot[i]=i.indexOf("-")<0?i:i.replace(yr,t=>t[1].toUpperCase()))}function Dt(i){return Ot[i]||(Ot[i]=i.replace(wr,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Cr=0,Oi=0,j=[],xr=0,Qt=!1,Si=document.createTextNode("");new window.MutationObserver(Ar).observe(Si,{characterData:!0});function Ar(){Qt=!1;const i=j.length;for(let t=0;t<i;t++){let e=j[t];if(e)try{e()}catch(r){setTimeout(()=>{throw r})}}j.splice(0,i),Oi+=i}const Ba={after(i){return{run(t){return window.setTimeout(t,i)},cancel(t){window.clearTimeout(t)}}},run(i,t){return window.setTimeout(i,t)},cancel(i){window.clearTimeout(i)}},Va={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},Ua={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},zi={run(i){return Qt||(Qt=!0,Si.textContent=xr++),j.push(i),Cr++},cancel(i){const t=i-Oi;if(t>=0){if(!j[t])throw new Error("invalid async handle: "+i);j[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Er=zi,ki=g(i=>{class t extends i{static createProperties(r){const o=this.prototype;for(let s in r)s in o||o._createPropertyAccessor(s)}static attributeNameForProperty(r){return r.toLowerCase()}static typeForProperty(r){}_createPropertyAccessor(r,o){this._addPropertyToAttributeMap(r),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[r]||(this.__dataHasAccessor[r]=!0,this._definePropertyAccessor(r,o))}_addPropertyToAttributeMap(r){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let o=this.__dataAttributes[r];return o||(o=this.constructor.attributeNameForProperty(r),this.__dataAttributes[o]=r),o}_definePropertyAccessor(r,o){Object.defineProperty(this,r,{get(){return this.__data[r]},set:o?function(){}:function(s){this._setPendingProperty(r,s,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let r in this.__dataHasAccessor)this.hasOwnProperty(r)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[r]=this[r],delete this[r])}_initializeInstanceProperties(r){Object.assign(this,r)}_setProperty(r,o){this._setPendingProperty(r,o)&&this._invalidateProperties()}_getProperty(r){return this.__data[r]}_setPendingProperty(r,o,s){let n=this.__data[r],a=this._shouldPropertyChange(r,o,n);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(r in this.__dataOld)&&(this.__dataOld[r]=n),this.__data[r]=o,this.__dataPending[r]=o),a}_isPropertyPending(r){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(r))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Er.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const r=this.__data,o=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(r,o,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(r,o,s)),this.__dataCounter--}_shouldPropertiesChange(r,o,s){return Boolean(o)}_propertiesChanged(r,o,s){}_shouldPropertyChange(r,o,s){return s!==o&&(s===s||o===o)}attributeChangedCallback(r,o,s,n){o!==s&&this._attributeToProperty(r,s),super.attributeChangedCallback&&super.attributeChangedCallback(r,o,s,n)}_attributeToProperty(r,o,s){if(!this.__serializing){const n=this.__dataAttributes,a=n&&n[r]||r;this[a]=this._deserializeValue(o,s||this.constructor.typeForProperty(a))}}_propertyToAttribute(r,o,s){this.__serializing=!0,s=arguments.length<3?this[r]:s,this._valueToNodeAttribute(this,s,o||this.constructor.attributeNameForProperty(r)),this.__serializing=!1}_valueToNodeAttribute(r,o,s){const n=this._serializeValue(o);(s==="class"||s==="name"||s==="slot")&&(r=v(r)),n===void 0?r.removeAttribute(s):r.setAttribute(s,n===""&&window.trustedTypes?window.trustedTypes.emptyScript:n)}_serializeValue(r){switch(typeof r){case"boolean":return r?"":void 0;default:return r!=null?r.toString():void 0}}_deserializeValue(r,o){switch(o){case Boolean:return r!==null;case Number:return Number(r);default:return r}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Mi={};let wt=HTMLElement.prototype;for(;wt;){let i=Object.getOwnPropertyNames(wt);for(let t=0;t<i.length;t++)Mi[i[t]]=!0;wt=Object.getPrototypeOf(wt)}const Pr=(()=>window.trustedTypes?i=>trustedTypes.isHTML(i)||trustedTypes.isScript(i)||trustedTypes.isScriptURL(i):()=>!1)();function Tr(i,t){if(!Mi[t]){let e=i[t];e!==void 0&&(i.__data?i._setPendingProperty(t,e):(i.__dataProto?i.hasOwnProperty(JSCompiler_renameProperty("__dataProto",i))||(i.__dataProto=Object.create(i.__dataProto)):i.__dataProto={},i.__dataProto[t]=e))}}const Or=g(i=>{const t=ki(i);class e extends t{static createPropertiesForAttributes(){let o=this.observedAttributes;for(let s=0;s<o.length;s++)this.prototype._createPropertyAccessor(Ti(o[s]))}static attributeNameForProperty(o){return Dt(o)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(o){for(let s in o)this._setProperty(s,o[s])}_ensureAttribute(o,s){const n=this;n.hasAttribute(o)||this._valueToNodeAttribute(n,s,o)}_serializeValue(o){switch(typeof o){case"object":if(o instanceof Date)return o.toString();if(o){if(Pr(o))return o;try{return JSON.stringify(o)}catch{return""}}default:return super._serializeValue(o)}}_deserializeValue(o,s){let n;switch(s){case Object:try{n=JSON.parse(o)}catch{n=o}break;case Array:try{n=JSON.parse(o)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${o}`)}break;case Date:n=isNaN(o)?String(o):Number(o),n=new Date(n);break;default:n=super._deserializeValue(o,s);break}return n}_definePropertyAccessor(o,s){Tr(this,o),super._definePropertyAccessor(o,s)}_hasAccessor(o){return this.__dataHasAccessor&&this.__dataHasAccessor[o]}_isPropertyPending(o){return Boolean(this.__dataPending&&o in this.__dataPending)}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Sr={"dom-if":!0,"dom-repeat":!0};let Ve=!1,Ue=!1;function zr(){if(!Ve){Ve=!0;const i=document.createElement("textarea");i.placeholder="a",Ue=i.placeholder===i.textContent}return Ue}function kr(i){zr()&&i.localName==="textarea"&&i.placeholder&&i.placeholder===i.textContent&&(i.textContent=null)}const Mr=(()=>{const i=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,r)=>{const o=e.getAttribute(r);if(i&&r.startsWith("on-")){t.setAttribute(r,i.createScript(o,r));return}t.setAttribute(r,o)}})();function Lr(i){let t=i.getAttribute("is");if(t&&Sr[t]){let e=i;for(e.removeAttribute("is"),i=e.ownerDocument.createElement(t),e.parentNode.replaceChild(i,e),i.appendChild(e);e.attributes.length;){const{name:r}=e.attributes[0];Mr(i,e,r),e.removeAttribute(r)}}return i}function Li(i,t){let e=t.parentInfo&&Li(i,t.parentInfo);if(e){for(let r=e.firstChild,o=0;r;r=r.nextSibling)if(t.parentIndex===o++)return r}else return i}function Nr(i,t,e,r){r.id&&(t[r.id]=e)}function Ir(i,t,e){if(e.events&&e.events.length)for(let r=0,o=e.events,s;r<o.length&&(s=o[r]);r++)i._addMethodEventListenerToNode(t,s.name,s.value,i)}function Dr(i,t,e,r){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=r)}function Hr(i,t,e){return i=i._methodHost||i,function(o){i[e]?i[e](o,o.detail):console.warn("listener method `"+e+"` not defined")}}const Rr=g(i=>{class t extends i{static _parseTemplate(r,o){if(!r._templateInfo){let s=r._templateInfo={};s.nodeInfoList=[],s.nestedTemplate=Boolean(o),s.stripWhiteSpace=o&&o.stripWhiteSpace||r.hasAttribute&&r.hasAttribute("strip-whitespace"),this._parseTemplateContent(r,s,{parent:null})}return r._templateInfo}static _parseTemplateContent(r,o,s){return this._parseTemplateNode(r.content,o,s)}static _parseTemplateNode(r,o,s){let n=!1,a=r;return a.localName=="template"&&!a.hasAttribute("preserve-content")?n=this._parseTemplateNestedTemplate(a,o,s)||n:a.localName==="slot"&&(o.hasInsertionPoint=!0),kr(a),a.firstChild&&this._parseTemplateChildNodes(a,o,s),a.hasAttributes&&a.hasAttributes()&&(n=this._parseTemplateNodeAttributes(a,o,s)||n),n||s.noted}static _parseTemplateChildNodes(r,o,s){if(!(r.localName==="script"||r.localName==="style"))for(let n=r.firstChild,a=0,l;n;n=l){if(n.localName=="template"&&(n=Lr(n)),l=n.nextSibling,n.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)n.textContent+=c.textContent,l=c.nextSibling,r.removeChild(c),c=l;if(o.stripWhiteSpace&&!n.textContent.trim()){r.removeChild(n);continue}}let d={parentIndex:a,parentInfo:s};this._parseTemplateNode(n,o,d)&&(d.infoIndex=o.nodeInfoList.push(d)-1),n.parentNode&&a++}}static _parseTemplateNestedTemplate(r,o,s){let n=r,a=this._parseTemplate(n,o);return(a.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),s.templateInfo=a,!0}static _parseTemplateNodeAttributes(r,o,s){let n=!1,a=Array.from(r.attributes);for(let l=a.length-1,d;d=a[l];l--)n=this._parseTemplateNodeAttribute(r,o,s,d.name,d.value)||n;return n}static _parseTemplateNodeAttribute(r,o,s,n,a){return n.slice(0,3)==="on-"?(r.removeAttribute(n),s.events=s.events||[],s.events.push({name:n.slice(3),value:a}),!0):n==="id"?(s.id=a,!0):!1}static _contentForTemplate(r){let o=r._templateInfo;return o&&o.content||r.content}_stampTemplate(r,o){r&&!r.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(r),o=o||this.constructor._parseTemplate(r);let s=o.nodeInfoList,n=o.content||r.content,a=document.importNode(n,!0);a.__noInsertionPoint=!o.hasInsertionPoint;let l=a.nodeList=new Array(s.length);a.$={};for(let d=0,c=s.length,h;d<c&&(h=s[d]);d++){let u=l[d]=Li(a,h);Nr(this,a.$,u,h),Dr(this,u,h,o),Ir(this,u,h)}return a=a,a}_addMethodEventListenerToNode(r,o,s,n){n=n||r;let a=Hr(n,o,s);return this._addEventListenerToNode(r,o,a),a}_addEventListenerToNode(r,o,s){r.addEventListener(o,s)}_removeEventListenerFromNode(r,o,s){r.removeEventListener(o,s)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let ut=0;const pt=[],f={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ni="__computeInfo",Fr=/[A-Z]/;function Bt(i,t,e){let r=i[t];if(!r)r=i[t]={};else if(!i.hasOwnProperty(t)&&(r=i[t]=Object.create(i[t]),e))for(let o in r){let s=r[o],n=r[o]=Array(s.length);for(let a=0;a<s.length;a++)n[a]=s[a]}return r}function lt(i,t,e,r,o,s){if(t){let n=!1;const a=ut++;for(let l in e){let d=o?F(l):l,c=t[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==a)&&(!o||ye(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(i,l,e,r,p.info,o,s),n=!0)}return n}return!1}function Br(i,t,e,r,o,s,n,a){let l=!1,d=n?F(r):r,c=t[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==e)&&(!n||ye(r,p.trigger))&&(p.info&&(p.info.lastRun=e),p.fn(i,r,o,s,p.info,n,a),l=!0);return l}function ye(i,t){if(t){let e=t.name;return e==i||!!(t.structured&&Ei(e,i))||!!(t.wildcard&&ht(e,i))}else return!0}function $e(i,t,e,r,o){let s=typeof o.method=="string"?i[o.method]:o.method,n=o.property;s?s.call(i,i.__data[n],r[n]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function Vr(i,t,e,r,o){let s=i[f.NOTIFY],n,a=ut++;for(let d in t)t[d]&&(s&&Br(i,s,a,d,e,r,o)||o&&Ur(i,d,e))&&(n=!0);let l;n&&(l=i.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function Ur(i,t,e){let r=F(t);if(r!==t){let o=Dt(r)+"-changed";return Ii(i,o,e[t],t),!0}return!1}function Ii(i,t,e,r){let o={value:e,queueProperty:!0};r&&(o.path=r),v(i).dispatchEvent(new CustomEvent(t,{detail:o}))}function $r(i,t,e,r,o,s){let a=(s?F(t):t)!=t?t:null,l=a?y(i,a):i.__data[t];a&&l===void 0&&(l=e[t]),Ii(i,o.eventName,l,a)}function jr(i,t,e,r,o){let s,n=i.detail,a=n&&n.path;a?(r=Tt(e,r,a),s=n&&n.value):s=i.currentTarget[e],s=o?!s:s,(!t[f.READ_ONLY]||!t[f.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,s,!0,Boolean(a))&&(!n||!n.queueProperty)&&t._invalidateProperties()}function qr(i,t,e,r,o){let s=i.__data[t];Et&&(s=Et(s,o.attrName,"attribute",i)),i._propertyToAttribute(t,o.attrName,s)}function Yr(i,t,e,r){let o=i[f.COMPUTE];if(o)if(sr){ut++;const s=Gr(i),n=[];for(let l in t)je(l,o,n,s,r);let a;for(;a=n.shift();)Di(i,"",t,e,a)&&je(a.methodInfo,o,n,s,r);Object.assign(e,i.__dataOld),Object.assign(t,i.__dataPending),i.__dataPending=null}else{let s=t;for(;lt(i,o,s,e,r);)Object.assign(e,i.__dataOld),Object.assign(t,i.__dataPending),s=i.__dataPending,i.__dataPending=null}}const Wr=(i,t,e)=>{let r=0,o=t.length-1,s=-1;for(;r<=o;){const n=r+o>>1,a=e.get(t[n].methodInfo)-e.get(i.methodInfo);if(a<0)r=n+1;else if(a>0)o=n-1;else{s=n;break}}s<0&&(s=o+1),t.splice(s,0,i)},je=(i,t,e,r,o)=>{const s=o?F(i):i,n=t[s];if(n)for(let a=0;a<n.length;a++){const l=n[a];l.info.lastRun!==ut&&(!o||ye(i,l.trigger))&&(l.info.lastRun=ut,Wr(l.info,e,r))}};function Gr(i){let t=i.constructor.__orderedComputedDeps;if(!t){t=new Map;const e=i[f.COMPUTE];let{counts:r,ready:o,total:s}=Kr(i),n;for(;n=o.shift();){t.set(n,t.size);const a=e[n];a&&a.forEach(l=>{const d=l.info.methodInfo;--s,--r[d]===0&&o.push(d)})}s!==0&&console.warn(`Computed graph for ${i.localName} incomplete; circular?`),i.constructor.__orderedComputedDeps=t}return t}function Kr(i){const t=i[Ni],e={},r=i[f.COMPUTE],o=[];let s=0;for(let n in t){const a=t[n];s+=e[n]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let n in r)t[n]||o.push(n);return{counts:e,ready:o,total:s}}function Di(i,t,e,r,o){let s=te(i,t,e,r,o);if(s===pt)return!1;let n=o.methodInfo;return i.__dataHasAccessor&&i.__dataHasAccessor[n]?i._setPendingProperty(n,s,!0):(i[n]=s,!1)}function Jr(i,t,e){let r=i.__dataLinkedPaths;if(r){let o;for(let s in r){let n=r[s];ht(s,t)?(o=Tt(s,n,t),i._setPendingPropertyOrPath(o,e,!0,!0)):ht(n,t)&&(o=Tt(n,s,t),i._setPendingPropertyOrPath(o,e,!0,!0))}}}function Vt(i,t,e,r,o,s,n){e.bindings=e.bindings||[];let a={kind:r,target:o,parts:s,literal:n,isCompound:s.length!==1};if(e.bindings.push(a),es(a)){let{event:d,negate:c}=a.parts[0];a.listenerEvent=d||Dt(o)+"-changed",a.listenerNegate=c}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let c=a.parts[d];c.compoundIndex=d,Xr(i,t,a,c,l)}}function Xr(i,t,e,r,o){if(!r.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let s=r.dependencies,n={index:o,binding:e,part:r,evaluator:i};for(let a=0;a<s.length;a++){let l=s[a];typeof l=="string"&&(l=Ri(l),l.wildcard=!0),i._addTemplatePropertyEffect(t,l.rootProperty,{fn:Zr,info:n,trigger:l})}}}function Zr(i,t,e,r,o,s,n){let a=n[o.index],l=o.binding,d=o.part;if(s&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=e[t];t=Tt(d.source,l.target,t),a._setPendingPropertyOrPath(t,c,!1,!0)&&i._enqueueClient(a)}else{let c=o.evaluator._evaluateBinding(i,d,t,e,r,s);c!==pt&&Qr(i,a,l,d,c)}}function Qr(i,t,e,r,o){if(o=ts(t,o,e,r),Et&&(o=Et(o,e.target,e.kind,t)),e.kind=="attribute")i._valueToNodeAttribute(t,o,e.target);else{let s=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?(!t[f.READ_ONLY]||!t[f.READ_ONLY][s])&&t._setPendingProperty(s,o)&&i._enqueueClient(t):i._setUnmanagedPropertyToNode(t,s,o)}}function ts(i,t,e,r){if(e.isCompound){let o=i.__dataCompoundStorage[e.target];o[r.compoundIndex]=t,t=o.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(i.localName==="input"||i.localName==="textarea"))&&(t=t==null?"":t),t}function es(i){return Boolean(i.target)&&i.kind!="attribute"&&i.kind!="text"&&!i.isCompound&&i.parts[0].mode==="{"}function is(i,t){let{nodeList:e,nodeInfoList:r}=t;if(r.length)for(let o=0;o<r.length;o++){let s=r[o],n=e[o],a=s.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];os(n,d),rs(n,i,d)}n.__dataHost=i}}function os(i,t){if(t.isCompound){let e=i.__dataCompoundStorage||(i.__dataCompoundStorage={}),r=t.parts,o=new Array(r.length);for(let n=0;n<r.length;n++)o[n]=r[n].literal;let s=t.target;e[s]=o,t.literal&&t.kind=="property"&&(s==="className"&&(i=v(i)),i[s]=t.literal)}}function rs(i,t,e){if(e.listenerEvent){let r=e.parts[0];i.addEventListener(e.listenerEvent,function(o){jr(o,t,e.target,r.source,r.negate)})}}function qe(i,t,e,r,o,s){s=t.static||s&&(typeof s!="object"||s[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:o,dynamicFn:s};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||i._addPropertyEffect(l.rootProperty,e,{fn:r,info:n,trigger:l});return s&&i._addPropertyEffect(t.methodName,e,{fn:r,info:n}),n}function te(i,t,e,r,o){let s=i._methodHost||i,n=s[o.methodName];if(n){let a=i._marshalArgs(o.args,t,e);return a===pt?pt:n.apply(s,a)}else o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const ss=[],Hi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",ns="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",as="(?:'(?:[^'\\\\]|\\\\.)*')",ls='(?:"(?:[^"\\\\]|\\\\.)*")',ds="(?:"+as+"|"+ls+")",Ye="(?:("+Hi+"|"+ns+"|"+ds+")\\s*)",cs="(?:"+Ye+"(?:,\\s*"+Ye+")*)",hs="(?:\\(\\s*(?:"+cs+"?)\\)\\s*)",us="("+Hi+"\\s*"+hs+"?)",ps="(\\[\\[|{{)\\s*",fs="(?:]]|}})",_s="(?:(!)\\s*)?",ms=ps+_s+us+fs,We=new RegExp(ms,"g");function Ge(i){let t="";for(let e=0;e<i.length;e++){let r=i[e].literal;t+=r||""}return t}function Ut(i){let t=i.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let r={methodName:t[1],static:!0,args:ss};if(t[2].trim()){let o=t[2].replace(/\\,/g,"&comma;").split(",");return gs(o,r)}else return r}return null}function gs(i,t){return t.args=i.map(function(e){let r=Ri(e);return r.literal||(t.static=!1),r},this),t}function Ri(i){let t=i.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},r=t[0];switch(r==="-"&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=F(t),e.structured=Zt(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function Ke(i,t,e){let r=y(i,e);return r===void 0&&(r=t[e]),r}function Fi(i,t,e,r){const o={indexSplices:r};Xt&&!i._overrideLegacyUndefined&&(t.splices=o),i.notifyPath(e+".splices",o),i.notifyPath(e+".length",t.length),Xt&&!i._overrideLegacyUndefined&&(o.indexSplices=[])}function Z(i,t,e,r,o,s){Fi(i,t,e,[{index:r,addedCount:o,removed:s,object:t,type:"splice"}])}function vs(i){return i[0].toUpperCase()+i.substring(1)}const we=g(i=>{const t=Rr(Or(i));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return f}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Q.length){let o=Q[Q.length-1];o._enqueueClient(this),this.__dataHost=o}}_initializeProtoProperties(o){this.__data=Object.create(o),this.__dataPending=Object.create(o),this.__dataOld={}}_initializeInstanceProperties(o){let s=this[f.READ_ONLY];for(let n in o)(!s||!s[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=o[n])}_addPropertyEffect(o,s,n){this._createPropertyAccessor(o,s==f.READ_ONLY);let a=Bt(this,s,!0)[o];a||(a=this[s][o]=[]),a.push(n)}_removePropertyEffect(o,s,n){let a=Bt(this,s,!0)[o],l=a.indexOf(n);l>=0&&a.splice(l,1)}_hasPropertyEffect(o,s){let n=this[s];return Boolean(n&&n[o])}_hasReadOnlyEffect(o){return this._hasPropertyEffect(o,f.READ_ONLY)}_hasNotifyEffect(o){return this._hasPropertyEffect(o,f.NOTIFY)}_hasReflectEffect(o){return this._hasPropertyEffect(o,f.REFLECT)}_hasComputedEffect(o){return this._hasPropertyEffect(o,f.COMPUTE)}_setPendingPropertyOrPath(o,s,n,a){if(a||F(Array.isArray(o)?o[0]:o)!==o){if(!a){let l=y(this,o);if(o=Be(this,o,s),!o||!super._shouldPropertyChange(o,s,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(o,s,n))return Jr(this,o,s),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[o])return this._setPendingProperty(o,s,n);this[o]=s}return!1}_setUnmanagedPropertyToNode(o,s,n){(n!==o[s]||typeof n=="object")&&(s==="className"&&(o=v(o)),o[s]=n)}_setPendingProperty(o,s,n){let a=this.__dataHasPaths&&Zt(o),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(o,s,l[o])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),o in this.__dataOld||(this.__dataOld[o]=this.__data[o]),a?this.__dataTemp[o]=s:this.__data[o]=s,this.__dataPending[o]=s,(a||this[f.NOTIFY]&&this[f.NOTIFY][o])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[o]=n),!0):!1}_setProperty(o,s){this._setPendingProperty(o,s,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(o){this.__dataPendingClients=this.__dataPendingClients||[],o!==this&&this.__dataPendingClients.push(o)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let o=this.__dataPendingClients;if(o){this.__dataPendingClients=null;for(let s=0;s<o.length;s++){let n=o[s];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(o,s){for(let n in o)(s||!this[f.READ_ONLY]||!this[f.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,o[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(o,s,n){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Yr(this,s,n,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(s,n,a),this._flushClients(),lt(this,this[f.REFLECT],s,n,a),lt(this,this[f.OBSERVE],s,n,a),l&&Vr(this,l,s,n,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(o,s,n){this[f.PROPAGATE]&&lt(this,this[f.PROPAGATE],o,s,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,o,s,n)}_runEffectsForTemplate(o,s,n,a){const l=(d,c)=>{lt(this,o.propertyEffects,d,n,c,o.nodeList);for(let h=o.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,d,n,c)};o.runEffects?o.runEffects(l,s,a):l(s,a)}linkPaths(o,s){o=at(o),s=at(s),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[o]=s}unlinkPaths(o){o=at(o),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[o]}notifySplices(o,s){let n={path:""},a=y(this,o,n);Fi(this,a,n.path,s)}get(o,s){return y(s||this,o)}set(o,s,n){n?Be(n,o,s):(!this[f.READ_ONLY]||!this[f.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,s,!0)&&this._invalidateProperties()}push(o,...s){let n={path:""},a=y(this,o,n),l=a.length,d=a.push(...s);return s.length&&Z(this,a,n.path,l,s.length,[]),d}pop(o){let s={path:""},n=y(this,o,s),a=Boolean(n.length),l=n.pop();return a&&Z(this,n,s.path,n.length,0,[l]),l}splice(o,s,n,...a){let l={path:""},d=y(this,o,l);s<0?s=d.length-Math.floor(-s):s&&(s=Math.floor(s));let c;return arguments.length===2?c=d.splice(s):c=d.splice(s,n,...a),(a.length||c.length)&&Z(this,d,l.path,s,a.length,c),c}shift(o){let s={path:""},n=y(this,o,s),a=Boolean(n.length),l=n.shift();return a&&Z(this,n,s.path,0,0,[l]),l}unshift(o,...s){let n={path:""},a=y(this,o,n),l=a.unshift(...s);return s.length&&Z(this,a,n.path,0,s.length,[]),l}notifyPath(o,s){let n;if(arguments.length==1){let a={path:""};s=y(this,o,a),n=a.path}else Array.isArray(o)?n=at(o):n=o;this._setPendingPropertyOrPath(n,s,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(o,s){this._addPropertyEffect(o,f.READ_ONLY),s&&(this["_set"+vs(o)]=function(n){this._setProperty(o,n)})}_createPropertyObserver(o,s,n){let a={property:o,method:s,dynamicFn:Boolean(n)};this._addPropertyEffect(o,f.OBSERVE,{fn:$e,info:a,trigger:{name:o}}),n&&this._addPropertyEffect(s,f.OBSERVE,{fn:$e,info:a,trigger:{name:s}})}_createMethodObserver(o,s){let n=Ut(o);if(!n)throw new Error("Malformed observer expression '"+o+"'");qe(this,n,f.OBSERVE,te,null,s)}_createNotifyingProperty(o){this._addPropertyEffect(o,f.NOTIFY,{fn:$r,info:{eventName:Dt(o)+"-changed",property:o}})}_createReflectedProperty(o){let s=this.constructor.attributeNameForProperty(o);s[0]==="-"?console.warn("Property "+o+" cannot be reflected to attribute "+s+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(o,f.REFLECT,{fn:qr,info:{attrName:s}})}_createComputedProperty(o,s,n){let a=Ut(s);if(!a)throw new Error("Malformed computed expression '"+s+"'");const l=qe(this,a,f.COMPUTE,Di,o,n);Bt(this,Ni)[o]=l}_marshalArgs(o,s,n){const a=this.__data,l=[];for(let d=0,c=o.length;d<c;d++){let{name:h,structured:u,wildcard:p,value:_,literal:A}=o[d];if(!A)if(p){const E=ht(h,s),w=Ke(a,n,E?s:h);_={path:E?s:h,value:w,base:E?y(a,h):w}}else _=u?Ke(a,n,h):a[h];if(Xt&&!this._overrideLegacyUndefined&&_===void 0&&o.length>1)return pt;l[d]=_}return l}static addPropertyEffect(o,s,n){this.prototype._addPropertyEffect(o,s,n)}static createPropertyObserver(o,s,n){this.prototype._createPropertyObserver(o,s,n)}static createMethodObserver(o,s){this.prototype._createMethodObserver(o,s)}static createNotifyingProperty(o){this.prototype._createNotifyingProperty(o)}static createReadOnlyProperty(o,s){this.prototype._createReadOnlyProperty(o,s)}static createReflectedProperty(o){this.prototype._createReflectedProperty(o)}static createComputedProperty(o,s,n){this.prototype._createComputedProperty(o,s,n)}static bindTemplate(o){return this.prototype._bindTemplate(o)}_bindTemplate(o,s){let n=this.constructor._parseTemplate(o),a=this.__preBoundTemplateInfo==n;if(!a)for(let l in n.propertyEffects)this._createPropertyAccessor(l);if(s)if(n=Object.create(n),n.wasPreBound=a,!this.__templateInfo)this.__templateInfo=n;else{const l=o._parentTemplateInfo||this.__templateInfo,d=l.lastChild;n.parent=l,l.lastChild=n,n.previousSibling=d,d?d.nextSibling=n:l.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(o,s,n){let a=o.hostProps=o.hostProps||{};a[s]=!0;let l=o.propertyEffects=o.propertyEffects||{};(l[s]=l[s]||[]).push(n)}_stampTemplate(o,s){s=s||this._bindTemplate(o,!0),Q.push(this);let n=super._stampTemplate(o,s);if(Q.pop(),s.nodeList=n.nodeList,!s.wasPreBound){let a=s.childNodes=[];for(let l=n.firstChild;l;l=l.nextSibling)a.push(l)}return n.templateInfo=s,is(this,s),this.__dataClientsReady&&(this._runEffectsForTemplate(s,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(o){const s=o.templateInfo,{previousSibling:n,nextSibling:a,parent:l}=s;n?n.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=n:l&&(l.lastChild=n),s.nextSibling=s.previousSibling=null;let d=s.childNodes;for(let c=0;c<d.length;c++){let h=d[c];v(v(h).parentNode).removeChild(h)}}static _parseTemplateNode(o,s,n){let a=t._parseTemplateNode.call(this,o,s,n);if(o.nodeType===Node.TEXT_NODE){let l=this._parseBindings(o.textContent,s);l&&(o.textContent=Ge(l)||" ",Vt(this,s,n,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(o,s,n,a,l){let d=this._parseBindings(l,s);if(d){let c=a,h="property";Fr.test(a)?h="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),h="attribute");let u=Ge(d);return u&&h=="attribute"&&(a=="class"&&o.hasAttribute("class")&&(u+=" "+o.getAttribute(a)),o.setAttribute(a,u)),h=="attribute"&&c=="disable-upgrade$"&&o.setAttribute(a,""),o.localName==="input"&&c==="value"&&o.setAttribute(c,""),o.removeAttribute(c),h==="property"&&(a=Ti(a)),Vt(this,s,n,h,a,d,u),!0}else return t._parseTemplateNodeAttribute.call(this,o,s,n,a,l)}static _parseTemplateNestedTemplate(o,s,n){let a=t._parseTemplateNestedTemplate.call(this,o,s,n);const l=o.parentNode,d=n.templateInfo,c=l.localName==="dom-if",h=l.localName==="dom-repeat";Ie&&(c||h)&&(l.removeChild(o),n=n.parentInfo,n.templateInfo=d,n.noted=!0,a=!1);let u=d.hostProps;if(lr&&c)u&&(s.hostProps=Object.assign(s.hostProps||{},u),Ie||(n.parentInfo.noted=!0));else{let p="{";for(let _ in u){let A=[{mode:p,source:_,dependencies:[_],hostProp:!0}];Vt(this,s,n,"property","_host_"+_,A)}}return a}static _parseBindings(o,s){let n=[],a=0,l;for(;(l=We.exec(o))!==null;){l.index>a&&n.push({literal:o.slice(a,l.index)});let d=l[1][0],c=Boolean(l[2]),h=l[3].trim(),u=!1,p="",_=-1;d=="{"&&(_=h.indexOf("::"))>0&&(p=h.substring(_+2),h=h.substring(0,_),u=!0);let A=Ut(h),E=[];if(A){let{args:w,methodName:C}=A;for(let Rt=0;Rt<w.length;Rt++){let Ne=w[Rt];Ne.literal||E.push(Ne)}let U=s.dynamicFns;(U&&U[C]||A.static)&&(E.push(C),A.dynamicFn=!0)}else E.push(h);n.push({source:h,mode:d,negate:c,customEvent:u,signature:A,dependencies:E,event:p}),a=We.lastIndex}if(a&&a<o.length){let d=o.substring(a);d&&n.push({literal:d})}return n.length?n:null}static _evaluateBinding(o,s,n,a,l,d){let c;return s.signature?c=te(o,n,a,l,s.signature):n!=s.source?c=y(o,s.source):d&&Zt(n)?c=y(o,n):c=o.__data[n],s.negate&&(c=!c),c}}return e}),Q=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function $a(i){}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function bs(i){const t={};for(let e in i){const r=i[e];t[e]=typeof r=="function"?{type:r}:r}return t}const ys=g(i=>{const t=ki(i);function e(s){const n=Object.getPrototypeOf(s);return n.prototype instanceof o?n:null}function r(s){if(!s.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",s))){let n=null;if(s.hasOwnProperty(JSCompiler_renameProperty("properties",s))){const a=s.properties;a&&(n=bs(a))}s.__ownProperties=n}return s.__ownProperties}class o extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const n=this._properties;this.__observedAttributes=n?Object.keys(n).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const n=e(this);n&&n.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const n=r(this);n&&this.createProperties(n)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const n=e(this);this.__properties=Object.assign({},n&&n._properties,r(this))}return this.__properties}static typeForProperty(n){const a=this._properties[n];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const ws="3.5.1",Je=window.ShadyCSS&&window.ShadyCSS.cssBuild,Cs=g(i=>{const t=ys(we(i));function e(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let h=d[c];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=h)}}return l.__propertyDefaults}function r(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function o(l,d,c,h){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,h)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,h[c.observer]),l._addPropertyToAttributeMap(d)}function s(l,d,c,h){if(!Je){const u=d.content.querySelectorAll("style"),p=It(d),_=mr(c),A=d.content.firstElementChild;for(let w=0;w<_.length;w++){let C=_[w];C.textContent=l._processStyleText(C.textContent,h),d.content.insertBefore(C,A)}let E=0;for(let w=0;w<p.length;w++){let C=p[w],U=u[E];U!==C?(C=C.cloneNode(!0),U.parentNode.insertBefore(C,U)):E++,C.textContent=l._processStyleText(C.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),dr&&Je&&tr){const u=d.content.querySelectorAll("style");if(u){let p="";Array.from(u).forEach(_=>{p+=_.textContent,_.parentNode.removeChild(_)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function n(l){let d=null;if(l&&(!Pt||ir)&&(d=K.import(l,"template"),Pt&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends t{static get polymerElementVersion(){return ws}static _finalizeClass(){t._finalizeClass.call(this);const d=r(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):or||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)o(this.prototype,c,d[c],d)}static createObservers(d,c){const h=this.prototype;for(let u=0;u<d.length;u++)h._createMethodObserver(d[u],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&n(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=me(d.url);else{const c=K.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=er,this.importPath=this.constructor.importPath;let d=e(this.constructor);if(!!d)for(let c in d){let h=d[c];if(this._canApplyPropertyDefault(c)){let u=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(c)?this._setPendingProperty(c,u,!0):this[c]=u}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return _e(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const h=this.importPath,u=h?dt(h):"";s(this,c,d,u),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=v(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),rr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=dt(this.importPath)),dt(d,c)}static _parseTemplateContent(d,c,h){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,c,h)}static _addTemplatePropertyEffect(d,c,h){return xi&&!(c in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,c,h)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xe=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:i=>i});class Bi{constructor(t,e){Ui(t,e);const r=e.reduce((o,s,n)=>o+Vi(s)+t[n+1],t[0]);this.value=r.toString()}toString(){return this.value}}function Vi(i){if(i instanceof Bi)return i.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${i}`)}function xs(i){if(i instanceof HTMLTemplateElement)return i.innerHTML;if(i instanceof Bi)return Vi(i);throw new Error(`non-template value passed to Polymer's html function: ${i}`)}const S=function(t,...e){Ui(t,e);const r=document.createElement("template");let o=e.reduce((s,n,a)=>s+xs(n)+t[a+1],t[0]);return Xe&&(o=Xe.createHTML(o)),r.innerHTML=o,r},Ui=(i,t)=>{if(!Array.isArray(i)||!Array.isArray(i.raw)||t.length!==i.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const z=Cs(HTMLElement),As=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,At=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Es(){function i(){return!0}return $i(i)}function Ps(){try{return Ts()?!0:Os()?At?!Ss():!Es():!1}catch{return!1}}function Ts(){return localStorage.getItem("vaadin.developmentmode.force")}function Os(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ss(){return!!(At&&Object.keys(At).map(t=>At[t]).filter(t=>t.productionMode).length>0)}function $i(i,t){if(typeof i!="function")return;const e=As.exec(i.toString());if(e)try{i=new Function(e[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return i(t)}window.Vaadin=window.Vaadin||{};const Ze=function(i,t){if(window.Vaadin.developmentMode)return $i(i,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ps());function zs(){}const ks=function(){if(typeof Ze=="function")return Ze(zs)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Qe=0,ji=0;const q=[];let ti=0,ee=!1;const qi=document.createTextNode("");new window.MutationObserver(Ms).observe(qi,{characterData:!0});function Ms(){ee=!1;const i=q.length;for(let t=0;t<i;t++){const e=q[t];if(e)try{e()}catch(r){setTimeout(()=>{throw r})}}q.splice(0,i),ji+=i}const Yi={after(i){return{run(t){return window.setTimeout(t,i)},cancel(t){window.clearTimeout(t)}}},run(i,t){return window.setTimeout(i,t)},cancel(i){window.clearTimeout(i)}},Ls={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},Ns={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},Is={run(i){ee||(ee=!0,qi.textContent=ti,ti+=1),q.push(i);const t=Qe;return Qe+=1,t},cancel(i){const t=i-ji;if(t>=0){if(!q[t])throw new Error(`invalid async handle: ${i}`);q[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class H{static debounce(t,e,r){return t instanceof H?t._cancelAsync():t=new H,t.setConfig(e,r),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,ft.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ft.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}let ft=new Set;function Ds(i){ft.add(i)}function Hs(){const i=Boolean(ft.size);return ft.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),i}const ja=()=>{let i;do i=Hs();while(i)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $t{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,r){const{scrollLeft:o}=r;if(e!=="rtl"||!t)return o;switch(t){case"negative":return r.scrollWidth-r.clientWidth+o;case"reverse":return r.scrollWidth-r.clientWidth-o;default:return o}}static setNormalizedScrollLeft(t,e,r,o){if(e!=="rtl"||!t){r.scrollLeft=o;return}switch(t){case"negative":r.scrollLeft=r.clientWidth-r.scrollWidth+o;break;case"reverse":r.scrollLeft=r.scrollWidth-r.clientWidth-o;break;default:r.scrollLeft=o;break}}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const P=[];function Rs(){const i=oe();P.forEach(t=>{ie(t,i)})}let Ct;const Fs=new MutationObserver(Rs);Fs.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function ie(i,t,e=i.getAttribute("dir")){t?i.setAttribute("dir",t):e!=null&&i.removeAttribute("dir")}function oe(){return document.documentElement.getAttribute("dir")}const Ce=i=>class extends i{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}static finalize(){super.finalize(),Ct||(Ct=$t.detectScrollType())}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),ie(this,oe(),null))}attributeChangedCallback(e,r,o){if(super.attributeChangedCallback(e,r,o),e!=="dir")return;const s=oe(),n=o===s&&P.indexOf(this)===-1,a=!o&&r&&P.indexOf(this)===-1;n||a?(this.__subscribe(),ie(this,s,o)):o!==s&&r===s&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=P.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,r,o){o==="dir"&&r===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,r,o)}_attributeToProperty(e,r,o){e==="dir"&&!r?this.dir="":super._attributeToProperty(e,r,o)}__subscribe(){P.includes(this)||P.push(this)}__unsubscribe(){P.includes(this)&&P.splice(P.indexOf(this),1)}__getNormalizedScrollLeft(e){return $t.getNormalizedScrollLeft(Ct,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,r){return $t.setNormalizedScrollLeft(Ct,this.getAttribute("dir")||"ltr",e,r)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ar(!1);window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){ks()};let jt;const ei=new Set,B=i=>class extends Ce(i){static get version(){return"23.3.5"}static finalize(){super.finalize();const{is:e}=this;e&&!ei.has(e)&&(window.Vaadin.registrations.push(this),ei.add(e),window.Vaadin.developmentModeCallback&&(jt=H.debounce(jt,Ns,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Ds(jt)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ii extends B(R(z)){static get template(){return S`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}customElements.define(ii.is,ii);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bs=m`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,Wi=document.createElement("template");Wi.innerHTML=`<style>${Bs.toString().replace(":host","html")}</style>`;document.head.appendChild(Wi.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gi=document.createElement("template");Gi.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild(Gi.content);var Vs=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,xe=(i,t,e,r)=>{for(var o=r>1?void 0:r?Us(t,e):t,s=i.length-1,n;s>=0;s--)(n=i[s])&&(o=(r?n(t,e,o):n(o))||o);return r&&o&&Vs(t,e,o),o};let $s=0,_t=class extends Lt{constructor(){super(...arguments),this.collapsible=!1,this.collapsed=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","navigation")}render(){const i=this.querySelector('[slot="label"]');return i&&this.collapsible?ct`
        <details ?open="${!this.collapsed}" @toggle="${this.toggleCollapsed}">${this.renderBody(i)}</details>
      `:this.renderBody(i)}renderBody(i){return i?(i.id||(i.id="app-nav-label-"+$s++),this.setAttribute("aria-labelledby",i.id)):this.removeAttribute("aria-labelledby"),ct`
      <summary part="label" ?hidden="${i==null}">
        <slot name="label" @slotchange="${()=>this.requestUpdate()}"></slot>
      </summary>
      <slot role="list"></slot>
    `}toggleCollapsed(i){this.collapsed=!i.target.open}};_t.styles=m`
    :host {
      display: block;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 500;
      line-height: var(--lumo-line-height-xs);
      color: var(--lumo-body-text-color);
      -webkit-tap-highlight-color: transparent;
    }

    [hidden] {
      display: none !important;
    }

    summary {
      cursor: var(--lumo-clickable-cursor, default);
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: var(--lumo-border-radius-m);
    }

    summary ::slotted([slot='label']) {
      display: block;
      font-size: var(--lumo-font-size-s);
      color: var(--lumo-secondary-text-color);
      margin: var(--lumo-space-s);
      border-radius: inherit;
    }

    summary::-webkit-details-marker {
      display: none;
    }

    summary::marker {
      content: '';
    }

    summary::after {
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--lumo-size-s);
      height: var(--lumo-size-s);
      transition: transform 140ms;
      margin: 0 var(--lumo-space-xs);
    }

    :host([collapsible]) summary::after {
      content: var(--lumo-icons-dropdown);
    }

    @media (any-hover: hover) {
      summary:hover::after {
        color: var(--lumo-body-text-color);
      }
    }

    :host([collapsed]) summary::after {
      transform: rotate(-90deg);
    }

    @supports selector(:focus-visible) {
      summary {
        outline: none;
      }

      summary:focus-visible {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }
    }

    slot {
      /* Needed to make role="list" work */
      display: block;
    }
  `;xe([mt({type:Boolean,reflect:!0})],_t.prototype,"collapsible",2);xe([mt({type:Boolean,reflect:!0})],_t.prototype,"collapsed",2);_t=xe([Nt("vcf-nav")],_t);var js=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,J=(i,t,e,r)=>{for(var o=r>1?void 0:r?qs(t,e):t,s=i.length-1,n;s>=0;s--)(n=i[s])&&(o=(r?n(t,e,o):n(o))||o);return r&&o&&js(t,e,o),o};let M=class extends Lt{constructor(){super(...arguments),this.path="",this.expanded=!1,this.active=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem"),this._updateActive(),this.__boundUpdateActive=this._updateActive.bind(this),window.addEventListener("popstate",this.__boundUpdateActive)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.__boundUpdateActive)}render(){return ct`
      <a href="${this.path}" part="item" aria-current="${this.active?"page":!1}">
        <slot name="prefix"></slot>
        <slot></slot>
        <slot name="suffix"></slot>
        <button
          part="toggle-button"
          @click="${this.toggleExpanded}"
          ?hidden="${!this.querySelector("[slot=children]")}"
          aria-controls="children"
          aria-expanded="${this.expanded}"
          aria-label="Toggle child items"></button>
      </a>
      <slot name="children" role="list" part="children" id="children" ?hidden="${!this.expanded}"></slot>
    `}toggleExpanded(i){i.preventDefault(),i.stopPropagation(),this.expanded=!this.expanded}_updateActive(){const i=document.baseURI!=document.location.href,t=this.path.startsWith("/");if(i&&!t){const e=document.location.pathname,r=new URL(document.baseURI).pathname,o=e.substring(r.length),s=r!==e&&e.startsWith(r)?o:e;this.active=s===this.path}else this.active=document.location.pathname==this.path;this.toggleAttribute("child-active",document.location.pathname.startsWith(this.path)),this.active&&(this.expanded=!0)}};M.styles=m`
    :host {
      display: block;
    }

    [hidden] {
      display: none !important;
    }

    a {
      flex: auto;
      min-width: 0;
      display: flex;
      align-items: center;
      gap: var(--lumo-space-xs);
      text-decoration: none;
      color: inherit;
      font: inherit;
      padding: var(--lumo-space-s);
      padding-inline-start: calc(var(--lumo-space-s) + var(--_child-indent, 0px));
      transition: color 140ms;
      border-radius: var(--lumo-border-radius-m);
      transition: background-color 140ms, color 140ms;
      cursor: var(--lumo-clickable-cursor, default);
      min-height: var(--lumo-icon-size-m);
    }

    button {
      -webkit-appearance: none;
      appearance: none;
      border: 0;
      margin: calc((var(--lumo-icon-size-m) - var(--lumo-size-s)) / 2) 0;
      margin-inline-end: calc(var(--lumo-space-xs) * -1);
      padding: 0;
      background: transparent;
      font: inherit;
      color: var(--lumo-tertiary-text-color);
      flex: none;
      width: var(--lumo-size-s);
      height: var(--lumo-size-s);
      cursor: var(--lumo-clickable-cursor, default);
      transition: color 140ms;
    }

    :host(:not([path])) a {
      position: relative;
    }

    :host(:not([path])) button::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    @media (any-hover: hover) {
      a:hover {
        color: var(--lumo-header-text-color);
      }

      button:hover {
        color: var(--lumo-body-text-color);
      }
    }

    a:active:focus {
      background-color: var(--lumo-contrast-5pct);
    }

    button::before {
      font-family: lumo-icons;
      content: var(--lumo-icons-dropdown);
      font-size: 1.5em;
      line-height: var(--lumo-size-s);
      display: inline-block;
      transform: rotate(-90deg);
      transition: transform 140ms;
    }

    :host([expanded]) button::before {
      transform: none;
    }

    @supports selector(:focus-visible) {
      a,
      button {
        outline: none;
      }

      a:focus-visible,
      button:focus-visible {
        border-radius: var(--lumo-border-radius-m);
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }
    }

    a:active {
      color: var(--lumo-header-text-color);
    }

    slot[name='prefix'],
    slot[name='suffix'] {
      flex: none;
    }

    slot:not([name]) {
      display: block;
      flex: auto;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0 var(--lumo-space-xs);
    }

    slot[name='prefix']::slotted(:is(vaadin-icon, [class*='icon'])) {
      color: var(--lumo-contrast-60pct);
      font-size: var(--lumo-icon-size-s);
      min-width: 1em;
      min-height: 1em;
    }

    :host([active]) slot[name='prefix']::slotted(:is(vaadin-icon, [class*='icon'])) {
      color: inherit;
    }

    slot[name='children'] {
      --_child-indent: calc(var(--_child-indent-2, 0px) + var(--vcf-nav-child-indent, var(--lumo-space-l)));
    }

    slot[name='children']::slotted(*) {
      --_child-indent-2: var(--_child-indent);
    }

    slot[name='children'] {
      /* Needed to make role="list" work */
      display: block;
      width: 100%;
    }

    :host([active]) a {
      color: var(--lumo-primary-text-color);
      background-color: var(--lumo-primary-color-10pct);
    }
  `;J([mt()],M.prototype,"path",2);J([mt({type:Boolean,reflect:!0})],M.prototype,"expanded",2);J([mt({type:Boolean,reflect:!0})],M.prototype,"active",2);J([Ci("button")],M.prototype,"button",2);J([Ci("#children")],M.prototype,"childrenSlot",2);M=J([Nt("vcf-nav-item")],M);b("vaadin-app-layout",m`
    [part='navbar']::before {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    }

    :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
      border-right: 1px solid var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']:not([overlay])) [part='drawer'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
    }

    [part='navbar']::before,
    :host([overlay]) [part='drawer']::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    :host([overlay]) [part='drawer']::before {
      background: var(--lumo-base-color);
      height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
    }

    [part='backdrop'] {
      background-color: var(--lumo-shade-20pct);
      opacity: 1;
    }

    [part] ::slotted(h2),
    [part] ::slotted(h3),
    [part] ::slotted(h4) {
      margin-top: var(--lumo-space-xs) !important;
      margin-bottom: var(--lumo-space-xs) !important;
    }

    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
      [part='navbar']::before {
        opacity: 0.8;
      }

      [part='navbar'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }

      :host([overlay]) [part='drawer']::before {
        opacity: 0.9;
      }

      :host([overlay]) [part='drawer'] {
        -webkit-backdrop-filter: blur(24px);
        backdrop-filter: blur(24px);
      }
    }
  `,{moduleId:"lumo-app-layout"});const Ki=document.createElement("template");Ki.innerHTML=`
  <style>
    /* Use units so that the values can be used in calc() */
    html {
      --safe-area-inset-top: env(safe-area-inset-top, 0px);
      --safe-area-inset-right: env(safe-area-inset-right, 0px);
      --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
      --safe-area-inset-left: env(safe-area-inset-left, 0px);
    }
  </style>
`;document.head.appendChild(Ki.content);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ht=i=>i.test(navigator.userAgent),re=i=>i.test(navigator.platform),Ys=i=>i.test(navigator.vendor),Wa=Ht(/Android/),Ga=Ht(/Chrome/)&&Ys(/Google Inc/),Ka=Ht(/Firefox/),Ws=re(/^iPad/)||re(/^Mac/)&&navigator.maxTouchPoints>1,Gs=re(/^iPhone/),Ji=Gs||Ws,Ja=Ht(/^((?!chrome|android).)*safari/i),Xa=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Xi(){if(Ji){const i=window.innerHeight,e=window.innerWidth>i,r=document.documentElement.clientHeight;e&&r>i?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",`${r-i}px`):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}}Xi();window.addEventListener("resize",Xi);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function tt(i,t,e){return{index:i,removed:t,addedCount:e}}const Zi=0,Qi=1,se=2,ne=3;function Ks(i,t,e,r,o,s){let n=s-o+1,a=e-t+1,l=new Array(n);for(let d=0;d<n;d++)l[d]=new Array(a),l[d][0]=d;for(let d=0;d<a;d++)l[0][d]=d;for(let d=1;d<n;d++)for(let c=1;c<a;c++)if(Ae(i[t+c-1],r[o+d-1]))l[d][c]=l[d-1][c-1];else{let h=l[d-1][c]+1,u=l[d][c-1]+1;l[d][c]=h<u?h:u}return l}function Js(i){let t=i.length-1,e=i[0].length-1,r=i[t][e],o=[];for(;t>0||e>0;){if(t==0){o.push(se),e--;continue}if(e==0){o.push(ne),t--;continue}let s=i[t-1][e-1],n=i[t-1][e],a=i[t][e-1],l;n<a?l=n<s?n:s:l=a<s?a:s,l==s?(s==r?o.push(Zi):(o.push(Qi),r=s),t--,e--):l==n?(o.push(ne),t--,r=n):(o.push(se),e--,r=a)}return o.reverse(),o}function Xs(i,t,e,r,o,s){let n=0,a=0,l,d=Math.min(e-t,s-o);if(t==0&&o==0&&(n=Zs(i,r,d)),e==i.length&&s==r.length&&(a=Qs(i,r,d-n)),t+=n,o+=n,e-=a,s-=a,e-t==0&&s-o==0)return[];if(t==e){for(l=tt(t,[],0);o<s;)l.removed.push(r[o++]);return[l]}else if(o==s)return[tt(t,[],e-t)];let c=Js(Ks(i,t,e,r,o,s));l=void 0;let h=[],u=t,p=o;for(let _=0;_<c.length;_++)switch(c[_]){case Zi:l&&(h.push(l),l=void 0),u++,p++;break;case Qi:l||(l=tt(u,[],0)),l.addedCount++,u++,l.removed.push(r[p]),p++;break;case se:l||(l=tt(u,[],0)),l.addedCount++,u++;break;case ne:l||(l=tt(u,[],0)),l.removed.push(r[p]),p++;break}return l&&h.push(l),h}function Zs(i,t,e){for(let r=0;r<e;r++)if(!Ae(i[r],t[r]))return r;return e}function Qs(i,t,e){let r=i.length,o=t.length,s=0;for(;s<e&&Ae(i[--r],t[--o]);)s++;return s}function tn(i,t){return Xs(i,0,i.length,t,0,t.length)}function Ae(i,t){return i===t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function $(i){return i.localName==="slot"}let I=class{static getFlattenedNodes(i){const t=v(i);return $(i)?(i=i,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>$(e)?(e=e,v(e).assignedNodes({flatten:!0})):[e]).reduce((e,r)=>e.concat(r),[])}constructor(i,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=i,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){$(this._target)?this._listenSlots([this._target]):v(this._target).children&&(this._listenSlots(v(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,i=>{this._processMutations(i)}):(this._nativeChildrenObserver=new MutationObserver(i=>{this._processMutations(i)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){$(this._target)?this._unlistenSlots([this._target]):v(this._target).children&&(this._unlistenSlots(v(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,zi.run(()=>this.flush()))}_processMutations(i){this._processSlotMutations(i),this.flush()}_processSlotMutations(i){if(i)for(let t=0;t<i.length;t++){let e=i[t];e.addedNodes&&this._listenSlots(e.addedNodes),e.removedNodes&&this._unlistenSlots(e.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let i={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),e=tn(t,this._effectiveNodes);for(let o=0,s;o<e.length&&(s=e[o]);o++)for(let n=0,a;n<s.removed.length&&(a=s.removed[n]);n++)i.removedNodes.push(a);for(let o=0,s;o<e.length&&(s=e[o]);o++)for(let n=s.index;n<s.index+s.addedCount;n++)i.addedNodes.push(t[n]);this._effectiveNodes=t;let r=!1;return(i.addedNodes.length||i.removedNodes.length)&&(r=!0,this.callback.call(this._target,i)),r}_listenSlots(i){for(let t=0;t<i.length;t++){let e=i[t];$(e)&&e.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(i){for(let t=0;t<i.length;t++){let e=i[t];$(e)&&e.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let St=!1,to=[],eo=[];function io(){St=!0,requestAnimationFrame(function(){St=!1,en(to),setTimeout(function(){on(eo)})})}function en(i){for(;i.length;)oo(i.shift())}function on(i){for(let t=0,e=i.length;t<e;t++)oo(i.shift())}function oo(i){const t=i[0],e=i[1],r=i[2];try{e.apply(t,r)}catch(o){setTimeout(()=>{throw o})}}function rn(i,t,e){St||io(),to.push([i,t,e])}function ro(i,t,e){St||io(),eo.push([i,t,e])}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const X=g(i=>class extends i{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Ee=!1;window.addEventListener("keydown",()=>{Ee=!0},{capture:!0});window.addEventListener("mousedown",()=>{Ee=!1},{capture:!0});function so(){return Ee}function no(i){const t=i.style;if(t.visibility==="hidden"||t.display==="none")return!0;const e=window.getComputedStyle(i);return e.visibility==="hidden"||e.display==="none"}function sn(i){if(!ln(i))return-1;const t=i.getAttribute("tabindex")||0;return Number(t)}function nn(i,t){const e=Math.max(i.tabIndex,0),r=Math.max(t.tabIndex,0);return e===0||r===0?r>e:e>r}function an(i,t){const e=[];for(;i.length>0&&t.length>0;)nn(i[0],t[0])?e.push(t.shift()):e.push(i.shift());return e.concat(i,t)}function ae(i){const t=i.length;if(t<2)return i;const e=Math.ceil(t/2),r=ae(i.slice(0,e)),o=ae(i.slice(e));return an(r,o)}function ao(i,t){if(i.nodeType!==Node.ELEMENT_NODE||no(i))return!1;const e=i,r=sn(e);let o=r>0;r>=0&&t.push(e);let s=[];return e.localName==="slot"?s=e.assignedNodes({flatten:!0}):s=(e.shadowRoot||e).children,[...s].forEach(n=>{o=ao(n,t)||o}),o}function Qa(i){return i.offsetParent===null?!0:no(i)}function ln(i){return i.matches('[tabindex="-1"]')?!1:i.matches("input, select, textarea, button, object")?i.matches(":not([disabled])"):i.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function dn(i){return i.getRootNode().activeElement===i}function cn(i){const t=[];return ao(i,t)?ae(t):t}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qt=[];class lo{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");qt.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,qt.pop()}__onKeyDown(t){if(!!this.__trapNode&&this===Array.from(qt).pop()&&t.key==="Tab"){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,r=t?-1:1,o=this.__focusedElementIndex,s=(e.length+o+r)%e.length,n=e[s];n.focus(),n.localName==="input"&&n.select()}get __focusableElements(){return cn(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(dn).pop())}}/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class oi extends B(R(X(z))){static get template(){return S`
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          height: 100%;
          --vaadin-app-layout-transition: 200ms;
          transition: padding var(--vaadin-app-layout-transition);
          --vaadin-app-layout-touch-optimized: false;
          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
          padding-top: var(--vaadin-app-layout-navbar-offset-top);
          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
          padding-left: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([dir='rtl']) {
          padding-left: 0;
          padding-right: var(--vaadin-app-layout-navbar-offset-left);
        }

        :host([hidden]),
        [hidden] {
          display: none !important;
        }

        :host([no-anim]) {
          --vaadin-app-layout-transition: none !important;
        }

        :host([drawer-opened]) {
          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
        }

        :host([overlay]) {
          --vaadin-app-layout-drawer-offset-left: 0;
          --vaadin-app-layout-navbar-offset-left: 0;
        }

        :host(:not([no-scroll])) [content] {
          overflow: auto;
        }

        [content] {
          height: 100%;
        }

        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
          :host {
            --vaadin-app-layout-touch-optimized: true;
          }
        }

        [part='navbar'],
        [part='navbar']::before {
          position: fixed;
          display: flex;
          align-items: center;
          top: 0;
          right: 0;
          left: 0;
          transition: left var(--vaadin-app-layout-transition);
          padding-top: var(--safe-area-inset-top);
          padding-left: var(--safe-area-inset-left);
          padding-right: var(--safe-area-inset-right);
          z-index: 1;
        }

        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          left: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {
          right: var(--vaadin-app-layout-drawer-offset-left, 0);
        }

        :host([primary-section='drawer']) [part='drawer'] {
          top: 0;
        }

        [part='navbar'][bottom] {
          top: auto;
          bottom: 0;
          padding-bottom: var(--safe-area-inset-bottom);
        }

        [part='drawer'] {
          overflow: auto;
          position: fixed;
          top: var(--vaadin-app-layout-navbar-offset-top, 0);
          right: auto;
          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
          left: var(--vaadin-app-layout-navbar-offset-left, 0);
          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);
          transform: translateX(-100%);
          max-width: 90%;
          width: 16em;
          box-sizing: border-box;
          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
          outline: none;
          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */
          visibility: hidden;
        }

        :host([drawer-opened]) [part='drawer'] {
          /* The drawer should be accessible by the tabbing navigation when it is opened. */
          visibility: visible;
          transform: translateX(0%);
          touch-action: manipulation;
        }

        [part='backdrop'] {
          background-color: #000;
          opacity: 0.3;
        }

        :host(:not([drawer-opened])) [part='backdrop'] {
          opacity: 0;
        }

        :host([overlay]) [part='backdrop'] {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          transition: opacity var(--vaadin-app-layout-transition);
          -webkit-tap-highlight-color: transparent;
        }

        :host([overlay]) [part='drawer'] {
          top: 0;
          bottom: 0;
        }

        :host([overlay]) [part='drawer'],
        :host([overlay]) [part='backdrop'] {
          z-index: 2;
        }

        :host([drawer-opened][overlay]) [part='backdrop'] {
          pointer-events: auto;
          touch-action: manipulation;
        }

        :host([dir='rtl']) [part='drawer'] {
          left: auto;
          right: var(--vaadin-app-layout-navbar-offset-start, 0);
          transform: translateX(100%);
        }

        :host([dir='rtl']) [part='navbar'],
        :host([dir='rtl']) [part='navbar']::before {
          transition: right var(--vaadin-app-layout-transition);
        }

        :host([dir='rtl'][drawer-opened]) [part='drawer'] {
          transform: translateX(0%);
        }

        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {
          padding-left: var(--vaadin-app-layout-drawer-offset-left);
        }

        :host([dir='rtl'][drawer-opened]:not([overlay])) {
          padding-right: var(--vaadin-app-layout-drawer-offset-left);
        }

        @media (max-width: 800px), (max-height: 600px) {
          :host {
            --vaadin-app-layout-drawer-overlay: true;
          }

          [part='drawer'] {
            width: 20em;
          }
        }
      </style>
      <div part="navbar" id="navbarTop">
        <slot name="navbar"></slot>
      </div>
      <div part="backdrop" on-click="_onBackdropClick" on-touchend="_onBackdropTouchend"></div>
      <div part="drawer" id="drawer" on-keydown="__onDrawerKeyDown">
        <slot name="drawer" id="drawerSlot"></slot>
      </div>
      <div content>
        <slot></slot>
      </div>
      <div part="navbar" id="navbarBottom" bottom hidden>
        <slot name="navbar-bottom"></slot>
      </div>
      <div hidden><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
    `}static get is(){return"vaadin-app-layout"}static get properties(){return{i18n:{type:Object,observer:"__i18nChanged",value:()=>({drawer:"Drawer"})},primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"__primarySectionChanged"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"__drawerOpenedChanged"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0},closeDrawerOn:{type:String,value:"vaadin-router-location-changed",observer:"_closeDrawerOnChanged"}}}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this),this.__trapFocusInDrawer=this.__trapFocusInDrawer.bind(this),this.__releaseFocusFromDrawer=this.__releaseFocusFromDrawer.bind(this),this.__focusTrapController=new lo(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),rn(this,this._afterFirstRender),this._updateTouchOptimizedMode();const t=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new I(t,()=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new I(this.$.touchSlot,()=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new I(this.$.drawerSlot,()=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),this._navbarSizeObserver=new ResizeObserver(()=>{this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}),this._navbarSizeObserver.observe(this.$.navbarTop),this._navbarSizeObserver.observe(this.$.navbarBottom),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}ready(){super.ready(),this.addController(this.__focusTrapController),this.__setAriaExpanded()}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}__primarySectionChanged(t){["navbar","drawer"].includes(t)||this.set("primarySection","navbar")}__drawerOpenedChanged(t,e){this.overlay&&(t?(this._updateDrawerHeight(),this.__trapFocusInDrawer()):e&&this.__releaseFocusFromDrawer()),this.__setAriaExpanded()}__i18nChanged(){this.__updateDrawerAriaAttributes()}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(t){t.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}__setAriaExpanded(){const t=this.querySelector("vaadin-drawer-toggle");t&&t.setAttribute("aria-expanded",this.drawerOpened)}_updateDrawerSize(){const t=this.querySelectorAll("[slot=drawer]").length,e=this.$.drawer;t===0?e.setAttribute("hidden",""):e.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){const e=this.$.navbarTop.getBoundingClientRect(),o=this.$.navbarBottom.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",`${e.height}px`),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",`${o.height}px`);const n=this.$.drawer.getBoundingClientRect();this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",`${n.width}px`)}_updateDrawerHeight(){const{scrollHeight:t,offsetHeight:e}=this.$.drawer,r=t>e?`${t}px`:"100%";this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",r)}_updateOverlayMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay")==="true";!this.overlay&&t&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(t),!this.overlay&&this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),this._updateDrawerHeight(),this.__updateDrawerAriaAttributes()}__updateDrawerAriaAttributes(){const t=this.$.drawer;this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.i18n.drawer)):(t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label"))}__drawerTransitionComplete(){return new Promise(t=>{if(this._getCustomPropertyValue("--vaadin-app-layout-transition")==="none"){t();return}this.$.drawer.addEventListener("transitionend",t,{once:!0})})}async __trapFocusInDrawer(){await this.__drawerTransitionComplete(),this.drawerOpened&&(this.$.drawer.setAttribute("tabindex","0"),this.__focusTrapController.trapFocus(this.$.drawer))}async __releaseFocusFromDrawer(){if(await this.__drawerTransitionComplete(),this.drawerOpened)return;this.__focusTrapController.releaseFocus(),this.$.drawer.removeAttribute("tabindex");const t=this.querySelector("vaadin-drawer-toggle");t&&(t.focus(),t.setAttribute("focus-ring","focus"))}__onDrawerKeyDown(t){t.key==="Escape"&&this.overlay&&(this.drawerOpened=!1)}_closeDrawerOnChanged(t,e){e&&window.removeEventListener(e,this.__closeOverlayDrawerListener),t&&window.addEventListener(t,this.__closeOverlayDrawerListener)}_onBackdropClick(){this._close()}_onBackdropTouchend(t){t.preventDefault(),this._close()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(t){return(getComputedStyle(this).getPropertyValue(t)||"").trim().toLowerCase()}_updateTouchOptimizedMode(){const t=this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized")==="true",e=this.querySelectorAll('[slot*="navbar"]');e.length>0&&Array.from(e).forEach(r=>{r.getAttribute("slot").indexOf("touch-optimized")>-1&&(r.__touchOptimized=!0),t&&r.__touchOptimized?r.setAttribute("slot","navbar-bottom"):r.setAttribute("slot","navbar")}),this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length===0?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),t?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),ro(this,()=>{this.removeAttribute("no-anim")})}}customElements.define(oi.is,oi);const co=m`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;b("vaadin-button",co,{moduleId:"lumo-button"});const hn=m`
  :host {
    width: var(--lumo-size-l);
    height: var(--lumo-size-l);
    min-width: auto;
    margin: 0 var(--lumo-space-s);
    padding: 0;
    background: transparent;
  }

  [part='icon'],
  [part='icon']::after,
  [part='icon']::before {
    position: inherit;
    height: auto;
    width: auto;
    background: transparent;
    top: auto;
  }

  [part='icon']::before {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    content: var(--lumo-icons-menu);
  }
`;b("vaadin-drawer-toggle",[co,hn],{moduleId:"lumo-drawer-toggle"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let un=0;function ho(){return un++}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class V extends EventTarget{static generateId(t,e){return`${t||"default"}-${e.localName}-${ho()}`}constructor(t,e,r,o,s){super(),this.host=t,this.slotName=e,this.slotFactory=r,this.slotInitializer=o,s&&(this.defaultId=V.generateId(e,t))}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:e,slotFactory:r}=this;let o=this.defaultNode;return!o&&r&&(o=r(t),o instanceof Element&&(e!==""&&o.setAttribute("slot",e),this.node=o,this.defaultNode=o)),o&&t.appendChild(o),o}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}initNode(t){const{slotInitializer:e}=this;e&&e(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,r=this.host.shadowRoot.querySelector(e);this.__slotObserver=new I(r,o=>{const s=this.node,n=o.addedNodes.find(a=>a!==s);o.removedNodes.length&&o.removedNodes.forEach(a=>{this.teardownNode(a)}),n&&(s&&s.isConnected&&this.host.removeChild(s),this.node=n,n!==this.defaultNode&&(this.initCustomNode(n),this.initNode(n)))})}}/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class uo extends V{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const po=g(i=>class extends i{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pn=!1,fn=i=>i,Pe=typeof document.head.style.touchAction=="string",zt="__polymerGestures",Yt="__polymerGesturesHandled",le="__polymerGesturesTouchAction",ri=25,si=5,_n=2,mn=["mousedown","mousemove","mouseup","click"],gn=[0,1,4,2],vn=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Te(i){return mn.indexOf(i)>-1}let fo=!1;(function(){try{const i=Object.defineProperty({},"passive",{get(){fo=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch{}})();function _o(i){if(!(Te(i)||i==="touchend")&&Pe&&fo&&pn)return{passive:!0}}const bn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),yn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function D(i){const t=i.type;if(!Te(t))return!1;if(t==="mousemove"){let r=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!vn&&(r=gn[i.which]||0),Boolean(r&1)}return(i.button===void 0?0:i.button)===0}function wn(i){if(i.type==="click"){if(i.detail===0)return!0;const t=k(i);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const e=t.getBoundingClientRect(),r=i.pageX,o=i.pageY;return!(r>=e.left&&r<=e.right&&o>=e.top&&o<=e.bottom)}return!1}const T={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Cn(i){let t="auto";const e=go(i);for(let r=0,o;r<e.length;r++)if(o=e[r],o[le]){t=o[le];break}return t}function mo(i,t,e){i.movefn=t,i.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function Y(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}const go=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],gt={},N=[];function xn(i,t){let e=document.elementFromPoint(i,t),r=e;for(;r&&r.shadowRoot&&!window.ShadyDOM;){const o=r;if(r=r.shadowRoot.elementFromPoint(i,t),o===r)break;r&&(e=r)}return e}function k(i){const t=go(i);return t.length>0?t[0]:i.target}function vo(i){const t=i.type,r=i.currentTarget[zt];if(!r)return;const o=r[t];if(!o)return;if(!i[Yt]&&(i[Yt]={},t.startsWith("touch"))){const n=i.changedTouches[0];if(t==="touchstart"&&i.touches.length===1&&(T.touch.id=n.identifier),T.touch.id!==n.identifier)return;Pe||(t==="touchstart"||t==="touchmove")&&An(i)}const s=i[Yt];if(!s.skip){for(let n=0,a;n<N.length;n++)a=N[n],o[a.name]&&!s[a.name]&&a.flow&&a.flow.start.indexOf(i.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<N.length;n++)a=N[n],o[a.name]&&!s[a.name]&&(s[a.name]=!0,a[t](i))}}function An(i){const t=i.changedTouches[0],e=i.type;if(e==="touchstart")T.touch.x=t.clientX,T.touch.y=t.clientY,T.touch.scrollDecided=!1;else if(e==="touchmove"){if(T.touch.scrollDecided)return;T.touch.scrollDecided=!0;const r=Cn(i);let o=!1;const s=Math.abs(T.touch.x-t.clientX),n=Math.abs(T.touch.y-t.clientY);i.cancelable&&(r==="none"?o=!0:r==="pan-x"?o=n>s:r==="pan-y"&&(o=s>n)),o?i.preventDefault():kt("track")}}function ni(i,t,e){return gt[t]?(En(i,t,e),!0):!1}function el(i,t,e){return gt[t]?(Pn(i,t,e),!0):!1}function En(i,t,e){const r=gt[t],o=r.deps,s=r.name;let n=i[zt];n||(i[zt]=n={});for(let a=0,l,d;a<o.length;a++)l=o[a],!(bn&&Te(l)&&l!=="click")&&(d=n[l],d||(n[l]=d={_count:0}),d._count===0&&i.addEventListener(l,vo,_o(l)),d[s]=(d[s]||0)+1,d._count=(d._count||0)+1);i.addEventListener(t,e),r.touchAction&&On(i,r.touchAction)}function Pn(i,t,e){const r=gt[t],o=r.deps,s=r.name,n=i[zt];if(n)for(let a=0,l,d;a<o.length;a++)l=o[a],d=n[l],d&&d[s]&&(d[s]=(d[s]||1)-1,d._count=(d._count||1)-1,d._count===0&&i.removeEventListener(l,vo,_o(l)));i.removeEventListener(t,e)}function Oe(i){N.push(i);for(let t=0;t<i.emits.length;t++)gt[i.emits[t]]=i}function Tn(i){for(let t=0,e;t<N.length;t++){e=N[t];for(let r=0,o;r<e.emits.length;r++)if(o=e.emits[r],o===i)return e}return null}function On(i,t){Pe&&i instanceof HTMLElement&&Is.run(()=>{i.style.touchAction=t}),i[le]=t}function Se(i,t,e){const r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=e,fn(i).dispatchEvent(r),r.defaultPrevented){const o=e.preventer||e.sourceEvent;o&&o.preventDefault&&o.preventDefault()}}function kt(i){const t=Tn(i);t.info&&(t.info.prevent=!0)}Oe({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Y(this.info)},mousedown(i){if(!D(i))return;const t=k(i),e=this,r=s=>{D(s)||(et("up",t,s),Y(e.info))},o=s=>{D(s)&&et("up",t,s),Y(e.info)};mo(this.info,r,o),et("down",t,i)},touchstart(i){et("down",k(i),i.changedTouches[0],i)},touchend(i){et("up",k(i),i.changedTouches[0],i)}});function et(i,t,e,r){!t||Se(t,i,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r,prevent(o){return kt(o)}})}Oe({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(i){this.moves.length>_n&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Y(this.info)},mousedown(i){if(!D(i))return;const t=k(i),e=this,r=s=>{const n=s.clientX,a=s.clientY;ai(e.info,n,a)&&(e.info.state=e.info.started?s.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&kt("tap"),e.info.addMove({x:n,y:a}),D(s)||(e.info.state="end",Y(e.info)),t&&Wt(e.info,t,s),e.info.started=!0)},o=s=>{e.info.started&&r(s),Y(e.info)};mo(this.info,r,o),this.info.x=i.clientX,this.info.y=i.clientY},touchstart(i){const t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(i){const t=k(i),e=i.changedTouches[0],r=e.clientX,o=e.clientY;ai(this.info,r,o)&&(this.info.state==="start"&&kt("tap"),this.info.addMove({x:r,y:o}),Wt(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(i){const t=k(i),e=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),Wt(this.info,t,e))}});function ai(i,t,e){if(i.prevent)return!1;if(i.started)return!0;const r=Math.abs(i.x-t),o=Math.abs(i.y-e);return r>=si||o>=si}function Wt(i,t,e){if(!t)return;const r=i.moves[i.moves.length-2],o=i.moves[i.moves.length-1],s=o.x-i.x,n=o.y-i.y;let a,l=0;r&&(a=o.x-r.x,l=o.y-r.y),Se(t,"track",{state:i.state,x:e.clientX,y:e.clientY,dx:s,dy:n,ddx:a,ddy:l,sourceEvent:e,hover(){return xn(e.clientX,e.clientY)}})}Oe({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(i){D(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click(i){D(i)&&li(this.info,i)},touchstart(i){const t=i.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(i){li(this.info,i.changedTouches[0],i)}});function li(i,t,e){const r=Math.abs(t.clientX-i.x),o=Math.abs(t.clientY-i.y),s=k(e||t);!s||yn[s.localName]&&s.hasAttribute("disabled")||(isNaN(r)||isNaN(o)||r<=ri&&o<=ri||wn(t))&&(i.prevent||Se(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bo=g(i=>class extends i{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sn=i=>class extends po(bo(i)){get _activeKeys(){return[" "]}ready(){super.ready(),ni(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),ni(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",r=>{this._activeKeys.includes(r.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ze=g(i=>class extends i{get _keyboardActive(){return so()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yo=i=>class extends po(i){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,r){super._disabledChanged(e,r),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):r&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zn=i=>class extends Sn(yo(ze(i))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class de extends zn(B(R(X(z)))){static get is(){return"vaadin-button"}static get template(){return S`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new uo(this),this.addController(this._tooltipController)}}customElements.define(de.is,de);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function kn(i){const t=[];for(;i;){if(i.nodeType===Node.DOCUMENT_NODE){t.push(i);break}if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){t.push(i),i=i.host;continue}if(i.assignedSlot){i=i.assignedSlot;continue}i=i.parentNode}return t}function wo(i){return i?new Set(i.split(" ")):new Set}function Co(i){return[...i].join(" ")}function xo(i,t,e){const r=wo(i.getAttribute(t));r.add(e),i.setAttribute(t,Co(r))}function Ao(i,t,e){const r=wo(i.getAttribute(t));if(r.delete(e),r.size===0){i.removeAttribute(t);return}i.setAttribute(t,Co(r))}function Mn(i){return i.nodeType===Node.TEXT_NODE&&i.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class di extends de{static get template(){return S`
      <style>
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          position: relative;
          outline: none;
          height: 24px;
          width: 24px;
          padding: 4px;
        }

        [part='icon'],
        [part='icon']::after,
        [part='icon']::before {
          position: absolute;
          top: 8px;
          height: 3px;
          width: 24px;
          background-color: #000;
        }

        [part='icon']::after,
        [part='icon']::before {
          content: '';
        }

        [part='icon']::after {
          top: 6px;
        }

        [part='icon']::before {
          top: 12px;
        }
      </style>
      <slot id="slot">
        <div part="icon"></div>
      </slot>
      <div part="icon" hidden$="[[!_showFallbackIcon]]"></div>
      <slot name="tooltip"></slot>
    `}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:{type:String,value:"Toggle navigation panel",reflectToAttribute:!0},_showFallbackIcon:{type:Boolean,value:!1}}}constructor(){super(),this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}ready(){super.ready(),this._observer=new I(this,()=>{this._toggleFallbackIcon()})}_toggleFallbackIcon(){const t=this.$.slot.assignedNodes();this._showFallbackIcon=t.length>0&&t.every(e=>Mn(e))}}customElements.define(di.is,di);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ci=0;function Eo(i,t=[],e={}){const r=e.moduleId||`custom-style-module-${ci}`;ci+=1;const o=document.createElement("dom-module");i&&o.setAttribute("theme-for",i);const s=!!(t.length&&e.moduleId),n=[].concat(e.include||[]);n.length===0?o.__allStyles=t:s||(o.__partialStyles=t),o.innerHTML=`
    <template>
      ${n.map(a=>`<style include=${a}></style>`)}
      ${s?`<style>${t.map(a=>a.cssText).join(`
`)}</style>`:""}
    </template>
  `,o.register(r)}function Ln(i){return It(i.querySelector("template")).map(t=>wi(t.textContent))}function Nn(){const t=K.prototype.modules;return Object.keys(t).map(e=>{const r=t[e],o=r.getAttribute("theme-for");return r.__allStyles=r.__allStyles||Ln(r).concat(r.__partialStyles||[]),{themeFor:o,moduleId:e,styles:r.__allStyles}})}window.Vaadin=window.Vaadin||{};window.Vaadin.styleModules={getAllThemes:Nn,registerStyles:Eo};bt&&bt.length>0&&(bt.forEach(i=>{Eo(i.themeFor,i.styles,{moduleId:i.moduleId,include:i.include})}),bt.length=0);const In=m`
  :host {
    outline: none;
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }
`;b("vaadin-scroller",In,{moduleId:"lumo-scroller"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Dn{constructor(t,e){this.host=t,this.scrollTarget=e||t,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){this.__resizeObserver=new ResizeObserver(()=>{this.__debounceOverflow=H.debounce(this.__debounceOverflow,Ls,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(this.host),this.__childObserver=new I(this.host,t=>{t.addedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(e)}),t.removedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(e)}),this.__updateOverflow()}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const t=this.scrollTarget;let e="";t.scrollTop>0&&(e+=" top"),Math.ceil(t.scrollTop)<Math.ceil(t.scrollHeight-t.clientHeight)&&(e+=" bottom");const r=Math.abs(t.scrollLeft);r>0&&(e+=" start"),Math.ceil(r)<Math.ceil(t.scrollWidth-t.clientWidth)&&(e+=" end"),e=e.trim(),e.length>0&&this.host.getAttribute("overflow")!==e?this.host.setAttribute("overflow",e):e.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hi extends ze(B(X(R(z)))){static get template(){return S`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}ready(){super.ready(),this.__overflowController=new Dn(this),this.addController(this.__overflowController)}_shouldSetFocus(t){return t.target===this}}customElements.define(hi.is,hi);b("vaadin-input-container",m`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ui extends R(Ce(z)){static get is(){return"vaadin-input-container"}static get template(){return S`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",t=>{t.target===this&&t.preventDefault()}),this.addEventListener("click",t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(e=>e.focus&&e.focus())})}}customElements.define(ui.is,ui);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Po=m`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;b("",Po,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hn=m`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const To=m`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;b("",To,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rn=m`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,Oo=[To,Po,Hn,Rn];b("",Oo,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */b("vaadin-text-field",Oo,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fn extends V{constructor(t,e){super(t,"input",()=>document.createElement("input"),(r,o)=>{r.value&&o.setAttribute("value",r.value),r.type&&o.setAttribute("type",r.type),o.id=this.defaultId,typeof e=="function"&&e(o)},!0)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bn=g(i=>class extends ze(yo(i)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){!this.focusElement||(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,r){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):r&&this._removeFocusListeners(r)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_disabledChanged(e,r){super._disabledChanged(e,r),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vn extends V{constructor(t){super(t,"error-message",()=>document.createElement("div"),(e,r)=>{this.__updateErrorId(r),this.__updateHasError()},!0)}get errorId(){return this.node&&this.node.id}setErrorMessage(t){this.errorMessage=t,this.__updateHasError()}setInvalid(t){this.invalid=t,this.__updateHasError()}initCustomNode(t){this.__updateErrorId(t),t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),this.__updateHasError()}teardownNode(t){let e=this.getSlotChild();!e&&t!==this.defaultNode&&(e=this.attachDefaultNode(),this.initNode(e)),this.__updateHasError()}__isNotEmpty(t){return Boolean(t&&t.trim()!=="")}__updateHasError(){const t=this.node,e=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));t&&(t.textContent=e?this.errorMessage:"",t.hidden=!e,e?t.setAttribute("role","alert"):t.removeAttribute("role")),this.host.toggleAttribute("has-error-message",e)}__updateErrorId(t){t.id||(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Un{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setLabelId(t){this.__setLabelIdToAriaAttribute(t,this.__labelId),this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(t,e){this.__setAriaAttributeId("aria-labelledby",t,e)}__setErrorIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setHelperIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setAriaRequiredAttribute(t){!this.__target||["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required"))}__setAriaAttributeId(t,e,r){!this.__target||(r&&Ao(this.__target,t,r),e&&xo(this.__target,t,e))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $n extends V{constructor(t){super(t,"helper",null,null,!0)}get helperId(){return this.node&&this.node.id}initCustomNode(t){this.__updateHelperId(t),this.__observeHelper(t);const e=this.__hasHelper(t);this.__toggleHasHelper(e)}teardownNode(t){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const e=this.getSlotChild();if(e&&e!==this.defaultNode){const r=this.__hasHelper(e);this.__toggleHasHelper(r)}else this.__applyDefaultHelper(this.helperText,e)}setHelperText(t){this.helperText=t;const e=this.getSlotChild();(!e||e===this.defaultNode)&&this.__applyDefaultHelper(t,e)}__hasHelper(t){return t?t.children.length>0||t.nodeType===Node.ELEMENT_NODE&&customElements.get(t.localName)||this.__isNotEmpty(t.textContent):!1}__isNotEmpty(t){return t&&t.trim()!==""}__applyDefaultHelper(t,e){const r=this.__isNotEmpty(t);r&&!e&&(this.slotFactory=()=>document.createElement("div"),e=this.attachDefaultNode(),this.__updateHelperId(e),this.__observeHelper(e)),e&&(e.textContent=t),this.__toggleHasHelper(r)}__observeHelper(t){this.__helperObserver=new MutationObserver(e=>{e.forEach(r=>{const o=r.target,s=o===this.node;if(r.type==="attributes")s&&o.id!==this.defaultId&&this.__updateHelperId(o);else if(s||o.parentElement===this.node){const n=this.__hasHelper(this.node);this.__toggleHasHelper(n)}})}),this.__helperObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(t){this.host.toggleAttribute("has-helper",t),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:t,node:this.node}}))}__updateHelperId(t){t.id||(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jn extends V{constructor(t){super(t,"label",()=>document.createElement("label"),(e,r)=>{this.__updateLabelId(r),this.__updateDefaultLabel(this.label),this.__observeLabel(r)},!0)}get labelId(){return this.node.id}initCustomNode(t){this.__updateLabelId(t);const e=this.__hasLabel(t);this.__toggleHasLabel(e)}teardownNode(t){this.__labelObserver&&this.__labelObserver.disconnect();let e=this.getSlotChild();!e&&t!==this.defaultNode&&(e=this.attachDefaultNode(),this.initNode(e));const r=this.__hasLabel(e);this.__toggleHasLabel(r)}setLabel(t){this.label=t,this.__updateDefaultLabel(t)}__hasLabel(t){return t?t.children.length>0||this.__isNotEmpty(t.textContent):!1}__isNotEmpty(t){return Boolean(t&&t.trim()!=="")}__observeLabel(t){this.__labelObserver=new MutationObserver(e=>{e.forEach(r=>{const o=r.target,s=o===this.node;if(r.type==="attributes")s&&o.id!==this.defaultId&&this.__updateLabelId(o);else if(s||o.parentElement===this.node){const n=this.__hasLabel(this.node);this.__toggleHasLabel(n)}})}),this.__labelObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(t){this.host.toggleAttribute("has-label",t),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:t,node:this.node}}))}__updateDefaultLabel(t){if(this.defaultNode&&(this.defaultNode.textContent=t,this.defaultNode===this.node)){const e=this.__isNotEmpty(t);this.__toggleHasLabel(e)}}__updateLabelId(t){t.id||(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qn=g(i=>class extends X(i){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new jn(this)}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const So=g(i=>class extends i{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yn=i=>class extends So(qn(X(i))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new Un(this),this._helperController=new $n(this),this._errorController=new Vn(this),this._labelController.addEventListener("label-changed",e=>{const{hasLabel:r,node:o}=e.detail;this.__labelChanged(r,o)}),this._helperController.addEventListener("helper-changed",e=>{const{hasHelper:r,node:o}=e.detail;this.__helperChanged(r,o)})}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,r){e?this._fieldAriaController.setHelperId(r.id):this._fieldAriaController.setHelperId(null)}__labelChanged(e,r){e?this._fieldAriaController.setLabelId(r.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{e?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wn=g(i=>class extends i{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((r,o)=>{this._delegateAttribute(r,e[o])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((r,o)=>{this._delegateProperty(r,e[o])})}_delegateAttribute(e,r){!this.stateTarget||(e==="invalid"&&this._delegateAttribute("aria-invalid",r?"true":!1),typeof r=="boolean"?this.stateTarget.toggleAttribute(e,r):r?this.stateTarget.setAttribute(e,r):this.stateTarget.removeAttribute(e))}_delegateProperty(e,r){!this.stateTarget||(this.stateTarget[e]=r)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gn=g(i=>class extends i{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){!this.inputElement||(e!=null?this.inputElement.value=e:this.inputElement.value="")}_inputElementChanged(e,r){e?this._addInputListeners(e):r&&this._removeInputListeners(r)}_hasInputValueChanged(e,r){(e||r)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const r=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=r.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,r){this._toggleHasValue(this._hasValue),!(e===""&&r===void 0)&&(this.__userInput||this._forwardInputValue(e))}get _hasValue(){return this.value!=null&&this.value!==""}_setHasInputValue(e){const r=e.composedPath()[0];this._hasInputValue=r.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zo=g(i=>class extends Wn(So(Gn(i))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(r=>this.__isValidConstraint(r))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...r){if(!e)return;const o=this._hasValidConstraints(r),s=this.__previousHasConstraints&&!o;(this._hasValue||this.invalid)&&o?this.validate():s&&this._setInvalid(!1),this.__previousHasConstraints=o}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return Boolean(e)||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gt=new WeakMap;function Kn(i){return Gt.has(i)||Gt.set(i,new Set),Gt.get(i)}function Jn(i,t){const e=document.createElement("style");e.textContent=i,t===document?document.head.appendChild(e):t.insertBefore(e,t.firstChild)}const Xn=g(i=>class extends i{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),r=Kn(e);this.slotStyles.forEach(o=>{r.has(o)||(Jn(o,e),r.add(o))})}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zn=i=>class extends Xn(Bn(zo(Yn(bo(i))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&!!this.value&&(e.stopPropagation(),this.__clear())}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=H.debounce(this._preventInputDebouncer,Yi.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const r=e.clipboardData.getData("text");this.__allowedTextRegExp.test(r)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const r=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(r)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`),this.__allowedTextRegExp=new RegExp(`^${e}*$`)}catch(r){console.error(r)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qn=i=>class extends Zn(i){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_setFocused(e){super._setFocused(e),e||this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_valueChanged(e,r){super._valueChanged(e,r),r!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ta{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("label-changed",r=>{this.__initLabel(r.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ea=i=>class extends zo(i){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean,observer:"_preventInvalidInputChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const e=this.inputElement;e&&e.value.length>0&&!this.checkValidity()&&(e.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=H.debounce(this._inputDebouncer,Yi.after(200),()=>{this.removeAttribute("input-prevented")}))}}_onInput(e){this._checkInputValue(),super._onInput(e)}_preventInvalidInputChanged(e){e&&console.warn('WARNING: Since Vaadin 23.2, "preventInvalidInput" is deprecated. Please use "allowedCharPattern" instead.')}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ia=m`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oa=m`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ra=m`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sa=[oa,ra,ia];/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */b("vaadin-text-field",sa,{moduleId:"vaadin-text-field-styles"});class pi extends ea(Qn(R(B(z)))){static get is(){return"vaadin-text-field"}static get template(){return S`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new Fn(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new ta(this.inputElement,this._labelController)),this._tooltipController=new uo(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(pi.is,pi);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ke=m`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;b("",ke,{moduleId:"lumo-overlay"});b("vaadin-overlay",ke,{moduleId:"lumo-vaadin-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Me(i,t,e,r,o){let s;o&&(s=typeof e=="object"&&e!==null,s&&(r=i.__dataTemp[t]));let n=r!==e&&(r===r||e===e);return s&&n&&(i.__dataTemp[t]=e),n}const Le=g(i=>{class t extends i{_shouldPropertyChange(r,o,s){return Me(this,r,o,s,!0)}}return t}),vl=g(i=>{class t extends i{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(r,o,s){return Me(this,r,o,s,this.mutableData)}}return t});Le._mutablePropertyChange=Me;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ce=null;function he(){return ce}he.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:he,writable:!0}});const ko=we(he),na=Le(ko);function aa(i,t){ce=i,Object.setPrototypeOf(i,t.prototype),new t,ce=null}const la=we(class{});function da(i,t){for(let e=0;e<t.length;e++){let r=t[e];if(Boolean(i)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)i?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if(r.localName==="slot")if(i)r.__polymerReplaced__=document.createComment("hidden-slot"),v(v(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const o=r.__polymerReplaced__;o&&v(v(o).parentNode).replaceChild(r,o)}else r.style&&(i?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=i,r._showHideChildren&&r._showHideChildren(i)}}class L extends la{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let o=this.root.firstChild;o;o=o.nextSibling)e.push(o),o.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(t&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let r in this.__hostProps)this._setPendingProperty(r,this.__dataHost["_host_"+r]);for(let r in t)this._setPendingProperty(r,t[r])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,o=>{o.model=this,r(o)});else{let o=this.__dataHost.__dataHost;o&&o._addEventListenerToNode(t,e,r)}}_showHideChildren(t){da(t,this.children)}_setUnmanagedPropertyToNode(t,e,r){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&e=="textContent"?t.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(t,e,r)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do t=t.__dataHost.__dataHost;while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}L.prototype.__dataHost;L.prototype.__templatizeOptions;L.prototype._methodHost;L.prototype.__templatizeOwner;L.prototype.__hostProps;const ca=Le(L);function fi(i){let t=i.__dataHost;return t&&t._methodHost||t}function ha(i,t,e){let r=e.mutableData?ca:L;ue.mixin&&(r=ue.mixin(r));let o=class extends r{};return o.prototype.__templatizeOptions=e,o.prototype._bindTemplate(i),fa(o,i,t,e),o}function ua(i,t,e,r){let o=e.forwardHostProp;if(o&&t.hasHostProps){const s=i.localName=="template";let n=t.templatizeTemplateClass;if(!n){if(s){let l=e.mutableData?na:ko;class d extends l{}n=t.templatizeTemplateClass=d}else{const l=i.constructor;class d extends l{}n=t.templatizeTemplateClass=d}let a=t.hostProps;for(let l in a)n.prototype._addPropertyEffect("_host_"+l,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:pa(l,o)}),n.prototype._createNotifyingProperty("_host_"+l);xi&&r&&ga(t,e,r)}if(i.__dataProto&&Object.assign(i.__data,i.__dataProto),s)aa(i,n),i.__dataTemp={},i.__dataPending=null,i.__dataOld=null,i._enableProperties();else{Object.setPrototypeOf(i,n.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in i){const d=i[l];delete i[l],i.__data[l]=d}}}}function pa(i,t){return function(r,o,s){t.call(r.__templatizeOwner,o.substring(6),s[o])}}function fa(i,t,e,r){let o=e.hostProps||{};for(let s in r.instanceProps){delete o[s];let n=r.notifyInstanceProp;n&&i.prototype._addPropertyEffect(s,i.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:_a(s,n)})}if(r.forwardHostProp&&t.__dataHost)for(let s in o)e.hasHostProps||(e.hasHostProps=!0),i.prototype._addPropertyEffect(s,i.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ma()})}function _a(i,t){return function(r,o,s){t.call(r.__templatizeOwner,r,o,s[o])}}function ma(){return function(t,e,r){t.__dataHost._setPendingPropertyOrPath("_host_"+e,r[e],!0,!0)}}function ue(i,t,e){if(Pt&&!fi(i))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},i.__templatizeOwner)throw new Error("A <template> can only be templatized once");i.__templatizeOwner=t;let o=(t?t.constructor:L)._parseTemplate(i),s=o.templatizeInstanceClass;s||(s=ha(i,o,e),o.templatizeInstanceClass=s);const n=fi(i);ua(i,o,e,n);let a=class extends s{};return a.prototype._methodHost=n,a.prototype.__dataHost=i,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=o.hostProps,a=a,a}function ga(i,t,e){const r=e.constructor._properties,{propertyEffects:o}=i,{instanceProps:s}=t;for(let n in o)if(!r[n]&&!(s&&s[n])){const a=o[n];for(let l=0;l<a.length;l++){const{part:d}=a[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function yl(i,t){let e;for(;t;)if(e=t.__dataHost?t:t.__templatizeInstance)if(e.__dataHost!=i)t=e.__dataHost;else return e;else t=v(t).parentNode;return null}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class O extends R(Ce(X(z))){static get template(){return S`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new I(this,t=>{this._setTemplateFromNodes(t.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),Ji&&(this._boundIosResizeListener=()=>this._detectIosNavbar()),this.__focusTrapController=new lo(this)}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addController(this.__focusTrapController)}_detectIosNavbar(){if(!this.opened)return;const t=window.innerHeight,r=window.innerWidth>t,o=document.documentElement.clientHeight;r&&o>t?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${o-t}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_setTemplateFromNodes(t){this.template=t.find(e=>e.localName&&e.localName==="template")||this.template}close(t){const e=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),e.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_ironOverlayCanceled(t){t.preventDefault()}_mouseDownListener(t){this._mouseDownInside=t.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(t){this._mouseUpInside=t.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(t){if(t.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._last)return;const e=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}_keydownListener(t){if(!!this._last&&!(this.modeless&&!t.composedPath().includes(this.$.overlay))&&t.key==="Escape"){const e=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:t}});this.dispatchEvent(e),this.opened&&!e.defaultPrevented&&this.close(t)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(t,e){this._instance||this._ensureTemplatized(),t?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),ro(this,()=>{this.focusTrap&&this.__focusTrapController.trapFocus(this.$.overlay);const r=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(r)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):e&&(this.focusTrap&&this.__focusTrapController.releaseFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(t){t&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const t=getComputedStyle(this).getPropertyValue("animation-name");return!(getComputedStyle(this).getPropertyValue("display")==="none")&&t&&t!=="none"}_enqueueAnimation(t,e){const r=`__${t}Handler`,o=s=>{s&&s.target!==this||(e(),this.removeEventListener("animationend",o),delete this[r])};this[r]=o,this.addEventListener("animationend",o)}_flushAnimation(t){const e=`__${t}Handler`;typeof this[e]=="function"&&this[e]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")}_finishClosing(){document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing")}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){this._exitModalState();const t=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&t){const e=this._getActiveElement();(e===document.body||this._deepContains(e))&&setTimeout(()=>t.focus()),this.__restoreFocusNode=null}this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(t=>t instanceof O&&!t.hasAttribute("closing")).sort((t,e)=>t.__zIndex-e.__zIndex||0)}get _last(){return this===O.__attachedInstances.pop()}_modelessChanged(t){t?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),O.__attachedInstances.forEach(t=>{t!==this&&(t.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const t=O.__attachedInstances;let e;for(;(e=t.pop())&&!(e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),!e.modeless)););}_removeOldContent(){!this.content||!this._contentNodes||(this._observer.disconnect(),this._contentNodes.forEach(t=>{t.parentNode===this.content&&this.content.removeChild(t)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(t){this._removeOldContent(),t._Templatizer||(t._Templatizer=ue(t,this,{forwardHostProp(r,o){this._instance&&this._instance.forwardHostProp(r,o)}})),this._instance=new t._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);const e=t._templateRoot||(t._templateRoot=t.getRootNode());if(e!==document){this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});let r=Array.from(e.querySelectorAll("style")).reduce((o,s)=>o+s.textContent,"");if(r=r.replace(/:host/g,":host-nomatch"),r){const o=document.createElement("style");o.textContent=r,this.$.content.shadowRoot.appendChild(o),this._contentNodes.unshift(o)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(t,e,r,o){t!==e?this.template=void 0:r!==o&&(this.renderer=void 0)}_templateOrRendererChanged(t,e,r,o,s){if(t&&e)throw this._removeNewRendererOrTemplate(t,this._oldTemplate,e,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");const n=this._oldOwner!==r||this._oldModel!==o;this._oldModel=o,this._oldOwner=r;const a=this._oldTemplate!==t;this._oldTemplate=t;const l=this._oldRenderer!==e;this._oldRenderer=e;const d=this._oldOpened!==s;this._oldOpened=s,l&&(this.content=this,this.content.innerHTML="",delete this.content._$litPart$),t&&a?this._stampOverlayTemplate(t):e&&(l||d||n)&&s&&this.requestContentUpdate()}_getActiveElement(){let t=document.activeElement||document.body;for(;t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}_deepContains(t){if(this.contains(t))return!0;let e=t;const r=t.ownerDocument;for(;e&&e!==r&&e!==this;)e=e.parentNode||e.host;return e===this}bringToFront(){let t="";const e=O.__attachedInstances.filter(r=>r!==this).pop();e&&(t=e.__zIndex+1),this.style.zIndex=t,this.__zIndex=t||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(O.is,O);const va=m`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;b("vaadin-tooltip-overlay",[ke,va],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kt={start:"top",end:"bottom"},Jt={start:"left",end:"right"},_i=new ResizeObserver(i=>{setTimeout(()=>{i.forEach(t=>{t.target.__overlay&&t.target.__overlay._updatePosition()})})}),ba=i=>class extends i{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=kn(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,r){if(this.__removeUpdatePositionEventListeners(),r&&(r.__overlay=null,_i.unobserve(r),e&&(this.__addUpdatePositionEventListeners(),r.__overlay=this,_i.observe(r))),e){const o=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(s=>{this.__margins[s]=parseInt(o[s],10)})),this.setAttribute("dir",o.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}get __isRTL(){return this.getAttribute("dir")==="rtl"}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),r=this.__shouldAlignStartVertically(e);this.style.justifyContent=r?"flex-start":"flex-end";const o=this.__shouldAlignStartHorizontally(e,this.__isRTL),s=!this.__isRTL&&o||this.__isRTL&&!o;this.style.alignItems=s?"flex-start":"flex-end";const n=this.getBoundingClientRect(),a=this.__calculatePositionInOneDimension(e,n,this.noVerticalOverlap,Kt,this,r),l=this.__calculatePositionInOneDimension(e,n,this.noHorizontalOverlap,Jt,this,o);Object.assign(this.style,a,l),this.toggleAttribute("bottom-aligned",!r),this.toggleAttribute("top-aligned",r),this.toggleAttribute("end-aligned",!s),this.toggleAttribute("start-aligned",s)}__shouldAlignStartHorizontally(e,r){const o=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const s=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!r&&this.horizontalAlign==="start"||r&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,o,s,this.__margins,n,this.noHorizontalOverlap,Jt)}__shouldAlignStartVertically(e){const r=Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const o=Math.min(window.innerHeight,document.documentElement.clientHeight),s=this.verticalAlign==="top";return this.__shouldAlignStart(e,r,o,this.__margins,s,this.noVerticalOverlap,Kt)}__shouldAlignStart(e,r,o,s,n,a,l){const d=o-e[a?l.end:l.start]-s[l.end],c=e[a?l.start:l.end]-s[l.start],h=n?d:c,p=h>(n?c:d)||h>r;return n===p}__adjustBottomProperty(e,r,o){let s;if(e===r.end){if(r.end===Kt.end){const n=Math.min(window.innerHeight,document.documentElement.clientHeight);if(o>n&&this.__oldViewportHeight){const a=this.__oldViewportHeight-n;s=o-a}this.__oldViewportHeight=n}if(r.end===Jt.end){const n=Math.min(window.innerWidth,document.documentElement.clientWidth);if(o>n&&this.__oldViewportWidth){const a=this.__oldViewportWidth-n;s=o-a}this.__oldViewportWidth=n}}return s}__calculatePositionInOneDimension(e,r,o,s,n,a){const l=a?s.start:s.end,d=a?s.end:s.start,c=parseFloat(n.style[l]||getComputedStyle(n)[l]),h=this.__adjustBottomProperty(l,s,c),u=r[a?s.start:s.end]-e[o===a?s.end:s.start],p=h?`${h}px`:`${c+u*(a?-1:1)}px`;return{[l]:p,[d]:""}}};/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */b("vaadin-tooltip-overlay",m`
    [part='overlay'] {
      max-width: 40ch;
    }

    :host([position^='top'][top-aligned]) [part='overlay'],
    :host([position^='bottom'][top-aligned]) [part='overlay'] {
      margin-top: var(--vaadin-tooltip-offset-top, 0);
    }

    :host([position^='top'][bottom-aligned]) [part='overlay'],
    :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
      margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
    }

    :host([position^='start'][start-aligned]) [part='overlay'],
    :host([position^='end'][start-aligned]) [part='overlay'] {
      margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
    }

    :host([position^='start'][end-aligned]) [part='overlay'],
    :host([position^='end'][end-aligned]) [part='overlay'] {
      margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
    }
  `,{moduleId:"vaadin-tooltip-overlay-styles"});let it;class mi extends ba(O){static get is(){return"vaadin-tooltip-overlay"}static get template(){return it||(it=super.template.cloneNode(!0),it.content.querySelector('[part~="overlay"]').removeAttribute("tabindex"),it.content.querySelector('[part~="content"]').innerHTML="<slot></slot>"),it}static get properties(){return{position:{type:String,reflectToAttribute:!0}}}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){if(super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()===""),this.positionTarget&&this.owner){const t=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(e=>{this.style.setProperty(`--vaadin-tooltip-offset-${e}`,t.getPropertyValue(`--vaadin-tooltip-offset-${e}`))})}}_updatePosition(){if(super._updatePosition(),!!this.positionTarget){if(this.position==="bottom"||this.position==="top"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),r=t.width/2-e.width/2;if(this.style.left){const o=e.left+r;o>0&&(this.style.left=`${o}px`)}if(this.style.right){const o=parseFloat(this.style.right)+r;o>0&&(this.style.right=`${o}px`)}}if(this.position==="start"||this.position==="end"){const t=this.positionTarget.getBoundingClientRect(),e=this.$.overlay.getBoundingClientRect(),r=t.height/2-e.height/2;this.style.top=`${e.top+r}px`}}}}customElements.define(mi.is,mi);/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const W=500;let Mo=W,Lo=W,No=W;const xt=new Set;let ot=!1,rt=null,st=null;class ya{constructor(t){this.host=t}open(t={immediate:!1}){const{immediate:e,hover:r,focus:o}=t,s=r&&this.hoverDelay>0,n=o&&this.focusDelay>0;!e&&(s||n)&&!this.__closeTimeout?this.__warmupTooltip(n):this.__showTooltip()}close(t){!t&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),ot&&(this.__abortCooldown(),this.__scheduleCooldown())}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const t=this.host;return t.focusDelay!=null&&t.focusDelay>0?t.focusDelay:Mo}get hoverDelay(){const t=this.host;return t.hoverDelay!=null&&t.hoverDelay>0?t.hoverDelay:Lo}get hideDelay(){const t=this.host;return t.hideDelay!=null&&t.hideDelay>0?t.hideDelay:No}_isOpened(){return this.host[this.openedProp]}_setOpened(t){this.host[this.openedProp]=t}__flushClosingTooltips(){xt.forEach(t=>{t._stateController.close(!0),xt.delete(t)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),ot=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(t){this._isOpened()||(ot?this.__showTooltip():this.__scheduleWarmUp(t))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null)}__abortCooldown(){st&&(clearTimeout(st),st=null)}__abortWarmUp(){rt&&(clearTimeout(rt),rt=null)}__scheduleClose(){this._isOpened()&&(xt.add(this.host),this.__closeTimeout=setTimeout(()=>{xt.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){st=setTimeout(()=>{st=null,ot=!1},this.hideDelay)}__scheduleWarmUp(t){const e=t?this.focusDelay:this.hoverDelay;rt=setTimeout(()=>{rt=null,ot=!0,this.__showTooltip()},e)}}class gi extends Fo(B(z)){static get is(){return"vaadin-tooltip"}static get template(){return S`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        id="[[_uniqueId]]"
        role="tooltip"
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>
    `}static get properties(){return{context:{type:Object,value:()=>({})},focusDelay:{type:Number},for:{type:String,observer:"__forChanged"},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1},opened:{type:Boolean,value:!1},position:{type:String},shouldShow:{type:Object,value:()=>(t,e)=>!0},target:{type:Object,observer:"__targetChanged"},text:{type:String,observer:"__textChanged"},generator:{type:Object},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged"},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"},_overlayElement:Object,__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)"]}static setDefaultFocusDelay(t){Mo=t!=null&&t>=0?t:W}static setDefaultHideDelay(t){No=t!=null&&t>=0?t:W}static setDefaultHoverDelay(t){Lo=t!=null&&t>=0?t:W}constructor(){super(),this._uniqueId=`vaadin-tooltip-${ho()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(([t])=>{this.__onTargetVisibilityChange(t.isIntersecting)},{threshold:1}),this._stateController=new ya(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}__computeHorizontalAlign(t){return["top-end","bottom-end","start-top","start","start-bottom"].includes(t)?"end":"start"}__computeNoHorizontalOverlap(t){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(t)}__computeNoVerticalOverlap(t){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(t)}__computeVerticalAlign(t){return["top-start","top-end","top","start-bottom","end-bottom"].includes(t)?"bottom":"top"}__computeOpened(t,e,r,o){return o&&(t?e:r)}__computePosition(t,e){return t||e}__tooltipRenderer(t){t.textContent=typeof this.generator=="function"?this.generator(this.context):this.text}__autoOpenedChanged(t,e){t?document.addEventListener("keydown",this.__onKeyDown,!0):e&&document.removeEventListener("keydown",this.__onKeyDown,!0)}__forChanged(t){if(t){const e=this.getRootNode().getElementById(t);e?this.target=e:console.warn(`No element with id="${t}" found to show tooltip.`)}}__targetChanged(t,e){e&&(e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e),Ao(e,"aria-describedby",this._uniqueId)),t&&(t.addEventListener("mouseenter",this.__onMouseEnter),t.addEventListener("mouseleave",this.__onMouseLeave),t.addEventListener("focusin",this.__onFocusin),t.addEventListener("focusout",this.__onFocusout),t.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(t)}),xo(t,"aria-describedby",this._uniqueId))}__onFocusin(t){this.manual||!so()||this.target.contains(t.relatedTarget)||!this.__isShouldShow()||(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0}))}__onFocusout(t){this.manual||this.target.contains(t.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this._stateController.close(!0)}__onMouseEnter(){this.manual||!this.__isShouldShow()||this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0}))}__onMouseLeave(t){t.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseLeave(t){t.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(t){const e=this.__isTargetHidden;if(this.__isTargetHidden=!t,e&&t&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!t&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(t,e){this._overlayElement&&(t||e)&&this._overlayElement.requestContentUpdate()}__generatorChanged(t,e,r){t&&((e!==this.__oldTextGenerator||r!==this.__oldContext)&&t.requestContentUpdate(),this.__oldTextGenerator=e,this.__oldContext=r)}}customElements.define(gi.is,gi);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wa={HTML:1,SVG:2},Ca=(i,t)=>t===void 0?(i==null?void 0:i._$litType$)!==void 0:(i==null?void 0:i._$litType$)===t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pe extends Bo{constructor(t){if(super(t),this.it=G,t.type!==Vo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===G||t==null)return this._t=void 0,this.it=t;if(t===Uo)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}pe.directiveName="unsafeHTML",pe.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fe extends pe{}fe.directiveName="unsafeSVG",fe.resultType=2;const xa=$o(fe);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Aa(i){let t=G;if(i){const e=i.cloneNode(!0);e.removeAttribute("id"),t=qo`${xa(e.outerHTML)}`}return t}function Ea(i){return Ca(i,wa.SVG)||i===G}function Pa(i){let t=i==null||i===""?G:i;return Ea(t)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),t=G),t}function Cl(i,t){const e=Pa(i);jo(e,t)}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nt={};class Mt extends B(z){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static getIconset(t){let e=nt[t];return e||(e=document.createElement("vaadin-iconset"),e.name=t,nt[t]=e),e}connectedCallback(){super.connectedCallback(),this.style.display="none"}applyIcon(t){this._icons=this._icons||this.__createIconMap();const e=this._icons[this.__getIconId(t)];return{svg:Aa(e),size:this.size,viewBox:e?e.getAttribute("viewBox"):null}}__createIconMap(){const t={};return this.querySelectorAll("[id]").forEach(e=>{t[this.__getIconId(e.id)]=e}),t}__getIconId(t){return(t||"").replace(`${this.name}:`,"")}__nameChanged(t,e){e&&(nt[t]=Mt.getIconset(e),delete nt[e]),t&&(nt[t]=this,document.dispatchEvent(new CustomEvent("vaadin-iconset-registered",{detail:t})))}}customElements.define(Mt.is,Mt);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Io=document.createElement("template");Io.innerHTML=`<vaadin-iconset name="lumo" size="1000">
<svg xmlns="http://www.w3.org/2000/svg">
<defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs>
</svg>
</vaadin-iconset>`;document.head.appendChild(Io.content);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var Ta=Object.defineProperty,Oa=Object.getOwnPropertyDescriptor,Sa=(i,t,e,r)=>{for(var o=r>1?void 0:r?Oa(t,e):t,s=i.length-1,n;s>=0;s--)(n=i[s])&&(o=(r?n(t,e,o):n(o))||o);return r&&o&&Ta(t,e,o),o};let vi=class extends Lt{static get styles(){return m`
      :host {
          display: block;
          height: 100%;
      }
      
.message{
  display:inline-block;
  clear: both;
  padding: 20px;
  border-radius: 30px;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
}

.him{
  background: #eee;
  float: left;
}

.me{
  float: right;
  background: #0084ff;
  color: #fff;
  align-self: flex-end;
}

.him + .me{
  border-bottom-right-radius: 5px;
}

.me + .me{
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
      
      
      `}render(){return ct`
      <div style="width: 100%">
        <div class="me" id="message-me" style="  display:inline-block;
            clear: both;
            margin-right: 20px;
            padding: 5px;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 30px;
            margin-bottom: 10px;
        font-family: Helvetica, Arial, sans-serif;
        align-self: flex-end;">
          <p style="
    margin-bottom: 0px;
    font-size: 12px;
    
    color: hsl(125deg 100% 86%);
    display: flex;
    justify-content: flex-end;
    font-weight: bold;
" id="message-username">
            Username
          </p>

          <p style="
    margin-bottom: 3px;
    font-size: 15px;
    margin-top: 2px;
    color: #efefef;
" id="message-message">
            Message from user
          </p>


        </div>
      </div>
    `}createRenderRoot(){return this}};vi=Sa([Nt("chat-bubble-me")],vi);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-ordered-layout" is deprecated. Use "@vaadin/vertical-layout" instead.');var za=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,Ma=(i,t,e,r)=>{for(var o=r>1?void 0:r?ka(t,e):t,s=i.length-1,n;s>=0;s--)(n=i[s])&&(o=(r?n(t,e,o):n(o))||o);return r&&o&&za(t,e,o),o};let bi=class extends Lt{static get styles(){return m`
      :host {
          display: block;
          height: 100%;
      }
      
.message{
  display:inline-block;
  clear: both;
  padding: 20px;
  border-radius: 30px;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
}

.him{
  background: #eee;
  float: left;
}

.me{
  float: right;
  background: #0084ff;
  color: #fff;
  align-self: flex-end;
}

.him + .me{
  border-bottom-right-radius: 5px;
}

.me + .me{
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
      
      
      `}render(){return ct`
<div style="width: 100%">
 <div class="him" id="message-him" style="
    display: inline-block;
    clear: both;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 30px;
    margin-bottom: 10px;
    margin-right: 20px;
    font-family: Helvetica, Arial, sans-serif;">
  
     <p style="
    margin-bottom: 0px;
    font-size: 12px;
    color: hsl(214deg 42% 45%);
    font-weight: bold;
" id="message-username">
      Username 
  </p>
     
  <p style="
    margin-bottom: 3px;
    font-size: 15px;
    margin-top: 2px;" id="message-message">
      Message 
  </p>
     
     
     
     
 </div>
</div>
`}createRenderRoot(){return this}};bi=Ma([Nt("chat-bubble")],bi);const Do=document.createElement("template");Do.innerHTML=`<style>
  ${Yo.cssText}
  ${Wo.cssText}
</style>`;document.head.appendChild(Do.content);const Ho=function(i,t=!1){const e=document.createElement("template");e.innerHTML=i,document.head[t?"insertBefore":"appendChild"](e.content,document.head.firstChild)},La=typeof Ft=="string"?wi(Ft):Ft;Ho(`<style>${La}</style>`);let vt;const yi=document.getElementsByTagName("script");for(let i=0;i<yi.length;i++){const t=yi[i];if(t.getAttribute("type")=="module"&&t.getAttribute("data-app-id")&&!t["vaadin-bundle"]){vt=t;break}}if(!vt)throw new Error("Could not find the bundle script to identify the application id");vt["vaadin-bundle"]=!0;window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});const Ro=window.Vaadin.Flow.fallbacks;Ro[vt.getAttribute("data-app-id")]={};Ro[vt.getAttribute("data-app-id")].loadFallback=function(){return Go(()=>import("./generated-flow-imports-fallback.eae3a896.js"),["./generated-flow-imports-fallback.eae3a896.js","./indexhtml.54b5b5ca.js"],import.meta.url)};const xl=Object.freeze(Object.defineProperty({__proto__:null,addCssBlock:Ho},Symbol.toStringTag,{value:"Module"}));export{Pt as $,Sn as A,Ga as B,X as C,Wn as D,B as E,I as F,nr as G,Ba as H,Gn as I,v as J,zi as K,qn as L,Ia as M,Or as N,Cs as O,z as P,Je as Q,Ha as R,$a as S,uo as T,or as U,y as V,ue as W,yl as X,Qo as Y,vl as Z,we as _,po as a,Da as a0,Fa as a1,Tt as a2,lr as a3,F as a4,da as a5,tn as a6,Ra as a7,Le as a8,Va as a9,V as aA,oa as aB,ra as aC,Be as aD,Mt as aE,Pa as aF,Cl as aG,Po as aH,Qn as aI,co as aJ,K as aK,ui as aL,Ca as aM,hi as aN,Dn as aO,gi as aP,xl as aQ,Ua as aa,bo as ab,ho as ac,Qa as ad,ze as ae,$t as af,ke as ag,ba as ah,O as ai,ro as aj,To as ak,Hn as al,Yn as am,Oo as an,ea as ao,Zn as ap,sa as aq,Oe as ar,kt as as,gt as at,el as au,de as av,On as aw,zo as ax,pi as ay,zn as az,Bn as b,Fn as c,g as d,ta as e,H as f,Ls as g,S as h,dn as i,Ce as j,Ns as k,ja as l,Is as m,Ds as n,Ja as o,ni as p,xo as q,Ao as r,so as s,Yi as t,yo as u,Ji as v,Ka as w,Wa as x,Xa as y,rn as z};
