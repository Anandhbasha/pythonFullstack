import React, { useContext } from 'react'
import { contextValue } from '../../App'

const Allproducts = () => {
  const {setCount,count,btnValues} = useContext(contextValue)
  return (
    <div>Allproducts
        {btnValues.map((item)=>(
          <button>{item}</button>
        ))}
        <button>{count}</button>
    </div>
  )
}

export default Allproducts