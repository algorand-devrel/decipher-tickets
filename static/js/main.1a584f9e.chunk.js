(this["webpackJsonpdecipher-drop-frontend"]=this["webpackJsonpdecipher-drop-frontend"]||[]).push([[0],{239:function(e,t,n){"use strict";t.a=n.p+"static/media/escrow.tmpl.13c08d54.teal"},296:function(e,t,n){},315:function(e,t){},317:function(e,t){},327:function(e,t){},329:function(e,t){},356:function(e,t){},357:function(e,t){},362:function(e,t){},364:function(e,t){},371:function(e,t){},390:function(e,t){},418:function(e,t){},490:function(e,t){},492:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(28),s=n.n(c),o=(n(296),n(1)),i=n.n(o),u=n(5),l=n(27),d=n(50),f=n(496),p=n(2),b=n(8);function j(e){var t=r.useState(!1),n=Object(l.a)(t,2),a=n[0],c=n[1],s=e.sessionWallet,o=e.updateWallet;function j(e){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(i.a.mark((function t(n){var r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((r=n.currentTarget.id)in d.allowedWallets){t.next=4;break}return void 0!==e.sessionWallet.wallet&&e.sessionWallet.disconnect(),t.abrupt("return",c(!1));case 4:return a=new d.SessionWallet(e.sessionWallet.network,e.sessionWallet.permissionCallback,r),t.next=7,a.connect();case 7:if(t.sent){t.next=9;break}a.disconnect();case 9:e.updateWallet(a),c(!1);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r.useEffect((function(){var e;if(!s.connected())return s.connect().then((function(t){t&&(e=setInterval((function(){s.connected()&&(clearInterval(e),o(s))}),500))})),function(){clearInterval(e)}}),[s,o]);for(var x=[],O=0,m=Object.entries(d.allowedWallets);O<m.length;O++){var g=Object(l.a)(m[O],2),w=g[0],v=g[1];x.push(Object(b.jsx)("li",{children:Object(b.jsx)(f.a,{id:w,large:!0,fill:!0,minimal:!0,outlined:!0,onClick:j,children:Object(b.jsxs)("div",{className:"wallet-option",children:[Object(b.jsx)("img",{alt:"wallet-branding",className:"wallet-branding",src:v.img(e.darkMode)}),Object(b.jsx)("h5",{children:v.displayName()})]})})},w))}if(!e.connected)return Object(b.jsxs)("div",{children:[Object(b.jsx)(f.a,{minimal:!0,rightIcon:"selection",intent:"warning",outlined:!0,onClick:function(){c(!0)},children:"Connect"}),Object(b.jsx)(f.c,{isOpen:a,title:"Select Wallet",onClose:j,children:Object(b.jsx)("div",{className:p.a.DIALOG_BODY,children:Object(b.jsx)("ul",{className:"wallet-option-list",children:x})})})]});var k=e.accts.map((function(e,t){return Object(b.jsxs)("option",{value:t,children:[" ",e.substr(0,8),"...  "]},t)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)(f.d,{onChange:function(t){e.sessionWallet.setAccountIndex(parseInt(t.target.value)),e.updateWallet(e.sessionWallet)},minimal:!0,iconProps:{icon:"symbol-circle",intent:"success"},defaultValue:e.sessionWallet.accountIndex(),children:k}),Object(b.jsx)(f.a,{icon:"log-out",minimal:!0,onClick:function(){e.sessionWallet.disconnect(),e.updateWallet(new d.SessionWallet(e.sessionWallet.network,e.sessionWallet.permissionCallback))}})]})}var h=n(73),x=n(41),O=n(64);function m(e){var t=a.a.useState(e.open),n=Object(l.a)(t,2),c=n[0],s=n[1],o=a.a.useState(e.signed),i=Object(l.a)(o,2),u=i[0],d=i[1],j=a.a.useState(0),h=Object(l.a)(j,2),x=h[0],O=h[1],m=a.a.useCallback((function(){return s(!1)}),[]);Object(r.useEffect)((function(){s(e.open),d(e.signed)}),[e]);var g=0;return Object(r.useEffect)((function(){if(e.signed&&!(g>=1))var t=setInterval((function(){if((g+=.0125)>1)return clearInterval(t),void O(1);O(g)}),100)}),[u,g]),Object(b.jsx)(f.c,{isOpen:c,onClose:m,children:Object(b.jsx)("div",{className:p.a.DIALOG_BODY,children:u?Object(b.jsx)(f.f,{animate:!0,intent:"success",value:x}):Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("p",{children:"Please Approve the transaction in your Mobile Wallet"})})})})}var g=function(){var e=new d.SessionWallet(O.b.network),t=a.a.useState(e),n=Object(l.a)(t,2),r=n[0],c=n[1],s=a.a.useState({id:0,url:"algo-gator.png",name:"TBD"}),o=Object(l.a)(s,2),p=o[0],g=o[1],w=a.a.useState(e.accountList()),v=Object(l.a)(w,2),k=v[0],y=v[1],T=a.a.useState(e.connected()),S=Object(l.a)(T,2),W=S[0],I=S[1],A=a.a.useState(!0),N=Object(l.a)(A,2),C=N[0],E=(N[1],a.a.useState(!1)),L=Object(l.a)(E,2),D=(L[0],L[1]),R=a.a.useState(!1),B=Object(l.a)(R,2),G=B[0],M=B[1],P=a.a.useState(!1),X=Object(l.a)(P,2),K=X[0],H=X[1],J=new URLSearchParams(window.location.search),Q=J.get("escrow"),Y=J.get("addr"),_=J.get("secret");function U(){return(U=Object(u.a)(i.a.mark((function t(){var n,r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==_&&null!=Y&&null!=Q){t.next=2;break}return t.abrupt("return");case 2:return D(!0),H(!0),t.next=6,Object(O.c)(Q);case 6:return n=t.sent,t.next=9,Object(O.a)(e,n,Q,Y,_);case 9:return r=t.sent,M(!0),t.next=13,Object(O.e)(r);case 13:return t.next=15,Object(O.d)(n);case 15:a=t.sent,g(a),H(!1),D(!1);case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)(f.e,{children:[Object(b.jsx)(f.e.Group,{align:h.a.LEFT,children:Object(b.jsx)(f.e.Heading,{children:Object(b.jsx)("img",{className:"header-icon",src:"favicon.ico"})})}),Object(b.jsx)(f.e.Group,{align:h.a.RIGHT,children:Object(b.jsx)(j,{darkMode:!0,sessionWallet:r,accts:k,connected:W,updateWallet:function(e){c(e),y(e.accountList()),I(e.connected())}})})]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(f.b,{elevation:x.a.THREE,children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"content-piece",children:Object(b.jsx)("img",{className:"gator",src:p.url})}),Object(b.jsxs)("div",{className:"content-details",children:[Object(b.jsxs)("div",{className:"detail-prose",children:[Object(b.jsx)("h3",{children:" Greetings Algonaut"}),Object(b.jsx)("p",{children:"Connect your wallet and claim your ticket"})]}),Object(b.jsx)("div",{className:"collect-button",children:Object(b.jsx)(f.a,{minimal:!0,outlined:!0,intent:"success",large:!0,icon:"circle",text:"Collect",onClick:function(){return U.apply(this,arguments)},disabled:!C||!W,loading:K})})]})]})})}),Object(b.jsx)(m,{open:K,signed:G})]})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))},64:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return x})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"e",(function(){return A}));var r=n(1),a=n.n(r),c=n(27),s=n(88),o=n(5),i=n(26),u=n.n(i),l=n(237),d=n.n(l),f=n(238),p=n.n(f),b=n(239),j={seeder:"XPLR7X7LQESKDK3SJYGLM7XJRN7FSINV3AZXKAQIZM4CXAM2ATLQQYXLCA",network:"TestNet"},h=new u.a.Algodv2("","https://testnet.algoexplorerapi.io","");function x(e,t,n,r,a){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(a.a.mark((function e(t,n,r,o,l){var d,f,p,b,x,O,g,w,v,k,T,S;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=t.getDefaultAccount(),e.next=3,y(o);case 3:return f=e.sent,e.next=6,h.getTransactionParams().do();case 6:return(p=e.sent).lastRound=p.firstRound+10,b=new i.Transaction(Object(s.a)({from:d,to:d,assetIndex:n,type:i.TransactionType.axfer,amount:0},p)),x=new i.Transaction(Object(s.a)({from:r,to:d,assetIndex:n,type:i.TransactionType.axfer,amount:0,closeRemainderTo:d},p)),O=new i.Transaction(Object(s.a)({from:r,to:j.seeder,type:i.TransactionType.pay,amount:0,closeRemainderTo:j.seeder},p)),g=[b,x,O],u.a.assignGroupID(g),f.lsig.args=[m(x.txID(),r,l)],w=u.a.signLogicSigTransactionObject(x,f),v=u.a.signLogicSigTransactionObject(O,f),e.next=18,t.signTxn(g);case 18:return k=e.sent,T=Object(c.a)(k,2),S=T[0],e.abrupt("return",[S,w,v]);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(t,n,r){var a=e.from("ProgData"),c=u.a.decodeAddress(n).publicKey,s=d.a.decode.asBytes(t),o=new Uint8Array(a.length+c.length+s.length);o.set(a,0),o.set(c,a.length),o.set(s,a.length+c.length);var i=e.from(r,"base64");return p.a.sign.detached(o,i)}function g(e){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAssetByID(t).do();case 2:return n=e.sent,r=n.params,console.log(n),e.abrupt("return",{id:t,url:r.url,name:r.name});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return k.apply(this,arguments)}function k(){return(k=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.accountInformation(t).do();case 2:if(1===(n=e.sent).assets.length){e.next=5;break}throw Error("wat");case 5:return e.abrupt("return",n.assets[0]["asset-id"]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return T.apply(this,arguments)}function T(){return(T=Object(o.a)(a.a.mark((function t(n){var r,c,s,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="0x"+e.from(u.a.decodeAddress(n).publicKey).toString("hex"),t.next=3,S(b.a);case 3:return c=t.sent,s=c.replace("TMPL_GEN_ADDR",r),t.next=7,h.compile(s).do();case 7:return o=t.sent,t.abrupt("return",new i.LogicSigAccount(e.from(o.result,"base64")));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(e){return W.apply(this,arguments)}function W(){return(W=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return I(e)&&e.arrayBuffer()})).then((function(e){return(new TextDecoder).decode(e)})).catch((function(e){return console.error(e),""}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){if(!e.ok)throw new Error("HTTP ".concat(e.status," - ").concat(e.statusText));return e}function A(e){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.sendRawTransaction(t.map((function(e){return e.blob}))).do();case 2:return n=e.sent,r=n.txId,e.next=6,C(h,r,3);case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t,n){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(a.a.mark((function e(t,n,r){var c,s,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null==t||null==n||r<0)){e.next=2;break}throw new Error("Bad arguments.");case 2:return e.next=4,t.status().do();case 4:if("undefined"!==typeof(c=e.sent)){e.next=7;break}throw new Error("Unable to get node status");case 7:s=c["last-round"]+1,o=s;case 9:if(!(o<s+r)){e.next=23;break}return e.next=12,t.pendingTransactionInformation(n).do();case 12:if(void 0===(i=e.sent)){e.next=18;break}if(!(null!==i["confirmed-round"]&&i["confirmed-round"]>0)){e.next=16;break}return e.abrupt("return",i);case 16:if(!(null!=i["pool-error"]&&i["pool-error"].length>0)){e.next=18;break}throw new Error("Transaction Rejected pool error".concat(i["pool-error"]));case 18:return e.next=20,t.statusAfterBlock(o).do();case 20:o+=1,e.next=9;break;case 23:throw new Error("Transaction not confirmed after ".concat(r," rounds!"));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}).call(this,n(17).Buffer)}},[[492,1,2]]]);
//# sourceMappingURL=main.1a584f9e.chunk.js.map