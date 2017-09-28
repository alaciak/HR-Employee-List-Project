# HR-Employee-List-Project

## description
The single page web application has been created with React.js and Redux.
It allows managing of the employee basic data fetched from the backend.
The following features has been implemented so far:
* employee list is fetched from the backend
* on employee row hover a pop up with short description is shown
* when you open the application, you are "logged in" as the user with the User role by default (selected in the vavigation bar)
* on employee row click it re-directs to edit form with options to save and cancel changes; changes are sent to the backend as well
* on X click, an employee should be removed
* as User you can edit or remove employees who do not have "Admin" or "Manager" position. Otherwise an alert pop up should appear on click.
* when you switch to Admin, more options should be available - every employee is removable and editable, you can also edit role and position of each employee
* basic form validation

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
* Redux
* Jest (unit tests)
* Sass
* Fetch
* JSON server
* Webpack
