import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../containers/Main.jsx';
import EmployeesList from '../components/EmployeesList.jsx';
import EmployeeEditForm from '../components/EmployeeEditForm.jsx';
import '../scss/style.scss';
import {
  HashRouter as Router,
  Route,
  Switch }
  from 'react-router-dom';
import {
  IndexRoute,
} from 'react-router';


class App extends React.Component {

  render() {
    return (
        <Router>
          <Main >
            <Switch>
              <Route exact path='/' component={ EmployeesList }/>
              <Route path='/edit' component={ EmployeeEditForm }/>
            </Switch>
          </Main>
        </Router>
      );
    }
  }

document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <App/>, document.querySelector('#app'));
});
