import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBoxes, FaUserTie } from 'react-icons/fa';
import {BiCollapse, BiExpand } from 'react-icons/bi';
import { GiChemicalDrop, GiChemicalTank, GiLungs, GiBodyHeight, GiSewingMachine, GiBurningEye,  GiKnifeThrust, GiBackPain, GiThermometerHot, GiWaterBottle, GiBrain, GiStethoscope, GiHeartPlus, GiFactory, GiSoundWaves, GiMuscleUp, GiOilRig } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import field from '../../assets/Petroleum-sector-img/field.jpeg';
import refinery from '../../assets/Petroleum-sector-img/refinery.jpeg';
import admin from '../../assets/Petroleum-sector-img/admin.jpeg';

const data = [
  {
  title: "Field & Rig Operators",
  image: field, // replace with your field image import
  icon: <GiOilRig className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Musculoskeletal Injuries",
      icon: <GiMuscleUp />,
      description: "Caused by repetitive strain, heavy lifting, and awkward working postures on rigs.",
    },
    {
      title: "Heat Stress & Fatigue",
      icon: <GiThermometerHot />,
      description: "Extended outdoor shifts in high-temperature zones cause exhaustion and dehydration.",
    },
    {
      title: "Noise-Induced Hearing Loss",
      icon: <GiSoundWaves />,
      description: "Constant exposure to drilling equipment and generators impacts auditory health.",
    },
  ],
},
{
  title: "Refinery & Plant Employees",
  image: refinery, // replace with your refinery image import
  icon: <GiFactory className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Respiratory Disorders",
      icon: <GiLungs />,
      description: "Inhalation of hydrocarbon vapors and chemical fumes compromises lung function.",
    },
    {
      title: "Skin Conditions",
      icon: <GiChemicalDrop />,
      description: "Direct or indirect exposure to solvents can cause irritation, burns, or dermatitis.",
    },
    {
      title: "Cardiovascular Strain",
      icon: <GiHeartPlus />,
      description: "Stressful, high-stakes roles with minimal physical movement increase heart health risks.",
    },
  ],
},
{
  title: "Corporate & Administrative Staff",
  image: admin, // replace with your admin image import
  icon: <FaUserTie className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Sedentary Lifestyle Diseases",
      icon: <GiStethoscope />,
      description: "Long sitting hours contribute to diabetes, hypertension, and metabolic issues.",
    },
    {
      title: "Mental Stress & Burnout",
      icon: <GiBrain className="text-xl" />,
      description: "Constant deadlines, decision pressure, and lack of movement lead to burnout.",
    },
    {
      title: "Eye Strain",
      icon: <GiBurningEye />,
      description: "Prolonged exposure to screens without breaks causes dryness, fatigue, and vision stress.",
    },
  ],
},

];

const AccordionItem = ({ title, icon, description, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex justify-between items-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-md text-left font-semibold transition-all"
      >
        <span className="flex items-center gap-2">
          <span className='text-2xl text-amber-500'>{icon}</span> {title}
        </span>
        <span>{isOpen ? <BiCollapse /> : <BiExpand />}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-white px-4 py-3 text-gray-700 font-semibold text-sm shadow">
              {description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PetroleumHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
       Every Role. Every Risk. We’re There for Your Team.
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((group, groupIdx) => {
          const [openIndex, setOpenIndex] = useState(null);

          return (
            <div
              key={groupIdx}
              className="bg-white rounded-2xl shadow p-4"
              data-aos="zoom-in-up"
              data-aos-delay={groupIdx * 100}
            >
              <img
                src={group.image}
                alt={group.title}
                className="rounded-lg mb-4 w-full h-92 object-cover"
              />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                {group.icon} {group.title}
              </h3>

              {group.issues.map((issue, idx) => (
                <AccordionItem
                  key={idx}
                  title={issue.title}
                  icon={issue.icon}
                  description={issue.description}
                  index={idx}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PetroleumHealthChallenges;