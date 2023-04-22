import React, { Component } from "react";
import { Data } from "./Data";
import Item from "./Rightcontent/item/Item";
class Rightcontent extends Component {
  render() {
    const dis_products = Data("products");
    let items = [];
    for (let i = 0; i < dis_products.length; i++) {
      items[i] = (
        <Item
          key={i}
          image={dis_products[i].image}
          name={dis_products[i].name}
          price={dis_products[i].price}
        />
      );
    }
    return (
      <div className="features_items">
            {/*features_items*/}
            <h2 className="title text-center">Features Items</h2>
            {items}
            {
              items.map((item) =>
              <Item 
                    image={item.image}
                    name={item.name}
                    price={item.price}
              />
              )
            }
          </div>
    );
  }
}

export default Rightcontent;