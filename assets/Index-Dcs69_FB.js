import{r as u,w as p,o as A,a as M,b as s,c,d as x,e as S,f as $,g as o,F as E,h as N,t as k}from"./index-ZyN-UCnG.js";const j={__name:"vMenu",props:{args:String,initData:Array,initDataCht:Array,selectNum:[String,Number],type:[String,Number],filterMatch:[String,Array],filterExclude:[String,Array]},emits:["change"],setup(g,{emit:d}){const e=g,v=d,a=u(""),n=u(null),l=u(null),r=u([]),h=u([]);p(r,t=>{v("change",{data:t,dataCht:h.value})}),p(()=>e.initData,t=>{r.value=t,n.value.value=t.join(","),n.value.setAttribute("value",t.join(","))}),p(()=>e.initDataCht,t=>{var m;if(e.initData.length!==0&&e.initData.length!=t.length){const _=(m=tCodeMenu.getArgs(e.args))==null?void 0:m.codeName;t=r.value.map(b=>{var y;const i=(y=tcodeParams[_])==null?void 0:y.arr.find(C=>C.k==b);return _=="tCodeCity"&&i.v1!=i.v?`${i.v1} ${i.v}`:i.v})}h.value=t,l.value.value=t.join(","),l.value.setAttribute("value",t.join(","))});const f=()=>{open1111Menu(a.value,e.args,`${e.selectNum||100}`,{},`${e.type||""}`,`open1111Menu["${a.value}"]();`,Array.isArray(e.filterMatch)?e.filterMatch.join(","):e.filterMatch,Array.isArray(e.filterExclude)?e.filterExclude.join(","):e.filterExclude)};return A(()=>{a.value=Date.now().toString(36)+Math.random().toString(36).substring(2),n.value=document.createElement("input"),n.value.setAttribute("type","hidden"),n.value.setAttribute("id",`${a.value}`),document.body.appendChild(n.value),l.value=document.createElement("input"),l.value.setAttribute("type","hidden"),l.value.setAttribute("id",`${a.value}Cht`),document.body.appendChild(l.value),document.addEventListener("readystatechange",function(){open1111Menu[a.value]=function(){r.value=n.value.value.split(","),h.value=l.value.value.split(",")}})}),M(()=>{document.body.removeChild(n.value),document.body.removeChild(l.value)}),(t,m)=>(s(),c("div",{onClick:f},[x(t.$slots,"default")]))}},D=o("input",{type:"text",placeholder:"捷運站"},null,-1),B=o("br",null,null,-1),I=o("br",null,null,-1),F=o("button",null,"按鈕",-1),V={__name:"Index",setup(g){const d=u(null),e=u(null),v=({data:a,dataCht:n})=>{console.log(a,n),d.value=a,e.value=n};return(a,n)=>(s(),c("main",null,[S(j,{args:"mrt",onChange:v},{default:$(()=>[D,B,I,F]),_:1}),o("ul",null,[(s(!0),c(E,null,N(e.value,(l,r)=>(s(),c("li",{key:r},k(l),1))),128))])]))}};export{V as default};
