import * as type from './../constants/actionTypes'


const products = (state = {}, action) => {
    switch (action.type) {
        case type.RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            }
        case type.ADD_TO_CART:
            let product = state[action.productId]
            return {
                ...state,
                [action.productId]: {
                    ...product,
                    inventory: product.inventory - 1
                }
            }

        default:
            return state

    }
}


export default products