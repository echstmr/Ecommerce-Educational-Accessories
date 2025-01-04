import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Service from './components/Services/Service'
import Category from './components/Category/Category'
import Product from './components/Products/Product'
import Solution from './components/Solution/Solution'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service/>
      <Category/>
      <Product/>
      <Solution/>
      <Footer/>
    </div>
  )
}

export default App
