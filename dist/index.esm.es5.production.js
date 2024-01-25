import{_ as n}from"./481bf7fa.esm.es5.production.js";var t={formatDate:function(n,t){var e=function(n){t=t.replace(RegExp("".concat(n,"+"),"g"),function(t){var e="".concat(o[n]);if("w"===n)return(t.length>2?"星期":"周")+a[e];for(var c=0,r=e.length;c<t.length-r;c++)e="0".concat(e);return 1===t.length?e:e.substring(e.length-t.length)})};if(!n)return"";if("number"==typeof n)n=new Date(n);else if("string"==typeof n){if(/^\d{12,13}$/g.test(n))n=new Date(parseInt(n));else{if(!/^.{10}T.{8,12}Z?$/g.test(n))return n;n=new Date(n)}}if(!(n instanceof Date))throw Error("formatDate error: not date.");if(isNaN(null==n?void 0:n.getFullYear()))throw Error("formatDate error: invalid date.");t=t||"yyyy-MM-dd HH:mm:ss";var o={y:n.getFullYear(),M:n.getMonth()+1,d:n.getDate(),q:Math.floor((n.getMonth()+3)/3),w:n.getDay(),H:n.getHours(),h:n.getHours()%12==0?12:n.getHours()%12,m:n.getMinutes(),s:n.getSeconds(),S:n.getMilliseconds()},a=["天","一","二","三","四","五","六"];for(var c in o)e(c);return t},parseDate:function(n,t){var e={y:0,M:1,d:0,H:0,h:0,m:0,s:0,S:0};(t=t||"yyyy-MM-dd").replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g,function(t,o,a,c,r){return n=n.replace(RegExp("".concat(o,"(\\d{").concat(a.length,"})").concat(r)),function(n,t){return e[c]=parseInt(t),""}),""}),e.M--;var o=new Date(e.y,e.M,e.d,e.H,e.m,e.s);return 0!==e.S&&o.setMilliseconds(e.S),o},showLoading:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"请稍候",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=this,a=(e=Object.assign({},{hasMask:!0,maskColor:"transparent",onCancel:null,cancelInline:!1,id:"com_global_page_loading"},e)).id,c="_".concat(a,"_timeout");window[c]&&clearTimeout(window[c]);var r=document.getElementById(a);r||((r=document.createElement("div")).id=a,r.className=a,document.body.append(r));var i="".concat(a,"_style");if(!document.getElementById(i)){var l=document.createElement("style");l.id=i,l.innerHTML="\n            .".concat(a," {\n                position: fixed;\n                top: calc(50vh - 60px);\n                left: calc(50vw - 60px);\n                width: 120px;\n                height: 120px;\n                z-index: 8000;\n                background: rgba(0, 0, 0, 0.6);\n                border-radius: 8px;\n                text-align: center;\n                color: white;\n                padding-top: 20px;\n            }\n            .").concat(a," img {\n                width: 50px;\n                margin-bottom: 10px;\n            }"),document.head.appendChild(l)}if(r.innerHTML="\n            ".concat(e.hasMask?'<div class="mask-wrapper" style="background-color: '.concat(e.maskColor,'"></div>'):"",'\n            <div class="loading-wrapper">\n                <div class="loading-content">\n                    <img src="https://img.alicdn.com/tfs/TB1bnUsQBLoK1RjSZFuXXXn0XXa-32-32.svg" alt="加载中">\n                    <div>').concat(n).concat(e.cancelInline?" ":"</div>","\n                    ").concat(e.onCancel?'<a href="javascript:;" class="cancel">取消</a>':"","\n                    ").concat(e.cancelInline?"</div>":"","\n                </div>\n            </div>"),e.onCancel){var d=r.querySelector(".cancel");d&&d.addEventListener("click",function(){o.hideLoading(),e.onCancel()})}r.style.display="block",t>0&&(window[c]=setTimeout(function(){o.hideLoading()},1e3*t))},hideLoading:function(){var n=document.getElementById("com_global_page_loading");n&&(n.style.display="none")},getParam:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search;return(RegExp("(^|\\?|&)".concat(n,"=(.*?)(?=&|#|$)"),"g").exec(t)||[])[2]},getParamInt:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search;return parseInt(this.getParam(n,t)||"0",10)},getParams:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.search,e=((t||"").split("?").pop()||"").split("#")[0]||"",o={};return e.split("&").map(function(n){return n.split("=")}).forEach(function(t){var e=n(t,2),a=e[0],c=e[1];o[a]=c||""}),o},setParam:function(t,e,o){if(o=o||"".concat(location.pathname).concat(location.search),void 0!==this.getParam(t,o))return o.replace(RegExp("(^|\\?|&)".concat(t,"=(.*?)(?=&|#|$)"),"g"),"$1".concat(t,"=").concat(e));var a=n(o.split("#"),2),c=a[0],r=a[1];return"".concat(c).concat(0>c.indexOf("?")?"?":"&").concat(t,"=").concat(e).concat(r?"#":"").concat(r||"")},delParam:function(n,t){return(t=t||"".concat(location.pathname).concat(location.search)).replace(RegExp("(^|\\?|&)".concat(n,"=.*?(&|#|$)"),"g"),function(n,t,e){return"&"===e?t:e})},sleep:function(n){return new Promise(function(t){return setTimeout(t,n||0)})},deepCopy:function(n){return n&&"object"==typeof n?JSON.parse(JSON.stringify(n)):n},encodeHtml:function(n){if("string"==typeof n){var t=document.createElement("div");return t.innerText=n,t.innerHTML}if("object"==typeof n&&n)for(var e in n)n[e]=this.encodeHtml(n[e]);return n},decodeHtml:function(n){if("string"==typeof n){var t=document.createElement("div");return t.innerHTML=n,t.innerText}if("object"==typeof n&&n)for(var e in n)n[e]=this.decodeHtml(n[e]);return n},toUrlParams:function(n){return Object.keys(n||{}).filter(function(t){return void 0!==n[t]}).map(function(t){var e="object"==typeof n[t]?JSON.stringify(n[t]):n[t];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e))}).join("&")}};export{t as default};
