import { useEffect, useRef } from "react"
import { useState } from "react"
import { useCallback } from "react"


function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstyuvwxyz"

    if (numberAllowed) str += "1234567890"
    if (characterAllowed) str += "@&%$*/\,-+#!"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);

    }
    setPassword(pass)



  }, [numberAllowed, length, characterAllowed])


  useEffect(() => {
    passwordGenerator()
  }, [numberAllowed, length, characterAllowed, passwordGenerator])

  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])







  return (
    <>
      <div className="w-full max-w-md shadow-md  rounded-lg  text-orange-400 bg-gray-700 mx-auto mt-20 px-4 py-3">
        <h1 className=" text-2xl my-3 text-center text-white ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
            className='outline-none w-full py-1 px-3' />
          <button
            onClick={copypasswordToClipboard}

            className="bg-blue-500  hover:bg-blue-700 text-white outline-none font-bold py-2 px-1 ">Copy</button>
        </div>
        <div className="flex text-base gap-x-5 mt-3 mb-4">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6}
              max={25}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label >Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={numberAllowed}

              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={characterAllowed}
              id="charInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}

            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>




      </div>

    </>
  )
}

export default App
