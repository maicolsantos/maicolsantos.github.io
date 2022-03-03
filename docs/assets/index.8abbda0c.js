import{j as t,a as d,r as c,u as O,F as y,i as T,M as $,B as L,b as _,R as k,c as b}from"./vendor.692238b8.js";const x=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}};x();var I="/assets/logo.3b652a49.svg";const E=()=>t("div",{className:"loading",children:d("div",{className:"loading-logo",children:[t("img",{src:I,className:"logo",alt:"Maicol logo"}),t("h1",{className:"title",children:"Maicol Santos"})]})}),M="modulepreload",m={},N="/",F=function(r,a){return!a||a.length===0?r():Promise.all(a.map(n=>{if(n=`${N}${n}`,n in m)return;m[n]=!0;const e=n.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":M,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>r())};const D=()=>t("footer",{className:"footer",children:d("div",{className:"footer-container",children:[t("h1",{children:"Maicol Santos"}),t("a",{href:"mailto:maicolcostaa8@gmail.com",children:"maicolcostaa8@gmail.com"}),t("a",{href:"https://github.com/maicolsantos",target:"_blank",children:"github"}),t("a",{href:"https://www.linkedin.com/in/maicolsantos",target:"_blank",children:"linkedin"})]})}),A="${name}",f="${email}",h="${github}",g="${linkedin}",p="`",S=`import whoIam from 'maicol-santos'

function getFullInfo() {
  const {
    name,
    email,
    github,
    linkedin
  } = whoIam()

  return ${p}
    <h1>${A}</h1>
    <a href="mailto:${f}">${f}</a>
    <a href="${h}>${h}</a>
    <a href="${g}">${g}</a>
  ${p}
}

getFullInfo()
`,R=1e3,P=0,V="100vh",j="typescript",z=16,B="// Just write something",C=i=>i.split(" ").join("\xA0").split("	").join("\xA0".repeat(4)),U=({code:i,numberOfLetters:r})=>{const[a,n]=c.exports.useState(!0),[e,s]=c.exports.useState(!1),o=O(),l=C(i.slice(P,r)),u=()=>{setTimeout(()=>{n(!1)},R)},w=()=>{JSON.stringify(l).length===JSON.stringify(S).length&&s(!0)};return c.exports.useEffect(()=>{w()},[l]),c.exports.useEffect(()=>{o&&(F(()=>import("./Monokai.d9302881.js"),[]).then(v=>o.editor.defineTheme("monokai",v)).then(()=>o.editor.setTheme("monokai")),o.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!0}))},[o]),d(y,{children:[t(T,{height:V,defaultLanguage:j,defaultValue:B,onMount:u,options:{fontSize:z},value:l}),a&&t(E,{}),t("div",{className:"keydown-view"}),e&&t(D,{})]})},G=()=>{const[i,r]=c.exports.useState(0),a=n=>{if(!_)if(n.key==="Delete"||n.key==="Backspace"){const e=Math.round(i-Math.random()*8);r(e>=0?e:0)}else{const e=Math.round(i+Math.random()*8);r(e)}};return c.exports.useEffect(()=>(document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}),[i]),d(y,{children:[t($,{children:t(E,{})}),t(L,{children:t(U,{code:S,numberOfLetters:i})})]})};k.render(t(b.StrictMode,{children:t(G,{})}),document.getElementById("root"));
