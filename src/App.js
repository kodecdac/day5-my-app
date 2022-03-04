function App() {
  const makeApiCall = async () => {
    console.log("I am about to make an APIN CALL");

    const url = "https://jsonplaceholder.typicode.com/posts";
    let response = await fetch(url);
    let list = await response.json();

    // in console.
    console.log(list);
  };

  return (
    <div>
      <h1>Hello Wordl</h1>
      <input type="button" value="Make AJAX / API CALL" onClick={makeApiCall} />
    </div>
  );
}

export default App;
