import { Fragment } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Company from '../components/Company'
import Offer from '../components/Offer'
import Courses from '../components/Courses'
import AboutUs from '../components/AboutUs'
import Updates from '../components/Updates'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <Fragment>
        <Header />
        <HeroSection />
        <Company />
        <Offer />
        <Courses />
        <AboutUs />
        <Updates />
        <Footer />
    </Fragment>
  )
}

export default Home