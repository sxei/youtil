"use strict";(self.webpackChunkyoutil=self.webpackChunkyoutil||[]).push([[878],{294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>f});var r=n(8168),a=n(8587),i=(n(6540),n(6665)),o=["components"],l={},u=void 0,p={unversionedId:"api/functions/getParam",id:"api/functions/getParam",title:"getParam",description:"youtil",source:"@site/docs/api/functions/getParam.md",sourceDirName:"api/functions",slug:"/api/functions/getParam",permalink:"/api/functions/getParam",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"formatDate",permalink:"/api/functions/formatDate"},next:{title:"getParamInt",permalink:"/api/functions/getParamInt"}},c={},f=[{value:"Parameters",id:"parameters",level:2},{value:"name",id:"name",level:3},{value:"url",id:"url",level:3},{value:"Returns",id:"returns",level:2}],m={toc:f},s="wrapper";function g(e){var t=e.components,n=(0,a.A)(e,o);return(0,i.yg)(s,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/api/"},(0,i.yg)("strong",{parentName:"a"},"youtil"))),(0,i.yg)("hr",null),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/api/globals"},"youtil")," / getParam"),(0,i.yg)("h1",{id:"function-getparam"},"Function: getParam()"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"getParam"),"(",(0,i.yg)("inlineCode",{parentName:"p"},"name"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"url"),"): ",(0,i.yg)("inlineCode",{parentName:"p"},"string"))),(0,i.yg)("p",null,"Defined in: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/sxei/youtil/blob/3146baa9248aadc2248b590938f928a27e5699a2/src/param.ts#L10"},"param.ts:10")),(0,i.yg)("p",null,"\u4eceURL\u4e2d\u83b7\u53d6\u67d0\u4e2a\u53c2\u6570\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u8fd4\u56de undefined \uff0c\u5982\u679c\u5b58\u5728\u591a\u4e2a\u540c\u540d\u53c2\u6570\uff0c\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5339\u914d\u503c\ngetParam('a', '?a=1&b=&c=3&c=33#abc') // '1'\ngetParam('b', '?a=1&b=&c=3&c=33#abc') // ''\ngetParam('c', '?a=1&b=&c=3&c=33#abc') // 3\ngetParam('d', '?a=1&b=&c=3&c=33#abc') // undefined"),(0,i.yg)("h2",{id:"parameters"},"Parameters"),(0,i.yg)("h3",{id:"name"},"name"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("p",null,"\u53c2\u6570\u540d"),(0,i.yg)("h3",{id:"url"},"url"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"string")," = ",(0,i.yg)("inlineCode",{parentName:"p"},"location.search")),(0,i.yg)("p",null,"\u8981\u83b7\u53d6\u7684URL\uff0c\u9ed8\u8ba4\u5f53\u524d\u5730\u5740"),(0,i.yg)("h2",{id:"returns"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"string")))}g.isMDXComponent=!0},6665:(e,t,n)=>{function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=r(n(6540));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.default.createContext({}),f=function(e){var t=a.default.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.default.createElement(a.default.Fragment,{},t)}},s=a.default.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=f(n),s=r,g=c["".concat(o,".").concat(s)]||c[s]||m[s]||i;return n?a.default.createElement(g,u(u({ref:t},l),{},{components:n})):a.default.createElement(g,u({ref:t},l))}));s.displayName="MDXCreateElement",t.xA=function(e){var t=f(e.components);return a.default.createElement(c.Provider,{value:t},e.children)},t.yg=function(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.default.createElement.apply(null,o)}return a.default.createElement.apply(null,n)}}}]);