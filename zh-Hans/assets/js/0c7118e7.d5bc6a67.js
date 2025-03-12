"use strict";(self.webpackChunkcigra_wiki=self.webpackChunkcigra_wiki||[]).push([[4747],{4901:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"i18n-guide","title":"Configuring Multi-language Support in Docusaurus","description":"This guide explains how to configure multi-language support in your Docusaurus site and how to use it with the CigarDetail component.","source":"@site/docs/i18n-guide.mdx","sourceDirName":".","slug":"/i18n-guide","permalink":"/zh-Hans/i18n-guide","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Configuring Multi-language Support in Docusaurus","sidebar_position":3}}');var t=s(474848),a=s(28453);const r={title:"Configuring Multi-language Support in Docusaurus",sidebar_position:3},o="Configuring Multi-language Support in Docusaurus",l={},c=[{value:"Setting Up Docusaurus i18n",id:"setting-up-docusaurus-i18n",level:2},{value:"1. Configure docusaurus.config.js",id:"1-configure-docusaurusconfigjs",level:3},{value:"2. Create Translated Content",id:"2-create-translated-content",level:3},{value:"3. Run the Translation Scripts",id:"3-run-the-translation-scripts",level:3},{value:"Using i18n with React Components",id:"using-i18n-with-react-components",level:2},{value:"1. Component-specific Translations",id:"1-component-specific-translations",level:3},{value:"2. Adding a New Language",id:"2-adding-a-new-language",level:3},{value:"3. Testing Translations",id:"3-testing-translations",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Resources",id:"resources",level:2}];function u(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"configuring-multi-language-support-in-docusaurus",children:"Configuring Multi-language Support in Docusaurus"})}),"\n",(0,t.jsx)(e.p,{children:"This guide explains how to configure multi-language support in your Docusaurus site and how to use it with the CigarDetail component."}),"\n",(0,t.jsx)(e.h2,{id:"setting-up-docusaurus-i18n",children:"Setting Up Docusaurus i18n"}),"\n",(0,t.jsx)(e.h3,{id:"1-configure-docusaurusconfigjs",children:"1. Configure docusaurus.config.js"}),"\n",(0,t.jsxs)(e.p,{children:["First, you need to configure the languages you want to support in your ",(0,t.jsx)(e.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"module.exports = {\n  // ... other config\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'zh-Hans'],\n    localeConfigs: {\n      en: {\n        label: 'English',\n        direction: 'ltr',\n      },\n      'zh-Hans': {\n        label: '\u7b80\u4f53\u4e2d\u6587',\n        direction: 'ltr',\n      },\n    },\n  },\n  // ... other config\n};\n"})}),"\n",(0,t.jsx)(e.h3,{id:"2-create-translated-content",children:"2. Create Translated Content"}),"\n",(0,t.jsx)(e.p,{children:"For each language, you'll need to create translated versions of your content. Docusaurus will look for translated content in the following directories:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"/i18n/[locale]/docusaurus-plugin-content-docs/current/"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"/i18n/[locale]/docusaurus-plugin-content-blog/"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"/i18n/[locale]/docusaurus-plugin-content-pages/"})}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["For example, to translate a document at ",(0,t.jsx)(e.code,{children:"/docs/intro.md"})," to Chinese, you would create a file at ",(0,t.jsx)(e.code,{children:"/i18n/zh-Hans/docusaurus-plugin-content-docs/current/intro.md"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"3-run-the-translation-scripts",children:"3. Run the Translation Scripts"}),"\n",(0,t.jsx)(e.p,{children:"Docusaurus provides scripts to help manage translations:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"# Extract translatable content\nnpm run write-translations\n\n# Extract translatable content for a specific locale\nnpm run write-translations -- --locale zh-Hans\n"})}),"\n",(0,t.jsxs)(e.p,{children:["This will create JSON files in the ",(0,t.jsx)(e.code,{children:"/i18n/[locale]/"})," directory that you can translate."]}),"\n",(0,t.jsx)(e.h2,{id:"using-i18n-with-react-components",children:"Using i18n with React Components"}),"\n",(0,t.jsx)(e.h3,{id:"1-component-specific-translations",children:"1. Component-specific Translations"}),"\n",(0,t.jsx)(e.p,{children:"For components like CigarDetail, we've implemented a custom translation system:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Translation files are stored in ",(0,t.jsx)(e.code,{children:"/i18n/[locale]/"})," directory (e.g., ",(0,t.jsx)(e.code,{children:"/i18n/en/cigar.json"}),")"]}),"\n",(0,t.jsxs)(e.li,{children:["The component uses the ",(0,t.jsx)(e.code,{children:"useTranslation"})," hook to access translations"]}),"\n",(0,t.jsx)(e.li,{children:"The hook automatically detects the current locale from Docusaurus"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"2-adding-a-new-language",children:"2. Adding a New Language"}),"\n",(0,t.jsx)(e.p,{children:"To add support for a new language:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Create a new JSON file in ",(0,t.jsx)(e.code,{children:"/i18n/[locale]/"})," directory with the appropriate language code (e.g., ",(0,t.jsx)(e.code,{children:"/i18n/fr/cigar.json"})," for French)"]}),"\n",(0,t.jsx)(e.li,{children:"Copy the structure from an existing language file and translate the values"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Example of a translation file structure:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "cigar": {\n    "images": "Images",\n    "name": "Name",\n    "factoryName": "Factory Name",\n    "dimensions": "Dimensions",\n    "ringGauge": "Ring Gauge",\n    "length": "Length",\n    "weight": "Weight",\n    "construction": "Construction",\n    "bands": "Bands",\n    "packaging": "Packaging",\n    "status": "Status",\n    "noImages": "No images available",\n    "errorLoading": "Error Loading Data",\n    "errorMessage": "Sorry, we couldn\'t load the cigar data. Please try again later."\n  }\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"3-testing-translations",children:"3. Testing Translations"}),"\n",(0,t.jsx)(e.p,{children:"To test your translations, you can:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Start your development server with a specific locale:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"npm run start -- --locale zh-Hans\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:["Or navigate to the localized version of your site at ",(0,t.jsx)(e.code,{children:"/zh-Hans/"})," (or whatever locale you're testing)."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Keep translations organized"}),": Use nested objects in your translation files to organize related strings."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Use meaningful keys"}),": Choose translation keys that describe the content, not just generic labels."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Provide fallbacks"}),": Always ensure there's a fallback when a translation is missing."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Test all languages"}),": Regularly test your site in all supported languages to catch any issues."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://docusaurus.io/docs/i18n/introduction",children:"Docusaurus i18n Documentation"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://react.i18next.com/",children:"React Internationalization"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization",children:"MDN Internationalization Guide"})}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>o});var i=s(296540);const t={},a=i.createContext(t);function r(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);