(self.webpackChunkdohyun_ko_github_io=self.webpackChunkdohyun_ko_github_io||[]).push([[620,896],{3514:function(e,n,t){"use strict";var a=t(4994);n.__esModule=!0,n.Link=void 0;var r=a(t(4634)),u=a(t(4893)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=d(n);if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(a,u,i):a[u]=e[u]}a.default=e,t&&t.set(e,a);return a}(t(6540)),l=t(3064),o=t(4794),s=t(3773),c=["language","to","onClick"];function d(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:n})(e)}var f=i.default.forwardRef((function(e,n){var t=e.language,a=e.to,d=e.onClick,f=(0,u.default)(e,c),x=(0,i.useContext)(l.I18nextContext),p=t||x.language,g=""+function(e){return x.generateDefaultLanguagePage||e!==x.defaultLanguage?"/"+e:""}(p)+a;return i.default.createElement(o.Link,(0,r.default)({},f,{to:g,innerRef:n,hrefLang:p,onClick:function(e){t&&localStorage.setItem(s.LANGUAGE_KEY,t),d&&d(e)}}))}));n.Link=f},9384:function(e,n,t){"use strict";n.__esModule=!0;var a=t(2389);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===a[e]||(n[e]=a[e]))}));var r=t(3064);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===r[e]||(n[e]=r[e]))}));var u=t(2232);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===u[e]||(n[e]=u[e]))}));var i=t(3514);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===i[e]||(n[e]=i[e]))}))},2232:function(e,n,t){"use strict";var a=t(4994);n.__esModule=!0,n.useI18next=void 0;var r=a(t(4634)),u=t(2389),i=t(6540),l=t(4794),o=t(3064),s=t(3773);n.useI18next=function(e,n){var t=(0,u.useTranslation)(e,n),a=t.i18n,c=t.t,d=t.ready,f=(0,i.useContext)(o.I18nextContext),x=f.routed,p=f.defaultLanguage,g=f.generateDefaultLanguagePage,h=function(e){return g||e!==p?"/"+e:""};return(0,r.default)({},f,{i18n:a,t:c,ready:d,navigate:function(e,n){var t=h(f.language),a=x?""+t+e:""+e;return(0,l.navigate)(a,n)},changeLanguage:function(e,n,t){var a=""+h(e)+(n||function(e){if(!x)return e;var n=e.indexOf("/",1);return e.substring(n)}(window.location.pathname))+window.location.search;return localStorage.setItem(s.LANGUAGE_KEY,e),(0,l.navigate)(a,t)}})}},4755:function(e,n,t){e.exports=t(9384)},1753:function(e,n,t){"use strict";t.r(n);var a=t(2083),r=t(856),u=t(4848);n.default=e=>{let{children:n}=e;return(0,u.jsx)("h1",{className:(0,r.QP)("font-bold",(0,a.A)(2.5)),children:n})}},4919:function(e,n,t){"use strict";t.r(n);var a=t(2083),r=t(4755),u=t(6540),i=t(856),l=t(1753),o=t(4848);n.default=e=>{let{}=e;const{t:n}=(0,r.useTranslation)();return(0,o.jsx)("section",{className:"Area",id:"education-section",children:(0,o.jsxs)("div",{className:"Content",children:[(0,o.jsx)(l.default,{children:"Educations"}),(0,o.jsx)("div",{className:"h-[30px]"}),(0,o.jsxs)("div",{className:"Card",children:[(0,o.jsxs)("div",{className:"flex gap-5 border-l-[5px] border-[#EB0D00] pl-[10px]",children:[(0,o.jsx)("div",{className:"flex flex-col gap-[30px]",children:(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("h2",{className:(0,i.QP)("font-bold",`text-[${(0,a.A)(2)}]`),children:"GIST"}),(0,o.jsx)("span",{children:n("education.major")}),(0,o.jsx)("span",{children:"2022. 2 – "})]})}),(0,o.jsx)("span",{children:"TGPA 4.04 / 4.5"})]}),(0,o.jsxs)("div",{className:"flex w-full flex-col gap-[10px]",children:[(0,o.jsx)("span",{className:"text-[1.125rem] font-bold",children:n("education.attendedLecture")}),(0,o.jsx)("div",{className:"flex-wrap gap-[0_10px]",children:(0,o.jsx)("p",{children:n("education.attendedLectures",{returnObjects:!0}).map(((e,n,t)=>(0,o.jsx)(u.Fragment,{children:n<t.length-1?[e,(0,o.jsx)("span",{style:{padding:"0 6px"},children:"|"})]:e},e)))})})]})]})]})})}},4893:function(e){e.exports=function(e,n){if(null==e)return{};var t={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(n.includes(a))continue;t[a]=e[a]}return t},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-resume-sections-education-section-tsx-bd50247f1bc85577da23.js.map