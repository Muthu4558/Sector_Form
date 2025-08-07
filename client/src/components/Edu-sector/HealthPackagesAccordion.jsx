import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { FaChalkboardTeacher, FaLaptopCode, FaPeopleCarry } from 'react-icons/fa';
import { GiCircuitry, GiComputerFan, GiDesk, GiEyeTarget, GiFirstAidKit, GiHealthIncrease, GiHealthNormal, GiMeditation, GiShieldBash, GiShieldReflect, GiTalk } from 'react-icons/gi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';


const data = [
  {
  title: 'Teaching & Academic Staff',
  icon: <FaChalkboardTeacher className="text-xl text-black" />,
  issues: [
    {
      title: 'EduCare Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'All Teachers',
      description: 'CBC, BP, Sugar, BMI',
    },
    {
      title: 'Voice & Vital+',
      icon: <GiTalk className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior Educators',
      description: 'ENT, Thyroid, ECG, LFT',
    },
    {
      title: 'EduStress Pro',
      icon: <GiMeditation className="text-xl text-amber-400" />,
      descriptionTittle: 'Academic Heads',
      description: 'Cortisol, Vitamin D, Lipid, ECG',
    },
    {
      title: 'EduMaster Wellness',
      icon: <GiHealthIncrease className="text-xl text-amber-400" />,
      descriptionTittle: 'Professors with 10+ yrs',
      description: 'Stress Test, Eye Check, Master Health Check',
    },
  ],
},
{
  title: 'Administrative & Management Staff',
  icon: <MdOutlineAdminPanelSettings className="text-xl text-black" />,
  issues: [
    {
      title: 'AdminFit Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Office Staff',
      description: 'CBC, Lipid, Sugar, BP',
    },
    {
      title: 'Vision & Vital+',
      icon: <GiEyeTarget className="text-xl text-amber-400" />,
      descriptionTittle: 'Registrars/Admin Leads',
      description: 'Eye Test, ECG, LFT',
    },
    {
      title: 'DeskPro Care',
      icon: <GiDesk className="text-xl text-amber-400" />,
      descriptionTittle: 'Mid-management',
      description: 'Vitamin B12, D, Stress Profile, USG',
    },
    {
      title: 'AdminMaster Shield',
      icon: <GiShieldBash className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior Mgmt/Principals',
      description: 'Cardiac Risk, TMT, Thyroid, Echo',
    },
  ],
},
{
  title: 'Tech & Product Teams (EdTech)',
  icon: <FaLaptopCode className="text-xl text-black" />,
  issues: [
    {
      title: 'CodeFit Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Junior Devs',
      description: 'CBC, Sugar, Vitamin D',
    },
    {
      title: 'ScreenCare+',
      icon: <GiComputerFan className="text-xl text-amber-400" />,
      descriptionTittle: 'Product Designers',
      description: 'Eye Test, BP, Spine Screening',
    },
    {
      title: 'Debug Wellness',
      icon: <GiCircuitry className="text-xl text-amber-400" />,
      descriptionTittle: 'Mid-Level Tech Leads',
      description: 'TMT, Lipid, Liver Panel',
    },
    {
      title: 'TechMaster 360',
      icon: <GiHealthIncrease className="text-xl text-amber-400" />,
      descriptionTittle: 'CTOs/PMs/Sr Engineers',
      description: 'Master Health Check + Stress Panel',
    },
  ],
},
{
  title: 'Support & Ground Staff',
  icon: <FaPeopleCarry className="text-xl text-black" />,
  issues: [
    {
      title: 'GroundHealth Basic',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'All Workers',
      description: 'BP, Sugar, BMI',
    },
    {
      title: 'FirstLine+',
      icon: <GiFirstAidKit className="text-xl text-amber-400" />,
      descriptionTittle: 'Field/Housekeeping',
      description: 'CBC, X-Ray, ECG',
    },
    {
      title: 'VitalShield',
      icon: <GiShieldReflect className="text-xl text-amber-400" />,
      descriptionTittle: 'Drivers, Security',
      description: 'General Health + Ortho',
    },
    {
      title: 'SupportMaster',
      icon: <GiHealthIncrease className="text-xl text-amber-400" />,
      descriptionTittle: 'Long-Term Support Staff',
      description: 'Full Body Checkup',
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
        Custom Health Check-up Plans for Every Campus Role
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