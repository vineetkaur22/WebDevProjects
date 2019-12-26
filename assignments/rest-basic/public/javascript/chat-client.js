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

(function(){
	let form = document.getElementById('outgoing')
	let userinput = form.querySelector('input[name="username"');
	let username = userinput.value;
	let refreshButton = document.querySelector('#refresh-button');

 	let getMessages = function() {
			let url = 'http://localhost:3000/messages/'+ username;
			return fetch(url)
				.catch(function(error) {
					return Promise.reject('Network Error');
				})
				.then(function(response) {
					if(response.ok){
					return Promise.resolve(response);
					} 
					else if (response.status == 403){
					return Promise.reject('You are not an authorized user');
					}
					else if (response.status == 401){
						return Promise.reject('You must be logged in');
					}
				});
			
 	};

	let refreshMessages = function(){

		let promise = getMessages();

			promise.then(function (response){
				const errorDiv = document.querySelector('.error-message');
				errorDiv.innerHTML = "";
				let copy = response.clone();
					copy.json().then(function(parsedJson){
					// Populate the message div
					const messageList = document.querySelector('#chat-window')
					const messagesInnerHtml = ` <div class="error-message"></div><ol class="messages">` +
					Object.values(parsedJson).map( message => `
					<li>
						<div class="chat-container">
						<div class="chat-cell">
					<img class="user-icon" src= ${message.image}>
							<span class="messagelist-username">${message.sender}</span>
						</div>
						<div class="chat-cell-text ${"__" + message.sender + "__"}">
							<span>${message.text}</span>
							<span class="timestamp">
								${message.timestamp.getDate()  + "-" + (message.timestamp.getMonth()+1) + "-" + message.timestamp.getFullYear() + " " + message.timestamp.getHours() + ":" + message.timestamp.getMinutes()}
							</span>
						</div>
					</div>
					</li>  
					`).join('') + `</ol> ` ;
				messageList.innerHTML = messagesInnerHtml;
				});
			},
			function (err) {
				const errorDiv = document.querySelector('.error-message');
				errorDiv.innerHTML = err;
			});
	};

	refreshButton.addEventListener("click", function(event){
		event.preventDefault();
		refreshMessages();
	});
})();
