import React from 'react';
import backgroundImage from '../Assests/loginpage pic.jpg';


const LoginPage = () => {
  return (
    <div className="min-h-screen flex">
    
      <div className="w-1/2 bg-cover bg-center " style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="flex flex-col  items-center  h-full bg-black bg-opacity-40">
          
          <h1 className="text-white text-4xl font-bold mt-16 ">Travelista Tours</h1>
          <p className="text-white mt-1 text-lg ">
            Travel is the only purchase that enriches you in ways beyond material wealth.
          </p>
        </div>
      </div>
     
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-2/3">
          <h2 className="text-4xl font-bold text-pink-600">Welcome</h2>
          <p className="text-gray-500 mt-2">Login with Email</p>
          <form className="mt-8">
            <div className="mb-4">
              <label className="block text-gray-700">Email id</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="thisis@mail.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder=""
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              LOGIN
            </button>
            <div className="flex justify-between mt-4">
              <a href="#" className="text-sm text-gray-500">Forgot your password?</a>
            </div>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex justify-center gap-4">
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg">G</button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">f</button>
              <button className="bg-black text-white py-2 px-4 rounded-lg"></button>
            </div>
            <p className="mt-4 text-center text-gray-500">
              Don't have account? <a href="#" className="text-pink-600">Register Now</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;