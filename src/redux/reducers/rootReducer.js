import { combineReducers } from 'redux';
import { countReducer } from './countReducer';
import { themeReducer } from './themeReducer';
import { galleryReducer } from './galleryReducer';

export const rootReducer = combineReducers({
	count: countReducer,
	theme: themeReducer,
	gallery: galleryReducer,
});
