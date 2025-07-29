import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import { GiFactory, GiElectric, GiCargoCrate, GiGears, GiBoxUnpacking } from 'react-icons/gi';
import { FaUserTie } from 'react-icons/fa';


const packages = [
  {
    title: 'Machine Operators & Mill Workers',
    icon: <GiFactory className="text-2xl text-orange-400" />,
    benefits: [
      'Dust Control Awareness & Mask Fitment Drive',
      'Physio Camp for Lower Back Strain',
      'Deep Breathing & Lung Capacity Training',
      'Weekly Hydration Drive',
      'PPE Usage Refresher Sessions',
    ],
  },
  {
    title: 'Maintenance & Technical Staff',
    icon: <GiGears className="text-2xl text-orange-400" />,
    benefits: [
      'Hearing Protection Seminars',
      'Stretch & Flex Routines Before Shift',
      'Mental Fatigue Workshops',
      'Joint Care Nutrition Counseling',
      'Heat-Exposure Risk Training',
    ],
  },
  {
    title: 'Admin & QC Staff',
    icon: <FaUserTie className="text-2xl text-orange-400" />,
    benefits: [
      'Seated Yoga & Chair Ergonomics',
      'Digital Eye Strain Relief Sessions',
      'Stress Management Workshops',
      'Health Challenge Apps & Gamified Step Tracking',
      'Monthly Mental Wellness Webinars',
    ],
  },
  {
    title: 'Logistics & Warehouse Teams',
    icon: <GiBoxUnpacking className="text-2xl text-orange-400" />,
    benefits: [
      'Safe Lifting Technique Training',
      'Summer Hydration and Salt Intake Programs',
      'Injury Prevention Drills',
      'Warehouse Air Quality Monitoring',
      'First Responder CPR & Safety Certification',
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
          Wellness Add-ons That Stick—Just Like Good Paper
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