import"./195e5999.esm.es5.production.js";function n(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}function t(t,e){return function(n){if(Array.isArray(n))return n}(t)||function(n,t){var e,r,o=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=o){var a=[],c=!0,i=!1;try{for(o=o.call(n);!(c=(e=o.next()).done)&&(a.push(e.value),!t||a.length!==t);c=!0);}catch(n){i=!0,r=n}finally{try{c||null==o.return||o.return()}finally{if(i)throw r}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}}(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var e={formatDate:function(n,t){var e=function(n){t=t.replace(RegExp("".concat(n,"+"),"g"),function(t){var e="".concat(r[n]);if("w"===n)return(t.length>2?"星期":"周")+o[e];for(var a=0,c=e.length;a<t.length-c;a++)e="0".concat(e);return 1===t.length?e:e.substring(e.length-t.length)})};if(!n)return"";n="number"==typeof n?new Date(n):n,t=t||"yyyy-MM-dd HH:mm:ss";var r={y:n.getFullYear(),M:n.getMonth()+1,d:n.getDate(),q:Math.floor((n.getMonth()+3)/3),w:n.getDay(),H:n.getHours(),h:n.getHours()%12==0?12:n.getHours()%12,m:n.getMinutes(),s:n.getSeconds(),S:n.getMilliseconds()},o=["天","一","二","三","四","五","六"];for(var a in r)e(a);return t},parseDate:function(n,t){var e={y:0,M:1,d:0,H:0,h:0,m:0,s:0,S:0};(t=t||"yyyy-MM-dd").replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g,function(t,r,o,a,c){return n=n.replace(RegExp("".concat(r,"(\\d{").concat(o.length,"})").concat(c)),function(n,t){return e[a]=parseInt(t),""}),""}),e.M--;var r=new Date(e.y,e.M,e.d,e.H,e.m,e.s);return 0!==e.S&&r.setMilliseconds(e.S),r},showLoading:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"请稍候",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this,o=(e=Object.assign({},{hasMask:!0,maskColor:"transparent",onCancel:null,cancelInline:!1,id:"com_global_page_loading"},e)).id,a="_".concat(o,"_timeout");window[a]&&clearTimeout(window[a]);var c=document.getElementById(o);c||((c=document.createElement("div")).id=o,c.className=o,document.body.append(c));var i="".concat(o,"_style");if(!document.getElementById(i)){var l=document.createElement("style");l.id=i,l.innerHTML="\n            .".concat(o," {\n                position: fixed;\n                top: calc(50vh - 60px);\n                left: calc(50vw - 60px);\n                width: 120px;\n                height: 120px;\n                z-index: 8000;\n                background: rgba(0, 0, 0, 0.6);\n                border-radius: 8px;\n                text-align: center;\n                color: white;\n                padding-top: 20px;\n            }\n            .").concat(o," img {\n                width: 50px;\n                margin-bottom: 10px;\n            }"),document.head.appendChild(l)}if(c.innerHTML="\n            ".concat(e.hasMask?'<div class="mask-wrapper" style="background-color: '.concat(e.maskColor,'"></div>'):"",'\n            <div class="loading-wrapper">\n                <div class="loading-content">\n                    <img src="https://img.alicdn.com/tfs/TB1bnUsQBLoK1RjSZFuXXXn0XXa-32-32.svg" alt="加载中">\n                    <div>').concat(n).concat(e.cancelInline?" ":"</div>","\n                    ").concat(e.onCancel?'<a href="javascript:;" class="cancel">取消</a>':"","\n                    ").concat(e.cancelInline?"</div>":"","\n                </div>\n            </div>"),e.onCancel){var d=c.querySelector(".cancel");d&&d.addEventListener("click",function(){r.hideLoading(),e.onCancel()})}c.style.display="block",t>0&&(window[a]=setTimeout(function(){r.hideLoading()},1e3*t))},hideLoading:function(){var n=document.getElementById("com_global_page_loading");n&&(n.style.display="none")},getParam:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search;return(RegExp("(^|\\?|&)".concat(n,"=(.*?)(?=&|#|$)"),"g").exec(t)||[])[2]},getParamInt:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search;return parseInt(this.getParam(n,t)||"0",10)},getParams:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.search,e=((n||"").split("?").pop()||"").split("#")[0]||"",r={};return e.split("&").map(function(n){return n.split("=")}).forEach(function(n){var e=t(n,2),o=e[0],a=e[1];r[o]=a||""}),r},setParam:function(n,e,r){if(r=r||"".concat(location.pathname).concat(location.search),void 0!==this.getParam(n,r))return r.replace(RegExp("(^|\\?|&)".concat(n,"=(.*?)(?=&|#|$)"),"g"),"$1".concat(n,"=").concat(e));var o=t(r.split("#"),2),a=o[0],c=o[1];return"".concat(a).concat(0>a.indexOf("?")?"?":"&").concat(n,"=").concat(e).concat(c?"#":"").concat(c||"")},delParam:function(n,t){return(t=t||"".concat(location.pathname).concat(location.search)).replace(RegExp("(^|\\?|&)".concat(n,"=.*?(&|#|$)"),"g"),function(n,t,e){return"&"===e?t:e})},sleep:function(n){return new Promise(function(t){return setTimeout(t,n||0)})},deepCopy:function(n){return n&&"object"==typeof n?JSON.parse(JSON.stringify(n)):n},encodeHtml:function(n){if("string"==typeof n){var t=document.createElement("div");return t.innerText=n,t.innerHTML}if("object"==typeof n&&n)for(var e in n)n[e]=this.encodeHtml(n[e]);return n},decodeHtml:function(n){if("string"==typeof n){var t=document.createElement("div");return t.innerHTML=n,t.innerText}if("object"==typeof n&&n)for(var e in n)n[e]=this.decodeHtml(n[e]);return n}};export{e as default};
