import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import App from './routes/App';
import Credits from './routes/Credits';
import ShowSitePosts from './routes/ShowSitePosts';
import SearchList from './routes/SearchList';
import SavedViews from './routes/SavedViews';


ReactDOM.render(
    (<Router>
        <React.Fragment>
            <NavBar />
            <Route exact path="/" render={() => <App />} />
            <Route exact path="/credits" render={() => <Credits />} />
        </React.Fragment>
    </Router>), 
    document.getElementById('root'));
registerServiceWorker();

            // <Route exact path="/showposts" render={ShowSitePosts} />
            // <Route exact path="/searchlist" render={SearchList} />
            // <Route exact path="/savedviews" render={SavedViews} />
