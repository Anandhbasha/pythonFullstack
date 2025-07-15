// // function App(){
// //   const btnValues = ["Login","Register","Submit","Enter","Cancel"]
// //   return(
// //     <div className="app">
// //       {btnValues.map((item)=>(
// //         <button>{item}</button>
// //       ))}
// //     </div>
// //   )
// // }


// // export default App

// import Button from './Button'
// import Login from './Login'

// function App(){
//   const btnValues = ["Login","Register","Submit","Enter","Cancel"]
//   return(
//     <div className="app">
//       {btnValues.map((item)=>(
//         <Button value ={item}/>
//       ))}
//       <Login/>
//     </div>
//   )
// }
// export default App
import React, { useEffect, useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0)
  let [bg,setBg] = useState("dark")
  const handleChange = ()=>{
    setCount(++count)
    console.log(count);    
  }
  useEffect(()=>{
    setBg(bg==="light"?"dark":"light")
  },[count])
  const bgChange=()=>{
    
  }
  return (
    <div className='App'>
      <button onClick={handleChange}>Count{count}</button>
      <button onClick={bgChange} style={{backgroundColor:bg==="dark"?"black":"white",color:bg==="dark"?"white":"black"}}>{bg}</button>
    </div>
  )
}

export default App