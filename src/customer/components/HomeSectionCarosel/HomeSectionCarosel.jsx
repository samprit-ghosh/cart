import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const carouselRef = useRef(null);

  // Responsive breakpoints for better mobile experience
  const responsive = {
    0: { items: 1 }, // Show 1 item on very small screens
    850: { items: 2 }, // Show 2 items on slightly larger screens
    720: { items: 2 }, // Show 3 items on tablets
    1100: { items: 3 },
    1200: { items: 5 }, // Show 5 items on desktop
  };

  const items = data.slice(0, 10).map((item, index) => (
    <div key={index} className="flex justify-center items-center px-2">
      <HomeSectionCard product={item} />
    </div>
  ));

  // Function to handle navigation
  const slidePrev = () => carouselRef.current.slidePrev();
  const slideNext = () => carouselRef.current.slideNext();

  return (
    <div className="mb-20">

      <div className="relative px-4 md:px-8 mb-5 xl:mt-10 lg:mt-10 md:mt-30 sm:mt-30 mt-30">

        <h2 className="font-extrabold text-gray-800 py-6 text-lg md:text-xl " >
          {sectionName}
        </h2>



        <div className="relative p-6 md:p-10 shadow-md bg-white rounded-lg">
  {/* Left Arrow */}
  <Button
    variant="contained"
    className="absolute z-10 bg-white"
    onClick={slidePrev}
    sx={{
      position: "absolute",
      top: "50%",
      left: "5px",
      transform: "translateY(-50%)",
      bgcolor: "rgba(255, 255, 255, 0.8)",
      minWidth: "36px",
      height: "36px",
      display: { xs: "none", md: "flex" }, // Hide arrows at 780px (md) and below
    }}
    aria-label="previous"
  >
    <KeyboardArrowLeftIcon sx={{ color: "black" }} />
  </Button>

  {/* Carousel */}
  <AliceCarousel
    ref={carouselRef}
    items={items}
    disableButtonsControls
    disableDotsControls
    infinite
    responsive={responsive}
    autoPlay
    autoPlayInterval={3000}
    animationDuration={600}
    touchTracking={true}
  />

  {/* Right Arrow */}
  <Button
    variant="contained"
    className="absolute z-10 bg-white"
    onClick={slideNext}
    sx={{
      position: "absolute",
      top: "50%",
      right: "5px",
      transform: "translateY(-50%)",
      bgcolor: "rgba(255, 255, 255, 0.8)",
      minWidth: "36px",
      height: "36px",
      display: { xs: "none", md: "flex" }, // Hide arrows at 780px (md) and below
    }}
    aria-label="next"
  >
    <KeyboardArrowRightIcon sx={{ color: "black" }} />
  </Button>
</div>



      </div>
    </div>
  );
};

export default HomeSectionCarousel;