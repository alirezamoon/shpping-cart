import * as type from './../constants/actionTypes'


export const reciveProducts = products => ({
    type: type.RECEIVE_PRODUCTS,
    products
})

export const addToCart = productId => ({
    type: type.ADD_TO_CART,
    productId
})

