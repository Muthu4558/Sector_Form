import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import {
  GiTalk,
  GiSpinalCoil,
  GiChemicalDrop,
  GiBrain,
  GiBandageRoll,
  GiMechanicGarage
} from 'react-icons/gi';

import {
  MdCastForEducation,
  MdPsychology,
  MdOutlineMonitorHeart,
  MdOutlineAdminPanelSettings,
  MdEventSeat,
  MdVisibility,
  MdDevices
} from 'react-icons/md';

import { FaTemperatureHigh, FaWeight } from 'react-icons/fa';

import teachingStaff from '../../assets/Edu-sector-img/teaching.jpeg';
import adminStaff from '../../assets/Edu-sector-img/management.jpeg';
import techTeams from '../../assets/Edu-sector-img/tech.jpeg';
import groundStaff from '../../assets/Edu-sector-img/ground.jpeg';

const data = [
  {
  title: "Teaching & Academic Staff",
  image: teachingStaff, // replace with actual image asset
  icon: <MdCastForEducation className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Vocal Strain",
      icon: <GiTalk />, // Voice-related icon
      description: "Due to long hours of speaking in classrooms or lectures.",
    },
    {
      title: "Chronic Stress & Burnout",
      icon: <MdPsychology />, // Stress icon
      description: "From academic pressure, multitasking, and emotional labor.",
    },
    {
      title: "Musculoskeletal Pain",
      icon: <GiSpinalCoil />, // Spine/ergonomic icon
      description: "From prolonged standing, poor seating, or lack of movement.",
    },
  ],
},
{
  title: "Administrative & Management Staff",
  image: adminStaff, // replace with actual image asset
  icon: <MdOutlineAdminPanelSettings className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Sedentary Lifestyle Diseases",
      icon: <MdEventSeat />, // Sitting icon
      description: "Due to extended desk hours and low physical activity.",
    },
    {
      title: "Eye Strain & Headaches",
      icon: <MdVisibility />, // Eye icon
      description: "From screen exposure and paperwork fatigue.",
    },
    {
      title: "Hypertension",
      icon: <MdOutlineMonitorHeart />, // Heart/health icon
      description: "From high responsibility roles and decision pressure.",
    },
  ],
},
{
  title: "Tech & Product Teams",
  image: techTeams, // replace with actual image asset
  icon: <MdDevices className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Postural Issues & Neck Pain",
      icon: <GiSpinalCoil />, // Ergonomic/spine icon
      description: "From poor workstation ergonomics and long hours at desks.",
    },
    {
      title: "Mental Fatigue & Insomnia",
      icon: <GiBrain />, // Brain icon
      description: "From long screen exposure and ongoing cognitive load.",
    },
    {
      title: "Weight Gain & Lifestyle Disorders",
      icon: <FaWeight /> , // Weight icon (ensure you import this)
      description: "Due to sedentary routines and irregular meals.",
    },
  ],
},
{
  title: "Support & Ground Staff",
  image: groundStaff, // replace with actual image asset
  icon: <GiMechanicGarage className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Exposure-Related Illnesses",
      icon: <GiChemicalDrop />, // Chemical icon
      description: "From handling cleaning agents, dust, or waste material.",
    },
    {
      title: "Dehydration or Fatigue",
      icon: <FaTemperatureHigh />, // Heat/fatigue icon
      description: "Due to physically demanding roles often in hot environments.",
    },
    {
      title: "Minor Injuries & First Aid Needs",
      icon: <GiBandageRoll />, // First aid icon
      description: "From slips, tool usage, or minor cuts during work.",
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

const EduHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Wellness for Those Who Shape the Future
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

export default EduHealthChallenges;