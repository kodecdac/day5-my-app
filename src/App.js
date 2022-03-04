import { useState } from "react";

function App() {
  const [tweetValidation, setTweetValidation] = useState(false);
  const [tweet, setTweet] = useState("");
  const [list, setList] = useState(["Delhi"]);

  const handleTweet = (e) => {
    setTweet(e.target.value);
  };

  const addNewItem = () => {
    if (!tweet) {
      setTweetValidation(true);
      return;
    }

    let newList = [tweet, ...list];
    setList(newList);

    setTweet("");
    setTweetValidation(false);
  };

  return (
    <div>
      <h1 className="text-primary">Working with List</h1>

      <input
        className={tweetValidation ? "border border-2 border-danger" : ""}
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
