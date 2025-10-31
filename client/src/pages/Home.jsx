import React from 'react'
import Banner from '../components/Home/Banner'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/features'
import Testimonial from '../components/Home/Testimonial'

const Home = () => {
  return (
    <div> 
        <Banner/>
        <Hero/>
        <Features/>
        <Testimonial/>
    </div>
   
  )
}

export default Home