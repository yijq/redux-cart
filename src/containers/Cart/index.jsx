import React, { Component } from 'react'
import CartItem from '../../components/CartItem'
import { connect } from 'react-redux'
import { deleteCartItem } from '../../actions/action'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'

class Cart extends Component {
    render() {
        return (
            <div>
              <ReactCssTransitionGroup
              transitionName={`cartitem`}
              transitionEnterTimeout={800}
              transitionLeaveTimeout={800}
              >
              {this.props.cartList.map((v,i)=>(<CartItem key={i} item={v} onDelete={this.props.deleteCartItem}/>))}
              </ReactCssTransitionGroup>
                
            </div>
        )
    }
}

const getCartList = (products,cartinfo) => {
    let cartList = [];
    products.forEach((v,i)=>{
        for( let k in cartinfo ) {
            if(cartinfo.hasOwnProperty(k)) {
                if(v.productId === +k) {
                    let newCartItem = {
                        id: v.productId,
                        name: v.productName,
                        num: cartinfo[k]
                    }

                    cartList.push(newCartItem)
                }
            }
        }
    })

    console.dir(cartList)
    return cartList;
}

const mapStateToProps = (state) => {
    return {
        cartList: getCartList(state.productsReducer,state.cartReducer)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCartItem: (id) => {
            dispatch(deleteCartItem(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)