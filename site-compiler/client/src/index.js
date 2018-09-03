import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import App from './routes/App';
import Credits from './routes/Credits';
// import ShowSitePosts from './routes/ShowSitePosts';
// import SearchList from './routes/SearchList';
// import SavedViews from './routes/SavedViews';

const store = createStore( rootReducer, applyMiddleware(thunk) );

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <React.Fragment>
                <NavBar />
                <Route exact path="/" render={() => <App />} />
                <Route exact path="/credits" render={() => <Credits />} />
            </React.Fragment>
        </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

            // <Route exact path="/showposts" render={ShowSitePosts} />
            // <Route exact path="/searchlist" render={SearchList} />
            // <Route exact path="/savedviews" render={SavedViews} />
