import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { FaIndustry, FaUserTie, FaShip, FaShieldAlt } from "react-icons/fa";
import { GiBodyHeight, GiHeatHaze, GiBandageRoll, GiNightSleep, GiHeartOrgan, GiPsychicWaves, GiBurningEye, GiWeightScale, GiBrain, GiSpinalCoil } from "react-icons/gi";

import dock from '../../assets/Shipping-sector-img/dock.jpeg';
import maritime from '../../assets/Shipping-sector-img/maritime.jpeg';
import admin from '../../assets/Shipping-sector-img/admin.jpeg';
import security from '../../assets/Shipping-sector-img/security.jpeg';

const data = [
  {
    title: "Dock & Cargo Workers",
    image: dock, // keep existing image
    icon: <FaIndustry className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders",
        icon: <GiBodyHeight />,
        description: "Lifting heavy cargo and repetitive movements lead to joint and muscle strain.",
      },
      {
        title: "Heat Stress & Dehydration",
        icon: <GiHeatHaze />,
        description: "Working outdoors for long hours in hot environments increases dehydration risks.",
      },
      {
        title: "Injuries & Minor Trauma",
        icon: <GiBandageRoll />,
        description: "Frequent handling of heavy machinery can lead to physical injuries and trauma.",
      },
    ],
  },
  {
    title: "Maritime Crew (Ship-based Staff)",
    image: maritime, // keep existing image
    icon: <FaShip className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sleep Disorders & Fatigue",
        icon: <GiNightSleep />,
        description: "Rotational duties and extended sea travel disturb regular sleep cycles.",
      },
      {
        title: "Cardiovascular Risks",
        icon: <GiHeartOrgan />,
        description: "Limited movement and stress during long voyages elevate heart health risks.",
      },
      {
        title: "Mental Health Challenges",
        icon: <GiPsychicWaves />,
        description: "Isolation and long periods away from family affect emotional well-being.",
      },
    ],
  },
  {
    title: "Port Administration & Logistics Staff",
    image: admin, // keep existing image
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Eye Strain & Headaches",
        icon: <GiBurningEye />,
        description: "Prolonged screen time and digital paperwork cause visual fatigue and migraines.",
      },
      {
        title: "Hypertension & Metabolic Issues",
        icon: <GiWeightScale />,
        description: "Sedentary roles with poor diet contribute to lifestyle-related disorders.",
      },
      {
        title: "Stress & Burnout",
        icon: <GiBrain />,
        description: "Tight deadlines and compliance pressure lead to chronic stress.",
      },
    ],
  },
  {
    title: "Security & Safety Officers",
    image: security, // keep existing image
    icon: <FaShieldAlt className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Shift-Induced Sleep Disorders",
        icon: <GiNightSleep />,
        description: "Irregular working hours affect circadian rhythm and sleep quality.",
      },
      {
        title: "Back Pain & Joint Issues",
        icon: <GiSpinalCoil />,
        description: "Standing and walking for long periods causes musculoskeletal strain.",
      },
      {
        title: "Stress & Anxiety",
        icon: <GiBrain />,
        description: "High-alert duty environments increase risk of mental fatigue and anxiety.",
      },
    ],
  },
];

const AccordionItem = ({ title, icon, description, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex justify-between items-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-md text-left font-semibold transition-all"
      >
        <span className="flex items-center gap-2">
          <span className='text-2xl text-amber-500'>{icon}</span> {title}
        </span>
        <span>{isOpen ? <BiCollapse /> : <BiExpand />}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-white px-4 py-3 text-gray-700 font-semibold text-sm shadow">
              {description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ShippingHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        From Dock to Deck – Safeguarding Every Role
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((group, groupIdx) => {
          const [openIndex, setOpenIndex] = useState(null);

          return (
            <div
              key={groupIdx}
              className="bg-white rounded-2xl shadow p-4"
              data-aos="zoom-in-up"
              data-aos-delay={groupIdx * 100}
            >
              <img
                src={group.image}
                alt={group.title}
                className="rounded-lg mb-4 w-full h-92 object-cover"
              />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                {group.icon} {group.title}
              </h3>

              {group.issues.map((issue, idx) => (
                <AccordionItem
                  key={idx}
                  title={issue.title}
                  icon={issue.icon}
                  description={issue.description}
                  index={idx}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShippingHealthChallenges;