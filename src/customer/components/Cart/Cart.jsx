import React from "react";
import { Button } from "@mui/material"; // Import Button from MUI
import { useNavigate } from "react-router-dom"; // Correct import
import CartItem from "./CartItem";

function Cart() {
  const navigate = useNavigate(); // Corrected function

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  return (
    <div className="pt-40 px-4 lg:px-16 mb-20">
      <div className="lg:grid grid-cols-3 gap-5">
        {/* Left Side - Cart Items (Can grow dynamically) */}
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item, index) => (
            <CartItem key={index} />
          ))}
        </div>

        {/* Right Side - Price Details (Fixed height) */}
        <div className="shadow-[0_4px_10px_8px_rgba(0,0,0,0.1)] bg-white rounded-md p-5 mt-5 lg:mt-0 h-auto lg:h-fit lg:sticky lg:top-5 mb-5">
          <p className="uppercase font-bold opacity-60 mb-3">Price Details</p>
          <hr />

          <div className="space-y-3 font-semibold mt-3">
            <div className="flex justify-between text-black">
              <span>Price</span>
              <span>₹4697</span>
            </div>
            <div className="flex justify-between text-black">
              <span>Discount</span>
              <span className="text-green-600">-₹3817</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between text-black font-bold">
              <span>Total Amount</span>
              <span className="text-green-600">₹1278</span>
            </div>
          </div>

          {/* Checkout Button - Full Width on Mobile */}
          <Button
            variant="contained"
            sx={{
              width: "100%", // Full width on all screens
              marginTop: "1rem",
              padding: "0.5rem",
              bgcolor: "#9155fd",
              fontSize: "1rem",
            }}
            onClick={handleCheckout} // Uncommented onClick handler
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
