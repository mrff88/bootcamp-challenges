import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/nav/Nav.jsx";
import Emoji from "./Emoji.jsx";
import GifGenerator from "./GifGenerator.jsx";
import Home from "./Home.jsx"
import Paint from "./Paint.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emoji" element={<Emoji />} />
          <Route path="/gif-generator" element={<GifGenerator />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;