(window.webpackJsonp=window.webpackJsonp||[]).push([[759],{1736:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},1737:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}a.d(t,"a",(function(){return n}))},1738:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=l.a.createContext({}),u=function(e){var t=l.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=u(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),O=n,j=d["".concat(c,".").concat(O)]||d[O]||i[O]||r;return a?l.a.createElement(j,b(b({ref:t},p),{},{components:a})):l.a.createElement(j,b({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var p=2;p<r;p++)c[p]=a[p];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},824:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(1736),l=a(1737),r=(a(0),a(1738)),c={title:"UpdateManager",sidebar_label:"UpdateManager"},b={unversionedId:"apis/base/update/UpdateManager",id:"apis/base/update/UpdateManager",isDocsHomePage:!1,title:"UpdateManager",description:"UpdateManager \u5bf9\u8c61\uff0c\u7528\u6765\u7ba1\u7406\u66f4\u65b0\uff0c\u53ef\u901a\u8fc7 Taro.getUpdateManager \u63a5\u53e3\u83b7\u53d6\u5b9e\u4f8b\u3002",source:"@site/docs/apis/base/update/UpdateManager.md",slug:"/apis/base/update/UpdateManager",permalink:"/taro/docs/next/apis/base/update/UpdateManager",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/update/UpdateManager.md",version:"current",sidebar_label:"UpdateManager",sidebar:"API",previous:{title:"Taro.getUpdateManager()",permalink:"/taro/docs/next/apis/base/update/getUpdateManager"},next:{title:"Taro.getLaunchOptionsSync()",permalink:"/taro/docs/next/apis/base/weapp/life-cycle/getLaunchOptionsSync"}},o=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"applyUpdate",id:"applyupdate",children:[]},{value:"onCheckForUpdate",id:"oncheckforupdate",children:[]},{value:"onUpdateFailed",id:"onupdatefailed",children:[]},{value:"onUpdateReady",id:"onupdateready",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"OnCheckForUpdateCallback",id:"oncheckforupdatecallback",children:[]},{value:"OnCheckForUpdateResult",id:"oncheckforupdateresult",children:[]}]}],p={rightToc:o};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"UpdateManager \u5bf9\u8c61\uff0c\u7528\u6765\u7ba1\u7406\u66f4\u65b0\uff0c\u53ef\u901a\u8fc7 Taro.getUpdateManager \u63a5\u53e3\u83b7\u53d6\u5b9e\u4f8b\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(r.b)("h3",{id:"applyupdate"},"applyUpdate"),Object(r.b)("p",null,"\u5f3a\u5236\u5c0f\u7a0b\u5e8f\u91cd\u542f\u5e76\u4f7f\u7528\u65b0\u7248\u672c\u3002\u5728\u5c0f\u7a0b\u5e8f\u65b0\u7248\u672c\u4e0b\u8f7d\u5b8c\u6210\u540e\uff08\u5373\u6536\u5230 ",Object(r.b)("inlineCode",{parentName:"p"},"onUpdateReady")," \u56de\u8c03\uff09\u8c03\u7528\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.applyUpdate.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(r.b)("h3",{id:"oncheckforupdate"},"onCheckForUpdate"),Object(r.b)("p",null,"\u76d1\u542c\u5411\u5fae\u4fe1\u540e\u53f0\u8bf7\u6c42\u68c0\u67e5\u66f4\u65b0\u7ed3\u679c\u4e8b\u4ef6\u3002\u5fae\u4fe1\u5728\u5c0f\u7a0b\u5e8f\u51b7\u542f\u52a8\u65f6\u81ea\u52a8\u68c0\u67e5\u66f4\u65b0\uff0c\u4e0d\u9700\u7531\u5f00\u53d1\u8005\u4e3b\u52a8\u89e6\u53d1\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onCheckForUpdate.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnCheckForUpdateCallback) => void\n")),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"callback"),Object(r.b)("td",null,Object(r.b)("code",null,"OnCheckForUpdateCallback")),Object(r.b)("td",null,"\u5411\u5fae\u4fe1\u540e\u53f0\u8bf7\u6c42\u68c0\u67e5\u66f4\u65b0\u7ed3\u679c\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.b)("h3",{id:"onupdatefailed"},"onUpdateFailed"),Object(r.b)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u5931\u8d25\u4e8b\u4ef6\u3002\u5c0f\u7a0b\u5e8f\u6709\u65b0\u7248\u672c\uff0c\u5ba2\u6237\u7aef\u4e3b\u52a8\u89e6\u53d1\u4e0b\u8f7d\uff08\u65e0\u9700\u5f00\u53d1\u8005\u89e6\u53d1\uff09\uff0c\u4e0b\u8f7d\u5931\u8d25\uff08\u53ef\u80fd\u662f\u7f51\u7edc\u539f\u56e0\u7b49\uff09\u540e\u56de\u8c03"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateFailed.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"callback"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",null,"\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u5931\u8d25\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.b)("h3",{id:"onupdateready"},"onUpdateReady"),Object(r.b)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u6709\u7248\u672c\u66f4\u65b0\u4e8b\u4ef6\u3002\u5ba2\u6237\u7aef\u4e3b\u52a8\u89e6\u53d1\u4e0b\u8f7d\uff08\u65e0\u9700\u5f00\u53d1\u8005\u89e6\u53d1\uff09\uff0c\u4e0b\u8f7d\u6210\u529f\u540e\u56de\u8c03"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateReady.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: (res: CallbackResult) => void) => void\n")),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"callback"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: CallbackResult) => void")),Object(r.b)("td",null,"\u5c0f\u7a0b\u5e8f\u6709\u7248\u672c\u66f4\u65b0\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"oncheckforupdatecallback"},"OnCheckForUpdateCallback"),Object(r.b)("p",null,"\u5411\u5fae\u4fe1\u540e\u53f0\u8bf7\u6c42\u68c0\u67e5\u66f4\u65b0\u7ed3\u679c\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(result: OnCheckForUpdateResult) => void\n")),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"result"),Object(r.b)("td",null,Object(r.b)("code",null,"OnCheckForUpdateResult"))))),Object(r.b)("h3",{id:"oncheckforupdateresult"},"OnCheckForUpdateResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"hasUpdate"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",null,"\u662f\u5426\u6709\u65b0\u7248\u672c")))))}u.isMDXComponent=!0}}]);