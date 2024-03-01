"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[6636],{11682:(e,t,r)=>{r.d(t,{A:()=>c});var o=r(82392),i=r(81482),l=(r(6273),r(80861),r(67498),r(26325)),n=r(15909),a=r(45449),s=r(20923),y=r(22111),p=r(52796),u=r(44223);let d=class extends((0,s.d)((0,y.j)(a.A))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new p.Y,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,o._)([(0,i.MZ)({type:u.A})],d.prototype,"elevationInfo",void 0),(0,o._)([(0,i.MZ)((0,n.C)(p.Y,"graphics"))],d.prototype,"graphics",void 0),(0,o._)([(0,i.MZ)({type:["show","hide"]})],d.prototype,"listMode",void 0),(0,o._)([(0,i.MZ)()],d.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,i.MZ)({readOnly:!0})],d.prototype,"type",void 0),(0,o._)([(0,i.MZ)({constructOnly:!0})],d.prototype,"internal",void 0),d=(0,o._)([(0,l.$)("esri.layers.GraphicsLayer")],d);const c=d},66636:(e,t,r)=>{r.r(t),r.d(t,{default:()=>B});var o=r(82392),i=(r(3313),r(20857)),l=(r(3438),r(40377)),n=r(62991),a=r(15565),s=r(67214),y=r(21750),p=r(97629),u=r(81482),d=(r(6273),r(80861),r(25376)),c=r(26325),m=r(48524),f=r(34561),h=r(2532),g=r(87249),b=r(67488),S=r(85049),w=r(11682),M=r(45449),O=r(36355),_=r(20923),v=r(4648),N=r(60368),L=r(22111),C=r(45352),J=r(55736),T=r(24826),Z=r(68231),x=r(31864),A=r(44153),I=r(8e3);function j(e){return"markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!E(e)))}function E({layerDefinition:e,featureSet:t}){const r=e.geometryType??t.geometryType;return F.find((t=>r===t.geometryTypeJSON&&e.drawingInfo?.renderer?.symbol?.type===t.identifyingSymbol.type))}function R(){return new I.A({xmin:-180,ymin:-90,xmax:180,ymax:90})}const D=new C.A({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),P=new C.A({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let G=class extends w.A{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get fullExtent(){const e=this.layer?.spatialReference,t=this.fullBounds;return e?null==t?(0,f.projectOrLoad)(R(),e).geometry:(0,h.w1)(t,e):null}get fullBounds(){const e=this.layer?.spatialReference;if(!e)return null;const t=(0,h.Ie)();return this.graphics.forEach((r=>{const o=null!=r.geometry?(0,f.projectOrLoad)(r.geometry,e).geometry:null;null!=o&&(0,h.fT)(t,"point"===o.type?o:o.extent,t)})),(0,h.aI)(t,h.qv)?null:t}get sublayers(){return this.graphics}};(0,o._)([(0,u.MZ)({readOnly:!0})],G.prototype,"fullExtent",null),(0,o._)([(0,u.MZ)({readOnly:!0})],G.prototype,"fullBounds",null),(0,o._)([(0,u.MZ)({readOnly:!0})],G.prototype,"sublayers",null),(0,o._)([(0,u.MZ)()],G.prototype,"layer",void 0),(0,o._)([(0,u.MZ)()],G.prototype,"layerId",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],G.prototype,"visibilityMode",void 0),G=(0,o._)([(0,c.$)("esri.layers.MapNotesLayer.MapNotesSublayer")],G);const F=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new J.A).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new T.A).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new Z.A).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new Z.A).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new x.A).toJSON()}];let k=class extends((0,_.d)((0,L.j)((0,v.q)((0,N.A)((0,s.P)(M.A)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=A.A.WGS84,this.sublayers=new l.A(F.map((e=>new G({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!j(t)&&"portal-item"!==r?.origin}}}readFeatureCollections(e,t,r){if(!j(t))return null;const o=t.layers.map((e=>{const t=new S.default;return t.read(e,r),t}));return new l.A({items:o})}readLegacyfeatureCollectionJSON(e,t){return j(t)?(0,a.o8)(t.featureCollection):null}get fullExtent(){const e=this.spatialReference,t=(0,h.Ie)();return null!=this.sublayers?this.sublayers.forEach((({fullBounds:e})=>null!=e?(0,h.fT)(t,e,t):t),t):this.featureCollectionJSON?.layers.some((e=>e.layerDefinition.extent))&&this.featureCollectionJSON.layers.forEach((r=>{const o=(0,f.projectOrLoad)(r.layerDefinition.extent,e).geometry;null!=o&&(0,h.fT)(t,o,t)})),(0,h.aI)(t,h.qv)?(0,f.projectOrLoad)(R(),e).geometry:(0,h.w1)(t,e)}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?A.A.fromJSON(t.layers[0].layerDefinition.spatialReference):A.A.WGS84}readSublayers(e,t,r){if(j(t))return null;const o=[];let n=t.layers.reduce(((e,t)=>Math.max(e,t.layerDefinition.id??-1)),-1)+1;for(const e of t.layers){const{layerDefinition:t,featureSet:r}=e,l=t.id??n++,a=E(e);if(null!=a){const e=new G({id:a.id,title:t.name,layerId:l,layer:this,graphics:r.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:o})=>i.A.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:o})))});o.push(e)}}return new l.A(o)}writeSublayers(e,t,r,o){const{minScale:i,maxScale:l}=this;if(null==e)return;const a=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(a&&o?.messages?.push(new n.A("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const s=[];let p=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if(null!=e.geometry){p=e.geometry.spatialReference.toJSON();break e}for(const t of F){const r=e.find((e=>t.id===e.id));this._writeMapNoteSublayer(s,r,t,i,l,p,o)}(0,y.sM)("featureCollection.layers",s,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,a.o8)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(null==this.sublayers)return;let e=null;const t=[];for(const r of this.sublayers)for(const o of r.graphics)if(null!=o.geometry){const r=o.geometry;e?(0,b.aI)(r.spatialReference,e)||((0,f.canProjectWithoutEngine)(r.spatialReference,e)||(0,f.isLoaded)()||await(0,f.load)(),o.geometry=(0,f.project)(r,e)):e=r.spatialReference,t.push(o)}const r=await(0,g.el)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){return null==this.sublayers?null:this.sublayers?.find((t=>t.id===e))??null}_writeMapNoteSublayer(e,t,r,o,i,l,n){const s=[];if(null!=t){for(const e of t.graphics)this._writeMapNote(s,e,r.geometryType,n);this._normalizeObjectIds(s,D),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,a.o8)(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:i,objectIdField:"OBJECTID",fields:[D.toJSON(),P.toJSON()],spatialReference:l},featureSet:{features:s,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){if(null==t)return;const{geometry:i,symbol:l,popupTemplate:n}=t;if(null==i)return;if(i.type!==r)return void o?.messages?.push(new p.A("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:t}));if(null==l)return void o?.messages?.push(new p.A("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));const a={attributes:{...t.attributes},geometry:i.toJSON(),symbol:l.toJSON()};null!=n&&(a.popupInfo=n.toJSON()),e.push(a)}_normalizeObjectIds(e,t){const r=t.name;let o=(0,O.H)(r,e)+1;const i=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||i.has(e[r]))&&(e[r]=o++),i.add(e[r])}}};(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"capabilities",void 0),(0,o._)([(0,d.w)(["portal-item","web-map"],"capabilities",["layers"])],k.prototype,"readCapabilities",null),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"featureCollections",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"featureCollections",["layers"])],k.prototype,"readFeatureCollections",null),(0,o._)([(0,u.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],k.prototype,"featureCollectionJSON",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],k.prototype,"readLegacyfeatureCollectionJSON",null),(0,o._)([(0,u.MZ)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],k.prototype,"featureCollectionType",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"fullExtent",null),(0,o._)([(0,u.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],k.prototype,"legendEnabled",void 0),(0,o._)([(0,u.MZ)({type:["show","hide","hide-children"]})],k.prototype,"listMode",void 0),(0,o._)([(0,u.MZ)({type:Number,nonNullable:!0,json:{write:!1}})],k.prototype,"minScale",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"minScale",["layers"])],k.prototype,"readMinScale",null),(0,o._)([(0,u.MZ)({type:Number,nonNullable:!0,json:{write:!1}})],k.prototype,"maxScale",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"maxScale",["layers"])],k.prototype,"readMaxScale",null),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"multipointLayer",null),(0,o._)([(0,u.MZ)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],k.prototype,"operationalLayerType",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"pointLayer",null),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"polygonLayer",null),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"polylineLayer",null),(0,o._)([(0,u.MZ)({type:A.A})],k.prototype,"spatialReference",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"spatialReference",["layers"])],k.prototype,"readSpatialReference",null),(0,o._)([(0,u.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],k.prototype,"sublayers",void 0),(0,o._)([(0,d.w)("web-map","sublayers",["layers"])],k.prototype,"readSublayers",null),(0,o._)([(0,m.K)("web-map","sublayers")],k.prototype,"writeSublayers",null),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"textLayer",null),(0,o._)([(0,u.MZ)()],k.prototype,"title",void 0),(0,o._)([(0,u.MZ)({readOnly:!0,json:{read:!1}})],k.prototype,"type",void 0),k=(0,o._)([(0,c.$)("esri.layers.MapNotesLayer")],k);const B=k},36355:(e,t,r)=>{r.d(t,{H:()=>i,L:()=>o});const o=1;function i(e,t){let r=0;for(const o of t){const t=o.attributes?.[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}}}]);