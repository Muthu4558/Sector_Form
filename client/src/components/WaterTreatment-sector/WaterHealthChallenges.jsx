import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { MdLocalHospital, MdHearing, MdPsychology, MdWaterDrop, MdOutlineMonitorHeart, MdWork, MdVisibility, MdAdminPanelSettings, MdCleaningServices } from "react-icons/md";
import { FaHandsWash, FaTemperatureHigh, FaEye } from "react-icons/fa";
import { GiChemicalDrop, GiMuscleUp, GiBackPain, GiGasMask, GiBurningEye, GiFactory, GiGears } from "react-icons/gi";


import plant from '../../assets/Water-sector-img/plant.jpeg';
import maintenance from '../../assets/Water-sector-img/maintenance.jpeg';
import admin from '../../assets/Water-sector-img/admin.jpeg';
import sanitation from '../../assets/Water-sector-img/sanitation.jpeg';

const data = [
   {
    title: "Plant Operators & Field Technicians",
    image: plant, // replace with actual image asset
    icon: <GiFactory className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Respiratory Issues",
        icon: <MdWaterDrop />,
        description: "Exposure to chemicals like chlorine and sludge gases.",
      },
      {
        title: "Musculoskeletal Pain",
        icon: <GiMuscleUp />,
        description: "Long hours of manual work in harsh environments.",
      },
      {
        title: "Skin Infections",
        icon: <FaHandsWash />,
        description: "Constant contact with untreated water and waste materials.",
      },
    ],
  },
  {
    title: "Maintenance & Engineering Staff",
    image: maintenance, // replace with actual image asset
    icon: <GiGears className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hearing Loss",
        icon: <MdHearing />,
        description: "Constant exposure to noisy pumps and mechanical setups.",
      },
      {
        title: "Heat Stress",
        icon: <FaTemperatureHigh />,
        description: "Working in enclosed spaces with boilers or under the sun.",
      },
      {
        title: "Eye Strain / Injury",
        icon: <FaEye />,
        description: "Welding, machinery work, and chemical exposure.",
      },
    ],
  },
  {
    title: "Administrative & Compliance Staff",
    image: admin, // replace with actual image asset
    icon: <MdAdminPanelSettings className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sedentary Lifestyle",
        icon: <GiBackPain />,
        description: "Back pain, obesity, and posture issues from long sitting.",
      },
      {
        title: "Mental Stress",
        icon: <MdPsychology />,
        description: "Due to compliance pressures and strict deadlines.",
      },
      {
        title: "Vision Fatigue",
        icon: <MdVisibility />,
        description: "Caused by extended screen-time and document work.",
      },
    ],
  },
  {
    title: "Contract Workers & Sanitation Support",
    image: sanitation, // replace with actual image asset
    icon: <MdCleaningServices className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Infectious Diseases",
        icon: <GiChemicalDrop />,
        description: "Exposure to biohazards and untreated waste.",
      },
      {
        title: "Dehydration & Fatigue",
        icon: <MdOutlineMonitorHeart />,
        description: "Long physical shifts with minimal rest or hydration.",
      },
      {
        title: "Mental Health Neglect",
        icon: <MdPsychology />,
        description: "Often overlooked, leading to isolation and low morale.",
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

const TourismHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Every Role, Every Route – We've Got Their Wellness Covered
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

export default TourismHealthChallenges;