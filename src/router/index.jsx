
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../App';
import Login from '../view/login/index';
import AuthRouter from './authRouter';

import Index from '../view/comments/index';

class UserRouter extends Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/login" component={Login}></Route>
            {/*登录权限控制组件*/}
            <AuthRouter path='/index' component={Index}></AuthRouter>
            <AuthRouter path='/api' component={Index}></AuthRouter>
          </Switch>
        </App>
      </Router>
    )
  }
}

export default UserRouter