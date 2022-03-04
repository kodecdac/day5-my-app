import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);

  // USE CASE THIS FOR INTILISATION
  useEffect(() => {
    console.log("I m constructor ;; Java programmer");
    makeApiCall();
  }, []);

  const makeApiCall = async () => {
    console.log("I am about to make an APIN CALL");

    const url = "https://jsonplaceholder.typicode.com/posts";
    let response = await fetch(url);
    let list = await response.json();

    // setting the data we got from server
    setList([...list]);
  };

  return (
    <div>
      <h1>API INtegration</h1>

      {list.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}

export default App;
