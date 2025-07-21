import React, { useReducer } from 'react'

const App = () => {
  const reducer = (state,action)=>{
    switch(action.type){
      case "counting":
        return ({...state,count:state.count+1})
      case "bgchange":
        return ({...state,bg:state.bg==="dark"?"light":"dark"})
    }
  }
  const [state,dispatch] = useReducer(reducer,{count:0,bg:"dark"})
  return (
    <div className='App'>
      <button onClick={()=>{dispatch({type:"counting"})}}>Count{state.count}</button>
      <button onClick={()=>{dispatch({type:"bgchange"})}}>{state.bg}</button>
    </div>
  )
}

export default App