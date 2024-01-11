(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,a=JSON.parse('{"apiVersion":2,"name":"en-contraste-plugin/news","title":"Posts recientes","category":"widgets","icon":"admin-post","description":"Lista los últimos posts del sitio web","keywords":["posts","entradas","noticias","en contraste"],"version":"1.0.0","textdomain":"en-contraste-plugin","attributes":{"title":{"type":"string"},"content":{"type":"string"},"per_page":{"type":"integer"},"align":{"type":"string","default":"wide"}},"supports":{"align":["wide"]},"editorScript":"file:./build/index.js"}'),n=window.React,r=window.wp.apiFetch;var l=e.n(r);const s=window.wp.element,i=window.wp.blockEditor,c=window.wp.components;(0,t.registerBlockType)(a,{edit:e=>{const{attributes:{title:t,content:a,per_page:r},setAttributes:o}=e,m=(0,i.useBlockProps)(),[d,p]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{void 0===r&&o({per_page:3});const e=`wp/v2/posts?per_page=${r}`,t=await l()({path:e});p(t)})()}),[r]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(c.Panel,{header:"Últimos posts"},(0,n.createElement)(c.PanelBody,{title:"Cantidad de Posts a mostrar",icon:"welcome-widgets-menus",initialOpen:!0},(0,n.createElement)(c.PanelRow,null,(0,n.createElement)(c.RangeControl,{label:"Número de posts",value:r,onChange:e=>{o({per_page:e})},min:1,max:10,help:"Elige la cantidad de posts a mostrar"}))))),d.length>0&&(0,n.createElement)("div",{...m},(0,n.createElement)("section",{className:"article-area"},(0,n.createElement)("div",{className:"container"},(0,n.createElement)("div",{className:"row justify-content-center"},(0,n.createElement)("div",{className:"col-lg-6 col-md-9"},(0,n.createElement)("div",{className:"section-title text-center"},(0,n.createElement)(i.RichText,{tagName:"h2",className:"title",value:t,onChange:e=>{o({title:e})},placeholder:"Agrega un título"}),(0,n.createElement)(i.RichText,{tagName:"p",value:a,onChange:e=>{o({content:e})},placeholder:"Agrega un descripción"})))),(0,n.createElement)("div",{className:"row justify-content-center"},d.map((e=>{const t=moment(e.date),a=t.format("MMM"),r=t.format("D"),l=t.format("YYYY");let s=(new DOMParser).parseFromString(e.excerpt.rendered,"text/html").documentElement.textContent;return s.length>100&&(s=`${s.substring(0,100)}...`),(0,n.createElement)("div",{className:"col-lg-4 col-md-6 col-sm-9",key:e.id},(0,n.createElement)("div",{className:"article-item mt-30"},(0,n.createElement)("div",{className:"article-top text-center"},(0,n.createElement)("a",{href:e.link,"aria-label":`Learn more in ${e.title.rendered}`},(0,n.createElement)("h4",null,e.title.rendered))),(0,n.createElement)("div",{className:"article-thumb"},(0,n.createElement)("a",{href:e.link,"aria-label":`Learn more in ${e.title.rendered}`},(0,n.createElement)("img",{src:e.featured_image_src,alt:""})),(0,n.createElement)("div",{className:"date"},(0,n.createElement)("span",{className:"title"},r),(0,n.createElement)("span",null,a),(0,n.createElement)("span",null,l))),(0,n.createElement)("div",{className:"article-content pl-25 pr-25 pt-25"},(0,n.createElement)("p",null,s),(0,n.createElement)("a",{href:e.link,"aria-label":`Learn more in ${e.title.rendered}`},"Leer más"))))})))))))},save:()=>null})})();