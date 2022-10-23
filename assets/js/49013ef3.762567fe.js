"use strict";(self.webpackChunklevelupdocs=self.webpackChunklevelupdocs||[]).push([[6992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,f=u["".concat(l,".").concat(c)]||u[c]||d[c]||o;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2796:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(9960),i=n(7294);const o="content_WJXq",a="pill_Da8E";function p(){return i.createElement("p",{className:o},i.createElement("div",{className:a},"This features requires ",i.createElement(r.Z,{to:"/xp/docs/#xp-plus"},"Level Up XP+")))}},3353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(7462),i=(n(7294),n(3905)),o=n(2796);const a={description:"Define how many total points can be earned per day."},p="Limits points per day",l={unversionedId:"how-to/limit-points-per-day/index",id:"how-to/limit-points-per-day/index",title:"Limits points per day",description:"Define how many total points can be earned per day.",source:"@site/xp/docs/how-to/limit-points-per-day/index.mdx",sourceDirName:"how-to/limit-points-per-day",slug:"/how-to/limit-points-per-day/",permalink:"/xp/docs/how-to/limit-points-per-day/",draft:!1,tags:[],version:"current",frontMatter:{description:"Define how many total points can be earned per day."},sidebar:"tutorialSidebar",previous:{title:"Import points",permalink:"/xp/docs/how-to/import-points/importing-points-from-csv"},next:{title:"Reset learners' points",permalink:"/xp/docs/how-to/reset-learners-points/"}},s={},m=[{value:"Good to know",id:"good-to-know",level:3}],d={toc:m};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"limits-points-per-day"},"Limits points per day"),(0,i.kt)(o.Z,{mdxType:"RequiresXpPlus"}),(0,i.kt)("p",null,"To keep things under control, you may want to cap the amount of points your students can earn per day, or other time window. This can be useful to attempt to reduce the gaps between active and passive students."),(0,i.kt)("p",null,"For the sake of demonstration, let\u2019s decide to cap our students\u2019 maximum earnings to ",(0,i.kt)("inlineCode",{parentName:"p"},"250")," points per day. Navigate to the block\u2019s ",(0,i.kt)("strong",{parentName:"p"},"settings page"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot",src:n(3226).Z,width:"582",height:"44"})),(0,i.kt)("p",null,"Scroll to the section ",(0,i.kt)("strong",{parentName:"p"},"Cheat guard"),". The setting we are interested in is ",(0,i.kt)("strong",{parentName:"p"},"Max. points in time frame"),". The first field contains the maximum number of points allowed, and the two following fields control the time window."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot",src:n(9792).Z,width:"509",height:"61"})),(0,i.kt)("p",null,"The above example shows how to limit to ",(0,i.kt)("inlineCode",{parentName:"p"},"250")," per day."),(0,i.kt)("h3",{id:"good-to-know"},"Good to know"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This setting could have a negative impact on your students\u2019 overall experience, as they may not understand why they stopped earning points, and be discouraged."),(0,i.kt)("li",{parentName:"ul"},"A day is intepreted as ",(0,i.kt)("em",{parentName:"li"},"in the last 24 hours"),", it is not reset at midnight. The same goes for other time windows."),(0,i.kt)("li",{parentName:"ul"},"If the points to be given will exceed our limit, none are given. For example, if a student has already earned 240 out of 250 points in the last 24 hours, and performs an action weighted at 15 points, they will not be given any points.")))}u.isMDXComponent=!0},9792:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf0AAAA9CAYAAACnU7CIAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AABTASURBVHic7d1/VNRlvsDxtxVD4iAEUgzuEc/N8azhcRXbwLhRBHvR2aWja6urpnC1WFlJjZpWY69GV+0Hm0lKsnYlU8KFq1dXa7S7oBveFLbUtYUox/Yy3JUhCRyaAZvB/N4/BgQURX4OMJ/XOZ7jzPeZ7/N85xnmM8/n+3y/zzBFURSEEEIIMeTd5uoGCCGEEKJ/SNAXQggh3IQEfSGEEMJNSNAXQggh3IQEfSGEEMJNSNAXQggh3IQEfSGEEMJNSNAXQggh3IQEfSGEEMJNSNAXQggh3IQEfSGEEMJNSNAXQggh3MQdrm6AEEOdzWbDYrHQ2Njo6qb0Ky8vL3x9fVGr1a5uSrcN1b4bCn0jukeCvhB9yGaz8fXXX3PPPffwgx/8wNXN6Vctxw4MyuAylPtusPeN6D4J+kL0obq6OoKCghg+fLirm9LvWoKJxWIZlIFlKPddT/tmqGZABrreyNBI0BeiD3333XdDMmjcKrVaTVVVlaub0S1Dve+62zdDOQMy0PVGhkaCvhBCiFs2lDMgA11vZM9k9n5bVgPJUfPYahpE9fRXm4UQgqGfARno1Gp1j06r9ELQN7J1XgQRUSkUWK/fai1aRWxEBPO2GnteVV/zDkO/+SVmBt5acXPxPorNfV/PTevt4b4GrSuXMVkaOVFtpehCI+W2yzhc3SYhhBjgeim9r0KtKmP/sVpidP5tnrdSYigDtap3qulz/gRP9O+8GAC1FGdncXrxLMI1fVlPZ/X2ZF+D0BUHJyrq+K+qS5i/b7/Ja/hwHv0nP34+SsVg+cQJIUR/6qX0voqQsBCMhiJq2z5tPYahTMsUbfvS1tI81sTPJjYqgoioOBLXGTDandvMhhRiZ6/jlL2lcBFr4mJJKailU7X7SI6KJ8Owi1Xx85gdF0dc/DoMJvvVInZTAenJ84iNiiIqNo74Vbs41bLrtqlyq4GUqES2FuSxJjmeebPjiJu3in1GO2BmX/Lj/K7MRuHqKGLXFGHHSmneGuLjooiIiCAqLp41eaV0kPzoQj3X6qDeDve1i1WJ85gdF8vslDxKTUVkpMQzb3YscfPWYGibnTAXkZEyj7ioKKJiZ5O4Zh+lHTZ6AHA0kn2qisz/aw34Hrffjs/twwBovHSJ98uqePFsIxYXNlMIIQaqXjunrw7XMcV4iII2AaX2mAFjSAyRbecb2E+RtToLU3gquYc/5sieVLRl6azLd56U1uj0LNUcIz3biB07pVkZlGhXkBpzC6NZlSdQiaFATdK23ew9mEvaxNOkr9+PGcBeStaq9ZwKXsGOw0c5umcjOkcOq9cXcN1PCpUKMGIoULHk9XfZvTeX1JAy3txaiBUNs7a8zgy1muiXj/LhS5F4GnNYn12HbuMBPv74CHte1lGXs56czs5q3LSea3VQbwf7KijSoN+2m725qYQYs3h2TQlhac59J2lK2JpzqvkFRrY2vx/bDh/l6J5XmOHIZvX6oo5/rLiUg8LPL3CkQQHAy3skK388hnf+eQyZ/zyGLVP8meo5DFCoNF8gs0qS/UIIca3em8inDmNmmBlDQcuMslqKDCam6B5qn933DGV57gG2JIXi7wme/uHMCPWjssyEc2yrYVbqYvwN6eQXZJNepGGpXkdXEthhM3UEewJ4EzozEj/jMYprAeMhCqqnsHBpOBpPwFvL3CdiUJ02UNJhlFMxpc2+QkK1YDZR3VFRqw0bKrzV3oAn/hPnsuXgbpK0HRXuQT23tK8Y5/vlrSVEA+rQGYR7A/ij1fphM1c7g3rpfgqqw1jS5v2YtSQGVcmN3g/Xabhwkbx6Z8Bn+Eien+zP/V6343A0UXP5NnxHjuSZyXdx7zAAhfK/X+TEZVe2WAghBp5evGTPmykzw6hLN2BcmITWXMAhUxiLw1Q4CtqWs1N3Opv07UUYq23OyVcOG4S1GZlp5qJ/opCEtflol+cyq0vnzAPRaNqMf9WB+FNMdR1YK83Y/DSM8W5TXDMGDacwVQPXTYZT4+/fui+VCnA46CjxTugckqakkD4/jl0hUwiPjmFmTCTB3h0V7kE9nfLD/2qdKlQqUPu1/mRSqVW0zHizVpqptpWw+tHCa/YxDnMdcEtt7w+XOVl1iavzVb9r5GCVF3F3fMsbXzZS7+FN6oOjmHCnF9PUdXxlBb6/xJFvLjMtUK5KFWKga/joNRIPBLP+9bmMdXVjhrhe/Ub0DJ1JpGM9BuNi5pwqpDZyKVM8PSlpW8iUz6q1RQSnbmRPTDCeQGnGbJ5uNwveSm1lLaigttKMHU37NHYXtQueN8r69njmVzC6V/bykOkUJcXHKNifTkL2fvTbNqLr8kS/XnajY1OBym8mrx/UE9qvDeqqJsobldaHymVOflXNSQCPO4kd78O9AFeaMH13tRAmSxMMwqDvqDlJ7vY8/lxuphEfgifFkrA0jpARAOfYsTwNwzftX+MxTc97T09yPrCUs3/7O3zwmZlGj1Fop83h1wuncbfMbuwXDcZC3tr8Hp/4LmDbS9H4urpBYkA6ePAgJ0+e5MUXX+zXenv5G3EiM2NgjaEQv1NWIvWh1wVra9lpKv0i0TcHfKjFaKyDNuf97aeySC/SkrotEkNyOlkzdrBi4q2G/WpMZjtom8vXVlKHP8GB4G3XoLaZqbTCxJZRrLkSMxrm+PXkuAHsWK3gHRxKTHAoMXPnkJc4n7wiM7q5ro76HfMODMbPZsRUC6EtyQB7LbUO/zbZgoHgCk0dpepvH05iaCCRdwKOSxz84huONbVubrpypb8a2IvOkftKJp8ELUD/8lRG8xX/uTmT9KxRZD47jRE00dDkw4Mpa0kY59H6Mg+v5v/U8N+bN/GB1xz0v5vK3U3O12/YG8SmecEuOaJuqd1H8uP70epjMOcZMNbZcPiFkfSSHl1w89+2uYiM9K0UnK7GpvJDG/YEy/WznH/bVgMpj+1Hqw+hOGM/3kv3sGVW31/lcv6j19iwt4n7gnzwkDvUihs4ePAgaWlpVx/3Z+Dv9ZvzaHU6VAVbyXdEopt4/XZVoB/qujLKTHagltK8DAqtaqirpQ6ck+3SC/BPWkGMVod+sTeG9VmU2gHslO5LJ6Pg5neiKcvPds5At5sx5BRh00YzxRuYOIOYwNPsyirGbAespeRlF8BDMwnrRpDzVDmoM5mx2u2Y9z3N44lvUmR25hWspjLKzCo0/r1/z/G29fbIRB0xgWXkZBgw2QG7iYL0ROav3kd3bj/Qd27Hp6NRqtqLSXcCVy7x+0+rybvY/ho+H9Xt/dK6XmWph6BHiV8aTUiQL75BU5kf90Oazn1BBYCjkcZGLwJGBeDr69v6b0TzG1RVzJ/OafjFkmjGBzhfHz97KpaiDylz4WF1WWeTcjubhKpSASYKClSs2HGAl3X9c1lrA1NZ8XIqM+/z6rywG2v4PI/1y3/Fgvhfsezf8/hrfVP77cbDbFr9DAnxC5kTn0xqVhEVDoAaPlizmJW728eA8wdSWbDmMBdo4OyhTPRJi5kzfyELklLZdOgcDf13aJ26NuC///77gzvoExyDTmPDT6ejozlsnqFLWBFtJydhOlGxyWQ75pD22zloTVkkpBzgk+x0DN6L0TfnxDVz9Tyh2s/6bCN2HFQeM2Aovtnle4HE6PzISYwjavp8tprDSE3V4dzbRJa+kkqoKZ2E6RFEPb6WwsClbNRHduP0dQjRujEY33ycx1cXopqVRmq4ia0J04mIiOCx5F04dGnoY3p7yNy+3lu4kPEmtCRtTCPStovE6VFETU9muy2GtLRZDKzchIpJIzv4qDbayDn7DdlfXOSzpms33sY430GYz/adSsKzT/DAiNanLN/UQ4CGAICmBhpoouLwG+iXJ5OQ9DwvZhVS0fyt5qg4R5XPOMa2ySmrgn/I6EYTFTX9eSC944aTcm9pEqoDrW4xoRpvvHtyfrALxj8czfgRnZdza47PeHvzhzTG6Nn27u95beEoPin4iqt/wo5ycjfmc35SIpve3kVORiJjjTvIPFwFBBAReS81J45x9uoOq/jkhJmxkeHcXfE+b+218MhvNpOfu53MlIewHNjG/goXHGcHrg34Lfo18CtDybcfKMse+aXyVoWrGyJ6m73+G+W5P/9dWdD235lvFZuiKErTt8qr124r+UYxfu/qVivKl19+2aPX288fUtYuXalsK7M5n7hQoKx7eqWy9t3jypfnLyj/KPtI2ZLyr0r8y8eVi4qiXPzTWmX+qgPKP9rt5LiybtFK5Z2zPWpKt3XrPWj5W27b5qo/KE81P/ftB88oDz74YAf/Fik7KxRF+e5PyjOP/FzZ9Ld+bnezf/zxBWX+vxUoF7tffb/ozjH29DOtlP1eeXLRRuV/7G32+e5K5Rcpf1D+t/mx3WZTbG3r/I+VyvzffarYFUVRbMeVdUtWKttaPhsXDijPLVqnHL2oKEpZtvLkkleVoxd61sSBrid9MPhmOQm3pBp5F4tHX+K1802tI4LL32P+rgkfx/ft03fDPIgdfxfjBvnKEg2f57FhczEBC1/gqfuah48B0aS+Gd1aKCiAp5Z8xeevHuEvlmk80NGOrsuCDF5XT2h1Ngm1pWA/jfDFrWuosdDoE0RAm0Tc3UGj8DjT8siBpXwfb+89SUVNo/Pj29QIk5pnYY+YxE8m7ODtwnLitROwfHqSmgmx/NgX8I1lwYR03n4umf3jJjB5Wjg/mTaV0ZJ9uUqCvhgkbmPCuEBWXvmaTWaH84vAepEXSy62LzZMxaP33cNC38Ed8S8cz2TDriomL11Lwo9uPv9bFTQGX8qpsYCXlw801Lf/EdRYTyM+BAy6aeQ3m5Q7WCahii6r+pD0zScZ/Ss9mQ8GoQLO7nyGtKunp0YwOWYqZB3jc8cozp8wEzJ9Es64HsQjz77Bj6vK+euZkxwvfIfn9xby1EvP80iAqw6o1Y3S+wA/+9nP+iXFP7i/Ga/lrWPL0d0kDaJJyqIr7uBH40fzxo/8ib1Lhdew1i0eHiqmjvYnNXw0i0cN7t+yljPbSNtl4Se/uT7gOyqKeHtnEefbPldVyQV8GO0LqrHjCKo/h7HN+fsGYznnvYIZOwC+9LrqxpNyB8skVHGtEb6+eNTXUNPm8ukLJvPVhFSDsZwqn6nomgM+WKgw1bfbh2rCQzzg8RkfFxVzvGYSD9/fMpR30NDgYETQBCJmPIH+5bXMD/iCDz4dGBNa4uLiWLt27XXP91fABxnpi0HI13ckC31HshBwXL5M0213MGKo/HxtOMmOrM8Y+8sXiPBtxGJpue7LAy/fEahGNHG+KJ+3PHz59YwxeFjK+eOuY3D/sub05kP8dNz7vLezEO2icO5u+Iz39v6NgBlrCXHlcXVL66Tckmob6jHRpL7UMinXOQnVkb6VxOnpOFATGKZz+STUBouFJsBiaQIasVgsXO07F7ZrQBk3lckemRj2nmPy7DFgOsIfzzRB8xWoHgG+eNWfw1jlYHxQI2cPvcfxRi9oqscC3A2gmsDD93uw4Q/v43H/MiY3v7kXCjbw/KFgfr1qAQ8EqGioOoexxoO7fQbO1RRxcXEAV0f8/RnwAYYpiqJ0XkwI0R1nz55l/Pjxt/6CM5kkvFrM9Zd4/5An30rlX3yh4fODvLXrQ/5qqgevUYy9fxZPLY5kbEtUaXdzHg33Rc7lqUVTnV+WLtDl9wCci1I9touQHa7L3HW93eVkPrmBj67rvHuJz3iRnw7ATEt3+qZb/XkNy5kcNm0/wuf1HgSMe5T4aVVkHApqviNfDR9nbWLHCefNpe57LJFlk8pJX7eP8+MS2LQq0nnDo4o8Vr5wDO1vN7LsvpYPfw1/2bmN3KKvqGpswsNnDJMj5/LUvEkD7iZJPbk5T0/6QIK+EH2oN74gBzv3CfqDj6uCfm9wnMlk2U4f9K8/getb07960gdDJSkqhBDCTTiqTvD2zs8Y/Vis2wX8npJz+kKIgcdbx5ajOle3QgxAFTuf4fnCJrTRy9A/PADPmQxwEvSFEEIMGmMXvUH+Ile3YvDqlfS+tTiD+LgoomZnUNobOxRCCCFEr+uFkb6Vkvz91E1JY09qJP2zrIUQQgghuqoXRvoOrDbwC9HiL7e8FEIIIQasHo70zeQlz+fNMgeUzSdq/0w2b9OS3cE61tbSPNLT8ymprMaGHyHRSej1OucdNlvWvk59CFO+AaO5DrSLSVuhoTBjO8WmamyqMJI2voSu5c4bN1tLWwghRJ/w9PTk0qVLDB8+3NVNcUs2mw0vr+7fbKiHI30Nc7fs4bkQFeOW53J09womdrSOtf0UWauzMIWnknv4Y47sSUVbls66/OY1kVUqwEhBkQb9tt3szU0lxJjFs2tKCEt7l917c0nSlLA151RzvZ2spS2EEKJP+Pv7U1VVRUPDQFql3j00NDTw9ddf4+/f/RPpfTR7v2Ud65Z8fyjLcw/g8PZ2rlvvGc6MUD8MZSbsBDcvhKViyswY55wAby0hGigLmUG4N4A/Wq0fNmM1VsC7eS3tFS1raXs619LOSTRQYo2k15ewF6Kb3H1U1NNRiSsN9b7rbt+o1WoALl68yPnz5zspLXqTl5cX99xzT48+k30U9P3QBLY9wW+n7nQ26duLMFbbcAA4bBDmaPea1tWxVKhUoPZr/TWjUqugubi10ky1rYTVjxZeU+84zHWABH0xQLSMigIDAxkxwr3W92wZlQQFBbm6Kd0ylPuup32jVquvBn8xuPTddfptY74pn1VriwhO3cieGOfIvjRjNk93thzWjVao6GwtbSEGCHceFfXGqMSVhnLfDfa+Ed3XLzfnsZadptIvEn1MSyq/FqOxDrr5Q9E7UNbSFoOHjIoGL+k7MdT0y733VYF+qOvKKDPZgVpK8zIotKqhrpa67uxQ1tIWQgghuqxfgr5n6BJWRNvJSZhOVGwy2Y45pP12DlpTFgkpBmq7vEfnWtqRtl0kTo8ianoy220xLl9LWwghhBjIZGldIYQQwk3I0rpCCCGEm5CgL4QQQrgJCfpCCCGEm5CgL4QQQrgJCfpCCCGEm5CgL4QQQrgJCfpCCCGEm5CgL4QQQrgJCfpCCCGEm5CgL4QQQriJ/wfpk4cD5IdiaQAAAABJRU5ErkJggg=="},3226:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);