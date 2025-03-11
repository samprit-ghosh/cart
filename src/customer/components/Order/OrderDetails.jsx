import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import { Grid, Box } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function OrderDetails() {
  return (
    <div className="mt-24 mb-10 px-5 lg:px-20">
      {/* Delivery Address */}
      <div>
        <h2 className="font-bold text-xl py-7">Delivery Address</h2>
        <AddressCard />
      </div>

      {/* Order Tracker */}
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      {/* Order Details Grid */}
      <Grid container spacing={3} className="space-y-5">
        {[1, 1, 1, 1, 1].map((item, index) => (
          <Grid key={index} item xs={12}>
            <Grid
              container
              className="shadow-xl rounded-lg p-5 border"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
              }}
            >
              {/* Product Image and Details */}
              <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  className="w-[5rem] h-[5rem] object-cover rounded-lg shadow-md"
                  src="https://kamison.in/cdn/shop/files/seamless2.webp?v=1693318539&width=1445"
                  alt="Product"
                />

                <div className="ml-5">
                  <p className="font-semibold text-lg">Men Slim Mid Rise Black Jeans</p>
                  <p className="opacity-60 text-sm font-medium">
                    <span className="mr-3">Color: Black</span>
                    <span>Size: M</span>
                  </p>
                  <p className="text-sm text-gray-500">Seller: Linaria</p>
                  <p className="text-lg font-bold text-black">₹1099</p>
                </div>
              </Grid>

              {/* Rate & Review */}
              <Grid item>
                <Box
                  sx={{
                    color: deepPurple[500],
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    gap: '10px',
                  }}
                >
                  <StarBorderIcon sx={{ fontSize: '2rem' }} />
                  <span className="text-sm font-medium">Rate & Review Product</span>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OrderDetails;
