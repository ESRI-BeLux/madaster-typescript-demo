"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[8757],{48757:(n,t,e)=>{e.r(t),e.d(t,{registerFunctions:()=>l});var a=e(28300),r=e(90364),i=e(82951),u=e(99057),c=e(9915),s=e(76984);async function o(n,t,e,a,r,c){if(1===a.length){if((0,i.o)(a[0]))return(0,u.t)(n,a[0],(0,i.K)(a[1],-1));if((0,i.q)(a[0]))return(0,u.t)(n,a[0].toArray(),(0,i.K)(a[1],-1))}else if(2===a.length){if((0,i.o)(a[0]))return(0,u.t)(n,a[0],(0,i.K)(a[1],-1));if((0,i.q)(a[0]))return(0,u.t)(n,a[0].toArray(),(0,i.K)(a[1],-1));if((0,i.u)(a[0])){const e=await a[0].load(),u=await d(s.WhereClause.create(a[1],e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC),c,r);return f(r,await a[0].calculateStatistic(n,u,(0,i.K)(a[2],1e3),t.abortSignal))}}else if(3===a.length&&(0,i.u)(a[0])){const e=await a[0].load(),u=await d(s.WhereClause.create(a[1],e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC),c,r);return f(r,await a[0].calculateStatistic(n,u,(0,i.K)(a[2],1e3),t.abortSignal))}return(0,u.t)(n,a,-1)}function f(n,t){return t instanceof c.g?a.lY.fromReaderAsTimeStampOffset(t.toStorageFormat()):t instanceof Date?a.lY.dateJSAndZoneToArcadeDate(t,(0,i.N)(n)):t}async function d(n,t,e){const a=n.getVariables();if(a.length>0){const r=[];for(let n=0;n<a.length;n++){const i={name:a[n]};r.push(await t.evaluateIdentifier(e,i))}const i={};for(let n=0;n<a.length;n++)i[a[n]]=r[n];return n.parameters=i,n}return n}function l(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>o("stdev",e,0,r,t,n)))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>o("variance",e,0,r,t,n)))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>o("mean",e,0,r,t,n)))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>o("mean",e,0,r,t,n)))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>o("sum",e,0,r,t,n)))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>o("min",e,0,r,t,n)))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>o("max",e,0,r,t,n)))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,((n,a,u)=>{if((0,i.H)(u,1,1,t,e),(0,i.u)(u[0]))return u[0].count(n.abortSignal);if((0,i.o)(u[0])||(0,i.c)(u[0]))return u[0].length;if((0,i.q)(u[0]))return u[0].length();throw new r.D$(t,r.TX.InvalidParameter,e)}))})}}}]);