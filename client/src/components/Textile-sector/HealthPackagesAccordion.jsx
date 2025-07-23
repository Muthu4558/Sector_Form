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
    title: 'For Production Floor Workers:',
    icon: <GiFurnace className="text-xl text-black" />,
    issues: [
      {
        title: 'SpinCare Basic',
        icon: <FaPeopleCarry className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, RBS, BMI, BP, Lung Function Test',
        description: 'Entry-level workers, stitchers',
      },
      {
        title: 'SpinCare Plus',
        icon: <GiToolbox className="text-xl text-amber-400" />,
        descriptionTittle: 'ECG, Spirometry, Audiometry, Vision, Liver & Renal Profile',
        description: 'Machine operators',
      },
      {
        title: 'SpinCare Advanced',
        icon: <GiHealthIncrease className="text-xl text-amber-400" />,
        descriptionTittle: 'Full Body Check, Ergonomic Assessment, Chest X-Ray',
        description: 'Shift supervisors, senior workers',
      },
    ],
  },
  {
    title: 'For Dyeing & Chemical Unit',
    icon: <FaTools className="text-xl text-black" />,
    issues: [
      {
        title: 'ChemShield Basic',
        icon: <GiElectric className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, Skin Allergy Panel, Urinalysis',
        description: 'Chemical helpers, boiler attendants',
      },
      {
        title: 'ChemShield Plus',
        icon: <FaWrench className="text-xl text-amber-400" />,
        descriptionTittle: 'Spirometry, Liver Panel, Blood Lead Levels, Vision Test',
        description: 'Dyeing machine operators',
      },
      {
        title: 'ChemShield Advanced',
        icon: <GiCargoCrane className="text-xl text-amber-400" />,
        descriptionTittle: 'ECG, Chest X-Ray, Lung Function Test, Kidney Profile',
        description: 'Senior lab techs, QC',
      },
    ],
  },
  {
    title: 'For Supervisors & Admin Staff',
    icon: <FaRegBuilding className="text-xl text-black" />,
    issues: [
      {
        title: 'DeskFit Basic',
        icon: <FaUsersCog className="text-xl text-amber-400" />,
        descriptionTittle: 'BP, BMI, RBS, Eye Check',
        description: ' Office assistants',
      },
      {
        title: 'DeskFit Plus',
        icon: <FaUserCheck className="text-xl text-amber-400" />,
        descriptionTittle: 'Lipid Profile, ECG, Liver Function',
        description: 'Line managers, HR',
      },
      {
        title: 'DeskFit Advanced',
        icon: <FaUserShield className="text-xl text-amber-500" />,
        descriptionTittle: 'TMT, Cardiac Risk Markers, Stress Assessment',
        description: 'Senior admin, QC heads',
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
        Health Woven Right – Tiered Checkups for Every Thread.
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