import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeColor, decrement, increment } from './Slice/Slice'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.app.count)
  const bg = useSelector((state)=>state.app.bg)
  return (
    <div className='App' style={{backgroundColor:bg,height:"250px"}}>
      <p>{count}</p>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(changeColor("lightblue"))}>setLightblue</button>
      <button onClick={()=>dispatch(changeColor("red"))}>setRed</button>
      <button onClick={()=>dispatch(changeColor("purple"))}>setPurple</button>
    </div>
  )
}

export default App