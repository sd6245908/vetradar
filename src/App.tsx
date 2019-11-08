import React from 'react';
import ProductsList from './components/productsList.js';
import Cart from './components/cart.js'
import './App.css';

interface MyProps {
}

interface MyState {
  value: string
}

class App extends React.Component<MyProps, MyState> {
  MyState = {
    addedProd: []
  }

  // handleOnChange = item => {
  //   console.log(item);
  //   this.setState(state => {
  //     let flag = true;
  //     state.addedProd.map((cItem,index)=> {
  //       if (cItem.size == item.size) {
  //         state.addedProd[index].count++;
  //         flag = false;
  //       }
  //     });
  //     if (flag) {
  //       const addedProd = [...state.addedProd, item];
  //       return {
  //         addedProd
  //       };
  //     }else{
  //       const addedProd = [...state.addedProd];
  //       return {
  //         addedProd
  //       };
  //     }
  //   });
  // };


  handleOnAddToCart = (item: Object) => {
    alert("Push a new Item to state.addedProd");
    //loop the items in the cart find the items with same name 

    // if item found, count++

    //if item not found, push the item to cart

    // setState, Cart will be rendered

  }
  handleOnItemRemove = (item = Object) => {
    //loop the items in the cart find the items with same name 

    // if item found, count--

    //if item not found, pull the item from cart

    //// setState, Cart will be rendered
  }

  render() {
    return (
      <div className="App">
        <p>
          Welcome to the Vet Radar front end test
          <span aria-label="hand-wave" role="img">
            👋
          </span>
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className='Shopping' >
          <ProductsList onChange={this.handleOnAddToCart} />
          <Cart items={this.MyState.addedProd} onItemRemoved={this.handleOnItemRemove} />

        </div>

      </div>
    );

  }

};

export default App;
