(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)r=o[d],i[r]&&v.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},"36df":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],r=(a("034f"),a("2877")),o={},c=Object(r["a"])(o,i,s,!1,null,null,null),l=c.exports,u=a("bc3a"),d=a.n(u),v=(a("0cc8"),a("3104")),p=(a("c194"),a("7744")),f=(a("0653"),a("34e9")),m=(a("2994"),a("2bdd")),b=(a("c3a6"),a("ad06")),g=(a("da3c"),a("0b33")),h=(a("bda7"),a("5e46")),x=(a("09d3"),a("2d6d")),_=(a("61ae"),a("d314")),w=(a("537a"),a("ac28")),k=(a("a52c"),a("2ed4")),C=(a("7844"),a("5596")),I=(a("4b0a"),a("2bb1")),y=(a("66b9"),a("b650")),j=(a("0500"),a("4feb")),M=(a("3df5"),a("2830")),O=(a("0ec5"),a("21ab")),S=function(){n["a"].use(M["a"]).use(O["a"]),n["a"].use(j["a"]),n["a"].use(y["a"]),n["a"].use(C["a"]).use(I["a"]),n["a"].use(w["a"]).use(k["a"]),n["a"].use(x["a"]).use(_["a"]),n["a"].use(g["a"]).use(h["a"]),n["a"].use(b["a"]),n["a"].use(m["a"]),n["a"].use(p["a"]).use(f["a"]),n["a"].use(v["a"])},T=a("8c4f"),Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view"),a("van-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tabbar-item",{attrs:{url:"#/Tabbar/home",icon:"home-o"}},[t._v("首页")]),a("van-tabbar-item",{attrs:{url:"#/Tabbar/find",icon:"search"}},[t._v("发现")]),a("van-tabbar-item",{attrs:{url:"#/Tabbar/order",icon:"friends-o"}},[t._v("订单")]),a("van-tabbar-item",{attrs:{url:"#/Tabbar/mine",icon:"setting-o"}},[t._v("我的")])],1)],1)},L=[],N={data:function(){return{active:0}}},P=N,z=Object(r["a"])(P,Z,L,!1,null,null,null),D=z.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"index-JMUSj_0"},[a("div",{staticClass:"index-1DPx9_0"},[a("div",{staticClass:"index-2S5Ah_0",attrs:{"aria-label":"当前地址：千峰教育公司，轻点两下重新选择",role:"button","data-spm-anchor-id":"a2ogi.12117543.0.i0"}},[a("svg",{staticClass:"index-okfdP_0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 31"}},[a("path",{attrs:{fill:"#FFF","fill-rule":"evenodd",d:"M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"}})]),a("span",{staticClass:"index-2uW_v_0",attrs:{"data-spm-anchor-id":"a2ogi.12117543.0.i3"}},[t._v("千峰教育公司")]),a("svg",{staticClass:"index-2iXz3_0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 8"}},[a("path",{attrs:{fill:"#FFF","fill-rule":"evenodd",d:"M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"}})])])])]),a("div",{staticClass:"search",attrs:{role:"button"}},[a("a",{staticClass:"content"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-opacity":".38",d:"M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"}})]),a("span",[t._v("搜索饿了么商家、商品名称")])])]),a("div",[a("van-swipe",{attrs:{loop:!1,"indicator-color":"#fe7100"}},[a("van-swipe-item",[a("div",[a("van-grid",{attrs:{"column-num":5}},t._l(t.kingkongListComputed,function(t,e){return a("van-grid-item",{key:e,attrs:{icon:t.link,text:t.name}})}),1)],1)]),a("van-swipe-item",[a("div",[a("van-grid",{attrs:{"column-num":5}},t._l(t.kingkongListComputed2,function(t,e){return a("van-grid-item",{key:e,attrs:{icon:t.link,text:t.name}})}),1)],1)])],1),t._m(0)],1),a("div",[a("div",{staticClass:"shoplist-title",attrs:{id:"shoplist-title"}},[t._v("推荐商家")]),a("van-sticky",{attrs:{"offset-top":51.01}},[a("van-dropdown-menu",[a("van-dropdown-item",{attrs:{options:t.option},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("van-dropdown-item",{attrs:{disabled:"",title:"距离最近","title-class":"nochanges"}}),a("van-dropdown-item",{attrs:{disabled:"",title:"品质联盟","title-class":"nochanges"}}),a("van-dropdown-item",{ref:"item",attrs:{title:"筛选"}},[a("van-switch-cell",{attrs:{title:"包邮"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}}),a("van-switch-cell",{attrs:{title:"团购"},model:{value:t.switch2,callback:function(e){t.switch2=e},expression:"switch2"}}),a("van-button",{attrs:{block:"",type:"info"},on:{click:t.onConfirm}},[t._v("确认")])],1)],1)],1),a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(t){return a("van-cell",{key:t,attrs:{title:t}})}),1)],1)])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"index-1ECZ3_0"},[a("section",{staticClass:"index-1y1Q5_0",attrs:{id:"activity-lego"}},[a("div",{staticClass:"index-3xB2N_0"},[a("div",{staticClass:"index-Q3GS5_0 index-1xT5J_0"},[a("h3",{staticClass:"index-1qvN6_0",attrs:{"scan-data":"{item.title}"}},[t._v("品质套餐")]),a("div",{staticClass:"index-2W67h_0"},[t._v("搭配齐全吃得好")]),a("div",{staticClass:"index-1DFa7_0"},[t._v("立即抢购 >\n              ")]),a("img",{attrs:{src:"https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"}})])])]),a("div",{staticClass:"index-3eoZ-_0"},[a("div",{staticClass:"index-3M-d6_0"},[a("img",{staticClass:"index-1QvOZ_0",attrs:{alt:"",src:"https://fuss10.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?imageMogr/format/webp/thumbnail/34x/"}}),a("span",{staticClass:"index-M9mXY_0"},[t._v("超级会员")]),a("span",{staticClass:"index-tO6Fz_0"},[a("b"),t._v("每月领20元红包")])]),a("a",{staticClass:"index-1-R5E_0",attrs:{href:"javascript:","ubt-click":"101933","ubt-data-type":"1"}},[a("b",{staticClass:"index-4F0aw_0"}),t._v("立即开通")])])]),a("div",{staticClass:"backtop BackTop-wrapper_3XDbcaq",staticStyle:{display:"none"}},[a("img",{staticClass:"BackTop-icon_2Js4K94",attrs:{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+"}})])])}],B=(a("ac6a"),a("96cf"),a("3b8d")),J={data:function(){return{kingkongList:[],active:0,value:0,switch1:!1,switch2:!1,option:[{text:"综合排序",value:0},{text:"好评优先",value:1},{text:"销量最高",value:2},{text:"起送价最低",value:3},{text:"配送最快",value:4},{text:"配送费最低",value:5}],list:[],loading:!1,finished:!1}},computed:{kingkongListComputed:function(){return this.kingkongList.slice(0,10)},kingkongListComputed2:function(){return this.kingkongList.slice(10)}},created:function(){var t=Object(B["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("https://www.easy-mock.com/mock/5d4041cad3d96f3926d5d9fc/nav/nav");case 2:e=t.sent,this.kingkongList=e.data[0].entries;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{onConfirm:function(){this.$refs.item.toggle()},onLoad:function(){var t=this;setTimeout(function(){for(var e=0;e<10;e++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},500)}}},R=J,W=(a("9259"),Object(r["a"])(R,H,E,!1,null,null,null)),F=W.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("发现")])},Q=[],U={},$=Object(r["a"])(U,G,Q,!1,null,null,null),Y=$.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("我的")])},K=[],X={},q=Object(r["a"])(X,A,K,!1,null,null,null),V=q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("订单页")])},et=[],at={},nt=Object(r["a"])(at,tt,et,!1,null,null,null),it=nt.exports;n["a"].prototype.$axios=d.a,S(),n["a"].use(T["a"]);var st=[{path:"/tabbar",component:D,children:[{path:"home",component:F},{path:"find",component:Y},{path:"mine",component:V},{path:"order",component:it}]}],rt=new T["a"]({routes:st});n["a"].config.productionTip=!1,new n["a"]({router:rt,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,a){},9259:function(t,e,a){"use strict";var n=a("36df"),i=a.n(n);i.a}});
//# sourceMappingURL=app.8e17bb50.js.map