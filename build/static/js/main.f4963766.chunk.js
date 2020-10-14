(this["webpackJsonppart2-phonebook"]=this["webpackJsonppart2-phonebook"]||[]).push([[0],{17:function(e,n,t){e.exports=t(40)},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(15),l=t.n(c),u=t(16),o=t(2),m=function(e){return r.a.createElement("p",null," Filter Name: ",r.a.createElement("input",{value:e.filterName,onChange:e.onChange}))},i=t(4),d=t.n(i),s="/api/persons",f=function(){return d.a.get(s).then((function(e){return e.data}))},h=function(e){return d.a.post(s,e)},b=function(e,n){d.a.put("".concat(s,"/").concat(e),n)},E=function(e,n,t){return window.confirm("Delete ".concat(n,"?"))&&d.a.delete("".concat(s,"/").concat(e)).then((function(){console.log("".concat(n," deleted")),t("".concat(n," removed successfully"))})).catch((function(e){t("Error: ".concat(n," has already been removed"))})),""},p=function(e){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,e.persons.filter((function(n){return n.name.toLowerCase().includes(e.filterName.toLowerCase())})).map((function(n){return r.a.createElement("tr",{key:n.id},r.a.createElement("td",null,n.name),r.a.createElement("td",null,n.number),r.a.createElement("td",null," ",r.a.createElement("button",{onClick:function(){E(n.id,n.name,e.handleMessageChange),e.handleDataDeleteEvent(n.id)}}," Delete ")," "))})))))},g=function(e){return r.a.createElement("form",{onSubmit:e.addName},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"Phone Number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add")))},v=function(e){return e.message.toLowerCase().includes("error")?r.a.createElement("div",{className:"error"}," ",e.message):e.message?r.a.createElement("div",{className:"success"}," ",e.message):r.a.createElement(r.a.Fragment,null)},N=(t(39),function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),d=i[0],s=i[1],E=Object(a.useState)(""),N=Object(o.a)(E,2),C=N[0],w=N[1],j=Object(a.useState)(""),O=Object(o.a)(j,2),k=O[0],y=O[1],D=Object(a.useState)(""),S=Object(o.a)(D,2),x=S[0],F=S[1],I=Object(u.a)(t),L="";return Object(a.useEffect)((function(){f().then((function(e){c(e)}))}),[]),r.a.createElement("div",null,r.a.createElement(v,{message:x}),r.a.createElement("h2",null," Filter Phone Numbers "),r.a.createElement(m,{filterName:k,onChange:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{addName:function(e){var n={name:d,number:C,id:t.reduce((function(e,n){return n.id>e?n.id:e}),t[0].id)+1};if(t.map((function(e){return e.name})).includes(d)){if(window.confirm("".concat(d," is already added to phonebook, replace the old number with the new one?"))){var a=t.find((function(e){return e.name===d})).id,r=t.findIndex((function(e){return e.name===d}));b(a,n),I[r].number=C,L="Changed ".concat(d,"'s Number")}}else h(n),I=I.concat(n),L="Added ".concat(d);e.preventDefault(),c(I),F(L)},newName:d,handleNameChange:function(e){s(e.target.value)},newNumber:C,handleNumberChange:function(e){w(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(p,{persons:t,filterName:k,handleDataDeleteEvent:function(e){var n=I.findIndex((function(n){return n.id===e}));I.pop(n),c(I)},handleMessageChange:function(e){F(e)}}))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f4963766.chunk.js.map