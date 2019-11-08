import React from 'react';
import ProductsList from './components/productsList.js';
import Cart from './components/cart.js'
import './App.css';


class App extends React.Component {
  state = {
    addedProd:[]
  }

  handleOnChange = (item:object) =>{
  
    // this.setState((state:object) => {
    //   let flag = true;
    //   this.state.addedProd.map(cItem,index:string=> {
    //     if (cItem.size == item.size) {
    //       state.addedProd[index].count++;
    //       flag = false;
    //     }
    //   });
    //   if (flag) {
    //     const addedProd = [...state.addedProd, item];
    //     return {
    //       addedProd
    //     };
    //   }else{
    //     const addedProd = [...state.addedProd];
    //     return {
    //       addedProd
    //     };
    //   }
    // });

  }

  render(){
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
        <ProductsList onChange={this.handleOnChange} />
        <Cart items={this.state.addedProd}/>  
  
        </div>
  
  
        {/* <p>Products</p>
        <p>Cart</p> */}
      </div>
    );

  }

};

export default App;
