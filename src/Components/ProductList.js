import React from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'


const ProductList = (props) => {
    // console.log(Object.keys(props.products))
    return (
        <div>
            <h3>Product</h3>
            {
                props.products.map(product =>
                    <ProductItem key={product.id} product={product} />
                )
            }
        </div>
    )
}

const getProducts = products => Object.keys(products).map(id => products[id])

const mapStateToProps = state => {
    return { products: getProducts(state.products) }
}


export default connect(mapStateToProps)(ProductList)