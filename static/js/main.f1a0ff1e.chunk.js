(this["webpackJsonpmaterial-test"]=this["webpackJsonpmaterial-test"]||[]).push([[0],{160:function(e,t,n){"use strict";n.r(t);var r=n(212),a=n(0),c=n(44),s=n.n(c),i=n(26),o=n(16),u=n(222),j=n(226),l=n(215),b=n(218),p=n(224),h=n(225),d=n(8),x=n(104),f=n.n(x),O=n(101),m=n.n(O),v=n(102),k=n.n(v),g=n(230),y=n(106),w=n.n(y),S=n(105),I=n.n(S),_=n(221),P=n(103),C=n.n(P),q=n(29),E=n(15),z=n(7),D=n.n(z),W=n(84);function B(e){var t=e.split("."),n=Object(d.a)(t,3),r=n[0],a=n[1],c=n[2];return Boolean(r)&&Boolean(a)&&Boolean(c)?(console.log(W.Buffer.from(a,"base64").toString()),JSON.parse(W.Buffer.from(a,"base64").toString())):null}var R="http://readybook.ddns.net:8000",L="GET",T="POST",F="PATCH",N="DELETE";function A(e,t,n){return K.apply(this,arguments)}function K(){return(K=Object(E.a)(D.a.mark((function e(t,n,r){var a,c,s,i,o,u,j,l,b,p,h,d,x;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.data,c=void 0===a?{}:a,s=r.queryParams,i=void 0===s?{}:s,o=r.auth,u={"Content-Type":"application/json",accept:"application/json",Authorization:void 0!==o&&o?"Bearer ".concat(localStorage.getItem("token")):""},j="".concat(R).concat(n),l={method:t,cache:"no-cache",headers:u},t===L?j="".concat(j,"?").concat(new URLSearchParams(i)):l=Object(q.a)(Object(q.a)({},l),{},{body:JSON.stringify(c)}),e.next=7,fetch(j,l);case 7:if(401===(b=e.sent).status){e.next=10;break}return e.abrupt("return",b.json());case 10:if(p=localStorage.getItem("token")){e.next=13;break}return e.abrupt("return",b.json());case 13:return h=B(p),d=localStorage.getItem("refresh_token"),e.next=17,Z(h.id,d);case 17:return x=e.sent,localStorage.setItem("token",x.token),e.abrupt("return",A(t,n,{data:c,queryParams:i,auth:!0}));case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t){return J.apply(this,arguments)}function J(){return(J=Object(E.a)(D.a.mark((function e(t,n){var r,a,c,s;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.data,a=void 0===r?{}:r,c=n.auth,s=void 0!==c&&c,e.next=3,A(T,t,{data:a,auth:s});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){return Y.apply(this,arguments)}function Y(){return(Y=Object(E.a)(D.a.mark((function e(t,n){var r,a,c,s;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.queryParams,a=void 0===r?{}:r,c=n.auth,s=void 0!==c&&c,e.next=3,A(L,t,{queryParams:a,auth:s});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return $.apply(this,arguments)}function $(){return($=Object(E.a)(D.a.mark((function e(t,n){var r,a,c,s;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.data,a=void 0===r?{}:r,c=n.auth,s=void 0!==c&&c,e.next=3,A(N,t,{data:a,auth:s});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t){return Q.apply(this,arguments)}function Q(){return(Q=Object(E.a)(D.a.mark((function e(t,n){var r,a,c,s;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.data,a=void 0===r?{}:r,c=n.auth,s=void 0!==c&&c,e.next=3,A(F,t,{data:a,auth:s});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e,t){return X.apply(this,arguments)}function X(){return(X=Object(E.a)(D.a.mark((function e(t,n){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("/api/auth",{data:{email:t,password:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t){return ee.apply(this,arguments)}function ee(){return(ee=Object(E.a)(D.a.mark((function e(t,n){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("/api/refresh",{data:{user_id:t,refresh_token:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e,t,n){return ne.apply(this,arguments)}function ne(){return(ne=Object(E.a)(D.a.mark((function e(t,n,r){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("/api/users",{data:{email:t,password:n,display_name:r}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return ae.apply(this,arguments)}function ae(){return ae=Object(E.a)(D.a.mark((function e(){var t,n=arguments;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,H("/api/users/books",{queryParams:{skip:t},auth:!0});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function ce(e,t,n,r){return se.apply(this,arguments)}function se(){return(se=Object(E.a)(D.a.mark((function e(t,n,r,a){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("/api/users/books",{data:{item_number:t,is_purchased:n,is_read:r,is_favorite:a},auth:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(E.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("/api/users/books",{data:{item_number:t},auth:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e,t,n,r){return je.apply(this,arguments)}function je(){return(je=Object(E.a)(D.a.mark((function e(t,n,r,a){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U("/api/users/books",{data:{item_number:t,is_purchased:n,is_read:r,is_favorite:a},auth:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e){return be.apply(this,arguments)}function be(){return(be=Object(E.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("/api/users/series",{data:{series:t},auth:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){return he.apply(this,arguments)}function he(){return(he=Object(E.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("/api/users/series",{auth:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e){return xe.apply(this,arguments)}function xe(){return(xe=Object(E.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("/api/users/series",{data:{series:t},auth:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(E.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("/api/users/authors",{data:{author:t},auth:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(){return ve.apply(this,arguments)}function ve(){return(ve=Object(E.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("/api/users/authors",{auth:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ke(e){return ge.apply(this,arguments)}function ge(){return(ge=Object(E.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("/api/users/authors",{data:{author:t},auth:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e){return we.apply(this,arguments)}function we(){return we=Object(E.a)(D.a.mark((function e(t){var n,r=arguments;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=3,H("/api/books",{queryParams:{keyword:t,page:n},auth:!0});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),we.apply(this,arguments)}function Se(e){return Ie.apply(this,arguments)}function Ie(){return(Ie=Object(E.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("/api/author/books",{queryParams:{author:t},auth:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _e(e){return Pe.apply(this,arguments)}function Pe(){return(Pe=Object(E.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("/api/series/books",{queryParams:{series:t},auth:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ce=n(1);function qe(e){var t=e.itemNumber,n=Object(a.useState)(e.isRead),r=Object(d.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(e.isPurchased),o=Object(d.a)(i,2),u=o[0],j=o[1],l=Object(a.useState)(e.isFavorited),b=Object(d.a)(l,2),p=b[0],h=b[1];return Object(Ce.jsxs)(g.a,{children:[Object(Ce.jsx)(_.a,{onClick:function(){!c||u||p?p&&u?ue(t,u,!c,p):ce(t,u,!c,p):ie(t),s(!c)},children:c?Object(Ce.jsx)(m.a,{}):Object(Ce.jsx)(k.a,{})}),Object(Ce.jsx)(_.a,{onClick:function(){c||!u||p?p&&c?ue(t,!u,c,p):ce(t,!u,c,p):ie(t),j(!u)},children:u?Object(Ce.jsx)(C.a,{}):Object(Ce.jsx)(f.a,{})}),Object(Ce.jsx)(_.a,{onClick:function(){c||u||!p?u&&c?ue(t,u,c,!p):ce(t,u,c,!p):ie(t),h(!p)},children:p?Object(Ce.jsx)(I.a,{}):Object(Ce.jsx)(w.a,{})})]})}var Ee=n(5),ze=Object(Ee.a)(u.a)((function(e){e.theme;return{display:"flex",flexDirection:"column",minHeight:"100vh"}})),De=n(71),We=n(223),Be=n(231),Re=n(232),Le=n(4),Te=n(207),Fe=Object(Ee.a)("div")((function(e){var t=e.theme;return Object(Le.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(Te.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(Te.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"})})),Ne=n(107),Ae=n.n(Ne),Ke=Object(Ee.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),Ge=n(21),Je=Object(Ee.a)(Ge.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(Le.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}}));function He(e){var t=e.placeholder,n=e.keyPress;return Object(Ce.jsxs)(Fe,{children:[Object(Ce.jsx)(Ke,{children:Object(Ce.jsx)(Ae.a,{})}),Object(Ce.jsx)(Je,{placeholder:t||"Search...",inputProps:{"aria-label":"search"},onKeyPress:n})]})}var Ye=["searchBox","children"];function Me(e){var t=e.searchBox,n=e.children,r=Object(De.a)(e,Ye);return Object(Ce.jsx)(We.a,{position:"static",id:"header",children:Object(Ce.jsx)(Be.a,{maxWidth:"99%",children:Object(Ce.jsxs)(Re.a,{disableGutters:!0,children:[Object(Ce.jsx)(h.a,{variant:"h4",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"},flexGrow:0},children:"Read-Y"}),t&&Object(Ce.jsx)(He,Object(q.a)({},r)),Object(Ce.jsx)(u.a,{sx:{flexGrow:1}}),Object(Ce.jsx)("div",{children:n})]})})})}var $e=Object(Ee.a)("img")({margin:"auto",display:"block",width:200,height:"auto"});function Ue(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!0),i=Object(d.a)(s,2),o=i[0],u=i[1],l=function(){var t=Object(E.a)(D.a.mark((function t(){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,me();case 2:-1===t.sent.indexOf(e.bookInfo)?c(!1):c(!0),u(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){l()}),[]);var b=function(){var t=Object(E.a)(D.a.mark((function t(){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=6;break}return t.next=3,ke(e.bookInfo);case 3:c(!1),t.next=10;break;case 6:return console.log("\u304a\u6c17\u306b\u5165\u308a\u767b\u9332"),t.next=9,fe(e.bookInfo);case 9:c(!0);case 10:c(!r);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return o?Object(Ce.jsx)(j.a,{variant:"outlined",sx:{mt:1},children:"Loading..."}):r?Object(Ce.jsx)(j.a,{variant:"outlined",onClick:b,sx:{mt:1},children:"\u3053\u306e\u66f8\u7c4d\u306e\u4f5c\u8005\u3092\u304a\u6c17\u306b\u5165\u308a\u767b\u9332\u6e08\u307f"}):Object(Ce.jsx)(j.a,{variant:"contained",onClick:b,sx:{mt:1},children:"\u3053\u306e\u66f8\u7c4d\u306e\u4f5c\u8005\u3092\u304a\u6c17\u306b\u5165\u308a\u767b\u9332\u3059\u308b"})}function Qe(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!0),i=Object(d.a)(s,2),o=i[0],u=i[1],l=function(){var t=Object(E.a)(D.a.mark((function t(){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,pe();case 2:-1===t.sent.indexOf(e.bookInfo)?c(!1):c(!0),u(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){l()}),[]);var b=function(){var t=Object(E.a)(D.a.mark((function t(){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=6;break}return t.next=3,de(e.bookInfo);case 3:c(!1),t.next=9;break;case 6:return t.next=8,le(e.bookInfo);case 8:c(!0);case 9:c(!r);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return o?Object(Ce.jsx)(j.a,{variant:"outlined",sx:{mt:1},children:"Loading..."}):r?Object(Ce.jsx)(j.a,{variant:"outlined",onClick:b,sx:{mt:1},children:"\u3053\u306e\u30b7\u30ea\u30fc\u30ba\u3092\u304a\u6c17\u306b\u5165\u308a\u767b\u9332\u6e08\u307f"}):Object(Ce.jsx)(j.a,{variant:"contained",onClick:b,sx:{mt:1},children:"\u3053\u306e\u30b7\u30ea\u30fc\u30ba\u3092\u304a\u6c17\u306b\u5165\u308a\u767b\u9332\u3059\u308b"})}var Ve=function(){var e=Object(o.e)().state.bookInfo;return console.log(e.book.series_name),e.book.series_name?Object(Ce.jsxs)(ze,{children:[Object(Ce.jsx)(Me,{searchBox:!0,placeholder:"\u66f8\u7c4d\u691c\u7d22",children:Object(Ce.jsx)(j.a,{color:"inherit",size:"large",to:"/mypage",component:i.b,children:"\u30de\u30a4\u30da\u30fc\u30b8\u3078"})}),Object(Ce.jsx)(u.a,{sx:{flex:1,height:"auto",p:3},component:p.a,square:!0,children:Object(Ce.jsxs)(b.a,{container:!0,spacing:4,children:[Object(Ce.jsx)(b.a,{item:!0,children:Object(Ce.jsx)(l.a,{sx:{width:200,height:200},children:Object(Ce.jsx)($e,{alt:"\u8868\u7d19",src:e.book.image_url})})}),Object(Ce.jsx)(b.a,{item:!0,xs:12,sm:!0,container:!0,children:Object(Ce.jsxs)(b.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:1,children:[Object(Ce.jsxs)(b.a,{item:!0,xs:!0,children:[Object(Ce.jsx)(h.a,{sx:{fontSize:30},component:"div",children:e.book.title}),Object(Ce.jsxs)(h.a,{sx:{fontSize:20},component:"div",children:["\u30b7\u30ea\u30fc\u30ba\u540d\uff1a",e.book.series_name]}),Object(Ce.jsxs)(h.a,{sx:{fontSize:20},component:"div",children:["\u8457\u8005\uff1a",e.book.author]}),Object(Ce.jsx)(qe,{itemNumber:e.book.item_number,isRead:e.is_read,isPurchased:e.is_purchased,isFavorited:e.is_favorite}),Object(Ce.jsx)(h.a,{component:"div",children:e.book.description})]}),Object(Ce.jsxs)(b.a,{item:!0,sx:{display:"flex",flexDirection:"column"},children:[Object(Ce.jsx)(Qe,{bookInfo:e.book.series_name}),Object(Ce.jsx)(Ue,{bookInfo:e.book.author})]})]})})]})})]}):Object(Ce.jsxs)(ze,{children:[Object(Ce.jsx)(Me,{searchBox:!0,placeholder:"\u66f8\u7c4d\u691c\u7d22",children:Object(Ce.jsx)(j.a,{color:"inherit",size:"large",to:"/mypage",component:i.b,children:"\u30de\u30a4\u30da\u30fc\u30b8\u3078"})}),Object(Ce.jsx)(u.a,{sx:{flex:1,height:"auto",p:3},component:p.a,square:!0,children:Object(Ce.jsxs)(b.a,{container:!0,spacing:4,children:[Object(Ce.jsx)(b.a,{item:!0,children:Object(Ce.jsx)(l.a,{sx:{width:200,height:200},children:Object(Ce.jsx)($e,{alt:"\u8868\u7d19",src:e.book.image_url})})}),Object(Ce.jsx)(b.a,{item:!0,xs:12,sm:!0,container:!0,children:Object(Ce.jsxs)(b.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:1,children:[Object(Ce.jsxs)(b.a,{item:!0,xs:!0,children:[Object(Ce.jsx)(h.a,{sx:{fontSize:30},component:"div",children:e.book.title}),Object(Ce.jsxs)(h.a,{sx:{fontSize:20},component:"div",children:["\u30b7\u30ea\u30fc\u30ba\u540d\uff1a",e.book.series_name?e.book.series_name:"\u306a\u3057"]}),Object(Ce.jsxs)(h.a,{sx:{fontSize:20},component:"div",children:["\u8457\u8005\uff1a",e.book.author]}),Object(Ce.jsx)(qe,{itemNumber:e.book.item_number,isRead:e.is_read,isPurchased:e.is_purchased,isFavorited:e.is_favorite}),Object(Ce.jsx)(h.a,{component:"div",children:e.book.description})]}),Object(Ce.jsx)(b.a,{item:!0,sx:{display:"flex",flexDirection:"column"},children:Object(Ce.jsx)(Ue,{bookInfo:e.book.author})})]})})]})})]})},Xe=n(219),Ze=n(227),et=n(216),tt=n(74),nt=n.n(tt),rt=n(213),at=n(109),ct=n.n(at),st=n(108),it=n.n(st);function ot(){var e=Object(o.f)(),t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),l=Object(d.a)(s,2),x=l[0],f=l[1],O=Object(a.useState)(""),m=Object(d.a)(O,2),v=m[0],k=m[1],g=function(){var t=Object(E.a)(D.a.mark((function t(n){var r,a,c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),f(!0),r=new FormData(n.currentTarget),t.next=5,te(r.get("email"),r.get("password"),r.get("name"));case 5:if(a=t.sent,console.log(a),"The email is already used."!==a.detail){t.next=11;break}return k("\u3053\u306eE\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306f\u65e2\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),f(!1),t.abrupt("return");case 11:return t.next=13,V(r.get("email"),r.get("password"));case 13:c=t.sent,console.log(c),localStorage.setItem("token",c.token),localStorage.setItem("refresh_token",c.refresh_token),e("/mypage");case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(Ce.jsxs)(ze,{children:[Object(Ce.jsx)(Me,{children:Object(Ce.jsx)(j.a,{color:"inherit",size:"large",to:"/login",component:i.b,children:"\u30ed\u30b0\u30a4\u30f3"})}),Object(Ce.jsxs)(b.a,{container:!0,sx:{Height:"100vh",flex:1},children:[Object(Ce.jsx)(b.a,{item:!0,lg:8,sm:12,sx:{display:"flex",alignItems:"center"},children:Object(Ce.jsxs)(p.a,{square:!0,elevation:0,sx:{p:2,backgroundColor:"#ffffffCF",flex:1},children:[Object(Ce.jsx)("h1",{children:"Are you ReadY?"}),Object(Ce.jsx)("h3",{children:"Read-Y\u306f\u3042\u306a\u305f\u306e\u8aad\u66f8\u751f\u6d3b\u3092\u3088\u308a\u5feb\u9069\u306b\u3059\u308b\u305f\u3081\u306e\u66f8\u7c4d\u7ba1\u7406\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002"})]})}),Object(Ce.jsx)(b.a,{item:!0,lg:4,sm:12,component:p.a,square:!0,children:Object(Ce.jsxs)(u.a,{sx:{py:8,px:4,display:"flex",flexDirection:"column",alignItems:"center",height:"auto"},children:[Object(Ce.jsx)(Xe.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(Ce.jsx)(nt.a,{})}),Object(Ce.jsx)(h.a,{component:"h1",variant:"h5",children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u4f5c\u6210"}),Object(Ce.jsxs)(u.a,{component:"form",onSubmit:g,sx:{mt:1,width:1},children:[Object(Ce.jsx)(rt.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",name:"email",autoComplete:"email",autoFocus:!0,error:v,helperText:v}),Object(Ce.jsx)(rt.a,{margin:"normal",required:!0,fullWidth:!0,id:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",name:"password",autoComplete:"current-password",type:r.showPassword?"text":"password",InputProps:{endAdornment:Object(Ce.jsx)(Ze.a,{position:"end",children:Object(Ce.jsx)(_.a,{"aria-label":"toggle password visibility",onClick:function(){c({showPassword:!r.showPassword})},onMouseDown:function(e){e.preventDefault()},edge:"end",children:r.showPassword?Object(Ce.jsx)(it.a,{}):Object(Ce.jsx)(ct.a,{})})})}}),Object(Ce.jsx)(rt.a,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"\u8868\u793a\u540d",name:"name",autoComplete:"name"}),Object(Ce.jsx)(et.a,{type:"submit",fullWidth:!0,variant:x?"outlined":"contained",sx:{mt:3,mb:2},loading:x,children:"\u4f5c\u6210"})]})]})})]})]})}function ut(){var e=Object(o.f)(),t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(d.a)(s,2),j=i[0],l=i[1],x=function(){var t=Object(E.a)(D.a.mark((function t(n){var r,a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),c(!0),r=new FormData(n.currentTarget),t.next=5,V(r.get("email"),r.get("password"));case 5:if(!(a=t.sent).detail){t.next=10;break}return l("E\u30e1\u30fc\u30eb\u3001\u3082\u3057\u304f\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059\u3002"),c(!1),t.abrupt("return");case 10:localStorage.setItem("token",a.token),localStorage.setItem("refresh_token",a.refresh_token),e("/mypage");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(Ce.jsxs)(ze,{children:[Object(Ce.jsx)(Me,{}),Object(Ce.jsx)(b.a,{container:!0,sx:{height:"auto",flex:1},children:Object(Ce.jsx)(b.a,{item:!0,xs:12,sm:12,md:12,component:p.a,elevation:6,square:!0,children:Object(Ce.jsxs)(u.a,{sx:{py:8,px:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(Ce.jsx)(Xe.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(Ce.jsx)(nt.a,{})}),Object(Ce.jsx)(h.a,{component:"h1",variant:"h5",children:"\u30ed\u30b0\u30a4\u30f3"}),Object(Ce.jsxs)(u.a,{component:"form",sx:{mt:1},onSubmit:x,children:[Object(Ce.jsx)(rt.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",name:"email",autoComplete:"email"}),Object(Ce.jsx)(rt.a,{margin:"normal",required:!0,fullWidth:!0,id:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",name:"password",autoComplete:"password"}),Object(Ce.jsx)(h.a,{component:"div",sx:{color:"red"},children:j}),Object(Ce.jsx)(et.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},loading:r,children:"\u30ed\u30b0\u30a4\u30f3"})]})]})})})]})}var jt=n(228),lt=n(214),bt=n(110),pt=n.n(bt),ht=n(111),dt=n(220),xt=n(233),ft=n(234),Ot=n(235);function mt(e){var t=Object(o.f)(),n=e.bookInfo;return Object(Ce.jsxs)(xt.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(Ce.jsx)(ft.a,{component:"img",image:n.book.image_url}),Object(Ce.jsx)(qe,{itemNumber:n.book.item_number,isRead:n.is_read,isPurchased:n.is_purchased,isFavorited:n.is_favorite}),Object(Ce.jsxs)(Ot.a,{children:[Object(Ce.jsx)(h.a,{className:"cardTitle",gutterBottom:!0,variant:"h6",component:"div",onClick:function(){t("/bookdetail",{state:{bookInfo:e.bookInfo}})},children:n.book.title}),Object(Ce.jsxs)(h.a,{component:"div",variant:"div",children:["\u8457\u8005: ",n.book.author]}),Object(Ce.jsxs)(h.a,{component:"div",variant:"div",children:["\u30b7\u30ea\u30fc\u30ba: ",n.book.series_name?n.book.series_name:"\u306a\u3057"]})]})]})}function vt(e){var t=e.bookInfos,n=e.text;return t.length?Object(Ce.jsx)(b.a,{container:!0,spacing:3,children:t.map((function(e,t){return Object(Ce.jsx)(b.a,{item:!0,xs:12,sm:6,md:2.4,children:Object(Ce.jsx)(mt,{bookInfo:e})},t)}))}):Object(Ce.jsx)("h2",{children:n})}function kt(e){var t=a.useState([]),n=Object(d.a)(t,2),r=n[0],c=n[1],s=e.favoriteAuthor,i=Object(ht.a)({typography:{author:{fontSize:20,flex:1},info:{fontSize:30}}});return a.useEffect((function(){var e=function(){var e=Object(E.a)(D.a.mark((function e(){var t,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.replace("/"," "),e.next=3,Se(t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(Ce.jsx)(b.a,{children:Object(Ce.jsxs)(p.a,{sx:{my:5},elevation:5,children:[Object(Ce.jsx)(dt.a,{theme:i,children:Object(Ce.jsx)(h.a,{sx:{p:3.5},variant:"author",component:"div",children:s})}),Object(Ce.jsx)(b.a,{children:Object(Ce.jsx)(g.a,{children:Object(Ce.jsx)(Ue,{bookInfo:s})})}),Object(Ce.jsx)(b.a,{container:!0,spacing:4,alignItems:"center",justify:"center",children:Object(Ce.jsx)(b.a,{item:!0,sx:{m:1},sm:!0,container:!0,spacing:2,children:Object(Ce.jsx)(vt,{bookInfos:r,text:"\u691c\u7d22\u30ef\u30fc\u30c9\u306b\u8a72\u5f53\u3059\u308b\u66f8\u7c4d\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002"})})})]})})}function gt(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)([]),i=Object(d.a)(s,2),o=i[0],u=i[1],j=Object(a.useState)(!0),l=Object(d.a)(j,2),p=l[0],h=l[1],x=function(){var e=Object(E.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me();case 2:t=e.sent,u(t),c(!!t),h(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){x()}),[]),p?Object(Ce.jsx)(Be.a,{sx:{p:0},maxWidth:"xl",children:Object(Ce.jsx)(b.a,{children:"Loading..."})}):r?Object(Ce.jsx)(Be.a,{sx:{p:0},maxWidth:"xl",children:Object(Ce.jsx)(b.a,{children:o.map((function(e,t){return Object(Ce.jsx)(kt,{favoriteAuthor:e},t)}))})}):Object(Ce.jsx)(Be.a,{sx:{p:0},maxWidth:"xl",children:Object(Ce.jsx)("h2",{children:"\u73fe\u5728\u304a\u6c17\u306b\u5165\u308a\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u4f5c\u8005\u306f\u3044\u307e\u305b\u3093"})})}function yt(e){var t=a.useState([]),n=Object(d.a)(t,2),r=n[0],c=n[1],s=e.favoriteSeries,i=Object(ht.a)({typography:{Series:{fontSize:20,flex:1},info:{fontSize:30}}});return a.useEffect((function(){var e=function(){var e=Object(E.a)(D.a.mark((function e(){var t,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.replace("/"," "),e.next=3,_e(t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(Ce.jsx)(b.a,{children:Object(Ce.jsxs)(p.a,{sx:{my:5},elevation:5,children:[Object(Ce.jsx)(dt.a,{theme:i,children:Object(Ce.jsx)(h.a,{sx:{p:3.5,fontsize:35},variant:"Series",component:"div",children:s})}),Object(Ce.jsx)(b.a,{children:Object(Ce.jsx)(g.a,{children:Object(Ce.jsx)(Qe,{bookInfo:s})})}),Object(Ce.jsx)(b.a,{container:!0,spacing:4,alignItems:"center",justify:"center",children:Object(Ce.jsx)(b.a,{item:!0,sx:{m:1},sm:!0,container:!0,spacing:2,children:Object(Ce.jsx)(vt,{bookInfos:r,text:"\u691c\u7d22\u30ef\u30fc\u30c9\u306b\u8a72\u5f53\u3059\u308b\u66f8\u7c4d\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002"})})})]})})}function wt(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)([]),i=Object(d.a)(s,2),o=i[0],u=i[1],j=Object(a.useState)(!0),l=Object(d.a)(j,2),p=l[0],h=l[1],x=function(){var e=Object(E.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:t=e.sent,u(t),c(!!t),h(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){x()}),[]),p?Object(Ce.jsx)(Be.a,{sx:{p:0},maxWidth:"xl",children:Object(Ce.jsx)(b.a,{children:"Loading..."})}):r?Object(Ce.jsx)(Be.a,{sx:{p:0},maxWidth:"xl",children:Object(Ce.jsx)(b.a,{children:o.map((function(e,t){return Object(Ce.jsx)(yt,{favoriteSeries:e},t)}))})}):Object(Ce.jsx)(Be.a,{sx:{p:0},maxWidth:"xl",children:Object(Ce.jsx)("h2",{children:"\u73fe\u5728\u304a\u6c17\u306b\u5165\u308a\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u30b7\u30ea\u30fc\u30ba\u306f\u3042\u308a\u307e\u305b\u3093"})})}var St=["children","value","index"];function It(e){var t=e.children,n=e.value,r=e.index,a=Object(De.a)(e,St);return Object(Ce.jsx)("div",Object(q.a)(Object(q.a)({role:"tabpanel",hidden:n!==r,id:"tabpanel-".concat(r),"aria-labelledby":"tab-".concat(r)},a),{},{children:n===r&&Object(Ce.jsx)(u.a,{sx:{p:3},children:t})}))}function _t(e){return{id:"tab-".concat(e),"aria-controls":"tabpanel-".concat(e)}}function Pt(){var e=Object(o.f)(),t=Object(a.useState)(0),n=Object(d.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!0),i=Object(d.a)(s,2),j=i[0],l=i[1],b=Object(a.useState)([]),p=Object(d.a)(b,2),h=p[0],x=p[1],f=function(){var e=Object(E.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=x,e.next=3,re();case 3:e.t1=e.sent,(0,e.t0)(e.t1),l(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var t=Object(E.a)(D.a.mark((function t(n){var r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"===n.key){t.next=2;break}return t.abrupt("return");case 2:if(n.preventDefault(),""!==(r=(n.target.value||"").replace(/^\s+|\s+$/g,""))){t.next=6;break}return t.abrupt("return");case 6:e("/searchresult",{state:{searchKeyword:r}});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){f()}),[]),Object(Ce.jsxs)(ze,{children:[Object(Ce.jsx)(Me,{searchBox:!0,placeholder:"\u66f8\u7c4d\u3092\u691c\u7d22...",keyPress:O}),Object(Ce.jsxs)(u.a,{sx:{height:"auto",bgcolor:"background.paper",width:1,flex:1},children:[Object(Ce.jsx)(We.a,{position:"static",elevation:0,children:Object(Ce.jsxs)(lt.a,{value:r,onChange:function(e,t){c(t)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth",children:[Object(Ce.jsx)(jt.a,Object(q.a)({label:"\u304a\u6c17\u306b\u5165\u308a\u66f8\u7c4d"},_t(0))),Object(Ce.jsx)(jt.a,Object(q.a)({label:"\u304a\u6c17\u306b\u5165\u308a\u4f5c\u8005"},_t(1))),Object(Ce.jsx)(jt.a,Object(q.a)({label:"\u304a\u6c17\u306b\u5165\u308a\u30b7\u30ea\u30fc\u30ba"},_t(2)))]})}),Object(Ce.jsxs)(pt.a,{index:r,children:[Object(Ce.jsx)(It,{value:r,index:0,children:j?"Loading...":Object(Ce.jsx)(vt,{bookInfos:h,text:"\u304a\u6c17\u306b\u5165\u308a\u66f8\u7c4d\u306f\u3042\u308a\u307e\u305b\u3093\u3002"})}),Object(Ce.jsx)(It,{value:r,index:1,children:Object(Ce.jsx)(gt,{bookInfos:h})}),Object(Ce.jsx)(It,{value:r,index:2,children:Object(Ce.jsx)(wt,{bookInfos:h})})]})]})]})}var Ct=n(229),qt=function(e,t){for(var n=[],r=e;r<=t;r++)n.push(r);return n};function Et(){var e=Object(o.f)(),t=Object(o.e)().state,n=Object(a.useState)([]),r=Object(d.a)(n,2),c=r[0],s=r[1],l=Object(a.useState)(!0),b=Object(d.a)(l,2),h=b[0],x=b[1],f=function(){var t=Object(E.a)(D.a.mark((function t(n){var r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"===n.key){t.next=2;break}return t.abrupt("return");case 2:if(n.preventDefault(),""!==(r=(n.target.value||"").replace(/^\s+|\s+$/g,""))){t.next=6;break}return t.abrupt("return");case 6:x(!0),e("/searchresult",{state:{searchKeyword:r}});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=function(){var e=Object(E.a)(D.a.mark((function e(){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,ye(t.searchKeyword);case 3:n=e.sent,s(n),x(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),document.title="".concat(t.searchKeyword,"\u306e\u691c\u7d22\u7d50\u679c")}),[t]),Object(Ce.jsxs)(ze,{children:[Object(Ce.jsx)(Me,{searchBox:!0,placeholder:"\u66f8\u7c4d\u3092\u691c\u7d22...",keyPress:f,children:Object(Ce.jsx)(j.a,{color:"inherit",size:"large",to:"/mypage",component:i.b,children:"\u30de\u30a4\u30da\u30fc\u30b8"})}),Object(Ce.jsx)(u.a,{sx:{flex:1,height:"auto",p:3},component:p.a,square:!0,children:h?"\u3051\u3093\u3055\u304f\u3061\u3046...":Object(Ce.jsx)(vt,{bookInfos:c.books,text:"\u691c\u7d22\u30ef\u30fc\u30c9\u306b\u8a72\u5f53\u3059\u308b\u66f8\u7c4d\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002"})}),Object(Ce.jsx)(u.a,{sx:{display:"flex",alignItems:"center",p:3,flexDirection:"column"},component:p.a,square:!0,children:Object(Ce.jsx)(Ct.a,{children:qt(1,c.page_count).map((function(e,t){return Object(Ce.jsx)(j.a,{variant:e===c.page?"outlined":"contained",children:e},t)}))})})]})}s.a.render(Object(Ce.jsxs)(i.a,{children:[Object(Ce.jsx)(r.a,{}),Object(Ce.jsxs)(o.c,{children:[Object(Ce.jsx)(o.a,{path:"/",element:Object(Ce.jsx)(ot,{})}),Object(Ce.jsx)(o.a,{path:"/mypage",element:Object(Ce.jsx)(Pt,{})}),Object(Ce.jsx)(o.a,{path:"/login",element:Object(Ce.jsx)(ut,{})}),Object(Ce.jsx)(o.a,{path:"/searchresult",element:Object(Ce.jsx)(Et,{})}),Object(Ce.jsx)(o.a,{path:"/bookdetail",element:Object(Ce.jsx)(Ve,{})})]})]}),document.getElementById("root"))}},[[160,1,2]]]);
//# sourceMappingURL=main.f1a0ff1e.chunk.js.map