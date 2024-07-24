import { combineReducers } from 'redux';
import { countReducer } from './countReducer';
import { themeReducer } from './themeReducer';

export const rootReducer = combineReducers({
	count: countReducer,
	theme: themeReducer,
});
