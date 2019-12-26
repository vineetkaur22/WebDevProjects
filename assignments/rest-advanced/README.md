# REST Advanced

* start from the up-to-date master branch (`git checkout master; git pull origin master`)
* Create a feature branch named 'rest-basic' (`git checkout -b rest-advanced`)
* Add files as required
* add, commit, and push the branch to github
* Create a PR to merge to master
* Be sure to include the reviewer(s).  
* Due by 11:59pm Tue Nov 5th

## Goal and Requirements

The goal is to:
* The chat application will behave as a multiple page application when client-side JS is turned off
    * https://www.google.com/search?q=how+do+i+turn+off+javascript+in+chrome
    * This is basically your code from section 1
    * "Login" required (only username, no password)
    * Shows messages
    * Allows posting of new messages
    * Has a refresh button (does a page load)
* The chat application will behave as a single page application when client-side JS is active 
    * Login is still handled by multiple page loads/redirects
    * Once you see messages, you can:
        * post new messages (and see the updated messages)
        * refresh the list of messages
        * ...all without doing another page load
* Your service calls will be RESTful.
    * Follow the 3 rules
* Your service calls will accept and return JSON data
    * Remember to set the 'content-type' header when sending JSON
    * Remember to keep your service call endpoints and page load endpoints distinct
* Messages that are meaningful to the end user will be shown if there are service or network errors
* Your client-side JS will be bundled by webpack 
    * Use multiple files that are separated by purpose
    * Use ES6 import/export syntax
* Your refresh/send buttons will disable and show "..." (text) while the related service call is pending

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
* Do not use external JS outside of express, webpack, and webpack-cli
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

