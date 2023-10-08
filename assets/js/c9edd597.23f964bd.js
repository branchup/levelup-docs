"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[7159],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=n.createContext({}),l=function(e){var t=n.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(h.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,h=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(a),p=r,u=m["".concat(h,".").concat(p)]||m[p]||c[p]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2796:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9960),r=a(7294);const o="content_WJXq",i="pill_Da8E";function s(){return r.createElement("p",{className:o},r.createElement("div",{className:i},"This features requires ",r.createElement(n.Z,{to:"/xp/docs/#xp-plus"},"Level Up XP+")))}},9437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>h,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(2796);const i={title:"Cheat guard",description:"The mechanisms to prevent learners from abusing the system.",sidebar_position:5},s="The cheat guard",h={unversionedId:"getting-started/cheat-guard/index",id:"getting-started/cheat-guard/index",title:"Cheat guard",description:"The mechanisms to prevent learners from abusing the system.",source:"@site/xp/docs/getting-started/cheat-guard/index.mdx",sourceDirName:"getting-started/cheat-guard",slug:"/getting-started/cheat-guard/",permalink:"/xp/docs/getting-started/cheat-guard/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Cheat guard",description:"The mechanisms to prevent learners from abusing the system.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Level in navigation bar",permalink:"/xp/docs/navbar-display"},next:{title:"Permissions",permalink:"/xp/docs/getting-started/permissions"}},l={},d=[{value:"What does the cheat guard do?",id:"what-does-the-cheat-guard-do",level:2},{value:"Differences between versions",id:"differences-between-versions",level:2},{value:"The options",id:"the-options",level:2},{value:"Max. actions in time frame",id:"max-actions-in-time-frame",level:3},{value:"Time required between identical actions",id:"time-required-between-identical-actions",level:3},{value:"Max. points in time frame",id:"max-points-in-time-frame",level:3},{value:"Cheat guard bypass",id:"cheat-guard-bypass",level:2}],c={toc:d};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-cheat-guard"},"The cheat guard"),(0,r.kt)("p",null,'As XP awards points based on learners\' actions, some learners may be tempted to abuse the system by repeating similar actions, or by performing quick actions again and again. To remedy this, XP comes with a built-in protection called the "Cheat guard".'),(0,r.kt)("p",null,"It is important that you understand how the cheat guard works to prevent abuses while rewarding legitimate actions."),(0,r.kt)("h2",{id:"what-does-the-cheat-guard-do"},"What does the cheat guard do?"),(0,r.kt)("p",null,"The cheat guard simply checks whether the student is ",(0,r.kt)("em",{parentName:"p"},"allowed")," to earn points for a certain action. When they are not, the action is ignored completely. Some actions only ever occur once, so if the cheat guard ignores the action the student's unique chance to earn a reward for that action is gone forever."),(0,r.kt)("h2",{id:"differences-between-versions"},"Differences between versions"),(0,r.kt)("p",null,"Aside from having additional settings, XP+ has a more reliable cheat guard system built-in that covers long time frames (weeks to months instead of hours). It is also important to note that the cheat guard of the ",(0,r.kt)("em",{parentName:"p"},"free")," version does not protect from abuse using the mobile apps."),(0,r.kt)("h2",{id:"the-options"},"The options"),(0,r.kt)("h3",{id:"max-actions-in-time-frame"},"Max. actions in time frame"),(0,r.kt)("p",null,"This determines how many actions a learner is allowed to perform within a given time frame. Once they reach the maximum allowed, all further actions will be ignored until they no longer exceed the limit."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot",src:a(1401).Z,width:"595",height:"60"})),(0,r.kt)("p",null,"In the example above, 10 actions are allowed per 1 minute, so on average we could say that 1 action every 6 seconds is acceptable. Moodle sometimes triggers more than one action at the same time, so instead of risking to be too strict we aim at discouraging cheaters."),(0,r.kt)("h3",{id:"time-required-between-identical-actions"},"Time required between identical actions"),(0,r.kt)("p",null,"This is probably the most important cheat guard setting. It prevents students from the doing the same thing over and over again to earn points endlessly. But, what is an ",(0,r.kt)("em",{parentName:"p"},"identical action"),"? An action is determined to be identical when it happens in the same place and is related to the same resource or person. For instance, responding to the same forum discussion twice is considered identical, but submitting two assignments in two different assignment modules is not."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot",src:a(6120).Z,width:"595",height:"61"})),(0,r.kt)("p",null,"In the example above, a student cannot do the same thing twice within 3 minutes."),(0,r.kt)("p",null,"Note: it happens that Moodle's event definition tricks XP into thinking that two actions are not identical. If you notice that some events are not being caught by the cheat guard, you may want to add a specific rules to ignore them."),(0,r.kt)("h3",{id:"max-points-in-time-frame"},"Max. points in time frame"),(0,r.kt)(o.Z,{mdxType:"RequiresXpPlus"}),(0,r.kt)("p",null,"The maximum number of points students are allowed to earn within a given time frame. This may be more useful as a fail safe in case some students earn drastically more than others. You could also use this option to encourage students to come back to their learning, although do not forget to let them know that their points are capped after a certain amount."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot",src:a(2046).Z,width:"595",height:"59"})),(0,r.kt)("p",null,"In the example above, students cannot earn more than 100 points per hour. If our student has currently earned 90 points in the last hour, and an action is about to reward them 15 points, they will not earn anything. Students will not get points if those would cause the total to exceed the limit."),(0,r.kt)("h2",{id:"cheat-guard-bypass"},"Cheat guard bypass"),(0,r.kt)("p",null,"Some rewards always bypass the cheat guard because they cannot be abused by students:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Activity completion rewards"),(0,r.kt)("li",{parentName:"ul"},"Course completion rewards"),(0,r.kt)("li",{parentName:"ul"},"Grade rewards"),(0,r.kt)("li",{parentName:"ul"},"Awards manually given by educators")),(0,r.kt)("p",null,"Prior to XP+ 1.9, it could happen that course or activity completion rewards were ignored because of the cheat guard, this was not intentional and has been fixed."),(0,r.kt)("p",null,"Note that the above rewards will still count towards the action or point limits for other actions."))}m.isMDXComponent=!0},6120:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},1401:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},2046:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);