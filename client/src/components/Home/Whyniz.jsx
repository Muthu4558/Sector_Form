import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHeartbeat, FaUserCheck, FaChartLine, FaBriefcaseMedical } from 'react-icons/fa';

const Whyniz = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const benefits = [
    {
      icon: <FaHeartbeat className="text-teal-600 text-3xl" />,
      title: 'Tailored Health Check-ups',
      description:
        'Our medical panels are customized to your industry’s risk profile—from sedentary desk jobs to high-mobility field roles.',
    },
    {
      icon: <FaUserCheck className="text-teal-600 text-3xl" />,
      title: 'Personalized Wellness Interventions',
      description:
        'We suggest wellness plans by employee category—like stress relief, lifestyle coaching, chronic care & diet planning.',
    },
    {
      icon: <FaChartLine className="text-teal-600 text-3xl" />,
      title: 'Data-Driven Insights',
      description:
        'Receive detailed analytical reports—by department, segment, or role—to guide HR and wellness strategy.',
    },
    {
      icon: <FaBriefcaseMedical className="text-teal-600 text-3xl" />,
      title: 'Impact on Business KPIs',
      description: (
        <ul className="list-none list-inside text-sm mt-1 space-y-1 ">
          <li>✔ Increase employee productivity</li>
          <li>✔ Reduce sick leaves & absenteeism</li>
          <li>✔ Decrease hospitalization risks</li>
          <li>✔ Lower healthcare costs for families</li>
        </ul>
      ),
    },
  ];

  return (
    <div id='about' className="bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4" data-aos="fade-up">
          Why Choose Nizcare for Corporate Wellness?
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Empower your employees. Strengthen your business. See measurable change with our health-first, data-driven wellness approach.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-left flex items-start space-x-4"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-teal-700">{item.title}</h3>
                <div className="text-gray-700 mt-1 text-sm leading-relaxed">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whyniz;
