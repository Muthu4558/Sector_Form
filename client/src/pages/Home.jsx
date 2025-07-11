import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Home/Navbar';
import Whyniz from '../components/Home/Whyniz';
import Offer from '../components/Home/Offer';
import Audit from '../components/Home/Audit';
import Footer from '../components/Home/Footer';

const sectors = [
  { name: 'Cement', route: '/cement' },
  { name: 'Fertilizer', route: '/fertilizer' },
  { name: 'Automobile', route: '/automobile' },
  { name: 'Pharma', route: '/pharma' },
  { name: 'Hotels', route: '/hotel' },
  { name: 'IT', route: '/it' },
  { name: 'Banks', route: '/banks' },
  { name: 'Airlines', route: '/airlines' },
  { name: 'Leather', route: '/leather-industry' },
  { name: 'Cottage', route: '/cottage' },
  { name: 'Chemical', route: '/chemical' },
  { name: 'Mining', route: '/mining' },
  { name: 'Heavy', route: '/heavy-industry' },
  { name: 'Textile', route: '/textile' },
  { name: 'ITES', route: '/ites' },
  { name: 'Food', route: '/food' },
  { name: 'Port', route: '/shipping' },
  { name: 'Petroleum', route: '/petroleum' },
  { name: 'Telecom', route: '/telecom' },
  { name: 'Water Treatment', route: '/water-treatment' },
  { name: 'Dairy', route: '/dairy' },
  { name: 'Tourism', route: '/tourism' },
  { name: 'Steel', route: '/steel' },
  { name: 'Aerospace', route: '/aerospace-defense' },
  { name: 'Paper', route: '/paper' },
  { name: 'Real Estate', route: '/real-estate' },
  { name: 'Sports', route: '/sports' },
  { name: 'Metals', route: '/metals' },
];

const SectorLanding = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const circles = isMobile
    ? []
    : [
      { items: sectors.slice(0, 9), radius: 100 },
      { items: sectors.slice(9, 18), radius: 160 },
      { items: sectors.slice(18, 28), radius: 230 },
    ];

  const renderRing = ({ items, radius }) =>
    items.map((sector, i) => {
      const angle = (i / items.length) * 2 * Math.PI;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      return (
        <div
          key={sector.name}
          onClick={() => navigate(sector.route)}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-medium text-teal-600 cursor-pointer hover:scale-105 transition duration-300"
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            fontSize: '14px',
          }}
        >
          {sector.name}
        </div>
      );
    });

  return (
    <div id='home'>
      <Navbar />
      <div className=" bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1] px-4 sm:px-6 py-20 text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Left Content */}
          <div
            // data-aos="fade-right"
            className="flex flex-col mt-15 justify-center items-center md:items-start text-center md:text-left h-full"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-teal-600 mb-6">
              Sector-Specific Corporate Health & Wellness Solutions – Pan India
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-4 max-w-md">
              Revolutionize Employee Health. Boost Business Performance.
            </p>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
              Book Free Audit
            </button>
          </div>


          {/* Right: Rotating Circle or Scrollable List */}
          {!isMobile ? (
            // Desktop View
            <div className="relative mx-auto w-[500px] h-[500px] mt-8">
              {/* Center Label */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="text-center">
                  <p className="font-bold text-3xl text-teal-600">28+</p>
                  <p className="text-gray-500 text-sm">Sectors</p>
                </div>
              </div>

              {/* Rotating Sectors */}
              <div className="absolute inset-0 z-10 animate-spin-slower">
                {circles.map(renderRing)}
              </div>

              {/* Static Circle Rings */}
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <div className="absolute rounded-full border border-teal-600 opacity-30" style={{ width: 200, height: 200 }}></div>
                <div className="absolute rounded-full border border-teal-600 opacity-30" style={{ width: 320, height: 320 }}></div>
                <div className="absolute rounded-full border border-teal-600 opacity-30" style={{ width: 460, height: 460 }}></div>
              </div>
            </div>
          ) : (
            // Mobile View: Center-Aligned Scrollable Chips
            <div className="mt-8 w-full overflow-x-auto">
              <div className="flex justify-center items-center space-x-3 px-4 py-2 w-max mx-auto">
                {sectors.map((sector) => (
                  <div
                    key={sector.name}
                    onClick={() => navigate(sector.route)}
                    className="flex-shrink-0 bg-white border border-teal-500 rounded-full px-4 py-2 text-sm text-teal-700 font-medium cursor-pointer hover:bg-teal-50 transition whitespace-nowrap shadow-sm"
                  >
                    {sector.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Whyniz />
      <Offer />
      <Audit />
      <Footer />
    </div>
  );
};

export default SectorLanding;