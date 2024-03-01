"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[9220],{39220:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var i=r(82392),s=r(38116),a=r(54736),o=r(62991),n=r(52686),l=r(67214),p=r(37623),c=r(81482),d=r(8636),h=(r(67498),r(6273),r(25376)),u=r(26325),y=r(48524),m=r(91101),g=r(8e3),f=r(84459),v=r(67488),b=r(45449),M=r(94763),x=r(69543),_=r(30179),S=r(20923),w=r(27303),Z=r(4648),I=r(60368),T=r(51177),A=r(22111),O=r(89856),P=r(2960),E=r(41332),R=r(12743),F=r(15089),L=r(93221),j=r(22508),k=r(23123),q=r(23375);let J=class extends((0,S.d)((0,P.e)((0,A.j)((0,O.I)((0,x.V)((0,_.b)((0,Z.q)((0,I.A)((0,l.P)((0,T.J)((0,M.p)((0,w.d)(b.A))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(p.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,i){if(!this.loaded||!e)return;const s=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers){const e=(0,m.aB)(i.origin);if(e===m.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=(0,j.Zx)(s,e,m.Gr.SERVICE)}else if(e>m.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=(0,j.Zx)(s,e.sublayers,(0,m.aB)(e.origin))}}const o=[],n={writeSublayerStructure:a,...i};let l=a;s.forEach((e=>{const t=e.write({},n);o.push(t),l=l||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),l&&(t.visibleLayers=s.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,i){const s=i?.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new R.g({layer:this,floors:i?.floors,scale:(0,f.X_)({extent:e,width:t})*s}),o=a.toJSON();a.destroy();const n=!i?.rotation||this.version<10.3?{}:{rotation:-i.rotation},l=e?.spatialReference,p=(0,v.YX)(l);o.dpi*=s;const c={};if(i?.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();c.time=e&&t&&e===t?""+e:`${e??"null"},${t??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:t+","+r,...o,...n,...c}}async fetchImage(e,t,r,i){const{data:s}=await this._fetchImage("image",e,t,r,i);return s}async fetchImageBitmap(e,t,r,i){const{data:s,url:a}=await this._fetchImage("blob",e,t,r,i);return(0,F.m)(s,a,i?.signal)}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,s.A)(this.url,t),{extent:i,fullExtent:o,timeExtent:n}=r,l=i||o;return{fullExtent:l&&g.A.fromJSON(l),timeExtent:n&&a.A.fromJSON({start:n[0],end:n[1]})}}loadAll(){return(0,n.g)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,k.D)(this,e)}async _fetchImage(e,t,r,i,a){const n={responseType:e,signal:a?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,r,i,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(null!=n.query?.dynamicLayers&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new o.A("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:e}=await(0,s.A)(l,n);return{data:e,url:l}}catch(e){if((0,p.zf)(e))throw e;throw new o.A("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:e})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,s.A)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,c.MZ)((0,q.P6)("dateFieldsTimeReference"))],J.prototype,"dateFieldsTimeZone",void 0),(0,i._)([(0,c.MZ)({type:Boolean})],J.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,c.MZ)()],J.prototype,"dpi",void 0),(0,i._)([(0,c.MZ)()],J.prototype,"gdbVersion",void 0),(0,i._)([(0,c.MZ)()],J.prototype,"imageFormat",void 0),(0,i._)([(0,h.w)("imageFormat",["supportedImageFormatTypes"])],J.prototype,"readImageFormat",null),(0,i._)([(0,c.MZ)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],J.prototype,"imageMaxHeight",void 0),(0,i._)([(0,c.MZ)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],J.prototype,"imageMaxWidth",void 0),(0,i._)([(0,c.MZ)()],J.prototype,"imageTransparency",void 0),(0,i._)([(0,c.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],J.prototype,"isReference",void 0),(0,i._)([(0,c.MZ)({json:{read:!1,write:!1}})],J.prototype,"labelsVisible",void 0),(0,i._)([(0,c.MZ)({type:["ArcGISMapServiceLayer"]})],J.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.MZ)({json:{read:!1,write:!1}})],J.prototype,"popupEnabled",void 0),(0,i._)([(0,c.MZ)((0,q.P6)("preferredTimeReference"))],J.prototype,"preferredTimeZone",void 0),(0,i._)([(0,c.MZ)()],J.prototype,"sourceJSON",void 0),(0,i._)([(0,c.MZ)({json:{write:{ignoreOrigin:!0}}})],J.prototype,"sublayers",void 0),(0,i._)([(0,y.K)("sublayers",{layers:{type:[L.A]},visibleLayers:{type:[d.jz]}})],J.prototype,"writeSublayers",null),(0,i._)([(0,c.MZ)({type:["show","hide","hide-children"]})],J.prototype,"listMode",void 0),(0,i._)([(0,c.MZ)({json:{read:!1},readOnly:!0,value:"map-image"})],J.prototype,"type",void 0),(0,i._)([(0,c.MZ)(E.OZ)],J.prototype,"url",void 0),J=(0,i._)([(0,u.$)("esri.layers.MapImageLayer")],J);const N=J}}]);