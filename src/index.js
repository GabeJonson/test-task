import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Save from './Save';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/steptwo" component={StepTwo}/>
      <Route path="/stepthree" component={StepThree}/>
      <Route path="/save" component={Save}/>
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
