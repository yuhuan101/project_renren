webpackJsonp([4,19,37,50],{"6f/g":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("8HvM"),r=n("jqh9"),o=n("sPSN"),l=n("gyMJ"),u=n("NYxO"),c={data:function(){return{loading:!0}},components:{Topbar:i.default,Sidebar:r.default,ContentTabs:o.default},computed:{siteWarpperClasses:function(){return[{"site-sidebar--collapse":this.$store.state.sidebarCollapse}]},siteContentWarpperStyles:function(){return[{minHeight:this.$store.state.documentClientHeight+"px"}]},routeIsTab:function(){return this.$route.meta&&this.$route.meta.isTab}},created:function(){this.getUserInfo()},mounted:function(){var e=this;this.resetDocumentClientHeight(),window.onresize=function(){e.resetDocumentClientHeight()}},methods:s()({resetDocumentClientHeight:function(){this.UPDATE_DOCUMENT_CLIENT_HEIGHT({height:document.documentElement.clientHeight})},getUserInfo:function(){var e=this;l.a.user.info().then(function(t){var n=t.data;n&&0===n.code&&(e.loading=!1,e.DELETE_CONTENT_TABS([]),e.UPDATE_USER_ID({id:n.user.userId}),e.UPDATE_USER_NAME({name:n.user.username}))})}},Object(u.c)(["UPDATE_DOCUMENT_CLIENT_HEIGHT","UPDATE_USER_ID","UPDATE_USER_NAME","DELETE_CONTENT_TABS"]))},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"site-wrapper",class:e.siteWarpperClasses,attrs:{"element-loading-text":"拼命加载中"}},[e.loading?e._e():[n("topbar"),e._v(" "),n("sidebar"),e._v(" "),n("div",{staticClass:"site-content__wrapper",style:e.siteContentWarpperStyles},[n("div",{staticClass:"site-content",class:{"site-content--tabs":e.routeIsTab}},[e.routeIsTab?n("content-tabs"):n("keep-alive",[n("router-view")],1)],1)])]],2)},staticRenderFns:[]},m=n("VU/8")(c,d,!1,null,null,null);t.default=m.exports},"8HvM":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("OHGg"),r=n("gyMJ"),o=n("NYxO"),l={data:function(){return{updatePassowrdVisible:!1}},components:{UpdatePassword:i.default},methods:s()({switchSidebarCollapseHandle:function(){this.SWITCH_SIDEBAR_COLLAPSE({collapse:!this.$store.state.sidebarCollapse})},updatePasswordHandle:function(){var e=this;this.updatePassowrdVisible=!0,this.$nextTick(function(){e.$refs.updatePassowrd.init()})},logoutHandle:function(){var e=this;this.$confirm("确定进行[退出]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.a.common.logout().then(function(t){var n=t.data;n&&0===n.code&&(e.DELETE_CONTENT_TABS([]),e.$cookie.delete("token"),e.$router.replace({name:"login"}))})})}},Object(o.c)(["SWITCH_SIDEBAR_COLLAPSE","DELETE_CONTENT_TABS"]))},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"site-topbar"},[a("div",{staticClass:"site-topbar__header"},[a("h1",{staticClass:"site-logo",on:{click:function(t){e.$router.push({name:"home"})}}},[a("a",{staticClass:"site-logo__lg",attrs:{href:"javascript:;"}},[e._v("直播管理平台")]),e._v(" "),a("a",{staticClass:"site-logo__mini",attrs:{href:"javascript:;"}},[e._v("人人")])])]),e._v(" "),a("div",{staticClass:"site-topbar__body clearfix"},[a("el-menu",{staticClass:"site-topbar__menu",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"site-topbar__switch",attrs:{index:"1-1"},on:{click:function(t){e.switchSidebarCollapseHandle()}}},[a("icon-svg",{attrs:{name:"zhedie"}})],1)],1),e._v(" "),a("el-menu",{staticClass:"site-topbar__menu site-topbar__menu--right",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"site-topbar__avatar",attrs:{index:"1-2"}},[a("el-dropdown",{attrs:{placement:"bottom","hide-on-click":!1}},[a("span",{staticClass:"el-dropdown-link"},[a("img",{attrs:{src:n("zQrT"),alt:e.$store.state.user.name}}),e._v("\n            "+e._s(e.$store.state.user.name)+"\n          ")]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){e.updatePasswordHandle()}}},[e._v("修改密码")]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(t){e.logoutHandle()}}},[e._v("退出")])],1)],1)],1)],1)],1),e._v(" "),e.updatePassowrdVisible?a("update-password",{ref:"updatePassowrd"}):e._e()],1)},staticRenderFns:[]},c=n("VU/8")(l,u,!1,null,null,null);t.default=c.exports},jqh9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("mvHQ"),s=n.n(a),i=n("Dd8w"),r=n.n(i),o=n("0xDb"),l={name:"sub-menu-nav",props:{menuNav:{}},components:{SubMenuNav:c},data:function(){return{}},watch:{},methods:{gotoRouteHandle:function(e){var t=Object(o.b)(e);/\S/.test(t)&&this.$router.push({name:t})}},mounted:function(){}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-box"},e._l(e.menuNav,function(t,a){return e.menuNav.length?n("el-submenu",{key:t.menuId,attrs:{index:t.menuId+""}},[n("template",{attrs:{slot:"title"},slot:"title"},[n("i",{class:["site-sidebar__menu-icon",t.icon?t.icon:"fa fa-circle-o"]}),e._v(" "),n("span",[e._v(e._s(t.name))])]),e._v(" "),e._l(t.list,function(t){return 0==t.type?n("el-submenu",{key:t.menuId,attrs:{index:t.menuId+""}},[n("template",{attrs:{slot:"title"},slot:"title"},[n("i",{class:["site-sidebar__menu-icon",t.icon?t.icon:"fa fa-circle-o"]}),e._v(" "),n("span",[e._v(e._s(t.name))])]),e._v(" "),e._l(t.list,function(a){return t.list.length?n("el-menu-item",{key:a.menuId,attrs:{index:a.menuId+""},on:{click:function(t){e.gotoRouteHandle(a.url)}}},[n("template",{attrs:{slot:"title"},slot:"title"},[n("i",{class:["site-sidebar__menu-icon",a.icon?a.icon:"fa fa-circle-o"]}),e._v(" "),n("span",[e._v(e._s(a.name))])])],2):e._e()})],2):e._e()}),e._v(" "),e._l(t.list,function(t){return 1==t.type?n("el-menu-item",{key:t.menuId,attrs:{index:t.menuId+""},on:{click:function(n){e.gotoRouteHandle(t.url)}}},[n("template",{attrs:{slot:"title"},slot:"title"},[n("i",{class:["site-sidebar__menu-icon",t.icon?t.icon:"fa fa-circle-o"]}),e._v(" "),n("span",[e._v(e._s(t.name))])])],2):e._e()})],2):e._e()}))},staticRenderFns:[]},c=n("VU/8")(l,u,!1,null,null,null).exports,d=n("gyMJ"),m=n("NYxO"),_=n("lHK6"),f=n.n(_),v={data:function(){return{menuNavActive:"1-1"}},components:{SubMenuNav:c},watch:{$route:"routeHandle"},created:function(){var e=this;this.getMenuNavList().then(function(){e.routeHandle(e.$route)})},methods:r()({getMenuNavList:function(){var e=this;return d.a.menu.nav().then(function(t){var n=t.data;n&&0===n.code?(e.UPDATE_MENU_NAV_LIST(n.menuList),sessionStorage.setItem("permissions",s()(n.permissions||"[]"))):(e.UPDATE_MENU_NAV_LIST([]),sessionStorage.setItem("permissions","[]"))})},routeHandle:function(e){if(e.meta&&e.meta.isTab){var t=this.$store.state.contentTabs.filter(function(t){return t.name===e.name})[0];if(f()(t)){var n=this.getMenuNavByRouteName(e.name,this.$store.state.menuNavList);if(f()(n))return console.error("未能找到可用tab标签页！");t={id:n.menuId,name:e.name,title:n.name,type:-1!==(window.SITE_CONFIG.nestIframeRouteNameList||[]).indexOf(e.name)?"iframe":"module",url:n.url},this.ADD_CONTENT_TAB(t)}this.menuNavActive=t.id+"",this.UPDATE_CONTENT_TABS_ACTIVE_NAME({name:e.name})}},getMenuNavByRouteName:function(e,t){for(var n=[],a=0;a<t.length;a++)if(t[a].list&&t[a].list.length>=1)n=n.concat(t[a].list);else if(Object(o.b)(t[a].url)===e)return t[a];return n.length>=1?this.getMenuNavByRouteName(e,n):[]}},Object(m.c)(["UPDATE_MENU_NAV_LIST","ADD_CONTENT_TAB","UPDATE_CONTENT_TABS_ACTIVE_NAME"]))},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"site-sidebar"},[n("div",{staticClass:"site-sidebar__inner"},[n("el-menu",{staticClass:"site-sidebar__menu",attrs:{"default-active":e.menuNavActive,collapse:e.$store.state.sidebarCollapse,collapseTransition:!1,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(t){e.$router.push({name:"home"})}}},[n("i",{staticClass:"site-sidebar__menu-icon fa fa-home"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),e._v(" "),n("sub-menu-nav",{attrs:{menuNav:e.$store.state.menuNavList}})],1)],1)])},staticRenderFns:[]},h=n("VU/8")(v,p,!1,null,null,null);t.default=h.exports},sPSN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("lHK6"),r=n.n(i),o=n("NYxO"),l={data:function(){return{}},computed:{tabActiveName:{get:function(){return this.$store.state.contentTabsActiveName},set:function(e){this.UPDATE_CONTENT_TABS_ACTIVE_NAME({name:e})}}},methods:s()({contentViewHeight:function(e){var t=this.$store.state.documentClientHeight;return t-=50,t-=40,t-=15,t-=15,t-=2,t+="px","iframe"===e.type?{height:t}:{minHeight:t}},getNestIframeUrl:function(e){return window.SITE_CONFIG.nestIframeUrl+e},selectedTabHandle:function(e){e=this.$store.state.contentTabs.filter(function(t){return t.name===e.name}),r()(e)||this.$router.push({name:e[0].name})},removeTabHandle:function(e){var t=this,n=this.$store.state.contentTabs.filter(function(t){return t.name!==e});e===this.tabActiveName&&this.$router.push({name:n[n.length-1].name},function(){t.tabActiveName=t.$route.name}),this.UPDATE_CONTENT_TABS(n)}},Object(o.c)(["UPDATE_CONTENT_TABS","UPDATE_CONTENT_TABS_ACTIVE_NAME"]))},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-tabs",{attrs:{closable:e.$store.state.contentTabs.length>1},on:{"tab-click":e.selectedTabHandle,"tab-remove":e.removeTabHandle},model:{value:e.tabActiveName,callback:function(t){e.tabActiveName=t},expression:"tabActiveName"}},e._l(e.$store.state.contentTabs,function(t){return n("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[n("el-card",{attrs:{"body-style":e.contentViewHeight(t)}},["iframe"===t.type?n("iframe",{attrs:{src:e.getNestIframeUrl(t.url),width:"100%",height:"100%",frameborder:"0",scrolling:"yes"}}):n("keep-alive",[t.name===e.tabActiveName?n("router-view"):e._e()],1)],1)],1)}))},staticRenderFns:[]},c=n("VU/8")(l,u,!1,null,null,null);t.default=c.exports},zQrT:function(e,t,n){e.exports=n.p+"static/img/avatar.c58e465.png"}});