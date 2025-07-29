import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import {
  GiFactory,
  GiHealthNormal,
  GiMuscleUp,
  GiChestArmor,
  GiHealing,
  GiElectric,
  GiBatteryPack,
  GiLifeSupport,
  GiHealthIncrease,
  GiChecklist,
  GiBrain,
  GiTie,
  GiBatteryPackAlt,
} from 'react-icons/gi';


const data = [{
  title: 'Shop Floor Workers',
  icon: <GiFactory className="text-xl text-black" />,
  issues: [
    {
      title: 'Iron Guard Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Entry-level & daily labor',
      description: 'Core Parameters: BP, BMI, CBC, Blood Sugar, Audiometry, Lung Function Test',
    },
    {
      title: 'Iron Guard Plus',
      icon: <GiMuscleUp className="text-xl text-amber-400" />,
      descriptionTittle: '2+ years service workers',
      description: 'Core Parameters: All Basic + ECG, Liver Profile, Kidney Profile',
    },
    {
      title: 'Iron Guard Premium',
      icon: <GiChestArmor className="text-xl text-amber-400" />,
      descriptionTittle: '5+ years or mid-senior operators',
      description: 'Core Parameters: All Plus + Chest X-Ray, Vitamin D, Eye Check-up',
    },
    {
      title: 'Iron Guard Elite',
      icon: <GiHealing className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior/critical operators',
      description: 'Core Parameters: All Premium + Stress ECG, HBA1C, Urine Routine, TMT',
    },
  ],
},
{
  title: 'Maintenance & Utility Staff',
  icon: <GiElectric className="text-xl text-black" />,
  issues: [
    {
      title: 'Shield Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Helpers, new joiners',
      description: 'Core Parameters: CBC, Blood Sugar, Urine Routine, ECG',
    },
    {
      title: 'Shield Advanced',
      icon: <GiBatteryPack className="text-xl text-amber-400" />,
      descriptionTittle: 'Electricians, Fitters',
      description: 'Core Parameters: Basic + Kidney, Liver, Electrolytes, Chest X-Ray',
    },
    {
      title: 'Shield Complete',
      icon: <GiLifeSupport className="text-xl text-amber-400" />,
      descriptionTittle: 'Critical machine handlers',
      description: 'Core Parameters: Advanced + Stress Test, TMT, Vision & ENT',
    },
    {
      title: 'Shield Platinum',
      icon: <GiHealthIncrease className="text-xl text-amber-400" />,
      descriptionTittle: 'Experienced technical experts',
      description: 'Core Parameters: Complete + Full Body MRI/Ultrasound (as required)',
    },
  ],
},
{
  title: 'Supervisors & QC',
  icon: <GiChecklist className="text-xl text-black" />,
  issues: [
    {
      title: 'ProCare Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Shift Leads',
      description: 'Core Parameters: CBC, ECG, Blood Sugar, BP',
    },
    {
      title: 'ProCare Pro',
      icon: <GiChestArmor className="text-xl text-amber-400" />,
      descriptionTittle: 'QC/Safety Officers',
      description: 'Core Parameters: Basic + Vision Test, Chest X-Ray, Lipid Profile',
    },
    {
      title: 'ProCare Executive',
      icon: <GiMuscleUp className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior inspectors',
      description: 'Core Parameters: Pro + HBA1C, Liver, Kidney, Vitamin D, TSH',
    },
    {
      title: 'ProCare Supreme',
      icon: <GiBrain className="text-xl text-amber-400" />,
      descriptionTittle: 'Floor Managers',
      description: 'Core Parameters: Executive + TMT, Stress ECG, Lifestyle Screening',
    },
  ],
},
{
  title: 'Admin & Management',
  icon: <GiTie className="text-xl text-black" />,
  issues: [
    {
      title: 'SmartHealth Start',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'All desk staff',
      description: 'Core Parameters: BMI, CBC, Lipid, BP, Blood Sugar',
    },
    {
      title: 'SmartHealth Active',
      icon: <GiBatteryPackAlt className="text-xl text-amber-400" />,
      descriptionTittle: 'Mid-senior HR/Admin',
      description: 'Core Parameters: Start + ECG, Liver, Kidney, Thyroid',
    },
    {
      title: 'SmartHealth Prime',
      icon: <GiHealing className="text-xl text-amber-400" />,
      descriptionTittle: 'Managers & Heads',
      description: 'Core Parameters: Active + HBA1C, TMT, Vitamin D, Sleep Assessment',
    },
    {
      title: 'SmartHealth Platinum',
      icon: <GiBrain className="text-xl text-amber-400" />,
      descriptionTittle: 'Directors/CXOs',
      description: 'Core Parameters: Prime + Mental Health Assessment, Lifestyle Consultation',
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
        Precision Health Packages – Forged for the Metal Workforce
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