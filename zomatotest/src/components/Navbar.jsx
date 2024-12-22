
import { useState } from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{ backgroundColor: '#ff5200' }}
      className="w-full h-20 flex items-center justify-between px-8"
    >
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <img
          className="w-10"
          src="https://www.svgrepo.com/download/519560/swiggy.svg"
          alt="Swiggy Logo"
        />
        <span className="text-white font-extrabold text-2xl">Swiggy</span>
      </div>

      {/* Hamburger Button */}
      <div className="lg:hidden">
        <button
          className="text-white text-xl focus:outline-none py-1 px-3 border border-white rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#ff5200] flex flex-col items-center justify-center space-y-6 z-10">
          <a
            href="#"
            className="text-white text-lg font-medium hover:underline"
          >
            Swiggy Corporate
          </a>
          <a
            href="#"
            className="text-white text-lg font-medium hover:underline"
          >
            Partner with us
          </a>
          <button className="border border-white text-white text-lg font-bold py-2 px-6 rounded hover:bg-white hover:text-black transition">
            Sign Up
          </button>
          <button
            
          className="bg-black text-white text-lg font-bold py-2 px-6 rounded hover:bg-gray-800 transition">
            Log in
          </button>
          {/* Close Button */}
          <button
            className="text-white text-lg font-bold  mt-4"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      )}

      {/* Navigation Links for Large Screens */}
      <div className="hidden lg:flex items-center space-x-10">
        <div className="flex-1 flex justify-center space-x-10 mx-20">
          <a href="#" className="text-white text-lg font-bold ">
            Swiggy Corporate
          </a>
          <a href="#" className="text-white text-lg font-bold ">
            Partner with us
          </a>
        </div>
        <div className="flex space-x-6">
          <button className="border border-white text-white text-lg font-bold py-2 px-6 rounded-lg hover:bg-white hover:text-black transition">
            Sign up
          </button>
          <button
            
          className="bg-black text-white text-lg font-bold py-2 px-6 rounded-lg hover:bg-gray-800 transition">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
