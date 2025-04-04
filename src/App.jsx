import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './Hero/Hero'
import FeaturesSection from './Features/FeaturesSection'
import GetInTouch from './GetIntouch/GetInTouch'
import Banner from './Banner/Banner'
import ServiceGrid from './components/ServiceGrid'
import ValueStrategy from './offer/ValueStrategy'
import ThreeStepProcess from './Threesteps/ThreeStepprocess'
import NumbersBanner from './Banner/NumbersBanner'
import Faq from './Faq'
import ItSolutions from './IT solutions/ItSolutions'
import Testimonials from './Testimonials'
import JoinToExplore from './JoinToExplore'
import BenefitsSection from './Benifits/BenifitsSection'
import TechIntegrationShowcase from './techint/TechIntegrationShowcase'
function App() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <FeaturesSection/>
      <GetInTouch/>
      <Banner/>
      <ServiceGrid/>
      <ValueStrategy/>
      <NumbersBanner/>
      <ThreeStepProcess/>
      <Testimonials/>
      <ItSolutions/>
      <BenefitsSection/>
      <TechIntegrationShowcase/>
      <Faq/>
      <JoinToExplore/>
    </div>
  )
}

export default App
