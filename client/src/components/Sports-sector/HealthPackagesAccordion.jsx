import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { GiCow, GiStrongMan, GiFarmTractor, GiHealthNormal, GiChemicalDrop, GiWeightLiftingUp, GiStethoscope, GiSpinalCoil, GiBrain } from 'react-icons/gi';
import { FaUserTie } from 'react-icons/fa';

const data = [
  {
  title: 'Animal Handlers & Livestock Caretakers',
  icon: <GiCow className="text-xl text-black" />,
  issues: [
    {
      title: 'Basic Herd Shield',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Daily caretakers',
      description: 'CBC, BP, Pulse, Blood Sugar',
    },
    {
      title: 'Advanced Handler Panel',
      icon: <GiSpinalCoil className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior handlers',
      description: 'Urine Test, X-ray (Chest/Back), ECG',
    },
    {
      title: 'ZoonoSafe+',
      icon: <GiChemicalDrop className="text-xl text-amber-400" />,
      descriptionTittle: 'Long-term animal exposure staff',
      description: 'Zoonotic panel, Liver Function, TB Screening',
    },
    {
      title: 'FitFarm Platinum',
      icon: <GiStethoscope className="text-xl text-amber-400" />,
      descriptionTittle: 'Supervisors & animal healthcare leads',
      description: 'Full body + Mental wellness + Diet consult',
    },
  ],
},
{
  title: 'Sports Coaches & Trainers',
  icon: <GiStrongMan className="text-xl text-black" />,
  issues: [
    {
      title: 'CoachCare Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Assistant trainers',
      description: 'BMI, Vitals, Blood Sugar',
    },
    {
      title: 'FlexScan Advanced',
      icon: <GiSpinalCoil className="text-xl text-amber-400" />,
      descriptionTittle: 'Mid-level coaches',
      description: 'Joint Test, Vitamin D/B12, ECG',
    },
    {
      title: 'ProMotion+',
      icon: <GiWeightLiftingUp className="text-xl text-amber-400" />,
      descriptionTittle: 'Strength & conditioning leads',
      description: 'Ortho Consult, MRI (if needed), Stress ECG',
    },
    {
      title: 'Elite Peak Health',
      icon: <GiStethoscope className="text-xl text-amber-400" />,
      descriptionTittle: 'National/Elite coaches',
      description: 'Cardiac, Neuro, Lifestyle Assessment',
    },
  ],
},
{
  title: 'Ground & Maintenance Staff',
  icon: <GiFarmTractor className="text-xl text-black" />,
  issues: [
    {
      title: 'SafetyFirst Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Daily ground staff',
      description: 'Vitals, BP, CBC',
    },
    {
      title: 'FieldWorker Plus',
      icon: <GiSpinalCoil className="text-xl text-amber-400" />,
      descriptionTittle: 'Outdoor technicians',
      description: 'Eye Test, Audiometry, PFT',
    },
    {
      title: 'RiskGuard 360',
      icon: <GiChemicalDrop className="text-xl text-amber-400" />,
      descriptionTittle: 'Equipment handlers',
      description: 'Ergonomic & Chemical Exposure Screening',
    },
    {
      title: 'SafeStrong Max',
      icon: <GiStethoscope className="text-xl text-amber-400" />,
      descriptionTittle: 'Site supervisors',
      description: 'Full Health Panel + PPE Training',
    },
  ],
},
{
  title: 'Admin & Event Staff',
  icon: <FaUserTie className="text-xl text-black" />,
  issues: [
    {
      title: 'DeskGuard Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'General office staff',
      description: 'Vitals, BMI, RBS',
    },
    {
      title: 'ScreenEase Advanced',
      icon: <GiSpinalCoil className="text-xl text-amber-400" />,
      descriptionTittle: 'Mid-senior level staff',
      description: 'Eye Test, ECG, Posture Eval',
    },
    {
      title: 'StressSmart+',
      icon: <GiBrain className="text-xl text-amber-400" />,
      descriptionTittle: 'HR & Event Planners',
      description: 'Mental Health Check, Sleep Tracker',
    },
    {
      title: 'Executive Vital+',
      icon: <GiStethoscope className="text-xl text-amber-400" />,
      descriptionTittle: 'Top management',
      description: 'Organ Screening + Lifestyle Coaching',
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
        Health Check-up Packages That Perform as Hard as Your Team
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