import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './header';
import LeftMenu from './menu';
import Tags from './tags';

import PageRouter from '../../router/route'
class Index extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="left-menu">
            <LeftMenu  />
          </div>
          <div className="right-main">
            <div className="header">
              <Header />  
            </div>
            <div className="tags-con">
              <Tags/>
            </div>
            <div className="main">
            
              <PageRouter/>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default Index;