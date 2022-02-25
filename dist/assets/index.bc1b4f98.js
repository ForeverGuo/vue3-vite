import{r as f,o as h,c as v,a as g,b as y,d as b,e as L,E as u,i as O}from"./vendor.37106b73.js";const E=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};E();const k={setup(o){return(t,s)=>{const r=f("router-view");return h(),v(r)}}};const S="modulepreload",m={},w="/",l=function(t,s){return!s||s.length===0?t():Promise.all(s.map(r=>{if(r=`${w}${r}`,r in m)return;m[r]=!0;const e=r.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":S,e||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),e)return new Promise((p,_)=>{i.addEventListener("load",p),i.addEventListener("error",_)})})).then(()=>t())},I="login",x="logout",d=g({state:{user:{token:"",user_type:""}},getters:{},mutations:{[I]:(o,t)=>{o.user.token=t.token,o.user.user_type=t.userType,localStorage.setItem("user",JSON.stringify(t))},[x]:(o,t)=>{o.user={token:"",user_type:""},localStorage.removeItem("user")}},actions:{}}),P=()=>{let o=null;const t=JSON.parse(localStorage.getItem("user"));return t&&t.token&&(d.commit("login",t),o=t.token),o};function B(o,t){const s=new Blob([o],{type:"application/vnd.ms-excel"});if(window.navigator&&window.navigator.msSaveOrOpenBlob){const r=t+".xlsx";window.navigator.msSaveOrOpenBlob(s,r)}else{const r=t+".xlsx",e=document.createElement("a");e.download=r,e.style.display="none",e.href=URL.createObjectURL(s),document.body.appendChild(e),e.click(),URL.revokeObjectURL(e.href),document.body.removeChild(e)}}const R=()=>l(()=>import("./index.1cf45a64.js"),["assets/index.1cf45a64.js","assets/index.f10a49c1.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.37106b73.js"]),N=()=>l(()=>import("./SubIndex.c9423645.js"),["assets/SubIndex.c9423645.js","assets/SubIndex.68674456.css","assets/vendor.37106b73.js","assets/index.1f63b491.js","assets/plugin-vue_export-helper.21dcd24c.js"]),A=()=>l(()=>import("./SubMember.aa0c7f1c.js"),["assets/SubMember.aa0c7f1c.js","assets/SubMember.6e3c656a.css","assets/vendor.37106b73.js","assets/index.1f63b491.js","assets/plugin-vue_export-helper.21dcd24c.js"]),T=()=>l(()=>import("./index.0ebcbe71.js"),["assets/index.0ebcbe71.js","assets/index.c2f58a05.css","assets/vendor.37106b73.js","assets/index.1f63b491.js"]),U=[{path:"/",redirect:"/subs/home"},{path:"/subs",name:"SubIndex",component:R,isElementPlus:!0,redirect:"/subs/home",meta:{requireLogin:!0},children:[{path:"/subs/home",name:"SubHome",component:N,desc:"\u4E3B\u9875",icon:"home-filled"},{path:"/subs/member",name:"SubMember",component:A,desc:"\u7528\u6237\u7BA1\u7406",icon:"avatar"}]},{path:"/login",name:"Login",component:T}],a=y({history:b(),routes:U});a.beforeEach((o,t,s)=>{let r=P();o.meta.requireLogin?r?s():a.push({path:"/login",query:{redirect:o.fullPath}}):s()});const c=L(k);for(const o in u)c.component(o,u[o]);c.use(d);c.use(a);c.use(O);c.mount("#app");export{I as L,B as d,a as r,d as s,P as t};
