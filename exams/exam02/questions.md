# Exam 2 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: The first rule I've given about REST services is that the URL should represent a resource.  What does that mean?  Give an example where a url DOES not represent a resource, then describe how to modify it so that it does.

It means that the identity and the location of a resource on the Web are given by a single URL (Uniform Resource Locator) and we can use GET,POST,PUT,DELETE to invoke the resource. 

For example, if there is a service endpoint with name '/getStudentByID' it is not representing a resource. We have to use nouns for naming the resources so if we pass an Student Id to '/students/', It will change it to '/students/{id}'. It is representing student with that particular id. In the same way URL /app/users/1 locates the user with the ID 1, the URL /app/users locate all the users in the application. A resource can be represented in multiple formats, such as JSON, XML, etc.

## Q: If the service returns the username as a string, what is wrong with the below?  What would fix it? (Assume the service works without error)

```
  const name = fetch('/username');
  console.log(`user is named ${username}`);

```  
In the above statements username will not get printed because fetch always returns a promise. We can then wait for the promise to resolve by passing a handler with the then() method of the promise. That handler receives the return value of the fetch promise, a Response object. We can convert the response into JSON and print it.

```
const name = fetch('/username');
  		name.then(response => response.json()).
  		.then(data => console.log(`user is named`+ data))
```

## Q: What does it mean to "store your state in the DOM"?  Why shouldn't you do this?

Every application has a "state" that means totality of the current value for all things that can change basically everything necessary to keep your application running. To "store your state in the DOM" means storing things that are not directly meant for displaying purposes to DOM objects.

The DOM is supposed to be a view of data. Splitting the code into model and the view makes the code more readable, and the code is maintainable. Model manages the data, controller manages the flow of the application and View translates the data to output. Tying the data to the DOM means combining model and view which can result in a lot of errors.

## Q: What is a polyfill?  When should one be used?  Give an example of a polyfill that follows these rules.

A polyfill is a piece of code that is used to provide modern functionality on older browsers that do not support it.
Example of a polyfill is a String method startsWith(). We can write this in JS versions prior to it being standard. If the feature does not exists we can add the new function to the appropriate prototype.

## Q: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.

Multi page applications are the traditional web applications that reload the entire page and displays the new one when a user interacts with the web app. Each time when a data is exchanged back and forth, a new page is requested from the server to display in the web browser. This process takes time to generate the pages on the server, sending it to a client and displaying in the browser.

Single page applications consists just one single page. It loads all the content on just one single page rather than navigating the user to different pages. Single page applications are faster than Multiple web applications because they execute the logic in the web browser itself rather than on the server. Rest services 

## Q: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement?

Progressive Enhancement making a non-client-side web application and combining it with Javascript 
so it works even if Javascript is disabled on the browsers. It gives us basic user experience and cross compatibility across browsers to ensure stability. Even if Javscript is disabled the applications continues to work as a multiple page application. PE is great for ensuring backend is secure.

Single Page Application that uses Progressive Enhancement works as a Multiple page Application that is page works using form submits when Javascript is turned off on the browser and when JS is enabled there is no form submission there is background call that replaces the form with new html.
SPA that doesn't use Progressive Enhancement will not work as a Multiple page Application when JS is turned off.

## Q: Explain how a REST service is or is not similar to a dynamic asset.

When the request reaches the server, it passes the request to middleware or fetches result from a database with the goal of returning a HTML. REST service on the other hand, can return many formats like JSON, XML, HTML, etc. When a REST service returns a HTML then it can be said to be similar to a dynamic asset.

## Q: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.

When some information has to be saved outside of the page on the browser cookies can be used. Cookies are HTTP headers which the browser sends with each request. Cookies should not be used to store 
sensitive user data like passwords, 
personal user data like address,
Application state of the web application because user might use multiple tabs,
Big data.

## Q: Explain why it is useful to separate a function that fetches data from the what you do with that data

fetch() makes a network request to a url and returns a promise and that promise resolves with a response object. Making it as a seperate functions allows them to be used wherever they are needed in the future, whether it’s for service , Cache API or other similar things that handle or modify requests and responses, or any kind of use case that might require to generate responses programmatically.

## Q: Explain why try/catch is useless when dealing with asynchronous errors (assume you aren't using async/await)

try/catch only works in case of fully synchronous code but if we use for dealing asynchronous errors, no errors will be caught because when the code is executed asynchronously, the original synchronous catch block is not present and the exception will propagate all the way and will terminate the program.
