import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componenets/App.jsx'
import './index.css'
import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import productReducer from './features/productSlice.js';
// import { useSelector } from 'react-redux'
import cartReducer, { getTotal } from './features/cartSlice.js';


const store = configureStore({
  reducer:{
    products:productReducer,
    cart:cartReducer,
  },
})
//   const{cartQuantity} = useSelector((state) => state.cart)
store.dispatch(getTotal())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
    
  </React.StrictMode>,
)
