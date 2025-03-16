import React, { useState, useEffect, useRef } from "react";
import cardImg from "../assets/DSC3186-680x1020.jpg";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const ProductCard = ({ id, img, name, price, addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const modalRef = useRef(null);
  const modalId = `productModal-${id}`;

  useEffect(() => {
    const handleModalClose = () => setSelectedProduct(null);
    const modalElement = modalRef.current;
    modalElement?.addEventListener("hidden.bs.modal", handleModalClose);

    return () => {
      modalElement?.removeEventListener("hidden.bs.modal", handleModalClose);
    };
  }, []);

  const openModal = () => {
    setSelectedProduct({ id, img, name, price });
    const modalInstance = new bootstrap.Modal(document.getElementById(modalId));
    modalInstance.show();
  };

  const handleAddToCart = () => {
    if (typeof addToCart === "function" && selectedProduct) {
      addToCart(selectedProduct);
    } else {
      console.error("addToCart is not a function");
    }
  
    // Close modal after adding to cart
    const modalInstance = bootstrap.Modal.getInstance(modalRef.current);
    modalInstance?.hide();
  
    // ✅ Fix: Move focus back to a visible element
    setTimeout(() => {
      document.body.focus(); // or focus another element like a button
    }, 100);
  };
  

  return (
    <>
      <div className="singleCard p-3 px-3 border border-1 mx-3 shadow-sm w-100">
        <div className="bg-secondary" style={{ height: "400px" }}>
          <img src={img || cardImg} alt={name} className="w-100 h-100" style={{ objectFit: "cover" }} />
        </div>
        <div className="text-start">
          <h5 className="mt-3">{name}</h5>
          <p className="fw-bold text-success">₦{price}</p>
          <button
            className="w-100 bg-black text-white p-2 px-5 border hover:bg-white hover:text-black transition-all duration-300"
            onClick={openModal}
          >
            Choose Options
          </button>
        </div>
      </div>

      {/* Modal */}
      <div ref={modalRef} className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selectedProduct?.name || "Product Details"}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {selectedProduct && (
                <>
                  <img src={selectedProduct.img || cardImg} className="w-100" alt={selectedProduct.name} style={{ maxHeight: "300px" }} />
                  <h5>{selectedProduct.name}</h5>
                  <p>Price: ₦{selectedProduct.price}</p>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="w-100 bg-black text-white p-2 px-5 border hover:bg-white hover:text-black transition-all duration-300"
                onClick={handleAddToCart} // ✅ Add to Cart now works!
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
