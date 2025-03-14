import React from 'react'
import MainComponent from './Components/LangingPage/MainComponent'
import BackgroundComponent from './BackgroundComponent'
import NavHeader from './NavHeader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactUs from './Components/Pages/ContactUS/ContactUs'
import Login from './Components/Pages/Login/Login'
import PrivacyPolicy from './Components/Pages/Privacy Policy/PrivacyPolicy'
import TermsandConditions from './Components/Pages/Terms and Conditions/TermsandConditions'
import Refund from './Components/Pages/Refund&Cancellation/Refund'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<MainComponent />
          } />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/Terms and Conditions' element={<TermsandConditions/>} />
          <Route path='/refund & cancellation' element={<Refund/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
