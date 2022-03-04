import { useState } from "react";

function App() {
  let [list, setList] = useState(["Delhi"]);

  const addNewItem = () => {
    let newList = ["Mumbai", ...list];
    setList(newList);
  };

  return (
    <div>
      <h1 className="text-primary">Working with List</h1>

      <input type="button" value="Add New Item" onClick={addNewItem} />

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
