import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./Hero/Hero";
import FeaturesSection from "./Features/FeaturesSection";
import GetInTouch from "./GetIntouch/GetInTouch";
import Banner from "./Banner/Banner";
import ServiceGrid from "./components/ServiceGrid";
import ValueStrategy from "./offer/ValueStrategy";
import ThreeStepProcess from "./Threesteps/ThreeStepprocess";
import ServicesOverview from "./ServicesOffered";
import NumbersBanner from "./Banner/NumbersBanner";
import Faq from "./Faq";
import ItSolutions from "./IT solutions/ItSolutions";
import Testimonials from "./Testimonials";
import JoinToExplore from "./JoinToExplore";
import BenefitsSection from "./Benifits/BenifitsSection";
import TechIntegrationShowcase from "./techint/TechIntegrationShowcase";
import IdealClients from "./Ideal Clients/IdealClients";
import WhyChooseDataTech from "./Why DT/WhyChooseDataTech";
import KeyAdvantages from "./Adv/KeyAdvantages";
import WhatIsDataTech from "./Hero/WhatIsDataTech";
import Form from "./Form2/Form";
import AiBusinessGrowth from "./components/AI";
import "./App.css";
import ThreeStepProcess2 from "./Threesteps/ThreeStepProcess2";
import Hero2 from "./Hero/Hero2";

import TaxServicesPage from "./pages/tax";
import AIServicesPage from "./pages/ai";
import ConsultantServicesPage from "./pages/consultants";
import "@fontsource/outfit";
import WhoIsThisServiceFor from "./components/WhoIsThisServiceFor";

function MainContent() {
  const location = useLocation();

  // Only render the full homepage layout if not on /form route
  if (location.pathname === "/form") {
    return null;
  }

  return (
    <div className="font-outfit">
      <Navbar />
      <Hero />
      <WhatIsDataTech />
      <ServicesOverview />
      <FeaturesSection />
      <ThreeStepProcess />
      <WhoIsThisServiceFor />

      <ServiceGrid />
      <WhyChooseDataTech />
      {/* <TechIntegrationShowcase /> */}
      <AiBusinessGrowth />
      {/* <Testimonials /> */}
      <Faq />
      {/* <GetInTouch /> */}
      <JoinToExplore />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <WhatIsDataTech />
              <ServicesOverview />

              <FeaturesSection />
              <ThreeStepProcess />
              <WhoIsThisServiceFor />
              <ServiceGrid />
              <WhyChooseDataTech />
              {/* <TechIntegrationShowcase /> */}
              <AiBusinessGrowth />
              {/* <Testimonials /> */}
              <Faq />
              {/* <GetInTouch /> */}
              <JoinToExplore />
            </>
          }
        />
        <Route path="/form" element={<Form />} />
        <Route path="/tax" element={<TaxServicesPage />} />
        <Route path="/ai" element={<AIServicesPage />} />
        <Route path="/consultants" element={<ConsultantServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
