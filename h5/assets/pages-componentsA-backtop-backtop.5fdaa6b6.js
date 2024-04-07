import{m as t,j as o,d as a,o as e,c,w as i,n as s,a as u,g as l,t as n,f as p,l as r,h as d,i as m,b,r as k,F as h}from"./index-c8e61bae.js";import{_ as f,a as T}from"./u-checkbox-group.f61765c3.js";import{r as y}from"./uni-app.es.e0630e5f.js";import{_ as g}from"./u-icon.e9837ae6.js";import{_ as S}from"./u-transition.0ea8848a.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";const _=x({name:"u-back-top",mixins:[t,o,{props:{mode:{type:String,default:()=>uni.$u.props.backtop.mode},icon:{type:String,default:()=>uni.$u.props.backtop.icon},text:{type:String,default:()=>uni.$u.props.backtop.text},duration:{type:[String,Number],default:()=>uni.$u.props.backtop.duration},scrollTop:{type:[String,Number],default:()=>uni.$u.props.backtop.scrollTop},top:{type:[String,Number],default:()=>uni.$u.props.backtop.top},bottom:{type:[String,Number],default:()=>uni.$u.props.backtop.bottom},right:{type:[String,Number],default:()=>uni.$u.props.backtop.right},zIndex:{type:[String,Number],default:()=>uni.$u.props.backtop.zIndex},iconStyle:{type:Object,default:()=>uni.$u.props.backtop.iconStyle}}}],computed:{backTopStyle(){return{bottom:uni.$u.addUnit(this.bottom),right:uni.$u.addUnit(this.right),width:"40px",height:"40px",position:"fixed",zIndex:10}},show(){return uni.$u.getPx(this.scrollTop)>uni.$u.getPx(this.top)},contentStyle(){const t={};let o=0;return o="circle"===this.mode?"100px":"4px",t.borderTopLeftRadius=o,t.borderTopRightRadius=o,t.borderBottomLeftRadius=o,t.borderBottomRightRadius=o,uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},emits:["click"],methods:{backToTop(){uni.pageScrollTo({scrollTop:0,duration:this.duration}),this.$emit("click")}}},[["render",function(t,o,b,k,h,f){const T=y(a("u-icon"),g),x=d,_=m,D=y(a("u-transition"),S);return e(),c(D,{mode:"fade",customStyle:f.backTopStyle,show:f.show},{default:i((()=>[t.$slots.default||t.$slots.$default?r(t.$slots,"default",{key:1},void 0,!0):(e(),c(_,{key:0,class:"u-back-top",style:s([f.contentStyle]),onClick:f.backToTop},{default:i((()=>[u(T,{name:t.icon,"custom-style":t.iconStyle},null,8,["name","custom-style"]),t.text?(e(),c(x,{key:0,class:"u-back-top__text"},{default:i((()=>[l(n(t.text),1)])),_:1})):p("v-if",!0)])),_:1},8,["style","onClick"]))])),_:3},8,["customStyle","show"])}],["__scopeId","data-v-c809159b"]]);const D=x({data:()=>({value:["自定义图标"],backTopData:{mode:"circle",icon:"arrow-upward",bottom:100,customStyle:{},iconStyle:{},right:20,duration:300},scrollTop:0,checkboxList:[{name:"显示方形"},{name:"自定义图标"},{name:"自定义距离"},{name:"自定义样式"},{name:"自定义返回顶部滚动时间"}]}),onLoad(){this.backTopData.icon="arrow-up"},onPageScroll(t){this.scrollTop=t.scrollTop},methods:{checkboxChange(t){t.includes("显示方形")?this.backTopData.mode="square":this.backTopData.mode="circle",t.includes("自定义图标")?this.backTopData.icon="arrow-up":this.backTopData.icon="arrow-upward",t.includes("自定义距离")?(this.backTopData.bottom=300,this.backTopData.right=20):this.backTopData.bottom=100,t.includes("自定义样式")?(this.backTopData.customStyle={backgroundColor:"#2979ff"},this.backTopData.iconStyle={color:"#ffffff"}):(this.backTopData.customStyle={},this.backTopData.iconStyle={}),t.includes("自定义返回顶部滚动时间")?this.backTopData.duration=1500:this.backTopData.duration=300},click(){console.log("click")}}},[["render",function(t,o,s,n,p,r){const g=d,S=y(a("u-checkbox"),f),x=y(a("u-checkbox-group"),T),D=m,$=y(a("u-back-top"),_);return e(),c(D,{class:"u-page",ref:"u-back-top"},{default:i((()=>[u(D,{class:"u-demo-block"},{default:i((()=>[u(g,{class:"u-demo-block__title"},{default:i((()=>[l("自定义backTop(滚动页面即可在右下角看到图标)")])),_:1}),u(D,{class:"u-demo-block__content"},{default:i((()=>[u(D,{class:"u-page__backTop-item"},{default:i((()=>[u(x,{placement:"column",shape:"square",onChange:r.checkboxChange,modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=t=>p.value=t)},{default:i((()=>[(e(!0),b(h,null,k(p.checkboxList,((t,o)=>(e(),c(S,{customStyle:{marginBottom:"8px"},key:o,label:t.name,name:t.name},null,8,["label","name"])))),128))])),_:1},8,["onChange","modelValue"])])),_:1})])),_:1})])),_:1}),u($,{right:p.backTopData.right,customStyle:p.backTopData.customStyle,bottom:p.backTopData.bottom,icon:p.backTopData.icon,mode:p.backTopData.mode,iconStyle:p.backTopData.iconStyle,duration:p.backTopData.duration,scrollTop:p.scrollTop,onClick:r.click},null,8,["right","customStyle","bottom","icon","mode","iconStyle","duration","scrollTop","onClick"])])),_:1},512)}],["__scopeId","data-v-0967d3b9"]]);export{D as default};
