import React, { useState } from 'react';

export default function Login() {
  const [showModal, setShowModal] = useState(false); // Declare the modal state

  return (
    <div className="h-screen w-full relative">
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition absolute top-4 right-4"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-96 bg-white p-6 rounded-lg shadow-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-center mb-4">Log in</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                  +91
                </span>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                />
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition mb-4">
              Send OTP
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition mb-3">
              <span className="material-icons mr-2">email</span>
              Continue with Email
            </button>

            <button className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded-md hover:shadow-md transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt=""
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>

            <p className="text-sm text-center text-gray-500 mt-4">
              New to Zomato?{' '}
              <a href="#" className="text-indigo-600 hover:underline">
                Create account
              </a>
            </p>
          </div>
        </div>
      )}

      <div className={`h-full bg-gray-100 transition ${showModal ? 'blur-sm' : ''}`}></div>
    </div>
  );
}
