"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[5203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2796:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(9960),r=n(7294);const l="content_WJXq",a="pill_Da8E";function i(){return r.createElement("p",{className:l},r.createElement("div",{className:a},"This features requires ",r.createElement(o.Z,{to:"/xp/docs/#xp-plus"},"Level Up XP+")))}},1794:(e,t,n)=>{n.d(t,{Z:()=>b});var o=n(7294),r=n(7462),l=n(6010),a=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:a,defaultValue:p,values:m,groupId:f,className:h}=e,w=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??w.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)??w[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:I,setTabGroupChoices:O}=(0,s.U)(),[g,x]=(0,o.useState)(y),P=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=f){const e=I[f];null!=e&&e!==g&&b.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,n=P.indexOf(t),o=b[n].value;o!==g&&(j(t),x(o),null!=f&&O(f,String(o)))},z=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;n=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=P[t]??P[P.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},b.map((e=>{let{value:t,label:n,attributes:a}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>P.push(e),onKeyDown:z,onFocus:N,onClick:N},a,{className:(0,l.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":g===t})}),n??t)}))),n?(0,o.cloneElement)(w.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function m(e){const t=(0,a.Z)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function h(e){let{children:t,hidden:n,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,l.Z)(f,r),hidden:n},t)}const w="content_U1ZK";function b(){return o.createElement(m,null,o.createElement(h,{value:"3.12",label:"XP 3.12+",default:!0},o.createElement("div",{className:w},'The rules can be found under the tab "Points".',o.createElement("img",{src:"data:image/png;base64,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",alt:""}))),o.createElement(h,{value:"3.11",label:"XP 3.11 and older"},o.createElement("div",{className:w},'The rules are found under the tab "Rules".',o.createElement("img",{src:"data:image/png;base64,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",alt:""}))))}},7327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var o=n(7462),r=(n(7294),n(3905)),l=n(2796),a=n(1794);const i={},s="Reward course completion",u={unversionedId:"how-to/course-completion/index",id:"how-to/course-completion/index",title:"Reward course completion",description:"Course completion with Level Up XP allows you to reward your students for completing a course. This is particularly useful when the plugin is used For the whole site, where points are gathered for actions taken in any course. In order for Course completion rewards to work, Completion must be enabled in Moodle.",source:"@site/xp/docs/how-to/course-completion/index.mdx",sourceDirName:"how-to/course-completion",slug:"/how-to/course-completion/",permalink:"/xp/docs/how-to/course-completion/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Reward activity completion",permalink:"/xp/docs/how-to/activity-completion/"},next:{title:"Level-based course enrolment",permalink:"/xp/docs/how-to/course-enrolment/level-based-course-enrolment"}},c={},d=[{value:"Important note",id:"important-note",level:3}],p={toc:d};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reward-course-completion"},"Reward course completion"),(0,r.kt)(l.Z,{mdxType:"RequiresXpPlus"}),(0,r.kt)("p",null,"Course completion with ",(0,r.kt)("em",{parentName:"p"},"Level Up XP")," allows you to reward your students for completing a course. This is particularly useful when the plugin is used For the whole site, where points are gathered for actions taken in any course. In order for ",(0,r.kt)("em",{parentName:"p"},"Course completion rewards")," to work, ",(0,r.kt)("em",{parentName:"p"},"Completion")," must be enabled in Moodle."),(0,r.kt)("p",null,"Navigate to the block's ",(0,r.kt)("strong",{parentName:"p"},"rules page"),"."),(0,r.kt)(a.Z,{mdxType:"XpRulesPageLocation"}),(0,r.kt)("p",null,"We will create a new rule telling the plugin that whenever a student complete\u2019s a course, they should receive ",(0,r.kt)("inlineCode",{parentName:"p"},"250")," points. Click on the first ",(0,r.kt)("strong",{parentName:"p"},"+ Add a rule")," option. This will add an empty condition set on top of all the other ones, like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot",src:n(4810).Z,width:"332",height:"88"})),(0,r.kt)("p",null,"After changing the points to be earned to ",(0,r.kt)("inlineCode",{parentName:"p"},"250"),", click on ",(0,r.kt)("strong",{parentName:"p"},"+ Add a condition")," and select ",(0,r.kt)("strong",{parentName:"p"},"Course completion"),". And that\u2019s it, now your students will be rewarded for completing their courses."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot",src:n(9401).Z,width:"419",height:"201"})),(0,r.kt)("h3",{id:"important-note"},"Important note"),(0,r.kt)("p",null,"Points are not awarded instantly, they require ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Cron"},"Moodle cron")," to run. Please keep this in mind when testing this feature."))}m.isMDXComponent=!0},9401:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/course-completion-rule-2f3112ba7976231d5566ff343227c2cb.png"},4810:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);