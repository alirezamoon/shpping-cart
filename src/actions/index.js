import * as type from './../constants/actionTypes'


export const reciveProducts = products => ({
    type: type.RECEIVE_PRODUCTS,
    products
})