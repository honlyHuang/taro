(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1740:function(e,r,t){"use strict";function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(r,"a",(function(){return a}))},1741:function(e,r,t){"use strict";function a(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(r,"a",(function(){return a}))},1742:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),u=function(e){var r=n.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):f(f({},r),e)),t},p=function(e){var r=u(e.components);return n.a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},y=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),y=a,b=p["".concat(i,".").concat(y)]||p[y]||l[y]||o;return t?n.a.createElement(b,f(f({ref:r},s),{},{components:t})):n.a.createElement(b,f({ref:r},s))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var f={};for(var c in r)hasOwnProperty.call(r,c)&&(f[c]=r[c]);f.originalType=e,f.mdxType="string"==typeof e?e:a,i[1]=f;for(var s=2;s<o;s++)i[s]=t[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},237:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return f})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var a=t(1740),n=t(1741),o=(t(0),t(1742)),i={title:"arrayBufferToBase64",sidebar_label:"arrayBufferToBase64"},f={unversionedId:"apis/extend-apis/arrayBufferToBase64",id:"version-1.x/apis/extend-apis/arrayBufferToBase64",isDocsHomePage:!1,title:"arrayBufferToBase64",description:"Taro.arrayBufferToBase64(arrayBuffer)",source:"@site/versioned_docs/version-1.x/apis/extend-apis/arrayBufferToBase64.md",slug:"/apis/extend-apis/arrayBufferToBase64",permalink:"/taro/docs/1.x/apis/extend-apis/arrayBufferToBase64",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/extend-apis/arrayBufferToBase64.md",version:"1.x",sidebar_label:"arrayBufferToBase64",sidebar:"version-1.x/API",previous:{title:"Taro.stopWifi(OBJECT)",permalink:"/taro/docs/1.x/apis/device/wifi/stopWifi"},next:{title:"base64ToArrayBuffer",permalink:"/taro/docs/1.x/apis/extend-apis/base64ToArrayBuffer"}},c=[{value:"Taro.arrayBufferToBase64(arrayBuffer)",id:"taroarraybuffertobase64arraybuffer",children:[]}],s={rightToc:c};function u(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"taroarraybuffertobase64arraybuffer"},"Taro.arrayBufferToBase64(arrayBuffer)"),Object(o.b)("p",null,"\u5c06 ArrayBuffer \u6570\u636e\u8f6c\u6210 Base64 \u5b57\u7b26\u4e32\u3002(\u5c0f\u7a0b\u5e8f\u7aef\u57fa\u7840\u5e93 1.1.0 \u5f00\u59cb\u652f\u6301\uff0c\u4f4e\u7248\u672c\u9700\u505a\u517c\u5bb9\u5904\u7406)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nconst arrayBuffer = new Uint8Array([11, 22, 33])\nconst base64 = Taro.arrayBufferToBase64(arrayBuffer)\n")))}u.isMDXComponent=!0}}]);