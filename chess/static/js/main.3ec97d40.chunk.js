(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(21)},17:function(e,n,t){},18:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var l,a,o,r=t(0),u=t.n(r),i=t(7),c=t.n(i),s=(t(17),t(18),t(10)),v=t(8),h=t(11),m=t(2),f=t(3),d=t(4),g=t(1),b=t(9),p=t.n(b),k="w",j="b",M=(o={},Object(g.a)(o,j,(l={},Object(g.a)(l,"r","\u265c"),Object(g.a)(l,"n","\u265e"),Object(g.a)(l,"b","\u265d"),Object(g.a)(l,"q","\u265b"),Object(g.a)(l,"k","\u265a"),Object(g.a)(l,"p","\u265f"),l)),Object(g.a)(o,k,(a={},Object(g.a)(a,"r","\u2656"),Object(g.a)(a,"n","\u2658"),Object(g.a)(a,"b","\u2657"),Object(g.a)(a,"q","\u2655"),Object(g.a)(a,"k","\u2654"),Object(g.a)(a,"p","\u2659"),a)),o),C={pieces:[["r","n","b","q","k","b","n","r"],["p","p","p","p","p","p","p","p"],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],["p","p","p","p","p","p","p","p"],["r","n","b","q","k","b","n","r"]],colors:[[j,j,j,j,j,j,j,j],[j,j,j,j,j,j,j,j],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[k,k,k,k,k,k,k,k],[k,k,k,k,k,k,k,k]]};function O(e,n){return e>=0&&e<=7&&n>=0&&n<=7}var w,E,y,F=[[0,1],[0,-1],[1,0],[-1,0]],G=[[1,1],[-1,-1],[1,-1],[-1,1]],N=[[0,1],[0,-1],[1,0],[-1,0],[1,1],[-1,-1],[1,-1],[-1,1]],P=[[2,1],[-2,-1],[-2,1],[2,-1],[1,2],[-1,-2],[-1,2],[1,-2]],A=function(){function e(){Object(m.a)(this,e),this.newBoard()}return Object(f.a)(e,[{key:"newBoard",value:function(){this.board=p.a.cloneDeep(C),this.moves=[]}},{key:"progressiveMoves",value:function(e,n,t,l){var a,o=0,r=0,u=[];do{null!==(a=O(n+(o+=e[0]),t+(r+=e[1]))&&this.board.colors[n+o][t+r])&&a!==l||u.push([n,t,n+o,t+r])}while(null===a);return u}},{key:"colorAt",value:function(e,n){return this.board.colors[e][n]}},{key:"movesForPieceAt",value:function(e,n){var t=this,l=this.board,a=l.pieces,o=l.colors,r=a[e][n],u=o[e][n],i=u===j?k:j,c=u===k?-1:1,s=[];if("p"===r){var v=u===k?6===e:1===e,h=e+c,m=n+1,f=n-1;if(O(h,f)&&o[h][f]===i&&s.push([e,n,h,f]),O(h,m)&&o[h][m]===i&&s.push([e,n,h,m]),O(h,n)&&null===o[h][n]&&(s.push([e,n,h,n]),v)){var d=h+c;O(d,n)&&null===o[d][n]&&s.push([e,n,d,n])}}else"r"===r?F.forEach(function(l){s=s.concat(t.progressiveMoves(l,e,n,i))}):"b"===r?G.forEach(function(l){s=s.concat(t.progressiveMoves(l,e,n,i))}):"q"===r?N.forEach(function(l){s=s.concat(t.progressiveMoves(l,e,n,i))}):"n"===r?P.forEach(function(t){var l=e+t[0],a=n+t[1],r=O(l,a)&&o[l][a];null!==r&&r!==i||s.push([e,n,l,a])}):"k"===r&&N.forEach(function(t){var l=e+t[0],a=n+t[1],r=O(l,a)&&o[l][a];null!==r&&r!==i||s.push([e,n,l,a])});return s}},{key:"movePiece",value:function(e){var n=this.board,t=n.pieces,l=n.colors;this.moves.push([e,t[e[2]][e[3]],l[e[2]][e[3]]]),t[e[2]][e[3]]=t[e[0]][e[1]],l[e[2]][e[3]]=l[e[0]][e[1]],t[e[0]][e[1]]=null,l[e[0]][e[1]]=null}},{key:"undoMove",value:function(){var e=this.moves.pop(),n=Object(d.a)(e,3),t=n[0],l=n[1],a=n[2],o=Object(d.a)(t,4),r=o[0],u=o[1],i=o[2],c=o[3],s=this.board,v=s.pieces,h=s.colors;v[r][u]=v[i][c],h[r][u]=h[i][c],v[i][c]=l,h[i][c]=a}},{key:"filterLegalMoves",value:function(e){var n=this;return e.filter(function(e){var t=n.colorAt(e[0],e[1]);n.movePiece(e);var l=!n.kingIsInDanger(t);return n.undoMove(),l})}},{key:"kingIsInDanger",value:function(e){for(var n=this.board.pieces,t=e===k?j:k,l=this.allMovesForColor(t),a=0;a<l.length;a++)if("k"===n[l[a][2]][l[a][3]])return!0}},{key:"legalMovesForPieceAt",value:function(e,n){return this.filterLegalMoves(this.movesForPieceAt(e,n))}},{key:"allMovesForColor",value:function(e){var n,t,l=[];for(n=0;n<8;n++)for(t=0;t<8;t++)this.board.colors[n][t]===e&&(l=l.concat(this.movesForPieceAt(n,t)));return l}},{key:"allLegalMovesForColor",value:function(e){return this.filterLegalMoves(this.allMovesForColor(e))}},{key:"checkWinner",value:function(){return 0===this.allLegalMovesForColor(j).length?k:0===this.allLegalMovesForColor(k).length?j:null}},{key:"canMove",value:function(e){return-1!==this.legalMovesForPieceAt(e[0],e[1]).findIndex(function(n){return n[2]===e[2]&&n[3]===e[3]})}}]),e}(),I=(w={},Object(g.a)(w,"p",1),Object(g.a)(w,"b",6),Object(g.a)(w,"n",8),Object(g.a)(w,"r",11),Object(g.a)(w,"q",18),Object(g.a)(w,"k",16),w);function x(e,n){for(var t=0,l=0;l<8;l++)for(var a=0;a<8;a++){var o=e.pieces[l][a];o&&(t+=I[o]*(n===e.colors[l][a]?1:-1))}return t+Math.random()}function L(e,n){var t,l=null;return E=0,y=(new Date).getTime(),e.allLegalMovesForColor(n).forEach(function(a){e.movePiece(a);var o=function e(n,t,l,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1/0;var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1/0;E++;if(0===l)return x(n.board,t);var u=!0===a?t:t===j?k:j,i=n.allMovesForColor(u);var c,s;if(a)for(c=-1/0,s=0;s<i.length&&(n.movePiece(i[s]),c=Math.max(c,e(n,t,l-1,!1,o,r)),o=Math.max(o,c),n.undoMove(),!(o>=r));s++);else for(c=1/0,s=0;s<i.length&&(n.movePiece(i[s]),c=Math.min(c,e(n,t,l-1,!0,o,r)),r=Math.min(r,c),n.undoMove(),!(o>=r));s++);return c}(e,n,3,!1);(null===l||l<o)&&(l=o,t=a),e.undoMove()}),console.log("Best Score: ",l),console.log("Nodes Evaluated: ",E),console.log("Time Taken: ",(new Date).getTime()-y),t}t(20);var q=function(){function e(){Object(m.a)(this,e),this.listeners=new Set,this.board=new A,this.at="home"}return Object(f.a)(e,[{key:"move",value:function(e){if("game"!==this.at)return"Game not started.";var n=this.board;if(this.turn!==n.colorAt(e[0],e[1]))return"Not your turn";if(!n.canMove(e))return"Invalid Move";n.movePiece(e),this.turn=this.turn===k?j:k;var t=n.checkWinner();t&&(this.winner=t,this.at="end"),this.triggerChange()}},{key:"newGame",value:function(e){this.board.newBoard(),this.at="game",this.turn=k,this.triggerChange()}},{key:"onChange",value:function(e){var n=this;return this.listeners.add(e),function(t){return n.listeners.delete(e)}}},{key:"triggerChange",value:function(){this.listeners.forEach(function(e){return e()})}}]),e}(),B=function(){function e(){var n=this;Object(m.a)(this,e),this.handleGameChange=function(){"game"===n.game.at&&n.game.turn===j&&setTimeout(function(e){return n.move()},100)}}return Object(f.a)(e,[{key:"joinGame",value:function(e){this.game=e,e.onChange(this.handleGameChange)}},{key:"move",value:function(){var e=L(this.game.board,j);if(e)return this.game.move(e);alert("Can\t find a move")}}]),e}(),D=function(){function e(){Object(m.a)(this,e)}return Object(f.a)(e,[{key:"joinGame",value:function(e){this.game=e,e.onChange(this.handleGameChange)}},{key:"handleGameChange",value:function(){}},{key:"move",value:function(e,n,t,l){return this.game.move([e,n,t,l])}}]),e}();function S(e){var n=e.board,t=e.onCellClick,l=e.selected,a=e.allowedMoves;return u.a.createElement("div",{className:"chess-board"},n.pieces.map(function(e,o){return u.a.createElement("div",{key:o,className:"chess-row"},e.map(function(e,r){var i=e&&M[n.colors[o][r]][e],c=l&&l[0]===o&&l[1]===r,s=l&&-1!==a.findIndex(function(e){return e[2]===o&&e[3]===r});return u.a.createElement("div",{key:r,className:"chess-cell"+(c?" cell-focus1":""),onClick:function(e){return t(o,r)}},c&&u.a.createElement("div",{className:"focus1"}),s&&u.a.createElement("div",{className:"focus2"}),i?u.a.createElement("div",{className:"piece"},i):u.a.createElement(u.a.Fragment,null,"\xa0"))}))}))}function T(e){var n=e.game;return u.a.createElement("div",{className:"home-screen"},u.a.createElement("h1",null,"Chess"),u.a.createElement("button",{onClick:function(e){return n.newGame()}},"New Game"))}function W(e){var n=e.game;return u.a.createElement("div",{className:"end-screen"},u.a.createElement(S,{board:n.board.board,onCellClick:function(e){return e}}),u.a.createElement("div",{className:"text-center"},u.a.createElement("h2",null,n.winner===j?"Black":"White"," Wins"),u.a.createElement("button",{onClick:function(e){return n.newGame()}},"New Game")))}var J=function(e){function n(){var e;return Object(m.a)(this,n),(e=Object(s.a)(this,Object(v.a)(n).call(this))).handleCellClick=function(n,t){var l=e.game.board,a=e.state.selected;if(e.state.selected)if(-1!==e.state.allowedMoves.findIndex(function(e){return e[2]===n&&e[3]===t})){e.setState({selected:null,allowedMoves:null});var o=e.human.move(a[0],a[1],n,t);o&&alert(o)}else e.setState({selected:null,allowedMoves:null});else e.setState({selected:[n,t],allowedMoves:l.legalMovesForPieceAt(n,t)})},e.game=new q,e.human=new D,e.bot=new B,e.human.joinGame(e.game),e.bot.joinGame(e.game),e.game.onChange(function(n){return e.forceUpdate()}),e.state={},e}return Object(h.a)(n,e),Object(f.a)(n,[{key:"render",value:function(){return u.a.createElement("div",{className:"app"},"home"===this.game.at&&u.a.createElement(T,{game:this.game}),"game"===this.game.at&&u.a.createElement(S,{board:this.game.board.board,onCellClick:this.handleCellClick,selected:this.state.selected,allowedMoves:this.state.allowedMoves,focus:this.state.focus}),"end"===this.game.at&&u.a.createElement(W,{game:this.game}))}}]),n}(u.a.Component);c.a.render(u.a.createElement(J,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3ec97d40.chunk.js.map