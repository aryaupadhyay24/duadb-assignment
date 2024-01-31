import "./App.css";
import Home from './pages/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./pages/Movie/Movie.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
