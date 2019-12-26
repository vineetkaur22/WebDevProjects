const newrecipeWeb = {
	newrecipePage: function(errorMessage){
		return ` 
		<html>
		<head>
		<title>FindAnyRecipe</title>
		<link rel="stylesheet" type="text/css" href="/recipe.css"/>
		</head>
		<body>
		<h1> Welcome to My Recipes </h1>
		<div class="add-new-recipe">
			<form action="/homepage" method="get">
				<button id="home-page" class="top-bar-link" type="submit">Homepage</button>
			</form>
			<form action="/newrecipe" method="get">
				<button id="add-recipe" class="top-bar-link" type="submit">Add New Recipe</button>
			</form>
			<span class="error-message">${errorMessage}</span>
		</div>
		<div class="homepage-content">
			<div class="newrecipe-data">
				<form action="/homepage" method="post">
		   			<input name="title" type="text" placeholder="Food title" ><br>
		   			<textarea rows = "5" cols = "50" name="ingredients" placeholder="Enter ingredients" ></textarea><br>
		        	<textarea rows = "5" cols = "50" name = "instructions" placeholder="Enter instructions"></textarea><br>
		 			<button type="submit">Add Recipe</button>
				</form>
			</div>
		</div>
		<script src="javascript/homepage.js"></script>
		</body>
		</html>`;
		},
	};

module.exports = newrecipeWeb;