import{o as s,c as l,w as t,i as a,a as e,j as o,s as u,a3 as i,T as c,d as r,k as d}from"./index-932f1044.js";import{_ as n}from"./u-icon.aaaf92a4.js";import{r as f}from"./uni-app.es.cab4576b.js";import{_ as p}from"./_plugin-vue_export-helper.1b428a4d.js";const m=p({data:()=>({tel:""}),computed:{inputStyle(){let s={};return this.tel&&(s.color="#fff",s.backgroundColor=this.$u.color.warning),s}},methods:{submit(){this.$u.test.mobile(this.tel)&&this.$u.route({url:"pages/template/login/code"})}}},[["render",function(p,m,_,b,h,g){const w=a,y=i,j=c,k=f(r("up-icon"),n),x=d;return s(),l(w,{class:"wrap"},{default:t((()=>[e(w,{class:"top"}),e(w,{class:"content"},{default:t((()=>[e(w,{class:"title"},{default:t((()=>[o("欢迎登录")])),_:1}),e(y,{class:"u-border-bottom",type:"number",modelValue:h.tel,"onUpdate:modelValue":m[0]||(m[0]=s=>h.tel=s),placeholder:"请输入手机号"},null,8,["modelValue"]),e(w,{class:"tips"},{default:t((()=>[o("未注册的手机号验证后自动创建账号")])),_:1}),e(j,{onClick:g.submit,style:u([g.inputStyle]),class:"getCaptcha"},{default:t((()=>[o("获取短信验证码")])),_:1},8,["onClick","style"]),e(w,{class:"alternative"},{default:t((()=>[e(w,{class:"password"},{default:t((()=>[o("密码登录")])),_:1}),e(w,{class:"issue"},{default:t((()=>[o("遇到问题")])),_:1})])),_:1})])),_:1}),e(w,{class:"buttom"},{default:t((()=>[e(w,{class:"loginType"},{default:t((()=>[e(w,{class:"wechat item"},{default:t((()=>[e(w,{class:"icon"},{default:t((()=>[e(k,{size:"40",name:"weixin-fill",color:"rgb(83,194,64)"})])),_:1}),o(" 微信 ")])),_:1}),e(w,{class:"QQ item"},{default:t((()=>[e(w,{class:"icon"},{default:t((()=>[e(k,{size:"40",name:"qq-fill",color:"rgb(17,183,233)"})])),_:1}),o(" QQ ")])),_:1})])),_:1}),e(w,{class:"hint"},{default:t((()=>[o(" 登录代表同意 "),e(x,{class:"link"},{default:t((()=>[o("用户协议、隐私政策，")])),_:1}),o(" 并授权使用您的账号信息（如昵称、头像、收获地址）以便您统一管理 ")])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-33367b33"]]);export{m as default};
