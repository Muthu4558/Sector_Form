import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { FaIndustry, FaUserTie } from 'react-icons/fa';
import { GiBackPain, GiBodyHeight, GiBrain, GiBurningEye, GiGears, GiHearingDisabled, GiHeartburn, GiLungs, GiNightSleep, GiSpinalCoil } from 'react-icons/gi';

import plant from '../../assets/Automobile-sector-img/assembly.jpeg';
import corporate from '../../assets/Automobile-sector-img/corporate.jpeg';
import supervisor from '../../assets/Automobile-sector-img/supervisor.jpeg';

const data = [
  {
    title: "Assembly Line & Plant Workers",
    image: plant, // replace with your assembly line image import
    icon: <FaIndustry className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders (MSDs)",
        icon: <GiBodyHeight />,
        description: "Repetitive motions and awkward postures during long shifts lead to joint and muscle problems.",
      },
      {
        title: "Noise-Induced Hearing Loss",
        icon: <GiHearingDisabled />,
        description: "Prolonged exposure to high-decibel machinery sounds can cause irreversible hearing damage.",
      },
      {
        title: "Respiratory Issues",
        icon: <GiLungs />,
        description: "Fumes, dust, and poor air circulation in enclosed areas affect lung health over time.",
      },
    ],
  },
  {
    title: "Supervisors & Floor Managers",
    image: supervisor, // replace with your maintenance image import
    icon: <GiGears className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hypertension & Cardiac Stress",
        icon: <GiHeartburn />,
        description: "Managing continuous production cycles and pressure-filled timelines impacts heart health.",
      },
      {
        title: "Chronic Back & Neck Pain",
        icon: <GiSpinalCoil />,
        description: "Direct contact with hot machinery, chemicals, or live wires increases risk of physical harm.",
      },
      {
        title: "Sleep Disruption",
        icon: <GiNightSleep />,
        description: "Irregular shifts and long duty hours disturb circadian rhythm and rest quality.",
      },
    ],
  },
  {
    title: "Corporate Staff & Engineers",
    image: corporate, // replace with your corporate image import
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Eye Strain & Migraine",
        icon: <GiBurningEye />,
        description: "Extended screen time and design tools like CAD software trigger headaches and vision fatigue.",
      },
      {
        title: "Sedentary Lifestyle Risks",
        icon: <GiBackPain />,
        description: "Prolonged desk work increases risks of obesity, diabetes, and lower back issues.",
      },
      {
        title: "Mental Stress",
        icon: <GiBrain />,
        description: "Deadlines, innovation demands, and continuous digital engagement cause chronic stress.",
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

const AutomobileHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        From Assembly Lines to Admin – We Diagnose Every Drive
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

export default AutomobileHealthChallenges;