(window.webpackJsonp=window.webpackJsonp||[]).push([[861],{1736:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},1737:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},1738:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),u=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||o;return t?a.a.createElement(d,c(c({ref:n},i),{},{components:t})):a.a.createElement(d,c({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},926:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(1736),a=t(1737),o=(t(0),t(1738)),l={title:"\u4f7f\u7528 CSS Modules"},c={unversionedId:"css-modules",id:"version-3.x/css-modules",isDocsHomePage:!1,title:"\u4f7f\u7528 CSS Modules",description:"1.2.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff0cRN \u7aef\u5df2\u517c\u5bb9",source:"@site/versioned_docs/version-3.x/css-modules.md",slug:"/css-modules",permalink:"/taro/docs/css-modules",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/css-modules.md",version:"3.x",sidebar:"version-3.x/docs",previous:{title:"\u4f7f\u7528 Redux",permalink:"/taro/docs/redux"},next:{title:"\u9879\u76ee\u6a21\u677f",permalink:"/taro/docs/template"}},s=[],i={rightToc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"1.2.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff0cRN \u7aef\u5df2\u517c\u5bb9")),Object(o.b)("p",null,"Taro \u4e2d\u5185\u7f6e\u4e86 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/css-modules/css-modules"}),"CSS Modules")," \u7684\u652f\u6301\uff0c\u4f46\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\uff0c\u5982\u679c\u9700\u8981\u5f00\u542f\u4f7f\u7528\uff0c\u8bf7\u5148\u5728",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/taro/docs/config-detail"}),"\u7f16\u8bd1\u914d\u7f6e"),"\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u3002"),Object(o.b)("p",null,"\u5c0f\u7a0b\u5e8f\u7aef\u5f00\u542f"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"weapp: {\n  module: {\n    postcss: {\n      // css modules \u529f\u80fd\u5f00\u5173\u4e0e\u76f8\u5173\u914d\u7f6e\n      cssModules: {\n        enable: true, // \u9ed8\u8ba4\u4e3a false\uff0c\u5982\u9700\u4f7f\u7528 css modules \u529f\u80fd\uff0c\u5219\u8bbe\u4e3a true\n        config: {\n          namingPattern: 'module', // \u8f6c\u6362\u6a21\u5f0f\uff0c\u53d6\u503c\u4e3a global/module\uff0c\u4e0b\u6587\u8be6\u7ec6\u8bf4\u660e\n          generateScopedName: '[name]__[local]___[hash:base64:5]'\n        }\n      }\n    }\n  }\n}\n")),Object(o.b)("p",null,"H5 \u7aef\u5f00\u542f"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"h5: {\n  module: {\n    postcss: {\n      // css modules \u529f\u80fd\u5f00\u5173\u4e0e\u76f8\u5173\u914d\u7f6e\n      cssModules: {\n        enable: true, // \u9ed8\u8ba4\u4e3a false\uff0c\u5982\u9700\u4f7f\u7528 css modules \u529f\u80fd\uff0c\u5219\u8bbe\u4e3a true\n        config: {\n          namingPattern: 'module', // \u8f6c\u6362\u6a21\u5f0f\uff0c\u53d6\u503c\u4e3a global/module\uff0c\u4e0b\u6587\u8be6\u7ec6\u8bf4\u660e\n          generateScopedName: '[name]__[local]___[hash:base64:5]'\n        }\n      }\n    }\n  }\n}\n")),Object(o.b)("p",null,"\u5728\u5f00\u542f\u4e4b\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728 Taro \u4e2d\u4f7f\u7528 CSS Modules \u529f\u80fd\u4e86\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cTaro \u4e2d\u4f7f\u7528 CSS Modules \u6709\u4e24\u79cd\u6a21\u5f0f\uff0c\u5206\u522b\u4e3a\u5168\u5c40\u8f6c\u6362\u53ca\u90e8\u5206\u81ea\u5b9a\u4e49\u8f6c\u6362\u6a21\u5f0f\uff0c\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"namingPattern")," \u914d\u7f6e\u8fdb\u884c\u63a7\u5236"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"namingPattern")," \u914d\u7f6e\u53d6\u503c\u5206\u522b\u5982\u4e0b\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"global"),"\uff0c\u8868\u793a\u5168\u5c40\u8f6c\u6362\uff0c\u6240\u6709\u6837\u5f0f\u6587\u4ef6\u90fd\u4f1a\u7ecf\u8fc7 CSS Modules \u8f6c\u6362\u5904\u7406\uff0c\u9664\u4e86\u6587\u4ef6\u540d\u4e2d\u5305\u542b ",Object(o.b)("inlineCode",{parentName:"li"},".global.")," \u7684\u6837\u5f0f\u6587\u4ef6"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"module"),"\uff0c\u8868\u793a\u81ea\u5b9a\u4e49\u8f6c\u6362\uff0c\u53ea\u6709\u6587\u4ef6\u540d\u4e2d\u5305\u542b ",Object(o.b)("inlineCode",{parentName:"li"},".module.")," \u7684\u6837\u5f0f\u6587\u4ef6\u4f1a\u7ecf\u8fc7 CSS Modules \u8f6c\u6362\u5904\u7406")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"generateScopedName")," \u652f\u6301\u4f20\u5165\u5b57\u7b26\u4e32\u548c\u51fd\u6570\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"\u5b57\u7b26\u4e32"),"\uff0c\u5176\u683c\u5f0f\u89c1\uff1a",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/webpack/loader-utils#interpolatename"}),"https://github.com/webpack/loader-utils#interpolatename"),"\uff0c\u503c\u5f97\u6307\u51fa\u7684\u662f\uff0c\u53ef\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"[local]")," \u53d6\u5176\u539f\u7c7b\u540d"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"\u51fd\u6570"),"\uff0c\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a ",Object(o.b)("inlineCode",{parentName:"li"},"(localName: string, absoluteFilePath: string) => string"),"\uff0c\u5176\u4e2d ",Object(o.b)("inlineCode",{parentName:"li"},"localName")," \u4e3a\u539f\u7c7b\u540d\uff0c",Object(o.b)("inlineCode",{parentName:"li"},"absoluteFilePath")," \u4e3a\u6587\u4ef6\u7684\u7edd\u5bf9\u8def\u5f84\uff0c\u8fd4\u56de\u503c\u5c06\u4f5c\u4e3a\u65b0\u7684\u7c7b\u540d")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u63a8\u8350\u4f7f\u7528\u81ea\u5b9a\u4e49\u8f6c\u6362\u6a21\u5f0f\uff0c\u8fd9\u6837\u7684\u8bdd\u5c31\u4e0d\u4f1a\u5f71\u54cd\u5230\u4e00\u4e9b\u7b2c\u4e09\u65b9\u5e93\u7684\u6837\u5f0f\u4e86")),Object(o.b)("p",null,"CSS Modules \u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b"),Object(o.b)("p",null,"\u7ec4\u4ef6\u6837\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),".test {\n  color: red;\n  .txt {\n    font-size: 36px;\n  }\n}\n")),Object(o.b)("p",null,"\u7ec4\u4ef6 JS \u4e2d\u4f7f\u7528\u6837\u5f0f"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\nimport { View, Text } from '@tarojs/components'\n\nimport styles from './Test.module.scss'\n\nexport default class Test extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { }\n  }\n\n  render () {\n    return (\n      <View className={styles.test}>\n        <Text className={styles.txt}>Hello world!</Text>\n      </View>\n    )\n  }\n}\n")))}u.isMDXComponent=!0}}]);