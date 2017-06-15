import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const URL = 'http://594023aebb5eb40011ddb7c0.mockapi.io/credit';

class StepThree extends Component {
  constructor(props) {
    super(props);

    this.state = { items: '' };
  }

  componentDidMount() {
    axios.get(URL)
      .then(res => {
        let response = JSON.parse(res.request.responseText);

        return response;
      })
      .then(res => this.setState({ items: res }));
  }

  render() {
    if(!this.state.items) return <p className='container'>LOADING...</p>

    return (
      <div className='container'>
        <ul>
          {
            this.state.items.map((item, key) =>
              <li className='element' key={key}>
                <p>Сумма {item.amount}</p>
                <p>Срок {item.term}</p>
                <p>ИНН {item.inn}</p>
                <p>Фамилия {item.lastName}</p>
                <p>Имя {item.firstName}</p>
                <p>Город {item.city}</p>
              </li>
            )
          }
        </ul>
        <ul>
          <li><Link to="/steptwo">Step two</Link></li>
          <li><Link to='/save'>Save</Link></li>
        </ul>
      </div>
    );
  }
}

export default StepThree;
