import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import {Provider} from 'react-redux'
import {rootReducer} from './redux/rootReducer'
import './index.css';
import App from './App';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
);
