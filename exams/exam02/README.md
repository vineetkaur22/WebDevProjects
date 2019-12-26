# Exam 2

* start from the up-to-date master branch (`git checkout master; git pull origin master`)
* Create a feature branch named 'exam2' (`git checkout -b exam2`)
* modify the `questions.md` file to have the answers required
* Add any files necessary to create the application below
* add, commit, and push the branch to github
* Create a PR to merge to master
* Be sure to include the reviewer(s)
* Due by 11:59pm Sun Nov 17

## Goal and Requirements

* Did you remember the above requirement about `questions.md`?

You will create a recipe storage and search website, along with the services necessary to support it.

The application will be a multiple-page web application that uses Progressive Enhancement to offer a single-page application version.

I will be able to install, build, and run your application with `npm install`, `npm start`
* You will have to create the necessary `scripts` section in `package.json`
* Hint: It is good to test that this works!

From the main page when a user loads the application:
* They can see a list of all recipe titles
* They can click a recipe title to see the recipe (title, ingredients, and instructions)
* They can add a new recipe (title, ingredients, and instructions)
    * Hint: `<textarea>` is better for long blocks of text than `<input>`
* When not on the main page, they can click something to return to the main page
* All users can see all recipes - there is no login of any kind

* You must use 'express' as your node server library
* All services will return JSON data, not HTML
* You must use 'webpack' to bundle the front end javascript (which must be at least two files)

### Multiple-page web-application vs Single Page Application

If client-side JS is turned off for the user (browser has disabled Javascript), they will load each page as a separate page load.  When client-side JS is available, the same functionality is available but it will all load from the Home Page with no later page loads.

The detection of client-side javascript is automatic - the user does not have to navigate to different links or otherwise take action to treat the two versions differently.

The multiple-page version will submit data via links and forms.  The single-page version will do all data changes via background service calls to REST services.


### Home Page
* Displays a list of all stored recipes
* Clicking on a recipe title will load a details page/screen
* Clicking on the "New Recipe" button will to the New Recipe page/screen

### Recipe Details
* Displays the title, ingredients list, and instructions for the selected recipe
* You can click a "Return to Home" link to return to the Home Page

### New Recipe
* Displays a form to enter the title, ingredients list, and instructions for a new recipe
* The ingredients list is a single textarea field to enter the data
* The instructions list a single textarea field to enter the data
* The user is not allowed to enter a recipe without something present in all 3 fields
* The user can click a "Return to Home" link to return to the Home Page
* The user is put on the Recipe Details screen for the new recipe after successfully submitting a recipe.

### REST Services

* You will need to add REST services to fulfill the needs of the application
* Pick services data, methods, URLs, and status codes to match the requirements of RESTful services as described in class
* Any request/response bodies will be in JSON (if they are present)

### Persistence
* There is no particular persistence requirement: the data need only persist as long as the server is running
* If you restart the server, the data is lost
* You may pre-populate some recipes if you wish

## Allowances
* You may create your HTML as you see fit, but it must be fundamentally semantically valid and other best practices from class
* You may create the CSS as you see fit but you must follow the best practices given in class
* You may add icons and background images but there is no requirement to do so

## Restrictions
* You must provide meaningful, and where applicable, ACTIONABLE error messages for your user on the page (for service calls)
* You should use no external libraries of any kind save for those explicitly allowed
* Do not use React
* Your JS, HTML, and CSS files must uphold the best practices from class (some, but not all, are listed below)
* You may not use floats to do more than manage flowing text with images
* You may not use HTML tables or CSS table layouts
* Do not have any files in your PR except for the exam (no files from other assignments, for example)
* Do not use var
* Do not use alert
* Do not use terrible variable names
* Do not have console.log debugging messages or commented out code
* Do not use cookies, localstorage, or other client-side storage
* Do not use window.location or other client-side redirects (server-side redirects are fine)
* You may not use CSS preprocessors, minifiers, or other tools to modify your CSS

