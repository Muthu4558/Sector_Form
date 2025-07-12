import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUserTie,
  FaUsersCog,
  FaUserNurse
} from 'react-icons/fa';
import {
  MdHealthAndSafety,
  MdOutlinePsychology,
  MdRestaurant,
  MdScreenSearchDesktop,
  MdChairAlt
} from 'react-icons/md';
import {
  GiLeg,
  GiSoap,
  GiNightSleep
} from 'react-icons/gi';
import {
  TbTemperatureCelsius
} from 'react-icons/tb';
import {
  BiCollapse,
  BiExpand
} from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Management from '../../assets/Hotel-sector-img/owners.jpeg';
import Admin from '../../assets/Hotel-sector-img/reception.jpeg';
import Front from '../../assets/Hotel-sector-img/frontline.jpeg';

const data = [
  {
    title: "Frontline Workers",
    image: Management,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Cold Exposure",
        icon: <TbTemperatureCelsius />,
        description: "Respiratory Illnesses & Joint Pain: Working in low-temperature environments like cold storage.",
      },
      {
        title: "Long Hours Standing",
        icon: <GiLeg />,
        description: "Varicose Veins & Back Pain: Lack of movement during extended shifts.",
      },
      {
        title: "Chemical/Sanitizer Use",
        icon: <GiSoap />,
        description: "Skin Allergies & Eye Irritation: Constant exposure to cleaning agents and disinfectants.",
      },
    ],
  },
  {
    title: "Supervisors & Quality/Admin Staff",
    image: Admin,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Screen Time & Paperwork",
        icon: <MdScreenSearchDesktop />,
        description: "Eye Strain & Neck Stiffness: Continuous digital or physical documentation work.",
      },
      {
        title: "Irregular Meals/Shifts",
        icon: <MdRestaurant />,
        description: "Digestive & Metabolic Issues: Inconsistent eating and sleeping patterns.",
      },
      {
        title: "Responsibility Stress",
        icon: <MdOutlinePsychology />,
        description: "Mental Fatigue: Pressure from audits and production targets.",
      },
    ],
  },
  {
    title: "Executives & Managers",
    image: Front,
    icon: <FaUserNurse className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sedentary Work",
        icon: <MdChairAlt />,
        description: "Obesity, Diabetes, Cardiac Risk: Long hours in meetings, desk jobs, lack of movement.",
      },
      {
        title: "Chronic Stress",
        icon: <GiNightSleep />,
        description: "Hypertension & Sleep Disorders: Continuous responsibility for plant operations and workforce management.",
      },
      {
        title: "Neglecting Preventive Health",
        icon: <MdHealthAndSafety />,
        description: "Undiagnosed Lifestyle Diseases: Prioritizing work over personal health.",
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
        The Unseen Health Challenges in the Food Processing Sector
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