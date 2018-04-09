//Dependencies
import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

//Components
import Home from './Home';
import App from './App';
import Page404 from './Page404';
import Login from './Login';

const AppRoutes = () =>
 <Router>
  	<Switch>
  		<Route path="/home" component={Home} />
      <Route path="/" component={Login} />
      <Route component={Page404} />
  	</Switch>
</Router>
export default AppRoutes;
