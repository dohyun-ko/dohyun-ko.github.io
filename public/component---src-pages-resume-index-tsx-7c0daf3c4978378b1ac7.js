(self.webpackChunkdohyun_ko_github_io=self.webpackChunkdohyun_ko_github_io||[]).push([[1,64,138,221,896,653,393,620,758,589,356,7,929],{3514:function(e,s,n){"use strict";var t=n(4994);s.__esModule=!0,s.Link=void 0;var a=t(n(4634)),l=t(n(4893)),r=function(e,s){if(!s&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(s);if(n&&n.has(e))return n.get(e);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=a?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(t,l,r):t[l]=e[l]}t.default=e,n&&n.set(e,t);return t}(n(6540)),c=n(3064),i=n(4794),d=n(3773),o=["language","to","onClick"];function u(e){if("function"!=typeof WeakMap)return null;var s=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:s})(e)}var x=r.default.forwardRef((function(e,s){var n=e.language,t=e.to,u=e.onClick,x=(0,l.default)(e,o),f=(0,r.useContext)(c.I18nextContext),h=n||f.language,j=""+function(e){return f.generateDefaultLanguagePage||e!==f.defaultLanguage?"/"+e:""}(h)+t;return r.default.createElement(i.Link,(0,a.default)({},x,{to:j,innerRef:s,hrefLang:h,onClick:function(e){n&&localStorage.setItem(d.LANGUAGE_KEY,n),u&&u(e)}}))}));s.Link=x},9384:function(e,s,n){"use strict";s.__esModule=!0;var t=n(2389);Object.keys(t).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in s&&s[e]===t[e]||(s[e]=t[e]))}));var a=n(3064);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in s&&s[e]===a[e]||(s[e]=a[e]))}));var l=n(2232);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in s&&s[e]===l[e]||(s[e]=l[e]))}));var r=n(3514);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in s&&s[e]===r[e]||(s[e]=r[e]))}))},2232:function(e,s,n){"use strict";var t=n(4994);s.__esModule=!0,s.useI18next=void 0;var a=t(n(4634)),l=n(2389),r=n(6540),c=n(4794),i=n(3064),d=n(3773);s.useI18next=function(e,s){var n=(0,l.useTranslation)(e,s),t=n.i18n,o=n.t,u=n.ready,x=(0,r.useContext)(i.I18nextContext),f=x.routed,h=x.defaultLanguage,j=x.generateDefaultLanguagePage,m=function(e){return j||e!==h?"/"+e:""};return(0,a.default)({},x,{i18n:t,t:o,ready:u,navigate:function(e,s){var n=m(x.language),t=f?""+n+e:""+e;return(0,c.navigate)(t,s)},changeLanguage:function(e,s,n){var t=""+m(e)+(s||function(e){if(!f)return e;var s=e.indexOf("/",1);return e.substring(s)}(window.location.pathname))+window.location.search;return localStorage.setItem(d.LANGUAGE_KEY,e),(0,c.navigate)(t,n)}})}},4755:function(e,s,n){e.exports=n(9384)},6099:function(e,s,n){"use strict";n.r(s);var t=n(7842),a=n(1776),l=n(2083),r=n(856),c=n(119),i=n(4848);s.default=e=>{let{organization:s}=e;const{name:n,color:d,url:o,job:u,startedAt:x,endedAt:f}=s;return(0,i.jsxs)("div",{className:"Card",children:[(0,i.jsxs)("div",{className:(0,r.QP)("flex flex-col border-l-[5px] border-solid pl-2.5",d?`border-[${d}]`:"border-gray-400"),children:[(0,i.jsx)(t.A,{href:o,children:(0,i.jsx)("h2",{className:(0,r.QP)("font-bold",(0,l.A)(2)),children:n})}),(0,i.jsx)("span",{children:u}),(0,i.jsxs)("span",{children:[(0,a.n)(new Date(x))," –"," ",f?(0,a.n)(new Date(f)):"Now"]})]}),(0,i.jsx)("div",{className:"flex flex-col gap-5",children:s.projects.map((e=>(0,i.jsx)(c.default,{project:e},e.name)))})]})}},119:function(e,s,n){"use strict";n.r(s);var t=n(7842),a=n(1776),l=n(2083),r=n(4755),c=n(2746),i=n(856),d=n(4848);s.default=e=>{let{project:s}=e;const{name:n,url:o,description:u,whatIDid:x,techStacks:f,startedAt:h,endedAt:j}=s,{t:m}=(0,r.useTranslation)();return(0,d.jsxs)("div",{className:"flex flex-col",children:[(0,d.jsx)(t.A,{href:o,children:(0,d.jsx)("h3",{className:(0,i.QP)("font-semibold",(0,l.A)(1.75)),children:n})}),(0,d.jsxs)("span",{children:[(0,a.n)(new Date(h))," –"," ",j?(0,a.n)(new Date(j)):"Now"]}),(0,d.jsx)(c.o,{children:u}),x&&x.length>0&&(0,d.jsxs)("ul",{className:"m-0 list-disc pl-5",children:[x.map((e=>(0,d.jsx)("li",{children:(0,d.jsx)("p",{className:(0,l.A)(1),children:e})},e))),f&&f.length>0&&(0,d.jsx)("li",{children:(0,d.jsxs)("p",{className:(0,l.A)(1),children:[m("common.techStacks"),":"," ",f.map((e=>e)).join(", ")]})})]})]})}},4570:function(e,s,n){"use strict";n.r(s);var t=n(7842),a=n(1776),l=n(2083),r=n(2746),c=n(856),i=n(4848);s.default=e=>{let{publication:s}=e;const{name:n,date:d,url:o,description:u,publisher:x}=s;return(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)(t.A,{href:o,children:(0,i.jsx)("h3",{className:(0,c.QP)("font-semibold",(0,l.A)(1.5)),children:n})}),(0,i.jsxs)("span",{children:[x," - ",(0,a.n)(new Date(d))]}),(0,i.jsx)(r.o,{children:u})]})}},1753:function(e,s,n){"use strict";n.r(s);var t=n(2083),a=n(856),l=n(4848);s.default=e=>{let{children:s}=e;return(0,l.jsx)("h1",{className:(0,a.QP)("font-bold",(0,t.A)(2.5)),children:s})}},8843:function(e,s,n){"use strict";n.r(s);var t=n(6540),a=n(5950),l=n(4100),r=n(4919),c=n(6744),i=n(5954),d=n(2447),o=n(5033),u=n(4640),x=n(3227),f=n(4848);s.default=e=>{let{}=e;return(0,f.jsxs)(t.Fragment,{children:[(0,f.jsx)("div",{className:"h-[50px]"}),(0,f.jsx)(i.default,{}),(0,f.jsx)("div",{className:"h-[50px]"}),(0,f.jsx)(x.default,{}),(0,f.jsx)("div",{className:"h-[50px]"}),(0,f.jsx)(u.default,{}),(0,f.jsx)("div",{className:"h-[50px]"}),(0,f.jsx)(r.default,{}),(0,f.jsx)("div",{className:"h-[50px]"}),(0,f.jsx)(d.default,{}),(0,f.jsx)("div",{className:"h-[50px]"}),(0,f.jsx)(l.default,{}),(0,f.jsx)("div",{className:"h-[50px]"}),(0,f.jsx)(c.default,{}),(0,f.jsx)("div",{className:"h-[50px]"}),(0,f.jsx)(o.default,{}),(0,f.jsx)("div",{className:"h-[50px]"}),(0,f.jsx)(a.default,{}),(0,f.jsx)("div",{className:"h-[150px]"})]})}},5950:function(e,s,n){"use strict";n.r(s);var t=n(2389),a=n(119),l=n(1753),r=n(4848);s.default=e=>{let{}=e;const{t:s}=(0,t.useTranslation)();return(0,r.jsx)("section",{className:"Area",id:"side-project-section",children:(0,r.jsxs)("div",{className:"Content",children:[(0,r.jsx)(l.default,{children:"Awards"}),(0,r.jsx)("div",{className:"h-[30px]"}),(0,r.jsx)("div",{className:"flex flex-col gap-[30px]",children:s("award.list",{returnObjects:!0}).map((e=>(0,r.jsx)(a.default,{project:e},e.name)))})]})})}},4100:function(e,s,n){"use strict";n.r(s);var t=n(2389),a=n(6099),l=n(1753),r=n(4848);s.default=e=>{let{}=e;const{t:s}=(0,t.useTranslation)();return(0,r.jsx)("section",{className:"Area",id:"current-section",children:(0,r.jsxs)("div",{className:"Content",children:[(0,r.jsx)(l.default,{children:"Currently working in"}),(0,r.jsx)("div",{className:"h-[30px]"}),(0,r.jsx)("div",{className:"flex flex-col gap-[35px]",children:s("current",{returnObjects:!0}).organizations.map((e=>(0,r.jsx)(a.default,{organization:e},e.name)))})]})})}},4919:function(e,s,n){"use strict";n.r(s);var t=n(2083),a=n(4755),l=n(6540),r=n(856),c=n(1753),i=n(4848);s.default=e=>{let{}=e;const{t:s}=(0,a.useTranslation)();return(0,i.jsx)("section",{className:"Area",id:"education-section",children:(0,i.jsxs)("div",{className:"Content",children:[(0,i.jsx)(c.default,{children:"Educations"}),(0,i.jsx)("div",{className:"h-[30px]"}),(0,i.jsxs)("div",{className:"Card",children:[(0,i.jsxs)("div",{className:"flex gap-5 border-l-[5px] border-[#EB0D00] pl-[10px]",children:[(0,i.jsx)("div",{className:"flex flex-col gap-[30px]",children:(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("h2",{className:(0,r.QP)("font-bold",`text-[${(0,t.A)(2)}]`),children:"GIST"}),(0,i.jsx)("span",{children:s("education.major")}),(0,i.jsx)("span",{children:"2022. 2 – "})]})}),(0,i.jsx)("span",{children:"TGPA 4.04 / 4.5"})]}),(0,i.jsxs)("div",{className:"flex w-full flex-col gap-[10px]",children:[(0,i.jsx)("span",{className:"text-[1.125rem] font-bold",children:s("education.attendedLecture")}),(0,i.jsx)("div",{className:"flex-wrap gap-[0_10px]",children:(0,i.jsx)("p",{children:s("education.attendedLectures",{returnObjects:!0}).map(((e,s,n)=>(0,i.jsx)(l.Fragment,{children:s<n.length-1?[e,(0,i.jsx)("span",{style:{padding:"0 6px"},children:"|"})]:e},e)))})})]})]})]})})}},6744:function(e,s,n){"use strict";n.r(s);var t=n(2389),a=n(6099),l=n(1753),r=n(4848);s.default=e=>{let{}=e;const{t:s}=(0,t.useTranslation)();return(0,r.jsx)("section",{className:"Area",id:"experience-section",children:(0,r.jsxs)("div",{className:"Content",children:[(0,r.jsx)(l.default,{children:"Experiences"}),(0,r.jsx)("div",{className:"h-[30px]"}),(0,r.jsx)("div",{className:"flex flex-col gap-[30px]",children:s("experience.experiences",{returnObjects:!0}).map((e=>(0,r.jsx)(a.default,{organization:e},e.name)))})]})})}},5954:function(e,s,n){"use strict";n.r(s);var t=n(4848);s.default=e=>{let{}=e;return(0,t.jsx)("section",{className:"Area",id:"meta-section",children:(0,t.jsx)("div",{className:"Content",children:(0,t.jsx)("div",{className:"flex",children:(0,t.jsx)("p",{className:"text-[1.25rem] font-thin",children:"Last update: 2024-09-22"})})})})}},2447:function(e,s,n){"use strict";n.r(s);var t=n(2389),a=n(4570),l=n(1753),r=n(4848);s.default=e=>{let{}=e;const{t:s}=(0,t.useTranslation)();return(0,r.jsx)("section",{className:"Area",id:"side-project-section",children:(0,r.jsxs)("div",{className:"Content",children:[(0,r.jsx)(l.default,{children:"Publications"}),(0,r.jsx)("div",{className:"h-[30px]"}),(0,r.jsx)("div",{className:"flex flex-col gap-[30px]",children:s("publication.publications",{returnObjects:!0}).map((e=>(0,r.jsx)(a.default,{publication:e},e.name)))})]})})}},5033:function(e,s,n){"use strict";n.r(s);var t=n(2389),a=n(119),l=n(1753),r=n(4848);s.default=e=>{let{}=e;const{t:s}=(0,t.useTranslation)();return(0,r.jsx)("section",{className:"Area",id:"side-project-section",children:(0,r.jsxs)("div",{className:"Content",children:[(0,r.jsx)(l.default,{children:"Side Projects"}),(0,r.jsx)("div",{className:"h-[30px]"}),(0,r.jsx)("div",{className:"flex flex-col gap-[30px]",children:s("sideProject.sideProjects",{returnObjects:!0}).map((e=>(0,r.jsx)(a.default,{project:e},e.name)))})]})})}},4640:function(e,s,n){"use strict";n.r(s);var t=n(1753),a=n(4848);const l=e=>{switch(e){case 1:return"font-thin";case 2:return"font-light";case 3:return"font-medium";case 4:return"font-bold";case 5:return"font-black";default:return"font-normal"}},r=[{name:"React",level:5},{name:"TypeScript",level:4},{name:"Next.js",level:3},{name:"Python",level:3},{name:"NestJS",level:2},{name:"FastAPI",level:2},{name:"Flutter",level:2},{name:"C++",level:2},{name:"Kotlin",level:1},{name:"Docker",level:1},{name:"Rust",level:1},{name:"Assembly",level:1}];s.default=e=>{let{}=e;return(0,a.jsx)("section",{className:"Area",id:"skill-section",children:(0,a.jsxs)("div",{className:"Content",children:[(0,a.jsx)(t.default,{children:"Skills"}),(0,a.jsx)("div",{className:"h-[30px]"}),(0,a.jsx)("div",{className:"grid grid-cols-3 gap-[10px]",children:r.map((e=>(0,a.jsx)("span",{className:l(e.level),children:e.name},e.name)))})]})})}},3227:function(e,s,n){"use strict";n.r(s);var t=n(7842),a=n(2083),l=n(2389),r=n(856),c=n(4848);s.default=e=>{let{}=e;const{t:s}=(0,l.useTranslation)();return(0,c.jsx)("section",{className:"Area",id:"title-section",children:(0,c.jsxs)("div",{className:"Content",children:[(0,c.jsx)("h1",{className:(0,r.QP)("font-thin",(0,a.A)(2)),children:s("title.developer")}),(0,c.jsx)("h1",{className:(0,r.QP)("font-bold",(0,a.A)(3.5)),children:s("title.name")}),(0,c.jsx)("p",{className:(0,r.QP)("font-medium",(0,a.A)(1.5)),children:s("introduction")}),(0,c.jsx)("div",{className:"h-[30px]"}),(0,c.jsx)("div",{className:"flex",children:(0,c.jsxs)("p",{className:(0,a.A)(1.5),children:[(0,c.jsx)(t.A,{href:"mailto:dohyun682@gmail.com",hasIcon:!1,children:"dohyun682@gmail.com"})," ","|"," ",(0,c.jsx)(t.A,{href:"https://github.com/dohyun-ko",hasIcon:!1,children:"GitHub"})," ","|"," ",(0,c.jsx)(t.A,{href:"https://www.instagram.com/dohyun682",hasIcon:!1,children:"Instagram"})," ","|"," ",(0,c.jsx)(t.A,{href:"https://www.linkedin.com/in/dohyun-ko-92b885212",hasIcon:!1,children:"LinkedIn"})]})})]})})}},4893:function(e){e.exports=function(e,s){if(null==e)return{};var n={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(s.includes(t))continue;n[t]=e[t]}return n},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-resume-index-tsx-7c0daf3c4978378b1ac7.js.map