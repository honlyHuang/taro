(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1740:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},1741:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},1742:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=s(r),j=n,u=p["".concat(l,".").concat(j)]||p[j]||O[j]||c;return r?a.a.createElement(u,b(b({ref:t},i),{},{components:r})):a.a.createElement(u,b({ref:t},i))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=j;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var i=2;i<c;i++)l[i]=r[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}j.displayName="MDXCreateElement"},268:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(1740),a=r(1741),c=(r(0),r(1742)),l={title:"selectorQuery.selectAll(selector)",sidebar_label:"selectorQuery.selectAll"},b={unversionedId:"apis/interface/wxml/selectorQuery_selectAll",id:"version-1.x/apis/interface/wxml/selectorQuery_selectAll",isDocsHomePage:!1,title:"selectorQuery.selectAll(selector)",description:"\u5728\u5f53\u524d\u9875\u9762\u4e0b\u9009\u62e9\u5339\u914d\u9009\u62e9\u5668 selector \u7684\u8282\u70b9\uff0c\u8fd4\u56de\u4e00\u4e2a NodesRef \u5bf9\u8c61\u5b9e\u4f8b\u3002 \u4e0e selectorQuery.selectNode(selector) \u4e0d\u540c\u7684\u662f\uff0c\u5b83\u9009\u62e9\u6240\u6709\u5339\u914d\u9009\u62e9\u5668\u7684\u8282\u70b9\u3002",source:"@site/versioned_docs/version-1.x/apis/interface/wxml/selectorQuery_selectAll.md",slug:"/apis/interface/wxml/selectorQuery_selectAll",permalink:"/taro/docs/1.x/apis/interface/wxml/selectorQuery_selectAll",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/interface/wxml/selectorQuery_selectAll.md",version:"1.x",sidebar_label:"selectorQuery.selectAll",sidebar:"version-1.x/API",previous:{title:"selectorQuery.select(selector)",permalink:"/taro/docs/1.x/apis/interface/wxml/selectorQuery_select"},next:{title:"selectorQuery.selectViewport()",permalink:"/taro/docs/1.x/apis/interface/wxml/selectorQuery_selectViewport"}},o=[{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5728\u5f53\u524d\u9875\u9762\u4e0b\u9009\u62e9\u5339\u914d\u9009\u62e9\u5668 selector \u7684\u8282\u70b9\uff0c\u8fd4\u56de\u4e00\u4e2a NodesRef \u5bf9\u8c61\u5b9e\u4f8b\u3002 \u4e0e selectorQuery.selectNode(selector) \u4e0d\u540c\u7684\u662f\uff0c\u5b83\u9009\u62e9\u6240\u6709\u5339\u914d\u9009\u62e9\u5668\u7684\u8282\u70b9\u3002"),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"selectorQuery.in"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"selectorQuery.select"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"selectorQuery.selectAll"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"selectorQuery.selectViewport"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nodesRef.boundingClientRect"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nodesRef.scrollOffset"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"nodesRef.fields"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"selectorQuery.exec"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);