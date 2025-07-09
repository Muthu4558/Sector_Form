import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to the Home Page</h1>
      <button
        onClick={() => navigate('/sector-hotel')}
        className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
      >
        Hotel Sector
      </button>
    </div>
  );
};

export default Home;