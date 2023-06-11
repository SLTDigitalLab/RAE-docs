"use strict";(self.webpackChunkrae_docs=self.webpackChunkrae_docs||[]).push([[9229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2433:(e,t,n)=>{n.r(t),n.d(t,{Tooltip:()=>u,assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},o="Login",i={unversionedId:"api-engine/Authorization/Login",id:"api-engine/Authorization/Login",title:"Login",description:"Login to your account to generate JWT.",source:"@site/docs/api-engine/Authorization/Login.mdx",sourceDirName:"api-engine/Authorization",slug:"/api-engine/Authorization/Login",permalink:"/docs/api-engine/Authorization/Login",draft:!1,editUrl:"https://github.com/SLTDigitalLab/RAE-docs/tree/main/docs/api-engine/Authorization/Login.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Register",permalink:"/docs/api-engine/Authorization/Registration"},next:{title:"API Keys",permalink:"/docs/category/api-keys"}},s={},p=[{value:"Request Body",id:"request-body",level:2},{value:"Types",id:"types",level:3},{value:"Sample",id:"sample",level:3},{value:"Reponse Body",id:"reponse-body",level:2},{value:"Types",id:"types-1",level:3},{value:"Sample",id:"sample-1",level:3}],u=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"7px",cursor:"pointer",fontWeight:"750",fontSize:"15px",position:"relative",bottom:"4px"},onClick:()=>{alert(`You clicked the color ${n} with label ${t}`)}},t)},c={toc:p,Tooltip:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"login"},"Login"),(0,r.kt)("p",null,"Login to your account to generate JWT."),(0,r.kt)(u,{color:"#3abe25",mdxType:"Tooltip"},"Method: POST"),(0,r.kt)("div",{style:{marginBottom:"20px"}}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://engine.raccoon-ai.io/auth/login\n")),(0,r.kt)("h2",{id:"request-body"},"Request Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Email of the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for the account. (More than 8 characters)")))),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": <string>,\n  "password": <string>\n}\n')),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "user@raccoon-ai.io",\n  "password": "XXXXXXXX"\n}\n')),(0,r.kt)("h2",{id:"reponse-body"},"Reponse Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicate the success of the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Message indicators")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"Result, only set if success is true. Contains information of the newly created user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gen_at"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"Generated timestamp")))),(0,r.kt)("h3",{id:"types-1"},"Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": <bool>,\n    "msg": <string>,\n    "result": <json>,\n    "gen_at": <timestamp>\n}\n')),(0,r.kt)("h3",{id:"sample-1"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "msg": "User logged in successfully",\n  "result": {\n    "jwt": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",\n    "user": {\n      "id": "585e2905-1316-45ca-bfd7-da9b4fbc7660",\n      "first_name": "Navindu",\n      "last_name": "Dananga",\n      "email": "navindu@raccoon-ai.io",\n      "is_super_admin": false,\n      "disabled": false,\n      "email_verified": false,\n      "tel_verified": false,\n      "tel": "+941234567",\n      "company": null,\n      "company_id_number": null,\n      "company_id_url": null,\n      "created_ts": "2023-06-11T22:12:46.996297",\n      "updated_ts": null,\n      "last_login_ts": null\n    },\n    "gen_ts": 1686502859.410083\n  }\n}\n')))}d.isMDXComponent=!0}}]);