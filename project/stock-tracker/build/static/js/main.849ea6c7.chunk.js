(this["webpackJsonpstock-tracker"]=this["webpackJsonpstock-tracker"]||[]).push([[0],[,,,,,function(e,t,r){e.exports=r(12)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(4),s=r.n(o),c=(r(10),r(1)),i=(r(11),function(e){var t=e.username;return fetch("/login",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({username:t})}).catch((function(e){return Promise.reject({err:"network-issue",details:"network error"})})).then((function(e){return e.ok?e.json():403===e.status?Promise.reject("You are not an authorized user"):401===e.status?Promise.reject("You must be logged in"):Promise.reject("Server error")}))}),u=function(e){var t=e.username;return fetch("/users",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({username:t})}).catch((function(e){return Promise.reject({err:"network-issue",details:"network error"})})).then((function(e){return e.ok?Promise.resolve(e):403===e.status?Promise.reject("You are not an authorized user"):401===e.status?Promise.reject("You must be logged in"):Promise.reject("Server error")}))},l=function(e){var t=e.stockname,r=e.username;return fetch("/stocks",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({stockname:t,username:r}),credentials:"include"}).catch((function(e){return Promise.reject({err:"network-issue",details:e})})).then((function(e){return e.ok?Promise.resolve(e):403===e.status?Promise.reject("You are not an authorized user"):401===e.status?Promise.reject("You must be logged in"):Promise.reject("Server error")}))},m=function(){return fetch("/stocks",{method:"GET",credentials:"include"}).catch((function(e){return Promise.reject({err:"network-issue",details:e})})).then((function(e){return e.ok?e.json():403===e.status?Promise.reject("You are not an authorized user"):401===e.status?Promise.reject("You must be logged in"):Promise.reject("Server error")}))},d=function(){return fetch("/refreshstocks",{method:"GET",credentials:"include"}).catch((function(e){return e?Promise.reject({err:"network-issue",details:e}):Promise.reject({err:"network-issue",details:"network error"})})).then((function(e){return e.ok?e.json():403===e.status?Promise.reject("You are not an authorized user"):401===e.status?Promise.reject("You must be logged in"):Promise.reject("Server error")}))},f=function(e){var t=e.stockname,r=e.quantity,n=e.equity;return fetch("/stocks",{method:"PUT",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({stockname:t,quantity:r,equity:n}),credentials:"include"}).catch((function(e){return Promise.reject({err:"network-issue",details:e})})).then((function(e){return e.ok?Promise.resolve(e):403===e.status?Promise.reject("You are not an authorized user"):401===e.status?Promise.reject("You must be logged in"):Promise.reject("Server error")}))},h=function(e){var t=e.stockname;return fetch("/stocks",{method:"DELETE",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({stockname:t}),credentials:"include"}).catch((function(e){return Promise.reject({err:"network-issue",details:e})})).then((function(e){return e.ok?Promise.resolve(e):403===e.status?Promise.reject("You are not an authorized user"):401===e.status?Promise.reject("You must be logged in"):Promise.reject("Server error")}))},v=function(){return fetch("/logout",{method:"GET",credentials:"include"}).catch((function(e){return Promise.reject({err:"network-issue",details:e})})).then((function(e){return e.ok?e.json():403===e.status?Promise.reject("You are not an authorized user"):401===e.status?Promise.reject("You must be logged in"):Promise.reject("Server error")}))};var g=function(e){var t=e.onLogin,r=e.errorMessage,o=e.setErrorMessage,s=Object(n.useState)(""),i=Object(c.a)(s,2),l=i[0],m=i[1],d=Object(n.useState)(!0),f=Object(c.a)(d,2),h=f[0],v=f[1],g=/^[a-zA-Z0-9]*$/,k=function(){""===l?o("Username cannot be empty"):g.test(l)?(o(""),u({username:l}).then((function(e){t(l)})).catch((function(e){e.message?o(e.message):o("Error in login")}))):o("Username can only contain alphabets or numbers")};return a.a.createElement("div",{className:"login-page"},a.a.createElement("div",{className:"login-box"},a.a.createElement("h1",null,"Login"),a.a.createElement("input",{type:"text",placeholder:"Enter username",value:l,onChange:function(e){return t=e.target.value,m(t),void v(""===t);var t},onKeyUp:function(e){"Enter"===e.key&&k()}}),a.a.createElement("div",null,a.a.createElement("span",{className:"errorMessage"},r)),a.a.createElement("button",{id:"submit-button",type:"submit",disabled:h,onClick:k},"Login")))},k=r(2);var E=function(e){var t=e.stocks,r=e.relaodStocks,o=e.setErrorMessage,s=Object(n.useState)(0),i=Object(c.a)(s,2),u=i[0],l=i[1],m=Object(n.useState)(!0),d=Object(c.a)(m,2),v=d[0],g=d[1],E=function(e){var r=e.target.id.split("_")[0],n=t[r].stockName,a=t[r].quantity,s=t[r].equity;f({stockname:n,quantity:a,equity:s}).then((function(){g(!0)})).catch((function(e){o("Unable to update stock: "+e)}))},j=function(e){var n=e.target.id.split("_")[0],a=t[n].stockName;h({stockname:a}).then((function(){r()})).catch((function(e){o("Unable to delete stock: "+e)}))};return a.a.createElement("div",null,a.a.createElement("h2",null,"Your Stock Portfolio"),a.a.createElement("ol",{className:"stock-list"},a.a.createElement("li",{className:"stock-item-header"},a.a.createElement("div",null,a.a.createElement("div",null,"Stock Symbol"),a.a.createElement("div",null,"Price"),a.a.createElement("div",null,"Last Updated Date and Time"),a.a.createElement("div",null,"Quantity"),a.a.createElement("div",null,"Your Equity"),a.a.createElement("div",null))),t.map((function(e,r){var n=new Date(e.lastUpdatedDate),o=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()+" "+n.getHours()+":"+n.getMinutes()+":"+n.getSeconds();return a.a.createElement("li",{className:"stock-item",key:r},a.a.createElement("div",null,a.a.createElement("div",null,e.stockName),a.a.createElement("div",null,e.price),a.a.createElement("div",null,o),a.a.createElement("div",null,a.a.createElement("input",{className:"quantity-input",type:"text",id:r,value:e.quantity,onChange:function(e){return function(e){var r=e.target.value;""===r&&(Object(k.a)("quantityText"),r=0);var n=e.target.id;if(/^\d+$/.test(r)){var a=parseInt(r);t[n].quantity=a;var o=t[n].price*a;t[n].equity=o.toFixed(2),g(!1),l((Object(k.a)("value"),++u))}}(e)}}),a.a.createElement("button",{id:r+"_save",disabled:v,onClick:E},"Update")),a.a.createElement("div",null,e.equity),a.a.createElement("div",null,a.a.createElement("button",{id:r+"_delete",onClick:j},"Delete"))))}))))};var j=function(e){var t=e.username,r=e.relaodStocks,o=Object(n.useState)(""),s=Object(c.a)(o,2),i=s[0],u=s[1],m=Object(n.useState)(""),d=Object(c.a)(m,2),f=d[0],h=d[1];return a.a.createElement("div",{className:"to-add"},a.a.createElement("input",{type:"text",name:"text",value:i,placeholder:"Enter stock symbol to add",onChange:function(e){return t=e.target.value,void u(t);var t}}),a.a.createElement("button",{type:"submit",onClick:function(){l({stockname:i,username:t}).then((function(e){u(""),h(""),r()})).catch((function(e){h("Error in Adding Stock")}))}},"Add"),a.a.createElement("div",null,a.a.createElement("span",{className:"errorMessage"},f)))},b=6e4;var p=function(e){var t=e.onLogout,r=e.username,o=(e.errorMessage,e.setErrorMessage),s=Object(n.useState)([]),i=Object(c.a)(s,2),u=i[0],l=i[1],f=Object(n.useCallback)((function(){m().then((function(e){l(e)})).catch((function(e){o(e)}))}),[]),h=Object(n.useCallback)((function(){d().then((function(){f()})).catch((function(e){o(e)}))}),[]);return Object(n.useEffect)((function(){if(r){h();var e=setInterval((function(){h()}),b);return function(){clearInterval(e)}}}),[]),a.a.createElement("div",null,a.a.createElement("div",{className:"top-bar"},a.a.createElement("span",null,"Logged in : ",r),a.a.createElement("button",{onClick:h},"Refresh"),a.a.createElement("button",{onClick:t},"Logout")),a.a.createElement(j,{username:r,relaodStocks:f}),a.a.createElement(E,{stocks:u,relaodStocks:f,setErrorMessage:o}))};var y=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),r=t[0],o=t[1],s=Object(n.useState)(""),u=Object(c.a)(s,2),l=u[0],m=u[1];return r?a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement("span",{className:"errorMessage"},l)),a.a.createElement(p,{onLogout:function(){v().then((function(){o("")})).catch((function(e){m("Error in user Logout")}))},username:r,errorMessage:l,setErrorMessage:m})):a.a.createElement("div",{className:"App"},a.a.createElement(g,{onLogin:function(e){i({username:e}).then((function(t){o(e)})).catch((function(e){m("Error in user Login")}))},errorMessage:l,setErrorMessage:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.849ea6c7.chunk.js.map