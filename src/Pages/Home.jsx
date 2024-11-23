import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import CategoryBar from '../components/CategoryBar'
import NewArrivals from '../components/NewArrivals'
import Service from '../components/Service'
import Banner from '../components/Banner'
import PopularProducts from '../components/PopularProducts'
import BlogCard from '../components/BlogCard'
import Photo from '../components/Photo'

const Home = () => {
  return (
    <div>
      <HomeCarousel/>
      <CategoryBar/>
      <NewArrivals/>
      <Service/>
      <Banner/>
      <PopularProducts/>
      <BlogCard/>
      <Photo/>
    </div>
  )
}

export default Home