import { useState } from "react";
import { useRef } from "react";

function App() {
  const inputRef = useRef();
  const [userName, setUserName] = useState("hello");

  const handleUserName = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const callMe = () => {
    console.log(inputRef.current.value);
    console.log(userName);
  };

  return (
    <div>
      <h1>API INtegration</h1>
      <input type="text" ref={inputRef} />
      <input type="text" value={userName} onChange={handleUserName} />
      <input type="button" value="Handle Click Event" onClick={callMe} />
    </div>
  );
}

export default App;
