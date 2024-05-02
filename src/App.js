import "./App.css";
import MovieFolder from "./Movie/MovieFolder";
import { Routes, Route } from "react-router-dom";
import SingleIMage from "./Movie/SingleIMage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MovieFolder />}></Route>
        <Route path="output" element={<SingleIMage />}></Route>
      </Routes>
    </div>
  );  
}

export default App;
