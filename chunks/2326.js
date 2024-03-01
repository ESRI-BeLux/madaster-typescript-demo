/*! For license information please see 2326.js.LICENSE.txt */
"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[2326],{12326:(e,t,i)=>{i.r(t),i.d(t,{CalciteFlowItem:()=>A,defineCustomElement:()=>P});var a=i(62902),s=i(72006),o=i(27114),n=i(832),l=i(32282),c=i(27053),r=i(40313),d=i(61431),h=i(65336),g=i(48718),m=i(74697),p=i(48131),u=i(57063),b=i(93968);const f="header-content",v="header-actions",C="action-bar",k="header-actions-start",y="header-actions-end",w="header-menu-actions",x="header-content",S="footer",E="footer-actions",z=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=(0,a.lh)(this,"calcitePanelClose",6),this.calcitePanelToggle=(0,a.lh)(this,"calcitePanelToggle",6),this.calcitePanelScroll=(0,a.lh)(this,"calcitePanelScroll",6),this.resizeObserver=(0,r.c)("resize",(()=>this.resizeHandler())),this.resizeHandler=()=>{const{panelScrollEl:e}=this;e&&"number"==typeof e.scrollHeight&&"number"==typeof e.offsetHeight&&(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=(0,s.d)(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=(0,s.d)(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=(0,s.d)(e)},this.handleActionBarSlotChange=e=>{const t=(0,s.s)(e).filter((e=>e?.matches("calcite-action-bar")));t.forEach((e=>e.layout="horizontal")),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=(0,s.d)(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=(0,s.d)(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=(0,s.d)(e)},this.handleFabSlotChange=e=>{this.hasFab=(0,s.d)(e)},this.setPanelScrollEl=e=>{this.panelScrollEl=e,this.resizeObserver?.disconnect(),e&&(this.resizeObserver?.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){(0,o.c)(this),(0,l.c)(this),(0,c.c)(this)}async componentWillLoad(){(0,n.s)(this),await(0,c.s)(this)}componentDidLoad(){(0,n.a)(this)}componentDidRender(){(0,o.u)(this)}disconnectedCallback(){(0,o.d)(this),(0,l.d)(this),(0,c.d)(this),this.resizeObserver?.disconnect()}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}async setFocus(){await(0,n.c)(this),(0,s.f)(this.containerEl)}async scrollContentTo(e){this.panelScrollEl?.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:i,hasHeaderContent:s}=this,o=e?(0,a.h)(h.H,{class:"heading",level:t},e):null,n=i?(0,a.h)("span",{class:"description"},i):null;return s||!o&&!n?null:(0,a.h)("div",{class:f,key:"header-content"},o,n)}renderActionBar(){return(0,a.h)("div",{class:"action-bar-container",hidden:!this.hasActionBar},(0,a.h)("slot",{name:C,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return(0,a.h)("div",{class:f,hidden:!this.hasHeaderContent,key:"slotted-header-content"},(0,a.h)("slot",{name:x,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return(0,a.h)("div",{class:{"header-actions--start":!0,[v]:!0},hidden:!e,key:"header-actions-start"},(0,a.h)("slot",{name:k,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:i,collapsed:o,collapseDirection:n,collapsible:l,hasMenuItems:c}=this,{collapse:r,expand:d,close:h}=t,g=["chevron-down","chevron-up"];"up"===n&&g.reverse();const m=l?(0,a.h)("calcite-action",{"aria-expanded":(0,s.t)(!o),"aria-label":r,"data-test":"collapse",icon:o?g[0]:g[1],onClick:this.collapse,text:r,title:o?d:r}):null,p=i?(0,a.h)("calcite-action",{"aria-label":h,"data-test":"close",icon:"x",onClick:this.close,text:h,title:h}):null,u=(0,a.h)("slot",{name:y,onSlotchange:this.handleHeaderActionsEndSlotChange}),b=e||m||p||c;return(0,a.h)("div",{class:{"header-actions--end":!0,[v]:!0},hidden:!b,key:"header-actions-end"},u,this.renderMenu(),m,p)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:i}=this;return(0,a.h)("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:i,overlayPositioning:this.overlayPositioning,placement:"bottom-end"},(0,a.h)("calcite-action",{icon:"ellipsis",slot:d.S.trigger,text:t.options}),(0,a.h)("slot",{name:w,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:i,closable:s,collapsible:o,hasMenuItems:n,hasActionBar:l}=this,c=this.renderHeaderContent(),r=e||!!c||t||i||o||s||n;return this.showHeaderContent=r,(0,a.h)("header",{class:"header",hidden:!(r||l)},(0,a.h)("div",{class:{"header-container":!0,"header-container--border-end":l},hidden:!r},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),c,this.renderHeaderActionsEnd()),this.renderActionBar())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:t}=this,i=e||t;return(0,a.h)("footer",{class:"footer",hidden:!i},(0,a.h)("slot",{key:"footer-slot",name:S,onSlotchange:this.handleFooterSlotChange}),(0,a.h)("slot",{key:"footer-actions-slot",name:E,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return(0,a.h)("div",{class:"content-wrapper",hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},(0,a.h)("slot",null),this.renderFab())}renderFab(){return(0,a.h)("div",{class:"fab-container",hidden:!this.hasFab},(0,a.h)("slot",{name:"fab",onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:t,panelKeyDownHandler:i,closed:n,closable:l}=this,c=(0,a.h)("article",{"aria-busy":(0,s.t)(t),class:"container",hidden:n,onKeyDown:i,tabIndex:l?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return(0,a.h)(o.I,{disabled:e},t?(0,a.h)("calcite-scrim",{loading:t}):null,c)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-color-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function H(){"undefined"!=typeof customElements&&["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,z);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,d.d)();break;case"calcite-icon":customElements.get(e)||(0,m.d)();break;case"calcite-loader":customElements.get(e)||(0,p.d)();break;case"calcite-popover":customElements.get(e)||(0,u.d)();break;case"calcite-scrim":customElements.get(e)||(0,b.d)()}}))}H();const F=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=(0,a.lh)(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=(0,a.lh)(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=(0,a.lh)(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=(0,a.lh)(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){(0,o.c)(this),(0,l.c)(this),(0,c.c)(this)}async componentWillLoad(){await(0,c.s)(this),(0,n.s)(this)}componentDidRender(){(0,o.u)(this)}disconnectedCallback(){(0,o.d)(this),(0,l.d)(this),(0,c.d)(this)}componentDidLoad(){(0,n.a)(this)}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}async setFocus(){await(0,n.c)(this);const{backButtonEl:e,containerEl:t}=this;return e?e.setFocus():t?t.setFocus():void 0}async scrollContentTo(e){await(this.containerEl?.scrollContentTo(e))}renderBackButton(){const{el:e}=this,t="rtl"===(0,s.a)(e),{showBackButton:i,backButtonClick:o,messages:n}=this,l=n.back,c=t?"chevron-right":"chevron-left";return i?(0,a.h)("calcite-action",{"aria-label":l,class:"back-button",icon:c,key:"flow-back-button",onClick:o,scale:"s",slot:"header-actions-start",text:l,title:l,ref:this.setBackRef}):null}render(){const{collapsed:e,collapseDirection:t,collapsible:i,closable:s,closed:n,description:l,disabled:c,heading:r,headingLevel:d,loading:h,menuOpen:g,messages:m,overlayPositioning:p}=this;return(0,a.h)(a.xr,null,(0,a.h)(o.I,{disabled:c},(0,a.h)("calcite-panel",{closable:s,closed:n,collapseDirection:t,collapsed:e,collapsible:i,description:l,disabled:c,heading:r,headingLevel:d,loading:h,menuOpen:g,messageOverrides:m,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,overlayPositioning:p,ref:this.setContainerRef},this.renderBackButton(),(0,a.h)("slot",{name:"action-bar",slot:C}),(0,a.h)("slot",{name:"header-actions-start",slot:k}),(0,a.h)("slot",{name:"header-actions-end",slot:y}),(0,a.h)("slot",{name:"header-content",slot:x}),(0,a.h)("slot",{name:"header-menu-actions",slot:w}),(0,a.h)("slot",{name:"fab",slot:"fab"}),(0,a.h)("slot",{name:"footer-actions",slot:E}),(0,a.h)("slot",{name:"footer",slot:S}),(0,a.h)("slot",null))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function L(){"undefined"!=typeof customElements&&["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,F);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,d.d)();break;case"calcite-icon":customElements.get(e)||(0,m.d)();break;case"calcite-loader":customElements.get(e)||(0,p.d)();break;case"calcite-panel":customElements.get(e)||H();break;case"calcite-popover":customElements.get(e)||(0,u.d)();break;case"calcite-scrim":customElements.get(e)||(0,b.d)()}}))}L();const A=F,P=L},93968:(e,t,i)=>{i.d(t,{S:()=>r,d:()=>d});var a=i(62902),s=i(32282),o=i(27053),n=i(40313),l=i(72006),c=i(48131);const r=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=(0,n.c)("resize",(()=>this.handleResize())),this.handleDefaultSlotChange=e=>{this.hasContent=(0,l.r)(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}connectedCallback(){(0,s.c)(this),(0,o.c)(this),this.resizeObserver?.observe(this.el)}async componentWillLoad(){await(0,o.s)(this)}disconnectedCallback(){(0,s.d)(this),(0,o.d)(this),this.resizeObserver?.disconnect()}render(){const{hasContent:e,loading:t,messages:i}=this;return(0,a.h)("div",{class:"scrim"},t?(0,a.h)("calcite-loader",{label:i.loading,scale:this.loaderScale,ref:this.storeLoaderEl}):null,(0,a.h)("div",{class:"content",hidden:!e},(0,a.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<72?"s":e>=480?"l":"m"}handleResize(){const{loaderEl:e,el:t}=this;e&&(this.loaderScale=this.getScale(Math.min(t.clientHeight,t.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function d(){"undefined"!=typeof customElements&&["calcite-scrim","calcite-loader"].forEach((e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,r);break;case"calcite-loader":customElements.get(e)||(0,c.d)()}}))}d()}}]);