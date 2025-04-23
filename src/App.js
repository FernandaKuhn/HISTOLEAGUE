import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutLol from "./pages/aboutLOL";
import Home from "./pages/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Cblol from "pages/cblol";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cblol" element={<Cblol />} />
        <Route path="/aboutlol" element={<AboutLol />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
