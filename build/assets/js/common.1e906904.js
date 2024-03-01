(self.webpackChunkyoutil=self.webpackChunkyoutil||[]).push([[76],{574:(e,t,n)=>{"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(n(9002));function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.default.createContext({}),d=function(e){var t=o.default.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.default.createElement(o.default.Fragment,{},t)}},f=o.default.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return n?o.default.createElement(m,l(l({ref:t},i),{},{components:n})):o.default.createElement(m,l({ref:t},i))}));f.displayName="MDXCreateElement",t.xA=function(e){var t=d(e.components);return o.default.createElement(u.Provider,{value:t},e.children)},t.yg=function(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.default.createElement.apply(null,c)}return o.default.createElement.apply(null,n)}},7081:(e,t,n)=>{"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{A:()=>c});var a={formatDate:function(e,t){var n,r,o=function(e){t=t.replace(new RegExp("".concat(e,"+"),"g"),(function(t){var n="".concat(a[e]);if("w"===e)return(t.length>2?"\u661f\u671f":"\u5468")+c[n];for(var r=0,o=n.length;r<t.length-o;r++)n="0".concat(n);return 1===t.length?n:n.substring(n.length-t.length)}))};if(!e)return"";if("number"==typeof e)e=new Date(e);else if("string"==typeof e)if(/^\d{12,13}$/g.test(e))e=new Date(parseInt(e));else{if(!/^.{10}T.{8,12}Z?$/g.test(e))return e;e=new Date(e)}if(n=e,!(null!=(r=Date)&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r))throw new Error("formatDate error: not date.");if(isNaN(null==e?void 0:e.getFullYear()))throw new Error("formatDate error: invalid date.");t=t||"yyyy-MM-dd HH:mm:ss";var a={y:e.getFullYear(),M:e.getMonth()+1,d:e.getDate(),q:Math.floor((e.getMonth()+3)/3),w:e.getDay(),H:e.getHours(),h:e.getHours()%12==0?12:e.getHours()%12,m:e.getMinutes(),s:e.getSeconds(),S:e.getMilliseconds()},c=["\u5929","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"];for(var i in a)o(i);return t},parseDate:function(e,t){var n={y:0,M:1,d:0,H:0,h:0,m:0,s:0,S:0};(t=t||"yyyy-MM-dd").replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g,(function(t,r,o,a,c){return e=e.replace(new RegExp("".concat(r,"(\\d{").concat(o.length,"})").concat(c)),(function(e,t){return n[a]=parseInt(t),""})),""})),n.M--;var r=new Date(n.y,n.M,n.d,n.H,n.m,n.s);return 0!==n.S&&r.setMilliseconds(n.S),r},showLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u8bf7\u7a0d\u5019",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(n=Object.assign({},{hasMask:!0,maskColor:"transparent",onCancel:null,cancelInline:!1,id:"com_global_page_loading"},n)).id,o="_".concat(r,"_timeout");window[o]&&clearTimeout(window[o]);var c=document.getElementById(r);c||((c=document.createElement("div")).id=r,c.className=r,document.body.append(c));var i="".concat(r,"_style");if(!document.getElementById(i)){var l=document.createElement("style");l.id=i,l.innerHTML="\n            .".concat(r," {\n                position: fixed;\n                top: calc(50vh - 60px);\n                left: calc(50vw - 60px);\n                width: 120px;\n                height: 120px;\n                z-index: 8000;\n                background: rgba(0, 0, 0, 0.6);\n                border-radius: 8px;\n                text-align: center;\n                color: white;\n                padding-top: 20px;\n            }\n            .").concat(r," img {\n                width: 50px;\n                margin-bottom: 10px;\n            }"),document.head.appendChild(l)}if(c.innerHTML="\n            ".concat(n.hasMask?'<div class="mask-wrapper" style="background-color: '.concat(n.maskColor,'"></div>'):"",'\n            <div class="loading-wrapper">\n                <div class="loading-content">\n                    <img src="https://img.alicdn.com/tfs/TB1bnUsQBLoK1RjSZFuXXXn0XXa-32-32.svg" alt="\u52a0\u8f7d\u4e2d">\n                    <div>').concat(e).concat(n.cancelInline?" ":"</div>","\n                    ").concat(n.onCancel?'<a href="javascript:;" class="cancel">\u53d6\u6d88</a>':"","\n                    ").concat(n.cancelInline?"</div>":"","\n                </div>\n            </div>"),n.onCancel){var s=c.querySelector(".cancel");s&&s.addEventListener("click",(function(){a.hideLoading(),n.onCancel()}))}c.style.display="block",t>0&&(window[o]=setTimeout((function(){a.hideLoading()}),1e3*t))},hideLoading:function(){var e=document.getElementById("com_global_page_loading");e&&(e.style.display="none")},getParam:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search;return(new RegExp("(^|\\?|&)".concat(e,"=(.*?)(?=&|#|$)"),"g").exec(t)||[])[2]},getParamInt:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search;return parseInt(a.getParam(e,t)||"0",10)},getParams:function(){var e=(((arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.search)||"").split("?").pop()||"").split("#")[0]||"",t={};return e.split("&").map((function(e){return e.split("=")})).forEach((function(e){var n=o(e,2),r=n[0],a=n[1];t[r]=a||""})),t},setParam:function(e,t,n){if(n=n||"".concat(location.pathname).concat(location.search),void 0!==a.getParam(e,n))return n.replace(new RegExp("(^|\\?|&)".concat(e,"=(.*?)(?=&|#|$)"),"g"),"$1".concat(e,"=").concat(t));var r=o(n.split("#"),2),c=r[0],i=r[1];return"".concat(c).concat(c.indexOf("?")<0?"?":"&").concat(e,"=").concat(t).concat(i?"#":"").concat(i||"")},delParam:function(e,t){return(t=t||"".concat(location.pathname).concat(location.search)).replace(new RegExp("(^|\\?|&)".concat(e,"=.*?(&|#|$)"),"g"),(function(e,t,n){return"&"===n?t:n}))},sleep:function(e){return new Promise((function(t){return setTimeout(t,e||0)}))},deepCopy:function(e){return e&&"object"==typeof e?JSON.parse(JSON.stringify(e)):e},encodeHtml:function(e){if("string"==typeof e){var t=document.createElement("div");return t.innerText=e,t.innerHTML}if("object"==typeof e&&e)for(var n in e)e[n]=a.encodeHtml(e[n]);return e},decodeHtml:function(e){if("string"==typeof e){var t=document.createElement("div");return t.innerHTML=e,t.innerText}if("object"==typeof e&&e)for(var n in e)e[n]=a.decodeHtml(e[n]);return e},toUrlParams:function(e){return Object.keys(e||{}).filter((function(t){return void 0!==e[t]})).map((function(t){var n="object"==typeof e[t]?JSON.stringify(e[t]):e[t];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(n))})).join("&")},copyToClipboard:function(e,t,n){if(!e)throw new Error("text can not be empty.");return t=t||function(e){return console.error("\u590d\u5236\u5230\u526a\u8d34\u677f\u5931\u8d25\uff1a".concat(e||""))},navigator.clipboard&&!n?navigator.clipboard.writeText(e).catch((function(e){throw t(e.message),e})):new Promise((function(n,r){var o=document.createElement("input");o.value=e,o.style.cssText="position:fixed;left:0;top:0;opacity:0;",document.body.appendChild(o),o.select();try{if(document.execCommand("copy"))n();else{var a="Failed to execute 'document.execCommand'.";t(a),r(new Error(a))}}catch(c){t(c.message),r(c)}finally{document.body.removeChild(o)}}))}};const c=a},2344:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(9002);var r=n(1277),o=n(8397).A,a=n(9002).Fragment;function c(e){var t=e.children,n=e.fallback;return(0,r.A)()?o(a,null,null==t?void 0:t()):null!=n?n:null}},3083:(e,t,n)=>{"use strict";n.d(t,{A:()=>fe});var r=n(2581),o=n(8292),a=n(9002),c=n(1277),i=n(8836),l=n(9377),s=n(6610);function u(){var e=(0,s.p)().prism,t=(0,l.G)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var d=n(1659),p=n(9143),f=n(996),m=n.n(f),g=(0,p.A)(/title=(["'])(.*?)\1/,{quote:1,title:2}),y=(0,p.A)(/\{([\d,-]+)\}/,{range:1}),v={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function h(e,t){var n=e.map((function(e){var n=v[e],r=n.start,o=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function b(e,t){var n=e.replace(/\n$/,""),r=t.language,o=t.magicComments,a=t.metastring;if(a&&y.test(a)){var c=a.match(y).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var i=o[0].className,l=m()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[i]]}));return{lineClassNames:Object.fromEntries(l),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return h(["js","jsBlock"],t);case"jsx":case"tsx":return h(["js","jsBlock","jsx"],t);case"html":return h(["js","jsBlock","html"],t);case"python":case"py":case"bash":return h(["bash"],t);case"markdown":case"md":return h(["html","jsx","bash"],t);default:return h(Object.keys(v),t)}}(r,o),u=n.split("\n"),d=Object.fromEntries(o.map((function(e){return[e.className,{start:0,range:""}]}))),p=Object.fromEntries(o.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),f=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),g=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),b=0;b<u.length;){var k=u[b].match(s);if(k){var w=k.slice(1).find((function(e){return void 0!==e}));p[w]?d[p[w]].range+=b+",":f[w]?d[f[w]].start=b:g[w]&&(d[g[w]].range+=d[g[w]].start+"-"+(b-1)+","),u.splice(b,1)}else b+=1}n=u.join("\n");var C={};return Object.entries(d).forEach((function(e){var t=e[0],n=e[1].range;m()(n).forEach((function(e){null!=C[e]||(C[e]=[]),C[e].push(t)}))})),{lineClassNames:C,code:n}}var k=n(1069),w=n.n(k),C=n(8397).A,N=["as"];function j(e){var t=e.as,n=(0,o.A)(e,N),a=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],o=e[1],a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(u());return C(t,(0,r.A)({},n,{style:a,className:(0,i.A)(n.className,w().codeBlockContainer,d.G.common.codeBlock)}))}var B=n(5671),x=n.n(B),A=n(8397).A;function E(e){var t=e.children,n=e.className;return A(j,{as:"pre",tabIndex:0,className:(0,i.A)(x().codeBlockStandalone,"thin-scrollbar",n)},A("code",{className:x().codeBlockLines},t))}var O=n(8037),T={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){var n=(0,a.useState)(),r=n[0],o=n[1],c=(0,a.useCallback)((function(){var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((function(){c()}),[c]),function(e,t,n){void 0===n&&(n=T);var r=(0,O._q)(t),o=(0,O.Be)(n);(0,a.useEffect)((function(){var t=new MutationObserver(r);return e&&t.observe(e,o),function(){return t.disconnect()}}),[e,r,o])}(r,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const S={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var P={Prism:n(8357).A,theme:S};function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}var H=/\r\n|\r|\n/,_=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},D=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function R(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var W=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),I(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=M({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=M({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),I(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=M({},R(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?M({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),I(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(i))}})),I(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=M({},R(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?M({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),I(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,i=[],l=[i];c>-1;){for(;(a=r[c]++)<o[c];){var s=void 0,u=t[c],d=n[c][a];if("string"==typeof d?(u=c>0?u:["plain"],s=d):(u=D(u,d.type),d.alias&&(u=D(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(H),f=p.length;i.push({types:u,content:p[0]});for(var m=1;m<f;m++)_(i),l.push(i=[]),i.push({types:u,content:p[m]})}else c++,t.push(u),n.push(s),r.push(0),o.push(s.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return _(i),l}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const z=W;var $=n(9910),F=n.n($),V=n(8397).A,X=n(9002).Fragment;function G(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,a=e.getLineProps,c=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var l=a({line:t,className:(0,i.A)(n,o&&F().codeLine)}),s=t.map((function(e,t){return V("span",(0,r.A)({key:t},c({token:e,key:t})))}));return V("span",l,o?V(X,null,V("span",{className:F().codeLineNumber}),V("span",{className:F().codeLineContent},s)):s,V("br",null))}var q=n(9978),U=n(983),Y=n(8397).A;function J(e){return Y("svg",(0,r.A)({viewBox:"0 0 24 24"},e),Y("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}var Q=n(8397).A;function Z(e){return Q("svg",(0,r.A)({viewBox:"0 0 24 24"},e),Q("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}var K=n(795),ee=n.n(K),te=n(8397).A;function ne(e){var t=e.code,n=e.className,r=(0,a.useState)(!1),o=r[0],c=r[1],l=(0,a.useRef)(void 0),s=(0,a.useCallback)((function(){(0,q.A)(t),c(!0),l.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),te("button",{type:"button","aria-label":o?(0,U.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,U.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,U.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.A)("clean-btn",n,ee().copyButton,o&&ee().copyButtonCopied),onClick:s},te("span",{className:ee().copyButtonIcons,"aria-hidden":"true"},te(J,{className:ee().copyButtonIcon}),te(Z,{className:ee().copyButtonSuccessIcon})))}var re=n(8397).A;function oe(e){return re("svg",(0,r.A)({viewBox:"0 0 24 24"},e),re("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}var ae=n(1192),ce=n.n(ae),ie=n(8397).A;function le(e){var t=e.className,n=e.onClick,r=e.isEnabled,o=(0,U.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return ie("button",{type:"button",onClick:n,className:(0,i.A)("clean-btn",t,r&&ce().wordWrapButtonEnabled),"aria-label":o,title:o},ie(oe,{className:ce().wordWrapButtonIcon,"aria-hidden":"true"}))}var se=n(8397).A;function ue(e){var t,n,o,c,l,d,p,f,m,y,v,h=e.children,k=e.className,w=void 0===k?"":k,C=e.metastring,N=e.title,B=e.showLineNumbers,A=e.language,E=(0,s.p)().prism,O=E.defaultLanguage,T=E.magicComments,S=null!=(t=null!=A?A:null==(n=w.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:O,I=u(),M=(o=(0,a.useState)(!1),c=o[0],l=o[1],d=(0,a.useState)(!1),p=d[0],f=d[1],m=(0,a.useRef)(null),y=(0,a.useCallback)((function(){var e=m.current.querySelector("code");c?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),l((function(e){return!e}))}),[m,c]),v=(0,a.useCallback)((function(){var e=m.current,t=e.scrollWidth>e.clientWidth||m.current.querySelector("code").hasAttribute("style");f(t)}),[m]),L(m,v),(0,a.useEffect)((function(){v()}),[c,v]),(0,a.useEffect)((function(){return window.addEventListener("resize",v,{passive:!0}),function(){window.removeEventListener("resize",v)}}),[v]),{codeBlockRef:m,isEnabled:c,isCodeScrollable:p,toggle:y}),H=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(g))?void 0:n.groups.title)?t:""}(C)||N,_=b(h,{metastring:C,language:S,magicComments:T}),D=_.lineClassNames,R=_.code,W=null!=B?B:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(C);return se(j,{as:"div",className:(0,i.A)(w,S&&!w.includes("language-"+S)&&"language-"+S)},H&&se("div",{className:x().codeBlockTitle},H),se("div",{className:x().codeBlockContent},se(z,(0,r.A)({},P,{theme:I,code:R,language:null!=S?S:"text"}),(function(e){var t=e.className,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return se("pre",{tabIndex:0,ref:M.codeBlockRef,className:(0,i.A)(t,x().codeBlock,"thin-scrollbar")},se("code",{className:(0,i.A)(x().codeBlockLines,W&&x().codeBlockLinesWithNumbering)},n.map((function(e,t){return se(G,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:D[t],showLineNumbers:W})}))))})),se("div",{className:x().buttonGroup},(M.isEnabled||M.isCodeScrollable)&&se(le,{className:x().codeButton,onClick:function(){return M.toggle()},isEnabled:M.isEnabled}),se(ne,{className:x().codeButton,code:R}))))}var de=n(8397).A,pe=["children"];function fe(e){var t=e.children,n=(0,o.A)(e,pe),i=(0,c.A)(),l=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t);return de("string"==typeof l?ue:E,(0,r.A)({key:String(i)},n),l)}},1069:e=>{e.exports={codeBlockContainer:"codeBlockContainer_kHAJ"}},5671:e=>{e.exports={codeBlockContent:"codeBlockContent_cWlm",codeBlockTitle:"codeBlockTitle_xoSC",codeBlock:"codeBlock_nsYX",codeBlockStandalone:"codeBlockStandalone_brgO",codeBlockLines:"codeBlockLines_QRzl",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_k1Yj",buttonGroup:"buttonGroup_cFv_"}},795:e=>{e.exports={copyButtonCopied:"copyButtonCopied_nvQV",copyButtonIcons:"copyButtonIcons_M5gg",copyButtonIcon:"copyButtonIcon_uGeV",copyButtonSuccessIcon:"copyButtonSuccessIcon_dyhd"}},9910:e=>{e.exports={codeLine:"codeLine_Bp4L",codeLineNumber:"codeLineNumber_wVGC",codeLineContent:"codeLineContent_NeQT"}},1192:e=>{e.exports={wordWrapButtonIcon:"wordWrapButtonIcon_PHXR",wordWrapButtonEnabled:"wordWrapButtonEnabled_MiY1"}},996:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},9978:(e,t,n)=>{"use strict";function r(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection(),a=o.rangeCount>0&&o.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}return n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus(),c}n.d(t,{A:()=>r})}}]);