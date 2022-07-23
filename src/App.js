import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Routes/Home';
import About from './Routes/About';
import Layout from './Components/Layout';
import Archive from './Routes/Archive';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='archive' element={<Archive />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
