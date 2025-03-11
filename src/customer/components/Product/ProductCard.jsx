import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, isSquareView }) {
  const navigate = useNavigate();

  // Set dynamic classes based on view mode
  const cardClasses = isSquareView 
    ? "productCard w-55 h-58 bg-white rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
    : "productCard w-full max-w-[15rem] sm:w-[14rem] md:w-[16rem] mx-auto bg-white rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer ml-0 md:p-0 md:-ml-4.5";

  const imageContainerClasses = isSquareView 
    ? "w-full h-24 overflow-hidden rounded-t-xl"  // Adjust the height as needed for square view
    : "w-full h-56 sm:h-64 overflow-hidden rounded-t-xl";

  return (
    <div
      onClick={() => navigate(`/product/${5}`)}
      className={cardClasses}
    >
      {/* Image Section */}
      <div className={imageContainerClasses}>
        <img
          className="w-full h-full object-cover"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <p className="text-gray-500 font-semibold text-sm sm:text-base">Brand</p>
        <p className="text-lg font-medium">{product.brand}</p>

        {/* Price Section */}
        <div className="flex items-center space-x-2">
          <p className="text-lg font-semibold">₹{product.price}</p>
          <p className="line-through opacity-50 text-sm">₹{product.discountedPrice}</p>
          <p className="text-green-600 font-semibold text-sm">{product.discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
