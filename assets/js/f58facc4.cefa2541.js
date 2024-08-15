"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[2783],{4678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453),i=t(5285);const r={sidebar_position:4,description:"Drops are code snippets that can be hidden in content.",slug:"/how-to/use-drops"},d="Drops",a={id:"points/drops/index",title:"Drops",description:"Drops are code snippets that can be hidden in content.",source:"@site/xp/docs/points/drops/index.mdx",sourceDirName:"points/drops",slug:"/how-to/use-drops",permalink:"/xp/docs/how-to/use-drops",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Drops are code snippets that can be hidden in content.",slug:"/how-to/use-drops"},sidebar:"tutorialSidebar",previous:{title:"Grade rules",permalink:"/xp/docs/how-to/grade-based-rewards"},next:{title:"Import",permalink:"/xp/docs/how-to/import-points/importing-points-from-csv"}},p={},c=[{value:"Creating drops",id:"creating-drops",level:2},{value:"Placing the drop",id:"placing-the-drop",level:2},{value:"Backup and restore",id:"backup-and-restore",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"drops",children:"Drops"}),"\n","\n",(0,o.jsx)(i.A,{}),"\n",(0,o.jsxs)(n.p,{children:["Drops are code snippets that an instructor can ",(0,o.jsx)(n.em,{children:"hide"})," in the content of a course to award points when said content is being presented to the learner."]}),"\n",(0,o.jsx)(n.p,{children:"The drops can be placed in many locations, such as the description of an activity, the feedback at the end of a quiz, the page of a lesson, and more."}),"\n",(0,o.jsx)(n.p,{children:"By placing drops in these locations, an instructor can create new ways to award points, reward deep learning and even provide points for failing a question!"}),"\n",(0,o.jsx)(n.p,{children:"Drops are invisible to the learner and only award their associated points once."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Why is it called drop?"})," In video games, some characters can ",(0,o.jsx)(n.em,{children:"drop"})," items or experience points on the ground for the player to pick up. These items and points are commonly referred to as drops."]})}),"\n",(0,o.jsx)(n.h2,{id:"creating-drops",children:"Creating drops"}),"\n",(0,o.jsxs)(n.p,{children:["Navigate to the page found in the plugin's ",(0,o.jsx)(n.em,{children:"Settings > Points > Drops"}),", and click on the button to add a drop. You will be asked to provide the name and points of the drop."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"name"})," is only visible to you and is useful to organise your drops. The name will be displayed to ",(0,o.jsx)(n.em,{children:"you"})," when you preview the content where the snippet was place."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"points"})," is the amount of points to award a learner when they load the page where the drop has been placed. Points are only awarded the first time the drop has been found."]}),"\n",(0,o.jsx)(n.p,{children:"There also is an option to disable the drop, in which case it will not award points until it is enabled again."}),"\n",(0,o.jsx)(n.p,{children:"Once the information has been provided, continue by saving the page."}),"\n",(0,o.jsx)(n.h2,{id:"placing-the-drop",children:"Placing the drop"}),"\n",(0,o.jsx)(n.p,{children:"Once a drop has been created, you need to copy its snippet and place it in some content."}),"\n",(0,o.jsxs)(n.p,{children:["To get the code snippet of the drop, click on its name from the ",(0,o.jsx)(n.em,{children:"Settings > Points > Drops"})," page. This will open a popup showing a snippet looking something like ",(0,o.jsx)(n.code,{children:"[xpdrop secret=abc123 id=123]"}),". Copy the snippet to your clipboard."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Example of code snippet",src:t(9051).A+"",width:"488",height:"230"})}),"\n",(0,o.jsx)(n.p,{children:"Now, place this code into some content in Moodle, via an HTML editor, and save. To test your first drop, we recommend that you place it directly on the course page. To do so, navigate to the course page, turn editing on, and edit a section/topic (see menu on the same level as the section name). Place the drop in the section's description and save."}),"\n",(0,o.jsx)(n.p,{children:'As you navigate back to the course page, the drop will display to you as "Drop: Name of drop". At this moment, any learner visiting the course will earn the points associated to the drop, once.'}),"\n",(0,o.jsx)(n.p,{children:"That's it!"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["Note that the code snippet ",(0,o.jsx)(n.strong,{children:"must not"})," be shared with learners."]})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["Did you know that you can wrap the snippet within the shortcode ",(0,o.jsx)(n.code,{children:"[xpiflevel]"})," to conditionally award the drop points? The example code below will only trigger the drop if the learner's level is below 5. ",(0,o.jsx)(n.a,{href:"/xp/docs/how-to/use-shortcodes/#xpiflevel",children:"Read more"})]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"[xpiflevel <5][xpdrop secret=abc123 id=123][/xpiflevel]\n"})})]}),"\n",(0,o.jsx)(n.h2,{id:"backup-and-restore",children:"Backup and restore"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This section is only relevant to drops and backups created on ",(0,o.jsx)(n.strong,{children:"versions prior to XP+ 1.16."})]})}),"\n",(0,o.jsx)(n.p,{children:"Before XP+ 1.16, drops could not be backed up and restored on the same site. In short, this was due to the lack of unique identifier in the drop snippet. Since XP+ 1.6, the drop shortcode includes both the drop secret, and the drop ID. This allows for backups to be restored on the same site."}),"\n",(0,o.jsx)(n.p,{children:"Note that all shortcodes should be updated to the new shortcode including both secret and ID for their restoration to work."}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.p,{children:"If the drop does not appear to be working, please check each items in the following order:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Is the drop "enabled" in its settings?'}),"\n",(0,o.jsx)(n.li,{children:"Is the code snippet correct?"}),"\n",(0,o.jsxs)(n.li,{children:['Is the drop displayed as "Drop: Name of drop" to the instructor?',"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If not, the plugin ",(0,o.jsx)(n.a,{href:"https://moodle.org/plugins/filter_shortcodes",children:"Shortcodes"})," may be missing."]}),"\n",(0,o.jsx)(n.li,{children:"Or, the plugin Shortcodes is not enabled in the given context, see filters."}),"\n",(0,o.jsx)(n.li,{children:"Or, the content is not compatible with filters."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Has the test user previously earned this drop? In doubt create a new drop, or use a new user account."}),"\n",(0,o.jsxs)(n.li,{children:["Has the user earned the points? Check their XP logs.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If not, this is likely a permission issue. The user needs the permission ",(0,o.jsx)(n.em,{children:"block/xp:earnxp"})," to earn points from drops."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},5285:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(8774);const s={content:"content_WJXq",pill:"pill_Da8E"};var i=t(4848);function r(e){let{someOnly:n=!1}=e;return(0,i.jsx)("p",{className:s.content,children:(0,i.jsx)("div",{className:s.pill,children:n?(0,i.jsxs)(i.Fragment,{children:["Some features require ",(0,i.jsx)(o.A,{to:"/xp/docs/#xp-plus",children:"Level Up XP+"})]}):(0,i.jsxs)(i.Fragment,{children:["This features requires ",(0,i.jsx)(o.A,{to:"/xp/docs/#xp-plus",children:"Level Up XP+"})]})})})}},9051:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/snippet-faf51969fd6c45fbc5dc5f9d428a077a.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);