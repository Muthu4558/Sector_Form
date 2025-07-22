import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FaBusinessTime,} from 'react-icons/fa';
import {
  GiHealthNormal,
  GiShield,
  GiHealthIncrease,
  GiStethoscope,
  GiBank,
  GiComputerFan,
  GiBrain,
  GiStarMedal,
  GiRunningNinja,
  GiPathDistance,
} from 'react-icons/gi';
import {BiCollapse, BiExpand } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineWork } from 'react-icons/md';

const data = [
  {
  title: 'Branch-Level Operations',
  icon: <GiBank className="text-xl text-black" />,
  issues: [
    {
      title: 'Smart Shield',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Core parameters: BP, BMI, CBC, RBS, Eye Check',
      description: 'Cashiers, Tellers, Sales Reps',
    },
    {
      title: 'DeskCare Plus',
      icon: <GiStethoscope className="text-xl text-amber-400" />,
      descriptionTittle: 'Core parameters: ECG, LFT, Lipid Profile, Vitamin D, HbA1c',
      description: 'Senior Front Office',
    },
    {
      title: 'Prime Wellness Pro',
      icon: <GiHealthIncrease className="text-xl text-amber-400" />,
      descriptionTittle: 'Core parameters: TMT, Kidney Profile, Liver Function, Stress ECG, Eye OCT',
      description: 'Branch Managers & Team Leads',
    },
  ],
},
  {
  title: 'Corporate & IT Staff',
  icon: <MdOutlineWork className="text-xl text-black" />,
  issues: [
    {
      title: 'ScreenSafe Basic',
      icon: <GiComputerFan className="text-xl text-amber-400" />,
      descriptionTittle: 'Core parameters: CBC, FBS, LFT, Eye Check, ECG',
      description: 'Entry-Level Analysts',
    },
    {
      title: 'Stress Buster Elite',
      icon: <GiBrain className="text-xl text-amber-400" />,
      descriptionTittle: 'Core parameters: TSH, Lipid, HbA1c, Vitamin B12/D, Liver Panel, Mental Wellness Survey',
      description: 'Mid-level Management',
    },
    {
      title: 'ExecCare Premium',
      icon: <GiStarMedal className="text-xl text-amber-400" />,
      descriptionTittle: 'Core parameters: TMT, Cardiac Markers, Kidney/Liver Panel, Thyroid, Mental Health Eval',
      description: 'CXOs, Senior Managers',
    },
  ],
},
  {
  title: 'Field & Marketing Force',
  icon: <FaBusinessTime className="text-xl text-black" />,
  issues: [
    {
      title: 'FieldFit Starter',
      icon: <GiRunningNinja className="text-xl text-amber-400" />,
      descriptionTittle: 'Core parameters: BP, CBC, Vitamin D, Eye Test, Random Sugar',
      description: 'Sales Trainees, Interns',
    },
    {
      title: 'RoadSafe Plus',
      icon: <GiPathDistance className="text-xl text-amber-400" />,
      descriptionTittle: 'Core parameters: Lipid Profile, HbA1c, ECG, Vision, Orthopedic Screening',
      description: 'Executives & Field Staff',
    },
    {
      title: 'TotalShield Max',
      icon: <GiShield className="text-xl text-amber-400" />,
      descriptionTittle: 'Core parameters: TMT, Cardiac Risk Markers, Liver/Kidney, X-Ray, Fatigue Index',
      description: 'Regional Managers, Seniors',
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
        Tiered Health Check-ups Built for the Banking Backbone
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