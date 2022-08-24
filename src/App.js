import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const callMe = () => {
    console.log("Hello World");
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <h1>API INtegration</h1>
      <input type="text" ref={inputRef} />
      <input type="button" value="Handle Click Event" onClick={callMe} />
    </div>
  );
}

export default App;
