"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[3981],{53981:(t,e,n)=>{n.r(e),n.d(e,{executeForTopExtents:()=>s}),n(3313);var r=n(36321),o=n(47664),u=n(83856),i=n(8e3);async function s(t,e,n){const s=(0,r.Dl)(t),l=await(0,o.$K)(s,u.A.from(e),{...n}),a=l.data.extent;return!a||isNaN(a.xmin)||isNaN(a.ymin)||isNaN(a.xmax)||isNaN(a.ymax)?{count:l.data.count,extent:null}:{count:l.data.count,extent:i.A.fromJSON(a)}}},47664:(t,e,n)=>{n.d(e,{$K:()=>m,KW:()=>p,Yb:()=>c,xs:()=>F});var r=n(38116),o=n(19759),u=n(56053),i=n(87249),s=n(67488),l=n(49173),a=n(11378);const y="Layer does not support extent calculation.";function d(t,e){const n=t.geometry,r=t.toJSON(),o=r;if(null!=n&&(o.geometry=JSON.stringify(n),o.geometryType=(0,u.$B)(n),o.inSR=(0,s.YX)(n.spatialReference)),r.topFilter?.groupByFields&&(o.topFilter.groupByFields=r.topFilter.groupByFields.join(",")),r.topFilter?.orderByFields&&(o.topFilter.orderByFields=r.topFilter.orderByFields.join(",")),r.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),r.objectIds&&(o.objectIds=r.objectIds.join(",")),r.orderByFields&&(o.orderByFields=r.orderByFields.join(",")),r.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?r.outFields.includes("*")?o.outFields="*":o.outFields=r.outFields.join(","):delete o.outFields,r.outSR?o.outSR=(0,s.YX)(r.outSR):n&&r.returnGeometry&&(o.outSR=o.inSR),r.returnGeometry&&delete r.returnGeometry,r.timeExtent){const t=r.timeExtent,{start:e,end:n}=t;null==e&&null==n||(o.time=e===n?e:`${e??"null"},${n??"null"}`),delete r.timeExtent}return o}async function c(t,e,n,r){const o=await f(t,e,"json",r);return(0,a.q)(e,n,o.data),o}async function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:f(t,e,"json",n,{returnIdsOnly:!0})}async function m(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:f(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(y);if(e.hasOwnProperty("count"))throw new Error(y);return t}))}function F(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):f(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function f(t,e,n,u={},s={}){const a="string"==typeof t?(0,o.An)(t):t,y=e.geometry?[e.geometry]:[];return u.responseType="pbf"===n?"array-buffer":"json",(0,i.el)(y,null,u).then((t=>{const i=t?.[0];null!=i&&((e=e.clone()).geometry=i);const y=(0,l.z)({...a.query,f:n,...s,...d(e,s)});return(0,r.A)((0,o.fj)(a.path,"queryTopFeatures"),{...u,query:{...y,...u.query}})}))}}}]);