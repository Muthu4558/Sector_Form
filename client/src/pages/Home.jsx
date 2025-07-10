import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHeartbeat, FaChartLine, FaPhoneAlt, FaLaptopMedical } from 'react-icons/fa';
import { MdOutlineHealthAndSafety, MdOutlineFamilyRestroom } from 'react-icons/md';
import { IoIosChatbubbles } from 'react-icons/io';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-900">🏢 Sector-Specific Corporate Health & Wellness Solutions</h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mb-8">Revolutionize Employee Health. Boost Business Performance – Pan India.</p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">Schedule a Demo</button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">Talk to an Expert</button>
        </div>
      </section>

      {/* Why Choose Nizcare */}
      <section className="py-20 px-6 bg-white" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">🔍 Why Choose Nizcare for Corporate Wellness?</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="flex gap-4 items-start" data-aos="fade-right">
            <FaLaptopMedical size={30} className="text-blue-500 mt-1" />
            <div>
              <h4 className="font-bold text-lg">Tailored Health Check-ups</h4>
              <p>Medical panels aligned with your industry's risk profile—from desk jobs to field workers.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start" data-aos="fade-left">
            <MdOutlineHealthAndSafety size={30} className="text-green-500 mt-1" />
            <div>
              <h4 className="font-bold text-lg">Personalized Wellness Interventions</h4>
              <p>Focused wellness by employee category—stress, diet, chronic care, and more.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start" data-aos="fade-right">
            <FaChartLine size={30} className="text-purple-500 mt-1" />
            <div>
              <h4 className="font-bold text-lg">Data-Driven Insights</h4>
              <p>Analytical health reports to drive informed HR & wellness decisions.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start" data-aos="fade-left">
            <FaHeartbeat size={30} className="text-red-500 mt-1" />
            <div>
              <h4 className="font-bold text-lg">Business KPI Impact</h4>
              <ul className="list-disc list-inside">
                <li>Boost productivity</li>
                <li>Cut down absenteeism</li>
                <li>Reduce hospitalization</li>
                <li>Lower long-term costs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gradient-to-r from-teal-100 to-blue-100 px-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">🏥 What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div data-aos="zoom-in">
            <FaLaptopMedical className="mx-auto text-blue-600 mb-4" size={40} />
            <p>🎯 Sector-Specific Health Packages</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="100">
            <MdOutlineHealthAndSafety className="mx-auto text-green-600 mb-4" size={40} />
            <p>🩺 Preventive Health Checks</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <FaChartLine className="mx-auto text-purple-600 mb-4" size={40} />
            <p>📈 Health Risk Dashboards</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <IoIosChatbubbles className="mx-auto text-pink-600 mb-4" size={40} />
            <p>🧘‍♀️ Mental Health & Lifestyle Coaching</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400">
            <MdOutlineFamilyRestroom className="mx-auto text-orange-600 mb-4" size={40} />
            <p>👨‍👩‍👧 Family Wellness Programs</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="500">
            <FaHeartbeat className="mx-auto text-red-600 mb-4" size={40} />
            <p>🚑 Telemedicine & Chronic Care</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-white text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">🚀 Join 100+ Corporates Across India</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-700">
          Whether you're a 50-member startup or a 10,000+ enterprise, Nizcare offers pan-India wellness coordination across branches and factories.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">Book Free Health Audit</button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">Request a Quote</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-blue-900 text-white text-center">
        <p>💬 Need Help? Chat with our consultants or email <a href="mailto:wellness@nizcare.co" className="underline">wellness@nizcare.co</a></p>
        <div className="mt-2 flex justify-center gap-2">
          <FaPhoneAlt />
          <span>+91-XXXXXXXXXX</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;