import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { employeeListReducer } from './reducers/employeeListReducer';
import { employeeEditFormReducer } from './reducers/employeeEditFormReducer';
import { userTypeSelectionReducer } from './reducers/userTypeSelectionReducer';

export default createStore(
    combineReducers({
      employeeListReducer,
      employeeEditFormReducer,
      userTypeSelectionReducer
    }),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);
