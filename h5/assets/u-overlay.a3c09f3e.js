import{_ as o}from"./u-transition.0ea8848a.js";import{m as t,j as e,d as r,o as s,c as i,w as a,l as n}from"./index-c8e61bae.js";import{r as u}from"./uni-app.es.e0630e5f.js";import{_ as l}from"./_plugin-vue_export-helper.1b428a4d.js";const p=l({name:"u-overlay",mixins:[t,e,{props:{show:{type:Boolean,default:()=>uni.$u.props.overlay.show},zIndex:{type:[String,Number],default:()=>uni.$u.props.overlay.zIndex},duration:{type:[String,Number],default:()=>uni.$u.props.overlay.duration},opacity:{type:[String,Number],default:()=>uni.$u.props.overlay.opacity}}}],computed:{overlayStyle(){const o={position:"fixed",top:0,left:0,right:0,zIndex:this.zIndex,bottom:0,"background-color":`rgba(0, 0, 0, ${this.opacity})`};return uni.$u.deepMerge(o,uni.$u.addStyle(this.customStyle))}},emits:["click"],methods:{clickHandler(){this.$emit("click")}}},[["render",function(t,e,l,p,d,c){const m=u(r("u-transition"),o);return s(),i(m,{show:t.show,"custom-class":"u-overlay",duration:t.duration,"custom-style":c.overlayStyle,onClick:c.clickHandler},{default:a((()=>[n(t.$slots,"default",{},void 0,!0)])),_:3},8,["show","duration","custom-style","onClick"])}],["__scopeId","data-v-157b6490"]]);export{p as _};
