

import { createStore, combineReducers } from 'redux';

import releasesReducer from '../reducers/releases';
import filtersReducer from '../reducers/filters';




export default () => {

    const store = createStore(
        combineReducers({
            releases: releasesReducer,
            filters: filtersReducer

        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}




