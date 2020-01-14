(this.webpackJsonpnekoma=this.webpackJsonpnekoma||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(26),r=a.n(c),u=a(11),o=a(31),m=a(32),i=(a(76),a(77),a(20)),d=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(u.b,{to:"/products"},l.a.createElement("div",{class:"split left"},l.a.createElement("div",{class:"centered"},l.a.createElement("h1",null,"Products")))),l.a.createElement(u.b,{to:"/events"},l.a.createElement("div",{class:"split right"},l.a.createElement("div",{class:"centered"},l.a.createElement("h1",null,"Events")))))},s=a(41),E=a(5),b=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Username"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.username),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return e.editRow(t)},className:"button muted-button"},"Edit"),l.a.createElement("button",{onClick:function(){return e.deleteUser(t.id)},className:"button muted-button"},"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:3},"No users"))))},f=a(14),v=a(19),p=function(e){var t={id:null,name:"",username:""},a=Object(n.useState)(t),c=Object(E.a)(a,2),r=c[0],u=c[1],o=function(e){console.log(e);var t=e.target,a=t.name,n=t.value;u(Object(v.a)({},r,Object(f.a)({},a,n)))};return l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),r.name&&r.username&&(e.addUser(r),u(t))}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:r.name,onChange:o}),l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",name:"username",value:r.username,onChange:o}),l.a.createElement("button",null,"Add new user"))},g=function(e){var t=Object(n.useState)(e.currentUser),a=Object(E.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){r(e.currentUser)}),[e]),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(c.id,c)}},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:function(e){var t=e.target,a=t.name,n=t.value;r(Object(v.a)({},c,Object(f.a)({},a,n)))}}),l.a.createElement("button",null,"Update user"),l.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"button muted-button"},"Cancel"))},h=function(){var e=Object(n.useState)([{id:1,name:"Jake",username:"sk1llz7007"},{id:2,name:"Erik",username:"erik1125e"},{id:3,name:"Mara",username:"urmom"}]),t=Object(E.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),u=Object(E.a)(r,2),o=u[0],m=u[1],i=Object(n.useState)({id:null,name:"",username:""}),d=Object(E.a)(i,2),f=d[0],v=d[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"CRUD App with Hooks"),l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"flex-large"},o?l.a.createElement("div",null,l.a.createElement("h2",null,"Edit user"),l.a.createElement(g,{editing:o,setEditing:m,currentUser:f,updateUser:function(e,t){m(!1),c(a.map((function(a){return a.id===e?t:a})))}})):l.a.createElement("div",null,l.a.createElement("h2",null,"Add user"),l.a.createElement(p,{addUser:function(e){e.id=a.length+1,c([].concat(Object(s.a)(a),[e]))}}))),l.a.createElement("div",{className:"flex-large"},l.a.createElement("h2",null,"View users"),l.a.createElement(b,{users:a,editRow:function(e){m(!0),v({id:e.id,name:e.name,username:e.username})},deleteUser:function(e){c(a.filter((function(t){return t.id!==e})))}}))))},k=a(22),y=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"SKU"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Category"),l.a.createElement("th",null,"Date Added"),l.a.createElement("th",null,"Enabled"),l.a.createElement("th",null,"Count"),l.a.createElement("th",null,"Last Restock Date"),l.a.createElement("th",null))),l.a.createElement("tbody",null,e.products.length>0?e.products.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.sku),l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.category),l.a.createElement("td",null,t.date),l.a.createElement("td",null,t.enabled?l.a.createElement(k.a,{icon:"check"}):l.a.createElement(k.a,{icon:"times"})),l.a.createElement("td",null,t.count),l.a.createElement("td",null,t.restock),l.a.createElement("td",null,l.a.createElement(u.b,{to:"/products/"+t.id},l.a.createElement("button",null,"Details")),l.a.createElement("button",{onClick:function(){return e.editRow(t)},className:"button muted-button"},"Edit"),l.a.createElement("button",{onClick:function(){return e.deleteProduct(t.id)},className:"button muted-button"},"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:8},"No products"))))},j=a(65),N=a.n(j),O=function(e){var t=[{name:"Lily",sku:"lil"},{name:"Raphie",sku:"rph"},{name:"Tiny",sku:"tny"}],a=new Date,c={id:null,sku:"",name:"",category:"",date:a.toLocaleDateString(),enabled:!0,count:"",restock:""},r=Object(n.useState)(c),u=Object(E.a)(r,2),o=u[0],m=u[1],i=Object(n.useState)(a),d=Object(E.a)(i,2),s=d[0],b=d[1],p=function(e){var t=e.target,a=t.name,n=t.value;m(Object(v.a)({},o,Object(f.a)({},a,n)))};return l.a.createElement("form",{autoComplete:"off",onSubmit:function(a){var n;(a.preventDefault(),o.name&&o.category&&o.count)&&(o.sku=(n=o.category,t.find((function(e){return e.name===n})).sku).concat("-#"),o.restock=o.date,e.addProduct(o),m(c),e.hide())}},l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"flex-large"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:o.name,onChange:p}),l.a.createElement("label",null,"Date Added"),l.a.createElement(N.a,{name:"date",selected:s,onChange:function(e){b(e),m(Object(v.a)({},o,{date:e.toLocaleDateString()}))}})),l.a.createElement("div",{className:"flex-large"},l.a.createElement("label",null,"Category"),l.a.createElement("select",{name:"category",value:o.category,onChange:p},l.a.createElement("option",{value:""},"Select a category"),t.map((function(e){return l.a.createElement("option",{key:e.sku,value:e.name},e.name)}))),l.a.createElement("label",null,"Initial Count"),l.a.createElement("input",{type:"number",name:"count",value:o.count,onChange:p}))),l.a.createElement("button",null,"Save"))},S=function(e){return l.a.createElement("div",{className:"header"},l.a.createElement(u.b,{to:e.back},l.a.createElement(k.a,{icon:"arrow-left",size:"2x"})),l.a.createElement("h1",null,e.title))},w=function(e){var t=e.isShowing,a=e.hide,n=e.title,c=e.content;return t?r.a.createPortal(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal-overlay"}),l.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h2",null,n),l.a.createElement(k.a,{icon:"times","data-dismiss":"modal",onClick:a})),l.a.createElement("div",null,c)))),document.body):null},C=function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1];return{isShowing:a,toggle:function(){l(!a)}}},x=function(e){var t=Object(n.useState)(e.currentProduct),a=Object(E.a)(t,2),c=a[0],r=a[1],u=function(e){var t=e.target,a=t.name,n=t.value;r(Object(v.a)({},c,Object(f.a)({},a,n)))};return Object(n.useEffect)((function(){r(e.currentProduct)}),[e]),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log(c),e.updateProduct(c.id,c)}},l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"flex-large"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:u})),l.a.createElement("div",{className:"flex-large"},l.a.createElement("label",null,"Category"),l.a.createElement("select",{name:"category",value:c.category,onChange:u},l.a.createElement("option",{value:""},"Select a category"),[{name:"Lily",sku:"lil"},{name:"Raphie",sku:"rph"},{name:"Tiny",sku:"tny"}].map((function(e){return l.a.createElement("option",{key:e.sku,value:e.name},e.name)}))))),l.a.createElement("button",null,"Update product"),l.a.createElement("button",{onClick:function(){return e.cancelUpdate()},className:"button muted-button"},"Cancel"))},U=function(){var e=Object(n.useState)([{id:1,sku:"sku-2",name:"product",category:"cat",date:"january",enabled:!0,count:29,restock:"01/09/2020"},{id:2,sku:"sku-5",name:"product2",category:"keychain",date:"february",enabled:!1,count:10,restock:"11/26/2019"},{id:3,sku:"sku-1",name:"product3",category:"poster",date:"march",enabled:!0,count:43,restock:"01/09/2020"},{id:4,sku:"sku-4",name:"product4",category:"pin",date:"april",enabled:!0,count:17,restock:"12/15/2019"},{id:5,sku:"sku-6",name:"product5",category:"cat",date:"may",enabled:!1,count:3,restock:"10/31/2019"}]),t=Object(E.a)(e,2),a=t[0],c=t[1],r=C(),u=r.isShowing,o=r.toggle,m=Object(n.useState)(!1),i=Object(E.a)(m,2),d=i[0],b=i[1],f=Object(n.useState)({id:null,name:"",category:""}),v=Object(E.a)(f,2),p=v[0],g=v[1],h=l.a.createElement(O,{addProduct:function(e){e.id=a.length+1,c([].concat(Object(s.a)(a),[e]))},hide:o}),k=l.a.createElement(x,{editing:d,cancelUpdate:function(){b(!1),o()},currentProduct:p,updateProduct:function(e,t){b(!1),o(),c(a.map((function(a){return a.id===e?t:a})))}});return l.a.createElement("div",{className:"full-container"},l.a.createElement(S,{title:"Products",back:"/"}),l.a.createElement(w,{isShowing:u,hide:o,title:d?"Editing "+p.name:"Add a new product",content:d?k:h}),l.a.createElement("div",{className:"container"},l.a.createElement("button",{onClick:o},"Add new product"),l.a.createElement("div",{className:"flex-large"},l.a.createElement(y,{products:a,editRow:function(e){b(!0),o(),g({id:e.id,name:e.name,category:e.category})},deleteProduct:function(e){c(a.filter((function(t){return t.id!==e})))}}))))},D=a(39),P=a.n(D),A=function(e){var t=Object(n.useState)({product:{},loading:!0}),a=Object(E.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){!function(){var t;P.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t={id:e.match.params.id},r(t);case 2:case"end":return a.stop()}}))}()}),[]),c.loading?l.a.createElement("div",null,"Loading..."):l.a.createElement("div",{className:"full-container"},l.a.createElement(S,{title:c.id,back:"/products"}),l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Some data about ",c.id)))},R=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Location"),l.a.createElement("th",null,"Date"),l.a.createElement("th",null))),l.a.createElement("tbody",null,e.events.length>0?e.events.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.location),l.a.createElement("td",null,t.date),l.a.createElement("td",null,l.a.createElement(u.b,{to:"/events/"+t.id},l.a.createElement("button",null,"Sales")),l.a.createElement("button",{onClick:function(){return e.editRow(t)},className:"button muted-button"},"Edit"),l.a.createElement("button",{onClick:function(){return e.deleteEvent(t.id)},className:"button muted-button"},"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:4},"No events"))))},L=function(){var e=Object(n.useState)([{id:1,name:"a convention",location:"los angeles",date:"april"},{id:2,name:"another convention",location:"sacramento",date:"february"},{id:3,name:"convention",location:"fresno",date:"asdf"},{id:4,name:"aon",location:"new york city",date:"date"},{id:5,name:"convosid",location:"seattle",date:"02/31/2020"},{id:6,name:"dallasconvention",location:"dallas",date:"9"},{id:7,name:"RTX",location:"austin",date:"twelve twelve twentytwenty"},{id:8,name:"zotzotzot",location:"irvine",date:"pog"},{id:9,name:"AX",location:"los angeles",date:"sad"}]),t=Object(E.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",{className:"full-container"},l.a.createElement(S,{title:"Events",back:"/"}),l.a.createElement("div",{className:"container"},l.a.createElement("button",null,"Add new event"),l.a.createElement("div",{className:"flex-large"},l.a.createElement(R,{events:a,deleteEvent:function(e){c(a.filter((function(t){return t.id!==e})))}}))))},z=function(e){var t=e.match.params.id;console.log("fetching "+t);var a=[{id:1,day:2,items:["sku-1","sku-3"],total:20,cc:!0,female:!1}],c=Object(n.useState)({eventSales:{},loading:!0}),r=Object(E.a)(c,2),u=(r[0],r[1]);Object(n.useEffect)((function(){P.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:u(a);case 2:case"end":return e.stop()}}))}),[]);return l.a.createElement("div",{className:"full-container"},l.a.createElement(S,{title:"Sales for event "+t,back:"/events"}),l.a.createElement("div",{className:"container"},l.a.createElement("button",null,"Add new sale"),l.a.createElement("div",{className:"flex-large"})))},I=function(){return l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:d}),l.a.createElement(i.a,{path:"/users",component:h}),l.a.createElement(i.a,{exact:!0,path:"/products",component:U}),l.a.createElement(i.a,{path:"/products/:id",component:A}),l.a.createElement(i.a,{exact:!0,path:"/events",component:L}),l.a.createElement(i.a,{path:"/events/:id",component:z}))};o.b.add(m.b,m.d,m.c,m.a),r.a.render(l.a.createElement(u.a,{basename:"/nekoma-frontend"},l.a.createElement(I,null)),document.getElementById("root"))},68:function(e,t,a){e.exports=a(140)},76:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.9c49d9a7.chunk.js.map