import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { reducers } from './reducers/reducers'
import { fetchGoods } from './actions/action'

// import Bundle from './components/Bundle/Bundle'

import Mall from './containers/Mall'
import Cart from './containers/Cart'

const store = createStore(reducers,{},applyMiddleware(logger,thunk))

// const Loading = function () {
//   return <div>Loading...</div>
// };

// const createComponent = (src) => {
//   console.log(import(src).then((Component)=>Component))
//   return (
//     <Bundle load={() => import(src).then((Component)=>Component)}>
//       {
//           (Component) => Component ? <Component/> : <Loading/>
//       }
//     </Bundle>
//   )
// };

// createComponent('./containers/Mall/index.jsx')

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
         <div>
          <ul>
              <li>
                <Link to={`/`}>Mall</Link>
              </li>
              <li>
                <Link to={`/cart`}>Cart</Link>
              </li>
              <button onClick={()=>{store.dispatch(fetchGoods())}}>fetchGoods</button>
            </ul>
            <Switch>
              <Route path={`/`} exact component={Mall}/>
              <Route path={`/cart`} component={Cart}/>
            </Switch>
         </div>
        </Router>
      </Provider>
    );
  }
}

export default App
