import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //use of ref
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    //pass =  to store generated pass
    let pass = ""
    //string of Alphabet to run through the random Math function
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    //when num should be included
    if (numAllowed) str += "0123456789"
    //when char should be included
    if (charAllowed) str += "!@#$%^&*()_+{}[]~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)// generate random Character from variable = > str

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])


 const  copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
 },[password])


  useEffect(() => {passwordGenerator()}, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-600 '>
        <div className='text-3xl p-4'>Password generator</div>
        <div className='flex shadow rounded-lg overflow-hidden mb-0'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-3 px-3 text-2xl rounded-s-md text-orange-500'
            placeholder='Password'
            ref={passwordRef}
            readOnly
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-2  rounded-e-md text-2xl'>copy</button>
        </div>

        <div className=' flex text-sm gap-x-5 m-1 p-2'>
          <div className='flex items-center  gap-x-1'>
            <input
              type="range"
              //minimum 6
              min={6}
              max={25}
              //value is assigned in the state lenth
              value={length}
              className='cursor-pointer'
              //value to track the change of range and reassign it to the value attibute
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>


          <div className='flex items-center gap-x-1 text-orange-500'>
            <input type="checkbox"
              //default checked is False since we have assinged numAllowed in useState as False 
              defaultChecked={numAllowed}
              id='numberInput'
              //onChange ? onChange will allow us previous stat which was false
              //basically it will help to toggle if the value is false we upon clicking again on the input again it will turn true
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>


          <div className='flex items-center gap-x-1 text-orange-500'>
            <input type="checkbox"
              //default checked is False since we have assinged numAllowed in useState as False 
              defaultChecked={charAllowed}
              id='charInput'
              //onChange ? onChange will allow us previous stat which was false
              //basically it will help to toggle if the value is false we upon clicking again on the input again it will turn true
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
