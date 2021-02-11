import { ADD_TO_CART } from "../constants/actionTypes";


const initialState = {
    addedIds: [],
    quantityById: {}
}

const cart = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: {}
            }
        default:
            break;
    }
} 

export default cart