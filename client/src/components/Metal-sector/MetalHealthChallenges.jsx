import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { 
  GiGasMask,
  GiBodyHeight,
  GiSpeakerOff,
  GiElectric,
  GiFireShield,
  GiHeatHaze,
  GiSpinalCoil,
  GiBurningEye,
  GiBrain,
  GiWeightScale,
  GiHeartOrgan,
  GiPsychicWaves,
  GiNightSleep,
  GiMetalBar
} from "react-icons/gi";

import { 
  FaUserCog, 
  FaUserTie 
} from "react-icons/fa";


import shopfloor from '../../assets/Metal-sector-img/shopfloor.jpeg';
import maintenance from '../../assets/Metal-sector-img/maintenance.jpeg';
import supervisor from '../../assets/Metal-sector-img/supervisor.jpeg';
import admin from '../../assets/Metal-sector-img/admin.jpeg';

const data = [
  {
  title: "Shop Floor Workers",
  image: shopfloor, // keep existing image
  icon: <GiMetalBar className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Respiratory Issues",
      icon: <GiGasMask />,
      description: "Caused by continuous exposure to metal dust, fumes, and gases.",
    },
    {
      title: "Musculoskeletal Disorders",
      icon: <GiBodyHeight />,
      description: "Repetitive tasks and improper posture during long shifts.",
    },
    {
      title: "Hearing Loss",
      icon: <GiSpeakerOff />,
      description: "Daily exposure to high-decibel machines leads to hearing impairment.",
    },
  ],
},
{
  title: "Maintenance & Utility Staff",
  image: maintenance, // keep existing image
  icon: <GiElectric className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Electrical & Burn Injuries",
      icon: <GiFireShield />,
      description: "Due to live wire exposure and overheated components.",
    },
    {
      title: "Fatigue & Dehydration",
      icon: <GiHeatHaze />,
      description: "Working in high-heat conditions without proper breaks or hydration.",
    },
    {
      title: "Joint & Back Pain",
      icon: <GiSpinalCoil />,
      description: "Awkward postures and lifting tasks lead to joint strain.",
    },
  ],
},
{
  title: "Supervisors & Quality Control",
  image: supervisor, // keep existing image
  icon: <FaUserCog className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Eye Strain",
      icon: <GiBurningEye />,
      description: "Continuous inspection under artificial lighting causes visual fatigue.",
    },
    {
      title: "Stress & Anxiety",
      icon: <GiBrain />,
      description: "High responsibility and safety oversight induce mental stress.",
    },
    {
      title: "Sedentary Health Risks",
      icon: <GiWeightScale />,
      description: "Long monitoring hours with little physical activity increases lifestyle risks.",
    },
  ],
},
{
  title: "Admin & Management",
  image: admin, // keep existing image
  icon: <FaUserTie className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Hypertension & Diabetes",
      icon: <GiHeartOrgan />,
      description: "Sedentary workstyle and poor diet contribute to chronic health conditions.",
    },
    {
      title: "Mental Burnout",
      icon: <GiPsychicWaves />,
      description: "Stress from tight deadlines and high-level decision making.",
    },
    {
      title: "Obesity & Sleep Disorders",
      icon: <GiNightSleep />,
      description: "Lack of activity and irregular hours disrupt sleep and weight regulation.",
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

const MetalHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        From Dock to Deck – Safeguarding Every Role
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

export default MetalHealthChallenges;