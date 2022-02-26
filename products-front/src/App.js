import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/productos";

import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
