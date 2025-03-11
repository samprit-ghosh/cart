import React from "react";
import { Grid, Button, TextField, Box } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    console.log("address", address);
  };

  return (
    <div className="px-0 pb-20">
      <Grid container spacing={3}>
        {/* Address List Section */}
        <Grid item xs={12} lg={5}>
          <Box className="border rounded-md shadow-md h-[30.5rem] overflow-auto p-5">
            <AddressCard />
            <Button
              sx={{ mt: 4, bgcolor: "RGB(145 85 255)", width: "100%" }}
              size="large"
              variant="contained"
            >
              Delivery Here
            </Button>
          </Box>
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* First Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                {/* Last Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>

                {/* Address */}
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    multiline
                    rows={4}
                    fullWidth
                    autoComplete="street-address"
                  />
                </Grid>

                {/* City */}
                <Grid item xs={12} sm={6}>
                  <TextField required id="city" name="city" label="City" fullWidth autoComplete="address-level2" />
                </Grid>

                {/* State */}
                <Grid item xs={12} sm={6}>
                  <TextField required id="state" name="state" label="State / Province / Region" fullWidth autoComplete="address-level1" />
                </Grid>

                {/* Zip Code */}
                <Grid item xs={12} sm={6}>
                  <TextField required id="zip" name="zip" label="Zip / Postal Code" fullWidth autoComplete="postal-code" />
                </Grid>

                {/* Phone Number */}
                <Grid item xs={12} sm={6}>
                  <TextField required id="phoneNumber" name="phoneNumber" label="Phone Number" fullWidth autoComplete="tel" />
                </Grid>

                {/* Submit Button (Centered on Mobile) */}
                <Grid item xs={12}>
                  <Button
                    sx={{
                      py: 1,
                      mt: 2,
                      bgcolor: "RGB(145 85 255)",
                      width: { xs: "100%", sm: "auto" }, // Full width on mobile
                    }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Delivery Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
