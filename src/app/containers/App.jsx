import React from 'react';
import ReactDOM from 'react-dom';
import EmployeesList from '../components/EmployeesList.jsx';
import '../scss/style.scss';

class App extends React.Component {

  render() {
    return <EmployeesList />
  }
}

document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <App/>, document.querySelector('#app'));
});
