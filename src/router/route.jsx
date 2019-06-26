
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ApiManager from '../view/api/index';
import DataManager from '../view/data/index';


class PageRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/index/api' component={ApiManager}/>
        <Route path='/index/data' component={DataManager}/>   
        <Route path='/api/myApi' component={ApiManager}/>   
      </Switch>
    )
  }
}

export default PageRouter