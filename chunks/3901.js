/*! For license information please see 3901.js.LICENSE.txt */
"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[3901],{90589:(e,t,n)=>{function i(e){return"l"===e?"m":"s"}async function a(e){await(function(e){return"function"==typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}n.d(t,{c:()=>a,g:()=>i})},74398:(e,t,n)=>{n.d(t,{H:()=>L,c:()=>m,d:()=>b,f:()=>p,i:()=>g,r:()=>h,s:()=>f});var i=n(72006),a=n(62902);const s=["calcite-input","calcite-input-number","calcite-input-text","calcite-text-area"],o="hidden-form-input";function c(e){return"checked"in e}const l=new WeakMap,r=new WeakSet;function u(e){"status"in e&&(e.status="idle"),"validationIcon"in e&&(e.validationIcon=!1),"validationMessage"in e&&(e.validationMessage="")}function d(e){const t=e?.target,n=t?.parentElement,i=n?.nodeName?.toLowerCase(),a=i?.split("-");if(a.length<2||"calcite"!==a[0])return;var o,c;if(e?.preventDefault(),o=n,c=t?.validationMessage,"status"in o&&(o.status="invalid"),"validationIcon"in o&&!o.validationIcon&&(o.validationIcon=!0),"validationMessage"in o&&!o.validationMessage&&(o.validationMessage=c),n?.validationMessage!==t?.validationMessage)return;const l=function(e){return`${e.split("-").map(((e,t)=>0===t?e:`${e[0].toUpperCase()}${e.slice(1)}`)).join("")}${s.includes(e)?"Input":"Change"}`}(i);n.addEventListener(l,(()=>u(n)),{once:!0})}function f(e){const{formEl:t}=e;return!!t&&(t.addEventListener("invalid",d,!0),t.requestSubmit(),t.removeEventListener("invalid",d,!0),requestAnimationFrame((()=>{const e=t.querySelectorAll("[status=invalid]");for(const t of e)if(t?.validationMessage){t?.setFocus();break}})),!0)}function h(e){e.formEl?.reset()}function m(e){const{el:t,value:n}=e,a=p(e);if(!a||function(e,t){if((0,i.c)(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let a=!1;return e.addEventListener(n,(e=>{a=e.composedPath().some((e=>r.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),a}(a,t))return;e.formEl=a,e.defaultValue=n,c(e)&&(e.defaultChecked=e.checked);const s=(e.onFormReset||v).bind(e);a.addEventListener("reset",s),l.set(e.el,s),r.add(t)}function p(e){const{el:t,form:n}=e;return n?(0,i.q)(t,{id:n}):(0,i.c)(t,"form")}function v(){u(this),c(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function b(e){const{el:t,formEl:n}=e;if(!n)return;const i=l.get(t);n.removeEventListener("reset",i),l.delete(t),e.formEl=null,r.delete(t)}const g="calciteInternalHiddenInputInput",E=e=>{e.target.dispatchEvent(new CustomEvent(g,{bubbles:!0}))},w=e=>e.removeEventListener("input",E);function k(e,t,n){const{defaultValue:i,disabled:a,form:s,name:o,required:l}=e;t.defaultValue=i,t.disabled=a,t.name=o,t.required=l,t.tabIndex=-1,s?t.setAttribute("form",s):t.removeAttribute("form"),c(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",e.syncHiddenFormInput?.(t)}const L=({component:e})=>(function(e){const{el:t,formEl:n,name:i,value:a}=e,{ownerDocument:s}=t,c=t.querySelectorAll(`input[slot="${o}"]`);if(!n||!i)return void c.forEach((e=>{w(e),e.remove()}));const l=Array.isArray(a)?a:[a],r=[],u=new Set;let d;c.forEach((t=>{const n=l.find((e=>e==t.value));null!=n?(u.add(n),k(e,t,n)):r.push(t)})),l.forEach((t=>{if(u.has(t))return;let n=r.pop();n||(n=s.createElement("input"),n.slot=o),d||(d=s.createDocumentFragment()),d.append(n),n.addEventListener("input",E),k(e,n,t)})),d&&t.append(d),r.forEach((e=>{w(e),e.remove()}))}(e),(0,a.h)("slot",{name:o}))},74697:(e,t,n)=>{n.d(t,{I:()=>r,d:()=>u});var i=n(62902),a=n(72006),s=n(40313);const o={},c={},l={s:16,m:24,l:32};const r=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:e,flipRtl:t,pathData:n,scale:s,textLabel:o}=this,c=(0,a.a)(e),r=l[s],u=!!o,d=[].concat(n||"");return(0,i.h)(i.xr,{"aria-hidden":(0,a.t)(!u),"aria-label":u?o:null,role:u?"img":null},(0,i.h)("svg",{"aria-hidden":"true",class:{"flip-rtl":"rtl"===c&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${r} ${r}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map((e=>"string"==typeof e?(0,i.h)("path",{d:e}):(0,i.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:n}=this;if(!i.L2.isBrowser||!e||!n)return;const a=await async function({icon:e,scale:t}){const n=l[t],a=function(e){const t=!isNaN(Number(e.charAt(0))),n=e.split("-");if(n.length>0){const t=/[a-z]/i;e=n.map(((e,n)=>e.replace(t,(function(e,t){return 0===n&&0===t?e:e.toUpperCase()})))).join("")}return t?`i${e}`:e}(e),s="F"===a.charAt(a.length-1),r=`${s?a.substring(0,a.length-1):a}${n}${s?"F":""}`;if(o[r])return o[r];c[r]||(c[r]=fetch((0,i.OX)(`./assets/icon/${r}.json`)).then((e=>e.json())).catch((()=>(console.error(`"${r}" is not a valid calcite-ui-icon name`),""))));const u=await c[r];return o[r]=u,u}({icon:e,scale:t});e===this.icon&&(this.pathData=a)}waitUntilVisible(e){this.intersectionObserver=(0,s.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function u(){"undefined"!=typeof customElements&&["calcite-icon"].forEach((e=>{"calcite-icon"===e&&(customElements.get(e)||customElements.define(e,r))}))}u()},27114:(e,t,n)=>{n.d(t,{I:()=>E,c:()=>v,d:()=>b,u:()=>d});var i=n(62902);const a=/firefox/i.test(function(){if(!i.L2.isBrowser)return"";const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}()),s=a?new WeakMap:null;function o(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function c(e){const t=e.target;if(a&&!s.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const l=["mousedown","mouseup","click"];function r(e){const t=e.target;a&&!s.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const u={capture:!0};function d(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void f(e);m(e),e.el.removeAttribute("aria-disabled")}function f(e){if(e.el.click=o,a){const t=function(e){return e.el.parentElement||e.el}(e),n=s.get(e.el);return n!==t&&(p(n),s.set(e.el,t)),void h(s.get(e.el))}h(e.el)}function h(e){e&&(e.addEventListener("pointerdown",c,u),l.forEach((t=>e.addEventListener(t,r,u))))}function m(e){if(delete e.el.click,a)return p(s.get(e.el)),void s.delete(e.el);p(e.el)}function p(e){e&&(e.removeEventListener("pointerdown",c,u),l.forEach((t=>e.removeEventListener(t,r,u))))}function v(e){e.disabled&&a&&f(e)}function b(e){a&&m(e)}const g={container:"interaction-container"};function E({disabled:e},t){return(0,i.h)("div",{class:g.container,inert:e},...t)}},49668:(e,t,n)=>{n.d(t,{a:()=>L,b:()=>c,c:()=>p,d:()=>v,g:()=>g,l:()=>o});var i=n(72006),a=n(90589);const s="calciteInternalLabelClick",o="calciteInternalLabelConnected",c="calciteInternalLabelDisconnected",l="calcite-label",r=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakMap,h=new Set,m=e=>{const{id:t}=e,n=t&&(0,i.q)(e,{selector:`${l}[for="${t}"]`});if(n)return n;const a=(0,i.c)(e,l);return!a||function(e,t){let n;const i="custom-element-ancestor-check",a=i=>{i.stopImmediatePropagation();const a=i.composedPath();n=a.slice(a.indexOf(t),a.indexOf(e))};e.addEventListener(i,a,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,a);return n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(a,e)?null:a};function p(e){if(!e)return;const t=m(e.el);if(u.has(t)&&t===e.labelEl||!t&&h.has(e))return;const n=k.bind(e);if(t){e.labelEl=t;const i=r.get(t)||[];i.push(e),r.set(t,i.sort(b)),u.has(e.labelEl)||(u.set(e.labelEl,E),e.labelEl.addEventListener(s,E)),h.delete(e),document.removeEventListener(o,d.get(e)),f.set(e,n),document.addEventListener(c,n)}else h.has(e)||(n(),document.removeEventListener(c,f.get(e)))}function v(e){if(!e)return;if(h.delete(e),document.removeEventListener(o,d.get(e)),document.removeEventListener(c,f.get(e)),d.delete(e),f.delete(e),!e.labelEl)return;const t=r.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(s,u.get(e.labelEl)),u.delete(e.labelEl)),r.set(e.labelEl,t.filter((t=>t!==e)).sort(b)),e.labelEl=null}function b(e,t){return(0,i.u)(e.el,t.el)?-1:1}function g(e){return e.label||e.labelEl?.textContent?.trim()||""}function E(e){const t=e.detail.sourceEvent.target,n=r.get(this),i=n.find((e=>e.el===t));if(n.includes(i))return;const a=n[0];a.disabled||a.onLabelClick(e)}function w(){h.has(this)&&p(this)}function k(){h.add(this);const e=d.get(this)||w.bind(this);d.set(this,e),document.addEventListener(o,e)}async function L(e){if(await(0,a.c)(e),r.has(e))return;const t=e.ownerDocument?.getElementById(e.for);t&&requestAnimationFrame((()=>{for(const e of h)if(e.el===t){p(e);break}}))}},832:(e,t,n)=>{n.d(t,{a:()=>c,c:()=>l,s:()=>o});var i=n(62902);const a=new WeakMap,s=new WeakMap;function o(e){s.set(e,new Promise((t=>a.set(e,t))))}function c(e){a.get(e)()}async function l(e){if(await function(e){return s.get(e)}(e),i.L2.isBrowser)return(0,i.$x)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);