import{l as e,m as t,f as a,A as l,V as i,M as n,O as s,x as o,d as c,o as u,c as d,w as p,a as r,h as _,j as m,t as f,u as h,k as g,i as b}from"./index-932f1044.js";import{_ as y}from"./u-icon.aaaf92a4.js";import{r as v}from"./uni-app.es.cab4576b.js";import{_ as x}from"./u-cell.4b54c19d.js";import{_ as k}from"./u-line.213079f5.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as D}from"./u-gap.ca4ceeab.js";const $=I({name:"u-collapse-item",mixins:[t,a,{props:{title:{type:String,default:()=>e.collapseItem.title},value:{type:String,default:()=>e.collapseItem.value},label:{type:String,default:()=>e.collapseItem.label},disabled:{type:Boolean,default:()=>e.collapseItem.disabled},isLink:{type:Boolean,default:()=>e.collapseItem.isLink},clickable:{type:Boolean,default:()=>e.collapseItem.clickable},border:{type:Boolean,default:()=>e.collapseItem.border},align:{type:String,default:()=>e.collapseItem.align},name:{type:[String,Number],default:()=>e.collapseItem.name},icon:{type:String,default:()=>e.collapseItem.icon},duration:{type:Number,default:()=>e.collapseItem.duration}}}],data:()=>({elId:l(),animationData:{},expanded:!1,showBorder:!1,animating:!1,parentData:{accordion:!1,border:!1}}),watch:{expanded(e){clearTimeout(this.timer),this.timer=null,this.timer=setTimeout((()=>{this.showBorder=e}),e?10:290)}},mounted(){this.init()},methods:{async init(){if(this.updateParentData(),!this.parent)return i();const{value:e,accordion:t,children:a=[]}=this.parent;if(t){if(n.array(e))return i();this.expanded=this.name==e}else{if(!n.array(e)&&null!==e)return i();this.expanded=(e||[]).some((e=>e==this.name))}await s(),this.setContentAnimate()},updateParentData(){this.getParentData("u-collapse")},async setContentAnimate(){const e=await this.queryRect(),t=this.expanded?e.height:0;this.animating=!0;const a=uni.createAnimation({timingFunction:"ease-in-out"});a.height(t).step({duration:this.duration}).step(),this.animationData=a.export(),o(this.duration).then((()=>{this.animating=!1}))},clickHandler(){this.disabled&&this.animating||this.parent&&this.parent.onChange(this)},queryRect(){return new Promise((e=>{this.$uGetRect(`#${this.elId}`).then((t=>{e(t)}))}))}}},[["render",function(e,t,a,l,i,n){const s=g,o=v(c("u-icon"),y),I=v(c("u-cell"),x),D=b,$=v(c("u-line"),k);return u(),d(D,{class:"u-collapse-item"},{default:p((()=>[r(I,{title:e.$slots.title?"":e.title,value:e.value,label:e.label,icon:e.icon,isLink:e.isLink,clickable:e.clickable,border:i.parentData.border&&i.showBorder,onClick:n.clickHandler,arrowDirection:i.expanded?"up":"down",disabled:e.disabled},{title:p((()=>[_(e.$slots,"title",{},(()=>[!e.$slots.title&&e.title?(u(),d(s,{key:0},{default:p((()=>[m(f(e.title),1)])),_:1})):h("",!0)]),!0)])),icon:p((()=>[_(e.$slots,"icon",{},(()=>[!e.$slots.icon&&e.icon?(u(),d(o,{key:0,size:22,name:e.icon},null,8,["name"])):h("",!0)]),!0)])),value:p((()=>[_(e.$slots,"value",{},(()=>[!e.$slots.value&&e.value?(u(),d(s,{key:0},{default:p((()=>[m(f(e.value),1)])),_:1})):h("",!0)]),!0)])),"right-icon":p((()=>[_(e.$slots,"right-icon",{},void 0,!0)])),_:3},8,["title","value","label","icon","isLink","clickable","border","onClick","arrowDirection","disabled"]),r(D,{class:"u-collapse-item__content",animation:i.animationData,ref:"animation"},{default:p((()=>[r(D,{class:"u-collapse-item__content__text content-class",id:i.elId,ref:i.elId},{default:p((()=>[_(e.$slots,"default",{},void 0,!0)])),_:3},8,["id"])])),_:3},8,["animation"]),i.parentData.border?(u(),d($,{key:0})):h("",!0)])),_:3})}],["__scopeId","data-v-0d3212cb"]]);const w=I({name:"u-collapse",mixins:[t,a,{props:{value:{type:[String,Number,Array,null],default:()=>e.collapse.value},accordion:{type:Boolean,default:()=>e.collapse.accordion},border:{type:Boolean,default:()=>e.collapse.border}}}],watch:{needInit(){this.init()},parentData(){this.children.length&&this.children.map((e=>{"function"==typeof e.updateParentData&&e.updateParentData()}))}},created(){this.children=[]},computed:{needInit(){return[this.accordion,this.value]}},emits:["open","close","change"],methods:{init(){this.children.map((e=>{e.init()}))},onChange(e){let t=[];this.children.map(((a,l)=>{this.accordion?(a.expanded=a===e&&!e.expanded,a.setContentAnimate()):a===e&&(a.expanded=!a.expanded,a.setContentAnimate()),t.push({name:a.name||l,status:a.expanded?"open":"close"})})),this.$emit("change",t),this.$emit(e.expanded?"open":"close",e.name)}}},[["render",function(e,t,a,l,i,n){const s=v(c("u-line"),k),o=b;return u(),d(o,{class:"u-collapse"},{default:p((()=>[e.border?(u(),d(s,{key:0})):h("",!0),_(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-3400b7c8"]]);const C=I({data:()=>({}),methods:{open(e){},close(e){},change(e){}}},[["render",function(e,t,a,l,i,n){const s=g,o=v(c("up-collapse-item"),$),_=v(c("up-collapse"),w),f=b,h=v(c("up-icon"),y),x=v(c("up-gap"),D);return u(),d(f,{class:"u-page"},{default:p((()=>[r(f,{class:"u-page__item"},{default:p((()=>[r(s,{class:"u-page__item__title"},{default:p((()=>[m("基础功能")])),_:1}),r(_,{onChange:n.change,onClose:n.close,onOpen:n.open},{default:p((()=>[r(o,{title:"文档指南",name:"Docs guide"},{default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),r(o,{title:"组件全面",name:"Variety components"},{default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),r(o,{title:"众多利器",name:"Numerous tools"},{default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1},8,["onChange","onClose","onOpen"])])),_:1}),r(f,{class:"u-page__item"},{default:p((()=>[r(s,{class:"u-page__item__title"},{default:p((()=>[m("展开和禁用")])),_:1}),r(_,{value:["2"]},{default:p((()=>[r(o,{title:"文档指南"},{default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),r(o,{disabled:"",title:"组件全面"},{default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),r(o,{name:"2",title:"众多利器"},{default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),r(f,{class:"u-page__item"},{default:p((()=>[r(s,{class:"u-page__item__title"},{default:p((()=>[m("手风琴模式")])),_:1}),r(_,{accordion:""},{default:p((()=>[r(o,{title:"文档指南"},{default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),r(o,{title:"组件全面"},{default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),r(o,{title:"众多利器"},{default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),r(f,{class:"u-page__item"},{default:p((()=>[r(s,{class:"u-page__item__title"},{default:p((()=>[m("移除下划线")])),_:1}),r(_,{accordion:"",border:!1},{default:p((()=>[r(o,{title:"文档指南"},{default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),r(o,{title:"组件全面"},{default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),r(o,{title:"众多利器"},{default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),r(f,{class:"u-page__item"},{default:p((()=>[r(s,{class:"u-page__item__title"},{default:p((()=>[m("自定义标题和内容")])),_:1}),r(_,{accordion:""},{default:p((()=>[r(o,null,{title:p((()=>[r(s,{class:"u-page__item__title__slot-title"},{default:p((()=>[m("文档指南")])),_:1})])),default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川")])),_:1})])),_:1}),r(o,{title:"组件全面"},{icon:p((()=>[r(h,{name:"tags-fill",size:"20"})])),default:p((()=>[r(s,{class:"u-collapse-content"},{default:p((()=>[m("众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用")])),_:1})])),_:1}),r(o,{title:"众多利器",icon:"tags-fill"},{value:p((()=>[r(s,{class:"u-page__item__title__slot-title"},{default:p((()=>[m("自定义内容")])),_:1})])),default:p((()=>[m(),r(s,{class:"u-collapse-content"},{default:p((()=>[m("众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨")])),_:1})])),_:1})])),_:1})])),_:1}),r(x,{height:"50"})])),_:1})}],["__scopeId","data-v-ee0e290d"]]);export{C as default};
