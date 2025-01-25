"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[8509],{8724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var o=n(4848),s=n(8453);const r={description:"Is the event rules page not working as intended?"},i="The event rules page is broken",l={id:"troubleshooting/rules-page-broken/index",title:"The event rules page is broken",description:"Is the event rules page not working as intended?",source:"@site/xp/docs/troubleshooting/rules-page-broken/index.mdx",sourceDirName:"troubleshooting/rules-page-broken",slug:"/troubleshooting/rules-page-broken/",permalink:"/xp/docs/troubleshooting/rules-page-broken/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Is the event rules page not working as intended?"},sidebar:"tutorialSidebar",previous:{title:"The plugins are out of sync",permalink:"/xp/docs/troubleshooting/plugins-out-of-sync/"},next:{title:"Teachers cannot access reports and settings",permalink:"/xp/docs/troubleshooting/teachers-cannot-access-settings/"}},a={},h=[{value:"Identify the source",id:"identify-the-source",level:2},{value:"Getting help",id:"getting-help",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"the-event-rules-page-is-broken",children:"The event rules page is broken"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["This page is about the ",(0,o.jsx)(t.a,{href:"/xp/docs/points/event-rules",children:"Event rules"})," page, not how the rules work."]})}),"\n",(0,o.jsx)(t.p,{children:"Are you having problems with the rules page and experiencing any of the following symptoms?"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Clicking the buttons does nothing"}),"\n",(0,o.jsx)(t.li,{children:"The footer of the page is not visible"}),"\n",(0,o.jsx)(t.li,{children:"The styles are not appearing correctly"}),"\n",(0,o.jsx)(t.li,{children:"The help icons (question mark) do nothing when clicked"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"If you are experiencing any of the above, it means that the page could not load properly and is likely due to an unrecoverable error. In most cases, this is caused by another plugin."}),"\n",(0,o.jsx)(t.p,{children:'The rules page looks at the events declared by other Moodle plugins in order to present them to you. However, if one of these events contains coding errors, this causes a "Fatal error".'}),"\n",(0,o.jsx)(t.p,{children:"The bad news is that there are no workarounds, the bad code needs to be removed. The good news is that we'll help you identify the source of the problem."}),"\n",(0,o.jsx)(t.h2,{id:"identify-the-source",children:"Identify the source"}),"\n",(0,o.jsx)(t.p,{children:"To find the culprit, we need to get access to the error. Please follow these steps to ensure that the full error can be displayed. Note that this requires administrator's rights. If are not administrator of the system, please ask them to take it from here."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'Navigate to "Site administration > Development > Debugging"'}),"\n",(0,o.jsxs)(t.li,{children:["Set the following settings to these values","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Debug messages ",(0,o.jsx)(t.code,{children:"debug"}),": DEVELOPER"]}),"\n",(0,o.jsxs)(t.li,{children:["Display debug messages ",(0,o.jsx)(t.code,{children:"debugdisplay"}),": Yes"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Now that this is done, return to the rules screen, you should see be able to see an error like this at the bottom of the screen:"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Fatal error: Cannot declare class mod_data\\event\\comment_created, because the name is already in use in /var/www/moodle/mod/example/classes/event/comment_created.php on line 36"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The part we are interested in is the path to the file in which the error was found. In the above example, the file is ",(0,o.jsx)(t.code,{children:"comment_created.php"})," contained in a sub folder of ",(0,o.jsx)(t.code,{children:"/mod/example/"}),". From this we can identify that the plugin with the error is the module ",(0,o.jsx)(t.em,{children:"Example"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If the path to the file contains ",(0,o.jsx)(t.code,{children:"/blocks/xp/"})," or ",(0,o.jsx)(t.code,{children:"/local/xp/"})," please let us know as the error would need to be addressed by us."]}),"\n",(0,o.jsx)(t.p,{children:"Otherwise, please get in touch with the development team of the plugin that is referenced in this error and ask them for assistance. Alternatively you can uninstall their plugin, but note that you may lose all the data collected by that plugin by doing so."}),"\n",(0,o.jsx)(t.h2,{id:"getting-help",children:"Getting help"}),"\n",(0,o.jsx)(t.p,{children:"If you are unable to resolve this problem, please get in touch with us and quote the error identified above. It is important that you share the error with us as we cannot help without knowing what the error is."})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var o=n(6540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);