import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, } from 'react-icons/fa';
import {
  GiStrong,
  GiHealthNormal,
  GiChemicalDrop,
  GiStethoscope,
  GiBrain,
  GiBiohazard,
  GiTestTubes,
  GiFactory,
  GiHazmatSuit,
  GiOilDrum,
} from 'react-icons/gi';
import { BiBody, BiCollapse, BiExpand } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    title: 'Rig & Field Operators',
    icon: <GiOilDrum className="text-xl text-black" />,
    issues: [
      {
        title: 'Basic Rig Fit',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, BMI, ECG, Vision Test, Audiometry',
        description: 'Core tests included :  Daily rig workers, new recruits',
      },
      {
        title: 'Heavy Duty Health',
        icon: <GiStrong className="text-xl text-amber-400" />,
        descriptionTittle: 'Liver & Kidney Function, Vitamin D, Musculoskeletal Screening',
        description: 'Core tests included :  Mid-level operators, shift leads',
      },
      {
        title: 'Advanced Safety+',
        icon: <GiHazmatSuit className="text-xl text-amber-400" />,
        descriptionTittle: 'Cardiac Risk Profile, Spirometry, X-ray Chest, Heavy Metal Exposure Screening',
        description: 'Core tests included :  Long-tenure field staff, HSE leads',
      },
    ],
  },
  {
    title: 'Refinery & Plant Staff',
    icon: <GiFactory className="text-xl text-black" />,
    issues: [
      {
        title: 'Plant Essential',
        icon: <GiTestTubes className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, Urine Routine, Blood Sugar, Blood Pressure',
        description: 'Core tests included :  Entry-level technicians',
      },
      {
        title: 'Process Pro+',
        icon: <GiChemicalDrop className="text-xl text-amber-400" />,
        descriptionTittle: 'Lipid Profile, Chest X-ray, Lung Function Test, Electrolyte Panel',
        description: 'Core tests included :  Operations engineers, shift staff',
      },
      {
        title: 'High-Risk Worker',
        icon: <GiBiohazard className="text-xl text-amber-400" />,
        descriptionTittle: 'Thyroid, Liver/Kidney Function, Cardiac Enzymes, Toxic Gas Exposure Screening',
        description: 'Core tests included :  Safety officers, supervisors',
      },
    ],
  },
  {
    title: 'Corporate & Admin Staff',
    icon: <FaBriefcase className="text-xl text-black" />,
    issues: [
      {
        title: 'Smart Desk Health',
        icon: <BiBody className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, BMI, BP, Blood Sugar',
        description: 'Core tests included :  All desk employees',
      },
      {
        title: 'Stress Shield',
        icon: <GiBrain className="text-xl text-amber-400" />,
        descriptionTittle: 'ECG, Thyroid Panel, Vitamin B12 & D, Mental Wellness Screening',
        description: 'Core tests included :  Mid-management staff',
      },
      {
        title: 'Executive 360°',
        icon: <GiStethoscope className="text-xl text-amber-400" />,
        descriptionTittle: 'Full Body Check-up, Cardiac Profile, Liver/Kidney Panel, Eye & Hearing Exam',
        description: 'Core tests included :  Senior management, HR, directors',
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
        Precision Health Check-ups – Tailored to the Demands of Petroleum Roles
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