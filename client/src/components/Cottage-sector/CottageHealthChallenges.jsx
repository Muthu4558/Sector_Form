import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
/// React Icons - GI (Game Icons)
import { GiBrain, GiChemicalDrop, GiDustCloud, GiKneeling, GiKnifeThrust, GiMuscleUp, GiPaintedPottery, GiScissors, GiSpinningWheel, GiWindSlap } from "react-icons/gi";

// React Icons - MD (Material Design)
import { MdEventSeat, MdOutlineMonitorHeart, MdPsychology, MdVisibility } from "react-icons/md";

// React Icons - FA (Font Awesome)
import { FaPeopleGroup, FaTemperatureHigh } from "react-icons/fa6";

import handloomArtisans from '../../assets/Cottage-sector-img/Handloom.jpeg';
import embroideryWorkers from '../../assets/Cottage-sector-img/embroidery.jpeg';
import potteryWorkers from '../../assets/Cottage-sector-img/pottery.jpeg';
import shgWomen from '../../assets/Cottage-sector-img/self-group.jpeg';

const data = [
  {
  title: "Handloom & Weaving Artisans",
  image: handloomArtisans, // replace with actual image asset
  icon: <GiSpinningWheel className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Musculoskeletal Disorders",
      icon: <GiMuscleUp />,
      description: "Due to repetitive hand motion and long hours on looms with poor posture.",
    },
    {
      title: "Vision Strain",
      icon: <MdVisibility />,
      description: "Caused by focusing on intricate weaving patterns for extended periods.",
    },
    {
      title: "Respiratory Issues",
      icon: <GiWindSlap />,
      description: "Triggered by cotton dust and poorly ventilated weaving environments.",
    },
  ],
},
{
  title: "Embroidery & Tailoring Workers",
  image: embroideryWorkers, // replace with actual image asset
  icon: <GiScissors className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Back and Neck Pain",
      icon: <MdEventSeat />,
      description: "From static sitting positions and non-ergonomic work setups.",
    },
    {
      title: "Mental Stress",
      icon: <MdPsychology />,
      description: "Due to tight deadlines, financial strain, and long working hours.",
    },
    {
      title: "Finger Injuries",
      icon: <GiKnifeThrust />,
      description: "Common from using precision tools like scissors and needles.",
    },
  ],
},
{
  title: "Pottery & Craft Workers",
  image: potteryWorkers, // replace with actual image asset
  icon: <GiPaintedPottery className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Dust-Related Lung Conditions",
      icon: <GiDustCloud />,
      description: "Due to constant exposure to clay, silica, and fine particulates.",
    },
    {
      title: "Joint Strain",
      icon: <GiKneeling />,
      description: "From kneading clay and repetitive wheel work.",
    },
    {
      title: "Dehydration & Fatigue",
      icon: <FaTemperatureHigh />,
      description: "Caused by working in hot open workshops without adequate hydration.",
    },
  ],
},
{
  title: "Women in SHGs (Self-Help Groups)",
  image: shgWomen, // replace with actual image asset
  icon: <FaPeopleGroup className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Mental Fatigue",
      icon: <GiBrain />,
      description: "From juggling household responsibilities with group work and production.",
    },
    {
      title: "Exposure to Smoke/Chemicals",
      icon: <GiChemicalDrop />,
      description: "During food processing, soap making, or textile dyeing activities.",
    },
    {
      title: "Nutritional Deficiencies",
      icon: <MdOutlineMonitorHeart />,
      description: "Due to irregular meals and limited access to nutrient-rich food.",
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

const CottageHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Hands That Craft, Bodies That Strain – Let’s Care Better
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

export default CottageHealthChallenges;