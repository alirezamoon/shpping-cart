import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { addToCart } from './../actions'


const ProductItem = (props) => {
    // console.log(props)
    return (
        <div>
            <Product {...props.product} />
            <button
                onClick={() => props.dispatch(addToCart(props.product.id))}
                disabled={props.product.inventory > 0 ? false : true}
            >{props.product.inventory > 0 ? 'Add To Cart' : 'Sold Out'}</button>
        </div>
    )
}

export default connect()(ProductItem)
