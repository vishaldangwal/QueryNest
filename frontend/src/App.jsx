import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedBlogs from './components/FeaturedBlogs'
import Footer from './components/Footer'
import Categories from './components/Categories'
import PopularWriters from './components/PopularWriters'
import Newsletter from './components/Newsletter'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <FeaturedBlogs/>
    <Categories/>
    <PopularWriters/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App