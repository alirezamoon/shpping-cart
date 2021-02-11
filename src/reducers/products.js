import { RECEIVE_PRODUCTS } from './../constants/actionTypes'


const products = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            return state

    }
}


export default products