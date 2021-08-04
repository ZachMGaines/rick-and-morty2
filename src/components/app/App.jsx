import React from 'react';
import Characters from '../../container/Characters';
import CharacterDetail from '../../container/CharacterDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}
          component={Characters} />
        <Route path="/character/:id" exact={true}
          component={CharacterDetail} />

      </Switch>
    </Router>
  );
}

