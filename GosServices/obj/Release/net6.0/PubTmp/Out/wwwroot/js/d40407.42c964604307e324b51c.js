(window.serpWebpackJsonp=window.serpWebpackJsonp||[]).push([["d40407"],{EzEa:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n("35VS"),r=n("nAbZ"),o=n("cDcd"),c=n.n(o),i=n("EiF6"),u=n("3ZhA"),s=n("fNY8"),b=Object(a.c)({desktop:function(e){var t=e.url,n=e.type,a=e.role,o=e.label,b=e.title,l=e.target,p=e.logNode,f=e.a11yLabel,d=e.vanillaData,j=e.view,O=void 0===j?"default":j,E=Object(i.useBaobab)(p).node,m=c.a.useMemo((function(){return Object(s.b)({view:O})}),[O]),k=Object(u.a)(e,{TagName:"a",logClick:!0,baobabNode:E,data:Object(r.__assign)({type:n},d)});return c.a.createElement(k,{className:m,href:t,target:l,title:b,role:a,"aria-label":f,tabIndex:0},o)}},{file:"src/features/SerpFooter/-Link/index.ts"})},fNY8:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n("ovnD"),r=Object(a.cn)("SerpFooter","Link"),o=r(),c=["geo","settings"]},jXWO:function(e,t,n){"use strict";n.r(t),n.d(t,"SerpFooterExtralinksPopup",(function(){return O}));var a=n("35VS"),r=n("nAbZ"),o=n("cDcd"),c=n.n(o),i=n("8MOd"),u=n("EiF6"),s=n("L029"),b=n("0jHf"),l=n("k8lN"),p=n("dVuR"),f=n("EzEa"),d=n("0CkE"),j=Object(s.b)({text:"m",line:"m"})(Object(l.a)(p.Popup)),O=Object(a.c)({desktop:function(e){var t=e.popup,n=e.items,a=e.baobabParent,s=Object(r.__read)(Object(o.useState)(!0),2),l=s[0],p=s[1],O=Object(o.useCallback)((function(){return p((function(e){return!e}))}),[]);return Object(o.useEffect)((function(){return Object(b.a)().on(d.b,O),l&&d.a.forEach((function(e){return window.addEventListener(e,O)})),function(){Object(b.a)().off(d.b,O),l&&d.a.forEach((function(e){return window.removeEventListener(e,O)}))}}),[l]),c.a.createElement(u.BaobabAppendTo,{parentNode:a,logger:i.a},c.a.createElement(j,Object(r.__assign)({},t,{zIndex:1001,tone:"beauty",theme:"normal",scope:"inplace",target:"anchor",direction:"top-end",visible:l,onClose:O,className:d.c}),n.map((function(e){return e.links.map((function(t,n){return c.a.createElement(f.a,Object(r.__assign)({},t,{key:e.type+n,type:e.type,view:"extralinks-item"}))}))}))))}},{file:"src/features/SerpFooter/-ExtralinksPopup/index.ts"})}}]);