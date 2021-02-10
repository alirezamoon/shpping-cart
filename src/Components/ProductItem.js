import React from 'react'
import Product from './Product'

const ProductItem = (props) => {
    console.log(props)
    return (
        <div>
            <Product {...props.product} />
            <button
                disabled={props.product.inventory > 0 ? false : true}
            >{props.product.inventory > 0 ? 'Add To Cart' : 'Sold Out'}</button>
        </div>
    )
}

export default ProductItem
