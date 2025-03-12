import { Routes, Route } from 'react-router-dom';
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
import Card from './components/Card';
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
      <div className='flex row'>
            <h2>Featured products</h2>
            <p>View All</p>
            <Card />
        </div>
        
      </div>
    </>
  );
}

export default App;
