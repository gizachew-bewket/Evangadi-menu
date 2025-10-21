import { Component } from "react";
import "./FoodItem.css";
import FoodItemList from "../FoodItemList/FoodItemList";
import { menu } from "../../commonResource/data";
export default class FoodItem extends Component {
  render() {
    return (
      <div>
        <div className="foods-container">
          {menu?.map((item, index) => {
            const { id, title, category, price, img, desc } = item;
            return (
              <FoodItemList
                key={id || index}
                title={title}
                category={category}
                price={price}
                img={img}
                desc={desc.substring(0, 200) + "..."  }
              />
            );})}
        </div>
      </div>
    );
  }
}
