const loginWeb = {
	loginPage:function(showError){
	return `
	<!DOCTYPE html>
	<html>
	<head>
		<title>Login Page</title>
		<link rel="stylesheet" type="text/css" href="chat.css">
	</head>
	<body>
		<div class = "login-page">
			<div class="login-box">
				<div>
					<h1>Login :</h1>
				</div>
				<div>
					<form action="/chat" method="POST">
						<input type="text" name="username" placeholder="Enter username">
						${loginWeb.showErrorSpan(showError)}					
						<button id="submit-button" type="submit" disabled>Login</button>
					</form>
				</div>
			</div>
		</div>
		<script src="javascript/login-client.js"></script>
	</body>
	</html>`;
},

	showErrorSpan:function(showError){
	if(showError){
		return `<span id="errorMessage">* Username can only contain alphabets or numbers</span>`
	}
		return "";
	},
};

module.exports = loginWeb;