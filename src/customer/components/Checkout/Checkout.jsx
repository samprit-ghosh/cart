import React, { useEffect, useState } from "react";
import { Box, Stepper, Step, StepLabel, Button, Typography, useMediaQuery } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import DeleveryAddressForm from "./DeleveryAddressForm";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Add Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);

  // ✅ Get step from URL, ensuring it's a valid number
  const stepFromUrl = parseInt(querySearch.get("step"), 10);
  const [activeStep, setActiveStep] = useState(isNaN(stepFromUrl) ? 0 : stepFromUrl);

  // ✅ Sync state when URL changes
  useEffect(() => {
    if (!isNaN(stepFromUrl) && stepFromUrl >= 0 && stepFromUrl < steps.length) {
      setActiveStep(stepFromUrl);
    }
  }, [stepFromUrl]);

  // ✅ Navigation handlers
  const handleNext = () => {
    const nextStep = activeStep + 1;
    if (nextStep < steps.length) {
      setActiveStep(nextStep);
      navigate(`?step=${nextStep}`);
    }
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    if (prevStep >= 0) {
      setActiveStep(prevStep);
      navigate(`?step=${prevStep}`);
    }
  };

  // ✅ Responsive Check
  const isMobile = useMediaQuery("(max-width:700px)");

  return (
    <div className="pt-40 mb-10 px-5 md:px-10 lg:px-20 ">
      <Box sx={{ width: "100%" }}>
        {/* ✅ Responsive Stepper */}
        <Stepper activeStep={activeStep} alternativeLabel={isMobile}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>
                <Typography sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}>{label}</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <Typography sx={{ mt: 2, mb: 1, textAlign: "center" }}>
            🎉 All steps completed - you're finished!
          </Typography>
        ) : (
          <>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, pt: 3 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  mr: { sm: 1 },
                  mb: { xs: 2, sm: 0 },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleNext}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>

            {/* ✅ Render step-based component */}
            <div className="mt-8">{activeStep === 1 ? <DeleveryAddressForm /> : <OrderSummary />}</div>
          </>
        )}
      </Box>
    </div>
  );
}
