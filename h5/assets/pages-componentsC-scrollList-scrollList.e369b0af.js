import{m as t,j as l,o as i,c as o,w as s,f as e,a as r,l as n,n as a,i as c,C as d,g as u,b as _,r as p,F as m,h,d as g,p as f,t as w,e as b}from"./index-c8e61bae.js";import{_ as y}from"./u-icon.e9837ae6.js";import{r as W}from"./uni-app.es.e0630e5f.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";const v={props:{indicatorWidth:{type:[String,Number],default:()=>uni.$u.props.scrollList.indicatorWidth},indicatorBarWidth:{type:[String,Number],default:()=>uni.$u.props.scrollList.indicatorBarWidth},indicator:{type:Boolean,default:()=>uni.$u.props.scrollList.indicator},indicatorColor:{type:String,default:()=>uni.$u.props.scrollList.indicatorColor},indicatorActiveColor:{type:String,default:()=>uni.$u.props.scrollList.indicatorActiveColor},indicatorStyle:{type:[String,Object],default:()=>uni.$u.props.scrollList.indicatorStyle}}};function S(t,l){t.selectComponent(".u-scroll-list__indicator__line__bar")&&t.selectComponent(".u-scroll-list__indicator__line__bar").setStyle({transform:"translateX("+l+"px)"})}const $={scroll:function(t,l){var i=t.detail,o=i.scrollWidth,s=i.scrollLeft,e=t.currentTarget.dataset;S(l,s/(o-(e.scrollWidth||e.scrollwidth||0))*((e.indicatorWidth||e.indicatorwidth||0)-(e.barWidth||e.barwidth||0)))},scrolltolower:function(t,l){l.callMethod("scrollEvent","right");var i=t.currentTarget.dataset;S(l,(i.indicatorWidth||i.indicatorwidth||0)-(i.barWidth||i.barwidth||0))},scrolltoupper:function(t,l){l.callMethod("scrollEvent","left"),S(l,0)}},C=t=>{t.$wxs||(t.$wxs=[]),t.$wxs.push("wxs"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.wxs=$}})},j={name:"u-scroll-list",mixins:[t,l,v],data:()=>({scrollInfo:{scrollLeft:0,scrollWidth:0},scrollWidth:0}),computed:{barStyle(){const t={};return t.width=uni.$u.addUnit(this.indicatorBarWidth),t.backgroundColor=this.indicatorActiveColor,t},lineStyle(){const t={};return t.width=uni.$u.addUnit(this.indicatorWidth),t.backgroundColor=this.indicatorColor,t}},mounted(){this.init()},emits:["left","right"],methods:{init(){this.getComponentWidth()},scrollEvent(t){this.$emit(t)},async getComponentWidth(){await uni.$u.sleep(30),this.$uGetRect(".u-scroll-list").then((t=>{this.scrollWidth=t.width}))}}};C(j);const k=x(j,[["render",function(t,l,u,_,p,m){const h=c,g=d;return i(),o(h,{class:"u-scroll-list",ref:"u-scroll-list"},{default:s((()=>[e(" 以上平台，支持wxs "),r(g,{class:"u-scroll-list__scroll-view","scroll-x":"",onScroll:t.wxs.scroll,onScrolltoupper:t.wxs.scrolltoupper,onScrolltolower:t.wxs.scrolltolower,"data-scrollWidth":p.scrollWidth,"data-barWidth":t.$u.getPx(t.indicatorBarWidth),"data-indicatorWidth":t.$u.getPx(t.indicatorWidth),"show-scrollbar":!1,"upper-threshold":0,"lower-threshold":0},{default:s((()=>[r(h,{class:"u-scroll-list__scroll-view__content"},{default:s((()=>[n(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["onScroll","onScrolltoupper","onScrolltolower","data-scrollWidth","data-barWidth","data-indicatorWidth"]),t.indicator?(i(),o(h,{key:0,class:"u-scroll-list__indicator",style:a([t.$u.addStyle(t.indicatorStyle)])},{default:s((()=>[r(h,{class:"u-scroll-list__indicator__line",style:a([m.lineStyle])},{default:s((()=>[r(h,{class:"u-scroll-list__indicator__line__bar",style:a([m.barStyle]),ref:"u-scroll-list__indicator__line__bar"},null,8,["style"])])),_:1},8,["style"])])),_:1},8,["style"])):e("v-if",!0)])),_:3},512)}],["__scopeId","data-v-b7975acd"]]);const L=x({data:()=>({goodsBaseUrl:"https://cdn.uviewui.com/uview/goods/",menuBaseUrl:"https://cdn.uviewui.com/uview/menu/",goodsArr:[{price:"230.5",thumbnail:"1.jpg"},{price:"74.1",thumbnail:"2.jpg"},{price:"8457",thumbnail:"6.jpg"},{price:"1442",thumbnail:"5.jpg"},{price:"541",thumbnail:"2.jpg"},{price:"234",thumbnail:"3.jpg"},{price:"562",thumbnail:"4.jpg"},{price:"251.5",thumbnail:"1.jpg"}],menuArr:[[{name:"天猫新品",icon:"11.png"},{name:"今日爆款",icon:"9.png"},{name:"天猫国际",icon:"17.png"},{name:"饿了么",icon:"6.png"},{name:"天猫超市",icon:"11.png"},{name:"分类",icon:"2.png"},{name:"天猫美食",icon:"3.png"},{name:"阿里健康",icon:"12.png"},{name:"口碑生活",icon:"7.png"}],[{name:"充值中心",icon:"8.png"},{name:"机票酒店",icon:"10.png"},{name:"金币庄园",icon:"18.png"},{name:"阿里拍卖",icon:"15.png"},{name:"淘宝吃货",icon:"16.png"},{name:"闲鱼",icon:"4.png"},{name:"会员中心",icon:"6.png"},{name:"造点新货",icon:"13.png"},{name:"土货鲜食",icon:"14.png"}]]}),methods:{showMore(){uni.$u.toast("查看更多")},left(){console.log("left")},right(){console.log("right")}}},[["render",function(t,l,e,n,a,d){const x=h,v=b,S=c,$=W(g("u-icon"),y),C=W(g("u-scroll-list"),k);return i(),o(S,{class:"u-page"},{default:s((()=>[r(S,{class:"u-demo-block"},{default:s((()=>[r(x,{class:"u-demo-block__title",style:{"margin-bottom":"15px"}},{default:s((()=>[u("基础使用")])),_:1}),r(C,{indicatorColor:"#fff0f0",indicatorActiveColor:"#f56c6c",onRight:d.right,onLeft:d.left},{default:s((()=>[r(S,{class:"scroll-list",style:{"flex-direction":"row"}},{default:s((()=>[(i(!0),_(m,null,p(a.goodsArr,((t,l)=>(i(),o(S,{class:f(["scroll-list__goods-item",[9===l&&"scroll-list__goods-item--no-margin-right"]]),key:l},{default:s((()=>[r(v,{class:"scroll-list__goods-item__image",src:a.goodsBaseUrl+t.thumbnail,mode:""},null,8,["src"]),r(x,{class:"scroll-list__goods-item__text"},{default:s((()=>[u("￥"+w(t.price),1)])),_:2},1024)])),_:2},1032,["class"])))),128)),r(S,{class:"scroll-list__show-more",onClick:d.showMore},{default:s((()=>[r(x,{class:"scroll-list__show-more__text"},{default:s((()=>[u("查看更多")])),_:1}),r($,{name:"arrow-leftward",color:"#f56c6c",size:"12"})])),_:1},8,["onClick"])])),_:1})])),_:1},8,["onRight","onLeft"])])),_:1}),r(S,{class:"u-demo-block"},{default:s((()=>[r(x,{class:"u-demo-block__title"},{default:s((()=>[u("多菜单扩展")])),_:1}),r(C,null,{default:s((()=>[r(S,{class:"scroll-list"},{default:s((()=>[(i(!0),_(m,null,p(a.menuArr,((t,l)=>(i(),o(S,{class:"scroll-list__line",key:l},{default:s((()=>[(i(!0),_(m,null,p(t,((l,e)=>(i(),o(S,{class:f(["scroll-list__line__item",[e===t.length-1&&"scroll-list__line__item--no-margin-right"]]),key:e},{default:s((()=>[r(v,{class:"scroll-list__line__item__image",src:a.menuBaseUrl+l.icon,mode:""},null,8,["src"]),r(x,{class:"scroll-list__line__item__text"},{default:s((()=>[u(w(l.name),1)])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-48e69261"]]);export{L as default};
