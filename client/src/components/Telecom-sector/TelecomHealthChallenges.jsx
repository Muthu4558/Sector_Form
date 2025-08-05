import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
// Font Awesome
import { FaBroadcastTower, FaTemperatureHigh, FaHeadset, FaChartLine, FaServer } from "react-icons/fa";

// Game Icons
import { GiMuscleUp, GiBrain, GiKneeling } from "react-icons/gi";

// Material Design Icons
import { 
  MdPsychology, 
  MdVisibility, 
  MdOutlineMonitorHeart, 
  MdRestaurantMenu, 
  MdOutlineHotelClass, 
  MdOutlineChair, 
  MdNightlightRound, 
  MdOutlinePsychologyAlt 
} from "react-icons/md";

import fieldTechnicians from '../../assets/Telecom-sector-img/field.jpeg';
import callCenter from '../../assets/Telecom-sector-img/callsupport.jpeg';
import salesTeam from '../../assets/Telecom-sector-img/sales.jpeg';
import itAdmin from '../../assets/Telecom-sector-img/admin.jpeg';

const data = [
  {
  title: "Field Technicians & Tower Workers",
  image: fieldTechnicians, // replace with actual image asset
  icon: <FaBroadcastTower className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Musculoskeletal Disorders",
      icon: <GiMuscleUp />,
      description: "Caused by frequent tower climbing and carrying heavy telecom equipment.",
    },
    {
      title: "Heat Exhaustion & Dehydration",
      icon: <FaTemperatureHigh />,
      description: "Due to prolonged outdoor work under direct sun without breaks.",
    },
    {
      title: "High Stress & Fatigue",
      icon: <MdPsychology />,
      description: "Common during emergency repairs and extended shift work.",
    },
  ],
},
{
  title: "Call Center & Customer Support Teams",
  image: callCenter, // replace with actual image asset
  icon: <FaHeadset className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Mental Fatigue & Burnout",
      icon: <GiBrain />,
      description: "From continuous calls, customer complaints, and daily performance targets.",
    },
    {
      title: "Eye Strain & Posture Issues",
      icon: <MdVisibility />,
      description: "Caused by long screen hours and poor ergonomic desk setup.",
    },
    {
      title: "Hypertension",
      icon: <MdOutlineMonitorHeart />,
      description: "Linked to sedentary routines and irregular meal patterns.",
    },
  ],
},
{
  title: "Sales & Marketing Executives",
  image: salesTeam, // replace with actual image asset
  icon: <FaChartLine className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Fatigue & Joint Pain",
      icon: <GiKneeling />,
      description: "Due to excessive travel, walking, and inconsistent work hours.",
    },
    {
      title: "Gastrointestinal Issues",
      icon: <MdRestaurantMenu />,
      description: "Resulting from poor eating habits and irregular meal timings on the field.",
    },
    {
      title: "Stress & Sleep Issues",
      icon: <MdOutlineHotelClass />,
      description: "Driven by target pressures and continuous field performance demands.",
    },
  ],
},
{
  title: "IT, Network Operations & Admin Teams",
  image: itAdmin, // replace with actual image asset
  icon: <FaServer className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Sedentary Lifestyle",
      icon: <MdOutlineChair />,
      description: "Prolonged sitting during desk work contributes to various chronic issues.",
    },
    {
      title: "Sleep Disorders",
      icon: <MdNightlightRound />,
      description: "Caused by rotational or overnight NOC shifts and erratic work cycles.",
    },
    {
      title: "Chronic Stress",
      icon: <MdOutlinePsychologyAlt />,
      description: "Due to constant coordination and pressure to meet SLA targets.",
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

const TelecomHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Behind the Signal: Hidden Health Risks of Telecom Teams
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

export default TelecomHealthChallenges;