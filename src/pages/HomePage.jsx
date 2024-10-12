import React from 'react'
// import Header from '../components/Header.jsx'
import Header from '../componenets/Header.jsx'
import HeroPage from '../componenets/HeroPage.jsx'
import Categories from '../componenets/Categories.jsx'
import Products from '../componenets/Products.jsx'
import Footer from '../componenets/Footer.jsx'
import  { getTotal } from '../features/cartSlice.js';

const HomePage = () => {
  // store.dispatch(getTotal())
  return (
    <div>
      <Header/>
      <HeroPage/>
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default HomePage
