"use strict";

(function () {
	let form = document.forms[0];
	let usernameInput = form.querySelector('input[name="username"]');
	let submitButton = document.getElementById('submit-button');
	let errorMessageSpan = document.getElementById('errorMessage');
	submitButton.addEventListener("click", function(event){
		let regExp = /^[a-zA-Z0-9]*$/;
		if(usernameInput.value == "" ){
			event.preventDefault();
			errorMessageSpan.innerText = "* Username cannot be empty";
		}
		else if (!regExp.test(usernameInput.value)){
			event.preventDefault();
			errorMessageSpan.innerText = "* Username can only contain alphabets or numbers";
		}
	});
})();







