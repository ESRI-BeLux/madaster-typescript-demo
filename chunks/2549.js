"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[2549],{97881:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(47111),r=i(73027);class a{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,t){const i=this._resourceMap.get(e);if(i)return{width:i.width,height:i.height};let s=this._inFlightResourceMap.get(e);return s?s.then((e=>({width:e.width,height:e.height}))):(s=(0,r.M5)(e,t),this._inFlightResourceMap.set(e,s),s.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return(0,s.Al)(e)}}},22549:(e,t,i)=>{i.r(t),i.d(t,{CIMSymbolRasterizer:()=>c});var s=i(97881),r=i(13788),a=i(52644),h=i(9427),n=i(77234);class c{constructor(e){this._spatialReference=e,this._imageDataCanvas=null,this._cimResourceManager=new s.A}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,i,s,r,c,o,g,u){if(!e)return null;const{data:d}=e;if(!d||"CIMSymbolReference"!==d.type||!d.symbol)return null;const{symbol:y}=d;c||(c=(0,n.n5)(y));const w=await h.$.resolveSymbolOverrides(d,t,this._spatialReference,r,c,o,g),m=this._cimResourceManager,p=[];a.wp.fetchResources(w,m,p),a.wp.fetchFonts(w,m,p),p.length>0&&await Promise.all(p);const{width:M,height:_}=i,R=l(c,M,_,s),b=a.wp.getEnvelope(w,R,m);if(!b)return null;let f=1,C=0,v=0;switch(y.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;b.width>M&&(e=M/b.width);let t=1;b.height>_&&(t=_/b.height),"preview"===s&&(b.width<M&&(e=M/b.width),b.height<_&&(t=_/b.height)),f=Math.min(e,t),C=b.x+b.width/2,v=b.y+b.height/2}break;case"CIMLineSymbol":{(u||b.height>_)&&(f=_/b.height),v=b.y+b.height/2;const e=b.x*f+M/2,t=(b.x+b.width)*f+M/2,{paths:i}=R;i[0][0][0]-=e/f,i[0][2][0]-=(t-M)/f}break;case"CIMPolygonSymbol":{C=b.x+b.width/2,v=b.y+b.height/2;const e=b.x*f+M/2,t=(b.x+b.width)*f+M/2,i=b.y*f+_/2,s=(b.y+b.height)*f+_/2,{rings:r}=R;e<0&&(r[0][0][0]-=e,r[0][3][0]-=e,r[0][4][0]-=e),i<0&&(r[0][0][1]+=i,r[0][1][1]+=i,r[0][4][1]+=i),t>M&&(r[0][1][0]-=t-M,r[0][2][0]-=t-M),s>_&&(r[0][2][1]+=s-_,r[0][3][1]+=s-_)}}const I={type:"cim",data:{type:"CIMSymbolReference",symbol:w}};return this.rasterize(I,M,_,C,v,f,c,1,R)}rasterize(e,t,i,s,a,h,c,o=0,g=null){const{data:u}=e;if(!u||"CIMSymbolReference"!==u.type||!u.symbol)return null;const{symbol:d}=u,y=this._canvas,w=1.3333333333333333*(window.devicePixelRatio||1);y.width=t*w,y.height=i*w,c||(c=(0,n.n5)(d)),g||(g=l(c,t,i,"legend")),y.width+=2*o,y.height+=2*o;const m=y.getContext("2d",{willReadFrequently:!0}),p=r.IT.createIdentity();return p.translate(-s,-a),p.scale(h*w,-h*w),p.translate(t*w/2+o,i*w/2+o),m.clearRect(0,0,y.width,y.height),new r.Rj(m,this._cimResourceManager,p,!0).drawSymbol(d,g),m.getImageData(0,0,y.width,y.height)}}function l(e,t,i,s){const r=-t/2+1,a=t/2-1,h=i/2-1,n=-i/2+1;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[r,0],[0,0],[a,0]]]};default:return"legend"===s?{rings:[[[r,h],[a,0],[a,n],[r,n],[r,h]]]}:{rings:[[[r,h],[a,h],[a,n],[r,n],[r,h]]]}}}}}]);