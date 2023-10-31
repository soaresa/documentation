"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[978],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(y,i(i({ref:t},c),{},{components:r})):o.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={title:"Tools",id:"index",hidden:!1},i=void 0,l={unversionedId:"Tools/index",id:"Tools/index",title:"Tools",description:"About Libra Tool Design",source:"@site/docs/Tools/index.md",sourceDirName:"Tools",slug:"/Tools/",permalink:"/documentation/Tools/",draft:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/Tools/index.md",tags:[],version:"current",frontMatter:{title:"Tools",id:"index",hidden:!1},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/documentation/tutorial-extras/translate-your-site"},next:{title:"Txs",permalink:"/documentation/category/txs"}},s={},u=[{value:"About Libra Tool Design",id:"about-libra-tool-design",level:2},{value:"The Customer",id:"the-customer",level:3},{value:"Bring your own tool",id:"bring-your-own-tool",level:3},{value:"Start a new minimal Rust crate",id:"start-a-new-minimal-rust-crate",level:4}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"about-libra-tool-design"},"About Libra Tool Design"),(0,n.kt)("p",null,"The tools are intended to be minimalist, yet modular. Upstream vendors have sophisticated and complex tooling. This is usually unwieldy for the profile of typical 0L users."),(0,n.kt)("h3",{id:"the-customer"},"The Customer"),(0,n.kt)("p",null,"If you have a typical end-user use case, Carpe will likely be all you need.\nThese tools are for users which are engaged in more admin level operations on the network: configuring and querying contracts."),(0,n.kt)("p",null,"For that user the cli tools here will like have sufficient features: query, transact, run node."),(0,n.kt)("p",null,"Similarly if you are a Move dev, similarly the most common features are covered: testing, verifying, compiling, deploying."),(0,n.kt)("h3",{id:"bring-your-own-tool"},"Bring your own tool"),(0,n.kt)("p",null,"If you have needs that aren't met with these tools, all of them are also exported as libraries. Meaning: they are architected so that they are easy to extend."),(0,n.kt)("h4",{id:"start-a-new-minimal-rust-crate"},"Start a new minimal Rust crate"),(0,n.kt)("p",null,"With a simple Rust project, that uses Clap as a CLI scaffold, you can import all of the CLI types, whole or in part. This means you can extend the existing methods (by creating a ",(0,n.kt)("inlineCode",{parentName:"p"},"trait")," extension in your own tool)."),(0,n.kt)("p",null,"Additionally the most relevant vendor SDK types are re-exported by ",(0,n.kt)("inlineCode",{parentName:"p"},"libra-types"),". So you should be able to take advantage of much of the Move resource parsing (e.g converting account addresses from API calls to structs);"))}p.isMDXComponent=!0}}]);