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

function App() {
  // Get only the first 5 products for the homepage
  const featuredProducts = productsData.slice(0, 5);

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
              <div>
                <div className="cardContainer px-5" style={{ margin: "-60px 0 0 0" }}>
                  <h2 className="text-start px-4">Featured Products</h2>
                  <p className="text-end px-4">
                    <Link to="/shop">View All</Link>
                  </p>
                </div>
                {/* Product Scroll */}
                <div className="cardScroll d-flex px-5 gap-5 mb-5 overflow-auto" style={{ whiteSpace: "nowrap" }}>
                  {featuredProducts.map((product) => (
                    <div key={product.id} style={{ flex: "0 0 auto", scrollSnapAlign: "start" }}>
                      <ProductCard id={product.id} name={product.name} price={product.price} />
                    </div>
                  ))}
                </div>
              </div>
              <BrandTopic />
            </>
          }
        />

        {/* Other Page Routes */}
        <Route path="/newIn" element={<NewIn />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <NewsLetterBox />
      <Footer /> {/* This will make the footer appear on every page */}
    </>
  );
}

export default App;
