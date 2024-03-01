import{_ as n}from"./481bf7fa.esm.es5.production.js";var e={formatDate:function(n,e){var t=function(n){e=e.replace(RegExp("".concat(n,"+"),"g"),function(e){var t="".concat(o[n]);if("w"===n)return(e.length>2?"星期":"周")+a[t];for(var c=0,r=t.length;c<e.length-r;c++)t="0".concat(t);return 1===e.length?t:t.substring(t.length-e.length)})};if(!n)return"";if("number"==typeof n)n=new Date(n);else if("string"==typeof n){if(/^\d{12,13}$/g.test(n))n=new Date(parseInt(n));else{if(!/^.{10}T.{8,12}Z?$/g.test(n))return n;n=new Date(n)}}if(!(n instanceof Date))throw Error("formatDate error: not date.");if(isNaN(null==n?void 0:n.getFullYear()))throw Error("formatDate error: invalid date.");e=e||"yyyy-MM-dd HH:mm:ss";var o={y:n.getFullYear(),M:n.getMonth()+1,d:n.getDate(),q:Math.floor((n.getMonth()+3)/3),w:n.getDay(),H:n.getHours(),h:n.getHours()%12==0?12:n.getHours()%12,m:n.getMinutes(),s:n.getSeconds(),S:n.getMilliseconds()},a=["天","一","二","三","四","五","六"];for(var c in o)t(c);return e},parseDate:function(n,e){var t={y:0,M:1,d:0,H:0,h:0,m:0,s:0,S:0};(e=e||"yyyy-MM-dd").replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g,function(e,o,a,c,r){return n=n.replace(RegExp("".concat(o,"(\\d{").concat(a.length,"})").concat(r)),function(n,e){return t[c]=parseInt(e),""}),""}),t.M--;var o=new Date(t.y,t.M,t.d,t.H,t.m,t.s);return 0!==t.S&&o.setMilliseconds(t.S),o},showLoading:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"请稍候",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=(o=Object.assign({},{hasMask:!0,maskColor:"transparent",onCancel:null,cancelInline:!1,id:"com_global_page_loading"},o)).id,c="_".concat(a,"_timeout");window[c]&&clearTimeout(window[c]);var r=document.getElementById(a);r||((r=document.createElement("div")).id=a,r.className=a,document.body.append(r));var i="".concat(a,"_style");if(!document.getElementById(i)){var l=document.createElement("style");l.id=i,l.innerHTML="\n            .".concat(a," {\n                position: fixed;\n                top: calc(50vh - 60px);\n                left: calc(50vw - 60px);\n                width: 120px;\n                height: 120px;\n                z-index: 8000;\n                background: rgba(0, 0, 0, 0.6);\n                border-radius: 8px;\n                text-align: center;\n                color: white;\n                padding-top: 20px;\n            }\n            .").concat(a," img {\n                width: 50px;\n                margin-bottom: 10px;\n            }"),document.head.appendChild(l)}if(r.innerHTML="\n            ".concat(o.hasMask?'<div class="mask-wrapper" style="background-color: '.concat(o.maskColor,'"></div>'):"",'\n            <div class="loading-wrapper">\n                <div class="loading-content">\n                    <img src="https://img.alicdn.com/tfs/TB1bnUsQBLoK1RjSZFuXXXn0XXa-32-32.svg" alt="加载中">\n                    <div>').concat(n).concat(o.cancelInline?" ":"</div>","\n                    ").concat(o.onCancel?'<a href="javascript:;" class="cancel">取消</a>':"","\n                    ").concat(o.cancelInline?"</div>":"","\n                </div>\n            </div>"),o.onCancel){var d=r.querySelector(".cancel");d&&d.addEventListener("click",function(){e.hideLoading(),o.onCancel()})}r.style.display="block",t>0&&(window[c]=setTimeout(function(){e.hideLoading()},1e3*t))},hideLoading:function(){var n=document.getElementById("com_global_page_loading");n&&(n.style.display="none")},getParam:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search;return(RegExp("(^|\\?|&)".concat(n,"=(.*?)(?=&|#|$)"),"g").exec(e)||[])[2]},getParamInt:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.search;return parseInt(e.getParam(n,t)||"0",10)},getParams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.search,t=((e||"").split("?").pop()||"").split("#")[0]||"",o={};return t.split("&").map(function(n){return n.split("=")}).forEach(function(e){var t=n(e,2),a=t[0],c=t[1];o[a]=c||""}),o},setParam:function(t,o,a){if(a=a||"".concat(location.pathname).concat(location.search),void 0!==e.getParam(t,a))return a.replace(RegExp("(^|\\?|&)".concat(t,"=(.*?)(?=&|#|$)"),"g"),"$1".concat(t,"=").concat(o));var c=n(a.split("#"),2),r=c[0],i=c[1];return"".concat(r).concat(0>r.indexOf("?")?"?":"&").concat(t,"=").concat(o).concat(i?"#":"").concat(i||"")},delParam:function(n,e){return(e=e||"".concat(location.pathname).concat(location.search)).replace(RegExp("(^|\\?|&)".concat(n,"=.*?(&|#|$)"),"g"),function(n,e,t){return"&"===t?e:t})},sleep:function(n){return new Promise(function(e){return setTimeout(e,n||0)})},deepCopy:function(n){return n&&"object"==typeof n?JSON.parse(JSON.stringify(n)):n},encodeHtml:function(n){if("string"==typeof n){var t=document.createElement("div");return t.innerText=n,t.innerHTML}if("object"==typeof n&&n)for(var o in n)n[o]=e.encodeHtml(n[o]);return n},decodeHtml:function(n){if("string"==typeof n){var t=document.createElement("div");return t.innerHTML=n,t.innerText}if("object"==typeof n&&n)for(var o in n)n[o]=e.decodeHtml(n[o]);return n},toUrlParams:function(n){return Object.keys(n||{}).filter(function(e){return void 0!==n[e]}).map(function(e){var t="object"==typeof n[e]?JSON.stringify(n[e]):n[e];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t))}).join("&")},copyToClipboard:function(n,e,t){if(!n)throw Error("text can not be empty.");return(e=e||function(n){return console.error("复制到剪贴板失败：".concat(n||""))},navigator.clipboard&&!t)?navigator.clipboard.writeText(n).catch(function(n){throw e(n.message),n}):new Promise(function(t,o){var a=document.createElement("input");a.value=n,a.style.cssText="position:fixed;left:0;top:0;opacity:0;",document.body.appendChild(a),a.select();try{if(document.execCommand("copy"))t();else{var c="Failed to execute 'document.execCommand'.";e(c),o(Error(c))}}catch(n){e(n.message),o(n)}finally{document.body.removeChild(a)}})}};export{e as default};
