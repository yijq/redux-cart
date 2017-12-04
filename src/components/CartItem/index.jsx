import React from 'react'
import './cart_item.css'

// const car = require('../../static/images/car.png')

const CartItem = ({item,onDelete}) => (

    <div className="cart_item">
        <h3>{item.name}</h3>
        <p>{item.num}</p>
        <button onClick={()=>{onDelete(item.id)}}>delete</button>
    </div>
)

export default CartItem;