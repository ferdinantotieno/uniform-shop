import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SignUp from './components/SignUp';
import MpesaPay from './components/MpesaPay';
import GetProduct from './components/GetProduct';
import AddProduct from './components/AddProduct';
import SignIn from './components/SignIn';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import Chatbot from './components/Chatbot';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

function App() {
  return (
    <Router>
      <div className='App'>

        {/* 🌐 NAVIGATION */}
        <nav>
          <Link to="/signup" className='btn btn-dark m-2'>SignUp</Link>/
          <Link to="/signin" className='btn btn-dark m-2'>SignIN</Link>/
          <Link to="/getproducts" className='btn btn-dark m-2'>GetProduct</Link>/
          <Link to="/addproduct" className='btn btn-dark m-2'>AddProduct</Link>/
          <Link to="/cart" className='btn btn-dark m-2'>Cart</Link>/
 
          <Link to="/home" className='btn btn-dark m-2'>Home</Link>/
          <Link to="/aboutus" className='btn btn-dark m-2'>AboutUs</Link>
        
        </nav>

        {/* 🟡 HEADER */}
        <header className='App-header'>
          <h1 className='text-warning'>Ferdy's Watch</h1>
        </header>

        {/* 🌍 ROUTES */}
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/mpesa' element={<MpesaPay />} />
          <Route path='/getproducts' element={<GetProduct />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/signin' element={<SignIn />} />
         
          <Route path='/cart' element={<Cart />} />
          <Route path='/home' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          
        </Routes>

        {/* 💬 GLOBAL FLOATING CHATBOT (VISIBLE ON ALL PAGES) */}
        <Chatbot />

      </div>
    </Router>
  );
}

export default App;