import{R as f,c as _,a as h}from"./vue-router-b0f029af.js";import{z as y,A as E,u as v,k as g}from"./@vue-d6f9b4e7.js";import"./@varlet-3224955e.js";import"./@popperjs-b31fb82b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const L={__name:"App",setup(a){return(o,i)=>(y(),E(v(f)))}},P="modulepreload",O=function(a){return"/"+a},d={},c=function(o,i,l){if(!i||i.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=O(e),e in d)return;d[e]=!0;const r=e.endsWith(".css"),p=r?'[rel="stylesheet"]':"";if(!!l)for(let s=t.length-1;s>=0;s--){const u=t[s];if(u.href===e&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${p}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":P,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((s,u)=>{n.addEventListener("load",s),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},R=_({history:h("/"),routes:[{path:"/",redirect:"/index"},{path:"/index",component:()=>c(()=>import("./index-2b626516.js"),["assets/index-2b626516.js","assets/@varlet-3224955e.js","assets/@vue-d6f9b4e7.js","assets/@popperjs-b31fb82b.js","assets/@varlet-880f2c51.css","assets/vue-router-b0f029af.js","assets/index-31133a08.js","assets/axios-21b846bc.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-827035ed.css"]),redirect:"/main",children:[{path:"/main",component:()=>c(()=>import("./main-170c9df4.js"),["assets/main-170c9df4.js","assets/@varlet-3224955e.js","assets/@vue-d6f9b4e7.js","assets/@popperjs-b31fb82b.js","assets/@varlet-880f2c51.css","assets/vue-router-b0f029af.js","assets/index-31133a08.js","assets/axios-21b846bc.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/main-b61915b0.css"]),name:"main"},{path:"/download",component:()=>c(()=>import("./download-bb23336e.js"),["assets/download-bb23336e.js","assets/@varlet-3224955e.js","assets/@vue-d6f9b4e7.js","assets/@popperjs-b31fb82b.js","assets/@varlet-880f2c51.css","assets/index-31133a08.js","assets/axios-21b846bc.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/download-49e6c2bc.css"]),name:"download"},{path:"/about",component:()=>c(()=>import("./about-4b88adb2.js"),["assets/about-4b88adb2.js","assets/@varlet-3224955e.js","assets/@vue-d6f9b4e7.js","assets/@popperjs-b31fb82b.js","assets/@varlet-880f2c51.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/about-a20080ec.css"]),name:"about"}]},{path:"/:catchAll(.*)*",component:()=>c(()=>import("./404-71cce1f9.js"),["assets/404-71cce1f9.js","assets/@varlet-3224955e.js","assets/@vue-d6f9b4e7.js","assets/@popperjs-b31fb82b.js","assets/@varlet-880f2c51.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/vue-router-b0f029af.js","assets/404-46352ecf.css"])}]});const m=g(L);m.use(R);m.mount("#zihao_il");export{R as r};
