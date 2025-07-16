import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie, FaUsersCog, FaUserNurse, FaUserMd, FaCog, FaHardHat } from 'react-icons/fa';
import { MdHealthAndSafety, MdOutlineLocalHospital, MdAccessTime } from 'react-icons/md';
import { BiBrain, BiBody, BiDrink, BiCollapse, BiExpand } from 'react-icons/bi';
import { GiStandingPotion, GiChemicalDrop, GiVirus, GiGloves } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import lab from '../../assets/Pharma-sector-img/LabTechnicians.jpeg';
import manufacture from '../../assets/Pharma-sector-img/Manufacturing.jpeg';
import corporate from '../../assets/Pharma-sector-img/Corporate.jpeg';

const data = [
  {
    title: "Lab Technicians & Quality Control Teams",
    image: lab,
    icon: <FaUserMd className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Chemical exposure",
        icon: <MdHealthAndSafety />,
        description: "Constant handling of solvents/reagents leads to skin, respiratory, or liver issues.",
      },
      {
        title: "Visual & posture strain",
        icon: <MdOutlineLocalHospital />,
        description: "Prolonged microscope and computer use impacts vision and spine.",
      },
      {
        title: "Stress & fatigue",
        icon: <MdAccessTime />,
        description: "Precision pressure in sterile zones causes burnout.",
      },
    ],
  },
  {
    title: "Manufacturing & Production Floor Workers",
    image: manufacture,
    icon: <FaCog className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal issues",
        icon: <BiBrain />,
        description: "Long hours of standing or repetitive tasks strain back, wrists, and knees.",
      },
      {
        title: "Noise-induced stress",
        icon: <BiBody />,
        description: "High decibel machinery leads to fatigue and potential hearing damage.",
      },
      {
        title: "Dust/chemical exposure",
        icon: <BiDrink />,
        description: "Especially during powder-based production or packaging.",
      },
    ],
  },
  {
    title: "Corporate, Sales & Regulatory Executives",
    image: corporate,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Mental Stress & Burnout",
        icon: <GiVirus />,
        description: "Due to audit pressure, targets, and constant deadlines.",
      },
      {
        title: "Travel fatigue",
        icon: <GiStandingPotion />,
        description: "Long commutes and frequent travel reduce immunity and increase fatigue.",
      },
      {
        title: "Lifestyle disorders",
        icon: <GiChemicalDrop />,
        description: "Desk jobs contribute to diabetes, hypertension, and obesity.",
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

const PharmaHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        The People Behind the Pill – And Their Hidden Health Risks
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

export default PharmaHealthChallenges;