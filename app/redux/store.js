import {createStore, compose , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root/root.reducer';

// Middlewares

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(applyMiddleware(thunk), ...enhancerList);

// Create Store

let store = createStore(rootReducer, {home:{coba:'dikasih isi'}}, composedEnhancer);

export {
	store
};