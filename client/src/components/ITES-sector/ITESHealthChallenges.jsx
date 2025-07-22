import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTools, FaRegBuilding, FaLaptopCode, FaServer, FaChair, FaProjectDiagram } from 'react-icons/fa';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { GiBrain, GiKneeling, GiHearingDisabled, GiMineWagon, GiLungs, GiFalling, GiBurningEye, GiHeartBeats, GiNecklaceDisplay, GiNightSleep, GiBackPain, GiAlarmClock, GiForkKnifeSpoon } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import tech from '../../assets/Ites-sector-img/develepor.jpeg';
import infra from '../../assets/Ites-sector-img/infra.jpeg';
import project from '../../assets/Ites-sector-img/project.jpeg';


const data = [
  {
    title: "Tech Developers & Programmers",
    image: tech, // replace with actual image path or import
    icon: <FaLaptopCode className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Digital Eye Strain",
        icon: <GiBurningEye />,
        description: "From prolonged screen time during coding and debugging.",
      },
      {
        title: "Repetitive Stress Injury",
        icon: <GiKneeling />,
        description: "Due to constant typing and mouse use without breaks.",
      },
      {
        title: "Sleep Disruption",
        icon: <GiNightSleep />,
        description: "Caused by late-night work, deadlines, or on-call duty.",
      },
    ],
  },
  {
    title: "IT Support & Infrastructure Staff",
    image: infra, // replace with actual image path or import
    icon: <FaServer className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Lower Back & Neck Pain",
        icon: <GiBackPain />,
        description: "Due to static desk work or awkward server room positions.",
      },
      {
        title: "Stress & Hypertension",
        icon: <GiHeartBeats />,
        description: "From real-time troubleshooting and critical system downtime.",
      },
      {
        title: "Sedentary Lifestyle Risks",
        icon: <FaChair />,
        description: "Extended sitting and lack of movement during long shifts.",
      },
    ],
  },
  {
    title: "Project Managers & HR/Operations",
    image: project, // replace with actual image path or import
    icon: <FaProjectDiagram className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Mental Fatigue & Burnout",
        icon: <GiBrain />,
        description: "Due to continuous multitasking and team coordination.",
      },
      {
        title: "Anxiety",
        icon: <GiAlarmClock />,
        description: "Resulting from tight client deadlines and people dependencies.",
      },
      {
        title: "Poor Nutrition Habits",
        icon: <GiForkKnifeSpoon />,
        description: "Skipping meals or eating irregularly due to hectic schedules.",
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

const ITESHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Who Powers Your Code - And What’s Slowing Them Down?
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

export default ITESHealthChallenges;