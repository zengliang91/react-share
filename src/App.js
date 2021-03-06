import React, { Component } from 'react';
import './assets/css/common.scss';
import './setupProxy.js';
import './assets/fontAwesome/css/font-awesome.min.css'
import './assets/fontJH/iconfont.css'
import './assets/fontJH2/iconfont.css'
import './assets/fontJH3/iconfont.css'

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class App extends Component {
 
  render() {
    return (
      <div className="App">
        { this.props.children }
      </div>
    );
  }
}

export default App;
