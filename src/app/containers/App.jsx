import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main.jsx';
import EmployeesList from '../components/EmployeesList.jsx';
import EmployeeEditForm from '../components/EmployeeEditForm.jsx';
import '../scss/style.scss';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { IndexRoute } from 'react-router';
import { Provider } from "react-redux";
import store from "../Store.jsx";

export class App extends React.Component {

  render() {

    return (
        <Router>
          <Main >
            <Switch>
                <Route exact path='/' >
                  <Provider store={ store }>
                    <EmployeesList />
                  </Provider>
                </Route>
                <Route path='/edit/:id' >
                  <Provider store={ store } >
                    <EmployeeEditForm />
                  </Provider>
                </Route>
            </Switch>
          </Main>
        </Router>
      );
    }
  }
