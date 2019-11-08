import React from "react";

class ItemInCart extends React.Component {
  state = {
    img: "/images/classic-tee.jpg"
  };
  render() {
    console.log();
    return (
      <div className="itemInCart">
        <div>
          <img src={this.state.img} width="80" />
        </div>
        <div>
          <div className='iic-section'>{this.props.item.name}</div>
          <div className='iic-section'>
            {this.props.item.count} x{this.props.item.price}
          </div>
          <div className='iic-section'>Size:{this.props.item.size}</div>
        </div>
      </div>
    );
  }
}

export default ItemInCart;
