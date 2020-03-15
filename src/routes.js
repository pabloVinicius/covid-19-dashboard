import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages/Index';
import Daily from './pages/Daily';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/daily" component={Daily} />
      </Switch>
    </BrowserRouter>
  );
};
