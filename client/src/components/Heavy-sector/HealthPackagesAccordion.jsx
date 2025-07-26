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
  title: 'Plant Operators & Machinists',
  icon: <GiFactory className="text-xl text-black" />,
  issues: [
    {
      title: 'PowerCheck Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Entry-level & daily operators',
      description: 'Core Parameters Included: BP, Sugar, BMI, Audiometry',
    },
    {
      title: 'PowerCheck Plus',
      icon: <GiStethoscope className="text-xl text-amber-400" />,
      descriptionTittle: 'Machine operators & forklift drivers',
      description: 'Core Parameters Included: ECG, Pulmonary Function Test, Vision, Lipid Profile',
    },
    {
      title: 'PowerCheck Pro',
      icon: <GiPowerLightning className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior operators with long tenure',
      description: 'Core Parameters Included: X-Ray Chest, LFT, KFT, CBC, Occupational Hazard Panel',
    },
  ],
},
{
  title: 'Maintenance & Technical Staff',
  icon: <GiGears className="text-xl text-black" />,
  issues: [
    {
      title: 'TechCare Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Electricians, welders',
      description: 'Core Parameters Included: BP, Blood Sugar, Vision Test',
    },
    {
      title: 'TechCare Plus',
      icon: <FaPlus className="text-xl text-amber-400" />,
      descriptionTittle: 'Maintenance crew',
      description: 'Core Parameters Included: ECG, Eye Screening, Spirometry',
    },
    {
      title: 'TechCare Pro',
      icon: <GiHazardSign className="text-xl text-amber-400" />,
      descriptionTittle: 'Staff working with hazardous materials',
      description: 'Core Parameters Included: Urine Routine, LFT, Hepatitis B Test, Heavy Metal Panel',
    },
  ],
},
{
  title: 'Supervisors & Admin Staff',
  icon: <FaUserTie className="text-xl text-black" />,
  issues: [
    {
      title: 'SafeLead Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Junior supervisors',
      description: 'Core Parameters Included: BP, BMI, Sugar, Eye Test',
    },
    {
      title: 'SafeLead Plus',
      icon: <GiHealthCapsule className="text-xl text-amber-400" />,
      descriptionTittle: 'Admin & shift heads',
      description: 'Core Parameters Included: CBC, ECG, Lipid Profile, Thyroid Panel',
    },
    {
      title: 'SafeLead Pro',
      icon: <GiShield className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior management & decision-makers',
      description: 'Core Parameters Included: Full Body Check, Stress ECG, Vitamin Panel',
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
        Built for the Load – Precision Health Packages for Every Role.
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