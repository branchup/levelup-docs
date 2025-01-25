"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[2919],{5642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var r=t(4848),s=t(8453),i=t(5285),o=t(1470),a=t(9365);const l={title:"Web Services API",description:"Award points from an external service via the Moodle Web Services API.",sidebar_position:100,slug:"/webservices-api/award-points"},c="Award points via the Web Services API",u={id:"points/award-via-api",title:"Web Services API",description:"Award points from an external service via the Moodle Web Services API.",source:"@site/xp/docs/points/award-via-api.mdx",sourceDirName:"points",slug:"/webservices-api/award-points",permalink:"/xp/docs/webservices-api/award-points",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Web Services API",description:"Award points from an external service via the Moodle Web Services API.",sidebar_position:100,slug:"/webservices-api/award-points"},sidebar:"tutorialSidebar",previous:{title:"Reset points",permalink:"/xp/docs/how-to/reset-learners-points"},next:{title:"Leaderboard",permalink:"/xp/docs/category/leaderboard"}},d={},h=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Constructing the request",id:"constructing-the-request",level:2},{value:"Sample query",id:"sample-query",level:3},{value:"Response",id:"response",level:4},{value:"Notes",id:"notes",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"award-points-via-the-web-services-api",children:"Award points via the Web Services API"}),"\n","\n",(0,r.jsx)(i.A,{}),"\n",(0,r.jsx)(n.p,{children:"The Web Services API of Moodle can be used to award points to students. This can be useful to automate the attribution of points for actions taken in another system."}),"\n",(0,r.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"An XP+ plan including API support"}),"\n",(0,r.jsxs)(n.li,{children:["Moodle Web Services ",(0,r.jsx)(n.a,{href:"https://docs.moodle.org/en/Using_web_services",children:"configured and enabled"})," for the function ",(0,r.jsx)(n.code,{children:"local_xp_award_points"})]}),"\n",(0,r.jsx)(n.li,{children:"A Web Service token to authenticate with the API"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructing-the-request",children:"Constructing the request"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["This guide assumes that the default ",(0,r.jsx)(n.code,{children:"rest"})," Web Service plugin is used. If you are using a different Web Service plugin than the standard one, please refer to their documentation."]})}),"\n",(0,r.jsxs)(n.p,{children:["The Web Service function to award points is ",(0,r.jsx)(n.code,{children:"local_xp_award_points"}),", and it requires the following arguments:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userid"})," (int): The user ID of the Moodle user to whom points should be given"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"points"})," (int): The number of points to give to the user"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"courseid"})," (int): The ID of the course in which the points are given, when XP is used sitewide, use ",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The default ",(0,r.jsx)(n.code,{children:"rest"})," Web Service plugin requires:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["All requests to be ",(0,r.jsx)(n.code,{children:"POST"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["All requests to be sent to ",(0,r.jsx)(n.code,{children:"https://moodle.example.com/webservice/rest/server.php"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["All requests to be ",(0,r.jsx)(n.code,{children:"form"})," encoded, not the typical JSON."]}),"\n",(0,r.jsxs)(n.li,{children:["A body (or query) parameter ",(0,r.jsx)(n.code,{children:"wstoken"})," to declare the contain the authentication token."]}),"\n",(0,r.jsxs)(n.li,{children:["A body (or query) parameter ",(0,r.jsx)(n.code,{children:"wsfunction"})," to reference the Web Service function to call."]}),"\n",(0,r.jsxs)(n.li,{children:["A body (or query) parameter ",(0,r.jsx)(n.code,{children:"moodlewsrestformat"})," with value ",(0,r.jsx)(n.code,{children:"json"})," to get a JSON response."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sample-query",children:"Sample query"}),"\n",(0,r.jsxs)(n.p,{children:["Here is a sample query awarding ",(0,r.jsx)(n.strong,{children:"10"})," points to the user with ID ",(0,r.jsx)(n.strong,{children:"20"}),", in the course ",(0,r.jsx)(n.strong,{children:"30"}),". Replace ",(0,r.jsx)(n.strong,{children:"WSTOKEN"})," with your Webservice Token."]}),"\n","\n",(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(a.A,{value:"httpie",label:"HTTPie",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"http -f POST https://moodle.example.com/webservice/rest/server.php wstoken=WSTOKEN wsfunction=local_xp_award_points moodlewsrestformat=json points=10 userid=20 courseid=30\n"})}),(0,r.jsxs)(n.p,{children:["Get ",(0,r.jsx)(n.a,{href:"https://httpie.io/cli",children:"HTTPie CLI"})]})]}),(0,r.jsx)(a.A,{value:"curl",label:"curl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'curl -X POST https://moodle.example.com/webservice/rest/server.php -d "wstoken=WSTOKEN" -d "wsfunction=local_xp_award_points" -d "moodlewsrestformat=json" -d "points=10" -d "userid=20" -d "courseid=30"\n'})})}),(0,r.jsx)(a.A,{value:"plain",label:"Plain text",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"POST /webservice/rest/server.php HTTP/1.1\n...\nContent-Type: application/x-www-form-urlencoded; charset=utf-8\n\nwstoken=WSTOKEN&wsfunction=local_xp_award_points&moodlewsrestformat=json&courseid=30&userid=20&points=10\n"})})})]}),"\n",(0,r.jsx)(n.h4,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(n.p,{children:["After a successful request, the response will include an object with the updated total number of points of the user, for instance ",(0,r.jsx)(n.strong,{children:"1200"})," below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{"xp": 1200}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The permissions are checked in the system context when used sitewide, else in the course context."}),"\n",(0,r.jsxs)(n.li,{children:["The user calling the API must have the permissions ",(0,r.jsx)(n.code,{children:"block/xp:manage"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["The user to receive points must have the permission ",(0,r.jsx)(n.code,{children:"block/xp:earnxp"}),"."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(8215);const s={tabItem:"tabItem_Ymn6"};var i=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(6540),s=t(8215),i=t(3104),o=t(6347),a=t(205),l=t(7485),c=t(1682),u=t(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=x({queryString:t,groupId:s}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),b=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=a[t].value;s!==r&&(c(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(w,{...e,...n})]})}function A(e){const n=(0,f.A)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(n))}},5285:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(8774);const s={content:"content_WJXq",pill:"pill_Da8E"};var i=t(4848);function o(e){let{someOnly:n=!1,plan:t=""}=e;return(0,i.jsx)("p",{className:s.content,children:(0,i.jsx)("div",{className:s.pill,children:n?(0,i.jsxs)(i.Fragment,{children:["Some features require ",(0,i.jsxs)(r.A,{to:"/xp/docs/#xp-plus",children:["Level Up XP+ ",t]})]}):(0,i.jsxs)(i.Fragment,{children:["This features requires ",(0,i.jsxs)(r.A,{to:"/xp/docs/#xp-plus",children:["Level Up XP+ ",t]})]})})})}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);