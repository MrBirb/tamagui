(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[850],{50381:function(e,t,s){"use strict";var r=s(91706),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var s,i,o,l,n,c,_=!1;t||(t={}),s=t.debug||!1;try{if(o=r(),l=document.createRange(),n=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=a[t.format]||a.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),l.selectNodeContents(c),n.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");_=!0}catch(d){s&&console.error("unable to copy using execCommand: ",d),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),_=!0}catch(d){s&&console.error("unable to copy using clipboardData: ",d),s&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{n&&("function"==typeof n.removeRange?n.removeRange(l):n.removeAllRanges()),c&&document.body.removeChild(c),o()}return _}},26639:function(e,t,s){"use strict";s.r(t)},11962:function(e,t,s){"use strict";s.r(t)},78503:function(e,t,s){"use strict";s.r(t)},28811:function(e,t,s){"use strict";s.r(t)},86704:function(e,t,s){"use strict";s.r(t)},68471:function(e,t,s){"use strict";s.r(t)},63513:function(e,t,s){"use strict";s.r(t)},83212:function(e,t,s){"use strict";s.r(t)},94376:function(e,t,s){"use strict";s.r(t)},44624:function(e,t,s){"use strict";s.r(t)},24267:function(e,t,s){"use strict";s.d(t,{Q:function(){return r}});const r=s(2784).createContext({})},2775:function(e,t,s){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},r.apply(this,arguments)}s.d(t,{w:function(){return ce}});var a=s(37328),i=s(96670),o=s(26297),l=s(52322),n=s(56036),c=s(39097),_=s.n(c),d=s(5632),m=s.n(d),f=s(84501),b=s.n(f),p=s(2784),h=s(30976),u=s(34236),x=s(9861),g=s(61342),j=s(35314),v=s(56448),w=s(5146),k=s(26189),y=s(5982),z=s(36475),N=s(46318),C=s(5943),R=s(79751),L=s(47284),T=s(52443),Z=s(18585),S=s(50381),B=s.n(S),$=s(34989),E=s(65603),F=s(29688);const A=(0,p.forwardRef)(((e,t)=>{const{className:s,children:r,id:a,showLineNumbers:i=!1,isHero:o=!1,isCollapsible:n=!1,isHighlightingLines:c}=e,{0:_,1:d}=(0,p.useState)(o||n),{0:m,1:f}=(0,p.useState)(!1),{0:b,1:u}=(0,p.useState)(void 0),x=(0,p.useRef)(null);return(0,p.useEffect)((()=>{if(x.current){const e=x.current.querySelector("code");if(e){const t=e.innerText.replace(/\n{3,}/g,"\n");u(t)}}}),[x]),(0,p.useEffect)((()=>{m&&b&&B()(b);const e=setTimeout((()=>f(!1)),1500);return()=>{clearTimeout(e)}}),[m]),(0,l.jsxs)("div",{ref:t,className:(0,F.concatClassName)(" _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9  _mb-1aj149p _pos-1pv0ki4  "+(o?"  _mr-lrpfy2 _ml-lrpfy2 _pr-1aj149p _pl-1aj149p":" ")+" "+(o?"  _mr-_gtMd_lrpg0n _ml-_gtMd_lrpg0n":" ")),children:[n&&(0,l.jsx)("div",{className:" _r-1aj14bf _t-pqxce _jc-stpix3 _pos-skvnnb _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-175izsd _fs-0 _ai-1ch0i1h _r-_gtMd_1aj14ca ",children:(0,l.jsx)(w.zx,{accessibilityLabel:"Show or hide code",size:"$2",paddingRight:"_pr-1aj147z",paddingLeft:"_pl-1aj147z",height:"_h-a0wkrm",borderTopLeftRadius:"_btlr-lmim9d",borderTopRightRadius:"_btrr-lmim9d",borderBottomRightRadius:"_bbrr-lmim9d",borderBottomLeftRadius:"_bblr-lmim9d",onPress:()=>d((e=>!e)),children:_?"Show code":"Hide code"})}),(!_||!n)&&(0,l.jsxs)("div",{className:" _pos-1pv0ki4 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:[(0,l.jsx)(E.S,{ref:x,"data-invert-line-highlight":c,"data-line-numbers":i,className:s,p:0,mb:0,id:a,children:(0,l.jsx)(h.ScrollView,{style:{width:"100%"},contentContainerStyle:{minWidth:"100%"},horizontal:!0,showsHorizontalScrollIndicator:!1,children:(0,l.jsx)(R.E,{p:"$4",backgroundColor:"transparent",f:1,className:s,children:r})})}),(0,l.jsx)($.w6,{label:m?"Copied":"Copy to clipboard",children:(0,l.jsx)(w.zx,{"aria-label":"Copy code to clipboard",position:"_pos-skvnnb",size:"$2",display:"_disp-175izsd",right:"_r-1aj148u",top:"_t-1aj148u",paddingRight:"_pr-1aj147z",paddingLeft:"_pl-1aj147z",height:"_h-a0wkrm",borderTopLeftRadius:"_btlr-lmim9d",borderTopRightRadius:"_btrr-lmim9d",borderBottomRightRadius:"_bbrr-lmim9d",borderBottomLeftRadius:"_bblr-lmim9d",icon:m?T.f:Z.T,onPress:()=>f(!0),className:" copy-code _disp-_sm_none "})})]})]})}));s(26639);var D=s(39170),P=s(45482);const H=(0,P.z)(j.FA,{elevation:"$6",borderTopLeftRadius:"_btlr-lmimb3",borderTopRightRadius:"_btrr-lmimb3",borderBottomRightRadius:"_bbrr-lmimb3",borderBottomLeftRadius:"_bblr-lmimb3",minHeight:"_mih-sepdk",backgroundColor:"_bc-180kg62",minWidth:"_miw-ryqpd",overflowX:"_ovx-1ew92ne",overflowY:"_ovy-1ew92ne",justifyContent:"_jc-1ch0i1h",alignItems:"_ai-1ch0i1h",transform:"_transform-19qlv72"});s(28811);var W=s(2712),I=s(12070),q=s(46642),M=s(7517),O=s(24920),Q=s(71714),V=s(85328);var U=e=>{var{items:t}=e,s=(0,o.Z)(e,["items"]);return(0,l.jsx)(j.FA,(0,i.Z)((0,a.Z)({space:!0},s),{className:(0,F.concatClassName)(s&&s.className||"",s),children:t.map(((e,t)=>(0,l.jsxs)("li",{className:" _fd-2fa2 _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:[(0,l.jsx)(V.f,{}),(0,l.jsx)("p",{className:" _lh-1hb428t _fos-3db1av _letsp-1f3zkfj _fow-1kjaxvk _ussel-248bx _col-1evhxdy _cur-248bx _fofam-lo33rv _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",children:e})]},t)))}))};s(11962);var X=s(24267),G=s(22532);const Y=" _ml-xwc2xt _o-0dot5 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",K=" _lh-1hb4273 _fos-3db195 _letsp-1f3zkdt _fow-1kjaxtu _col-b5vn3b _fofam-lo33rv _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",J=" _zi-10 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ";s(86704);s(78503);const ee=(0,P.z)(g.n,{display:"list-item",tag:"li",pb:"$1"});var te=s(82810);function se(e){return p.Children.toArray(e).map((e=>{var t;return(null===e||void 0===e||null===(t=e.props)||void 0===t?void 0:t.children)?e.props.children:e}))}s(63513);const re=(0,P.z)(j.FA,{name:"OffsetBox",variants:{size:{hero:{$gtSm:{mx:"$-2"},$gtMd:{mx:"$-4"},$gtLg:{mx:"$-6"}}}}}),ae=e=>(0,l.jsx)(j.FA,(0,i.Z)((0,a.Z)({"data-preview":!0,alignItems:"_ai-1y9dnke",position:"_pos-1pv0ki4",paddingLeft:"_pl-1aj148u",paddingBottom:"_pb-1aj149p",paddingRight:"_pr-1aj148u",paddingTop:"_pt-1aj148u",marginBottom:"_mb-lrpfx7",borderTopRightRadius:"_btrr-lmima8",borderTopLeftRadius:"_btlr-lmima8",borderLeftColor:"_blc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderRightColor:"_brc-zx92k3",borderTopColor:"_btc-zx92k3",borderRightStyle:"_brs-1t9igb",borderLeftStyle:"_bls-1t9igb",borderTopStyle:"_bts-1t9igb",borderBottomStyle:"_bbs-1t9igb",borderLeftWidth:"_blw-133t",borderBottomWidth:"_bbw-133t",borderRightWidth:"_brw-133t",borderTopWidth:"_btw-133t",overflowY:"_ovy-7pvxiq",overflowX:"_ovx-7pvxiq",marginTop:"_mt-12d4",marginRight:"_mr-12d4",marginLeft:"_ml-12d4"},e),{className:(0,F.concatClassName)(e&&e.className||"",e)}));s(83212);var ie=s(84786);const oe=" _maw-12d4 _w-12d4 _transform-cx1iw7 _mb-1aj147z _mt-1aj147z _ml-1aj149p _mr-1aj149p _als-13wozr9 _mah-12d4 _h-12d4 _fg-1 _brs-1t9igb _bls-1t9igb _bts-1t9igb _bbs-1t9igb _blw-12d4 _bbw-133t _brw-12d4 _btw-12d4 _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _ai-13wozr9 ";(0,P.z)(j.sL,{display:"table-cell",tag:"td",paddingTop:10});s(94376);var le=s(89187);const ne=(0,P.z)(j.FA,{tag:"ul",my:"$1",ml:"$4",mr:"$2"});var ce=(0,i.Z)((0,a.Z)({Spacer:u.LZ,ExampleAnimations:W.q,ScrollView:h.ScrollView,Text:x.x,Paragraph:g.n,OffsetBox:re,YStack:j.FA,XStack:j.sL,BenchmarkChart:C.i,Separator:v.Z,Code:R.E,HeroContainer:function(e){let{children:t,demoMultiple:s,smaller:r,noPad:a,alignItems:i}=e;return(0,l.jsx)(j.FA,{display:"_disp-1vf95",marginBottom:"_mb-1aj149p",marginTop:"_mt-1aj149p",alignItems:i||"center",borderBottomLeftRadius:"_bblr-lmimb3",borderBottomRightRadius:"_bbrr-lmimb3",borderTopRightRadius:"_btrr-lmimb3",borderTopLeftRadius:"_btlr-lmimb3",transform:"_transform-19qlv72",minHeight:"_mih-sx7zv",position:"_pos-1pv0ki4",paddingBottom:"_pb-106n5",paddingTop:"_pt-106n5",justifyContent:"_jc-1ch0i1h",className:(0,F.concatClassName)(" hero-gradient hero-scroll "+(a?"  _pt-12d4 _pb-12d4":" ")+" "+(r?"  _mr-_gtMd_12d4 _ml-_gtMd_12d4":" ")+" "+(r?" ":"  _mr-_gtMd_lrpfy2 _ml-_gtMd_lrpfy2")),children:s?(0,l.jsx)("div",{className:" _jc-1y9dnke _maw-wb4k _mah-wb4k _fd-2fa2 _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:(0,l.jsxs)(j.sL,{space:"$3",paddingRight:"_pr-1aj14d5",paddingLeft:"_pl-1aj14d5",children:[(0,l.jsx)(z.Q,{name:"blue",children:(0,l.jsx)(H,{children:t})}),(0,l.jsx)(z.Q,{name:"red",children:(0,l.jsx)(H,{children:t})}),(0,l.jsx)(z.Q,{name:"pink",children:(0,l.jsx)(H,{children:t})}),(0,l.jsx)(z.Q,{name:"orange",children:(0,l.jsx)(H,{children:t})}),(0,l.jsx)(z.Q,{name:"green",children:(0,l.jsx)(H,{children:t})}),(0,l.jsx)(z.Q,{name:"yellow",children:(0,l.jsx)(H,{children:t})})]})}):t})}},L),{Highlights:function(e){let{features:t,disableLinks:s}=e;const r=(0,d.useRouter)(),a=p.useContext(X.Q);return(0,l.jsxs)("div",{className:" _fg-1 _mb-1aj147z _mt-1aj147z _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-1 _ai-13wozr9 _fd-_gtSm_2fa2 ",children:[(0,l.jsxs)("div",{className:" _mih-rw88n _fg-1 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-1 _ai-13wozr9 _mr-_gtSm_1aj14ak _fg-_gtSm_1 _fs-_gtSm_1 ",children:[(0,l.jsx)("h2",{className:" _ussel-248bx _lh-1hb42aj _fos-3db1cl _letsp-1f3zkh9 _col-b5vn3b _fow-16pk _ml-12d4 _mb-1aj147z _mr-12d4 _mt-12d4 _fofam-lo33rv _cur-248bx _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",children:"Features"}),(0,l.jsx)(j.FA,{tag:"ul",marginLeft:"_ml-12d4",marginBottom:"_mb-12d4",marginRight:"_mr-12d4",marginTop:"_mt-12d4",paddingTop:"_pt-12d4",paddingRight:"_pr-12d4",paddingBottom:"_pb-12d4",paddingLeft:"_pl-12d4",space:!0,children:(0,l.jsx)(U,{space:"$2",items:t})})]}),!s&&(0,l.jsxs)(j.FA,{space:"$3",tag:"nav","aria-labelledby":"site-component-info-header",children:[(0,l.jsx)("div",{className:" _pe-none _o-1e-8 _ovy-1ew92ne _ovx-1ew92ne _zi--10000 _ml-ttik _mb-ttik _mr-ttik _mt-ttik _h-133t _w-133t _pos-skvnnb _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:(0,l.jsx)("h2",{id:"site-component-info-heading",children:"Component Reference Links"})}),(0,l.jsx)("div",{className:" _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-1ch0i1h ",children:(0,l.jsxs)(O.Ph,{size:"$2",value:a.version,onValueChange:e=>{e&&r.push("./".concat(a.name,"/").concat(e))},children:[(0,l.jsx)(O.Ph.Trigger,{w:200,iconAfter:I._,children:(0,l.jsx)(O.Ph.Value,{placeholder:"Something"})}),(0,l.jsxs)(O.Ph.Content,{children:[(0,l.jsxs)(O.Ph.ScrollUpButton,{ai:"center",jc:"center",pos:"relative",w:"100%",h:"$3",children:[(0,l.jsx)("div",{className:J,children:(0,l.jsx)(q.K,{size:20})}),(0,l.jsx)(Q.o,{end:"_end-0,1",start:"_start-0,0",fullscreen:!0,position:"_pos-skvnnb",top:"_t-12d4",left:"_l-12d4",right:"_r-12d4",bottom:"_b-12d4",colors:["$background","$backgroundTransparent"]})]}),(0,l.jsx)(O.Ph.Viewport,{minWidth:180,children:(0,l.jsxs)(O.Ph.Group,{children:[(0,l.jsx)(O.Ph.Label,{children:"Versions"}),(a.versions||[]).map(((e,t)=>(0,l.jsx)(O.Ph.Item,{index:t+1,value:e,children:(0,l.jsx)(O.Ph.ItemText,{children:e})},e)))]})}),(0,l.jsxs)(O.Ph.ScrollDownButton,{ai:"center",jc:"center",pos:"relative",w:"100%",h:"$3",children:[(0,l.jsx)("div",{className:J,children:(0,l.jsx)(I._,{size:20})}),(0,l.jsx)(Q.o,{end:"_end-0,1",start:"_start-0,0",fullscreen:!0,position:"_pos-skvnnb",top:"_t-12d4",left:"_l-12d4",right:"_r-12d4",bottom:"_b-12d4",colors:["$backgroundTransparent","$background"]})]})]})]})}),(0,l.jsx)("div",{className:" _transform-n24na2 _mah-12d4 _h-12d4 _fg-1 _brs-1t9igb _bls-1t9igb _bts-1t9igb _bbs-1t9igb _blw-12d4 _bbw-133t _brw-12d4 _btw-12d4 _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _ai-13wozr9 "}),(0,l.jsxs)(j.FA,{marginBottom:"_mb-1aj149p",space:"$1",children:[(0,l.jsx)(G.r,{href:"https://github.com/tamagui/tamagui/tree/master/packages/tamagui/src/views/".concat(a.component,".tsx"),target:"_blank",children:(0,l.jsxs)(j.sL,{alignItems:"_ai-1ch0i1h",space:"$1",children:[(0,l.jsx)("span",{className:K,children:"View source"}),(0,l.jsx)("div",{className:Y,children:(0,l.jsx)(M.d,{size:12,color:"var(--colorHover)"})})]})}),(0,l.jsx)(G.r,{href:"https://www.npmjs.com/package/tamagui",target:"_blank",children:(0,l.jsxs)(j.sL,{alignItems:"_ai-1ch0i1h",space:"$1",children:[(0,l.jsx)("span",{className:K,children:"View on npm"}),(0,l.jsx)("div",{className:Y,children:(0,l.jsx)(M.d,{size:12,color:"var(--colorHover)"})})]})}),(0,l.jsx)(G.r,{href:"https://github.com/tamagui/tamagui/issues/new/choose",target:"_blank",children:(0,l.jsxs)(j.sL,{alignItems:"_ai-1ch0i1h",space:"$1",children:[(0,l.jsx)("span",{className:K,children:"Report an issue"}),(0,l.jsx)("div",{className:Y,children:(0,l.jsx)(M.d,{size:12,color:"var(--colorHover)"})})]})}),a.aria&&(0,l.jsx)("div",{className:" _mb-1aj147z _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:(0,l.jsx)(G.r,{theme:"blue",href:a.aria,target:"_blank",children:(0,l.jsxs)("div",{className:" _pos-1pv0ki4 _fd-2fa2 _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:[(0,l.jsx)(z.Q,{name:"alt1",children:(0,l.jsx)("p",{className:" _lh-1hb4273 _fos-3db195 _letsp-1f3zkdt _fow-1kjaxtu _col-b5vn3b _ussel-248bx _cur-248bx _fofam-lo33rv _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",children:"ARIA design pattern"})}),(0,l.jsx)("div",{className:" _ml-1aj1474 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:(0,l.jsx)(z.Q,{name:"alt2",children:(0,l.jsx)("span",{className:" _ww-ksmcyg _boxs-u5tlt6 _fofam-157dmj3 _disp-1fg6vtl ",children:(0,l.jsx)(M.d,{size:12,color:"var(--color)"})})})})]})})})]})]})]})},PropsTable:function(e){let{data:t,"aria-label":s,"aria-labelledby":r}=e;const a=!(!s&&!r);return(0,l.jsxs)("div",{"aria-label":a?s:"Component Props","aria-labelledby":r,className:" _fg-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _brs-1t9igb _bls-1t9igb _bts-1t9igb _bbs-1t9igb _blw-133t _bbw-133t _brw-133t _btw-133t _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-1 _ai-13wozr9 _ml-lrpfy2 _mr-lrpfy2 _ovy-1ew92ne _ovx-1ew92ne _bblr-lmimb3 _bbrr-lmimb3 _btrr-lmimb3 _btlr-lmimb3 _mt-1aj149p _mb-1aj149p _mr-_sm_12d4 _ml-_sm_12d4 ",children:[(0,l.jsx)("div",{className:" _bc-zx92k3 _pl-1aj149p _pr-1aj149p _pb-1aj147z _pt-1aj147z _fd-2fa2 _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-1ch0i1h ",children:(0,l.jsx)("h3",{className:" _ussel-248bx _lh-pdb8qk _fos-9w19bq _letsp-1reciaa _fow-qaw0v _textTransform-ol9oub _col-qpe6k3 _ml-12d4 _mb-12d4 _mr-12d4 _mt-12d4 _fofam-s6tbtl _cur-248bx _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",children:"Props"})}),t.map(((e,t)=>{let{name:s,type:r,required:a,default:i,description:o}=e;return(0,l.jsxs)(ie.HC,{paddingTop:"_pt-12d4",paddingRight:"_pr-12d4",paddingBottom:"_pb-12d4",paddingLeft:"_pl-12d4",children:[(0,l.jsxs)("div",{className:" _w-wb4k _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:[(0,l.jsxs)("div",{className:" _pl-1aj149p _pr-1aj149p _pb-1aj148u _pt-1aj148u _pos-1pv0ki4 _fd-2fa2 _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 _fd-_sm_1cmh6xi ",children:[(0,l.jsx)("div",{className:" _b-12d4 _r-12d4 _l-12d4 _t-12d4 _pos-skvnnb _o-0dot5 _zi--1 _bc-180kg62 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 "}),(0,l.jsx)(j.sL,{alignItems:"_ai-1ch0i1h",minWidth:"_miw-12zs",space:!0,children:(0,l.jsxs)("h4",{className:" _ussel-248bx _lh-zdsni5 _fos-95cywn _letsp-17rkwtp _w-sdfei _textTransform-none _fow-16pk _col-b5vn3b _ml-12d4 _mb-12d4 _mr-12d4 _mt-12d4 _fofam-rg51cs _cur-248bx _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",children:[s,a?(0,l.jsxs)("span",{className:" _lh-1hb428t _letsp-1f3zkfj _fow-1kjaxvk _col-b5vn3b _ussel-248bx _o-0dot5 _fos-w76juj _cur-248bx _fofam-lo33rv _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",children:[" ",(0,l.jsx)("span",{className:" _lh-1hb428t _fos-3db1av _letsp-1f3zkfj _col-b5vn3b _ussel-248bx _fow-1303 _cur-248bx _fofam-lo33rv _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",children:"(required)"})]}):null]})}),(0,l.jsx)("div",{className:oe}),(0,l.jsxs)(j.sL,{alignItems:"_ai-1ch0i1h",minWidth:"_miw-12zs",flexGrow:"_fg-2",flexShrink:"_fs-1",separator:(0,l.jsx)("div",{className:oe}),className:" _ai-_xs_1y9dnke _fd-_xs_1cmh6xi ",children:[(0,l.jsx)("p",{className:" _lh-zdsngf _fos-95cyux _letsp-17rkwrz _fow-1y0434y _col-b5vn3b _ussel-248bx _whiteSpace-1hu5zm3 _textOverflow-34ck41 _maw-wb4k _mr-1sfcf _ovy-1ew92ne _ovx-1ew92ne _o-0dot8 _cur-248bx _fofam-rg51cs _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",children:r}),(0,l.jsx)("div",{className:" _fd-2fa2 _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-1ch0i1h ",children:Boolean(i)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:" _lh-1hb4273 _fos-3db195 _letsp-1f3zkdt _fow-1kjaxtu _col-b5vn3b _ussel-248bx _o-0dot5 _cur-248bx _fofam-lo33rv _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",children:"Default:\xa0"}),(0,l.jsx)(R.E,{my:"$-1",bc:"$backgroundPress",children:i})]}):null})]})]}),!!o&&(0,l.jsx)("div",{className:" _pl-1aj149p _pr-1aj149p _pb-1aj147z _pt-1aj147z _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:(0,l.jsx)("p",{className:" _lh-1hb4273 _fos-3db195 _letsp-1f3zkdt _fow-1kjaxtu _col-b5vn3b _ussel-248bx _o-0dot65 _cur-248bx _fofam-lo33rv _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",children:o})})]}),(0,l.jsx)("div",{className:" _transform-n24na2 _mb-13ui _mt-13ui _mah-12d4 _h-12d4 _fg-1 _brs-1t9igb _bls-1t9igb _bts-1t9igb _bbs-1t9igb _blw-12d4 _bbw-133t _brw-12d4 _btw-12d4 _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _ai-13wozr9 "})]},"".concat(s,"-").concat(t))}))]})},Description:le.D,UL:ne,LI:ee,DeployToVercel:()=>(0,l.jsx)("a",{href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftamagui%2Fstarters&root-directory=next-expo-solito/next&envDescription=Set%20this%20environment%20variable%20to%201%20for%20Turborepo%20to%20cache%20your%20node_modules.&envLink=https%3A%2F%2Ftamagui.dev&project-name=tamagui-app&repo-name=tamagui-app&demo-title=Tamagui%20App%20%E2%9A%A1%EF%B8%8F&demo-description=Tamagui%20React%20Native%20%2B%20Next.js%20starter&demo-url=https%3A%2F%2Ftamagui.dev%2Fstarter&demo-image=https%3A%2F%2Ftamagui.dev%2Fblog%2Fintroducing-tamagui%2Fhero.png",target:"_blank",rel:"noreferrer",children:(0,l.jsx)("img",{alt:"Deploy with Vercel",style:{height:32,width:90},src:"https://vercel.com/button"})}),Beta:()=>(0,l.jsx)(w.zx,{accessibilityLabel:"Beta blog post",pointerEvents:"_pe-none",size:"$2",paddingRight:"_pr-1aj147z",paddingLeft:"_pl-1aj147z",height:"_h-a0wkrm",borderTopLeftRadius:"_btlr-lmim9d",borderTopRightRadius:"_btrr-lmim9d",borderBottomRightRadius:"_bbrr-lmim9d",borderBottomLeftRadius:"_bblr-lmim9d",theme:"pink_alt3",transform:"_transform-5gsya3",right:"_r-pr11v",top:"_t-pn74p",position:"_pos-skvnnb",children:"Beta"}),IntroParagraph:e=>{var{children:t}=e,s=(0,o.Z)(e,["children"]);return(0,l.jsx)(g.n,(0,i.Z)((0,a.Z)({tag:"span",size:"$5",color:"_col-b5vn3b",fontFamily:"_fofam-lo33rv",fontWeight:"_fow-1kjaxwf",letterSpacing:"_letsp-1f3zkge",fontSize:"_fos-3db1bq",lineHeight:"_lh-1hb429o",marginTop:"_mt-1aj1474",display:"_disp-1jv5hp"},s),{className:(0,F.concatClassName)(" paragraph "+(s&&s.className||""),s),children:t}))},Note:e=>(0,l.jsx)(j.FA,(0,i.Z)((0,a.Z)({tag:"aside",borderBottomLeftRadius:"_bblr-lmima8",borderBottomRightRadius:"_bbrr-lmima8",borderTopRightRadius:"_btrr-lmima8",borderTopLeftRadius:"_btlr-lmima8",marginBottom:"_mb-1aj14ak",marginTop:"_mt-1aj14ak"},e),{className:(0,F.concatClassName)(e&&e.className||"",e)})),Notice:e=>{var{children:t,theme:s="yellow"}=e,r=(0,o.Z)(e,["children","theme"]);return(0,l.jsx)(z.Q,{name:s,children:(0,l.jsx)(j.sL,(0,i.Z)((0,a.Z)({borderBottomLeftRadius:"_bblr-lmimb3",borderBottomRightRadius:"_bbrr-lmimb3",borderTopRightRadius:"_btrr-lmimb3",borderTopLeftRadius:"_btlr-lmimb3",backgroundColor:"_bc-180kg62",paddingLeft:"_pl-1aj149p",paddingBottom:"_pb-1aj148u",paddingRight:"_pr-1aj149p",paddingTop:"_pt-1aj148u",borderLeftColor:"_blc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderRightColor:"_brc-zx92k3",borderTopColor:"_btc-zx92k3",borderTopWidth:"_btw-133t",borderRightWidth:"_brw-133t",borderBottomWidth:"_bbw-133t",borderLeftWidth:"_blw-133t",borderBottomStyle:"_bbs-1t9igb",borderTopStyle:"_bts-1t9igb",borderLeftStyle:"_bls-1t9igb",borderRightStyle:"_brs-1t9igb",space:"$3",position:"_pos-1pv0ki4",marginTop:"_mt-1aj149p",marginBottom:"_mb-1aj149p"},r),{className:(0,F.concatClassName)(r&&r.className||"",r),children:(0,l.jsx)(z.Q,{name:"alt1",children:(0,l.jsx)("p",{className:" _lh-1hb428t _fos-3db1av _letsp-1f3zkfj _fow-1kjaxvk _col-b5vn3b _ussel-248bx _mb-tuzy _mt-tuzy _pb-1aj147z _pt-1aj147z _cur-248bx _fofam-lo33rv _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl paragraph-parent ",children:se(t)})})}))})},h1:e=>(0,l.jsx)(k.H1,(0,i.Z)((0,a.Z)({marginBottom:"_mb-1aj147z",position:"_pos-1pv0ki4",width:"_w-1ur2kuo"},e),{className:(0,F.concatClassName)(e&&e.className||"",e)})),h2:e=>{var{children:t}=e,s=(0,o.Z)(e,["children"]);return(0,l.jsx)(k.H2,(0,i.Z)((0,a.Z)({marginTop:"_mt-1aj14ak",size:"$9",letterSpacing:"_letsp-m29noy",color:"_col-b5vn3b",textTransform:"_textTransform-ol9ozh",fontFamily:"_fofam-s6tbtl",fontWeight:"_fow-qaw61",fontSize:"_fos-9w19gw",lineHeight:"_lh-pdb8vq","data-heading":!0},s),{className:(0,F.concatClassName)(s&&s.className||"",s),children:t}))},h3:e=>{var{children:t,id:s}=e,r=(0,o.Z)(e,["children","id"]);return(0,l.jsxs)(_e,{mt:"$5",mb:"$1",id:s,children:[(0,l.jsx)(k.H3,(0,i.Z)((0,a.Z)({nativeID:s,size:"$8",color:"_col-b5vn3b",textTransform:"_textTransform-ol9oym",fontFamily:"_fofam-s6tbtl",fontWeight:"_fow-qaw56",letterSpacing:"_letsp-1reciel",fontSize:"_fos-9w19g1",lineHeight:"_lh-pdb8uv","data-heading":!0},r),{className:(0,F.concatClassName)(r&&r.className||"",r),children:t})),de(t)]})},h4:e=>(0,l.jsx)(k.H4,(0,i.Z)((0,a.Z)({marginTop:"_mt-1aj14bf"},e),{className:(0,F.concatClassName)(e&&e.className||"",e)})),h5:e=>(0,l.jsx)(k.H5,(0,i.Z)((0,a.Z)({marginTop:"_mt-1aj14ak"},e),{className:(0,F.concatClassName)(e&&e.className||"",e)})),p:e=>(0,l.jsx)(g.n,(0,i.Z)((0,a.Z)({marginBottom:"_mb-1aj148u",marginTop:"_mt-1aj148u",display:"_disp-1jv5hp",size:"$5",color:"_col-b5vn3b",fontFamily:"_fofam-lo33rv",fontWeight:"_fow-1kjaxwf",letterSpacing:"_letsp-1f3zkge",fontSize:"_fos-3db1bq",lineHeight:"_lh-1hb429o"},e),{className:(0,F.concatClassName)(" docs-paragraph "+(e&&e.className||""),e)})),a:e=>{var{href:t="",children:s}=e,r=(0,o.Z)(e,["href","children"]);return(0,l.jsx)(_(),{href:t,passHref:!0,children:(0,l.jsxs)(g.n,(0,i.Z)((0,a.Z)({fontSize:"_fos-w76juj",tag:"a",cursor:"_cur-1seloot",display:"_disp-1fg6vtl"},r),{className:(0,F.concatClassName)(r&&r.className||"",r),children:[s,t.startsWith("http")?(0,l.jsxs)(l.Fragment,{children:["\xa0",(0,l.jsx)("span",{className:" _transform-19qn564 _mr-13ui _fos-w76juj _ww-ksmcyg _boxs-u5tlt6 _fofam-157dmj3 _disp-175izsd ",children:(0,l.jsx)(D.O,{})})]}):null]}))})},hr:()=>(0,l.jsxs)("div",{className:" _maw-14h6 _ml-1sfcf _mr-1sfcf _mb-1aj14bf _mt-1aj14bf _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:[(0,l.jsx)("span",{className:" _bc-0hover-12svx2e _pe-none _fos-sdfei _disp-1vf95 _h-12d4 _lh-12d4 _o-0 _ww-ksmcyg _boxs-u5tlt6 _fofam-157dmj3 "}),(0,l.jsx)("div",{className:" _fg-1 _bbs-1t9igb _bbw-133t _bbc-zx92k3 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-1 _ai-13wozr9 "})]}),ul:e=>{let{children:t}=e;return(0,l.jsx)(ne,{children:p.Children.toArray(t).map((e=>"string"===typeof e?null:e))})},ol:e=>(0,l.jsx)(j.FA,(0,i.Z)((0,a.Z)({},e),{tag:"ol",marginBottom:"_mb-1aj148u",className:(0,F.concatClassName)(e&&e.className||"",e)})),li:e=>(0,l.jsx)(ee,{children:(0,l.jsx)("span",{className:" _lh-1hb428t _fos-3db1av _letsp-1f3zkfj _fow-1kjaxvk _col-b5vn3b _ussel-248bx _cur-248bx _fofam-lo33rv _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",children:e.children})}),strong:e=>(0,l.jsx)(g.n,(0,i.Z)((0,a.Z)({tag:"strong",fontSize:"_fos-w76juj"},e),{fontWeight:"_fow-15yv",className:(0,F.concatClassName)(e&&e.className||"",e)})),img:e=>{var t=function(){return r.apply(this,arguments)}({},e);return(0,l.jsx)("div",{className:" _mb-1aj14bf _mt-1aj14bf _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:(0,l.jsx)(j.FA,(0,i.Z)((0,a.Z)({tag:"img"},t),{maxWidth:"_maw-wb4k",className:(0,F.concatClassName)(t&&t.className||"",t)}))})},pre:e=>{let{children:t}=e;return(0,l.jsx)(l.Fragment,{children:t})},code:e=>{const{hero:t,line:s,scrollable:r,className:n,children:c,id:_,showLineNumbers:d,collapsible:m}=e,f=(0,o.Z)(e,["hero","line","scrollable","className","children","id","showLineNumbers","collapsible"]);return n?(0,l.jsx)("div",{className:" _mt-1aj148u _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:(0,l.jsx)(A,(0,i.Z)((0,a.Z)({isHighlightingLines:void 0!==s,className:n,isHero:void 0!==t,isCollapsible:void 0!==t||void 0!==m,isScrollable:void 0!==r,showLineNumbers:void 0!==d},f),{children:c}))}):(0,l.jsx)(R.w,{children:c})},Image:e=>{var{children:t,size:s}=e,r=(0,o.Z)(e,["children","size"]);return(0,l.jsxs)(re,{size:s,tag:"figure",f:1,mx:0,mb:"$3",ai:"center",jc:"center",ov:"hidden",children:[(0,l.jsx)(y.E,(0,i.Z)((0,a.Z)({maxWidth:"_maw-wb4k"},r),{className:(0,F.concatClassName)(r&&r.className||"",r)})),(0,l.jsx)("figcaption",{className:" _mt-1aj147z _col-vhj0rs _lh-x1xl _ww-ksmcyg _boxs-u5tlt6 _fofam-157dmj3 _disp-1fg6vtl ",children:t})]})},Video:e=>{var{small:t,large:s,src:r,children:a="",muted:i=!0,autoPlay:n=!0,controls:c,size:_}=e;(0,o.Z)(e,["small","large","src","children","muted","autoPlay","controls","size"]);return(0,l.jsxs)("figure",{className:" _mb-1aj14bf _mt-1aj14bf _ml-12d4 _mr-12d4 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:[(0,l.jsx)(re,{size:_,children:(0,l.jsx)("video",{src:r,autoPlay:n,playsInline:!0,muted:i,controls:c,loop:!0,style:{width:"100%",display:"block"}})}),(0,l.jsx)("figcaption",{className:" _col-vhj0rs _mt-1aj147z _lh-x1xl _ww-ksmcyg _boxs-u5tlt6 _fofam-157dmj3 _disp-1fg6vtl ",children:a})]})},blockquote:e=>{var{children:t}=e,s=(0,o.Z)(e,["children"]);return(0,l.jsx)(j.FA,(0,i.Z)((0,a.Z)({justifyContent:"_jc-1ch0i1h",borderLeftColor:"_blc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderRightColor:"_brc-zx92k3",borderTopColor:"_btc-zx92k3",borderLeftStyle:"_bls-1t9igb",borderLeftWidth:"_blw-133t",marginLeft:"_ml-1aj148u",paddingLeft:"_pl-1aj149p",marginTop:"_mt-1aj149p",marginBottom:"_mb-1aj149p"},s),{className:(0,F.concatClassName)(s&&s.className||"",s),children:(0,l.jsx)("p",{className:" _lh-1hb428t _fos-3db1av _letsp-1f3zkfj _fow-1kjaxvk _ussel-248bx _o-0dot65 _col-b5vn3b _whiteSpace-1jktn1g _cur-248bx _fofam-lo33rv _ww-ksmcyg _boxs-u5tlt6 _disp-1fg6vtl ",children:p.Children.toArray(t).map((e=>{var t;return(null===e||void 0===e||null===(t=e.props)||void 0===t?void 0:t.children)?e.props.children:e}))})}))},Preview:e=>(0,l.jsx)(ae,(0,i.Z)((0,a.Z)({},e),{mt:"$5"})),RegisterLink:e=>{let{id:t,index:s,href:r}=e;const a=r.startsWith("http");return p.useEffect((()=>{const e=document.getElementById(t);if(!e)return;const i=e.querySelectorAll(".highlight-word")[s-1];if(!i)return;const o=()=>i.classList.add("on"),l=()=>i.classList.remove("on"),n=()=>a?window.location.replace(r):m().push(r);return i.addEventListener("mouseenter",o),i.addEventListener("mouseleave",l),i.addEventListener("click",n),()=>{i.removeEventListener("mouseenter",o),i.removeEventListener("mouseleave",l),i.removeEventListener("click",n)}}),[]),null},H:e=>{var{id:t,index:s}=e,r=(0,o.Z)(e,["id","index"]);const n=p.useRef(null);return p.useEffect((()=>{const e=n.current,r=document.getElementById(t);if(!r)return;const a=r.querySelectorAll(".highlight-word"),i=b()(s).map((e=>e-1));if(Math.max(...i)>=a.length)return;const o=()=>i.forEach((e=>a[e].classList.add("on"))),l=()=>i.forEach((e=>a[e].classList.remove("on")));return null===e||void 0===e||e.addEventListener("mouseenter",o),null===e||void 0===e||e.addEventListener("mouseleave",l),()=>{null===e||void 0===e||e.removeEventListener("mouseenter",o),null===e||void 0===e||e.removeEventListener("mouseleave",l)}}),[]),(0,l.jsx)(g.n,(0,i.Z)((0,a.Z)({cursor:"_cur-pjqibl",ref:n,fontFamily:"$mono"},r),{className:(0,F.concatClassName)(r&&r.className||"",r)}))},MediaPlayerDemo:e=>{var{theme:t}=e,s=(0,o.Z)(e,["theme"]);return(0,l.jsx)(z.Q,{name:t,children:(0,l.jsx)(te.S,(0,a.Z)({},s))})},GroupDisabledDemo:()=>(0,l.jsxs)(N.Z,{alignSelf:"_als-1ch0i1h",disabled:!0,children:[(0,l.jsx)(w.zx,{children:"First"}),(0,l.jsx)(w.zx,{children:"Second"}),(0,l.jsx)(w.zx,{children:"Third"})]}),DemoButton:()=>(0,l.jsx)(w.zx,{children:"Hello world"})});const _e=e=>{var{id:t,children:s}=e,r=(0,o.Z)(e,["id","children"]);return(0,l.jsxs)(j.sL,(0,i.Z)((0,a.Z)({tag:"a",href:"#".concat(t),id:t,"data-id":t,alignItems:"_ai-1ch0i1h",display:"_disp-175izsd",space:!0},r),{className:(0,F.concatClassName)(r&&r.className||"",r),children:[s,(0,l.jsx)("span",{className:" _o-0dot3 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _disp-1vf95 _fs-0 _ai-13wozr9 ",children:(0,l.jsx)(n.r,{size:12,color:"var(--color)","aria-hidden":!0})})]}))},de=e=>p.Children.map(e,(e=>"string"!==typeof e?e:null)).flat();s(68471)},89187:function(e,t,s){"use strict";s.d(t,{D:function(){return b}});var r=s(37328),a=s(96670),i=s(26297),o=s(52322),l=s(2784),n=s(54503),c=s(81223),_=s(36475);l.createElement;const d=e=>{const t=(0,l.useContext)(c.r2),[s,r]=(0,l.useState)(null);return n.$L&&"undefined"===typeof document||((0,l.useLayoutEffect)((()=>{t&&s!==t.parentName&&r(t.parentName)}),[null==t?void 0:t.parentName]),(0,l.useLayoutEffect)((()=>{if(t)return t.onChangeTheme((()=>{r(t.parentName)}))}),[])),t&&e.children?l.createElement(_.Q,{className:"tui-theme-reset",reset:!0,name:s},e.children):e.children||null};var m=s(26189),f=s(29688),b=e=>{var{children:t}=e,s=(0,i.Z)(e,["children"]);const l="string"===typeof t?t:t.props.children;return(0,o.jsx)(d,{children:(0,o.jsx)(m.H3,(0,a.Z)((0,r.Z)({width:"_w-1ur2kuo",position:"_pos-1pv0ki4",size:"$8",letterSpacing:"_letsp-ttik",color:"_col-b5vn3b",textTransform:"_textTransform-ol9oym",fontFamily:"_fofam-s6tbtl",fontSize:"_fos-9w19g1",lineHeight:"_lh-pdb8uv",theme:"alt3",fontWeight:"_fow-1303",tag:"p",marginTop:"_mt-1aj1469",marginBottom:"_mb-1aj147z",maxWidth:"_maw-wb4k"},s),{className:(0,f.concatClassName)(s&&s.className||"",s),children:l}))})};s(44624)},84501:function(e,t){function s(e){let t,s=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))s.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,i]=t;if(r&&i){r=parseInt(r),i=parseInt(i);const e=r<i?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(i+=e);for(let t=r;t!==i;t+=e)s.push(t)}}return s}t.default=s,e.exports=s},91706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,s=[],r=0;r<e.rangeCount;r++)s.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||s.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},53098:function(e,t,s){e.exports=s(7575)},7575:function(e,t,s){"use strict";t.getMDXComponent=function(e,t){return n(e,t).default};var r=l(s(2784)),a=l(s(52322)),i=l(s(28316));function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(o=function(e){return e?s:t})(e)}function l(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var s=o(t);if(s&&s.has(e))return s.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,s&&s.set(e,r),r}function n(e,t){const s={React:r,ReactDOM:i,_jsx_runtime:a,...t};return new Function(...Object.keys(s),e)(...Object.values(s))}}}]);