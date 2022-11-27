
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom";
function App(){
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path = "/" element = {Home}></Route>
        <Route path = "/Login" element = {Login}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
