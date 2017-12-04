import { ADD_TO_CART, DELETE_CART_ITEM } from '../actions/actionType';

export const cartReducer = (state = {},action) => {
    switch(action.type) {
        case ADD_TO_CART: {
            if(state.hasOwnProperty(action.id)) {
                return {...state,[action.id]: ++state[action.id]}
            } else {
                return {...state,[action.id]: 1}
            }
        }
        case DELETE_CART_ITEM: {
            // delete state[action.id]
            let _state = {...state}
            delete _state[action.id]
            return _state
        }
        default: {
            return state
        }
    }
}