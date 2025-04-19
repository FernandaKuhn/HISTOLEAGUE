import {BrowserRouter, Route, Routes} from "react-router-dom"
import AboutLol from "./pages/aboutLOL";
import Home from "./pages/home";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/aboutlol" element={<AboutLol/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
