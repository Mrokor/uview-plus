import{_ as e}from"./u-navbar.ef5dc282.js";import{o,c as t,w as a,i,a as s,b as n,r,F as l,d,e as c}from"./index-5ac367f5.js";import{r as u}from"./uni-app.es.addfbfcf.js";import{_ as m}from"./u-gap.c64d1e8c.js";import{_ as p}from"./u-cell.a0bf281d.js";import{_ as h}from"./u-cell-group.4785f24e.js";import{_ as k}from"./u-keyboard.5586d2d4.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-status-bar.59e3627a.js";import"./u-icon.ca5d33e1.js";import"./u-line.b34b18bd.js";import"./u-popup.600d85fb.js";import"./u-overlay.e21fd72d.js";import"./u-transition.336d01df.js";import"./u-safe-bottom.87130dc1.js";const f=b({data:()=>({input:"",keyData:{mode:"",dotDisabled:!1,random:!1},list:[{title:"车牌号键盘",iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/car.png"},{title:"数字键盘",iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/number.png"},{title:"身份证键盘",iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/IdCard.png"},{title:'隐藏键盘"."符号',iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/dot.png"},{title:"打乱键盘按键的顺序",iconUrl:"https://cdn.uviewui.com/uview/demo/keyboard/order.png"}],show:!1}),methods:{navigateBack(){uni.navigateBack()},openKeyboard(e){this.keyData={mode:"",dotDisabled:!1,random:!1},0==e?this.keyData.mode="":1==e?this.keyData.mode="number":2==e?this.keyData.mode="card":3==e?(this.keyData.mode="number",this.keyData.dotDisabled=!0):4==e&&(this.keyData.mode="number",this.keyData.random=!0),this.input="",this.show=!0},change(e){this.input+=e},close(){this.show=!1},cancel(){this.show=!1},confirm(){this.show=!1},backspace(){this.input=this.input.slice(0,-1)}}},[["render",function(b,f,y,g,w,v){const D=u(d("u-navbar"),e),j=u(d("u-gap"),m),C=c,_=u(d("u-cell"),p),B=u(d("u-cell-group"),h),U=u(d("u-keyboard"),k),x=i;return o(),t(x,{class:"u-page"},{default:a((()=>[s(D,{title:"键盘",onLeftClick:v.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),s(j,{height:"20",bgColor:"#fff"}),s(B,null,{default:a((()=>[(o(!0),n(l,null,r(w.list,((e,i)=>(o(),t(_,{titleStyle:{fontWeight:500},onClick:e=>v.openKeyboard(i),title:e.title,key:i,isLink:""},{default:a((()=>[s(C,{slot:"icon",class:"u-cell-icon",src:e.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),s(U,{mode:w.keyData.mode,dotDisabled:w.keyData.dotDisabled,random:w.keyData.random,show:w.show,onClose:v.close,onCancel:v.cancel,onConfirm:v.confirm,onChange:v.change,onBackspace:v.backspace},null,8,["mode","dotDisabled","random","show","onClose","onCancel","onConfirm","onChange","onBackspace"])])),_:1})}],["__scopeId","data-v-89fd77ce"]]);export{f as default};