import React, { useEffect } from 'react';
import { FaBoxes, FaBusinessTime } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiBank} from 'react-icons/gi';
import { MdOutlineWork } from 'react-icons/md';

const packages = [
  {
  title: 'Frontline & Branch Staff',
  icon: <GiBank className="text-2xl text-orange-400" />,
  benefits: [
    'Ergonomic Posture Sessions',
    'Vision Safety & Screen Fatigue Workshops',
    'Stress-Relief Breathing Breaks',
    'Nutrition on Shift (Smart Snacking Guides)',
    'Workplace Yoga/Stretching Routines',
  ],
},
{
  title: 'Corporate & IT Teams',
  icon: <MdOutlineWork className="text-2xl text-orange-400" />,
  benefits: [
    'Digital Detox Sessions',
    'One-on-One Mental Health Counseling',
    'Meditation & Mindfulness Webinars',
    'Deskercise Modules',
    'Nutrition Consultation for Sedentary Roles',
  ],
},
{
  title: 'Field Staff & Sales Force',
  icon: <FaBusinessTime className="text-2xl text-orange-400" />,
  benefits: [
    'Travel Wellness Kit (Hydration + Stretches)',
    'Energy Management Training',
    'Heart-Health Monitoring',
    'Sun Protection & Skin Care Awareness',
    'Quick Recovery & Fatigue-Reduction Techniques',
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
          Top-Up Wellness: Benefits Beyond the Balance Sheet
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