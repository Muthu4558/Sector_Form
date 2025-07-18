import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FaUsersCog,FaUserShield,FaRegBuilding,FaUserCheck,FaWrench,FaLaptop, FaTools, FaPeopleCarry,
} from 'react-icons/fa';
import {GiHealthIncrease,GiMineWagon,GiElectric,GiMechanicalArm,GiDiamondHard,GiMiner, GiFurnace, GiConsoleController, GiRetroController, GiToolbox, GiCargoCrane,} 

from 'react-icons/gi';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    title: 'Furnace & Production Line Workers',
    icon: <GiFurnace className="text-xl text-black" />,
    issues: [
      {
        title: 'Daily-shift workers, helpers',
        icon: <FaPeopleCarry className="text-xl text-amber-400" />,
        descriptionTittle: 'SteelShield Basic',
        description: 'Core Paramters: CBC, Blood Pressure, BMI, Pulse, Respiratory Rate ',
      },
      {
        title: 'Welders, Operators',
        icon: <GiToolbox className="text-xl text-amber-400" />,
        descriptionTittle: 'SteelShield plus+',
        description: 'Core Paramters: All Basic + Liver Function, Kidney Profile, Chest X-Ray  ',
      },
      {
        title: 'Supervisors, Senior Line Staff',
        icon: <GiHealthIncrease className="text-xl text-amber-400" />,
        descriptionTittle: 'SteelShield Max',
        description: 'Core Paramters: All Plus + ECG, Spirometry, Audiometry, Fatigue Index',
      },
    ],
  },
  {
    title: 'Maintenance & Logistics Staff',
    icon: <FaTools className="text-xl text-black" />,
    issues: [
      {
        title: 'Material handlers, Fitters',
        icon: <GiElectric className="text-xl text-amber-400" />,
        descriptionTittle: 'IronGuard Basic',
        description: 'Core Parameters: CBC, BP, BMI, Vision, Audiometry',
      },
      {
        title: 'Technicians, Mechanics',
        icon: <FaWrench className="text-xl text-amber-400" />,
        descriptionTittle: 'IronGuard Plus',
        description: 'Core Parameters: All Basic + Joint X-Ray, Nerve Function Test, ECG ',
      },
      {
        title: 'Shift Leaders, Crane Heads',
        icon: <GiCargoCrane className="text-xl text-amber-400" />,
        descriptionTittle: 'IronGuard Max',
        description: 'Core Parameters: All Plus + Vitamin D, Stress Markers, Ergonomic Risk Scan',
      },
    ],
  },
  {
    title: 'Admin & QA/QC Employees',
    icon: <FaRegBuilding className="text-xl text-black" />,
    issues: [
      {
        title: 'Office Staff, Data Entry',
        icon: <FaUsersCog className="text-xl text-amber-400" />,
        descriptionTittle: 'SmartDesk Basic',
        description: 'Core Parameters: CBC, BMI, Blood Sugar, BP, Eye Test',
      },
      {
        title: 'QA Inspectors, Admin Execs',
        icon: <FaUserCheck className="text-xl text-amber-400" />,
        descriptionTittle: 'SmartDesk Plus',
        description: 'Core Parameters: All Basic + Lipid Profile, ECG, Liver Function, Spine Screening',
      },
      {
        title: 'Mid-level Managers',
        icon: <FaUserShield className="text-xl text-amber-500" />,
        descriptionTittle: 'SmartDesk Max',
        description: 'Core Parameters: All Plus + Mental Health Evaluation, Stress Scan, Vitamin Panel',
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
        Tailored Health Checks. Built for Steel. Designed for Duty.
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