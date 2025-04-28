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
import IdealClients from './Ideal Clients/IdealClients'
import WhyChooseDataTech from './Why DT/WhyChooseDataTech'
import KeyAdvantages from './Adv/KeyAdvantages'
import WhatIsDataTech from './Hero/WhatIsDataTech'
function App() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <WhatIsDataTech/>
      <FeaturesSection/>
      <GetInTouch/>
      <Banner/>
      <ServiceGrid/>
      <ValueStrategy/>
      <NumbersBanner/>
      <ThreeStepProcess/>
      <ItSolutions/>
      <WhyChooseDataTech/>
      <BenefitsSection/>
      <IdealClients/>
      <KeyAdvantages/>
      <TechIntegrationShowcase/>
      <Testimonials/>
      <Faq/>
    
      <JoinToExplore/>
    </div>
  )
}

export default App
