import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaTruckLoading } from 'react-icons/fa';
import {
  GiSuitcase
} from "react-icons/gi";
import { MdOutlineSupport, MdOutlineTravelExplore } from 'react-icons/md';
const packages = [{
  title: 'Tour Guides & Coordinators',
  icon: <MdOutlineTravelExplore className="text-2xl text-orange-400" />,
  benefits: [
    'Voice Care Workshops',
    'Footwear Ergonomics Training',
    'Mid-route Relaxation Stretches',
    'Stress Reduction Coaching',
    'Immune Booster Plans',
  ],
},
{
  title: 'Transport & Logistics Staff',
  icon: <FaTruckLoading className="text-2xl text-orange-400" />,
  benefits: [
    'Yoga for Drivers',
    'Posture & Spine Sessions',
    'Sleep Hygiene Training',
    'Nutrition On-the-Road Plan',
    'Fatigue Management Tips',
  ],
},
{
  title: 'Hospitality & Frontline Staff',
  icon: <MdOutlineSupport className="text-2xl text-orange-400" />,
  benefits: [
    'Infection Control Training',
    'Stretch & Move Breaks',
    'Mindfulness at Work Sessions',
    'Healthier Meal Planning in Shifts',
    'Emotional Resilience Workshops',
  ],
},
{
  title: 'Sales & Marketing Professionals',
  icon: <GiSuitcase className="text-2xl text-orange-400" />,
  benefits: [
    'Mental Health Teleconsultations',
    'Screen Detox Challenges',
    'Travel-safe Nutrition Guides',
    'Anxiety Relief Breathing Sessions',
    'Time Zone Adjustment Plans',
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
          Beyond Check-ups – Wellness That Travels With Them
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