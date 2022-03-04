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
      <h1 className="bg-dark text-light p-3">Tweet App</h1>

      <div>
        <input
          className={
            tweetValidation
              ? "border border-2 border-danger form-control form-control-lg"
              : "form-control form-control-lg"
          }
          style={{ height: "72px" }}
          type="text"
          id="inputId"
          value={tweet}
          placeholder="Lets tweet here.."
          onChange={handleTweet}
        />
      </div>
      <div>
        <input
          className="btn btn-lg btn-secondary w-100 mt-1"
          type="button"
          value="Add New Item"
          onClick={addNewItem}
        />
      </div>

      {tweetValidation && (
        <div>
          <span className="text-danger " style={{ fontSize: "12px" }}>
            Tweet can not be blank
          </span>
        </div>
      )}

      {list.map((item) => (
        <div className="alert alert-secondary fs-3">{item}</div>
      ))}
    </div>
  );
}

export default App;
