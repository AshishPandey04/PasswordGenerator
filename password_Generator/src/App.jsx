

import { useEffect, useRef, useState, useCallback } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += "@&%$*/\\,-+#!";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numberAllowed, length, characterAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [numberAllowed, length, characterAllowed, passwordGenerator]);

  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full max-w-lg mx-auto mt-20 px-6 py-8 bg-gray-800 rounded-lg shadow-lg text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Password Generator</h1>
      <div className="flex items-center shadow rounded-lg overflow-hidden mb-6">
        <input
          type="text"
          value={password}
          placeholder="Generated password"
          readOnly
          ref={passwordRef}
          className="w-full p-3 text-lg bg-gray-700 border-none outline-none"
        />
        <button
          onClick={copypasswordToClipboard}
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-4"
        >
          Copy
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="length" className="text-lg font-medium">Length: {length}</label>
          <input
            id="length"
            type="range"
            min={6}
            max={25}
            value={length}
            className="w-2/3 cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="numbers" className="text-lg font-medium">Include Numbers</label>
          <input
            id="numbers"
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="h-5 w-5 text-blue-600"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="characters" className="text-lg font-medium">Include Special Characters</label>
          <input
            id="characters"
            type="checkbox"
            checked={characterAllowed}
            onChange={() => setCharacterAllowed((prev) => !prev)}
            className="h-5 w-5 text-blue-600"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
