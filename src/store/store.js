import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ticketsReducer } from './reducers/ticketsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ tickets: ticketsReducer });
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
