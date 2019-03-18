import React from 'react';

import './food-card-after.css';

const FoodCardAfter = ({ selected, active, selectedText, extender, selectItem }) => {

  if (!active) {
    return (
      <div className="food-card__after_none">
        Печалька, {extender} закончился.
      </div>
    )
  } else if (selected) {
    return (
      <div className="food-card__after_selected">
        {selectedText}
      </div>
    )
  } else {
    return (
      <div className="food-card__after">
        Чего сидишь? Порадуй котэ, <a className="food-card__link" onClick={() => selectItem()} >купи</a>.
      </div>
    )
  }
}

export default FoodCardAfter;