import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../customer/Pages/HomePage/HomePage';
import Cart from '../customer/components/Cart/Cart';
import Navigation from '../customer/components/Navigation/Navigation';
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order';
import OrderDetails from '../customer/components/Order/OrderDetails';

function CustomerRouter() {
  return (
    <div>
      {/* Navigation component is rendered at the top */}
      <div>
        <Navigation />
      </div>

      {/* Routes for the application */}
      <Routes>

      <Route path="/login" element={<HomePage />} />
      <Route path="/register" element={<HomePage />} />

        {/* Home page */}
        <Route path="/" element={<HomePage />} />

        {/* Cart page */}
        <Route path="/cart" element={<Cart />} />

        {/* Product category page */}
        <Route path="/lavelOne/:lavelOne/:lavelTwo/:labelThree" element={<Product />} />
        <Route path="/product" element={<Product />} />
        {/* Product details page */}
        <Route path="/product/:productId" element={<ProductDetails />} />


        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
    </div>
  );
}

export default CustomerRouter;




















 {/* <div className="grid grid-cols-2 gap-4 px-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
  {mens_kurta.map((item) => (
    <ProductCard key={item.id} product={item} />
  ))}
</div> */}