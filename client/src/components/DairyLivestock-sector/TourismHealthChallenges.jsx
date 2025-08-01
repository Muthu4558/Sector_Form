import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import {
  GiBackPain,
  GiBrain,
  GiBrainDump,
  GiBurningEye,
  GiFoodChain,
  GiHeartBeats,
  GiMicrophone,
  GiSleepy,
  GiSuitcase,
  GiVirus,
  GiWeightLiftingUp
} from "react-icons/gi";

import {
  FaRoute,
  FaUserTie
} from "react-icons/fa";
import { MdOutlineSupport, MdTravelExplore } from 'react-icons/md';


import tourGuide from '../../assets/Tourism-sector-img/tourGuide.jpeg';
import transport from '../../assets/Tourism-sector-img/transport.jpeg';
import hospitality from '../../assets/Tourism-sector-img/hospitality.jpeg';
import sales from '../../assets/Tourism-sector-img/sales.jpeg';

const data = [
  {
    title: "Dairy Farm Workers & Milkers",
    image: tourGuide, // keep existing image
    icon: <MdTravelExplore className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Zoonotic Infections",
        icon: <GiMicrophone />,
        description: "From raw milk, animal waste",
      },
      {
        title: "Lower back pain",
        icon: <GiBrainDump />,
        description: "Due to prolonged bending during milking",
      },
      {
        title: "Skin infections",
        icon: <GiFoodChain />,
        description: "Contact with dirty udders, chemicals",
      },
    ],
  },
  {
    title: "Veterinary & Animal Health Staff",
    image: transport, // add relevant image asset
    icon: <FaRoute className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Needlestick injuries & infections",
        icon: <GiWeightLiftingUp />,
        description: "From animal treatments",
      },
      {
        title: "Stress & fatigue",
        icon: <GiHeartBeats />,
        description: "Handling critical animal cases",
      },
      {
        title: "Respiratory issues",
        icon: <GiSleepy />,
        description: "From medications, allergens in sheds",
      },
    ],
  },
  {
    title: "Logistics & Processing Crew",
    image: hospitality, // add relevant image asset
    icon: <MdOutlineSupport className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Dehydration & heat stress",
        icon: <GiBackPain />,
        description: "Working near boilers and machinery",
      },
      {
        title: "Repetitive strain injury",
        icon: <GiVirus />,
        description: "Packing, sealing, lifting crates",
      },
      {
        title: "Noise-induced hearing loss",
        icon: <GiBrain />,
        description: "Processing units",
      },
    ],
  },
  {
    title: "Supervisors & Admin/Office Team",
    image: sales, // add relevant image asset
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hypertension & diabetes",
        icon: <GiBrain />,
        description: "Due to sedentary and high-stress roles",
      },
      {
        title: "Eye strain",
        icon: <GiSuitcase />,
        description: "Constant screen exposure for reports, CCTV",
      },
      {
        title: "Mental fatigue",
        icon: <GiBurningEye />,
        description: "Workload & performance pressure",
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