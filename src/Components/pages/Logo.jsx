import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Tisora.jpg'


const Logo = () => {
  return (
    <Link to='/'>
      <div className="flex justify-center items-center">
        <img className= 'logo img-fuid' src={logo} alt="Logo" />
      </div>
      
    </Link>
  )
}

export default Logo
