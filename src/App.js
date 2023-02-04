import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Skill from './Components/Skill/Skill';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
// import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
   <Header/>
   <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
       <Route path="/skill" element={<Skill/>} />
       <Route path="/about-me" element={<About/>} />
       <Route path="/service" element={<Services/>} />
       <Route path="/contact" element={<Contact/>} />
         {/* <Route component={NotFound} />service contact */}
      </Routes>
    </div>
  );
}

export default App;
