"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[6273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(f,s(s({ref:t},d),{},{components:n})):i.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<r;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2796:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(9960),o=n(7294);const r="content_WJXq",s="pill_Da8E";function a(){return o.createElement("p",{className:r},o.createElement("div",{className:s},"This features requires ",o.createElement(i.Z,{to:"/xp/docs/#xp-plus"},"Level Up XP+")))}},6642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(7462),o=(n(7294),n(3905)),r=n(2796);const s={},a="Reward activity completion",c={unversionedId:"how-to/activity-completion/index",id:"how-to/activity-completion/index",title:"Reward activity completion",description:"Activity completion with Level Up XP allows you to reward your students for completing their activities and resources. In order for it to work, Completion must be enabled in Moodle.",source:"@site/xp/docs/how-to/activity-completion/index.mdx",sourceDirName:"how-to/activity-completion",slug:"/how-to/activity-completion/",permalink:"/xp/docs/how-to/activity-completion/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Unlock an activity at a certain level",permalink:"/xp/docs/how-to/activity-access-restriction/"},next:{title:"Reward course completion",permalink:"/xp/docs/how-to/course-completion/"}},l={},d=[{value:"Reward specific activities only",id:"reward-specific-activities-only",level:3},{value:"Good to know",id:"good-to-know",level:3}],p={toc:d};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reward-activity-completion"},"Reward activity completion"),(0,o.kt)(r.Z,{mdxType:"RequiresXpPlus"}),(0,o.kt)("p",null,"Activity completion with Level Up XP allows you to reward your students for completing their activities and resources. In order for it to work, ",(0,o.kt)("em",{parentName:"p"},"Completion")," must be enabled in Moodle."),(0,o.kt)("p",null,"We need to create a new rule to set how many points a student should receive. Head to the block\u2019s ",(0,o.kt)("strong",{parentName:"p"},"rules page"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot",src:n(6875).Z,width:"573",height:"45"})),(0,o.kt)("p",null,"We need to to tell the plugin that whenever a student complete\u2019s an activity, they should receive a fairly decent amount of points, say ",(0,o.kt)("inlineCode",{parentName:"p"},"100"),". Click on the first ",(0,o.kt)("strong",{parentName:"p"},"+ Add a rule")," option. This will add an empty condition set on top of all the other ones, like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot",src:n(9358).Z,width:"411",height:"191"})),(0,o.kt)("p",null,"After changing the points to be earned to ",(0,o.kt)("inlineCode",{parentName:"p"},"100"),", click on ",(0,o.kt)("strong",{parentName:"p"},"+ Add a condition")," and select ",(0,o.kt)("strong",{parentName:"p"},"Activity completion"),". You will get this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot",src:n(4315).Z,width:"501",height:"203"})),(0,o.kt)("p",null,"At this stage, whenever our students complete an activity, they will be receiving ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," points. In each activity you have control over more settings which dictates when an activity is deemed complete, for instance an activity can be marked as complete only when the student receives a passing grade. Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Activity_completion"},"Moodle documention")," for more on this."),(0,o.kt)("h3",{id:"reward-specific-activities-only"},"Reward specific activities only"),(0,o.kt)("p",null,"There are cases where you will want to only target a few activities, perhaps because they have more value in your course. So starting from our previous example, we will adapt the rule to reward our student when they complete the activity ",(0,o.kt)("em",{parentName:"p"},"Introduce yourself")," or the activity ",(0,o.kt)("em",{parentName:"p"},"Final quiz"),"."),(0,o.kt)("p",null,"Let\u2019s start by adding a new sub group of conditions by clicking on ",(0,o.kt)("strong",{parentName:"p"},"+ Add a condition")," and selecting ",(0,o.kt)("strong",{parentName:"p"},"Set of conditions"),". It is very important that the condition is set to ",(0,o.kt)("strong",{parentName:"p"},"ANY of the conditions are true"),", like so:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot",src:n(3694).Z,width:"332",height:"88"})),(0,o.kt)("p",null,"In this new set of conditions, we will add two ",(0,o.kt)("strong",{parentName:"p"},"Activity or resource conditions"),", and in each of these we will select the activities mentioned above, namely ",(0,o.kt)("em",{parentName:"p"},"Introduce yourself")," and ",(0,o.kt)("em",{parentName:"p"},"Final quiz"),". (Use the ",(0,o.kt)("em",{parentName:"p"},"+ Add a condition")," located within our new set of conditions)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot",src:n(3392).Z,width:"578",height:"370"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Wait!")," We are not finished yet. There is a ",(0,o.kt)("strong",{parentName:"p"},"major problem")," in our rule, can you spot it? Our first group of condition is not set-up properly, let\u2019s read the whole rule together."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Give 100 points to my students when:\n  |\n  |-- An activity or resource is completed\n  |\n  OR\n  |\n  |-- When:\n       |\n       |-- The activity is 'Introduce yourself'\n       |\n       OR\n       |\n       |-- The activity is 'Final quiz'\n")),(0,o.kt)("p",null,"Our rule ",(0,o.kt)("em",{parentName:"p"},"An activity or resource is completed")," is not always required, because of the ",(0,o.kt)("strong",{parentName:"p"},"OR")," statement. So if we leave the rule as is, our students will be rewarded for completing any activity, or for participating in our activities ",(0,o.kt)("em",{parentName:"p"},"Introduce yourself")," and ",(0,o.kt)("em",{parentName:"p"},"Final quiz"),", this is not at all what we intended."),(0,o.kt)("p",null,"The bad ",(0,o.kt)("em",{parentName:"p"},"OR")," statement comes from the top group of conditions being set to ",(0,o.kt)("em",{parentName:"p"},"ANY of the conditions are true"),". Instead, what we need is an ",(0,o.kt)("strong",{parentName:"p"},"AND"),", which we get by using ",(0,o.kt)("strong",{parentName:"p"},"ALL of the conditions are true"),". Like so:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot",src:n(2799).Z,width:"565",height:"372"})),(0,o.kt)("p",null,"Which we can now read as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Give 100 points to my students when:\n  |\n  |-- An activity or resource is completed\n  |\n  AND\n  |\n  |-- When:\n       |\n       |-- The activity is 'Introduce yourself'\n       |\n       OR\n       |\n       |-- The activity is 'Final quiz'\n")),(0,o.kt)("h3",{id:"good-to-know"},"Good to know"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Students are only ever rewarded once for completing their activities."),(0,o.kt)("li",{parentName:"ul"},"Completing an activity with the failed status is ignored, generally when a passing grade is required and not met.")))}u.isMDXComponent=!0},2799:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/completion-activity-tutorial-final-5f95ba82da2378bfc1dd4ef4b932e820.png"},3392:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/completion-activity-tutorial-step-1-47091f57acc2c092e13ff04a977c8ad5.png"},9358:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},6875:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},4315:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/rule-activity-completion-367819886795eae7fff5f6838d775825.png"},3694:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);