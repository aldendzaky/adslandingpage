import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Portfolio from './pages/Portfolio'
import Service from './pages/Service'
import DetailServiceAi from './pages/DetailServiceAi'
import DetailServiceBlockchain from './pages/DetailServiceBlockchain'
import DetailServiceBusinnes from './pages/DetailServiceBusinnes'
import DetailServiceCRM from './pages/DetailServiceCRM'
import DetailServiceGoverment from './pages/DetailServiceGoverment'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/aboutUs' element={ <AboutUs />} />
          <Route path='/portfolio' element={ <Portfolio />} />
          <Route path='/service' element={ <Service />} />
          <Route path='/service/ai' element={ <DetailServiceAi />} />
          <Route path='/service/blockchain' element={ <DetailServiceBlockchain />} />
          <Route path='/service/bi' element={ <DetailServiceBusinnes />} />
          <Route path='/service/crm' element={ <DetailServiceCRM />} />
          <Route path='/service/goverment' element={ <DetailServiceGoverment />} />
          <Route path='/contact' element={ <Contact />} />
        </Routes>
      </Router>

    </>
      
  )
}

export default App
