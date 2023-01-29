import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
// import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
   <Header/>
   <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* <Route path="/about" component={About} />
        <Route component={NotFound} /> */}
      </Routes>
    </div>
  );
}

export default App;
