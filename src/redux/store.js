import {createStore, combineReducers, applyMiddleware} from 'redux'
import { filterReducer } from './filterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { searchReducer } from './searchReducer';

export const rootReducer =combineReducers({filterReducer,searchReducer})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));