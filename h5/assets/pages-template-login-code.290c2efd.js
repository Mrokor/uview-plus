import{o as a,c as s,w as e,a as t,f as n,p as o,t as l,i as c,s as i,g as h}from"./index.639d3d9d.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";var u=r({data:()=>({maxlength:4,value:"",second:3,show:!1,error:!1}),computed:{},onLoad(){let a=setInterval((()=>{this.second--,this.second<=0&&(this.show=!0,4!=this.value.lenth&&(this.error=!0),clearInterval(a))}),1e3)},methods:{noCaptcha(){uni.showActionSheet({itemList:["重新获取验证码","接听语音验证码"],success:function(a){},fail:function(a){}})},change(a){},finish(a){}}},[["render",function(r,u,d,f,p,m){const g=c,_=i("u-message-input"),v=h;return a(),s(g,{class:"wrap"},{default:e((()=>[t(g,{class:"key-input"},{default:e((()=>[t(g,{class:"title"},{default:e((()=>[n("输入验证码")])),_:1}),t(g,{class:"tips"},{default:e((()=>[n("验证码已发送至 +150****9320")])),_:1}),t(_,{focus:!0,value:p.value,onChange:m.change,onFinish:m.finish,mode:"bottomLine",maxlength:p.maxlength},null,8,["value","onChange","onFinish","maxlength"]),t(v,{class:o({error:p.error})},{default:e((()=>[n("验证码错误，请重新输入")])),_:1},8,["class"]),t(g,{class:"captcha"},{default:e((()=>[t(v,{class:o({noCaptcha:p.show}),onClick:m.noCaptcha},{default:e((()=>[n("收不到验证码点这里")])),_:1},8,["class","onClick"]),t(v,{class:o({regain:!p.show})},{default:e((()=>[n(l(p.second)+"秒后重新获取验证码",1)])),_:1},8,["class"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-4cbc66a9"]]);export{u as default};