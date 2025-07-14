import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie, FaUsersCog, FaUserNurse } from 'react-icons/fa';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { MdFlight, MdSupportAgent } from 'react-icons/md';
import { GiNightSleep, GiBrain, GiBackPain, GiKneeling, GiHearingDisabled, GiHeatHaze, GiOfficeChair, GiEyeball } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import FlightCrew from '../../assets/AirlineSector-img/flightCrew.jpeg';
import GroundStaffs from '../../assets/AirlineSector-img/GroundStaff.jpeg';
import Corporate from '../../assets/AirlineSector-img/Corporate.jpeg';


const data = [
  {
    title: "Flight Crew (Pilots & Cabin Crew)",
    image: FlightCrew,
    icon: <MdFlight className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Fatigue & Sleep Disorders",
        icon: <GiNightSleep />,
        description: "Caused by irregular hours, jet lag, and long-haul schedules.",
      },
      {
        title: "Stress & Anxiety",
        icon: <GiBrain />,
        description: "Due to high passenger interaction, safety responsibilities, and tight timelines.",
      },
      {
        title: "Back & Neck Pain",
        icon: <GiBackPain />,
        description: "Prolonged sitting or standing, poor ergonomics during flights.",
      },
    ],
  },
  {
    title: "Ground Operations & Technicians",
    image: GroundStaffs,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders",
        icon: <GiKneeling />,
        description: "Repetitive heavy lifting, kneeling, and bending.",
      },
      {
        title: "Hearing Loss",
        icon: <GiHearingDisabled />,
        description: "Continuous exposure to aircraft noise and machinery.",
      },
      {
        title: "Heat Stress & Dehydration",
        icon: <GiHeatHaze />,
        description: "Outdoor work in high temperatures on tarmac.",
      },
    ],
  },
  {
    title: "Corporate & Support Staff",
    image: Corporate,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sedentary Lifestyle Issues",
        icon: <GiOfficeChair />,
        description: "Desk-bound work leading to obesity, diabetes.",
      },
      {
        title: "Eye Strain & Headaches",
        icon: <GiEyeball />,
        description: "Excessive screen time, poor lighting.",
      },
      {
        title: "Mental Burnout",
        icon: <GiBrain />,
        description: "Constant coordination across teams and shift hours.",
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

const HotelHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        From Runway to Ramp: Who Needs Care and Why
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

export default HotelHealthChallenges;