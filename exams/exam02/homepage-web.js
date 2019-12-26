const homepageWeb = {
	homePage: function(recipe){
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
			<span class="error-message"></span>
		</div>
		<div class="homepage-content">
			<div class="recipe-list">${homepageWeb.getAllRecipes(recipe)}</div>
		</div>
		<script src="javascript/homepage.js"></script>
		</body>
		</html>`;
	},

	getAllRecipes: function(recipe) {
		let recipes = "";
		for (let key of recipe.foods.keys()) {
			recipes += `
			<form class="recipe-link" action="/recipe" method="POST">
			<button class="recipe-name-link" type="submit">${key}</button>
			<input type="hidden" name="foodtitle" value="${key}"/>
			</form>`
		};
		return recipes;
	}
};

module.exports = homepageWeb;