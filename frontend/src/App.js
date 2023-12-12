import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home" 
import AboutUs from "./pages/AboutUs"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
