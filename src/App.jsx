/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import Features from './pages/Features/Features'
import SignUp from './pages/SignUp/SignUp'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>

      <Routes>
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='/coin/:coinId' element={<Coin></Coin>}></Route>
           <Route path='/features' element={<Features></Features>}></Route>
           <Route path='/login' element={<SignUp></SignUp>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  )
}

export default App