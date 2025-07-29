import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { FaPlus, FaPlusSquare, FaTruckLoading } from "react-icons/fa";
import { GiEnergyBreath, GiEyeShield, GiGears, GiHealthNormal, GiHeartBeats, GiHospital, GiLiver, GiPowerLightning, GiShield, GiSleepy, GiStomach, GiThermometerScale, GiWeightLiftingUp } from "react-icons/gi";
import { MdEmergency, MdOutlineSupport, MdOutlineSupportAgent } from "react-icons/md";



const data = [
  {
  title: 'Machine Operators & Mill Workers',
  icon: <GiWeightLiftingUp className="text-xl text-black" />,
  issues: [
    {
      title: 'Basic Shift Care',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Daily wage workers',
      description: 'Core Tests: CBC, Blood Pressure, Vision Test',
    },
    {
      title: 'BreathSafe Panel',
      icon: <GiEnergyBreath className="text-xl text-amber-400" />,
      descriptionTittle: 'Workers in dusty environments',
      description: 'Core Tests: Pulmonary Function Test, Chest X-Ray',
    },
    {
      title: 'Core Strength Panel',
      icon: <GiShield className="text-xl text-amber-400" />,
      descriptionTittle: 'Machine operators, loaders',
      description: 'Core Tests: Ortho Check, Spine X-ray, Vitamin D',
    },
    {
      title: 'Heavy Duty Full Body',
      icon: <GiSleepy className="text-xl text-amber-400" />,
      descriptionTittle: 'Long-term workers, age 35+',
      description: 'Core Tests: ECG, LFT, RFT, Diabetes & Lipid',
    },
  ],
},
{
  title: 'Maintenance & Technical Staff',
  icon: <GiGears className="text-xl text-black" />,
  issues: [
    {
      title: 'TechFit Basic',
      icon: <GiEyeShield className="text-xl text-amber-400" />,
      descriptionTittle: 'Electricians, Fitters',
      description: 'Core Tests: Audiometry, BP, Sugar Check',
    },
    {
      title: 'BoilerGuard',
      icon: <FaPlusSquare className="text-xl text-amber-400" />,
      descriptionTittle: 'Boiler operators',
      description: 'Core Tests: Spirometry, Stress ECG, Creatinine',
    },
    {
      title: 'High Alert Panel',
      icon: <MdEmergency className="text-xl text-amber-400" />,
      descriptionTittle: 'Emergency repair team',
      description: 'Core Tests: Neuro Exam, Eye Check, ECG',
    },
    {
      title: 'Full Shield Plan',
      icon: <GiShield className="text-xl text-amber-400" />,
      descriptionTittle: 'Shift leads, senior staff',
      description: 'Core Tests: Master Health Check + Ergonomics',
    },
  ],
},
{
  title: 'Admin & Quality Control Teams',
  icon: <MdOutlineSupportAgent className="text-xl text-black" />,
  issues: [
    {
      title: 'Desk Wellness',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'QC Analysts, Admins',
      description: 'Core Tests: Eye, Posture, BMI, BP',
    },
    {
      title: 'Metabolic Screen',
      icon: <FaPlus className="text-xl text-amber-400" />,
      descriptionTittle: 'HR, Supervisors',
      description: 'Core Tests: Sugar, Lipid, HbA1c, Thyroid',
    },
    {
      title: 'Stress Relief Panel',
      icon: <GiHospital className="text-xl text-amber-400" />,
      descriptionTittle: 'Those in decision roles',
      description: 'Core Tests: ECG, Liver Panel, Vitamin B12',
    },
    {
      title: 'Executive Care Plan',
      icon: <GiHeartBeats className="text-xl text-amber-400" />,
      descriptionTittle: 'Plant heads, senior managers',
      description: 'Core Tests: Full Body, Cardiac Risk, Eye & Hearing',
    },
  ],
},
{
  title: 'Logistics, Loading & Warehouse Staff',
  icon: <FaTruckLoading className="text-xl text-black" />,
  issues: [
    {
      title: 'RapidMove Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Forklift drivers',
      description: 'Core Tests: BP, CBC, Ortho Physical',
    },
    {
      title: 'Heat Alert Pack',
      icon: <GiThermometerScale className="text-xl text-amber-400" />,
      descriptionTittle: 'Summer shift workers',
      description: 'Core Tests: Electrolyte, Creatinine, ECG',
    },
    {
      title: 'Movement Safety Panel',
      icon: <GiHospital className="text-xl text-amber-400" />,
      descriptionTittle: 'Dispatch workers',
      description: 'Core Tests: Spine Screening, X-Ray, Vision',
    },
    {
      title: 'Rugged Worker Plan',
      icon: <GiPowerLightning className="text-xl text-amber-400" />,
      descriptionTittle: 'Long-term warehouse staff',
      description: 'Core Tests: Full Health, Lungs, Liver, Eye, Bone',
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
        Layered Health Checkups, Mapped to Every Role
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