(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3179"],{"0168":function(s,v,n){"use strict";n.r(v);var a=function(){var s=this;s._self._c;return s._m(0)},_=[function(){var s=this,v=s._self._c;return v("div",[v("h1",[s._v("MiniMap插件")]),v("blockquote",[v("p",[s._v("v0.2.11+")])]),v("p",[s._v("用于帮助快速开发小地图功能，小地图由两部分组成，一个是当前的画布内容，一个是视口框，当缩放、移动、元素过多时画布上可能只显示了思维导图的部分内容，可以通过视口框来查看当前视口所在位置，以及可以通过在小地图上拖动来快速定位。")]),v("h2",[s._v("注册")]),v("pre",{staticClass:"hljs"},[v("code",[v("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),v("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),v("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map'")]),s._v("\n"),v("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MiniMap "),v("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),v("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map/src/plugins/MiniMap.js'")]),s._v("\n"),v("span",{staticClass:"hljs-comment"},[s._v("// import MiniMap from 'simple-mind-map/src/MiniMap.js' v0.6.0以下版本使用该路径")]),s._v("\n\nMindMap.usePlugin(MiniMap)\n")])]),v("p",[s._v("注册完且实例化"),v("code",[s._v("MindMap")]),s._v("后可通过"),v("code",[s._v("mindMap.miniMap")]),s._v("获取到该实例。")]),v("h2",[s._v("方法")]),v("h3",[s._v("calculationMiniMap(boxWidth, boxHeight)")]),v("p",[s._v("计算小地图的渲染数据，该函数内会调用"),v("code",[s._v("getMiniMap()")]),s._v("方法，所以一般使用该函数即可。")]),v("p",[v("code",[s._v("boxWidth")]),s._v("：小地图容器的宽度")]),v("p",[v("code",[s._v("boxHeight")]),s._v("：小地图容器的高度")]),v("p",[s._v("函数返回内容：")]),v("pre",{staticClass:"hljs"},[v("code",[s._v("{\n      getImgUrl,"),v("span",{staticClass:"hljs-comment"},[s._v("// v0.8.0+，一个异步函数，你可以调用该函数，传递一个回调函数，回调函数可以接收一个参数，代表图片类型的小地图，你可以通过img标签进行渲染")]),s._v("\n      svgHTML, "),v("span",{staticClass:"hljs-comment"},[s._v("// 小地图html，推荐使用getImgUrl方式获取图片类型的小地图，减少页面DOM数量，优化性能")]),s._v("\n      viewBoxStyle, "),v("span",{staticClass:"hljs-comment"},[s._v("// 视图框的位置信息")]),s._v("\n      miniMapBoxScale, "),v("span",{staticClass:"hljs-comment"},[s._v("// 视图框的缩放值")]),s._v("\n      miniMapBoxLeft, "),v("span",{staticClass:"hljs-comment"},[s._v("// 视图框的left值")]),s._v("\n      miniMapBoxTop, "),v("span",{staticClass:"hljs-comment"},[s._v("// 视图框的top值")]),s._v("\n}\n")])]),v("p",[s._v("小地图思路：")]),v("p",[s._v("1.准备一个容器元素"),v("code",[s._v("container")]),s._v("，定位不为"),v("code",[s._v("static")])]),v("p",[s._v("如果使用的是富文本编辑模式，那么最好给"),v("code",[s._v("container")]),s._v("内部的元素去除一下默认样式，否则可能会出现节点内文本偏移的问题：")]),v("pre",{staticClass:"hljs"},[v("code",[v("span",{staticClass:"hljs-selector-class"},[s._v(".container")]),s._v(" * {\n  "),v("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),v("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  "),v("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),v("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n}\n")])]),v("p",[s._v("2.在"),v("code",[s._v("container")]),s._v("内创建一个小地图容器元素"),v("code",[s._v("miniMapContainer")]),s._v("，绝对定位")]),v("p",[s._v("3.在"),v("code",[s._v("container")]),s._v("内创建一个视口框元素"),v("code",[s._v("viewBoxContainer")]),s._v("，绝对定位，设置边框样式，过渡属性（可选）")]),v("p",[s._v("4.监听"),v("code",[s._v("data_change")]),s._v("和"),v("code",[s._v("view_data_change")]),s._v("事件，在该事件内调用"),v("code",[s._v("calculationMiniMap")]),s._v("方法获取计算数据，然后将"),v("code",[s._v("svgHTML")]),s._v("渲染到"),v("code",[s._v("miniMapContainer")]),s._v("元素内，并且设置"),v("code",[s._v("miniMapContainer")]),s._v("元素的样式：")]),v("pre",{staticClass:"hljs"},[v("code",[s._v(":style="),v("span",{staticClass:"hljs-string"},[s._v("\"{\n    transform: `scale(${miniMapBoxScale})`,\n    left: miniMapBoxLeft + 'px',\n    top: miniMapBoxTop + 'px',\n}\"")]),s._v("\n")])]),v("p",[s._v("5.将"),v("code",[s._v("viewBoxStyle")]),s._v("对象设置为"),v("code",[s._v("viewBoxContainer")]),s._v("元素的样式")]),v("p",[s._v("到这一步，当画布上的思维导图变化了，小地图也会实时更新，并且视口框元素会实时反映视口在思维导图图形上的位置")]),v("p",[s._v("6.监听"),v("code",[s._v("container")]),s._v("元素的"),v("code",[s._v("mousedown")]),s._v("、"),v("code",[s._v("mousemove")]),s._v("、"),v("code",[s._v("mouseup")]),s._v("事件，分别调用下面即将介绍的三个方法即可实现鼠标拖动时画布上的思维导图也随之拖动的效果")]),v("h3",[s._v("onMousedown(e)")]),v("p",[s._v("小地图鼠标按下事件执行该函数")]),v("p",[v("code",[s._v("e")]),s._v("：事件对象")]),v("h3",[s._v("onMousemove(e, sensitivityNum = 5)")]),v("p",[s._v("小地图鼠标移动事件执行该函数")]),v("p",[v("code",[s._v("e")]),s._v("：事件对象")]),v("p",[v("code",[s._v("sensitivityNum")]),s._v("：拖动灵敏度，灵敏度越大，在小地图上拖动相同距离时实际上的画布拖动距离就越大")]),v("h3",[s._v("onMouseup()")]),v("p",[s._v("小地图鼠标松开事件执行该函数")])])}],i={},t=i,e=n("2877"),o=Object(e["a"])(t,a,_,!1,null,null,null);v["default"]=o.exports}}]);