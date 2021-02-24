import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import {Provider} from 'react-redux'
import {rootReducer} from './redux/reducers/rootReducer'
import thunk from 'redux-thunk';
import './index.css';

const store = createStore(rootReducer, compose(applyMiddleware( thunk )))

const app = (
    <Provider store={ store }>
        <App/>
    </Provider>
)

ReactDOM.render(
    <React.StrictMode>
        { app }
    </React.StrictMode>,
    document.getElementById('root')
);
