(window.webpackJsonp=window.webpackJsonp||[]).push([[792],{1740:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},1741:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},b=Object.keys(t);for(r=0;r<b.length;r++)n=b[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,"a",(function(){return r}))},1742:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return d}));var r=n(0),a=n.n(r);function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},b=Object.keys(t);for(r=0;r<b.length;r++)n=b[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(r=0;r<b.length;r++)n=b[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=a.a.createContext({}),u=function(t){var e=a.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return a.a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},O=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,b=t.originalType,c=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),s=u(n),O=r,d=s["".concat(c,".").concat(O)]||s[O]||p[O]||b;return n?a.a.createElement(d,l(l({ref:e},i),{},{components:n})):a.a.createElement(d,l({ref:e},i))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var b=n.length,c=new Array(b);c[0]=O;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:r,c[1]=l;for(var i=2;i<b;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},857:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return o})),n.d(e,"default",(function(){return u}));var r=n(1740),a=n(1741),b=(n(0),n(1742)),c={title:"Taro.setTabBarItem(option)",sidebar_label:"setTabBarItem"},l={unversionedId:"apis/ui/tab-bar/setTabBarItem",id:"version-2.x/apis/ui/tab-bar/setTabBarItem",isDocsHomePage:!1,title:"Taro.setTabBarItem(option)",description:"\u52a8\u6001\u8bbe\u7f6e tabBar \u67d0\u4e00\u9879\u7684\u5185\u5bb9\uff0c2.7.0 \u8d77\u56fe\u7247\u652f\u6301\u4e34\u65f6\u6587\u4ef6\u548c\u7f51\u7edc\u6587\u4ef6\u3002",source:"@site/versioned_docs/version-2.x/apis/ui/tab-bar/setTabBarItem.md",slug:"/apis/ui/tab-bar/setTabBarItem",permalink:"/taro/docs/2.x/apis/ui/tab-bar/setTabBarItem",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/ui/tab-bar/setTabBarItem.md",version:"2.x",sidebar_label:"setTabBarItem",sidebar:"version-2.x/API",previous:{title:"Taro.setTabBarStyle(option)",permalink:"/taro/docs/2.x/apis/ui/tab-bar/setTabBarStyle"},next:{title:"Taro.setTabBarBadge(option)",permalink:"/taro/docs/2.x/apis/ui/tab-bar/setTabBarBadge"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u52a8\u6001\u8bbe\u7f6e tabBar \u67d0\u4e00\u9879\u7684\u5185\u5bb9\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"2.7.0")," \u8d77\u56fe\u7247\u652f\u6301\u4e34\u65f6\u6587\u4ef6\u548c\u7f51\u7edc\u6587\u4ef6\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"option"},"Option"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"index"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(b.b)("td",null,"tabBar \u7684\u54ea\u4e00\u9879\uff0c\u4ece\u5de6\u8fb9\u7b97\u8d77")),Object(b.b)("tr",null,Object(b.b)("td",null,"complete"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(b.b)("tr",null,Object(b.b)("td",null,"fail"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"iconPath"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u56fe\u7247\u8def\u5f84\uff0cicon \u5927\u5c0f\u9650\u5236\u4e3a 40kb\uff0c\u5efa\u8bae\u5c3a\u5bf8\u4e3a 81px * 81px\uff0c\u5f53 postion \u4e3a top \u65f6\uff0c\u6b64\u53c2\u6570\u65e0\u6548")),Object(b.b)("tr",null,Object(b.b)("td",null,"selectedIconPath"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u9009\u4e2d\u65f6\u7684\u56fe\u7247\u8def\u5f84\uff0cicon \u5927\u5c0f\u9650\u5236\u4e3a 40kb\uff0c\u5efa\u8bae\u5c3a\u5bf8\u4e3a 81px * 81px \uff0c\u5f53 postion \u4e3a top \u65f6\uff0c\u6b64\u53c2\u6570\u65e0\u6548")),Object(b.b)("tr",null,Object(b.b)("td",null,"success"),Object(b.b)("td",null,Object(b.b)("code",null,"(res: CallbackResult) => void")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",null,Object(b.b)("td",null,"text"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"tab \u4e0a\u7684\u6309\u94ae\u6587\u5b57")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.setTabBarItem({\n  index: 0,\n  text: 'text',\n  iconPath: '/path/to/iconPath',\n  selectedIconPath: '/path/to/selectedIconPath'\n})\n")),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.setTabBarItem"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);