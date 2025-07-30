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
    title: 'For Engineers & Designers',
    icon: <FaUserTie className="text-xl text-black" />,
    issues: [
      {
        title: 'VisionPro ',
        icon: <GiPlantRoots className="text-xl text-amber-400" />,
        descriptionTittle: 'Eye exam, screen fatigue test, neurological assessment',
        description: 'All CAD engineers & visual design staff',
      },
      {
        title: 'PostureCare',
        icon: <GiHealthCapsule className="text-xl text-amber-400" />,
        descriptionTittle: 'Spine X-ray, neck/shoulder ultrasound, physio eval',
        description: 'Long-hour seated workers',
      },
      {
        title: 'BrainBoost',
        icon: <GiCrown className="text-xl text-amber-400" />,
        descriptionTittle: 'Vitamin B12/D3, stress hormone panel, sleep cycle check',
        description: 'Project-critical design teams',
      },
      {
        title: 'Core360',
        icon: <GiCrown className="text-xl text-amber-400" />,
        descriptionTittle: 'Complete wellness panel + ECG + mental health screening',
        description: 'Mid to senior engineering leaders',
      },
    ],
  },
  {
    title: 'For Manufacturing Workers',
    icon: <FaUsersCog className="text-xl text-black" />,
    issues: [
      {
        title: 'AirGuard',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle : 'Pulmonary function test, CBC, heavy metals panel  ',
        description: 'Workers in fumes/dust-prone areas',
      },
      {
        title: 'SoundSafe',
        icon: <GiStrong className="text-xl text-amber-400" />,
        descriptionTittle : 'Audiometry, ENT check, noise sensitivity test ',
        description: 'Factory floor & testing units',
      },
      {
        title: 'BodyFit',
        icon: <GiCrown className="text-xl text-amber-400" />,
        descriptionTittle: 'Joint flexibility, ergonomic scan, physiotherapy review',
        description: 'Assembly & manual handling teams',
      },
      {
        title: 'VitaCheck Max',
        icon: <GiCrown className="text-xl text-amber-400" />,
        descriptionTittle: ' Annual master health check + preventive care consult',
        description: 'Senior plant technicians',
      },
    ],
  },
  {
    title: 'For Field Operators',
    icon: <FaUserNurse className="text-xl text-black" />,
    issues: [
      {
        title: 'ShiftShield ',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: ' Thyroid panel, cortisol level, fatigue index',
        description: 'Maintenance teams under rotating shifts',
      },
      {
        title: 'MoveStrong',
        icon: <GiCook className="text-xl text-amber-400" />,
        descriptionTittle: 'Ortho screening, gait analysis, vitamin D3 ',
        description: ' Field teams in high-motion jobs',
      },
      {
        title: "QuickRecover",
        icon: <GiBurningBook className="text-xl text-amber-500" />,
        descriptionTittle: ' Immunity markers, inflammatory panel, lifestyle coaching ',
        description: 'Travel-heavy tech support roles',
      },
      {
        title: "PowerPilot",
        icon: <GiBurningBook className="text-xl text-amber-500" />,
        descriptionTittle: ' Master health + sleep lab + cardiac fitness',
        description: ' Long-haul technical leaders',
      },
    ],
  },
   {
    title: 'For Admin & Strategic Staff',
    icon: <FaUserNurse className="text-xl text-black" />,
    issues: [
      {
        title: 'DeskDefend',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Diabetes, cholesterol, ECG, liver profile ',
        description: 'Desk-based senior staff',
      },
      {
        title: 'MindMatters ',
        icon: <GiCook className="text-xl text-amber-400" />,
        descriptionTittle: 'Mental health assessment, burnout scale, counseling ',
        description: 'HR & compliance officers',
      },
      {
        title: "HeartWise",
        icon: <GiBurningBook className="text-xl text-amber-500" />,
        descriptionTittle: 'Cardiac stress test, lipid profile, ECG',
        description: 'Executives & top command roles',
      },
      {
        title: "LeadershipShield",
        icon: <GiBurningBook className="text-xl text-amber-500" />,
        descriptionTittle: 'Full executive health package + fitness plan',
        description: 'CXOs and strategic heads',
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
        Health Check-ups Engineered for Every Duty Level
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