import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaPhoneAlt,
  FaCalendarCheck,
  FaChartPie,
  FaBullseye,
} from 'react-icons/fa';

const Audit = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1] py-16 px-4 sm:px-6 lg:px-12 text-gray-800 relative overflow-hidden">

      {/* Floating background animation */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-teal-200 rounded-full opacity-30 blur-3xl animate-pulse z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4 flex items-center justify-center gap-3 animate-float"
          data-aos="fade-down"
        >
          <FaPhoneAlt className="text-teal-600 animate-ping-slow" /> Book Your Free Workforce Health Audit Now
        </h2>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Take the first step toward a healthier, high-performing workforce.
        </p>

        {/* Highlights */}
        <div
          className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-gray-600 font-medium mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center gap-2" data-aos="zoom-in" data-aos-delay="400">
            <FaCalendarCheck className="text-xl text-teal-700 animate-bounce" /> Free Wellness Audit
          </div>
          <div className="flex items-center gap-2" data-aos="zoom-in" data-aos-delay="500">
            <FaChartPie className="text-xl text-teal-700 animate-spin-slow" /> Sector-Wise Health Score Report
          </div>
          <div className="flex items-center gap-2" data-aos="zoom-in" data-aos-delay="600">
            <FaBullseye className="text-xl text-teal-700 animate-pulse" /> Customized Action Plan
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4"
          data-aos="zoom-in-up"
          data-aos-delay="700"
        >
          {['✅ Schedule a Demo', '✅ Request a Quote', '✅ Talk to an Expert'].map((text, i) => (
            <button
              key={i}
              className="relative group overflow-hidden px-6 py-3 rounded-full bg-teal-600 text-white font-semibold shadow hover:bg-teal-700 transition-all duration-300"
            >
              <span className="absolute w-full h-full bg-white opacity-10 group-hover:scale-150 scale-100 transition-transform duration-500 rounded-full" />
              {text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audit;
