import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Getproducts from './Components/Getproducts';
import Addproducts from './Components/Addproducts';
import Getorders from './Components/Getorders';
import Signin from './Components/Signin';
import"bootstrap/dist/js/bootstrap.min.js";
import Addorder from './Components/Addorder';
import Signup from './Components/Signup';
import Mpesapayment from './Components/Mpesapayment';
import Aboutus from './Components/Aboutus';
import Myorder from './Components/Myorder';
import ChatBot from './Components/Chatbot';


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <nav>
        <h1 className="head">BreakfastChap</h1>       
        </nav>
        
      </header>
      <Routes>
        <Route path='/' element={<Getproducts/>}/>
        <Route path='/addproduct' element={<Addproducts/>}/>
        <Route path='/addorder' element={<Addorder/>}/>
        <Route path='/getorders' element={<Getorders/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/myorders' element={<Myorder/>}/>
        <Route path='/mpesapayment' element={<Mpesapayment/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/Chat us' element={<ChatBot/>}/>
      </Routes>
    </div>

    </Router>
  );
}

export default App;
