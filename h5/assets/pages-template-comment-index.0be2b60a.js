import{o as e,c as t,w as l,i,b as a,r as s,F as n,d as m,a as o,f as u,t as c,p,l as r,e as d}from"./index-9e9f17ba.js";import{_ as k}from"./u-icon.09133ca0.js";import{r as L}from"./uni-app.es.bdc9cb81.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";const _=f({data:()=>({commentList:[]}),onLoad(){this.getComment()},methods:{toAllReply(){uni.navigateTo({url:"/pages/template/comment/reply"})},getLike(e){this.commentList[e].isLike=!this.commentList[e].isLike,1==this.commentList[e].isLike?this.commentList[e].likeNum++:this.commentList[e].likeNum--},getComment(){this.commentList=[{id:1,name:"叶轻眉",date:"12-25 18:58",contentText:"我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",url:"https://cdn.uviewui.com/uview/template/SmilingDog.jpg",allReply:12,likeNum:33,isLike:!1,replyList:[{name:"uview",contentStr:"uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！"},{name:"粘粘",contentStr:"今天吃什么，明天吃什么，晚上吃什么，我只是一只小猫咪为什么要烦恼这么多"}]},{id:2,name:"叶轻眉1",date:"01-25 13:58",contentText:"我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",allReply:0,likeNum:11,isLike:!1,url:"https://cdn.uviewui.com/uview/template/niannian.jpg"},{id:3,name:"叶轻眉2",date:"03-25 13:58",contentText:"我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",allReply:0,likeNum:21,isLike:!1,allReply:2,url:"../../../static/logo.png",replyList:[{name:"uview",contentStr:"uview是基于uniapp的一个UI框架，代码优美简洁，宇宙超级无敌彩虹旋转好用，用它！"},{name:"豆包",contentStr:"想吃冰糖葫芦粘豆包，但没钱5555........."}]},{id:4,name:"叶轻眉3",date:"06-20 13:58",contentText:"我不信伊朗会没有后续反应，美国肯定会为今天的事情付出代价的",url:"https://cdn.uviewui.com/uview/template/SmilingDog.jpg",allReply:0,likeNum:150,isLike:!1}]}}},[["render",function(f,_,g,y,h,v){const w=d,x=i,C=L(m("u-icon"),k);return e(),t(x,null,{default:l((()=>[(e(!0),a(n,null,s(h.commentList,((i,m)=>(e(),t(x,{class:"comment",key:i.id},{default:l((()=>[o(x,{class:"left"},{default:l((()=>[o(w,{src:i.url,mode:"aspectFill"},null,8,["src"])])),_:2},1024),o(x,{class:"right"},{default:l((()=>[o(x,{class:"top"},{default:l((()=>[o(x,{class:"name"},{default:l((()=>[u(c(i.name),1)])),_:2},1024),o(x,{class:p(["like",{highlight:i.isLike}])},{default:l((()=>[o(x,{class:"num"},{default:l((()=>[u(c(i.likeNum),1)])),_:2},1024),i.isLike?r("",!0):(e(),t(C,{key:0,name:"thumb-up",size:30,color:"#9a9a9a",onClick:e=>v.getLike(m)},null,8,["onClick"])),i.isLike?(e(),t(C,{key:1,name:"thumb-up-fill",size:30,onClick:e=>v.getLike(m)},null,8,["onClick"])):r("",!0)])),_:2},1032,["class"])])),_:2},1024),o(x,{class:"content"},{default:l((()=>[u(c(i.contentText),1)])),_:2},1024),o(x,{class:"reply-box"},{default:l((()=>[(e(!0),a(n,null,s(i.replyList,((i,a)=>(e(),t(x,{class:"item",key:i.index},{default:l((()=>[o(x,{class:"username"},{default:l((()=>[u(c(i.name),1)])),_:2},1024),o(x,{class:"text"},{default:l((()=>[u(c(i.contentStr),1)])),_:2},1024)])),_:2},1024)))),128)),null!=i.replyList?(e(),t(x,{key:0,class:"all-reply",onClick:v.toAllReply},{default:l((()=>[u(" 共"+c(i.allReply)+"条回复 ",1),o(C,{class:"more",name:"arrow-right",size:26})])),_:2},1032,["onClick"])):r("",!0)])),_:2},1024),o(x,{class:"bottom"},{default:l((()=>[u(c(i.date)+" ",1),o(x,{class:"reply"},{default:l((()=>[u("回复")])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})}],["__scopeId","data-v-2803d29a"]]);export{_ as default};