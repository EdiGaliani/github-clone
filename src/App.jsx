import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
