(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,o){e.exports=o(17)},16:function(e,t,o){},17:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(3),c=o.n(r),l=(o(16),o(7)),i=o(4),d=o(5),s=o(8),u=o(6),m=o(1),h=o(9),g=function(e){return console.log(e),a.a.createElement("ul",null,e.todoArray.length?e.todoArray.map(function(t,o){return a.a.createElement("li",{key:o},t,a.a.createElement("button",{id:o,onClick:function(t){return e.deleteItem(o,t)},type:"text"},"Delete")," ")}):a.a.createElement("li",null))},f=function(e){function t(e){var o;return Object(i.a)(this,t),(o=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){console.log(e.target.value),o.setState({currentToDo:e.target.value})},o.addItem=function(e){e.preventDefault(),console.log("addItem Method fired"),""!==o.state.currentToDo&&o.setState({currentToDo:"",todos:[].concat(Object(l.a)(o.state.todos),[o.state.currentToDo])})},o.deleteItem=function(e,t){console.log(t.target.id);var n=o.state.todo.filter(function(e,o){return o!==t.target.id});o.setState({todo:n})},o.state={todos:[],currentToDo:""},o.addItem=o.addItem.bind(Object(m.a)(o)),o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return console.log("console logging arrays of todos",this.state.todos),a.a.createElement("div",{className:"container"},a.a.createElement("form",{onSubmit:this.addItem},a.a.createElement("label",{htmlFor:"taskName"},"Task Name:"),a.a.createElement("input",{onChange:this.handleChange,name:"taskName",type:"text",placeholder:"Add to do here!"}),a.a.createElement("button",{type:"submit"},"Add Task")),a.a.createElement(g,{todoArray:this.state.todo,deleteItem:this.deleteItem}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.66d8574d.chunk.js.map