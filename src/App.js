import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from './pages/Home/Home'
import Email from "./pages/Email/Email";
import {Routes,Route} from 'react-router-dom';
import Production from "./pages/Production/Production";
import Item from "./pages/Item/Item";
import style from './assets/app.module.scss'
function App() {
  
    return (
      <div className={style.App}>
          <Header/> 
          <div className={style.content} >
            <Routes>
             

              
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/production" element={<Production/>} />
              <Route path="/product" element={<Item/>} />
              <Route path="/send" element={<Email/>} />

              
              {/* <Route path="/production" element={<Home/>} /> */}

              <Route path="/about" element={<About/>} />
  
            </Routes>
  
          <Footer/>
          </div>
  
      </div>
    );
  
  
}

export default App;
