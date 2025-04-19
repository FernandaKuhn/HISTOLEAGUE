import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutLol from "./pages/aboutLOL";
import Home from "./pages/home";
import NavBar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutlol" element={<AboutLol />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
