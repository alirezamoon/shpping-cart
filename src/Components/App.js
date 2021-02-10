import shop from './../api/shop'
import React, { useEffect } from 'react'
import ProductList from './ProductList';
import { connect } from 'react-redux'
import { reciveProducts } from './../actions'



const App = (props) => {

  useEffect(() => {
    shop.getProducts(products => {
      props.dispatch(reciveProducts(products))
    })
  }, [])

  return (
    <div className="App">
      <h2>Shopping Cart</h2>
      {/* <ProductList /> */}
    </div>
  );
}

export default connect()(App);




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