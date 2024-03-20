import { useEffect, useState ,useRef} from 'react'

import './App.css'

function App() {

  const [inputValue , setInputValue] = useState("");
  const previousValue  = useRef("")

 

  useEffect(()=>{
    previousValue.current = inputValue;
  },[inputValue])

  return (
    <>
        
        <input 
        className='text-4xl border p-2 m-2'
        type="text"
        value={inputValue} 
        placeholder='anything'
        onChange={(e)=>setInputValue(e.target.value)}/>
        <p>Current Value  : {inputValue}</p>
        <p>Previous Value : {previousValue.current}</p>
    </>
  )
}

export default App
