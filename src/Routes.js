import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Common/Header';
import Home from './Components/Home';
import ListItem from './Components/ListItem';

function Routes() {
  return (
    <Router>
      <Header>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:id" component={ListItem} />
      </Switch>
      </Header>
    </Router>  
  )
}

export default Routes;
