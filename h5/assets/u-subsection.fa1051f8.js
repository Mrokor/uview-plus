import{l as t,m as e,f as i,o as s,c as n,w as r,a as o,q as u,n as l,b as c,F as a,r as b,j as d,t as h,i as m,k as _}from"./index-5f0950f1.js";import{_ as f}from"./_plugin-vue_export-helper.1b428a4d.js";const y=f({name:"u-subsection",mixins:[e,i,{props:{list:{type:Array,default:()=>t.subsection.list},current:{type:[String,Number],default:()=>t.subsection.current},activeColor:{type:String,default:()=>t.subsection.activeColor},inactiveColor:{type:String,default:()=>t.subsection.inactiveColor},mode:{type:String,default:()=>t.subsection.mode},fontSize:{type:[String,Number],default:()=>t.subsection.fontSize},bold:{type:Boolean,default:()=>t.subsection.bold},bgColor:{type:String,default:()=>t.subsection.bgColor},keyName:{type:String,default:()=>t.subsection.keyName}}}],data:()=>({itemRect:{width:0,height:0},innerCurrent:"",windowResizeCallback:{}}),watch:{list(t,e){this.init()},current:{immediate:!0,handler(t){t!==this.innerCurrent&&(this.innerCurrent=t)}}},computed:{wrapperStyle(){const t={};return"button"===this.mode&&(t.backgroundColor=this.bgColor),t},barStyle(){const t={};return t.width=`${this.itemRect.width}px`,t.height=`${this.itemRect.height}px`,t.transform=`translateX(${this.innerCurrent*this.itemRect.width}px)`,"subsection"===this.mode&&(t.backgroundColor=this.activeColor),t},itemStyle(t){return t=>{const e={};return"subsection"===this.mode&&(e.borderColor=this.activeColor,e.borderWidth="1px",e.borderStyle="solid"),e}},textStyle(t){return t=>{const e={};return e.fontWeight=this.bold&&this.innerCurrent===t?"bold":"normal",e.fontSize=uni.$u.addUnit(this.fontSize),"subsection"===this.mode?e.color=this.innerCurrent===t?"#fff":this.inactiveColor:e.color=this.innerCurrent===t?this.activeColor:this.inactiveColor,e}}},mounted(){this.init(),this.windowResizeCallback=t=>{this.init()},uni.onWindowResize(this.windowResizeCallback)},beforeUnmount(){uni.offWindowResize(this.windowResizeCallback)},emits:["change"],methods:{init(){this.innerCurrent=this.current,uni.$u.sleep().then((()=>this.getRect()))},getText(t){return"object"==typeof t?t[this.keyName]:t},getRect(){this.$uGetRect(".u-subsection__item--0").then((t=>{this.itemRect=t}))},clickHandler(t){this.innerCurrent=t,this.$emit("change",t)}}},[["render",function(t,e,i,f,y,C){const p=m,g=_;return s(),n(p,{class:u(["u-subsection",[`u-subsection--${t.mode}`]]),ref:"u-subsection",style:l([t.$u.addStyle(t.customStyle),C.wrapperStyle])},{default:r((()=>[o(p,{class:u(["u-subsection__bar cursor-pointer",["button"===t.mode&&"u-subsection--button__bar",0===y.innerCurrent&&"subsection"===t.mode&&"u-subsection__bar--first",y.innerCurrent>0&&y.innerCurrent<t.list.length-1&&"subsection"===t.mode&&"u-subsection__bar--center",y.innerCurrent===t.list.length-1&&"subsection"===t.mode&&"u-subsection__bar--last"]]),ref:"u-subsection__bar",style:l([C.barStyle])},null,8,["style","class"]),(s(!0),c(a,null,b(t.list,((e,i)=>(s(),n(p,{class:u(["u-subsection__item cursor-pointer",[`u-subsection__item--${i}`,i<t.list.length-1&&"u-subsection__item--no-border-right",0===i&&"u-subsection__item--first",i===t.list.length-1&&"u-subsection__item--last"]]),ref_for:!0,ref:`u-subsection__item--${i}`,style:l([C.itemStyle(i)]),onClick:t=>C.clickHandler(i),key:i},{default:r((()=>[o(g,{class:"u-subsection__item__text",style:l([C.textStyle(i)])},{default:r((()=>[d(h(C.getText(e)),1)])),_:2},1032,["style"])])),_:2},1032,["class","style","onClick"])))),128))])),_:1},8,["class","style"])}],["__scopeId","data-v-8b4f7511"]]);export{y as _};