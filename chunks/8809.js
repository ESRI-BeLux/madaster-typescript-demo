"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[8809],{51190:(t,e,r)=>{r.r(e),r.d(e,{default:()=>O});var s=r(82392),o=(r(3313),r(62991)),i=r(37623),n=r(19759),a=r(81482),u=r(6273),l=(r(80861),r(67498),r(25376)),p=r(26325),c=r(85049),d=r(11965),y=r(73462),h=r(74704),m=r(8e3);let f=class extends d.A{constructor(t){super(t),this.type="csv",this.refresh=(0,i.sg)((async t=>{await this.load();const{extent:e,timeExtent:r}=await this._connection.invoke("refresh",t);return e&&(this.sourceJSON.extent=e),r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(t){const e=null!=t?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const r=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return h.A.fromJSON(r)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const r=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:r.count,extent:m.A.fromJSON(r.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await(0,y.ho)("CSVSourceWorker",{strategy:(0,u.A)("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:r,fields:s,latitudeField:o,longitudeField:i,spatialReference:n,timeInfo:a}=this.loadOptions,l=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:r,fields:s?.map((t=>t.toJSON())),latitudeField:o,longitudeField:i,spatialReference:n?.toJSON(),timeInfo:a?.toJSON()}},{signal:t});this.locationInfo=l.locationInfo,this.sourceJSON=l.layerDefinition,this.delimiter=l.delimiter}};(0,s._)([(0,a.MZ)()],f.prototype,"type",void 0),(0,s._)([(0,a.MZ)()],f.prototype,"loadOptions",void 0),(0,s._)([(0,a.MZ)()],f.prototype,"customParameters",void 0),(0,s._)([(0,a.MZ)()],f.prototype,"locationInfo",void 0),(0,s._)([(0,a.MZ)()],f.prototype,"sourceJSON",void 0),(0,s._)([(0,a.MZ)()],f.prototype,"delimiter",void 0),f=(0,s._)([(0,p.$)("esri.layers.graphics.sources.CSVSource")],f);var g=r(77159),v=r(10591),S=r(55714),w=r(44153);function _(t,e){throw new o.A(e,`CSVLayer (title: ${t.title}, id: ${t.id}) cannot be saved to a portal item`)}let F=class extends c.default{constructor(...t){super(...t),this.geometryType="point",this.capabilities=(0,g.f)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=w.A.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return"string"==typeof t?{url:t,...e}:t}load(t){const e=null!=t?t.signal:null,r=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(i.QP).then((async()=>this.initLayerProperties(await this.createGraphicsSource(e))));return this.addResolvingPromise(r),Promise.resolve(this)}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(t,e){return null!=e.showLabels?e.showLabels:!!e.layerDefinition?.drawingInfo?.labelingInfo}set url(t){if(!t)return void this._set("url",t);const e=(0,n.An)(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new f({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then((()=>this.source.queryFeatures(v.A.from(t)||this.createQuery()))).then((t=>{if(t?.features)for(const e of t.features)e.layer=e.sourceLayer=this;return t}))}queryObjectIds(t,e){return this.load().then((()=>this.source.queryObjectIds(v.A.from(t)||this.createQuery())))}queryFeatureCount(t,e){return this.load().then((()=>this.source.queryFeatureCount(v.A.from(t)||this.createQuery())))}queryExtent(t,e){return this.load().then((()=>this.source.queryExtent(v.A.from(t)||this.createQuery())))}read(t,e){super.read(t,e),e&&"service"===e.origin&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new o.A("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(t){return _(this,"csv-layer:save")}async saveAs(t,e){return _(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return null!=e&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,s._)([(0,a.MZ)({readOnly:!0,json:{read:!1,write:!1}})],F.prototype,"capabilities",void 0),(0,s._)([(0,a.MZ)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],F.prototype,"delimiter",void 0),(0,s._)([(0,a.MZ)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],F.prototype,"editingEnabled",void 0),(0,s._)([(0,a.MZ)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],F.prototype,"fields",void 0),(0,s._)([(0,a.MZ)({type:Boolean,readOnly:!0})],F.prototype,"isTable",null),(0,s._)([(0,l.w)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],F.prototype,"readWebMapLabelsVisible",null),(0,s._)([(0,a.MZ)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],F.prototype,"latitudeField",void 0),(0,s._)([(0,a.MZ)({type:["show","hide"]})],F.prototype,"listMode",void 0),(0,s._)([(0,a.MZ)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],F.prototype,"locationType",void 0),(0,s._)([(0,a.MZ)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],F.prototype,"longitudeField",void 0),(0,s._)([(0,a.MZ)({type:["CSV"]})],F.prototype,"operationalLayerType",void 0),(0,s._)([(0,a.MZ)()],F.prototype,"outFields",void 0),(0,s._)([(0,a.MZ)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],F.prototype,"path",void 0),(0,s._)([(0,a.MZ)({json:{read:!1},cast:null,type:f,readOnly:!0})],F.prototype,"source",void 0),(0,s._)([(0,a.MZ)({json:{read:!1},value:"csv",readOnly:!0})],F.prototype,"type",void 0),(0,s._)([(0,a.MZ)({json:{read:S.r,write:{isRequired:!0,ignoreOrigin:!0,writer:S.w}}})],F.prototype,"url",null),F=(0,s._)([(0,p.$)("esri.layers.CSVLayer")],F);const O=F},52557:(t,e,r)=>{r.d(e,{F:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},77159:(t,e,r)=>{r.d(e,{F0:()=>a,Vx:()=>p,e2:()=>c,f:()=>d});var s=r(6273),o=r(15565),i=r(52557),n=r(51103);function a(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?n.Cb:"esriGeometryPolyline"===t?n.yM:n.WR}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function p(t,e){if((0,s.A)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let r=`this.${e} = null;`;for(const e in t)r+=`this${u.test(e)?`.${e}`:`["${e}"]`} = ${JSON.stringify(t[e])};`;const s=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new s}catch(r){return()=>({[e]:null,...t})}}function c(t={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,o.o8)(t)}}]}function d(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:i.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);