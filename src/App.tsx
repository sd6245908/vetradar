import React from 'react';
import ProductsList from './components/productsList.js';
import Cart from './components/cart.js'
import './App.css';


const App = () => {
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
      <ProductsList />
      <Cart />  

      {/* <p>Products</p>
      <p>Cart</p> */}
    </div>
  );
};

export default App;
