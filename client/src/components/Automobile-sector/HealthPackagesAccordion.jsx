import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { FaPlus, FaUserTie } from 'react-icons/fa';
import {
  GiFactory,
  GiGears,
  GiHazardSign,
  GiHealthCapsule,
  GiHealthNormal,
  GiPowerLightning,
  GiShield,
  GiStethoscope
} from 'react-icons/gi';

const data = [
  {
  title: 'Assembly Line & Plant Workers',
  icon: <GiFactory className="text-xl text-black" />,
  issues: [
    {
      title: 'Essential Engine Check',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'All factory floor workers',
      description: 'Tests: BP, CBC, Random Blood Sugar, Audiometry, Vision',
    },
    {
      title: 'Core Gear Wellness',
      icon: <GiStethoscope className="text-xl text-amber-400" />,
      descriptionTittle: 'Technicians, operators over age 35',
      description: 'Tests: Basic + Liver Function, Chest X-ray, ECG',
    },
    {
      title: 'Heavy Duty Health Pro',
      icon: <GiPowerLightning className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior workers and those in high-risk zones',
      description: 'Tests: All above + Lung Function Test, Kidney Function, Vitamin D, TSH',
    },
  ],
},
{
  title: 'Supervisors & Floor Managers',
  icon: <GiGears className="text-xl text-black" />,
  issues: [
    {
      title: 'Shift Shield',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Young shift leaders',
      description: 'Tests: BP, Lipid Profile, ECG, RBS',
    },
    {
      title: 'Manager’s Wellness Kit',
      icon: <FaPlus className="text-xl text-amber-400" />,
      descriptionTittle: 'Mid-level managers',
      description: 'Tests: Basic + LFT, Stress ECG, TMT',
    },
    {
      title: 'Leadership Wellness Max',
      icon: <GiShield className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior floor heads or 40+ age group',
      description: 'Tests: All above + Thyroid, Diabetes Panel, Vitamin B12, Eye Check',
    },
  ],
},
{
  title: 'Corporate Staff & Engineers',
  icon: <FaUserTie className="text-xl text-black" />,
  issues: [
    {
      title: 'Desk Health Check',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Entry-level staff',
      description: 'Tests: BMI, RBS, CBC, Vision',
    },
    {
      title: 'Smart Office Fit',
      icon: <GiHealthCapsule className="text-xl text-amber-400" />,
      descriptionTittle: 'Mid-level executives',
      description: 'Tests: Basic + Liver Function, Lipid, ECG, Vitamin D',
    },
    {
      title: 'Corporate Wellness Elite',
      icon: <GiPowerLightning className="text-xl text-amber-400" />,
      descriptionTittle: '35+ engineers, HR, project leads',
      description: 'Tests: Full Body + Thyroid, HBA1C, Chest X-ray, Stress Assessment',
    },
  ],
}


];

const AccordionItem = ({ item, idx, openIndex, setOpenIndex }) => {
  const isOpen = idx === openIndex;

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpenIndex(isOpen ? null : idx)}
        className="w-full flex justify-between items-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-md text-left font-semibold transition-all"
      >
        <span className="flex items-center gap-2">
          {item.icon}
          {item.title}
        </span>
        <span>{isOpen ? <BiCollapse /> : <BiExpand />}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && item.description && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-teal-50 px-4 mt-4 text-[15px] font-semibold rounded-t-md shadow text-green-800">
              {item.descriptionTittle}
            </div>
            <div className="bg-gray-50 px-4 py-3 font-semibold text-gray-800 text-sm whitespace-pre-line rounded-b-md shadow">
              {item.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HealthPackagesAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState(data.map(() => 0));

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        From Assembly Lines to Admin – We Diagnose Every Drive
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="bg-white rounded-2xl shadow-lg p-6"
            data-aos="zoom-in-up"
            data-aos-delay={groupIdx * 100}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            {group.issues.map((issue, idx) => (
              <AccordionItem
                key={idx}
                item={issue}
                idx={idx}
                openIndex={openIndexes[groupIdx]}
                setOpenIndex={(newIndex) => {
                  const updated = [...openIndexes];
                  updated[groupIdx] = newIndex;
                  setOpenIndexes(updated);
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthPackagesAccordion;