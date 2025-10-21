import { Component } from "react";
import "./FoodItemList.css";

export default class FoodItemList extends Component {
  render() {
    const { title, category, price, img, desc } = this.props;
    return (
      <div>
        <div className="single-food">
          <div className="img">
            <img src={img} />
          </div>
          <div className="title-price">
            <h3>{title} </h3>
            <p>{price} </p>
          </div>
          <div className="food-desc">{desc}</div>
        </div>
      </div>
    );
  }
}
