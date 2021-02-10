// import './App.css';
import shop from './../api/shop'
import React, { useState, useEffect } from 'react'
import ProductList from './ProductList';


const App = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    // console.log('useEffect')
    shop.getProducts(products => {
      setProducts(products)
    })
  },[])




  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      <ProductList products={products} />
    </div>
  );
}

export default App;




// import React, { Component } from 'react';
// import shop from '../api/shop';
// import ProductList from "./ProductList";

// class App extends Component {
//   state = {
//     products : []
//   }
//   componentWillMount() {
//     shop.getProducts((products) => {
//       this.setState({
//         products
//       })
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h2>Shopping Cart Example</h2>
//         <hr/>
//         <ProductList products={this.state.products} />
//       </div>
//     )
//   }
// }

// export default App;