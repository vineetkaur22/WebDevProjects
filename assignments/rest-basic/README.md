# Rest basic

* start from the up-to-date master branch (`git checkout master; git pull origin master`)
* Create a feature branch named 'rest-basic' (`git checkout -b rest-basic`)
* Add files as required
* add, commit, and push the branch to github
* Create a PR to merge to master
* Be sure to include the reviewer(s).  
* Due by 11:59pm Tue Oct 29th

## Goal and Requirements

The goal is to:
* Have the chat multiple-page application server, css, and client-side JS from the previous assignment
    * You may tweak to improve, but keep the functionality
    * Add an empty div on the page to show error status messages
* Write a REST service to get the list of messages  
    * Remember the 3 rules of RESTful services
    * Return the data as JSON (array of objects)
    * It will read the username from the query params and will return: 
        * a 401 if the username is blank (and will NOT send the message list)
        * a 403 if the username is not blank, but is not one of the currently logged in users (and will NOT send the message list)
        * You may send a body with the error responses or not, your choice
* Change the Refresh button so that (using client-side JS): 
    * It does NOT reload the page 
    * It does call the REST service using fetch()
        * Pass the current username to the service as a query param
    * It uses the list returned to populate the HTML of the messages list on the page
    * Hint:
        * event.preventDefault()
        * fetch using the right HTTP method and right url, and with the username as a query param
        * then check if response.ok and either return the response.json() or reject with an error (you can check response.status if you need specifics)
        * then use the parsed array of objects to generate HTML text and set innerHTML of the message list element
        * remember to catch() both the case of !response.ok AND if the fetch rejected (network error).  You can do this in one catch or two, your choice.  Remember that if the callback to catch() doesn't reject, the promise will resolve and further then() callbacks chained after the catch() WILL be called.
* If the service call fails due to network errors (you can stop your server to test), show a "trouble connecting to the network, please try again" status message in the div you added for error messages
* If the service call fails with a 401, show a "You must be logged in" status message in the div you added for error messages
* If the service call fails with a 403, show a "You are not an authorized user" status message in the div you added for error messages
* If the service call returns the list of users, remove any existing message from the div you added for error messages

## Requirements

### Visuals

* Your app and interactions should be attractive and usable
* The functionality should be understandable and discoverable
* See the notes in goals about the error messages

### Functionality
* The "login" button will be disabled if there is no username started
* The "send" button will be disabled if there is no message started
* The list of current messages will update based on the service results if you press "Refresh"
* The error messages work as described

### Code
* Your CSS should not use names to describe the appearance
* Your JS should be broken up into smaller, well-named functions
* Your client-side JS should be contained within an IIFE and "use strict"

## Allowances
* You may create your HTML as you see fit, but it must be fundamentally semantically valid and other best practices from class
* You may create the CSS as you see fit but you must follow the best practices given in class
* You may add icons and background images but there is no requirement to do so
* You may provide additional visual feedback (e.g. messages) for the user

## Restrictions
* Do not use external JS 
* All data from services should be JSON
* All data POSTed to a service should be JSON
* Do not use external CSS libraries (except for icon libraries if desired - no JS!)
* You may not use floats to do more than manage flowing text with images
* You may not use HTML tables or CSS table layouts
* Do not have any files in your PR except for the assignment (no files from other assignments, for example)
* Do not use var
* Do not use alert
* Do not use terrible variable names
* Do not have console.log debugging messages or commented out code
* Do not use cookies
* Do not use localStorage/sessionStorage/IndexedDB
* Do not use inline JS on the page or in HTML elements
* Do not modify CSS on elements using JS - just add/remove classes and other HTML attributes/properties
* You may not use CSS preprocessors, minifiers, or other tools to modify your CSS

