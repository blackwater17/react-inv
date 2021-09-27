import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter'
import './styles/styles.css';
import { addAllReleases } from './actions/releases'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';








const store = configureStore();


let storeDefault = []
store.dispatch(addAllReleases(storeDefault))






const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);







ReactDOM.render(jsx, document.getElementById("app"))




