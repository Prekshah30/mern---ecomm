import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from  './components/Signup';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import Productlist from './components/Productlist';
import Updateproduct from './components/Updateproduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route element={<PrivateComponent />}>
        <Route path="/" element={<Productlist/>}/>
        <Route path="/add" element={<Addproduct />}/>
        <Route path="/update/:id" element={<Updateproduct/>}/>
        <Route path="/logout" element={<h1>logout</h1>}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
        </Route>
        <Route path="/signup" element={<Signup/>}/>           //Sign up ko private component ke bahar rakha hai kyunki that should be accesible to non-registered users also
        <Route path="/login"  element={<Login />} />
       </Routes>
      
       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
