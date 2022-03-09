import { useState } from "react";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);

  const makeApiCall = async () => {
    try {
      console.log("I am about to make an APIN CALL for ORDER API");

      const url = "http://localhost:8080/order/";
      const config = {
        method: "get",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaW5pIiwiaXNzIjoiY2RhYyIsImlhdCI6MTY0NjgwNDk4NiwiZXhwIjoxNjQ2ODA4NTg2fQ.dRgO0TP3PeqCg1fOid3EDlQ9fswON02YPIqY9RNjZc2_Mpwx9zHgBBnmXhkA77cwn9_9AkO3aRJR7yycHubCFA",
        },
      };

      const response = await axios.get(url, config);
      console.log(response);
      setList([...response.data]); // UI WILL GET RERENDER
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>API INtegration</h1>
      <input type="button" value="Make AJAX / API CALL" onClick={makeApiCall} />

      {list.map((item, index) => (
        <div key={item.id}>
          {item.productName} / {item.productPrice}
        </div>
      ))}
    </div>
  );
}

export default App;
