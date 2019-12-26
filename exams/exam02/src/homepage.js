"use strict";

(function iife(){

	const errorContent = document.querySelector('.error-message');

	let setLinks = function(){
		const forms = document.querySelectorAll('.recipe-link')
		forms.forEach(form => {
			const foodTitleInput = form.querySelector('input[name="foodtitle"');
			const foodTitle = foodTitleInput.value;
			const foodTitleLink = form.querySelector('.recipe-name-link');
			foodTitleLink.addEventListener("click", function(event){
				event.preventDefault();
				showRecipeDetail(foodTitle);
			});
		});
	}
	setLinks();

	const getRecipe = function(foodTitle) {
		let url = 'http://localhost:3000/recipedetails/'+ foodTitle;
		return fetch(url)
			.catch(function(error) {
				return Promise.reject('Network Error');
			})
			.then(function(response) {
				if(response.ok){
					return Promise.resolve(response);
				} 
				else {
					return Promise.reject(response.message);
				}
			});
		};

	const showRecipeDetail = function(foodTitle){
		let promise = getRecipe(foodTitle);
		promise.then(function (response){
			response.json().then(function(parsedJson){
				// Populate the message div
				const homePageContent = document.querySelector('.homepage-content')
				const recipedetailhtml = `
						<h1> Recipe-Details</h1>
						<div class="recipedetail-description">
							<span>Title : ${parsedJson.title}</span><br>
							<span>Ingredients : ${parsedJson.ingredients}</span><br>
							<span>Instructions : ${parsedJson.instructions}</span>
						</div>`;
					homePageContent.innerHTML = recipedetailhtml;
			});
		},
		function (err) {
			const error = document.querySelector('.error-message');
			error.innerHTML = err;
		});
	};

	// For Adding new recipe

	const addRecipeLinkButton = document.querySelector('#add-recipe');
	addRecipeLinkButton.addEventListener("click", function(event){
		event.preventDefault();
		const homePageContent = document.querySelector('.homepage-content');
		while (homePageContent.firstChild) {
			homePageContent.firstChild.remove();
		}

		const recipeDivElement = document.createElement("div"); 
		recipeDivElement.classList.add('newrecipe-data');

		const formElement = document.createElement("form"); 
		formElement.setAttribute("action", "/homepage");
		formElement.setAttribute("method", "POST");

		const inputElement = document.createElement("input");
		inputElement.setAttribute("type", "text");
		inputElement.setAttribute("name", "title");
		inputElement.setAttribute("placeholder", "Food title");
		inputElement.setAttribute("required", "required");

		const textAreaIngredients = document.createElement("textarea");
		textAreaIngredients.setAttribute("rows", "5");
		textAreaIngredients.setAttribute("cols", "50");
		textAreaIngredients.setAttribute("name", "ingredients");
		textAreaIngredients.setAttribute("placeholder", "Enter ingredients");
		textAreaIngredients.setAttribute("required", "required");


		const textAreaInstructions = document.createElement("textarea");
		textAreaInstructions.setAttribute("rows", "5");
		textAreaInstructions.setAttribute("cols", "50");
		textAreaInstructions.setAttribute("name", "instructions");
		textAreaInstructions.setAttribute("placeholder", "Enter instructions");
		textAreaInstructions.setAttribute("required", "required");

		const buttonElement = document.createElement("button");
		buttonElement.setAttribute("class", "newrecipe-submit");
		buttonElement.setAttribute("type", "submit");
		buttonElement.innerHTML= "Add Recipe";

		formElement.appendChild(inputElement);
		formElement.appendChild(textAreaIngredients);
		formElement.appendChild(textAreaInstructions);
		formElement.appendChild(buttonElement);

		recipeDivElement.appendChild(formElement);
		homePageContent.appendChild(recipeDivElement);

		setAddButtonLister();
	});

	// For Home page

	const homePageButton = document.querySelector('#home-page');
	homePageButton.addEventListener('click', function(event){
		event.preventDefault();
		showAllRecipes();
	});

	const getAllRecipes = function() {
		let url = 'http://localhost:3000/recipedetails';
		return fetch(url)
			.catch(function(error) {
				return Promise.reject('Network Error');
			})
			.then(function(response) {
				if(response.ok){
					return Promise.resolve(response);
				} 
				else {
					return Promise.reject(response.message);
				}
			});
		};

	const showAllRecipes= function(recipes) {
		const promise = getAllRecipes();
		promise.then(function (response){
			response.json().then(function(parsedJson){
				errorContent.innerText = "";
				const homePageContent = document.querySelector('.homepage-content')
				while (homePageContent.firstChild) {
				    homePageContent.firstChild.remove();
				}
				for (let recipe of Object.values(parsedJson)) {
					
					const recipeDivElement = document.createElement("div"); 
					recipeDivElement.classList.add('recipe-list');

					const formElement = document.createElement("form"); 
					formElement.setAttribute("class", "recipe-link");
					formElement.setAttribute("action", "/recipedetail");
					formElement.setAttribute("method", "POST");

					const buttonElement = document.createElement("button");
					buttonElement.setAttribute("class", "recipe-name-link");
					buttonElement.setAttribute("type", "submit");
					buttonElement.innerHTML= recipe.title;

					const inputElement = document.createElement("input");
					inputElement.setAttribute("type", "hidden");
					inputElement.setAttribute("name", "foodtitle");
					inputElement.setAttribute("value", recipe.title);

					formElement.appendChild(buttonElement);
					formElement.appendChild(inputElement);

					recipeDivElement.appendChild(formElement);

					homePageContent.appendChild(recipeDivElement);
				}
				setLinks();

			},
			function (err) {
				errorContent.innerText = "Error in getting json";
			});
		},
		function (err) {
			const error = document.querySelector('.error-message');
			error.innerHTML = err;
		});
	}

	// Add new recipe button
	const setAddButtonLister = function (){
		const addNewButton = document.querySelector('.newrecipe-submit'); 
		addNewButton.addEventListener("click", function(event){
			event.preventDefault();
			const title = document.querySelector('input[name="title"]').value; 
			const ingredients = document.querySelector('textarea[name="ingredients"]').value; 
			const instructions = document.querySelector('textarea[name="instructions"]').value; 
			if(!validateEmpty(title) || !validateEmpty(ingredients) || !validateEmpty(instructions)){
				errorContent.innerText="All fields are required";
			}
			else{
				errorContent.innerText = "";
				let promise = postNewRecipe(title, ingredients, instructions);
				promise.then(function (response){
				showRecipeDetail(title);	
				})
				.catch( error => {
					errorContent.innerText = error;
				});				
			}
		});
	}

	const postNewRecipe = function(title, ingredients, instructions){

		const data = { "title": title, "ingredients": ingredients, "instructions": instructions};
		const url = 'http://localhost:3000/recipedetails';
		const headers = new Headers();
		headers.append('Content-Type', 'application/json'); // This one sends body

		return fetch(url, {
			method: 'post',
			headers: headers,
			body: JSON.stringify(data)
			})
			.catch(function(error) {
				return Promise.reject('Network Error');
			})
			.then(function(response){
				if(response.ok){
					return Promise.resolve(response);
				} 
				else {
					return Promise.reject(response.message);
				}
			});
	}

	const validateEmpty = function(field){
		if(!field || field === "")
			return false;
		else
			return true;
	}
})();



