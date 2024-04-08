(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{550:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"下载安装方式配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载安装方式配置"}},[s._v("#")]),s._v(" 下载安装方式配置")]),s._v(" "),t("h3",{attrs:{id:"关于scss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于scss"}},[s._v("#")]),s._v(" 关于SCSS")]),s._v(" "),t("p",[s._v("uview-plus依赖SCSS，您必须要安装此插件，否则无法正常运行。")]),s._v(" "),t("ul",[t("li",[s._v("如果您的项目是由"),t("code",[s._v("HBuilder X")]),s._v('创建的，相信已经安装scss插件，如果没有，请在HX菜单的 工具->插件安装中找到"scss/sass编译"插件进行安装，\n如不生效，重启HX即可')]),s._v(" "),t("li",[s._v("如果您的项目是由"),t("code",[s._v("vue-cli")]),s._v("创建的，请通过以下命令安装对sass(scss)的支持，如果已安装，请略过。")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装sass")]),s._v("\nnpm i sass "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装sass-loader")]),s._v("\nnpm i sass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("loader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n")])])]),t("h3",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("p",[s._v("在进行配置之前，请确保您已经根据"),t("RouterLink",{attrs:{to:"/components/install.html"}},[s._v("安装")]),s._v("中的步骤对uview-plus进行了下载安装，如果没有，请先下载安装。")],1),s._v(" "),t("h3",{attrs:{id:"配置步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置步骤"}},[s._v("#")]),s._v(" 配置步骤")]),s._v(" "),t("h4",{attrs:{id:"引入uview-plus主js库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入uview-plus主js库"}},[s._v("#")]),s._v(" 引入uview-plus主JS库")]),s._v(" "),t("p",[s._v("在项目根目录中的"),t("code",[s._v("main.js")]),s._v("中，引入并使用uview-plus的JS库，注意这两行要放在"),t("code",[s._v("const app = createSSRApp(App)")]),s._v("之后。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" uviewPlus "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/uni_modules/uview-plus'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// #ifdef VUE3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" createSSRApp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createApp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createSSRApp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uviewPlus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    app\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// #endif")]),s._v("\n")])])]),t("h4",{attrs:{id:"在引入uview-plus的全局scss主题文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在引入uview-plus的全局scss主题文件"}},[s._v("#")]),s._v(" 在引入uview-plus的全局SCSS主题文件")]),s._v(" "),t("p",[s._v("在项目根目录的"),t("code",[s._v("uni.scss")]),s._v("中引入此文件。")]),s._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* uni.scss */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/uni_modules/uview-plus/theme.scss'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n")])])]),t("h4",{attrs:{id:"引入uview-plus基础样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入uview-plus基础样式"}},[s._v("#")]),s._v(" 引入uview-plus基础样式")]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("注意！")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("App.vue")]),s._v("中"),t("strong",[s._v("首行")]),s._v('的位置引入，注意给style标签加入lang="scss"属性')])]),s._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("<style lang="),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scss"')]),s._v(">\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@/uni_modules/uview-plus/index.scss"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n</style>\n")])])]),t("h4",{attrs:{id:"安装依赖库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖库"}},[s._v("#")]),s._v(" 安装依赖库")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm i dayjs\nnpm i clipboard\n")])])]),s._v(" "),t("h4",{attrs:{id:"配置easycom组件模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置easycom组件模式"}},[s._v("#")]),s._v(" 配置easycom组件模式")]),s._v(" "),t("p",[s._v("此配置需要在项目根目录的"),t("code",[s._v("pages.json")]),s._v("中进行。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("温馨提示")]),s._v(" "),t("ol",[t("li",[s._v("uni-app为了调试性能的原因，修改"),t("code",[s._v("easycom")]),s._v("规则不会实时生效，配置完后，您需要重启HX或者重新编译项目才能正常使用uview-plus的功能。")]),s._v(" "),t("li",[s._v("请确保您的"),t("code",[s._v("pages.json")]),s._v("中只有一个"),t("code",[s._v("easycom")]),s._v("字段，否则请自行合并多个引入规则。")])])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pages.json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"custom"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"^u--(.*)"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@/uni_modules/uview-plus/components/u-$1/u-$1.vue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"^up-(.*)"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@/uni_modules/uview-plus/components/u-$1/u-$1.vue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"^u-([^-].*)"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@/uni_modules/uview-plus/components/u-$1/u-$1.vue"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此为本身已有的内容")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pages"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ......")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h4",{attrs:{id:"typescript支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typescript支持"}},[s._v("#")]),s._v(" typescript支持")]),s._v(" "),t("p",[s._v('方式1: 参考https://www.npmjs.com/package/@ttou/uview-typings\n方式2: 定义declare module "uview-plus"')])])}),[],!1,null,null,null);t.default=n.exports}}]);