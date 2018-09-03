import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import App from './routes/App';
// import ShowSitePosts from './routes/ShowSitePosts';
// import SearchList from './routes/SearchList';
// import SavedViews from './routes/SavedViews';
// import Credits from './routes/Credits';

const Main = <App />


ReactDOM.render(
    (<Router>
        <React.Fragment>
            <NavBar />
            <div>
                <Route exact path="/" render={Main} />
            </div>
        </React.Fragment>
    </Router>), 
    document.getElementById('root'));
registerServiceWorker();




    // <Router>
    //     <React.Fragment>
    //         <div>
    //             <ul>
    //                 <li><Link to="/">Main Page</Link></li>
    //                 <li><Link to="/credits">Credits</Link></li>
    //                 <li><Link to="/showposts">ShowSitePosts</Link></li>
    //                 <li><Link to="/searchlist">SearchList</Link></li>
    //                 <li><Link to="/savedviews">SavedViews</Link></li>
    //             </ul>
    //         </div>
    //         <div>
    //             <Route exact path="/" render={App} />
    //             <Route exact path="/credits" render={Credits} />
    //             <Route exact path="/showposts" render={ShowSitePosts} />
    //             <Route exact path="/searchlist" render={SearchList} />
    //             <Route exact path="/savedviews" render={SavedViews} />
    //         </div>
    //     </React.Fragment>
    // </Router>, 
