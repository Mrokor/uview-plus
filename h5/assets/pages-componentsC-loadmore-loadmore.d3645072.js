import{o,c as l,w as e,i as a,a as s,f as t,g as d,d as u}from"./index-c9cf8d84.js";import{_ as c}from"./u-loadmore.662a4e1f.js";import{r as _}from"./uni-app.es.6a8abedf.js";import{_ as n}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.a45c8667.js";import"./u-loading-icon.91bfb1b1.js";const m=n({data:()=>({}),methods:{loadmore(){console.log("loadmore"),uni.$u.toast("加载更多")}}},[["render",function(n,m,i,r,f,b){const k=d,p=_(u("u-loadmore"),c),g=a;return o(),l(g,{class:"u-page"},{default:e((()=>[s(g,{class:"u-demo-block"},{default:e((()=>[s(k,{class:"u-demo-block__title"},{default:e((()=>[t("基础使用")])),_:1}),s(g,{class:"u-demo-block__content"},{default:e((()=>[s(p,{status:"loading",isDot:!0,iconSize:17})])),_:1})])),_:1}),s(g,{class:"u-demo-block"},{default:e((()=>[s(k,{class:"u-demo-block__title"},{default:e((()=>[t("无更多数据")])),_:1}),s(g,{class:"u-demo-block__content"},{default:e((()=>[s(p,{line:!0,status:"nomore"})])),_:1})])),_:1}),s(g,{class:"u-demo-block"},{default:e((()=>[s(k,{class:"u-demo-block__title"},{default:e((()=>[t("加载更多(点击触发事件)")])),_:1}),s(g,{class:"u-demo-block__content"},{default:e((()=>[s(p,{line:!0,status:"loadmore",onLoadmore:b.loadmore},null,8,["onLoadmore"])])),_:1})])),_:1}),s(g,{class:"u-demo-block"},{default:e((()=>[s(k,{class:"u-demo-block__title"},{default:e((()=>[t("自定义图标")])),_:1}),s(g,{class:"u-demo-block__content"},{default:e((()=>[s(p,{status:"loading",loadingIcon:"circle"})])),_:1})])),_:1}),s(g,{class:"u-demo-block"},{default:e((()=>[s(k,{class:"u-demo-block__title"},{default:e((()=>[t("显示点")])),_:1}),s(g,{class:"u-demo-block__content"},{default:e((()=>[s(p,{status:"nomore",isDot:!0,line:!0,color:"#909399"})])),_:1})])),_:1}),s(g,{class:"u-demo-block"},{default:e((()=>[s(k,{class:"u-demo-block__title"},{default:e((()=>[t("自定义提示语")])),_:1}),s(g,{class:"u-demo-block__content"},{default:e((()=>[s(p,{status:"loading",loadingText:"努力加载中,先喝杯茶",color:"#909399"})])),_:1})])),_:1}),s(g,{class:"u-demo-block"},{default:e((()=>[s(k,{class:"u-demo-block__title"},{default:e((()=>[t("自定义线条颜色")])),_:1}),s(g,{class:"u-demo-block__content"},{default:e((()=>[s(p,{loadmoreText:"看,我和别人不一样",color:"#1CD29B",lineColor:"#1CD29B",dashed:"",line:!0})])),_:1})])),_:1})])),_:1})}]]);export{m as default};