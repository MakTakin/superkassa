import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, compose} from "redux";
import {Provider} from 'react-redux'
import {rootReducer} from './redux/rootReducer'
import thunk from "redux-thunk";
import './index.css';
import App from './App';


const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

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
