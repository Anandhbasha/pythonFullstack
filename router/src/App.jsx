import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Allproducts from './Pages/Allproducts/Allproducts'
import Mens from './Pages/Allproducts/Mens/Mens'
import Womens from './Pages/Womens/Womens'

const App = () => {
  return (
    <BrowserRouter>
        <div className='App'>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/all' element={<Allproducts/>} /> 
          <Route path='/mens' element={<Mens/>} /> 
          <Route path='/womens' element={<Womens/>} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App