import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {FaUsersCog,FaUserShield,FaRegBuilding,FaUserCheck,FaWrench,FaLaptop, FaTools,
} from 'react-icons/fa';
import {GiHealthIncrease,GiMineWagon,GiElectric,GiMechanicalArm,GiDiamondHard,GiMiner,} 

from 'react-icons/gi';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    title: 'Underground & Surface Miners',
    icon: <GiMineWagon className="text-xl text-black" />,
    issues: [
      {
        title: 'Daily wage & contract miners',
        icon: <GiMiner className="text-xl text-amber-400" />,
        descriptionTittle: 'Basic MineFit',
        description: 'BP, Blood Sugar, BMI, Vision Test',
      },
      {
        title: 'Regular underground workers',
        icon: <GiDiamondHard className="text-xl text-amber-400" />,
        descriptionTittle: 'SafeLungs+',
        description: 'Chest X-ray, Spirometry, Audiometry, ECG',
      },
      {
        title: 'Senior operators & high-risk zones',
        icon: <GiHealthIncrease className="text-xl text-amber-400" />,
        descriptionTittle: 'DeepHealth Max',
        description: 'Full CBC, Liver/Kidney Panel, Vitamin D/B12, Stress Test',
      },
    ],
  },
  {
    title: 'Maintenance & Technical Staff',
    icon: <FaTools className="text-xl text-black" />,
    issues: [
      {
        title: 'Electricians, mechanics',
        icon: <GiElectric className="text-xl text-amber-400" />,
        descriptionTittle: 'TechWell Basic',
        description: 'BP, Sugar, Vision, Grip Strength Test',
      },
      {
        title: 'Shift supervisors, fitters',
        icon: <FaWrench className="text-xl text-amber-400" />,
        descriptionTittle: 'WorkFit Advanced',
        description: 'CBC, ECG, Eye Exam, Musculoskeletal Assessment',
      },
      {
        title: 'Multi-role technical leads',
        icon: <FaLaptop className="text-xl text-amber-400" />,
        descriptionTittle: 'CompleteCare Pro',
        description: 'Stress ECG, Blood Panel, Uric Acid, Ortho Consult',
      },
    ],
  },
  {
    title: 'Admin & Site Management',
    icon: <FaRegBuilding className="text-xl text-black" />,
    issues: [
      {
        title: 'Office/clerical staff',
        icon: <FaUsersCog className="text-xl text-amber-400" />,
        descriptionTittle: 'DeskCare Lite',
        description: 'BP, Sugar, Eye Check, BMI',
      },
      {
        title: 'Mid-level managers',
        icon: <FaUserCheck className="text-xl text-amber-400" />,
        descriptionTittle: 'Executive Shield',
        description: 'ECG, Lipid Profile, Liver Function, HBA1C',
      },
      {
        title: 'Directors & HODs',
        icon: <FaUserShield className="text-xl text-amber-500" />,
        descriptionTittle: 'Leadership Platinum',
        description: 'TMT, Thyroid Panel, Ultrasound, Lifestyle Risk Profiling',
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
        Drill Deep into Health – Tailored Packages for Every Worker
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