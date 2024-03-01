"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[6233],{77873:(e,t,r)=>{r.d(t,{A:()=>B});var n,s=r(82392),f=r(84977),i=r(81482),u=(r(6273),r(80861),r(67498),r(26325)),o=r(25336),y=r(26110),c=r(31753),l=r(19165),a=r(80347),p=r(19913),h=r(43785);let d=n=class extends f.oY{constructor(e){super(e),this.translation=(0,p.vt)(),this.rotationAxis=(0,p.ci)(h.up),this.rotationAngle=0,this.scale=(0,p.fA)(1,1,1)}get rotation(){return(0,h.i4)(this.rotationAxis,this.rotationAngle)}set rotation(e){this.rotationAxis=(0,p.o8)((0,h.yo)(e)),this.rotationAngle=(0,h.g7)(e)}get localMatrix(){const e=(0,y.vt)();return(0,c.x8)(b,(0,h.yo)(this.rotation),(0,h.$I)(this.rotation)),(0,o.o1)(e,b,this.translation,this.scale),e}get localMatrixInverse(){return(0,o.B8)((0,y.vt)(),this.localMatrix)}applyLocal(e,t){return(0,a.e)(t,e,this.localMatrix)}applyLocalInverse(e,t){return(0,a.e)(t,e,this.localMatrixInverse)}equals(e){return this===e||null!=e&&(0,o.t2)(this.localMatrix,e.localMatrix)}clone(){const e={translation:(0,p.o8)(this.translation),rotationAxis:(0,p.o8)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,p.o8)(this.scale)};return new n(e)}};(0,s._)([(0,i.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"translation",void 0),(0,s._)([(0,i.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAxis",void 0),(0,s._)([(0,i.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAngle",void 0),(0,s._)([(0,i.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"scale",void 0),(0,s._)([(0,i.MZ)()],d.prototype,"rotation",null),(0,s._)([(0,i.MZ)()],d.prototype,"localMatrix",null),(0,s._)([(0,i.MZ)()],d.prototype,"localMatrixInverse",null),d=n=(0,s._)([(0,u.$)("esri.geometry.support.MeshTransform")],d);const b=(0,l.vt)(),B=d},43785:(e,t,r)=>{r.d(t,{$I:()=>b,AU:()=>p,Cr:()=>l,Zz:()=>a,g7:()=>d,i4:()=>c,up:()=>B,vt:()=>y,yo:()=>h});var n=r(4506),s=r(31753),f=r(19165),i=r(80347),u=r(19913),o=r(76982);function y(e=B){return[e[0],e[1],e[2],e[3]]}function c(e,t,r=y()){return(0,i.c)(r,e),r[3]=t,r}function l(e,t,r=(0,o.vt)()){return(0,i.b)(r,e,t),(0,i.n)(r,r),r[3]=-(0,i.d)(e,t),r}function a(e,t,r=y()){return(0,s.x8)(T,e,b(e)),(0,s.x8)(m,t,b(t)),(0,s.lw)(T,m,T),function(e,t){return e[3]=t,e}(r,(0,n.KJ)((0,s.Xd)(r,T)))}function p(e,t,r,n=y()){return c(u.Cw,e,g),c(u.JP,t,E),c(u.Cb,r,A),a(g,E,g),a(g,A,n),n}function h(e){return e}function d(e){return e[3]}function b(e){return(0,n.kU)(e[3])}const B=[0,0,1,0],T=(0,f.vt)(),m=(0,f.vt)(),g=(y(),y()),E=y(),A=y()},40041:(e,t,r)=>{r.d(t,{Y$:()=>a,qB:()=>g,Qt:()=>z,My:()=>q,bf:()=>Y,jZ:()=>b,j0:()=>B,Sx:()=>T,E$:()=>m,h:()=>L,P:()=>C,SL:()=>x,gH:()=>p,si:()=>E,mJ:()=>V,UL:()=>G,D6:()=>I,Yi:()=>_,An:()=>F,LC:()=>O,xs:()=>h,Xm:()=>A,Vp:()=>W,zD:()=>Z,m8:()=>U,nS:()=>v,H$:()=>R,eI:()=>S,Eq:()=>d,Aj:()=>w,E7:()=>X,Y4:()=>$,TX:()=>j,Uz:()=>P,ml:()=>N,XP:()=>M});class n{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=9;const f=this.TypedArrayConstructor;void 0===n&&(n=9*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<9;++e)n[f++]=s[i++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=9;class s{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=16;const f=this.TypedArrayConstructor;void 0===n&&(n=16*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<16;++e)n[f++]=s[i++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=16;class f{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===n&&(n=f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.stride=n,this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=1;var i=r(53334);class u{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=2;const f=this.TypedArrayConstructor;void 0===n&&(n=2*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,i.hZ)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var o=r(80347);class y{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=3;const f=this.TypedArrayConstructor;void 0===n&&(n=3*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,o.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=n}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}y.ElementCount=3;var c=r(74772);class l{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.start=r,this.elementCount=4;const f=this.TypedArrayConstructor;void 0===n&&(n=4*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,c.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=n,this.typedBuffer[e]=s}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f++]=s[i++],n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}l.ElementCount=4;class a extends f{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class p extends u{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class h extends y{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class d extends l{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f32";class b extends n{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f32";class B extends n{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f64";class T extends s{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f32";class m extends s{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class g extends f{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class E extends u{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class A extends y{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class w extends l{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="f64";class x extends f{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u8";class O extends u{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class S extends y{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class M extends l{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u8";class L extends f{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u16";class _ extends u{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u16";class v extends y{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u16";class P extends l{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u16";class C extends f{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u32";class F extends u{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class R extends y{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class N extends l{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class Y extends f{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i8";class I extends u{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class U extends y{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class j extends l{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i8";class z extends f{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class V extends u{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i16";class W extends y{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i16";class X extends l{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(X,e,t)}static fromTypedArray(e,t){return new X(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}X.ElementType="i16";class q extends f{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i32";class G extends u{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class Z extends y{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(Z,e,t)}static fromTypedArray(e,t){return new Z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Z.ElementType="i32";class $ extends l{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer($,e,t)}static fromTypedArray(e,t){return new $(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}$.ElementType="i32"},40455:(e,t,r)=>{r.d(t,{Hm:()=>u,QD:()=>o,WN:()=>i});var n=r(61090),s=r(80861),f=r(28364);function i(e,t){return e.isGeographic||e.isWebMercator&&(t??!0)}function u(e,t){switch(e.type){case"georeferenced":return t.isGeographic;case"local":return t.isGeographic||t.isWebMercator}}function o(e,t,r,i){if(void 0!==i){(0,n.io)(s.A.getLogger(e),"option: geographic",{replacement:"use mesh vertexSpace and spatial reference to control how operations are performed",version:"4.29",warnOnce:!0});const u="local"===t.type;if(!(0,f.Hq)(t)||i===u)return r.isGeographic||r.isWebMercator&&i;s.A.getLogger(e).warnOnce(`Specifying the 'geographic' parameter (${i}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}return u(t,r)}},56233:(e,t,r)=>{r.d(t,{NW:()=>E,RN:()=>_,bA:()=>A,h7:()=>O,nX:()=>F,project:()=>S,qD:()=>w,wD:()=>M});var n=r(5262),s=r(79441),f=r(25336),i=r(26110),u=r(80347),o=r(19913),y=r(82541),c=r(34561),l=r(32159),a=r(80788),p=r(88133),h=r(75644),d=r(77873),b=r(28364),B=r(72449),T=r(40455),m=r(90514);function g(e,t,r){return(0,T.WN)(t.spatialReference,r?.geographic)?M(e,t,!1,r):function(e,t,r){const n=new Float64Array(e.position.length),s=e.position,f=t.x,i=t.y,u=t.z??0,o=F(r?r.unit:null,t.spatialReference);for(let e=0;e<s.length;e+=3)n[e]=s[e]*o+f,n[e+1]=s[e+1]*o+i,n[e+2]=s[e+2]*o+u;return{position:n,normal:e.normal,tangent:e.tangent}}(e,t,r)}function E(e,t=i.zK){const{position:r,normal:n,tangent:s}=e;return{position:(0,B.a)(new Float64Array(r.length),r,t),normal:null!=n?(0,m.qs)(n,new Float32Array(n.length),t):null,tangent:null!=s?(0,m.KM)(s,new Float32Array(s.length),t):null}}function A(e,t,r,n){const{position:s,normal:f,tangent:i}=e;if(!(0,b.Hq)(t))return{position:s,normal:f,tangent:i};const u=(0,b.MW)(t,n);return g(E(e,r?.localMatrix),u,{geographic:"local"===t.type})}function w(e,t,r){const n=(0,b.TE)(t,r),s=t.spatialReference,f=(0,b.Hq)(n);if(!f)return{vertexAttributes:g(e,t,r),vertexSpace:n,transform:null};const{position:i,normal:u,tangent:o}=e,y=(0,T.Hm)(n,s);switch(n.type){case"georeferenced":return y?{vertexAttributes:M(e,t,f,r),vertexSpace:n,transform:null}:{vertexAttributes:{position:i,normal:u,tangent:o},vertexSpace:n,transform:new d.A};case"local":return{vertexAttributes:{position:i,normal:u,tangent:o},vertexSpace:n,transform:new d.A}}}function x(e,t,r){return(0,T.WN)(t.spatialReference,r?.geographic)?_(e,t,r):L(e,t,r)}function O(e,t,r,n,s){if(!(0,b.Hq)(t))return x(e,n,s);const{spatialReference:f}=n,i=A(e,t,r,f);return n.equals((0,b.MW)(t,f))?L(i,n,s):x(i,n,s)}function S({positions:e,transform:t,vertexSpace:r,inSpatialReference:n,outSpatialReference:s,outPositions:y,localMode:d}){const b=r.origin??o.uY,T=null!=r.origin?t?.localMatrix??i.zK:i.zK;if("georeferenced"===r.type){const t=y??(0,h.jh)(e.length);if((0,f.aI)(T,i.zK)?(0,h.s)(t,e):(0,B.a)(t,e,T),!(0,u.i)(b,o.uY)){const[e,r,n]=b;for(let s=0;s<t.length;s+=3)t[s]+=e,t[s+1]+=r,t[s+2]+=n}return(0,p.projectBuffer)(t,n,0,t,s,0,t.length/3),t}let m=n;const g=(0,l.lO)(n);m=s.isWebMercator&&d||!(0,c.canProjectWithoutEngine)(n,g)?m:g,(0,a.l)(n,b,R,m),(0,f.lw)(R,R,T);const E=y??(0,h.jh)(e.length);return(0,B.a)(E,e,R),(0,p.projectBuffer)(E,m,0,E,s,0,E.length/3),E}function M(e,t,r,n){const s=t.spatialReference,f=v(t,n,R),i=new Float64Array(e.position.length),u=function(e,t,r,n){(0,B.a)(n,e,t);const s=new Float64Array(e.length);return(0,m.$5)(n,s,r)}(e.position,f,s,i),o=(0,y.Ge)(Y,f),c=function(e,t,r,n,s){if(null==r)return null;const f=new Float32Array(r.length);return(0,B.b)(f,r,n),(0,m.si)(f,e,t,s,f),f}(u,i,e.normal,o,s),l=function(e,t,r,n,s){if(null==r)return null;const f=new Float32Array(r.length);(0,B.b)(f,r,n,4);for(let e=3;e<f.length;e+=4)f[e]=r[e];return(0,m.Mv)(f,e,t,s,f),f}(u,i,e.tangent,o,s);if(r){const{x:e,y:r,z:n}=t;(0,B.t)(u,u,[-e,-r,-(n??0)])}return{position:u,normal:c,tangent:l}}function L(e,t,r){const n=new Float64Array(e.position.length),s=e.position,f=t.x,i=t.y,u=t.z??0,o=F(r?r.unit:null,t.spatialReference);for(let e=0;e<s.length;e+=3)n[e]=(s[e]-f)/o,n[e+1]=(s[e+1]-i)/o,n[e+2]=(s[e+2]-u)/o;return{position:n,normal:e.normal,tangent:e.tangent}}function _(e,t,r){const n=t.spatialReference;v(t,r,R);const s=(0,f.B8)(N,R),i=new Float64Array(e.position.length),u=function(e,t,r,n){const s=(0,m.gr)(e,t,n),f=new Float64Array(s.length);return(0,B.a)(f,s,r),f}(e.position,n,s,i),o=(0,y.Ge)(Y,s);return{position:u,normal:P(e.normal,e.position,i,n,o),tangent:C(e.tangent,e.position,i,n,o)}}function v(e,t,r){(0,a.l)(e.spatialReference,[e.x,e.y,e.z??0],r,(0,l.lO)(e.spatialReference));const n=F(t?t.unit:null,e.spatialReference);return(0,f.hs)(r,r,[n,n,n]),r}function P(e,t,r,n,s){if(null==e)return null;const f=(0,m.X4)(e,t,r,n,new Float32Array(e.length));return(0,B.b)(f,f,s),f}function C(e,t,r,n,s){if(null==e)return null;const f=(0,m.xA)(e,t,r,n,new Float32Array(e.length));return(0,B.b)(f,f,s,4),f}function F(e,t){if(null==e)return 1;const r=(0,n.KX)(t);return 1/(0,n.oU)(r,"meters",e)}const R=(0,i.vt)(),N=(0,i.vt)(),Y=(0,s.vt)()},90514:(e,t,r)=>{r.d(t,{$5:()=>g,KM:()=>A,Mv:()=>x,X4:()=>B,gr:()=>m,qs:()=>E,si:()=>T,xA:()=>w});var n=r(80861),s=r(82541),f=r(79441),i=r(26110),u=r(80347),o=r(19913),y=r(32159),c=r(80788),l=r(88133),a=r(67488),p=r(64672),h=r(40041),d=r(72449);const b=()=>n.A.getLogger("esri.geometry.support.meshUtils.normalProjection");function B(e,t,r,n,s){return S(n)?(O(L.TO_PCPF,h.xs.fromTypedArray(e),h.Xm.fromTypedArray(t),h.Xm.fromTypedArray(r),n,h.xs.fromTypedArray(s)),s):(b().error("Cannot convert spatial reference to PCPF"),s)}function T(e,t,r,n,s){return S(n)?(O(L.FROM_PCPF,h.xs.fromTypedArray(e),h.Xm.fromTypedArray(t),h.Xm.fromTypedArray(r),n,h.xs.fromTypedArray(s)),s):(b().error("Cannot convert to spatial reference from PCPF"),s)}function m(e,t,r){return(0,l.projectBuffer)(e,t,0,r,(0,y.lO)(t),0,e.length/3),r}function g(e,t,r){return(0,l.projectBuffer)(e,(0,y.lO)(r),0,t,r,0,e.length/3),t}function E(e,t,r){return(0,s.Ge)(F,r),(0,d.b)(t,e,F),(0,s.ut)(F)||(0,d.n)(t,t),t}function A(e,t,r){if((0,s.Ge)(F,r),(0,d.b)(t,e,F,4),(0,s.ut)(F)||(0,d.n)(t,t,4),e!==t)for(let r=3;r<e.length;r+=4)t[r]=e[r];return t}function w(e,t,r,n,s){if(!S(n))return b().error("Cannot convert spatial reference to PCPF"),s;O(L.TO_PCPF,h.xs.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),h.Xm.fromTypedArray(t),h.Xm.fromTypedArray(r),n,h.xs.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT));for(let t=3;t<e.length;t+=4)s[t]=e[t];return s}function x(e,t,r,n,s){if(!S(n))return b().error("Cannot convert to spatial reference from PCPF"),s;O(L.FROM_PCPF,h.xs.fromTypedArray(e,16),h.Xm.fromTypedArray(t),h.Xm.fromTypedArray(r),n,h.xs.fromTypedArray(s,16));for(let t=3;t<e.length;t+=4)s[t]=e[t];return s}function O(e,t,r,n,f,i){if(!t)return;const o=r.count,l=(0,y.lO)(f);if(M(f))for(let r=0;r<o;r++)n.getVec(r,v),t.getVec(r,P),(0,c.l)(l,v,C,l),(0,s.z0)(F,C),e===L.FROM_PCPF&&(0,s.mg)(F,F),(0,u.t)(P,P,F),i.setVec(r,P);else for(let f=0;f<o;f++){n.getVec(f,v),t.getVec(f,P),(0,c.l)(l,v,C,l),(0,s.z0)(F,C);const o=(0,p.jg)(r.get(f,1));let y=Math.cos(o);e===L.TO_PCPF&&(y=1/y),F[0]*=y,F[1]*=y,F[2]*=y,F[3]*=y,F[4]*=y,F[5]*=y,e===L.FROM_PCPF&&(0,s.mg)(F,F),(0,u.t)(P,P,F),(0,u.n)(P,P),i.setVec(f,P)}return i}function S(e){return M(e)||function(e){return e.isWebMercator}(e)}function M(e){return e.isWGS84||(0,a.x1)(e)||(0,a.q8)(e)||(0,a.KQ)(e)}var L,_;(_=L||(L={}))[_.TO_PCPF=0]="TO_PCPF",_[_.FROM_PCPF=1]="FROM_PCPF";const v=(0,o.vt)(),P=(0,o.vt)(),C=(0,i.vt)(),F=(0,f.vt)()},28364:(e,t,r)=>{r.d(t,{Hq:()=>l,MW:()=>a,TE:()=>p,Uj:()=>h,by:()=>d,kp:()=>c});var n=r(61090),s=r(80861),f=r(8977),i=r(58823),u=r(93320),o=r(72449);function y(){return s.A.getLogger("esri.geometry.Mesh")}function c(e){const{vertexSpace:t}=e;if(null!=t.origin)return e.clone();const{anchor:r}=e,n=r.clone(),s=new i.A({origin:[n.x,n.y,n.z]}),f=e.cloneWithVertexSpace(s),{position:u}=f.vertexAttributes;return f.vertexAttributes.position=(0,o.t)(new Float64Array(u.length),u,[-n.x,-n.y,-(n.z??0)]),f.vertexAttributesChanged(),f}function l(e){return null!=e.origin}function a(e,t){if(!l(e))return null;const[r,n,s]=e.origin;return new f.A({x:r,y:n,z:s,spatialReference:t})}function p(e,t){const{x:r,y:s,z:f,spatialReference:o}=e,c=[r,s,f??0];if(void 0!==t?.geographic){if((0,n.io)(y(),"option: geographic",{replacement:"use vertexSpace option instead",version:"4.29",warnOnce:!0}),!t?.vertexSpace)return t?.geographic?new u.A({origin:c}):new i.A({origin:c});y().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")}if(!t?.vertexSpace)return o.isGeographic||o.isWebMercator?new u.A({origin:c}):new i.A({origin:c});switch(t.vertexSpace){case"local":return new u.A({origin:c});case"georeferenced":return new i.A({origin:c});case"georeferenced-absolute":return new i.A}}function h(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function d(e,t){return"local"===e?new u.A({origin:t}):new i.A({origin:t})}}}]);