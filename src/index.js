import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import counterReducer from './store/reducers/counterReducer';
import resultReducer from './store/reducers/resultReducer';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
	return next => {
		return action => {
			console.log('[Middleware] Dispatching', action);
			const result = next(action);
			console.log('[Middleware] next state', store.getState());
			return result;
		};
	};
};

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();

//provider are helper component which allows us to inject store into react component.
