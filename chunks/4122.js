"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[4122],{94122:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var s=r(82392),o=r(62991),i=r(67214),p=r(9987),n=r(81482),d=(r(6273),r(80861),r(67498),r(26325)),l=r(45449),a=r(60368);let u=class extends((0,a.A)((0,i.P)(l.A))){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise(((e,t)=>{(0,p._)((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unsupported layer type";e&&(r+=" "+e),t(new o.A("layer:unsupported-layer-type",r,{layerType:e}))}))})))}read(e,t){const r={resourceInfo:e};null!=e.id&&(r.id=e.id),null!=e.title&&(r.title=e.title),super.read(r,t)}write(e,t){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};(0,s._)([(0,n.MZ)({readOnly:!0})],u.prototype,"resourceInfo",void 0),(0,s._)([(0,n.MZ)({type:["show","hide"]})],u.prototype,"listMode",void 0),(0,s._)([(0,n.MZ)({type:Boolean,readOnly:!1})],u.prototype,"persistenceEnabled",void 0),(0,s._)([(0,n.MZ)({json:{read:!1},readOnly:!0,value:"unsupported"})],u.prototype,"type",void 0),u=(0,s._)([(0,d.$)("esri.layers.UnsupportedLayer")],u);const y=u}}]);