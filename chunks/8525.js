"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[8525],{85747:(e,t,s)=>{s.d(t,{N3:()=>i,Om:()=>h});class h{constructor(e=null,t={},s,h){this.geometry=e,this.attributes=t,this.centroid=s,this.objectId=h,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new h(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}clone(){const e=this.geometry?.clone(),t=new h(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function i(e){return!!e.geometry?.coords?.length}},97011:(e,t,s)=>{s.d(t,{A:()=>h});class h{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new h;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},65977:(e,t,s)=>{s.d(t,{A:()=>h});class h{constructor(e=[],t=[],s=!1){this.lengths=e??[],this.coords=t??[],this.hasIndeterminateRingOrder=s}static fromRect(e){const[t,s,i,r]=e,o=i-t,n=r-s;return new h([5],[t,s,o,0,0,n,-o,0,0,-n])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const h=this.lengths[s];for(let s=0;s<h;s++)e(this.coords[2*(s+t)],this.coords[2*(s+t)+1]);t+=h}}deltaDecode(){const e=this.clone(),{coords:t,lengths:s}=e;let h=0;for(const e of s){for(let s=1;s<e;s++)t[2*(h+s)]+=t[2*(h+s)-2],t[2*(h+s)+1]+=t[2*(h+s)-1];h+=e}return e}clone(e){if(0===this.lengths.length)return new h([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),s=this.coords.slice(0,t);return e?(e.set(s),new h(this.lengths,e,this.hasIndeterminateRingOrder)):new h(Array.from(this.lengths),Array.from(s),this.hasIndeterminateRingOrder)}}}}]);