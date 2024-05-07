import { useState } from 'react'
import './styles/Homepage.css'
import Company from './components/Company'
import Landing from './components/LandingPage'

function App() {

  return (
    <>
      <div className="headercon">
        <Company/>
      </div>
      <div className='landingcon'>
        <Landing/>
      </div>
      
    </>
  )
}

export default App
