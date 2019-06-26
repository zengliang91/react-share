import React, { Component } from 'react';
import './assets/css/common.scss';
import './setupProxy.js';
import './assets/fontAwesome/css/font-awesome.min.css'
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
