(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":5,"url":"../assets/images/5.jpg"},{"id":2,"url":"../assets/images/2.jpg"},{"id":8,"url":"../assets/images/8.jpg"},{"id":4,"url":"../assets/images/4.jpg"},{"id":1,"url":"../assets/images/1.jpg"},{"id":9,"url":"../assets/images/9.jpg"},{"id":7,"url":"../assets/images/7.jpg"},{"id":3,"url":"../assets/images/3.jpg"},{"id":6,"url":"../assets/images/6.jpg"}]')},function(e){e.exports=JSON.parse('[{"id":"empty-1","url":"../assets/images/0.png"},{"id":"empty-2","url":"../assets/images/0.png"},{"id":"empty-3","url":"../assets/images/0.png"},{"id":"empty-4","url":"../assets/images/0.png"},{"id":"empty-5","url":"../assets/images/0.png"},{"id":"empty-6","url":"../assets/images/0.png"},{"id":"empty-7","url":"../assets/images/0.png"},{"id":"empty-8","url":"../assets/images/0.png"},{"id":"empty-9","url":"../assets/images/0.png"}]')},,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(6),r=a.n(s),l=(a(15),a(4)),c=(a(16),a(7)),u=a(8),p=(a(17),a(2)),o=a(9),d=(a(18),function(e){var t=function t(a,i){var n=e.puzzleState.left.pieces.findIndex((function(e){return e.id===a.id})),s=e.puzzleState.left.pieces.findIndex((function(e){return e.id===i.id})),r=-1===n&&-1===s;if(-1!==n&&-1!==s){var l=Object(p.a)(e.puzzleState.left.pieces);l[n]=i,l[s]=a,e.puzzleState.left.setter(l)}else if(r){n=e.puzzleState.right.pieces.findIndex((function(e){return e.id===a.id})),s=e.puzzleState.right.pieces.findIndex((function(e){return e.id===i.id})),console.log("ss2we",n,s);var c=Object(p.a)(e.puzzleState.right.pieces);c[n]=i,c[s]=a,e.puzzleState.right.setter(c)}else{var u=e.puzzleState.left.pieces.findIndex((function(e){return e.id===a.id})),o=e.puzzleState.right.pieces.findIndex((function(e){return e.id===i.id}));if(-1===u)return void t(i,a);var d=Object(p.a)(e.puzzleState.left.pieces);d[u]=i;var g=Object(p.a)(e.puzzleState.right.pieces);g[o]=a,e.puzzleState.left.setter(d),e.puzzleState.right.setter(g)}};return n.a.createElement("li",{className:"piece",draggable:"true",onDragStart:function(t){t.dataTransfer.setData("text/plain",JSON.stringify(e.data))},onDrop:function(a){var i=JSON.parse(a.dataTransfer.getData("text/plain"));t(i,Object(o.a)({},e.data))},onDragOver:function(e){return e.preventDefault(),!1}},n.a.createElement("img",{className:"piece__size",src:e.data.url,alt:"Pieza ".concat(e.data.id)}))}),g=function(e){var t=e.pieces.map((function(t){return n.a.createElement(d,{data:t,key:t.id,puzzleState:e.puzzleState})}));return n.a.createElement("ul",{className:e.pretty?"board pretty":"board"},t)},m=function(){var e=Object(i.useState)(c),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(i.useState)(u),p=Object(l.a)(r,2),o=p[0],d=p[1],m={left:{pieces:a,setter:s},right:{pieces:o,setter:d}};return Object(i.useEffect)((function(){return function(){var e=[9,8,7,6,5,4,3,1,2],t=o.map((function(e){return e.id}));console.log(t);for(var a=0;a<e.length;a++)if(e[a]!==t[a])return void console.log("TRY AGAIN");console.log("has ganado")}()})),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("h1",{className:"title"},"Mini-puzzle ",n.a.createElement("i",{className:"fas fa-puzzle-piece"}))),n.a.createElement("div",{className:"App"},n.a.createElement(g,{id:"puzzle-1",pieces:a,puzzleState:m}),n.a.createElement(g,{id:"puzzle-2",pretty:!0,pieces:o,puzzleState:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f39fd82d.chunk.js.map