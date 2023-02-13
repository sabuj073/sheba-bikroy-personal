import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import sidebarReducer from './sidebarReducer';

const rootReducer = combineReducers({
	cart: cartReducer,
	sidebar: sidebarReducer,
});

export default rootReducer;
