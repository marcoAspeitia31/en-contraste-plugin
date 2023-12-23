(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var i in a)e.o(a,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,a=JSON.parse('{"apiVersion":2,"name":"en-contraste-plugin/services","title":"Servicios recientes","category":"widgets","icon":"admin-post","description":"Lista los últimos servicios del sitio web","keywords":["servicios","entradas","noticias","en contraste"],"version":"1.0.0","textdomain":"en-contraste-plugin","attributes":{"title":{"type":"string"},"content":{"type":"string"},"per_page":{"type":"integer"},"align":{"type":"string","default":"wide"}},"supports":{"align":["wide"]},"editorScript":"file:./build/index.js"}'),i=window.React,n=window.wp.apiFetch;var r=e.n(n);const s=window.wp.element,c=window.wp.blockEditor,l=window.wp.components;(0,t.registerBlockType)(a,{edit:e=>{const{attributes:{title:t,content:a,per_page:n},setAttributes:o}=e,m=(0,c.useBlockProps)(),[d,p]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{void 0===n&&o({per_page:3});const e=`wp/v2/services?per_page=${n}`,t=await r()({path:e});p(t)})()}),[n]),(0,i.createElement)(i.Fragment,null,(0,i.createElement)(c.InspectorControls,null,(0,i.createElement)(l.Panel,{header:"Últimos services"},(0,i.createElement)(l.PanelBody,{title:"Cantidad de Services a mostrar",icon:"welcome-widgets-menus",initialOpen:!0},(0,i.createElement)(l.PanelRow,null,(0,i.createElement)(l.RangeControl,{label:"Número de services",value:n,onChange:e=>{o({per_page:e})},min:1,max:10,help:"Elige la cantidad de services a mostrar"}))))),d.length>0&&(0,i.createElement)("div",{...m},(0,i.createElement)("section",{className:"service-area pb-100"},(0,i.createElement)("div",{className:"container"},(0,i.createElement)("div",{className:"row justify-content-center"},(0,i.createElement)("div",{className:"col-lg-6 col-md-9"},(0,i.createElement)("div",{className:"section-title text-center"},(0,i.createElement)(c.RichText,{tagName:"h2",className:"title",value:t,onChange:e=>{o({title:e})},placeholder:"Agrega un título"}),(0,i.createElement)(c.RichText,{tagName:"p",value:a,onChange:e=>{o({content:e})},placeholder:"Agrega un descripción"})))),(0,i.createElement)("div",{className:"row justify-content-center"},d.map((e=>{const t=!1===e.service_grid_image_src?e.cmb2.services_image_metabox.services_image_image:e.service_grid_image_src;return(0,i.createElement)("div",{className:"col-lg-4 col-md-6 col-sm-8"},(0,i.createElement)("div",{className:"service-item-wrap mb-5"},(0,i.createElement)("div",{className:"service-meta text-center"},(0,i.createElement)("a",{href:e.link},(0,i.createElement)("h2",{className:"title"},e.title.rendered)),(0,i.createElement)("a",{href:e.link,className:"service-meta-link"},"Paquetes")),(0,i.createElement)("img",{src:t,alt:"",className:"service-img-grid img-fluid"})))})))))))},save:()=>null})})();