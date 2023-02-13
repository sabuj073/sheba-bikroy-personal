import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'; // redux-logger for show data in console.
import thunk from 'redux-thunk'; // redux-thunk for async functionality;
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
