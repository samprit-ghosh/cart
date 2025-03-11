import React from 'react';
import { Grid } from '@mui/material';
import OrderCard from './OrderCard';

const orderStatus = [
    { label: "On The Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Return", value: "return" }
];

function Order() {
    return (
        <div className='mt-35 lg:px-20 px-5 mb-20'>
            <Grid container spacing={3}>
                {/* Left Filter Section */}
                <Grid item xs={12} sm={4} md={3}>
                    <div className='h-auto shadow-[0_4px_10px_8px_rgba(0,0,0,0.1)] bg-white p-5 sticky top-20 -ml-15'>
                        <h2 className='font-bold text-lg'>Filter</h2>
                        <div className='space-y-4 mt-5'>
                            <h2 className='font-semibold'>ORDER STATUS</h2>

                            {orderStatus.map((option) => (
                                <div key={option.value} className='flex items-center'>
                                    <input
                                        id={option.value}
                                        defaultValue={option.value}
                                        className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                        type="checkbox"
                                    />
                                    <label htmlFor={option.value} className='ml-3 text-sm text-gray-600'>
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>

                {/* Right Order Cards Section */}
                <Grid item xs={12} sm={8} md={9}>
                    <div className='space-y-5'>
                        {[1, 1, 1, 1, 1, 1].map((item, index) => <OrderCard key={index} />)}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Order;
