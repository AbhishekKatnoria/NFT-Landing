import React from 'react'
import Navbar from './component/Navbar'
import ScrollToThe from './component/ScrollToThe'
import Home from './component/Home'
import Free from './component/Free'
import Client from './component/Client'
import SuperRare from './component/SuperRare'
import Release from './component/Release'
import Like from './component/Like'
import Signup from './component/Signup'
import Footer from './component/Footer'
import './scss/index.scss'

function App() {
  return (
    <div className='app-container'>
      <ScrollToThe/>
      <Navbar/>
      <Home/>
      <Free/>
      <Client/>
      <SuperRare/>
      <Release/>
      <Like/>
      <Signup/>
      <Footer/>
    </div>
  )
}

export default App