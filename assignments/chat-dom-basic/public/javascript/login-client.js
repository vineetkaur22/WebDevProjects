"use strict";

(function () {
	let form = document.forms[0];
	let usernameInput = form.querySelector('input[name="username"]');
	let submitButton = document.getElementById('submit-button'); //  .querySelector('button');

	usernameInput.addEventListener("input", function(){
		if(usernameInput.value == "" ){
			submitButton.disabled = true; 
		}
		else{
			submitButton.disabled = false; 
		}
	});
})();







