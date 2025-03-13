import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Tisora.svg';

const NavLinks = () => (
  <div className="nav-links1 py-2 d-flex justify-center">
    <NavLink onClick={()=>setVisible(false)} to="/newIn" style={{textDecoration:'none', color:'white'}}>NEW IN</NavLink>
    <NavLink onClick={()=>setVisible(false)} to="/shop" style={{textDecoration:'none', color:'white'}}>SHOP</NavLink>
    <NavLink onClick={()=>setVisible(false)} to="/discover" style={{textDecoration:'none', color:'white'}}>DISCOVER</NavLink>
  </div>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container-fluid nav-container px-5">
      <nav className="row justify-content-between align-items-center">
        
        {/* Logo */}
        <div className="col-lg-2 col-6 d-flex justify-content-start">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="col-lg-6 d-none d-lg-flex justify-content-center">
          <NavLinks />
        </div>

        {/* Right-side Icons & Mobile Menu */}
        <div className="col-lg-4 col-6 d-flex justify-content-end align-items-center">
          
          {/* Icons */}
          <div className="nav-icons d-flex gap-10">
            <NavLink to="/search">
              <FontAwesomeIcon icon={faSearch} />
            </NavLink>
            <NavLink to="/user">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <Button className="hamburger d-lg-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="mobile-menu d-lg-none">
          <NavLinks />
          <nav-icons />
        </div>
      )}
    </div>
  );
};

export default Nav;
