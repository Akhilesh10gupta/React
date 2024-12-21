import { useState } from "react"


function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-12 px-4  ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-2xl">
            <button
              onClick={() => setColor ("red") }
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{backgroundColor:"red"}}>
             
              Red
            </button>

            <button
              onClick={() => setColor ("orange") }
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{backgroundColor:"orange"}}>
             
              Saffron
            </button>

            <button
              onClick={() => setColor ("white") }
              className="outline-none px-4 py-1 rounded-full text-black"
              style={{backgroundColor:"white"}}>
             
              White
            </button>

            <button
              onClick={() => setColor ("Green") }
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{backgroundColor:"green"}}>
             
              Green
            </button>

            <button
              onClick={() => setColor ("blue") }
              className="outline-none px-4 py-1 rounded-full text-white"
              style={{backgroundColor:"Blue"}}>
             
              Blue
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
