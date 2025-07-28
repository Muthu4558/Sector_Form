import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import {
  GiCargoCrate,
  GiMuscleUp,
  GiWaterDrop,
  GiHealing,
  GiSteeringWheel,
  GiHeartBattery,
  GiAnchor,
  GiBrain,
  GiCargoShip,
  GiTimeTrap,
  GiHealingShield,
  GiHealthIncrease,
  GiSecurityGate,
  GiHealthNormal,
  GiNightSleep,
  GiLifeSupport,
} from 'react-icons/gi';
import { FaPlus } from 'react-icons/fa';


const data = [
  {
    title: 'Dock & Cargo Workers',
    icon: <GiCargoCrate className="text-xl text-black" />,
    issues: [
      {
        title: 'Basic Movement Check',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Daily loaders, helpers',
        description: 'Core Parameters : X-ray (Spine), BP, BMI, CBC, Vitamin D',
      },
      {
        title: 'Strength & Endurance',
        icon: <GiMuscleUp className="text-xl text-amber-400" />,
        descriptionTittle: 'Crane operators, physical workers',
        description: 'Core Parameters : ECG, Creatinine, Electrolytes, Muscle & Joint Assessment',
      },
      {
        title: 'Hydration & Heat Safety',
        icon: <GiWaterDrop className="text-xl text-amber-400" />,
        descriptionTittle: 'Outdoor staff under sun exposure',
        description: 'Core Parameters : Kidney function, Electrolyte Panel, Urine Routine',
      },
      {
        title: 'Total Worker Wellness',
        icon: <GiHealing className="text-xl text-amber-400" />,
        descriptionTittle: 'Senior dock staff, shift leads',
        description: 'Core Parameters : Full Body Checkup, Ortho consult, Eye check, Hearing test, Liver Panel',
      },
    ],
  },
  {
    title: 'Maritime Crew',
    icon: <GiSteeringWheel className="text-xl text-black" />,
    issues: [
      {
        title: 'SeaFit Essentials',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Junior crew members',
        description: 'Core Parameters : ECG, BP, Glucose, Lipid, Sleep Quality Checklist',
      },
      {
        title: 'Cardio & Sleep Panel',
        icon: <GiHeartBattery className="text-xl text-amber-400" />,
        descriptionTittle: 'Deck engineers, technical staff',
        description: 'Core Parameters : 2D Echo, TMT, Sleep Apnea Screening, Vitamin B12',
      },
      {
        title: 'Long Voyage Survival',
        icon: <GiAnchor className="text-xl text-amber-400" />,
        descriptionTittle: 'Crew on longer voyages',
        description: 'Core Parameters : Liver Function, Renal Function, Stress Marker, Eye Check',
      },
      {
        title: 'Mental Wellness Pro',
        icon: <GiBrain className="text-xl text-amber-400" />,
        descriptionTittle: 'Senior crew and ship managers',
        description: 'Core Parameters : Psychological Assessment, Stress Test, Hormonal Panel, Nutrition Counseling',
      },
    ],
  },
  {
    title: 'Port Administration & Logistics',
    icon: <GiCargoShip className="text-xl text-black" />,
    issues: [
      {
        title: 'Desk Health Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Entry-level office staff',
        description: 'Core Parameters : BMI, BP, Glucose, Eye Check, CBC',
      },
      {
        title: 'Work-Life Balance Plan',
        icon: <GiTimeTrap className="text-xl text-amber-400" />,
        descriptionTittle: 'Planners, document controllers',
        description: 'Core Parameters : Thyroid, Lipid, Liver Function, Stress Index',
      },
      {
        title: 'Metabolic Rescue Pack',
        icon: <GiHealingShield className="text-xl text-amber-400" />,
        descriptionTittle: 'Managers, shift supervisors',
        description: 'Core Parameters : HbA1c, ECG, Vitamin D/B12, Nutrition Consult',
      },
      {
        title: '360 Admin Care',
        icon: <GiHealthIncrease className="text-xl text-amber-400" />,
        descriptionTittle: 'Senior logistics coordinators',
        description: 'Core Parameters : Full Body Profile, Cardio Panel, Mental Health Screening, Sleep Quality',
      },
    ],
  },
  {
    title: 'Security & Safety Officers',
    icon: <GiSecurityGate className="text-xl text-black" />,
    issues: [
      {
        title: 'Quick Shift Check',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Gate staff, patrol guards',
        description: 'Core Parameters : BP, ECG, Vision, CBC',
      },
      {
        title: 'Fatigue Fighter Panel',
        icon: <GiNightSleep className="text-xl text-amber-400" />,
        descriptionTittle: 'Long shift officers',
        description: 'Core Parameters : Sleep Assessment, Hormonal Profile, Iron Studies',
      },
      {
        title: 'Response Ready Health',
        icon: <GiLifeSupport className="text-xl text-amber-400" />,
        descriptionTittle: 'Emergency & fire responders',
        description: 'Core Parameters : Cardiac Screening, Vitamin Panel, Mental Health Assessment',
      },
      {
        title: 'Defender Max Package',
        icon: <GiMuscleUp className="text-xl text-amber-400" />,
        descriptionTittle: 'Senior safety supervisors',
        description: 'Core Parameters : Full Body Screening, Physical Fitness Test, Diet Counseling',
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
        Charting Health – Role-Specific Check-ups That Keep Your Crew Sea-Ready
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