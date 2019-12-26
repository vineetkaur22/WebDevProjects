# React polling

* start from the up-to-date master branch (`git checkout master; git pull origin master`)
* Create a feature branch named 'react-polling' (`git checkout -b react-polling`)
* Add files as required
* add, commit, and push the branch to github
* Create a PR to merge to master
* Be sure to include the reviewer(s)
* Due by 11:59pm Sun Dec 1

## Goal and Requirements

The goal is to modify/extend your react-based chat application
* Modify your login step to return a session cookie
    * The server-side will retain a list of valid sessions
* Modify your logout step so that the server-side renders the session invalid
* Modify your non-login service calls to pass the session Id
    * If a session Id isn't considered valid, the services will return a 403 error
    * If a session Id isn't present, the services will return a 401 error
    * You may include details in the error message or not, your choice
* Modify your chat application to include polling
    * This polling should only happen when a user is logged in
    * When a user logs out, the app will stop polling
    * This polling will happen with a sessionId and follow the same session id validation as other services
* Clean up any issues from your previous assignments
    * In particular I want to see good separation of concerns and small functions/components

## Allowances
* You may create your generated HTML as you see fit, but it must be fundamentally semantically valid and other best practices from class
* You may create the CSS as you see fit but you must follow the best practices given in class
* You may add icons and background images but there is no requirement to do so
* You may provide additional visual feedback (e.g. messages) for the user

## Restrictions
* All JSX files should have the .jsx extension, all vanilla JS files should have the .js extension
* Do not read from the DOM directly
* Do not modify the DOM except via React
* Do not use external JS outside of express, nodemon, cookie-parser, and what create-react-app installs
* All data from services should be JSON
* All data POSTed to a service should be JSON (unless in URL or headers)
* Do not use external CSS libraries (except for icon libraries if desired - no JS!)
* You may not use floats to do more than manage flowing text with images
* You may not use HTML tables or CSS table layouts
* Do not have any files in your PR except for the assignment (no files from other assignments, for example)
* Do not use var
* Do not use alert
* Do not use terrible variable names
* Do not have console.log debugging messages or commented out code
* Do not use cookies for anything other than sessionId
* Do not use localStorage/sessionStorage/IndexedDB
* You may not use CSS preprocessors, minifiers, or other tools to modify your CSS

