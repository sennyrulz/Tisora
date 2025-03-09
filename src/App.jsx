import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav'
import NewIn from './Components/pages/NewIn';
import Shop from './Components/pages/Shop';
import Discover from './Components/pages/Discover';
import Search from './Components/Search';
import User from './Components/User';
import Cart from './Components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Components/pages/Home'
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={< Home/>} /> Set a proper homepage
        <Route path="/newIn" element={<NewIn />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
