"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[2942],{92942:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>c});var a=n(8e3),s=n(67709),r=n(8977),o=n(65648),i=n(38648);const c={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const a=e.hasZ(t),s=e.hasM(t),o=new r.A({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return a&&(o.z=e.getPointZ(t)),s&&(o.m=e.getPointM(t)),o.cache._geVersion=t,o},exportPolygon:function(e,t,n){const a=new o.A({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return a.cache._geVersion=t,a},exportPolyline:function(e,t,n){const a=new i.A({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return a.cache._geVersion=t,a},exportMultipoint:function(e,t,n){const a=new s.A({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return a.cache._geVersion=t,a},exportExtent:function(e,t,n){const s=e.hasZ(t),r=e.hasM(t),o=new a.A({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(s){const n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(r){const n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o.cache._geVersion=t,o}}}}]);