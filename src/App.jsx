import React from "react";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/Pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import AddressCard from './customer/components/AddressCard/AddressCard';
import OrderDetails from "./customer/components/Order/OrderDetails";
import CustomerRouter from "./Routers/CustomerRouter";
import { Routes,Route } from 'react-router-dom'



export default function App() {
  return (
<>

<div className="">

<Routes>
<Route path='/*' element={<CustomerRouter/>}></Route>

</Routes>


{/* <Checkout/> */}

{/* <Cart/> */}

{/* <Order/> */}

{/* <OrderDetails/> */}

{/* <ProductDetails/> */}

</div>
<Footer/>
</>
 
    
  );
}
