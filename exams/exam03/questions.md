# Exam 3 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

* NOTE: Because there is no coding portion to Exam 3, each of these questions is worth more to your grade than the questions on previous Exams!  Be sure to have answers you are confident shows your understanding!

## Q1: I have said that React JSX components are like functions and follow many of the same best practices.  Give at least 2 such best practices that are good for both JS functions and JSX Components.  (Be substantive!)

In React a JSX component is a JavaScript function that accepts inputs i.e. properties(props) and returns a React element that describes how a part of UI should look. Some of the best practices are -
JS functions and JSX Components must be small so that it can be reused accross multiple objects.
They must be easier to read and test because they are plain JavaScript functions without any state.
JSX components can call other components just like JS functions can call other functions.
Name of the component or functions must convey what it does.

## Q2: I have said that using Progressive Enhancement (supporting both MPA and SPA) is best, but many places don't do so because of the effort involved.  What is at least one major reason not to use SPA alone?

One major reason not to use SPA alone is that SPA's work with JavaScript dynamically renders the page right in the browser. So the user who disable JavaScript in thier browser, will be unable to see the  website. It is better to use Progressive Enhancement.
    
## Q3: The "proxy" setting in your package.json is required for the create-react-app dev server to call a local service, but not if you are calling a service that will always be on a different domain (such as jsonstore.io).  Explain what happens (in terms of network traffic) when your dev server is running on localhost port 3000 and makes a call to `/service` when you have "proxy" set to `http://localhost:4000` and a server running on localhost port 4000 that has the `/service` service.  hint: This should list and describe multiple request/response steps.

To tell the development server to proxy any unknown requests to your API server in development, we add a proxy field to in package.json. If web app is trying to consume any API running on different host and port, we get CORS (Cross Origin Resource Sharing) error in browser. So to get rid of this error, we make call to our local server and server will forward the call to API server. 
If we make a request to `/service` the development server will recognize that it’s not a static asset, and will proxy the request to `http://localhost:4000/service`. 
The request was made to `http://localhost:3000/service` , but it is served by  `http://localhost:4000/service` without the browser knowing anything about it.

## Q4: Follow-up: Using the above scenario, list and describe what the network calls are like after you run `npm run build` and are only running all of your content on localhost port 4000 when your JSX makes a call to `/service`

'npm run build' builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. This command kicks off Webpack and Webpack spits out a bundle.
When user's browser makes a request to localhost:3000, loading the static assets from the Webpack dev server. The user's browser / React then makes requests as needed directly to the API server hosted on localhost:4000. The React app (hosted at localhost:3000) would be attempting to load a resource from a different origin (localhost:4000). This would be performing Cross-Origin Resource Sharing. To avoid the issue we can have the Webpack development server proxy requests intended for our API server. So when React makes an API request to `localhost:3000`, the Webpack development server it simply proxies that request to the API server `localhost port 4000` and the request for the api service is served and response is provided.

## Q5: I have said that you can only pass data "down" in React, not "up".  What does that mean?  Give simple code sample if that makes it easier to describe.

It means that data can be passed down the component hierarchy from parent to child using Props(properties). Props enable us to pass variables from one to another component down the component tree and they can be anything from integers over objects to arrays. But there is no way to pass props from a child to a parent component in React. But we can always pass functions from parent to child components, whereas the child components make use of these functions and the functions may change the state in a parent component above. In the below example username is passed as a prop to the child component. 

//parent Component
function App( ) {

const onAdd = ( ) => {
    ....
 //adds user
}

return( 
            <div> 
            <Child username={username} onAdd={onAdd}/> 
            </div> 
        ); 
} 
  
// Child Component 
function Child ({onLogout, username} ){ 
        return( 
                <div> 
                <button onClick={onAdd}>Add</button>
                </div> 
            ); 
    } 

## Q6: Follow-up: If you can't pass data "up" the component tree, how can anything that is "down" change data?  Give simple code samples if that makes it easier to describe.

We can always pass functions from parent to child components, whereas the child components make use of these functions and the functions may change the state in a parent component above. Once the state is changed, the state is passed down as props again. All affected components will render again. In the below example onAdd is a function which can be used to change the state of the parent component when the Add button is clicked on the child component.

//parent Component
function App( ) {

const onAdd = ( ) => {
    ....
 //adds user
}

return( 
            <div> 
            <Child username={username} onAdd={onAdd}/> 
            </div> 
        ); 
} 
  
// Child Component 
function Child ({onLogout, username} ){ 
        return( 
                <div> 
                <button onClick={onAdd}>Add</button>
                </div> 
            ); 
    } 


## Q7: Imagine you have a collection of student records, with each having a student id, a name, and an address. (an example of one item in the collection would be: { id: "654321", name: "Bao", address: "123 Main Street" })  Imagine you also have collection of steps to create a pizza, with each step having an ingredient, a quantity, and an instruction. (an example of one item in the collection would be the object { qty: "1 cup", ingredient: "shredded cheese", instructions: "sprinkle over pizza" })

Give a code sample where each collection is shown with at least one more element (2+ students for the first collection, 2+ pizza-making steps).  Make sure you make proper use of arrays and objects.  Explain why you've chosen each way of making a collection (e.g. Why you use an array for one or both, or why you use an object for one or both)

{
"154273":{
        name:"Daniel",
        address:"170 44th St"
    },
"109876": {
        name: "Mary",
        address:"109 150th St"
    }
}

The reason to create the above objects is that whenever we will need the record of a particular student we can just query it by the student Id. Looping over the list of objects wont be required. The unique student Id will be the key to fetch the record of that student.

[
 { qty: "1 cup", ingredient: "All purpose flour", instructions: "knead the dough" },
 { qty: "1 cup", ingredient: "veggies", instructions: "put over pizza" },
 { qty: "1 cup", ingredient: "shredded cheese", instructions: "sprinkle over pizza" }
]

The reason to create the collection of steps to create a pizza like a array of objects is that whenever we need to query creating a pizza all the steps have to be done in correct order to get the final product correctly that can only be done if we use a array and iterate over the complete array whenever required.

## Q8: How does inheritance in JS relate to a prototype?  Give a simple code sample if it helps explain.

Inheritance is object's ability to access method and properties from another object. Whenever we create a function using JavaScript, JavaScript adds a prototype property inside a function. Prototype property is basically a reference to a prototype object where we can attach methods and properties. All objects which have set protoype pf parent object will inherit methods and properties of the parent object.
If a property of an object is called and that object doesn't contains tha property, then JS looks for that property in the prototype object too.

function Person(name, yearOfBirth){    
    this.name= name; 
    this.yearOfBirth= yearOfBirth; 
} 
In the above example Person has a prototype property and that prototype property has a constructor object which again points to the Person constructor function.
When we create an object using the above function constructor, JavaScript Engine will add proto in the object which will point to the prototype’s constructor object.

The prototype property of a child object can also be set to parent object using __proto__ property of an child object, after which child object will inherit all the properties of parent object.

## Q9: What is wrong about this code sample? `if( !username || username == undefined) { ` be sure to explain why that is wrong.

If above code is used to check if username is incorrect, then we have few issues here-
- "username == undefined" is not needed, as !username is true if username is undefined. So, just "if(!username)" would be enough to check for undefined.
- !username, doesn't checks the type of username. If we are expecting username to be a string it doesn't accomplishes it
- !username also doesn't checks if the username is only spaces, eg "    ". So, if we need additional check for that.

## Q10: What is decoupling?  What is an example of decoupling in a React app?

 Decoupling allows each component to perform its tasks independently - it allows components to remain completely autonomous and unaware of each other. 
 For example, in microservice architectures, applications are built and deployed as highly decoupled services. A change in one service shouldn't require a change in the other services. It is the process of separating services so that their functionality is more self-contained. 

In React, Function based components are decoupled from each other and intereact only through props and callbacks. This way they can be plugged in other components too.



