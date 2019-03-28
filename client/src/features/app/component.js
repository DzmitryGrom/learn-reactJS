import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../series-route';
import Single from '../single-route';
import './component.less';

const App = () => (
    <Switch>
      <Route exact path="/" component={Series} />
      <Route path="/series/:id" component={Single} />
    </Switch>
);