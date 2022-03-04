import { useState } from "react";

function App() {
  // 1
  let [tweet, setTweet] = useState("");
  let [list, setList] = useState(["Delhi"]);

  // 2
  const handleTweet = (e) => {
    setTweet(e.target.value);
  };

  const addNewItem = () => {
    let newList = [tweet, ...list];
    setList(newList);

    // Reset
    setTweet("");
  };

  return (
    <div>
      <h1 className="text-primary">Working with List</h1>

      {/**3 */}
      <input
        type="text"
        id="inputId"
        value={tweet}
        placeholder="Lets tweet here.."
        onChange={handleTweet}
      />
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
