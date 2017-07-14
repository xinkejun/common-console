import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

import { HashRouter, Route, Switch } from 'react-router-dom'

// Containers
//import App from './App';
import App from './containers/App'

// Views
import Login from './views/Pages/Login/'
//import Register from './views/Pages/Register/'
//import Page404 from './views/Pages/Page404/'
//import Page500 from './views/Pages/Page500/'

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login}/>
      <Route path="/" name="Home" component={App}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'))

//registerServiceWorker();

