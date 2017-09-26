import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import employeeListReducer from './reducers/employeeListReducer';
import employeeEditFormReducer from './reducers/employeeEditFormReducer';

export default createStore(
    combineReducers({
      employeeListReducer,
      employeeEditFormReducer,
    }),
    {},
    applyMiddleware(createLogger(), thunk, promise())
);
