"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[9328],{69891:(t,e,r)=>{r.d(e,{N:()=>p,a:()=>_,b:()=>g,c:()=>T,d:()=>b,f:()=>S,g:()=>A,i:()=>P,n:()=>N,u:()=>R,w:()=>E}),r(6273);var s=r(80861),n=r(4506),i=r(25336),f=r(80347),u=r(19913),a=r(74772),o=r(76982),h=r(78115),c=r(60929),y=r(63918),d=r(74695),l=r(11631);const p=b();function b(){return(0,o.vt)()}const m=a.e,B=a.e;function T(t,e){return(0,a.c)(e,t)}function g(t,e){return(0,o.fA)(t[0],t[1],t[2],e)}function E(t){return t}function _(t){return t[3]}function A(t){return t}function S(t,e,r,s){return(0,o.fA)(t,e,r,s)}function M(t,e,r){if(null==e)return!1;if(!v(t,e,O))return!1;let{t0:s,t1:n}=O;if((s<0||n<s&&n>0)&&(s=n),s<0)return!1;if(r){const{origin:t,direction:n}=e;r[0]=t[0]+n[0]*s,r[1]=t[1]+n[1]*s,r[2]=t[2]+n[2]*s}return!0}const O={t0:0,t1:0};function v(t,e,r){const{origin:s,direction:n}=e,i=w;i[0]=s[0]-t[0],i[1]=s[1]-t[1],i[2]=s[2]-t[2];const f=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(0===f)return!1;const u=2*(n[0]*i[0]+n[1]*i[1]+n[2]*i[2]),a=u*u-4*f*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(a<0)return!1;const o=Math.sqrt(a);return r.t0=(-u-o)/(2*f),r.t1=(-u+o)/(2*f),!0}const w=(0,u.vt)();function P(t,e){return M(t,e,null)}function x(t,e,r){const s=l.rq.get(),n=l.Rc.get();(0,f.b)(s,e.origin,e.direction);const u=_(t);(0,f.b)(r,s,e.origin),(0,f.h)(r,r,1/(0,f.l)(r)*u);const a=j(t,e.origin),o=(0,d.g7)(e.origin,r);return(0,i.$0)(n,o+a,s),(0,f.e)(r,r,n),r}function L(t,e,r){const s=(0,f.f)(l.rq.get(),e,t),n=(0,f.h)(l.rq.get(),s,t[3]/(0,f.l)(s));return(0,f.g)(r,n,t)}function j(t,e){const r=(0,f.f)(l.rq.get(),e,t),s=(0,f.l)(r),i=_(t),u=i+Math.abs(i-s);return(0,n.XM)(i/u)}const C=(0,u.vt)();function q(t,e,r,s){const i=(0,f.f)(C,e,t);switch(r){case c._.X:{const t=(0,n.jU)(i,C)[2];return(0,f.s)(s,-Math.sin(t),Math.cos(t),0)}case c._.Y:{const t=(0,n.jU)(i,C),e=t[1],r=t[2],u=Math.sin(e);return(0,f.s)(s,-u*Math.cos(r),-u*Math.sin(r),Math.cos(e))}case c._.Z:return(0,f.n)(s,i);default:return}}function I(t,e){const r=(0,f.f)(Y,e,t);return(0,f.l)(r)-t[3]}function N(t,e){const r=(0,f.a)(t,e),s=_(t);return r<=s*s}function R(t,e,r=(0,o.vt)()){const s=(0,f.p)(t,e),n=t[3],i=e[3];return s+i<n?((0,a.c)(r,t),r):s+n<i?((0,a.c)(r,e),r):((0,f.k)(r,t,e,(s+i-n)/(2*s)),r[3]=(s+n+i)/2,r)}const Y=(0,u.vt)(),z=b();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:p,altitudeAt:I,angleToSilhouette:j,axisAt:q,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,e,r){return M(t,e,r)?r:((0,y.oC)(e,t,r),L(t,r,r))},closestPointOnSilhouette:x,containsPoint:N,copy:T,create:b,distanceToSilhouette:function(t,e){const r=(0,f.f)(l.rq.get(),e,t),s=(0,f.o)(r),n=t[3]*t[3];return Math.sqrt(Math.abs(s-n))},elevate:function(t,e,r){return t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2]),r[3]=t[3]+e,r},equals:B,exactEquals:m,fromCenterAndRadius:g,fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},fromValues:S,getCenter:A,getRadius:_,intersectLine:function(t,e,r){const s=(0,y.Cr)(e,r);if(!v(t,s,O))return[];const{origin:n,direction:i}=s,{t0:a,t1:o}=O,c=e=>{const r=(0,u.vt)();return(0,f.q)(r,n,i,e),L(t,r,r)};return Math.abs(a-o)<(0,h.FD)()?[c(a)]:[c(a),c(o)]},intersectRay:M,intersectRayClosestSilhouette:function(t,e,r){if(M(t,e,r))return r;const s=x(t,e,l.rq.get());return(0,f.g)(r,e.origin,(0,f.h)(l.rq.get(),e.direction,(0,f.p)(e.origin,s)/(0,f.l)(e.direction))),r},intersectsRay:P,projectPoint:L,setAltitudeAt:function(t,e,r,s){const n=I(t,e),i=q(t,e,c._.Z,Y),u=(0,f.h)(Y,i,r-n);return(0,f.g)(s,e,u)},setExtent:function(t,e,r){return s.A.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t!==r&&T(t,r),r},tmpSphere:z,union:R,wrap:E},Symbol.toStringTag,{value:"Module"}))},82444:(t,e,r)=>{r.d(e,{I:()=>n});var s=r(71709);class n{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,s.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator())}}const i=1024},40041:(t,e,r)=>{r.d(e,{Y$:()=>y,qB:()=>g,Qt:()=>V,My:()=>X,bf:()=>N,jZ:()=>b,j0:()=>m,Sx:()=>B,E$:()=>T,h:()=>w,P:()=>j,SL:()=>S,gH:()=>d,si:()=>E,mJ:()=>F,UL:()=>H,D6:()=>R,Yi:()=>P,An:()=>C,LC:()=>M,xs:()=>l,Xm:()=>_,Vp:()=>U,zD:()=>Z,m8:()=>Y,nS:()=>x,H$:()=>q,eI:()=>O,Eq:()=>p,Aj:()=>A,E7:()=>Q,Y4:()=>k,TX:()=>z,Uz:()=>L,ml:()=>I,XP:()=>v});class s{constructor(t,e,r=0,s,n){this.TypedArrayConstructor=t,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===s&&(s=9*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==n?new i(e,f):new i(e,f,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let t=0;t<9;t++)e[t]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let t=0;t<9;t++)this.typedBuffer[r++]=e[t]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const s=this.typedBuffer,n=e.typedBuffer;let i=t*this.typedBufferStride,f=r*e.typedBufferStride;for(let t=0;t<9;++t)s[i++]=n[f++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=9;class n{constructor(t,e,r=0,s,n){this.TypedArrayConstructor=t,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===s&&(s=16*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==n?new i(e,f):new i(e,f,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let t=0;t<16;t++)e[t]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let t=0;t<16;t++)this.typedBuffer[r++]=e[t]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const s=this.typedBuffer,n=e.typedBuffer;let i=t*this.typedBufferStride,f=r*e.typedBufferStride;for(let t=0;t<16;++t)s[i++]=n[f++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=16;class i{constructor(t,e,r=0,s,n){this.TypedArrayConstructor=t,this.elementCount=1;const i=this.TypedArrayConstructor;void 0===s&&(s=i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==n?new i(e,f):new i(e,f,(n-r)/i.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=1;var f=r(53334);class u{constructor(t,e,r=0,s,n){this.TypedArrayConstructor=t,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===s&&(s=2*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==n?new i(e,f):new i(e,f,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}getVec(t,e){return t*=this.typedBufferStride,(0,f.hZ)(e,this.typedBuffer[t],this.typedBuffer[t+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r}copyFrom(t,e,r){const s=this.typedBuffer,n=e.typedBuffer;let i=t*this.typedBufferStride,f=r*e.typedBufferStride;s[i++]=n[f++],s[i]=n[f]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var a=r(80347);class o{constructor(t,e,r=0,s,n){this.TypedArrayConstructor=t,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===s&&(s=3*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==n?new i(e,f):new i(e,f,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}getVec(t,e){return t*=this.typedBufferStride,(0,a.s)(e,this.typedBuffer[t],this.typedBuffer[t+1],this.typedBuffer[t+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,s){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=s}copyFrom(t,e,r){const s=this.typedBuffer,n=e.typedBuffer;let i=t*this.typedBufferStride,f=r*e.typedBufferStride;s[i++]=n[f++],s[i++]=n[f++],s[i]=n[f]}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=3;var h=r(74772);class c{constructor(t,e,r=0,s,n){this.TypedArrayConstructor=t,this.start=r,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===s&&(s=4*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==n?new i(e,f):new i(e,f,(n-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}getVec(t,e){return t*=this.typedBufferStride,(0,h.s)(e,this.typedBuffer[t++],this.typedBuffer[t++],this.typedBuffer[t++],this.typedBuffer[t])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,s,n){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=s,this.typedBuffer[t]=n}copyFrom(t,e,r){const s=this.typedBuffer,n=e.typedBuffer;let i=t*this.typedBufferStride,f=r*e.typedBufferStride;s[i++]=n[f++],s[i++]=n[f++],s[i++]=n[f++],s[i]=n[f]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=4;class y extends i{constructor(t,e=0,r,s){super(Float32Array,t,e,r,s),this.elementType="f32"}static fromTypedArray(t,e){return new y(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}y.ElementType="f32";class d extends u{constructor(t,e=0,r,s){super(Float32Array,t,e,r,s),this.elementType="f32"}slice(t,e){return this.sliceBuffer(d,t,e)}static fromTypedArray(t,e){return new d(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}d.ElementType="f32";class l extends o{constructor(t,e=0,r,s){super(Float32Array,t,e,r,s),this.elementType="f32"}slice(t,e){return this.sliceBuffer(l,t,e)}static fromTypedArray(t,e){return new l(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}l.ElementType="f32";class p extends c{constructor(t,e=0,r,s){super(Float32Array,t,e,r,s),this.elementType="f32"}slice(t,e){return this.sliceBuffer(p,t,e)}static fromTypedArray(t,e){return new p(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}p.ElementType="f32";class b extends s{constructor(t,e=0,r,s){super(Float32Array,t,e,r,s),this.elementType="f32"}slice(t,e){return this.sliceBuffer(b,t,e)}static fromTypedArray(t,e){return new b(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}b.ElementType="f32";class m extends s{constructor(t,e=0,r,s){super(Float64Array,t,e,r,s),this.elementType="f64"}slice(t,e){return this.sliceBuffer(m,t,e)}static fromTypedArray(t,e){return new m(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}m.ElementType="f64";class B extends n{constructor(t,e=0,r,s){super(Float32Array,t,e,r,s),this.elementType="f32"}slice(t,e){return this.sliceBuffer(B,t,e)}static fromTypedArray(t,e){return new B(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}B.ElementType="f32";class T extends n{constructor(t,e=0,r,s){super(Float64Array,t,e,r,s),this.elementType="f64"}slice(t,e){return this.sliceBuffer(T,t,e)}static fromTypedArray(t,e){return new T(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}T.ElementType="f64";class g extends i{constructor(t,e=0,r,s){super(Float64Array,t,e,r,s),this.elementType="f64"}slice(t,e){return this.sliceBuffer(g,t,e)}static fromTypedArray(t,e){return new g(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}g.ElementType="f64";class E extends u{constructor(t,e=0,r,s){super(Float64Array,t,e,r,s),this.elementType="f64"}slice(t,e){return this.sliceBuffer(E,t,e)}static fromTypedArray(t,e){return new E(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}E.ElementType="f64";class _ extends o{constructor(t,e=0,r,s){super(Float64Array,t,e,r,s),this.elementType="f64"}slice(t,e){return this.sliceBuffer(_,t,e)}static fromTypedArray(t,e){return new _(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}_.ElementType="f64";class A extends c{constructor(t,e=0,r,s){super(Float64Array,t,e,r,s),this.elementType="f64"}slice(t,e){return this.sliceBuffer(A,t,e)}static fromTypedArray(t,e){return new A(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}A.ElementType="f64";class S extends i{constructor(t,e=0,r,s){super(Uint8Array,t,e,r,s),this.elementType="u8"}slice(t,e){return this.sliceBuffer(S,t,e)}static fromTypedArray(t,e){return new S(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}S.ElementType="u8";class M extends u{constructor(t,e=0,r,s){super(Uint8Array,t,e,r,s),this.elementType="u8"}slice(t,e){return this.sliceBuffer(M,t,e)}static fromTypedArray(t,e){return new M(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}M.ElementType="u8";class O extends o{constructor(t,e=0,r,s){super(Uint8Array,t,e,r,s),this.elementType="u8"}slice(t,e){return this.sliceBuffer(O,t,e)}static fromTypedArray(t,e){return new O(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}O.ElementType="u8";class v extends c{constructor(t,e=0,r,s){super(Uint8Array,t,e,r,s),this.elementType="u8"}slice(t,e){return this.sliceBuffer(v,t,e)}static fromTypedArray(t,e){return new v(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}v.ElementType="u8";class w extends i{constructor(t,e=0,r,s){super(Uint16Array,t,e,r,s),this.elementType="u16"}slice(t,e){return this.sliceBuffer(w,t,e)}static fromTypedArray(t,e){return new w(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}w.ElementType="u16";class P extends u{constructor(t,e=0,r,s){super(Uint16Array,t,e,r,s),this.elementType="u16"}slice(t,e){return this.sliceBuffer(P,t,e)}static fromTypedArray(t,e){return new P(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}P.ElementType="u16";class x extends o{constructor(t,e=0,r,s){super(Uint16Array,t,e,r,s),this.elementType="u16"}slice(t,e){return this.sliceBuffer(x,t,e)}static fromTypedArray(t,e){return new x(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}x.ElementType="u16";class L extends c{constructor(t,e=0,r,s){super(Uint16Array,t,e,r,s),this.elementType="u16"}slice(t,e){return this.sliceBuffer(L,t,e)}static fromTypedArray(t,e){return new L(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}L.ElementType="u16";class j extends i{constructor(t,e=0,r,s){super(Uint32Array,t,e,r,s),this.elementType="u32"}slice(t,e){return this.sliceBuffer(j,t,e)}static fromTypedArray(t,e){return new j(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}j.ElementType="u32";class C extends u{constructor(t,e=0,r,s){super(Uint32Array,t,e,r,s),this.elementType="u32"}slice(t,e){return this.sliceBuffer(C,t,e)}static fromTypedArray(t,e){return new C(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}C.ElementType="u32";class q extends o{constructor(t,e=0,r,s){super(Uint32Array,t,e,r,s),this.elementType="u32"}slice(t,e){return this.sliceBuffer(q,t,e)}static fromTypedArray(t,e){return new q(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}q.ElementType="u32";class I extends c{constructor(t,e=0,r,s){super(Uint32Array,t,e,r,s),this.elementType="u32"}slice(t,e){return this.sliceBuffer(I,t,e)}static fromTypedArray(t,e){return new I(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}I.ElementType="u32";class N extends i{constructor(t,e=0,r,s){super(Int8Array,t,e,r,s),this.elementType="i8"}slice(t,e){return this.sliceBuffer(N,t,e)}static fromTypedArray(t,e){return new N(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}N.ElementType="i8";class R extends u{constructor(t,e=0,r,s){super(Int8Array,t,e,r,s),this.elementType="i8"}slice(t,e){return this.sliceBuffer(R,t,e)}static fromTypedArray(t,e){return new R(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}R.ElementType="i8";class Y extends o{constructor(t,e=0,r,s){super(Int8Array,t,e,r,s),this.elementType="i8"}slice(t,e){return this.sliceBuffer(Y,t,e)}static fromTypedArray(t,e){return new Y(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}Y.ElementType="i8";class z extends c{constructor(t,e=0,r,s){super(Int8Array,t,e,r,s),this.elementType="i8"}slice(t,e){return this.sliceBuffer(z,t,e)}static fromTypedArray(t,e){return new z(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}z.ElementType="i8";class V extends i{constructor(t,e=0,r,s){super(Int16Array,t,e,r,s),this.elementType="i16"}slice(t,e){return this.sliceBuffer(V,t,e)}static fromTypedArray(t,e){return new V(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}V.ElementType="i16";class F extends u{constructor(t,e=0,r,s){super(Int16Array,t,e,r,s),this.elementType="i16"}slice(t,e){return this.sliceBuffer(F,t,e)}static fromTypedArray(t,e){return new F(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}F.ElementType="i16";class U extends o{constructor(t,e=0,r,s){super(Int16Array,t,e,r,s),this.elementType="i16"}slice(t,e){return this.sliceBuffer(U,t,e)}static fromTypedArray(t,e){return new U(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}U.ElementType="i16";class Q extends c{constructor(t,e=0,r,s){super(Int16Array,t,e,r,s),this.elementType="i16"}slice(t,e){return this.sliceBuffer(Q,t,e)}static fromTypedArray(t,e){return new Q(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}Q.ElementType="i16";class X extends i{constructor(t,e=0,r,s){super(Int32Array,t,e,r,s),this.elementType="i32"}slice(t,e){return this.sliceBuffer(X,t,e)}static fromTypedArray(t,e){return new X(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}X.ElementType="i32";class H extends u{constructor(t,e=0,r,s){super(Int32Array,t,e,r,s),this.elementType="i32"}slice(t,e){return this.sliceBuffer(H,t,e)}static fromTypedArray(t,e){return new H(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}H.ElementType="i32";class Z extends o{constructor(t,e=0,r,s){super(Int32Array,t,e,r,s),this.elementType="i32"}slice(t,e){return this.sliceBuffer(Z,t,e)}static fromTypedArray(t,e){return new Z(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}Z.ElementType="i32";class k extends c{constructor(t,e=0,r,s){super(Int32Array,t,e,r,s),this.elementType="i32"}slice(t,e){return this.sliceBuffer(k,t,e)}static fromTypedArray(t,e){return new k(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}k.ElementType="i32"},63918:(t,e,r)=>{r.d(e,{C:()=>h,Cr:()=>c,LV:()=>o,kb:()=>y,oC:()=>d,vt:()=>u}),r(3223);var s=r(82444),n=r(80347),i=r(19913),f=r(11631);function u(t){return t?a((0,i.o8)(t.origin),(0,i.o8)(t.direction)):a((0,i.vt)(),(0,i.vt)())}function a(t,e){return{origin:t,direction:e}}function o(t,e){const r=l.get();return r.origin=t,r.direction=e,r}function h(t,e=u()){return function(t,e,r=u()){return(0,n.c)(r.origin,t),(0,n.c)(r.direction,e),r}(t.origin,t.direction,e)}function c(t,e,r=u()){return(0,n.c)(r.origin,t),(0,n.f)(r.direction,e,t),r}function y(t,e){const r=(0,n.b)(f.rq.get(),(0,n.n)(f.rq.get(),t.direction),(0,n.f)(f.rq.get(),e,t.origin));return(0,n.j)(r,r)}function d(t,e,r){const s=(0,n.j)(t.direction,(0,n.f)(r,e,t.origin));return(0,n.g)(r,t.origin,(0,n.h)(r,t.direction,s)),r}const l=new s.I((()=>u()))},96153:(t,e,r)=>{r.d(e,{Eb:()=>f,_j:()=>u,k5:()=>s});var s,n,i=r(4506);function f(t){switch(t){case"multiply":default:return s.Multiply;case"ignore":return s.Ignore;case"replace":return s.Replace;case"tint":return s.Tint}}function u(t,e,r){if(null==t||e===s.Ignore)return r[0]=255,r[1]=255,r[2]=255,void(r[3]=255);const n=(0,i.qE)(Math.round(t[3]*o),0,o),f=0===n||e===s.Tint?0:e===s.Replace?h:c;r[0]=(0,i.qE)(Math.round(t[0]*a),0,a),r[1]=(0,i.qE)(Math.round(t[1]*a),0,a),r[2]=(0,i.qE)(Math.round(t[2]*a),0,a),r[3]=n+f}(n=s||(s={}))[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint";const a=255,o=85,h=o,c=2*o},45506:(t,e,r)=>{r.d(e,{ab:()=>gt,gm:()=>xt});var s=r(82541),n=r(79441),i=r(26110),f=r(31753),u=r(19165),a=r(80347),o=r(19913),h=r(74772),c=r(76982),y=r(34670),d=r(32159),l=r(80788),p=r(88133),b=r(91240),m=r(87368),B=r(67488),T=r(11631),g=r(84456),E=r(56560),_=r(10941);const A=1e-6,S=(0,o.vt)(),M=(0,o.vt)();function O(t,e,r,s,n,i,f,u,a,o){return function(t,e,r){let s=Bt(t.maxVert[0],t.minVert[0]),n=0;for(let e=1;e<7;++e){const r=Bt(t.maxVert[e],t.minVert[e]);r>s&&(s=r,n=e)}lt(e,t.minVert[n]),lt(r,t.maxVert[n])}(t,s,n),Bt(s,n)<A?1:(yt(f,s,n),bt(f,f),function(t,e,r,s){const{data:n,size:i}=t;let f=Number.NEGATIVE_INFINITY,u=0;for(let t=0;t<n.length;t+=i){N[0]=n[t]-e[0],N[1]=n[t+1]-e[1],N[2]=n[t+2]-e[2];const s=r[0]*N[0]+r[1]*N[1]+r[2]*N[2],i=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],a=N[0]*N[0]+N[1]*N[1]+N[2]*N[2]-s*s/i;a>f&&(f=a,u=t)}return lt(s,n,u),f}(e,s,f,i)<A?2:(yt(u,n,i),bt(u,u),yt(a,i,s),bt(a,a),pt(r,u,f),bt(r,r),X(e,r,f,u,a,o),0))}const v=(0,o.vt)(),w=(0,o.vt)(),P=(0,o.vt)(),x=(0,o.vt)(),L=(0,o.vt)(),j=(0,o.vt)(),C=(0,o.vt)(),q=(0,o.vt)();function I(t,e,r,s,n,i,f,u,a){(function(t,e,r,s,n){!function(t,e,r,s,n){const{data:i,size:f}=t;lt(s,i),lt(n,s),r[0]=Tt(H,e),r[1]=r[0];for(let t=f;t<i.length;t+=f){const f=i[t]*e[0]+i[t+1]*e[1]+i[t+2]*e[2];f<r[0]&&(r[0]=f,lt(s,i,t)),f>r[1]&&(r[1]=f,lt(n,i,t))}}(t,e,R,n,s);const i=Tt(r,e);R[1]-A<=i&&(s[0]=void 0),R[0]+A>=i&&(n[0]=void 0)})(t,e,r,v,w),void 0!==v[0]&&(yt(P,v,r),bt(P,P),yt(x,v,s),bt(x,x),yt(L,v,n),bt(L,L),pt(j,x,i),bt(j,j),pt(C,L,f),bt(C,C),pt(q,P,u),bt(q,q),X(t,j,i,x,P,a),X(t,C,f,L,x,a),X(t,q,u,P,L,a)),void 0!==w[0]&&(yt(P,w,r),bt(P,P),yt(x,w,s),bt(x,x),yt(L,w,n),bt(L,L),pt(j,x,i),bt(j,j),pt(C,L,f),bt(C,C),pt(q,P,u),bt(q,q),X(t,j,i,x,P,a),X(t,C,f,L,x,a),X(t,q,u,P,L,a))}const N=[0,0,0],R=(0,E.vt)(),Y=(0,o.vt)(),z=(0,o.vt)(),V=(0,o.vt)(),F=(0,o.vt)(),U=(0,o.vt)(),Q=(0,o.vt)();function X(t,e,r,s,n,i){if(mt(e)<A)return;pt(Y,r,e),pt(z,s,e),pt(V,n,e),Z(t,e,R),U[1]=R[0],F[1]=R[1],Q[1]=F[1]-U[1];const f=[r,s,n],u=[Y,z,V];for(let r=0;r<3;++r){Z(t,f[r],R),U[0]=R[0],F[0]=R[1],Z(t,u[r],R),U[2]=R[0],F[2]=R[1],Q[0]=F[0]-U[0],Q[2]=F[2]-U[2];const s=ht(Q);s<i.quality&&(lt(i.b0,f[r]),lt(i.b1,e),lt(i.b2,u[r]),i.quality=s)}}const H=(0,o.vt)();function Z(t,e,r){const{data:s,size:n}=t;r[0]=Number.POSITIVE_INFINITY,r[1]=Number.NEGATIVE_INFINITY;for(let t=0;t<s.length;t+=n){const n=s[t]*e[0]+s[t+1]*e[1]+s[t+2]*e[2];r[0]=Math.min(r[0],n),r[1]=Math.max(r[1],n)}}function k(t,e,r){r.center=t,r.halfSize=(0,a.h)(e,e,.5),r.quaternion=u.zK}const D=(0,o.vt)(),G=(0,o.vt)(),K=(0,o.vt)(),W=(0,o.vt)(),$=(0,o.vt)(),J=(0,o.vt)();function tt(t,e,r){lt(D,e),Math.abs(e[0])>Math.abs(e[1])&&Math.abs(e[0])>Math.abs(e[2])?D[0]=0:Math.abs(e[1])>Math.abs(e[2])?D[1]=0:D[2]=0,mt(D)<A&&(D[0]=D[1]=D[2]=1),pt(G,e,D),bt(G,G),pt(K,e,G),bt(K,K),et(t,e,G,K,W,$),yt(J,$,W),ut(e,G,K,W,$,J,r)}function et(t,e,r,s,n,i){Z(t,e,R),n[0]=R[0],i[0]=R[1],Z(t,r,R),n[1]=R[0],i[1]=R[1],Z(t,s,R),n[2]=R[0],i[2]=R[1]}const rt=(0,o.vt)(),st=(0,o.vt)(),nt=(0,o.vt)(),it=(0,n.fA)(1,0,0,0,1,0,0,0,1),ft=(0,u.vt)();function ut(t,e,r,s,n,i,f){it[0]=t[0],it[1]=t[1],it[2]=t[2],it[3]=e[0],it[4]=e[1],it[5]=e[2],it[6]=r[0],it[7]=r[1],it[8]=r[2],f.quaternion=function(t,e){const r=e[0]+e[4]+e[8];if(r>0){let s=Math.sqrt(r+1);t[3]=.5*s,s=.5/s,t[0]=(e[5]-e[7])*s,t[1]=(e[6]-e[2])*s,t[2]=(e[1]-e[3])*s}else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[3*r+r]&&(r=2);const s=(r+1)%3,n=(r+2)%3;let i=Math.sqrt(e[3*r+r]-e[3*s+s]-e[3*n+n]+1);t[r]=.5*i,i=.5/i,t[3]=(e[3*s+n]-e[3*n+s])*i,t[s]=(e[3*s+r]+e[3*r+s])*i,t[n]=(e[3*n+r]+e[3*r+n])*i}return t}(ft,it),ct(rt,s,n),dt(rt,rt,.5),dt(st,t,rt[0]),dt(nt,e,rt[1]),ct(st,st,nt),dt(nt,r,rt[2]),f.center=(0,a.g)(st,st,nt),f.halfSize=(0,a.h)(rt,i,.5)}class at{constructor(t){this.minVert=new Array(7),this.maxVert=new Array(7),this.buffer=new ArrayBuffer(448);let e=0;this.minProj=new Float64Array(this.buffer,e,7),e+=56,this.maxProj=new Float64Array(this.buffer,e,7),e+=56;for(let t=0;t<7;++t)this.minVert[t]=new Float64Array(this.buffer,e,3),e+=24;for(let t=0;t<7;++t)this.maxVert[t]=new Float64Array(this.buffer,e,3),e+=24;for(let t=0;t<7;++t)this.minProj[t]=Number.POSITIVE_INFINITY,this.maxProj[t]=Number.NEGATIVE_INFINITY;const r=new Array(7),s=new Array(7),{data:n,size:i}=t;for(let t=0;t<n.length;t+=i){let e=n[t];e<this.minProj[0]&&(this.minProj[0]=e,r[0]=t),e>this.maxProj[0]&&(this.maxProj[0]=e,s[0]=t),e=n[t+1],e<this.minProj[1]&&(this.minProj[1]=e,r[1]=t),e>this.maxProj[1]&&(this.maxProj[1]=e,s[1]=t),e=n[t+2],e<this.minProj[2]&&(this.minProj[2]=e,r[2]=t),e>this.maxProj[2]&&(this.maxProj[2]=e,s[2]=t),e=n[t]+n[t+1]+n[t+2],e<this.minProj[3]&&(this.minProj[3]=e,r[3]=t),e>this.maxProj[3]&&(this.maxProj[3]=e,s[3]=t),e=n[t]+n[t+1]-n[t+2],e<this.minProj[4]&&(this.minProj[4]=e,r[4]=t),e>this.maxProj[4]&&(this.maxProj[4]=e,s[4]=t),e=n[t]-n[t+1]+n[t+2],e<this.minProj[5]&&(this.minProj[5]=e,r[5]=t),e>this.maxProj[5]&&(this.maxProj[5]=e,s[5]=t),e=n[t]-n[t+1]-n[t+2],e<this.minProj[6]&&(this.minProj[6]=e,r[6]=t),e>this.maxProj[6]&&(this.maxProj[6]=e,s[6]=t)}for(let t=0;t<7;++t){let e=r[t];lt(this.minVert[t],n,e),e=s[t],lt(this.maxVert[t],n,e)}}}class ot{constructor(){this.b0=(0,o.fA)(1,0,0),this.b1=(0,o.fA)(0,1,0),this.b2=(0,o.fA)(0,0,1),this.quality=0}}function ht(t){return t[0]*t[1]+t[0]*t[2]+t[1]*t[2]}function ct(t,e,r){t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2]}function yt(t,e,r){t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2]}function dt(t,e,r){t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r}function lt(t,e,r=0){t[0]=e[r],t[1]=e[r+1],t[2]=e[r+2]}function pt(t,e,r){const s=e[0],n=e[1],i=e[2],f=r[0],u=r[1],a=r[2];t[0]=n*a-i*u,t[1]=i*f-s*a,t[2]=s*u-n*f}function bt(t,e){const r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];if(r>0){const s=1/Math.sqrt(r);t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s}}function mt(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function Bt(t,e){const r=e[0]-t[0],s=e[1]-t[1],n=e[2]-t[2];return r*r+s*s+n*n}function Tt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}class gt{constructor(t=o.uY,e=Xt,r=u.zK){this._data=[t[0],t[1],t[2],e[0],e[1],e[2],r[0],r[1],r[2],r[3]]}clone(){const t=new gt;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const e=new gt;return e._data=t.slice(),e}static fromJSON(t){return new gt(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return(0,a.s)(T.rq.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,e,r){this._data[0]=t,this._data[1]=e,this._data[2]=r}get halfSize(){return(0,a.s)(T.rq.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return(0,f.hZ)(T.J8.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const e=Et,r=this._data;e[0]=r[6],e[1]=r[7],e[2]=r[8],e[3]=r[9];for(let s=0;s<8;++s){const n=t[s];n[0]=(1&s?-1:1)*r[3],n[1]=(2&s?-1:1)*r[4],n[2]=(4&s?-1:1)*r[5],(0,a.r)(n,n,e),n[0]+=r[0],n[1]+=r[1],n[2]+=r[2]}}isVisible(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],e=this._data[4],r=this._data[5];return Math.sqrt(t*t+e*e+r*r)}intersectSphere(t){St[0]=this._data[0]-t[0],St[1]=this._data[1]-t[1],St[2]=this._data[2]-t[2];const e=this.getQuaternion(_t);return(0,f.Xr)(Et,e),(0,a.r)(St,St,Et),(0,a.u)(St,St),Mt[0]=Math.min(St[0],this._data[3]),Mt[1]=Math.min(St[1],this._data[4]),Mt[2]=Math.min(St[2],this._data[5]),(0,a.v)(Mt,St)<t[3]*t[3]}intersectSphereWithMBS(t,e=this.radius){const r=this._data;St[0]=r[0]-t[0],St[1]=r[1]-t[1],St[2]=r[2]-t[2];const s=t[3],n=s+e;return!((0,a.w)(St)>n*n)&&(Et[0]=-r[6],Et[1]=-r[7],Et[2]=-r[8],Et[3]=r[9],(0,a.r)(St,St,Et),(0,a.u)(St,St),Mt[0]=Math.min(St[0],r[3]),Mt[1]=Math.min(St[1],r[4]),Mt[2]=Math.min(St[2],r[5]),(0,a.v)(Mt,St)<s*s)}intersectPlane(t){const e=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],r=this.projectedRadius((0,m.Qj)(t));return e>r?1:e<-r?-1:0}intersectRay(t,e,r=0){const s=this._data,n=Et;n[0]=-s[6],n[1]=-s[7],n[2]=-s[8],n[3]=s[9],St[0]=t[0]-s[0],St[1]=t[1]-s[1],St[2]=t[2]-s[2];const i=(0,a.r)(St,St,Et),f=(0,a.r)(Mt,e,Et);let u=-1/0,o=1/0;const h=this.getHalfSize(Rt);for(let t=0;t<3;t++){const e=i[t],s=f[t],n=h[t]+r;if(Math.abs(s)>1e-6){const t=(n-e)/s,r=(-n-e)/s;u=Math.max(u,Math.min(t,r)),o=Math.min(o,Math.max(t,r))}else if(e>n||e<-n)return!1}return u<=o}projectedArea(t,e,r,n){const i=this.getQuaternion(_t);(0,f.Xr)(Et,i),St[0]=t[0]-this._data[0],St[1]=t[1]-this._data[1],St[2]=t[2]-this._data[2],(0,a.r)(St,St,Et);const u=this.getHalfSize(Rt),o=St[0]<-u[0]?-1:St[0]>u[0]?1:0,c=St[1]<-u[1]?-1:St[1]>u[1]?1:0,y=St[2]<-u[2]?-1:St[2]>u[2]?1:0,d=Math.abs(o)+Math.abs(c)+Math.abs(y);if(0===d)return 1/0;const l=1===d?4:6,p=6*(o+3*c+9*y+13);(0,s.I0)(Yt,i),(0,s.hs)(Yt,Yt,u);const b=this.getCenter(It);for(let t=0;t<l;t++){const r=Pt[p+t];(0,a.s)(St,((1&r)<<1)-1,(2&r)-1,((4&r)>>1)-1),(0,a.t)(St,St,Yt),(0,a.g)(Ot,b,St),Ot[3]=1,(0,h.t)(Ot,Ot,e);const s=1/Math.max(1e-6,Ot[3]);wt[2*t]=Ot[0]*s,wt[2*t+1]=Ot[1]*s}const m=2*l-2;let B=wt[0]*(wt[3]-wt[m+1])+wt[m]*(wt[1]-wt[m-1]);for(let t=2;t<m;t+=2)B+=wt[t]*(wt[t+3]-wt[t-1]);return Math.abs(B)*r*n*.125}projectedRadius(t){const e=this.getQuaternion(_t);return(0,f.Xr)(Et,e),(0,a.r)(St,t,Et),Math.abs(St[0]*this._data[3])+Math.abs(St[1]*this._data[4])+Math.abs(St[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius((0,m.Qj)(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius((0,m.Qj)(t))}toAaBoundingBox(t){const e=this.getQuaternion(_t),r=(0,s.I0)(Yt,e),n=this._data[3]*Math.abs(r[0])+this._data[4]*Math.abs(r[3])+this._data[5]*Math.abs(r[6]),i=this._data[3]*Math.abs(r[1])+this._data[4]*Math.abs(r[4])+this._data[5]*Math.abs(r[7]),f=this._data[3]*Math.abs(r[2])+this._data[4]*Math.abs(r[5])+this._data[5]*Math.abs(r[8]);t[0]=this._data[0]-n,t[1]=this._data[1]-i,t[2]=this._data[2]-f,t[3]=this._data[0]+n,t[4]=this._data[1]+i,t[5]=this._data[2]+f}transform(t,e,r,s=0,n=(0,d.lO)(r),i=(0,d.lO)(e),u=(0,b.jd)(e,i)){if(r===n)e.isGeographic?function(t,e,r,s,n=(0,d.lO)(r)){const i=(0,y.tO)(r),u=1+Math.max(0,s)/(i.radius+t.centerZ);t.getCenter(qt),qt[2]+=s,(0,p.projectBuffer)(qt,r,0,qt,n,0,1),e.center=qt;const o=t.getQuaternion(_t);e.quaternion=o,(0,f.Xr)(Et,o),(0,a.s)(Ft,0,0,1),(0,a.r)(Ft,Ft,Et);const h=t.getHalfSize(Rt);(0,a.s)(Ft,h[0]*Math.abs(Ft[0]),h[1]*Math.abs(Ft[1]),h[2]*Math.abs(Ft[2])),(0,a.h)(Ft,Ft,i.inverseFlattening),(0,a.g)(Ft,h,Ft),e.halfSize=(0,a.h)(Ft,Ft,u)}(this,t,e,s,i):function(t,e,r,s,n=(0,d.lO)(r),i=(0,b.jd)(r,n)){t.getCorners(Vt),t.getCenter(qt),qt[2]+=s,(0,l.l)(r,qt,zt,n),e.setCenter(zt[12],zt[13],zt[14]);const u=2*Math.sqrt(1+zt[0]+zt[5]+zt[10]);Et[0]=(zt[6]-zt[9])/u,Et[1]=(zt[8]-zt[2])/u,Et[2]=(zt[1]-zt[4])/u,Et[3]=.25*u;const o=t.getQuaternion(_t);e.quaternion=(0,f.lw)(Et,Et,o),(0,f.Xr)(Et,Et),(0,a.s)(Ut,0,0,0);const h=e.getCenter(Nt);for(const t of Vt)t[2]+=s,i(t,0,t,0),(0,a.y)(Ft,t,h),(0,a.r)(Ft,Ft,Et),(0,a.u)(Ft,Ft),(0,a.B)(Ut,Ut,Ft);e.halfSize=Ut}(this,t,e,s,i,u);else if(e.isWGS84&&(r.isWebMercator||(0,B.r1)(r)))!function(t,e,r,s,n){e.getCenter(It),It[2]+=n;const i=(0,d.lO)(r);(0,p.projectBuffer)(It,t,0,It,i,0,1),Lt(i,e,It,r,s)}(e,this,r,t,s);else if(e.isWebMercator&&(0,B.r1)(r))!function(t,e,r,s,n){e.getCenter(It),It[2]+=n,Lt(t,e,It,r,s)}(e,this,r,t,s);else{const n=this.getCenter(It);n[2]+=s,(0,p.projectBuffer)(n,e,0,n,r,0,1),t.center=n,this!==t&&(t.quaternion=this.getQuaternion(_t),t.halfSize=this.getHalfSize(Rt))}}}const Et=(0,u.vt)(),_t=(0,u.vt)(),At=(0,u.vt)(),St=(0,o.vt)(),Mt=(0,o.vt)(),Ot=(0,c.vt)();function vt(t,e=new gt){return function(t,e){const{data:r,size:s}=t,n=r.length/s;if(n<=0)return;const i=new at(t);ct(S,i.minProj,i.maxProj),dt(S,S,.5),yt(M,i.maxProj,i.minProj);const f=ht(M),u=new ot;u.quality=f,n<14&&(t=new _.K(new Float64Array(i.buffer,112,42),3));const a=(0,o.vt)(),h=(0,o.vt)(),c=(0,o.vt)(),y=(0,o.vt)(),d=(0,o.vt)(),l=(0,o.vt)(),p=(0,o.vt)();switch(O(i,t,p,a,h,c,y,d,l,u)){case 1:return void k(S,M,e);case 2:return void tt(t,y,e)}I(t,p,a,h,c,y,d,l,u),et(t,u.b0,u.b1,u.b2,W,$);const b=(0,o.vt)();yt(b,$,W),u.quality=ht(b),u.quality<f?ut(u.b0,u.b1,u.b2,W,$,b,e):k(S,M,e)}(t,e),e}const wt=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Pt=(()=>{const t=new Int8Array(162);let e=0;const r=r=>{for(let s=0;s<r.length;s++)t[e+s]=r[s];e+=6};return r([6,2,3,1,5,4]),r([0,2,3,1,5,4]),r([0,2,3,7,5,4]),r([0,1,3,2,6,4]),r([0,1,3,2,0,0]),r([0,1,5,7,3,2]),r([0,1,3,7,6,4]),r([0,1,3,7,6,2]),r([0,1,5,7,6,2]),r([0,1,5,4,6,2]),r([0,1,5,4,0,0]),r([0,1,3,7,5,4]),r([0,2,6,4,0,0]),r([0,0,0,0,0,0]),r([1,3,7,5,0,0]),r([2,3,7,6,4,0]),r([2,3,7,6,0,0]),r([2,3,1,5,7,6]),r([0,1,5,7,6,2]),r([0,1,5,7,6,4]),r([0,1,3,7,6,4]),r([4,5,7,6,2,0]),r([4,5,7,6,0,0]),r([4,5,1,3,7,6]),r([0,2,3,7,5,4]),r([6,2,3,7,5,4]),r([6,2,3,1,5,4]),t})();function xt(t,e,r,s,n){const i=t.getQuaternion(_t);n.quaternion=i,(0,f.Xr)(Et,i);const u=t.getCenter(It),h=t.getHalfSize(Rt);if(s===g.RT.Global){(0,a.r)(Ft,u,Et),(0,a.u)(Ut,Ft),(0,a.x)(Qt,Ut,h),(0,a.y)(Qt,Ut,Qt);const s=(0,a.l)(Qt);(0,a.g)(Qt,Ut,h);const i=(0,a.l)(Qt);if(s<r)n.center=u,(0,a.s)(Ft,r,r,r),n.halfSize=(0,a.g)(Ft,h,Ft);else{const f=i>0?1+e/i:1,u=s>0?1+r/s:1,o=(u+f)/2,c=(u-f)/2;(0,a.h)(Qt,Ut,c),n.halfSize=(0,a.q)(Qt,Qt,h,o),(0,a.h)(Qt,Ut,o),(0,a.q)(Qt,Qt,h,c),(0,a.z)(Ft,Ft),(0,a.A)(Ft,Qt,Ft);const y=t.getQuaternion(At);n.center=(0,a.r)(Ft,Ft,y)}}else{n.center=(0,a.q)(Ft,u,o.Cb,(r+e)/2);const t=(0,a.r)(Ft,o.Cb,Et);(0,a.u)(t,t),n.halfSize=(0,a.q)(Ut,h,t,(r-e)/2)}return n}function Lt(t,e,r,n,i){const f=e.getQuaternion(_t),u=(0,s.I0)(Yt,f),a=e.getHalfSize(Rt);for(let t=0;t<8;++t){for(let e=0;e<3;++e)qt[e]=a[e]*(0!=(t&1<<e)?-1:1);for(let e=0;e<3;++e){let s=r[e];for(let t=0;t<3;++t)s+=qt[t]*u[3*t+e];jt[3*t+e]=s}}(0,p.projectBuffer)(jt,t,0,jt,n,0,8),vt(Ct,i)}const jt=new Array(24),Ct=new _.K(jt,3),qt=(0,o.vt)(),It=(0,o.vt)(),Nt=(0,o.vt)(),Rt=(0,o.vt)(),Yt=(0,n.vt)(),zt=(0,i.vt)(),Vt=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],Ft=(0,o.vt)(),Ut=(0,o.vt)(),Qt=(0,o.vt)(),Xt=(0,o.fA)(-1,-1,-1)}}]);