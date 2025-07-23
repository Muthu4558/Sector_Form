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
    title: 'For Plant Operations & Production Workers',
    icon: <FaUserTie className="text-xl text-black" />,
    issues: [
      {
        title: 'Basic Shield Package',
        icon: <GiPlantRoots className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, Blood Pressure, ECG, Lung Function Test, Skin Allergy Test',
        description: 'Ideal for daily-wage workers, shift-line operators',
      },
      {
        title: 'RespiraCare Plus',
        icon: <GiHealthCapsule className="text-xl text-amber-400" />,
        descriptionTittle: 'All Basic Shield tests + Liver/Kidney Profile, X-Ray Chest, Urine Test',
        description: 'Ideal for chemical exposure roles & process staff',
      },
      {
        title: 'ToxicGuard Premium',
        icon: <GiCrown className="text-xl text-amber-400" />,
        descriptionTittle: 'All above + T3 T4 TSH, Heavy Metal Screening, Spirometry, Vision Test',
        description: 'Ideal for long-tenure workers or those in hazardous zones',
      },
    ],
  },
  {
    title: 'For Maintenance & Utility Staff',
    icon: <FaUsersCog className="text-xl text-black" />,
    issues: [
      {
        title: 'FitForce Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle : 'CBC, Vitamin D/B12, ECG, Audiometry, Blood Pressure',
        description: 'For electricians, plumbers, and fitter staff',
      },
      {
        title: 'PowerCheck Advanced',
        icon: <GiStrong className="text-xl text-amber-400" />,
        descriptionTittle : 'All above + X-Ray, Urine Test, LFT, Creatinine',
        description: 'For mid-senior utility technicians',
      },
      {
        title: 'VitalShield Elite',
        icon: <GiCrown className="text-xl text-amber-400" />,
        descriptionTittle: 'All above + MRI/CT Scan (if needed), Diabetes Markers, Stress ECG',
        description: 'For staff working in high-risk zones or over 45 years',
      },
    ],
  },
  {
    title: 'For Supervisors, Chemists & Admins',
    icon: <FaUserNurse className="text-xl text-black" />,
    issues: [
      {
        title: 'DeskCare Basic ',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, BP, BMI, Fasting Blood Sugar, Eye Test',
        description: 'For admin and desk workers',
      },
      {
        title: 'WorkWell Executive ',
        icon: <GiCook className="text-xl text-amber-400" />,
        descriptionTittle: 'All above + Lipid Profile, Liver & Thyroid Tests, ECG',
        description: 'For mid-level managers, chemists',
      },
      {
        title: "CommandCare Platinum",
        icon: <GiBurningBook className="text-xl text-amber-500" />,
        descriptionTittle: 'All above + Stress Test, Vitamin Panel, Lifestyle Screening',
        description: 'For senior management, lab heads, EHS leads',
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
        Precision Wellness: Tailored Health Packages for Every Role
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