(window.webpackJsonp=window.webpackJsonp||[]).push([[3,21,35,38],{294:function(t,e){t.exports=function(t){return null==t}},296:function(t,e,s){},297:function(t,e,s){},298:function(t,e,s){},304:function(t,e,s){},306:function(t,e,s){},307:function(t,e,s){"use strict";s(296)},308:function(t,e,s){},309:function(t,e,s){"use strict";s(297)},310:function(t,e,s){var a=s(18),i=s(3),n=s(13);t.exports=function(t){return"string"==typeof t||!i(t)&&n(t)&&"[object String]"==a(t)}},311:function(t,e,s){"use strict";s(298)},314:function(t,e,s){},317:function(t,e,s){"use strict";s.r(e);var a=s(294),i=s.n(a);const n=/\/$/,o=/^[a-z]+:/i;var r={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=i()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:s="",docsBranch:a="master",docsRepo:n=e}=this.$site.themeConfig;return t&&n&&this.$page.relativePath?this.createEditLink(e,n,s,a,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,s,a,i){if(/bitbucket.org/.test(e)){return e.replace(n,"")+"/src"+`/${a}/`+(s?s.replace(n,"")+"/":"")+i+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(n,"")+"/-/edit"+`/${a}/`+(s?s.replace(n,"")+"/":"")+i}return(o.test(e)?e:"https://github.com/"+e).replace(n,"")+"/edit"+`/${a}/`+(s?s.replace(n,"")+"/":"")+i}}},l=(s(309),s(6)),c=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[e("bottom-ad"),t._v(" "),t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()],1)}),[],!1,null,null,null);e.default=c.exports},318:function(t,e,s){"use strict";s.r(e);var a=s(287),i=s(310),n=s.n(i),o=s(294),r=s.n(o),l={name:"PageNav",props:["sidebarItems"],computed:{prev(){return u(c.PREV,this)},next(){return u(c.NEXT,this)}}};const c={NEXT:{resolveLink:function(t,e){return h(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return h(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function u(t,{$themeConfig:e,$page:s,$route:i,$site:o,sidebarItems:l}){const{resolveLink:c,getThemeLinkConfig:u,getPageLinkConfig:h}=t,d=u(e),p=h(s),f=r()(p)?d:p;return!1===f?void 0:n()(f)?Object(a.i)(o.pages,f,i.path):c(s,l)}function h(t,e,s){const a=[];!function t(e,s){for(let a=0,i=e.length;a<i;a++)"group"===e[a].type?t(e[a].children||[],s):s.push(e[a])}(e,a);for(let e=0;e<a.length;e++){const i=a[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return a[e+s]}}var d=l,p=(s(311),s(6)),f=Object(p.a)(d,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.default=f.exports},319:function(t,e,s){"use strict";s.r(e);s(307);var a=s(6),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.default=i.exports},321:function(t,e,s){"use strict";s(304)},322:function(t,e,s){"use strict";s(306)},323:function(t,e,s){"use strict";s(308)},325:function(t,e,s){"use strict";s(314)},407:function(t,e,s){"use strict";s.r(e);var a=s(124),i=s.n(a),n=(t,e,s=null)=>{let a=i()(e,"title","");return i()(e,"frontmatter.tags")&&(a+=" "+e.frontmatter.tags.join(" ")),s&&(a+=" "+s),o(t,a)};const o=(t,e)=>{const s=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),a=new RegExp("[^\0-]"),i=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(a.test(t))return i.some(t=>e.toLowerCase().indexOf(t)>-1);{const a=t.endsWith(" ");return new RegExp(i.map((t,e)=>i.length!==e+1||a?`(?=.*\\b${s(t)}\\b)`:`(?=.*\\b${s(t)})`).join("")+".+","gi").test(e)}};var r={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,s=this.$site.themeConfig.searchMaxSuggestions||5,a=this.$localePath,i=[];for(let o=0;o<e.length&&!(i.length>=s);o++){const r=e[o];if(this.getPageLocalePath(r)===a&&this.isSearchable(r))if(n(t,r))i.push(r);else if(r.headers)for(let e=0;e<r.headers.length&&!(i.length>=s);e++){const s=r.headers[e];s.title&&n(t,r,s.title)&&i.push(Object.assign({},r,{path:r.path+"#"+s.slug,header:s}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},l=(s(322),s(6)),c=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(s,a){return e("li",{key:a,staticClass:"suggestion",class:{focused:a===t.focusIndex},on:{mousedown:function(e){return t.go(a)},mouseenter:function(e){return t.focus(a)}}},[e("a",{attrs:{href:s.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(s.title||s.path))]),t._v(" "),s.header?e("span",{staticClass:"header"},[t._v("> "+t._s(s.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports,u=s(319),h=s(303);function d(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var p={components:{SidebarButton:u.default,NavLinks:h.default,SearchBox:c,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=parseInt(d(this.$el,"paddingLeft"))+parseInt(d(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},methods:{noMoreTips(){localStorage.setItem("showV2Tips",!0),location.reload()}}},f=(s(323),Object(l.a)(p,(function(){var t=this,e=t._self._c;return e("div",{class:{"custom-navbar":t.showV2Tips}},[t.showV2Tips?e("div",{staticClass:"jump-link"},[t._v("\n\t\t    免费思维导图、流程图、手绘风格草图、演示文稿、文档、表格在线文档：\n\t\t    "),e("a",{staticClass:"link",attrs:{target:"_blank",href:"https://mind.lingyun.net/"}},[t._v("FinalMind")]),t._v(" "),e("a",{staticClass:"link",staticStyle:{"margin-left":"30px"},attrs:{href:"javascript:;"},on:{click:t.noMoreTips}},[t._v("不再提示")])]):t._e(),t._v(" "),e("header",{staticClass:"navbar",style:{position:t.showV2Tips?"relative":"fixed"}},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v("uview-plus")]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)])}),[],!1,null,null,null));e.default=f.exports},408:function(t,e,s){"use strict";s.r(e);var a={components:{NavLink:s(290).default},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(s(321),s(6)),n=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description||"Welcome to your VuePress site"))]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(s,a){return e("div",{key:a,staticClass:"feature"},[e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v(t._s(t.data.footer))]):t._e()],1)])}),[],!1,null,null,null);e.default=n.exports},409:function(t,e,s){"use strict";s.r(e);var a=s(317),i=s(318),n={components:{PageEdit:a.default,PageNav:i.default},props:["sidebarItems"],data:()=>({})},o=s(6),r=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"page",style:{marginTop:t.showV2Tips?"2.3rem":0}},[t._t("top"),t._v(" "),e("Content",{staticClass:"theme-default-content"}),t._v(" "),e("PageEdit"),t._v(" "),e("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=r.exports},410:function(t,e,s){"use strict";s.r(e);var a=s(315),i=s(303),n={name:"Sidebar",components:{SidebarLinks:a.default,NavLinks:i.default},data:()=>({apiShow:""}),props:["items"],created(){if("undefined"!=typeof window)switch(this.apiShow=localStorage.getItem("apiShow")?localStorage.getItem("apiShow"):"composition",console.log(this.apiShow,"apiShow"),this.apiShow){case"options":document.querySelector("#app").classList.remove("show-composition"),document.querySelector("#app").classList.add("show-options");break;case"composition":default:document.querySelector("#app").classList.remove("show-options"),document.querySelector("#app").classList.add("show-composition")}},methods:{apiChange(t){if("undefined"!=typeof window)switch(localStorage.setItem("apiShow",t),this.apiShow){case"options":document.querySelector("#app").classList.remove("show-composition"),document.querySelector("#app").classList.add("show-options");break;case"composition":default:document.querySelector("#app").classList.remove("show-options"),document.querySelector("#app").classList.add("show-composition")}}}},o=(s(325),s(6)),r=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("aside",{staticClass:"sidebar",style:{marginTop:t.showV2Tips?"2.3rem":0}},[e("a",{staticClass:"jump-linker",attrs:{target:"_blank",href:"https://uiadmin.net?from=uview-plus"}},[e("img",{attrs:{src:t.$withBase("/customer/uiadmin.jpg")}})]),t._v(" "),e("a",{staticClass:"jump-linker",attrs:{target:"_blank",href:"https://ai.uiadmin.net/?from=uview-plus"}},[e("img",{attrs:{src:t.$withBase("/customer/ai.png")}})]),t._v(" "),e("div",{staticStyle:{"background-color":"#f9f9f9",padding:"15px 10px","margin-top":"15px",width:"170px","border-radius":"6px"}},[e("el-switch",{attrs:{"active-value":"composition","inactive-value":"options","active-text":"组合式","inactive-text":"选项式"},on:{change:t.apiChange},model:{value:t.apiShow,callback:function(e){t.apiShow=e},expression:"apiShow"}})],1),t._v(" "),e("NavLinks"),t._v(" "),t._t("top"),t._v(" "),e("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom")],2)])}),[],!1,null,null,null);e.default=r.exports},508:function(t,e,s){"use strict";s.r(e);var a=s(408),i=s(407),n=s(409),o=s(410),r=s(287),l={name:"Layout",components:{Home:a.default,Page:n.default,Sidebar:o.default,Navbar:i.default},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(r.j)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=s(6),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=u.exports}}]);