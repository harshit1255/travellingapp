import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import './App.css'
import './components/home'
import Home from "./components/home";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <p>Travelmedia.in</p>
          <div>
            <Link to="/">home</Link>
            <Link to="/:id">post</Link>
            <a href="#">sdf</a>
            <a href="#">dsfaf</a>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:id" element={<h1>helo item</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
