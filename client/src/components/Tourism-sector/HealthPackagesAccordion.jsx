import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { FaPlus, FaTruckLoading, FaUserTie } from "react-icons/fa";
import { GiEyeShield, GiHealingShield, GiHealthNormal, GiHeartBeats, GiHospital, GiLiver, GiRoad, GiShield, GiSleepy, GiStomach } from "react-icons/gi";
import { MdOutlineSupport, MdOutlineTravelExplore } from "react-icons/md";



const data = [
  {
    title: 'Tour Guides & Coordinators',
    icon: <MdOutlineTravelExplore className="text-xl text-black" />,
    issues: [
      {
        title: 'Trail Ready Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'New joiners',
        description: 'Core Parameters: CBC, BP, ECG, ENT, Eye Check',
      },
      {
        title: 'Explorer Plus',
        icon: <GiStomach className="text-xl text-amber-400" />,
        descriptionTittle: 'Field staff',
        description: 'Core Parameters: Vitamin D/B12, Liver & Renal, Thyroid',
      },
      {
        title: 'Journey Shield Advanced',
        icon: <GiShield className = "text-xl text-amber-400" />,
      descriptionTittle: 'Senior coordinators',
      description: 'Core Parameters: Cardiac Profile, Stress Test, Audiometry',
    },
  {
    title: 'Global Trek Master',
    icon: <GiSleepy className="text-xl text-amber-400" />,
    descriptionTittle: 'Managers on international routes',
    description: 'Core Parameters: Holter, Sleep Apnea Study, Full Body Check',
  },
],
},
{
  title: 'Transport & Logistics Staff',
    icon: <FaTruckLoading className="text-xl text-black" />,
      issues: [
        {
          title: 'Driver’s Basic',
          icon: <GiEyeShield className="text-xl text-amber-400" />,
          descriptionTittle: 'Entry-level',
          description: 'Core Parameters: Blood Sugar, BP, Eye Check',
        },
        {
          title: 'Fleet Wellness',
          icon: <GiLiver className="text-xl text-amber-400" />,
          descriptionTittle: 'Mid-level',
          description: 'Core Parameters: ECG, Lipid Profile, Liver Function',
        },
        {
          title: 'Transport Shield',
          icon: <GiShield className="text-xl text-amber-400" />,
          descriptionTittle: 'Long-distance staff',
          description: 'Core Parameters: Heart Scan, Sleep Test, Spine X-ray',
        },
        {
          title: 'On-Road Pro+',
          icon: <GiRoad className="text-xl text-amber-400" />,
          descriptionTittle: 'Senior transport crew',
          description: 'Core Parameters: Stress Test, Neurological Exam',
        },
      ],
},
{
  title: 'Hospitality & Frontline Staff',
    icon: <MdOutlineSupport className="text-xl text-black" />,
      issues: [
        {
          title: 'Frontline Fit',
          icon: <GiHealthNormal className="text-xl text-amber-400" />,
          descriptionTittle: 'Entry-level staff',
          description: 'Core Parameters: BMI, BP, Hemogram',
        },
        {
          title: 'Hospitality Plus',
          icon: <FaPlus className="text-xl text-amber-400" />,
          descriptionTittle: 'Housekeeping, waiters',
          description: 'Core Parameters: Vision, Dental, Vitamin Profile',
        },
        {
          title: 'Guest Care Wellness',
          icon: <GiHospital className="text-xl text-amber-400" />,
          descriptionTittle: 'Front desk',
          description: 'Core Parameters: Allergy Screening, ENT, ECG',
        },
        {
          title: 'Elite Service Pro',
          icon: <GiHeartBeats className="text-xl text-amber-400" />,
          descriptionTittle: 'Managers & leads',
          description: 'Core Parameters: Advanced Cardiac & Lifestyle Panel',
        },
      ],
},
{
  title: 'Sales & Marketing Professionals',
    icon: <FaUserTie className="text-xl text-black" />,
      issues: [
        {
          title: 'Sales Hustle Basic',
          icon: <GiHealthNormal className="text-xl text-amber-400" />,
          descriptionTittle: 'Field reps',
          description: 'Core Parameters: Sugar, BP, CBC',
        },
        {
          title: 'Pitch Ready Plus',
          icon: <GiEyeShield className="text-xl text-amber-400" />,
          descriptionTittle: 'Territory execs',
          description: 'Core Parameters: Thyroid, Liver, Vision',
        },
        {
          title: 'Road Warrior Wellness',
          icon: <GiSleepy className="text-xl text-amber-400" />,
          descriptionTittle: 'Frequent travelers',
          description: 'Core Parameters: Cardiac Risk, Sleep & Stress Test',
        },
        {
          title: 'Global Sales Leader',
          icon: <GiHealingShield className="text-xl text-amber-400" />,
          descriptionTittle: 'National heads',
          description: 'Core Parameters: Full Body Screening, Lifestyle Profile',
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
        Precision Health for the People Who Keep the World Moving
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