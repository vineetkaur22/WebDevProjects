const recipeDetailWeb = {
	recipeDetailPage: function(food){
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
				<button class="top-bar-link" type="submit">Add New Recipe</button>
			</form>
			<span class="error-message" ></span>
		</div>
		<div class="homepage-content">
			<h1> Recipe-Details</h1>
			${recipeDetailWeb.getRecipeDetails(food)}
		</div>
		<script src="javascript/homepage.js"></script>
		</html>`;
	},

	getRecipeDetails: function(food){
	return `<div class="recipedetail-description">
			<span>Title : ${food.title}</span><br>
			<span>Ingredients : ${food.ingredients}</span><br>
			<span>Instructions : ${food.instructions}</span>
		</div>`
	},
};

module.exports = recipeDetailWeb;


