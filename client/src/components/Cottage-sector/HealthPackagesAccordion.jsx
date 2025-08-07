import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import {
  GiBrokenPottery,
  GiChemicalDrop,
  GiChestArmor,
  GiEyeTarget,
  GiHealthIncrease,
  GiHealthNormal,
  GiMuscleUp,
  GiPaintedPottery,
  GiSewingNeedle,
  GiSnakeJar,
  GiSpinalCoil,
  GiSpinningWheel,
  GiTalk
} from 'react-icons/gi';

import { FaUsers } from 'react-icons/fa';


const data = [
  {
  title: 'Handloom & Weaving Artisans',
  icon: <GiSpinningWheel className="text-xl text-black" />,
  issues: [
    {
      title: 'ThreadCare Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'All artisans',
      description: 'BP, Sugar, Vision Test',
    },
    {
      title: 'ThreadCare Plus',
      icon: <GiSpinalCoil className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior workers',
      description: 'ECG, Spirometry, Posture Screening',
    },
    {
      title: 'ThreadCare Pro',
      icon: <GiChemicalDrop className="text-xl text-amber-400" />,
      descriptionTittle: 'Supervisors',
      description: 'Liver, Kidney, Lipid, CBC',
    },
    {
      title: 'ThreadCare Master',
      icon: <GiHealthIncrease className="text-xl text-amber-400" />,
      descriptionTittle: 'Elderly weavers',
      description: 'Full Body Checkup + Bone Density',
    },
  ],
},
{
  title: 'Embroidery & Tailoring Workers',
  icon: <GiSewingNeedle className="text-xl text-black" />,
  issues: [
    {
      title: 'StitchSmart Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Young workers',
      description: 'BP, Sugar, BMI',
    },
    {
      title: 'StitchSmart Plus',
      icon: <GiEyeTarget className="text-xl text-amber-400" />,
      descriptionTittle: 'Mid-career tailors',
      description: 'Eye Test, Ergonomic Assessment',
    },
    {
      title: 'StitchSmart Pro',
      icon: <GiTalk className="text-xl text-amber-400" />,
      descriptionTittle: 'Supervisors',
      description: 'Thyroid, CBC, ECG',
    },
    {
      title: 'StitchSmart Master',
      icon: <GiHealthIncrease className="text-xl text-amber-400" />,
      descriptionTittle: 'Long-serving staff',
      description: 'Full Body + Stress Screening',
    },
  ],
},
{
  title: 'Pottery & Craft Workers',
  icon: <GiPaintedPottery className="text-xl text-black" />,
  issues: [
    {
      title: 'ClayCare Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'All potters',
      description: 'BP, Sugar, Pulmonary Test',
    },
    {
      title: 'ClayCare Plus',
      icon: <GiChestArmor className="text-xl text-amber-400" />,
      descriptionTittle: 'Clay handlers',
      description: 'Chest X-Ray, ECG',
    },
    {
      title: 'ClayCare Pro',
      icon: <GiChemicalDrop className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior craftsmen',
      description: 'Liver, Kidney, Lung Function',
    },
    {
      title: 'ClayCare Master',
      icon: <GiMuscleUp className="text-xl text-amber-400" />,
      descriptionTittle: 'Aged artisans',
      description: 'Full Panel + Bone & Joint Screening',
    },
  ],
},
{
  title: 'Women in SHGs',
  icon: <FaUsers className="text-xl text-black" />,
  issues: [
    {
      title: 'SHG Wellness Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'All women',
      description: 'Hemoglobin, BP, Sugar',
    },
    {
      title: 'SHG Wellness Plus',
      icon: <GiEyeTarget className="text-xl text-amber-400" />,
      descriptionTittle: 'Home-based workers',
      description: 'Thyroid, Calcium, Vision',
    },
    {
      title: 'SHG Wellness Pro',
      icon: <GiChemicalDrop className="text-xl text-amber-400" />,
      descriptionTittle: 'Group leaders',
      description: 'Lipid Profile, Liver, CBC',
    },
    {
      title: 'SHG Wellness Master',
      icon: <GiHealthIncrease className="text-xl text-amber-400" />,
      descriptionTittle: 'Older members & leaders',
      description: 'Full Body + Women’s Health',
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
        Health Check-up Packages Sewn to Fit Every Role
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