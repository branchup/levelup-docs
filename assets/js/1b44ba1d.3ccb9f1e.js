"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[9763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={},a="My rule is not working",l={unversionedId:"troubleshooting/event-rule-not-working/index",id:"troubleshooting/event-rule-not-working/index",title:"My rule is not working",description:"Let's walk through the different reasons why a rule may not be working as expected.",source:"@site/xp/docs/troubleshooting/event-rule-not-working/index.md",sourceDirName:"troubleshooting/event-rule-not-working",slug:"/troubleshooting/event-rule-not-working/",permalink:"/xp/docs/troubleshooting/event-rule-not-working/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Controller for route not found",permalink:"/xp/docs/troubleshooting/controller-for-route-not-found/error-controller-for-route-not-found"},next:{title:"Not showing in Moodle Mobile app",permalink:"/xp/docs/troubleshooting/level-up-moodle-mobile-app/"}},s={},u=[{value:"What is always ignored",id:"what-is-always-ignored",level:2},{value:"Disable the cheat guard",id:"disable-the-cheat-guard",level:2},{value:"Check if the event is in the logs",id:"check-if-the-event-is-in-the-logs",level:2},{value:"The rule cannot be matched",id:"the-rule-cannot-be-matched",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"my-rule-is-not-working"},"My rule is not working"),(0,r.kt)("p",null,"Let's walk through the different reasons why a rule may not be working as expected."),(0,r.kt)("h2",{id:"what-is-always-ignored"},"What is always ignored"),(0,r.kt)("p",null,"Before checking whether your rule specifically isn't working, let's recap' what events and actions are ignored:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The actions performed by guests and administrators"),(0,r.kt)("li",{parentName:"ul"},"The events flagged as ",(0,r.kt)("em",{parentName:"li"},"anonymous")," (e.g. in an anonymous Feedback activity)"),(0,r.kt)("li",{parentName:"ul"},"The events occurring outside of courses (e.g. sending a message, logging in)"),(0,r.kt)("li",{parentName:"ul"},"The events with an ",(0,r.kt)("em",{parentName:"li"},"educational level")," not equal to ",(0,r.kt)("em",{parentName:"li"},"Participating")),(0,r.kt)("li",{parentName:"ul"},"The actions performed by users that do not have the permission ",(0,r.kt)("inlineCode",{parentName:"li"},"block/xp:earnxp")," (given to students by default)")),(0,r.kt)("p",null,"Since Moodle 2.8, a report lists all the events, it is accessible from your Moodle site at ",(0,r.kt)("em",{parentName:"p"},"Site administration > Reports > Events list"),". You can use it to check the educational level of an event amongst other things."),(0,r.kt)("h2",{id:"disable-the-cheat-guard"},"Disable the cheat guard"),(0,r.kt)("p",null,"Please keep in mind that the cheat guard may be affecting your results. If you are currently testing your set-up, you may want to disable the cheat guard. The cheat guard could be the cause of events being ignored if too many occur within a short time, or if the same event is repeated, or when a certain amount of points already where awarded."),(0,r.kt)("p",null,'The cheat guard can be disabled in the "Settings" tab. Also note that events ignored due to the cheat guard will ',(0,r.kt)("em",{parentName:"p"},"not")," be displayed in ",(0,r.kt)("em",{parentName:"p"},"Level Up XP")," logs."),(0,r.kt)("p",null,"The cheat guard considers two events identical when they are. For example posting in two different forum discussions is not considered identical, but posting twice in the same discussion is."),(0,r.kt)("h2",{id:"check-if-the-event-is-in-the-logs"},"Check if the event is in the logs"),(0,r.kt)("p",null,"A good way to identify whether the event has been ignored by ",(0,r.kt)("em",{parentName:"p"},"Level Up XP")," is to check the Moodle logs. Those contain a detailed list of all events occurring and can be used to confirmed that an event was really triggered when you expected it. To view the Moodle logs, head to ",(0,r.kt)("em",{parentName:"p"},"Site administration > Reports > Logs"),", or in ",(0,r.kt)("em",{parentName:"p"},"Reports > Logs")," in a course."),(0,r.kt)("p",null,"You may also find useful to check ",(0,r.kt)("em",{parentName:"p"},"Level Up XP")," logs, when a rule is matched and not prevented by the cheat guard, a log of the event, the user and how many points they earned will be saved in the logs. The logs are accessible in their dedicated tab."),(0,r.kt)("h2",{id:"the-rule-cannot-be-matched"},"The rule cannot be matched"),(0,r.kt)("p",null,"Rules are very flexible and allow you to combine many different conditions together, however sometimes this can lead to impossible conditions. For example, a rule cannot happen in two activities at the same time, so combining two conditions ",(0,r.kt)("em",{parentName:"p"},"Activity or resource is ..."),' with the condition that "ALL of the conditions are true" will never match. It should read "ANY of the conditions are true". The same applies when combining ',(0,r.kt)("em",{parentName:"p"},"The event is ..."),", and others."),(0,r.kt)("p",null,"If you are unsure whether your rule is impossible, considering splitting it in smaller distinct rules."))}d.isMDXComponent=!0}}]);