"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[1611],{71611:(s,t,e)=>{e.r(t),e.d(t,{deleteForwardEdits:()=>n});var r=e(38116),i=e(62991),a=e(36321);async function n(s,t,e,n){if(!t)throw new i.A("post:missing-guid","guid for version is missing");const o=(0,a.Dl)(s),d=e.toJSON(),c=(0,a.jV)(o.query,{query:(0,a.lF)({...d,f:"json"}),...n,method:"post"});t.startsWith("{")&&(t=t.slice(1,-1));const u=`${o.path}/versions/${t}/deleteForwardEdits`,{data:p}=await(0,r.A)(u,c);return p.success}}}]);