import React, { useState } from 'react';

export default function SignUp({ showModal, setShowModal }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions.');
      return;
    }
    console.log('Form Submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setShowModal(false)}
        >
          &times;
        </button>

        {/* Form Header */}
        <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>

        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
              required
            />
            <label htmlFor="termsAccepted" className="ml-2 text-sm text-gray-600">
              I agree to Zomato's{' '}
              <a href="/" className="text-orange-500 underline">
                Terms of Service, Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/" className="text-orange-500 underline">
                Content Policies
              </a>
            </label>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Create account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Sign-In */}
        <button
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          onClick={() => alert('Sign in with Google')}
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>

        {/* Log In Link */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => {
              setShowModal(false); // Close Sign Up Modal
              alert('Redirect to Log in'); // Replace with navigation logic
            }}
            className="text-orange-500 underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
