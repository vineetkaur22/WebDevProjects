!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";!function(){const e=document.querySelector(".error-message");let t=function(){document.querySelectorAll(".recipe-link").forEach(e=>{const t=e.querySelector('input[name="foodtitle"').value;e.querySelector(".recipe-name-link").addEventListener("click",(function(e){e.preventDefault(),n(t)}))})};t();const n=function(e){(function(e){return fetch("http://localhost:3000/recipedetails/"+e).catch((function(e){return Promise.reject("Network Error")})).then((function(e){return e.ok?Promise.resolve(e):Promise.reject(e.message)}))})(e).then((function(e){e.json().then((function(e){const t=document.querySelector(".homepage-content"),n=`\n\t\t\t\t\t\t<h1> Recipe-Details</h1>\n\t\t\t\t\t\t<div class="recipedetail-description">\n\t\t\t\t\t\t\t<span>Title : ${e.title}</span><br>\n\t\t\t\t\t\t\t<span>Ingredients : ${e.ingredients}</span><br>\n\t\t\t\t\t\t\t<span>Instructions : ${e.instructions}</span>\n\t\t\t\t\t\t</div>`;t.innerHTML=n}))}),(function(e){document.querySelector(".error-message").innerHTML=e}))};document.querySelector("#add-recipe").addEventListener("click",(function(e){e.preventDefault();const t=document.querySelector(".homepage-content");for(;t.firstChild;)t.firstChild.remove();const n=document.createElement("div");n.classList.add("newrecipe-data");const r=document.createElement("form");r.setAttribute("action","/homepage"),r.setAttribute("method","POST");const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","title"),o.setAttribute("placeholder","Food title"),o.setAttribute("required","required");const c=document.createElement("textarea");c.setAttribute("rows","5"),c.setAttribute("cols","50"),c.setAttribute("name","ingredients"),c.setAttribute("placeholder","Enter ingredients"),c.setAttribute("required","required");const u=document.createElement("textarea");u.setAttribute("rows","5"),u.setAttribute("cols","50"),u.setAttribute("name","instructions"),u.setAttribute("placeholder","Enter instructions"),u.setAttribute("required","required");const s=document.createElement("button");s.setAttribute("class","newrecipe-submit"),s.setAttribute("type","submit"),s.innerHTML="Add Recipe",r.appendChild(o),r.appendChild(c),r.appendChild(u),r.appendChild(s),n.appendChild(r),t.appendChild(n),i()})),document.querySelector("#home-page").addEventListener("click",(function(e){e.preventDefault(),r()}));const r=function(n){fetch("http://localhost:3000/recipedetails").catch((function(e){return Promise.reject("Network Error")})).then((function(e){return e.ok?Promise.resolve(e):Promise.reject(e.message)})).then((function(n){n.json().then((function(n){e.innerText="";const r=document.querySelector(".homepage-content");for(;r.firstChild;)r.firstChild.remove();for(let e of Object.values(n)){const t=document.createElement("div");t.classList.add("recipe-list");const n=document.createElement("form");n.setAttribute("class","recipe-link"),n.setAttribute("action","/recipedetail"),n.setAttribute("method","POST");const i=document.createElement("button");i.setAttribute("class","recipe-name-link"),i.setAttribute("type","submit"),i.innerHTML=e.title;const o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name","foodtitle"),o.setAttribute("value",e.title),n.appendChild(i),n.appendChild(o),t.appendChild(n),r.appendChild(t)}t()}),(function(t){e.innerText="Error in getting json"}))}),(function(e){document.querySelector(".error-message").innerHTML=e}))},i=function(){document.querySelector(".newrecipe-submit").addEventListener("click",(function(t){t.preventDefault();const r=document.querySelector('input[name="title"]').value,i=document.querySelector('textarea[name="ingredients"]').value,u=document.querySelector('textarea[name="instructions"]').value;if(c(r)&&c(i)&&c(u)){e.innerText="",o(r,i,u).then((function(e){n(r)})).catch(t=>{e.innerText=t})}else e.innerText="All fields are required"}))},o=function(e,t,n){const r={title:e,ingredients:t,instructions:n},i=new Headers;return i.append("Content-Type","application/json"),fetch("http://localhost:3000/recipedetails",{method:"post",headers:i,body:JSON.stringify(r)}).catch((function(e){return Promise.reject("Network Error")})).then((function(e){return e.ok?Promise.resolve(e):Promise.reject(e.message)}))},c=function(e){return!(!e||""===e)}}()}]);