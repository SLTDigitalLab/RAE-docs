"use strict";(self.webpackChunkrae_docs=self.webpackChunkrae_docs||[]).push([[3523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7944:(e,t,n)=>{n.r(t),n.d(t,{Tooltip:()=>s,assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:4},o="Update Project",i={unversionedId:"api-engine/Projects/update-project",id:"api-engine/Projects/update-project",title:"Update Project",description:"Update project info.",source:"@site/docs/api-engine/Projects/update-project.mdx",sourceDirName:"api-engine/Projects",slug:"/api-engine/Projects/update-project",permalink:"/docs/api-engine/Projects/update-project",draft:!1,editUrl:"https://github.com/SLTDigitalLab/RAE-docs/tree/main/docs/api-engine/Projects/update-project.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Get All Projects",permalink:"/docs/api-engine/Projects/get-all-projects"},next:{title:"Delete Project",permalink:"/docs/api-engine/Projects/delete-project"}},p={},c=[{value:"Authorization",id:"authorization",level:2},{value:"Reponse Body",id:"reponse-body",level:2},{value:"Types",id:"types",level:3},{value:"Sample",id:"sample",level:3}],s=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"7px",cursor:"pointer",fontWeight:"750",fontSize:"15px",position:"relative",bottom:"4px"},onClick:()=>{alert(`You clicked the color ${n} with label ${t}`)}},t)},u={toc:c,Tooltip:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update-project"},"Update Project"),(0,a.kt)("p",null,"Update project info."),(0,a.kt)(s,{color:"#3abe25",mdxType:"Tooltip"},"Method: GET")," ",(0,a.kt)(s,{color:"#Be2525",mdxType:"Tooltip"},"Authorization: JWT"),(0,a.kt)("div",{style:{marginBottom:"20px"}}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"localhost:8000/api/v1/projects/get/<project_id>\n")),(0,a.kt)("h2",{id:"authorization"},"Authorization"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JWT"),(0,a.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,a.kt)("td",{parentName:"tr",align:null},"Bearer ##########")))),(0,a.kt)("h2",{id:"reponse-body"},"Reponse Body"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"success"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicate the success of the request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"msg"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Message indicators")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"error_code"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Error code information, only set if success is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"result"),(0,a.kt)("td",{parentName:"tr",align:null},"json"),(0,a.kt)("td",{parentName:"tr",align:null},"Result, only set if success is true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gen_at"),(0,a.kt)("td",{parentName:"tr",align:null},"datetime"),(0,a.kt)("td",{parentName:"tr",align:null},"Generated datetime")))),(0,a.kt)("h3",{id:"types"},"Types"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": <boolean>,\n  "msg": <string>,\n  "error_code": <int>,\n  "result": <json>,\n  "gen_at": <datetime>\n}\n')),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "msg": "Project fetched",\n  "error_code": null,\n  "result": {\n    "id": "MyProject",\n    "name": "MyProject",\n    "description": "This is my project",\n    "is_private": true,\n    "user_id": "7f7c0c39-0930-43f2-81a3-29e3cffecaa4",\n    "algo_type": "Regression",\n    "algo_selected": "Multiple Linear Regression",\n    "shared_type": null,\n    "shared_with": null,\n    "dataset_name": null,\n    "model_path": null,\n    "model_type": null,\n    "encoder_path": null,\n    "encoder_type": null,\n    "community_model_url": null,\n    "created_at": "2023-06-01T11:44:39.798483",\n    "updated_at": "2023-06-01T11:44:39.798490",\n    "is_community_model": false\n  },\n  "gen_at": "2023-06-01T11:59:02.058951"\n}\n')))}d.isMDXComponent=!0}}]);