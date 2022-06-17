import {createStore, combineReducers, applyMiddleware} from 'redux'
import { filterReducer } from './filterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { searchReducer } from './searchReducer';
import { favoriteReducer } from './favoriteReducer';
export const rootReducer =combineReducers({filterReducer,searchReducer,favoriteReducer})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));