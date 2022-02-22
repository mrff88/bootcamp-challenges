import React from "react";
// import ProductList from "./components/ProductList";
import ProductPage from "./pages/productos";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Login />
      <ProductPage />
    </div>
  );
}

export default App;
