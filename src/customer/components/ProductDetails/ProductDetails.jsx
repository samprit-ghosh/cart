

'use client'

import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';
import { Button, LinearProgress, Rating, Box, Grid } from '@mui/material';
import ProductReviewCard from "./ProductReviewCard"; // Ensure correct import
import { mens_kurta } from './../../Data/mens_kurta';
import HomeSectionCard from './../HomeSectionCard/HomeSectionCard';
import { useNavigate } from 'react-router-dom';

const ratings = [
  { label: "Excellent", value: 40, color: "success" }, // Green
  { label: "Very Good", value: 30, color: "success" }, // Green
  { label: "Good", value: 25, color: "primary" }, // Blue
  { label: "Average", value: 20, color: "warning" }, // Yellow
  { label: "Poor", value: 10, color: "error" }, // Red
];

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cart");
  };


  const [selectedSize, setSelectedSize] = useState(
    product.sizes.find((size) => size.inStock) || product.sizes[0]
  );


  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };



  return (
    <div className="bg-gray-200 pt-30 pb-30">
      <div className="pt-4">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-10">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Product Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Left Side: Images */}
         



          <div className="mx-auto mt-6 max-w-[90%] sm:max-w-7xl sm:px-4 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {/* Large Main Image */}
        <div onMouseEnter={() => openImage(product.images[0].src)}>
          <img
            alt={product.images[0].alt}
            src={product.images[0].src}
            className="w-full h-[250px] sm:h-[300px] lg:h-[500px] rounded-lg object-cover cursor-pointer"
          />
        </div>

        {/* Small Images Below */}
        <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-4 w-full">
          {product.images.slice(0, 4).map((image, index) => (
            <div key={index} onMouseEnter={() => openImage(image.src)}>
              <img
                alt={image.alt}
                src={image.src}
                className="w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] lg:w-[100px] lg:h-[120px] rounded-lg object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full screen overlay for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition duration-300 cursor-pointer"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>


          {/* Right Side: Product Info */}



          <div className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-24">
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-900">
                Universoutfit
              </h2>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-900 opacity-60 pt-1">
                Casual Puff Sleeves Solid Women White Top
              </h2>
            </div>

            {/* Price and Reviews */}
            <div className="mt-4">
              <div className="flex flex-wrap space-x-3 items-center text-base sm:text-lg lg:text-xl text-gray-900 mt-4 sm:mt-6">
                <p className="font-semibold">₹199</p>
                <p className="opacity-50 line-through">₹211</p>
                <p className="text-green-600 font-semibold">5% off</p>
              </div>

              <div className="mt-4 sm:mt-6">
                <div className="flex flex-wrap items-center space-x-2 sm:space-x-3">
                  <Rating name="read-only" value={5.5} readOnly />
                  <p className="opacity-50 text-xs sm:text-sm">56540 Ratings</p>
                  <p className="text-xs sm:text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    3870 Reviews
                  </p>
                </div>
              </div>

              {/* Size Selection */}
              <form className="mt-6 sm:mt-10">
                <div>
                  <h3 className="text-sm sm:text-base font-medium text-gray-900">Size</h3>
                  <fieldset className="mt-2 sm:mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="flex flex-wrap gap-2 sm:gap-3"
                    >
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active, checked }) =>
                            `${!size.inStock
                              ? 'cursor-not-allowed bg-gray-50 text-gray-200'
                              : 'cursor-pointer bg-white text-gray-900'
                            }
                relative border rounded-md uppercase flex items-center justify-center w-10 h-8 sm:w-14 sm:h-10 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500`
                          }
                        >
                          <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>


                {/* Add to Cart Button */}
                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  sx={{
                    px: "1rem",
                    py: "0.6rem",
                    bgcolor: "#9155fd",
                    mt: "25px",
                    width: "100%",
                    fontSize: "0.875rem",
                  }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>

            {/* Description and Details */}
            <div className="py-8 sm:py-10 lg:py-16">
              <h3 className="sr-only">Description</h3>
              <p className="text-sm sm:text-base text-gray-900">{product.description}</p>

              <div className="mt-6 sm:mt-10">
                <h3 className="text-sm sm:text-base font-medium text-gray-900">Highlights</h3>
                <ul className="list-disc space-y-1 sm:space-y-2 pl-3 sm:pl-4 text-xs sm:text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-600">{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 sm:mt-10">
                <h2 className="text-sm sm:text-base font-medium text-gray-900">Details</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-4">{product.details}</p>
              </div>
            </div>
          </div>

        </section>

        {/* Rating and Reviews Section */}
        <section className="mb-20">
          <h2 className="py-3 px-5 mb-10 font-bold text-2xl lg:text-3xl">Recent Reviews</h2>
          <div className="shadow-[0_4px_10px_8px_rgba(0,0,0,0.1)] p-5 m-5">
            <Grid container spacing={4}>
              {/* Product Reviews */}
              <Grid item xs={12} md={7}>
                <div className="space-y-5">
                  {[1, 1, 1].map((_, index) => (
                    <ProductReviewCard key={index} />
                  ))}
                </div>
              </Grid>

              {/* Rating Summary */}
              <Grid item xs={12} md={5}>
                <h2 className="text-xl font-semibold pb-1">Product Rating</h2>
                <div className="flex items-center space-x-3">
                  <Rating value={4.6} precision={0.5} readOnly />
                  <p className="opacity-60">56,564 Ratings</p>
                </div>

                {/* Progress Bars */}
                <Box sx={{ marginTop: "15px" }}>
                  {ratings.map((rating, index) => (
                    <Grid container gap={2} alignItems="center" key={index} sx={{ marginBottom: 1 }}>
                      <Grid item xs={4} sm={3}>
                        <p className="text-sm sm:text-base">{rating.label}</p>
                      </Grid>
                      <Grid item xs={8} sm={9}>
                        <Box sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7, width: "100%" }}>
                          <LinearProgress
                            sx={{ borderRadius: 4, height: 7 }}
                            variant="determinate"
                            value={rating.value}
                            color={rating.color}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>

        {/* Similar Products Section */}
        <section className="pt-5">
          <h2 className="py-5 mb-8 px-5 font-bold text-2xl lg:text-3xl">Similar Products</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 p-5 gap-y-20">
            {mens_kurta.map((item) => (
              <HomeSectionCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}