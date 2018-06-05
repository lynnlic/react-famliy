// import {createStore, applyMiddleware} from 'redux';
// import combineReducers from './reducers.js';
// import thunkMiddleware from 'redux-thunk';
// // import promiseMiddleware from '../middleware/promiseMiddleware';

// let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

// export default store;

import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';

import promiseMiddleware from '../middleware/promiseMiddleware'

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

export default store;