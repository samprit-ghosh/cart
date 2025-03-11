'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { mens_kurta } from './../../Data/mens_kurta';
import ProductCard from './ProductCard'
import { FilterMain, singleFilter } from './FilterData';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { useLocation, useSearchParams } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useSearchParams } from 'react-router-dom';
// import { Box } from "@mui/material";



const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)


  const [isSquareView, setIsSquareView] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  const handleButtonClick = () => {
    setIsSquareView(!isSquareView);
  };
  const [searchParams, setSearchParams] = useSearchParams(); // ✅ Initialize search params


  const handleFilter = (value, sectionId) => {
    const newSearchParams = new URLSearchParams(searchParams); // ✅ Use existing params
    let filterValues = newSearchParams.getAll(sectionId);

    if (filterValues.includes(value)) {
      // Remove the value if it's already checked
      filterValues = filterValues.filter((item) => item !== value);
      newSearchParams.delete(sectionId); // Clear existing
      filterValues.forEach((val) => newSearchParams.append(sectionId, val)); // Add remaining
    } else {
      // Add the value if not checked
      newSearchParams.append(sectionId, value);
    }

    setSearchParams(newSearchParams); // ✅ Update URL params
  }; 
  


  const handleRadioFilterChange = (event, sectionId) => {
    const params = new URLSearchParams(window.location.search);
    params.set(sectionId, event.target.value);

    setSearchParams(params); // Update searchParams
    setSelectedValue(event.target.value); // Update state to ensure UI reflects the change
  };


  return (
<div className="bg-white mt-20">
  <div >
    {/* Mobile filter dialog */}

    <div className="dialog-container">
  <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-50 lg:hidden">
    {/* Dialog Backdrop */}
    <DialogBackdrop
      transition
      className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
    />

    {/* Dialog Panel */}
    <div className="fixed inset-0 z-50 flex">
      <DialogPanel
        transition
        className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
      >
        {/* Dialog Header */}
        <div className="flex items-center px-5 opacity-50">
        <h2 className='text-lg font-bold pb-3 pl-3'> Filters</h2>
       
  <FilterListIcon sx={{ position: "absolute", right: 30 }} />

          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Filters Form */}


            <form className='p-3'> 
              {FilterMain.map((section) => (
                <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">{section.name}</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                        <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                type="checkbox"
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                value={option.value}
                                checked={searchParams.getAll(section.id).includes(option.value)}
                                onChange={(e) => handleFilter(option.value, section.id)}
                                className='-mt-3'
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
              {singleFilter.map((section) => (
                <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <FormLabel sx={{ color: "black" }} className='text-gray-900' id="demo-radio-buttons-group-label" style={{ color: "rgb(17, 24, 39, 1)" }}>{section.name}</FormLabel>
                      <span className="ml-6 flex items-center">
                        <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                        <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          value={searchParams.get(section.id) || ""}
                          onChange={(e) => handleRadioFilterChange(e, section.id)}
                        >
                          {section.options.map((option, optionIdx) => (
                            <FormControlLabel
                              key={optionIdx}
                              value={option.value}
                              control={<Radio />}
                              label={option.label}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
<br /><br />
<button className='close-btn' onClick={() => setMobileFiltersOpen(false)}>
  Close
</button>

      </DialogPanel>
      
    </div>

  </Dialog>
</div>

        {/* Mobile filter dialog */}

    <main className="mx-auto px-6 sm:px-6 lg:px-10 " >
      <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 " >
      <h1 className="text-xl max-[450px]:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 max-[375px]:mb-5">
  New Arrivals
</h1>



<div className="flex items-center space-x-4 max-[400px]:space-x-2 max-[280px]:space-x-1">
  <Menu as="div" className="relative inline-block text-left">
    <div>

    </div>

    <MenuItems
      transition
      className="absolute right-0 z-10 mt-2 w-40 max-[400px]:w-32 max-[280px]:w-28 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-none data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
    >
      <div className="py-1">
        {sortOptions.map((option) => (
          <MenuItem key={option.name}>
            <a
              href={option.href}
              className={classNames(
                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                'block px-4 max-[400px]:px-3 max-[280px]:px-2 py-2 text-sm max-[400px]:text-xs max-[280px]:text-[11px] data-focus:bg-gray-100 data-focus:outline-none',
              )}
            >
              {option.name}
            </a>
          </MenuItem>
        ))}
      </div>
    </MenuItems>
  </Menu>

  {/* <button
    type="button"
    className="-m-2 ml-5 max-[400px]:ml-3 max-[280px]:ml-2 p-2 max-[400px]:p-1 text-gray-400 hover:text-gray-500 sm:ml-7"
  >
    <span className="sr-only">View grid</span>
    <Squares2X2Icon aria-hidden="true" className="size-5 max-[400px]:size-4 max-[280px]:size-3" />
  </button> */}


<button
  onClick={handleButtonClick}
  type="button"
  className="max-[375px]:-mb-2 inline-flex items-center mb-4 ml-5 max-[400px]:ml-3 max-[280px]:ml-2 p-2 max-[400px]:p-1 text-gray-400 hover:text-gray-500 sm:ml-7"
>
  <span className="text-base max-[450px]:text-xs">
    {isSquareView ? 'Base View' : 'Square View'}
  </span>
  <Squares2X2Icon
    aria-hidden="true"
    className="w-3 h-3 max-[400px]:w-4 max-[400px]:h-4 ml-2"
  />
</button>








  <button
    type="button"
    onClick={() => setMobileFiltersOpen(true)}
    className="mb-4 ml-4 max-[400px]:ml-3 max-[280px]:ml-2 p-2 max-[400px]:p-1 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden
    max-[375px]:-mb-2"
  >
    <span className="sr-only">Filters</span>
    <FunnelIcon aria-hidden="true" className="size-4 max-[400px]:size-3.5 max-[280px]:size-3" />
  </button>
</div>








        
      </div>

      <section aria-labelledby="products-heading" className="pt-6 pb-24" >
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4" >
          <div>
          <div className="hidden lg:flex justify-between items-center px-4.5">
  <h2 className="text-lg font-bold opacity-50 pb-3">Filters</h2>
  <FilterListIcon />
</div>


            <form className="hidden lg:block" >
              {FilterMain.map((section) => (
                <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">{section.name}</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                        <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                type="checkbox"
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                value={option.value}
                                checked={searchParams.getAll(section.id).includes(option.value)}
                                onChange={(e) => handleFilter(option.value, section.id)}
                                className='-mt-3'
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
              {singleFilter.map((section) => (
                <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <FormLabel sx={{ color: "black" }} className='text-gray-900' id="demo-radio-buttons-group-label" style={{ color: "rgb(17, 24, 39, 1)" }}>{section.name}</FormLabel>
                      <span className="ml-6 flex items-center">
                        <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                        <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          value={searchParams.get(section.id) || ""}
                          onChange={(e) => handleRadioFilterChange(e, section.id)}
                        >
                          {section.options.map((option, optionIdx) => (
                            <FormControlLabel
                              key={optionIdx}
                              value={option.value}
                              control={<Radio />}
                              label={option.label}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>


          </div>
          {/* Product grid */}

          
         


    {/* <div class="container">

      <button>mnbvc</button>
      <br />   <br />
  <div class="product-grid">
    {mens_kurta.map((item) => (
      <ProductCard key={item.id} product={item} />
    ))}
  </div>
</div> */}









<div className="container">


      <div className={`product-grid ${isSquareView ? "square-view" : "base-view"}`}>
        {mens_kurta.map((item) => (
          <ProductCard key={item.id} product={item} isSquareView={isSquareView} />
        ))}
      </div>
    </div>

          {/* Product grid */}
        </div>
      </section>
    </main>
  </div>
</div>
  )
}