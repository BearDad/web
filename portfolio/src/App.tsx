import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>BearDad's Portfolio</h1>
      <a>
        <img src="/Analisis_dafo.svg" alt="Vite logo" />
      </a>
      <div className="card">
        <a href="https://twitter.com" target="_blank">
          <button>Twitter</button>
        </a>
      </div>
    </>
  );
}

export default App;
