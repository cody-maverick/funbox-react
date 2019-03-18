import React, { Component } from 'react';

import './food-card.css';
import FoodCardAfter from '../food-card-after/food-card-after';
import FoodCardPreTitle from '../food-card-pre-title/food-card-pre-title'

export default class FoodCard extends Component {

  state = {
    active: this.props.item.active,
    selected: this.props.item.selected,
    hover: true,
    enter: false
  }

  declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  selectItem = () => {
    if (this.state.active) {
      this.setState({
        selected: !this.state.selected,
        hover: false
      })
    }
  }

  onMouseLeave = () => {
    this.setState({
      hover: true,
      enter: false
    })
  }

  onMouseEnter = () => {
    this.setState({
      enter: true
    })
  }

  render() {
    const { hover, enter, selected } = this.state;
    const { extender, portions, mouses, customer, weight, selectedText, active } = this.props.item;
    const hiddenCustomer = customer ? 'food-card__thanks' : 'hidden';
    const activeClassNames = !active ? 'food-card food-card_disable' : 'food-card food-card_blue';
    const selectedClassNames = selected ? `${activeClassNames} food-card__selected` : `${activeClassNames}`;
    const hoverClasses = hover ? `${selectedClassNames} hover` : `${selectedClassNames}`;

    return (
      <div className="food-card-item">
        <div
          className={hoverClasses}
          onClick={this.selectItem}
          onMouseLeave={this.onMouseLeave}
          onMouseEnter={this.onMouseEnter}
        >
          <FoodCardPreTitle
            selected={selected}
            hover={hover}
            enter={enter}
          />
          <div className="food-card__title">
            Нямушка
          </div>
          <div className="food-card__variant">
            {extender}
          </div>
          <div className="food-card__info">
            <div className="food-card__portions">
              <span>{portions}</span> {this.declOfNum([portions], ['порция', 'порций', 'порций'])}
            </div>
            <div className="food-card__gift">
              <span>{mouses}</span> {this.declOfNum([mouses], ['мышь', 'мыши', 'мышей'])} в подарок
            </div>
            <div className={hiddenCustomer}>
              заказчик доволен
            </div>
          </div>
          <div className="food-card__weight">
            <div className="food-card__weight-inn">
              {weight}
            </div>
            <div className="food-cart__weight_measurement">
              кг
            </div>
          </div>
        </div>
        <FoodCardAfter
          selected={selected}
          active={active}
          selectedText={selectedText}
          extender={extender}
          selectItem={this.selectItem}
        />
      </div>
    )
  }
}