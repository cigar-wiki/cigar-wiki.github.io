(self.webpackChunkcigra_wiki=self.webpackChunkcigra_wiki||[]).push([[84216],{936329:(e,a,s)=>{var i={"./en/cigar.json":808241,"./zh-Hans/cigar.json":309397};function n(e){var a=r(e);return s(a)}function r(e){if(!s.o(i,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=936329},235796:(e,a,s)=>{"use strict";s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>g});const i=JSON.parse('{"id":"cigar/trinidad/vip-gifts","title":"Trinidad Gran Panetela VIP Gifts","description":"Gran Panetela","source":"@site/docs/cigar/trinidad/vip-gifts.md","sourceDirName":"cigar/trinidad","slug":"/cigar/trinidad/vip-gifts","permalink":"/cigar/trinidad/vip-gifts","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"vip-gifts","title":"Trinidad Gran Panetela VIP Gifts"},"sidebar":"cigarsSidebar","previous":{"title":"Trinidad Fundadores Vintage 10","permalink":"/cigar/trinidad/vintage-10"},"next":{"title":"Troya","permalink":"/brand/troya/"}}');var n=s(474848),r=s(28453),t=s(330751);const c=JSON.parse('{"wk":"Trinidad","UU":"Gran Panetela VIP Gifts","rh":[{"name":"Gran Panetela","images":["/img/cigars/trinidad-gran-panetela_576x47.jpg","/img/cigars/trinidad-gran-panetela1_219x149.jpg","/img/cigars/trinidad-gran-panetela2_208x150.jpg"],"details":{"Cigar Name":"Gran Panetela","Factory Name":"Laguito No.1"},"dimensions":{"ring_gauge":"38","length_mm":"192","length_in":"7\xbd\u2033"},"weight":"10.29g","ratings":{},"comment":"Gran Panetela - a special production size"}],"Wy":[]}');s(837700);const l={id:"vip-gifts",title:"Trinidad Gran Panetela VIP Gifts"},d=void 0,o={},g=[{value:"Gran Panetela",id:"gran-panetela",level:2},{value:"Special Release Images",id:"special-release-images",level:2}];function m(e){const a={h2:"h2",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"gran-panetela",children:"Gran Panetela"}),"\n",(0,n.jsx)(t.O,{brand:c.wk,name:c.UU,sub_cigar:c.rh[0]}),"\n",(0,n.jsx)(a.h2,{id:"special-release-images",children:"Special Release Images"}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:c.Wy.map(((e,a)=>(0,n.jsxs)("div",{style:{margin:"1rem",cursor:"pointer"},onClick:()=>window.open(e.image_urls[0],"_blank"),children:[(0,n.jsx)("img",{src:e.image_urls[0],alt:e.description,style:{maxWidth:"100%",maxHeight:"200px",borderRadius:"0.5rem"}}),(0,n.jsx)("p",{children:e.description})]},a)))})})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},334549:(e,a,s)=>{"use strict";s.d(a,{A:()=>k});s(296540);const i="container_V4LF",n="inner_p2f9",r="tableCard_SAkd",t="tableHeader_oLNi",c="tableTitle_plVk",l="tableContainer_v7an",d="table_bUJr",o="tableRow_KCuu",g="tableCell_tY15",m="tableCellHeader_JFgF",h="imagesGrid_v8Ph",u="imageItem_Q90x",p="image_tBnB",x="noImage_ZJuq",N="dimensionPills_Jgl4",j="dimensionPill_pQzk",f="dimensionValue_xamF",v="dimensionLabel_rGn5",b="detailValue_SKt7";var _=s(837700),y=s(474848);const k=e=>{let{brand:a,name:s,sub_cigar:k}=e;const{t:P}=(0,_.A)();if(!k||!k.images)return(0,y.jsx)("div",{className:i,children:(0,y.jsx)("div",{className:n,children:(0,y.jsxs)("div",{className:r,children:[(0,y.jsx)("div",{className:t,children:(0,y.jsx)("h2",{className:c,children:P("cigar.errorLoading")})}),(0,y.jsxs)("div",{className:l,style:{padding:"2rem"},children:[(0,y.jsx)("p",{children:P("cigar.errorMessage")}),(0,y.jsx)("pre",{style:{marginTop:"1rem",padding:"1rem",background:"#f5f5f5",borderRadius:"0.5rem",overflow:"auto"},children:JSON.stringify({brand:a,name:s,sub_cigar:k},null,2)})]})]})})});const w=Array.isArray(k.images)?k.images:[],G=k.details||{},A=k.dimensions||{};return(0,y.jsx)("div",{className:i,children:(0,y.jsx)("div",{className:n,children:(0,y.jsx)("div",{className:r,children:(0,y.jsx)("div",{className:l,children:(0,y.jsx)("table",{className:d,children:(0,y.jsxs)("tbody",{children:[(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:m,children:P("cigar.images")}),(0,y.jsx)("td",{className:g,children:w.length>0?(0,y.jsx)("div",{className:h,children:w.map(((e,s)=>(0,y.jsx)("div",{className:u,onClick:()=>window.open(e,"_blank"),children:(0,y.jsx)("img",{src:e,alt:`${a} ${k.name} image ${s+1}`,className:p})},s)))}):(0,y.jsx)("div",{className:x,children:P("cigar.noImages")})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:m,children:P("cigar.name")}),(0,y.jsx)("td",{className:g,children:(0,y.jsx)("p",{className:b,children:k.name||"N/A"})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:m,children:P("cigar.factoryName")}),(0,y.jsx)("td",{className:g,children:(0,y.jsx)("p",{className:b,children:G["Factory Name"]||"N/A"})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:m,children:P("cigar.dimensions")}),(0,y.jsx)("td",{className:g,children:(0,y.jsxs)("div",{className:N,children:[(0,y.jsxs)("div",{className:j,children:[(0,y.jsx)("span",{className:f,children:A.ring_gauge||"N/A"}),(0,y.jsx)("span",{className:v,children:P("cigar.ringGauge")})]}),(0,y.jsxs)("div",{className:j,children:[(0,y.jsx)("span",{className:f,children:A.length_in||"N/A"}),(0,y.jsx)("span",{className:v,children:P("cigar.length")})]}),(0,y.jsxs)("div",{className:j,children:[(0,y.jsx)("span",{className:f,children:k.weight||"N/A"}),(0,y.jsx)("span",{className:v,children:P("cigar.weight")})]})]})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:m,children:P("cigar.construction")}),(0,y.jsx)("td",{className:g,children:(0,y.jsx)("p",{className:b,children:G.Construction||"N/A"})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:m,children:P("cigar.bands")}),(0,y.jsx)("td",{className:g,children:(0,y.jsx)("p",{className:b,children:G.Bands||"N/A"})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:m,children:P("cigar.packaging")}),(0,y.jsx)("td",{className:g,children:(0,y.jsx)("p",{className:b,children:G.Packaging||"N/A"})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:m,children:P("cigar.status")}),(0,y.jsx)("td",{className:g,children:(0,y.jsx)("p",{className:b,children:G.Status||"N/A"})})]})]})})})})})})}},837700:(e,a,s)=>{"use strict";let i;s.d(a,{A:()=>r});try{i=s(640797).A}catch(t){i=()=>({i18n:{currentLocale:"en"}})}const n=e=>{try{return s(936329)(`./${e}/cigar.json`)}catch(t){try{return s(808241)}catch(t){return{}}}};const r=function(){const{i18n:e}=i(),a=e?.currentLocale||"en",s=n(a);return{t:e=>{const a=e.split(".");let i=s;for(const s of a)if(i=i?.[s],void 0===i){let s=n("en");for(const i of a)if(s=s?.[i],void 0===s)return e;return s}return i},locale:a}}},330751:(e,a,s)=>{"use strict";s.d(a,{O:()=>i.A});var i=s(334549)},28453:(e,a,s)=>{"use strict";s.d(a,{R:()=>t,x:()=>c});var i=s(296540);const n={},r=i.createContext(n);function t(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(r.Provider,{value:a},e.children)}},808241:e=>{"use strict";e.exports=JSON.parse('{"cigar":{"images":"Images","name":"Name","factoryName":"Factory Name","dimensions":"Dimensions","ringGauge":"Ring Gauge","length":"Length","weight":"Weight","construction":"Construction","bands":"Bands","packaging":"Packaging","status":"Status","noImages":"No images available","errorLoading":"Error Loading Data","errorMessage":"Sorry, we couldn\'t load the cigar data. Please try again later."},"brandNotes":{"errorLoading":"Unable to load brand information","status":"Status","generally":"Generally","standardProduction":"Standard Production","specialReleases":"Special Releases","history":"History","historicalBands":"Historical Bands","period":"Period","description":"Description"},"specialReleases":{"title":"Special Release Images"}}')},309397:e=>{"use strict";e.exports=JSON.parse('{"cigar":{"images":"\u56fe\u7247","name":"\u540d\u79f0","factoryName":"\u5de5\u5382\u540d\u79f0","dimensions":"\u5c3a\u5bf8","ringGauge":"\u73af\u89c4","length":"\u957f\u5ea6","weight":"\u91cd\u91cf","construction":"\u6784\u9020","bands":"\u70df\u73af","packaging":"\u5305\u88c5","status":"\u72b6\u6001","noImages":"\u6682\u65e0\u56fe\u7247","errorLoading":"\u6570\u636e\u52a0\u8f7d\u9519\u8bef","errorMessage":"\u62b1\u6b49\uff0c\u6211\u4eec\u65e0\u6cd5\u52a0\u8f7d\u96ea\u8304\u6570\u636e\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002"},"brandNotes":{"errorLoading":"\u65e0\u6cd5\u52a0\u8f7d\u54c1\u724c\u4fe1\u606f","status":"\u72b6\u6001","generally":"\u6982\u8ff0","standardProduction":"\u6807\u51c6\u751f\u4ea7","specialReleases":"\u7279\u522b\u7248\u672c","history":"\u5386\u53f2","historicalBands":"\u5386\u53f2\u70df\u73af","period":"\u65f6\u671f","description":"\u63cf\u8ff0"},"specialReleases":{"title":"\u7279\u522b\u7248\u672c\u56fe\u7247"}}')}}]);