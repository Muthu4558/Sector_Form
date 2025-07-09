import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie, FaUsersCog, FaUserNurse } from 'react-icons/fa';
import { MdHealthAndSafety, MdWork, MdOutlineLocalHospital, MdAccessTime } from 'react-icons/md';
import { BiBrain, BiBody, BiDrink, BiCollapse, BiExpand } from 'react-icons/bi';
import { GiStandingPotion, GiChemicalDrop, GiVirus } from 'react-icons/gi';

import Management from '../assets/Hotel-sector/owners.jpeg';
import Admin from '../assets/Hotel-sector/reception.jpeg';
import Front from '../assets/Hotel-sector/frontline.jpeg';

const data = [
  {
    title: "Management & Executives",
    image: Management,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Chronic Lifestyle Conditions",
        icon: <MdHealthAndSafety />,
        description: "High blood pressure, diabetes, and cardiac risk from sedentary lifestyle and stress.",
      },
      {
        title: "Lack of Preventive Care",
        icon: <MdOutlineLocalHospital />,
        description: "Skipped regular checkups due to busy schedules, leading to late diagnoses.",
      },
      {
        title: "Sleep Deprivation & Work-Life Imbalance",
        icon: <MdAccessTime />,
        description: "Insomnia, mood swings, and reduced productivity from round-the-clock responsibilities.",
      },
    ],
  },
  {
    title: "Supervisors & Admin Staff",
    image: Admin,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Mental Stress & Pressure",
        icon: <BiBrain />,
        description: "Burnout, anxiety, and reduced focus from managing operations and people.",
      },
      {
        title: "Prolonged Sitting & Poor Ergonomics",
        icon: <BiBody />,
        description: "Neck stiffness, back pain, and posture-related issues due to desk jobs.",
      },
      {
        title: "Irregular Meals & Poor Hydration",
        icon: <BiDrink />,
        description: "Digestive problems, fatigue, and weight fluctuations due to erratic schedules.",
      },
    ],
  },
  {
    title: "Frontline Workers",
    image: Front,
    icon: <FaUserNurse className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Prolonged Standing & Physical Strain",
        icon: <GiStandingPotion />,
        description: "Muscle fatigue, back pain, and varicose veins from long hours on foot.",
      },
      {
        title: "Exposure to Heat, Fumes & Chemicals",
        icon: <GiChemicalDrop />,
        description: "Respiratory issues, skin irritation, and dehydration from kitchens and cleaning agents.",
      },
      {
        title: "Infection & Hygiene Risks",
        icon: <GiVirus />,
        description: "Higher exposure to infectious diseases due to guest interactions and shared spaces.",
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
          <span className='text-2xl text-amber-500'> 
            {icon}
          </span> {title}
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

const HotelHealthChallenges = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        The Unseen Health Challenges in the Hotel Industry
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((group, groupIdx) => {
          const [openIndex, setOpenIndex] = useState(null);

          return (
            <div key={groupIdx} className="bg-white rounded-2xl shadow p-4">
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

export default HotelHealthChallenges;