"use strict";

import {getUserList, getMessages} from './services.js';

(function (){
	let form = document.getElementById('outgoing')
	let messageInput = form.querySelector('input[name="text"]');
	let sendButton = document.getElementById('send-button')
	const errorDiv = document.querySelector('.error-message');
	let userinput = form.querySelector('input[name="username"');
	let username = userinput.value;
	let refreshButton = document.querySelector('#refresh-button');

	function disableButton() {
		sendButton.disabled = true;
		sendButton.innerText = '...';
	}

	function enableButton() {
		sendButton.disabled = false;
		sendButton.innerText = 'send';
	}


	sendButton.addEventListener("click", function(event){
		if(messageInput.value == "") {
			event.preventDefault();
			errorDiv.innerHTML = "Message cannot be empty";

		}
		else{
			event.preventDefault();
			disableButton();
			var messagetext= document.getElementById("message-text").value;
			sendMessage(messagetext,username);

			var delayInMilliseconds = 1000;
			setTimeout(function() {
				refreshMessages();
			}, delayInMilliseconds);

			messageInput.value = "";
			setTimeout(function() {
				enableButton();
			}, delayInMilliseconds);
		}
	});

	let sendMessage = function(messagetext){
		let data = { sender: username, text: messagetext};
	 	let url = 'http://localhost:3000/messages/'+ username;
	 	var headers = new Headers();
		headers.append('Content-Type', 'application/json'); // This one sends body

		fetch(url, {
			  method: 'post',
			  headers: headers,
			  body: JSON.stringify(data)

			}).then(res=>res.json());
	};

	let refreshUserList = function(){
		getUserList(username).then(function (response){
			let copy = response.clone();
			copy.json().then(function(parsedJson) {
					displayUserList(parsedJson);
			});
		})
	};

	let refreshMessages = function(){
		getMessages(username).then(function (response){
				const errorDiv = document.querySelector('.error-message');
				errorDiv.innerHTML = "";
				let copy = response.clone();
				copy.json().then(function(parsedJson) {
					displayMessages(parsedJson);
				});

			}),
			function (err) {
				const errorDiv = document.querySelector('.error-message');
				errorDiv.innerHTML = err;
			};
	};

	refreshButton.addEventListener("click", function(event){
		event.preventDefault();
		refreshMessages();
		refreshUserList();
	});

	// Populate the message div
 	let displayMessages = function(parsedJson){
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
								 ${new Date(message.timestamp).toDateString()}
							</span>
						</div>
					</div>
					</li>  
					`).join('') + `</ol> ` ;
					messageList.innerHTML = messagesInnerHtml;
 	}

	// Populate the user div
 	let displayUserList = function(parsedJson){
		const userList = document.querySelector('#side-bar')
		const userInnerHtml = `<ul class= "users" >` + 
		Object.values(parsedJson).map(user => `
			<li>
			<div class="user">
			<div class="user-icon-div">
			<img class="user-icon" src=${user.image}>
			</div>
			<span class="userlist-username">${user.sender}</span>
			<span class="timestamp-sidebar">${new Date(user.timestamp).toDateString()}</span>
			</div>
			</li>
			`).join('')+`</ul>`;
			userList.innerHTML = userInnerHtml;
	}

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


