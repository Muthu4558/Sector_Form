import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBoxes } from 'react-icons/fa';
import {BiCollapse, BiExpand } from 'react-icons/bi';
import { GiChemicalDrop, GiChemicalTank, GiLungs, GiBodyHeight, GiSewingMachine, GiBurningEye,  GiKnifeThrust, GiBackPain, GiThermometerHot, GiWaterBottle } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import tannery from '../../assets/Leather-sector-img/tannery.jpeg';
import stitching from '../../assets/Leather-sector-img/stitching.jpeg';
import packing from '../../assets/Leather-sector-img/packing.jpeg';

const data = [
  {
  title: "Tannery Workers",
  image: tannery, // replace with your tannery image import
  icon: <GiChemicalTank className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Skin Allergies & Dermatitis",
      icon: <GiChemicalDrop />,
      description: "Constant exposure to lime, chromium, and tanning agents can lead to rashes and chronic skin irritation.",
    },
    {
      title: "Respiratory Irritation",
      icon: <GiLungs />,
      description: "Inhalation of chemical vapors during tanning processes can affect lung health over time.",
    },
    {
      title: "Joint & Back Pain",
      icon: <GiBodyHeight />,
      description: "Long hours of standing or operating heavy machinery lead to chronic joint and spinal stress.",
    },
  ],
},
  {
  title: "Stitching Line Workers",
  image: stitching, // replace with your stitching image import
  icon: <GiSewingMachine className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Eye Strain & Vision Issues",
      icon: <GiBurningEye />,
      description: "Continuous close-up stitching under poor lighting conditions affects visual health.",
    },
    {
      title: "Postural Disorders",
      icon: <GiBodyHeight />,
      description: "Improper seating and extended hours without breaks cause chronic neck and back strain.",
    },
    {
      title: "Needlestick Injuries",
      icon: <GiKnifeThrust />,
      description: "Fast-paced repetitive tasks increase the risk of minor but frequent hand injuries.",
    },
  ],
},
  {
  title: "Packing & Dispatch Staff",
  image: packing, // replace with your packing image import
  icon: <FaBoxes className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Lower Back Injuries",
      icon: <GiBackPain />,
      description: "Frequent lifting, twisting, and bending without proper technique leads to back pain.",
    },
    {
      title: "Heat Exhaustion",
      icon: <GiThermometerHot />,
      description: "Poorly ventilated warehouses increase the risk of overheating and reduced focus.",
    },
    {
      title: "Fatigue & Dehydration",
      icon: <GiWaterBottle />,
      description: "Physically demanding tasks with minimal breaks lead to exhaustion and reduced hydration.",
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

const LeatherHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
       From Stitching to Shipping—Wellness Where It Hurts Most
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

export default LeatherHealthChallenges;