import { FETCH_GOODS, ADD_TO_CART, DELETE_CART_ITEM } from './actionType'

export const fetchGoods = () => (
    dispatch => {
        fetch("/api/goodsinfo.json?q=1234")
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: FETCH_GOODS,
                goodsList: json
            })
        })
    }
)

export const addToCart = (id) => ({
    type: ADD_TO_CART,
    id
})

export const deleteCartItem = (id) => ({
    type: DELETE_CART_ITEM,
    id
})