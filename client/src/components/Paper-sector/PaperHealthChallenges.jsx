import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { FaUserTie } from "react-icons/fa";
import {
  GiBackPain,
  GiBandageRoll,
  GiBoxUnpacking,
  GiBrain,
  GiBrainFreeze,
  GiBurningEye,
  GiChemicalDrop,
  GiFactory,
  GiGears,
  GiHearingDisabled,
  GiLungs, GiMuscleUp,
  GiOfficeChair,
  GiThermometerHot
} from "react-icons/gi";


import millWorkers from '../../assets/Paper-sector-img/machine.jpeg';
import maintenanceTeam from '../../assets/Paper-sector-img/maintenance.jpeg';
import adminQC from '../../assets/Paper-sector-img/admin.jpeg';
import warehouseTeam from '../../assets/Paper-sector-img/loaders.jpeg';

const data = [
  {
  title: "Machine Operators & Mill Workers",
  image: millWorkers, // Add your actual image asset
  icon: <GiFactory className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Respiratory Issues",
      icon: <GiLungs />,
      description: "Due to airborne fibers, dust, and poor ventilation.",
    },
    {
      title: "Musculoskeletal Strain",
      icon: <GiMuscleUp />,
      description: "From repetitive lifting and standing long hours.",
    },
    {
      title: "Eye Irritation",
      icon: <GiBurningEye />,
      description: "Caused by dust particles and exposure to drying heat.",
    },
  ],
},
{
  title: "Maintenance & Technical Staff",
  image: maintenanceTeam, // Add your actual image asset
  icon: <GiGears className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Hearing Loss",
      icon: <GiHearingDisabled />,
      description: "Constant exposure to noisy machinery.",
    },
    {
      title: "Joint & Muscle Injuries",
      icon: <GiBandageRoll />,
      description: "From tool handling and awkward postures.",
    },
    {
      title: "Mental Fatigue",
      icon: <GiBrain />,
      description: "Due to shift duties and high-pressure repair tasks.",
    },
  ],
},
{
  title: "Administrative & QC Teams",
  image: adminQC, // Add your actual image asset
  icon: <FaUserTie className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Sedentary-Related Issues",
      icon: <GiOfficeChair />,
      description: "Back pain, eye strain, and poor posture from long sitting hours.",
    },
    {
      title: "Work-Related Stress",
      icon: <GiBrainFreeze />,
      description: "Caused by tight deadlines and inter-department coordination.",
    },
    {
      title: "Metabolic Risks",
      icon: <GiChemicalDrop />,
      description: "Obesity and diabetes due to low physical activity.",
    },
  ],
},
{
  title: "Logistics, Loading & Warehouse Staff",
  image: warehouseTeam, // Add your actual image asset
  icon: <GiBoxUnpacking className="text-2xl text-gray-700" />,
  issues: [
    {
      title: "Lower Back Pain",
      icon: <GiBackPain />,
      description: "From repeated lifting and bending during loading/unloading.",
    },
    {
      title: "Heat Stress",
      icon: <GiThermometerHot />,
      description: "Especially in non-ventilated or poorly cooled storage areas.",
    },
    {
      title: "Minor Cuts & Injuries",
      icon: <GiBandageRoll />,
      description: "From sharp packaging or roll edges in warehouses.",
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

const PaperHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Unfolding the Hidden Health Risks in Paper Mills
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

export default PaperHealthChallenges;