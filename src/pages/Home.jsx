import React from 'react'
import Navbar from '../components/Header'
import HeroSection from '../components/section1'
import ProductCards from '../components/section2'
import Features from '../components/features'
import Banner from '../components/banner'
import ProductGrid from '../components/products'
import WinterSaleBanner from '../components/banner2'
import RecentNews from '../components/news'
import BrandLogos from '../components/logosection'
import Footer from '../components/footer'
import Banner1 from '../components/banner3'

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection/>
      <ProductCards/>
      <Banner1/>
      <Features/>
      <Banner/>
      <ProductGrid/>
      <WinterSaleBanner/>
      <RecentNews/>
      <BrandLogos/>
      {/* <Footer/> */}
    </>
  )
}

export default Home
