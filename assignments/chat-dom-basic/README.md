# Chat DOM Basic

* start from the up-to-date master branch (`git checkout master; git pull origin master`)
* Create a feature branch named 'chat-dom-basic' (`git checkout -b chat-dom-basic`)
* Add files in this directory (and subdirectories) as requested/needed
* add, commit, and push the branch to github
* Create a PR to merge to master
* Be sure to include reviewers.  
* Due by 11:59pm Sun Oct 20

## Goal and Requirements

The goal is to:
* Add additional functionality to the server-side JS of the chat application
* Add browser-side JS convenience functionality
* Incorporate any corrections from your previous assignment reviews

You should demonstrate:
* Your understanding of reading and manipulating the DOM after page load
* Your understanding of passing data to server-side and managing multiple users
* Your understanding of your review comments

High level flow (see Requirements below for details):
* A user will need to be "logged in" (no password) to see or participate in chat
* A user can logout
* The active user list will show who was logged in when the page was last refreshed
* There is a "Refresh" button that will reload the page without sending a message or changing "logged in" status
    * Hint - getting /?username=XXX effective "refreshes", so do that with a button
* Clicking on a username will visually highlight all messages from that user and unselect any previously selected user
    * Hint - If you add a class with the username to all messages, it makes it easy to select those messages
    * Hint2 - It is good to prefix any such class so that a user can't pick a username that is an existing class
    * Hint3 - You should restrict which characters are accepted in a username to prevent users from injecting into your HTML
    * Hint4 - any such protection/limitation must be done server-side
* Clicking on a selected user will unselect that user
* Selected users and their highlighted messages will not remain selected if the page reloads for any reason (sending a message, refreshing, logging out)
* Messages posted will be listed as from the logged in user that posted them
* Messages will still be shown even if the user that posted them is logged out

Page Flow:
* GET /
    * if there is no username param, or if the username is not "logged in", will redirect to /login
    * If there is a username of a logged in user, will display the userlist and chat
* GET /login
    * will display a form requesting a username.  This form will POST to /login
* POST /login 
    * if there is no username, will redirect to /login.  
    * If there is a username, will add that user to the logged in user list and redirect to /?username=XXXX 
* POST /logout
    * if there is a username, will remove that user from the logged in user list
    * will NOT error if the username isn't on the logged in user list
    * will redirect to /login 

## Requirements

### Visuals

* Your app and interactions should be attractive and usable
* The functionality should be understandable and discoverable
* I should be able to tell that a username is/is not selected by how the username appears
* I should be able to tell if messages are/are not highlighted
    * How a message is "highlighted" is up to you, so long as it is recognizable and all messages remain readable.

### Functionality
* A user must be logged in to see/send messages (server-side JS)
* all message will show who sent them, and when
* A user that is not logged in will always see the login page (server-side JS)
* The login button will be disabled if the username field is empty (client-side JS)
* A user cannot login without providing a username (server-side JS)
* A user will only see a logout button if they are logged in (server-side JS)
* A user will not be able to send an empty message (client side JS)
* An empty message will not add a message (server-side JS) 
* I should be able to select/unselect usernames to highlight messages (client-side JS)
* Selecting a username with no messages should not cause any errors (client-side JS)
* If I send a message or refresh, the page will reset and usernames will not remain selected and highlighted messages will become normal 
* Login/logout/refresh functionality is done via server-side requests
* I can run `npm install` and `npm start` in this directory to run your code

### Code
* Your CSS should not use names to describe the appearance
* Your JS should be broken up into smaller, well-named functions
* Your client-side JS should be contained within an IIFE and "use strict"

## Allowances
* You are welcome to reuse any of your material from previous assignments, but make sure it matches the requirements
* You may create your HTML as you see fit, but it must be fundamentally semantically valid and other best practices from class
* You may create the CSS as you see fit but you must follow the best practices given in class
* You may add icons and background images but there is no requirement to do so
* You may provide additional visual feedback (e.g. messages) for the user
* You may add client-side JS files that you create as you desire

## Restrictions
* Do not use external JS (only express)
* Do not use external CSS libraries (except for icon libraries if desired - no JS!)
* You may not use floats to do more than manage flowing text with images
* You may not use HTML tables or CSS table layouts
* Do not have any files in your PR except for the assignment (no files from other assignments, for example)
* Do not use var
* Do not use alert
* Do not use terrible variable names
* Do not have console.log debugging messages or commented out code
* Do not use cookies
* Do not use localStorage, sessionStorage, IndexedDB or other client-side storage
* Do not use meta tag refresh or window.location
* You may not use CSS preprocessors, minifiers, or other tools to modify your CSS

## Special notes:
* Did you see the bit about `npm start`?  
* Did you see the bit about "use strict"?
* Did you see the bit about NOT using window.location, etc?
