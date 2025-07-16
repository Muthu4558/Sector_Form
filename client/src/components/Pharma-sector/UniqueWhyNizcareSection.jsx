import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaHeartbeat,
  FaSmile,
  FaStar,
  FaShieldAlt,
  FaCubes,
  FaMapMarkedAlt,
  FaCogs,
  FaCheckCircle,
  FaChartLine,
  FaWallet,
} from 'react-icons/fa';

const whatWillYouGain = [
  {
    icon: FaHeartbeat,
    title: 'Reduce Sick Days',
    description: 'Fewer absences, smoother operations, and happier guests.',
  },
  {
    icon: FaSmile,
    title: 'Boost Morale',
    description: 'Show your team you care—improve retention and workplace culture.',
  },
  {
    icon: FaStar,
    title: 'Enhance Reputation',
    description: 'Healthier staff means better service and higher guest ratings.',
  },
  {
    icon: FaShieldAlt,
    title: 'Compliance Made Easy',
    description: 'Meet health and safety standards effortlessly.',
  },
  {
    icon: FaCubes,
    title: 'All-in-One Solution',
    description: 'From check-ups to wellness workshops, we handle it all.',
  },
];

const whyNizcare = [
  { icon: FaMapMarkedAlt, title: 'Pan-India Coverage' },
  { icon: FaCogs, title: 'Tailored Packages for All Roles' },
  { icon: FaCheckCircle, title: 'Zero Admin Hassle' },
  { icon: FaChartLine, title: 'Instant Digital Reports + HR Dashboard' },
  { icon: FaWallet, title: 'Affordable Per-Employee Plans' },
];

const FancyCard = ({ icon: Icon, title, description, aos, delay }) => (
  <div
    className="group rounded-xl p-6 bg-white hover:bg-teal-50 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-400 cursor-pointer"
    data-aos={aos}
    data-aos-delay={delay}
  >
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 group-hover:bg-teal-500 mb-4 mx-auto transition-colors">
      <Icon className="text-teal-600 group-hover:text-white text-xl" />
    </div>
    <h3 className="text-center font-bold text-slate-800 text-lg mb-2">{title}</h3>
    {description && (
      <p className="text-sm text-center font-semibold text-slate-600 group-hover:text-slate-700 transition-all">
        {description}
      </p>
    )}
  </div>
);

const UniqueWhyNizcareSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* What Will You Gain */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-10">
            What Will You Gain?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
            {whatWillYouGain.map((item, idx) => (
              <FancyCard
                key={idx}
                {...item}
                aos="fade-up"
                delay={idx * 100}
              />
            ))}
          </div>
        </div>

        {/* Why Nizcare */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-10">
            Why Nizcare?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
            {whyNizcare.map((item, idx) => (
              <FancyCard
                key={idx}
                {...item}
                aos="fade-up"
                delay={idx * 100}
              />
            ))}
          </div>
        </div>

        {/* Limited-Time Offer */}
        <div
          className="bg-[#e0f7fa] border-l-4 border-teal-500 rounded-xl px-6 py-10 text-center shadow-lg"
          data-aos="fade-up"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-teal-800 mb-4">
            🎉 Limited-Time Offer
          </h3>
          <p className="text-lg font-medium text-gray-700 mb-2">
            Book a Demo by <span className="font-bold text-teal-700">July 31st</span> and Get Your First Pharma Wellness Workshop (Value: ₹15,000) for your HR/EHS team <span className="text-green-600 font-bold">FREE!</span>
          </p>
          <p className="text-sm text-gray-600 font-semibold">
            Unlock exclusive rates for annual partnerships.
          </p>
        </div>

      </div>
    </section>
  );
};

export default UniqueWhyNizcareSection;