(this.webpackJsonpis_this_your_card=this.webpackJsonpis_this_your_card||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),c=a.n(r),i=(a(14),a(1)),o=a(4),u=a(5),l=a(8),m=a(7);a(15);function b(e){return s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"20px",height:"30px",backgroundColor:"white",padding:"10px",borderRadius:"5px",margin:"10px 20px",boxShadow:"0 2.8px 2.2px rgba(0, 0, 0, 0.02),0 6.7px 5.3px rgba(0, 0, 0, 0.028)"}},s.a.createElement("h1",{style:{fontSize:"20px",fontFamily:"Poppins,sans-serif",fontWeight:"400",color:"#3D3B90"}},e.number))}a(16);function d(e){return e.isVisible?s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"title"},"Is this your card?"),s.a.createElement("div",{className:"cardWrapper"},s.a.createElement(b,{number:e.number})),s.a.createElement("div",{className:"btnContainer"},s.a.createElement("button",{onClick:e.restartHandler,className:"btn btn-restart"},"Restart")))):null}var p=a(6),h=["Pick a card and select its column","Select its column again","Is this your card?"],f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).execute=function(e){if(!(n.state.stage>=3)){var t=n.colToRows(e);n.updatePossibleNums(t.slice(8,16)),n.setInstruction(),n.setState({stage:n.state.stage+1},n.showPopup)}},n.setInstruction=function(){switch(n.state.stage+1){case 0:n.setState({instruction:h[0]});break;case 1:case 2:n.setState({instruction:h[1]});break;case 3:n.setState({instruction:h[2]});break;default:console.log("Invalid stage "+n.state.stage+1)}},n.showPopup=function(){3===n.state.stage&&console.log("Show Popup")},n.colToRows=function(e){for(var t=[],a=0;a<3;a++){t.push(n.state.numbers[a]);for(var s=a+3;s<24;s+=3)t.push(n.state.numbers[s])}console.log(t);var r=t.slice(0,8),c=t.slice(8,16),o=t.slice(16,24);switch(e){case 1:t=[].concat(Object(i.a)(c),Object(i.a)(r),Object(i.a)(o));break;case 2:t=[].concat(Object(i.a)(r),Object(i.a)(c),Object(i.a)(o));break;case 3:t=[].concat(Object(i.a)(c),Object(i.a)(o),Object(i.a)(r))}return n.setState({numbers:t}),t},n.updatePossibleNums=function(e){var t=n.state.possibleNums,a=[];0===t.length?a=e:t.forEach((function(t){e.includes(t)&&a.push(t)})),n.setState({possibleNums:a},(function(){console.log(n.state.possibleNums)}))},n.getRandNumArray=function(){for(var e=[],t=1;t<=24;t++)e.push(t);for(var a=23;a>=0;a--){var n=Math.floor(Math.random()*a),s=e[n];e[n]=e[a],e[a]=s}return e},n.renderGrid=function(){return n.state.numbers.map((function(e,t){return s.a.createElement("div",{key:e},s.a.createElement(b,{number:e}))}))},n.reset=function(){n.setState({numbers:n.getRandNumArray(),possibleNums:[],stage:0,instruction:h[0]})},n.state={numbers:n.getRandNumArray(),possibleNums:[],stage:0,instruction:h[0]},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"instruction"},this.state.instruction),s.a.createElement("div",{className:"main"},s.a.createElement(d,{number:this.state.possibleNums,isVisible:3===this.state.stage,restartHandler:this.reset}),s.a.createElement(p.a,{easing:"ease-in-out",duration:500,staggerDelayBy:20,className:"grid-container"},this.renderGrid()),s.a.createElement("div",{className:"buttons-container"},s.a.createElement("div",{className:"button",onClick:function(){return e.execute(1)}},"Select"),s.a.createElement("div",{className:"button",onClick:function(){return e.execute(2)}},"Select"),s.a.createElement("div",{className:"button",onClick:function(){return e.execute(3)}},"Select"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.163639e3.chunk.js.map