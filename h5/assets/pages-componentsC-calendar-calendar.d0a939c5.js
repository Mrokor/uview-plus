import{_ as o}from"./u-navbar.99aa1db1.js";import{o as e,c as t,w as n,i as s,a as l,b as i,r as a,F as r,d as c,e as u}from"./index-bef755ee.js";import{r as m}from"./uni-app.es.e66cf3cd.js";import{_ as d}from"./u-cell.df84dd47.js";import{_ as h}from"./u-cell-group.62c9ce88.js";import{_ as f}from"./u-calendar.626bd848.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-status-bar.6271526f.js";import"./u-icon.e61eca7c.js";import"./u-line.ec122211.js";import"./u-button.a186dc5f.js";import"./u-loading-icon.a48c0ebf.js";import"./u-popup.e7068d77.js";import"./u-overlay.65b35ee6.js";import"./u-transition.8716e1e4.js";import"./u-safe-bottom.72868961.js";import"./index.a605aec4.js";const p=w({data(){const o=new Date,e=o.getFullYear();let t=o.getMonth()+1;t=t<10?`0${t}`:t;const n=o.getDate();return{index:0,show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,show6:!1,show7:!1,show8:!1,show9:!1,values:["","","","","","","",""],customThemeDefaultDate:[`${e}-${t}-${n}`,`${e}-${t}-${n+5}`],customTextDefaultDate:[`${e}-${t}-${n}`],minDate:"2022-08-09",maxDate:`${e}-${t}-${n+10}`,defaultDateMultiple:[`${e}-${t}-${n}`,`${e}-${t}-${n+1}`,`${e}-${t}-${n+2}`],list:[{title:"单个日期",iconUrl:"https://cdn.uviewui.com/uview/demo/calendar/7.png"},{title:"多个日期",iconUrl:"https://cdn.uviewui.com/uview/demo/calendar/8.png"},{title:"日期范围",iconUrl:"https://cdn.uviewui.com/uview/demo/calendar/9.png"},{title:"自定义主题颜色",iconUrl:"https://cdn.uviewui.com/uview/demo/calendar/15.png"},{title:"自定义文案",iconUrl:"https://cdn.uviewui.com/uview/demo/calendar/14.png"},{title:"日期最大范围",iconUrl:"https://cdn.uviewui.com/uview/demo/calendar/13.png"},{title:"显示农历",iconUrl:"https://cdn.uviewui.com/uview/demo/calendar/5.png"},{title:"默认日期",iconUrl:"https://cdn.uviewui.com/uview/demo/calendar/10.png"},{title:"日期最小范围",iconUrl:"https://cdn.uviewui.com/uview/demo/calendar/10.png"}]}},methods:{showCalendar(o){this.index=o+1,this[`show${o+1}`]=!0},navigateBack(){uni.navigateBack()},confirm(o){switch(this[`show${this.index}`]=!1,console.log(o),this.index-1){case 0:case 5:case 6:this.values[this.index-1]=o[0];break;case 1:case 7:o.forEach(((o,e)=>{0===e?this.values[this.index-1]=o:this.values[this.index-1]+=";"+o}));break;case 2:case 3:case 4:this.values[this.index-1]=o[0]+"~"+o[o.length-1]}},close(){this[`show${this.index}`]=!1},formatter(o){const e=new Date;let t=e.getMonth()+1;const n=e.getDate();return o.month==t&&o.day==n+3&&(o.bottomInfo="有优惠",o.dot=!0),o}}},[["render",function(w,p,C,D,v,g){const x=m(c("up-navbar"),o),$=u,j=m(c("up-cell"),d),b=m(c("up-cell-group"),h),_=m(c("up-calendar"),f),k=s;return e(),t(k,{class:"u-page"},{default:n((()=>[l(x,{title:"日历",onLeftClick:g.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),l(b,null,{default:n((()=>[(e(!0),i(r,null,a(v.list,((o,s)=>(e(),t(j,{onClick:o=>g.showCalendar(s),title:o.title,key:s,label:v.values[s],isLink:""},{default:n((()=>[l($,{slot:"icon",class:"u-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title","label"])))),128))])),_:1}),l(_,{show:v.show1,defaultDate:"2022-02-15",onConfirm:g.confirm,onClose:g.close},null,8,["show","onConfirm","onClose"]),l(_,{show:v.show2,mode:"multiple",defaultDate:["2022-03-01"],onConfirm:g.confirm,onClose:g.close},null,8,["show","onConfirm","onClose"]),l(_,{show:v.show3,mode:"range",onConfirm:g.confirm,onClose:g.close},null,8,["show","onConfirm","onClose"]),l(_,{show:v.show4,mode:"range",onConfirm:g.confirm,onClose:g.close,color:"#f56c6c",defaultDate:v.customThemeDefaultDate},null,8,["show","onConfirm","onClose","defaultDate"]),l(_,{show:v.show5,mode:"range",onConfirm:g.confirm,onClose:g.close,defaultDate:v.customTextDefaultDate,startText:"住店",endText:"离店",confirmDisabledText:"请选择离店日期",formatter:g.formatter},null,8,["show","onConfirm","onClose","defaultDate","formatter"]),l(_,{show:v.show6,onConfirm:g.confirm,onClose:g.close,maxDate:v.maxDate},null,8,["show","onConfirm","onClose","maxDate"]),l(_,{show:v.show7,onConfirm:g.confirm,onClose:g.close,showLunar:""},null,8,["show","onConfirm","onClose"]),l(_,{show:v.show8,onConfirm:g.confirm,onClose:g.close,mode:"multiple",defaultDate:v.defaultDateMultiple},null,8,["show","onConfirm","onClose","defaultDate"]),l(_,{show:v.show9,onConfirm:g.confirm,onClose:g.close,minDate:v.minDate,maxDate:"2023-07-05",defaultDate:"2022-09-09"},null,8,["show","onConfirm","onClose","minDate"])])),_:1})}],["__scopeId","data-v-7302d033"]]);export{p as default};