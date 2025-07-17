import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUserTie, FaUsersCog, FaUserNurse,
} from 'react-icons/fa';
import {
  GiPlantRoots, GiHealthCapsule, GiCrown, GiStrong,
  GiBurningBook, GiCook, GiHealthNormal,
} from 'react-icons/gi';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    title: 'For Plant Operations & Shift Workers',
    icon: <FaUserTie className="text-xl text-black" />,
    issues: [
      {
        title: 'CoreCare',
        icon: <GiPlantRoots className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, RFT, LFT, Urine Test ',
        description: 'General workers with limited exposure',
      },
      {
        title: 'ShiftShield',
        icon: <GiHealthCapsule className="text-xl text-amber-400" />,
        descriptionTittle: 'CoreCare + ECG, Chest X-ray, Spirometry',
        description: 'Operators in chemical/packing zones',
      },
      {
        title: 'VitalMax',
        icon: <GiCrown className="text-xl text-amber-400" />,
        descriptionTittle: ' ShiftShield + Audiometry, Skin Patch Test, Vision Check',
        description: 'High-risk zone workers & long-tenure employees',
      },
    ],
  },
  {
    title: 'For Maintenance & Technical Staff',
    icon: <FaUsersCog className="text-xl text-black" />,
    issues: [
      {
        title: 'TechBasic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle : 'CBC, RBS, Lipid Profile',
        description: 'General tools and machine handlers',
      },
      {
        title: 'TechGuard',
        icon: <GiStrong className="text-xl text-amber-400" />,
        descriptionTittle : ' TechBasic + Eye Test, Audiometry',
        description: ' Welders, electricians, technicians',
      },
      {
        title: 'TechElite',
        icon: <GiCrown className="text-xl text-amber-400" />,
        descriptionTittle: 'TechGuard + Ergonomic Evaluation, Vitamin D, B12 ',
        description: 'Senior maintenance & multi-zone operators',
      },
    ],
  },
  {
    title: 'For Supervisory & Admin Staff',
    icon: <FaUserNurse className="text-xl text-black" />,
    issues: [
      {
        title: 'DeskWell ',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, RBS, BP, BMI ',
        description: 'Entry-level admins & HR officers',
      },
      {
        title: 'StressShield ',
        icon: <GiCook className="text-xl text-amber-400" />,
        descriptionTittle: 'DeskWell + ECG, Liver & Kidney Profile, Eye Test  ',
        description: 'Managers & QA/QC staff',
      },
      {
        title: "Executive360 ",
        icon: <GiBurningBook className="text-xl text-amber-500" />,
        descriptionTittle: 'StressShield + Mental Wellness, Cardiac Risk Marker, HBA1c ',
        description: 'Senior management, plant heads',
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
        Deep-Rooted Health Check-ups for the Fertilizer Workforce
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