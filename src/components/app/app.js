import React, { Component } from 'react';

import './app.css';
import FoodCards from '../food-cards/food-cards';

class App extends Component {

  state = {
    data: [
      {
        extender: 'с фуа-гра',
        portions: 10,
        mouses: 1,
        customer: false,
        weight: 0.5,
        selectedText: 'Печень утки разварная с артишоками.',
        selected: false,
        active: true,
        id: 0
      },
      {
        extender: 'с рыбой',
        portions: 40,
        mouses: 2,
        customer: false,
        weight: 2,
        selectedText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        selected: true,
        active: true,
        id: 1
      },
      {
        extender: 'с курой',
        portions: 100,
        mouses: 5,
        customer: true,
        weight: 5,
        selectedText: 'Филе из цыплят с трюфелями в бульоне.',
        selected: false,
        active: false,
        id: 2
      }
    ]
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1 className="app-title">Ты сегодня покормил кота?</h1>
        <FoodCards data={this.state.data} />
      </div>
    );
  }
}

export default App;
