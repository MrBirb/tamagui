(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{381:function(e,t,n){"use strict";var r=n(1706),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,l,c,i,s,u=!1;t||(t={}),n=t.debug||!1;try{if(l=r(),c=document.createRange(),i=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=a[t.format]||a.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),i.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(m){n&&console.error("unable to copy using execCommand: ",m),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(m){n&&console.error("unable to copy using clipboardData: ",m),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(c):i.removeAllRanges()),s&&document.body.removeChild(s),l()}return u}},233:function(e,t,n){"use strict";n.d(t,{h:function(){return p}});var r=n(1408),a=n(8016),o=n(9097),l=n(2784),c=n(4371),i=n(3539),s=n(6725),u=n(8303),m=n(2484);function p(){return l.createElement(c.s,{ai:"center",position:"relative",tag:"header",py:"$4",px:"$4",jc:"space-between",p:"relative",zi:1},l.createElement(o.default,{href:"/",passHref:!0},l.createElement(c.F,{cursor:"pointer",tag:"a",my:-20},l.createElement(i.T,null,l.createElement(s.Text,null,"Tamagui homepage")),l.createElement(r.Xe,null))),l.createElement(c.s,{position:"absolute",$sm:{display:"none"},zIndex:-1,jc:"center",fullscreen:!0,pointerEvents:"none",ai:"center"},l.createElement(r.Pk,null)),l.createElement(c.s,{pointerEvents:"auto",tag:"nav",ai:"center",space:"$6"},l.createElement(o.default,{href:"/docs/intro/installation",passHref:!0},l.createElement(u.n,{size:"$3",opacity:.5,hoverStyle:{opacity:1},tag:"a"},"Docs")),l.createElement(o.default,{href:"/blog",passHref:!0},l.createElement(u.n,{size:"$3",opacity:.5,hoverStyle:{opacity:1},tag:"a"},"Blog")),l.createElement(o.default,{href:"/blog/introducing-tamagui",passHref:!0},l.createElement(c.F,{tag:"a",mx:-5,$sm:{display:"none"}},l.createElement(m.z,{theme:"orange",br:"$6"},"Alpha"))),l.createElement(a.T,null)))}},8858:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return $},default:function(){return k}});var r=n(3146),a=n(233),o=n(983),l=n(6668),c=n(8840),i=n(2784),s=n(1295),u=Object.defineProperty;const m=((e,t)=>u(e,"name",{value:t,configurable:!0}))((e=>{const{color:t="black",size:n=24,...r}=e;return i.createElement(s.Svg,{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...r},i.createElement(s.Line,{x1:"19",y1:"12",x2:"5",y2:"12",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement(s.Polyline,{points:"12 19 5 12 12 5",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}),"ArrowLeft");var p=n(3021),f=n(1807),d=n(3098),g=n(9097),E=n(6725),y=n(4371),h=n(2484),b=n(1801),v=n(8303),w=n(6750),x=n(7104),$=!0;function k(e){var t=e.frontmatter,n=e.code,s=e.relatedPosts,u=i.useMemo((function(){return(0,d.getMDXComponent)(n)}),[n]),$='\n\t\thttps://twitter.com/intent/tweet?\n\t\ttext="'.concat(t.title,'" by @').concat(c.o[t.by].twitter," on the @tamagui_dev blog.&url=https://tamagui.dev/blog/").concat(t.slug,"\n\t\t");return i.createElement(i.Fragment,null,i.createElement(l.H,{title:"".concat(t.title," \u2014 Tamagui"),poster:t.poster}),i.createElement(a.h,null),i.createElement(r.W,null,i.createElement(y.F,{ai:"flex-start"},i.createElement(g.default,{href:"/blog",passHref:!0},i.createElement(h.z,{chromeless:!0,icon:i.createElement(m,{color:"var(--color3)",size:12}),tag:"a",space:"$2",ml:"$-6"},"Blog"))),i.createElement(b.H1,{letterSpacing:-1,mt:"$4"},t.title),i.createElement(b.H2,{size:"$7",fontWeight:"500",fontFamily:"$body",mb:"$2",color:"$color2"},t.description),i.createElement(y.s,{ai:"center",mb:"$3"},i.createElement(v.n,{size:"$3",color:"$color3",whiteSpace:"nowrap"},i.createElement(x.r,{href:"https://twitter.com/".concat(c.o[t.by].twitter),rel:"noopener noreferrer",variant:"subtle"},c.o[t.by].name)),i.createElement(w.Z,{vertical:!0,mx:"$2"}),i.createElement(v.n,{tag:"time",size:"$3",color:"$color3",whiteSpace:"nowrap"},(0,p.Z)((0,f.Z)(t.publishedAt),"MMMM yyyy")),i.createElement(y.F,{ai:"center",display:"none",$gtSm:{display:"flex"}},i.createElement(w.Z,{vertical:!0,mx:"$2"}),i.createElement(v.n,{size:"$3",color:"$color3"},t.readingTime.text),"changelog"===t.type&&i.createElement(i.Fragment,null,i.createElement(w.Z,{vertical:!0,mx:"$2"}),i.createElement(h.z,null,"Changelog")))),i.createElement(E.Theme,{name:"pink"},i.createElement(u,{components:o.wx})),i.createElement(w.Z,{my:"$8",mx:"auto"}),i.createElement(y.F,{ai:"center"},i.createElement(v.n,null,"Share this post on"," ",i.createElement(x.r,{href:$,target:"_blank",rel:"noopener noreferrer",title:"Share this post on Twitter"},"Twitter"),".")),s&&i.createElement(y.F,null,i.createElement(w.Z,{my:"$8",mx:"auto"}),i.createElement(b.H3,{mb:"$3",ta:"center",textTransform:"uppercase"},"Related"),i.createElement(y.F,{my:"$4",space:"$4"},s.map((function(e){return i.createElement(v.n,{tag:"a",key:e.slug,href:"/blog/".concat(e.slug)},i.createElement(y.F,{space:"$2"},i.createElement(b.H6,null,e.title),i.createElement(v.n,null,e.description)))}))))))}},8840:function(e,t,n){"use strict";n.d(t,{o:function(){return r}});var r={nate:{name:"Nate Wienert",twitter:"natebirdman",avatar:""}}},7754:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(8858)}])},4501:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},3098:function(e,t,n){e.exports=n(7575)},7575:function(e,t,n){"use strict";t.getMDXComponent=function(e,t){return i(e,t).default};var r=c(n(2784)),a=c(n(2111)),o=c(n(8316));function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=a?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function i(e,t){const n={React:r,ReactDOM:o,_jsx_runtime:a,...t};return new Function(...Object.keys(n),e)(...Object.values(n))}}},function(e){e.O(0,[774,251,34,888,179],(function(){return t=7754,e(e.s=t);var t}));var t=e.O();_N_E=t}]);