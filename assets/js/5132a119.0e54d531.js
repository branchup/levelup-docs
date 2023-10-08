"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={description:"A breakdown of the permissions declared by the plugin.",sidebar_position:6},i="Permissions",s={unversionedId:"getting-started/permissions",id:"getting-started/permissions",title:"Permissions",description:"A breakdown of the permissions declared by the plugin.",source:"@site/xp/docs/getting-started/permissions.mdx",sourceDirName:"getting-started",slug:"/getting-started/permissions",permalink:"/xp/docs/getting-started/permissions",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"A breakdown of the permissions declared by the plugin.",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Cheat guard",permalink:"/xp/docs/getting-started/cheat-guard/"},next:{title:"User privacy",permalink:"/xp/docs/getting-started/user-privacy"}},p={},l=[{value:"block/xp:earnxp",id:"earnxp",level:2},{value:"block/xp:view",id:"view",level:2},{value:"block/xp:manage",id:"manage",level:2},{value:"block/xp:viewlogs",id:"viewlogs",level:2},{value:"block/xp:viewreport",id:"viewreport",level:2},{value:"block/xp:addinstance",id:"addinstance",level:2},{value:"block/xp:myaddinstance",id:"myaddinstance",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"permissions"},"Permissions"),(0,a.kt)("p",null,"By default, the permissions grant teachers and managers the rights to add the block and configure it, and grant students the ability to earn points and view the block and their level."),(0,a.kt)("h2",{id:"earnxp"},"block/xp:earnxp"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Given to the ",(0,a.kt)("strong",{parentName:"p"},"Student")," role by default.")),(0,a.kt)("p",null,"Probably one of the most powerful capability, this controls whether a user can earn points for the actions they perform in the given context. Typically, non-students should not be given this permission in order to avoid for them to earn points and appear in the leaderboard."),(0,a.kt)("p",null,"Using this capability you may restrict entire sections of your course, or site from contributing to a user's experience points. For example, you may set this permission as ",(0,a.kt)("em",{parentName:"p"},"Prohibited")," for the ",(0,a.kt)("em",{parentName:"p"},"Student")," role for an entire category, subsequently any event occurring in a course or activity within this category will be ignored. You may do the same for a single course or even a single activity."),(0,a.kt)("p",null,"Note that by default administrators are forbidden from earning points as they always have all permissions and would earn points everywhere. To allow administrators to earn points, you can enable the setting ",(0,a.kt)("inlineCode",{parentName:"p"},"adminscanearnxp")," from XP's admin settings."),(0,a.kt)("h2",{id:"view"},"block/xp:view"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Given to the ",(0,a.kt)("strong",{parentName:"p"},"Authenticated user")," role by default.")),(0,a.kt)("p",null,"This permission determines whether the block will be visible to a user. When prohibited, a user will not see the block, and won't be able to access any of its pages."),(0,a.kt)("h2",{id:"manage"},"block/xp:manage"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Given to the ",(0,a.kt)("strong",{parentName:"p"},"Teacher"),", ",(0,a.kt)("strong",{parentName:"p"},"Manager")," roles by default.")),(0,a.kt)("p",null,"Users with this permission can manage all aspects a plugin's instance. They will be allowed to change any setting, the levels, the rules, the appearance, etc. This permission also allows to edit, import, and reset learners' points."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This permission was introduced in XP v3.6.1."),(0,a.kt)("p",{parentName:"admonition"},"This permission also determined whether a user could access to the logs, and the report.\nNewer versions use ",(0,a.kt)("a",{parentName:"p",href:"#viewlogs"},"block/xp:viewlogs")," and ",(0,a.kt)("a",{parentName:"p",href:"#viewreport"},"block/xp:viewreport"),".")),(0,a.kt)("h2",{id:"viewlogs"},"block/xp:viewlogs"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Given to the ",(0,a.kt)("strong",{parentName:"p"},"Teacher"),", ",(0,a.kt)("strong",{parentName:"p"},"Manager")," roles by default.")),(0,a.kt)("p",null,"This permission is required for users to get access to the logs."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This permission was introduced in XP v3.10.0.")),(0,a.kt)("h2",{id:"viewreport"},"block/xp:viewreport"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Given to the ",(0,a.kt)("strong",{parentName:"p"},"Teacher"),", ",(0,a.kt)("strong",{parentName:"p"},"Manager")," roles by default.")),(0,a.kt)("p",null,"This permission is required for users to get access to the report."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This permission was introduced in XP v3.12.0.")),(0,a.kt)("h2",{id:"addinstance"},"block/xp:addinstance"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Given to the ",(0,a.kt)("strong",{parentName:"p"},"Teacher"),", ",(0,a.kt)("strong",{parentName:"p"},"Manager")," roles by default.")),(0,a.kt)("p",null,"This permission controls whether the user can add the block, and set some of its appearance settings. We strongly recommend that any user with this permission is also granted the permission ",(0,a.kt)("a",{parentName:"p",href:"#manage"},"block/xp:manage"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This permission use to manage all aspects of the plugin's instance, such as changing the settings, viewing the reports, etc. in more recent versions those permissions are used: ",(0,a.kt)("a",{parentName:"p",href:"#manage"},"block/xp:manage"),", ",(0,a.kt)("a",{parentName:"p",href:"#viewlogs"},"block/xp:viewlogs")," and ",(0,a.kt)("a",{parentName:"p",href:"#viewreport"},"block/xp:viewreport"),".")),(0,a.kt)("h2",{id:"myaddinstance"},"block/xp:myaddinstance"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Given to ",(0,a.kt)("strong",{parentName:"p"},"nobody")," by default.")),(0,a.kt)("p",null,"Moodle requires for this permission to be defined, it controls whether a user can add the block to their dashboard. By default it is not given to anyone, instead we advise for administrators to customise the default dashboard of their users."))}c.isMDXComponent=!0}}]);