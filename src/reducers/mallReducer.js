import { FETCH_GOODS, ADD_TO_CART } from '../actions/actionType'

export const mallReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_GOODS: { 
            return action.goodsList
        }
        case ADD_TO_CART: {
            return state.map((v) => {
                if( v.productId === action.id ) {
                    return {...v,inventry: v.inventry-1}
                }
                return v
            })
        }
        default: {
            return state
        }
    }
}