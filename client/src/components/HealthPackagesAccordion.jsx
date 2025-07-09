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
    title: 'Management & Executives',
    icon: <FaUserTie className="text-xl text-black" />,
    issues: [
      {
        title: 'Management Executives',
        icon: <GiPlantRoots className="text-xl text-amber-400" />,
        descriptionTittle: 'Smart Start Package',
        description: 'Urine Routine, Blood Pressure, BMI, General Physical Exam',
      },
      {
        title: 'Senior managers, department heads',
        icon: <GiHealthCapsule className="text-xl text-amber-400" />,
        descriptionTittle: 'Leadership Wellness Package',
        description: 'Core Parameters: All Smart Start tests + Lipid Profile, Liver & Kidney Function, ECG, Diabetes (HbA1c), Vision Check',
      },
      {
        title: 'Top executives, directors',
        icon: <GiCrown className="text-xl text-amber-400" />,
        descriptionTittle: 'Platinum Executive Package',
        description: 'Core Parameters: All Leadership Wellness tests + Chest X-ray, Cardiac Risk Assessment, Vitamin D, Thyroid Profile, Personalized Health & Lifestyle Consultation',
      },
    ],
  },
  {
    title: 'Supervisors & Admin Staff',
    icon: <FaUsersCog className="text-xl text-black" />,
    issues: [
      {
        title: 'Basic Wellness',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        description: 'CBC, Urine Routine, General Physical Exam, Blood Pressure, Vision Check',
      },
      {
        title: 'Stress Shield',
        icon: <GiStrong className="text-xl text-amber-400" />,
        description: 'Core Parameters: All Basic Wellness tests + Blood Sugar, Lipid Profile, Stress & Sleep Assessment',
      },
      {
        title: 'Executive Screen',
        icon: <GiCrown className="text-xl text-amber-400" />,
        description: 'Core Parameters: All Stress Shield tests + ECG, Liver & Kidney Function, Chest X-ray, Personalized Wellness Report',
      },
    ],
  },
  {
    title: 'Frontline Workers',
    icon: <FaUserNurse className="text-xl text-black" />,
    issues: [
      {
        title: 'Entry-level and new joiners',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Essential Safety Package',
        description: 'Core Parameters: CBC (blood test), Urine Routine, Physical Examination, Temperature Check, Fitness Certificate',
      },
      {
        title: 'Food handlers, kitchen staff',
        icon: <GiCook className="text-xl text-amber-400" />,
        descriptionTittle: 'Hygiene Plus',
        description: 'Core Parameters: All Essential Safety tests + Stool Routine, Sputum Test (where required), Typhoid & TT Vaccination',
      },
      {
        title: 'Senior frontline, long-tenure staff',
        icon: <GiBurningBook className="text-xl text-amber-500" />,
        descriptionTittle: 'Comprehensive Care',
        description: 'Core Parameters: All Hygiene Plus tests + HBsAg Antigen (Hepatitis B), Widal Test (Typhoid), Chest X-ray, ECG, Personalized Health Report',
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
        Health Check-up Packages for Hotel Teams
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