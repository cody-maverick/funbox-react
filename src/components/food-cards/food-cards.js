

import React, { Component } from 'react';
import FoodCard from '../food-card/food-card';



export default class FoodCards extends Component {

  render() {


    const data = this.props.data;
    const selectItem = this.props.selectItem;

    const foodCards = data.map(item => {
      return (
        < FoodCard item={item} key={item.id}/>
      )
    });

    return (
      <div className="food-cards">
        {foodCards}
      </div>
    )
  }
}