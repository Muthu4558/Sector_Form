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
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1] py-16 px-4 sm:px-6 lg:px-12 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4 flex items-center justify-center gap-2"
          data-aos="fade-up"
        >
          <FaPhoneAlt className="text-teal-600" /> Book Your Free Workforce Health Audit Now
        </h2>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Take the first step toward a healthier, high-performing workforce.
        </p>

        {/* Highlights */}
        <div
          className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-gray-600 font-medium mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-center gap-2">
            <FaCalendarCheck className="text-xl text-teal-700" /> Free Wellness Audit
          </div>
          <div className="flex items-center gap-2">
            <FaChartPie className="text-xl text-teal-700" /> Sector-Wise Health Score Report
          </div>
          <div className="flex items-center gap-2">
            <FaBullseye className="text-xl text-teal-700" /> Customized Action Plan
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition font-semibold shadow">
            ✅ Schedule a Demo
          </button>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition font-semibold shadow">
            ✅ Request a Quote
          </button>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition font-semibold shadow">
            ✅ Talk to an Expert
          </button>
        </div>

      </div>
    </section>
  );
};

export default Audit;
