import { useState } from "react";
import { useRef } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/page1">Page1</Link> | <Link to="/page2">Page2</Link>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

function Page2() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page2 </h1>
      <input
        type="button"
        value="Go to Page1"
        onClick={() => navigate("/page1")}
      />
    </div>
  );
}

function Page1() {
  const inputRef = useRef();
  const [userName, setUserName] = useState("hello");

  const handleUserName = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const callMe = () => {
    console.log(inputRef.current.value);
    console.log(userName);
  };

  return (
    <div>
      <h1>API INtegration</h1>
      <input type="text" ref={inputRef} />
      <input type="text" value={userName} onChange={handleUserName} />
      <input type="button" value="Handle Click Event" onClick={callMe} />
    </div>
  );
}

export default App;
