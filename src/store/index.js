import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
    )
);

export default store;