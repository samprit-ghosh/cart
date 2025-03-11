import React from "react";
import { Container, Grid, Box, Avatar, Typography, Rating } from "@mui/material";

function ProductReviewCard() {
  return (

    <div className="-ml-3">
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            gap: 1,
            alignItems: "flex-start",
            flexWrap: "nowrap",
          }}
        >
          {/* Avatar Section */}
          <Grid item xs={2} sm={1}>
            <Avatar
              sx={{
                width: { xs: 30, sm: 46 },
                height: { xs: 30, sm: 46 },
                bgcolor: "#9155fd",
              }}
            />
          </Grid>

          {/* Review Content */}
          <Grid item xs={10} sm={11}>
            <Box className="space-y-2">
              {/* Name & Date */}
              <Box>
                <Typography variant="subtitle1" sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                  Raam
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem" } }}
                >
                  April 5, 2023
                </Typography>
              </Box>

              {/* Rating */}
              <Rating value={4.5} precision={0.5} readOnly size="small" />

              {/* Review Text */}
              <Typography variant="body1" sx={{ fontSize: { xs: "0.85rem", sm: "1rem" } }}>
                Lorem ipsum dolormm, sit amet consectetur.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>



  );
}

export default ProductReviewCard;
