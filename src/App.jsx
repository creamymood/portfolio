import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/details" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
