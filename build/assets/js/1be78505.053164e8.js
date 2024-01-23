(self.webpackChunkyoutil=self.webpackChunkyoutil||[]).push([[514],{1651:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Ke});var n=a(6162),o=a(7780),i=a(1291),r=a(7695),l=a(2310),d=a(1542),s=a(9149),c=a(8736),u=a(4303),m=a(9593),b=a(6553),p=a(4745);var v=a(7598),h=a.n(v),f=a(8096).Z;function g(){var e=function(e){var t=e.threshold,a=(0,n.useState)(!1),o=a[0],i=a[1],r=(0,n.useRef)(!1),l=(0,b.Ct)(),d=l.startScroll,s=l.cancelScroll;return(0,b.RF)((function(e,a){var n=e.scrollY,o=null==a?void 0:a.scrollY;o&&(r.current?r.current=!1:n>=o?(s(),i(!1)):n<t?i(!1):n+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,p.S)((function(e){e.location.hash&&(r.current=!0,i(!1))})),{shown:o,scrollToTop:function(){return d(0)}}}({threshold:300}),t=e.shown,a=e.scrollToTop;return f("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,h().backToTopButton,t&&h().backToTopButtonShow),type:"button",onClick:a})}var k=a(5688),C=a(2663),_=a(8035),Z=a(4874),S=a(4090),I=a(8850),x=a(8096).Z;function N(e){return x("svg",(0,I.Z)({width:"20",height:"20","aria-hidden":"true"},e),x("g",{fill:"#7a7a7a"},x("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),x("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var T=a(6582),B=a.n(T),y=a(8096).Z;function L(e){var t=e.onClick;return y("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",B().collapseSidebarButton),onClick:t},y(N,{className:B().collapseSidebarButtonIcon}))}var A=a(8008),w=a(3699),H=a(882),E=a(8096).Z,M=Symbol("EmptyContext"),P=n.createContext(M);function W(e){var t=e.children,a=(0,n.useState)(null),o=a[0],i=a[1],r=(0,n.useMemo)((function(){return{expandedItem:o,setExpandedItem:i}}),[o]);return E(P.Provider,{value:r},t)}var V=a(3829),D=a(2227),R=a(4187),F=a(920),z=a(8096).Z,Y=["item","onItemClick","activePath","level","index"];function G(e){var t=e.categoryLabel,a=e.onClick;return z("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function Q(e){var t=e.item,a=e.onItemClick,i=e.activePath,l=e.level,s=e.index,c=(0,w.Z)(e,Y),u=t.items,m=t.label,b=t.collapsible,p=t.className,v=t.href,h=(0,Z.L)().docs.sidebar.autoCollapseCategories,f=function(e){var t=(0,F.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,d.Wl)(e):void 0}),[e,t])}(t),g=(0,d._F)(t,i),k=(0,D.Mg)(v,i),C=(0,V.u)({initialState:function(){return!!b&&(!g&&t.collapsed)}}),_=C.collapsed,S=C.setCollapsed,x=function(){var e=(0,n.useContext)(P);if(e===M)throw new H.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=x.expandedItem,T=x.setExpandedItem,B=function(e){void 0===e&&(e=!_),T(e?null:s),S(e)};return function(e){var t=e.isActive,a=e.collapsed,o=e.updateCollapsed,i=(0,H.D9)(t);(0,n.useEffect)((function(){t&&!i&&a&&o(!1)}),[t,i,a,o])}({isActive:g,collapsed:_,updateCollapsed:B}),(0,n.useEffect)((function(){b&&null!=N&&N!==s&&h&&S(!0)}),[b,N,s,S,h]),z("li",{className:(0,o.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":_},p)},z("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},z(R.Z,(0,I.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":g}),onClick:b?function(e){null==a||a(t),v?B(!1):(e.preventDefault(),B())}:function(){null==a||a(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!_:void 0,href:b?null!=f?f:"#":f},c),m),v&&b&&z(G,{categoryLabel:m,onClick:function(e){e.preventDefault(),B()}})),z(V.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},z(se,{items:u,tabIndex:_?-1:0,onItemClick:a,activePath:i,level:l+1})))}var U=a(1616),X=a(2711),j=a(6944),q=a.n(j),K=a(8096).Z,O=["item","onItemClick","activePath","level","index"];function J(e){var t=e.item,a=e.onItemClick,n=e.activePath,i=e.level,l=(e.index,(0,w.Z)(e,O)),s=t.href,c=t.label,u=t.className,m=t.autoAddBaseUrl,b=(0,d._F)(t,n),p=(0,U.Z)(s);return K("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:c},K(R.Z,(0,I.Z)({className:(0,o.Z)("menu__link",!p&&q().menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:m,"aria-current":b?"page":void 0,to:s},p&&{onClick:a?function(){return a(t)}:void 0},l),c,!p&&K(X.Z,null)))}var $=a(2094),ee=a.n($),te=a(8096).Z;function ae(e){var t=e.item,a=e.level,n=e.index,i=t.value,l=t.defaultStyle,d=t.className;return te("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(a),l&&[ee().menuHtmlItem,"menu__list-item"],d),key:n,dangerouslySetInnerHTML:{__html:i}})}var ne=a(8096).Z,oe=["item"];function ie(e){var t=e.item,a=(0,w.Z)(e,oe);switch(t.type){case"category":return ne(Q,(0,I.Z)({item:t},a));case"html":return ne(ae,(0,I.Z)({item:t},a));default:return ne(J,(0,I.Z)({item:t},a))}}var re=a(8096).Z,le=["items"];function de(e){var t=e.items,a=(0,w.Z)(e,le);return re(W,null,t.map((function(e,t){return re(ie,(0,I.Z)({key:t,item:e,index:t},a))})))}const se=(0,n.memo)(de);var ce=a(6206),ue=a.n(ce),me=a(8096).Z;function be(e){var t=e.path,a=e.sidebar,i=e.className,l=function(){var e=(0,A.nT)().isActive,t=(0,n.useState)(e),a=t[0],o=t[1];return(0,b.RF)((function(t){var a=t.scrollY;e&&o(0===a)}),[e]),e&&a}();return me("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",ue().menu,l&&ue().menuWithAnnouncementBar,i)},me("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},me(se,{items:a,activePath:t,level:1})))}var pe=a(1252),ve=a.n(pe),he=a(8096).Z;function fe(e){var t=e.path,a=e.sidebar,n=e.onCollapse,i=e.isHidden,r=(0,Z.L)(),l=r.navbar.hideOnScroll,d=r.docs.sidebar.hideable;return he("div",{className:(0,o.Z)(ve().sidebar,l&&ve().sidebarWithHideableNavbar,i&&ve().sidebarHidden)},l&&he(S.Z,{tabIndex:-1,className:ve().sidebarLogo}),he(be,{path:t,sidebar:a}),d&&he(L,{onClick:n}))}const ge=n.memo(fe);var ke=a(8531),Ce=a(9819),_e=a(8096).Z,Ze=function(e){var t=e.sidebar,a=e.path,n=(0,Ce.e)();return _e("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},_e(se,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function Se(e){return _e(ke.Zo,{component:Ze,props:e})}const Ie=n.memo(Se);var xe=a(8096).Z,Ne=a(6162).Fragment;function Te(e){var t=(0,_.i)(),a="mobile"===t;return xe(Ne,null,("desktop"===t||"ssr"===t)&&xe(ge,e),a&&xe(Ie,e))}var Be=a(5307),ye=a.n(Be),Le=a(8096).Z;function Ae(e){var t=e.toggleSidebar;return Le("div",{className:ye().expandButton,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},Le(N,{className:ye().expandButtonIcon}))}var we=a(8833),He=a.n(we),Ee=a(8096).Z;function Me(e){var t,a=e.children,o=(0,c.V)();return Ee(n.Fragment,{key:null!=(t=null==o?void 0:o.name)?t:"noSidebar"},a)}function Pe(e){var t=e.sidebar,a=e.hiddenSidebarContainer,i=e.setHiddenSidebarContainer,l=(0,C.TH)().pathname,d=(0,n.useState)(!1),s=d[0],c=d[1],u=(0,n.useCallback)((function(){s&&c(!1),!s&&(0,k.n)()&&c(!0),i((function(e){return!e}))}),[i,s]);return Ee("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,He().docSidebarContainer,a&&He().docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(He().docSidebarContainer)&&a&&c(!0)}},Ee(Me,null,Ee("div",{className:(0,o.Z)(He().sidebarViewport,s&&He().sidebarViewportHidden)},Ee(Te,{sidebar:t,path:l,onCollapse:u,isHidden:s}),s&&Ee(Ae,{toggleSidebar:u}))))}var We=a(8707),Ve=a.n(We),De=a(8096).Z;function Re(e){var t=e.hiddenSidebarContainer,a=e.children,n=(0,c.V)();return De("main",{className:(0,o.Z)(Ve().docMainContainer,(t||!n)&&Ve().docMainContainerEnhanced)},De("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",Ve().docItemWrapper,t&&Ve().docItemWrapperEnhanced)},a))}var Fe=a(4576),ze=a.n(Fe),Ye=a(8096).Z;function Ge(e){var t=e.children,a=(0,c.V)(),o=(0,n.useState)(!1),i=o[0],r=o[1];return Ye(u.Z,{wrapperClassName:ze().docsWrapper},Ye(g,null),Ye("div",{className:ze().docPage},a&&Ye(Pe,{sidebar:a.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:r}),Ye(Re,{hiddenSidebarContainer:i},t)))}var Qe=a(1268),Ue=a(7345),Xe=a(8096).Z,je=a(6162).Fragment;function qe(e){var t=e.versionMetadata;return Xe(je,null,Xe(Ue.Z,{version:t.version,tag:(0,l.os)(t.pluginId,t.version)}),Xe(i.d,null,t.noIndex&&Xe("meta",{name:"robots",content:"noindex, nofollow"})))}function Ke(e){var t=e.versionMetadata,a=(0,d.hI)(e);if(!a)return Xe(Qe.default,null);var n=a.docElement,l=a.sidebarName,u=a.sidebarItems;return Xe(je,null,Xe(qe,e),Xe(i.FG,{className:(0,o.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},Xe(s.q,{version:t},Xe(c.b,{name:l,items:u},Xe(Ge,null,n)))))}},7598:e=>{e.exports={backToTopButton:"backToTopButton_w5hY",backToTopButtonShow:"backToTopButtonShow_wL84"}},8707:e=>{e.exports={docMainContainer:"docMainContainer_VGNz",docMainContainerEnhanced:"docMainContainerEnhanced_YgAb",docItemWrapperEnhanced:"docItemWrapperEnhanced_lBgb"}},5307:e=>{e.exports={expandButton:"expandButton_dklm",expandButtonIcon:"expandButtonIcon_DQSX"}},8833:e=>{e.exports={docSidebarContainer:"docSidebarContainer_egs0",docSidebarContainerHidden:"docSidebarContainerHidden_TVMu",sidebarViewport:"sidebarViewport_eCLu"}},4576:e=>{e.exports={docPage:"docPage_McgY",docsWrapper:"docsWrapper_QSu6","themedComponent--light":"themedComponent--light_rHj1"}},6582:e=>{e.exports={collapseSidebarButton:"collapseSidebarButton_uwIB",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_s_b4"}},6206:e=>{e.exports={menu:"menu_CyVZ",menuWithAnnouncementBar:"menuWithAnnouncementBar_rNss"}},1252:e=>{e.exports={sidebar:"sidebar_evQR",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_lkpv",sidebarHidden:"sidebarHidden_feNy",sidebarLogo:"sidebarLogo_xkpx"}},2094:e=>{e.exports={menuHtmlItem:"menuHtmlItem_G6nz"}},6944:e=>{e.exports={menuExternalLink:"menuExternalLink_XCmM"}}}]);