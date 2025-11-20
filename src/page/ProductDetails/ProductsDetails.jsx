// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./ProductsDetails.css"; // We will create this CSS next

const ProductDetails = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="details-loader">Loading...</div>;
  if (!product) return <div className="details-error">Product not found.</div>;

  // Helper to render stars
  const renderStars = (rating = 4.5) => {
     return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back to Shop</button>
      
      <div className="details-wrapper">
        {/* Left Column: Image */}
        <div className="details-image">
          <img src={product.image || "/images/placeholder.png"} alt={product.name} />
        </div>

        {/* Right Column: Info */}
        <div className="details-info">
          <div className="details-brand">{product.brand}</div>
          <h1 className="details-title">{product.name}</h1>
          
          <div className="details-rating">
            <span className="stars">{renderStars(product.rating || 4)}</span>
            <span className="review-count">({product.reviews || 120} Reviews)</span>
          </div>

          <div className="details-price-box">
            <span className="d-price">₹{product.price}</span>
            {product.mrp && <span className="d-mrp">MRP: ₹{product.mrp}</span>}
            {product.mrp && <span className="d-off">
               ({Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF)
            </span>}
          </div>

          <p className="details-desc">
            {product.description || "Experience premium comfort and style with these performance shoes. Designed for durability and everyday wear."}
          </p>

          {/* Sizes */}
          {product.sizes && (
            <div className="details-section">
              <h4>Select Size:</h4>
              <div className="size-grid">
                {product.sizes.map(s => {
                  // Handle both simple array ['8', '9'] and object array [{size: '8', inStock: true}]
                  const size = typeof s === 'object' ? s.size : s;
                  const inStock = typeof s === 'object' ? s.inStock : true;

                  return (
                    <span 
                      key={size} 
                      className={`size-box ${!inStock ? 'out-of-stock' : ''}`}>
                      {size}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Shopping Links */}
          <div className="details-actions">
            <h4>Available On:</h4>
            <div className="platform-buttons">
              {product.links?.official && (
                <a href={product.links.official} target="_blank" rel="noreferrer" className="btn-platform black">
                  Buy on Official Site
                </a>
              )}
              {product.links?.amazon && (
                <a href={product.links.amazon} target="_blank" rel="noreferrer" className="btn-platform yellow">
                  Buy on Amazon
                </a>
              )}
              {product.links?.flipkart && (
                <a href={product.links.flipkart} target="_blank" rel="noreferrer" className="btn-platform blue">
                  Buy on Flipkart
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;