import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/common/Header';
import Home from './Components/home/Home';
import NotFound from './Components/NotFound'
import AlbumDetails from './Components/details/AlbumDetails';

function Routes() {
  return (
    <Router>
      <Header />
      <main style={{ marginTop: '80px' }}>
        <Switch>
          <Redirect exact from="/" to="/albums" />
          <Route exact path="/albums" component={Home} />
          <Route exact path="/albums/:id" component={AlbumDetails} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  )
}

export default Routes;
