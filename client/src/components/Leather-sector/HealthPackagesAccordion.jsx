import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FaBoxes,} from 'react-icons/fa';
import {
  GiHealthCapsule, GiStrong,
  GiHealthNormal,
  GiChemicalDrop,
  GiStandingPotion,
  GiShield,
  GiSewingMachine,
  GiWeightLiftingUp,
  GiChemicalTank,
} from 'react-icons/gi';
import { BiBody, BiCollapse, BiExpand } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
  title: 'Tannery Workers',
  icon: <GiChemicalTank className="text-xl text-black" />,
  issues: [
    {
      title: 'Basic Shield',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'BP, Sugar, BMI, Skin Check, Eye Check',
      description: 'Daily exposure-line workers',
    },
    {
      title: 'Chemical Exposure Scan',
      icon: <GiChemicalDrop className="text-xl text-amber-400" />,
      descriptionTittle: 'Above + Pulmonary Function Test, Urine Analysis, Liver & Kidney Panel',
      description: 'Drum operators, chemical handlers',
    },
    {
      title: 'Total Tannery Wellness',
      icon: <GiShield className="text-xl text-amber-400" />,
      descriptionTittle: 'Above + Chest X-ray, Audiometry, ECG, Dermatology consult',
      description: 'Long-term tannery staff & senior operators',
    },
  ],
},
  {
  title: 'Stitching Line Workers',
  icon: <GiSewingMachine className="text-xl text-black" />,
  issues: [
    {
      title: 'Vision & Vital Care',
      icon: <BiBody className="text-xl text-amber-400" />,
      descriptionTittle: 'BP, Sugar, Eye Check, Ergonomic Assessment',
      description: 'Tailors & machine operators',
    },
    {
      title: 'Focus & Flexibility',
      icon: <GiStandingPotion className="text-xl text-amber-400" />,
      descriptionTittle: 'Above + Posture Screening, Neck/Spine Mobility Test, Vitamin D Panel',
      description: 'Employees with 6+ months in stitching lines',
    },
    {
      title: 'Complete Sewing Wellness',
      icon: <GiHealthCapsule className="text-xl text-amber-400" />,
      descriptionTittle: 'Above + CBC, ECG, Physical Therapy Consult, Mental Health Screening',
      description: 'Lead stitchers, high-performing workers',
    },
  ],
},
  {
  title: 'Packing & Dispatch Staff',
  icon: <FaBoxes className="text-xl text-black" />,
  issues: [
    {
      title: 'Basic Fit Check',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'BP, Sugar, Hydration Check, Eye Test',
      description: 'Loading & packing assistants',
    },
    {
      title: 'Lift Smart Panel',
      icon: <GiStrong className="text-xl text-amber-400" />,
      descriptionTittle: 'Above + Back/Posture Exam, ECG, Vitamin Profile',
      description: 'Manual material handlers',
    },
    {
      title: 'Warehouse Wellness Max',
      icon: <GiWeightLiftingUp className="text-xl text-amber-400" />,
      descriptionTittle: 'Above + Kidney Function Test, X-ray Spine, Fitness & Injury Risk Assessment',
      description: 'Supervisors, full-shift handlers',
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
        Precision Health Checkups – Tailored for Every Leather Role
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