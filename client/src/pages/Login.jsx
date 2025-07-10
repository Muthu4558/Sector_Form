import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Logo from '../assets/nizcare-logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      toast.success(res.data.message);
      setTimeout(() => navigate('/admin'), 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-[#f0f4ff] relative">
      <Toaster position="top-center" />

      {/* Full-screen Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 z-50 bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col items-center">
            <svg
              className="animate-spin h-10 w-10 text-teal-600 mb-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <p className="text-teal-700 font-semibold">Logging in...</p>
          </div>
        </div>
      )}

      {/* Left Side */}
      <div
        className="w-full md:w-1/2 flex justify-center items-center p-6 sm:px-12 sm:py-10"
        data-aos="fade-up"
      >
        <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-teal-600 font-bold text-xl mb-3 text-center">
            <img src={Logo} alt="Logo" className="w-36 h-12 inline-block mr-2" />
          </h1>
          <p className="text-gray-600 mb-4">Welcome back !!!</p>

          <h2 className="text-3xl font-bold mb-6">Log In</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm mb-1 block">Email</label>
              <input
                type="email"
                placeholder="log@gmail.com"
                className="w-full px-4 py-2 bg-blue-100 rounded-md input-style"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm mb-1 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="********"
                  className="w-full px-4 py-2 bg-blue-100 rounded-md pr-10 input-style"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-600"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-white py-2 rounded-md font-semibold transition ${
                isLoading
                  ? 'bg-teal-400 cursor-not-allowed'
                  : 'bg-teal-600 hover:bg-teal-500'
              }`}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="hidden md:flex w-1/2 justify-center items-center"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <img
          src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?semt=ais_hybrid&w=740"
          alt="Character"
          className="w-full max-h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Login;