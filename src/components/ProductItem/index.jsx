import React from 'react'
import './prod_item.css'

const ProductItem = ({ item, addToCart, imgSrc }) => (
      <div className={`prod_item`}>
        <h3>{item.productName}</h3>
        <div><span>价格： {item.productPrice + "  "}</span><span>剩余：{item.inventry}</span></div>
        <button onClick={()=>{addToCart(item.productId)}}>add to cart</button>
        <img src={imgSrc} alt="itach"/>
      </div>
)

// class ProductItem extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     let { item, addToCart, imgSrc } = this.props
//     return (
//       <ReactCssTransitionGroup
//       transitionName='prod'
//       transitionEnterTimeout={800}
//       transitionLeaveTimeout={800}
//     >
//       <div className='prod_item'>
//         <h3>{item.productName}</h3>
//         <div><span>价格： {item.productPrice + "  "}</span><span>剩余：{item.inventry}</span></div>
//         <button onClick={()=>{addToCart(item.productId)}}>add to cart</button>
//         <img src={imgSrc} alt="itach"/>
//       </div>
//     </ReactCssTransitionGroup>
//     )
//   }
// }

export default ProductItem

