import{d as l,aj as _,x as d,I as o,b as m,c as f,ag as x,k as S}from"./entry.50366a3e.js";const g=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){_(e=>({"0895eec5":u.value}));const n=d(),s=r,p=o(()=>{var e;return((((e=n.nuxtIcon)==null?void 0:e.aliases)||{})[s.name]||s.name).replace(/^i-/,"")}),u=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=o(()=>{var t,c,i;if(!s.size&&typeof((t=n.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((c=n.nuxtIcon)!=null&&c.size))return;const e=s.size||((i=n.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,t)=>(m(),f("span",{style:x({width:a.value,height:a.value})},null,4))}});const z=S(g,[["__scopeId","data-v-63ec6e3d"]]);export{z as default};