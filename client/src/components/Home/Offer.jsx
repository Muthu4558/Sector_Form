import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaBullseye,
  FaStethoscope,
  FaChartBar,
  FaPrayingHands,
  FaUsers,
  FaAmbulance,
} from 'react-icons/fa';

const offerList = [
  { icon: <FaBullseye className="text-3xl text-teal-600" />, text: 'Sector-Specific Health Packages (Onsite & Offsite)' },
  { icon: <FaStethoscope className="text-3xl text-teal-600" />, text: 'Annual & Bi-Annual Preventive Health Checks' },
  { icon: <FaChartBar className="text-3xl text-teal-600" />, text: 'Health Risk Assessment & Dashboards' },
  { icon: <FaPrayingHands className="text-3xl text-teal-600" />, text: 'Stress, Mental Health & Lifestyle Coaching' },
  { icon: <FaUsers className="text-3xl text-teal-600" />, text: 'Family Wellness Programs' },
  { icon: <FaAmbulance className="text-3xl text-teal-600" />, text: 'Telemedicine & Chronic Disease Management' },
];

const Offer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id='services' className="bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1] py-16 px-4 sm:px-6 lg:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4"
          data-aos="fade-up"
        >
          What We Offer
        </h2>
        <p
          className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our corporate wellness offerings are comprehensive, customizable, and crafted to make your workforce healthier and happier—no matter your industry or size.
        </p>

        {/* Offer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left">
          {offerList.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all flex items-start space-x-4"
            >
              <div>{item.icon}</div>
              <div className="text-lg font-medium text-gray-700">{item.text}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12">
          <hr className="border-t border-gray-300 w-1/2 mx-auto" />
        </div>

        {/* CTA Section */}
        <div data-aos="zoom-in" className="mt-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-teal-700 mb-4">
            Join 100+ Corporates Across India
          </h3>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Whether you're managing a 50-member startup or a 10,000-strong enterprise,
            Nizcare ensures pan-India wellness coordination across branches and factories.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium shadow-md transition duration-300">
            Book a Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;