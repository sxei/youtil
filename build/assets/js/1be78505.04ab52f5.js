(self.webpackChunkyoutil=self.webpackChunkyoutil||[]).push([[714,449],{7686:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ze});var a=n(9002),o=n(8836),i=n(2915),r=n(1659),l=n(6619),d=n(6732),s=n(808),c=n(9272),u=n(7463),m=n(983),b=n(5828),p=n(4378);var v=n(4968),h=n.n(v),f=n(8397).A;function A(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),o=n[0],i=n[1],r=(0,a.useRef)(!1),l=(0,b.gk)(),d=l.startScroll,s=l.cancelScroll;return(0,b.Mq)((function(e,n){var a=e.scrollY,o=null==n?void 0:n.scrollY;o&&(r.current?r.current=!1:a>=o?(s(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,p.$)((function(e){e.location.hash&&(r.current=!0,i(!1))})),{shown:o,scrollToTop:function(){return d(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return f("button",{"aria-label":(0,m.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",r.G.common.backToTopButton,h().backToTopButton,t&&h().backToTopButtonShow),type:"button",onClick:n})}var g=n(6673),C=n(3427),_=n(993),k=n(6610),S=n(1934),x=n(2581),N=n(8397).A;function T(e){return N("svg",(0,x.A)({width:"20",height:"20","aria-hidden":"true"},e),N("g",{fill:"#7a7a7a"},N("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),N("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var I=n(7e3),y=n.n(I),w=n(8397).A;function B(e){var t=e.onClick;return w("button",{type:"button",title:(0,m.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",y().collapseSidebarButton),onClick:t},w(T,{className:y().collapseSidebarButtonIcon}))}var L=n(1213),M=n(8292),H=n(8037),E=n(8397).A,P=Symbol("EmptyContext"),G=a.createContext(P);function W(e){var t=e.children,n=(0,a.useState)(null),o=n[0],i=n[1],r=(0,a.useMemo)((function(){return{expandedItem:o,setExpandedItem:i}}),[o]);return E(G.Provider,{value:r},t)}var V=n(7666),F=n(6653),D=n(780),R=n(1277),z=n(8397).A,Y=["item","onItemClick","activePath","level","index"];function U(e){var t=e.categoryLabel,n=e.onClick;return z("button",{"aria-label":(0,m.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function Q(e){var t=e.item,n=e.onItemClick,i=e.activePath,l=e.level,s=e.index,c=(0,M.A)(e,Y),u=t.items,m=t.label,b=t.collapsible,p=t.className,v=t.href,h=(0,k.p)().docs.sidebar.autoCollapseCategories,f=function(e){var t=(0,R.A)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,d._o)(e):void 0}),[e,t])}(t),A=(0,d.w8)(t,i),g=(0,F.ys)(v,i),C=(0,V.u)({initialState:function(){return!!b&&(!A&&t.collapsed)}}),_=C.collapsed,S=C.setCollapsed,N=function(){var e=(0,a.useContext)(G);if(e===P)throw new H.dV("DocSidebarItemsExpandedStateProvider");return e}(),T=N.expandedItem,I=N.setExpandedItem,y=function(e){void 0===e&&(e=!_),I(e?null:s),S(e)};return function(e){var t=e.isActive,n=e.collapsed,o=e.updateCollapsed,i=(0,H.ZC)(t);(0,a.useEffect)((function(){t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:A,collapsed:_,updateCollapsed:y}),(0,a.useEffect)((function(){b&&null!=T&&T!==s&&h&&S(!0)}),[b,T,s,S,h]),z("li",{className:(0,o.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":_},p)},z("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},z(D.A,(0,x.A)({className:(0,o.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":A}),onClick:b?function(e){null==n||n(t),v?y(!1):(e.preventDefault(),y())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!_:void 0,href:b?null!=f?f:"#":f},c),m),v&&b&&z(U,{categoryLabel:m,onClick:function(e){e.preventDefault(),y()}})),z(V.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},z(se,{items:u,tabIndex:_?-1:0,onItemClick:n,activePath:i,level:l+1})))}var X=n(6868),j=n(8694),q=n(3409),O=n.n(q),Z=n(8397).A,K=["item","onItemClick","activePath","level","index"];function $(e){var t=e.item,n=e.onItemClick,a=e.activePath,i=e.level,l=(e.index,(0,M.A)(e,K)),s=t.href,c=t.label,u=t.className,m=t.autoAddBaseUrl,b=(0,d.w8)(t,a),p=(0,X.A)(s);return Z("li",{className:(0,o.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:c},Z(D.A,(0,x.A)({className:(0,o.A)("menu__link",!p&&O().menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:m,"aria-current":b?"page":void 0,to:s},p&&{onClick:n?function(){return n(t)}:void 0},l),c,!p&&Z(j.A,null)))}var J=n(1514),ee=n.n(J),te=n(8397).A;function ne(e){var t=e.item,n=e.level,a=e.index,i=t.value,l=t.defaultStyle,d=t.className;return te("li",{className:(0,o.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(n),l&&[ee().menuHtmlItem,"menu__list-item"],d),key:a,dangerouslySetInnerHTML:{__html:i}})}var ae=n(8397).A,oe=["item"];function ie(e){var t=e.item,n=(0,M.A)(e,oe);switch(t.type){case"category":return ae(Q,(0,x.A)({item:t},n));case"html":return ae(ne,(0,x.A)({item:t},n));default:return ae($,(0,x.A)({item:t},n))}}var re=n(8397).A,le=["items"];function de(e){var t=e.items,n=(0,M.A)(e,le);return re(W,null,t.map((function(e,t){return re(ie,(0,x.A)({key:t,item:e,index:t},n))})))}const se=(0,a.memo)(de);var ce=n(3556),ue=n.n(ce),me=n(8397).A;function be(e){var t=e.path,n=e.sidebar,i=e.className,l=function(){var e=(0,L.Mj)().isActive,t=(0,a.useState)(e),n=t[0],o=t[1];return(0,b.Mq)((function(t){var n=t.scrollY;e&&o(0===n)}),[e]),e&&n}();return me("nav",{"aria-label":(0,m.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",ue().menu,l&&ue().menuWithAnnouncementBar,i)},me("ul",{className:(0,o.A)(r.G.docs.docSidebarMenu,"menu__list")},me(se,{items:n,activePath:t,level:1})))}var pe=n(8786),ve=n.n(pe),he=n(8397).A;function fe(e){var t=e.path,n=e.sidebar,a=e.onCollapse,i=e.isHidden,r=(0,k.p)(),l=r.navbar.hideOnScroll,d=r.docs.sidebar.hideable;return he("div",{className:(0,o.A)(ve().sidebar,l&&ve().sidebarWithHideableNavbar,i&&ve().sidebarHidden)},l&&he(S.A,{tabIndex:-1,className:ve().sidebarLogo}),he(be,{path:t,sidebar:n}),d&&he(B,{onClick:a}))}const Ae=a.memo(fe);var ge=n(5300),Ce=n(9578),_e=n(8397).A,ke=function(e){var t=e.sidebar,n=e.path,a=(0,Ce.M)();return _e("ul",{className:(0,o.A)(r.G.docs.docSidebarMenu,"menu__list")},_e(se,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};function Se(e){return _e(ge.GX,{component:ke,props:e})}const xe=a.memo(Se);var Ne=n(8397).A,Te=n(9002).Fragment;function Ie(e){var t=(0,_.l)(),n="mobile"===t;return Ne(Te,null,("desktop"===t||"ssr"===t)&&Ne(Ae,e),n&&Ne(xe,e))}var ye=n(3699),we=n.n(ye),Be=n(8397).A;function Le(e){var t=e.toggleSidebar;return Be("div",{className:we().expandButton,title:(0,m.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},Be(T,{className:we().expandButtonIcon}))}var Me=n(9160),He=n.n(Me),Ee=n(8397).A;function Pe(e){var t,n=e.children,o=(0,c.t)();return Ee(a.Fragment,{key:null!=(t=null==o?void 0:o.name)?t:"noSidebar"},n)}function Ge(e){var t=e.sidebar,n=e.hiddenSidebarContainer,i=e.setHiddenSidebarContainer,l=(0,C.zy)().pathname,d=(0,a.useState)(!1),s=d[0],c=d[1],u=(0,a.useCallback)((function(){s&&c(!1),!s&&(0,g.O)()&&c(!0),i((function(e){return!e}))}),[i,s]);return Ee("aside",{className:(0,o.A)(r.G.docs.docSidebarContainer,He().docSidebarContainer,n&&He().docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(He().docSidebarContainer)&&n&&c(!0)}},Ee(Pe,null,Ee("div",{className:(0,o.A)(He().sidebarViewport,s&&He().sidebarViewportHidden)},Ee(Ie,{sidebar:t,path:l,onCollapse:u,isHidden:s}),s&&Ee(Le,{toggleSidebar:u}))))}var We=n(8507),Ve=n.n(We),Fe=n(8397).A;function De(e){var t=e.hiddenSidebarContainer,n=e.children,a=(0,c.t)();return Fe("main",{className:(0,o.A)(Ve().docMainContainer,(t||!a)&&Ve().docMainContainerEnhanced)},Fe("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",Ve().docItemWrapper,t&&Ve().docItemWrapperEnhanced)},n))}var Re=n(4417),ze=n.n(Re),Ye=n(8397).A;function Ue(e){var t=e.children,n=(0,c.t)(),o=(0,a.useState)(!1),i=o[0],r=o[1];return Ye(u.A,{wrapperClassName:ze().docsWrapper},Ye(A,null),Ye("div",{className:ze().docPage},n&&Ye(Ge,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:r}),Ye(De,{hiddenSidebarContainer:i},t)))}var Qe=n(3449),Xe=n(8132),je=n(8397).A,qe=n(9002).Fragment;function Oe(e){var t=e.versionMetadata;return je(qe,null,je(Xe.A,{version:t.version,tag:(0,l.tU)(t.pluginId,t.version)}),je(i.be,null,t.noIndex&&je("meta",{name:"robots",content:"noindex, nofollow"})))}function Ze(e){var t=e.versionMetadata,n=(0,d.mz)(e);if(!n)return je(Qe.default,null);var a=n.docElement,l=n.sidebarName,u=n.sidebarItems;return je(qe,null,je(Oe,e),je(i.e3,{className:(0,o.A)(r.G.wrapper.docsPages,r.G.page.docsDocPage,e.versionMetadata.className)},je(s.n,{version:t},je(c.V,{name:l,items:u},je(Ue,null,a)))))}},3449:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});n(9002);var a=n(983),o=n(2915),i=n(7463),r=n(8397).A,l=n(9002).Fragment;function d(){return r(l,null,r(o.be,{title:(0,a.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),r(i.A,null,r("main",{className:"container margin-vert--xl"},r("div",{className:"row"},r("div",{className:"col col--6 col--offset-3"},r("h1",{className:"hero__title"},r(a.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r("p",null,r(a.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r("p",null,r(a.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},808:(e,t,n)=>{"use strict";n.d(t,{n:()=>l,r:()=>d});var a=n(9002),o=n(8037),i=n(8397).A,r=a.createContext(null);function l(e){var t=e.children,n=e.version;return i(r.Provider,{value:n},t)}function d(){var e=(0,a.useContext)(r);if(null===e)throw new o.dV("DocsVersionProvider");return e}},4968:e=>{e.exports={backToTopButton:"backToTopButton_w5hY",backToTopButtonShow:"backToTopButtonShow_wL84"}},8507:e=>{e.exports={docMainContainer:"docMainContainer_VGNz",docMainContainerEnhanced:"docMainContainerEnhanced_YgAb",docItemWrapperEnhanced:"docItemWrapperEnhanced_lBgb"}},3699:e=>{e.exports={expandButton:"expandButton_dklm",expandButtonIcon:"expandButtonIcon_DQSX"}},9160:e=>{e.exports={docSidebarContainer:"docSidebarContainer_egs0",docSidebarContainerHidden:"docSidebarContainerHidden_TVMu",sidebarViewport:"sidebarViewport_eCLu"}},4417:e=>{e.exports={docPage:"docPage_McgY",docsWrapper:"docsWrapper_QSu6","themedComponent--light":"themedComponent--light_rHj1"}},7e3:e=>{e.exports={collapseSidebarButton:"collapseSidebarButton_uwIB",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_s_b4"}},3556:e=>{e.exports={menu:"menu_CyVZ",menuWithAnnouncementBar:"menuWithAnnouncementBar_rNss"}},8786:e=>{e.exports={sidebar:"sidebar_evQR",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_lkpv",sidebarHidden:"sidebarHidden_feNy",sidebarLogo:"sidebarLogo_xkpx"}},1514:e=>{e.exports={menuHtmlItem:"menuHtmlItem_G6nz"}},3409:e=>{e.exports={menuExternalLink:"menuExternalLink_XCmM"}}}]);