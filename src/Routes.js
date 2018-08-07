import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/my-story" component={Home} />
    <Route path="/about-me" component={Home} />
    <Route path="/ny-to-sf" exact component={Home} />
    <Route path="/hobbies" exact component={Home} />
  </Switch>
);
