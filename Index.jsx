import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import { App } from "./containers/App.jsx";
import store from "./Store.jsx";
import './scss/style.scss';

document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <App/>, document.querySelector('#app'));
});
