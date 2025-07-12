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
    title: 'Frontline Workers',
    icon: <FaUserTie className="text-xl text-black" />,
    issues: [
      {
        title: 'Basic Vital Shield',
        icon: <GiPlantRoots className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, BP, Sugar (RBS), BMI, Eye Check',
        description: 'Ideal for: New joiners, daily wage workers, seasonal staff',
      },
      {
        title: 'Core Health Pack',
        icon: <GiHealthCapsule className="text-xl text-amber-400" />,
        descriptionTittle: 'LFT, Urine Routine, ECG, PFT, Hearing Test, Dermatology Screening',
        description: 'Ideal for: Machine operators, sanitation staff, cold storage handlers',
      },
      {
        title: 'Fit & Safe Pack',
        icon: <GiCrown className="text-xl text-amber-400" />,
        descriptionTittle: 'All tests above + Chest X-ray, Skin Allergy Panel, Nutrition Evaluation',
        description: 'Ideal for: Long-term employees, production supervisors',
      },
    ],
  },
  {
    title: 'Supervisors & Admin Staff',
    icon: <FaUsersCog className="text-xl text-black" />,
    issues: [
      {
        title: 'Admin Basics',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle : 'CBC, ECG, Eye Check, BMI, Vitamin D',
        description: 'Ideal for: New admin/support staff',
      },
      {
        title: 'Work-Life Wellness Pack',
        icon: <GiStrong className="text-xl text-amber-400" />,
        descriptionTittle : 'Lipid Profile, LFT, TSH, ECG, Urine Analysis, Stress Score Assessment',
        description: 'Ideal for: Shift leads, floor supervisors',
      },
      {
        title: 'Performance Pro Pack',
        icon: <GiCrown className="text-xl text-amber-400" />,
        descriptionTittle: 'Includes all above + Liver, Kidney, Cardiac Risk Markers, Mental Wellness Screening',
        description: 'Ideal for: QA heads, documentation managers',
      },
    ],
  },
  {
    title: 'Management & Executives',
    icon: <FaUserNurse className="text-xl text-black" />,
    issues: [
      {
        title: 'Executive Snapshot',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'CBC, Lipid Profile, Sugar, BMI, BP',
        description: 'Ideal for: New joinees at executive level',
      },
      {
        title: 'Leadership Wellness Pack',
        icon: <GiCook className="text-xl text-amber-400" />,
        descriptionTittle: 'Master Health Check (Liver, Kidney, Diabetes, ECG, Eye, Hearing), Stress Scan',
        description: 'Ideal for: Mid-level managers',
      },
      {
        title: "3. Director's 360 Health Suite",
        icon: <GiBurningBook className="text-xl text-amber-500" />,
        descriptionTittle: 'Full Body Check + Cardiac Echo, Thyroid, Vitamin Panels, Oncological Markers, Specialist Consults (Cardio, Ortho)',
        description: 'Ideal for: Senior leadership, directors',
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