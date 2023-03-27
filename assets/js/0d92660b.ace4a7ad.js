"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[8168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(n),c=o,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?i.createElement(g,a(a({ref:t},d),{},{components:n})):i.createElement(g,a({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var i=n(7462),o=(n(7294),n(3905));const l={slug:"/install",sidebar_position:0,title:"Installing XP"},a="Installing Level Up XP",r={unversionedId:"getting-started/installation/index",id:"getting-started/installation/index",title:"Installing XP",description:"This document relates to the free version of XP, for the add-on XP+, please read this page.",source:"@site/xp/docs/getting-started/installation/index.mdx",sourceDirName:"getting-started/installation",slug:"/install",permalink:"/xp/docs/install",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/install",sidebar_position:0,title:"Installing XP"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/xp/docs/category/getting-started"},next:{title:"XP+",permalink:"/xp/docs/install-plus"}},p={},s=[{value:"Guided",id:"guided",level:2},{value:"Zip upload",id:"zip-upload",level:2},{value:"Manual installation",id:"manual-installation",level:2},{value:"Using git",id:"using-git",level:2},{value:"Additional resources",id:"additional-resources",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-level-up-xp"},"Installing Level Up XP"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This document relates to the free version of XP, for the add-on XP+, please ",(0,o.kt)("a",{parentName:"p",href:"/xp/docs/install-plus"},"read this page"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Also install the ",(0,o.kt)("a",{parentName:"p",href:"/xp/docs/getting-started/installation/recommended-plugins"},"recommended plugins")," to benefit from all features!")),(0,o.kt)("h2",{id:"guided"},"Guided"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This method is not always available. It depends on the Moodle adminstrator and hosting provider.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login to your Moodle site and navigate to ",(0,o.kt)("em",{parentName:"li"},"Site administration > Plugins > Install plugins"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on the button reading ",(0,o.kt)("em",{parentName:"li"},"Install plugins from the Moodle plugins directory"),". This will redirect you to moodle.org."),(0,o.kt)("li",{parentName:"ol"},"In the search field, type ",(0,o.kt)("inlineCode",{parentName:"li"},"level up"),' and hit "Search".'),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("em",{parentName:"li"},"Level Up XP"),", it should be the first result."),(0,o.kt)("li",{parentName:"ol"},"Click the button ",(0,o.kt)("em",{parentName:"li"},"Install now")," and select your Moodle site."),(0,o.kt)("li",{parentName:"ol"},"Follow the installation steps.")),(0,o.kt)("p",null,"For more information on installing plugins, please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Installing_plugins"},"official Moodle documentation"),"."),(0,o.kt)("h2",{id:"zip-upload"},"Zip upload"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This method is not always available. It depends on the Moodle adminstrator and hosting provider.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the zip file of the latest version of the plugin from ",(0,o.kt)("a",{parentName:"li",href:"https://moodle.org/plugins/pluginversions.php?plugin=block_xp"},"moodle.org"),"."),(0,o.kt)("li",{parentName:"ol"},"Login to your Moodle site and navigate to ",(0,o.kt)("em",{parentName:"li"},"Site administration > Plugins > Install plugins"),"."),(0,o.kt)("li",{parentName:"ol"},"Upload the zip file in the form, and follow the steps.")),(0,o.kt)("p",null,"For more information on installing plugins, please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Installing_plugins"},"official Moodle documentation"),"."),(0,o.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Level Up XP")," is a Moodle plugin of type ",(0,o.kt)("inlineCode",{parentName:"p"},"block"),", it needs to be extracted in the ",(0,o.kt)("inlineCode",{parentName:"p"},"blocks/")," directory."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the zip file of the latest version of the plugin from ",(0,o.kt)("a",{parentName:"li",href:"https://moodle.org/plugins/pluginversions.php?plugin=block_xp"},"moodle.org"),"."),(0,o.kt)("li",{parentName:"ol"},"Extract the content of the zip file in the folder ",(0,o.kt)("inlineCode",{parentName:"li"},"blocks")," of your Moodle installation."),(0,o.kt)("li",{parentName:"ol"},"If you have extracted the content at the right place, the following file should be present: ",(0,o.kt)("inlineCode",{parentName:"li"},"blocks/xp/version.php"),"."),(0,o.kt)("li",{parentName:"ol"},"Visit the admin notifications page to trigger the installation.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("em",{parentName:"li"},"Site administration > Notifications"),"."),(0,o.kt)("li",{parentName:"ul"},"Or directly visit ",(0,o.kt)("em",{parentName:"li"},"your.moodle.example.com"),(0,o.kt)("strong",{parentName:"li"},"/admin/index.php"),"."))),(0,o.kt)("li",{parentName:"ol"},"Follow the Moodle installation process.")),(0,o.kt)("p",null,"For more information on installing plugins, please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Installing_plugins"},"official Moodle documentation"),"."),(0,o.kt)("h2",{id:"using-git"},"Using git"),(0,o.kt)("p",null,"You may choose to install the plugin using git. However, please note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," should not be used. The ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch is reserved for development, can contain unstable code, and is certainly not recommended in production."),(0,o.kt)("p",null,"We recommend to checkout the latest tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd blocks/xp\ngit tag -l | sort -Vr | head -1\ngit checkout <tag here>\n")),(0,o.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://moodle.org/plugins/pluginversions.php?plugin=block_xp"},"Latest releases")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/FMCorz/moodle-block_xp"},"Git repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Installing_plugins"},"Moodle documentation: Installing plugins"))))}u.isMDXComponent=!0}}]);