import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaEnvelope, FaPhoneAlt, FaGlobe } from 'react-icons/fa';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#e0f7f4] via-white to-[#f0fcfb] text-center relative overflow-hidden">
      {/* Heading */}
      <h2
        className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-10 drop-shadow-md"
        data-aos="fade-up"
      >
        Let’s build a healthier, hazard-free <span className="text-teal-600">chemical</span> workplace—together.
      </h2>

      {/* Contact Cards */}
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-800 mb-12 max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex items-center gap-4 group">
          <div className="bg-gradient-to-tr from-blue-200 to-blue-500 p-3 rounded-full shadow-md group-hover:scale-105 transition">
            <FaEnvelope className="text-white text-xl" />
          </div>
          <p className="text-base md:text-lg font-medium">
            <span className="text-gray-500">Email:</span>{' '}
            <a href="mailto:wellness@nizcare.co" className="text-blue-600 hover:underline">
              <p>wellness@nizcare.co</p>
            </a>
          </p>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="bg-gradient-to-tr from-green-200 to-green-500 p-3 rounded-full shadow-md group-hover:scale-105 transition">
            <FaPhoneAlt className="text-white text-xl" />
          </div>
          <p className="text-base md:text-lg font-medium">
            <span className="text-gray-500">Phone:</span>{' '}
            <a href="tel:+918148879313" className="text-green-600 hover:underline">
              <p>+91 8148879313</p>
            </a>
          </p>
        </div>

        <div className="flex items-center gap-4 group">
          <div className="bg-gradient-to-tr from-cyan-200 to-cyan-500 p-3 rounded-full shadow-md group-hover:scale-105 transition">
            <FaGlobe className="text-white text-xl" />
          </div>
          <p className="text-base md:text-lg font-medium">
            <span className="text-gray-500">Visit:</span>{' '}
            <a href="https://www.nizcare.com" className="text-cyan-600 hover:underline">
              <p>www.nizcare.com</p>
            </a>
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
          Get Demo
        </button>
        <button className="border-2 border-yellow-400 text-yellow-500 font-bold px-6 py-3 rounded-full hover:bg-yellow-50 transition duration-300">
          Talk to Sales Team
        </button>
      </div>

      {/* Decorative Background Circles */}
      <div
        className="absolute w-40 h-40 bg-cyan-100 rounded-full opacity-30 top-10 left-10 blur-2xl"
        data-aos="zoom-in"
        data-aos-delay="500"
      ></div>
      <div
        className="absolute w-60 h-60 bg-yellow-100 rounded-full opacity-30 bottom-10 right-10 blur-2xl"
        data-aos="zoom-in"
        data-aos-delay="600"
      ></div>

      {/* Footer */}
      <div className="bg-[#1f2429] mt-20 py-5 text-white text-sm font-medium">
        Nizcare | Trusted by 100+ Hotels | Health that Serves Hospitality
      </div>
    </section>
  );
};

export default ContactSection;