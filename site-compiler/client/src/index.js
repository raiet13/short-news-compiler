import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './routes/App';
import ShowSitePosts from './routes/ShowSitePosts';
import SearchList from './routes/SearchList';
import SavedViews from './routes/SavedViews';
import Credits from './routes/Credits';

ReactDOM.render(
    <Router>
        <React.Fragment>
            <Route path="/" render={App} />
            <Route exact path="/credits" render={Credits} />
            <Route exact path="/showposts" render={ShowSitePosts} />
            <Route exact path="/searchlist" render={SearchList} />
            <Route exact path="/savedviews" render={SavedViews} />
        </React.Fragment>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
