import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Login from './components/Login'



function App() {
  

  return (
    <>
      <Navbar />
      <Login />
      <Hero />
      <h1 className='bg-green-900'>Hellow Project</h1>
      
    </>
  )
}

export default App
