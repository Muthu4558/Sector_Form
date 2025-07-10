import React, { useEffect } from 'react';
import { FaBriefcase, FaUsersCog, FaPeopleCarry } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const packages = [
  {
    title: 'Management & Executives',
    icon: <FaBriefcase className="text-2xl text-orange-400" />,
    benefits: [
      'Comprehensive Health Engagements',
      'Mental Wellness & Counseling',
      'Doctor-Led Webinars & Camps',
      'Dental camps',
      'Eye check-up camps',
    ],
  },
  {
    title: 'Supervisors & Admin Staff',
    icon: <FaUsersCog className="text-2xl text-orange-400" />,
    benefits: [
      'Work-Life Balance & Stress Management Workshops',
      'Desk Fitness & Ergonomics Guidance',
      'Personalized Health Coaching',
      'Posture & desk stretch tips',
      'One-on-one lifestyle consultations',
    ],
  },
  {
    title: 'Frontline Workers',
    icon: <FaPeopleCarry className="text-2xl text-orange-400" />,
    benefits: [
      'Active Stretch & Injury Prevention Sessions',
      'Healthy Habits on the Go',
      'Stress Relief Corners',
      'Guided breathing & mindfulness breaks',
      'Nutrition & hydration tips for busy shifts',
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
          Nizcare Wellness Packages for Every Hotel Team Member
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