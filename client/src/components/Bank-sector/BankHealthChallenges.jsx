import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBoxes, FaBusinessTime } from 'react-icons/fa';
import {BiBody, BiCollapse, BiExpand } from 'react-icons/bi';
import { GiChemicalDrop, GiChemicalTank, GiLungs, GiBodyHeight, GiSewingMachine, GiBurningEye,  GiKnifeThrust, GiBackPain, GiThermometerHot, GiWaterBottle, GiBrain, GiBank, GiMuscleUp, GiHeartBeats } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import branch from '../../assets/Bank-sector-img/branch.jpeg';
import backend from '../../assets/Bank-sector-img/Backend.jpeg';
import marketing from '../../assets/Bank-sector-img/marketing.jpeg';
import { MdOutlineWork } from 'react-icons/md';

const data = [
  {
  title: "Branch-Level Operations & Frontline Staff",
  image: branch, // replace with actual image import
  icon: <GiBank className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Eye Strain",
      icon: <GiBurningEye />,
      description: "Continuous screen usage for transactions and reports can lead to digital eye strain and fatigue.",
    },
    {
      title: "Varicose Veins / Back Pain",
      icon: <GiBackPain />,
      description: "Prolonged sitting and static postures without breaks contribute to spinal discomfort and poor circulation.",
    },
    {
      title: "Mental Stress",
      icon: <GiBrain />,
      description: "High customer interaction and sales pressure create stress and emotional fatigue over time.",
    },
  ],
},

  {
  title: "Corporate Office & Back-End Teams",
  image: backend, // replace with actual image import
  icon: <MdOutlineWork className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Sedentary Lifestyle Diseases",
      icon: <BiBody />,
      description: "Extended hours at desks with little movement raise the risk of diabetes, obesity, and related issues.",
    },
    {
      title: "Anxiety & Burnout",
      icon: <GiBrain />,
      description: "Tight deadlines and compliance demands often lead to chronic stress and emotional burnout.",
    },
    {
      title: "Weight Gain / Metabolic Issues",
      icon: <GiBodyHeight />,
      description: "Irregular routines and poor dietary habits contribute to weight gain and metabolic imbalances.",
    },
  ],
},
  {
  title: "Field Force & Marketing Executives",
  image: marketing, // replace with actual image import
  icon: <FaBusinessTime className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Musculoskeletal Strain",
      icon: <GiMuscleUp />,
      description: "Frequent travel and carrying promotional materials put stress on joints and muscles.",
    },
    {
      title: "Hypertension & Cardiac Risk",
      icon: <GiHeartBeats />,
      description: "Sales targets, travel fatigue, and erratic schedules can elevate blood pressure and cardiac strain.",
    },
    {
      title: "Sun Exposure & Fatigue",
      icon: <GiThermometerHot />,
      description: "Working outdoors in extreme weather leads to exhaustion, dehydration, and reduced performance.",
    },
  ],
}
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

const BankHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
       Stress in Suits: The Hidden Cost of Finance
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

export default BankHealthChallenges;