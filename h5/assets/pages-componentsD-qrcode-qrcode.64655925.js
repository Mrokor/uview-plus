import{o as t,c as e,w as o,a as n,n as r,K as i,L as s,M as u,e as a,i as l,f as h,N as d,g as c,d as f}from"./index-9e9f17ba.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";import{r as m}from"./uni-app.es.bdc9cb81.js";let p={};!function(){function t(t){return t<128?[t]:t<2048?[192+(t>>6),128+(63&t)]:[224+(t>>12),128+(t>>6&63),128+(63&t)]}function e(e,o){this.typeNumber=-1,this.errorCorrectLevel=o,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=e,this.utf8bytes=function(e){for(var o=[],n=0;n<e.length;n++)for(var r=t(e.charCodeAt(n)),i=0;i<r.length;i++)o.push(r[i]);return o}(e),this.make()}e.prototype={constructor:e,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var o=-1;o<=7;o++)if(!(t+o<=-1||this.moduleCount<=t+o))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+o][e+n]=0<=o&&o<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==o||6==o)||2<=o&&o<=4&&2<=n&&n<=4)},createQrcode:function(){for(var t=0,e=0,o=null,n=0;n<8;n++){this.makeImpl(n);var r=d.getLostPoint(this);(0==n||t>r)&&(t=r,e=n,o=this.modules)}this.modules=o,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=d.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var o=0;o<t.length;o++){var n=t[e],r=t[o];if(null==this.modules[n][r])for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)this.modules[n+i][r+s]=-2==i||2==i||-2==s||2==s||0==i&&0==s}},setupTypeNumber:function(t){for(var e=d.getBCHTypeNumber(this.typeNumber),o=0;o<18;o++){var n=!t&&1==(e>>o&1);this.modules[Math.floor(o/3)][o%3+this.moduleCount-8-3]=n,this.modules[o%3+this.moduleCount-8-3][Math.floor(o/3)]=n}},setupTypeInfo:function(t,e){for(var n=o[this.errorCorrectLevel]<<3|e,r=d.getBCHTypeInfo(n),i=0;i<15;i++){var s=!t&&1==(r>>i&1);i<6?this.modules[i][8]=s:i<8?this.modules[i+1][8]=s:this.modules[this.moduleCount-15+i][8]=s;s=!t&&1==(r>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=s:i<9?this.modules[8][15-i-1+1]=s:this.modules[8][15-i-1]=s}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new v,o=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,o);for(var n=0,r=this.utf8bytes.length;n<r;n++)t.put(this.utf8bytes[n],8);for(t.length+4<=8*this.totalDataCount&&t.put(0,4);t.length%8!=0;)t.putBit(!1);for(;!(t.length>=8*this.totalDataCount||(t.put(e.PAD0,8),t.length>=8*this.totalDataCount));)t.put(e.PAD1,8);return this.createBytes(t)},createBytes:function(t){for(var e=0,o=0,n=0,r=this.rsBlock.length/3,i=new Array,s=0;s<r;s++)for(var u=this.rsBlock[3*s+0],a=this.rsBlock[3*s+1],l=this.rsBlock[3*s+2],h=0;h<u;h++)i.push([l,a]);for(var c=new Array(i.length),f=new Array(i.length),m=0;m<i.length;m++){var p=i[m][0],v=i[m][1]-p;o=Math.max(o,p),n=Math.max(n,v),c[m]=new Array(p);for(s=0;s<c[m].length;s++)c[m][s]=255&t.buffer[s+e];e+=p;var y=d.getErrorCorrectPolynomial(v),_=new g(c[m],y.getLength()-1).mod(y);f[m]=new Array(y.getLength()-1);for(s=0;s<f[m].length;s++){var b=s+_.getLength()-f[m].length;f[m][s]=b>=0?_.get(b):0}}var C=new Array(this.totalDataCount),w=0;for(s=0;s<o;s++)for(m=0;m<i.length;m++)s<c[m].length&&(C[w++]=c[m][s]);for(s=0;s<n;s++)for(m=0;m<i.length;m++)s<f[m].length&&(C[w++]=f[m][s]);return C},mapData:function(t,e){for(var o=-1,n=this.moduleCount-1,r=7,i=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var u=0;u<2;u++)if(null==this.modules[n][s-u]){var a=!1;i<t.length&&(a=1==(t[i]>>>r&1)),d.getMask(e,n,s-u)&&(a=!a),this.modules[n][s-u]=a,-1==--r&&(i++,r=7)}if((n+=o)<0||this.moduleCount<=n){n-=o,o=-o;break}}}},e.PAD0=236,e.PAD1=17;for(var o=[1,0,3,2],n=0,r=1,i=2,s=3,u=4,a=5,l=6,h=7,d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;d.getBCHDigit(e)-d.getBCHDigit(d.G15)>=0;)e^=d.G15<<d.getBCHDigit(e)-d.getBCHDigit(d.G15);return(t<<10|e)^d.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;d.getBCHDigit(e)-d.getBCHDigit(d.G18)>=0;)e^=d.G18<<d.getBCHDigit(e)-d.getBCHDigit(d.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return d.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case n:return(e+o)%2==0;case r:return e%2==0;case i:return o%3==0;case s:return(e+o)%3==0;case u:return(Math.floor(e/2)+Math.floor(o/3))%2==0;case a:return e*o%2+e*o%3==0;case l:return(e*o%2+e*o%3)%2==0;case h:return(e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new g([1],0),o=0;o<t;o++)e=e.multiply(new g([1,c.gexp(o)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),o=0,n=0,r=0;r<e;r++)for(var i=0,s=t.modules[r][0],u=0;u<e;u++){var a=t.modules[r][u];if(u<e-6&&a&&!t.modules[r][u+1]&&t.modules[r][u+2]&&t.modules[r][u+3]&&t.modules[r][u+4]&&!t.modules[r][u+5]&&t.modules[r][u+6]&&(u<e-10?t.modules[r][u+7]&&t.modules[r][u+8]&&t.modules[r][u+9]&&t.modules[r][u+10]&&(o+=40):u>3&&t.modules[r][u-1]&&t.modules[r][u-2]&&t.modules[r][u-3]&&t.modules[r][u-4]&&(o+=40)),r<e-1&&u<e-1){var l=0;a&&l++,t.modules[r+1][u]&&l++,t.modules[r][u+1]&&l++,t.modules[r+1][u+1]&&l++,0!=l&&4!=l||(o+=3)}s^a?i++:(s=a,i>=5&&(o+=3+i-5),i=1),a&&n++}for(u=0;u<e;u++)for(i=0,s=t.modules[0][u],r=0;r<e;r++){a=t.modules[r][u];r<e-6&&a&&!t.modules[r+1][u]&&t.modules[r+2][u]&&t.modules[r+3][u]&&t.modules[r+4][u]&&!t.modules[r+5][u]&&t.modules[r+6][u]&&(r<e-10?t.modules[r+7][u]&&t.modules[r+8][u]&&t.modules[r+9][u]&&t.modules[r+10][u]&&(o+=40):r>3&&t.modules[r-1][u]&&t.modules[r-2][u]&&t.modules[r-3][u]&&t.modules[r-4][u]&&(o+=40)),s^a?i++:(s=a,i>=5&&(o+=3+i-5),i=1)}return o+=10*(Math.abs(100*n/e/e-50)/5)}},c={glog:function(t){if(t<1)throw new Error("glog("+t+")");return c.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return c.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},f=0;f<8;f++)c.EXP_TABLE[f]=1<<f;for(f=8;f<256;f++)c.EXP_TABLE[f]=c.EXP_TABLE[f-4]^c.EXP_TABLE[f-5]^c.EXP_TABLE[f-6]^c.EXP_TABLE[f-8];for(f=0;f<255;f++)c.LOG_TABLE[c.EXP_TABLE[f]]=f;function g(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var o=0;o<t.length&&0==t[o];)o++;this.num=new Array(t.length-o+e);for(var n=0;n<t.length-o;n++)this.num[n]=t[n+o]}g.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var n=0;n<t.getLength();n++)e[o+n]^=c.gexp(c.glog(this.get(o))+c.glog(t.get(n)));return new g(e,0)},mod:function(t){var e=this.getLength(),o=t.getLength();if(e-o<0)return this;for(var n=new Array(e),r=0;r<e;r++)n[r]=this.get(r);for(;n.length>=o;){var i=c.glog(n[0])-c.glog(t.get(0));for(r=0;r<t.getLength();r++)n[r]^=c.gexp(c.glog(t.get(r))+i);for(;0==n[0];)n.shift()}return new g(n,0)}};var m=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function v(){this.buffer=new Array,this.length=0}e.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=m[4*(t-1)+this.errorCorrectLevel];if(null==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var o=e.length/3,n=0,r=0;r<o;r++){var i=e[3*r+0];n+=e[3*r+2]*i}var s=t>9?2:1;if(this.utf8bytes.length+s<n||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=n;break}}},v.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var o=0;o<e;o++)this.putBit(t>>>e-o-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};let y=[];p=function(t){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:t.canvasId,context:t.context,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText},"string"==typeof t&&(t={text:t}),t)for(var o in t)this.options[o]=t[o];for(var n=null,r=(o=0,y.length);o<r;o++)if(y[o].text==this.options.text&&y[o].text.correctLevel==this.options.correctLevel){n=y[o].obj;break}o==r&&(n=new e(this.options.text,this.options.correctLevel),y.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:n}));let i=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground};!function(t){t.showLoading&&uni.showLoading({title:t.loadingText,mask:!0});for(var e=uni.createCanvasContext(t.canvasId,t.context),o=n.getModuleCount(),r=t.size,u=t.imageSize,a=(r/o).toPrecision(4),l=(r/o).toPrecision(4),h=0;h<o;h++)for(var d=0;d<o;d++){var c=Math.ceil((d+1)*a)-Math.floor(d*a),f=Math.ceil((h+1)*a)-Math.floor(h*a),g=i({row:h,col:d,count:o,options:t});e.setFillStyle(n.modules[h][d]?g:t.background),e.fillRect(Math.round(d*a),Math.round(h*l),c,f)}if(t.image){let o=function(e,o,n,r,i,s,u,a,l){e.setLineWidth(u),e.setFillStyle(t.background),e.setStrokeStyle(t.background),e.beginPath(),e.moveTo(o+s,n),e.arcTo(o+r,n,o+r,n+s,s),e.arcTo(o+r,n+i,o+r-s,n+i,s),e.arcTo(o,n+i,o,n+i-s,s),e.arcTo(o,n,o+s,n,s),e.closePath(),a&&e.fill(),l&&e.stroke()};var m=Number(((r-u)/2).toFixed(2)),p=Number(((r-u)/2).toFixed(2));o(e,m,p,u,u,2,6,!0,!0),e.drawImage(t.image,m,p,u,u)}setTimeout((()=>{e.draw(!0,(()=>{setTimeout((()=>{uni.canvasToTempFilePath({width:t.width,height:t.height,destWidth:t.width,destHeight:t.height,canvasId:t.canvasId,quality:Number(1),success:function(e){t.cbResult&&(s(e.tempFilePath)?s(e.apFilePath)?t.cbResult(e.tempFilePath):t.cbResult(e.apFilePath):t.cbResult(e.tempFilePath))},fail:function(e){t.cbResult&&t.cbResult(e)},complete:function(){uni.hideLoading()}},t.context)}),t.text.length+100)}))}),t.usingComponents?0:150)}(this.options);let s=function(t){let e=typeof t,o=!1;return"number"==e&&""==String(t)||"undefined"==e?o=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(o=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(o=!0):"function"==e&&(o=!1),o}},p.prototype.clear=function(t){var e=uni.createCanvasContext(this.options.canvasId,this.options.context);e.clearRect(0,0,this.options.size,this.options.size),e.draw(!1,(()=>{t&&t()}))}}();const v=p;let y;const _=g({name:"u-qrcode",props:{cid:{type:String,default:"u-qrcode-canvas"+Math.random().toString()},size:{type:Number,default:200},unit:{type:String,default:"px"},show:{type:Boolean,default:!0},val:{type:String,default:""},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},icon:{type:String,default:""},iconSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!0},loadMake:{type:Boolean,default:!0},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},loadingText:{type:String,default:"二维码生成中"}},data:()=>({result:""}),methods:{_makeCode(){let t=this;this._empty(this.val)?uni.showToast({title:"二维码内容不能为空",icon:"none",duration:2e3}):y=new v({context:t,canvasId:t.cid,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText,text:t.val,size:t.size,background:t.background,foreground:t.foreground,pdground:t.pdground,correctLevel:t.lv,image:t.icon,imageSize:t.iconSize,cbResult:function(e){t._result(e)}})},_clearCode(){this._result(""),y.clear()},_saveCode(){let t=this;""!=this.result&&uni.saveImageToPhotosAlbum({filePath:t.result,success:function(){uni.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result(t){this.result=t,this.$emit("result",t)},_empty(t){let e=typeof t,o=!1;return"number"==e&&""==String(t)||"undefined"==e?o=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(o=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(o=!0):"function"==e&&(o=!1),o}},watch:{size:function(t,e){t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout((()=>{this._makeCode()}),100))},val:function(t,e){this.onval&&(t==e||this._empty(t)||setTimeout((()=>{this._makeCode()}),0))}},computed:{},mounted:function(){this.loadMake&&(this._empty(this.val)||setTimeout((()=>{this._makeCode()}),0))}},[["render",function(h,d,c,f,g,m){const p=u,v=a,y=l;return t(),e(y,{class:"u-qrcode"},{default:o((()=>[n(p,{class:"u-qrcode__canvas","canvas-id":c.cid,style:r({width:c.size+c.unit,height:c.size+c.unit})},null,8,["canvas-id","style"]),i(n(v,{src:g.result,style:r({width:c.size+c.unit,height:c.size+c.unit})},null,8,["src","style"]),[[s,c.show]])])),_:1})}],["__scopeId","data-v-3ebf37ac"]]),b=""+new URL("logo-8d54bbeb.png",import.meta.url).href,C={__name:"qrcode",setup:r=>(r,i)=>{const s=c,u=m(f("up-qrcode"),_),a=l;return t(),e(a,{class:"u-page"},{default:o((()=>[n(a,{class:"u-page__item"},{default:o((()=>[n(s,{class:"u-page__item__title",style:{"margin-top":"0"}},{default:o((()=>[h("不带logo")])),_:1}),n(a,{class:"u-page__item__content"},{default:o((()=>[n(u,{cid:"up-"+Date.now(),size:200,val:"uview-plus"},null,8,["cid"])])),_:1})])),_:1}),n(a,{class:"u-page__item"},{default:o((()=>[n(s,{class:"u-page__item__title",style:{"margin-top":"0"}},{default:o((()=>[h("带logo")])),_:1}),n(a,{class:"u-page__item__content"},{default:o((()=>[n(u,{cid:"up-"+Date.now(),size:200,val:"uview-plus",icon:d(b)},null,8,["cid","icon"])])),_:1})])),_:1}),n(a,{class:"u-page__item"},{default:o((()=>[n(s,{class:"u-page__item__title",style:{"margin-top":"0"}},{default:o((()=>[h("二维码颜色")])),_:1}),n(a,{class:"u-page__item__content"},{default:o((()=>[n(u,{cid:"up-"+Date.now(),size:200,val:"uview-plus",background:"red",foreground:"blue"},null,8,["cid"])])),_:1})])),_:1})])),_:1})}};export{C as default};