import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl">Tailwind test</h1>
    
      <Card title="LadyQueen" 
        about="my name is Lady queen" 
        btnText="Click Me"
        
      />
      <Card title="Another Lady" 
        about="my name is Another lady"
        btnText=""
      />

    </>
  )
}

export default App
