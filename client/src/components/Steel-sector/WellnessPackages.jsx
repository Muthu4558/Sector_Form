import React, { useEffect } from 'react';
import { FaBriefcase, FaUsersCog, FaPeopleCarry, FaUserTie, FaToolbox } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdFlight, MdOutlineAdminPanelSettings } from 'react-icons/md';
import { GiFurnace, GiMiningHelmet } from 'react-icons/gi';

const packages = [
  {
    title: 'Furnace & Production Line Workers',
    icon: <GiFurnace className="text-2xl text-orange-400" />,
    benefits: [
      'Hydration and heat-safety awareness workshops',
      'Stretching & warm-up routines before shifts',
      'On-site respiratory fitness screening',
      'Cooling breaks with electrolyte hydration',
      'PPE-use awareness + safety habit training',
    ],
  },
  {
    title: 'Maintenance & Logistics Staff',
    icon: <FaToolbox className="text-2xl text-orange-400" />,
    benefits: [
      'Ergonomic lifting & posture training',
      'Regular hearing protection awareness',
      'Joint mobility exercise sessions',
      'Safety simulation & emergency response drills',
      'Fatigue monitoring and sleep hygiene talks',
    ],
  },
  {
    title: 'Administrative & QA/QC Staff',
    icon: <MdOutlineAdminPanelSettings className="text-2xl text-orange-400" />,
    benefits: [
      'Desk yoga & eye strain relaxation sessions',
      'Mental wellness webinars',
      'Monthly stress checks & burnout prevention',
      'Personalized fitness coaching plans',
      'Nutrition guidance for sedentary workers',
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
          Beyond Checkups: Actionable Wellness for the Steel Backbone
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