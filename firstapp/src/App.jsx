// function App(){
//   const btnValues = ["Login","Register","Submit","Enter","Cancel"]
//   return(
//     <div className="app">
//       {btnValues.map((item)=>(
//         <button>{item}</button>
//       ))}
//     </div>
//   )
// }


// export default App

import Button from './Button'
import Login from './Login'

function App(){
  const btnValues = ["Login","Register","Submit","Enter","Cancel"]
  return(
    <div className="app">
      {btnValues.map((item)=>(
        <Button value ={item}/>
      ))}
      <Login/>
    </div>
  )
}
export default App