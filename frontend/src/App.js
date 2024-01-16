import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home" 
import AboutUs from "./pages/AboutUs"
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
            <Route path="/signup" element={<Signup/>}/>
            <Route path="login" element={<Login/>}/>
          </Routes>
        </div>
        <Footer/>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
