/* eslint-disable func-names */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = function () {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>

      <Route exact path="/starred">
        This is starred page
      </Route>

      <Route>Not found page 404</Route>
    </Switch>
  );
};

export default App;
