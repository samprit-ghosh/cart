import React from 'react';
import { useNavigate } from 'react-router-dom';





function HomeSectionCard({ product }) {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    // Extract category, section, and item from the product object


    // Navigate to the desired route
    navigate("/product");
  };

  return (
    <div
      onClick={handleCategoryClick} // Attach the click handler 
      
      className='cursor-pointer h-[22rem] flex flex-col bg-white rounded-lg shadow-[0_4px_10px_8px_rgba(0,0,0,0.1)] overflow-hidden w-[15rem] mx-2 sm:mx-3 md:mx-4 lg:mx-5'
    >
      <div className='h-[17rem] w-full flex justify-center items-center overflow-hidden'>
        <img
          className='object-cover object-top w-full h-full'
          src={product.imageUrl || 'https://via.placeholder.com/150'}
          alt={product.title || 'Product'}
        />
      </div>

      <div className='p-4 flex flex-col items-start'>
        <h3 className='text-lg font-medium text-gray-600 text-left font-bold'>
          {product.brand || 'Unknown Brand'}
        </h3>
        <p className='mt-2 text-sm text-gray-500 text-left'>
          {product.title || 'No Title'}
        </p>
      </div>
    </div>


  );
}

export default HomeSectionCard;