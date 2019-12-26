const loginWeb = {
	loginPage:function(errorMessage){
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
						<span id="errorMessage">${errorMessage}</span>
											
						<button id="submit-button" type="submit">Login</button>
					</form>
				</div>
			</div>
		</div>
		<script src="javascript/login.js"></script>
	</body>
	</html>`;
}
};

module.exports = loginWeb;