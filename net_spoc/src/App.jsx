import React from 'react'
import MainComponent from './Components/LangingPage/MainComponent'
import BackgroundComponent from './BackgroundComponent'
import NavHeader from './NavHeader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactUs from './Components/Pages/ContactUS/ContactUs'
import Login from './Components/Pages/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<MainComponent />
          } />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
