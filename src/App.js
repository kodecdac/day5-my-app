import { useState } from "react";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);

  const makeApiCall = async () => {
    console.log("I am about to make an APIN CALL");

    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(url);
    setList([...response.data]); // UI WILL GET RERENDER
  };

  return (
    <div>
      <h1>API INtegration</h1>
      <input type="button" value="Make AJAX / API CALL" onClick={makeApiCall} />

      {list.map((item, index) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default App;
