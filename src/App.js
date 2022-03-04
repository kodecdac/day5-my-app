function App() {
  // STATIC LIST
  let list = ["Delhi", "Caluctta", "Chennai", "Mumbai", "Kolkata"];

  return (
    <div>
      <h1 className="text-primary">Working with List</h1>

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
