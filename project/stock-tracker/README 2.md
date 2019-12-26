
## Goal and Requirements

* Create a single page Stock Tracker application in React with RESTful services.
* External API call is made to Alpha Vantage API to get all the latest stock details. API limits apply.
* There is  a login page if the user is not yet logged in.
* Login will call a service to see if the user is permitted using session Id saved in cookies.
* User can add stock symbol which will add the stock and price in stock list and update the list without reloading the page.
* User can anytime delete the stock from the stocklist.
* Meaningful error messages are displayed in case of 401/ 403 / etc. errors.
* Quantity of the stock can be changed (only numbers) and Equity will be updated accordingly.
* User can get the latest details of the stock by using the refresh button.
* Refresh also happens in the background with Polling.
* User can Logout from the Application by clicking on the Logout button.

* Run this all in a single server using `npm install` and `npm run server` (`npm start` should still work for the dev server, but will require that `npm run server` be running as well.  Running only `npm run server` should do all that is required and serve up the statically built files.
