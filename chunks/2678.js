/*! For license information please see 2678.js.LICENSE.txt */
"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[2678],{22678:(e,t,i)=>{i.r(t),i.d(t,{CalciteChip:()=>b,defineCustomElement:()=>g});var n=i(62902),c=i(72006),s=i(26786),a=i(832),o=i(27053),l=i(27114),r=i(32282),h=i(40313),d=i(7105),p=i(90589),u=i(74697);const v=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteChipClose=(0,n.lh)(this,"calciteChipClose",6),this.calciteChipSelect=(0,n.lh)(this,"calciteChipSelect",6),this.calciteInternalChipKeyEvent=(0,n.lh)(this,"calciteInternalChipKeyEvent",6),this.mutationObserver=(0,h.c)("mutation",(()=>this.updateHasText())),this.close=()=>{this.calciteChipClose.emit(),this.selected=!1,this.closed=!0},this.closeButtonKeyDownHandler=e=>{(0,d.i)(e.key)&&(e.preventDefault(),this.close())},this.handleSlotImageChange=e=>{this.hasImage=(0,c.d)(e)},this.handleEmittingEvent=()=>{this.interactive&&this.calciteChipSelect.emit()},this.disabled=!1,this.appearance="solid",this.kind="neutral",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.label=void 0,this.value=void 0,this.closed=!1,this.selectionMode="none",this.selected=!1,this.messageOverrides=void 0,this.messages=void 0,this.interactive=!1,this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasText=!1,this.hasImage=!1}onMessagesChange(){}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}connectedCallback(){(0,s.c)(this),(0,l.c)(this),(0,r.c)(this),(0,o.c)(this),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}componentDidLoad(){(0,a.a)(this)}componentDidRender(){(0,l.u)(this)}disconnectedCallback(){(0,s.d)(this),(0,l.d)(this),(0,r.d)(this),(0,o.d)(this),this.mutationObserver?.disconnect()}async componentWillLoad(){(0,a.s)(this),n.L2.isBrowser&&(await(0,o.s)(this),this.updateHasText())}keyDownHandler(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.handleEmittingEvent(),e.preventDefault();break;case"ArrowRight":case"ArrowLeft":case"Home":case"End":this.calciteInternalChipKeyEvent.emit(e),e.preventDefault()}}clickHandler(){!this.interactive&&this.closable&&this.closeButtonEl.focus()}async setFocus(){await(0,a.c)(this),!this.disabled&&this.interactive?this.containerEl?.focus():!this.disabled&&this.closable&&this.closeButtonEl?.focus()}updateHasText(){this.hasText=this.el.textContent.trim().length>0}renderChipImage(){return(0,n.h)("div",{class:"image-container"},(0,n.h)("slot",{name:"image",onSlotchange:this.handleSlotImageChange}))}renderSelectionIcon(){const e="multiple"===this.selectionMode&&this.selected?"check-circle-f":"multiple"===this.selectionMode?"circle":this.selected?"circle-f":void 0;return(0,n.h)("div",{class:{"select-icon":!0,"select-icon--active":"multiple"===this.selectionMode||this.selected}},e?(0,n.h)("calcite-icon",{icon:e,scale:(0,p.g)(this.scale)}):null)}renderCloseButton(){return(0,n.h)("button",{"aria-label":this.messages.dismissLabel,class:"close",onClick:this.close,onKeyDown:this.closeButtonKeyDownHandler,tabIndex:this.disabled?-1:0,ref:e=>this.closeButtonEl=e},(0,n.h)("calcite-icon",{icon:"x",scale:(0,p.g)(this.scale)}))}renderIcon(){return(0,n.h)("calcite-icon",{class:"chip-icon",flipRtl:this.iconFlipRtl,icon:this.icon,scale:(0,p.g)(this.scale)})}render(){const{disabled:e}=this,t=e||!e&&!this.interactive,i="multiple"===this.selectionMode&&this.interactive?"checkbox":"none"!==this.selectionMode&&this.interactive?"radio":this.interactive?"button":void 0;return(0,n.h)(n.xr,null,(0,n.h)(l.I,{disabled:e},(0,n.h)("div",{"aria-checked":"none"!==this.selectionMode&&this.interactive?(0,c.t)(this.selected):void 0,"aria-disabled":t?(0,c.t)(e):void 0,"aria-label":this.label,class:{container:!0,"text--slotted":this.hasText,"image--slotted":this.hasImage,selectable:"none"!==this.selectionMode,multiple:"multiple"===this.selectionMode,closable:this.closable,"non-interactive":!this.interactive,"is-circle":!(this.closable||this.hasText||this.icon&&this.hasImage||"none"!==this.selectionMode&&(!this.selectionMode||"multiple"===this.selectionMode||this.selected))},onClick:this.handleEmittingEvent,role:i,tabIndex:t?-1:0,ref:e=>this.containerEl=e},"none"!==this.selectionMode&&this.renderSelectionIcon(),this.renderChipImage(),this.icon&&this.renderIcon(),(0,n.h)("span",{class:"title"},(0,n.h)("slot",null)),this.closable&&this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-s-internal:0.25rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=s]) .close,:host([scale=s]) .select-icon--active{block-size:1rem;inline-size:1rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem}:host([scale=s]) .container.is-circle{block-size:1.5rem;inline-size:1.5rem}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-s-internal:0.375rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=m]) .close,:host([scale=m]) .image-container,:host([scale=m]) .select-icon--active{block-size:1.5rem;inline-size:1.5rem}:host([scale=m]) .container.is-circle{block-size:2rem;inline-size:2rem}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-s-internal:0.5rem;--calcite-chip-spacing-l-internal:0.75rem}:host([scale=l]) .image-container,:host([scale=l]) .close,:host([scale=l]) .select-icon--active{block-size:2rem;inline-size:2rem}:host([scale=l]) .container.is-circle{block-size:2.75rem;inline-size:2.75rem}:host{display:inline-flex;cursor:default;border-radius:9999px}.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1);font-weight:var(--calcite-font-weight-medium);outline-color:transparent}.container:not(.is-circle){padding-inline:var(--calcite-chip-spacing-s-internal)}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite--color-brand)));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .container.image--slotted{padding-inline-start:calc(0.125rem / 2)}:host([scale=s]) .container.is-circle{padding-inline:0}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:var(--calcite-chip-spacing-s-internal)}.container:not(.text--slotted) .title{display:none}.container:not(.image--slotted) .image-container{display:none}.container.closable{padding-inline-end:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted{padding-inline-start:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).image--slotted .image-container~.chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).selectable:not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.selectable):not(.text--slotted) .chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text-slotted).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container{margin-inline-end:0}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container~.chip-icon{margin-inline-start:calc(var(--calcite-chip-spacing-s-internal) * 2)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline:var(--calcite-chip-spacing-s-internal)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none}.close{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-color-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-color-transparent-hover);--calcite-chip-transparent-press:var(--calcite-color-transparent-press)}.close:hover{background-color:var(--calcite-chip-transparent-hover)}.close:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite--color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:active{background-color:var(--calcite-chip-transparent-press)}.close calcite-icon{color:inherit}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:relative;visibility:hidden;inline-size:0;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out}.select-icon.select-icon--active{visibility:visible;opacity:0.5}.container:not(.is-circle).image--slotted .select-icon.select-icon--active{margin-inline-end:var(--calcite-chip-spacing-s-internal)}:host([selected]) .select-icon{opacity:1}.container:hover .select-icon--active{opacity:1}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}:host([kind=neutral]){background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host([kind=neutral]) .container{border-color:transparent}:host([kind=neutral]) .close{color:var(--calcite-color-text-3)}:host([kind=neutral]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-color-text-3))}:host([kind=inverse]){background-color:var(--calcite-color-inverse);color:var(--calcite-color-text-inverse)}:host([kind=inverse]) .container{border-color:transparent}:host([kind=inverse]) .close{color:var(--calcite-color-text-inverse)}:host([kind=inverse]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-color-text-inverse))}:host([kind=brand]){background-color:var(--calcite-color-brand);color:var(--calcite-color-text-inverse)}:host([kind=brand]) .container{border-color:transparent}:host([kind=brand]) .close{color:var(--calcite-color-text-inverse)}:host([kind=brand]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-color-text-inverse))}:host([appearance=outline-fill]),:host([appearance=outline]){background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1)}:host([appearance=outline-fill]) .close,:host([appearance=outline]) .close{color:var(--calcite-color-text-3)}:host([appearance=outline-fill]) .chip-icon,:host([appearance=outline]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-color-text-3))}:host([appearance=outline-fill]){background-color:var(--calcite-color-foreground-1)}:host([appearance=outline]){background-color:transparent}:host([kind=neutral][appearance=outline-fill]) .container,:host([kind=neutral][appearance=outline]) .container{border-color:var(--calcite-color-border-1)}:host([kind=inverse][appearance=outline-fill]) .container,:host([kind=inverse][appearance=outline]) .container{border-color:var(--calcite-color-border-inverse)}:host([kind=brand][appearance=outline-fill]) .container,:host([kind=brand][appearance=outline]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand][appearance=solid]) button,:host([kind=inverse][appearance=solid]) button{outline-color:var(--calcite-color-text-inverse)}:host([closed]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-chip",{disabled:[516],appearance:[513],kind:[513],closable:[516],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],label:[1],value:[8],closed:[1540],selectionMode:[1,"selection-mode"],selected:[1540],messageOverrides:[1040],messages:[1040],interactive:[4],defaultMessages:[32],effectiveLocale:[32],hasText:[32],hasImage:[32],setFocus:[64]},[[0,"keydown","keyDownHandler"],[0,"click","clickHandler"]],{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function m(){"undefined"!=typeof customElements&&["calcite-chip","calcite-icon"].forEach((e=>{switch(e){case"calcite-chip":customElements.get(e)||customElements.define(e,v);break;case"calcite-icon":customElements.get(e)||(0,u.d)()}}))}m();const b=v,g=m},90589:(e,t,i)=>{function n(e){return"l"===e?"m":"s"}async function c(e){await(function(e){return"function"==typeof e.componentOnReady}(e)?e.componentOnReady():new Promise((e=>requestAnimationFrame((()=>e())))))}i.d(t,{c:()=>c,g:()=>n})},26786:(e,t,i)=>{i.d(t,{c:()=>l,d:()=>r});var n=i(62902),c=i(40313);const s=new Set;let a;const o={childList:!0};function l(e){a||(a=(0,c.c)("mutation",h)),a.observe(e.el,o)}function r(e){s.delete(e.el),h(a.takeRecords()),a.disconnect();for(const[e]of s.entries())a.observe(e,o)}function h(e){e.forEach((({target:e})=>{(0,n.$x)(e)}))}},74697:(e,t,i)=>{i.d(t,{I:()=>r,d:()=>h});var n=i(62902),c=i(72006),s=i(40313);const a={},o={},l={s:16,m:24,l:32};const r=(0,n.w$)(class extends n.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:e,flipRtl:t,pathData:i,scale:s,textLabel:a}=this,o=(0,c.a)(e),r=l[s],h=!!a,d=[].concat(i||"");return(0,n.h)(n.xr,{"aria-hidden":(0,c.t)(!h),"aria-label":h?a:null,role:h?"img":null},(0,n.h)("svg",{"aria-hidden":"true",class:{"flip-rtl":"rtl"===o&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${r} ${r}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map((e=>"string"==typeof e?(0,n.h)("path",{d:e}):(0,n.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:i}=this;if(!n.L2.isBrowser||!e||!i)return;const c=await async function({icon:e,scale:t}){const i=l[t],c=function(e){const t=!isNaN(Number(e.charAt(0))),i=e.split("-");if(i.length>0){const t=/[a-z]/i;e=i.map(((e,i)=>e.replace(t,(function(e,t){return 0===i&&0===t?e:e.toUpperCase()})))).join("")}return t?`i${e}`:e}(e),s="F"===c.charAt(c.length-1),r=`${s?c.substring(0,c.length-1):c}${i}${s?"F":""}`;if(a[r])return a[r];o[r]||(o[r]=fetch((0,n.OX)(`./assets/icon/${r}.json`)).then((e=>e.json())).catch((()=>(console.error(`"${r}" is not a valid calcite-ui-icon name`),""))));const h=await o[r];return a[r]=h,h}({icon:e,scale:t});e===this.icon&&(this.pathData=c)}waitUntilVisible(e){this.intersectionObserver=(0,s.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function h(){"undefined"!=typeof customElements&&["calcite-icon"].forEach((e=>{"calcite-icon"===e&&(customElements.get(e)||customElements.define(e,r))}))}h()},27114:(e,t,i)=>{i.d(t,{I:()=>k,c:()=>b,d:()=>g,u:()=>d});var n=i(62902);const c=/firefox/i.test(function(){if(!n.L2.isBrowser)return"";const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}()),s=c?new WeakMap:null;function a(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function o(e){const t=e.target;if(c&&!s.get(t))return;const{disabled:i}=t;i&&e.preventDefault()}const l=["mousedown","mouseup","click"];function r(e){const t=e.target;c&&!s.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const h={capture:!0};function d(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void p(e);v(e),e.el.removeAttribute("aria-disabled")}function p(e){if(e.el.click=a,c){const t=function(e){return e.el.parentElement||e.el}(e),i=s.get(e.el);return i!==t&&(m(i),s.set(e.el,t)),void u(s.get(e.el))}u(e.el)}function u(e){e&&(e.addEventListener("pointerdown",o,h),l.forEach((t=>e.addEventListener(t,r,h))))}function v(e){if(delete e.el.click,c)return m(s.get(e.el)),void s.delete(e.el);m(e.el)}function m(e){e&&(e.removeEventListener("pointerdown",o,h),l.forEach((t=>e.removeEventListener(t,r,h))))}function b(e){e.disabled&&c&&p(e)}function g(e){c&&v(e)}const f={container:"interaction-container"};function k({disabled:e},t){return(0,n.h)("div",{class:f.container,inert:e},...t)}},832:(e,t,i)=>{i.d(t,{a:()=>o,c:()=>l,s:()=>a});var n=i(62902);const c=new WeakMap,s=new WeakMap;function a(e){s.set(e,new Promise((t=>c.set(e,t))))}function o(e){c.get(e)()}async function l(e){if(await function(e){return s.get(e)}(e),n.L2.isBrowser)return(0,n.$x)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);