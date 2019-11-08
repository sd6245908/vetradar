import React from "react";
import ItemInCart from "./itemincart";

class Cart extends React.Component {
  state = {};
  render() {
    return (
      <div className="Product-Cart">
        <h1>Cart</h1>
        {this.props.items.map((item, index) => {
          return <ItemInCart item={item} key={index} />;
        })}
        <div className="Total">Total:{0}</div>
      </div>
    );
  }
}

export default Cart;
