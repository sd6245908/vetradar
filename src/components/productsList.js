import React from "react";
import { products } from "../constants/index";
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  addToCart = () => {
    this.props.onChange({
      name: this.state.name,
      price: this.state.price
    });
  };

  componentDidMount() {
    this.setState({ products: products });
  }

  render() {
    return (
      <div className="Product-List">
        <h1>Product List</h1>
        {this.state.products.map((item, index) => {
          return (
            <div className="Product-Item">
              <h2> {item.name}</h2> 
              <div className="price">${item.price}</div>
              <button className="primary-btn" onClick={this.addToCart}>
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
