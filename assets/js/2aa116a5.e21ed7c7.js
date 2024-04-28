"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[7161],{2072:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var n=i(4848),o=i(8453),s=i(5285),c=i(4208);const a={sidebar_position:2,description:"Award points for activity, section and course completion.",slug:"/completion-rules"},r="Completion rules",l={id:"points/completion-rules/index",title:"Completion rules",description:"Award points for activity, section and course completion.",source:"@site/xp/docs/points/completion-rules/index.mdx",sourceDirName:"points/completion-rules",slug:"/completion-rules",permalink:"/xp/docs/completion-rules",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Award points for activity, section and course completion.",slug:"/completion-rules"},sidebar:"tutorialSidebar",previous:{title:"My rule is not working",permalink:"/xp/docs/troubleshooting/event-rule-not-working"},next:{title:"Grade rules",permalink:"/xp/docs/how-to/grade-based-rewards"}},d={},h=[{value:"Getting started",id:"getting-started",level:2},{value:"Activity completion",id:"activity-completion",level:2},{value:"Out first condition",id:"out-first-condition",level:3},{value:"Condition types",id:"condition-types",level:3},{value:"Specific activity",id:"specific-activity",level:4},{value:"Activity name",id:"activity-name",level:4},{value:"Any activity",id:"any-activity",level:4},{value:"Section completion",id:"section-completion",level:2},{value:"Condition types",id:"condition-types-1",level:3},{value:"Specific section",id:"specific-section",level:4},{value:"Any section",id:"any-section",level:4},{value:"Course completion",id:"course-completion",level:2}];function p(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"completion-rules",children:"Completion rules"}),"\n","\n",(0,n.jsx)(s.A,{}),"\n",(0,n.jsx)(t.p,{children:"The completion rules can be used to award points based on the completion of activities, sections and courses."}),"\n",(0,n.jsxs)(t.p,{children:["The criteria for ",(0,n.jsx)(t.a,{href:"https://docs.moodle.org/en/Using_Activity_completion",children:"completing activities"})," and ",(0,n.jsx)(t.a,{href:"https://docs.moodle.org/en/Using_Course_completion",children:"completing courses"})," are defined within Moodle. Giving points for completing those follows the natural progression of the learner within their learning material."]}),"\n",(0,n.jsx)(t.p,{children:'The "Completion rules" can be found the "Points" tab.'}),"\n",(0,n.jsx)(c.A,{img:i(2374),children:"Example of a few conditions awarding different amount of points for different activities."}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,n.jsx)(t.p,{children:"Before exploring each of the activity, section and course completion methods, there are a few concepts to know about."}),"\n",(0,n.jsx)(t.p,{children:'The number of points to be awarded is assigned to a condition. For instance, we can give 10 points to "any activity". "Any activity" is a type of condition. Multiple conditions can be added, and some conditions can also be added multiple times.'}),"\n",(0,n.jsx)(t.p,{children:"The conditions are evaluated in the order in which they appear on the screen, from top to bottom. The first condition that has had its criteria fulfilled will give its corresponding points. You do not have to worry about ordering the conditions, we do that for you. Our algorithm orders the conditions by type and points."}),"\n",(0,n.jsx)(t.p,{children:"To prevent an activity, section or course from giving any points, you can create new condition targeting it and assign it 0 points. Then, make sure that this new condition ranks above the other potentially conflicting ones."}),"\n",(0,n.jsxs)(t.p,{children:["XP will never award points more than once for the completion of the same item. That is to circumvent potential abuses when Moodle would allow the completion to occur multiple times, such as with manual completion. This fact is important when testing the rules as the very first reward will prevent any subsequent one. Between tests, we recommend ",(0,n.jsx)(t.a,{href:"/xp/docs/how-to/reset-learners-points",children:"resetting points"}),", or using different learner accounts."]}),"\n",(0,n.jsx)(t.h2,{id:"activity-completion",children:"Activity completion"}),"\n",(0,n.jsx)(t.p,{children:"Definining the number of points to award is done by choosing a condition and attributing it a certain amount of points."}),"\n",(0,n.jsx)(t.h3,{id:"out-first-condition",children:"Out first condition"}),"\n",(0,n.jsx)(t.p,{children:'The easiest way to get started is to add the condition "Any activity". After clicking "Add" and selecting "Any activity", you should be asked to set the number of points to award. Enter 10 points and press "Save".'}),"\n",(0,n.jsx)(t.p,{children:"The resulting screen should look something like this:"}),"\n",(0,n.jsx)(c.A,{img:i(7146),children:"Any activity completed gives 10 points."}),"\n",(0,n.jsx)(t.p,{children:"That's it, our first condition is set. With the above, any activity completed will give 10 points. That's a good starting point, but you will likely want to use other condition types to create some variety in the point rewards."}),"\n",(0,n.jsx)(t.h3,{id:"condition-types",children:"Condition types"}),"\n",(0,n.jsx)(t.p,{children:"There are several condition types available to decide how many points to award for each activity. Some condition types can be used multiple times, so cannot. At the time of writing, three types were available:"}),"\n",(0,n.jsx)(t.h4,{id:"specific-activity",children:"Specific activity"}),"\n",(0,n.jsx)(t.p,{children:"This condition allows to select a specific activity and assign the number of points to be awarded when it is completed. You will find this useful to give more value to a particular activity such as an important quiz, or the opposite, you may want to set a particular activity to 0, so that it will not award any points."}),"\n",(0,n.jsx)(t.h4,{id:"activity-name",children:"Activity name"}),"\n",(0,n.jsx)(t.p,{children:'This condition type allow to target activities based on their name. This is useful when many activities following a naming convention are present in the course. For instance, if you had a year-long course with 52 weeks, and in each week you were running a "Weekly survey", adding a condition by activity name equal to "Weekly survey" would match all 52 surveys at once.'}),"\n",(0,n.jsx)(t.h4,{id:"any-activity",children:"Any activity"}),"\n",(0,n.jsx)(t.p,{children:"This acts as the catch-all condition. Any activity that has not been matched by another condition will fall into this category."}),"\n",(0,n.jsx)(t.h2,{id:"section-completion",children:"Section completion"}),"\n",(0,n.jsx)(t.p,{children:"The completion of a section is a concept introduced in XP, it refers to the completion of all activities contained within an individual section. A section is considered completed when the last of its activities is completed."}),"\n",(0,n.jsx)(t.p,{children:"Definining the number of points to award is done by choosing a condition and attributing it a certain amount of points."}),"\n",(0,n.jsx)(t.h3,{id:"condition-types-1",children:"Condition types"}),"\n",(0,n.jsx)(t.h4,{id:"specific-section",children:"Specific section"}),"\n",(0,n.jsx)(t.p,{children:"This condition allows to select a specific section and assign the number of points to be awarded when it is completed."}),"\n",(0,n.jsx)(t.h4,{id:"any-section",children:"Any section"}),"\n",(0,n.jsx)(t.p,{children:"This acts as the catch-all condition. Any section that has not been matched by another condition will fall into this category."}),"\n",(0,n.jsx)(t.h2,{id:"course-completion",children:"Course completion"}),"\n",(0,n.jsx)(t.p,{children:'The completion of a course follows the same principles as activity and section completion, except that the number of condition types available is limited to "This course", and "Any course" when used sitewide.'}),"\n",(0,n.jsxs)(t.p,{children:["Note that the completion of a course is calculated by Moodle at regular intervals and may not be triggered immediately. In technical terns, they require ",(0,n.jsx)(t.a,{href:"https://docs.moodle.org/en/Cron",children:"cron"})," to run. Please keep this in mind when testing course completion."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5285:(e,t,i)=>{i.d(t,{A:()=>c});var n=i(8774);const o={content:"content_WJXq",pill:"pill_Da8E"};var s=i(4848);function c(){return(0,s.jsx)("p",{className:o.content,children:(0,s.jsxs)("div",{className:o.pill,children:["This features requires ",(0,s.jsx)(n.A,{to:"/xp/docs/#xp-plus",children:"Level Up XP+"})]})})}},4208:(e,t,i)=>{i.d(t,{A:()=>s});const n={figure:"figure_TxPL",figcaption:"figcaption_J8dp"};var o=i(4848);function s(e){let{img:t,children:i}=e;const s="string"==typeof t?t:t.default;return(0,o.jsxs)("figure",{className:n.figure,children:[(0,o.jsx)("img",{src:s,className:n.img}),(0,o.jsx)("figcaption",{className:n.figcaption,children:i})]})}},7146:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n="data:image/png;base64,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"},2374:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});const n=i.p+"assets/images/act-example-16df9b560014e784d4b87059b12322da.png"},8453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>a});var n=i(6540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);