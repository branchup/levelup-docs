"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[4864],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(o),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2796:(e,t,o)=>{o.d(t,{Z:()=>p});var n=o(9960),r=o(7294);const a="content_WJXq",i="pill_Da8E";function p(){return r.createElement("p",{className:a},r.createElement("div",{className:i},"This features requires ",r.createElement(n.Z,{to:"/xp/docs/#xp-plus"},"Level Up XP+")))}},860:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(7462),r=(o(7294),o(3905)),a=o(2796);const i={description:"Drops are code snippets that can be hidden in content."},p="Use drops",s={unversionedId:"how-to/use-drops/index",id:"how-to/use-drops/index",title:"Use drops",description:"Drops are code snippets that can be hidden in content.",source:"@site/xp/docs/how-to/use-drops/index.mdx",sourceDirName:"how-to/use-drops",slug:"/how-to/use-drops/",permalink:"/xp/docs/how-to/use-drops/",draft:!1,tags:[],version:"current",frontMatter:{description:"Drops are code snippets that can be hidden in content."},sidebar:"tutorialSidebar",previous:{title:"Set-up the team leaderboard",permalink:"/xp/docs/how-to/setup-team-leaderboard/team-leaderboard"},next:{title:"Use shortcodes",permalink:"/xp/docs/how-to/use-shortcodes/"}},l={},d=[{value:"Creating drops",id:"creating-drops",level:2},{value:"Placing the drop",id:"placing-the-drop",level:2},{value:"Backup and restore",id:"backup-and-restore",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:d};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-drops"},"Use drops"),(0,r.kt)(a.Z,{mdxType:"RequiresXpPlus"}),(0,r.kt)("p",null,"Drops are code snippets that an instructor can ",(0,r.kt)("em",{parentName:"p"},"hide")," in the content of a course to award points when said content is being presented to the learner."),(0,r.kt)("p",null,"The drops can be placed in many locations, such as the description of an activity, the feedback at the end of a quiz, the page of a lesson, and more."),(0,r.kt)("p",null,"By placing drops in these locations, an instructor can create new ways to award points, reward deep learning and even provide points for failing a question!"),(0,r.kt)("p",null,"Drops are invisible to the learner and only award their associated points once."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Why is it called drop?")," In video games, some characters can ",(0,r.kt)("em",{parentName:"p"},"drop")," items or experience points on the ground for the player to pick up. These items and points are commonly referred to as drops.")),(0,r.kt)("h2",{id:"creating-drops"},"Creating drops"),(0,r.kt)("p",null,"Navigate to the page found in the plugin's ",(0,r.kt)("em",{parentName:"p"},"Settings > Points > Drops"),", and click on the button to add a drop. You will be asked to provide the name and points of the drop."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"name")," is only visible to you and is useful to organise your drops. The name will be displayed to ",(0,r.kt)("em",{parentName:"p"},"you")," when you preview the content where the snippet was place."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"points")," is the amount of points to award a learner when they load the page where the drop has been placed. Points are only awarded the first time the drop has been found."),(0,r.kt)("p",null,"There also is an option to disable the drop, in which case it will not award points until it is enabled again."),(0,r.kt)("p",null,"Once the information has been provided, continue by saving the page."),(0,r.kt)("h2",{id:"placing-the-drop"},"Placing the drop"),(0,r.kt)("p",null,"Once a drop has been created, you need to copy its snippet and place it in some content."),(0,r.kt)("p",null,"To get the code snippet of the drop, click on its name from the ",(0,r.kt)("em",{parentName:"p"},"Settings > Points > Drops")," page. This will open a popup showing a snippet looking something like ",(0,r.kt)("inlineCode",{parentName:"p"},"[xpdrop secret=abc123 id=123]"),". Copy the snippet to your clipboard."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example of code snippet",src:o(7924).Z,width:"488",height:"230"})),(0,r.kt)("p",null,"Now, place this code into some content in Moodle, via an HTML editor, and save. To test your first drop, we recommend that you place it directly on the course page. To do so, navigate to the course page, turn editing on, and edit a section/topic (see menu on the same level as the section name). Place the drop in the section's description and save."),(0,r.kt)("p",null,'As you navigate back to the course page, the drop will display to you as "Drop: Name of drop". At this moment, any learner visiting the course will earn the points associated to the drop, once.'),(0,r.kt)("p",null,"That's it!"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that the code snippet ",(0,r.kt)("strong",{parentName:"p"},"must not")," be shared with learners.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Did you know that you can wrap the snippet within the shortcode ",(0,r.kt)("inlineCode",{parentName:"p"},"[xpiflevel]")," to conditionally award the drop points? The example code below will only trigger the drop if the learner's level is below 5. ",(0,r.kt)("a",{parentName:"p",href:"/xp/docs/how-to/use-shortcodes/#xpiflevel"},"Read more")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"[xpiflevel <5][xpdrop secret=abc123 id=123][/xpiflevel]\n"))),(0,r.kt)("h2",{id:"backup-and-restore"},"Backup and restore"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This section is only relevant to drops and backups created on ",(0,r.kt)("strong",{parentName:"p"},"versions prior to XP+ 1.16."))),(0,r.kt)("p",null,"Before XP+ 1.16, drops could not be backed up and restored on the same site. In short, this was due to the lack of unique identifier in the drop snippet. Since XP+ 1.6, the drop shortcode includes both the drop secret, and the drop ID. This allows for backups to be restored on the same site."),(0,r.kt)("p",null,"Note that all shortcodes should be updated to the new shortcode including both secret and ID for their restoration to work."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If the drop does not appear to be working, please check each items in the following order:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Is the drop "enabled" in its settings?'),(0,r.kt)("li",{parentName:"ul"},"Is the code snippet correct?"),(0,r.kt)("li",{parentName:"ul"},'Is the drop displayed as "Drop: Name of drop" to the instructor?',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If not, the plugin ",(0,r.kt)("a",{parentName:"li",href:"https://moodle.org/plugins/filter_shortcodes"},"Shortcodes")," may be missing."),(0,r.kt)("li",{parentName:"ul"},"Or, the plugin Shortcodes is not enabled in the given context, see filters."),(0,r.kt)("li",{parentName:"ul"},"Or, the content is not compatible with filters."))),(0,r.kt)("li",{parentName:"ul"},"Has the test user previously earned this drop? In doubt create a new drop, or use a new user account."),(0,r.kt)("li",{parentName:"ul"},"Has the user earned the points? Check their XP logs.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If not, this is likely a permission issue. The user needs the permission ",(0,r.kt)("em",{parentName:"li"},"block/xp:earnxp")," to earn points from drops.")))))}u.isMDXComponent=!0},7924:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/snippet-faf51969fd6c45fbc5dc5f9d428a077a.png"}}]);