// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';


// createStore is a redux library function that includes getState and dispatch functions.
// A reducer still needs to be created and passed into the createStore function.
// The code starting with "window..." allows Redux devtools CHrome extension to be used. 
const store = createStore(
    shoppingListItemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    // Provider component is imported from "react-redux".
    // Then it is used to wrap App and provides the "store" object to the rest of the App as a prop.
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
