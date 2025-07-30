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
    title: "Aerospace Engineers & Technical Designers",
    image: Management,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Eye strain & migraines",
        icon: <TbTemperatureCelsius />,
        description: "Due to prolonged CAD screen use and precision detailing",
      },
      {
        title: "Neck & shoulder pain",
        icon: <GiLeg />,
        description: "Caused by extended seated posture",
      },
      {
        title: "Mental fatigue",
        icon: <GiSoap />,
        description: " High cognitive demand under tight project deadlines",
      },
    ],
  },
  {
    title: "Defense Manufacturing & Plant Workers",
    image: Admin,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hearing loss",
        icon: <MdScreenSearchDesktop />,
        description: "Long exposure to heavy machinery and testing",
      },
      {
        title: "Respiratory issues",
        icon: <MdRestaurant />,
        description: "Dust, fumes, or soldering materials exposure",
      },
      {
        title: "Musculoskeletal strain",
        icon: <MdOutlinePsychology />,
        description: "Manual handling of heavy or precision components",
      },
    ],
  },
  {
    title: "Field Operators & Maintenance Staff",
    image: Front,
    icon: <FaUserNurse className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Fatigue & burnout",
        icon: <MdChairAlt />,
        description: "Irregular shifts, emergency call-outs",
      },
      {
        title: "Sleep disruption",
        icon: <GiNightSleep />,
        description: "Rotational or overnight maintenance work",
      },
      {
        title: "Joint issues",
        icon: <MdHealthAndSafety />,
        description: "Climbing, kneeling, working in confined aircraft spaces",
      },
    ],
  },
  {
    title: "Administrative & Command-Level Staff",
    image: Front,
    icon: <FaUserNurse className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hypertension & lifestyle diseases",
        icon: <MdChairAlt />,
        description: "Sedentary desk roles, high stress",
      },
      {
        title: "Mental health challenges",
        icon: <GiNightSleep />,
        description: "Strategic responsibility pressure",
      },
      {
        title: "Poor ergonomics",
        icon: <MdHealthAndSafety />,
        description: "Desk-bound postures over time",
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
        Ground to Sky, Health Risks Fly – Let’s Catch Them Early
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