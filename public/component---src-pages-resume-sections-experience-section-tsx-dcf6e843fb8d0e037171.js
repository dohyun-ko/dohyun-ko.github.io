(self.webpackChunkdohyun_ko_github_io=self.webpackChunkdohyun_ko_github_io||[]).push([[758,64,138],{3514:function(e,n,t){"use strict";var r=t(4994);n.__esModule=!0,n.Link=void 0;var a=r(t(4634)),s=r(t(4893)),o=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=d(n);if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var o=a?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(r,s,o):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(t(6540)),i=t(3064),l=t(4794),c=t(3773),u=["language","to","onClick"];function d(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:n})(e)}var f=o.default.forwardRef((function(e,n){var t=e.language,r=e.to,d=e.onClick,f=(0,s.default)(e,u),x=(0,o.useContext)(i.I18nextContext),p=t||x.language,h=""+function(e){return x.generateDefaultLanguagePage||e!==x.defaultLanguage?"/"+e:""}(p)+r;return o.default.createElement(l.Link,(0,a.default)({},f,{to:h,innerRef:n,hrefLang:p,onClick:function(e){t&&localStorage.setItem(c.LANGUAGE_KEY,t),d&&d(e)}}))}));n.Link=f},9384:function(e,n,t){"use strict";n.__esModule=!0;var r=t(2389);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===r[e]||(n[e]=r[e]))}));var a=t(3064);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===a[e]||(n[e]=a[e]))}));var s=t(2232);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===s[e]||(n[e]=s[e]))}));var o=t(3514);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===o[e]||(n[e]=o[e]))}))},2232:function(e,n,t){"use strict";var r=t(4994);n.__esModule=!0,n.useI18next=void 0;var a=r(t(4634)),s=t(2389),o=t(6540),i=t(4794),l=t(3064),c=t(3773);n.useI18next=function(e,n){var t=(0,s.useTranslation)(e,n),r=t.i18n,u=t.t,d=t.ready,f=(0,o.useContext)(l.I18nextContext),x=f.routed,p=f.defaultLanguage,h=f.generateDefaultLanguagePage,g=function(e){return h||e!==p?"/"+e:""};return(0,a.default)({},f,{i18n:r,t:u,ready:d,navigate:function(e,n){var t=g(f.language),r=x?""+t+e:""+e;return(0,i.navigate)(r,n)},changeLanguage:function(e,n,t){var r=""+g(e)+(n||function(e){if(!x)return e;var n=e.indexOf("/",1);return e.substring(n)}(window.location.pathname))+window.location.search;return localStorage.setItem(c.LANGUAGE_KEY,e),(0,i.navigate)(r,t)}})}},4755:function(e,n,t){e.exports=t(9384)},6099:function(e,n,t){"use strict";t.r(n);var r=t(7842),a=t(4507),s=t(1776),o=t(856),i=t(119),l=t(4848);n.default=e=>{let{organization:n}=e;const{name:t,color:c,url:u,job:d,startedAt:f,endedAt:x}=n,{font:p}=(0,a.A)();return(0,l.jsxs)("div",{className:"Card",children:[(0,l.jsxs)("div",{className:(0,o.QP)("flex flex-col border-l-[5px] border-solid pl-[10px]",c?`border-[${c}]`:"border-gray-400"),children:[(0,l.jsx)(r.A,{href:u,children:(0,l.jsx)("span",{className:`font-bold text-[${p(2)}]`,children:t})}),(0,l.jsx)("span",{children:d}),(0,l.jsxs)("span",{children:[(0,s.n)(new Date(f))," –"," ",x?(0,s.n)(new Date(x)):"Now"]})]}),(0,l.jsx)("div",{className:"flex flex-col gap-5",children:n.projects.map((e=>(0,l.jsx)(i.default,{project:e},e.name)))})]})}},119:function(e,n,t){"use strict";t.r(n);var r=t(7842),a=t(4507),s=t(1776),o=t(4755),i=t(2746),l=t(856),c=t(4848);n.default=e=>{let{project:n}=e;const{name:t,url:u,description:d,whatIDid:f,techStacks:x,startedAt:p,endedAt:h}=n,{font:g}=(0,a.A)(),{t:j}=(0,o.useTranslation)();return(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)(r.A,{href:u,children:(0,c.jsx)("span",{className:(0,l.QP)("font-semibold",g(1.75)),children:t})}),(0,c.jsxs)("span",{children:[(0,s.n)(new Date(p))," –"," ",h?(0,s.n)(new Date(h)):"Now"]}),(0,c.jsx)(i.o,{children:d}),f&&f.length>0&&(0,c.jsxs)("ul",{style:{margin:"0px",paddingLeft:"20px"},children:[f.map((e=>(0,c.jsx)("li",{children:(0,c.jsx)("p",{className:g(1),children:e})},e))),x&&x.length>0&&(0,c.jsx)("li",{children:(0,c.jsxs)("p",{className:g(1),children:[j("common."),":"," ",x.map((e=>e)).join(", ")]})})]})]})}},1753:function(e,n,t){"use strict";t.r(n);var r=t(4507),a=t(856),s=t(4848);n.default=e=>{let{children:n}=e;const{font:t}=(0,r.A)();return(0,s.jsx)("h1",{className:(0,a.QP)("font-bold",`text-[${t(2.5)}]`),children:n})}},6744:function(e,n,t){"use strict";t.r(n);var r=t(2389),a=t(6099),s=t(1753),o=t(4848);n.default=e=>{let{}=e;const{t:n}=(0,r.useTranslation)();return(0,o.jsx)("div",{className:"Area",id:"experience-section",children:(0,o.jsxs)("div",{className:"Content",children:[(0,o.jsx)(s.default,{children:"Experiences"}),(0,o.jsx)("div",{className:"h-[30px]"}),(0,o.jsx)("div",{className:"flex flex-col gap-[30px]",children:n("experience.experiences",{returnObjects:!0}).map((e=>(0,o.jsx)(a.default,{organization:e},e.name)))})]})})}},4893:function(e){e.exports=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.includes(r))continue;t[r]=e[r]}return t},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-resume-sections-experience-section-tsx-dcf6e843fb8d0e037171.js.map