
import React from "react";
import { Card } from "react-bootstrap"; 
import { useNavigate } from "react-router-dom";
import cardImg from "../assets/model.jpg";

// Sample product data
const productsData = [
  { id: 1, name: 'Product A', price: 25000 },
  { id: 2, name: 'Product B', price: 45000 },
  { id: 3, name: 'Product C', price: 15000 },
  { id: 4, name: 'Product D', price: 60000 }
];

const ProductCard = ({ name, price }) => {
  const navigate = useNavigate();

  return (
      <div className="singleCard p-3 px-3 border border-1 mx-3 shadow-sm w-auto">
          {/* Image Container */}
          <div className="bg-secondary" style={{ height: '400px', width: '330px'}}>
            <img src={cardImg} alt="" className="w-100 h-100" style={{ objectFit: 'cover' }} />
          </div>
    
          {/* Product Details */}
          <div className="text-start">
            <h5 className="mt-3">{name}</h5>
            <p className="fw-bold text-success">₦{price}</p>
            <button className="Btn-Option bg-black text-white p-2 px-5 border w-100 hover:bg-white hover:text-black transition-all duration-300">
              Choose Options</button>
          </div>
        </div>
      );
    };


    // Component for listing all products i.e the ProductData object
    // const Products = () => {
    //   return (
    //     <div className="d-flex flex-wrap gap-4">
    //       {productsData.map((product) => (
    //         <ProductCard key={product.id} name={product.name} price={product.price} />
    //       ))}
    //     </div>
    //   );
    // } 

export default ProductCard;

