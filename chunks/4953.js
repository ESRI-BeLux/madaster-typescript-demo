"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[4953],{38406:(e,t,i)=>{i.d(t,{j:()=>f});var s=i(62991),r=i(6273),n=i(80861),a=i(37623),h=i(6538),o=i(31927),l=i(82657),d=i(68716),u=i(49214),p=i(89958),c=i(88416);class g{constructor(e,t,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:n}=e,a=(0,l.Qz)(r);this.blockIndex=i,this.pixelType=r,this.size=t,this.textureOnly=n,n||(this.data=new a(s)),this._resetRange()}destroy(){this._texture?.dispose();for(const e in this._fbos){const t=this._fbos[e];t&&("0"===e&&t.detachColorTexture(),t.dispose()),this._fbos[e]=null}this._texture=null}get _textureDesc(){const e=new c.R;return e.wrapMode=d.pF.CLAMP_TO_EDGE,e.samplingMode=d.Cj.NEAREST,e.dataType=this.pixelType,e.width=this.size,e.height=this.size,e}setData(e,t,i){const s=(0,o.Q4)(e),r=this.data,n=s*this.texelSize+t;!r||n>=r.length||(r[n]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(e,t){if(null==this.data)return null;const i=(0,o.Q4)(e)*this.texelSize+t;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(e){return this._texture??this._initTexture(e)}getFBO(e,t=0){if(!this._fbos[t]){const i=0===t?this.getTexture(e):this._textureDesc;this._fbos[t]=new u.H(e,i)}return this._fbos[t]}get hasDirty(){const e=this.dirtyStart;return this.dirtyEnd>=e}updateTexture(e,t){try{const i=this.dirtyStart,a=this.dirtyEnd;if(!this.hasDirty)return;(0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${t}] AttributeStoreView.updateTexture`,{start:i,end:a,firstBytes:new Uint8Array(this.data.buffer.slice(0,16)),block:this}),this._resetRange();const h=this.data.buffer,o=this.getTexture(e),d=4,u=(i-i%this.size)/this.size,p=(a-a%this.size)/this.size,c=u,g=this.size,_=p,y=u*this.size*d,f=(g+_*this.size)*d-y,v=(0,l.Qz)(this.pixelType),w=new v(h,y*v.BYTES_PER_ELEMENT,f),m=this.size,b=_-c+1;if(b>this.size)return void n.A.getLogger("esri.views.2d.engine.webgl.AttributeStoreView").error(new s.A("mapview-webgl","Out-of-bounds index when updating AttributeData"));o.updateData(0,0,c,m,b,w)}catch(e){}}update(e){const{data:t,start:i,end:s}=e;if(null!=t&&null!=this.data){const s=this.data,r=i*this.texelSize;for(let i=0;i<t.length;i++){const n=1<<i%this.texelSize;e.layout&n&&(s[r+i]=t[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(e,t){const i=this.size;if(this.size=t,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=(0,l.Qz)(this.pixelType);this.destroy(),this.data=new s(e.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new p.g(e,this._textureDesc,this.data??void 0);if(null!=this._lastTexture&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(e),h=(0,l.AV)(r),o=new((0,l.Qz)(r))(new ArrayBuffer(i*s*h*this.texelSize)),d=e.getBoundFramebufferObject(),{x:u,y:p,width:c,height:g}=e.getViewport();e.bindFramebuffer(a),a.readPixels(0,0,i,s,n,r,o),t.updateData(0,0,0,2*i,s/2,o),e.setViewport(u,p,c,g),e.bindFramebuffer(d)}return this.destroy(),this._texture=t,this._texture}}class _{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1}_initialize(e){if(!e)throw new Error("InternalError: initArgs must be defined");const t=e.blockDescriptors;if(this.size=e.blockSize,(0,r.A)("esri-2d-update-debug")&&console.debug("AttributeStoreView.initialize",{message:e}),null==this._data)this._data=t.map(((e,t)=>null!=e?new g(e,this.size,t):null));else for(let e=0;e<this._data.length;e++){const i=this._data[e],s=t[e];null!=s&&(null==i?this._data[e]=new g(s,this.size,e):i.resize(s,this.size))}}destroy(){for(const e of this._data??[])e?.destroy();this._defaultTexture?.dispose();for(const{resolver:e}of this._pendingAttributeUpdates)e.reject("AttributeStore destroyed");this._pendingAttributeUpdates=[]}isEmpty(){return null==this._data}getBlock(e){return null==this._data?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,h.dV.VV,0,0)}getData(e,t,i,s){if(!this._data)return 0;const r=this._data[t];if(null==r)return 0;const n=r.getData(e,i);return null!=n?n:s}setData(e,t,i,s){this._data[t].setData(e,i,s)}lockTextureUploads(){this._locked=!0}unlockTextureUploads(){this._locked=!1,this.update()}async requestUpdate(e){const t=(0,a.Tw)();this._version=e.version,this._pendingAttributeUpdates.push({inner:e,resolver:t}),(0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`,{message:e})}get currentEpoch(){return this._epoch}update(){if(this._locked)return;const e=this._pendingAttributeUpdates;this._pendingAttributeUpdates=[];for(const{inner:t,resolver:i}of e){const{blockData:e,initArgs:s,sendUpdateEpoch:n,version:a}=t;(0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] Epoch[${n}] AttributeStoreView.applyUpdate`),this._version=a,this._epoch=n,null!=s&&this._initialize(s);const h=this._data;for(let t=0;t<e.length;t++){const i=e[t],s=h[t];null!=s&&null!=i&&((0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] CpuBlock[${t}] AttributeStoreView.update`,{block:i}),s.update(i))}i.resolve()}}getUniforms(e){return{filterFlags:{texture:this._getTexture(e,h.dV.FilterFlags),unit:h.uM},animation:{texture:this._getTexture(e,h.dV.Animation),unit:h.z2},gpgpu:{texture:this._getTexture(e,h.dV.GPGPU),unit:h.Sr},visualVariableData:{texture:this._getTexture(e,h.dV.VV),unit:h.nM},dataDriven0:{texture:this._getTexture(e,h.dV.DD0),unit:h.lL},dataDriven1:{texture:this._getTexture(e,h.dV.DD1),unit:h.sn},dataDriven2:{texture:this._getTexture(e,h.dV.DD2),unit:h.n9},size:this.size}}_getTexture(e,t){const i=this._data?.[t];return i?(i.updateTexture(e,this._version),i.getTexture(e)):this._getDefaultTexture(e)}_getDefaultTexture(e){if(null==this._defaultTexture){const t=new c.R;t.wrapMode=d.pF.CLAMP_TO_EDGE,t.samplingMode=d.Cj.NEAREST,t.width=1,t.height=1,this._defaultTexture=new p.g(e,t,new Uint8Array(4))}return this._defaultTexture}}var y=i(87891);class f extends y.A{constructor(e){super(e),this._statisticsByLevel=new Map,this.attributeView=new _}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy()}doRender(e){e.context.capabilities.enable("textureFloat"),super.doRender(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.attributeView=this.attributeView,t.instanceStore=this._instanceStore,t.statisticsByLevel=this._statisticsByLevel,t}}},87891:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(6273),r=i(57122),n=i(47764),a=i(63153),h=i(586);const o=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class l extends n.A{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(o),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[a.A],drawPhase:r.S5.DEBUG|r.S5.MAP|r.S5.HIGHLIGHT|r.S5.LABEL,target:()=>this.getStencilTarget()})),(0,s.A)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[h.A],drawPhase:r.S5.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const e of this.children)e.stencilRef=t++}}},24923:(e,t,i)=>{i.d(t,{O:()=>r});var s=i(11069);class r{constructor(e,t,i,s,r){this._instanceId=e,this.techniqueRef=t,this._meshWriterName=i,this._input=s,this.optionalAttributes=r}get instanceId(){return(0,s.P)(this._instanceId)}createMeshInfo(e){return{id:this._instanceId,meshWriterName:this._meshWriterName,options:e,optionalAttributes:this.optionalAttributes}}getInput(){return this._input}setInput(e){this._input=e}}},7511:(e,t,i)=>{i.d(t,{e:()=>b});var s,r=i(82392),n=i(40377),a=i(48),h=i(62991),o=i(61985),l=i(81482),d=(i(6273),i(80861),i(67498),i(26325)),u=i(84459),p=i(62921),c=i(43621),g=i(76736);let _=s=class extends g.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,l.MZ)({type:[Number,String],json:{write:!0}})],_.prototype,"left",void 0),(0,r._)([(0,l.MZ)({type:[Number,String],json:{write:!0}})],_.prototype,"right",void 0),(0,r._)([(0,l.MZ)({type:[Number,String],json:{write:!0}})],_.prototype,"top",void 0),(0,r._)([(0,l.MZ)({type:[Number,String],json:{write:!0}})],_.prototype,"bottom",void 0),_=s=(0,r._)([(0,d.$)("esri.views.layers.support.ClipRect")],_);const y=_;var f=i(80455);let v=class extends g.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,l.MZ)({type:[[[Number]]],json:{write:!0}})],v.prototype,"path",void 0),v=(0,r._)([(0,d.$)("esri.views.layers.support.Path")],v);const w=v,m=n.A.ofType({key:"type",base:null,typeMap:{rect:y,path:w,geometry:f.A}}),b=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new m,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new h.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,o.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),o.pc),(0,o.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.pc),(0,o.wB)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),o.pc),(0,o.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.pc),(0,o.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.pc),(0,o.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),o.pc),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),o.pc),(0,o.wB)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)}),o.pc)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updateSuspended(){return this.suspended}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,u.zx)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,l.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,l.MZ)({type:m,set(e){const t=(0,a.V)(e,this._get("clips"),m);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"updateSuspended",null),(0,r._)([(0,l.MZ)()],t.prototype,"updating",null),(0,r._)([(0,l.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,l.MZ)({type:c.A})],t.prototype,"highlightOptions",void 0),t=(0,r._)([(0,d.$)("esri.views.2d.layers.LayerView2D")],t),t}},24953:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var s=i(82392),r=i(20857),n=i(3223),a=i(40377),h=i(70214),o=i(61985),l=(i(80861),i(6273),i(62991),i(26325)),d=i(22589),u=i(7511),p=i(58843),c=i(58989),g=i(24775);const _="sublayers",y="layerView";let f=class extends((0,u.e)(g.A)){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){null==this._graphicsViewsFeatureCollectionMap?null==this._graphicsViews?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(e,t){return Array.from(this.graphicsViews(),(t=>{const i=t.hitTest(e);if(null!=this._graphicsViewsFeatureCollectionMap){const e=this._graphicsViewsFeatureCollectionMap.get(t);for(const t of i)!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate),t.sourceLayer=t.layer=this.layer}return i})).flat().map((t=>({type:"graphic",graphic:t,layer:this.layer,mapPoint:e})))}highlight(e){let t;"number"==typeof e?t=[e]:e instanceof r.A?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):a.A.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray());const i=t?.filter(n.Ru);return i?.length?(this._addHighlight(i),(0,h.hA)((()=>this._removeHighlight(i)))):(0,h.hA)()}update(e){for(const t of this.graphicsViews())t.processUpdate(e)}attach(){const e=this.view,t=()=>this.requestUpdate(),i=this.layer.featureCollections;if(null!=i&&i.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of i){const i=new p.A(this.view.featuresTilingScheme),r=new c.A({view:e,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:i});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([(0,o.wB)((()=>s.visible),(e=>r.container.visible=e),o.Vh),(0,o.wB)((()=>r.updating),(()=>this.notifyChange("updating")),o.Vh)],y)}this._updateHighlight()}else null!=this.layer.sublayers&&this.addHandles((0,o.on)((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),_)}detach(){this._destroyGraphicsViews(),this.removeHandles(_)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(y);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),null==this.layer.sublayers)return;const e=[],t=this.view,i=()=>this.requestUpdate();for(const s of this.layer.sublayers){const r=new p.A(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const n=new c.A({view:t,graphics:s.graphics,requestUpdateCallback:i,container:r});this.addHandles([s.on("graphic-update",n.graphicUpdateHandler),(0,o.wB)((()=>s.visible),(e=>n.container.visible=e),o.Vh),(0,o.wB)((()=>n.updating),(()=>this.notifyChange("updating")),o.Vh)],y),this.container.addChild(n.container),e.push(n)}this._graphicsViews=e,this._updateHighlight()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys()),t=(0,d.$r)("highlight");for(const i of this.graphicsViews())i.setHighlight(e.map((e=>({objectId:e,highlightFlags:t}))))}};f=(0,s._)([(0,l.$)("esri.views.2d.layers.MapNotesLayerView2D")],f);const v=f},52616:(e,t,i)=>{i.d(t,{f:()=>V});var s=i(57725),r=i(38406),n=i(57122),a=i(24923),h=i(39921),o=i(11069);let l=0;function d(e,t,i){return new a.O((0,o.U)(l++),e,e.meshWriter.name,t,i)}const u={geometry:{visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null}};class p{constructor(){this.instances={fill:d(h.YS.fill,u,{zoomRange:!0}),marker:d(h.YS.marker,u,{zoomRange:!0}),line:d(h.YS.line,u,{zoomRange:!0}),text:d(h.YS.text,u,{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}),complexFill:d(h.YS.complexFill,u,{zoomRange:!0}),texturedLine:d(h.YS.texturedLine,u,{zoomRange:!0})},this._instancesById=Object.values(this.instances).reduce(((e,t)=>(e.set(t.instanceId,t),e)),new Map)}getInstance(e){return this._instancesById.get(e)}}var c=i(82541),g=i(93446),_=i(14571),y=i(6590),f=i(87249),v=i(40087),w=i(82657),m=i(89325),b=i(68716),x=i(40866);const S=Math.PI/180;class A extends v.q{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,g.vt)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,s.WD)(this._program)}doRender(e){const{context:t}=e,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(b.dn.ONE,b.dn.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const s=this._program;t.bindVAO(this._vao),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(b.WR.LINES,8*i.length,b.pe.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:(0,g.vt)()}}_createShaderProgram(e){this._program||(this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",R().attributes))}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:s,resolution:r,pixelRatio:n,rotation:a,viewpoint:h}=t,o=S*a,{x:l,y:d}=h.targetGeometry,u=(0,f.mT)(l,t.spatialReference);this._localOrigin.x=u,this._localOrigin.y=d;const p=n*s[0],g=n*s[1],v=r*p,w=r*g,m=(0,c.D_)(this._dvsMat3);(0,c.lw)(m,m,i),(0,c.Tl)(m,m,(0,_.fA)(p/2,g/2)),(0,c.hs)(m,m,(0,y.fA)(s[0]/v,-g/w,1)),(0,c.e$)(m,m,-o)}_updateBufferData(e,t){const{x:i,y:s}=this._localOrigin,r=8*t.length,n=new Float32Array(r),a=new Uint32Array(8*t.length);let h=0,o=0;for(const e of t)e&&(n[2*h]=e[0]-i,n[2*h+1]=e[1]-s,n[2*h+2]=e[0]-i,n[2*h+3]=e[3]-s,n[2*h+4]=e[2]-i,n[2*h+5]=e[3]-s,n[2*h+6]=e[2]-i,n[2*h+7]=e[1]-s,a[o]=h+0,a[o+1]=h+3,a[o+2]=h+3,a[o+3]=h+2,a[o+4]=h+2,a[o+5]=h+1,a[o+6]=h+1,a[o+7]=h+0,h+=4,o+=8);if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=m.g.createVertex(e,b._U.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=m.g.createIndex(e,b._U.DYNAMIC_DRAW,a),!this._vao){const t=R();this._vao=new x.Z(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const R=()=>(0,w.ES)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:b.pe.FLOAT}]});class V extends r.j{constructor(e){super(e),this._instanceStore=new p,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,s.pR)(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new A(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){e.selection=t;for(const t of this.children){if(!t.visible)continue;const i=t.getDisplayList(e.drawPhase,this._instanceStore,n.ch.STRICT_ORDER);i?.render(e)}}}},58843:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(57122),r=i(52616),n=i(85202);class a extends r.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case s.S5.MAP:this._renderChildren(e,s.RI.All);break;case s.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,n.lB)(e,!1,(e=>{this._renderChildren(e,s.RI.Highlight)}))}}},24775:(e,t,i)=>{i.d(t,{A:()=>g});var s=i(82392),r=i(73783),n=i(57888),a=i(23377),h=i(80861),o=i(57725),l=i(71004),d=i(81482),u=(i(6273),i(67498),i(26325)),p=i(68660);let c=class extends((0,a.sA)((0,l.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new p.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";h.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,o.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,d.MZ)()],c.prototype,"fullOpacity",null),(0,s._)([(0,d.MZ)()],c.prototype,"layer",void 0),(0,s._)([(0,d.MZ)()],c.prototype,"parent",void 0),(0,s._)([(0,d.MZ)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,d.MZ)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,d.MZ)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,d.MZ)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,d.MZ)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,d.MZ)()],c.prototype,"visible",null),(0,s._)([(0,d.MZ)()],c.prototype,"view",void 0),c=(0,s._)([(0,u.$)("esri.views.layers.LayerView")],c);const g=c},76736:(e,t,i)=>{i.d(t,{A:()=>o});var s=i(82392),r=i(84977),n=i(81482),a=(i(6273),i(80861),i(67498),i(26325));let h=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],h.prototype,"version",null),h=(0,s._)([(0,a.$)("esri.views.layers.support.ClipArea")],h);const o=h},80455:(e,t,i)=>{i.d(t,{A:()=>g});var s,r=i(82392),n=(i(3313),i(81482)),a=(i(6273),i(80861),i(67498),i(26325)),h=i(61064),o=i(56053),l=i(76736),d=i(8e3),u=i(65648);const p={base:h.A,key:"type",typeMap:{extent:d.A,polygon:u.A}};let c=s=class extends l.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new s({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:p,json:{read:o.rS,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,a.$)("esri.views.layers.support.Geometry")],c);const g=c}}]);