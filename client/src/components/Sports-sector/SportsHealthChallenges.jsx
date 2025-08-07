import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { FaDumbbell, FaLungs, FaMicrophoneAltSlash, FaTemperatureHigh, FaUserTie } from 'react-icons/fa';
import { GiBrain, GiBubblingFlask, GiChemicalDrop, GiCow, GiDrippingBlade, GiGroundSprout, GiKneeling, GiMuscleUp } from 'react-icons/gi';
import { MdOutlineChair, MdPsychologyAlt, MdVisibility } from 'react-icons/md';


import livestockHandlers from '../../assets/Sports-sector-img/animal.jpeg';
import sportsCoaches from '../../assets/Sports-sector-img/coach.jpeg';
import adminEventStaff from '../../assets/Sports-sector-img/admin.jpeg';
import groundStaff from '../../assets/Sports-sector-img/ground.jpeg';

const data = [
  {
  title: "Animal Handlers & Livestock Caretakers",
  image: livestockHandlers, // replace with actual image asset
  icon: <GiCow className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Zoonotic Infections",
      icon: <GiBubblingFlask />,
      description: "Exposure to animal waste, saliva, and blood increases risk of zoonotic diseases.",
    },
    {
      title: "Musculoskeletal Injuries",
      icon: <GiMuscleUp />,
      description: "Caused by repetitive lifting and restraining of large or aggressive animals.",
    },
    {
      title: "Respiratory Issues",
      icon: <FaLungs />,
      description: "Due to barn dust, ammonia, and inadequate ventilation in livestock areas.",
    },
  ],
},
{
  title: "Sports Coaches & Trainers",
  image: sportsCoaches, // replace with actual image asset
  icon: <FaDumbbell className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Stress & Burnout",
      icon: <MdPsychologyAlt />,
      description: "Performance pressure and extended sessions lead to emotional fatigue.",
    },
    {
      title: "Back & Joint Problems",
      icon: <GiKneeling />,
      description: "Continuous physical demonstrations and active movement contribute to joint stress.",
    },
    {
      title: "Vocal Strain",
      icon: <FaMicrophoneAltSlash />,
      description: "Frequent loud instructions and shouting can lead to throat and vocal cord issues.",
    },
  ],
},
{
  title: "Ground & Maintenance Staff",
  image: groundStaff, // replace with actual image asset
  icon: <GiGroundSprout className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Exposure to Chemicals",
      icon: <GiChemicalDrop />,
      description: "Use of cleaning agents and feed preservatives can irritate skin and lungs.",
    },
    {
      title: "Injuries from Machinery",
      icon: <GiDrippingBlade />,
      description: "Slips, cuts, and bruises from handling farm or facility equipment.",
    },
    {
      title: "Heat Stress",
      icon: <FaTemperatureHigh />,
      description: "Long hours of outdoor work in direct sunlight raise the risk of dehydration.",
    },
  ],
},
{
  title: "Administrative & Event Management Staff",
  image: adminEventStaff, // replace with actual image asset
  icon: <FaUserTie className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Sedentary Lifestyle Risks",
      icon: <MdOutlineChair />,
      description: "Prolonged desk work with poor posture contributes to chronic health issues.",
    },
    {
      title: "Mental Fatigue",
      icon: <GiBrain />,
      description: "Deadlines and event coordination pressure can lead to cognitive exhaustion.",
    },
    {
      title: "Eye Strain",
      icon: <MdVisibility />,
      description: "Long screen time and digital tools usage cause vision discomfort.",
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

const SportsHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        From Field to Stable: Understanding the People Who Power the Sector
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

export default SportsHealthChallenges;