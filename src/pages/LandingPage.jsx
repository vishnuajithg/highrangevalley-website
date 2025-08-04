import React from 'react'
import Footer from '../components/Footer'
import Connect from '../components/LandingPage/Connect'
import Header from '../components/Header'
import Suppliers from '../components/LandingPage/Suppliers'

import HeroPageMain from '../components/LandingPage/HeroSectionMain'
import WhySection from '../components/LandingPage/WhySection'
import AboutGetToKnow from '../components/LandingPage/AboutGetToKnow'
function LandingPage() {
  return (
    <>
    < Header/>
    <HeroPageMain/>
    <WhySection/>
    <AboutGetToKnow/>
    < Suppliers/>
    <Connect/>
    < Footer/>  
    </>
  )
}

export default LandingPage
