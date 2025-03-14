import React, { useState } from "react";
import cardImg from "../assets/model.jpg";

const ProductCard = ({ id, name, price }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  return (
    <>
      <div className="singleCard p-3 px-3 border border-1 mx-3 shadow-sm w-100">
        <div className="bg-secondary" style={{ height: '400px' }}>
          <img src={cardImg} alt={name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
        </div>

        <div className="text-start">
          <h5 className="mt-3">{name}</h5>
          <p className="fw-bold text-success">₦{price}</p>
          <button 
            onClick={() => setOverlayVisible(true)} 
            className="Btn-Option bg-black text-white p-2 px-5 border w-100 hover:bg-white hover:text-black transition-all duration-300">
            Choose Options
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOverlayVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <button onClick={() => setOverlayVisible(false)}
                className="Btn-Option bg-black text-white z-index-10 p-2 px-4 w-10 hover:bg-white hover:text-black transition-all duration-300">
                X
            </button>
          <div className="bg-secondary" style={{ height: '400px' }}>
            <img src={cardImg} alt={name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">{name}</h2>
            <p>Price: ₦{price}</p>
            <button onClick={() => setOverlayVisible(false)}
              className="Btn-Option bg-black text-white p-2 px-5 border w-100 hover:bg-white hover:text-black transition-all duration-300">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
