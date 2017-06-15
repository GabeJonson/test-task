import React, { Component } from 'react';
import axios from 'axios';

import Input from './Input';

import { Link } from 'react-router-dom';

const URL = 'http://594023aebb5eb40011ddb7c0.mockapi.io/credit';

class StepTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  handleBlur(e) {
    let thisTarget = e.target;

    console.log(thisTarget)
  }

  saveData() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(item => {
      this.state.items.push(item.value);
    });

    console.log(this.state);

    axios({
      method: 'PUT',
      url: URL + '/1',
      data: {
        inn: this.state.items[0],
        firstName: this.state.items[1],
        lastName: this.state.items[2],
        city: this.state.items[3]
      }
    });
  }

  render() {
    return (
      <div className='container'>
        <form>
          <div className='form-group'>
            <label>ИНН</label>
            <Input
              Type='number'
              Class='inn'
            />
          </div>
          <div className='form-group'>
            <label>Фамилия</label>
            <Input
              Type='text'
              Class='lastName'
              onBlur={this.handleBlur.bind(this)}
            />
          </div>
          <div className='form-group'>
            <label>Имя</label>
            <Input
              Type='text'
              Class='firstName'
              onBlur={this.handleBlur.bind(this)}
            />
          </div>
          <div className='form-group'>
            <label>Город</label>
            <Input
              Type='text'
              Class='city'
              onBlur={this.handleBlur.bind(this)}
            />
          </div>
        </form>

        <ul>
          <li><Link to="/">Step one</Link></li>
          <li><Link
            to="/stepthree"
            id='next-step'
            onClick={this.saveData.bind(this)}
            >Step three</Link></li>
        </ul>
      </div>
    );
  }
}

export default StepTwo;
