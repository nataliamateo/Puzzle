(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":5,"url":"../images/5.jpg"},{"id":2,"url":"../images/2.jpg"},{"id":8,"url":"../images/8.jpg"},{"id":4,"url":"../images/4.jpg"},{"id":1,"url":"../images/1.jpg"},{"id":9,"url":"../images/9.jpg"},{"id":7,"url":"../images/7.jpg"},{"id":3,"url":"../images/3.jpg"},{"id":6,"url":"../images/6.jpg"}]')},function(e){e.exports=JSON.parse('[{"id":"empty-1","url":"../images/0.png"},{"id":"empty-2","url":"../images/0.png"},{"id":"empty-3","url":"../images/0.png"},{"id":"empty-4","url":"../images/0.png"},{"id":"empty-5","url":"../images/0.png"},{"id":"empty-6","url":"../images/0.png"},{"id":"empty-7","url":"../images/0.png"},{"id":"empty-8","url":"../images/0.png"},{"id":"empty-9","url":"../images/0.png"}]')},,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(6),c=a.n(r),l=(a(15),a(4)),u=(a(16),a(7)),s=a(8),p=(a(17),a(2)),o=a(9),d=(a(18),function(e){var t=function t(a,i){var n=e.puzzleState.left.pieces.findIndex((function(e){return e.id===a.id})),r=e.puzzleState.left.pieces.findIndex((function(e){return e.id===i.id})),c=-1===n&&-1===r;if(-1!==n&&-1!==r){var l=Object(p.a)(e.puzzleState.left.pieces);l[n]=i,l[r]=a,e.puzzleState.left.setter(l)}else if(c){n=e.puzzleState.right.pieces.findIndex((function(e){return e.id===a.id})),r=e.puzzleState.right.pieces.findIndex((function(e){return e.id===i.id})),console.log("ss2we",n,r);var u=Object(p.a)(e.puzzleState.right.pieces);u[n]=i,u[r]=a,e.puzzleState.right.setter(u)}else{var s=e.puzzleState.left.pieces.findIndex((function(e){return e.id===a.id})),o=e.puzzleState.right.pieces.findIndex((function(e){return e.id===i.id}));if(-1===s)return void t(i,a);var d=Object(p.a)(e.puzzleState.left.pieces);d[s]=i;var g=Object(p.a)(e.puzzleState.right.pieces);g[o]=a,e.puzzleState.left.setter(d),e.puzzleState.right.setter(g)}};return n.a.createElement("li",{className:"piece",draggable:"true",onDragStart:function(t){t.dataTransfer.setData("text/plain",JSON.stringify(e.data))},onDrop:function(a){var i=JSON.parse(a.dataTransfer.getData("text/plain"));t(i,Object(o.a)({},e.data))},onDragOver:function(e){return e.preventDefault(),!1}},n.a.createElement("img",{className:"piece__size",src:e.data.url,alt:"Pieza ".concat(e.data.id)}))}),g=function(e){var t=e.pieces.map((function(t){return n.a.createElement(d,{data:t,key:t.id,puzzleState:e.puzzleState})}));return n.a.createElement("ul",{className:e.pretty?"board pretty":"board"},t)},m=function(){var e=Object(i.useState)(u),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(i.useState)(s),p=Object(l.a)(c,2),o=p[0],d=p[1],m={left:{pieces:a,setter:r},right:{pieces:o,setter:d}};return Object(i.useEffect)((function(){return function(){var e=[9,8,7,6,5,4,3,1,2],t=o.map((function(e){return e.id}));console.log(t);for(var a=0;a<e.length;a++)if(e[a]!==t[a])return void console.log("TRY AGAIN");console.log("has ganado")}()})),n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"title"},"Mini-puzzle ",n.a.createElement("i",{className:"fas fa-puzzle-piece"})),n.a.createElement("div",{className:"App"},n.a.createElement(g,{id:"puzzle-1",pieces:a,puzzleState:m}),n.a.createElement(g,{id:"puzzle-2",pretty:!0,pieces:o,puzzleState:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.01fbe3de.chunk.js.map