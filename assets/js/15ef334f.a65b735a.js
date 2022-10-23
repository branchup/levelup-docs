"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[5294],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={description:"Using XP per course, or for the entire site.",sidebar_position:4},a="Per course, or globally?",s={unversionedId:"getting-started/per-course-or-site",id:"getting-started/per-course-or-site",title:"Per course, or globally?",description:"Using XP per course, or for the entire site.",source:"@site/xp/docs/getting-started/per-course-or-site.mdx",sourceDirName:"getting-started",slug:"/getting-started/per-course-or-site",permalink:"/xp/docs/getting-started/per-course-or-site",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Using XP per course, or for the entire site.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Points retroactivity",permalink:"/xp/docs/getting-started/points-retroactivity"},next:{title:"Cheat guard",permalink:"/xp/docs/getting-started/cheat-guard/"}},l={},c=[{value:"Setting it up",id:"setting-it-up",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"per-course-or-globally"},"Per course, or globally?"),(0,o.kt)("p",null,"XP can be set up in two different ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Per course"),(0,o.kt)("li",{parentName:"ul"},"For the whole site")),(0,o.kt)("p",null,"This defines in what context learners will earn experience points. By default, XP is configured per course which is best in a shared environment where multiple instructors are involved in multiple courses."),(0,o.kt)("p",null,"When the plugin is configured per course, learners get points and a different level per course. They do not have an overall level, and there is no sharing of points between courses. The gamification experience in a course is completely isolated from the others."),(0,o.kt)("p",null,"When the plugin is used for the whole site, learners have only one level and all the points they get in the courses contribute to this level."),(0,o.kt)("h2",{id:"setting-it-up"},"Setting it up"),(0,o.kt)("p",null,"The administration setting that controls this is called ",(0,o.kt)("inlineCode",{parentName:"p"},"block_xp_context")," and can be found at ",(0,o.kt)("em",{parentName:"p"},"Site Administration > Plugins > Blocks > Level Up XP > General Settings"),". Only an administrator can change this."))}u.isMDXComponent=!0}}]);