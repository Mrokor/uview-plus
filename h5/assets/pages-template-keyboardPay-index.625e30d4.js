import{_ as s}from"./u-icon.807c0673.js";import{o,c as a,w as e,i as t,a as n,f as d,d as i,g as u,j as l}from"./index-7259cb7d.js";import{r as p}from"./uni-app.es.58690612.js";import{_ as r}from"./u-button.390d52b0.js";import{_ as c}from"./u-keyboard.bfba7a15.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.22c3afc5.js";import"./u-popup.83d9c595.js";import"./u-overlay.2869c749.js";import"./u-transition.dfcf1fa1.js";import"./u-status-bar.f6b304b5.js";import"./u-safe-bottom.f900bb87.js";const m=h({data:()=>({show:!1,password:""}),onLoad(){},methods:{onChange(s){this.password.length<6&&(this.password+=s),this.password.length>=6&&this.pay()},onBackspace(s){this.password.length>0&&(this.password=this.password.substring(0,this.password.length-1))},pay(){uni.showLoading({title:"支付中"}),setTimeout((()=>{uni.hideLoading(),this.show=!1,uni.showToast({icon:"success",title:"支付成功"})}),2e3)},showPop(s=!0){this.password="",this.show=s},finish(){console.log(11111)}}},[["render",function(h,m,f,g,w,_){const b=p(i("u-icon"),s),j=u,k=p(i("u-button"),r),y=t,x=l("u-message-input"),C=p(i("u-keyboard"),c);return o(),a(y,null,{default:e((()=>[n(y,{class:"u-padding-40"},{default:e((()=>[n(k,{type:"success",onClick:m[0]||(m[0]=s=>_.showPop(!0))},{default:e((()=>[n(b,{name:"red-packet"}),n(j,{class:"u-padding-left-10"},{default:e((()=>[d("发送1.00元红包")])),_:1})])),_:1})])),_:1}),n(C,{default:"",ref:"uKeyboard",mode:"number",mask:!0,"mask-close-able":!1,"dot-enabled":!1,show:w.show,"safe-area-inset-bottom":!0,tooltip:!1,onChange:_.onChange,onBackspace:_.onBackspace},{default:e((()=>[n(y,null,{default:e((()=>[n(y,{class:"u-text-center u-padding-20 money"},{default:e((()=>[n(j,null,{default:e((()=>[d("1.00")])),_:1}),n(j,{class:"u-font-20 u-padding-left-10"},{default:e((()=>[d("元")])),_:1}),n(y,{class:"u-padding-10 close","data-flag":"false",onClick:m[1]||(m[1]=s=>_.showPop(!1))},{default:e((()=>[n(b,{name:"close",color:"#333333",size:"28"})])),_:1})])),_:1}),n(y,{class:"u-flex u-row-center"},{default:e((()=>[n(x,{mode:"box",maxlength:6,"dot-fill":!0,modelValue:w.password,"onUpdate:modelValue":m[2]||(m[2]=s=>w.password=s),"disabled-keyboard":!0,onFinish:_.finish},null,8,["modelValue","onFinish"])])),_:1}),n(y,{class:"u-text-center u-padding-top-10 u-padding-bottom-20 tips"},{default:e((()=>[d("支付键盘")])),_:1})])),_:1})])),_:1},8,["show","onChange","onBackspace"])])),_:1})}],["__scopeId","data-v-4113c4d9"]]);export{m as default};