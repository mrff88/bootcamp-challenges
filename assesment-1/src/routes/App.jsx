import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from '../components/nav/Nav';
import About from '../pages/about/About';
import Detail from '../pages/detail/Detail';
import Home from '../pages/home/Home';

function App() {
  return (
    <div className="shop">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </div>
  );
}

export default App;
