import React from "react";
import {products} from "../constants/index";
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Classic Tee",
      price: "75.00",
      size: "",
      desc:
        "This is a classic Tee.This is a classic Tee.This is a classic Tee.This    is a classic Tee.This is a classic Tee.This is a classic Tee.This is a      classic Tee.This is a classic Tee.This is a classic Tee.This is a classic Tee.This is a classic Tee.This is a classic Tee."
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  addToCart = () => {
    this.props.onChange({
      name: this.state.name,
      price: this.state.price,
      count: 1
    });
  };

  componentDidMount() {
    this.state = {
      products: products
    };
  }

  render() {
    return (
      <div className="ProductList">
        <h1>Product List</h1>
      debugger;
        {/* {this.state.products.map((item, index) => {
          return (
            <div>
              <h1>{item.name}</h1>
              <div className="price">${item.price}</div>
            </div>
          );
        })} */}

        <div>
          <button className="primary-btn" onClick={this.addToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
}

export default ProductList;
