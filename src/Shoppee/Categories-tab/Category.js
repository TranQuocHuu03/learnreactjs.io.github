import React, { Component } from "react";
import Item from "../category-tab/item/Item";
import { Data } from "../Data";

class Category extends Component {
  render() {
    const dis_products = Data("category");
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
      <div className="category-tab">
        {/*category-tab*/}
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#tshirt" data-toggle="tab">
                T-Shirt
              </a>
            </li>
            <li>
              <a href="#blazers" data-toggle="tab">
                Blazers
              </a>
            </li>
            <li>
              <a href="#sunglass" data-toggle="tab">
                Sunglass
              </a>
            </li>
            <li>
              <a href="#kids" data-toggle="tab">
                Kids
              </a>
            </li>
            <li>
              <a href="#poloshirt" data-toggle="tab">
                Polo shirt
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active in" id="tshirt">
            {items.map((item) => (
              <Item image={item.image} name={item.name} price={item.price} />
            ))}
            {items}
          </div>
          <div className="tab-pane fade" id="blazers">
            {items.map((item) => (
              <Item image={item.image} name={item.name} price={item.price} />
            ))}
            {items}
          </div>
          <div className="tab-pane fade" id="sunglass">
            {items.map((item) => (
              <Item image={item.image} name={item.name} price={item.price} />
            ))}
            {items}
          </div>
          <div className="tab-pane fade" id="kids">
            {items.map((item) => (
              <Item image={item.image} name={item.name} price={item.price} />
            ))}
            {items}
          </div>
          <div className="tab-pane fade" id="poloshirt">
            {items.map((item) => (
              <Item image={item.image} name={item.name} price={item.price} />
            ))}
            {items}
          </div>
        </div>
      </div>
    );
  }
}
export default Category;
