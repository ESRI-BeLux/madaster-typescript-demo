"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[8543],{18543:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var s=i(82392),r=i(20857),a=i(3223),n=i(40377),h=i(70214),l=i(57725),o=i(81482),d=(i(6273),i(80861),i(26325)),c=i(22589),g=i(7511),u=i(58843),p=i(58989),_=i(88764),f=i(24775);let m=class extends((0,g.e)(f.A)){constructor(){super(...arguments),this._highlightCounter=new _.t}attach(){this.graphicsView=new p.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new u.A(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight()}detach(){this.container.removeAllChildren(),this.graphicsView=(0,l.pR)(this.graphicsView)}async hitTest(e){return this.graphicsView?this.graphicsView.hitTest(e).map((t=>({type:"graphic",graphic:t,mapPoint:e,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(e,t="highlight"){let i;"number"==typeof e?i=[e]:e instanceof r.A?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):n.A.isCollection(e)&&e.length>0&&(i=e.map((e=>e&&e.uid)).toArray());const s=i?.filter(a.Ru);return s?.length?(this._addHighlight(s,t),(0,h.hA)((()=>this._removeHighlight(s,t)))):(0,h.hA)()}_addHighlight(e,t){this._highlightCounter.addReason(e,t),this._updateHighlight()}_removeHighlight(e,t){this._highlightCounter.deleteReason(e,t),this._updateHighlight()}_updateHighlight(){const e=[];for(const t of this._highlightCounter.ids()){const i=this._highlightCounter.getHighestReason(t),s=(0,c.$r)(i);e.push({objectId:t,highlightFlags:s})}this.graphicsView?.setHighlight(e)}};(0,s._)([(0,o.MZ)()],m.prototype,"graphicsView",void 0),m=(0,s._)([(0,d.$)("esri.views.2d.layers.GraphicsLayerView2D")],m);const v=m},52616:(e,t,i)=>{i.d(t,{f:()=>V});var s=i(57725),r=i(38406),a=i(57122),n=i(24923),h=i(39921),l=i(11069);let o=0;function d(e,t,i){return new n.O((0,l.U)(o++),e,e.meshWriter.name,t,i)}const c={geometry:{visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null}};class g{constructor(){this.instances={fill:d(h.YS.fill,c,{zoomRange:!0}),marker:d(h.YS.marker,c,{zoomRange:!0}),line:d(h.YS.line,c,{zoomRange:!0}),text:d(h.YS.text,c,{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}),complexFill:d(h.YS.complexFill,c,{zoomRange:!0}),texturedLine:d(h.YS.texturedLine,c,{zoomRange:!0})},this._instancesById=Object.values(this.instances).reduce(((e,t)=>(e.set(t.instanceId,t),e)),new Map)}getInstance(e){return this._instancesById.get(e)}}var u=i(82541),p=i(93446),_=i(14571),f=i(6590),m=i(87249),v=i(40087),y=i(82657),w=i(89325),b=i(68716),R=i(40866);const x=Math.PI/180;class S extends v.q{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,p.vt)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,s.WD)(this._program)}doRender(e){const{context:t}=e,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(b.dn.ONE,b.dn.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const s=this._program;t.bindVAO(this._vao),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(b.WR.LINES,8*i.length,b.pe.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:(0,p.vt)()}}_createShaderProgram(e){this._program||(this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",A().attributes))}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:s,resolution:r,pixelRatio:a,rotation:n,viewpoint:h}=t,l=x*n,{x:o,y:d}=h.targetGeometry,c=(0,m.mT)(o,t.spatialReference);this._localOrigin.x=c,this._localOrigin.y=d;const g=a*s[0],p=a*s[1],v=r*g,y=r*p,w=(0,u.D_)(this._dvsMat3);(0,u.lw)(w,w,i),(0,u.Tl)(w,w,(0,_.fA)(g/2,p/2)),(0,u.hs)(w,w,(0,f.fA)(s[0]/v,-p/y,1)),(0,u.e$)(w,w,-l)}_updateBufferData(e,t){const{x:i,y:s}=this._localOrigin,r=8*t.length,a=new Float32Array(r),n=new Uint32Array(8*t.length);let h=0,l=0;for(const e of t)e&&(a[2*h]=e[0]-i,a[2*h+1]=e[1]-s,a[2*h+2]=e[0]-i,a[2*h+3]=e[3]-s,a[2*h+4]=e[2]-i,a[2*h+5]=e[3]-s,a[2*h+6]=e[2]-i,a[2*h+7]=e[1]-s,n[l]=h+0,n[l+1]=h+3,n[l+2]=h+3,n[l+3]=h+2,n[l+4]=h+2,n[l+5]=h+1,n[l+6]=h+1,n[l+7]=h+0,h+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=w.g.createVertex(e,b._U.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(n):this._indexBuffer=w.g.createIndex(e,b._U.DYNAMIC_DRAW,n),!this._vao){const t=A();this._vao=new R.Z(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const A=()=>(0,y.ES)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:b.pe.FLOAT}]});class V extends r.j{constructor(e){super(e),this._instanceStore=new g,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,s.pR)(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new S(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){e.selection=t;for(const t of this.children){if(!t.visible)continue;const i=t.getDisplayList(e.drawPhase,this._instanceStore,a.ch.STRICT_ORDER);i?.render(e)}}}},58843:(e,t,i)=>{i.d(t,{A:()=>n});var s=i(57122),r=i(52616),a=i(85202);class n extends r.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case s.S5.MAP:this._renderChildren(e,s.RI.All);break;case s.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,a.lB)(e,!1,(e=>{this._renderChildren(e,s.RI.Highlight)}))}}}}]);