// src/components/ProductCard.jsx
import "./Shop.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ p }) => {
  // Destructure data
  const navigate = useNavigate(); // Initialize Hook

  const {
    id, name, brand, image, price, mrp, sizes = [], links = {}
  } = p;

  // Handle Card Click
  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  // Prevent external link click from triggering card navigation
  const handleBuyClick = (e) => {
    e.stopPropagation(); 
  };

  return (
    <div className="prod-card" onClick={handleCardClick}>
      {/* Image Section */}
      <div className="prod-image-container">
        <img 
          src={image || "/images/placeholder.png"} 
          alt={name} 
          className="prod-img"
        />
      </div>

      {/* Body Section */}
      <div className="prod-body">
        {/* Brand (Optional - smaller text above name) */}
        {brand && <div className="prod-brand">{brand}</div>}
        
        {/* Product Name */}
        <div className="prod-name">{name}</div>

        {/* Price Section */}
        <div className="price-row">
          {/* Selling Price: Normal/Bold */}
          <span className="current-price">
             {price ? `₹${price}` : "—"}
          </span>
          
          {/* MRP: Grey & Line-through (Only if MRP exists and is higher than price) */}
          {mrp && mrp !== price && (
            <span className="mrp-price">₹{mrp}</span>
          )}
        </div>
        
        {/* Optional: Sizes */}
        {sizes.length > 0 && (
           <div className="prod-sizes">
              Size: {sizes.slice(0,3).join(", ")}
           </div>
        )}

        {/* Action Button */}
        <div className="prod-actions">
          {links.official ? (
            <a href={links.official} className="btn-buy" target="_blank" rel="noreferrer" onClick={handleBuyClick}>
              Buy Now
            </a>
          ) : (
            <button className="btn-buy">View Details</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;