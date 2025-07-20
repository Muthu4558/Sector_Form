import React, { useEffect } from 'react';
import { FaBoxes } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiChemicalTank, GiSewingMachine } from 'react-icons/gi';

const packages = [
  {
    title: 'Tannery Workers',
    icon: <GiChemicalTank className="text-2xl text-orange-400" />,
    benefits: [
      'Skin Care & Hygiene Training',
      'Respiratory Safety Workshops',
      'PPE Handling & Chemical Safety Drills',
      'Chromium Allergy Awareness',
      'Hydration Station Setups',
    ],
  },
  {
    title: 'Stitching Line Workers',
    icon: <GiSewingMachine className="text-2xl text-orange-400" />,
    benefits: [
      'Eye Relaxation Yoga Sessions',
      'Ergonomic Seating Workshops',
      'Repetitive Strain Injury Prevention',
      'Stress & Mental Wellness Mini-Talks',
      'Neck & Spine Stretch Routines',
    ],
  },
  {
    title: 'Packing & Dispatch Staff',
    icon: <FaBoxes className="text-2xl text-orange-400" />,
    benefits: [
      'Manual Lifting Training',
      'Heat Stress & Hydration Program',
      'Quick Stretch Zones Setup',
      'Daily Fatigue Tracker Tools',
      'First Aid & Emergency Simulation',
    ],
  }
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
          Boost Beyond Checkups – Wellness That Works for Leather Teams
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