import{m as e,j as t,d as n,o as u,c as o,w as l,s,l as a,p as i,n as r,a as d,f as h,i as m,I as c,g as p,t as g,h as b}from"./index-c8e61bae.js";import{_ as f}from"./u-icon.e9837ae6.js";import{r as y}from"./uni-app.es.e0630e5f.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as v}from"./u-cell.8c2203ce.js";import{_ as x}from"./u-cell-group.fd32c00d.js";import"./u-line.840370ca.js";const V=C({name:"u-number-box",mixins:[e,t,{props:{name:{type:[String,Number],default:()=>uni.$u.props.numberBox.name},modelValue:{type:[String,Number],default:()=>uni.$u.props.numberBox.value},min:{type:[String,Number],default:()=>uni.$u.props.numberBox.min},max:{type:[String,Number],default:()=>uni.$u.props.numberBox.max},step:{type:[String,Number],default:()=>uni.$u.props.numberBox.step},integer:{type:Boolean,default:()=>uni.$u.props.numberBox.integer},disabled:{type:Boolean,default:()=>uni.$u.props.numberBox.disabled},disabledInput:{type:Boolean,default:()=>uni.$u.props.numberBox.disabledInput},asyncChange:{type:Boolean,default:()=>uni.$u.props.numberBox.asyncChange},inputWidth:{type:[String,Number],default:()=>uni.$u.props.numberBox.inputWidth},showMinus:{type:Boolean,default:()=>uni.$u.props.numberBox.showMinus},showPlus:{type:Boolean,default:()=>uni.$u.props.numberBox.showPlus},decimalLength:{type:[String,Number,null],default:()=>uni.$u.props.numberBox.decimalLength},longPress:{type:Boolean,default:()=>uni.$u.props.numberBox.longPress},color:{type:String,default:()=>uni.$u.props.numberBox.color},buttonSize:{type:[String,Number],default:()=>uni.$u.props.numberBox.buttonSize},bgColor:{type:String,default:()=>uni.$u.props.numberBox.bgColor},cursorSpacing:{type:[String,Number],default:()=>uni.$u.props.numberBox.cursorSpacing},disablePlus:{type:Boolean,default:()=>uni.$u.props.numberBox.disablePlus},disableMinus:{type:Boolean,default:()=>uni.$u.props.numberBox.disableMinus},iconStyle:{type:[Object,String],default:()=>uni.$u.props.numberBox.iconStyle}}}],data:()=>({currentValue:"",longPressTimer:null}),watch:{watchChange(e){this.check()},modelValue:{handler:function(e,t){e!==this.currentValue&&(this.currentValue=this.format(this.modelValue))},immediate:!0}},computed:{getCursorSpacing(){return uni.$u.getPx(this.cursorSpacing)},buttonStyle(){return e=>{const t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.buttonSize),color:this.color};return this.isDisabled(e)&&(t.backgroundColor="#f7f8fa"),t}},inputStyle(){this.disabled||this.disabledInput;return{color:this.color,backgroundColor:this.bgColor,height:uni.$u.addUnit(this.buttonSize),width:uni.$u.addUnit(this.inputWidth)}},watchChange(){return[this.integer,this.decimalLength,this.min,this.max]},isDisabled(){return e=>"plus"===e?this.disabled||this.disablePlus||this.currentValue>=this.max:this.disabled||this.disableMinus||this.currentValue<=this.min}},mounted(){this.init()},emits:["update:modelValue","focus","blur","overlimit","change","plus","minus"],methods:{init(){this.currentValue=this.format(this.modelValue)},format(e){return e=""===(e=this.filter(e))?0:+e,e=Math.max(Math.min(this.max,e),this.min),null!==this.decimalLength&&(e=e.toFixed(this.decimalLength)),e},filter(e){return e=String(e).replace(/[^0-9.-]/g,""),this.integer&&-1!==e.indexOf(".")&&(e=e.split(".")[0]),e},check(){const e=this.format(this.currentValue);e!==this.currentValue&&(this.currentValue=e)},onFocus(e){this.$emit("focus",{...e.detail,name:this.name})},onBlur(e){this.format(e.detail.value),this.$emit("blur",{...e.detail,name:this.name})},onInput(e){const{value:t=""}=e.detail||{};if(""===t)return;let n=this.filter(t);if(null!==this.decimalLength&&-1!==n.indexOf(".")){const e=n.split(".");n=`${e[0]}.${e[1].slice(0,this.decimalLength)}`}n=this.format(n),this.emitChange(n)},emitChange(e){this.asyncChange||this.$nextTick((()=>{this.$emit("update:modelValue",e),this.currentValue=e,this.$forceUpdate()})),this.$emit("change",{value:e,name:this.name})},onChange(){const{type:e}=this;if(this.isDisabled(e))return this.$emit("overlimit",e);const t="minus"===e?-this.step:+this.step,n=this.format(this.add(+this.currentValue,t));this.emitChange(n),this.$emit(e)},add(e,t){const n=Math.pow(10,10);return Math.round((e+t)*n)/n},clickHandler(e){this.type=e,this.onChange()},longPressStep(){this.clearTimeout(),this.longPressTimer=setTimeout((()=>{this.onChange(),this.longPressStep()}),250)},onTouchStart(e){this.longPress&&(this.clearTimeout(),this.type=e,this.longPressTimer=setTimeout((()=>{this.onChange(),this.longPressStep()}),600))},onTouchEnd(){this.longPress&&this.clearTimeout()},clearTimeout(){clearTimeout(this.longPressTimer),this.longPressTimer=null}}},[["render",function(e,t,p,g,b,C){const v=m,x=y(n("u-icon"),f),V=c;return u(),o(v,{class:"u-number-box"},{default:l((()=>[e.showMinus&&e.$slots.minus?(u(),o(v,{key:0,class:"u-number-box__slot",onClick:t[0]||(t[0]=s((e=>C.clickHandler("minus")),["stop"])),onTouchstart:t[1]||(t[1]=e=>C.onTouchStart("minus")),onTouchend:s(C.clearTimeout,["stop"])},{default:l((()=>[a(e.$slots,"minus",{},void 0,!0)])),_:3},8,["onTouchend"])):e.showMinus?(u(),o(v,{key:1,class:i(["u-number-box__minus",{"u-number-box__minus--disabled":C.isDisabled("minus")}]),onClick:t[2]||(t[2]=s((e=>C.clickHandler("minus")),["stop"])),onTouchstart:t[3]||(t[3]=e=>C.onTouchStart("minus")),onTouchend:s(C.clearTimeout,["stop"]),"hover-class":"u-number-box__minus--hover","hover-stay-time":"150",style:r([C.buttonStyle("minus")])},{default:l((()=>[d(x,{name:"minus",color:C.isDisabled("minus")?"#c8c9cc":"#323233",size:"15",bold:"",customStyle:e.iconStyle},null,8,["color","customStyle"])])),_:1},8,["onTouchend","class","style"])):h("v-if",!0),a(e.$slots,"input",{},(()=>[d(V,{disabled:e.disabledInput||e.disabled,"cursor-spacing":C.getCursorSpacing,class:i([{"u-number-box__input--disabled":e.disabled||e.disabledInput},"u-number-box__input"]),modelValue:b.currentValue,"onUpdate:modelValue":t[4]||(t[4]=e=>b.currentValue=e),onBlur:C.onBlur,onFocus:C.onFocus,onInput:C.onInput,type:"number",style:r([C.inputStyle])},null,8,["disabled","cursor-spacing","class","modelValue","onBlur","onFocus","onInput","style"])]),!0),e.showPlus&&e.$slots.plus?(u(),o(v,{key:2,class:"u-number-box__slot",onClick:t[5]||(t[5]=s((e=>C.clickHandler("plus")),["stop"])),onTouchstart:t[6]||(t[6]=e=>C.onTouchStart("plus")),onTouchend:s(C.clearTimeout,["stop"])},{default:l((()=>[a(e.$slots,"plus",{},void 0,!0)])),_:3},8,["onTouchend"])):e.showPlus?(u(),o(v,{key:3,class:i(["u-number-box__plus",{"u-number-box__minus--disabled":C.isDisabled("plus")}]),onClick:t[7]||(t[7]=s((e=>C.clickHandler("plus")),["stop"])),onTouchstart:t[8]||(t[8]=e=>C.onTouchStart("plus")),onTouchend:s(C.clearTimeout,["stop"]),"hover-class":"u-number-box__plus--hover","hover-stay-time":"150",style:r([C.buttonStyle("plus")])},{default:l((()=>[d(x,{name:"plus",color:C.isDisabled("plus")?"#c8c9cc":"#323233",size:"15",bold:"",customStyle:e.iconStyle},null,8,["color","customStyle"])])),_:1},8,["onTouchend","class","style"])):h("v-if",!0)])),_:3})}],["__scopeId","data-v-ea94a219"]]);const _=C({data:()=>({value1:3,value2:3,value3:3,value4:3,value5:3,value6:3,value7:3,value8:3.1,value9:3,value10:3,value11:3,step1:2,min1:5,max1:8,asyncChange:!0,color:"#FFFFFF",buttonSize:36,bgColor:"#2979ff"}),methods:{change(e){console.log("change",e)},myAsyncChange(e){this.asyncChange=!1,uni.showLoading({title:"正在加载"}),setTimeout((()=>{uni.hideLoading(),this.value9=e,this.asyncChange=!0}),3e3)}}},[["render",function(e,t,s,a,i,r){const h=y(n("u-number-box"),V),c=y(n("u-cell"),v),C=y(n("u-icon"),f),_=m,S=b,$=y(n("u-cell-group"),x);return u(),o(_,{class:""},{default:l((()=>[d($,{border:!0},{default:l((()=>[d(c,{border:!0,title:"基础用法"},{"right-icon":l((()=>[d(h,{modelValue:i.value1,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value1=e),step:"1",onChange:r.change},null,8,["modelValue","onChange"])])),_:1}),d(c,{border:!0,title:"步长设置"},{"right-icon":l((()=>[d(h,{modelValue:i.value2,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value2=e),step:i.step1,onChange:r.change},null,8,["modelValue","step","onChange"])])),_:1}),d(c,{border:!0,title:"限制输入范围"},{"right-icon":l((()=>[d(h,{modelValue:i.value3,"onUpdate:modelValue":t[2]||(t[2]=e=>i.value3=e),step:"1",min:i.min1,max:i.max1,onChange:r.change},null,8,["modelValue","min","max","onChange"])])),_:1}),d(c,{border:!0,title:"限制输入整数"},{"right-icon":l((()=>[d(h,{modelValue:i.value4,"onUpdate:modelValue":t[3]||(t[3]=e=>i.value4=e),step:"1",integer:"",onChange:r.change},null,8,["modelValue","onChange"])])),_:1}),d(c,{border:!0,title:"禁用状态"},{"right-icon":l((()=>[d(h,{modelValue:i.value5,"onUpdate:modelValue":t[4]||(t[4]=e=>i.value5=e),step:"1",disabled:!0,onChange:r.change},null,8,["modelValue","onChange"])])),_:1}),d(c,{border:!0,title:"禁用输入框"},{"right-icon":l((()=>[d(h,{modelValue:i.value6,"onUpdate:modelValue":t[5]||(t[5]=e=>i.value6=e),step:"1",disabledInput:!0,onChange:r.change},null,8,["modelValue","onChange"])])),_:1}),d(c,{border:!0,title:"禁用长按"},{"right-icon":l((()=>[d(h,{modelValue:i.value7,"onUpdate:modelValue":t[6]||(t[6]=e=>i.value7=e),step:"1",longPress:!1,onChange:r.change},null,8,["modelValue","onChange"])])),_:1}),d(c,{border:!0,title:"固定小数位数"},{"right-icon":l((()=>[d(h,{modelValue:i.value8,"onUpdate:modelValue":t[7]||(t[7]=e=>i.value8=e),step:"0.2",decimalLength:"1",onChange:r.change},null,8,["modelValue","onChange"])])),_:1}),d(c,{border:!0,title:"异步变更"},{"right-icon":l((()=>[d(h,{modelValue:i.value9,"onUpdate:modelValue":t[8]||(t[8]=e=>i.value9=e),step:"1",asyncChange:i.asyncChange,onChange:r.myAsyncChange},null,8,["modelValue","asyncChange","onChange"])])),_:1}),d(c,{border:!0,title:"自定义大小颜色样式"},{"right-icon":l((()=>[d(h,{modelValue:i.value10,"onUpdate:modelValue":t[9]||(t[9]=e=>i.value10=e),step:"1",color:i.color,buttonSize:i.buttonSize,bgColor:i.bgColor,onChange:r.change,iconStyle:"color: #fff"},null,8,["modelValue","color","buttonSize","bgColor","onChange"])])),_:1}),d(c,{border:!0,title:"自定义(为0时减少按钮会消失)"},{"right-icon":l((()=>[d(h,{modelValue:i.value11,"onUpdate:modelValue":t[10]||(t[10]=e=>i.value11=e),step:"1",min:0,showMinus:i.value11>0},{minus:l((()=>[d(_,{class:"minus"},{default:l((()=>[d(C,{name:"minus",size:"12"})])),_:1})])),input:l((()=>[d(S,{style:{width:"50px","text-align":"center"},class:"input"},{default:l((()=>[p(g(i.value11),1)])),_:1})])),plus:l((()=>[d(_,{class:"plus"},{default:l((()=>[d(C,{name:"plus",color:"#FFFFFF",size:"12"})])),_:1})])),_:1},8,["modelValue","showMinus"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-1b809d7d"]]);export{_ as default};
