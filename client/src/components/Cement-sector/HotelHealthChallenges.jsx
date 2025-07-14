import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie, FaUsersCog, FaUserNurse } from 'react-icons/fa';
import { MdHealthAndSafety, MdOutlineLocalHospital, MdAccessTime } from 'react-icons/md';
import { BiBrain, BiBody, BiDrink, BiCollapse, BiExpand } from 'react-icons/bi';
import { GiStandingPotion, GiChemicalDrop, GiVirus } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Management from '../../assets/Hotel-sector-img/owners.jpeg';
import Admin from '../../assets/Hotel-sector-img/reception.jpeg';
import Front from '../../assets/Hotel-sector-img/frontline.jpeg';

const data = [
  {
    title: "Field & Production Workers",
    image: Management,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Respiratory Illnesses",
        icon: <MdHealthAndSafety />,
        description: "Asthma, chronic bronchitis, lung damage",
      },
      {
        title: "Musculoskeletal Disorders",
        icon: <MdOutlineLocalHospital />,
        description: "Back pain, joint pain, hernia",
      },
      {
        title: "Heat Stress & Dehydration",
        icon: <MdAccessTime />,
        description: "Fatigue, fainting, kidney strain",
      },
    ],
  },
  {
    title: "Logistics & Transport Teams",
    image: Admin,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Fatigue & Musculoskeletal Pain",
        icon: <BiBrain />,
        description: "Back pain, joint degeneration, exhaustion",
      },
      {
        title: "Diabetes & Blood Pressure Issues",
        icon: <BiBody />,
        description: "Hypertension, cardiovascular strain",
      },
      {
        title: "Accident Risk",
        icon: <BiDrink />,
        description: "Sprains, fractures, lacerations",
      },
    ],
  },
  {
    title: "Contract Workers & Loading Staff",
    image: Front,
    icon: <FaUserNurse className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Infections & Poor Hygiene-Linked Illnesses",
        icon: <GiStandingPotion />,
        description: "Skin infections, respiratory infection",
      },
      {
        title: "Undiagnosed Conditions",
        icon: <GiChemicalDrop />,
        description: "Diabetes, hypertension, malnutrition",
      },
      {
        title: "Mental Stress & Burnout",
        icon: <GiVirus />,
        description: "Anxiety, sleep disorders, fatigue",
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

const HotelHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        The Unseen Health Challenges in the Hotel Industry
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

export default HotelHealthChallenges;