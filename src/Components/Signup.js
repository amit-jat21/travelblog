import React from 'react';


const SignupPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage:'../Assests/Signuppage.jpg' }}>
        <div className="flex flex-col justify-center  items-center h-full text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold  ">Travelista Tours</h1>
          <p className="text-lg">Travel is the only purchase that enriches you in ways beyond material wealth</p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center bg-white">
        <h2 className="text-3xl font-bold text-pink-500">Welcome</h2>
        <p className="text-gray-500 mb-6">Create your Id</p>
        <form className="w-3/4 max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Full name here"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="thisux@mail.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder=""
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder=""
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-4 text-gray-500">
          Already have an account? <a href="#" className="text-blue-500">Login Now</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;