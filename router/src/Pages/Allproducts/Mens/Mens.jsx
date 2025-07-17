import React, { useContext } from 'react'
import { contextValue } from '../../../App'

const Mens = () => {
  const {btnValues} = useContext(contextValue)
  return (
    <div>Mens
      {btnValues.map((item)=>(
          <button>{item}</button>
        ))}
    </div>
  )
}

export default Mens