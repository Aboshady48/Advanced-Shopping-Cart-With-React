import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Store from './Pages/Store'
import About from './Pages/About'
const App = () => {
  return (
    
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/about' element={<About/>} />
      </Routes>      
    </div>
  )
}

export default App
