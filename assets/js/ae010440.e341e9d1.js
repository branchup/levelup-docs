"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[6178],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>d});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=o(l),d=r,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return l?n.createElement(k,i(i({ref:t},c),{},{components:l})):n.createElement(k,i({ref:t},c))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<a;o++)i[o]=l[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},4284:(e,t,l)=>{l.r(t),l.d(t,{contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=l(7462),r=(l(7294),l(3905)),a=l(6615);const i={},u="Release notes",s={type:"mdx",permalink:"/quest/release-notes/",source:"@site/quest/release-notes/index.mdx",title:"Release notes",description:"Quest 1.3.1",frontMatter:{}},o=[{value:"Quest 1.3.1",id:"quest-131",level:2},{value:"Quest 1.3.0",id:"quest-130",level:2},{value:"Quest 1.2.1",id:"quest-121",level:2},{value:"Quest 1.2.0",id:"quest-120",level:2},{value:"Quest 1.1.2",id:"quest-112",level:2},{value:"Quest 1.1.1",id:"quest-111",level:2},{value:"Quest 1.1.0",id:"quest-110",level:2},{value:"Quest 1.0.0",id:"quest-100",level:2}],c={toc:o};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-notes"},"Release notes"),(0,r.kt)("h2",{id:"quest-131"},"Quest 1.3.1"),(0,r.kt)(a.Z,{mdxType:"ReleaseDate"},"Feb 9, 2024"),(0,r.kt)("h3",null,"Bug fixes \ud83d\udc1b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cohorts could not be used to recruit users in sitewide missions"),(0,r.kt)("li",{parentName:"ul"},"Handle PHP notice when course enrolment oucome is used sitewise"),(0,r.kt)("li",{parentName:"ul"},"Invalid reference to a language string in completion rate objective")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"quest-130"},"Quest 1.3.0"),(0,r.kt)(a.Z,{mdxType:"ReleaseDate"},"Jan 6, 2024"),(0,r.kt)("h3",null,"New features \u2728"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introduced library use custom images for quest narrators and achievements"),(0,r.kt)("li",{parentName:"ul"},"Added page to browse all users recruited for any mission in the context"),(0,r.kt)("li",{parentName:"ul"},"Added recruit page listing all missions a user is recruited for")),(0,r.kt)("h3",null,"Quality of life \ud83d\udcaa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Redesigned and improved UX of the page listing all missions"),(0,r.kt)("li",{parentName:"ul"},"Top level navigation between missions, recruits and library pages")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"quest-121"},"Quest 1.2.1"),(0,r.kt)(a.Z,{mdxType:"ReleaseDate"},"Dec 2, 2023"),(0,r.kt)("h3",null,"Technical changes \ud83d\udee0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compatibility with Moodle 4.3"),(0,r.kt)("li",{parentName:"ul"},"Compatibility with PHP 8.2"),(0,r.kt)("li",{parentName:"ul"},"Removed unused get_config_structure methods from objective type")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"quest-120"},"Quest 1.2.0"),(0,r.kt)(a.Z,{mdxType:"ReleaseDate"},"May 29, 2023"),(0,r.kt)("h3",null,"New features \u2728"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Outcome to award coins in Motrain"),(0,r.kt)("li",{parentName:"ul"},"Objective to attain a certain level in Motrain")),(0,r.kt)("h3",null,"Quality of life \ud83d\udcaa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Page width defaults to narrower view"),(0,r.kt)("li",{parentName:"ul"},"Increase size of achievements on profile page"),(0,r.kt)("li",{parentName:"ul"},"Improve responsiveness of charts on insights pages"),(0,r.kt)("li",{parentName:"ul"},"Display periodicity of challenge in its modal")),(0,r.kt)("h3",null,"Bug fixes \ud83d\udc1b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Challenge outcomes could be triggered twice"),(0,r.kt)("li",{parentName:"ul"},"Access activity objective limited choices to activity with completion")),(0,r.kt)("h3",null,"Technical changes \ud83d\udee0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compatibility with Moodle 4.2")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"quest-112"},"Quest 1.1.2"),(0,r.kt)(a.Z,{mdxType:"ReleaseDate"},"April 20, 2023"),(0,r.kt)("h3",null,"Bug fixes \ud83d\udc1b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"List of recruitment automations was always empty"),(0,r.kt)("li",{parentName:"ul"},"Include missing challenge related properties in backups"),(0,r.kt)("li",{parentName:"ul"},"Objectives, outcomes and assigners were not updated during restores"),(0,r.kt)("li",{parentName:"ul"},"Backing up a course could result in an error"),(0,r.kt)("li",{parentName:"ul"},"Other minor fixes and improvements")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"quest-111"},"Quest 1.1.1"),(0,r.kt)(a.Z,{mdxType:"ReleaseDate"},"April 13, 2023"),(0,r.kt)("h3",null,"Bug fixes \ud83d\udc1b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Incorrect reference to previously renamed property")),(0,r.kt)("h3",null,"Technical changes \ud83d\udee0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed incorrect plugin maturity declaration")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"quest-110"},"Quest 1.1.0"),(0,r.kt)(a.Z,{mdxType:"ReleaseDate"},"April 13, 2023"),(0,r.kt)("h3",null,"New features \u2728"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Extended backup support to track deeper parameters")),(0,r.kt)("h3",null,"Quality of life \ud83d\udcaa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recruits page now lists people instead of instances for challenges"),(0,r.kt)("li",{parentName:"ul"},"Improved insights given for challenges"),(0,r.kt)("li",{parentName:"ul"},"Improved backup/restore of several objectives, outcomes and assigners")),(0,r.kt)("h3",null,"Bug fixes \ud83d\udc1b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compatibility with PHP 8.1"),(0,r.kt)("li",{parentName:"ul"},"Fixed an incompatibility with MySQL"),(0,r.kt)("li",{parentName:"ul"},"Other minor fixes and improvements")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"quest-100"},"Quest 1.0.0"),(0,r.kt)(a.Z,{mdxType:"ReleaseDate"},"March 7, 2023"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2728 Initial release!")))}p.isMDXComponent=!0},6615:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(7294);const r="date_Ixg_";function a(e){let{children:t}=e;return n.createElement("p",{className:r},t)}}}]);