# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?

A static asset is a resource whose contents won't change from request to request like images, css files.
Dynamic asset is the content that changes on a web resource which is mainly data that keeps changing on a page which is specific to a user or items.

## Q: What is the difference between a relative and absolute file path in a URL?  What is the "webserver root/document root" and how do absolute/relative paths relate to this document root?

What is the difference between a relative and absolute file path in a URL?  What is the "webserver root/document root" and how do absolute/relative paths relate to this document root?

An absolute path also referred as Full path is a path that describes the location of a file or folder regardless of the current working directory i.e it is relative to the root directory. Absolute URL’s are used to link to other websites that are not on the same domain.
A relative path is a path that describes the location of a file or folder in relative to the current working directory.Relative URL’s are used to link to other websites that are located on the same domain.
Webserver root/document root is the topmost directory on the web server where the files are served from.
The document root is a directory (a folder) that is stored on your host's servers and that is designated for holding web pages.
Imagine there is a file like /var/www/site/forum/index.html. While on the web-server its address is http://www.site.ru/forum/index.html. There is a part, common for both addresses: /forum/index.html,for the browser, this path is absolute, starting from the root of the web-server.Whereas for the script it's only a part of the full path - the filesystem path. 

## Q: What is the difference between server-side and client-side JS?

Client-side JS means that the JavaScript code runs on the client machine, which is the browser.The client-side JavaScript is embedded directly by in the HTML pages. The browser interprets this script at runtime. 
Server-side JavaScript means that the code runs on the server which is serving web pages.On the server, you there is a listener to process requests, fetch information, and manipulate them so that they can be sent back to the client, like Node.js.

## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?

Var: Keyword “var is used to declare a variable.The scope of the variable is limited to the “function” within which it is defined. 
Const:If a variable is defined with keyword const, it cannot be reassigned. Const variables are block-scoped.
Let:Variables defined with “let” keyword are block-scoped and the variables can be reassigned.

## Q: What are the 4 ways to create inheritance? (no examples needed, just a sentence describing each)

1) Function and Constructor based Inheritance
	In this pattern we create a class using ‘function’ keyword, inherit the properties of the parent class using ‘call’ keyword and he methods of the parent class using 
<CHILD_CLASS>.prototype = Object.create(<PARENT_CLASS>.prototype)
2) Prototype based Inheritance
	An object may have a link to a prototype for delegation. If a property is not found on the object, the lookup is delegated to the delegate prototype, which may have a link to its own delegate prototype, and so on up the chain until you arrive at `Object.prototype`, which is the root delegate.	

3) Object based Inheritance
	We can create objects using {} in JS. These objects can be extended by another objects like 
var <CHILD_OBJECT> = Object.create(<PARENT_OBJECT>);

4) Using ‘class’, ‘extends’ keywords supported by ES6
	In ES6, we can use the ‘class’ keyword to create classes, and ‘extends’ keyword can be used to extend a parent class. Also, there is ‘constructor’ keyword which can be used to create constructors of these classes. Parent class constructor is called when Child class constructor is called, setting the parent class properties.

## Q: Give a demonstration of 1 way to create JS inheritance to _inherit_ a method named "purr".

function Animal () {
		}

		Animal.prototype.purr = function (amount) {
		  console.log(`Purr Purr`);
		}

		function Dog () {
		}

		Dog.prototype = Object.create(Animal.prototype)

		Dog.prototype.constructor = Dog


## Q: Give a demonstration of a different way to create JS inheritance to _inherit_ a method named "hiss".

	class Animal {
	    hiss() {
	    console.log(`HISS HISS`)
	  }
	}

	class Snake extends Animal {
	}

const snape = new Snake()
snape.hiss()

## Q: Explain this sentence: "In CSS, you can select an element based on its ancestors, but you can't select an element based on its descendants"  Make an example and say a concept that cannot be selected.

Specific elements can be targeted based on ancestors in CSS. For example if we have to target a <p> inside a <div> then we can use selector like - 
div p { }

But on the other hand we cannot select a parent element based on what child element(s) it contains. So in the example above we cannot make a selector which means select the <div> containing <p>

## Q: Explain what a callback is, and give an example.

A callback is a function that is to be executed after another function has finished executing.
Example - 

function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished(){
  alert('Finished my homework');
}
doHomework('math', alertFinished);

## Q: In CSS, what does it mean "You shouldn't name your classes after what they look like"?   Why?  Give an example of a class that is well named and a class that is poorly named.

That means the class names should not be generic and specific to the module or function they are related to. This allows de-coupling of the modules and the styling can be specific.
Example of well named class can be “loginForm-email” for elements within a specific form.
Example of poorly named class can be “Red” for elements with red background.

