import "./App.css";
import ShowMessageFunction from "./components/ShowMessageFunction";
import ShowMessageClass from "./components/ShowMessageClass";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_MESSAGE } from "./redux/constants";
import { fetchPokemons } from "./redux/actions";

function App() {
  const [showFn, setShowFn] = useState(false);
  const [showClass, setShowClass] = useState(true);
  const [message, setMessage] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const refInput = useRef();

  const dispatch = useDispatch();

  const handleClick = (event) => {
    const msg = refInput.current.value;
    dispatch({ type: SET_MESSAGE, payload: msg });
    // setMessage(msg);
  };

  const getPokemons = () => {
    dispatch(fetchPokemons());
  };

  useEffect(() => {
    // getPokemons();
  });

  return (
    <div className="App">
      APP
      <button onClick={getPokemons}>Cargar pokemons</button>
      {pokemons.map((item, i) => {
        <h1 key={i}>{item.name}</h1>;
      })}
      {/* <input ref={refInput} />
      <button onClick={handleClick}>Show message</button>

      {showFn && <ShowMessageFunction />}
      {showClass && <ShowMessageClass />}
      <button onClick={() => setShowClass(!showClass)}>
        Show Class component
      </button>
      <button onClick={() => setShowFn(!showFn)}>
        Show functional component
      </button> */}
    </div>
  );
}

export default App;
