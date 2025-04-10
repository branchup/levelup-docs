"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[9298],{9293:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=s(4848),i=s(8453);const r={sidebar_position:8},o="Slash arguments",l={id:"installation/slasharguments",title:"Slash arguments",description:"This is a technical page for server administrators and hosting providers.",source:"@site/quest/docs/installation/slasharguments.mdx",sourceDirName:"installation",slug:"/installation/slasharguments",permalink:"/quest/docs/installation/slasharguments",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Permissions",permalink:"/quest/docs/installation/permissions"},next:{title:"Getting started",permalink:"/quest/docs/category/getting-started"}},a={},d=[{value:"Nginx",id:"nginx",level:2},{value:"IIS",id:"iis",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"slash-arguments",children:"Slash arguments"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This is a technical page for server administrators and hosting providers."})}),"\n",(0,t.jsxs)(n.p,{children:["Quest uses Moodle's ",(0,t.jsx)(n.a,{href:"https://docs.moodle.org/en/Using_slash_arguments",children:"slash arguments"})," to determine which view to display to the user. If the web server is not properly configured, the following error may appear: ",(0,t.jsx)(n.em,{children:"Coding error: Controller for route not found"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["See below for ",(0,t.jsx)(n.a,{href:"#nginx",children:"Nginx"})," and ",(0,t.jsx)(n.a,{href:"#iis",children:"IIS"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"nginx",children:"Nginx"}),"\n",(0,t.jsxs)(n.p,{children:["Please ensure that Nginx was set-up according to the ",(0,t.jsx)(n.a,{href:"https://docs.moodle.org/en/Nginx#Nginx",children:"Moodle documentation on Nginx"}),". The plugin has been confirmed to work in this configuration."]}),"\n",(0,t.jsx)(n.p,{children:"If you still do not have success with this, you might have the following rewrite rule in your site definition:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"rewrite ^/(.*.php)(/)(.*)$ /$1?file=/$3 last;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The latter rule assumes that the path should be passed to the ",(0,t.jsx)(n.code,{children:"file"})," argument, and thus creates a conflict with the way Quest handles the routes. If Nginx is configured according to the Moodle documentation, that ",(0,t.jsx)(n.em,{children:"rewrite"})," should not be needed, and thus you may try to remove it and see if it works."]}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, and note that this is discouraged, you can add the follow ",(0,t.jsx)(n.em,{children:"rewrite"})," rule ",(0,t.jsx)(n.strong,{children:"before"})," the previous rewrite rule. Your Nginx site definition should therefore read this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"rewrite ^/(blocks/gearup/.*.php)(/)(.*)$ /$1?_r=/$3 last;\nrewrite ^/(.*.php)(/)(.*)$ /$1?file=/$3 last;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If at this point you're not having any success, consider disabling the Moodle admin setting ",(0,t.jsx)(n.code,{children:"slasharguments"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"iis",children:"IIS"}),"\n",(0,t.jsxs)(n.p,{children:["Please ensure that IIS was set-up according to the ",(0,t.jsx)(n.a,{href:"https://docs.moodle.org/en/Internet_Information_Services",children:"Moodle documentation on IIS"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You will need to add a second rewrite rule for Quest itself, please configure as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Requested URL: Matches the pattern"}),"\n",(0,t.jsx)(n.li,{children:"Using: Regular expressions"}),"\n",(0,t.jsxs)(n.li,{children:["Pattern: ",(0,t.jsx)(n.code,{children:"^(blocks\\/gearup\\/[^\\?]+?\\.php)(\\/.+)$"})]}),"\n",(0,t.jsx)(n.li,{children:"Action: Rewrite"}),"\n",(0,t.jsxs)(n.li,{children:["Rewrite URL: ",(0,t.jsx)(n.code,{children:"{R:1}?_r={R:2} "})]}),"\n",(0,t.jsx)(n.li,{children:"Append query string: Checked"}),"\n",(0,t.jsx)(n.li,{children:"Stop processing of subsequent rule: Checked"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Make sure that this rule takes precedence over the other rule required by Moodle."}),"\n",(0,t.jsxs)(n.p,{children:["If at this point you're not having any success, consider disabling the Moodle admin setting ",(0,t.jsx)(n.code,{children:"slasharguments"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);