import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav'
import NewIn from './components/pages/NewIn';
import Shop from './components/pages/Shop';
import Discover from './components/pages/Discover';
import Search from './components/Search';
import User from './components/User';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from './components/pages/Logo';
import HeroBanner from './components/HeroBanner';
import Card from './components/card';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={< Logo/>} /> 
        <Route path="/newIn" element={<NewIn />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <HeroBanner />
      <div>
        <div className='cardContainer px-5'>
          <h2 className='text-start'>Featured products</h2>
          <p className='text-end'>
            <Link to="/shop" >View All</Link> 
          </p>
          </div>
          <div className='cardScroll d-flex px-3'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
         
      </div>
    </>
  );
}

export default App;
