import { RECEIVE_PRODUCTS } from './../constants/actionTypes'


const products = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            const products = action.products.reduce((obj, product) => {
                obj[product.id] = product
                return obj
            },{})
            return { ...products }
        default:
            return state

    }
}


export default products