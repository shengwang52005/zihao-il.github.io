import{s as D,g as W,h as X,i as H,j as Y,d as Z,k as tt,l as lt,m as nt,n as et,o as at,p as ot,q as st,r as ut,t as _t,u as dt,v as it,w as rt,x as ct,e as pt,y as ft,z as mt,A as vt}from"./@varlet-ea2585a9.js";import{u as ht}from"./vue-router-be489425.js";import{l as bt}from"./index-0102211e.js";import{u as yt}from"./utcTime-740379fe.js";import{_ as kt}from"./_plugin-vue_export-helper-c27b6911.js";import{b as c,r as Ct,o as wt,z as M,M as L,s as n,I as l,u as gt,i as U,F as P,J as t,Q as e,N as At,A as Mt,B as jt,L as E,R as St,S as xt}from"./@vue-9130076e.js";import"./@popperjs-b31fb82b.js";import"./axios-47b9d439.js";const o=m=>(St("data-v-bd1bec40"),m=m(),xt(),m),Rt=o(()=>t("h1",null,"Minecraft for Android 版本库",-1)),Tt=o(()=>t("sup",null,"1",-1)),Bt=o(()=>t("li",null," 本站所有的安装包仅供交流学习，禁止分享到任何平台，下载后请24小时内及时删除！！！ ",-1)),It=o(()=>t("li",null,"本站的所有安装包均属于基岩版",-1)),zt=o(()=>t("li",null,"本站与 Mojang Studio 和 Microsoft 没有从属关系",-1)),Dt=o(()=>t("h2",null,"最新版本",-1)),Lt={class:"tab-p"},Ut={class:"tab-p"},Pt={class:"api-tab"},Et={class:"card-ul"},Ot=o(()=>t("h2",null,"架构说明",-1)),Vt=o(()=>t("thead",null,[t("tr",null,[t("th",null,"架构"),t("th",null,"适用情况")])],-1)),Nt=o(()=>t("tbody",null,[t("tr",null,[t("td",null,"ARMv7"),t("td",null,"32位、老旧手机、平板设备 首选使用")]),t("tr",null,[t("td",null,"ARMv8"),t("td",null,"64位、较新手机、平板设备 首选使用")])],-1)),$t=o(()=>t("h2",null,"API",-1)),Ft={class:"api-tab chip-api"},Qt=o(()=>t("span",null,"POST：",-1)),Jt=o(()=>t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"可选"),t("th",null,"说明")])],-1)),qt=o(()=>t("tbody",null,[t("tr",null,[t("td",null,"b"),t("td",null,"是"),t("td",null,"是否为测试版(不填：获取全部，1：测试版，0：正式版)")])],-1)),Gt=o(()=>t("span",null,"GET：",-1)),Kt=o(()=>t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"可选"),t("th",null,"说明")])],-1)),Wt=o(()=>t("tbody",null,[t("tr",null,[t("td",null,"s"),t("td",null,"否"),t("td",null,"查询的版本号")]),t("tr",null,[t("td",null,"m"),t("td",null,"是"),t("td",null,"是否启用模糊查询(1：启用)")]),t("tr",null,[t("td",null,"b"),t("td",null,"是"),t("td",null,"是否为测试版(不填/2：获取全部，1：测试版，0：正式版)")])],-1)),Xt=o(()=>t("span",null,"POST：",-1)),Ht=o(()=>t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"可选"),t("th",null,"说明")])],-1)),Yt=o(()=>t("tbody",null,[t("tr",null,[t("td",null,"v"),t("td",null,"否"),t("td",null,"查询的大版本号(例如：1.20.x)")]),t("tr",null,[t("td",null,"b"),t("td",null,"是"),t("td",null,"是否为测试版(不填：获取全部，1：测试版，0：正式版)")])],-1)),Zt=o(()=>t("h2",null,"友情链接",-1)),tl=o(()=>t("h2",null,null,-1)),ll=o(()=>t("h2",null,null,-1)),nl=o(()=>t("h2",null,null,-1)),el=o(()=>t("h2",null,null,-1)),al={__name:"main",setup(m){ht();const j=c(["addr","attention"]),v=c(0),h=c(0),g=Ct([]);let d=c(!1);const S=c(!0);async function x(i,s){const u=JSON.parse(i.link),y=Object.keys(u);y.reverse();const r=y.map(k=>({name:k,icon:"download"})),_=await mt({actions:r,title:"下载推荐(OneDrive_365>OneDrive_E5>123盘)"});_!=="close"&&(s==="v7"?window.open(u[_.name].ARMv7,"_blank"):u[_.name].ARMv8===""?D.warning("此版本没有ARMv8架构的安装包(>≈1.16.X版本才有)"):window.open(u[_.name].ARMv8,"_blank"))}const O=()=>{window.location.href="minecraft://"};async function V(i){let s;try{const{data:u}=await bt(i);if(u.status===201)return D.error("获取最新版本号失败！");s=u.message,S.value=!1,g.splice(0,g.length,...s)}catch{d.value=!0}}wt(()=>{V()});const N=i=>yt(i),b=c(!1);return(i,s)=>{const u=H,y=Y,r=Z,_=tt,k=lt,$=nt,R=et,T=at,p=ot,B=st,A=ut,f=_t,F=vt,C=dt,I=it,Q=rt,w=ct,z=pt,J=W,q=ft,G=X;return M(),L(P,null,[n(J,{justify:"center",gutter:10},{default:l(()=>[n(u,{class:"j-left",span:22},{default:l(()=>[n(u,null,{default:l(()=>[Rt]),_:1})]),_:1}),n(u,{class:"j-left",span:22},{default:l(()=>[t("p",null,[e("这是一个的第三方的资源平台，我们持续给 "),t("span",{onClick:s[0]||(s[0]=a=>b.value=!b.value)},[e(" 网上各大版本库"),Tt]),e(" 提供安装包(Android)，同时也是全网安装包(Android)供应的源头之一 ")]),n(y,{show:b.value,"onUpdate:show":s[1]||(s[1]=a=>b.value=a),duration:3e3},{default:l(()=>[e(" 苦力怕论坛、MineBBS、像素科技等各大版本库平台以及各大搬运工搬运到QQ群、网盘、第三方应用市场等 ")]),_:1},8,["show"])]),_:1}),n(u,{span:22},{default:l(()=>[n($,{modelValue:j.value,"onUpdate:modelValue":s[2]||(s[2]=a=>j.value=a)},{default:l(()=>[n(k,{title:"本站地址",name:"addr"},{icon:l(()=>[n(r,{name:"fire",color:"#00bfa5"})]),default:l(()=>[t("ul",null,[t("li",null,[n(_,{target:"_blank",type:"primary",href:"https://zihao-il.github.io/",underline:"none"},{default:l(()=>[e(" zihao-il.github.io ")]),_:1})]),t("li",null,[n(_,{target:"_blank",type:"primary",href:"https://mc233.endyun.ltd/",underline:"none"},{default:l(()=>[e(" mc233.endyun.ltd（推荐） ")]),_:1})]),t("li",null,[n(_,{target:"_blank",type:"primary",href:"http://bbk.endyun.ltd/",underline:"none"},{default:l(()=>[e(" bbk.endyun.ltd（本站） ")]),_:1})]),t("li",null,[n(_,{target:"_blank",type:"primary",href:"https://www.123pan.com/s/dhm9-6bD0A.html",underline:"none"},{default:l(()=>[e(" 版本库APP下载 ")]),_:1})])])]),_:1}),n(k,{title:"注意",name:"attention"},{icon:l(()=>[n(r,{name:"alert-outline",color:"#ff9100"})]),default:l(()=>[t("ul",null,[Bt,t("li",null,[e("如需要游玩请前往 "),n(_,{target:"_blank",type:"primary",href:"https://www.minecraft.net/",underline:"none"},{default:l(()=>[e(" Minecraft官网 ")]),_:1}),e(" 购买正版！！！ ")]),It,zt])]),_:1})]),_:1},8,["modelValue"])]),_:1}),n(u,{class:"j-left",span:22},{default:l(()=>[Dt]),_:1}),n(u,{class:"j-left",span:22},{default:l(()=>[n(B,{active:v.value,"onUpdate:active":s[3]||(s[3]=a=>v.value=a)},{default:l(()=>[n(p,null,{default:l(()=>[e(" 最新正式版 "),t("p",Lt,[n(T,{placement:"top","offset-x":"80",content:"可以用领域、服务器，游戏稳定特性少"},{default:l(()=>[n(R,{color:"#3a7afe",dot:""})]),_:1})])]),_:1}),n(p,null,{default:l(()=>[e(" 最新测试版 "),t("p",Ut,[n(T,{placement:"top",content:"可以体验更新的测试功能，游戏不稳定特性多"},{default:l(()=>[n(R,{color:"#3a7afe",dot:""})]),_:1})])]),_:1})]),_:1},8,["active"])]),_:1}),t("div",Pt,[n(Q,{title:"",rows:3,loading:S.value},{default:l(()=>[n(I,{active:v.value,"onUpdate:active":s[4]||(s[4]=a=>v.value=a)},{default:l(()=>[(M(!0),L(P,null,At(g,a=>(M(),Mt(C,null,{default:l(()=>[n(F,{title:a.version,subtitle:a.is_beta===0?"正式版":"测试版",layout:"column",ripple:"",outline:"outline",class:jt(a.is_beta===0?"cardr":"cardb")},{description:l(()=>[n(A,null,{default:l(()=>[t("ul",Et,[t("li",null,[e("更新日志： "),n(_,{type:"primary",target:"_blank",href:"https://zh.minecraft.wiki/w/%E5%9F%BA%E5%B2%A9%E7%89%88"+a.version,underline:"none"},{default:l(()=>[e("Minecraft Wiki ")]),_:2},1032,["href"])]),t("li",null," 更新时间："+E(N(a.update_time)),1),t("li",null," 文件大小："+E(a.file_size),1)])]),_:2},1024)]),extra:l(()=>[n(A,null,{default:l(()=>[n(f,{class:"chip-hover",plain:"",onClick:K=>x(a,"v7"),type:"primary"},{right:l(()=>[n(r,{name:"download"})]),default:l(()=>[e(" ARMv7 ")]),_:2},1032,["onClick"]),n(f,{class:"chip-hover",plain:"",onClick:K=>x(a,"v8"),type:"primary"},{right:l(()=>[n(r,{name:"download"})]),default:l(()=>[e(" ARMv8 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["title","subtitle","class"])]),_:2},1024))),256))]),_:1},8,["active"])]),_:1},8,["loading"])]),n(u,{class:"j-left",span:22},{default:l(()=>[Ot]),_:1}),n(u,{class:"j-left",span:22},{default:l(()=>[n(w,null,{default:l(()=>[Vt,Nt]),_:1})]),_:1}),n(u,{class:"j-left",span:22},{default:l(()=>[$t]),_:1}),n(u,{class:"j-left",span:22},{default:l(()=>[n(B,{active:h.value,"onUpdate:active":s[5]||(s[5]=a=>h.value=a)},{default:l(()=>[n(p,null,{default:l(()=>[e("最新版本")]),_:1}),n(p,null,{default:l(()=>[e("搜索版本")]),_:1}),n(p,null,{default:l(()=>[e("获取版本列表")]),_:1})]),_:1},8,["active"])]),_:1}),t("div",Ft,[n(I,{active:h.value,"onUpdate:active":s[6]||(s[6]=a=>h.value=a)},{default:l(()=>[n(C,null,{default:l(()=>[n(f,{round:!1,block:""},{left:l(()=>[Qt]),default:l(()=>[e(' http://bbk.endyun.ltd:9000/api/last_version data = {"b": "1"} ')]),_:1}),n(w,null,{default:l(()=>[Jt,qt]),_:1})]),_:1}),n(C,null,{default:l(()=>[n(f,{round:!1,block:""},{left:l(()=>[Gt]),default:l(()=>[e(" http://bbk.endyun.ltd:9000/api/search_version?s=1.20.1&m=1&b=2 ")]),_:1}),n(w,null,{default:l(()=>[Kt,Wt]),_:1})]),_:1}),n(C,null,{default:l(()=>[n(f,{round:!1,block:""},{left:l(()=>[Xt]),default:l(()=>[e(' http://bbk.endyun.ltd:9000/api/get_version data = {"v": "1.20.x", "b": "1"} ')]),_:1}),n(w,null,{default:l(()=>[Ht,Yt]),_:1})]),_:1})]),_:1},8,["active"])]),n(u,{class:"j-left",span:22},{default:l(()=>[Zt]),_:1}),n(u,{class:"j-left",span:22},{default:l(()=>[n(A,null,{default:l(()=>[t("ul",null,[t("li",null,[n(_,{type:"primary",target:"_blank",href:"http://bbk.endyun.ltd/",underline:"none"},{default:l(()=>[e("zihao_il的版本库 ")]),_:1})])])]),_:1}),n(z,{class:"fixed-button",round:"",type:"primary",onClick:O},{default:l(()=>[e(" MC启动！ ")]),_:1})]),_:1}),n(u,{class:"j-left",span:22},{default:l(()=>[tl,ll,nl]),_:1}),n(u,{class:"j-left",span:22},{default:l(()=>[el]),_:1})]),_:1}),n(G,{"default-style":!1,show:gt(d),"onUpdate:show":s[8]||(s[8]=a=>U(d)?d.value=a:d=a)},{default:l(()=>[n(q,{class:"result",type:"empty",title:"无法获取版本列表"},{description:l(()=>[t("p",null,[e(" 请前往 "),n(_,{class:"href-link",type:"primary",target:"_blank",href:"https://mc233.endyun.ltd/",underline:"none"},{default:l(()=>[e("静态站 ")]),_:1}),e(" 或联系管理员修复！ ")])]),footer:l(()=>[n(z,{color:"var(--result-empty-color)","text-color":"#fff",onClick:s[7]||(s[7]=a=>U(d)?d.value=!1:d=!1)},{default:l(()=>[e(" 知道了 ")]),_:1})]),_:1})]),_:1},8,["show"])],64)}}},pl=kt(al,[["__scopeId","data-v-bd1bec40"]]);export{pl as default};
