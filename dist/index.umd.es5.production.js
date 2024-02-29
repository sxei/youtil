!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).youtil=t()}(this,function(){"use strict";function n(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=Array(t);e<t;e++)o[e]=n[e];return o}function t(t,e){return function(n){if(Array.isArray(n))return n}(t)||function(n,t){var e,o,r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var a=[],c=!0,i=!1;try{for(r=r.call(n);!(c=(e=r.next()).done)&&(a.push(e.value),!t||a.length!==t);c=!0);}catch(n){i=!0,o=n}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if("Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}return{formatDate:function(n,t){var e=function(n){t=t.replace(RegExp("".concat(n,"+"),"g"),function(t){var e="".concat(o[n]);if("w"===n)return(t.length>2?"星期":"周")+r[e];for(var a=0,c=e.length;a<t.length-c;a++)e="0".concat(e);return 1===t.length?e:e.substring(e.length-t.length)})};if(!n)return"";if("number"==typeof n)n=new Date(n);else if("string"==typeof n){if(/^\d{12,13}$/g.test(n))n=new Date(parseInt(n));else{if(!/^.{10}T.{8,12}Z?$/g.test(n))return n;n=new Date(n)}}if(!(n instanceof Date))throw Error("formatDate error: not date.");if(isNaN(null==n?void 0:n.getFullYear()))throw Error("formatDate error: invalid date.");t=t||"yyyy-MM-dd HH:mm:ss";var o={y:n.getFullYear(),M:n.getMonth()+1,d:n.getDate(),q:Math.floor((n.getMonth()+3)/3),w:n.getDay(),H:n.getHours(),h:n.getHours()%12==0?12:n.getHours()%12,m:n.getMinutes(),s:n.getSeconds(),S:n.getMilliseconds()},r=["天","一","二","三","四","五","六"];for(var a in o)e(a);return t},parseDate:function(n,t){var e={y:0,M:1,d:0,H:0,h:0,m:0,s:0,S:0};(t=t||"yyyy-MM-dd").replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g,function(t,o,r,a,c){return n=n.replace(new RegExp("".concat(o,"(\\d{").concat(r.length,"})").concat(c)),function(n,t){return e[a]=parseInt(t),""}),""}),e.M--;var o=new Date(e.y,e.M,e.d,e.H,e.m,e.s);return 0!==e.S&&o.setMilliseconds(e.S),o},showLoading:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"请稍候",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=this,r=(e=Object.assign({},{hasMask:!0,maskColor:"transparent",onCancel:null,cancelInline:!1,id:"com_global_page_loading"},e)).id,a="_".concat(r,"_timeout");window[a]&&clearTimeout(window[a]);var c=document.getElementById(r);c||((c=document.createElement("div")).id=r,c.className=r,document.body.append(c));var i="".concat(r,"_style");if(!document.getElementById(i)){var l=document.createElement("style");l.id=i,l.innerHTML="\n            .".concat(r," {\n                position: fixed;\n                top: calc(50vh - 60px);\n                left: calc(50vw - 60px);\n                width: 120px;\n                height: 120px;\n                z-index: 8000;\n                background: rgba(0, 0, 0, 0.6);\n                border-radius: 8px;\n                text-align: center;\n                color: white;\n                padding-top: 20px;\n            }\n            .").concat(r," img {\n                width: 50px;\n                margin-bottom: 10px;\n            }"),document.head.appendChild(l)}if(c.innerHTML="\n            ".concat(e.hasMask?'<div class="mask-wrapper" style="background-color: '.concat(e.maskColor,'"></div>'):"",'\n            <div class="loading-wrapper">\n                <div class="loading-content">\n                    <img src="https://img.alicdn.com/tfs/TB1bnUsQBLoK1RjSZFuXXXn0XXa-32-32.svg" alt="加载中">\n                    <div>').concat(n).concat(e.cancelInline?" ":"</div>","\n                    ").concat(e.onCancel?'<a href="javascript:;" class="cancel">取消</a>':"","\n                    ").concat(e.cancelInline?"</div>":"","\n                </div>\n            </div>"),e.onCancel){var d=c.querySelector(".cancel");d&&d.addEventListener("click",function(){o.hideLoading(),e.onCancel()})}c.style.display="block",t>0&&(window[a]=setTimeout(function(){o.hideLoading()},1e3*t))},hideLoading:function(){var n=document.getElementById("com_global_page_loading");n&&(n.style.display="none")},getParam:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search;return(RegExp("(^|\\?|&)".concat(n,"=(.*?)(?=&|#|$)"),"g").exec(t)||[])[2]},getParamInt:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search;return parseInt(this.getParam(n,t)||"0",10)},getParams:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.search,e=((n||"").split("?").pop()||"").split("#")[0]||"",o={};return e.split("&").map(function(n){return n.split("=")}).forEach(function(n){var e=t(n,2),r=e[0],a=e[1];o[r]=a||""}),o},setParam:function(n,e,o){if(o=o||"".concat(location.pathname).concat(location.search),void 0!==this.getParam(n,o))return o.replace(RegExp("(^|\\?|&)".concat(n,"=(.*?)(?=&|#|$)"),"g"),"$1".concat(n,"=").concat(e));var r=t(o.split("#"),2),a=r[0],c=r[1];return"".concat(a).concat(0>a.indexOf("?")?"?":"&").concat(n,"=").concat(e).concat(c?"#":"").concat(c||"")},delParam:function(n,t){return(t=t||"".concat(location.pathname).concat(location.search)).replace(RegExp("(^|\\?|&)".concat(n,"=.*?(&|#|$)"),"g"),function(n,t,e){return"&"===e?t:e})},sleep:function(n){return new Promise(function(t){return setTimeout(t,n||0)})},deepCopy:function(n){return n&&"object"==typeof n?JSON.parse(JSON.stringify(n)):n},encodeHtml:function(n){if("string"==typeof n){var t=document.createElement("div");return t.innerText=n,t.innerHTML}if("object"==typeof n&&n)for(var e in n)n[e]=this.encodeHtml(n[e]);return n},decodeHtml:function(n){if("string"==typeof n){var t=document.createElement("div");return t.innerHTML=n,t.innerText}if("object"==typeof n&&n)for(var e in n)n[e]=this.decodeHtml(n[e]);return n},toUrlParams:function(n){return Object.keys(n||{}).filter(function(t){return void 0!==n[t]}).map(function(t){var e="object"==typeof n[t]?JSON.stringify(n[t]):n[t];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e))}).join("&")},copyTextToClipboard:function(n,t,e){if(t=t||function(n,t){return console[n?"log":"error"]("复制到剪贴板".concat(n?"成功！":"失败：".concat(t)))},navigator.clipboard&&!e)return navigator.clipboard.writeText(n).then(function(){t(!0)}).catch(function(n){throw t(!1,n.message),n});var o=document.createElement("input");o.value=n,o.style.cssText="position:fixed;left:0;top:0;opacity:0;",document.body.appendChild(o),o.select();try{t(document.execCommand("copy"))}catch(n){throw t(!1,n.message),n}document.body.removeChild(o)}}});
