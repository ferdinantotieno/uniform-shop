import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom';
import SignUp from './components/SignUp';
import MpesaPay from './components/MpesaPay';
import GetProduct from './components/GetProduct';
import AddProduct from './components/AddProduct';
import SignIn from './components/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>

          <h1 className='text-warning'>Uniform sold online</h1>

        </header>
      <nav>
        <Link to="/signup" className='btn btn-dark m-2'>SignUp</Link>/
        <Link to="/signin" className='btn btn-dark m-2'>SignIN</Link>/
        <Link to="/getproducts" className='btn btn-dark m-2'>GetProduct</Link>/
        <Link to="/addproduct" className='btn btn-dark m-2'>AddProduct</Link>/
        <Link to="/"className='btn btn-dark m-2'>AboutUs</Link>
      </nav>

        <Routes>
          <Route path='/signup'element={<SignUp/>}/>
          <Route path='/mpesa'element={<MpesaPay/>}/>
          <Route path='/getproducts'element={<GetProduct/>}/>
          <Route path='/addproduct'element={<AddProduct/>}/>
          <Route path='/signin'element={<SignIn/>}/>
          <Route path='/'element={<AboutUs/>}/>
        </Routes>

      </div>

    </Router>
  );
}

export default App;
