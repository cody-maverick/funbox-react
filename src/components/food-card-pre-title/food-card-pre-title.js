import React from 'react';

import './food-card-pre-title.css';

const FoodCardPreTitle = ({ selected, hover, enter }) => {

  if (selected && enter && hover) {
    return (
      <div className="food-card__pre-title food-card__pre-title_pink">
        Котэ не одобряет?
      </div>
    )
  } else {
    return (
      <div className="food-card__pre-title">
        Сказочное заморское яство
      </div>
    )
  }
}

export default FoodCardPreTitle;