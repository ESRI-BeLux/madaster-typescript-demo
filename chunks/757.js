"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[757],{6590:(e,t,o)=>{function r(){return new Float32Array(3)}function n(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function l(e,t,o){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=o,r}function i(){return r()}function s(){return l(1,1,1)}function a(){return l(1,0,0)}function u(){return l(0,1,0)}function p(){return l(0,0,1)}o.d(t,{fA:()=>l,o8:()=>n,vt:()=>r});const c=i(),d=s(),f=a(),y=u(),h=p();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_X:f,UNIT_Y:y,UNIT_Z:h,ZEROS:c,clone:n,create:r,createView:function(e,t){return new Float32Array(e,t,3)},fromValues:l,ones:s,unitX:a,unitY:u,unitZ:p,zeros:i},Symbol.toStringTag,{value:"Module"}))},40854:(e,t,o)=>{o.d(t,{A:()=>v});var r,n=o(82392),l=o(15565),i=o(81482),s=(o(6273),o(80861),o(85716)),a=o(26325),u=o(14682),p=o(77299),c=o(93814),d=o(84977),f=o(8636);let y=r=class extends d.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,l.o8)(this.color)})}};(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,n._)([(0,i.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],y.prototype,"minValue",void 0),(0,n._)([(0,i.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],y.prototype,"maxValue",void 0),(0,n._)([(0,i.MZ)({type:c.A,json:{type:[f.jz],write:!0}})],y.prototype,"color",void 0),y=r=(0,n._)([(0,a.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],y);const h=y;var b;let m=b=class extends u.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new b({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,l.o8)(this.colorClassBreakInfos),legendOptions:(0,l.o8)(this.legendOptions)})}};(0,n._)([(0,s.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),(0,n._)([(0,i.MZ)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,n._)([(0,i.MZ)({type:p.q,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,n._)([(0,i.MZ)({type:u.A.fieldTransformTypeKebabDict.apiValues,json:{type:u.A.fieldTransformTypeKebabDict.jsonValues,read:u.A.fieldTransformTypeKebabDict.read,write:u.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,n._)([(0,i.MZ)({type:[h],json:{write:!0}})],m.prototype,"colorClassBreakInfos",void 0),m=b=(0,n._)([(0,a.$)("esri.renderers.PointCloudClassBreaksRenderer")],m);const v=m},14682:(e,t,o)=>{o.d(t,{A:()=>M});var r,n=o(82392),l=o(1817),i=o(84977),s=o(15565),a=o(81482),u=(o(6273),o(80861),o(26325));o(67498);let p=r=class extends i.oY{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,n._)([(0,a.MZ)({type:String,json:{write:!0}})],p.prototype,"field",void 0),(0,n._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),(0,n._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0),p=r=(0,n._)([(0,u.$)("esri.renderers.support.pointCloud.ColorModulation")],p);const c=p,d=new l.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let f=class extends i.oY{};(0,n._)([(0,a.MZ)({type:d.apiValues,readOnly:!0,nonNullable:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],f.prototype,"type",void 0),f=(0,n._)([(0,u.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],f);const y=f;var h,b=o(85716);let m=h=class extends y{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new h({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,n._)([(0,b.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,n._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"size",void 0),(0,n._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=h=(0,n._)([(0,u.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);const v=m;var w;let g=w=class extends y{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new w({scaleFactor:this.scaleFactor})}};(0,n._)([(0,b.e)({pointCloudSplatAlgorithm:"splat"})],g.prototype,"type",void 0),(0,n._)([(0,a.MZ)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],g.prototype,"scaleFactor",void 0),g=w=(0,n._)([(0,u.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],g);const A={key:"type",base:y,typeMap:{"fixed-size":v,splat:g}},_=(0,l.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let T=class extends i.oY{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,s.o8)(this.pointSizeAlgorithm),colorModulation:(0,s.o8)(this.colorModulation),pointsPerInch:(0,s.o8)(this.pointsPerInch)}}};(0,n._)([(0,a.MZ)({type:_.apiValues,readOnly:!0,nonNullable:!0,json:{type:_.jsonValues,read:!1,write:_.write}})],T.prototype,"type",void 0),(0,n._)([(0,a.MZ)({types:A,json:{write:!0}})],T.prototype,"pointSizeAlgorithm",void 0),(0,n._)([(0,a.MZ)({type:c,json:{write:!0}})],T.prototype,"colorModulation",void 0),(0,n._)([(0,a.MZ)({json:{write:!0},nonNullable:!0,type:Number})],T.prototype,"pointsPerInch",void 0),T=(0,n._)([(0,u.$)("esri.renderers.PointCloudRenderer")],T),(T||(T={})).fieldTransformTypeKebabDict=new l.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const M=T},35753:(e,t,o)=>{o.d(t,{A:()=>f});var r,n=o(82392),l=o(15565),i=o(81482),s=(o(6273),o(80861),o(85716)),a=o(26325),u=o(14682),p=o(77299),c=o(36903);let d=r=class extends u.A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,l.o8)(this.field),fieldTransformType:(0,l.o8)(this.fieldTransformType),stops:(0,l.o8)(this.stops),legendOptions:(0,l.o8)(this.legendOptions)})}};(0,n._)([(0,s.e)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),(0,n._)([(0,i.MZ)({json:{write:!0},type:String})],d.prototype,"field",void 0),(0,n._)([(0,i.MZ)({type:p.q,json:{write:!0}})],d.prototype,"legendOptions",void 0),(0,n._)([(0,i.MZ)({type:u.A.fieldTransformTypeKebabDict.apiValues,json:{type:u.A.fieldTransformTypeKebabDict.jsonValues,read:u.A.fieldTransformTypeKebabDict.read,write:u.A.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),(0,n._)([(0,i.MZ)({type:[c.A],json:{write:!0}})],d.prototype,"stops",void 0),d=r=(0,n._)([(0,a.$)("esri.renderers.PointCloudStretchRenderer")],d);const f=d},44372:(e,t,o)=>{o.d(t,{A:()=>v});var r,n=o(82392),l=o(15565),i=o(81482),s=(o(6273),o(80861),o(85716)),a=o(26325),u=o(14682),p=o(77299),c=o(93814),d=o(84977),f=o(8636);let y=r=class extends d.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,l.o8)(this.values),color:(0,l.o8)(this.color)})}};(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,n._)([(0,i.MZ)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,n._)([(0,i.MZ)({type:[String],json:{write:!0}})],y.prototype,"values",void 0),(0,n._)([(0,i.MZ)({type:c.A,json:{type:[f.jz],write:!0}})],y.prototype,"color",void 0),y=r=(0,n._)([(0,a.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);const h=y;var b;let m=b=class extends u.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new b({...this.cloneProperties(),field:(0,l.o8)(this.field),fieldTransformType:(0,l.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,l.o8)(this.colorUniqueValueInfos),legendOptions:(0,l.o8)(this.legendOptions)})}};(0,n._)([(0,s.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],m.prototype,"type",void 0),(0,n._)([(0,i.MZ)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,n._)([(0,i.MZ)({type:u.A.fieldTransformTypeKebabDict.apiValues,json:{type:u.A.fieldTransformTypeKebabDict.jsonValues,read:u.A.fieldTransformTypeKebabDict.read,write:u.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,n._)([(0,i.MZ)({type:[h],json:{write:!0}})],m.prototype,"colorUniqueValueInfos",void 0),(0,n._)([(0,i.MZ)({type:p.q,json:{write:!0}})],m.prototype,"legendOptions",void 0),m=b=(0,n._)([(0,a.$)("esri.renderers.PointCloudUniqueValueRenderer")],m);const v=m},40757:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var r=o(3223),n=o(62088),l=o(31753),i=o(19165),s=o(80347),a=o(6590),u=o(44153),p=o(88133),c=(o(6273),o(40854)),d=o(35753),f=o(44372),y=o(16504),h=o(70564);function b(e,t,o){return e?.attributeInfo.useElevation?t?function(e,t){const o=new Float64Array(t);for(let r=0;r<t;r++)o[r]=e[3*r+2];return o}(t,o):null:e?.attributeInfo.storageInfo?(0,y.m0)(e.attributeInfo.storageInfo,e.buffer,o):null}function m(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function v(e){let t=0;for(const o of e||[])t|=1<<o;return t}var w=o(45506);class g{transform(e){const t=this._transform(e),o=[t.points.buffer,t.rgb.buffer];null!=t.pointIdFilterMap&&o.push(t.pointIdFilterMap.buffer);for(const e of t.attributes)"buffer"in e.values&&(0,n.mw)(e.values.buffer)&&e.values.buffer!==t.rgb.buffer&&o.push(e.values.buffer);return Promise.resolve({result:t,transferList:o})}_transform(e){const t=function(e,t){if(null==e.encoding||""===e.encoding){const o=(0,y.wH)(t,e);if(null==o.vertexAttributes.position)return;const r=(0,y.MA)(t,o.vertexAttributes.position),n=o.header.fields,l=[n.offsetX,n.offsetY,n.offsetZ],i=[n.scaleX,n.scaleY,n.scaleZ],s=r.length/3,a=new Float64Array(3*s);for(let e=0;e<s;e++)a[3*e]=r[3*e]*i[0]+l[0],a[3*e+1]=r[3*e+1]*i[1]+l[1],a[3*e+2]=r[3*e+2]*i[2]+l[2];return a}if("lepcc-xyz"===e.encoding)return(0,h.Me)(t).result}(e.schema,e.geometryBuffer);let o=t.length/3,n=null;const l=new Array,i=b(e.primaryAttributeData,t,o);null!=e.primaryAttributeData&&i&&l.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:i});const s=b(e.modulationAttributeData,t,o);null!=e.modulationAttributeData&&s&&l.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:s});let a=function(e,t,o,r){const{rendererJSON:n,isRGBRenderer:l}=e;let i=null,s=null;if(t&&l)i=t;else if(t&&"pointCloudUniqueValueRenderer"===n?.type){s=f.A.fromJSON(n);const e=s.colorUniqueValueInfos;i=new Uint8Array(3*r);const o=m(s.fieldTransformType);for(let n=0;n<r;n++){const r=(o?o(t[n]):t[n])+"";for(let t=0;t<e.length;t++)if(e[t].values.includes(r)){i[3*n]=e[t].color.r,i[3*n+1]=e[t].color.g,i[3*n+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===n?.type){s=d.A.fromJSON(n);const e=s.stops;i=new Uint8Array(3*r);const o=m(s.fieldTransformType);for(let n=0;n<r;n++){const r=o?o(t[n]):t[n],l=e.length-1;if(r<e[0].value)i[3*n]=e[0].color.r,i[3*n+1]=e[0].color.g,i[3*n+2]=e[0].color.b;else if(r>=e[l].value)i[3*n]=e[l].color.r,i[3*n+1]=e[l].color.g,i[3*n+2]=e[l].color.b;else for(let t=1;t<e.length;t++)if(r<e[t].value){const o=(r-e[t-1].value)/(e[t].value-e[t-1].value);i[3*n]=e[t].color.r*o+e[t-1].color.r*(1-o),i[3*n+1]=e[t].color.g*o+e[t-1].color.g*(1-o),i[3*n+2]=e[t].color.b*o+e[t-1].color.b*(1-o);break}}}else if(t&&"pointCloudClassBreaksRenderer"===n?.type){s=c.A.fromJSON(n);const e=s.colorClassBreakInfos;i=new Uint8Array(3*r);const o=m(s.fieldTransformType);for(let n=0;n<r;n++){const r=o?o(t[n]):t[n];for(let t=0;t<e.length;t++)if(r>=e[t].minValue&&r<=e[t].maxValue){i[3*n]=e[t].color.r,i[3*n+1]=e[t].color.g,i[3*n+2]=e[t].color.b;break}}}else i=new Uint8Array(3*r).fill(255);if(o&&s?.colorModulation){const e=s.colorModulation.minValue,t=s.colorModulation.maxValue,n=.3;for(let l=0;l<r;l++){const r=o[l],s=r>=t?1:r<=e?n:n+(1-n)*(r-e)/(t-e);i[3*l]=s*i[3*l],i[3*l+1]=s*i[3*l+1],i[3*l+2]=s*i[3*l+2]}}return i}(e.rendererInfo,i,s,o);if(e.filterInfo&&e.filterInfo.length>0&&null!=e.filterAttributesData){const i=e.filterAttributesData.filter(r.Ru).map((e=>{const r=b(e,t,o),n={attributeInfo:e.attributeInfo,values:r};return l.push(n),n}));n=new Uint32Array(o),o=function(e,t,o,r,n){const l=e.length/3;let i=0;for(let s=0;s<l;s++){let l=!0;for(let e=0;e<r.length&&l;e++){const{filterJSON:t}=r[e],o=n[e].values[s];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;t.values.includes(o)===e&&(l=!1);break}case"pointCloudBitfieldFilter":{const e=v(t.requiredSetBits),r=v(t.requiredClearBits);(o&e)===e&&0==(o&r)||(l=!1);break}case"pointCloudReturnFilter":{const e=15&o,r=o>>>4&15,n=r>1,i=1===e,s=e===r;let a=!1;for(const e of t.includedReturns)if("last"===e&&s||"firstOfMany"===e&&i&&n||"lastOfMany"===e&&s&&n||"single"===e&&!n){a=!0;break}a||(l=!1);break}}}l&&(o[i]=s,e[3*i]=e[3*s],e[3*i+1]=e[3*s+1],e[3*i+2]=e[3*s+2],t[3*i]=t[3*s],t[3*i+1]=t[3*s+1],t[3*i+2]=t[3*s+2],i++)}return i}(t,a,n,e.filterInfo,i)}for(const r of e.userAttributesData){const e=b(r,t,o);l.push({attributeInfo:r.attributeInfo,values:e})}3*o<a.length&&(a=new Uint8Array(a.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(t,o,e.elevationOffset);const p=this._transformCoordinates(t,o,w.ab.fromData(e.obbData),u.A.fromJSON(e.inSR),u.A.fromJSON(e.outSR));return{obbData:e.obbData,points:p,rgb:a,attributes:l,pointIdFilterMap:n}}_transformCoordinates(e,t,o,r,n){if(!(0,p.projectBuffer)(e,r,0,e,n,0,t))throw new Error("Can't reproject");const i=(0,a.o8)(o.center),u=(0,a.vt)(),c=(0,a.vt)(),d=(0,a.o8)(o.halfSize);(0,l.Xr)(A,o.quaternion);const f=new Float32Array(3*t);for(let o=0;o<t;o++){let t=3*o;u[0]=e[t]-i[0],u[1]=e[t+1]-i[1],u[2]=e[t+2]-i[2],(0,s.r)(c,u,A),d[0]=Math.max(d[0],Math.abs(c[0])),d[1]=Math.max(d[1],Math.abs(c[1])),d[2]=Math.max(d[2],Math.abs(c[2])),f[t++]=u[0],f[t++]=u[1],f[t]=u[2]}return o.halfSize=d,f}_applyElevationOffsetInPlace(e,t,o){if(0!==o)for(let r=0;r<t;r++)e[3*r+2]+=o}}const A=(0,i.vt)();function _(){return new g}}}]);