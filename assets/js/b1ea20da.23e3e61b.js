"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[65],{8468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const o={sidebar_position:0,sidebar_label:"Introduction",description:"The event rules award points based on events broadcasted by Moodle.",slug:"/points/event-rules"},r="Event rules",a={id:"points/event-rules/introduction",title:"Event rules",description:"The event rules award points based on events broadcasted by Moodle.",source:"@site/xp/docs/points/event-rules/introduction.mdx",sourceDirName:"points/event-rules",slug:"/points/event-rules",permalink:"/xp/docs/points/event-rules",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Introduction",description:"The event rules award points based on events broadcasted by Moodle.",slug:"/points/event-rules"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/xp/docs/points"},next:{title:"Activity completion",permalink:"/xp/docs/how-to/activity-completion"}},d={},l=[{value:"Actions that are ignored",id:"actions-that-are-ignored",level:2},{value:"See also",id:"see-also",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"event-rules",children:"Event rules"}),"\n",(0,s.jsx)(n.p,{children:"XP observes the actions performed by learners and attributes them points. By default, XP comes with a few pre-defined rules to determine how many points a learner should earn."}),"\n",(0,s.jsxs)(n.p,{children:["In Moodle, such actions are referred to as ",(0,s.jsx)(n.em,{children:"Events"}),". Events contain information about the action that was just performed: where it happened, what it was, who did it, etc. It also contains the ",(0,s.jsx)(n.em,{children:"educational level"})," of the action, either ",(0,s.jsx)(n.em,{children:"participating"}),", ",(0,s.jsx)(n.em,{children:"teaching"})," or ",(0,s.jsx)(n.em,{children:"other"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["As a starting point, XP attributes points to learners for the actions of educational level ",(0,s.jsx)(n.em,{children:"participating"}),", when they ",(0,s.jsx)(n.em,{children:"create"}),", ",(0,s.jsx)(n.em,{children:"edit"})," or ",(0,s.jsx)(n.em,{children:"read"})," course contents. For example, they would receive ",(0,s.jsx)(n.em,{children:"45"})," points when creating a new forum discussion, and receive ",(0,s.jsx)(n.em,{children:"9"})," points when reading course resources."]}),"\n",(0,s.jsx)(n.p,{children:"These default rules are simple but educators can do a lot more. They can create much more granular rules, such as giving more or less points for a specific activity, or giving more value to submitting one assignment over another, etc."}),"\n",(0,s.jsx)(n.h2,{id:"actions-that-are-ignored",children:"Actions that are ignored"}),"\n",(0,s.jsxs)(n.p,{children:["Only the users with the ",(0,s.jsx)(n.a,{href:"/xp/docs/getting-started/permissions",children:"capability"})," ",(0,s.jsx)(n.em,{children:"block/xp:earnxp"})," can earn points. By default, this capability is given to the student role. Also, actions triggered by guests, non-logged in users or administrators are ignored."]}),"\n",(0,s.jsx)(n.p,{children:"The following events are always ignored:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Events from another ",(0,s.jsx)(n.em,{children:"context"})," than course or module"]}),"\n",(0,s.jsxs)(n.li,{children:["Events having another educational level than ",(0,s.jsx)(n.em,{children:"participating"})]}),"\n",(0,s.jsxs)(n.li,{children:["Events flagged as ",(0,s.jsx)(n.em,{children:"anonymous"}),", e.g. in an anonymous Feedback"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The default rules of XP ignore some events that are redundant, and would cause points to be awarded twice for the same action."}),"\n",(0,s.jsxs)(n.p,{children:["Repeated actions within a short time interval are also ignored to prevent cheating when the ",(0,s.jsx)(n.a,{href:"/xp/docs/getting-started/cheat-guard",children:"cheat guard"})," is enabled."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Since XP 3.15, administrators can be allowed to earn points by enabling the ",(0,s.jsx)(n.code,{children:"adminscanearnxp"})," admin setting."]})}),"\n",(0,s.jsx)(n.h3,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Properties of events at ",(0,s.jsx)(n.a,{href:"https://docs.moodle.org/dev/Event_2#Properties",children:"Moodle documentation"})]}),"\n",(0,s.jsxs)(n.li,{children:["List of all events at ",(0,s.jsx)(n.a,{href:"https://docs.moodle.org/en/Events_list_report",children:"Moodle documentation"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);