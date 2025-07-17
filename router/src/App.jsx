import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Allproducts from './Pages/Allproducts/Allproducts'
import Mens from './Pages/Allproducts/Mens/Mens'
import Womens from './Pages/Womens/Womens'


export const contextValue = createContext()
const btnValues = ["Checkout","ProceedPay","Placeorder"]

const App = () => {
  const [count,setCount] = useState(0)
  const handleCount = ()=>{
    setCount((prev)=>++prev)
  }
  return (
    <BrowserRouter>
    <contextValue.Provider value={{btnValues,count,setCount}}>
      <div className='App'>
          <Navbar/>
        </div>
        <button onClick={handleCount}>{count}</button>
        <Routes>
          <Route path='/all' element={<Allproducts/>} /> 
          <Route path='/mens' element={<Mens/>} /> 
          <Route path='/womens' element={<Womens/>} /> 
        </Routes>
    </contextValue.Provider>
        
    </BrowserRouter>
  )
}

export default App