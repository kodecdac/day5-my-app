import { useState } from "react";

function App() {
  let [list, setList] = useState(["Delhi"]);

  const addNewItem = () => {
    // DOM !STrictly NO!
    let newItem = document.querySelector("#inputId").value;

    let newList = [newItem, ...list];
    setList(newList);

    document.querySelector("#inputId").value = "";
  };

  return (
    <div>
      <h1 className="text-primary">Working with List</h1>

      <input type="text" id="inputId" />
      <input type="button" value="Add New Item" onClick={addNewItem} />

      {list.map((item) => (
        <div>
          <input type="checkbox" /> {item}
        </div>
      ))}
    </div>
  );
}

export default App;
