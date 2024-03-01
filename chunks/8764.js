"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[8764,8525],{91814:(e,t,n)=>{n.d(t,{e:()=>l});var r,o,i,s=n(90618),u={exports:{}};r=u,o=function(){function e(e,n,o){o=o||2;var i,s,u,a,c,f,h,d=n&&n.length,p=d?n[0]*o:e.length,g=t(e,0,p,o,!0),y=[];if(!g||g.next===g.prev)return y;if(d&&(g=l(e,n,g,o)),e.length>80*o){i=u=e[0],s=a=e[1];for(var m=o;m<p;m+=o)(c=e[m])<i&&(i=c),(f=e[m+1])<s&&(s=f),c>u&&(u=c),f>a&&(a=f);h=0!==(h=Math.max(u-i,a-s))?1/h:0}return r(g,y,o,i,s,h),y}function t(e,t,n,r,o){var i,s;if(o===A(e,t,n,r)>0)for(i=t;i<n;i+=r)s=w(i,e[i],e[i+1],s);else for(i=n-r;i>=t;i-=r)s=w(i,e[i],e[i+1],s);if(s&&v(s,s.next)){var u=s.next;I(s),s=u}return s}function n(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!v(r,r.next)&&0!==x(r.prev,r,r.next))r=r.next;else{var o=r.prev;if(I(r),(r=t=o)===r.next)break;n=!0}}while(n||r!==t);return t}function r(e,t,l,a,c,f,h){if(e){!h&&f&&d(e,a,c,f);for(var p,g,y=e;e.prev!==e.next;)if(p=e.prev,g=e.next,f?i(e,a,c,f):o(e))t.push(p.i/l),t.push(e.i/l),t.push(g.i/l),I(e),e=g.next,y=g.next;else if((e=g)===y){h?1===h?r(e=s(n(e),t,l),t,l,a,c,f,2):2===h&&u(e,t,l,a,c,f):r(n(e),t,l,a,c,f,1);break}}}function o(e){var t=e.prev,n=e,r=e.next;if(x(t,n,r)>=0)return!1;for(var o=e.next.next;o!==e.prev;){if(y(t.x,t.y,n.x,n.y,r.x,r.y,o.x,o.y)&&x(o.prev,o,o.next)>=0)return!1;o=o.next}return!0}function i(e,t,n,r){var o=e.prev,i=e,s=e.next;if(x(o,i,s)>=0)return!1;for(var u=o.x<i.x?o.x<s.x?o.x:s.x:i.x<s.x?i.x:s.x,l=o.y<i.y?o.y<s.y?o.y:s.y:i.y<s.y?i.y:s.y,a=o.x>i.x?o.x>s.x?o.x:s.x:i.x>s.x?i.x:s.x,c=o.y>i.y?o.y>s.y?o.y:s.y:i.y>s.y?i.y:s.y,f=p(u,l,t,n,r),h=p(a,c,t,n,r),d=e.prevZ,g=e.nextZ;d&&d.z>=f&&g&&g.z<=h;){if(d!==e.prev&&d!==e.next&&y(o.x,o.y,i.x,i.y,s.x,s.y,d.x,d.y)&&x(d.prev,d,d.next)>=0)return!1;if(d=d.prevZ,g!==e.prev&&g!==e.next&&y(o.x,o.y,i.x,i.y,s.x,s.y,g.x,g.y)&&x(g.prev,g,g.next)>=0)return!1;g=g.nextZ}for(;d&&d.z>=f;){if(d!==e.prev&&d!==e.next&&y(o.x,o.y,i.x,i.y,s.x,s.y,d.x,d.y)&&x(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=h;){if(g!==e.prev&&g!==e.next&&y(o.x,o.y,i.x,i.y,s.x,s.y,g.x,g.y)&&x(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function s(e,t,r){var o=e;do{var i=o.prev,s=o.next.next;!v(i,s)&&T(i,o,o.next,s)&&S(i,s)&&S(s,i)&&(t.push(i.i/r),t.push(o.i/r),t.push(s.i/r),I(o),I(o.next),o=e=s),o=o.next}while(o!==e);return n(o)}function u(e,t,o,i,s,u){var l=e;do{for(var a=l.next.next;a!==l.prev;){if(l.i!==a.i&&m(l,a)){var c=N(l,a);return l=n(l,l.next),c=n(c,c.next),r(l,t,o,i,s,u),void r(c,t,o,i,s,u)}a=a.next}l=l.next}while(l!==e)}function l(e,r,o,i){var s,u,l,c=[];for(s=0,u=r.length;s<u;s++)(l=t(e,r[s]*i,s<u-1?r[s+1]*i:e.length,i,!1))===l.next&&(l.steiner=!0),c.push(g(l));for(c.sort(a),s=0;s<c.length;s++)o=n(o=f(c[s],o),o.next);return o}function a(e,t){return e.x-t.x}function c(e){if(e.next.prev===e)return e;let t=e;for(;;){const n=t.next;if(n.prev===t||n===t||n===e)break;t=n}return t}function f(e,t){var r=function(e,t){var n,r=t,o=e.x,i=e.y,s=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var u=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(u<=o&&u>s){if(s=u,u===o){if(i===r.y)return r;if(i===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!n)return null;if(o===s)return n;var l,a=n,c=n.x,f=n.y,d=1/0;r=n;do{o>=r.x&&r.x>=c&&o!==r.x&&y(i<f?o:s,i,c,f,i<f?s:o,i,r.x,r.y)&&(l=Math.abs(i-r.y)/(o-r.x),S(r,e)&&(l<d||l===d&&(r.x>n.x||r.x===n.x&&h(n,r)))&&(n=r,d=l)),r=r.next}while(r!==a);return n}(e,t);if(!r)return t;var o=N(r,e),i=n(r,r.next);let s=c(o);return n(s,s.next),i=c(i),c(t===r?i:t)}function h(e,t){return x(e.prev,e,t.prev)<0&&x(t.next,e,e.next)<0}function d(e,t,n,r){var o=e;do{null===o.z&&(o.z=p(o.x,o.y,t,n,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next}while(o!==e);o.prevZ.nextZ=null,o.prevZ=null,function(e){var t,n,r,o,i,s,u,l,a=1;do{for(n=e,e=null,i=null,s=0;n;){for(s++,r=n,u=0,t=0;t<a&&(u++,r=r.nextZ);t++);for(l=a;u>0||l>0&&r;)0!==u&&(0===l||!r||n.z<=r.z)?(o=n,n=n.nextZ,u--):(o=r,r=r.nextZ,l--),i?i.nextZ=o:e=o,o.prevZ=i,i=o;n=r}i.nextZ=null,a*=2}while(s>1)}(o)}function p(e,t,n,r,o){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*o)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*o)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function g(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function y(e,t,n,r,o,i,s,u){return(o-s)*(t-u)-(e-s)*(i-u)>=0&&(e-s)*(r-u)-(n-s)*(t-u)>=0&&(n-s)*(i-u)-(o-s)*(r-u)>=0}function m(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&T(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(S(e,t)&&S(t,e)&&function(e,t){var n=e,r=!1,o=(e.x+t.x)/2,i=(e.y+t.y)/2;do{n.y>i!=n.next.y>i&&n.next.y!==n.y&&o<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(x(e.prev,e,t.prev)||x(e,t.prev,t))||v(e,t)&&x(e.prev,e,e.next)>0&&x(t.prev,t,t.next)>0)}function x(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function v(e,t){return e.x===t.x&&e.y===t.y}function T(e,t,n,r){var o=M(x(e,t,n)),i=M(x(e,t,r)),s=M(x(n,r,e)),u=M(x(n,r,t));return o!==i&&s!==u||!(0!==o||!E(e,n,t))||!(0!==i||!E(e,r,t))||!(0!==s||!E(n,e,r))||!(0!==u||!E(n,t,r))}function E(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function M(e){return e>0?1:e<0?-1:0}function S(e,t){return x(e.prev,e,e.next)<0?x(e,t,e.next)>=0&&x(e,e.prev,t)>=0:x(e,t,e.prev)<0||x(e,e.next,t)<0}function N(e,t){var n=new F(e.i,e.x,e.y),r=new F(t.i,t.x,t.y),o=e.next,i=t.prev;return e.next=t,t.prev=e,n.next=o,o.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function w(e,t,n,r){var o=new F(e,t,n);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function I(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function F(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A(e,t,n,r){for(var o=0,i=t,s=n-r;i<n;i+=r)o+=(e[s]-e[i])*(e[i+1]+e[s+1]),s=i;return o}return e.deviation=function(e,t,n,r){var o=t&&t.length,i=o?t[0]*n:e.length,s=Math.abs(A(e,0,i,n));if(o)for(var u=0,l=t.length;u<l;u++){var a=t[u]*n,c=u<l-1?t[u+1]*n:e.length;s-=Math.abs(A(e,a,c,n))}var f=0;for(u=0;u<r.length;u+=3){var h=r[u]*n,d=r[u+1]*n,p=r[u+2]*n;f+=Math.abs((e[h]-e[p])*(e[d+1]-e[h+1])-(e[h]-e[d])*(e[p+1]-e[h+1]))}return 0===s&&0===f?0:Math.abs((f-s)/s)},e.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,o=0;o<e.length;o++){for(var i=0;i<e[o].length;i++)for(var s=0;s<t;s++)n.vertices.push(e[o][i][s]);o>0&&(r+=e[o-1].length,n.holes.push(r))}return n},e},void 0!==(i=o())&&(r.exports=i);const l=(0,s.g)(u.exports)},85747:(e,t,n)=>{n.d(t,{N3:()=>o,Om:()=>r});class r{constructor(e=null,t={},n,r){this.geometry=e,this.attributes=t,this.centroid=n,this.objectId=r,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new r(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}clone(){const e=this.geometry?.clone(),t=new r(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function o(e){return!!e.geometry?.coords?.length}},97011:(e,t,n)=>{n.d(t,{A:()=>r});class r{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new r;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},65977:(e,t,n)=>{n.d(t,{A:()=>r});class r{constructor(e=[],t=[],n=!1){this.lengths=e??[],this.coords=t??[],this.hasIndeterminateRingOrder=n}static fromRect(e){const[t,n,o,i]=e,s=o-t,u=i-n;return new r([5],[t,n,s,0,0,u,-s,0,0,-u])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const r=this.lengths[n];for(let n=0;n<r;n++)e(this.coords[2*(n+t)],this.coords[2*(n+t)+1]);t+=r}}deltaDecode(){const e=this.clone(),{coords:t,lengths:n}=e;let r=0;for(const e of n){for(let n=1;n<e;n++)t[2*(r+n)]+=t[2*(r+n)-2],t[2*(r+n)+1]+=t[2*(r+n)-1];r+=e}return e}clone(e){if(0===this.lengths.length)return new r([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),n=this.coords.slice(0,t);return e?(e.set(n),new r(this.lengths,e,this.hasIndeterminateRingOrder)):new r(Array.from(this.lengths),Array.from(n),this.hasIndeterminateRingOrder)}}},5525:(e,t,n)=>{n.d(t,{BW:()=>U,Ch:()=>oe,DF:()=>S,Di:()=>z,E2:()=>W,Nl:()=>Q,Q4:()=>ie,Rk:()=>ue,Ux:()=>q,Ye:()=>Z,ZF:()=>$,eU:()=>k,eY:()=>V,jH:()=>J,jQ:()=>re,kz:()=>ee,oN:()=>H,q3:()=>K,qK:()=>L,qN:()=>B,z5:()=>G,zv:()=>X});var r=n(62991),o=n(80861),i=n(57725),s=n(46373),u=n(2532),l=n(56053),a=n(85747),c=n(97011),f=n(65977);function h(e,t){return e?t?4:3:t?3:2}const d=()=>o.A.getLogger("esri.layers.graphics.featureConversionUtils"),p={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},g=(e,t,n,r,o,i)=>{e[n]=o,e[n+1]=i},y=(e,t,n,r,o,i)=>{e[n]=o,e[n+1]=i,e[n+2]=t[r+2]},m=(e,t,n,r,o,i)=>{e[n]=o,e[n+1]=i,e[n+2]=t[r+3]},x=(e,t,n,r,o,i)=>{e[n]=o,e[n+1]=i,e[n+2]=t[r+2],e[n+3]=t[r+3]};function v(e,t,n,r){if(e){if(n)return t&&r?x:y;if(t&&r)return m}else if(t&&r)return y;return g}function T({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}function E({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}function M({scale:e,translate:t},n,r){return n*e[r]+t[r]}function S(e,t,n){return e?t?n?C(e):I(e):n?A(e):N(e):null}function N(e){const t=e.coords;return{x:t[0],y:t[1]}}function w(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function I(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function F(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function A(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function b(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function C(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function P(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function R(e,t){return e&&t?P:e?F:t?b:w}function B(e,t,n=R(null!=t.z,null!=t.m)){return n(e,t)}function L(e,t,n){if(null==e)return null;const r=h(t,n),o=[];for(let t=0;t<e.coords.length;t+=r){const n=[];for(let o=0;o<r;o++)n.push(e.coords[t+o]);o.push(n)}return t?n?{points:o,hasZ:t,hasM:n}:{points:o,hasZ:t}:n?{points:o,hasM:n}:{points:o}}function O(e,t,n=h(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const r=e.coords;let o=0;for(const e of t.points)for(let t=0;t<n;t++)r[o++]=e[t];return e}function U(e,t,n){if(!e)return null;const r=h(t,n),{coords:o,lengths:i}=e,s=[];let u=0;for(const e of i){const t=[];for(let n=0;n<e;n++){const e=[];for(let t=0;t<r;t++)e.push(o[u++]);t.push(e)}s.push(t)}return t?n?{paths:s,hasZ:t,hasM:n}:{paths:s,hasZ:t}:n?{paths:s,hasM:n}:{paths:s}}function _(e,t,n=h(t.hasZ,t.hasM)){const{lengths:r,coords:o}=e;let i=0;for(const e of t.paths){for(const t of e)for(let e=0;e<n;e++)o[i++]=t[e];r.push(e.length)}return e}function G(e,t,n){if(!e)return null;const r=h(t,n),{coords:o,lengths:i}=e,s=[];let u=0;for(const e of i){const t=[];for(let n=0;n<e;n++){const e=[];for(let t=0;t<r;t++)e.push(o[u++]);t.push(e)}s.push(t)}return t?n?{rings:s,hasZ:t,hasM:n}:{rings:s,hasZ:t}:n?{rings:s,hasM:n}:{rings:s}}function Z(e,t,n=t.hasZ,r=t.hasM){return k(e,t.rings,n,r)}function k(e,t,n,r){const o=h(n,r),{lengths:i,coords:s}=e;let u=0;le(e);for(const e of t){for(const t of e)for(let e=0;e<o;e++)s[u++]=t[e];i.push(e.length)}return e}const Y=[],D=[];function W(e,t,n,r,o){Y[0]=e;const[i]=z(D,Y,t,n,r,o);return ae(Y),ae(D),i}function z(e,t,n,o,i,s){if(ae(e),!n){for(const n of t){const t=s?n.attributes[s]:void 0;e.push(new a.Om(null,n.attributes,null,t))}return e}switch(n){case"esriGeometryPoint":return function(e,t,n,r,o){const i=R(n,r);for(const{geometry:n,attributes:r}of t){const t=null!=n?i(new f.A,n):null;e.push(new a.Om(t,r,null,o?r[o]:void 0))}return e}(e,t,o,i,s);case"esriGeometryMultipoint":return function(e,t,n,r,o){const i=h(n,r);for(const{geometry:n,attributes:r}of t){const t=null!=n?O(new f.A,n,i):null;e.push(new a.Om(t,r,null,o?r[o]:void 0))}return e}(e,t,o,i,s);case"esriGeometryPolyline":return function(e,t,n,r,o){const i=h(n,r);for(const{geometry:n,attributes:r,centroid:s}of t){const t=null!=n?_(new f.A,n,i):null,u=null!=s?B(new f.A,s):null;e.push(new a.Om(t,r,u,o?r[o]:void 0))}return e}(e,t,o,i,s);case"esriGeometryPolygon":return function(e,t,n,r,o){for(const{geometry:i,centroid:s,attributes:u}of t){const t=null!=i?Z(new f.A,i,n,r):null,l=o?u[o]:void 0;null!=s?e.push(new a.Om(t,u,w(new f.A,s),l)):e.push(new a.Om(t,u,null,l))}return e}(e,t,o,i,s);default:d().error("convertToFeatureSet:unknown-geometry",new r.A(`Unable to parse unknown geometry type '${n}'`)),ae(e)}return e}function H(e,t,n,r){D[0]=e,j(Y,D,t,n,r);const o=Y[0];return ae(Y),ae(D),o}function q(e,t,n){if(null==e)return null;const o=new f.A;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==n&&(n=e.hasM),(0,l.fT)(e)?R(null!=t?t:null!=e.z,null!=n?n:null!=e.m)(o,e):(0,l.Bi)(e)?Z(o,e,t,n):(0,l.Rg)(e)?_(o,e,h(t,n)):(0,l.U9)(e)?O(o,e,h(t,n)):void d().error("convertFromGeometry:unknown-geometry",new r.A(`Unable to parse unknown geometry type '${e}'`))}function X(e,t,n,o){const i=e&&("coords"in e?e:e.geometry);if(null==i)return null;switch(t){case"esriGeometryPoint":{let e=N;return n&&o?e=C:n?e=I:o&&(e=A),e(i)}case"esriGeometryMultipoint":return L(i,n,o);case"esriGeometryPolyline":return U(i,n,o);case"esriGeometryPolygon":return G(i,n,o);default:return d().error("convertToGeometry:unknown-geometry",new r.A(`Unable to parse unknown geometry type '${t}'`)),null}}function j(e,t,n,o,i){if(ae(e),null==n)return function(e,t){for(const n of t)e.push({attributes:n.attributes});return e}(e,t);switch(n){case"esriGeometryPoint":return function(e,t,n,r){let o=N;n&&r?o=C:n?o=I:r&&(o=A);for(const n of t){const{geometry:t,attributes:r}=n,i=null!=t?o(t):null;e.push({attributes:r,geometry:i})}return e}(e,t,o,i);case"esriGeometryMultipoint":return function(e,t,n,r){for(const{geometry:o,attributes:i}of t)e.push({attributes:i,geometry:null!=o?L(o,n,r):null});return e}(e,t,o,i);case"esriGeometryPolyline":return function(e,t,n,r){for(const{geometry:o,attributes:i}of t)e.push({attributes:i,geometry:null!=o?U(o,n,r):null});return e}(e,t,o,i);case"esriGeometryPolygon":return function(e,t,n,r){for(const{geometry:o,attributes:i,centroid:s}of t){const t=null!=o?G(o,n,r):null;if(null!=s){const n=N(s);e.push({attributes:i,centroid:n,geometry:t})}else e.push({attributes:i,geometry:t})}return e}(e,t,o,i);default:d().error("convertToFeatureSet:unknown-geometry",new r.A(`Unable to parse unknown geometry type '${n}'`))}return e}function $(e){const{objectIdFieldName:t,spatialReference:n,transform:r,fields:o,hasM:i,hasZ:s,features:u,geometryType:l,exceededTransferLimit:a,uniqueIdField:c,queryGeometry:f,queryGeometryType:h}=e,d={features:j([],u,l,s,i),fields:o,geometryType:l,objectIdFieldName:t,spatialReference:n,uniqueIdField:c,queryGeometry:X(f,h,!1,!1)};return r&&(d.transform=r),a&&(d.exceededTransferLimit=a),i&&(d.hasM=i),s&&(d.hasZ=s),d}function K(e,t){const n=new c.A,{hasM:o,hasZ:i,features:s,objectIdFieldName:u,spatialReference:l,geometryType:a,exceededTransferLimit:f,transform:h,fields:p}=e;return p&&(n.fields=p),n.geometryType=a??null,n.objectIdFieldName=u??t??null,n.spatialReference=l??null,n.objectIdFieldName?(s&&z(n.features,s,a,i,o,n.objectIdFieldName),f&&(n.exceededTransferLimit=f),o&&(n.hasM=o),i&&(n.hasZ=i),h&&(n.transform=h),n):(d().error(new r.A("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function V(e){const{transform:t,features:n,hasM:r,hasZ:o}=e;if(!t)return e;for(const e of n)null!=e.geometry&&oe(e.geometry,e.geometry,r,o,t),null!=e.centroid&&oe(e.centroid,e.centroid,r,o,t);return e.transform=null,e}function J(e,t){const{geometryType:n,features:r,hasM:o,hasZ:i}=t;if(!e)return t;for(let t=0;t<r.length;t++){const s=r[t],u=s.weakClone();u.geometry=new f.A,Q(u.geometry,s.geometry,o,i,n,e),s.centroid&&(u.centroid=new f.A,Q(u.centroid,s.centroid,o,i,"esriGeometryPoint",e)),r[t]=u}return t.transform=e,t}function Q(e,t,n,r,o,i,s=n,u=r){if(le(e),!t?.coords.length)return null;const l=p[o],{coords:a,lengths:c}=t,f=h(n,r),d=h(n&&s,r&&u),g=v(n,r,s,u);if(!c.length)return g(e.coords,a,0,0,T(i,a[0]),E(i,a[1])),le(e,f,0),e;let y,m,x,M,S=0,N=0,w=N;for(const t of c){if(t<l)continue;let n=0;N=w,x=y=T(i,a[S]),M=m=E(i,a[S+1]),g(e.coords,a,N,S,x,M),n++,S+=f,N+=d;for(let r=1;r<t;r++,S+=f)x=T(i,a[S]),M=E(i,a[S+1]),x===y&&M===m||(g(e.coords,a,N,S,x-y,M-m),N+=d,n++,y=x,m=M);n>=l&&(e.lengths.push(n),w=N)}return ae(e.coords,w),e.coords.length?e:null}function ee(e,t,n,r,o,i,s=n,u=r){if(le(e),!t?.coords.length)return null;const l=p[o],{coords:a,lengths:c}=t,f=h(n,r),d=h(n&&s,r&&u),g=v(n,r,s,u);if(!c.length)return g(e.coords,a,0,0,a[0],a[1]),le(e,f,0),e;let y=0;const m=i*i;for(const t of c){if(t<l){y+=t*f;continue}const n=e.coords.length/d,r=y,o=y+(t-1)*f;g(e.coords,a,e.coords.length,r,a[r],a[r+1]),ne(e.coords,a,f,m,g,r,o),g(e.coords,a,e.coords.length,o,a[o],a[o+1]);const i=e.coords.length/d-n;i>=l?e.lengths.push(i):ae(e.coords,n*d),y+=t*f}return e.coords.length?e:null}function te(e,t,n,r){const o=e[t],i=e[t+1],s=e[n],u=e[n+1],l=e[r],a=e[r+1];let c=s,f=u,h=l-c,d=a-f;if(0!==h||0!==d){const e=((o-c)*h+(i-f)*d)/(h*h+d*d);e>1?(c=l,f=a):e>0&&(c+=h*e,f+=d*e)}return h=o-c,d=i-f,h*h+d*d}function ne(e,t,n,r,o,i,s){let u,l=r,a=0;for(let e=i+n;e<s;e+=n)u=te(t,e,i,s),u>l&&(a=e,l=u);l>r&&(a-i>n&&ne(e,t,n,r,o,i,a),o(e,t,e.length,a,t[a],t[a+1]),s-a>n&&ne(e,t,n,r,o,a,s))}function re(e,t,n,r){if(!t?.coords?.length)return null;const o=h(n,r);let i=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,c=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=o){const n=e[t],r=e[t+1];i=Math.min(i,n),a=Math.max(a,n),l=Math.min(l,r),c=Math.max(c,r)}}return(0,s.is)(e)?(0,s.BI)(e,i,l,a,c):(0,u.fA)(i,l,a,c,e),e}function oe(e,t,n,r,o){const{coords:s,lengths:u}=t,l=h(n,r);if(!s.length)return e!==t&&le(e),e;(0,i.Lw)(o);const{originPosition:a,scale:c,translate:f}=o,d=ce;d.originPosition=a;const p=d.scale;p[0]=c[0]??1,p[1]=-(c[1]??1),p[2]=c[2]??1,p[3]=c[3]??1;const g=d.translate;if(g[0]=f[0]??0,g[1]=f[1]??0,g[2]=f[2]??0,g[3]=f[3]??0,!u.length){for(let t=0;t<l;++t)e.coords[t]=M(d,s[t],t);return e!==t&&le(e,l,0),e}let y=0;for(let t=0;t<u.length;t++){const n=u[t];e.lengths[t]=n;for(let t=0;t<l;++t)e.coords[y+t]=M(d,s[y+t],t);let r=e.coords[y],o=e.coords[y+1];y+=l;for(let t=1;t<n;t++,y+=l){r+=s[y]*p[0],o+=s[y+1]*p[1],e.coords[y]=r,e.coords[y+1]=o;for(let t=2;t<l;++t)e.coords[y+t]=M(d,s[y+t],t)}}return e!==t&&le(e,s.length,u.length),e}function ie(e,t,n,r,o,i){if(le(e),e.lengths.push(...t.lengths),n===o&&r===i)for(let n=0;n<t.coords.length;n++)e.coords.push(t.coords[n]);else{const s=h(n,r),u=v(n,r,o,i),l=t.coords;for(let t=0;t<l.length;t+=s)u(e.coords,l,e.coords.length,t,l[t],l[t+1])}return e}function se(e,t,n,r){let o=0,i=e[r*t],s=e[r*(t+1)];for(let u=1;u<n;u++){const n=i+e[r*(t+u)],l=s+e[r*(t+u)+1],a=(n-i)*(l+s);i=n,s=l,o+=a}return.5*o}function ue(e,t){const{coords:n,lengths:r}=e;let o=0,i=0;for(let e=0;e<r.length;e++){const s=r[e];i+=se(n,o,s,t),o+=s}return Math.abs(i)}function le(e,t=0,n=0){ae(e.lengths,n),ae(e.coords,t)}function ae(e,t=0){e.length!==t&&(e.length=t)}const ce={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]}},85953:(e,t,n)=>{var r,o,i,s,u,l,a,c,f,h,d,p,g,y,m,x,v,T,E,M,S,N,w,I,F,A,b,C,P,R,B,L,O,U,_,G,Z,k,Y,D,W,z,H,q,X,j,$,K,V,J,Q,ee,te,ne,re,oe,ie,se,ue,le,ae;n.d(t,{$2:()=>u,C1:()=>i,JO:()=>o,M1:()=>N,O$:()=>ie,Q1:()=>j,TZ:()=>x,WE:()=>C,Y:()=>a,YI:()=>K,bj:()=>c,e_:()=>X,f0:()=>oe,fu:()=>d,g7:()=>f,ip:()=>$,mU:()=>P,oF:()=>M,uQ:()=>S,uT:()=>G,vG:()=>ue,wd:()=>D,xR:()=>r,xn:()=>v,xw:()=>F,yS:()=>Z}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(r||(r={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(o||(o={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(i||(i={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(s||(s={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(u||(u={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(l||(l={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(a||(a={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(c||(c={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(f||(f={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(h||(h={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(d||(d={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(p||(p={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(g||(g={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(y||(y={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(m||(m={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(x||(x={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(v||(v={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(T||(T={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(E||(E={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(M||(M={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(S||(S={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(N||(N={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(w||(w={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(I||(I={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(F||(F={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(A||(A={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(b||(b={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(C||(C={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(P||(P={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(R||(R={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(B||(B={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(L||(L={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(O||(O={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(U||(U={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(_||(_={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(G||(G={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(Z||(Z={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(k||(k={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(Y||(Y={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(D||(D={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(W||(W={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(z||(z={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(H||(H={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(q||(q={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(X||(X={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(j||(j={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}($||($={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(K||(K={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(V||(V={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(J||(J={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(Q||(Q={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(ee||(ee={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(te||(te={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(ne||(ne={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(re||(re={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(oe||(oe={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(ie||(ie={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(se||(se={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(ue||(ue={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(le||(le={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(ae||(ae={}))},84077:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(86891),o=n(44016);class i{constructor(e,t){this.id=e,this.sortKey=t,this.records=[]}serialize(e){return e.push(this.id),e.writeF32(this.sortKey),(0,o.j)(e,this.records),e}static deserialize(e){const t=e.readInt32(),n=e.readF32(),s=new i(t,n);return s.records=(0,o._)(e,r.A)??[],s}}i.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+r.A.byteSizeHint},86891:(e,t,n)=>{n.d(t,{A:()=>r});class r{constructor(e,t,n,r,o,i,s){this.instanceId=e,this.textureKey=t,this.indexStart=n,this.indexCount=r,this.vertexStart=o,this.vertexCount=i,this.overlaps=s}updateBaseOffsets(e){this.vertexStart+=e.vertexFrom,this.indexStart+=e.indexFrom}clone(){return new r(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(e,t,n,r,o,i,s,u){e.push(t),e.push(n),e.push(r),e.push(o),e.push(i),e.push(s),e.push(u)}serialize(e){return e.push(this.instanceId),e.push(this.textureKey),e.push(this.indexStart),e.push(this.indexCount),e.push(this.vertexStart),e.push(this.vertexCount),e.push(this.overlaps),e}static deserialize(e){const t=e.readInt32(),n=e.readInt32(),o=e.readInt32(),i=e.readInt32(),s=e.readInt32(),u=e.readInt32(),l=e.readInt32();return new r(t,n,o,i,s,u,l)}}r.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT},82657:(e,t,n)=>{n.d(t,{AV:()=>f,ES:()=>y,IF:()=>T,Qz:()=>h,UE:()=>m,bX:()=>x,sZ:()=>v});var r=n(62991),o=n(80861),i=(n(85953),n(67498),n(6273),n(63103),n(68716)),s=(n(49214),n(95614),n(86424),n(18039)),u=n(89958),l=n(88416),a=n(67277);const c=()=>o.A.getLogger("esri.views.2d.engine.webgl.Utils");function f(e){switch(e){case i.ld.UNSIGNED_BYTE:return 1;case i.ld.UNSIGNED_SHORT_4_4_4_4:return 2;case i.ld.FLOAT:return 4;default:return void c().error(new r.A("webgl-utils",`Unable to handle type ${e}`))}}function h(e){switch(e){case i.ld.UNSIGNED_BYTE:return Uint8Array;case i.ld.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case i.ld.FLOAT:return Float32Array;default:return void c().error(new r.A("webgl-utils",`Unable to handle type ${e}`))}}const d=e=>{const t=new Map;for(const n in e)for(const r of e[n])t.set(r.name,r.location);return t},p=e=>{const t={};for(const n in e){const r=e[n];t[n]=r?.length?r[0].stride:0}return t},g=new Map,y=(e,t)=>{if(!g.has(e)){const n=function(e){const t={};for(const n in e){const r=e[n];let o=0;t[n]=r.map((e=>{const t=new a._(e.name,e.count,e.type,o,0,e.normalized||!1);return o+=e.count*(0,s._)(e.type),t})),t[n]?.forEach((e=>e.stride=o))}return t}(t),r={strides:p(n),bufferLayouts:n,attributes:d(t)};g.set(e,r)}return g.get(e)},m=e=>e.includes("data:image/svg+xml");function x(e){const t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n));return t}function v(e,t,n){const r=new l.R(t.width,t.height);return r.dataType=t.dataType,t.depth&&(r.depth=t.depth),t.flipped&&(r.flipped=t.flipped),t.hasMipmap&&(r.hasMipmap=t.hasMipmap),r.internalFormat=t.internalFormat,t.isImmutable&&(r.isImmutable=t.isImmutable),t.isOpaque&&(r.isOpaque=t.isOpaque),t.maxAnisotropy&&(r.maxAnisotropy=t.maxAnisotropy),r.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(r.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(r.samplingMode=t.samplingMode),t.target&&(r.target=t.target),r.uniform=t.uniform,t.unpackAlignment&&(r.unpackAlignment=t.unpackAlignment),t.wrapMode&&(r.wrapMode=t.wrapMode),new u.g(e,r,n)}function T(e){return"url"in e&&"urlHash"in e?{...e,url:""}:e}},71345:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(14571);class o{constructor(e,t,n,o){this.computedX=0,this.computedY=0,this.center=(0,r.fA)(e,t),this.centerT=(0,r.vt)(),this.halfWidth=n/2,this.halfHeight=o/2,this.width=n,this.height=o}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(e){this.center[0]=e}set y(e){this.center[1]=e}clone(){return new o(this.x,this.y,this.width,this.height)}serialize(e){return e.writeF32(this.center[0]),e.writeF32(this.center[1]),e.push(this.width),e.push(this.height),e}findCollisionDelta(e,t=4){const n=Math.abs(e.centerT[0]-this.centerT[0]),r=Math.abs(e.centerT[1]-this.centerT[1]),o=(e.halfWidth+this.halfWidth+t)/n,i=(e.halfHeight+this.halfHeight+t)/r,s=Math.min(o,i);return Math.log2(s)}extend(e){const t=Math.min(this.xmin,e.xmin),n=Math.min(this.ymin,e.ymin),r=Math.max(this.xmax,e.xmax)-t,o=Math.max(this.ymax,e.ymax)-n,i=t+r/2,s=n+o/2;this.width=r,this.height=o,this.halfWidth=r/2,this.halfHeight=o/2,this.x=i,this.y=s}static deserialize(e){const t=e.readF32(),n=e.readF32(),r=e.readInt32(),i=e.readInt32();return new o(t,n,r,i)}}},87574:(e,t,n)=>{n.d(t,{f:()=>i});var r=n(71345),o=n(44016);class i{constructor(e,t,n,r,o,i,s,u,l=[]){this.entityTexel=e,this.anchorX=t,this.anchorY=n,this.directionX=r,this.directionY=o,this.maxScale=i,this.minScale=s,this.referenceBounds=u,this.bounds=l}serialize(e){e.push(this.entityTexel),e.writeF32(this.anchorX),e.writeF32(this.anchorY),e.writeF32(this.directionX),e.writeF32(this.directionY),e.writeF32(this.maxScale),e.writeF32(this.minScale),null===this.referenceBounds?(e.writeF32(0),e.writeF32(0),e.writeF32(0)):(e.writeF32(this.referenceBounds.size),e.writeF32(this.referenceBounds.offsetX),e.writeF32(this.referenceBounds.offsetY)),(0,o.j)(e,this.bounds)}static deserialize(e){const t=e.readInt32(),n=e.readF32(),s=e.readF32(),u=e.readF32(),l=e.readF32(),a=e.readF32(),c=e.readF32(),f=e.readF32(),h=e.readF32(),d=e.readF32(),p=(0,o._)(e,r.A)??[];return new i(t,n,s,u,l,a,c,{size:f,offsetX:h,offsetY:d},p)}}},93911:(e,t,n)=>{n.d(t,{M9:()=>o});const r=new Float32Array(1);function o(e,t){return 65535&e|t<<16}new Uint32Array(r.buffer)},30188:(e,t,n)=>{n.d(t,{F:()=>o,q:()=>i});var r=n(68716);function o(e,t,n,o){const i=n.packPrecisionFactor??1;switch(n.type){case r.pe.BYTE:if(1===n.count)e.setInt8(o+n.offset,t*i);else for(let r=0;r<n.count;r++){const s=r*Int8Array.BYTES_PER_ELEMENT;e.setInt8(o+n.offset+s,t[r]*i)}break;case r.pe.UNSIGNED_BYTE:if(1===n.count)e.setUint8(o+n.offset,t*i);else for(let r=0;r<n.count;r++){const s=r*Uint8Array.BYTES_PER_ELEMENT;e.setUint8(o+n.offset+s,t[r]*i)}break;case r.pe.SHORT:if(1===n.count)e.setInt16(o+n.offset,t*i,!0);else for(let r=0;r<n.count;r++){const s=r*Int16Array.BYTES_PER_ELEMENT;e.setInt16(o+n.offset+s,t[r]*i,!0)}break;case r.pe.UNSIGNED_SHORT:if(1===n.count)e.setUint16(o+n.offset,t*i,!0);else for(let r=0;r<n.count;r++){const s=r*Uint16Array.BYTES_PER_ELEMENT;e.setUint16(o+n.offset+s,t[r]*i,!0)}break;case r.pe.INT:if(1===n.count)e.setInt32(o+n.offset,t*i,!0);else for(let r=0;r<n.count;r++){const s=r*Int32Array.BYTES_PER_ELEMENT;e.setInt32(o+n.offset+s,t[r]*i,!0)}break;case r.pe.UNSIGNED_INT:if(1===n.count)e.setUint32(o+n.offset,t*i,!0);else for(let r=0;r<n.count;r++){const s=r*Uint32Array.BYTES_PER_ELEMENT;e.setUint32(o+n.offset+s,t[r]*i,!0)}break;case r.pe.FLOAT:if(1===n.count)e.setFloat32(o+n.offset,t*i,!0);else for(let r=0;r<n.count;r++){const s=r*Float32Array.BYTES_PER_ELEMENT;e.setFloat32(o+n.offset+s,t[r]*i,!0)}}}function i(e,t,n){switch(t.type){case r.pe.BYTE:{if(1===t.count)return e.getInt8(n+t.offset);const r=[];for(let o=0;o<t.count;o++){const i=o*Int8Array.BYTES_PER_ELEMENT;r.push(e.getInt8(n+t.offset+i))}return r}case r.pe.UNSIGNED_BYTE:{if(1===t.count)return e.getUint8(n+t.offset);const r=[];for(let o=0;o<t.count;o++){const i=o*Uint8Array.BYTES_PER_ELEMENT;r.push(e.getUint8(n+t.offset+i))}return r}case r.pe.SHORT:{if(1===t.count)return e.getInt16(n+t.offset,!0);const r=[];for(let o=0;o<t.count;o++){const i=o*Int16Array.BYTES_PER_ELEMENT;r.push(e.getInt16(n+t.offset+i,!0))}return r}case r.pe.UNSIGNED_SHORT:{if(1===t.count)return e.getUint16(n+t.offset,!0);const r=[];for(let o=0;o<t.count;o++){const i=o*Uint16Array.BYTES_PER_ELEMENT;r.push(e.getUint16(n+t.offset+i,!0))}return r}case r.pe.INT:{if(1===t.count)return e.getInt32(n+t.offset,!0);const r=[];for(let o=0;o<t.count;o++){const i=o*Int32Array.BYTES_PER_ELEMENT;r.push(e.getInt32(n+t.offset+i,!0))}return r}case r.pe.UNSIGNED_INT:{if(1===t.count)return e.getUint32(n+t.offset,!0);const r=[];for(let o=0;o<t.count;o++){const i=o*Uint32Array.BYTES_PER_ELEMENT;r.push(e.getUint32(n+t.offset+i,!0))}return r}case r.pe.FLOAT:{if(1===t.count)return e.getFloat32(n+t.offset,!0);const r=[];for(let o=0;o<t.count;o++){const i=o*Float32Array.BYTES_PER_ELEMENT;r.push(e.getFloat32(n+t.offset+i,!0))}return r}}}},43135:(e,t,n)=>{n.d(t,{P:()=>i,h:()=>o});var r=n(21332);function o(e){const t=e.map((({name:e,count:t,type:n})=>`${e}.${t}.${n}`)).join(",");return(0,r.Wm)(t)}function i(e,t,n,r,o,s,u){if(e.primitiveName===t)for(const t in e)if(t===n){let n=r?.readWithDefault(o,s,e[t]&&u);return"text"===e.type&&(n=n.toString()),void(e[t]=n)}if("type"in e&&null!=e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.symbolLayers)for(const l of e.symbolLayers)i(l,t,n,r,o,s,u);break;case"CIMHatchFill":e.lineSymbol&&i(e.lineSymbol,t,n,r,o,s,u);break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const l of e.markerGraphics)i(l,t,n,r,o,s,u),i(l.symbol,t,n,r,o,s,u)}}},44016:(e,t,n)=>{function r(e,t){if(null!==t){e.push(t.length);for(const n of t)n.serialize(e);return e}e.push(0)}function o(e,t,n){const r=e.readInt32(),o=new Array(r);for(let r=0;r<o.length;r++)o[r]=t.deserialize(e,n);return o}n.d(t,{_:()=>o,j:()=>r})},67277:(e,t,n)=>{n.d(t,{_:()=>r});class r{constructor(e,t,n,r,o,i=!1,s=0){this.name=e,this.count=t,this.type=n,this.offset=r,this.stride=o,this.normalized=i,this.divisor=s}}}}]);