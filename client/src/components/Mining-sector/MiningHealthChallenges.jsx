import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FaTools, FaRegBuilding } from 'react-icons/fa';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { GiBrain, GiKneeling, GiHearingDisabled, GiMineWagon, GiLungs, GiFalling, GiBurningEye, GiHeartBeats, GiNecklaceDisplay } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import MinersImage from '../../assets/Mining-sector-img/surface-miners.jpeg';
import MaintenanceImage from '../../assets/Mining-sector-img/technical-staff.jpeg';
import SiteAdminImage from '../../assets/Mining-sector-img/admin.jpeg';


const data = [
  {
    title: "Underground & Surface Miners",
    image: MinersImage,
    icon: <GiMineWagon className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Respiratory Issues",
        icon: <GiLungs />,
        description: "Caused by prolonged exposure to dust and particulate matter.",
      },
      {
        title: "Hearing Loss",
        icon: <GiHearingDisabled />,
        description: "Resulting from constant proximity to loud equipment and blasts.",
      },
      {
        title: "Fatigue & Injuries",
        icon: <GiFalling />,
        description: "Long shifts in confined, high-risk environments.",
      },
    ],
  },
  {
    title: "Maintenance & Technical Staff",
    image: MaintenanceImage,
    icon: <FaTools className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders",
        icon: <GiKneeling />,
        description: "Repetitive tasks, heavy lifting, and awkward postures.",
      },
      {
        title: "Eye Strain & Burns",
        icon: <GiBurningEye />,
        description: "From welding, grinding, or poor lighting.",
      },
      {
        title: "Stress & Burnout",
        icon: <GiBrain />,
        description: "Due to multi-role pressure and 24/7 support needs.",
      },
    ],
  },
  {
    title: "Administrative & Site Management",
    image: SiteAdminImage,
    icon: <FaRegBuilding className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hypertension & Diabetes",
        icon: <GiHeartBeats />,
        description: "Sedentary work patterns, irregular eating.",
      },
      {
        title: "Mental Fatigue",
        icon: <GiBrain />,
        description: "Due to compliance stress and decision pressure.",
      },
      {
        title: "Vision & Cervical Pain",
        icon: <GiNecklaceDisplay />,
        description: "Long screen hours and poor ergonomics.",
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

const MiningHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Who’s at Risk Below the Surface?
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

export default MiningHealthChallenges;