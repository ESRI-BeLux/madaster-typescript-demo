/*! For license information please see 7053.js.LICENSE.txt */
"use strict";(self.webpackChunkmadaster_typescript=self.webpackChunkmadaster_typescript||[]).push([[7053],{7105:(e,t,n)=>{function r(e){return"Enter"===e||" "===e}n.d(t,{i:()=>r,n:()=>s});const s=["0","1","2","3","4","5","6","7","8","9"]},32282:(e,t,n)=>{n.d(t,{B:()=>c,a:()=>v,c:()=>C,d:()=>N,g:()=>y,i:()=>u,n:()=>A,p:()=>l,s:()=>f});var r=n(72006),s=n(7105),i=n(40313);const a=new RegExp("\\.(0+)?$"),o=new RegExp("0+$");class c{constructor(e){if(e instanceof c)return e;const[t,n]=function(e){const t=e.split(/[eE]/);if(1===t.length)return e;const n=+e;if(Number.isSafeInteger(n))return`${n}`;const r="-"===e.charAt(0),s=+t[1],i=t[0].split("."),o=(r?i[0].substring(1):i[0])||"",c=i[1]||"",u=s>0?`${o}${((e,t)=>{const n=t>e.length?`${e}${"0".repeat(t-e.length)}`:e;return`${n.slice(0,t)}.${n.slice(t)}`})(c,s)}`:`${((e,t)=>{const n=Math.abs(t)-e.length,r=n>0?`${"0".repeat(n)}${e}`:e;return`${r.slice(0,t)}.${r.slice(t)}`})(o,s)}${c}`;return`${r?"-":""}${"."===u.charAt(0)?"0":""}${u.replace(a,"").replace(g,"")}`}(e).split(".").concat("");this.value=BigInt(t+n.padEnd(c.DECIMALS,"0").slice(0,c.DECIMALS))+BigInt(c.ROUNDED&&n[c.DECIMALS]>="5"),this.isNegative="-"===e.charAt(0)}getIntegersAndDecimals(){const e=this.value.toString().replace("-","").padStart(c.DECIMALS+1,"0");return{integers:e.slice(0,-c.DECIMALS),decimals:e.slice(-c.DECIMALS).replace(o,"")}}toString(){const{integers:e,decimals:t}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${e}${t.length?"."+t:""}`}formatToParts(e){const{integers:t,decimals:n}=this.getIntegersAndDecimals(),r=e.numberFormatter.formatToParts(BigInt(t));return this.isNegative&&r.unshift({type:"minusSign",value:e.minusSign}),n.length&&(r.push({type:"decimal",value:e.decimal}),n.split("").forEach((e=>r.push({type:"fraction",value:e})))),r}format(e){const{integers:t,decimals:n}=this.getIntegersAndDecimals();return`${this.isNegative?e.minusSign:""}${e.numberFormatter.format(BigInt(t))}${n.length?`${e.decimal}${n.split("").map((t=>e.numberFormatter.format(Number(t)))).join("")}`:""}`}add(e){return c.fromBigInt(this.value+new c(e).value)}subtract(e){return c.fromBigInt(this.value-new c(e).value)}multiply(e){return c._divRound(this.value*new c(e).value,c.SHIFT)}divide(e){return c._divRound(this.value*c.SHIFT,new c(e).value)}}function u(e){return!(!e||isNaN(Number(e)))}function l(e){return e&&(t=e,s.n.some((e=>t.includes(e))))?b(e,(e=>{let t=!1;const n=e.split("").filter(((e,n)=>e.match(/\./g)&&!t?(t=!0,!0):!(!e.match(/\-/g)||0!==n)||s.n.includes(e))).join("");return u(n)?new c(n).toString():""})):"";var t}c.DECIMALS=100,c.ROUNDED=!0,c.SHIFT=BigInt("1"+"0".repeat(c.DECIMALS)),c._divRound=(e,t)=>c.fromBigInt(e/t+(c.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0))),c.fromBigInt=e=>Object.assign(Object.create(c.prototype),{value:e,isNegative:e<BigInt(0)});const g=/^([-0])0+(?=\d)/,m=/(?!^\.)\.$/,h=/(?!^-)-/g,p=/^-\b0\b\.?0*$/,d=/0*$/,f=e=>b(e,(e=>{const t=e.replace(h,"").replace(m,"").replace(g,"$1");return u(t)?p.test(t)?t:function(e){const t=e.split(".")[1],n=new c(e).toString(),[r,s]=n.split(".");return t&&s!==t?`${r}.${t}`:n}(t):e}));function b(e,t){if(!e)return e;const n=e.toLowerCase().indexOf("e")+1;return n?e.replace(/[eE]*$/g,"").substring(0,n).concat(e.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map(((e,n)=>t(1===n?e.replace(/\./g,""):e))).join("e").replace(/^e/,"1e"):t(e)}function v(e,t,n){const r=t.split(".")[1];if(r){const s=r.match(d)[0];if(s&&n.delocalize(e).length!==t.length&&-1===r.indexOf("e")){const t=n.decimal;return(e=e.includes(t)?e:`${e}${t}`).padEnd(e.length+s.length,n.localize("0"))}}return e}const $="en",w=["ar","bg","bs","ca","cs","da","de","el",$,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],_=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",$,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],E=["arab","arabext","latn"],I=e=>E.includes(e),S=(new Intl.NumberFormat).resolvedOptions().numberingSystem,O="arab"!==S&&I(S)?S:"latn";function y(e,t="cldr"){const n="cldr"===t?_:w;return e?n.includes(e)?e:"nb"===(e=e.toLowerCase())?"no":"t9n"===t&&"pt"===e?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,((e,t,n)=>`${t}-${n.toUpperCase()}`)),n.includes(e)||(e=e.split("-")[0])),"zh"===e?"zh-CN":n.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),$)):$}const F=new Set;function C(e){!function(e){e.effectiveLocale=function(e){return e.el.lang||(0,r.c)(e.el,"[lang]")?.lang||document.documentElement.lang||$}(e)}(e),0===F.size&&D?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),F.add(e)}function N(e){F.delete(e),0===F.size&&D.disconnect()}const D=(0,i.c)("mutation",(e=>{e.forEach((e=>{const t=e.target;F.forEach((e=>{if(!(0,r.b)(t,e.el))return;const n=(0,r.c)(e.el,"[lang]");if(!n)return void(e.effectiveLocale=$);const s=n.lang;e.effectiveLocale=n.hasAttribute("lang")&&""===s?$:s}))}))})),A=new class{constructor(){this.delocalize=e=>this._numberFormatOptions?b(e,(e=>e.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):e,this.localize=e=>this._numberFormatOptions?b(e,(e=>u(e.trim())?new c(e.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):e)):e}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(e){var t;if(e.locale=y(e?.locale),e.numberingSystem=(t=e?.numberingSystem,I(t)?t:O),!this._numberFormatOptions&&e.locale===$&&e.numberingSystem===O&&2===Object.keys(e).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(e))return;this._numberFormatOptions=e,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const n=new Map(this._digits.map(((e,t)=>[e,t]))),r=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-12345678.9);this._actualGroup=r.find((e=>"group"===e.type)).value,this._group=0===this._actualGroup.trim().length||" "==this._actualGroup?" ":this._actualGroup,this._decimal=r.find((e=>"decimal"===e.type)).value,this._minusSign=r.find((e=>"minusSign"===e.type)).value,this._getDigitIndex=e=>n.get(e)}}},40313:(e,t,n)=>{n.d(t,{c:()=>s});var r=n(62902);function s(e,t,n){if(!r.L2.isBrowser)return;const s=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new s(t,n)}},27053:(e,t,n)=>{n.d(t,{c:()=>g,d:()=>m,s:()=>c,u:()=>l});var r=n(62902),s=n(32282);const i={};function a(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function c(e){e.defaultMessages=await u(e,e.effectiveLocale),o(e)}async function u(e,t){if(!r.L2.isBrowser)return{};const{el:n}=e,o=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return i[n]||(i[n]=fetch((0,r.OX)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||a(),e.json()))).catch((()=>a()))),i[n]}((0,s.g)(t,"t9n"),o)}async function l(e,t){e.defaultMessages=await u(e,t),o(e)}function g(e){e.onMessagesChange=h}function m(e){e.onMessagesChange=void 0}function h(){o(this)}}}]);