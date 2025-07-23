import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FaTools, FaRegBuilding, FaChair } from 'react-icons/fa';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { GiBrain, GiKneeling, GiHearingDisabled, GiMineWagon, GiLungs, GiFalling, GiBurningEye, GiHeartBeats, GiNecklaceDisplay, GiEyeball, GiHazardSign, GiStrong, GiDroplets, GiFactory } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import furnaceImage from '../../assets/Steel-sector-img/furnace.jpeg';
import MaintenanceImage from '../../assets/Steel-sector-img/maintenance.jpeg';
import SiteAdminImage from '../../assets/Steel-sector-img/admin.jpeg';


const data = [
  {
  title: "Production Floor Workers",
  image: furnaceImage,
  icon: <GiFactory className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Respiratory Issues",
      icon: <GiHeartBeats />,
      description: "Caused by continuous exposure to textile dust, fibers, and poor ventilation.",
    },
    {
      title: "Repetitive Strain Injuries",
      icon: <GiDroplets />,
      description: "Repeated manual stitching or machine operation leads to shoulder, back, and wrist pain.",
    },
    {
      title: "Fatigue & Dehydration",
      icon: <GiLungs />,
      description: "Long hours in high-temperature environments with limited hydration breaks.",
    },
  ],
},
{
  title: "Dyeing & Chemical Unit Workers",
  image: MaintenanceImage,
  icon: <FaTools className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Skin Allergies & Dermatitis",
      icon: <GiStrong />,
      description: "Frequent contact with chemicals, solvents, and dyes.",
    },
    {
      title: "Respiratory Hazards",
      icon: <GiHearingDisabled />,
      description: "Inhalation of fumes from chemical baths or boilers.",
    },
    {
      title: "Heat Stress",
      icon: <GiHazardSign />,
      description: "Due to working around furnaces and dyeing chambers.",
    },
  ],
},
{
  title: "Supervisors & Administrative Staff",
  image: SiteAdminImage,
  icon: <FaRegBuilding className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Sedentary Lifestyle Diseases",
      icon: <GiEyeball />,
      description: "Diabetes, hypertension from prolonged desk jobs.",
    },
    {
      title: "Mental Health Stress",
      icon: <GiBrain />,
      description: "Pressure to meet production targets and manage labor issues.",
    },
    {
      title: "Eye Strain & Headaches",
      icon: <FaChair />,
      description: "Prolonged screen usage and inadequate lighting.",
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

const SteelHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Thread by Thread – Mapping Health Risks Across Roles
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

export default SteelHealthChallenges;