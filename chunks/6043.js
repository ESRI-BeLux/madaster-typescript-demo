"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[6043],{79441:(t,n,e)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function o(t,n,e,r,o,i,s,c,u){return[t,n,e,r,o,i,s,c,u]}e.d(n,{fA:()=>o,vt:()=>r,zK:()=>i});const i=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:r,createView:function(t,n){return new Float64Array(t,n,9)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},26110:(t,n,e)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}e.d(n,{o8:()=>o,vt:()=>r,zK:()=>i});const i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:o,create:r,createView:function(t,n){return new Float64Array(t,n,16)},fromValues:function(t,n,e,r,o,i,s,c,u,a,l,f,E,I,A,M){return[t,n,e,r,o,i,s,c,u,a,l,f,E,I,A,M]}},Symbol.toStringTag,{value:"Module"}))},19165:(t,n,e)=>{function r(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}e.d(n,{o8:()=>o,vt:()=>r,zK:()=>i});const i=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:i,clone:o,create:r,createView:function(t,n){return new Float64Array(t,n,4)},fromValues:function(t,n,e,r){return[t,n,e,r]}},Symbol.toStringTag,{value:"Module"}))},31753:(t,n,e)=>{e.d(n,{A6:()=>M,Xd:()=>l,Xr:()=>I,hZ:()=>N,lw:()=>f,t2:()=>m,x8:()=>a});var r=e(79441),o=e(19165),i=e(19913),s=e(78115),c=e(80347),u=e(74772);function a(t,n,e){e*=.5;const r=Math.sin(e);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(e),t}function l(t,n){const e=2*Math.acos(n[3]),r=Math.sin(e/2);return r>(0,s.FD)()?(t[0]=n[0]/r,t[1]=n[1]/r,t[2]=n[2]/r):(t[0]=1,t[1]=0,t[2]=0),e}function f(t,n,e){const r=n[0],o=n[1],i=n[2],s=n[3],c=e[0],u=e[1],a=e[2],l=e[3];return t[0]=r*l+s*c+o*a-i*u,t[1]=o*l+s*u+i*c-r*a,t[2]=i*l+s*a+r*u-o*c,t[3]=s*l-r*c-o*u-i*a,t}function E(t,n,e,r){const o=n[0],i=n[1],c=n[2],u=n[3];let a,l,f,E,I,A=e[0],M=e[1],T=e[2],N=e[3];return l=o*A+i*M+c*T+u*N,l<0&&(l=-l,A=-A,M=-M,T=-T,N=-N),1-l>(0,s.FD)()?(a=Math.acos(l),f=Math.sin(a),E=Math.sin((1-r)*a)/f,I=Math.sin(r*a)/f):(E=1-r,I=r),t[0]=E*o+I*A,t[1]=E*i+I*M,t[2]=E*c+I*T,t[3]=E*u+I*N,t}function I(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function A(t,n){const e=n[0]+n[4]+n[8];let r;if(e>0)r=Math.sqrt(e+1),t[3]=.5*r,r=.5/r,t[0]=(n[5]-n[7])*r,t[1]=(n[6]-n[2])*r,t[2]=(n[1]-n[3])*r;else{let e=0;n[4]>n[0]&&(e=1),n[8]>n[3*e+e]&&(e=2);const o=(e+1)%3,i=(e+2)%3;r=Math.sqrt(n[3*e+e]-n[3*o+o]-n[3*i+i]+1),t[e]=.5*r,r=.5/r,t[3]=(n[3*o+i]-n[3*i+o])*r,t[o]=(n[3*o+e]+n[3*e+o])*r,t[i]=(n[3*i+e]+n[3*e+i])*r}return t}function M(t,n,e,r){const o=.5*Math.PI/180;n*=o,e*=o,r*=o;const i=Math.sin(n),s=Math.cos(n),c=Math.sin(e),u=Math.cos(e),a=Math.sin(r),l=Math.cos(r);return t[0]=i*u*l-s*c*a,t[1]=s*c*l+i*u*a,t[2]=s*u*a-i*c*l,t[3]=s*u*l+i*c*a,t}const T=u.c,N=u.s,O=u.g,h=f,R=u.d,S=u.h,C=u.l,L=u.i,d=L,_=u.j,v=_,P=u.n,m=u.a,p=u.e,g=(0,i.vt)(),F=(0,i.fA)(1,0,0),b=(0,i.fA)(0,1,0),D=(0,o.vt)(),w=(0,o.vt)(),z=(0,r.vt)();Object.freeze(Object.defineProperty({__proto__:null,add:O,calculateW:function(t,n){const e=n[0],r=n[1],o=n[2];return t[0]=e,t[1]=r,t[2]=o,t[3]=Math.sqrt(Math.abs(1-e*e-r*r-o*o)),t},conjugate:I,copy:T,dot:S,equals:p,exactEquals:m,fromEuler:M,fromMat3:A,getAxisAngle:l,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:function(t,n){const e=n[0],r=n[1],o=n[2],i=n[3],s=e*e+r*r+o*o+i*i,c=s?1/s:0;return t[0]=-e*c,t[1]=-r*c,t[2]=-o*c,t[3]=i*c,t},len:d,length:L,lerp:C,mul:h,multiply:f,normalize:P,random:function(t){const n=s.Ov,e=n(),r=n(),o=n(),i=Math.sqrt(1-e),c=Math.sqrt(e);return t[0]=i*Math.sin(2*Math.PI*r),t[1]=i*Math.cos(2*Math.PI*r),t[2]=c*Math.sin(2*Math.PI*o),t[3]=c*Math.cos(2*Math.PI*o),t},rotateX:function(t,n,e){e*=.5;const r=n[0],o=n[1],i=n[2],s=n[3],c=Math.sin(e),u=Math.cos(e);return t[0]=r*u+s*c,t[1]=o*u+i*c,t[2]=i*u-o*c,t[3]=s*u-r*c,t},rotateY:function(t,n,e){e*=.5;const r=n[0],o=n[1],i=n[2],s=n[3],c=Math.sin(e),u=Math.cos(e);return t[0]=r*u-i*c,t[1]=o*u+s*c,t[2]=i*u+r*c,t[3]=s*u-o*c,t},rotateZ:function(t,n,e){e*=.5;const r=n[0],o=n[1],i=n[2],s=n[3],c=Math.sin(e),u=Math.cos(e);return t[0]=r*u+o*c,t[1]=o*u-r*c,t[2]=i*u+s*c,t[3]=s*u-i*c,t},rotationTo:function(t,n,e){const r=(0,c.j)(n,e);return r<-.999999?((0,c.b)(g,F,n),(0,c.C)(g)<1e-6&&(0,c.b)(g,b,n),(0,c.n)(g,g),a(t,g,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,c.b)(g,n,e),t[0]=g[0],t[1]=g[1],t[2]=g[2],t[3]=1+r,P(t,t))},scale:R,set:N,setAxes:function(t,n,e,r){const o=z;return o[0]=e[0],o[3]=e[1],o[6]=e[2],o[1]=r[0],o[4]=r[1],o[7]=r[2],o[2]=-n[0],o[5]=-n[1],o[8]=-n[2],P(t,A(t,o))},setAxisAngle:a,slerp:E,sqlerp:function(t,n,e,r,o,i){return E(D,n,o,i),E(w,e,r,i),E(t,D,w,2*i*(1-i)),t},sqrLen:v,squaredLength:_,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},80788:(t,n,e)=>{e.d(n,{l:()=>a});var r=e(4506),o=e(25336),i=e(19913);function s(t,n,e){const r=Math.sin(t),o=Math.cos(t),i=Math.sin(n),s=Math.cos(n),c=e;return c[0]=-r,c[4]=-i*o,c[8]=s*o,c[12]=0,c[1]=o,c[5]=-i*r,c[9]=s*r,c[13]=0,c[2]=0,c[6]=s,c[10]=i,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1,c}var c=e(91240),u=e(67488);function a(t,n,e,r){if(null==t||null==r)return!1;const i=(0,c.Qk)(t,c.Wv),a=(0,c.Qk)(r,c.zp);if(i===a&&!l(a)&&(i!==c.rz.UNKNOWN||(0,u.aI)(t,r)))return(0,o.kN)(e,n),!0;if(l(a)){const t=c.w5[i][c.rz.LON_LAT],r=c.w5[c.rz.LON_LAT][a];return null!=t&&null!=r&&(t(n,0,E,0),r(E,0,I,0),s(f*E[0],f*E[1],e),e[12]=I[0],e[13]=I[1],e[14]=I[2],!0)}if((a===c.rz.WEB_MERCATOR||a===c.rz.PLATE_CARREE||a===c.rz.WGS84)&&(i===c.rz.WGS84||i===c.rz.CGCS2000&&a===c.rz.PLATE_CARREE||i===c.rz.SPHERICAL_ECEF||i===c.rz.WEB_MERCATOR)){const t=c.w5[i][c.rz.LON_LAT],r=c.w5[c.rz.LON_LAT][a];return null!=t&&null!=r&&(t(n,0,E,0),r(E,0,I,0),i===c.rz.SPHERICAL_ECEF?function(t,n,e){s(t,n,e),(0,o.mg)(e,e)}(f*E[0],f*E[1],e):(0,o.D_)(e),e[12]=I[0],e[13]=I[1],e[14]=I[2],!0)}return!1}function l(t){return t===c.rz.SPHERICAL_ECEF||t===c.rz.SPHERICAL_MARS_PCPF||t===c.rz.SPHERICAL_MOON_PCPF}const f=(0,r.kU)(1),E=(0,i.vt)(),I=(0,i.vt)()},32159:(t,n,e)=>{e.d(n,{lO:()=>a});var r=e(34670),o=e(44153),i=e(67488);const s=new o.A(r.fv),c=new o.A(r.FY),u=new o.A(r.LJ);function a(t){const n=l.get(t);if(n)return n;let e=s;if(t)if(t===c)e=c;else if(t===u)e=u;else{const n=t.wkid,r=t.latestWkid;if(null!=n||null!=r)(0,i.tl)(n)||(0,i.tl)(r)?e=c:((0,i.ZL)(n)||(0,i.ZL)(r))&&(e=u);else{const n=t.wkt2??t.wkt;if(n){const t=n.toUpperCase();t===f?e=c:t===E&&(e=u)}}}return l.set(t,e),e}new o.A(r.Ro);const l=new Map,f=c.wkt.toUpperCase(),E=u.wkt.toUpperCase()},87368:(t,n,e)=>{e.d(n,{C:()=>a,Cr:()=>I,LV:()=>u,O_:()=>E,Qj:()=>l,T7:()=>v,Tj:()=>m,Ui:()=>_,_I:()=>p,ci:()=>M,fA:()=>f,gv:()=>P,lU:()=>A,mN:()=>g,mP:()=>C,mR:()=>d,vt:()=>c,ze:()=>L});var r=e(4506),o=e(80347),i=e(19913),s=(e(74772),e(74695),e(11631));function c(t=b){return[t[0],t[1],t[2],t[3]]}function u(t=b[0],n=b[1],e=b[2],r=b[3]){return f(t,n,e,r,s.Km.get())}function a(t,n){return f(n[0],n[1],n[2],n[3],t)}function l(t){return t}function f(t,n,e,r,o=c()){return o[0]=t,o[1]=n,o[2]=e,o[3]=r,o}function E(t,n,e){const r=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],o=Math.abs(r-1)>1e-5&&r>1e-12?1/Math.sqrt(r):1;return e[0]=n[0]*o,e[1]=n[1]*o,e[2]=n[2]*o,e[3]=-(e[0]*t[0]+e[1]*t[1]+e[2]*t[2]),e}function I(t,n,e,r=c()){const o=e[0]-n[0],i=e[1]-n[1],s=e[2]-n[2],u=t[0]-n[0],a=t[1]-n[1],l=t[2]-n[2],f=i*l-s*a,E=s*u-o*l,I=o*a-i*u,A=f*f+E*E+I*I,M=Math.abs(A-1)>1e-5&&A>1e-12?1/Math.sqrt(A):1;return r[0]=f*M,r[1]=E*M,r[2]=I*M,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function A(t,n,e,r=0,i=Math.floor(e*(1/3)),s=Math.floor(e*(2/3))){if(e<3)return!1;n(N,r);let c=i,u=!1;for(;c<e-1&&!u;)n(O,c),c++,u=!(0,o.i)(N,O);if(!u)return!1;for(c=Math.max(c,s),u=!1;c<e&&!u;)n(h,c),c++,(0,o.f)(R,N,O),(0,o.n)(R,R),(0,o.f)(S,O,h),(0,o.n)(S,S),u=!(0,o.i)(N,h)&&!(0,o.i)(O,h)&&Math.abs((0,o.j)(R,S))<T;return u?(I(N,O,h,t),!0):(0!==r||1!==i||2!==s)&&A(t,n,e,0,1,2)}function M(t,n,e=!0){const r=n.length/3;return A(t,((t,e)=>(0,o.s)(t,n[3*e+0],n[3*e+1],n[3*e+2])),e?r-1:r)}e(45773);const T=.99619469809,N=(0,i.vt)(),O=(0,i.vt)(),h=(0,i.vt)(),R=(0,i.vt)(),S=(0,i.vt)();function C(t,n,e){return n!==t&&a(t,n),t[3]=-(0,o.j)(t,e),t}function L(t,n){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function d(t,n,e,r){return(0,o.b)(h,n,t),E(e,h,r)}function _(t,n,e){return null!=n&&F(t,n.origin,n.direction,z,e)}function v(t,n,e){return F(t,n.origin,n.vector,D.NONE,e)}function P(t,n,e){return F(t,n.origin,n.vector,D.CLAMP,e)}function m(t,n){return g(t,n)>=0}function p(t,n,e){const r=(0,o.h)(s.rq.get(),t,-t[3]),i=function(t,n,e){const r=(0,o.h)(s.rq.get(),t,(0,o.j)(t,n));return(0,o.f)(e,n,r),e}(t,(0,o.f)(s.rq.get(),n,r),s.rq.get());return(0,o.g)(e,i,r),e}function g(t,n){return(0,o.j)(t,n)+t[3]}function F(t,n,e,i,s){const c=(0,o.j)(t,e);if(0===c)return!1;let u=-((0,o.j)(t,n)+t[3])/c;return i&D.CLAMP&&(u=(0,r.qE)(u,0,1)),!(!(i&D.INFINITE_MIN)&&u<0||!(i&D.INFINITE_MAX)&&u>1||((0,o.g)(s,n,(0,o.h)(s,e,u)),0))}const b=[0,0,1,0];var D,w;(w=D||(D={}))[w.NONE=0]="NONE",w[w.CLAMP=1]="CLAMP",w[w.INFINITE_MIN=4]="INFINITE_MIN",w[w.INFINITE_MAX=8]="INFINITE_MAX",D.INFINITE_MIN,D.INFINITE_MAX;const z=D.INFINITE_MAX},74695:(t,n,e)=>{e.d(n,{g7:()=>c,gr:()=>s});var r=e(4506),o=e(80347),i=e(19913);function s(t,n){return(0,o.j)(t,n)/(0,o.l)(t)}function c(t,n){const e=(0,o.j)(t,n)/((0,o.l)(t)*(0,o.l)(n));return-(0,r.XM)(e)}(0,i.vt)(),(0,i.vt)()},11631:(t,n,e)=>{e.d(n,{Rc:()=>I,J8:()=>A,rq:()=>f,Km:()=>E});var r=e(71709),o=e(79441),i=e(26110),s=e(19165),c=e(56560),u=e(19913),a=e(76982);class l{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,r.d)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new l(c.vt)}static createVec3f64(){return new l(u.vt)}static createVec4f64(){return new l(a.vt)}static createMat3f64(){return new l(o.vt)}static createMat4f64(){return new l(i.vt)}static createQuatf64(){return new l(s.vt)}get test(){return{length:this._items.length}}}l.createVec2f64();const f=l.createVec3f64(),E=l.createVec4f64(),I=(l.createMat3f64(),l.createMat4f64()),A=l.createQuatf64()},45773:(t,n,e)=>{e.d(n,{hG:()=>i,wp:()=>s}),e(4506);var r=e(80347),o=e(19913);function i(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],e=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],r=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,e,r))}function s(t,n){const e=Math.sqrt(n[0]*n[0]+n[4]*n[4]+n[8]*n[8]),o=Math.sqrt(n[1]*n[1]+n[5]*n[5]+n[9]*n[9]),i=Math.sqrt(n[2]*n[2]+n[6]*n[6]+n[10]*n[10]);return(0,r.s)(t,e,o,i),t}(0,o.vt)(),(0,o.vt)(),(0,o.vt)(),(0,o.vt)(),(0,o.vt)()},10941:(t,n,e)=>{e.d(n,{K:()=>r,n:()=>o});class r{constructor(t,n,e=n){this.data=t,this.size=n,this.stride=e}}class o extends r{constructor(t,n,e,r=!1,o=e){super(t,e,o),this.indices=n,this.exclusive=r}}},33763:(t,n,e)=>{var r;function o(t){return t===r.POSITION}e.d(n,{b:()=>o,r:()=>r}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))}}]);