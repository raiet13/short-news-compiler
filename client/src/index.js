// Note : This is the initial entry to the app and applies the Redux store and reducers

import React from 'react';
import ReactDOM from 'react-dom';
// import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// NOTE : Adding seed data to store for pre-API development purposes -- https://redux.js.org/recipes/structuringreducers/initializingstate
import seedData from './seedData';

// Require dotenv to access the API Keys
require('dotenv').config()

const store = createStore( rootReducer, seedData, applyMiddleware(thunk) );

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
