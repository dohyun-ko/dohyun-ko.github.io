(self.webpackChunkdohyun_ko_github_io=self.webpackChunkdohyun_ko_github_io||[]).push([[1,64,138,221,653,393,758,589,356,7],{3514:function(e,t,n){"use strict";var s=n(4994);t.__esModule=!0,t.Link=void 0;var a=s(n(4634)),l=s(n(4893)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var s={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=a?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(s,l,r):s[l]=e[l]}s.default=e,n&&n.set(e,s);return s}(n(6540)),i=n(3064),c=n(4794),d=n(3773),o=["language","to","onClick"];function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var x=r.default.forwardRef((function(e,t){var n=e.language,s=e.to,u=e.onClick,x=(0,l.default)(e,o),f=(0,r.useContext)(i.I18nextContext),h=n||f.language,j=""+function(e){return f.generateDefaultLanguagePage||e!==f.defaultLanguage?"/"+e:""}(h)+s;return r.default.createElement(c.Link,(0,a.default)({},x,{to:j,innerRef:t,hrefLang:h,onClick:function(e){n&&localStorage.setItem(d.LANGUAGE_KEY,n),u&&u(e)}}))}));t.Link=x},9384:function(e,t,n){"use strict";t.__esModule=!0;var s=n(2389);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===s[e]||(t[e]=s[e]))}));var a=n(3064);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var l=n(2232);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===l[e]||(t[e]=l[e]))}));var r=n(3514);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}))},2232:function(e,t,n){"use strict";var s=n(4994);t.__esModule=!0,t.useI18next=void 0;var a=s(n(4634)),l=n(2389),r=n(6540),i=n(4794),c=n(3064),d=n(3773);t.useI18next=function(e,t){var n=(0,l.useTranslation)(e,t),s=n.i18n,o=n.t,u=n.ready,x=(0,r.useContext)(c.I18nextContext),f=x.routed,h=x.defaultLanguage,j=x.generateDefaultLanguagePage,p=function(e){return j||e!==h?"/"+e:""};return(0,a.default)({},x,{i18n:s,t:o,ready:u,navigate:function(e,t){var n=p(x.language),s=f?""+n+e:""+e;return(0,i.navigate)(s,t)},changeLanguage:function(e,t,n){var s=""+p(e)+(t||function(e){if(!f)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(d.LANGUAGE_KEY,e),(0,i.navigate)(s,n)}})}},4755:function(e,t,n){e.exports=n(9384)},6099:function(e,t,n){"use strict";n.r(t);var s=n(7842),a=n(4507),l=n(1776),r=n(856),i=n(119),c=n(4848);t.default=e=>{let{organization:t}=e;const{name:n,color:d,url:o,job:u,startedAt:x,endedAt:f}=t,{font:h}=(0,a.A)();return(0,c.jsxs)("div",{className:"Card",children:[(0,c.jsxs)("div",{className:(0,r.QP)("flex flex-col border-l-[5px] border-solid pl-[10px]",d?`border-[${d}]`:"border-gray-400"),children:[(0,c.jsx)(s.A,{href:o,children:(0,c.jsx)("span",{className:`font-bold text-[${h(2)}]`,children:n})}),(0,c.jsx)("span",{children:u}),(0,c.jsxs)("span",{children:[(0,l.n)(new Date(x))," –"," ",f?(0,l.n)(new Date(f)):"Now"]})]}),(0,c.jsx)("div",{className:"flex flex-col gap-5",children:t.projects.map((e=>(0,c.jsx)(i.default,{project:e},e.name)))})]})}},119:function(e,t,n){"use strict";n.r(t);var s=n(7842),a=n(4507),l=n(1776),r=n(4755),i=n(2746),c=n(856),d=n(4848);t.default=e=>{let{project:t}=e;const{name:n,url:o,description:u,whatIDid:x,techStacks:f,startedAt:h,endedAt:j}=t,{font:p}=(0,a.A)(),{t:m}=(0,r.useTranslation)();return(0,d.jsxs)("div",{className:"flex flex-col",children:[(0,d.jsx)(s.A,{href:o,children:(0,d.jsx)("span",{className:(0,c.QP)("font-semibold",p(1.75)),children:n})}),(0,d.jsxs)("span",{children:[(0,l.n)(new Date(h))," –"," ",j?(0,l.n)(new Date(j)):"Now"]}),(0,d.jsx)(i.o,{children:u}),x&&x.length>0&&(0,d.jsxs)("ul",{style:{margin:"0px",paddingLeft:"20px"},children:[x.map((e=>(0,d.jsx)("li",{children:(0,d.jsx)("p",{className:p(1),children:e})},e))),f&&f.length>0&&(0,d.jsx)("li",{children:(0,d.jsxs)("p",{className:p(1),children:[m("common."),":"," ",f.map((e=>e)).join(", ")]})})]})]})}},4570:function(e,t,n){"use strict";n.r(t);var s=n(7842),a=n(7789),l=n(4507),r=n(1776),i=n(2746),c=n(856),d=n(4848);t.default=e=>{let{publication:t}=e;const{name:n,date:o,url:u,description:x,publisher:f}=t,{font:h}=(0,l.A)();(0,a.A)();return(0,d.jsxs)("div",{className:"flex flex-col",children:[(0,d.jsx)(s.A,{href:u,children:(0,d.jsx)("h3",{className:(0,c.QP)("font-semibold",`text-[${h(1.5)}]`),children:n})}),(0,d.jsxs)("span",{children:[f," - ",(0,r.n)(new Date(o))]}),(0,d.jsx)(i.o,{children:x})]})}},1753:function(e,t,n){"use strict";n.r(t);var s=n(4507),a=n(856),l=n(4848);t.default=e=>{let{children:t}=e;const{font:n}=(0,s.A)();return(0,l.jsx)("h1",{className:(0,a.QP)("font-bold",`text-[${n(2.5)}]`),children:t})}},8843:function(e,t,n){"use strict";n.r(t);var s=n(2422),a=n(6540),l=n(5950),r=n(4100),i=n(4919),c=n(6744),d=n(5954),o=n(2447),u=n(5033),x=n(4640),f=n(3227),h=n(4848);t.default=e=>{let{}=e;return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)(s.hK,{height:"50px"}),(0,h.jsx)(d.default,{}),(0,h.jsx)(s.hK,{height:"50px"}),(0,h.jsx)(f.default,{}),(0,h.jsx)(s.hK,{height:"50px"}),(0,h.jsx)(x.default,{}),(0,h.jsx)(s.hK,{height:"50px"}),(0,h.jsx)(i.default,{}),(0,h.jsx)(s.hK,{height:"50px"}),(0,h.jsx)(o.default,{}),(0,h.jsx)(s.hK,{height:"50px"}),(0,h.jsx)(r.default,{}),(0,h.jsx)(s.hK,{height:"50px"}),(0,h.jsx)(c.default,{}),(0,h.jsx)(s.hK,{height:"50px"}),(0,h.jsx)(u.default,{}),(0,h.jsx)(s.hK,{height:"50px"}),(0,h.jsx)(l.default,{}),(0,h.jsx)(s.hK,{height:"150px"})]})}},5950:function(e,t,n){"use strict";n.r(t);var s=n(2389),a=n(119),l=n(1753),r=n(4848);t.default=e=>{let{}=e;const{t:t}=(0,s.useTranslation)();return(0,r.jsx)("div",{className:"Area",id:"side-project-section",children:(0,r.jsxs)("div",{className:"Content",children:[(0,r.jsx)(l.default,{children:"Awards"}),(0,r.jsx)("div",{className:"h-[30px]"}),(0,r.jsx)("div",{className:"flex flex-col gap-[30px]",children:t("award.list",{returnObjects:!0}).map((e=>(0,r.jsx)(a.default,{project:e},e.name)))})]})})}},4100:function(e,t,n){"use strict";n.r(t);var s=n(2389),a=n(6099),l=n(1753),r=n(4848);t.default=e=>{let{}=e;const{t:t}=(0,s.useTranslation)();return(0,r.jsx)("div",{className:"Area",id:"current-section",children:(0,r.jsxs)("div",{className:"Content",children:[(0,r.jsx)(l.default,{children:"Currently working in"}),(0,r.jsx)("div",{className:"h-[30px]"}),(0,r.jsx)("div",{className:"flex flex-col gap-[35px]",children:t("current",{returnObjects:!0}).organizations.map((e=>(0,r.jsx)(a.default,{organization:e},e.name)))})]})})}},4919:function(e,t,n){"use strict";n.r(t);var s=n(4507),a=n(4755),l=n(6540),r=n(856),i=n(1753),c=n(4848);t.default=e=>{let{}=e;const{t:t,i18n:n}=(0,a.useTranslation)(),{font:d}=(0,s.A)();return(0,c.jsx)("div",{className:"Area",id:"education-section",children:(0,c.jsxs)("div",{className:"Content",children:[(0,c.jsx)(i.default,{children:"Educations"}),(0,c.jsx)("div",{className:"h-[30px]"}),(0,c.jsxs)("div",{className:"Card",children:[(0,c.jsxs)("div",{className:"flex gap-5 border-l-[4px] border-[#EB0D00] pl-[10px]",children:[(0,c.jsx)("div",{className:"flex flex-col gap-[30px]",children:(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsx)("h3",{className:(0,r.QP)("font-bold",`text-[${d(2)}]`),children:"GIST"}),(0,c.jsx)("span",{children:t("education.major")}),(0,c.jsx)("span",{children:"2022. 2 – "})]})}),(0,c.jsx)("span",{children:"TGPA 4.04 / 4.5"})]}),(0,c.jsxs)("div",{className:"flex w-full flex-col gap-[10px]",children:[(0,c.jsx)("span",{className:"text-[1.125rem] font-bold",children:t("education.attendedLecture")}),(0,c.jsx)("div",{className:"flex-wrap gap-[0_10px]",children:(0,c.jsx)("p",{children:t("education.attendedLectures",{returnObjects:!0}).map(((e,t,n)=>(0,c.jsx)(l.Fragment,{children:t<n.length-1?[e,(0,c.jsx)("span",{style:{padding:"0 6px"},children:"|"})]:e},e)))})})]})]})]})})}},6744:function(e,t,n){"use strict";n.r(t);var s=n(2389),a=n(6099),l=n(1753),r=n(4848);t.default=e=>{let{}=e;const{t:t}=(0,s.useTranslation)();return(0,r.jsx)("div",{className:"Area",id:"experience-section",children:(0,r.jsxs)("div",{className:"Content",children:[(0,r.jsx)(l.default,{children:"Experiences"}),(0,r.jsx)("div",{className:"h-[30px]"}),(0,r.jsx)("div",{className:"flex flex-col gap-[30px]",children:t("experience.experiences",{returnObjects:!0}).map((e=>(0,r.jsx)(a.default,{organization:e},e.name)))})]})})}},5954:function(e,t,n){"use strict";n.r(t);var s=n(4848);t.default=e=>{let{}=e;return(0,s.jsx)("div",{className:"Area",id:"meta-section",children:(0,s.jsx)("div",{className:"Content",children:(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("p",{className:"text-[1.25rem] font-thin",children:"Last update: 2024-09-22"})})})})}},2447:function(e,t,n){"use strict";n.r(t);var s=n(2389),a=n(4570),l=n(1753),r=n(4848);t.default=e=>{let{}=e;const{t:t}=(0,s.useTranslation)();return(0,r.jsx)("div",{className:"Area",id:"side-project-section",children:(0,r.jsxs)("div",{className:"Content",children:[(0,r.jsx)(l.default,{children:"Publications"}),(0,r.jsx)("div",{className:"h-[30px]"}),(0,r.jsx)("div",{className:"flex flex-col gap-[30px]",children:t("publication.publications",{returnObjects:!0}).map((e=>(0,r.jsx)(a.default,{publication:e},e.name)))})]})})}},5033:function(e,t,n){"use strict";n.r(t);var s=n(2389),a=n(119),l=n(1753),r=n(4848);t.default=e=>{let{}=e;const{t:t}=(0,s.useTranslation)();return(0,r.jsx)("div",{className:"Area",id:"side-project-section",children:(0,r.jsxs)("div",{className:"Content",children:[(0,r.jsx)(l.default,{children:"Side Projects"}),(0,r.jsx)("div",{className:"h-[30px]"}),(0,r.jsx)("div",{className:"flex flex-col gap-[30px]",children:t("sideProject.sideProjects",{returnObjects:!0}).map((e=>(0,r.jsx)(a.default,{project:e},e.name)))})]})})}},4640:function(e,t,n){"use strict";n.r(t);var s=n(2389),a=n(1753),l=n(4848);const r=e=>{switch(e){case 1:return"font-thin";case 2:return"font-light";case 3:return"font-medium";case 4:return"font-bold";case 5:return"font-black";default:return"font-normal"}},i=[{name:"React",level:5},{name:"TypeScript",level:4},{name:"Next.js",level:3},{name:"Python",level:3},{name:"NestJS",level:2},{name:"FastAPI",level:2},{name:"Flutter",level:2},{name:"C++",level:2},{name:"Kotlin",level:1},{name:"Docker",level:1},{name:"Rust",level:1},{name:"Assembly",level:1}];t.default=e=>{let{}=e;const{t:t}=(0,s.useTranslation)();return(0,l.jsx)("div",{className:"Area",id:"skill-section",children:(0,l.jsxs)("div",{className:"Content",children:[(0,l.jsx)(a.default,{children:"Skills"}),(0,l.jsx)("div",{className:"h-[30px]"}),(0,l.jsx)("div",{className:"grid grid-cols-3 gap-[10px]",children:i.map((e=>(0,l.jsx)("span",{className:r(e.level),children:e.name},e.name)))})]})})}},3227:function(e,t,n){"use strict";n.r(t);var s=n(7842),a=n(4507),l=n(2389),r=n(856),i=n(4848);t.default=e=>{let{}=e;const{t:t}=(0,l.useTranslation)(),{font:n}=(0,a.A)();return(0,i.jsx)("div",{className:"Area",id:"title-section",children:(0,i.jsxs)("div",{className:"Content",children:[(0,i.jsx)("h1",{className:(0,r.QP)("font-bold",n(2)),children:t("title.developer")}),(0,i.jsx)("h1",{className:(0,r.QP)("font-bold",n(3.5)),children:t("title.name")}),(0,i.jsx)("p",{className:(0,r.QP)("font-medium",n(1.5)),children:t("introduction")}),(0,i.jsx)("div",{className:"h-[30px]"}),(0,i.jsx)("div",{className:"flex",children:(0,i.jsxs)("p",{className:`text-[${n(1.5)}]`,children:[(0,i.jsx)(s.A,{href:"mailto:dohyun682@gmail.com",hasIcon:!1,children:"dohyun682@gmail.com"})," ","|"," ",(0,i.jsx)(s.A,{href:"https://github.com/dohyun-ko",hasIcon:!1,children:"GitHub"})," ","|"," ",(0,i.jsx)(s.A,{href:"https://www.instagram.com/dohyun682",hasIcon:!1,children:"Instagram"})," ","|"," ",(0,i.jsx)(s.A,{href:"https://www.linkedin.com/in/dohyun-ko-92b885212",hasIcon:!1,children:"LinkedIn"})]})})]})})}},4893:function(e){e.exports=function(e,t){if(null==e)return{};var n={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.includes(s))continue;n[s]=e[s]}return n},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-resume-index-tsx-874bd9605b1db6c591c4.js.map