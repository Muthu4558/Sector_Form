import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { GiCow, GiHealthNormal, GiMuscleUp, GiShield, GiStethoscope, GiBrain, GiVirus, GiDroplets, GiLifeBar, GiMechanicalArm, GiWeightLiftingUp, GiDesk, GiComputerFan, GiHeartBeats, GiHealthIncrease, GiHazmatSuit, GiChemicalDrop } from "react-icons/gi";
import { FaHandHoldingWater, FaSyringe, FaTruckLoading, FaTemperatureHigh } from "react-icons/fa";
import { MdOutlineSupervisorAccount } from "react-icons/md";


const data = [
  {
  title: 'Dairy Farm Workers & Milkers',
  icon: <GiCow className="text-xl text-black" />,
  issues: [
    {
      title: 'Basic Hoof Package',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'daily field workers, fresh joiners',
      description: 'CBC, BP Check, Blood Sugar, Skin Exam',
    },
    {
      title: 'Active Udder Package',
      icon: <GiMuscleUp className="text-xl text-amber-400" />,
      descriptionTittle: 'senior field staff',
      description: 'All Basic + Eye Check, Liver & Renal Panel',
    },
    {
      title: 'Stamina Plus Package',
      icon: <GiShield className="text-xl text-amber-400" />,
      descriptionTittle: 'aging or high-labor staff',
      description: 'All above + Vitamin D, ECG, Urinalysis',
    },
    {
      title: 'Safety Supreme Package',
      icon: <GiChemicalDrop className="text-xl text-amber-400" />,
      descriptionTittle: 'For supervisors or frequently ill workers',
      description: 'All above + Chest X-ray, Spirometry',
    },
  ],
},
{
  title: 'Veterinary & Animal Health Staff',
  icon: <GiStethoscope className="text-xl text-black" />,
  issues: [
    {
      title: 'Vital Vet Package',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Entry-level assistants',
      description: 'CBC, LFT, Hepatitis Screening',
    },
    {
      title: 'Pro-Vet Wellness Plan',
      icon: <GiBrain className="text-xl text-amber-400" />,
      descriptionTittle: 'Mid-level vet professionals',
      description: 'All above + Tetanus, Eye, ECG',
    },
    {
      title: 'Infection Shield Package',
      icon: <GiVirus className="text-xl text-amber-400" />,
      descriptionTittle: ' vets in direct animal contact',
      description: 'All above + Vaccination Review, Chest X-ray',
    },
    {
      title: 'Critical Care Pro+',
      icon: <GiShield className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior vet doctors, admin',
      description: 'All above + Spirometry, Advanced Blood Panel',
    },
  ],
},
{
  title: 'Logistics & Processing Workers',
  icon: <FaTruckLoading className="text-xl text-black" />,
  issues: [
    {
      title: 'Milk Mover Essentials',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: ' drivers & loaders',
      description: 'BP, Sugar, ECG',
    },
    {
      title: 'Pack & Process Shield',
      icon: <GiMechanicalArm className="text-xl text-amber-400" />,
      descriptionTittle: 'For plant floor workers',
      description: 'All above + Hearing Test, Renal Function',
    },
    {
      title: 'Cool Crew Care Plan',
      icon: <GiDroplets className="text-xl text-amber-400" />,
      descriptionTittle: 'For cold storage crew',
      description: 'All above + Vitamin Panel, Liver Test',
    },
    {
      title: 'Heat Zone Ultra Check',
      icon: <FaTemperatureHigh className="text-xl text-amber-400" />,
      descriptionTittle: 'Machinery operators, forklift staff',
      description: 'All above + Eye, Chest X-ray, Cardiac Profile',
    },
  ],
},
{
  title: 'Admin, Managers & Office Teams',
  icon: <MdOutlineSupervisorAccount className="text-xl text-black" />,
  issues: [
    {
      title: 'Desk Fit Basic',
      icon: <GiDesk className="text-xl text-amber-400" />,
      descriptionTittle: 'Entry-level clerks',
      description: 'BP, Sugar, BMI',
    },
    {
      title: 'Manager’s Vital Plan',
      icon: <GiComputerFan className="text-xl text-amber-400" />,
      descriptionTittle: 'Mid-management',
      description: 'All above + Lipid Profile, Eye Test',
    },
    {
      title: 'Smart Leader Check-up',
      icon: <GiHeartBeats className="text-xl text-amber-400" />,
      descriptionTittle: 'Supervisors & HR heads',
      description: 'All above + ECG, Liver, Vitamin D',
    },
    {
      title: 'Executive Wellness Gold',
      icon: <GiHealthIncrease className="text-xl text-amber-400" />,
      descriptionTittle: 'Top management',
      description: 'All above + Stress & Sleep Assessment, TMT',
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
        Layered Wellness, Tailored Precision – Health Check-ups That Fit Every Role
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