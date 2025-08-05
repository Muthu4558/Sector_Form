import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import {
  GiElectric,
  GiHealthNormal,
  GiSpinalCoil,
  GiMuscleUp,
  GiChemicalDrop,
  GiEyeTarget,
  GiTalk,
  GiDesk,
  GiHealthIncrease,
  GiRunningShoe,
  GiStomach,
  GiWeight,
  GiBrain,
  GiMeal,
} from 'react-icons/gi';

import {
  MdHeadsetMic,
  MdOutlineDevices,
} from 'react-icons/md';

import { FaChartLine } from 'react-icons/fa';

const data = [
  {
  title: 'Field Technicians & Tower Workers',
  icon: <GiElectric className="text-xl text-black" />,
  issues: [
    {
      title: 'Basic Vital Watch',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Daily field staff',
      description: 'BP, Sugar, BMI',
    },
    {
      title: 'Core Mobility Check',
      icon: <GiSpinalCoil className="text-xl text-amber-400" />,
      descriptionTittle: 'Tower workers',
      description: 'ECG, Vitamin D, X-ray Spine',
    },
    {
      title: 'Endurance Panel',
      icon: <GiMuscleUp className="text-xl text-amber-400" />,
      descriptionTittle: 'High-activity teams',
      description: 'Pulmonary Function Test, Hemoglobin, Electrolytes',
    },
    {
      title: 'Complete Field Wellness',
      icon: <GiChemicalDrop className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior Technicians & Engineers',
      description: 'Liver/Kidney Function, CBC, Stress ECG',
    },
  ],
},
{
  title: 'Call Center & Customer Support',
  icon: <MdHeadsetMic className="text-xl text-black" />,
  issues: [
    {
      title: 'Screen-Time Basic',
      icon: <GiEyeTarget className="text-xl text-amber-400" />,
      descriptionTittle: 'Entry-level support',
      description: 'Eye Test, Posture Check, BMI',
    },
    {
      title: 'VoiceCare Panel',
      icon: <GiTalk className="text-xl text-amber-400" />,
      descriptionTittle: 'Call executives',
      description: 'ENT Check, Stress Level Screening',
    },
    {
      title: 'Desk Wellness Plus',
      icon: <GiDesk className="text-xl text-amber-400" />,
      descriptionTittle: 'Team leads',
      description: 'Thyroid, Vitamin B12, Cholesterol',
    },
    {
      title: 'Complete Support Health',
      icon: <GiHealthIncrease className="text-xl text-amber-400" />,
      descriptionTittle: 'Floor managers',
      description: 'Cardiac, Diabetes, Eye, Neuro tests',
    },
  ],
},
{
  title: 'Sales & Marketing Executives',
  icon: <FaChartLine className="text-xl text-black" />,
  issues: [
    {
      title: 'Quick-Fit Basic',
      icon: <GiRunningShoe className="text-xl text-amber-400" />,
      descriptionTittle: 'Field sales agents',
      description: 'Sugar, BP, BMI',
    },
    {
      title: 'On-the-Go Digest Panel',
      icon: <GiStomach className="text-xl text-amber-400" />,
      descriptionTittle: 'Active field roles',
      description: 'Liver Function, H. Pylori, Vitamin B12',
    },
    {
      title: 'Road Warrior Wellness',
      icon: <GiMuscleUp className="text-xl text-amber-400" />,
      descriptionTittle: 'Territory managers',
      description: 'ECG, CBC, Stress Test, Eye Test',
    },
    {
      title: 'Executive Performance Health',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Regional sales heads',
      description: 'Complete Wellness, Cardiac + Stress Profile',
    },
  ],
},
{
  title: 'IT, Network Ops & Admin Teams',
  icon: <MdOutlineDevices className="text-xl text-black" />,
  issues: [
    {
      title: 'Sedentary Scan',
      icon: <GiWeight className="text-xl text-amber-400" />,
      descriptionTittle: 'Entry-level IT/admin staff',
      description: 'BMI, Sugar, BP',
    },
    {
      title: 'Neuro & Sleep Check',
      icon: <GiBrain className="text-xl text-amber-400" />,
      descriptionTittle: 'NOC staff & night shift teams',
      description: 'Stress ECG, Sleep Quality Test',
    },
    {
      title: 'Full Stack Wellness',
      icon: <GiMeal className="text-xl text-amber-400" />,
      descriptionTittle: 'Project managers',
      description: 'Vitamin D/B12, Lipid, Thyroid',
    },
    {
      title: 'Leadership Health Profile',
      icon: <GiHealthIncrease className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior staff & leads',
      description: 'Cardiac, Diabetes, Neuro, Eye',
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
        Tiered to Perform: Health Packages for Every Telecom Role
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