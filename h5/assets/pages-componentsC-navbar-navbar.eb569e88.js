import{_ as e}from"./u-navbar.2db4c241.js";import{o as a,c as t,w as i,i as s,a as l,j as o,d as r,k as n}from"./index-12078299.js";import{r as u}from"./uni-app.es.c53c76b4.js";import{_}from"./u-icon.e7f5333e.js";import{_ as p}from"./u-line.a5be34b7.js";import{_ as c}from"./u-gap.8c94ead4.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-status-bar.926a8fbf.js";const m=f({data:()=>({}),methods:{navigateBack(){uni.navigateBack({delta:1})},rightClick(){console.log("rightClick")},leftClick(){console.log("leftClick")}}},[["render",function(f,m,d,g,h,k){const x=u(r("up-navbar"),e),C=n,j=s,v=u(r("up-icon"),_),I=u(r("up-line"),p),A=u(r("up-gap"),c);return a(),t(j,{class:"u-page"},{default:i((()=>[l(x,{title:"导航栏",safeAreaInsetTop:"",fixed:"",placeholder:"",autoBack:!0}),l(j,{class:"u-page__item"},{default:i((()=>[l(C,{class:"u-page__item__title"},{default:i((()=>[o("基础功能")])),_:1}),l(x,{title:"个人中心",safeAreaInsetTop:!1,fixed:!1,onRightClick:k.rightClick,onLeftClick:k.leftClick},null,8,["onRightClick","onLeftClick"])])),_:1}),l(j,{class:"u-page__item"},{default:i((()=>[l(C,{class:"u-page__item__title"},{default:i((()=>[o("自定义文本")])),_:1}),l(x,{safeAreaInsetTop:!1,title:"个人中心",fixed:!1,"left-text":"返回",rightIcon:"map"})])),_:1}),l(j,{class:"u-page__item"},{default:i((()=>[l(C,{class:"u-page__item__title"},{default:i((()=>[o("自定义插槽")])),_:1}),l(x,{leftText:"返回",fixed:!1,title:"个人中心",safeAreaInsetTop:!1},{left:i((()=>[l(j,{class:"u-nav-slot"},{default:i((()=>[l(v,{name:"arrow-left",size:"19"}),l(I,{direction:"column",hairline:!1,length:"16",margin:"0 8px"}),l(v,{name:"home",size:"20"})])),_:1})])),_:1})])),_:1}),l(A,{height:"50"})])),_:1})}],["__scopeId","data-v-d1a90002"]]);export{m as default};