# Adress_Book

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\

#### `npm run build`

This project use React-Router BrowserRouter which is not supported when deploy to Github page. You can choose Heroku or Firebase to serve this project. 

## Main features

This project shows a list of contacts. The main feature is:
* List 10 contatcts initially; 
* Search by name, not case-sensitive, then shows a list of matched contacs;
* Click each contact to see contact detail information;
* Infinit scroll, when scroll to bottom of the list, automatically add more contact in the end;


### ToDos

* Add more styling to the page;
* Github page doesn't support Browserrouter, maybe try Hashrouter later;
* Add Navigation to the page;
* Use full search instead of hard coded fillter method; 
* Use axios cancel to avoid multipul request from API;