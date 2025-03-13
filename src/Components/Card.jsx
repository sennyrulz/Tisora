import React from 'react';
import cardImg from '../assets/model.jpg';
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate(); 

  return (
    <div className="singleCard p-3 px-3 border border-1 mx-3 shadow-sm">
      <div className="text-start bg-white" style={{ width: '330px', height: '550px' }}>
        <img src={cardImg} alt="Product" className="cardImg img-fluid" />
        
        <div>
          <h3 className="px-3 py-1">Product Name</h3>
          <p className="px-3">N250,000</p>
          
          <button onClick={() => navigate("/shop")} 
            className="Btn-Option bg-black text-white p-2 px-5 border hover:bg-white hover:text-black transition-all duration-300"
            style={{ width: '330px' }}>Choose Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
