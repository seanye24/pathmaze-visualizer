(this["webpackJsonppath-visualizer"]=this["webpackJsonppath-visualizer"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/map.197c485d.svg"},function(e,t,n){e.exports=n.p+"static/media/algorithm.6820b192.svg"},function(e,t,n){e.exports=n.p+"static/media/creativity.5a071791.svg"},function(e,t,n){e.exports=n.p+"static/media/weight.f8a5f7dd.svg"},function(e,t,n){e.exports=n.p+"static/media/start.ff2b9671.svg"},function(e,t,n){e.exports=n.p+"static/media/end.93326d55.svg"},,function(e,t,n){e.exports=n(35)},,,,,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r,i,o,u,s,c,l,f,d,m,S,p,h=n(0),b=n.n(h),g=n(7),v=n.n(g),I=n(1),E=n(3),T=(n(27),b.a.memo((function(e){return b.a.createElement("div",{id:e.id,className:e.className,onMouseEnter:function(){return e.onMouseEnter(e.id)},onMouseDown:function(){return e.onMouseDown(e.id)},onMouseUp:function(){return e.onMouseUp(e.id)},onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,tabIndex:-1})}))),_=n(2),O=n.n(_),j=n(6),D=n(5),H={};H.DEFAULT_SQ="square",H.START_SQ="startSquare",H.END_SQ="endSquare",H.WALL_SQ="wallSquare",H.WEIGHT_SQ="weightSquare",H.VISITED_SQ="visitedSquare",H.VISITED_WEIGHT_SQ="visitedWeightSquare",H.VISITED_HEAD_SQ="visitedHeadSquare",H.VISITED_FINISHED_SQ="visitedFinishedSquare",H.VISITED_FINISHED_WEIGHT_SQ="visitedFinishedWeightSquare",H.PATH_SQ="pathSquare",H.PATH_WEIGHT_SQ="pathWeightSquare",H.PATH_HEAD_SQ="pathHeadSquare",H.PATH_FINISHED_SQ="pathFinishedSquare",H.PATH_FINISHED_WEIGHT_SQ="pathFinishedWeightSquare";!function e(t,n){(a=t)%2===0&&a--,(r=n)%2===0&&r--,i=a*r,o=Math.floor(r/2)*a+Math.floor(a/6),u=Math.floor(r/2)*a+Math.floor(5*a/6),(s=new Array(i).fill(H.DEFAULT_SQ))[o]=H.START_SQ,s[u]=H.END_SQ,c=function(e){return Math.floor(e/a)},l=function(e){return e%a},f=function(e){return[c(e),l(e)]},d=function(e,t){return e*a+t},m=function(e,t){return Math.abs(c(e)-c(t))+Math.abs(l(e)-l(t))},S=function(e,t){return t<i&&t>=0&&Math.abs(l(t)-l(e))<=2},p=function(e,t){var n=f(t),i=Object(I.a)(n,2),o=i[0],u=i[1];return o>=1&&o<r-1&&u>=1&&u<a-1&&S(e,t)},H.WIDTH=a,H.HEIGHT=r,H.SIZE=i,H.INITIAL_START=o,H.INITIAL_END=u,H.INITIAL_GRID=s,H.getRow=c,H.getCol=l,H.getCoor=f,H.getSq=d,H.dist=m,H.validMove=S,H.validMazeMove=p,H.update=e}(0,0);var A=H,Q=function(e){var t=e.findIndex((function(e){return e===A.START_SQ})),n=e.findIndex((function(e){return e===A.END_SQ})),a={},r=[],i=new Array(A.SIZE).fill(Number.MAX_SAFE_INTEGER);i[t]=1;for(var o=[t],u=function(){var t=o.shift();if(r.push(t),t===n)return"break";var u,s=[-1,1,-A.WIDTH,A.WIDTH],c=Object(j.a)(s.map((function(e){return t+e})).filter((function(e){return A.validMove(t,e)})));try{for(c.s();!(u=c.n()).done;){var l=u.value,f=i[t];if(e[l]!==A.WALL_SQ&&(e[l]===A.WEIGHT_SQ?f+=10:f+=1,f<i[l]&&(i[l]=f,a[l]=t,o.includes(l)&&o.splice(o.indexOf(l),1),!r.includes(l)))){for(var d=!1,m=0;m<o.length;m++)if(f<i[o[m]]){o.splice(m,0,l),d=!0;break}d||o.push(l)}}}catch(S){c.e(S)}finally{c.f()}};o.length>0;){if("break"===u())break}for(var s=[],c=n;c||0===c;)s.unshift(c),c=a[c];return[r,s]},W=function(e){var t=e.findIndex((function(e){return e===A.START_SQ})),n=e.findIndex((function(e){return e===A.END_SQ})),a={},r=[],i=new Array(A.SIZE).fill(Number.MAX_SAFE_INTEGER);i[t]=1;for(var o=function(e,t){return Math.abs(Math.floor(e/A.WIDTH)-Math.floor(t/A.WIDTH))+Math.abs(e%A.WIDTH-t%A.WIDTH)},u=[t],s=function(){var t=u.shift();if(r.push(t),t===n)return"break";var s,c=[-1,1,-A.WIDTH,A.WIDTH],l=Object(j.a)(c.map((function(e){return t+e})).filter((function(e){return A.validMove(t,e)})));try{for(l.s();!(s=l.n()).done;){var f=s.value,d=i[t];if(e[f]!==A.WALL_SQ&&(e[f]===A.WEIGHT_SQ?d+=10:d+=1,d<i[f]&&(i[f]=d,a[f]=t,u.includes(f)&&u.splice(u.indexOf(f),1),!r.includes(f)))){for(var m=!1,S=0;S<u.length;S++)if(d+o(f,n)<i[u[S]]+o(u[S],n)){u.splice(S,0,f),m=!0;break}m||u.push(f)}}}catch(p){l.e(p)}finally{l.f()}};u.length>0;){if("break"===s())break}for(var c=[],l=n;l||0===l;)c.unshift(l),l=a[l];return[r,c]},k=function(e){for(var t=e.findIndex((function(e){return e===A.START_SQ})),n=e.findIndex((function(e){return e===A.END_SQ})),a={},r=[],i={start:1},o=[t],u=function(){var t=o.shift();if(r.push(t),t===n)return"break";var u,s=[-1,1,-A.WIDTH,A.WIDTH],c=Object(j.a)(s.map((function(e){return t+e})).filter((function(e){return A.validMove(t,e)})));try{for(c.s();!(u=c.n()).done;){var l=u.value,f=A.dist(l,n);if(e[l]!==A.WALL_SQ&&(e[l]===A.WEIGHT_SQ&&(f+=10),!o.includes(l)&&!r.includes(l))){i[l]=f,a[l]=t;for(var d=!1,m=0;m<o.length;m++)if(f<i[o[m]]){o.splice(m,0,l),d=!0;break}d||o.push(l)}}}catch(S){c.e(S)}finally{c.f()}};o.length>0;){if("break"===u())break}for(var s=[],c=n,l=0;(c||0===c)&&!(l++>A.SIZE);)s.unshift(c),c=a[c];return[r,s]},w=function(e){for(var t=e.findIndex((function(e){return e===A.START_SQ})),n=e.findIndex((function(e){return e===A.END_SQ})),a={},r=[],i=[t],o=function(){var t=i.pop();if(r.push(t),t===n)return"break";var o,u=[-1,1,-A.WIDTH,A.WIDTH],s=Object(j.a)(u.map((function(e){return t+e})).filter((function(e){return A.validMove(t,e)})));try{for(s.s();!(o=s.n()).done;){var c=o.value;e[c]!==A.WALL_SQ&&(r.includes(c)||i.includes(c)||(a[c]=t,i.push(c)))}}catch(l){s.e(l)}finally{s.f()}};i.length>0;){if("break"===o())break}for(var u=[],s=n,c=0;(s||0===s)&&!(c++>A.SIZE);)u.unshift(s),s=a[s];return[r,u]},y=function(e){for(var t=e.findIndex((function(e){return e===A.START_SQ})),n=e.findIndex((function(e){return e===A.END_SQ})),a={},r=[],i=[t],o=function(){var t=i.shift();if(r.push(t),t===n)return"break";var o,u=[-1,1,-A.WIDTH,A.WIDTH],s=Object(j.a)(u.map((function(e){return t+e})).filter((function(e){return A.validMove(t,e)})));try{for(s.s();!(o=s.n()).done;){var c=o.value;e[c]!==A.WALL_SQ&&(r.includes(c)||i.includes(c)||(a[c]=t,i.push(c)))}}catch(l){s.e(l)}finally{s.f()}};i.length>0;){if("break"===o())break}for(var u=[],s=n,c=0;(s||0===s)&&!(c++>A.SIZE);)u.unshift(s),s=a[s];return[r,u]},N=function(e,t){var n=e.map((function(e){return e===A.START_SQ||e===A.END_SQ||e===A.WALL_SQ?e:e===A.WEIGHT_SQ||e===A.VISITED_WEIGHT_SQ||e===A.VISITED_FINISHED_WEIGHT_SQ||e===A.PATH_WEIGHT_SQ||e===A.PATH_FINISHED_WEIGHT_SQ?A.WEIGHT_SQ:A.DEFAULT_SQ}));return t(n),n},x=function(){var e=Object(D.a)(O.a.mark((function e(t,n,a,r){var i,o,u,s,c,l,f,d,m,S,p,h,b,g,v,E,T,_,D,H,x,C,F,G,q,B,P,R;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&r){e.next=2;break}return e.abrupt("return",Promise.resolve({isAnimating:!1,isAnimatingFinished:!1}));case 2:i=30,e.t0=r,e.next="none"===e.t0?6:"slow"===e.t0?7:"medium"===e.t0?9:"fast"===e.t0?11:13;break;case 6:return e.abrupt("break",13);case 7:return o=50,e.abrupt("break",13);case 9:return o=30,e.abrupt("break",13);case 11:return o=10,e.abrupt("break",13);case 13:n=N(n,a),e.t1=t,e.next="dijkstra"===e.t1?17:"astar"===e.t1?22:"greedy"===e.t1?27:"dfs"===e.t1?32:"bfs"===e.t1?37:42;break;case 17:return c=Q(n),l=Object(I.a)(c,2),u=l[0],s=l[1],e.abrupt("break",42);case 22:return f=W(n),d=Object(I.a)(f,2),u=d[0],s=d[1],e.abrupt("break",42);case 27:return m=k(n),S=Object(I.a)(m,2),u=S[0],s=S[1],e.abrupt("break",42);case 32:return p=w(n),h=Object(I.a)(p,2),u=h[0],s=h[1],e.abrupt("break",42);case 37:return b=y(n),g=Object(I.a)(b,2),u=g[0],s=g[1],e.abrupt("break",42);case 42:v=n.findIndex((function(e){return e===A.START_SQ})),E=n.findIndex((function(e){return e===A.END_SQ})),u=u.filter((function(e){return e!==v&&e!==E})),s=s.filter((function(e){return e!==v&&e!==E})),T=0,_=null,D=Object(j.a)(u);try{for(D.s();!(H=D.n()).done;)x=H.value,"none"!==r?(_&&(n=M(n,a,_.sq,_.squareType,T+=o)),C=n[x]===A.WEIGHT_SQ?A.VISITED_WEIGHT_SQ:A.VISITED_SQ,n=M(n,a,x,A.VISITED_HEAD_SQ,T),_={sq:x,squareType:C}):(F=n[x]===A.WEIGHT_SQ?A.VISITED_FINISHED_WEIGHT_SQ:A.VISITED_FINISHED_SQ,n=M(n,a,x,F))}catch(O){D.e(O)}finally{D.f()}_&&(n=M(n,a,_.sq,_.squareType,T+=o)),_=null,G=Object(j.a)(s);try{for(G.s();!(q=G.n()).done;)B=q.value,"none"!==r?(_&&(n=M(n,a,_.ind,_.squareType,T+=i)),P=n[B]===A.VISITED_WEIGHT_SQ?A.PATH_WEIGHT_SQ:A.PATH_SQ,n=M(n,a,B,A.PATH_HEAD_SQ,T),_={ind:B,squareType:P}):(_&&(n=M(n,a,_.ind,_.squareType)),R=n[B]===A.VISITED_FINISHED_WEIGHT_SQ?A.PATH_FINISHED_WEIGHT_SQ:A.PATH_FINISHED_SQ,n=M(n,a,B,A.PATH_HEAD_SQ),_={ind:B,squareType:R})}catch(O){G.e(O)}finally{G.f()}if("none"===r){e.next=57;break}return e.next=57,L(T);case 57:return a(n),e.abrupt("return",Promise.resolve({isAnimating:!1,isAnimatingFinished:!0}));case 59:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),L=function(e){return new Promise((function(t){return setTimeout(t,e)}))},M=function(e,t,n,a,r){var i=Object(E.a)(e);return i[n]=a,r&&setTimeout((function(){document.getElementById(n).className=a}),r),i},C={animate:x},F=(n(29),b.a.memo((function(e){var t=e.grid,n=e.gridStyle,a=e.setGrid,r=e.startIsCovering,i=e.setStartIsCovering,o=e.endIsCovering,u=e.setEndIsCovering,s=e.isAnimating,c=e.isAnimatingFinished,l=e.algorithm,f=e.isTutorialShowing,d=Object(h.useState)(null),m=Object(I.a)(d,2),S=m[0],p=m[1],g=Object(h.useState)(!1),v=Object(I.a)(g,2),_=v[0],O=v[1],j=Object(h.useState)(!1),D=Object(I.a)(j,2),H=D[0],Q=D[1],W=Object(h.useState)(!1),k=Object(I.a)(W,2),w=k[0],y=k[1],N=Object(h.useState)(null),x=Object(I.a)(N,2),L=x[0],M=x[1];Object(h.useEffect)((function(){var e;e=L,s||null===S||a((function(t){var n=Object(E.a)(t),s=t.findIndex((function(e){return e===A.START_SQ})),f=t.findIndex((function(e){return e===A.END_SQ}));if(e!==s&&e!==f)if(_){if(document.getElementById(s).className=r,document.getElementById(e).className=A.START_SQ,n[s]=r,n[e]=A.START_SQ,t[e]!==A.START_SQ&&i(t[e]),c)return void C.animate(l,n,a,"none")}else if(H){if(document.getElementById(f).className=o,document.getElementById(e).className=A.END_SQ,n[f]=o,n[e]=A.END_SQ,t[e]!==A.END_SQ&&u(t[e]),c)return void C.animate(l,n,a,"none")}else t[e]===A.WEIGHT_SQ?w?(document.getElementById(e).className=A.DEFAULT_SQ,n[e]=A.DEFAULT_SQ):(document.getElementById(e).className=A.WALL_SQ,n[e]=A.WALL_SQ):t[e]===A.WALL_SQ?w?(document.getElementById(e).className=A.WEIGHT_SQ,n[e]=A.WEIGHT_SQ):(document.getElementById(e).className=A.DEFAULT_SQ,n[e]=A.DEFAULT_SQ):w?(document.getElementById(e).className=A.WEIGHT_SQ,n[e]=A.WEIGHT_SQ):(document.getElementById(e).className=A.WALL_SQ,n[e]=A.WALL_SQ);return n}))}),[L,S,w,_,H,s,c,l,r,o,a,M,i,u]),Object(h.useEffect)((function(){t[S]===A.START_SQ?O(!0):t[S]===A.END_SQ&&Q(!0)}),[S,t,O,Q]);var F=Object(h.useCallback)((function(e){f||M(e)}),[f]),G=Object(h.useCallback)((function(e){f||(M(e),p(e))}),[f]),q=Object(h.useCallback)((function(e){f||(O(!1),Q(!1),p(null))}),[f]),B=Object(h.useCallback)((function(e){"w"!==e.key||f||y(!0)}),[f]),P=Object(h.useCallback)((function(e){"w"!==e.key||f||y(!1)}),[f]);return b.a.createElement("div",{style:n,className:"grid"},t.map((function(e,n){return function(e){return b.a.createElement(T,{id:e,key:e,className:t[e],onMouseEnter:F,onMouseDown:G,onMouseUp:q,onKeyDown:B,onKeyUp:P})}(n)})))}))),G=n(4),q=n(21),B=(n(13),function(e){var t={menu:function(e,t){return Object(G.a)(Object(G.a)({},e),{},{backgroundColor:"rgb(17, 138, 178)",width:"160px",border:"none",margin:"0px",padding:"0px"})},menuList:function(e,t){return Object(G.a)(Object(G.a)({},e),{},{padding:"0px",borderRadius:"0px 0px 5px 5px"})},container:function(e,t){return Object(G.a)(Object(G.a)({},e),{},{height:"40px",margin:"auto 10px",display:"flex",alignItems:"center"})},control:function(e,t){return Object(G.a)(Object(G.a)({},e),{},{width:"160px",height:"100%",border:"none",borderRadius:t.menuIsOpen?"5px 5px 0px 0px":"5px",boxShadow:"none",fontFamily:"Roboto, sans-serif",fontWeight:300,fontSize:"20px",cursor:"pointer",userSelect:"none",color:"white",backgroundColor:t.hasValue||t.menuIsOpen?"rgb(17, 138, 178)":"transparent","&:hover":{backgroundColor:"rgb(17, 138, 178)",color:"white",border:"none"}})},dropdownIndicator:function(e,t){return{margin:"3px"}},indicatorSeparator:function(e){return{}},placeholder:function(e,t){return{}},option:function(e,t){return Object(G.a)(Object(G.a)({},e),{},{cursor:"pointer",fontFamily:"Roboto, sans-serif",fontWeight:300,color:"white",backgroundColor:"rgb(17, 138, 178)","&:hover":{color:"rgb(38, 70, 83)",backgroundColor:"rgb(233, 196, 106)"}})},singleValue:function(e){return Object(G.a)(Object(G.a)({},e),{},{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",paddingRight:"4px",maxWidth:"100%",width:"100%",height:"100%",lineHeight:"36px",top:"50%",color:""})},valueContainer:function(e){return Object(G.a)(Object(G.a)({},e),{},{height:"100%"})}};return b.a.createElement(q.a,{styles:t,options:e.options.map((function(t){return{value:t,label:e.optionsMap[t]}})),value:e.option&&{value:e.option,label:e.optionsMap[e.option]},onChange:function(t){return e.onChange(t.value)},placeholder:e.placeholder,isSearchable:!1,tabSelectsValue:!1})}),P=function(){var e=Object(D.a)(O.a.mark((function e(t,n,a,r,i){var o,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",Promise.resolve({finished:!1,grid:n}));case 2:n=new Array(A.SIZE).fill(A.DEFAULT_SQ),a(n),o=5,e.t0=t,e.next="random"===e.t0?8:"dfs"===e.t0?12:"recursiveDivision"===e.t0?16:"kruskal"===e.t0?20:"prim"===e.t0?24:28;break;case 8:return e.next=10,Y(n,a,0,o);case 10:return u=e.sent,e.abrupt("break",28);case 12:return e.next=14,$(n,a,0,o);case 14:return u=e.sent,e.abrupt("break",28);case 16:return e.next=18,ee(n,a,0,o);case 18:return u=e.sent,e.abrupt("break",28);case 20:return e.next=22,ne(n,a,0,o);case 22:return u=e.sent,e.abrupt("break",28);case 24:return e.next=26,ae(n,a,0,o);case 26:return u=e.sent,e.abrupt("break",28);case 28:return a(u.grid),e.abrupt("return",u);case 30:case"end":return e.stop()}}),e)})));return function(t,n,a,r,i){return e.apply(this,arguments)}}(),R=function(e,t,n,a,r){var i=Object(E.a)(e);return i[n]=a,r?setTimeout((function(){document.getElementById(n).className=a}),r):t(i),i},z=function(e){return new Promise((function(t){return setTimeout(t,e)}))},U=function(e,t,n,a){for(var r=0;r<A.WIDTH;r++,n+=a){var i=A.getSq(0,r),o=A.getSq(A.HEIGHT-1,r);e=R(e,t,i,A.WALL_SQ,n),e=R(e,t,o,A.WALL_SQ,n)}for(var u=0;u<A.HEIGHT;u++,n+=a){var s=A.getSq(u,0),c=A.getSq(u,A.WIDTH-1);e=R(e,t,s,A.WALL_SQ,n),e=R(e,t,c,A.WALL_SQ,n)}return[n,e]},V=function(e,t,n,a){var r=U(e,t,n,a),i=Object(I.a)(r,2);n=i[0],e=i[1];for(var o=1;o<A.HEIGHT-1;o++)for(var u=1;u<A.WIDTH-1;u++)o%2&&u%2||(e[A.getSq(o,u)]=A.WALL_SQ);return setTimeout((function(){t(e)}),n),[n,Object(E.a)(e)]},Z=function(e){return e.splice((t=0,n=e.length-1,Math.floor(Math.random()*(n-t+1))+t),1)[0];var t,n},K=function(e){for(var t=[];e.length>0;)t.push(Z(e));return t},J=function(e,t){return e.reduce((function(e,n,a){if(n===A.DEFAULT_SQ){if(-1===e)return a;var r=A.dist(t,e);return A.dist(t,a)<r?a:e}return e}),-1)},X=function(e,t,n,a,r){var i=J(e,n),o=J(e,a);return e=R(e,t,i,A.START_SQ,r),R(e,t,o,A.END_SQ,r)},Y=function(){var e=Object(D.a)(O.a.mark((function e(t,n,a,r){var i,o,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=U(t,n,a,r),o=Object(I.a)(i,2),a=o[0],t=o[1],u=0;u<t.length;u++)A.validMazeMove(u,u)&&Math.random()<.35&&(t[u]=A.WALL_SQ);return setTimeout((function(){return n(t)}),a),t=Object(E.a)(t),t=X(t,n,A.getSq(0,0),A.getSq(A.SIZE-1,A.SIZE-1),a+=r),e.next=10,z(a);case 10:return e.abrupt("return",Promise.resolve({finished:!1,grid:t}));case 11:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),$=function(){var e=Object(D.a)(O.a.mark((function e(t,n,a,r){var i,o,u,s,c,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=V(t,n,a,r),o=Object(I.a)(i,2),a=o[0],t=o[1],u=A.getSq(1,1),s=new Set([u]),c=[u],l=function(){var e=c.pop(),i=[-2,2,-2*A.WIDTH,2*A.WIDTH];for(i=i.filter((function(t){return A.validMazeMove(e,e+t)}));i.length>0;){var o=e+i.splice(Math.random()*i.length,1)[0],u=[(e+o)/2,o];if(!s.has(o)){t=R(t,n,u[0],A.DEFAULT_SQ,a+=r),t=R(t,n,u[1],A.DEFAULT_SQ,a+=r),s.add(o),c.push(o),c.push(o);break}}};c.length>0;)l();return t=X(t,n,A.getSq(1,1),A.getSq(A.SIZE-1,A.SIZE-1),a+=r),e.next=12,z(a);case 12:return e.abrupt("return",Promise.resolve({finished:!1,grid:t}));case 13:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ee=function(){var e=Object(D.a)(O.a.mark((function e(t,n,a,r){var i,o,u,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=U(t,n,a,r),o=Object(I.a)(i,2),a=o[0],t=o[1],u=te(t,n,a,r,[0,A.HEIGHT-1],[0,A.WIDTH-1]),s=Object(I.a)(u,2),a=s[0],t=s[1],t=X(t,n,A.getSq(1,1),A.getSq(A.HEIGHT-1,A.WIDTH-1),a),e.next=11,z(a);case 11:return e.abrupt("return",Promise.resolve({finished:!1,grid:t}));case 12:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),te=function e(t,n,a,r,i,o){for(var u=[],s=[],c=[],l=[],f=i[0]+1;f<i[1];f++)(f-i[0])%2===0?u.push(f):s.push(f);for(var d=o[0]+1;d<o[1];d++)(d-o[0])%2===0?c.push(d):l.push(d);if(0===u.length||0===c.length)return[a,t];if(u.length>=c.length){var m=Z(u),S=function(e,t,n,a,r,i){for(var o=i[0];o<=i[1];o++,n+=a){var u=r*A.WIDTH+o;e=R(e,t,u,A.WALL_SQ,n)}return[n,e]}(t,n,a,r,m,o),p=Object(I.a)(S,2);a=p[0],t=p[1];var h=Z(l),b=m*A.WIDTH+h,g=e(t=R(t,n,b,A.DEFAULT_SQ,a+=r),n,a,r,[i[0],m],o),v=Object(I.a)(g,2);a=v[0];var E=e(t=v[1],n,a,r,[m,i[1]],o),T=Object(I.a)(E,2);a=T[0],t=T[1]}else{var _=Z(c),O=function(e,t,n,a,r,i){for(var o=i[0];o<=i[1];o++,n+=a){var u=o*A.WIDTH+r;e=R(e,t,u,A.WALL_SQ,n)}return[n,e]}(t,n,a,r,_,i),j=Object(I.a)(O,2);a=j[0],t=j[1];var D=Z(s)*A.WIDTH+_,H=e(t=R(t,n,D,A.DEFAULT_SQ,a+=r),n,a,r,i,[o[0],_]),Q=Object(I.a)(H,2);a=Q[0];var W=e(t=Q[1],n,a,r,i,[_,o[1]]),k=Object(I.a)(W,2);a=k[0],t=k[1]}return[a,t]},ne=function(){var e=Object(D.a)(O.a.mark((function e(t,n,a,r){var i,o,u,s,c,l,f,d,m,S,p,h,b,g,v,T;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=V(t,n,a,r),o=Object(I.a)(i,2),a=o[0],t=o[1],u={},s={},c=0;c<A.SIZE;c++)l=A.getCoor(c),f=Object(I.a)(l,2),d=f[0],m=f[1],A.validMazeMove(c,c)&&(d%2&&m%2?u[c]=new Set([c]):m%2?s[c]=[c-A.WIDTH,c+A.WIDTH]:d%2&&(s[c]=[c-1,c+1]));S=Object(j.a)(K(Object.entries(s)));try{for(S.s();!(p=S.n()).done;)h=Object(I.a)(p.value,2),b=h[0],g=Object(I.a)(h[1],2),v=g[0],T=g[1],u[v].has(T)||function(){t=R(t,n,b,A.DEFAULT_SQ,a+=r);var e=new Set([].concat(Object(E.a)(u[v]),Object(E.a)(u[T])));u[v].forEach((function(t){return u[t]=e})),u[T].forEach((function(t){return u[t]=e}))}()}catch(_){S.e(_)}finally{S.f()}return t=X(t,n,A.getSq(1,1),A.getSq(A.HEIGHT-1,A.WIDTH-1),a),e.next=12,z(a);case 12:return e.abrupt("return",Promise.resolve({finished:!1,grid:t}));case 13:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ae=function(){var e=Object(D.a)(O.a.mark((function e(t,n,a,r){var i,o,u,s,c,l,f,d,m,S,p,h,b,g,v,T,_,j,D;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=V(t,n,a,r),o=Object(I.a)(i,2),a=o[0],t=o[1],u={},s={},c=0;c<A.SIZE;c++)A.validMazeMove(c,c)&&(l=A.getCoor(c),f=Object(I.a)(l,2),d=f[0],m=f[1],d%2&&m%2?(S=A.validMazeMove(c,c-A.WIDTH)?[c-A.WIDTH]:[],p=A.validMazeMove(c,c+1)?[c+1]:[],h=A.validMazeMove(c,c+A.WIDTH)?[c+A.WIDTH]:[],b=A.validMazeMove(c,c-1)?[c-1]:[],s[c]=[].concat(S,p,h,b)):d%2^m%2&&(m%2?u[c]=[c-A.WIDTH,c+A.WIDTH]:d%2&&(u[c]=[c-1,c+1])));for(g=new Set([A.getSq(1,1)]),v=Object(E.a)(s[A.getSq(1,1)]);v.length>0;)T=Z(v),_=Object(I.a)(u[T],2),j=_[0],D=_[1],j>A.SIZE||A.SIZE,g.has(j)^g.has(D)&&(g.has(j)?(g.add(D),v=[].concat(Object(E.a)(v),Object(E.a)(s[D]))):(g.add(j),v=[].concat(Object(E.a)(v),Object(E.a)(s[j]))),t=R(t,n,T,A.DEFAULT_SQ,a+=r));return t=X(t,n,A.getSq(1,1),A.getSq(A.HEIGHT-1,A.WIDTH-1),a),e.next=13,z(a);case 13:return e.abrupt("return",Promise.resolve({finished:!1,grid:t}));case 14:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),re={generateMaze:P},ie=function(e){var t=e.grid,n=e.setGrid,a=e.resetGrid,r=e.setStartIsCovering,i=e.setEndIsCovering,o=e.isAnimating,u=e.setIsAnimating,s=e.setIsAnimatingFinished,c=e.algorithm,l=e.setAlgorithm,f=e.maze,d=e.setMaze,m=e.speed,S=e.setSpeed,p=e.isTutorialShowing,h=function(){var e=Object(D.a)(O.a.mark((function e(a){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o||p){e.next=8;break}return u(!0),e.next=5,C.animate(c,t,n,m);case 5:r=e.sent,u(r.isAnimating),s(r.isAnimatingFinished);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(D.a)(O.a.mark((function e(c){var l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o||p){e.next=10;break}return u(!0),e.next=4,re.generateMaze(c,t,n,a);case 4:l=e.sent,d(null),r(A.DEFAULT_SQ),i(A.DEFAULT_SQ),u(l.finished),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={dijkstra:"Dijkstra",astar:"A* Search",greedy:"Greedy BFS",dfs:"DFS",bfs:"BFS"},I={random:"Random",dfs:"DFS",recursiveDivision:"Recursive Division",kruskal:"Kruskal",prim:"Prim"},E={slow:"Slow",medium:"Medium",fast:"Fast"};return b.a.createElement("div",{className:"topBar"},b.a.createElement("h1",{className:"title"},"Path Visualizer"),b.a.createElement("div",{className:"optionsContainer"},b.a.createElement("div",{className:"topBarItemContainer"},b.a.createElement(B,{option:c,onChange:function(e){l(e)},options:Object.keys(v),optionsMap:v,placeholder:"Algorithm"})),b.a.createElement("div",{className:"topBarItemContainer"},b.a.createElement(B,{option:m,onChange:function(e){S(e)},options:Object.keys(E),optionsMap:E,placeholder:"Speed"})),b.a.createElement("div",{className:"topBarItemContainer"},b.a.createElement(B,{option:f,onChange:function(e){d(e),g(e)},options:Object.keys(I),optionsMap:I,placeholder:"Maze"})),b.a.createElement("div",{className:"topBarItemContainer"},b.a.createElement("button",{className:o?"topBarButtonWhileAnimating":"topBarButton",onClick:h},"Visualize"),b.a.createElement("button",{className:(o?"topBarButtonWhileAnimating":"topBarButton")+" resetButton",onClick:function(e){o||p||(e.preventDefault(),a())}},"Reset"))))},oe=(n(32),function(e){var t=e.name,n=e.img;return b.a.createElement("span",{className:"legendContainer"},b.a.createElement("span",{className:"legend ".concat(t,"Legend")},n&&b.a.createElement("img",{className:"legendImg",src:n,alt:n,draggable:"false"})),b.a.createElement("span",{className:"legendText"},t))}),ue=(n(33),n(15)),se=n.n(ue),ce=n(16),le=n.n(ce),fe=n(17),de=n.n(fe),me=function(e){var t=Object(h.useState)(0),n=Object(I.a)(t,2),a=n[0],r=n[1],i=Object(h.useState)({backgroundColor:"#94caec"}),o=Object(I.a)(i,2),u=o[0],s=o[1],c=Object(h.useState)({}),l=Object(I.a)(c,2),f=l[0],d=l[1],m=Object(h.useState)(!1),S=Object(I.a)(m,2),p=S[0],g=S[1],v=Object(h.useState)(!1),E=Object(I.a)(v,2),T=E[0],_=E[1],O=Object(h.useState)(!0),j=Object(I.a)(O,2),D=j[0],H=j[1],A=Object(h.useState)(!1),Q=Object(I.a)(A,2),W=Q[0],k=Q[1],w=Object(h.useState)(!1),y=Object(I.a)(w,2),N=y[0],x=y[1],L=Object(h.useRef)(null),M=[["Pathfinding, or the process of finding a route between two points, is an important topic in computer science and graph theory.","Tasks, like solving mazes, navigating video game terrain, and calculating Google Maps, all utilize pathfinding techniques."],["Over time, different algorithms have emerged in pathfinding. Some are designed to guarantee the shortest path, while others trade optimality for speed."],["You can play around with and visualize how these algorithms work."]],C=function(e){L.current.scrollTop=0,e===M.length-1?d({backgroundColor:"#94caec"}):d({}),s(0===e?{backgroundColor:"#94caec"}:{}),g(1===e),_(2===e),H(0===e),k(1===e),x(2===e)};return e.shouldShow&&b.a.createElement("div",{className:"tutorialPageContainer"},b.a.createElement("div",{className:"tutorialPage"},b.a.createElement("div",{className:"tutorialTextContainer",ref:L},D&&b.a.createElement("img",{src:se.a,className:"mapLogo",alt:"map logo"}),W&&b.a.createElement("img",{src:le.a,className:"algorithmLogo",alt:"algorithm logo"}),N&&b.a.createElement("img",{src:de.a,className:"creativityLogo",alt:"creativity logo"}),M[a].map((function(e){return b.a.createElement("p",{key:e,className:"tutorialText"},e)})),p&&b.a.createElement("div",{className:"algorithmListContainer"},b.a.createElement("table",{className:"algorithmList"},b.a.createElement("tbody",null,[["Dijkstra:","Gurantees Shortest Path","Weighted","Slow"],["A* Search:","Guarantees Shortest Path","Weighted","Medium"],["Greedy BFS:","Doesn't Guarantee Shortest Path","Weighted","Fast"],["BFS:","Guarantees Shortest Path","Unweighted","Slow"],["DFS:","Doesn't Guarantee Shortest Path","Unweighted","Slow"]].map((function(e){return b.a.createElement("tr",{key:e},e.map((function(e){return b.a.createElement("td",{key:e},e)})))}))))),T&&b.a.createElement("div",{className:"siteOptionsListContainer"},b.a.createElement("ul",{className:"siteOptionsList"},[["Move around the start and end square"],["Click and drag to add walls (impenetrable)"],["Hold W to add weights (penetrable, cost 10 squares)"],["Move around the start and end square after a visualization to see how the new position affects the path"],["Adjust the speed of visualization as well as generate mazes to see how these algorithms solve them!"]].map((function(e){return b.a.createElement("li",{key:e},e)}))))),b.a.createElement("div",{className:"buttonsContainer"},b.a.createElement("div",{className:"directionContainer"},b.a.createElement("button",{className:"prevButton",onClick:function(){a>0&&(C(a-1),r((function(e){return e-1})))},style:u},String.fromCharCode(8592)),b.a.createElement("button",{className:"nextButton",onClick:function(){a<M.length-1&&(C(a+1),r((function(e){return e+1})))},style:f},String.fromCharCode(8594))),b.a.createElement("div",{className:"skipContainer"},b.a.createElement("button",{className:"skipButton",onClick:function(){e.setShouldShow(!1)}},String.fromCharCode(10005))))))},Se=(n(34),n(18)),pe=n.n(Se),he=n(19),be=n.n(he),ge=n(20),ve=n.n(ge);var Ie=function(){var e=Object(h.useState)(A.INITIAL_GRID),t=Object(I.a)(e,2),n=t[0],a=t[1],r=Object(h.useState)(A.DEFAULT_SQ),i=Object(I.a)(r,2),o=i[0],u=i[1],s=Object(h.useState)(A.DEFAULT_SQ),c=Object(I.a)(s,2),l=c[0],f=c[1],d=Object(h.useState)(!0),m=Object(I.a)(d,2),S=m[0],p=m[1],g=Object(h.useState)(null),v=Object(I.a)(g,2),E=v[0],T=v[1],_=Object(h.useState)("fast"),O=Object(I.a)(_,2),j=O[0],D=O[1],H=Object(h.useState)(null),Q=Object(I.a)(H,2),W=Q[0],k=Q[1],w=Object(h.useState)(!1),y=Object(I.a)(w,2),N=y[0],x=y[1],L=Object(h.useState)(!1),M=Object(I.a)(L,2),C=M[0],G=M[1],q=Object(h.useCallback)((function(){B(),a(A.INITIAL_GRID),G(!1),u(A.DEFAULT_SQ),f(A.DEFAULT_SQ),T(null),k(null),D("fast")}),[]);Object(h.useEffect)((function(){q()}),[q]),Object(h.useEffect)((function(){if(!N)return window.addEventListener("resize",q),function(){return window.removeEventListener("resize",q)}}),[N,q]);var B=function(){var e=document.getElementsByClassName("topBar")[0].offsetHeight,t=document.getElementsByClassName("legendsContainer")[0].offsetHeight,n=Math.floor((window.innerWidth-30)/25),a=Math.floor((window.innerHeight-e-t-20)/25);n<10&&(n=10),a<5&&(a=5),A.update(n,a)},P=[{name:"Start",img:be.a},{name:"End",img:ve.a},{name:"Weight",img:pe.a},{name:"Wall"},{name:"Visited"},{name:"Path"}],R={gridTemplateColumns:"repeat(".concat(A.WIDTH,", 25px)"),gridTemplateRows:"repeat(".concat(A.HEIGHT,", 25px)")};return b.a.createElement("div",{className:"page"},b.a.createElement(ie,{grid:n,setGrid:a,resetGrid:q,setStartIsCovering:u,setEndIsCovering:f,isAnimating:N,setIsAnimating:x,setIsAnimatingFinished:G,algorithm:E,setAlgorithm:T,speed:j,setSpeed:D,maze:W,setMaze:k,isTutorialShowing:S}),b.a.createElement("div",{className:"legendsContainer"},P.map((function(e){return b.a.createElement(oe,{key:e.name,name:e.name,img:e.img})}))),b.a.createElement(me,{shouldShow:S,setShouldShow:p}),b.a.createElement(F,{grid:n,gridStyle:R,setGrid:a,startIsCovering:o,setStartIsCovering:u,endIsCovering:l,setEndIsCovering:f,isAnimating:N,isAnimatingFinished:C,algorithm:E,isTutorialShowing:S}))};v.a.render(b.a.createElement(Ie,{className:"page"}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.0680a558.chunk.js.map