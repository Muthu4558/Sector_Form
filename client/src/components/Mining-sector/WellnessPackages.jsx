import React, { useEffect } from 'react';
import { FaBriefcase, FaUsersCog, FaPeopleCarry, FaUserTie, FaToolbox } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdFlight, MdOutlineAdminPanelSettings } from 'react-icons/md';
import { GiMiningHelmet } from 'react-icons/gi';

const packages = [
  {
    title: 'Underground & Surface Miners',
    icon: <GiMiningHelmet className="text-2xl text-orange-400" />,
    benefits: [
      'Lung health awareness sessions',
      'Stretching & fatigue prevention workshops',
      'Water + salt intake tracking challenges',
      'PPE usage training with health focus',
      'Audio safety campaigns to prevent hearing loss',
    ],
  },
  {
    title: 'Maintenance & Technical Staff',
    icon: <FaToolbox className="text-2xl text-orange-400" />,
    benefits: [
      'Back & joint care physiotherapy sessions',
      'Blue-light protection training',
      'Ergonomics and safe lifting technique demos',
      'Yoga for endurance and mobility',
      'Stress coping strategies for shift workers',
    ],
  },
  {
    title: 'Admin & Site Management',
    icon: <MdOutlineAdminPanelSettings className="text-2xl text-orange-400" />,
    benefits: [
      'Mental wellness webinars (stress, burnout, sleep)',
      'Lifestyle disease management talks',
      'On-site guided meditation / breathing programs',
      'Eye strain and posture awareness sessions',
      'Health habit tracking via wellness app',
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
          Beyond Checkups: Real Wellness. Real Impact.
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