const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded( {extended: false} ));

const recipe = require('./recipe'); 
const homepageWeb = require('./homepage-web');
const recipeDetailWeb = require('./recipedetail-web');
const newrecipeWeb = require('./newrecipe-web');

app.use(express.static('./public'));

app.get('/homepage',(req, res) => {
	res.send(homepageWeb.homePage(recipe));
});

app.get('/',(req, res) => {
	res.send(homepageWeb.homePage(recipe));
});

app.post('/recipe', express.urlencoded({ extended: false }), (req, res) => {
	const foodItem = recipe.getFoodItem(req.body.foodtitle);
	res.send(recipeDetailWeb.recipeDetailPage(foodItem));
});

app.get('/newrecipe',(req,res) =>{
	res.send(newrecipeWeb.newrecipePage(""));
})

app.post('/homepage', express.urlencoded({ extended: false }), (req, res) => {
	const{title,ingredients,instructions} = req.body
	if(!title || title ==="" || !ingredients || ingredients==="" || !instructions || instructions ===""){
		errorMessage = `All fields are required`;
		res.send(newrecipeWeb.newrecipePage(errorMessage));
	}
	else{
		recipe.addRecipe({title,ingredients,instructions});
		const food = recipe.getFoodItem(title);
		res.send(recipeDetailWeb.recipeDetailPage(food));
	}
});

app.get('/recipedetails/:recipename', (req,res) => {
	const recipename = req.params.recipename;
	if(!recipename) {
		res.status(400).json({ error: "'recipename' property required" });
	} 
	else if (!recipe.foods.get(recipename)) {
		res.status(400).json({ error: `recipe not there: ${recipename}`});
	}
	else{	
		res.status(200).json(recipe.foods.get(recipename));	
	}
});

app.get('/recipedetails', (req,res) => {
	const recipes = Array.from(recipe.foods.values());
	if(recipes.length == 0){
		res.status(400).json({ error: `no recipe found`});
	}
	else{
		res.status(200).json(recipes);	
	}
});

app.post('/recipedetails', (req, res) => {
	try {
		const title = req.body.title ;
		const ingredients = req.body.ingredients ;
		const instructions = req.body.instructions ;		
		if(!title || title ==="" || !ingredients || ingredients==="" || !instructions || instructions ===""){
			res.status(400).json({ error: `All fields are required`});
		}
		else{
			recipe.addRecipe({title, ingredients, instructions});
			res.status(200).json({ success: `success`});
		}
	} catch (exception) {
		console.log("Exception in postnewrecipe:" + exception);
		res.status(400).json({ error: `exception in post`});
	}
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
