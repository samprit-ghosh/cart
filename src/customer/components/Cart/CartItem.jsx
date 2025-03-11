import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, Button } from '@mui/material';

function CartItem() {
  return (
    <div className="p-4 sm:p-5 shadow-[0_4px_10px_8px_rgba(0,0,0,0.1)] mb-5">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        {/* Image Section */}
        <div className="w-24 h-24 sm:w-36 sm:h-36">
          <img
            className="w-full h-full object-cover object-top rounded-md"
            src="https://images.meesho.com/images/products/97039166/ntse2_512.webp"
            alt="Product"
          />
        </div>

        {/* Product Info Section */}
        <div className="mt-3 sm:ml-5 sm:mt-0 text-center sm:text-left">
          <p className="font-semibold text-sm sm:text-base">
            Men Slim Mid Rise Black Jeans
          </p>
          <p className="opacity-70 text-xs sm:text-sm">Size: L, White</p>
          <p className="opacity-70 text-xs sm:text-sm mt-1">
            Seller: Crishtaliyo 2fashion
          </p>

          {/* Price Section */}
          <div className="flex justify-center sm:justify-start space-x-3 items-center text-sm sm:text-lg text-gray-900 mt-3">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
      </div>

      {/* Quantity & Remove Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
        {/* Quantity Controls */}
        <div className="flex items-center justify-center sm:justify-start space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-6 border rounded-sm text-sm sm:text-base">
            1
          </span>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        {/* Remove Button (Centered on Mobile) */}
        <div className="mt-3 sm:mt-0 flex justify-center sm:justify-start mr-1">
          <Button variant="contained" color="error" size="small">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
