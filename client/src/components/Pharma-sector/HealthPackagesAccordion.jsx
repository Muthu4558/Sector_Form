import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUserTie, FaUsersCog, FaUserNurse,
} from 'react-icons/fa';
import {
  GiPlantRoots, GiHealthCapsule, GiCrown, GiStrong,
  GiBurningBook, GiCook, GiHealthNormal,
  GiChemicalDrop,
  GiVirus,
  GiStandingPotion,
} from 'react-icons/gi';
import { BiBody, BiCollapse, BiExpand } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdHealthAndSafety, MdOutlineLocalHospital } from 'react-icons/md';

const data = [
  {
    title: 'Lab Technicians & QC Staff',
    icon: <FaUserNurse className="text-xl text-black" />,
    issues: [
      {
        title: 'Basic BioSafety Package',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, LFT, RFT, Spirometry, Vision Test',
        description: 'Interns, new lab recruits',
      },
      {
        title: 'LabGuard Plus',
        icon: <GiChemicalDrop className="text-xl text-amber-400" />,
        descriptionTittle: 'Basic + Urinalysis, Chest X-Ray, Allergy Panel, Liver Enzymes',
        description: 'Mid-level QC & lab staff',
      },  
      {
        title: 'SterileCare Elite',
        icon: <GiVirus className="text-xl text-amber-400" />,
        descriptionTittle: 'Plus + ECG, Vitamin D, Heavy Metal Screen, Mental Health Check',
        description: 'Senior lab managers, QA heads',
      },  
    ],
  },
  {
    title: 'Production & Packaging Staff',
    icon: <FaUsersCog className="text-xl text-black" />,
    issues: [
      {
        title: 'Core Worker Check',
        icon: <GiStrong className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, ECG, Audiometry, Spirometry, Blood Sugar',
        description: 'Entry-level operators, packers',
      },
      {
        title: 'ShiftSafe Plan',
        icon: <GiStandingPotion className="text-xl text-amber-400" />,
        descriptionTittle: 'Core + Eye Test, Ergonomic Assessment, Creatinine Test',
        description: 'Technicians, line supervisors',
      },
      {
        title: 'PlantWell Elite',
        icon: <GiCrown className="text-xl text-amber-400" />,
        descriptionTittle: 'ShiftSafe + Chest X-ray, Liver Profile, Vitamin D, Hepatitis Panel',
        description: 'Senior floor leads, production managers',
      },
    ],
  },
  {
    title: 'Sales & Corporate Executives',
    icon: <FaUserTie className="text-xl text-black" />,
    issues: [
      {
        title: 'DeskFit Basic',
        icon: <BiBody className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, BP, BMI, Fasting Glucose',
        description: 'Sales interns, entry-level HR',
      },
      { 
        title: 'FieldForce Wellness',
        icon: <MdOutlineLocalHospital className="text-xl text-amber-400" />,
        descriptionTittle: 'Basic + Lipid Profile, Eye Test, Vitamin D, ECG',
        description: 'Field executives, area managers',
      },
      {
        title: 'Leadership Shield',
        icon: <MdHealthAndSafety className="text-xl text-amber-400" />,
        descriptionTittle: 'FieldForce + Liver Panel, Sleep Analysis, Stress Test, Cardiac Risk Panel',
        description: 'CXOs, regional heads',
      },
    ],
  }
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
        “Dose-Right Health Plans – For Every Role, Every Risk”
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