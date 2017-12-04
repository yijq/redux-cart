import { FETCH_GOODS } from '../actions/actionType'

export const productsReducer = (state=[],action) => {
    switch (action.type) {
        case FETCH_GOODS: {
            return action.goodsList
        }
        default : {
            return state
        }
    }
}