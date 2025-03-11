import React from 'react';
import Grid from '@mui/material/Grid'; // ✅ Correct import
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';



function OrderCard() {


const navigate=useNavigate();


  return (
    <div onClick={()=>navigate('/acount/order/${5}')}
     className='p-5 shadow-[0_4px_10px_8px_rgba(0,0,0,0.1)] hover:shadow-2xl'>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
        <div className="flex cursor-pointer">
  <img
    className="w-20 h-20 object-contain rounded-lg"
    src="https://greenfeels.in/cdn/shop/products/Untitled-1_458ac30d-b6d8-418a-958b-8c336c5ec643.jpg?v=1675800873"
    alt="Men Slim Mid Rise Black Jeans"
  />
  <div className="ml-5 space-y-2">
    <p>Men Slim Mid Rise Black Jeans</p>
    <p className="opacity-50 text-xs font-semibold">Size: M</p>
    <p className="opacity-50 text-xs font-semibold">Color: Black</p>
  </div>
</div>

        </Grid>

        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>

        <Grid item xs={4}>
         {true && <div>
         
         <p className='text-center'> <AdjustIcon xs={{width:"15px", height:"15"}} className="text-green-600 text-sm mr-2"/> 
            <span >Delivered On March 03</span>
            {/* <span>Your Item Has Been Delivered</span> */}
          </p>

          <p className='text-xs text-center ml-8'>
          Your Item Has Been Delivered
          </p>
          </div>}

          {false && <p>
<span>Expected delivery On March 03</span>
         </p> }
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;
