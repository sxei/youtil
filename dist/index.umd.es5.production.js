!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).youtil={})}(this,function(e){"use strict";var n,t,r=function(){var e=document.getElementById("com_global_page_loading");e&&(e.style.display="none")};function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search;return(RegExp("(^|\\?|&)".concat(e,"=(.*?)(?=&|#|$)"),"g").exec(n)||[])[2]},i=function(e){return Object.keys(e||{}).filter(function(n){return void 0!==e[n]}).map(function(n){var t="object"==typeof e[n]?JSON.stringify(e[n]):e[n];return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(t))}).join("&")};function l(e,n,t,r,o,a,c){try{var i=e[a](c),l=i.value}catch(e){t(e);return}i.done?n(l):Promise.resolve(l).then(r,o)}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,o;r=e,o=t[n],n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o})}return e}"function"==typeof SuppressedError&&SuppressedError;var s=(n=function(e,n){var t,r,o,a,c,l,s,d,f,p,m,g,y,h,v;return function(e,n){var t,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},c=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return c.next=i(0),c.throw=i(1),c.return=i(2),"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(i){return function(l){return function(i){if(t)throw TypeError("Generator is already executing.");for(;c&&(c=0,i[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,function(b){switch(b.label){case 0:r=(t=(n=Object.assign({},{errorMessage:"系统繁忙，请稍后再试",errorHandler:function(e){if(!(null==n?void 0:n.silent)){var t;null==n||null===(t=n.toastHandler)||void 0===t||t.call(n,e)}throw Error(e)},baseUrl:"",headers:{},fetchOptions:{credentials:"include"},checkSuccess:function(e){return(null==e?void 0:e.code)==0||(null==e?void 0:e.code)==200},toastHandler:function(e){return console.error("您还没有配置toastHandler，请根据您的UI组件库配置合适的提示方法。")}},n||{}))||{}).params,o=t.data,a=t.json,c=t.method,l=t.headers,s=t.baseUrl,d=t.fetchOptions,f=t.checkSuccess,p=t.afterRequest,m=t.errorHandler,g=t.errorMessage,y=t.responseConverter,r&&(d.method=c||"GET",e="".concat(e,"?").concat(i(r))),o?Object.assign(d,{method:c||"POST",body:i(o),headers:u({"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},l||{})}):a&&Object.assign(d,{method:c||"POST",body:JSON.stringify(a),headers:u({"Content-Type":"application/json;charset=utf-8"},l||{})}),h=null,b.label=1;case 1:return b.trys.push([1,3,,4]),[4,fetch("".concat(s||"").concat(e),d).then(function(e){return e.json()})];case 2:return h=b.sent(),[3,4];case 3:return console.error(v=b.sent()),null==p||p(!1,{message:null==v?void 0:v.message}),null==m||m(g||""),[2];case 4:if(h=y?y(h):h,null==f?void 0:f(h))return null==p||p(!0,h),[2,h.data];return null==p||p(!1,h),null==m||m(h.message||h.msg||g||"",h),[2]}})},t=function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function c(e){l(a,r,o,c,i,"next",e)}function i(e){l(a,r,o,c,i,"throw",e)}c(void 0)})},function(e,n){return t.apply(this,arguments)}),d=function(e){if("string"==typeof e){var n=document.createElement("div");return n.innerText=e,n.innerHTML}if("object"==typeof e&&e)for(var t in e)e[t]=d(e[t]);return e},f=function(e){if("string"==typeof e){var n=document.createElement("div");return n.innerHTML=e,n.innerText}if("object"==typeof e&&e)for(var t in e)e[t]=f(e[t]);return e};e.Request=function(e){return function(n,t){return s(n,u({},e||{},t||{}))}},e.copyToClipboard=function(e,n,t){if(!e)throw Error("text can not be empty.");return(n=n||function(e){return console.error("复制到剪贴板失败：".concat(e||""))},navigator.clipboard&&!t)?navigator.clipboard.writeText(e).catch(function(e){throw n(e.message),e}):new Promise(function(t,r){var o=document.createElement("input");o.value=e,o.style.cssText="position:fixed;left:0;top:0;opacity:0;",document.body.appendChild(o),o.select();try{if(document.execCommand("copy"))t();else{var a="Failed to execute 'document.execCommand'.";n(a),r(Error(a))}}catch(e){n(e.message),r(e)}finally{document.body.removeChild(o)}})},e.decodeHtml=f,e.deepCopy=function(e){return e&&"object"==typeof e?JSON.parse(JSON.stringify(e)):e},e.delParam=function(e,n){return(n=n||"".concat(location.pathname).concat(location.search)).replace(RegExp("(^|\\?|&)".concat(e,"=.*?(&|#|$)"),"g"),function(e,n,t){return"&"===t?n:t})},e.encodeHtml=d,e.formatDate=function(e,n){var t=function(e){n=n.replace(RegExp("".concat(e,"+"),"g"),function(n){var t="".concat(r[e]);if("w"===e)return(n.length>2?"星期":"周")+o[t];for(var a=0,c=t.length;a<n.length-c;a++)t="0".concat(t);return 1===n.length?t:t.substring(t.length-n.length)})};if(!e)return"";if("number"==typeof e)e=new Date(e);else if("string"==typeof e){if(/^\d{12,13}$/g.test(e))e=new Date(parseInt(e));else{if(!/^.{10}T.{8,12}Z?$/g.test(e))return e;e=new Date(e)}}if(!(e instanceof Date))throw Error("formatDate error: not date.");if(isNaN(null==e?void 0:e.getFullYear()))throw Error("formatDate error: invalid date.");n=n||"yyyy-MM-dd HH:mm:ss";var r={y:e.getFullYear(),M:e.getMonth()+1,d:e.getDate(),q:Math.floor((e.getMonth()+3)/3),w:e.getDay(),H:e.getHours(),h:e.getHours()%12==0?12:e.getHours()%12,m:e.getMinutes(),s:e.getSeconds(),S:e.getMilliseconds()},o=["天","一","二","三","四","五","六"];for(var a in r)t(a);return n},e.getParam=c,e.getParamInt=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search;return parseInt(c(e,n)||"0",10)},e.getParams=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.search,n=((e||"").split("?").pop()||"").split("#")[0]||"",t={};return n.split("&").map(function(e){return e.split("=")}).forEach(function(e){var n=a(e,2),r=n[0],o=n[1];t[r]=o||""}),t},e.hideLoading=r,e.parseDate=function(e,n){var t={y:0,M:1,d:0,H:0,h:0,m:0,s:0,S:0};(n=n||"yyyy-MM-dd").replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g,function(n,r,o,a,c){return e=e.replace(RegExp("".concat(r,"(\\d{").concat(o.length,"})").concat(c)),function(e,n){return t[a]=parseInt(n),""}),""}),t.M--;var r=new Date(t.y,t.M,t.d,t.H,t.m,t.s);return 0!==t.S&&r.setMilliseconds(t.S),r},e.request=s,e.setParam=function(e,n,t){if(void 0!==c(e,t=t||"".concat(location.pathname).concat(location.search)))return t.replace(RegExp("(^|\\?|&)".concat(e,"=(.*?)(?=&|#|$)"),"g"),"$1".concat(e,"=").concat(n));var r=a(t.split("#"),2),o=r[0],i=r[1];return"".concat(o).concat(0>o.indexOf("?")?"?":"&").concat(e,"=").concat(n).concat(i?"#":"").concat(i||"")},e.showLoading=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"请稍候",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(t=Object.assign({},{hasMask:!0,maskColor:"transparent",onCancel:null,cancelInline:!1,id:"com_global_page_loading"},t)).id,a="_".concat(o,"_timeout");window[a]&&clearTimeout(window[a]);var c=document.getElementById(o);c||((c=document.createElement("div")).id=o,c.className=o,document.body.append(c));var i="".concat(o,"_style");if(!document.getElementById(i)){var l=document.createElement("style");l.id=i,l.innerHTML="\n        .".concat(o," {\n            position: fixed;\n            top: calc(50vh - 60px);\n            left: calc(50vw - 60px);\n            width: 120px;\n            height: 120px;\n            z-index: 8000;\n            background: rgba(0, 0, 0, 0.6);\n            border-radius: 8px;\n            text-align: center;\n            color: white;\n            padding-top: 20px;\n        }\n        .").concat(o," img {\n            width: 50px;\n            margin-bottom: 10px;\n        }"),document.head.appendChild(l)}if(c.innerHTML="\n        ".concat(t.hasMask?'<div class="mask-wrapper" style="background-color: '.concat(t.maskColor,'"></div>'):"",'\n        <div class="loading-wrapper">\n            <div class="loading-content">\n                <img src="https://img.alicdn.com/tfs/TB1bnUsQBLoK1RjSZFuXXXn0XXa-32-32.svg" alt="加载中">\n                <div>').concat(e).concat(t.cancelInline?" ":"</div>","\n                ").concat(t.onCancel?'<a href="javascript:;" class="cancel">取消</a>':"","\n                ").concat(t.cancelInline?"</div>":"","\n            </div>\n        </div>"),t.onCancel){var u=c.querySelector(".cancel");u&&u.addEventListener("click",function(){r(),t.onCancel()})}c.style.display="block",n>0&&(window[a]=setTimeout(function(){r()},1e3*n))},e.sleep=function(e){return new Promise(function(n){return setTimeout(n,e||0)})},e.toUrlParams=i,Object.defineProperty(e,"__esModule",{value:!0})});
