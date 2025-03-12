(self.webpackChunkcigra_wiki=self.webpackChunkcigra_wiki||[]).push([[68840],{936329:(e,s,a)=>{var i={"./en/cigar.json":808241,"./zh-Hans/cigar.json":309397};function n(e){var s=r(e);return a(s)}function r(e){if(!a.o(i,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=936329},110921:(e,s,a)=>{"use strict";a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"cigar/fonseca/invictos","title":"Fonseca Invictos","description":"Invictos","source":"@site/docs/cigar/fonseca/invictos.md","sourceDirName":"cigar/fonseca","slug":"/cigar/fonseca/invictos","permalink":"/cigar/fonseca/invictos","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"invictos","title":"Fonseca Invictos"},"sidebar":"cigarsSidebar","previous":{"title":"Fonseca No.1","permalink":"/cigar/fonseca/fonseca-no1"},"next":{"title":"Fonseca KDT Cadetes","permalink":"/cigar/fonseca/kdt-cadetes"}}');var n=a(474848),r=a(28453),c=a(330751);const t=JSON.parse('{"wk":"Fonseca","UU":"Invictos","rh":[{"name":"Invictos","images":["/img/cigars/fonseca-invictos1_402x58.jpg"],"details":{"Cigar Name":"Invictos","Factory Name":"Especiales","Construction":"Handmade. Tissue wrapped.","Bands":"Standard band A.","Packaging":"Dress box of 25 cigars in tissue.","Status":"A pre-1960 release. 1960-01-01Discontinued 2002.","History":"This cigar had limited availability."},"dimensions":{"ring_gauge":"45","length_mm":"134","length_in":"5\xbc\u2033"},"weight":"8.63g","ratings":{}}],"Wy":[]}');a(837700);const l={id:"invictos",title:"Fonseca Invictos"},o=void 0,d={},m=[{value:"Invictos",id:"invictos",level:2},{value:"Special Release Images",id:"special-release-images",level:2}];function g(e){const s={h2:"h2",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"invictos",children:"Invictos"}),"\n",(0,n.jsx)(c.O,{brand:t.wk,name:t.UU,sub_cigar:t.rh[0]}),"\n",(0,n.jsx)(s.h2,{id:"special-release-images",children:"Special Release Images"}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:t.Wy.map(((e,s)=>(0,n.jsxs)("div",{style:{margin:"1rem",cursor:"pointer"},onClick:()=>window.open(e.image_urls[0],"_blank"),children:[(0,n.jsx)("img",{src:e.image_urls[0],alt:e.description,style:{maxWidth:"100%",maxHeight:"200px",borderRadius:"0.5rem"}}),(0,n.jsx)("p",{children:e.description})]},s)))})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},334549:(e,s,a)=>{"use strict";a.d(s,{A:()=>k});a(296540);const i="container_V4LF",n="inner_p2f9",r="tableCard_SAkd",c="tableHeader_oLNi",t="tableTitle_plVk",l="tableContainer_v7an",o="table_bUJr",d="tableRow_KCuu",m="tableCell_tY15",g="tableCellHeader_JFgF",h="imagesGrid_v8Ph",u="imageItem_Q90x",x="image_tBnB",N="noImage_ZJuq",p="dimensionPills_Jgl4",j="dimensionPill_pQzk",v="dimensionValue_xamF",f="dimensionLabel_rGn5",b="detailValue_SKt7";var y=a(837700),_=a(474848);const k=e=>{let{brand:s,name:a,sub_cigar:k}=e;const{t:w}=(0,y.A)();if(!k||!k.images)return(0,_.jsx)("div",{className:i,children:(0,_.jsx)("div",{className:n,children:(0,_.jsxs)("div",{className:r,children:[(0,_.jsx)("div",{className:c,children:(0,_.jsx)("h2",{className:t,children:w("cigar.errorLoading")})}),(0,_.jsxs)("div",{className:l,style:{padding:"2rem"},children:[(0,_.jsx)("p",{children:w("cigar.errorMessage")}),(0,_.jsx)("pre",{style:{marginTop:"1rem",padding:"1rem",background:"#f5f5f5",borderRadius:"0.5rem",overflow:"auto"},children:JSON.stringify({brand:s,name:a,sub_cigar:k},null,2)})]})]})})});const A=Array.isArray(k.images)?k.images:[],C=k.details||{},S=k.dimensions||{};return(0,_.jsx)("div",{className:i,children:(0,_.jsx)("div",{className:n,children:(0,_.jsx)("div",{className:r,children:(0,_.jsx)("div",{className:l,children:(0,_.jsx)("table",{className:o,children:(0,_.jsxs)("tbody",{children:[(0,_.jsxs)("tr",{className:d,children:[(0,_.jsx)("td",{className:g,children:w("cigar.images")}),(0,_.jsx)("td",{className:m,children:A.length>0?(0,_.jsx)("div",{className:h,children:A.map(((e,a)=>(0,_.jsx)("div",{className:u,onClick:()=>window.open(e,"_blank"),children:(0,_.jsx)("img",{src:e,alt:`${s} ${k.name} image ${a+1}`,className:x})},a)))}):(0,_.jsx)("div",{className:N,children:w("cigar.noImages")})})]}),(0,_.jsxs)("tr",{className:d,children:[(0,_.jsx)("td",{className:g,children:w("cigar.name")}),(0,_.jsx)("td",{className:m,children:(0,_.jsx)("p",{className:b,children:k.name||"N/A"})})]}),(0,_.jsxs)("tr",{className:d,children:[(0,_.jsx)("td",{className:g,children:w("cigar.factoryName")}),(0,_.jsx)("td",{className:m,children:(0,_.jsx)("p",{className:b,children:C["Factory Name"]||"N/A"})})]}),(0,_.jsxs)("tr",{className:d,children:[(0,_.jsx)("td",{className:g,children:w("cigar.dimensions")}),(0,_.jsx)("td",{className:m,children:(0,_.jsxs)("div",{className:p,children:[(0,_.jsxs)("div",{className:j,children:[(0,_.jsx)("span",{className:v,children:S.ring_gauge||"N/A"}),(0,_.jsx)("span",{className:f,children:w("cigar.ringGauge")})]}),(0,_.jsxs)("div",{className:j,children:[(0,_.jsx)("span",{className:v,children:S.length_in||"N/A"}),(0,_.jsx)("span",{className:f,children:w("cigar.length")})]}),(0,_.jsxs)("div",{className:j,children:[(0,_.jsx)("span",{className:v,children:k.weight||"N/A"}),(0,_.jsx)("span",{className:f,children:w("cigar.weight")})]})]})})]}),(0,_.jsxs)("tr",{className:d,children:[(0,_.jsx)("td",{className:g,children:w("cigar.construction")}),(0,_.jsx)("td",{className:m,children:(0,_.jsx)("p",{className:b,children:C.Construction||"N/A"})})]}),(0,_.jsxs)("tr",{className:d,children:[(0,_.jsx)("td",{className:g,children:w("cigar.bands")}),(0,_.jsx)("td",{className:m,children:(0,_.jsx)("p",{className:b,children:C.Bands||"N/A"})})]}),(0,_.jsxs)("tr",{className:d,children:[(0,_.jsx)("td",{className:g,children:w("cigar.packaging")}),(0,_.jsx)("td",{className:m,children:(0,_.jsx)("p",{className:b,children:C.Packaging||"N/A"})})]}),(0,_.jsxs)("tr",{className:d,children:[(0,_.jsx)("td",{className:g,children:w("cigar.status")}),(0,_.jsx)("td",{className:m,children:(0,_.jsx)("p",{className:b,children:C.Status||"N/A"})})]})]})})})})})})}},837700:(e,s,a)=>{"use strict";let i;a.d(s,{A:()=>r});try{i=a(640797).A}catch(c){i=()=>({i18n:{currentLocale:"en"}})}const n=e=>{try{return a(936329)(`./${e}/cigar.json`)}catch(c){try{return a(808241)}catch(c){return{}}}};const r=function(){const{i18n:e}=i(),s=e?.currentLocale||"en",a=n(s);return{t:e=>{const s=e.split(".");let i=a;for(const a of s)if(i=i?.[a],void 0===i){let a=n("en");for(const i of s)if(a=a?.[i],void 0===a)return e;return a}return i},locale:s}}},330751:(e,s,a)=>{"use strict";a.d(s,{O:()=>i.A});var i=a(334549)},28453:(e,s,a)=>{"use strict";a.d(s,{R:()=>c,x:()=>t});var i=a(296540);const n={},r=i.createContext(n);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(r.Provider,{value:s},e.children)}},808241:e=>{"use strict";e.exports=JSON.parse('{"cigar":{"images":"Images","name":"Name","factoryName":"Factory Name","dimensions":"Dimensions","ringGauge":"Ring Gauge","length":"Length","weight":"Weight","construction":"Construction","bands":"Bands","packaging":"Packaging","status":"Status","noImages":"No images available","errorLoading":"Error Loading Data","errorMessage":"Sorry, we couldn\'t load the cigar data. Please try again later."},"brandNotes":{"errorLoading":"Unable to load brand information","status":"Status","generally":"Generally","standardProduction":"Standard Production","specialReleases":"Special Releases","history":"History","historicalBands":"Historical Bands","period":"Period","description":"Description"},"specialReleases":{"title":"Special Release Images"}}')},309397:e=>{"use strict";e.exports=JSON.parse('{"cigar":{"images":"\u56fe\u7247","name":"\u540d\u79f0","factoryName":"\u5de5\u5382\u540d\u79f0","dimensions":"\u5c3a\u5bf8","ringGauge":"\u73af\u89c4","length":"\u957f\u5ea6","weight":"\u91cd\u91cf","construction":"\u6784\u9020","bands":"\u70df\u73af","packaging":"\u5305\u88c5","status":"\u72b6\u6001","noImages":"\u6682\u65e0\u56fe\u7247","errorLoading":"\u6570\u636e\u52a0\u8f7d\u9519\u8bef","errorMessage":"\u62b1\u6b49\uff0c\u6211\u4eec\u65e0\u6cd5\u52a0\u8f7d\u96ea\u8304\u6570\u636e\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002"},"brandNotes":{"errorLoading":"\u65e0\u6cd5\u52a0\u8f7d\u54c1\u724c\u4fe1\u606f","status":"\u72b6\u6001","generally":"\u6982\u8ff0","standardProduction":"\u6807\u51c6\u751f\u4ea7","specialReleases":"\u7279\u522b\u7248\u672c","history":"\u5386\u53f2","historicalBands":"\u5386\u53f2\u70df\u73af","period":"\u65f6\u671f","description":"\u63cf\u8ff0"},"specialReleases":{"title":"\u7279\u522b\u7248\u672c\u56fe\u7247"}}')}}]);