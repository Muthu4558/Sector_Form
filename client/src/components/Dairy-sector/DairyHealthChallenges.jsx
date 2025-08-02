import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { GiCow, GiHealthNormal, GiBackPain, GiStethoscope, GiMechanicalArm, GiBrain } from "react-icons/gi";
import { FaHandsWash, FaSyringe, FaTruckLoading, FaTemperatureHigh } from "react-icons/fa";
import { MdPsychology, MdWaterDrop, MdHearing, MdOutlineSupervisorAccount, MdOutlineMonitorHeart, MdVisibility } from "react-icons/md";


import farm from '../../assets/Dairy-sector-img/farm-workers.jpeg';
import veterinary from '../../assets/Dairy-sector-img/veterinary.jpeg';
import logistics from '../../assets/Dairy-sector-img/logistics.jpeg';
import admin from '../../assets/Dairy-sector-img/admin.jpeg';

const data = [
   {
  title: "Dairy Farm Workers & Milkers",
  image: farm, // replace with actual image asset
  icon: <GiCow className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Zoonotic Infections",
      icon: <GiHealthNormal />,
      description: "Exposure from raw milk, animal waste, and direct animal contact.",
    },
    {
      title: "Lower Back Pain",
      icon: <GiBackPain />,
      description: "Due to prolonged bending during daily milking routines.",
    },
    {
      title: "Skin Infections",
      icon: <FaHandsWash />,
      description: "From contact with dirty udders, contaminated water, and disinfectants.",
    },
  ],
},
{
  title: "Veterinary & Animal Health Staff",
  image: veterinary, // replace with actual image asset
  icon: <GiStethoscope className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Needlestick Injuries",
      icon: <FaSyringe />,
      description: "Risks during animal vaccinations and medication handling.",
    },
    {
      title: "Stress & Fatigue",
      icon: <MdPsychology />,
      description: "Caused by emergency treatments and demanding animal care.",
    },
    {
      title: "Respiratory Issues",
      icon: <MdWaterDrop />,
      description: "Triggered by medications, disinfectants, or barn allergens.",
    },
  ],
},
{
  title: "Logistics & Processing Crew",
  image: logistics, // replace with actual image asset
  icon: <FaTruckLoading className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Dehydration & Heat Stress",
      icon: <FaTemperatureHigh />,
      description: "Working near boilers or outdoors without hydration breaks.",
    },
    {
      title: "Repetitive Strain Injury",
      icon: <GiMechanicalArm />,
      description: "From frequent lifting, packing, sealing, and loading.",
    },
    {
      title: "Noise-Induced Hearing Loss",
      icon: <MdHearing />,
      description: "Due to high-decibel processing units and machinery.",
    },
  ],
},
{
  title: "Supervisors & Admin/Office Team",
  image: admin, // replace with actual image asset
  icon: <MdOutlineSupervisorAccount className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Hypertension & Diabetes",
      icon: <MdOutlineMonitorHeart />,
      description: "Linked to sedentary work and prolonged mental stress.",
    },
    {
      title: "Eye Strain",
      icon: <MdVisibility />,
      description: "From constant screen exposure and document reviewing.",
    },
    {
      title: "Mental Fatigue",
      icon: <GiBrain />,
      description: "Due to long working hours and high performance pressure.",
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
        From Barn to Balance – Understanding the Health Risks in Every Role
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