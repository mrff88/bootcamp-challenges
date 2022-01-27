import "./App.css";
import ShowMessageFunction from "./components/ShowMessageFunction";
import ShowMessageClass from "./components/ShowMessageClass";
import { useState } from "react";

function App() {
  const [showFn, setShowFn] = useState(false);
  const [showClass, setShowClass] = useState(true);

  return (
    <div className="App">
      {showFn && <ShowMessageFunction />}
      {showClass && <ShowMessageClass />}
      <button onClick={() => setShowClass(!showClass)}>
        Show Class component
      </button>
      <button onClick={() => setShowFn(!showFn)}>
        Show functional component
      </button>
    </div>
  );
}

export default App;
