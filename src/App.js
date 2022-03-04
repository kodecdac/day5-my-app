import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

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
      <input type="button" value="Make AJAX / API CALL" onClick={makeApiCall} />

      {list.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}

export default App;
