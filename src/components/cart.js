import React from "react";
import ItemInCart from "./itemincart";

class Cart extends React.Component {
  state = {};
  render() {
    return (
      <div className="cart">
        {/* {this.props.items.map((item, index) => {
          return <ItemInCart item={item} key={index} />;
        })} */}
      </div>
    );
  }
}

export default Cart;
