import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const makeApiCall = async () => {
    console.log("I am about to make an APIN CALL");
    try {
      // Axios
      const url = "https://jsonplaceholder.typicode.com/postss";
      let response = await fetch(url);
      console.log(response);

      if (response.status == 200) {
        let list = await response.json();

        // setting the data we got from server
        setList([...list]);
      } else {
        console.log("Server Error");
      }
    } catch (e) {
      // handle error / reject use cases
      console.log(e);
    }
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
