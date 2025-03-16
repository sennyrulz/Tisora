import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import NewIn from "./pages/NewIn";
import Shop from "./pages/Shop";
import Discover from "./pages/Discover";
import Search from "./components/Search";
import User from "./components/User";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "./pages/Logo";
import HeroBanner from "./components/HeroBanner";
import ProductCard from "./components/ProductCard";
import BrandTopic from "./components/brandTopic";
import Footer from "./Components/footer";
import { productsData } from "./components/productsData";
import "./App.css";
import NewsLetterBox from "./Components/NewsLetterBox";
import { Modal, Button, Container } from "react-bootstrap";
import Checkout from "./Components/checkout";

function App() {
  const featuredProducts = productsData.slice(0, 5);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product) => {
    if (!product) return;
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart updated:", cart);
    setShowModal(false);
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Logo />
              <HeroBanner />
              <Container>
                <div className="cardContainer px-5" style={{ margin: "-60px 0 0 0" }}>
                  <h2 className="text-start px-4">Featured Products</h2>
                  <p className="text-end px-4">
                    <Link to="/shop">View All</Link>
                  </p>
                </div>
                {/* Product Scroll */}
                {/* Product Scroll */}
                <div className="cardScroll d-flex px-5 gap-5 mb-5 overflow-auto" style={{ whiteSpace: "nowrap" }}>
                  {featuredProducts.map((product) => (
                    <div key={product.id} style={{ flex: "0 0 auto", scrollSnapAlign: "start" }}>
                      <ProductCard
                        id={product.id}
                        img={product.img}
                        name={product.name}
                        price={product.price}
                        addToCart={addToCart} // ✅ Fix: Pass addToCart so it works
                        onSelect={(product) => {
                          setSelectedProduct(product);
                          setShowModal(true);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </Container>
              <BrandTopic />
            </>
          }
        />
        <Route path="/newIn" element={<NewIn />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <NewsLetterBox />
      <Footer />

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="w-100 mb-3"
                style={{ objectFit: "cover", maxHeight: "300px" }}
              />
              <p>Price: ₦{selectedProduct.price}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="btn btn-success bg-black text-white p-2 px-5 border w-100 hover:bg-white hover:text-black transition-all duration-300"
            onClick={() => {
              if (selectedProduct) {
                addToCart(selectedProduct);
              }
            }}
          >
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
