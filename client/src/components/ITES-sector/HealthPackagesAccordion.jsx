import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUsersCog, FaUserShield, FaRegBuilding, FaUserCheck, FaWrench, FaLaptop, FaTools, FaServer, FaBug, FaLaptopCode, FaCode, FaKeyboard, FaNetworkWired, FaToolbox, FaMicrochip, FaPeopleCarry, FaUserSecret, FaUserTie, FaProjectDiagram,
} from 'react-icons/fa';
import { GiHealthIncrease, GiMineWagon, GiElectric, GiMechanicalArm, GiDiamondHard, GiMiner, }

  from 'react-icons/gi';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    title: 'Developers & Programmers',
    icon: <FaCode className="text-xl text-black" />,
    issues: [
      {
        title: 'Junior coders and support staff',
        icon: <FaLaptopCode className="text-xl text-amber-400" />,
        descriptionTittle: 'Starter Code Package',
        description: 'CBC, Blood Sugar, Vision Test, BMI, Vitamin D',
      },
      {
        title: 'Mid-level engineers',
        icon: <FaBug className="text-xl text-amber-400" />,
        descriptionTittle: 'Bug-Free Body Package',
        description: 'CBC, Lipid Profile, LFT, Thyroid, ECG, Eye & Dental Screening',
      },
      {
        title: 'Senior engineers & architects',
        icon: <FaServer className="text-xl text-amber-500" />,
        descriptionTittle: 'High-Performance Dev Plan',
        description: 'All above + Stress Profile, Sleep Evaluation, HBA1C, Ortho Check',
      },
    ],
  },
  {
    title: 'IT Support & Infrastructure',
    icon: <FaNetworkWired className="text-xl text-black" />,
    issues: [
      {
        title: 'System admins & remote support',
        icon: <FaKeyboard className="text-xl text-amber-400" />,
        descriptionTittle: 'Uptime Basic Plan',
        description: 'CBC, BP Check, Sugar, ECG, Vision Test',
      },
      {
        title: 'On-ground engineers & night shift',
        icon: <FaToolbox className="text-xl text-amber-400" />,
        descriptionTittle: 'Network+ Wellness Plan',
        description: 'CBC, LFT, Lipid, Ortho Screening, Eye Test, Ergonomic Evaluation',
      },
      {
        title: 'Team leads & field specialists',
        icon: <FaMicrochip className="text-xl text-amber-500" />,
        descriptionTittle: 'Mission-Critical Wellness Pack',
        description: 'All above + Chest X-ray, TMT, Vitamin D/B12, Liver & Kidney Tests',
      },
    ],
  },
  {
    title: 'Project Managers, HR & Operations',
    icon: <FaProjectDiagram className="text-xl text-black" />,
    issues: [
      {
        title: 'HR execs & junior PMs',
        icon: <FaUserTie className="text-xl text-amber-400" />,
        descriptionTittle: 'People Pulse Package',
        description: 'CBC, Sugar, BP, BMI, ECG',
      },
      {
        title: 'Senior HR/PMs',
        icon: <FaPeopleCarry className="text-xl text-amber-400" />,
        descriptionTittle: 'Scrum Strong Plan',
        description: 'All above + Mental Health Check, Liver/Kidney Function, Lipid',
      },
      {
        title: 'Directors & decision-makers',
        icon: <FaUserSecret className="text-xl text-amber-500" />,
        descriptionTittle: 'Strategic Leader Wellness Pack',
        description: 'Stress Test, HBA1C, Heart Risk Markers, Hormonal Panel, Mental Health Screening',
      },
    ],
  },
];

const AccordionItem = ({ item, idx, openIndex, setOpenIndex }) => {
  const isOpen = idx === openIndex;

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpenIndex(isOpen ? null : idx)}
        className="w-full flex justify-between items-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-md text-left font-semibold transition-all"
      >
        <span className="flex items-center gap-2">
          {item.icon}
          {item.title}
        </span>
        <span>{isOpen ? <BiCollapse /> : <BiExpand />}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && item.description && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-teal-50 px-4 mt-4 text-[15px] font-semibold rounded-t-md shadow text-green-800">
              {item.descriptionTittle}
            </div>
            <div className="bg-gray-50 px-4 py-3 font-semibold text-gray-800 text-sm whitespace-pre-line rounded-b-md shadow">
              {item.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HealthPackagesAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState(data.map(() => 0));

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Code to Care: Health Check-ups That Fit Every Tech Role
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="bg-white rounded-2xl shadow-lg p-6"
            data-aos="zoom-in-up"
            data-aos-delay={groupIdx * 100}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            {group.issues.map((issue, idx) => (
              <AccordionItem
                key={idx}
                item={issue}
                idx={idx}
                openIndex={openIndexes[groupIdx]}
                setOpenIndex={(newIndex) => {
                  const updated = [...openIndexes];
                  updated[groupIdx] = newIndex;
                  setOpenIndexes(updated);
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthPackagesAccordion;