"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[953],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=o,c=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return r?a.createElement(c,s(s({ref:t},m),{},{components:r})):a.createElement(c,s({ref:t},m))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},228:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);function o(){return a.createElement("p",null,"This features requires Level Up XP+")}},2790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=r(7462),o=(r(7294),r(3905)),n=r(228);const s={slug:"team-leaderboard",title:"Set-up the team leaderboard"},i="Set-up the team leaderboard",l={unversionedId:"how-to/setup-team-leaderboard/index",id:"how-to/setup-team-leaderboard/index",title:"Set-up the team leaderboard",description:"The team ladder, or team leaderboard, is a ranking of teams based on their members' points.",source:"@site/xp/docs/how-to/setup-team-leaderboard/index.mdx",sourceDirName:"how-to/setup-team-leaderboard",slug:"/how-to/setup-team-leaderboard/team-leaderboard",permalink:"/xp/docs/how-to/setup-team-leaderboard/team-leaderboard",draft:!1,tags:[],version:"current",frontMatter:{slug:"team-leaderboard",title:"Set-up the team leaderboard"},sidebar:"tutorialSidebar",previous:{title:"Reset learners' points",permalink:"/xp/docs/how-to/reset-learners-points/"},next:{title:"Use drops",permalink:"/xp/docs/how-to/use-drops/"}},p={},m=[{value:"Constructing the teams",id:"constructing-the-teams",level:2},{value:"Course groups",id:"course-groups",level:3},{value:"Tips",id:"tips",level:4},{value:"Cohorts",id:"cohorts",level:3},{value:"The ranking strategy",id:"the-ranking-strategy",level:2},{value:"Points",id:"points",level:3},{value:"Points (with compensation)",id:"points-with-compensation",level:3},{value:"Progress",id:"progress",level:3}],d={toc:m};function u(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up-the-team-leaderboard"},"Set-up the team leaderboard"),(0,o.kt)(n.Z,{mdxType:"RequiresXpPlus"}),(0,o.kt)("p",null,"The team ladder, or team leaderboard, is a ranking of teams based on their members' points."),(0,o.kt)("h2",{id:"constructing-the-teams"},"Constructing the teams"),(0,o.kt)("p",null,"The setting ",(0,o.kt)("em",{parentName:"p"},"Team up students using")," determines how students are grouped together."),(0,o.kt)("h3",{id:"course-groups"},"Course groups"),(0,o.kt)("p",null,"When set to ",(0,o.kt)("em",{parentName:"p"},"Course groups"),", the groups of the course (or the front page) will be the teams. Students can belong to more than one team if they are members of more than one group. Only groups with at least one member with points will be displayed in the leaderboard."),(0,o.kt)("p",null,"To limit the groups displayed in the leaderboard:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new ",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Groupings"},"Grouping")),(0,o.kt)("li",{parentName:"ol"},"Add all relevant groups to the above grouping"),(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/39/en/Course_settings#Default_grouping"},"course settings")),(0,o.kt)("li",{parentName:"ol"},"Set the course's ",(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Groupings#Setting_the_default_grouping"},"default grouping")," to the grouping from step #1")),(0,o.kt)("h4",{id:"tips"},"Tips"),(0,o.kt)("p",null,"Add pictures to the groups to make the leaderboard more personalised. Pictures can be added from the Moodle interface where the groups are managed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Group leaderboard with pictures",src:r(1804).Z,width:"649",height:"299"})),(0,o.kt)("h3",{id:"cohorts"},"Cohorts"),(0,o.kt)("p",null,"When set to ",(0,o.kt)("em",{parentName:"p"},"Cohors")," the teams will be based on the system cohorts. You can mark cohorts as hidden to prevent them from being displayed on the leaderboard."),(0,o.kt)("h2",{id:"the-ranking-strategy"},"The ranking strategy"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'Prior to Level Up XP+ v1.10.0, this was called "Order by"'),"."),(0,o.kt)("p",null,"This option determines how the teams are ranked against one another."),(0,o.kt)("h3",{id:"points"},"Points"),(0,o.kt)("p",null,"When set to ",(0,o.kt)("em",{parentName:"p"},"Points"),", the teams are ranked based on the sum of the points of its members. This works well when team have similar sizes, or when team members can ",(0,o.kt)("em",{parentName:"p"},"do more")," to earn more points and thus compensate their lack of member."),(0,o.kt)("h3",{id:"points-with-compensation"},"Points (with compensation)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Introduced in Level Up XP+ v1.10.0")),(0,o.kt)("p",null,"When set to ",(0,o.kt)("em",{parentName:"p"},"Points (with compensation)"),", the points of teams with less members than others are compensated using their team's average per member. For example, if a team lacks 3 members, their total points will be increased by three times their average per member. This creates a balanced ranking where all teams have equal chances."),(0,o.kt)("p",null,"The following document illustrates the computations: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1SOZbBx5ImheUhOdoOCCnZ2m3FbAuV4uz0hSyXJQb6Hw/edit"},"Team ladder compensation example")),(0,o.kt)("h3",{id:"progress"},"Progress"),(0,o.kt)("p",null,"When set to ",(0,o.kt)("em",{parentName:"p"},"Progress"),", the teams are ranked based on their overall progression towards all of its members reaching the ultimate level, without compensating their points. You may want to use ",(0,o.kt)("em",{parentName:"p"},"Progress")," when the teams are unbalanced, for example when some teams have more members than others."))}u.isMDXComponent=!0},1804:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/group-pictures-06df9033de5141a930bc5a5c6ed71acf.png"}}]);