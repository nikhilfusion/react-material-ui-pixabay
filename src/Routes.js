import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Common/Header';
import Home from './Components/Home';
import NotFound from './Components/NotFound'
import ListItem from './Components/ListItem';

function Routes() {
  return (
    <Router>
      <Header />
      <main style={{ marginTop: '80px'}}>
        <Switch>
          <Redirect exact from="/" to="/xyz" />
          <Route exact path="/xyz" component={Home} />
          <Route exact path="/xyz/:id" component={ListItem} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  )
}

export default Routes;
