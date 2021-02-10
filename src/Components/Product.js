import React from 'react'

const Product = (props) => {
    return (
        <div>
            <p> {props.title} - ${props.price} x{props.inventory} </p>
        </div>
    )
}

export default Product