import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from './pages/Home/Home'
import {Routes,Route, useNavigate} from 'react-router-dom';
import Production from "./pages/Production/Production";
import { useState } from "react";
import Item from "./pages/Item/Item";
function App() {
    
    return (
      <div className="App">
          <Header/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/production" element={<Production/>} />
              <Route path="/product" element={<Item/>} />
              
              {/* <Route path="/production" element={<Home/>} /> */}

              <Route path="/about" element={<About/>} />
  
            </Routes>
  
          <Footer/>
  
      </div>
    );
  
  
}

export default App;
