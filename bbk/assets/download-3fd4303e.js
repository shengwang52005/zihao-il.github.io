import{s as W,q as J,g as K,h as O,p as Q,A as X,B as Y,i as Z,k as ee,w as te,C as ae,D as se,e as ne,y as oe,r as le,d as re,t as ie,z as ue}from"./@varlet-3c320202.js";import{s as ce,g as _e}from"./index-31133a08.js";import{_ as me}from"./_plugin-vue_export-helper-c27b6911.js";import{r as pe,b as r,o as de,z as C,G as M,s as t,S as s,u as V,i as y,F as L,L as l,N as ve,H as S,A as fe,B as ge}from"./@vue-6bb094e4.js";import"./@popperjs-b31fb82b.js";import"./axios-21b846bc.js";const be={__name:"download",setup(ke){const f=pe([]);let u=r(!1);const g=r(!0);async function d(n,e,o){let i;if(o===!0){const{data:m}=await ce(n);if(m.status===201)return W.error("无此版本号！");i=m.message}else try{const{data:m}=await _e(n);i=m.message,g.value=!1}catch{u.value=!0,_.value=!1,v.value=!0;return}const k=r(i.slice().reverse());e===!0?f.splice(0,f.length,...k.value):f.push(...k.value)}de(()=>{let n=setInterval(function(){let e=sessionStorage.getItem("Beta");e!==null&&(clearInterval(n),d({v:e}),sessionStorage.setItem("version",e))},100)});const p=r("");r("");let c=r(!0);function E(){c.value=c.value===!1}const z=()=>{switch(b.value){case"全版本":case 0:sessionStorage.setItem("version",sessionStorage.getItem("Beta"));break;case"正式版":case 1:sessionStorage.setItem("version",sessionStorage.getItem("Release"));break;case"测试版":case 2:sessionStorage.setItem("version",sessionStorage.getItem("Beta"));break}};function T(){g.value=!0;let n,e;switch(b.value){case"全版本":e="2";break;case"正式版":e="0";break;case"测试版":e="1";break}p.value!==""?p.value.split(".")[1]&&(c.value===!0?n="1":n="0",d({s:p.value,m:n,b:e},!0,!0),g.value=!1,_.value=!1,v.value=!0):(z(),_.value=!0,v.value=!1,d({v:sessionStorage.getItem("version"),b:e},!0,!1),w())}const b=r(0),I=(n,e)=>{sessionStorage.setItem("isBeta",n),d({v:sessionStorage.getItem(e),b:n},!0),sessionStorage.setItem("version",sessionStorage.getItem(e))};function U(n){switch(p.value="",sessionStorage.setItem("version",sessionStorage.getItem("Beta")),n){case"全版本":I("","Beta");break;case"正式版":I("0","Release");break;case"测试版":I("1","Beta");break}}const _=r(!1);r(!1),r([]);const v=r(!1);function w(){setTimeout(()=>{let n=sessionStorage.getItem("isBeta"),e=sessionStorage.getItem("version");if(e==="1.2.x"){_.value=!1,v.value=!0;return}let o=parseInt(e.split(".")[1])-1;o=`1.${o}.x`,sessionStorage.setItem("version",o);let i;n===""?i={v:o}:i={v:o,b:n},d(i),_.value=!1},1e3)}const F=n=>{const e=n.split(".");let o=`${e[0]}.${e[1]}`;return parseFloat(o)>1.1?`https://minecraft.fandom.com/zh/wiki/%E5%9F%BA%E5%B2%A9%E7%89%88${n}`:`https://minecraft.fandom.com/zh/wiki/%E6%90%BA%E5%B8%A6%E7%89%88${n}`};return(n,e)=>{const o=Q,i=J,k=X,m=Y,B=Z,h=ee,x=le,A=re,R=ie,N=ue,$=te,P=ae,D=se,j=K,q=ne,G=oe,H=O;return C(),M(L,null,[t(i,{active:b.value,"onUpdate:active":e[0]||(e[0]=a=>b.value=a),onClick:U},{default:s(()=>[t(o,{name:"全版本"},{default:s(()=>[l("全版本")]),_:1}),t(o,{name:"正式版"},{default:s(()=>[l("正式版")]),_:1}),t(o,{name:"测试版"},{default:s(()=>[l("测试版")]),_:1})]),_:1},8,["active"]),t(j,{justify:"center",gutter:10},{default:s(()=>[t(B,{span:22},{default:s(()=>[t(k,{variant:"outlined",placeholder:"请输入版本号",onInput:T,modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=a=>p.value=a)},null,8,["modelValue"]),t(m,{onClick:E,modelValue:V(c),"onUpdate:modelValue":e[2]||(e[2]=a=>y(c)?c.value=a:c=a),class:"mSwitch"},{default:s(()=>[l("模糊搜索")]),_:1},8,["modelValue"])]),_:1}),t(P,{"loading-text":"正在努力输出中...","finished-text":"一滴都没有了","error-text":"出错了出错了",finished:v.value,offset:"30",loading:_.value,"onUpdate:loading":e[3]||(e[3]=a=>_.value=a),check:"",onLoad:w},{default:s(()=>[t($,{title:"",card:"",rows:3,loading:g.value},{default:s(()=>[(C(!0),M(L,null,ve(f,a=>(C(),fe(B,{key:a.version_all},{default:s(()=>[t(N,{title:a.version,subtitle:a.is_beta===0?"正式版":"测试版",layout:"column",ripple:"",outline:"outline",class:ge(a.is_beta===0?"cardr":"cardb")},{description:s(()=>[t(x,null,{default:s(()=>[S("ul",null,[S("li",null,[l("更新日志： "),t(h,{type:"primary",target:"_blank",href:F(a.version),underline:"none"},{default:s(()=>[l("Minecraft Wiki ")]),_:2},1032,["href"])])])]),_:2},1024)]),extra:s(()=>[t(x,null,{default:s(()=>[t(R,{plain:"",type:"primary"},{default:s(()=>[t(h,{type:"primary",target:"_blank",disabled:a.ARMv7===null||a.ARMv7===""?!0:null,href:a.ARMv7,underline:"none"},{default:s(()=>[l("ARMv7 "),t(A,{name:"download"})]),_:2},1032,["disabled","href"])]),_:2},1024),t(R,{plain:"",type:"primary"},{default:s(()=>[t(h,{type:"primary",disabled:a.ARMv8===null||a.ARMv8===""?!0:null,target:"_blank",href:a.ARMv8,underline:"none"},{default:s(()=>[l("ARMv8 "),t(A,{name:"download"})]),_:2},1032,["disabled","href"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["title","subtitle","class"])]),_:2},1024))),128))]),_:1},8,["loading"])]),_:1},8,["finished","loading"]),t(D,{duration:300})]),_:1}),t(H,{"default-style":!1,show:V(u),"onUpdate:show":e[5]||(e[5]=a=>y(u)?u.value=a:u=a)},{default:s(()=>[t(G,{class:"result",type:"empty",title:"无法获取版本列表"},{description:s(()=>[S("p",null,[l(" 请前往 "),t(h,{class:"href-link",type:"primary",target:"_blank",href:"https://mc233.endyun.ltd/",underline:"none"},{default:s(()=>[l("静态站 ")]),_:1}),l(" 或联系管理员修复！ ")])]),footer:s(()=>[t(q,{color:"var(--result-empty-color)","text-color":"#fff",onClick:e[4]||(e[4]=a=>y(u)?u.value=!1:u=!1)},{default:s(()=>[l(" 知道了 ")]),_:1})]),_:1})]),_:1},8,["show"])],64)}}},Be=me(be,[["__scopeId","data-v-9884d0ee"]]);export{Be as default};
