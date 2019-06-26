import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import UserRouter from './router/index';
import * as serviceWorker from './serviceWorker';

document.title = '共享'
ReactDOM.render(<UserRouter />, document.getElementById('root'));
serviceWorker.unregister();
