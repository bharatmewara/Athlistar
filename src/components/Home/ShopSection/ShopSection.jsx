import React, { useEffect, useState } from 'react';
import './ShopSection.css';
import { Height } from '@mui/icons-material';
// import { getProducts } from '../firebase'; // Uncomment when connected to Firebase

const ShopSection = () => {
  const [products, setProducts] = useState([]);

  // Mock data — Replace this with actual Firebase fetch
  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        title: "Men’s Shoes Gray",
        image: "/images/shoe1.jpg",
        price: 999,
        originalPrice: 1300,
        rating: 4,
      },
      {
        id: 2,
        title: "Men’s Black Gray",
        image: "/images/shoe1.jpg",
        price: 999,
        originalPrice: 1300,
        rating: 4,
      },
      {
        id: 3,
        title: "Men’s Shoes Gray",
        image: "/images/shoe1.jpg",
        price: 999,
        originalPrice: 1300,
        rating: 5,
      },
    ];
    setProducts(mockProducts);

    // Firebase example:
    // getProducts().then(data => setProducts(data));
  }, []);

  return (
    <section className="shop-section">
      <h2 className="shop-heading"><span className="highlight-bg">SHOP</span> & ACCESSORIES</h2>

      <div className="shop-content">
        {/* Sidebar */}
        <div className="shop-sidebar">
          <h3>FEATURED<br />PRODUCTS</h3>
          <ul>
  <li><a href="#">Just In</a></li>
  <li><a href="#">Best Sellers</a></li>
  <li><a href="#">Exclusive Deals</a></li>
  <li><a href="#">Best Deals</a></li>
</ul>
          <button className="shop-btn">
            SHOP <span>&#8599;</span>
          </button>
        </div>

        {/* Products */}
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <div className="price">
                <span>₹{product.price}</span>
                <del>₹{product.originalPrice}</del>
              </div>
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < product.rating ? "filled" : ""}>★</span>
                ))}
              </div>
              <div className="slider-dots">
    <span className="dot active"></span>
    <span className="dot"></span>
  </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;