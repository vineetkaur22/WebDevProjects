"use strict";

(function (){
	let form = document.getElementById('outgoing')
	let messageInput = form.querySelector('input[name="text"]');
	let sendButton = document.getElementById('send-button') //  .querySelector('button');
	messageInput.addEventListener("input", function(){
	if(messageInput.value != "") {
		sendButton.disabled = false; 
	}
	else{
		sendButton.disabled = true;  
		}
	});
})();

(function(){
	const listItems = document.querySelectorAll('.users li .userlist-username');
	let	userSelected = "";
	listItems.forEach(function(item) {
	item.onclick = function(e) {
	let username = (this.innerHTML);
	const cssString = ".__"+username+"__{background-color: lightskyblue;}";
	let styleSheet = document.styleSheets[0];
	if(userSelected == ""){
		styleSheet.insertRule(cssString, styleSheet.cssRules.length);
		userSelected = username;
	}
	else if(userSelected == username){
		styleSheet.deleteRule(styleSheet.cssRules.length -1);
		userSelected = "";
	}
	else{
		styleSheet.deleteRule(styleSheet.cssRules.length -1);
		styleSheet.insertRule(cssString, styleSheet.cssRules.length);
		userSelected = username;
	}
	}
});
})();
