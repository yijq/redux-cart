import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import { addToCart } from '../../actions/action'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import './prod.css'

const itach = require('../../static/images/itach.jpg')

class Mall extends Component {
    render() {
        return (
            <div>
                {/* {this.props.productsList.map((v,i)=>(<ProductItem key={i} addToCart={this.props.addToCart} item={v}/>))} */}
                <ReactCssTransitionGroup
                transitionName="prod"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={800}
                >
                  {this.props.productsList
                      .filter((v)=> (v.inventry > 0))
                      .map((v,i)=>(<ProductItem key={i} addToCart={this.props.addToCart} item={v} imgSrc={itach}/>))}
                </ReactCssTransitionGroup>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productsList: state.mallReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mall);