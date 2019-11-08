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

  addToCart = (...item) => {
    this.props.onChange({
      name: item[0].name,
      price: item[0].price
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
            <div className="Product-Item" key={index}>
              <h2> {item.name}</h2> 
              <div className="price">${item.price}</div>
              <button className="primary-btn" onClick={this.addToCart.bind(this,item)}>
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
