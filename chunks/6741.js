"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[6741],{12668:(e,t,r)=>{r.d(t,{D:()=>G,b:()=>V});var i=r(47635),o=r(29785),n=r(77788),a=r(29592),s=r(31790),l=r(32728),c=r(3525),d=r(18185),u=r(26756),h=r(51229),m=r(73713),f=r(83143),p=r(11255),v=r(36261),g=r(50710),_=r(23883),x=r(31434),T=r(40574),b=r(65630),y=r(23605),S=r(75762),A=r(35212),E=r(88251),w=r(69563),C=r(24578),M=r(78546),O=r(738),R=r(79377),I=r(69952),H=r(64802),N=r(92121),L=r(19635),P=r(41014),F=r(92624),D=r(19778),z=r(7782),B=r(33763);function V(e){const t=new F.N5,{vertex:r,fragment:V,varyings:G}=t;if((0,I.NB)(r,e),t.include(d.I),G.add("vpos","vec3"),t.include(C.A,e),t.include(l.BK,e),t.include(p.G,e),t.include(w.q2,e),e.output===n.V.Color||e.output===n.V.Alpha){t.include(w.Sx,e),t.include(w.MU,e),t.include(w.O1,e),t.include(w.QM,e),(0,I.yu)(r,e),t.include(c.Y,e),t.include(s.d,e);const n=e.normalType===c.W.Attribute||e.normalType===c.W.Compressed;n&&e.offsetBackfaces&&t.include(o.M),t.include(g.W,e),t.include(f.Mh,e),e.instancedColor&&t.attributes.add(B.r.INSTANCECOLOR,"vec4"),G.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new N.E("externalColor",(e=>e.externalColor))),G.add("vcolorExt","vec4"),e.multipassEnabled&&G.add("depth","float"),r.code.add(P.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${P.H.float(M.y)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${n?P.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${n&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(e.output){case n.V.Alpha:t.include(a.HQ,e),t.include(O.S,e),t.include(b.Q,e),V.uniforms.add(new L.m("opacity",(e=>e.opacity)),new L.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&V.uniforms.add(new D.N("tex",(e=>e.texture))),V.include(R.N),V.code.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?P.H`colorUV`:P.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?P.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case n.V.Color:t.include(a.HQ,e),t.include(x.kA,e),t.include(_.n,e),t.include(O.S,e),t.include(e.instancedDoublePrecision?E.G:E.Bz,e),t.include(b.Q,e),(0,I.yu)(V,e),V.uniforms.add(r.uniforms.get("localOrigin"),new H.t("ambient",(e=>e.ambient)),new H.t("diffuse",(e=>e.diffuse)),new L.m("opacity",(e=>e.opacity)),new L.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&V.uniforms.add(new D.N("tex",(e=>e.texture))),t.include(A._Z,e),t.include(S.c,e),V.include(R.N),t.include(y.r,e),(0,x.a8)(V),(0,x.eU)(V),(0,T.O4)(V),V.code.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?P.H`colorUV`:P.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.W.ScreenDerivative?P.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:P.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===A.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?P.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?P.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?P.H`normalUV`:"vuv0"});`:P.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?P.H`normalize(posWorld);`:P.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?P.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===A.A9.Normal||e.pbrMode===A.A9.Schematic?P.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?P.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:P.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===z.y.Color?P.H`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(v.E,e),t}const G=Object.freeze(Object.defineProperty({__proto__:null,build:V},Symbol.toStringTag,{value:"Module"}))},38716:(e,t,r)=>{r.d(t,{R:()=>D,b:()=>F});var i=r(47635),o=r(29785),n=r(77788),a=r(29592),s=r(31790),l=r(32728),c=r(3525),d=r(18185),u=r(26756),h=r(51229),m=r(73713),f=r(11255),p=r(36261),v=r(23883),g=r(31434),_=r(40574),x=r(65630),T=r(75762),b=r(35212),y=r(88251),S=r(24578),A=r(78546),E=r(738),w=r(79377),C=r(69952),M=r(64802),O=r(92121),R=r(19635),I=r(41014),H=r(92624),N=r(19778),L=r(7782),P=r(33763);function F(e){const t=new H.N5,{vertex:r,fragment:F,varyings:D}=t;return(0,C.NB)(r,e),t.include(d.I),D.add("vpos","vec3"),t.include(S.A,e),t.include(l.BK,e),t.include(f.G,e),e.output!==n.V.Color&&e.output!==n.V.Alpha||((0,C.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),e.offsetBackfaces&&t.include(o.M),e.instancedColor&&t.attributes.add(P.r.INSTANCECOLOR,"vec4"),D.add("vNormalWorld","vec3"),D.add("localvpos","vec3"),e.multipassEnabled&&D.add("depth","float"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new O.E("externalColor",(e=>e.externalColor))),D.add("vcolorExt","vec4"),r.code.add(I.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${I.H.float(A.y)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?I.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===n.V.Alpha&&(t.include(a.HQ,e),t.include(E.S,e),t.include(x.Q,e),F.uniforms.add(new R.m("opacity",(e=>e.opacity)),new R.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&F.uniforms.add(new N.N("tex",(e=>e.texture))),F.include(w.N),F.code.add(I.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?I.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?I.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?I.H`colorUV`:I.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:I.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?I.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:I.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===n.V.Color&&(t.include(a.HQ,e),t.include(g.kA,e),t.include(v.n,e),t.include(E.S,e),t.include(e.instancedDoublePrecision?y.G:y.Bz,e),t.include(x.Q,e),(0,C.yu)(t.fragment,e),(0,_.Gc)(F),(0,g.a8)(F),(0,g.eU)(F),F.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new M.t("ambient",(e=>e.ambient)),new M.t("diffuse",(e=>e.diffuse)),new R.m("opacity",(e=>e.opacity)),new R.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&F.uniforms.add(new N.N("tex",(e=>e.texture))),t.include(b._Z,e),t.include(T.c,e),F.include(w.N),(0,_.O4)(F),F.code.add(I.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?I.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?I.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?I.H`colorUV`:I.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:I.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?I.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:I.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?I.H`albedo = mix(albedo, vec3(1), 0.9);`:I.H``}
        ${I.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.A9.Normal||e.pbrMode===b.A9.Schematic?e.spherical?I.H`vec3 normalGround = normalize(vpos + localOrigin);`:I.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:I.H``}
        ${e.pbrMode===b.A9.Normal||e.pbrMode===b.A9.Schematic?I.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?I.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:I.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===L.y.Color?I.H`fragColor = premultiplyAlpha(fragColor);`:I.H``}
      }
    `)),t.include(p.E,e),t}const D=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:"Module"}))},43300:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>f,g:()=>p});var i=r(53334),o=r(56560),n=r(28019),a=r(16937),s=r(36288),l=r(66579),c=r(19635),d=r(41014),u=r(92624),h=r(19778);const m=16;function f(){const e=new u.N5,t=e.fragment;return e.include(n.c),e.include(s.Ir),t.include(a.E),t.uniforms.add(new c.m("radius",((e,t)=>p(t.camera)))),t.code.add(d.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(d.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new l.G("nearFar",((e,t)=>t.camera.nearFar)),new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new c.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new l.G("rnmScale",((e,t)=>(0,i.hZ)(v,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.m("intensity",(e=>e.intensity)),new l.G("screenSize",((e,t)=>(0,i.hZ)(v,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(d.H`
    void main(void) {
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.H.int(m)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.H.int(m)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,o.vt)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:p},Symbol.toStringTag,{value:"Module"}))},26599:(e,t,r)=>{r.d(t,{S:()=>p,b:()=>f});var i=r(80347),o=r(28019),n=r(16937),a=r(37138),s=r(66579),l=r(19635),c=r(41014),d=r(92624),u=r(29247),h=r(19778);const m=4;function f(){const e=new d.N5,t=e.fragment;e.include(o.c);const r=(m+1)/2,f=1/(2*r*r);return t.include(n.E),t.uniforms.add(new h.N("depthMap",(e=>e.depthTexture)),new u.o("tex",(e=>e.colorTexture)),new a.t("blurSize",(e=>e.blurSize)),new l.m("projScale",((e,t)=>{const r=(0,i.p)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.G("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(c.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${c.H.float(f)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(c.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${c.H.int(m)}; r <= ${c.H.int(m)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const p=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},13926:(e,t,r)=>{r.d(t,{O:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},68435:(e,t,r)=>{r.d(t,{AK:()=>a,Wz:()=>n,oe:()=>o});var i=r(62088);function o(e,t=!1){return e<=i.y9?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function n(e){return((0,i.cy)(e)?e.length:e.byteLength/8)<=i.y9?Array.from(e):new Float32Array(e)}function a(e,t,r){return Array.isArray(e)?e.slice(t,t+r):e.subarray(t,t+r)}},60938:(e,t,r)=>{r.d(t,{D:()=>o});var i=r(38116);async function o(e,t){const{data:r}=await(0,i.A)(e,{responseType:"image",...t});return r}},61764:(e,t,r)=>{r.d(t,{G:()=>a});var i=r(79441),o=r(14571),n=r(82541);function a(e){if(null==e)return null;const t=null!=e.offset?e.offset:o.uY,r=null!=e.rotation?e.rotation:0,a=null!=e.scale?e.scale:o.Un,s=(0,i.fA)(1,0,0,0,1,0,t[0],t[1],1),l=(0,i.fA)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),c=(0,i.fA)(a[0],0,0,0,a[1],0,0,0,1),d=(0,i.vt)();return(0,n.lw)(d,l,c),(0,n.lw)(d,s,d),d}},6741:(e,t,r)=>{r.d(t,{fetch:()=>Q});var i=r(85012),o=r(82541),n=r(79441),a=r(25336),s=r(26110),l=r(56560),c=r(80347),d=r(19913),u=r(46373),h=r(68435),m=r(40041),f=r(72449),p=r(17460),v=r(18546),g=r(80820),_=r(22715),x=r(22380),T=r(66400),b=r(82021),y=r(17079),S=r(61764);class A{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class E{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new A,this.numberOfVertices=0}}var w=r(38116),C=r(3132),M=r(88188),O=r(62991),R=r(80861),I=r(13926),H=r(37623),N=r(27805),L=r(51831),P=r(60938),F=r(10941),D=r(10875),z=r(24960),B=r(32573),V=r(33763),G=r(14103),W=r(68716);const U=()=>R.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function j(e){throw new O.A("",`Request for object resource failed: ${e}`)}function k(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(U().warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(U().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(U().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(U().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else U().warn("Indexed geometries must specify faces"),i=!1;break}default:U().warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(U().warn("Geometry requires material"),i=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(U().warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function q(e){const t=(0,u.Ie)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,u.iT)(t,r.bbMin),(0,u.iT)(t,r.bbMax))})),t}function $(e){switch(e){case"mask":return D.sf.Mask;case"maskAndTransparency":return D.sf.MaskBlend;case"none":return D.sf.Opaque;default:return D.sf.Blend}}function Y(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const X=new N.R(1,2,"wosr");var Z=r(3525),J=r(33550),K=r(40327);async function Q(e,t){const r=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,i.EM)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):async function(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,C.Ke)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,H.QP)(i.error),j(i.error.details.url)}(e,r,t);const i=await(0,C.Ke)((0,w.A)(e,t));if(!0===i.ok)return i.value.data;(0,H.QP)(i.error),j(i.error)}(e,t),i=await async function(e,t){const r=new Array;for(const i in e){const o=e[i],n=o.images[0].data;if(!n){U().warn("Externally referenced texture data is not yet supported");continue}const a=o.encoding+";base64,"+n,s="/textureDefinitions/"+i,l="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:W.pF.REPEAT,t:W.pF.REPEAT},preMultiplyAlpha:$(l)!==D.sf.Opaque},d=null!=t&&t.disableTextures?Promise.resolve(null):(0,P.D)(a,t);r.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),o={};for(const e of i)o[e.refId]=e;return o}(r.textureDefinitions??{},t);let o=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];o+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:o+(0,M.iL)(r)}}(r.url,t)),{engineResources:i,referenceBoundingBox:o}=function(e,t){const r=new Array,i=new Array,o=new Array,n=new I.O,a=e.resource,s=N.R.parse(a.version||"1.0","wosr");X.validate(s);const l=a.model.name,c=a.model.geometries,u=a.materialDefinitions??{},h=e.textures;let m=0;const f=new Map;for(let e=0;e<c.length;e++){const a=c[e];if(!k(a))continue;const s=Y(a),l=a.params.vertexAttributes,p=[],v=e=>{if("PerAttributeArray"===a.params.topology)return null;const t=a.params.faces;for(const r in t)if(r===e)return t[r].values;return null},g=l[V.r.POSITION],_=g.values.length/g.valuesPerElement;for(const e in l){const t=l[e],r=t.values,i=v(e)??(0,L.tM)(_);p.push([e,new F.n(r,i,t.valuesPerElement,!0)])}const x=s.texture,T=h&&h[x];if(T&&!f.has(x)){const{image:e,parameters:t}=T,r=new B.g(e,t);i.push(r),f.set(x,r)}const b=f.get(x),y=b?b.id:void 0,S=s.material;let A=n.get(S,x);if(null==A){const e=u[S.substring(S.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=T&&T.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=T?$(T.alphaChannelUsage):void 0,a={ambient:(0,d.ci)(e.diffuse),diffuse:(0,d.ci)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:y,initTextureTransparent:!0,doubleSided:!0,cullFace:D.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:T?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),A=new G.$U(a),n.set(S,x,A)}o.push(A);const E=new z.V(A,p);m+=p.find((e=>e[0]===V.r.POSITION))?.[1]?.indices.length??0,r.push(E)}return{engineResources:[{name:l,stageResources:{textures:i,materials:o,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:q(r)}}(e,t);return{lods:i,referenceBoundingBox:o,isEsriSymbolResource:!1,isWosr:!0}}const n=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,T.y)(new x.R(t.streamDataRequester),r.url,t,t.usePBR)),A=n.model.meta?.ESRI_proxyEllipsoid,O=n.meta.isEsriSymbolResource&&null!=A&&"EsriRealisticTreesStyle"===n.meta.ESRI_webstyle;O&&!n.customMeta.esriTreeRendering&&(n.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const o of i.parts){const i=o.attributes.normal;if(null==i)return;const n=o.attributes.position,l=n.count,u=(0,d.vt)(),h=(0,d.vt)(),f=(0,d.vt)(),p=new Uint8Array(4*l),v=new Float64Array(3*l),g=(0,a.B8)((0,s.vt)(),o.transform);let _=0,x=0;for(let a=0;a<l;a++){n.getVec(a,h),i.getVec(a,u),(0,c.e)(h,h,o.transform),(0,c.f)(f,h,t.center),(0,c.G)(f,f,t.radius);const s=f[2],l=(0,c.l)(f),d=Math.min(.45+.55*l*l,1);(0,c.G)(f,f,t.radius),null!==g&&(0,c.e)(f,f,g),(0,c.n)(f,f),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.k)(f,f,u,s>-1?.2:Math.min(-4*s-3.8,1)),v[_]=f[0],v[_+1]=f[1],v[_+2]=f[2],_+=3,p[x]=255*d,p[x+1]=255*d,p[x+2]=255*d,p[x+3]=255,x+=4}o.attributes.normal=new m.xs(v),o.attributes.color=new m.XP(p)}}}(n,A));const R=!!t.usePBR,Q=n.meta.isEsriSymbolResource?{usePBR:R,isSchematic:!1,treeRendering:O,mrrFactors:[...K.d_]}:{usePBR:R,isSchematic:!1,treeRendering:!1,mrrFactors:[...K.Rk]},te={...t.materialParameters,treeRendering:O},{engineResources:re,referenceBoundingBox:ie}=function(e,t,r,i){const n=e.model,a=new Array,s=new Map,c=new Map,d=n.lods.length,x=(0,u.Ie)();return n.lods.forEach(((e,T)=>{const A=!0===i.skipHighLods&&(d>1&&0===T||d>3&&1===T)||!1===i.skipHighLods&&null!=i.singleLodIndex&&T!==i.singleLodIndex;if(A&&0!==T)return;const w=new E(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=A?new G.$U({}):function(e,t,r,i,o,n,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),c=e.materials.get(t.material),d=null!=t.attributes.texCoord0,u=null!=t.attributes.normal;if(null==c)return null;const h=function(e){switch(e){case"BLEND":return D.sf.Blend;case"MASK":return D.sf.Mask;case"OPAQUE":case null:case void 0:return D.sf.Opaque}}(c.alphaMode);if(!n.has(s)){if(d){const t=(t,r=!1)=>{if(null!=t&&!a.has(t)){const i=e.textures.get(t);if(null!=i){const e=i.data;a.set(t,new B.g((0,y.x3)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,y.x3)(e)&&r,encoding:(0,y.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(c.textureColor,h!==D.sf.Opaque),t(c.textureNormal),t(c.textureOcclusion),t(c.textureEmissive),t(c.textureMetallicRoughness)}const r=c.color[0]**(1/J.T),m=c.color[1]**(1/J.T),f=c.color[2]**(1/J.T),p=c.emissiveFactor[0]**(1/J.T),v=c.emissiveFactor[1]**(1/J.T),g=c.emissiveFactor[2]**(1/J.T),_=null!=c.textureColor&&d?a.get(c.textureColor):null,x=(0,K.Jr)({normalTexture:c.textureNormal,metallicRoughnessTexture:c.textureMetallicRoughness,metallicFactor:c.metallicFactor,roughnessFactor:c.roughnessFactor,emissiveTexture:c.textureEmissive,emissiveFactor:c.emissiveFactor,occlusionTexture:c.textureOcclusion}),T=null!=c.normalTextureTransform?.scale?c.normalTextureTransform?.scale:l.Un;n.set(s,new G.$U({...i,transparent:h===D.sf.Blend,customDepthTest:D.it.Lequal,textureAlphaMode:h,textureAlphaCutoff:c.alphaCutoff,diffuse:[r,m,f],ambient:[r,m,f],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?D.s2.None:D.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:u?Z.W.Attribute:Z.W.ScreenDerivative,castShadows:!0,receiveShadows:c.receiveShadows,receiveAmbientOcclusion:c.receiveAmbientOcclustion,textureId:null!=_?_.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:null!=c.textureNormal&&d?a.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:null!=_&&!!_.parameters.preMultiplyAlpha,occlusionTextureId:null!=c.textureOcclusion&&d?a.get(c.textureOcclusion).id:void 0,emissiveTextureId:null!=c.textureEmissive&&d?a.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=c.textureMetallicRoughness&&d?a.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[p,v,g],mrrFactors:x?[...K.mX]:[c.metallicFactor,c.roughnessFactor,i.mrrFactors[2]],isSchematic:x,colorTextureTransformMatrix:(0,S.G)(c.colorTextureTransform),normalTextureTransformMatrix:(0,S.G)(c.normalTextureTransform),scale:[T[0],T[1]],occlusionTextureTransformMatrix:(0,S.G)(c.occlusionTextureTransform),emissiveTextureTransformMatrix:(0,S.G)(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:(0,S.G)(c.metallicRoughnessTextureTransform),...o}))}const m=n.get(s);if(r.stageResources.materials.push(m),d){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(c.textureColor),e(c.textureNormal),e(c.textureOcclusion),e(c.textureEmissive),e(c.textureMetallicRoughness)}return m}(n,e,w,t,r,s,c),{geometry:a,vertexCount:d}=function(e,t){const r=e.attributes.position.count,i=(0,b.x)(e.indices||r,e.primitiveType),n=(0,h.oe)(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.position;(0,f.a)(n,a,e.transform,3,s);const l=[[V.r.POSITION,new F.n(n,i,3,!0)]];if(null!=e.attributes.normal){const t=(0,h.oe)(3*r),{typedBuffer:n,typedBufferStride:a}=e.attributes.normal;(0,o.Ge)(ee,e.transform),(0,f.b)(t,n,ee,3,a),l.push([V.r.NORMAL,new F.n(t,i,3,!0)])}if(null!=e.attributes.tangent){const t=(0,h.oe)(4*r),{typedBuffer:n,typedBufferStride:a}=e.attributes.tangent;(0,o.Ge)(ee,e.transform),(0,p.t)(t,n,ee,4,a),l.push([V.r.TANGENT,new F.n(t,i,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,h.oe)(2*r),{typedBuffer:o,typedBufferStride:n}=e.attributes.texCoord0;(0,v.n)(t,o,2,n),l.push([V.r.UV0,new F.n(t,i,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*r);4===e.attributes.color.elementCount?e.attributes.color instanceof m.Eq?(0,p.s)(t,e.attributes.color,255):e.attributes.color instanceof m.XP?(0,_.c)(t,e.attributes.color):e.attributes.color instanceof m.Uz&&(0,p.s)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof m.xs?(0,f.s)(t,e.attributes.color,255,4):e.attributes.color instanceof m.eI?(0,g.c)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof m.nS&&(0,f.s)(t,e.attributes.color,1/256,4)),l.push([V.r.COLOR,new F.n(t,i,4,!0)])}return{geometry:new z.V(t,l),vertexCount:r}}(e,null!=i?i:new G.$U({})),E=a.boundingInfo;null!=E&&0===T&&((0,u.iT)(x,E.bbMin),(0,u.iT)(x,E.bbMax)),null!=i&&(w.stageResources.geometries.push(a),w.numberOfVertices+=d)})),A||a.push(w)})),{engineResources:a,referenceBoundingBox:x}}(n,Q,te,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:re,referenceBoundingBox:ie,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1}}const ee=(0,n.vt)()},15061:(e,t,r)=>{r.d(t,{Gd:()=>P,J_:()=>N,VC:()=>z,b3:()=>D,s_:()=>H,ul:()=>B,wI:()=>O}),r(6273);var i,o,n,a=r(4506),s=r(82541),l=r(79441),c=r(25336),d=r(26110),u=r(80347),h=r(19913),m=r(47195),f=r(31882),p=r(41014);(n=i||(i={}))[n.Undefined=0]="Undefined",n[n.DefinedSize=1]="DefinedSize",n[n.DefinedScale=2]="DefinedScale",function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(o||(o={}));class v{constructor(e){this.field=e}}class g extends v{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[i.Undefined,i.Undefined,i.Undefined]}}class _ extends v{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}}class x extends v{constructor(e){super(e),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}}class T{}function b(e){return null!=e}function y(e){return"number"==typeof e}function S(e){return"string"==typeof e}function A(e,t){e&&e.push(t)}function E(e,t,r,o,n){const a=e.minSize,s=e.maxSize;if(e.expression)return A(n,"Could not convert size info: expression not supported"),!1;if(e.useSymbolValue){const e=o.symbolSize[r];return t.minSize[r]=e,t.maxSize[r]=e,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=i.DefinedSize,!0}if(b(e.field))return b(e.stops)?2===e.stops.length&&y(e.stops[0].size)&&y(e.stops[1].size)?(w(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,r),t.type[r]=i.DefinedSize,!0):(A(n,"Could not convert size info: stops only supported with 2 elements"),!1):y(a)&&y(s)&&b(e.minDataValue)&&b(e.maxDataValue)?(w(a,s,e.minDataValue,e.maxDataValue,t,r),t.type[r]=i.DefinedSize,!0):"unknown"===e.valueUnit?(A(n,"Could not convert size info: proportional size not supported"),!1):null!=m.j[e.valueUnit]?(t.minSize[r]=-1/0,t.maxSize[r]=1/0,t.offset[r]=0,t.factor[r]=1/m.j[e.valueUnit],t.type[r]=i.DefinedSize,!0):(A(n,"Could not convert size info: scale-dependent size not supported"),!1);if(!b(e.field)){if(e.stops?.[0]&&y(e.stops[0].size))return t.minSize[r]=e.stops[0].size,t.maxSize[r]=e.stops[0].size,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=i.DefinedSize,!0;if(y(a))return t.minSize[r]=a,t.maxSize[r]=a,t.offset[r]=a,t.factor[r]=0,t.type[r]=i.DefinedSize,!0}return A(n,"Could not convert size info: unsupported variant of sizeInfo"),!1}function w(e,t,r,i,o,n){const a=Math.abs(i-r)>0?(t-e)/(i-r):0;o.minSize[n]=a>0?e:t,o.maxSize[n]=a>0?t:e,o.offset[n]=e-r*a,o.factor[n]=a}function C(e,t,r){e[4*t]=r.r/255,e[4*t+1]=r.g/255,e[4*t+2]=r.b/255,e[4*t+3]=r.a}function M(e,t,r){const i=2===r&&"arithmetic"===e.rotationType;t.offset[r]=i?90:0,t.factor[r]=i?-1:1,t.type[r]=1}class O{constructor(e,t=[1,1,1],r=[1,1,1],i=1,o=[0,0,0],n=[1,1,1],a=[0,0,0]){this.supports=e,this.modelSize=t,this.symbolSize=r,this.unitInMeters=i,this.anchor=o,this.scale=n,this.rotation=a}}function R(e,t,r){if(!e)return null;const o=e.reduce(((e,i)=>{if(!e)return e;if(i.valueExpression)return A(r,"Could not convert visual variables: arcade expressions not supported"),null;switch(i.type){case"size":return t.supports.size?function(e,t,r,i){if(e.normalizationField||e.valueRepresentation)return A(i,"Could not convert size info: unsupported property"),null;if(!function(e){return null==e||S(e)}(e.field))return A(i,"Could not convert size info: field is not a string"),null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return A(i,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size=new g(e.field);let o;switch(e.axis){case"width":return o=E(e,t.size,0,r,i),o?t:null;case"height":return o=E(e,t.size,2,r,i),o?t:null;case"depth":return o=E(e,t.size,1,r,i),o?t:null;case"width-and-depth":return o=E(e,t.size,0,r,i),o&&E(e,t.size,1,r,i),o?t:null;case null:case void 0:case"all":return o=E(e,t.size,0,r,i),o=o&&E(e,t.size,1,r,i),o=o&&E(e,t.size,2,r,i),o?t:null;default:return A(i,`Could not convert size info: unknown axis "${e.axis}""`),null}}(i,e,t,r):e;case"color":return t.supports.color?function(e,t,r){if(e.normalizationField)return A(r,"Could not convert color info: unsupported property"),null;if(S(e.field)){if(!e.stops)return A(r,"Could not convert color info: missing stops or colors"),null;{if(e.stops.length>8)return A(r,"Could not convert color info: too many color stops"),null;t.color=new _(e.field);const i=e.stops;for(let e=0;e<8;++e){const r=i[Math.min(e,i.length-1)];t.color.values[e]=r.value,C(t.color.colors,e,r.color)}}}else{if(!(e.stops&&e.stops.length>=0))return A(r,"Could not convert color info: no field and no colors/stops"),null;{const r=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let e=0;e<8;e++)t.color.values[e]=1/0,C(t.color.colors,e,r)}}return t}(i,e,r):e;case"opacity":return t.supports.opacity?function(e,t,r){if(e.normalizationField)return A(r,"Could not convert opacity info: unsupported property"),null;if(S(e.field)){if(!e.stops)return A(r,"Could not convert opacity info: missing stops or opacities"),null;{if(e.stops.length>8)return A(r,"Could not convert opacity info: too many opacity stops"),null;t.opacity=new x(e.field);const i=e.stops;for(let e=0;e<8;++e){const r=i[Math.min(e,i.length-1)];t.opacity.values[e]=r.value,t.opacity.opacityValues[e]=r.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return A(r,"Could not convert opacity info: no field and no opacities/stops"),null;{const r=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let e=0;e<8;e++)t.opacity.values[e]=1/0,t.opacity.opacityValues[e]=r}}return t}(i,e,r):null;case"rotation":return t.supports.rotation?function(e,t,r){if(!S(e.field))return A(r,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return A(r,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return M(e,t.rotation,0),t;case"roll":return M(e,t.rotation,1),t;case null:case void 0:case"heading":return M(e,t.rotation,2),t;default:return A(r,`Could not convert rotation info: unknown axis "${e.axis}""`),null}}(i,e,r):e;default:return null}}),new T);return!(e.length>0&&o)||o.size||o.color||o.opacity||o.rotation?o?.size&&!function(e,t,r){for(let r=0;r<3;++r){let o=t.unitInMeters;e.type[r]===i.DefinedSize&&(o*=t.modelSize[r],e.type[r]=i.DefinedScale),e.minSize[r]=e.minSize[r]/o,e.maxSize[r]=e.maxSize[r]/o,e.offset[r]=e.offset[r]/o,e.factor[r]=e.factor[r]/o}let o;if(e.type[0]!==i.Undefined)o=0;else if(e.type[1]!==i.Undefined)o=1;else{if(e.type[2]===i.Undefined)return A(r,"No size axis contains a valid size or scale"),!1;o=2}for(let t=0;t<3;++t)e.type[t]===i.Undefined&&(e.minSize[t]=e.minSize[o],e.maxSize[t]=e.maxSize[o],e.offset[t]=e.offset[o],e.factor[t]=e.factor[o],e.type[t]=e.type[o]);return!0}(o.size,t,r)?null:o:null}class I{constructor(e,t,r){this.visualVariables=e,this.materialParameters=t,this.requiresShaderTransformation=r}}function H(e,t){if(!e)return null;if(f.b.TESTS_DISABLE_FAST_UPDATES)return null;const r=R(e.visualVariables,t);return r?new I(r,F(r,t),!!r.size):null}function N(e,t,r){if(!t||!e)return!1;const i=e.visualVariables,o=R(t.visualVariables,r);return!!o&&!!(L(i.size,o.size,"size")&&L(i.color,o.color,"color")&&L(i.rotation,o.rotation,"rotation")&&L(i.opacity,o.opacity,"opacity"))&&(e.visualVariables=o,e.materialParameters=F(o,r),e.requiresShaderTransformation=!!o.size,!0)}function L(e,t,r){if(!!e!=!!t)return!1;if(e&&e.field!==t?.field)return!1;if(e&&"rotation"===r){const r=e,i=t;for(let e=0;e<3;e++)if(r.type[e]!==i.type[e]||r.offset[e]!==i.offset[e]||r.factor[e]!==i.factor[e])return!1}return!0}class P extends p.Y{constructor(e){super(),this.vvSize=e?.size??null,this.vvColor=e?.color??null,this.vvOpacity=e?.opacity??null}}function F(e,t){const r=new P(e);return r.vvSize&&(r.vvSymbolAnchor=t.anchor,(0,c.D_)(W),function(e,t,r,i=(0,d.vt)()){const o=e||0,n=t||0,a=r||0;0!==o&&(0,c.Qr)(i,i,-o/180*Math.PI),0!==n&&(0,c.eL)(i,i,n/180*Math.PI),0!==a&&(0,c.Z8)(i,i,a/180*Math.PI)}(t.rotation[2],t.rotation[0],t.rotation[1],W),r.vvSymbolRotationMatrix=r.vvSymbolRotationMatrix||(0,l.vt)(),(0,s.z0)(r.vvSymbolRotationMatrix,W)),r}function D(e,t,r){if(!e.vvSize)return r;(0,c.C)(V,r);const i=e.vvSymbolRotationMatrix;(0,c.hZ)(W,i[0],i[1],i[2],0,i[3],i[4],i[5],0,i[6],i[7],i[8],0,0,0,0,1),(0,c.lw)(V,V,W);for(let r=0;r<3;++r){const i=e.vvSize.offset[r]+t[0]*e.vvSize.factor[r];G[r]=(0,a.qE)(i,e.vvSize.minSize[r],e.vvSize.maxSize[r])}return(0,c.hs)(V,V,G),(0,c.Tl)(V,V,e.vvSymbolAnchor),V}function z(e,t,r){if(!t.vvSize)return(0,u.s)(e,1,1,1),e;for(let i=0;i<3;++i){const o=t.vvSize.offset[i]+r[0]*t.vvSize.factor[i];e[i]=(0,a.qE)(o,t.vvSize.minSize[i],t.vvSize.maxSize[i])}return e}function B(e,t){const r=null==e?0:t.attributes[e];return"number"==typeof r&&isFinite(r)?r:0}const V=(0,d.vt)(),G=(0,h.vt)(),W=(0,d.vt)()},7724:(e,t,r)=>{r.d(t,{BP:()=>l,l5:()=>c});var i=r(40041),o=r(38456),n=r(26421);class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fields.keys()){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,r=0,i=e.count){const o=this.stride;if(o%4==0){const n=new Uint32Array(e.buffer,t*o,i*o/4);new Uint32Array(this.buffer,r*o,i*o/4).set(n)}else{const n=new Uint8Array(e.buffer,t*o,i*o);new Uint8Array(this.buffer,r*o,i*o).set(n)}return this}get usedMemory(){return this.byteLength}dispose(){}}class s{constructor(e=null){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:h(e[1].constructor)}))))}vec2f(e,t){return this._appendField(e,i.gH,t),this}vec2f64(e,t){return this._appendField(e,i.si,t),this}vec3f(e,t){return this._appendField(e,i.xs,t),this}vec3f64(e,t){return this._appendField(e,i.Xm,t),this}vec4f(e,t){return this._appendField(e,i.Eq,t),this}vec4f64(e,t){return this._appendField(e,i.Aj,t),this}mat3f(e,t){return this._appendField(e,i.jZ,t),this}mat3f64(e,t){return this._appendField(e,i.j0,t),this}mat4f(e,t){return this._appendField(e,i.Sx,t),this}mat4f64(e,t){return this._appendField(e,i.E$,t),this}vec4u8(e,t){return this._appendField(e,i.XP,t),this}f32(e,t){return this._appendField(e,i.Y$,t),this}f64(e,t){return this._appendField(e,i.qB,t),this}u8(e,t){return this._appendField(e,i.SL,t),this}u16(e,t){return this._appendField(e,i.h,t),this}i8(e,t){return this._appendField(e,i.bf,t),this}vec2i8(e,t){return this._appendField(e,i.D6,t),this}vec2i16(e,t){return this._appendField(e,i.mJ,t),this}vec2u8(e,t){return this._appendField(e,i.LC,t),this}vec4u16(e,t){return this._appendField(e,i.Uz,t),this}u32(e,t){return this._appendField(e,i.P,t),this}_appendField(e,t,r){if(this._fields.has(e))return void(0,n.vA)(!1,`${e} already added to vertex buffer layout`);const i=t.ElementCount*(0,o.GJ)(t.ElementType),a=this._stride;this._stride+=i,this._fields.set(e,{size:i,constructor:t,offset:a,optional:r})}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new s;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,r)=>e._fields.set(r,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,o.GJ)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function l(){return new s}class c{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const r={...e,constructor:u(e.constructor)};this.fields.push([t,r])})),this.stride=e.stride}}const d=[i.Y$,i.gH,i.xs,i.Eq,i.jZ,i.Sx,i.qB,i.si,i.Xm,i.Aj,i.j0,i.E$,i.SL,i.LC,i.eI,i.XP,i.h,i.Yi,i.nS,i.Uz,i.P,i.An,i.H$,i.ml,i.bf,i.D6,i.m8,i.TX,i.Qt,i.mJ,i.Vp,i.E7,i.My,i.UL,i.zD,i.Y4];function u(e){return`${e.ElementType}_${e.ElementCount}`}function h(e){return m.get(e)}const m=new Map;d.forEach((e=>m.set(u(e),e)))},31882:(e,t,r)=>{r.d(t,{b:()=>l});var i=r(82392),o=r(73783),n=r(81482),a=(r(6273),r(80861),r(67498),r(26325));let s=class extends o.A{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,i._)([(0,n.MZ)()],s.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"LABELS_SHOW_BORDER",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TEXT_SHOW_BASELINE",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TEXT_SHOW_BORDER",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"SHOW_POI",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,i._)([(0,n.MZ)()],s.prototype,"LINE_WIREFRAMES",void 0),s=(0,i._)([(0,a.$)("esri.views.3d.support.DebugFlags")],s);const l=new s},47635:(e,t,r)=>{r.d(t,{Mu:()=>s,i$:()=>c,oD:()=>d,xJ:()=>l});var i=r(77788),o=r(41359),n=r(66579),a=r(41014);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new n.G("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case i.V.Color:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.V.LinearDepth:case i.V.Shadow:case i.V.ShadowHighlight:case i.V.ShadowExcludeHighlight:return e.include(o.em,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},29785:(e,t,r)=>{r.d(t,{M:()=>o});var i=r(41014);function o(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},28019:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(41014),o=r(33763);function n(e,t=!0){e.attributes.add(o.r.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(i.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},77788:(e,t,r)=>{var i;function o(e){return n(e)||e===i.Depth||e===i.LinearDepth||e===i.Normal||e===i.ObjectAndLayerIdColor}function n(e){return e===i.Shadow||e===i.ShadowHighlight||e===i.ShadowExcludeHighlight}function a(e){return m(e)||e===i.Normal}function s(e){return e===i.Highlight||e===i.ObjectAndLayerIdColor}function l(e){return e===i.Color||s(e)}function c(e){return e===i.Color||e===i.Alpha}function d(e){return c(e)||e===i.ObjectAndLayerIdColor}function u(e){return function(e){return c(e)||e===i.Highlight}(e)||e===i.LinearDepth}function h(e){return c(e)||s(e)}function m(e){return h(e)||e===i.LinearDepth}r.d(t,{BF:()=>d,L0:()=>h,MU:()=>u,Mo:()=>m,PJ:()=>n,V:()=>i,XY:()=>a,cb:()=>o,i3:()=>l,j8:()=>c,u5:()=>s}),function(e){e[e.Color=0]="Color",e[e.LinearDepth=1]="LinearDepth",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.Highlight=7]="Highlight",e[e.Alpha=8]="Alpha",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.CompositeColor=10]="CompositeColor",e[e.COUNT=11]="COUNT"}(i||(i={}))},29592:(e,t,r)=>{r.d(t,{HQ:()=>c});var i=r(25336),o=r(26110),n=r(80347),a=r(19913),s=r(223),l=(r(64802),r(41014));function c(e,t){!function(e,t,...r){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const i=l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.hasSliceHighlight?l.H`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(n)}(e,t,new s.W("slicePlaneOrigin",((e,r)=>function(e,t,r){if(null==r.slicePlane)return a.uY;const i=d(e,t,r),o=u(i,r.slicePlane),s=h(e,i,r);return null!=s?(0,n.e)(p,o,s):o}(t,e,r))),new s.W("slicePlaneBasis1",((e,r)=>m(t,e,r,r.slicePlane?.basis1))),new s.W("slicePlaneBasis2",((e,r)=>m(t,e,r,r.slicePlane?.basis2))))}function d(e,t,r){return e.instancedDoublePrecision?(0,n.s)(f,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function u(e,t){return null!=e?(0,n.f)(p,t.origin,e):t.origin}function h(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.Tl)(g,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function m(e,t,r,i){if(null==i||null==r.slicePlane)return a.uY;const o=d(e,t,r),s=u(o,r.slicePlane),l=h(e,o,r);return null!=l?((0,n.g)(v,i,s),(0,n.e)(p,s,l),(0,n.e)(v,v,l),(0,n.f)(v,v,p)):i}l.Y;const f=(0,a.vt)(),p=(0,a.vt)(),v=(0,a.vt)(),g=(0,o.vt)()},31790:(e,t,r)=>{r.d(t,{d:()=>n});var i=r(47635),o=r(41014);function n(e){(0,i.i$)(e),e.vertex.code.add(o.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(o.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},32728:(e,t,r)=>{r.d(t,{BK:()=>b,nW:()=>x});var i=r(82392),o=r(82541),n=r(79441),a=r(26110),s=r(80347),l=r(19913),c=r(77788),d=r(30588),u=r(69952),h=r(223),m=r(41014),f=r(19835),p=r(99040),v=r(51662),g=r(33763),_=r(3016);class x extends v.K{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,i._)([(0,v.W)()],x.prototype,"instancedDoublePrecision",void 0),(0,i._)([(0,v.W)()],x.prototype,"hasModelTransformation",void 0),m.Y;const T=(0,n.vt)();function b(e,t){const r=t.hasModelTransformation,i=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new p.X("model",(e=>e.modelTransformation??a.zK))),e.vertex.uniforms.add(new f.k("normalLocalOriginFromModel",(e=>((0,o.Ge)(T,e.modelTransformation??a.zK),T))))),t.instanced&&i&&(e.attributes.add(g.r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(g.r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(g.r.INSTANCEMODEL,"mat3"),e.attributes.add(g.r.INSTANCEMODELNORMAL,"mat3"));const n=e.vertex;i&&(n.include(d.u,t),n.uniforms.add(new h.W("viewOriginHi",((e,t)=>(0,_.Zo)((0,s.s)(y,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),y))),new h.W("viewOriginLo",((e,t)=>(0,_.jA)((0,s.s)(y,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),y))))),n.code.add(m.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?m.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(m.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===c.V.Normal&&((0,u.S7)(n),n.code.add(m.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&n.code.add(m.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const y=(0,l.vt)()},3525:(e,t,r)=>{r.d(t,{W:()=>i,Y:()=>l});var i,o,n=r(95039),a=r(41014),s=r(33763);function l(e,t){switch(t.normalType){case i.Compressed:e.attributes.add(s.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case i.Attribute:e.attributes.add(s.r.NORMAL,"vec3"),e.vertex.code.add(a.H`vec3 normalModel() {
return normal;
}`);break;case i.ScreenDerivative:e.fragment.code.add(a.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,n.Xb)(t.normalType);case i.COUNT:case i.Ground:}}(o=i||(i={}))[o.Attribute=0]="Attribute",o[o.Compressed=1]="Compressed",o[o.Ground=2]="Ground",o[o.ScreenDerivative=3]="ScreenDerivative",o[o.COUNT=4]="COUNT"},38587:(e,t,r)=>{r.d(t,{g:()=>a});var i=r(77788),o=r(41014),n=r(33763);function a(e,t){const r=t.output===i.V.ObjectAndLayerIdColor,a=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),a?e.attributes.add(n.r.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(n.r.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(o.H`
     void forwardObjectAndLayerIdColor() {
      ${r?a?o.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:o.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:o.H``} }`),e.fragment.code.add(o.H`
      void outputObjectAndLayerIdColor() {
        ${r?o.H`fragColor = objectAndLayerIdColorVarying;`:o.H``} }`)}},18185:(e,t,r)=>{r.d(t,{I:()=>n});var i=r(41014),o=r(33763);function n(e){e.attributes.add(o.r.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},26756:(e,t,r)=>{r.d(t,{K:()=>c});var i=r(96153),o=r(41014);function n(e){e.vertex.code.add(o.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.H.int(i.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.H.int(i.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.H.int(i.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.H.int(i.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var a=r(88531),s=r(33763),l=r(73395);function c(e,t){t.hasSymbolColors?(e.include(n),e.attributes.add(s.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new a.c("colorMixMode",(e=>l.Um[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},51229:(e,t,r)=>{r.d(t,{U:()=>l,q:()=>i});var i,o,n=r(95039),a=r(41014),s=r(33763);function l(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(a.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(s.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.r.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,n.Xb)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(a.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}(o=i||(i={}))[o.None=0]="None",o[o.Default=1]="Default",o[o.Atlas=2]="Atlas",o[o.Compressed=3]="Compressed",o[o.COUNT=4]="COUNT"},73713:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(41014),o=r(33763);function n(e,t){t.hasVertexColors?(e.attributes.add(o.r.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},83143:(e,t,r)=>{r.d(t,{Mh:()=>u,Zo:()=>h,gy:()=>m});var i=r(95039),o=r(79441),n=r(76982),a=r(3525),s=r(41359),l=r(41014),c=r(26746),d=r(19835);function u(e,t){switch(t.normalType){case a.W.Attribute:case a.W.Compressed:e.include(a.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.W.Ground:e.include(s.em,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?l.H`normalize(vPositionWorldCameraRelative);`:l.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case a.W.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,i.Xb)(t.normalType);case a.W.COUNT:}}class h extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,o.vt)()}}class m extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,o.vt)(),this.toMapSpace=(0,n.vt)()}}},41359:(e,t,r)=>{r.d(t,{EM:()=>v,dO:()=>p,em:()=>f});var i=r(79441),o=r(26110),n=r(19913),a=r(18185),s=r(30588),l=r(223),c=r(64802),d=r(41014),u=r(26746),h=r(19835),m=r(99040);function f(e,t){e.include(a.I);const r=e.vertex;r.include(s.u,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.X("transformProjFromView",(e=>e.transformProjFromView)),new u.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(d.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(d.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?d.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends d.Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,n.vt)(),this.transformWorldFromViewTL=(0,n.vt)(),this.transformViewFromCameraRelativeRS=(0,i.vt)(),this.transformProjFromView=(0,o.vt)()}}class v extends d.Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,i.vt)(),this.transformWorldFromModelTH=(0,n.vt)(),this.transformWorldFromModelTL=(0,n.vt)()}}},2169:(e,t,r)=>{r.d(t,{r:()=>s});var i=r(95039),o=r(51229),n=r(41014);function a(e){e.fragment.code.add(n.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function s(e,t){switch(e.include(o.U,t),t.textureCoordinateType){case o.q.Default:case o.q.Compressed:return void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case o.q.Atlas:return e.include(a),void e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,i.Xb)(t.textureCoordinateType);case o.q.None:case o.q.COUNT:return}}},11255:(e,t,r)=>{r.d(t,{G:()=>c,V:()=>u});var i=r(74772),o=r(76982),n=r(15510),a=r(69952),s=r(92121),l=r(41014);function c(e,t){const r=e.vertex;t.hasVerticalOffset?(u(r),t.hasScreenSizePerspective&&(e.include(n.Y6),(0,n.OH)(r),(0,a.yu)(e.vertex,t)),r.code.add(l.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?l.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:l.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?l.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const d=(0,o.vt)();function u(e){e.uniforms.add(new s.E("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:o,screenLength:n}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(d,n*s,a,r,o)})))}},36261:(e,t,r)=>{r.d(t,{E:()=>x});var i=r(47635),o=r(77788),n=r(29592),a=r(31790),s=r(3525),l=r(38587),c=r(51229),d=r(83143),u=r(23932),h=r(15479),m=r(24578),f=r(738),p=r(69952),v=r(41014),g=r(19778),_=r(10875);function x(e,t){const{vertex:r,fragment:x}=e,T=t.hasColorTexture&&t.alphaDiscardMode!==_.sf.Opaque;switch(t.output){case o.V.LinearDepth:case o.V.Shadow:case o.V.ShadowHighlight:case o.V.ShadowExcludeHighlight:case o.V.ObjectAndLayerIdColor:(0,p.NB)(r,t),e.include(a.d,t),e.include(c.U,t),e.include(m.A,t),e.include(u.L,t),e.include(n.HQ,t),e.include(l.g,t),(0,i.xJ)(e),e.varyings.add("depth","float"),T&&x.uniforms.add(new g.N("tex",(e=>e.texture))),r.code.add(v.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(f.S,t),x.code.add(v.H`
          void main(void) {
            discardBySlice(vpos);
            ${T?v.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?v.H`colorUV`:v.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===o.V.ObjectAndLayerIdColor?v.H`outputObjectAndLayerIdColor();`:v.H`outputDepth(depth);`}
          }
        `);break;case o.V.Normal:{(0,p.NB)(r,t),e.include(a.d,t),e.include(s.Y,t),e.include(d.Mh,t),e.include(c.U,t),e.include(m.A,t),T&&x.uniforms.add(new g.N("tex",(e=>e.texture))),t.normalType===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=t.normalType===s.W.Attribute||t.normalType===s.W.Compressed;r.code.add(v.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?v.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:v.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(n.HQ,t),e.include(f.S,t),x.code.add(v.H`
          void main() {
            discardBySlice(vpos);
            ${T?v.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?v.H`colorUV`:v.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===s.W.ScreenDerivative?v.H`vec3 normal = screenDerivativeNormal(vPositionView);`:v.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case o.V.Highlight:(0,p.NB)(r,t),e.include(a.d,t),e.include(c.U,t),e.include(m.A,t),T&&x.uniforms.add(new g.N("tex",(e=>e.texture))),r.code.add(v.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(n.HQ,t),e.include(f.S,t),e.include(h.Qh,t),x.code.add(v.H`
          void main() {
            discardBySlice(vpos);
            ${T?v.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?v.H`colorUV`:v.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},23932:(e,t,r)=>{r.d(t,{L:()=>s});var i=r(77788),o=r(63607),n=r(80002),a=r(41014);function s(e,t){switch(t.output){case i.V.Shadow:case i.V.ShadowHighlight:case i.V.ShadowExcludeHighlight:e.fragment.include(o.U),e.fragment.code.add(a.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case i.V.LinearDepth:e.fragment.include(n.W),e.fragment.code.add(a.H`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}},15479:(e,t,r)=>{r.d(t,{Qh:()=>l,U:()=>a,bO:()=>s});var i=r(76982),o=r(41014),n=r(19778);const a=(0,i.fA)(1,1,0,1),s=(0,i.fA)(1,0,1,1);function l(e){e.fragment.uniforms.add(new n.N("depthTexture",((e,t)=>t.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",a).add("unoccludedHighlightFlag","vec4",s),e.fragment.code.add(o.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}},16937:(e,t,r)=>{r.d(t,{D:()=>n,E:()=>a});var i=r(80002),o=r(41014);function n(e){e.include(i.W),e.code.add(o.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`)}function a(e){e.code.add(o.H`float linearizeDepth(float depth, vec2 nearFar) {
float depthNdc = depth * 2.0 - 1.0;
return (2.0 * nearFar[0] * nearFar[1]) / (depthNdc * (nearFar[1] - nearFar[0]) - (nearFar[1] + nearFar[0]));
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return linearizeDepth(depth, nearFar);
}`)}},50710:(e,t,r)=>{r.d(t,{W:()=>p});var i=r(79441),o=r(56560),n=r(51229),a=r(2169),s=r(23605),l=r(66579),c=r(41014),d=r(19835),u=r(29247),h=r(19778),m=r(34088),f=r(33763);function p(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(f.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.W.WindingOrder?r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(c.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==n.q.None&&(e.include(a.r,t),r.uniforms.add(t.pbrTextureBindType===m.c.Pass?new h.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new l.G("scale",(e=>e.scale??o.Un))),r.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.zK)))),r.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(c.H`return tangentSpace * rawNormal;
}`))}},44118:(e,t,r)=>{r.d(t,{W:()=>u});var i=r(80347),o=r(19913),n=r(74772),a=r(76982),s=r(35212),l=r(64802),c=r(92121),d=r(41014);function u(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add(new l.t("lightingAmbientSH0",((e,t)=>(0,i.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add(new c.E("lightingAmbientSH_R",((e,t)=>(0,n.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new c.E("lightingAmbientSH_G",((e,t)=>(0,n.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new c.E("lightingAmbientSH_B",((e,t)=>(0,n.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(r.uniforms.add(new l.t("lightingAmbientSH0",((e,t)=>(0,i.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new c.E("lightingAmbientSH_R1",((e,t)=>(0,n.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new c.E("lightingAmbientSH_G1",((e,t)=>(0,n.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new c.E("lightingAmbientSH_B1",((e,t)=>(0,n.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new c.E("lightingAmbientSH_R2",((e,t)=>(0,n.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new c.E("lightingAmbientSH_G2",((e,t)=>(0,n.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new c.E("lightingAmbientSH_B2",((e,t)=>(0,n.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==s.A9.Normal&&t.pbrMode!==s.A9.Schematic||r.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const h=(0,o.vt)(),m=(0,a.vt)()},23883:(e,t,r)=>{r.d(t,{n:()=>B});var i=r(41014),o=r(19778),n=r(82392),a=r(4506),s=r(57725),l=r(61985),c=r(67900),d=r(81482),u=(r(6273),r(80861),r(67498),r(26325)),h=r(53334),m=r(38236),f=r(60060),p=r(45845),v=r(21979),g=r(19362),_=r(74242),x=r(24441),T=r(26599),b=r(15651);class y extends g.w{initializeProgram(e){return new x.B(e.rctx,y.shader.get().build(),_.D)}initializePipeline(){return(0,b.Ey)({colorWrite:b.wE})}}y.shader=new v.$(T.S,(()=>r.e(3271).then(r.bind(r,43271))));var S=r(56560);class A extends i.Y{constructor(){super(...arguments),this.projScale=1}}class E extends A{constructor(){super(...arguments),this.intensity=1}}class w extends i.Y{}class C extends w{constructor(){super(...arguments),this.blurSize=(0,S.vt)()}}var M,O,R=r(43300);class I extends g.w{initializeProgram(e){return new x.B(e.rctx,I.shader.get().build(),_.D)}initializePipeline(){return(0,b.Ey)({colorWrite:b.wE})}}I.shader=new v.$(R.S,(()=>r.e(1348).then(r.bind(r,81348)))),r(47273),(O=M||(M={}))[O.Antialiasing=0]="Antialiasing",O[O.HighQualityTransparency=1]="HighQualityTransparency",O[O.HighResolutionVoxel=2]="HighResolutionVoxel",O[O.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",O[O.SSAO=4]="SSAO",O[O.WaterReflection=5]="WaterReflection",O[O.HighResolutionShadows=6]="HighResolutionShadows",O[O.PhysicalPixelRendering=7]="PhysicalPixelRendering";var H=r(15449),N=r(68716),L=r(89958),P=r(88416);const F=2;let D=class extends p.RW{constructor(e){super(e),this._context=null,this._passParameters=new E,this._drawParameters=new C,this.produces=new Map([[H.N.SSAO,()=>this._produces()]])}_getCameraElevation(){return this._context?.renderContext.bindParameters.camera.relativeElevation??1/0}_produces(){return null!=this._enableTime&&null!=this._context&&this._getCameraElevation()<f.b}consumes(){return this._produces()?p.A9:p.qo}initializeRenderContext(e){this._context=e,this.addHandles([(0,l.wB)((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(M.SSAO)),(e=>e?this._enable():this._disable()),l.pc)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=(0,s.WD)(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new P.R;t.wrapMode=N.pF.CLAMP_TO_EDGE,t.pixelFormat=N.Ab.RGB,t.wrapMode=N.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new L.g(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(I)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(y)),this._enableTime=(0,c.l5)(0),this._context?.requestRender()}renderNode(e,t,r){const i=e.bindParameters,o=r?.get("normals"),n=o?.getTexture(),s=o?.getTexture(N.nI);if(null==this._enableTime||null==this._context||!n||!s)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const l=e.rctx,c=i.camera,d=this.view.qualitySettings.fadeDuration,u=c.relativeElevation,p=(0,a.qE)((f.b-u)/(f.b-f.O),0,1),v=d>0?Math.min(d,e.time-this._enableTime)/d:1,g=v*p;this._passParameters.normalTexture=n,this._passParameters.depthTexture=s,this._passParameters.projScale=1/c.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*z/(0,R.g)(c)**6*g;const _=c.fullViewport[2],x=c.fullViewport[3],T=Math.round(_/F),b=Math.round(x/F),y=this._context.fbos,S=y.acquire(_,x,"ssao input",m.N.RG);l.unbindTexture(S.fbo.colorTexture),l.bindFramebuffer(S.fbo),l.setViewport(0,0,_,x),l.bindTechnique(this._ssaoTechnique,i,this._passParameters,this._drawParameters),l.screen.draw();const A=y.acquire(T,b,"ssao blur",m.N.RED);l.unbindTexture(A.fbo.colorTexture),l.bindFramebuffer(A.fbo),this._drawParameters.colorTexture=S.getTexture(),(0,h.hZ)(this._drawParameters.blurSize,0,F/x),l.bindTechnique(this._blurTechnique,i,this._passParameters,this._drawParameters),l.setViewport(0,0,T,b),l.screen.draw(),S.release();const E=y.acquire(T,b,"ssao",m.N.RED);return l.unbindTexture(E.fbo.colorTexture),l.bindFramebuffer(E.fbo),l.setViewport(0,0,_,x),l.setClearColor(1,1,1,0),l.clear(N.hn.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=A.getTexture(),(0,h.hZ)(this._drawParameters.blurSize,F/_,0),l.bindTechnique(this._blurTechnique,i,this._passParameters,this._drawParameters),l.setViewport(0,0,T,b),l.screen.draw(),l.setViewport4fv(c.fullViewport),A.release(),v<1&&this._context.requestRender(),E}};(0,n._)([(0,d.MZ)({constructOnly:!0})],D.prototype,"view",void 0),(0,n._)([(0,d.MZ)()],D.prototype,"_context",void 0),D=(0,n._)([(0,u.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],D);const z=.5;function B(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new o.N("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/F),r.code.add(i.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(i.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},31434:(e,t,r)=>{r.d(t,{a8:()=>f,eU:()=>p,kA:()=>v});var i=r(95039),o=r(44118),n=r(23883),a=r(40574),s=r(75762),l=r(35212),c=r(48425),d=r(27981),u=r(19635),h=r(41014),m=r(4477);function f(e){e.constants.add("ambientBoostFactor","float",m.uH)}function p(e){e.uniforms.add(new u.m("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function v(e,t){const r=e.fragment;switch(e.include(n.n,t),t.pbrMode!==l.A9.Disabled&&e.include(s.c,t),e.include(o.W,t),e.include(c.p),r.code.add(h.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),f(r),p(r),(0,a.Gc)(r),r.code.add(h.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?h.H`normalize(vPosWorld)`:h.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,a.O4)(r),r.code.add(h.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.A9.Disabled:case l.A9.WaterOnIntegratedMesh:case l.A9.Water:e.include(a.qU),r.code.add(h.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.A9.Normal:case l.A9.Schematic:r.code.add(h.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(h.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new d.e("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(h.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new u.m("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new u.m("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(h.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(h.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==l.A9.Schematic||t.hasColorTexture?h.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:h.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.A9.Simplified:case l.A9.TerrainWithWater:e.include(a.qU),r.code.add(h.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,i.Xb)(t.pbrMode);case l.A9.COUNT:}}},40574:(e,t,r)=>{r.d(t,{Gc:()=>n,O4:()=>a,qU:()=>s});var i=r(64802),o=r(41014);function n(e){e.uniforms.add(new i.t("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new i.t("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){n(e.fragment),a(e.fragment),e.fragment.code.add(o.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},65630:(e,t,r)=>{r.d(t,{Q:()=>s,h:()=>l});var i=r(16937),o=r(66579),n=r(41014),a=r(19778);function s(e,t){if(!t.multipassEnabled)return;e.fragment.include(i.D),e.fragment.uniforms.add(new a.N("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepth?.getTexture())),new o.G("nearFar",((e,t)=>t.camera.nearFar)));const r=t.occlusionPass;e.fragment.code.add(n.H`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?n.H`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:n.H`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}class l{constructor(){this.cullAboveGround=!1}}},23605:(e,t,r)=>{r.d(t,{W:()=>i,r:()=>s});var i,o,n=r(95039),a=r(41014);function s(e,t){const r=e.fragment;switch(r.code.add(a.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.Xb)(t.doubleSidedMode);case i.COUNT:}}(o=i||(i={}))[o.None=0]="None",o[o.View=1]="View",o[o.WindingOrder=2]="WindingOrder",o[o.COUNT=3]="COUNT"},75762:(e,t,r)=>{r.d(t,{c:()=>s,f:()=>l});var i=r(41014);function o(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var n=r(35212),a=r(48425);function s(e,t){const r=e.fragment.code;e.include(a.p),t.pbrMode!==n.A9.Normal&&t.pbrMode!==n.A9.Schematic&&t.pbrMode!==n.A9.Simplified&&t.pbrMode!==n.A9.TerrainWithWater||(r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==n.A9.Normal&&t.pbrMode!==n.A9.Schematic||(e.include(o),r.add(i.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function l(e,t){const r=e.fragment.code;e.include(a.p),r.add(i.H`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),r.add(i.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(i.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(i.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(i.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}},35212:(e,t,r)=>{r.d(t,{A9:()=>i,_Z:()=>h});var i,o,n=r(2169),a=r(223),s=r(64802),l=r(41014),c=r(29247),d=r(19778),u=r(34088);function h(e,t){const r=e.fragment,o=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===i.Normal&&o&&e.include(n.r,t),t.pbrMode!==i.Schematic)if(t.pbrMode!==i.Disabled){if(t.pbrMode===i.Normal){r.code.add(l.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===u.c.Pass?new d.N("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new c.o("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(l.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===u.c.Pass?new d.N("texEmission",(e=>e.textureEmissive)):new c.o("texEmission",(e=>e.textureEmissive))),r.code.add(l.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===u.c.Pass?new d.N("texOcclusion",(e=>e.textureOcclusion)):new c.o("texOcclusion",(e=>e.textureOcclusion))),r.code.add(l.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`),e===u.c.Pass?r.uniforms.add(new s.t("emissionFactor",(e=>e.emissiveFactor)),new s.t("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new a.W("emissionFactor",(e=>e.emissiveFactor)),new a.W("mrrFactors",(e=>e.mrrFactors))),r.code.add(l.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?l.H`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?l.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?l.H`applyEmission(${t.hasEmissiveTextureTransform?l.H`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?l.H`applyOcclusion(${t.hasOcclusionTextureTransform?l.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(l.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(l.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}r(71678),(o=i||(i={}))[o.Disabled=0]="Disabled",o[o.Normal=1]="Normal",o[o.Schematic=2]="Schematic",o[o.Water=3]="Water",o[o.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",o[o.Simplified=5]="Simplified",o[o.TerrainWithWater=6]="TerrainWithWater",o[o.COUNT=7]="COUNT"},48425:(e,t,r)=>{r.d(t,{p:()=>o});var i=r(41014);function o(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},88251:(e,t,r)=>{r.d(t,{Bz:()=>m,G:()=>h}),r(26110),r(19913);var i=r(63607),o=r(92121),n=r(88531),a=r(41014),s=r(7804),l=r(34088);class c extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Draw,((r,i,o,n)=>r.setUniformMatrix4fv(e,t(i,o,n))),r)}}class d extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))),r)}}var u=r(19778);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function f(e){const t=e.fragment;t.include(i.U),t.uniforms.add(new u.N("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new n.c("numCascades",((e,t)=>t.shadowMap.numCascades)),new o.E("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}a.Y,a.Y},60060:(e,t,r)=>{r.d(t,{O:()=>i,b:()=>o});const i=3e5,o=5e5},69563:(e,t,r)=>{r.d(t,{MU:()=>c,O1:()=>d,QM:()=>u,Sx:()=>l,q2:()=>s});var i=r(79441),o=r(51229),n=r(41014),a=r(19835);function s(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new a.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??i.zK))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(n.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==o.q.None?(e.vertex.uniforms.add(new a.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.zK))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(n.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==o.q.None?(e.vertex.uniforms.add(new a.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??i.zK))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(n.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==o.q.None?(e.vertex.uniforms.add(new a.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??i.zK))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(n.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==o.q.None?(e.vertex.uniforms.add(new a.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??i.zK))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(n.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(n.H`void forwardMetallicRoughnessUV(){}`)}},24578:(e,t,r)=>{r.d(t,{A:()=>d});var i=r(64802),o=r(5800),n=r(4930),a=r(41014),s=r(19835),l=r(33763),c=r(34383);function d(e,t){const{vertex:r,attributes:d}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&d.add(l.r.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new i.t("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new i.t("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new i.t("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new i.t("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new s.k("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.t("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(a.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(a.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?a.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(a.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",c.p),r.uniforms.add(new n.x("vvColorValues",(e=>e.vvColor.values),c.p),new o.F("vvColorColors",(e=>e.vvColor.colors),c.p)),r.code.add(a.H`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?a.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(a.H`vec4 vvColor() { return vec4(1.0); }`)}},78546:(e,t,r)=>{r.d(t,{H:()=>i,y:()=>o});const i=.1,o=.001},738:(e,t,r)=>{r.d(t,{S:()=>l});var i=r(22180),o=r(7804);r(34088),o.n;var n=r(19635),a=r(41014),s=r(10875);function l(e,t){!function(e,t,r){const o=e.fragment;switch(t.alphaDiscardMode!==s.sf.Mask&&t.alphaDiscardMode!==s.sf.MaskBlend||o.uniforms.add(r),t.alphaDiscardMode){case s.sf.Blend:return e.include(i.g);case s.sf.Opaque:o.code.add(a.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.sf.Mask:o.code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.sf.MaskBlend:e.fragment.code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new n.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},36288:(e,t,r)=>{r.d(t,{Ir:()=>d});var i=r(53334),o=r(56560),n=r(74772),a=r(76982),s=r(66579),l=r(92121),c=r(41014);function d(e){e.fragment.uniforms.add(new l.E("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,n.s)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,n.s)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new s.G("zScale",((e,t)=>function(e){return 0===e.projectionMatrix[11]?(0,i.hZ)(h,0,1):(0,i.hZ)(h,1,0)}(t.camera)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,a.vt)(),h=(0,o.vt)()},83660:(e,t,r)=>{r.d(t,{a:()=>o});var i=r(41014);function o(e){e.code.add(i.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}},22180:(e,t,r)=>{r.d(t,{g:()=>n});var i=r(78546),o=r(41014);function n(e){e.fragment.code.add(o.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.H.float(i.y)}) { discard; } }
  `)}},30588:(e,t,r)=>{r.d(t,{u:()=>o});var i=r(41014);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(i.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(i.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},79377:(e,t,r)=>{r.d(t,{N:()=>a});var i=r(96153),o=r(83660),n=r(41014);function a(e){e.include(o.a),e.code.add(n.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.H.int(i.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n.H.int(i.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.H.int(i.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},63607:(e,t,r)=>{r.d(t,{U:()=>o});var i=r(41014);function o(e){e.code.add(i.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},80002:(e,t,r)=>{r.d(t,{W:()=>o});var i=r(41014);function o(e){e.code.add(i.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},15510:(e,t,r)=>{r.d(t,{OH:()=>c,Y6:()=>s,pM:()=>l});var i=r(80347),o=r(19913),n=r(64802),a=r(41014);function s(e){e.vertex.code.add(a.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(a.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function l(e){e.uniforms.add(new n.t("screenSizePerspective",(e=>d(e.screenSizePerspective))))}function c(e){e.uniforms.add(new n.t("screenSizePerspectiveAlignment",(e=>d(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function d(e){return(0,i.s)(u,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const u=(0,o.vt)()},69952:(e,t,r)=>{r.d(t,{yu:()=>f,Nz:()=>x,NB:()=>p,S7:()=>_});var i=r(25336),o=r(26110),n=r(80347),a=r(19913),s=r(223),l=r(64802),c=r(19635),d=r(7804),u=r(34088);class h extends d.n{constructor(e,t){super(e,"mat4",u.c.Draw,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}var m=r(99040);function f(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.uY):e.uniforms.add(new s.W("cameraPosition",((e,t)=>(0,n.s)(g,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function p(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new m.X("proj",((e,t)=>t.camera.projectionMatrix)),new h("view",((e,t)=>(0,i.Tl)(v,t.camera.viewMatrix,e.origin))),new s.W("localOrigin",(e=>e.origin)));const r=e=>(0,n.s)(g,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new m.X("proj",((e,t)=>t.camera.projectionMatrix)),new m.X("view",((e,t)=>(0,i.Tl)(v,t.camera.viewMatrix,r(t)))),new l.t("localOrigin",((e,t)=>r(t))))}const v=(0,o.vt)(),g=(0,a.vt)();function _(e){e.uniforms.add(new m.X("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}function x(e){e.uniforms.add(new c.m("pixelRatio",((e,t)=>t.camera.pixelRatio/t.overlayStretch)))}},27981:(e,t,r)=>{r.d(t,{e:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"bool",o.c.Pass,((r,i,o)=>r.setUniform1b(e,t(i,o))))}}},37138:(e,t,r)=>{r.d(t,{t:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"vec2",o.c.Draw,((r,i,o,n)=>r.setUniform2fv(e,t(i,o,n))))}}},66579:(e,t,r)=>{r.d(t,{G:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"vec2",o.c.Pass,((r,i,o)=>r.setUniform2fv(e,t(i,o))))}}},223:(e,t,r)=>{r.d(t,{W:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"vec3",o.c.Draw,((r,i,o,n)=>r.setUniform3fv(e,t(i,o,n))))}}},64802:(e,t,r)=>{r.d(t,{t:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"vec3",o.c.Pass,((r,i,o)=>r.setUniform3fv(e,t(i,o))))}}},92121:(e,t,r)=>{r.d(t,{E:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"vec4",o.c.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))))}}},5800:(e,t,r)=>{r.d(t,{F:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t,r){super(e,"vec4",o.c.Pass,((r,i,o)=>r.setUniform4fv(e,t(i,o))),r)}}},19635:(e,t,r)=>{r.d(t,{m:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"float",o.c.Pass,((r,i,o)=>r.setUniform1f(e,t(i,o))))}}},4930:(e,t,r)=>{r.d(t,{x:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t,r){super(e,"float",o.c.Pass,((r,i,o)=>r.setUniform1fv(e,t(i,o))),r)}}},88531:(e,t,r)=>{r.d(t,{c:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"int",o.c.Pass,((r,i,o)=>r.setUniform1i(e,t(i,o))))}}},26746:(e,t,r)=>{r.d(t,{h:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"mat3",o.c.Draw,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},19835:(e,t,r)=>{r.d(t,{k:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"mat3",o.c.Pass,((r,i,o)=>r.setUniformMatrix3fv(e,t(i,o))))}}},99040:(e,t,r)=>{r.d(t,{X:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"mat4",o.c.Pass,((r,i,o)=>r.setUniformMatrix4fv(e,t(i,o))))}}},92624:(e,t,r)=>{r.d(t,{N5:()=>c});var i=r(62991),o=r(80861),n=r(34088),a=r(26421);const s=()=>o.A.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class l{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){s().error("Shader module included multiple times with different configuration.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class c extends l{constructor(){super(...arguments),this.vertex=new h,this.fragment=new h,this.attributes=new m,this.varyings=new f,this.extensions=new p,this.constants=new g,this.outputs=new v}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),o="vertex"===e?this.vertex:this.fragment,n=o.uniforms.generateSource(),a=o.code.generateSource(),s="vertex"===e?x:_,l=this.constants.generateSource().concat(o.constants.generateSource()),c=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${n.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${c.join("\n")}\n\n${a.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,o)=>{for(let n=0;n<i;++n)r[n](e,t,o)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[n.c.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,o,n)=>{for(let a=0;a<i;++a)r[a](e,t,o,n)}}}class d{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.A(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else s().error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class u{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class h extends l{constructor(){super(...arguments),this.uniforms=new d,this.code=new u,this.constants=new g}get builder(){return this}}class m{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,a.vA)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class p{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?p.ALLOWLIST_VERTEX:p.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}p.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],p.ALLOWLIST_VERTEX=[];class v{constructor(){this._entries=new Map}add(e,t,r=0){const i=this._entries.get(r);i?(0,a.vA)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:v.DEFAULT_NAME,type:v.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}v.DEFAULT_TYPE="vec4",v.DEFAULT_NAME="fragColor";class g{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=g._numberToFloatStr(r);break;case"int":i=g._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])},                            ${g._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])},                             ${g._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>g._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const _="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",x="precision highp float;\nprecision highp sampler2D;"},29247:(e,t,r)=>{r.d(t,{o:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"sampler2D",o.c.Draw,((r,i,o)=>r.bindTexture(e,t(i,o))))}}},19778:(e,t,r)=>{r.d(t,{N:()=>n});var i=r(7804),o=r(34088);class n extends i.n{constructor(e,t){super(e,"sampler2D",o.c.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}},7804:(e,t,r)=>{r.d(t,{n:()=>o});var i=r(34088);class o{constructor(e,t,r,o,n=null){if(this.name=e,this.type=t,this.arraySize=n,this.bind={[i.c.Pass]:null,[i.c.Draw]:null},o)switch(r){case i.c.Pass:this.bind[i.c.Pass]=o;break;case i.c.Draw:this.bind[i.c.Draw]=o}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},41014:(e,t,r)=>{r.d(t,{H:()=>o,Y:()=>i});const i=class{};function o(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}var n;(n=o||(o={})).int=function(e){return Math.round(e).toString()},n.float=function(e){return e.toPrecision(8)}},34088:(e,t,r)=>{var i;r.d(t,{c:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},21979:(e,t,r)=>{r.d(t,{$:()=>i});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},19362:(e,t,r)=>{r.d(t,{w:()=>n});var i=r(57725),o=r(68716);class n{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=(0,i.WD)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.WD)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return o.WR.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}}},51662:(e,t,r)=>{r.d(t,{K:()=>o,W:()=>n});var i=r(41014);class o extends i.Y{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function n(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,o=e.count||2,n=Math.ceil(Math.log2(o)),a=t._parameterBits??[0];let s=0;for(;a[s]+n>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<n)-1<<l;a[s]+=n,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},45845:(e,t,r)=>{r.d(t,{A9:()=>a,Ot:()=>c,RW:()=>l,S:()=>d,qo:()=>n});var i=r(73783),o=r(77788);const n={required:[]},a=(o.V.LinearDepth,o.V.CompositeColor,o.V.Highlight,{required:[o.V.Depth,o.V.Normal]});class s extends i.A{consumes(){return n}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}get materialReference(){return null}modify(e){}get numGeometries(){return 0}get hasOccludees(){return!1}queryRenderOccludedState(e){return!1}}class l extends s{}class c extends s{constructor(){super(...arguments),this.drapedPriority=0}}class d extends s{}},10558:(e,t,r)=>{r.d(t,{H:()=>n,a:()=>o});var i=r(67900);class o{constructor(){this.enabled=!0,this._time=(0,i.l5)(0)}get time(){return this._time}advance({deltaTime:e,fixedTime:t}){return null!=t?this._time!==t&&(this._time=t,!0):(this._time=(0,i.l5)(this._time+e),0!==e)}}class n{constructor(e,t){this.deltaTime=e,this.fixedTime=t}}},82864:(e,t,r)=>{r.d(t,{KV:()=>g,Vc:()=>_,Cr:()=>h,JI:()=>m});var i=r(44764);let o;var n;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(n||(n={}));var a=r(68716),s=r(89958),l=r(73360);let c=null,d=null;async function u(){return null==d&&(d=function(){if(null==o){const e=e=>(0,i.s)(`esri/libs/basisu/${e}`);o=r.e(3098).then(r.bind(r,13098)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return o}(),c=await d),d}function h(e,t){if(null==c)return e.byteLength;const r=new c.BasisFile(new Uint8Array(e)),i=p(r)?f(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}function m(e,t){if(null==c)return e.byteLength;const r=new c.KTX2File(new Uint8Array(e)),i=v(r)?f(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}function f(e,t,r,i,o){const n=(0,l.IB)(t?a.CQ.COMPRESSED_RGBA8_ETC2_EAC:a.CQ.COMPRESSED_RGB8_ETC2),s=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*n*s)}function p(e){return e.getNumImages()>=1&&!e.isUASTC()}function v(e){return e.getFaces()>=1&&e.isETC1S()}async function g(e,t,r){null==c&&(c=await u());const i=new c.BasisFile(new Uint8Array(r));if(!p(i))return null;i.startTranscoding();const o=x(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}async function _(e,t,r){null==c&&(c=await u());const i=new c.KTX2File(new Uint8Array(r));if(!v(i))return null;i.startTranscoding();const o=x(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}function x(e,t,r,i,o,l,c,d){const{compressedTextureETC:u,compressedTextureS3TC:h}=e.capabilities,[m,f]=u?i?[n.ETC2_RGBA,a.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[n.ETC1_RGB,a.CQ.COMPRESSED_RGB8_ETC2]:h?i?[n.BC3_RGBA,a.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[n.BC1_RGB,a.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT]:[n.RGBA32,a.Ab.RGBA],p=t.hasMipmap?r:Math.min(1,r),v=[];for(let e=0;e<p;e++)v.push(new Uint8Array(c(e,m))),d(e,m,v[e]);return t.internalFormat=f,t.hasMipmap=v.length>1,t.samplingMode=t.hasMipmap?a.Cj.LINEAR_MIPMAP_LINEAR:a.Cj.LINEAR,t.width=o,t.height=l,new s.g(e,t,{type:"compressed",levels:v})}},74242:(e,t,r)=>{r.d(t,{D:()=>o});var i=r(33763);const o=new Map([[i.r.POSITION,0],[i.r.NORMAL,1],[i.r.NORMALCOMPRESSED,1],[i.r.UV0,2],[i.r.COLOR,3],[i.r.COLORFEATUREATTRIBUTE,3],[i.r.SIZE,4],[i.r.TANGENT,4],[i.r.CENTEROFFSETANDDISTANCE,5],[i.r.SYMBOLCOLOR,5],[i.r.FEATUREATTRIBUTE,6],[i.r.INSTANCEFEATUREATTRIBUTE,6],[i.r.INSTANCECOLOR,7],[i.r.OBJECTANDLAYERIDCOLOR,7],[i.r.INSTANCEOBJECTANDLAYERIDCOLOR,7],[i.r.INSTANCEMODEL,8],[i.r.INSTANCEMODELNORMAL,12],[i.r.INSTANCEMODELORIGINHI,11],[i.r.INSTANCEMODELORIGINLO,15]])},76687:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(10875);class o{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return i.Am.LOADED}}},71678:(e,t,r)=>{r.d(t,{N:()=>c,m:()=>l});var i=r(57725),o=r(37623),n=r(41014),a=r(10875),s=r(76687);class l extends s.A{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.Gz)(this._texture),this._textureNormal=(0,i.Gz)(this._textureNormal),this._textureEmissive=(0,i.Gz)(this._textureEmissive),this._textureOcclusion=(0,i.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Am.LOADED:a.Am.LOADING}get textureBindParameters(){return new c(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.Gz)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textureRepository.acquire(e);if((0,o.$X)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.Gz)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends n.Y{constructor(e=null,t=null,r=null,i=null,o=null,n,a){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=o,this.scale=n,this.normalTextureTransformMatrix=a}}},31272:(e,t,r)=>{r.d(t,{im:()=>m,m$:()=>i,qA:()=>f});var i,o,n=r(19913),a=r(41014),s=r(10558),l=r(10875),c=r(73411),d=r(61723),u=r(74242),h=r(73395);class m extends c.J{constructor(e,t){super(),this.type=d.X.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=u.D,this._pp0=(0,n.fA)(0,0,1),this._pp1=(0,n.fA)(0,0,0),this._parameters=(0,h.qu)(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,h.MB)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===l.ID.ON)&&0!=(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,t,r,i,o,n){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,o)}}s.H,(o=i||(i={}))[o.None=0]="None",o[o.Occlude=1]="Occlude",o[o.Transparent=2]="Transparent",o[o.OccludeAndTransparent=4]="OccludeAndTransparent",o[o.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",o[o.Opaque=16]="Opaque";class f extends a.Y{constructor(){super(...arguments),this.renderOccluded=i.Occlude,this.isDecoration=!1}}},8445:(e,t,r)=>{r.d(t,{AJ:()=>l,K_:()=>f,SE:()=>h,V0:()=>a,XO:()=>d,aB:()=>m,ez:()=>c,xt:()=>u});var i=r(7782),o=r(68716),n=r(15651);const a=(0,n.p3)(o.dn.SRC_ALPHA,o.dn.ONE,o.dn.ONE_MINUS_SRC_ALPHA,o.dn.ONE_MINUS_SRC_ALPHA),s=(0,n.ox)(o.dn.ONE,o.dn.ONE),l=(0,n.ox)(o.dn.ZERO,o.dn.ONE_MINUS_SRC_ALPHA);function c(e){return e===i.y.FrontFace?null:e===i.y.Alpha?l:s}function d(e){return e===i.y.FrontFace?n.kn:null}const u=5e5,h={factor:-1,units:-2};function m(e){return e?h:null}function f(e,t=o.MT.LESS){return e===i.y.NONE||e===i.y.FrontFace?t:o.MT.LEQUAL}},24441:(e,t,r)=>{r.d(t,{B:()=>n});var i=r(41785),o=r(63103);class n{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i.A({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,o.en)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},15449:(e,t,r)=>{var i;r.d(t,{N:()=>i}),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.ANTIALIASING=12]="ANTIALIASING",e[e.COMPOSITE=13]="COMPOSITE",e[e.BLIT=14]="BLIT",e[e.SSAO=15]="SSAO",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.SHADOW_HIGHLIGHT=17]="SHADOW_HIGHLIGHT",e[e.ENVIRONMENT_OPAQUE=18]="ENVIRONMENT_OPAQUE",e[e.ENVIRONMENT_TRANSPARENT=19]="ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=20]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=21]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=22]="HUD_MATERIAL",e[e.LABEL_MATERIAL=23]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=24]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=25]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=26]="DRAPED_MATERIAL",e[e.DRAPED_WATER=27]="DRAPED_WATER",e[e.VOXEL=28]="VOXEL",e[e.MAX_SLOTS=29]="MAX_SLOTS"}(i||(i={}))},28116:(e,t,r)=>{r.d(t,{I$:()=>u,a9:()=>d,m:()=>n,mK:()=>h,qh:()=>c,r8:()=>l,sf:()=>a,v0:()=>s});var i=r(10875),o=r(68716);const n={func:o.MT.LESS},a={func:o.MT.ALWAYS},s={mask:255},l={mask:0},c={function:{func:o.MT.ALWAYS,ref:i.dd.OutlineVisualElementMask,mask:i.dd.OutlineVisualElementMask},operation:{fail:o.eA.KEEP,zFail:o.eA.KEEP,zPass:o.eA.ZERO}},d={function:{func:o.MT.ALWAYS,ref:i.dd.OutlineVisualElementMask,mask:i.dd.OutlineVisualElementMask},operation:{fail:o.eA.KEEP,zFail:o.eA.KEEP,zPass:o.eA.REPLACE}},u={function:{func:o.MT.EQUAL,ref:i.dd.OutlineVisualElementMask,mask:i.dd.OutlineVisualElementMask},operation:{fail:o.eA.KEEP,zFail:o.eA.KEEP,zPass:o.eA.KEEP}},h={function:{func:o.MT.NOTEQUAL,ref:i.dd.OutlineVisualElementMask,mask:i.dd.OutlineVisualElementMask},operation:{fail:o.eA.KEEP,zFail:o.eA.KEEP,zPass:o.eA.KEEP}}},32573:(e,t,r)=>{r.d(t,{g:()=>O}),r(6273);var i=r(62991),o=r(57888),n=r(57725),a=r(37623),s=r(62088),l=r(19759),c=r(60938),d=r(25207),u=r(10875),h=r(82864),m=r(73411),f=r(61723),p=r(80861),v=r(68716),g=r(89958);const _=()=>p.A.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function x(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const T=x("DXT1"),b=x("DXT3"),y=x("DXT5");function S(e,t){const r=new Int32Array(e,0,31);if(542327876!==r[0])return _().error("Invalid magic number in DDS header"),null;if(!(4&r[20]))return _().error("Unsupported format, must contain a FourCC code"),null;const i=r[21];let o,n;switch(i){case T:o=8,n=v.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case b:o=16,n=v.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case y:o=16,n=v.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return _().error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[4],l=r[3];0==(3&s)&&0==(3&l)||(_().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;131072&r[2]&&!1!==t&&(a=Math.max(1,r[7]));let m=r[1]+4;const f=[];for(let t=0;t<a;++t)h=(s+3>>2)*(l+3>>2)*o,u=new Uint8Array(e,m,h),f.push(u),m+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:n,width:c,height:d}}var A,E,w=r(80605),C=r(26421),M=r(88416);class O extends m.J{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=f.X.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new o.A,this._parameters={...I,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,l.w8)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,l.DB)(e.src)||(0,l.w8)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new M.R;return t.wrapMode=this._parameters.wrap??v.pF.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?v.Cj.LINEAR_MIPMAP_LINEAR:v.Cj.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,s.mw)(e)||(0,s.mg)(e))return t.encoding===u.JS.KTX2_ENCODING?(0,h.JI)(e,!!t.mipmap):t.encoding===u.JS.BASIS_ENCODING?(0,h.Cr)(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?R(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new g.g(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,s.mw)(t)||(0,s.mg)(t))&&this._parameters.encoding===u.JS.DDS_ENCODING?this._loadFromDDSData(e,t):((0,s.mw)(t)||(0,s.mg)(t))&&this._parameters.encoding===u.JS.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,s.mw)(t)||(0,s.mg)(t))&&this._parameters.encoding===u.JS.BASIS_ENCODING?this._loadFromBasis(e,t):(0,s.mg)(t)?this._loadFromPixelData(e,t):(0,s.mw)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<A.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=function(e,t,r){const i=S(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:o,internalFormat:n,width:a,height:s}=i;return t.samplingMode=o.levels.length>1?v.Cj.LINEAR_MIPMAP_LINEAR:v.Cj.LINEAR,t.hasMipmap=o.levels.length>1,t.internalFormat=n,t.width=a,t.height=s,new g.g(e,t,o)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>(0,h.Vc)(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>(0,h.KV)(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,C.vA)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?v.Ab.LUMINANCE:3===this._parameters.components?v.Ab.RGB:v.Ab.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new g.g(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await(0,c.D)(t,{signal:r});return(0,a.Te)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,d.Sx)(t,t.src,!1,r);return(0,a.Te)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=A.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((o,s)=>{const l=()=>{t.removeEventListener("loadeddata",c),t.removeEventListener("error",d),(0,n.xt)(u)},c=()=>{t.readyState>=A.HAVE_CURRENT_DATA&&(l(),o(this._loadFromImage(e,t)))},d=e=>{l(),s(e||new i.A("Failed to load video"))};t.addEventListener("loadeddata",c),t.addEventListener("error",d);const u=(0,a.u7)(r,(()=>d((0,a.NK)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?(0,w.IR)(r,t):(0,w.vM)(r,t)}const i=R(r);this._parameters.width=i.width,this._parameters.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this._parameters.components?v.Ab.RGB:v.Ab.RGBA,o.width=i.width,o.height=i.height,this._glTexture=new g.g(e,o,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,n.WD)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function R(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}(E=A||(A={}))[E.HAVE_NOTHING=0]="HAVE_NOTHING",E[E.HAVE_METADATA=1]="HAVE_METADATA",E[E.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",E[E.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",E[E.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";const I={wrap:{s:v.pF.REPEAT,t:v.pF.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1}},7782:(e,t,r)=>{var i;r.d(t,{y:()=>i}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(i||(i={}))},84231:(e,t,r)=>{r.d(t,{MD:()=>s,cJ:()=>a,hs:()=>l,m0:()=>n});var i=r(4506);function o(e,t,r){const i=r.parameters;return c.scale=Math.min(i.divisor/(t-i.offset),1),c.factor=function(e){return Math.abs(e*e*e)}(e),c}function n(e,t){return(0,i.Cc)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function a(e,t,r,i){i.scale=function(e,t,r){const i=o(e,t,r);return i.minScaleFactor=0,n(1,i)}(e,t,r),i.factor=0,i.minScaleFactor=r.minScaleFactor}function s(e,t,r=[0,0]){const i=Math.min(Math.max(t.scale,t.minScaleFactor),1);return r[0]=e[0]*i,r[1]=e[1]*i,r}function l(e,t,r,i){return n(e,o(t,r,i))}r(84456),(0,i.kU)(10),(0,i.kU)(12),(0,i.kU)(70),(0,i.kU)(40);const c={scale:0,factor:0,minScaleFactor:0}},80605:(e,t,r)=>{r.d(t,{IR:()=>s,Mv:()=>n,uT:()=>a,vM:()=>l});var i=r(62991);const o=16;function n(e){return Math.ceil(e/o)*o}function a(e){return Math.floor(e/o)*o}function s(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?d(e):e;let i=e.width,o=e.height;do{i=Math.ceil(i/2),o=Math.ceil(o/2),r=i*o}while(r>1048576||null!=t&&(i>t||o>t));return c(e,i,o)}function l(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return c(e,Math.round(e.width*i),Math.round(e.height*i))}function c(e,t,r){if(e instanceof ImageData)return c(d(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function d(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new i.A("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}},72559:(e,t,r)=>{r.d(t,{dg:()=>h,ou:()=>p});var i=r(82541),o=r(79441),n=r(25336),a=r(26110),s=r(80347),l=r(19913),c=r(69891),d=r(84456),u=r(45506);class h{constructor(){this._transform=(0,a.vt)(),this._transformInverse=new m({value:this._transform},n.B8,a.vt),this._transformInverseTranspose=new m(this._transformInverse,n.mg,a.vt),this._transformTranspose=new m({value:this._transform},n.mg,a.vt),this._transformInverseRotation=new m({value:this._transform},i.dR,o.vt)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(e){(0,n.C)(this._transform,e)}multiplyTransform(e){(0,n.lw)(this._transform,this._transform,e)}set(e){(0,n.C)(this._transform,e),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(e,t){this.setTransformMatrix(e),this.multiplyTransform(t),this._invalidateLazyTransforms()}}class m{constructor(e,t,r){this._original=e,this._update=t,this._dirty=!0,this._transform=r()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}const f=new class{constructor(e=0){this.offset=e,this.sphere=(0,c.d)(),this.tmpVertex=(0,l.vt)()}applyToVertex(e,t,r){const i=this.objectTransform.transform,o=(0,s.s)(v,e,t,r),n=(0,s.e)(o,o,i),a=this.offset/(0,s.l)(n);(0,s.q)(n,n,n,a);const l=this.objectTransform.inverse;return(0,s.e)(this.tmpVertex,n,l),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,s.l)(e);(0,s.q)(e,e,e,r);const i=this.offset/(0,s.l)(t);(0,s.q)(t,t,t,i)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,s.l)((0,c.g)(e)),r=this.offset/t;return(0,s.q)((0,c.g)(this.sphere),(0,c.g)(e),(0,c.g)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};function p(e){return null!=e?(f.offset=e,f):null}new class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,l.vt)(),this._tmpMbs=(0,c.d)(),this._tmpObb=new u.ab,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,s.l)(e)}applyToVertex(e,t,r){const i=(0,s.s)(v,e,t,r),o=(0,s.s)(g,e,t,r+this.componentLocalOriginLength),n=this._totalOffset/(0,s.l)(o);return(0,s.q)(this._tmpVertex,i,o,n),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],i=e[1],o=e[2]+t,n=e[3],a=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(i),d=Math.abs(o),u=Math.abs(n),h=Math.abs(a),m=Math.abs(s),f=.5*(1+Math.sign(r*n))*Math.min(l,u),p=.5*(1+Math.sign(i*a))*Math.min(c,h),v=.5*(1+Math.sign(o*s))*Math.min(d,m),g=Math.max(l,u),_=Math.max(c,h),x=Math.max(d,m),T=Math.sqrt(f*f+p*p+v*v),b=Math.sign(l+r),y=Math.sign(c+i),S=Math.sign(d+o),A=Math.sign(u+n),E=Math.sign(h+a),w=Math.sign(m+s),C=this._totalOffset;if(T<C)return e[0]-=(1-b)*C,e[1]-=(1-y)*C,e[2]-=(1-S)*C,e[3]+=A*C,e[4]+=E*C,e[5]+=w*C,e;const M=C/Math.sqrt(g*g+_*_+x*x),O=C/T,R=O-M,I=-R;return e[0]+=r*(b*I+O),e[1]+=i*(y*I+O),e[2]+=o*(S*I+O),e[3]+=n*(A*R+M),e[4]+=a*(E*R+M),e[5]+=s*(w*R+M),e}applyToMbs(e){const t=(0,s.l)((0,c.g)(e)),r=this._totalOffset/t;return(0,s.q)((0,c.g)(this._tmpMbs),(0,c.g)(e),(0,c.g)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,u.gm)(e,this._totalOffset,this._totalOffset,d.RT.Global,this._tmpObb),this._tmpObb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,l.vt)()}applyToVertex(e,t,r){const i=(0,s.s)(v,e,t,r),o=(0,s.g)(g,i,this.localOrigin),n=this.offset/(0,s.l)(o);return(0,s.q)(this.tmpVertex,i,o,n),this.tmpVertex}applyToAabb(e){const t=_,r=x,i=T;for(let o=0;o<3;++o)t[o]=e[0+o]+this.localOrigin[o],r[o]=e[3+o]+this.localOrigin[o],i[o]=t[o];const o=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=o[t],e[t+3]=o[t];const n=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let o=0;o<3;++o)i[o]=0==(e&1<<o)?t[o]:r[o];n(i)}let a=0;for(let e=0;e<3;++e)t[e]*r[e]<0&&(a|=1<<e);if(0!==a&&7!==a)for(let e=0;e<8;++e)if(0==(a&e)){for(let o=0;o<3;++o)i[o]=0!=(a&1<<o)?0:0!=(e&1<<o)?t[o]:r[o];n(i)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const v=(0,l.vt)(),g=(0,l.vt)(),_=(0,l.vt)(),x=(0,l.vt)(),T=(0,l.vt)()},50162:(e,t,r)=>{r.d(t,{$p:()=>o,Qx:()=>a,_y:()=>n,e_:()=>s});var i=r(19913);class o{constructor(e=(0,i.vt)()){this.intensity=e}}class n{constructor(e=(0,i.vt)(),t=(0,i.fA)(.57735,.57735,.57735)){this.intensity=e,this.direction=t}}class a{constructor(e=(0,i.vt)(),t=(0,i.fA)(.57735,.57735,.57735),r=!0,o=1,n=1){this.intensity=e,this.direction=t,this.castShadows=r,this.specularStrength=o,this.environmentStrength=n}}class s{constructor(){this.r=[0],this.g=[0],this.b=[0]}}},4477:(e,t,r)=>{r.d(t,{TA:()=>E,uH:()=>A});var i=r(4506),o=r(80347),n=r(19913),a=r(50162);function s(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t[i];return r}function l(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]*t;return r}function c(e,t,r){(r=r||e).length=e.length;for(let i=0;i<e.length;i++)r[i]=e[i]+t[i];return r}function d(e){return(e+1)*(e+1)}function u(e,t,r){const i=e[0],o=e[1],n=e[2],a=r||[];return a.length=d(t),t>=0&&(a[0]=.28209479177),t>=1&&(a[1]=.4886025119*i,a[2]=.4886025119*n,a[3]=.4886025119*o),t>=2&&(a[4]=1.09254843059*i*o,a[5]=1.09254843059*o*n,a[6]=.31539156525*(3*n*n-1),a[7]=1.09254843059*i*n,a[8]=.54627421529*(i*i-o*o)),a}function h(e,t){const r=d(e),i=t||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let e=0;e<r;e++)i.r[e]=i.g[e]=i.b[e]=0;return i}function m(e,t){const r=function(e){return(0,i.qE)(Math.floor(Math.sqrt(e)-1),0,2)}(t.r.length);for(const i of e)(0,o.E)(T,i.direction),u(T,r,_),s(_,b),l(_,i.intensity[0],x),c(t.r,x),l(_,i.intensity[1],x),c(t.g,x),l(_,i.intensity[2],x),c(t.b,x);return t}function f(e,t){u(T,0,_);for(const r of e)t.r[0]+=_[0]*b[0]*r.intensity[0]*4*Math.PI,t.g[0]+=_[0]*b[0]*r.intensity[1]*4*Math.PI,t.b[0]+=_[0]*b[0]*r.intensity[2]*4*Math.PI;return t}const p=[],v=[],g=[],_=[0],x=[0],T=(0,n.vt)(),b=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class y{constructor(){this.color=(0,n.vt)(),this.intensity=1}}class S{constructor(){this.direction=(0,n.vt)(),this.ambient=new y,this.diffuse=new y}}const A=.4;class E{constructor(){this._shOrder=2,this._legacy=new S,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new a.e_,this._mainLight=new a.Qx((0,n.vt)(),(0,n.fA)(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){(function(e,t,r,i){h(t,i),(0,o.s)(r.intensity,0,0,0);let n=!1;const s=p,l=v,d=g;s.length=0,l.length=0,d.length=0;for(const t of e)t instanceof a.Qx&&!n?((0,o.c)(r.direction,t.direction),(0,o.c)(r.intensity,t.intensity),r.specularStrength=t.specularStrength,r.environmentStrength=t.environmentStrength,r.castShadows=t.castShadows,n=!0):t instanceof a.Qx||t instanceof a._y?s.push(t):t instanceof a.$p?l.push(t):t instanceof a.e_&&d.push(t);m(s,i),f(l,i);for(const e of d)c(i.r,e.r),c(i.g,e.g),c(i.b,e.b)})(e,this._shOrder,this._mainLight,this._sphericalHarmonics),(0,o.c)(this._legacy.direction,this._mainLight.direction);const t=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*t,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*t,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*t,(0,o.h)(this._legacy.diffuse.color,this._mainLight.intensity,t),(0,o.c)(w,this._legacy.diffuse.color),(0,o.h)(w,w,A*this.globalFactor),(0,o.g)(this._legacy.ambient.color,this._legacy.ambient.color,w)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),(0,o.c)(this._mainLight.direction,e.mainLight.direction),(0,o.c)(this._mainLight.intensity,e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,t,r){if((0,o.k)(this._mainLight.intensity,e.mainLight.intensity,t.mainLight.intensity,r),this._mainLight.environmentStrength=(0,i.Cc)(e.mainLight.environmentStrength,t.mainLight.environmentStrength,r),this._mainLight.specularStrength=(0,i.Cc)(e.mainLight.specularStrength,t.mainLight.specularStrength,r),(0,o.c)(this._mainLight.direction,t.mainLight.direction),this._mainLight.castShadows=t.mainLight.castShadows,this.globalFactor=(0,i.Cc)(e.globalFactor,t.globalFactor,r),this.noonFactor=(0,i.Cc)(e.noonFactor,t.noonFactor,r),e.sh.r.length===t.sh.r.length)for(let o=0;o<t.sh.r.length;o++)this._sphericalHarmonics.r[o]=(0,i.Cc)(e.sh.r[o],t.sh.r[o],r),this._sphericalHarmonics.g[o]=(0,i.Cc)(e.sh.g[o],t.sh.g[o],r),this._sphericalHarmonics.b[o]=(0,i.Cc)(e.sh.b[o],t.sh.b[o],r);else for(let e=0;e<t.sh.r.length;e++)this._sphericalHarmonics.r[e]=t.sh.r[e],this._sphericalHarmonics.g[e]=t.sh.g[e],this._sphericalHarmonics.b[e]=t.sh.b[e]}}const w=(0,n.vt)()},66356:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(33763),o=r(29290);class n{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(i.r.POSITION).indices.length}write(e,t,r,i,n){(0,o.SA)(r,this.vertexBufferLayout,e,t,i,n)}}},14103:(e,t,r)=>{r.d(t,{$U:()=>I});var i=r(6273),o=r(80347),n=r(19913),a=r(84456),s=r(7724),l=r(77788),c=r(3525),d=r(23605),u=r(35212),h=r(10875),m=r(71678),f=r(31272),p=r(8445),v=r(15449),g=r(33763),_=r(72559),x=r(66356),T=r(73395),b=r(83244),y=r(82392),S=r(51229),A=r(51662),E=r(7782),w=r(18693);class C extends w.E{constructor(){super(...arguments),this.output=l.V.Color,this.alphaDiscardMode=h.sf.Opaque,this.doubleSidedMode=d.W.None,this.pbrMode=u.A9.Disabled,this.cullFace=h.s2.None,this.transparencyPassType=E.y.NONE,this.normalType=c.W.Attribute,this.textureCoordinateType=S.q.None,this.customDepthTest=h.it.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,y._)([(0,A.W)({count:l.V.COUNT})],C.prototype,"output",void 0),(0,y._)([(0,A.W)({count:h.sf.COUNT})],C.prototype,"alphaDiscardMode",void 0),(0,y._)([(0,A.W)({count:d.W.COUNT})],C.prototype,"doubleSidedMode",void 0),(0,y._)([(0,A.W)({count:u.A9.COUNT})],C.prototype,"pbrMode",void 0),(0,y._)([(0,A.W)({count:h.s2.COUNT})],C.prototype,"cullFace",void 0),(0,y._)([(0,A.W)({count:E.y.COUNT})],C.prototype,"transparencyPassType",void 0),(0,y._)([(0,A.W)({count:c.W.COUNT})],C.prototype,"normalType",void 0),(0,y._)([(0,A.W)({count:S.q.COUNT})],C.prototype,"textureCoordinateType",void 0),(0,y._)([(0,A.W)({count:h.it.COUNT})],C.prototype,"customDepthTest",void 0),(0,y._)([(0,A.W)()],C.prototype,"spherical",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasVertexColors",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasSymbolColors",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasVerticalOffset",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasSlicePlane",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasSliceHighlight",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasColorTexture",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasMetallicRoughnessTexture",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasEmissionTexture",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasOcclusionTexture",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasNormalTexture",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasScreenSizePerspective",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasVertexTangents",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasOccludees",void 0),(0,y._)([(0,A.W)()],C.prototype,"multipassEnabled",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasModelTransformation",void 0),(0,y._)([(0,A.W)()],C.prototype,"offsetBackfaces",void 0),(0,y._)([(0,A.W)()],C.prototype,"vvSize",void 0),(0,y._)([(0,A.W)()],C.prototype,"vvColor",void 0),(0,y._)([(0,A.W)()],C.prototype,"receiveShadows",void 0),(0,y._)([(0,A.W)()],C.prototype,"receiveAmbientOcclusion",void 0),(0,y._)([(0,A.W)()],C.prototype,"textureAlphaPremultiplied",void 0),(0,y._)([(0,A.W)()],C.prototype,"instanced",void 0),(0,y._)([(0,A.W)()],C.prototype,"instancedColor",void 0),(0,y._)([(0,A.W)()],C.prototype,"objectAndLayerIdColorInstanced",void 0),(0,y._)([(0,A.W)()],C.prototype,"instancedDoublePrecision",void 0),(0,y._)([(0,A.W)()],C.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,y._)([(0,A.W)()],C.prototype,"writeDepth",void 0),(0,y._)([(0,A.W)()],C.prototype,"transparent",void 0),(0,y._)([(0,A.W)()],C.prototype,"enableOffset",void 0),(0,y._)([(0,A.W)()],C.prototype,"cullAboveGround",void 0),(0,y._)([(0,A.W)()],C.prototype,"snowCover",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasColorTextureTransform",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasEmissionTextureTransform",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasNormalTextureTransform",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasOcclusionTextureTransform",void 0),(0,y._)([(0,A.W)()],C.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,y._)([(0,A.W)({constValue:!1})],C.prototype,"occlusionPass",void 0),(0,y._)([(0,A.W)({constValue:!0})],C.prototype,"hasVvInstancing",void 0),(0,y._)([(0,A.W)({constValue:!1})],C.prototype,"useCustomDTRExponentForWater",void 0),(0,y._)([(0,A.W)({constValue:!1})],C.prototype,"supportsTextureAtlas",void 0),(0,y._)([(0,A.W)({constValue:!0})],C.prototype,"useFillLights",void 0);var M=r(21979),O=r(38716);class R extends b.R5{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=c.W.Attribute,t.doubleSidedMode=d.W.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,R.shader)}}R.shader=new M.$(O.R,(()=>r.e(6252).then(r.bind(r,56252))));class I extends f.im{constructor(e){super(e,L),this.supportsEdges=!0,this.produces=new Map([[v.N.OPAQUE_MATERIAL,e=>((0,l.XY)(e)||(0,l.PJ)(e))&&!this.parameters.transparent],[v.N.TRANSPARENT_MATERIAL,e=>((0,l.XY)(e)||(0,l.PJ)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[v.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>((0,l.XY)(e)||(0,l.PJ)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new C,this._vertexBufferLayout=function(e){const t=(0,s.BP)().vec3f(g.r.POSITION);return e.normalType===c.W.Compressed?t.vec2i16(g.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(g.r.NORMAL),e.hasVertexTangents&&t.vec4f(g.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(g.r.UV0),e.hasVertexColors&&t.vec4u8(g.r.COLOR),e.hasSymbolColors&&t.vec4u8(g.r.SYMBOLCOLOR),(0,i.A)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(g.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==l.V.Shadow&&e!==l.V.ShadowExcludeHighlight&&e!==l.V.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:o}=e,n="replace"===e.colorMixMode,a=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||o||i;return r&&l?n||a:r?n?s:a:l?n||a:n?s:a}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?h.s2.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==l.V.Color&&e!==l.V.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=d.W.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?d.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?d.W.WindingOrder:d.W.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?u.A9.Schematic:u.A9.Normal:u.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<p.xt,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,n,s){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,o.s)(V,t[12],t[13],t[14]);let s=null;switch(r.viewingMode){case a.RT.Global:s=(0,o.n)(z,V);break;case a.RT.Local:s=(0,o.c)(z,D)}let l=0;const c=(0,o.f)(G,V,e.eye),d=(0,o.l)(c),u=(0,o.h)(c,c,1/d);let h=null;this.parameters.screenSizePerspective&&(h=(0,o.j)(s,u)),l+=(0,T.kE)(e,d,this.parameters.verticalOffset,h??0,this.parameters.screenSizePerspective),(0,o.h)(s,s,l),(0,o.t)(B,s,r.transform.inverseRotation),i=(0,o.f)(P,i,B),n=(0,o.f)(F,n,B)}(0,T.Uy)(e,r,i,n,(0,_.ou)(r.verticalOffset),s)}createGLMaterial(e){return new H(e)}createBufferWriter(){return new x.Z(this._vertexBufferLayout)}}class H extends m.m{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==l.V.Color&&this._output!==l.V.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,o.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?R:b.R5,e)}}class N extends b.uD{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const L=new N,P=(0,n.vt)(),F=(0,n.vt)(),D=(0,n.fA)(0,0,1),z=(0,n.vt)(),B=(0,n.vt)(),V=(0,n.vt)(),G=(0,n.vt)()},18693:(e,t,r)=>{r.d(t,{E:()=>s});var i=r(82392),o=r(32728),n=r(34088),a=r(51662);class s extends o.nW{}(0,i._)([(0,a.W)({constValue:!0})],s.prototype,"hasSliceHighlight",void 0),(0,i._)([(0,a.W)({constValue:!1})],s.prototype,"hasSliceInVertexProgram",void 0),(0,i._)([(0,a.W)({constValue:n.c.Pass})],s.prototype,"pbrTextureBindType",void 0)},34383:(e,t,r)=>{r.d(t,{S:()=>n,p:()=>a});var i=r(15061),o=r(31272);class n extends i.Gd{constructor(){super(...arguments),this.renderOccluded=o.m$.Occlude,this.isDecoration=!1}}const a=8},73395:(e,t,r)=>{r.d(t,{MB:()=>A,Um:()=>w,Uy:()=>m,Wb:()=>b,Z$:()=>g,kE:()=>y,qu:()=>S});var i=r(3223),o=r(4506),n=r(80347),a=r(19913),s=r(46373),l=r(61723),c=r(84231),d=r(26421),u=r(33763);const h=(0,s.vt)();function m(e,t,r,i,o,n){if(e.visible)if(e.boundingInfo){(0,d.vA)(e.type===l.X.Mesh);const a=t.tolerance;p(e.boundingInfo,r,i,a,o,n)}else{const t=e.attributes.get(u.r.POSITION),a=t.indices;g(r,i,0,a.length/3,a,t,void 0,o,n)}}const f=(0,a.vt)();function p(e,t,r,i,o,a){if(null==e)return;const l=function(e,t,r){return(0,n.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,f);if((0,s.Ne)(h,e.bbMin),(0,s.vI)(h,e.bbMax),null!=o&&o.applyToAabb(h),b(h,t,l,i)){const{primitiveIndices:n,position:s}=e,l=n?n.length:s.indices.length/3;if(l>C){const n=e.getChildren();if(void 0!==n){for(const e of n)p(e,t,r,i,o,a);return}}g(t,r,0,l,s.indices,s,n,o,a)}}const v=(0,a.vt)();function g(e,t,r,i,o,n,a,s,l){if(a)return function(e,t,r,i,o,n,a,s,l){const{data:c,stride:d}=n,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,g=t[2]-m;for(let e=r;e<i;++e){const t=a[e];let r=3*t,i=d*o[r++],n=c[i++],_=c[i++],x=c[i];i=d*o[r++];let b=c[i++],y=c[i++],S=c[i];i=d*o[r];let A=c[i++],E=c[i++],w=c[i];null!=s&&([n,_,x]=s.applyToVertex(n,_,x,e),[b,y,S]=s.applyToVertex(b,y,S,e),[A,E,w]=s.applyToVertex(A,E,w,e));const C=b-n,M=y-_,O=S-x,R=A-n,I=E-_,H=w-x,N=p*H-I*g,L=g*R-H*f,P=f*I-R*p,F=C*N+M*L+O*P;if(Math.abs(F)<=Number.EPSILON)continue;const D=u-n,z=h-_,B=m-x,V=D*N+z*L+B*P;if(F>0){if(V<0||V>F)continue}else if(V>0||V<F)continue;const G=z*O-M*B,W=B*C-O*D,U=D*M-C*z,j=f*G+p*W+g*U;if(F>0){if(j<0||V+j>F)continue}else if(j>0||V+j<F)continue;const k=(R*G+I*W+H*U)/F;k>=0&&l(k,T(C,M,O,R,I,H,v),t,!1)}}(e,t,r,i,o,n,a,s,l);const{data:c,stride:d}=n,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,g=t[2]-m;for(let e=r,t=3*r;e<i;++e){let r=d*o[t++],i=c[r++],n=c[r++],a=c[r];r=d*o[t++];let _=c[r++],x=c[r++],b=c[r];r=d*o[t++];let y=c[r++],S=c[r++],A=c[r];null!=s&&([i,n,a]=s.applyToVertex(i,n,a,e),[_,x,b]=s.applyToVertex(_,x,b,e),[y,S,A]=s.applyToVertex(y,S,A,e));const E=_-i,w=x-n,C=b-a,M=y-i,O=S-n,R=A-a,I=p*R-O*g,H=g*M-R*f,N=f*O-M*p,L=E*I+w*H+C*N;if(Math.abs(L)<=Number.EPSILON)continue;const P=u-i,F=h-n,D=m-a,z=P*I+F*H+D*N;if(L>0){if(z<0||z>L)continue}else if(z>0||z<L)continue;const B=F*C-w*D,V=D*E-C*P,G=P*w-E*F,W=f*B+p*V+g*G;if(L>0){if(W<0||z+W>L)continue}else if(W>0||z+W<L)continue;const U=(M*B+O*V+R*G)/L;U>=0&&l(U,T(E,w,C,M,O,R,v),e,!1)}}const _=(0,a.vt)(),x=(0,a.vt)();function T(e,t,r,i,o,a,s){return(0,n.s)(_,e,t,r),(0,n.s)(x,i,o,a),(0,n.b)(s,_,x),(0,n.n)(s,s),s}function b(e,t,r,i){return function(e,t,r,i,o){const n=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(n,a),l=Math.max(n,a);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<1/0)}(e,t,r,i)}function y(e,t,r,i,n){let a=(r.screenLength||0)*e.pixelRatio;null!=n&&(a=(0,c.hs)(a,i,t,n));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,o.qE)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function S(e,t){const r=t?S(t):{};for(const t in e){let i=e[t];i?.forEach&&(i=E(i)),null==i&&t in r||(r[t]=i)}return r}function A(e,t){let r=!1;for(const o in t){const n=t[o];void 0!==n&&(Array.isArray(n)?null===e[o]?(e[o]=n.slice(),r=!0):(0,i.yo)(e[o],n)&&(r=!0):e[o]!==n&&(r=!0,e[o]=n))}return r}function E(e){const t=[];return e.forEach((e=>t.push(e))),t}const w={multiply:1,ignore:2,replace:3,tint:4},C=1e3},29290:(e,t,r)=>{r.d(t,{Hk:()=>h,Pq:()=>u,SA:()=>v,Ut:()=>d,p1:()=>m,tH:()=>p,tb:()=>f,uO:()=>s});var i=r(25336),o=r(40041),n=r(26421),a=r(33763);function s(e,t,r,i=1){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,l=n.length;if(r*=s,1===i)for(let e=0;e<l;++e)a[r]=o[n[e]],r+=s;else for(let e=0;e<l;++e){const t=o[n[e]];for(let e=0;e<i;e++)a[r]=t,r+=s}}function l(e,t,r){const{data:i,indices:o}=e,n=t.typedBuffer,a=t.typedBufferStride,s=o.length;r*=a;for(let e=0;e<s;++e){const t=2*o[e];n[r]=i[t],n[r+1]=i[t+1],r+=a}}function c(e,t,r,i){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,l=n.length;if(r*=s,null==i||1===i)for(let e=0;e<l;++e){const t=3*n[e];a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],r+=s}else for(let e=0;e<l;++e){const t=3*n[e];for(let e=0;e<i;++e)a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],r+=s}}function d(e,t,r,i=1){const{data:o,indices:n}=e,a=t.typedBuffer,s=t.typedBufferStride,l=n.length;if(r*=s,1===i)for(let e=0;e<l;++e){const t=4*n[e];a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],a[r+3]=o[t+3],r+=s}else for(let e=0;e<l;++e){const t=4*n[e];for(let e=0;e<i;++e)a[r]=o[t],a[r+1]=o[t+1],a[r+2]=o[t+2],a[r+3]=o[t+3],r+=s}}function u(e,t,r){const i=e.typedBuffer,o=e.typedBufferStride;t*=o;for(let e=0;e<r;++e)i[t]=0,i[t+1]=0,i[t+2]=0,i[t+3]=0,t+=o}function h(e,t,r,o,n=1){if(!t)return void c(e,r,o,n);const{data:a,indices:s}=e,l=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=t[0],m=t[1],f=t[2],p=t[4],v=t[5],g=t[6],_=t[8],x=t[9],T=t[10],b=t[12],y=t[13],S=t[14];o*=d;let A=0,E=0,w=0;const C=(0,i.tZ)(t)?e=>{A=a[e]+b,E=a[e+1]+y,w=a[e+2]+S}:e=>{const t=a[e],r=a[e+1],i=a[e+2];A=h*t+p*r+_*i+b,E=m*t+v*r+x*i+y,w=f*t+g*r+T*i+S};if(1===n)for(let e=0;e<u;++e)C(3*s[e]),l[o]=A,l[o+1]=E,l[o+2]=w,o+=d;else for(let e=0;e<u;++e){C(3*s[e]);for(let e=0;e<n;++e)l[o]=A,l[o+1]=E,l[o+2]=w,o+=d}}function m(e,t,r,o,n=1){if(!t)return void c(e,r,o,n);const{data:a,indices:s}=e,l=t,d=r.typedBuffer,u=r.typedBufferStride,h=s.length,m=l[0],f=l[1],p=l[2],v=l[4],g=l[5],_=l[6],x=l[8],T=l[9],b=l[10],y=!(0,i.ut)(l),S=1e-6,A=1-S;o*=u;let E=0,w=0,C=0;const M=(0,i.tZ)(l)?e=>{E=a[e],w=a[e+1],C=a[e+2]}:e=>{const t=a[e],r=a[e+1],i=a[e+2];E=m*t+v*r+x*i,w=f*t+g*r+T*i,C=p*t+_*r+b*i};if(1===n)if(y)for(let e=0;e<h;++e){M(3*s[e]);const t=E*E+w*w+C*C;if(t<A&&t>S){const e=1/Math.sqrt(t);d[o]=E*e,d[o+1]=w*e,d[o+2]=C*e}else d[o]=E,d[o+1]=w,d[o+2]=C;o+=u}else for(let e=0;e<h;++e)M(3*s[e]),d[o]=E,d[o+1]=w,d[o+2]=C,o+=u;else for(let e=0;e<h;++e){if(M(3*s[e]),y){const e=E*E+w*w+C*C;if(e<A&&e>S){const t=1/Math.sqrt(e);E*=t,w*=t,C*=t}}for(let e=0;e<n;++e)d[o]=E,d[o+1]=w,d[o+2]=C,o+=u}}function f(e,t,r,i,o=1){const{data:n,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length;if(i*=l,t!==n.length||4!==t)if(1!==o)if(4!==t)for(let e=0;e<c;++e){const t=3*a[e];for(let e=0;e<o;++e)s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=255,i+=l}else for(let e=0;e<c;++e){const t=4*a[e];for(let e=0;e<o;++e)s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=n[t+3],i+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*a[e];s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=n[t+3],i+=l}return}for(let e=0;e<c;++e){const t=3*a[e];s[i]=n[t],s[i+1]=n[t+1],s[i+2]=n[t+2],s[i+3]=255,i+=l}}else{s[i]=n[0],s[i+1]=n[1],s[i+2]=n[2],s[i+3]=n[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,a=e[i/=4];i+=t;const d=c*o;for(let r=1;r<d;++r)e[i]=a,i+=t}}function p(e,t,r,i,o=1){const n=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===o)for(let t=0;t<r;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<o;++t)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2],n[i+3]=e[3],i+=a}function v(e,t,r,i,n,s){for(const l of t.fields.keys()){const t=e.attributes.get(l),c=t?.indices;if(t&&c)g(l,t,r,i,n,s);else if(l===a.r.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(a.r.POSITION)?.indices;if(t){const r=t.length,i=n.getField(l,o.XP);p(e.objectAndLayerIdColor,i,r,s)}}}}function g(e,t,r,s,c,u){switch(e){case a.r.POSITION:{(0,n.vA)(3===t.size);const i=c.getField(e,o.xs);(0,n.vA)(!!i,`No buffer view for ${e}`),i&&h(t,r,i,u);break}case a.r.NORMAL:{(0,n.vA)(3===t.size);const r=c.getField(e,o.xs);(0,n.vA)(!!r,`No buffer view for ${e}`),r&&m(t,s,r,u);break}case a.r.NORMALCOMPRESSED:{(0,n.vA)(2===t.size);const r=c.getField(e,o.mJ);(0,n.vA)(!!r,`No buffer view for ${e}`),r&&l(t,r,u);break}case a.r.UV0:{(0,n.vA)(2===t.size);const r=c.getField(e,o.gH);(0,n.vA)(!!r,`No buffer view for ${e}`),r&&l(t,r,u);break}case a.r.COLOR:case a.r.SYMBOLCOLOR:{const r=c.getField(e,o.XP);(0,n.vA)(!!r,`No buffer view for ${e}`),(0,n.vA)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||f(t,t.size,r,u);break}case a.r.COLORFEATUREATTRIBUTE:{const r=c.getField(e,o.Y$);(0,n.vA)(!!r,`No buffer view for ${e}`),(0,n.vA)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:i,indices:o}=e,n=t.typedBuffer,a=t.typedBufferStride,s=o.length,l=i[0];r*=a;for(let e=0;e<s;++e)n[r]=l,r+=a}(t,r,u);break}case a.r.TANGENT:{(0,n.vA)(4===t.size);const r=c.getField(e,o.Eq);(0,n.vA)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,o,n=1){if(!t)return void d(e,r,o,n);const{data:a,indices:s}=e,l=t,c=r.typedBuffer,u=r.typedBufferStride,h=s.length,m=l[0],f=l[1],p=l[2],v=l[4],g=l[5],_=l[6],x=l[8],T=l[9],b=l[10],y=!(0,i.ut)(l),S=1e-6,A=1-S;if(o*=u,1===n)for(let e=0;e<h;++e){const t=4*s[e],r=a[t],i=a[t+1],n=a[t+2],l=a[t+3];let d=m*r+v*i+x*n,h=f*r+g*i+T*n,E=p*r+_*i+b*n;if(y){const e=d*d+h*h+E*E;if(e<A&&e>S){const t=1/Math.sqrt(e);d*=t,h*=t,E*=t}}c[o]=d,c[o+1]=h,c[o+2]=E,c[o+3]=l,o+=u}else for(let e=0;e<h;++e){const t=4*s[e],r=a[t],i=a[t+1],l=a[t+2],d=a[t+3];let h=m*r+v*i+x*l,E=f*r+g*i+T*l,w=p*r+_*i+b*l;if(y){const e=h*h+E*E+w*w;if(e<A&&e>S){const t=1/Math.sqrt(e);h*=t,E*=t,w*=t}}for(let e=0;e<n;++e)c[o]=h,c[o+1]=E,c[o+2]=w,c[o+3]=d,o+=u}}(t,s,r,u);break}case a.r.PROFILERIGHT:case a.r.PROFILEUP:case a.r.PROFILEVERTEXANDNORMAL:case a.r.FEATUREVALUE:{(0,n.vA)(4===t.size);const r=c.getField(e,o.Eq);(0,n.vA)(!!r,`No buffer view for ${e}`),r&&d(t,r,u)}}}},40327:(e,t,r)=>{r.d(t,{Jr:()=>n,Rk:()=>s,d_:()=>c,mX:()=>l,me:()=>a});var i=r(80347),o=r(19913);function n({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:n,emissiveTexture:a,emissiveFactor:s,occlusionTexture:l}){return null==e&&null==t&&null==a&&(null==s||(0,i.i)(s,o.uY))&&null==l&&(null==n||1===n)&&(null==r||1===r)}function a({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:n,emissiveTexture:a,emissiveFactor:s,occlusionTexture:l}){return null==e&&null==t&&null==a&&(null==s||(0,i.i)(s,o.uY))&&null==l&&(null==n||1===n)&&(null==r||1===r||0===r)}const s=[1,1,.5],l=[0,.6,.2],c=[0,1,.2]},83244:(e,t,r)=>{r.d(t,{R5:()=>w,V:()=>E,uD:()=>A});var i=r(19913),o=r(76982),n=r(84456),a=r(77788),s=r(3525),l=r(51229),c=r(83143),d=r(78546),u=r(21979),h=r(19362),m=r(10875),f=r(74242),p=r(31272),v=r(8445),g=r(24441),_=r(28116),x=r(7782),T=r(40327),b=r(12668),y=r(68716),S=r(15651);class A extends c.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,i.ci)(T.Rk),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=m.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,i.fA)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=s.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,i.fA)(.2,.2,.2),this.diffuse=(0,i.fA)(.8,.8,.8),this.externalColor=(0,o.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,i.vt)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=m.it.Less,this.textureAlphaMode=m.sf.Blend,this.textureAlphaCutoff=d.H,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=p.m$.Occlude,this.isDecoration=!1}}class E extends c.gy{constructor(){super(...arguments),this.origin=(0,i.vt)(),this.slicePlaneLocalOrigin=this.origin}}class w extends h.w{initializeConfiguration(e,t){t.spherical=e.viewingMode===n.RT.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?l.q.Default:l.q.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,w.shader)}_initializeProgram(e,t){return new g.B(e.rctx,t.get().build(this.configuration),f.D)}_convertDepthTestFunction(e){return e===m.it.Lequal?y.MT.LEQUAL:y.MT.LESS}_makePipeline(e,t){const r=this.configuration,i=e===x.y.NONE,o=e===x.y.FrontFace;return(0,S.Ey)({blending:r.output!==a.V.Color&&r.output!==a.V.Alpha||!r.transparent?null:i?v.V0:(0,v.ez)(e),culling:C(r)?(0,S.Xt)(r.cullFace):null,depthTest:{func:(0,v.K_)(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(i||o)&&r.writeDepth?S.kn:null,colorWrite:S.wE,stencilWrite:r.hasOccludees?_.v0:null,stencilTest:r.hasOccludees?t?_.a9:_.qh:null,polygonOffset:i||o?null:(0,v.aB)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function C(e){return e.cullFace!==m.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}w.shader=new u.$(b.D,(()=>r.e(1084).then(r.bind(r,41084))))},38236:(e,t,r)=>{var i,o;r.d(t,{N:()=>i,z:()=>o}),function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}(i||(i={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(o||(o={}))},15651:(e,t,r)=>{r.d(t,{Ey:()=>b,Ms:()=>U,Xt:()=>c,hG:()=>l,kn:()=>d,ox:()=>n,p3:()=>a,wE:()=>u});var i=r(10875),o=r(68716);function n(e,t,r=o.Tb.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,n=o.Tb.ADD,a=o.Tb.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:n,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:o.Y7.BACK,mode:o.Ac.CCW},l={face:o.Y7.FRONT,mode:o.Ac.CCW},c=e=>e===i.s2.Back?s:e===i.s2.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return A.intern(e)}function m(e){return w.intern(e)}function f(e){return M.intern(e)}function p(e){return R.intern(e)}function v(e){return H.intern(e)}function g(e){return L.intern(e)}function _(e){return F.intern(e)}function x(e){return z.intern(e)}function T(e){return V.intern(e)}function b(e){return W.intern(e)}class y{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function S(e){return"["+e.join(",")+"]"}const A=new y(E,(e=>({__tag:"Blending",...e})));function E(e){return e?S([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new y(C,(e=>({__tag:"Culling",...e})));function C(e){return e?S([e.face,e.mode]):null}const M=new y(O,(e=>({__tag:"PolygonOffset",...e})));function O(e){return e?S([e.factor,e.units]):null}const R=new y(I,(e=>({__tag:"DepthTest",...e})));function I(e){return e?S([e.func]):null}const H=new y(N,(e=>({__tag:"StencilTest",...e})));function N(e){return e?S([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const L=new y(P,(e=>({__tag:"DepthWrite",...e})));function P(e){return e?S([e.zNear,e.zFar]):null}const F=new y(D,(e=>({__tag:"ColorWrite",...e})));function D(e){return e?S([e.r,e.g,e.b,e.a]):null}const z=new y(B,(e=>({__tag:"StencilWrite",...e})));function B(e){return e?S([e.mask]):null}const V=new y(G,(e=>({__tag:"DrawBuffers",...e})));function G(e){return e?S(e.buffers):null}const W=new y((function(e){return e?S([E(e.blending),C(e.culling),O(e.polygonOffset),I(e.depthTest),N(e.stencilTest),P(e.depthWrite),D(e.colorWrite),B(e.stencilWrite),G(e.drawBuffers)]):null}),(e=>({blending:h(e.blending),culling:m(e.culling),polygonOffset:f(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:x(e.stencilWrite),drawBuffers:T(e.drawBuffers)})));class U{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);