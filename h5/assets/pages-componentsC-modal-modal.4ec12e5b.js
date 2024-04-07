import{_ as o}from"./u-navbar.16e068c2.js";import{m as t,j as e,d as n,o as l,c as s,w as a,a as i,n as c,g as u,t as r,f as m,l as p,b as d,F as h,p as w,h as f,i as _,r as C,e as g}from"./index-c8e61bae.js";import{r as v}from"./uni-app.es.e0630e5f.js";import{_ as y}from"./u-gap.61bba599.js";import{_ as k}from"./u-cell.8c2203ce.js";import{_ as B}from"./u-cell-group.fd32c00d.js";import{_ as b}from"./u-line.840370ca.js";import{_ as $}from"./u-loading-icon.6d45ca86.js";import{_ as x}from"./u-popup.5b45bab6.js";import{_ as O}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as j}from"./u-button.9b07e159.js";import{_ as S}from"./logo.e6a56f74.js";import"./u-status-bar.d25dc9b6.js";import"./u-icon.e9837ae6.js";import"./u-overlay.a3c09f3e.js";import"./u-transition.0ea8848a.js";import"./u-safe-bottom.8b59ee32.js";const T=O({name:"u-modal",mixins:[t,e,{props:{show:{type:Boolean,default:()=>uni.$u.props.modal.show},title:{type:[String],default:()=>uni.$u.props.modal.title},content:{type:String,default:()=>uni.$u.props.modal.content},confirmText:{type:String,default:()=>uni.$u.props.modal.confirmText},cancelText:{type:String,default:()=>uni.$u.props.modal.cancelText},showConfirmButton:{type:Boolean,default:()=>uni.$u.props.modal.showConfirmButton},showCancelButton:{type:Boolean,default:()=>uni.$u.props.modal.showCancelButton},confirmColor:{type:String,default:()=>uni.$u.props.modal.confirmColor},cancelColor:{type:String,default:()=>uni.$u.props.modal.cancelColor},buttonReverse:{type:Boolean,default:()=>uni.$u.props.modal.buttonReverse},zoom:{type:Boolean,default:()=>uni.$u.props.modal.zoom},asyncClose:{type:Boolean,default:()=>uni.$u.props.modal.asyncClose},closeOnClickOverlay:{type:Boolean,default:()=>uni.$u.props.modal.closeOnClickOverlay},negativeTop:{type:[String,Number],default:()=>uni.$u.props.modal.negativeTop},width:{type:[String,Number],default:()=>uni.$u.props.modal.width},confirmButtonShape:{type:String,default:()=>uni.$u.props.modal.confirmButtonShape}}}],data:()=>({loading:!1}),watch:{show(o){o&&this.loading&&(this.loading=!1)}},emits:["confirm","cancel","close"],methods:{confirmHandler(){this.asyncClose&&(this.loading=!0),this.$emit("confirm")},cancelHandler(){this.$emit("cancel")},clickHandler(){this.closeOnClickOverlay&&this.$emit("close")}}},[["render",function(o,t,e,C,g,y){const k=f,B=_,O=v(n("u-line"),b),j=v(n("u-loading-icon"),$),S=v(n("u-popup"),x);return l(),s(S,{mode:"center",zoom:o.zoom,show:o.show,customStyle:{borderRadius:"6px",overflow:"hidden",marginTop:`-${o.$u.addUnit(o.negativeTop)}`},closeOnClickOverlay:o.closeOnClickOverlay,safeAreaInsetBottom:!1,duration:400,onClick:y.clickHandler},{default:a((()=>[i(B,{class:"u-modal",style:c({width:o.$u.addUnit(o.width)})},{default:a((()=>[o.title?(l(),s(k,{key:0,class:"u-modal__title"},{default:a((()=>[u(r(o.title),1)])),_:1})):m("v-if",!0),i(B,{class:"u-modal__content",style:c({paddingTop:(o.title?12:25)+"px"})},{default:a((()=>[p(o.$slots,"default",{},(()=>[i(k,{class:"u-modal__content__text"},{default:a((()=>[u(r(o.content),1)])),_:1})]),!0)])),_:3},8,["style"]),o.$slots.confirmButton?(l(),s(B,{key:1,class:"u-modal__button-group--confirm-button"},{default:a((()=>[p(o.$slots,"confirmButton",{},void 0,!0)])),_:3})):(l(),d(h,{key:2},[i(O),i(B,{class:"u-modal__button-group",style:c({flexDirection:o.buttonReverse?"row-reverse":"row"})},{default:a((()=>[o.showCancelButton?(l(),s(B,{key:0,class:w(["u-modal__button-group__wrapper u-modal__button-group__wrapper--cancel",[o.showCancelButton&&!o.showConfirmButton&&"u-modal__button-group__wrapper--only-cancel"]]),"hover-stay-time":150,"hover-class":"u-modal__button-group__wrapper--hover",onClick:y.cancelHandler},{default:a((()=>[i(k,{class:"u-modal__button-group__wrapper__text",style:c({color:o.cancelColor})},{default:a((()=>[u(r(o.cancelText),1)])),_:1},8,["style"])])),_:1},8,["class","onClick"])):m("v-if",!0),o.showConfirmButton&&o.showCancelButton?(l(),s(O,{key:1,direction:"column"})):m("v-if",!0),o.showConfirmButton?(l(),s(B,{key:2,class:w(["u-modal__button-group__wrapper u-modal__button-group__wrapper--confirm",[!o.showCancelButton&&o.showConfirmButton&&"u-modal__button-group__wrapper--only-confirm"]]),"hover-stay-time":150,"hover-class":"u-modal__button-group__wrapper--hover",onClick:y.confirmHandler},{default:a((()=>[g.loading?(l(),s(j,{key:0})):(l(),s(k,{key:1,class:"u-modal__button-group__wrapper__text",style:c({color:o.confirmColor})},{default:a((()=>[u(r(o.confirmText),1)])),_:1},8,["style"]))])),_:1},8,["class","onClick"])):m("v-if",!0)])),_:1},8,["style"])],64))])),_:3},8,["style"])])),_:3},8,["zoom","show","customStyle","closeOnClickOverlay","onClick"])}],["__scopeId","data-v-fd0f1ebf"]]);const U=O({data:()=>({content:"模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作",show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,show6:!1,show7:!1,show8:!1,show9:!1,list:[{title:"基础使用",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/4.png"},{title:"无标题",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/5.png"},{title:"带取消按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/2.png"},{title:"异步关闭",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/6.png"},{title:"对调取消和确认按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/3.png"},{title:"允许点击遮罩关闭",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/7.png"},{title:"传入slot",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/1.png"},{title:"自定义按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/8.png"},{title:"淡入淡出动画",iconUrl:"https://cdn.uviewui.com/uview/demo/modal/9.png"}]}),methods:{showModal(o){this[`show${o+1}`]=!0},navigateBack(){uni.navigateBack()},confirm4(){setTimeout((()=>{this.show4=!1}),2e3)},confirm(){this.show3=!1,console.log("confirm")},cancel(){this.show3=!1,console.log("cancel")},close(){this.show3=!1,console.log("close")}}},[["render",function(t,e,c,u,r,m){const p=v(n("u-navbar"),o),w=v(n("u-gap"),y),f=g,b=v(n("u-cell"),k),$=v(n("u-cell-group"),B),x=v(n("u-modal"),T),O=v(n("u-button"),j),U=_;return l(),s(U,{class:"u-page"},{default:a((()=>[i(p,{title:"模态框",onLeftClick:m.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),i(w,{height:"20",bgColor:"#fff"}),i($,null,{default:a((()=>[(l(!0),d(h,null,C(r.list,((o,t)=>(l(),s(b,{onClick:o=>m.showModal(t),title:o.title,key:t,isLink:""},{icon:a((()=>[i(f,{class:"u-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),i(x,{content:r.content,title:"标题",show:r.show1,onConfirm:e[0]||(e[0]=()=>r.show1=!1)},null,8,["content","show"]),i(x,{content:r.content,show:r.show2,onConfirm:e[1]||(e[1]=()=>r.show2=!1)},null,8,["content","show"]),i(x,{content:r.content,show:r.show3,showCancelButton:"",closeOnClickOverlay:"",onConfirm:m.confirm,onCancel:m.cancel,onClose:m.close},null,8,["content","show","onConfirm","onCancel","onClose"]),i(x,{content:r.content,show:r.show4,showCancelButton:"",asyncClose:"",onConfirm:m.confirm4,onCancel:e[2]||(e[2]=()=>r.show4=!1)},null,8,["content","show","onConfirm"]),i(x,{content:r.content,show:r.show5,showCancelButton:"",buttonReverse:"",onConfirm:e[3]||(e[3]=()=>r.show5=!1),onCancel:e[4]||(e[4]=()=>r.show5=!1)},null,8,["content","show"]),i(x,{content:r.content,title:"标题",show:r.show6,closeOnClickOverlay:"",onConfirm:e[5]||(e[5]=()=>r.show6=!1),onClose:e[6]||(e[6]=()=>r.show6=!1)},null,8,["content","show"]),i(x,{title:"利剑出鞘,一统江湖",show:r.show7,closeOnClickOverlay:"",onConfirm:e[7]||(e[7]=()=>r.show7=!1)},{default:a((()=>[i(f,{style:{width:"80px",height:"80px"},src:S})])),_:1},8,["show"]),i(x,{title:"标题",show:r.show8,content:r.content,closeOnClickOverlay:"",showCancelButton:""},{confirmButton:a((()=>[i(O,{text:"确定",type:"success",shape:"circle",onClick:e[8]||(e[8]=o=>r.show8=!1)})])),_:1},8,["show","content"]),i(x,{content:r.content,title:"标题",show:r.show9,zoom:!1,onConfirm:e[9]||(e[9]=()=>r.show9=!1)},null,8,["content","show"])])),_:1})}],["__scopeId","data-v-6f196e9e"]]);export{U as default};
