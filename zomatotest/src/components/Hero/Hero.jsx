import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-[#ff5200] text-white overflow-hidden">
      {/* Left Image */}
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" // Replace with your left image URL
        alt="Vegetables"
        className="absolute left-0 top-0 h-full object-cover translate-x-[-10%] hidden md:block"
      />
      {/* Right Image */}
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" // Replace with your right image URL
        alt="Sushi"
        className="absolute right-0 top-0 h-full object-cover translate-x-[10%] hidden md:block"
      />
      <div className="relative max-w-6xl mx-auto p-6 md:p-12">
      <img
        className="block md:hidden w-full h-3/4"
        src="https://www.nicepng.com/png/full/871-8710490_organic-vegitables-package-healthy-food-images-free-download.png"alt="" />


        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Enter your delivery location"
            className="p-4 w-full md:w-96 text-black rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Search for restaurant, item or more"
            className="p-4 w-full md:w-96 text-black rounded-md focus:outline-none"
          />
          <button className="p-4 bg-white text-orange-500 font-bold rounded-md w-full md:w-auto">
            Search
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white text-black rounded-[2.5rem] p-8 shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-extrabold mb-2">FOOD DELIVERY</h2>
            <p className="text-sm">FROM RESTAURANTS</p>
            <p className="text-red-500 font-bold mt-4">UPTO 60% OFF</p>
            <img
              src="https://via.placeholder.com/100" // Food Delivery image URL
              alt="Food Delivery"
              className="mt-6 w-24 h-24 object-cover"
            />
          </div>
          <div className="bg-white text-black rounded-[2.5rem] p-8 shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-extrabold mb-2">INSTAMART</h2>
            <p className="text-sm">INSTANT GROCERY</p>
            <p className="text-red-500 font-bold mt-4">UPTO 60% OFF</p>
            <img
              src="https://via.placeholder.com/100" // Instamart image URL
              alt="Instamart"
              className="mt-6 w-24 h-24 object-cover"
            />
          </div>
          <div className="bg-white text-[#202020ed] rounded-[2.5rem] p-8 shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-extrabold mb-2">GENIE</h2>
            <p className="text-sm">PICK-UP & DROP</p>
            <img
              src="https://via.placeholder.com/100" // Genie image URL
              alt="Genie"
              className="mt-6 w-24 h-24 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
