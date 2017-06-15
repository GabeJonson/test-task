import React, { Component } from 'react';
import axios from 'axios';

import Input from './Input';

import { Link } from 'react-router-dom'

import './App.css';

const URL = 'http://594023aebb5eb40011ddb7c0.mockapi.io/credit';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  saveData() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(item => {
      this.state.items.push(item.value)
    });

    axios({
      method: 'PUT',
      url: URL + '/1',
      data: {
        amount: this.state.items[0],
        term: this.state.items[1]
      }
    });
  }

  render() {
    return (
      <div className='container'>
        <form>
          <div className='form-group'>
            <label>Сумма</label>
            <Input
              Type='number'
              Class='amount'
            />
          </div>
          <div className='form-group'>
            <label>Срок</label>
            <Input
              Type='number'
              Class='term'
            />
          </div>
        </form>
        <ul>
          <li><Link
            to="/steptwo"
            id='next-step'
            onClick={this.saveData.bind(this)}
            >Step two</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
