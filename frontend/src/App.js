import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home" 
import AboutUs from "./pages/AboutUs"
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/services" element={<Services/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
