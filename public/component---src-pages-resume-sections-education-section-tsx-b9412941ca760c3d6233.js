(self.webpackChunkdohyun_ko_github_io=self.webpackChunkdohyun_ko_github_io||[]).push([[620,896],{3514:function(e,t,n){"use strict";var r=n(4994);t.__esModule=!0,t.Link=void 0;var a=r(n(4634)),o=r(n(4893)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(6540)),i=n(3064),s=n(4794),c=n(3773),l=["language","to","onClick"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var f=u.default.forwardRef((function(e,t){var n=e.language,r=e.to,d=e.onClick,f=(0,o.default)(e,l),x=(0,u.useContext)(i.I18nextContext),p=n||x.language,g=""+function(e){return x.generateDefaultLanguagePage||e!==x.defaultLanguage?"/"+e:""}(p)+r;return u.default.createElement(s.Link,(0,a.default)({},f,{to:g,innerRef:t,hrefLang:p,onClick:function(e){n&&localStorage.setItem(c.LANGUAGE_KEY,n),d&&d(e)}}))}));t.Link=f},9384:function(e,t,n){"use strict";t.__esModule=!0;var r=n(2389);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var a=n(3064);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var o=n(2232);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||(t[e]=o[e]))}));var u=n(3514);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===u[e]||(t[e]=u[e]))}))},2232:function(e,t,n){"use strict";var r=n(4994);t.__esModule=!0,t.useI18next=void 0;var a=r(n(4634)),o=n(2389),u=n(6540),i=n(4794),s=n(3064),c=n(3773);t.useI18next=function(e,t){var n=(0,o.useTranslation)(e,t),r=n.i18n,l=n.t,d=n.ready,f=(0,u.useContext)(s.I18nextContext),x=f.routed,p=f.defaultLanguage,g=f.generateDefaultLanguagePage,h=function(e){return g||e!==p?"/"+e:""};return(0,a.default)({},f,{i18n:r,t:l,ready:d,navigate:function(e,t){var n=h(f.language),r=x?""+n+e:""+e;return(0,i.navigate)(r,t)},changeLanguage:function(e,t,n){var r=""+h(e)+(t||function(e){if(!x)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(c.LANGUAGE_KEY,e),(0,i.navigate)(r,n)}})}},4755:function(e,t,n){e.exports=n(9384)},7789:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(6540);n(4848);const a=(0,r.createContext)({windowWidth:0});var o=n(7671);var u=()=>(0,r.useContext)(a).windowWidth<o.P},4507:function(e,t,n){"use strict";var r=n(7789);t.A=()=>{const e=(0,r.A)();return{font:t=>`text-[${(e?3.5===t?2.375:Math.round(.8*t*16)/16:t).toString()}rem]`}}},1753:function(e,t,n){"use strict";n.r(t);var r=n(4507),a=n(856),o=n(4848);t.default=e=>{let{children:t}=e;const{font:n}=(0,r.A)();return(0,o.jsx)("h1",{className:(0,a.QP)("font-bold",`text-[${n(2.5)}]`),children:t})}},4919:function(e,t,n){"use strict";n.r(t);var r=n(4507),a=n(4755),o=n(6540),u=n(856),i=n(1753),s=n(4848);t.default=e=>{let{}=e;const{t:t,i18n:n}=(0,a.useTranslation)(),{font:c}=(0,r.A)();return(0,s.jsx)("div",{className:"Area",id:"education-section",children:(0,s.jsxs)("div",{className:"Content",children:[(0,s.jsx)(i.default,{children:"Educations"}),(0,s.jsx)("div",{className:"h-[30px]"}),(0,s.jsxs)("div",{className:"Card",children:[(0,s.jsxs)("div",{className:"flex gap-5 border-l-[4px] border-[#EB0D00] pl-[10px]",children:[(0,s.jsx)("div",{className:"flex flex-col gap-[30px]",children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("h3",{className:(0,u.QP)("font-bold",`text-[${c(2)}]`),children:"GIST"}),(0,s.jsx)("span",{children:t("education.major")}),(0,s.jsx)("span",{children:"2022. 2 – "})]})}),(0,s.jsx)("span",{children:"TGPA 4.04 / 4.5"})]}),(0,s.jsxs)("div",{className:"flex w-full flex-col gap-[10px]",children:[(0,s.jsx)("span",{className:"text-[1.125rem] font-bold",children:t("education.attendedLecture")}),(0,s.jsx)("div",{className:"flex-wrap gap-[0_10px]",children:(0,s.jsx)("p",{children:t("education.attendedLectures",{returnObjects:!0}).map(((e,t,n)=>(0,s.jsx)(o.Fragment,{children:t<n.length-1?[e,(0,s.jsx)("span",{style:{padding:"0 6px"},children:"|"})]:e},e)))})})]})]})]})})}},7671:function(e,t,n){"use strict";n.d(t,{P:function(){return r}});const r=768},4893:function(e){e.exports=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-resume-sections-education-section-tsx-b9412941ca760c3d6233.js.map