import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Index from './pages/Index';
import Daily from './pages/Daily';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/daily" component={Daily} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
