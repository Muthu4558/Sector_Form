import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';import {
  GiCargoCrate,
  GiSteeringWheel,
  GiCargoShip,
  GiSecurityGate
} from 'react-icons/gi';

const packages = [
  {
  title: 'Dock & Cargo Workers',
  icon: <GiCargoCrate className="text-2xl text-orange-400" />,
  benefits: [
    'Ergonomic training for lifting techniques',
    'Hydration & heat awareness camps',
    'Injury prevention & safety drills',
    'Weekly physiotherapy camps',
    'Group stretching & fitness routines',
  ],
},
{
  title: 'Maritime Crew',
  icon: <GiSteeringWheel className="text-2xl text-orange-400" />,
  benefits: [
    'Mental health helpline & counseling',
    'Sleep hygiene workshops',
    'Nutritional planning for long voyages',
    'At-sea telemedicine consults',
    'Breathing & mindfulness sessions',
  ],
},
{
  title: 'Port Administration & Logistics',
  icon: <GiCargoShip className="text-2xl text-orange-400" />,
  benefits: [
    'Desk yoga sessions',
    'Vision & posture correction camps',
    'Burnout management webinars',
    'Monthly stress assessments',
    'Work-life balance workshops',
  ],
},
{
  title: 'Security & Safety Officers',
  icon: <GiSecurityGate className="text-2xl text-orange-400" />,
  benefits: [
    'Reaction time improvement drills',
    'Physical fitness & endurance coaching',
    'Shift nutrition & hydration sessions',
    'Sleep optimization programs',
    'Emergency preparedness simulations',
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
          Beyond Checkups – Wellness Waves that Uplift Every Role
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