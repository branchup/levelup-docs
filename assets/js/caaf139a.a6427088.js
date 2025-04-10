"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[8412],{6437:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(4848),s=t(8453),n=t(5285);const i={slug:"/leaderboard-isolation",title:"Leaderboard isolation",description:"Isolate leaderboard participants from one another"},a="Isolate leaderboard participants",l={id:"leaderboard/isolation",title:"Leaderboard isolation",description:"Isolate leaderboard participants from one another",source:"@site/xp/docs/leaderboard/isolation.mdx",sourceDirName:"leaderboard",slug:"/leaderboard-isolation",permalink:"/xp/docs/leaderboard-isolation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"/leaderboard-isolation",title:"Leaderboard isolation",description:"Isolate leaderboard participants from one another"},sidebar:"tutorialSidebar",previous:{title:"Leaderboard",permalink:"/xp/docs/category/leaderboard"},next:{title:"Leaderboard opt-out",permalink:"/xp/docs/leaderboard-opt-out"}},d={},p=[{value:"Default (group mode)",id:"default",level:2},{value:"Using cohorts",id:"cohorts",level:2}];function c(e){const o={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"isolate-leaderboard-participants",children:"Isolate leaderboard participants"}),"\n",(0,r.jsx)(o.p,{children:"All users who have collected points are visible in the leaderboards. With the following options, groups of individuals can be isolated from one another by simulating multiple independent leaderboards."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"#default",children:"Default (group mode)"}),": The default option, using course groups."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.a,{href:"#cohorts",children:"Using cohorts"}),": Isolation using cohorts."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"default",children:"Default (group mode)"}),"\n",(0,r.jsxs)(o.p,{children:["This mode is applied by default in all versions of Level Up XP. In this mode, XP observes the ",(0,r.jsx)(o.a,{href:"https://docs.moodle.org/en/Groups#Group_modes",children:"group mode"})," setting of a course to determine whether to isolate participants. The group mode is a Moodle feature that defines isolation of participants at the course level using course groups."]}),"\n",(0,r.jsx)(o.p,{children:'The group modes "Visible groups" and "Separate groups" will isolate participants based on their group memberships in the exact same fashion as Moodle isolates those participants.'}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsx)(o.p,{children:'This option does not apply when XP is used sitewide as the "group mode" course setting is not available globally.'})}),"\n",(0,r.jsx)(o.h2,{id:"cohorts",children:"Using cohorts"}),"\n","\n",(0,r.jsx)(n.A,{plan:"Premium"}),"\n",(0,r.jsx)(o.p,{children:"With this option, participants are isolated from each other based on their cohort membership. Only members of the same cohort will appear in a person's leaderboard."}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsx)(o.p,{children:"Participants should belong to only one cohort. If they belong to multiple cohorts, their leaderboard will be randomly chosen from one of those cohorts."})})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5285:(e,o,t)=>{t.d(o,{A:()=>i});var r=t(8774);const s={content:"content_WJXq",pill:"pill_Da8E"};var n=t(4848);function i(e){let{someOnly:o=!1,plan:t=""}=e;return(0,n.jsx)("p",{className:s.content,children:(0,n.jsx)("div",{className:s.pill,children:o?(0,n.jsxs)(n.Fragment,{children:["Some features require ",(0,n.jsxs)(r.A,{to:"/xp/docs/#xp-plus",children:["Level Up XP+ ",t]})]}):(0,n.jsxs)(n.Fragment,{children:["This features requires ",(0,n.jsxs)(r.A,{to:"/xp/docs/#xp-plus",children:["Level Up XP+ ",t]})]})})})}},8453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>a});var r=t(6540);const s={},n=r.createContext(s);function i(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);