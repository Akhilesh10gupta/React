import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter,setCounter] = useState(5)
  
  // let counter = 5
  const addValue = () =>{
    // console.log("value added", counter);
    //counter = counter + 1;
    if (counter < 20){
    setCounter(counter + 1)
   }
  }


  const removerValue = () => {
   if (counter > 0){
    setCounter(counter - 1)
   }
  }

  return (
    <>
      
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value </button>
      <br/>
      <button
      onClick={removerValue}
      >Remove value</button>
      <p>footer</p>
    </>
  )
}

export default App
