const foods = new Map();
foods.set(
	"Chicken-Biryani",
	{ 
	  title:"Chicken-Biryani",
	  ingredients: "chicken,rice,spices",
	  instructions: "Boil chicken with rice and spices together"
	});
foods.set(
	"Basic-Yellow-Cake",
	{
	  title:"Basic-Yellow-Cake",
	  ingredients: "3 teaspoons baking powder,2 1/2 cups 310 g all-purpose flour,1 cup 227g unsalted butter, 1 1/2 cups 297g granulated sugar,4 large eggs",
	  instructions: "Preheat oven to 350°F. Prepare cupcake pans with liners or grease and flour cake pan(s).Whisk salt, baking powder, and flour in a medium sized bowl. Set aside.Using a hand mixer, cream sugar into melted butter until smooth. Beat in eggs, one at a time, then mix in vanilla extract.Add dry ingredients alternately with the buttermilk, starting and ending with the flour, mixing gently between each addition. Mix until just combined. Be sure to scrape the sides of the bowl.Pour batter into prepared pans and bake as directed. Cool completely before removing and frosting."
	});

function getFoodItem (foodtitle){
	const foodItem = foods.get(foodtitle);
	return foodItem;
}

function addRecipe({title,ingredients,instructions}){
  	const fooddata = { title, ingredients, instructions}
	foods.set(title,fooddata);
}

const recipe = { 
	foods,
	getFoodItem,
	addRecipe
};

module.exports = recipe;