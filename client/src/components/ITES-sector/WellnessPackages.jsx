import React, { useEffect } from 'react';
import { FaBriefcase, FaUsersCog, FaPeopleCarry, FaUserTie, FaToolbox, FaLaptopCode, FaNetworkWired } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdFlight, MdOutlineAdminPanelSettings } from 'react-icons/md';
import { GiMiningHelmet } from 'react-icons/gi';

const packages = [
  {
    title: 'Developers & Programmers',
    icon: <FaLaptopCode className="text-2xl text-orange-400" />,
    benefits: [
      'Eye strain relief sessions',
      'Mental wellness workshops (burnout & mindfulness)',
      'Sleep hygiene coaching via app',
      'Posture & ergonomics training',
      'Healthy snacking subscription add-on',
    ],
  },
  {
    title: 'IT Infrastructure Teams',
    icon: <FaNetworkWired className="text-2xl text-orange-400" />,
    benefits: [
      'Stretch break challenges (gamified)',
      'Monthly on-site physiotherapy',
      'First aid & emergency response training',
      'Healthy back programs',
      'Hydration monitoring alerts',
    ],
  },
  {
    title: 'Project Managers & HR',
    icon: <FaUserTie className="text-2xl text-orange-400" />,
    benefits: [
      'Mental health 1-on-1 consultations',
      'Stress management seminars',
      'Leadership & resilience coaching',
      'Meal & nutrition guidance (app-based)',
      'HR wellness toolkit – easy implementation plans',
    ],
  },


];

const WellnessPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-2"
          data-aos="fade-up"
        >
          Beyond the Screen: Wellness Add-ons That Work Behind the Code
        </h2>
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your team.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 border-l-8 border-teal-600 transition-transform duration-300 hover:shadow-xl hover:scale-105"
              data-aos="zoom-in-up"
              data-aos-delay={idx * 150}
            >
              <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-slate-900">
                {pkg.icon}
                <span className="text-[1.1rem] text-orange-500 font-semibold">
                  {pkg.title}
                </span>
              </h3>
              <ul className="space-y-3">
                {pkg.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-800 font-medium leading-snug"
                  >
                    <BsCheckCircleFill className="text-teal-500 mt-1 shrink-0" />
                    <span className="text-left">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessPackages;