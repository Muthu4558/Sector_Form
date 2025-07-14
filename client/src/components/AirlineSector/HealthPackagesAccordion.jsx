import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUserTie, FaUsersCog, FaUserNurse,
  FaPeopleCarry,
  FaUserShield,
  FaUserPlus,
} from 'react-icons/fa';
import {
  GiPlantRoots, GiHealthCapsule, GiCrown, GiStrong,
  GiBurningBook, GiCook, GiHealthNormal,
  GiHeartPlus,
} from 'react-icons/gi';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdAirportShuttle, MdFlightClass, MdFlightLand, MdLocalAirport } from 'react-icons/md';

const data = [
  {
    title: 'Flight Crew',
    icon: <MdLocalAirport className="text-xl text-black" />,
    issues: [
      {
        title: 'New joiners & cabin crew onboarding',
        icon: <MdFlightClass className="text-xl text-amber-400" />,
        descriptionTittle: 'Essential Flight Fit Package',
        description: 'CBC, ECG, Urine Routine, BMI, Blood Pressure',
      },
      {
        title: 'Mid-career pilots & crew',
        icon: <GiHealthCapsule className="text-xl text-amber-400" />,
        descriptionTittle: 'AeroShield Package',
        description: 'All Essential + Vitamin D, Eye Test, Liver Function Test, Audiometry, Fatigue Index',
      },
      {
        title: 'Senior pilots, frequent flyers & international route crew',
        icon: <MdFlightLand className="text-xl text-amber-400" />,
        descriptionTittle: 'Aviator Elite Package',
        description: 'All above + Stress Test (TMT), Sleep Study Screening, ECG, ENT Assessment',
      },
    ],
  },
  {
    title: 'Ground Operations',
    icon: <FaPeopleCarry className="text-xl text-black" />,
    issues: [
      {
        title: 'Entry-level & baggage handlers',
        icon: <GiPlantRoots className="text-xl text-amber-400" />,
        descriptionTittle: 'GroundSafe Package',
        description: 'CBC, Urine Test, Blood Pressure, Vision & Hearing Screening',
      },
      {
        title: 'Line technicians & experienced workers',
        icon: <GiHealthCapsule className="text-xl text-amber-400" />,
        descriptionTittle: 'RunwayWell Package',
        description: 'All above + X-ray, Liver Profile, Lipid Profile, Fitness Certificate',
      },
      {
        title: 'Senior engineers & frequent field workers',
        icon: <FaUserPlus className="text-xl text-amber-400" />,
        descriptionTittle: 'RampPro+ Package',
        description: 'All above + Musculoskeletal Assessment, Spirometry, Audiometry, Vitamin B12',
      },
    ],
  },
  {
    title: 'Corporate Staffs',
    icon: <FaUserTie className="text-xl text-black" />,
    issues: [
      {
        title: 'Entry-level office employees',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'DeskWell Basic Package',
        description: 'BMI, Blood Sugar, CBC, Blood Pressure, Eye Check-up',
      },
      {
        title: 'Mid-management',
        icon: <FaUserShield className="text-xl text-amber-400" />,
        descriptionTittle: 'OfficeShield',
        description: 'All above + Thyroid Panel, Liver Function, ECG, Vitamin D',
      },
      {
        title: 'Top executives & shift managers',
        icon: <GiHeartPlus className="text-xl text-amber-500" />,
        descriptionTittle: 'ExecElite',
        description: 'All above + Cardiac Risk Profile, HBA1C, Stress Screening, Digital Eye Strain Test',
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
        Three-Tiered Health Check-up Packages Per Role Category
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