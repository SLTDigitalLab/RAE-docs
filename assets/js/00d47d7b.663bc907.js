"use strict";(self.webpackChunkrae_docs=self.webpackChunkrae_docs||[]).push([[5993],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(n),g=r,c=u["".concat(s,".").concat(g)]||u[g]||m[g]||l;return n?a.createElement(c,i(i({ref:e},p),{},{components:n})):a.createElement(c,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3352:(t,e,n)=>{n.r(e),n.d(e,{Tooltip:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},i="Artificial Neural Network Regression",o={unversionedId:"api-engine/Quick Analysis/Regression/ann-regression",id:"api-engine/Quick Analysis/Regression/ann-regression",title:"Artificial Neural Network Regression",description:"Artificial Neural Network (ANN) regression is a technique used in machine learning to solve regression problems. Regression refers to the task of predicting a continuous numerical value, such as predicting house prices, stock prices, or the age of a person based on certain input variables or features.",source:"@site/docs/api-engine/Quick Analysis/Regression/ann-regression.mdx",sourceDirName:"api-engine/Quick Analysis/Regression",slug:"/api-engine/Quick Analysis/Regression/ann-regression",permalink:"/docs/api-engine/Quick Analysis/Regression/ann-regression",draft:!1,editUrl:"https://github.com/SLTDigitalLab/RAE-docs/tree/main/docs/api-engine/Quick Analysis/Regression/ann-regression.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Multiple Linear Regression",permalink:"/docs/api-engine/Quick Analysis/Regression/linear-regression"},next:{title:"Gradient Boosting Regression",permalink:"/docs/api-engine/Quick Analysis/Regression/gradient-boosting-regression"}},s={},d=[{value:"Authorization",id:"authorization",level:2},{value:"Request Body",id:"request-body",level:2},{value:"Data Types",id:"data-types",level:3},{value:"Hyper Parameters",id:"hyper-parameters",level:3},{value:"Sample",id:"sample",level:3},{value:"Train config",id:"train-config",level:3},{value:"Reponse Body",id:"reponse-body",level:2},{value:"Data Types",id:"data-types-1",level:3},{value:"Sample",id:"sample-1",level:3}],p=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"7px",cursor:"pointer",fontWeight:"750",fontSize:"15px",position:"relative",bottom:"4px"},onClick:()=>{alert(`You clicked the color ${n} with label ${e}`)}},e)},u={toc:d,Tooltip:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"artificial-neural-network-regression"},"Artificial Neural Network Regression"),(0,r.kt)("p",null,"Artificial Neural Network (ANN) regression is a technique used in machine learning to solve regression problems. Regression refers to the task of predicting a continuous numerical value, such as predicting house prices, stock prices, or the age of a person based on certain input variables or features."),(0,r.kt)("p",null,"ANNs are computational models inspired by the structure and function of the human brain. They consist of interconnected nodes, or artificial neurons, organized into layers. The three main types of layers in an ANN are the input layer, hidden layers, and output layer."),(0,r.kt)(p,{color:"#3abe25",mdxType:"Tooltip"},"Method: POST")," ",(0,r.kt)(p,{color:"#Be2525",mdxType:"Tooltip"},"Authorization: API Key"),(0,r.kt)("div",{style:{marginBottom:"20px"}}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"https://engine.raccoon-ai.io/api/v1/ml/regression/ann\n")),(0,r.kt)("h2",{id:"authorization"},"Authorization"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"API Key"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Api-Key"),(0,r.kt)("td",{parentName:"tr",align:null},"rae","_","######")))),(0,r.kt)("h2",{id:"request-body"},"Request Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Section"),(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"train"),(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Data that use to train the model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"features"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Input features (X)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"targets"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Output targets (y)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Train configurations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"predict"),(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Data that need to predicted by the trained model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Predict configurations")))),(0,r.kt)("h3",{id:"data-types"},"Data Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "train"   : {\n        "data"    : <json_data>,\n        "features": <list>,\n        "targets" : <list>,\n        "config"  : {\n          "encoder": <"onehot" | "label" | "drop">,\n          "std_scale": boolean,\n          "hidden_units": list,\n          "val_size" : <float>\n        }\n    },\n    "predict": {\n        "data": <json_data>,\n        "config": {\n            "include_inputs": <boolean>,\n            "round": <int>\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"hyper-parameters"},"Hyper Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"activation"),(0,r.kt)("td",{parentName:"tr",align:null},"<",(0,r.kt)("inlineCode",{parentName:"td"},"identity"),"|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"logistic")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"tanh")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"relu"),">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"relu")),(0,r.kt)("td",{parentName:"tr",align:null},"Activation function for the hidden layer. \u2018identity\u2019, no-op activation, useful to implement linear bottleneck, returns f(x) = x \u2018logistic\u2019, the logistic sigmoid function, returns f(x) = 1 / (1 + exp(-x)). \u2018tanh\u2019, the hyperbolic tan function, returns f(x) = tanh(x). \u2018relu\u2019, the rectified linear unit function, returns f(x) = max(0, x)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"solver"),(0,r.kt)("td",{parentName:"tr",align:null},"<",(0,r.kt)("inlineCode",{parentName:"td"},"lbfgs")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"sgd")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"adam"),">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"adam")),(0,r.kt)("td",{parentName:"tr",align:null},"The solver for weight optimization. \u2018lbfgs\u2019 is an optimizer in the family of quasi-Newton methods. \u2018sgd\u2019 refers to stochastic gradient descent. \u2018adam\u2019 refers to a stochastic gradient-based optimizer proposed by Kingma, Diederik, and Jimmy Ba Note: The default solver \u2018adam\u2019 works pretty well on relatively large datasets (with thousands of training samples or more) in terms of both training time and validation score. For small datasets, however, \u2018lbfgs\u2019 can converge faster and perform better.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"<",(0,r.kt)("inlineCode",{parentName:"td"},"auto")," ","|"," int>"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auto")),(0,r.kt)("td",{parentName:"tr",align:null},"Strength of the L2 regularization term. The L2 regularization term is divided by the sample size when added to the loss.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,r.kt)("td",{parentName:"tr",align:null},"<",(0,r.kt)("inlineCode",{parentName:"td"},"auto")," ","|"," int>"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auto")),(0,r.kt)("td",{parentName:"tr",align:null},"Size of minibatches for stochastic optimizers. If the solver is \u2018lbfgs\u2019, the regressor will not use minibatch. When set to \u201cauto\u201d, batch_size=min(200, n_samples)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"learning_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"<",(0,r.kt)("inlineCode",{parentName:"td"},"constant"),"|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"invscaling")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"adaptive"),">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"constant")),(0,r.kt)("td",{parentName:"tr",align:null},"Learning rate schedule for weight updates. \u2018constant\u2019 is a constant learning rate given by \u2018learning",(0,r.kt)("em",{parentName:"td"},"rate_init\u2019. \u2018invscaling\u2019 gradually decreases the learning rate learning_rate")," at each time step \u2018t\u2019 using an inverse scaling exponent of \u2018power_t\u2019. effective_learning_rate = learning_rate_init / pow(t, power_t) \u2018adaptive\u2019 keeps the learning rate constant to \u2018learning_rate_init\u2019 as long as training loss keeps decreasing. Each time two consecutive epochs fail to decrease training loss by at least tol, or fail to increase validation score by at least tol if \u2018early_stopping\u2019 is on, the current learning rate is divided by 5. Only used when solver=\u2019sgd\u2019.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"learning_rate_init"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"0.001"),(0,r.kt)("td",{parentName:"tr",align:null},"The initial learning rate used. It controls the step-size in updating the weights. Only used when solver=\u2019sgd\u2019 or \u2018adam\u2019.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"power_t"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"The exponent for inverse scaling learning rate. It is used in updating effective learning rate when the learning_rate is set to \u2018invscaling\u2019. Only used when solver=\u2019sgd\u2019.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_iter"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of iterations. The solver iterates until convergence (determined by \u2018tol\u2019) or this number of iterations. For stochastic solvers (\u2018sgd\u2019, \u2018adam\u2019), note that this determines the number of epochs (how many times each data point will be used), not the number of gradient steps.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shuffle"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to shuffle samples in each iteration. Only used when solver=\u2019sgd\u2019 or \u2018adam\u2019.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"random_state"),(0,r.kt)("td",{parentName:"tr",align:null},"<int ","|"," None>"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines random number generation for weights and bias initialization, train-test split if early stopping is used, and batch sampling when solver=\u2019sgd\u2019 or \u2018adam\u2019. Pass an int for reproducible results across multiple function calls.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tol"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0001"),(0,r.kt)("td",{parentName:"tr",align:null},"Tolerance for the optimization. When the loss or score is not improving by at least tol for n_iter_no_change consecutive iterations, unless learning_rate is set to \u2018adaptive\u2019, convergence is considered to be reached and training stops.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"warm_start"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to True, reuse the solution of the previous call to fit as initialization, otherwise, just erase the previous solution.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"momentum"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"0.9"),(0,r.kt)("td",{parentName:"tr",align:null},"Momentum for gradient descent update. Should be between 0 and 1. Only used when solver=\u2019sgd\u2019.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nesterovs_momentum"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use Nesterov\u2019s momentum. Only used when solver=\u2019sgd\u2019 and momentum > 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"early_stopping"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use early stopping to terminate training when validation score is not improving. If set to True, it will automatically set aside validation_fraction of training data as validation and terminate training when validation score is not improving by at least tol for n_iter_no_change consecutive epochs. Only effective when solver=\u2019sgd\u2019 or \u2018adam\u2019.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validation_fraction"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"The proportion of training data to set aside as validation set for early stopping. Must be between 0 and 1. Only used if early_stopping is True.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"beta_1"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"0.9"),(0,r.kt)("td",{parentName:"tr",align:null},"Exponential decay rate for estimates of first moment vector in adam, should be in [0, 1). Only used when solver=\u2019adam\u2019.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"beta_2"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"0.999"),(0,r.kt)("td",{parentName:"tr",align:null},"Exponential decay rate for estimates of second moment vector in adam, should be in [0, 1). Only used when solver=\u2019adam\u2019.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"epsilon"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"1e-8"),(0,r.kt)("td",{parentName:"tr",align:null},"Value for numerical stability in adam. Only used when solver=\u2019adam\u2019.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"n_iter_no_change"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"15000"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of epochs to not meet tol improvement. Only effective when solver=\u2019sgd\u2019 or \u2018adam\u2019.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_fun"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"15000"),(0,r.kt)("td",{parentName:"tr",align:null},"Only used when solver=\u2019lbfgs\u2019. Maximum number of function calls. The solver iterates until convergence (determined by tol), number of iterations reaches max_iter, or this number of function calls. Note that number of function calls will be greater than or equal to the number of iterations for the ANN regressor.")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "train": {\n    "data": {\n      "R&D Spend": {\n        "0": 165349.2,\n        "1": 162597.7,\n        "2": 153441.51,\n        "3": 144372.41,\n        "4": 142107.34,\n        "5": 131876.9,\n        "6": 134615.46,\n        "7": 130298.13,\n        "8": 120542.52,\n        "9": 123334.88\n      },\n      "Administration": {\n        "0": 136897.8,\n        "1": 151377.59,\n        "2": 101145.55,\n        "3": 118671.85,\n        "4": 91391.77,\n        "5": 99814.71,\n        "6": 147198.87,\n        "7": 145530.06,\n        "8": 148718.95,\n        "9": 108679.17\n      },\n      "Marketing Spend": {\n        "0": 471784.1,\n        "1": 443898.53,\n        "2": 407934.54,\n        "3": 383199.62,\n        "4": 366168.42,\n        "5": 362861.36,\n        "6": 127716.82,\n        "7": 323876.68,\n        "8": 311613.29,\n        "9": 304981.62\n      },\n      "State": {\n        "0": "New York",\n        "1": "California",\n        "2": "Florida",\n        "3": "New York",\n        "4": "Florida",\n        "5": "New York",\n        "6": "California",\n        "7": "Florida",\n        "8": "New York",\n        "9": "California"\n      },\n      "Profit": {\n        "0": 192261.83,\n        "1": 191792.06,\n        "2": 191050.39,\n        "3": 182901.99,\n        "4": 166187.94,\n        "5": 156991.12,\n        "6": 156122.51,\n        "7": 155752.6,\n        "8": 152211.77,\n        "9": 149759.96\n      }\n    },\n    "features": ["R&D Spend", "Administration", "Marketing Spend", "State"],\n    "targets": ["Profit"],\n    "config": {\n      "encoder": "onehot",\n      "std_scale": true,\n      "hidden_units": [100, 100],\n      "max_iter": 1000\n    }\n  },\n  "predict": {\n    "data": {\n      "R&D Spend": {\n        "0": 165349.2,\n        "1": 162597.7\n      },\n      "Administration": {\n        "0": 136897.8,\n        "1": 151377.59\n      },\n      "Marketing Spend": {\n        "0": 471784.1,\n        "1": 443898.53\n      },\n      "State": {\n        "0": "New York",\n        "1": "California"\n      }\n    },\n    "config": {\n      "include_inputs": true,\n      "round": 2\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"train-config"},"Train config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")),(0,r.kt)("h2",{id:"reponse-body"},"Reponse Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicate the success of the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Message indicators")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Error information, only set if success is false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"result"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"result, only set if success is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"score"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"r2_scores of the training and testing phases, only set if success is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generated_ts"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"generated timestamp")))),(0,r.kt)("h3",{id:"data-types-1"},"Data Types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": <boolean>,\n    "msg": <string>,\n    "error": <string>,\n    "result": <json>,\n    "score": {\n        "train": <float>,\n        "test": <float>\n    },\n    "generated_ts": <timestamp>\n}\n')),(0,r.kt)("h3",{id:"sample-1"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "msg": "Model trained and predicted successfully",\n  "error": null,\n  "result": {\n    "R&D Spend": {\n      "0": 165349.2,\n      "1": 162597.7\n    },\n    "Administration": {\n      "0": 136897.8,\n      "1": 151377.59\n    },\n    "Marketing Spend": {\n      "0": 471784.1,\n      "1": 443898.53\n    },\n    "State": {\n      "0": "New York",\n      "1": "California"\n    },\n    "Profit": {\n      "0": 190209.72,\n      "1": 186863.18\n    }\n  },\n  "score": {\n    "train": 0.942446542689397,\n    "test": 0.9649618042060305\n  },\n  "saved_in": null,\n  "generated_ts": 1685439220.425382\n}\n')))}m.isMDXComponent=!0}}]);