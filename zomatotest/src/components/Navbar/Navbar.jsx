import React, { useState } from 'react';
import Login from '../Login/Login';
import SignUp from '../Signup/Signup'; // Assuming you create a SignUp component similar to Login

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false); // State for Login Modal
  const [showSignUpModal, setShowSignUpModal] = useState(false); // State for Sign Up Modal
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menu state

  return (
    <div className="relative">
      <nav className="bg-[#ff5200] text-white w-full h-16 flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            className="w-8 h-8"
            src="https://www.svgrepo.com/show/519560/swiggy.svg"
            alt="Swiggy Logo"
          />
          <span className="text-xl font-bold">Swiggy</span>
        </div>

        {/* Menu for Large Screens */}
        <div className="hidden lg:flex items-center space-x-10">
          <a href="/" className="text-white text-sm font-medium hover:underline">
            Swiggy Corporate
          </a>
          <a href="/" className="text-white text-sm font-medium hover:underline">
            Partner with us
          </a>
          <button
            className="text-sm font-medium border border-white px-4 py-1 rounded-full hover:bg-white hover:text-orange-500 transition"
            onClick={() => setShowSignUpModal(true)}
          >
            Sign up
          </button>
          <button
            className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 transition"
            onClick={() => setShowLoginModal(true)}
          >
            Sign in
          </button>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#ff5200] text-white shadow-lg z-10">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a
                  href="/"
                  className="text-white text-sm font-medium hover:underline"
                >
                  Swiggy Corporate
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white text-sm font-medium hover:underline"
                >
                  Partner with us
                </a>
              </li>
              <li>
                <button
                  className="text-sm font-medium border border-white px-4 py-1 rounded-full hover:bg-white hover:text-orange-500 transition"
                  onClick={() => {
                    setShowSignUpModal(true);
                    setIsMenuOpen(false); // Close menu when modal opens
                  }}
                >
                  Sign up
                </button>
              </li>
              <li>
                <button
                  className="bg-black text-white px-4 py-1 rounded-full hover:bg-gray-800 transition"
                  onClick={() => {
                    setShowLoginModal(true);
                    setIsMenuOpen(false); // Close menu when modal opens
                  }}
                >
                  Sign in
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Login showModal={showLoginModal} setShowModal={setShowLoginModal} />
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <SignUp showModal={showSignUpModal} setShowModal={setShowSignUpModal} />
        </div>
      )}
    </div>
  );
}
