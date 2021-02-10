import React from 'react'
import ProductItem from './ProductItem'

const ProductList = (props) => {
    // console.log(props)
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

export default ProductList