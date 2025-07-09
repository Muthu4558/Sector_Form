import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      toast.success(res.data.message);
      setTimeout(() => navigate('/admin'), 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex">
      <Toaster position="top-center" />
      
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center items-center px-12 bg-white">
        <div className="w-full max-w-sm">
          <h1 className="text-pink-600 font-bold text-xl mb-1">Logo Here</h1>
          <p className="text-gray-600 mb-4">Welcome back !!!</p>

          <h2 className="text-3xl font-bold mb-6">Log In</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm mb-1 block">Email</label>
              <input
                type="email"
                placeholder="log@gmail.com"
                className="w-full px-4 py-2 bg-blue-100 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm mb-1 block">Password</label>
              <div className="flex justify-between">
                <input
                  type="password"
                  placeholder="********"
                  className="w-full px-4 py-2 bg-blue-100 rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <a href="#" className="text-sm text-gray-500 ml-2 mt-2">Forgot Password ?</a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600 transition"
            >
              LOGIN
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500">or continue with</div>

          <div className="flex justify-center gap-4 mt-4">
            <button className="border rounded-full p-2 w-10 h-10 flex items-center justify-center">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-5 h-5" />
            </button>
            <button className="border rounded-full p-2 w-10 h-10 flex items-center justify-center">
              <img src="https://img.icons8.com/ios-filled/50/github.png" alt="GitHub" className="w-5 h-5" />
            </button>
            <button className="border rounded-full p-2 w-10 h-10 flex items-center justify-center">
              <img src="https://img.icons8.com/ios-filled/50/facebook--v1.png" alt="Facebook" className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-6 text-sm text-center text-gray-500">
            Don’t have an account yet? <a href="#" className="text-pink-500">Sign up for free</a>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-[#f0f4ff] flex justify-center items-center relative">
        <img
          src="https://i.ibb.co/0mNnPfv/girl-laptop-chair.png"
          alt="Character"
          className="w-[300px] h-auto object-contain z-10"
        />
        <img
          src="https://i.ibb.co/jv4s8tx/cactus.png"
          alt="Cactus"
          className="absolute right-20 bottom-12 w-[80px]"
        />
      </div>
    </div>
  );
};

export default Login;
