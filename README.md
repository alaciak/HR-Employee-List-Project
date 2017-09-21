# HR-Employee-List-Project

## work in progress

## description
The single page web application has been created with React.js.
It allows managing of the employee basic data fetched from the backend.
The following features has been implemented so far:
* employee list is fetched from the backend
* on employee row hover a pop up with short description is shown
* on employee row click it re-directs to edit form with options to save and cancel changes; changes are sent to the backend as well
* every employee is removable

### in order to run the app, use the following commands in console:
in order to download dependencies:
``` bash
npm install
```
in order to build the project on Windows:
``` bash
node_modules\.bin\webpack-dev-server --hot
```
in order to build the project on Linux:
``` bash
./node_modules/.bin/webpack-dev-server -h
```
in order to run local backend server on Windows:
```bash
node_modules\.bin\json-server db/employees.json
```
in order to run local backend server on Linux:
```bash
./node_modules/.bin/json-server db/employees.json
```
after successfully running the both servers, the app should be available at: http://localhost:3001/

## technologies used:
* React
* React Router
* Sass
* Fetch
* Webpack
