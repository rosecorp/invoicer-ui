import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import CustomerReducer from './reducer_customer';
import { reducer as formReducer } from 'redux-form';

const configStoreData = combineReducers({
	customers: CustomerReducer,
	form: formReducer
});

const configureStore = () => {
	const logger = createLogger();
	const middlewares = [thunk, logger, promise];
	return createStore(
		configStoreData,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;
