import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Home/Navbar';
import Whyniz from '../components/Home/Whyniz';
import Offer from '../components/Home/Offer';
import Audit from '../components/Home/Audit';
import Footer from '../components/Home/Footer';
import HotelSectorModal from '../components/Home/MainformModal';

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
  const [showModal, setShowModal] = useState(false);

  const [rotationAngles, setRotationAngles] = useState([0, 0, 0]);
  const dragInfo = useRef({
    isDragging: false,
    startX: 0,
    lastRotation: [0, 0, 0],
    circleIndex: null,
  });

  // ---- HERO/VIDEO REF and NAVBAR transparency logic ----
  const heroRef = useRef(null);
  const [isHeroInView, setIsHeroInView] = useState(true);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsHeroInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 100 });
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const animate = () => {
      setRotationAngles((prev) =>
        prev.map((angle, idx) => {
          const speed = [0.35, -0.25, 0.18][idx];
          return (angle + speed) % 360;
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const onDragStart = (e, circleIndex) => {
    e.preventDefault();
    dragInfo.current = {
      isDragging: true,
      startX: e.clientX || (e.touches && e.touches[0].clientX) || 0,
      lastRotation: [...rotationAngles],
      circleIndex,
    };
  };

  const onDragMove = (e) => {
    if (!dragInfo.current.isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const deltaX = clientX - dragInfo.current.startX;
    const speedFactor = 1.5;
    const newRotations = [...dragInfo.current.lastRotation];
    newRotations[dragInfo.current.circleIndex] = (newRotations[dragInfo.current.circleIndex] + deltaX * speedFactor) % 360;
    setRotationAngles(newRotations);
  };

  const onDragEnd = () => {
    dragInfo.current.isDragging = false;
  };

  const circles = isMobile
    ? []
    : [
        { items: sectors.slice(0, 9), radius: 100 },
        { items: sectors.slice(9, 18), radius: 160 },
        { items: sectors.slice(18, 28), radius: 230 },
      ];

  // --- renderRing (sector carousel) ---
  const renderRing = ({ items, radius }, circleIndex) =>
    items.map((sector, i) => {
      let pointerDown = false;
      let dragStarted = false;
      let downX = 0;
      const angle = ((i / items.length) * 2 * Math.PI + (rotationAngles[circleIndex] * Math.PI) / 180);
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      return (
        <div
          key={sector.name}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-medium text-teal-600 cursor-pointer hover:scale-105 transition duration-300 select-none"
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            fontSize: '14px',
            userSelect: 'none',
          }}
          onMouseDown={e => {
            pointerDown = true;
            dragStarted = false;
            downX = e.clientX;
            onDragStart(e, circleIndex);
          }}
          onMouseMove={e => {
            if (!pointerDown) return;
            if (!dragStarted && Math.abs(e.clientX - downX) > 4) {
              dragStarted = true;
            }
            if (dragInfo.current.isDragging) onDragMove(e);
          }}
          onMouseUp={e => {
            onDragEnd();
            if (pointerDown && !dragStarted) {
              navigate(sector.route);
            }
            pointerDown = false;
            dragStarted = false;
          }}
          onMouseLeave={e => {
            onDragEnd();
            pointerDown = false;
            dragStarted = false;
          }}
          onTouchStart={e => {
            if (!e.touches || e.touches.length !== 1) return;
            pointerDown = true;
            dragStarted = false;
            downX = e.touches[0].clientX;
            onDragStart(e, circleIndex);
          }}
          onTouchMove={e => {
            if (!pointerDown) return;
            if (!dragStarted && Math.abs(e.touches[0].clientX - downX) > 4) {
              dragStarted = true;
            }
            onDragMove(e);
          }}
          onTouchEnd={e => {
            onDragEnd();
            if (pointerDown && !dragStarted) {
              navigate(sector.route);
            }
            pointerDown = false;
            dragStarted = false;
          }}
        >
          {sector.name}
        </div>
      );
    });

  return (
    <div id="home">
      {/* Navbar gets transparent prop based on hero in view */}
      <Navbar transparent={isHeroInView} />

      {/* HERO VIDEO SECTION & Shadow (inline, not separate file) */}
      <section ref={heroRef} className="relative w-full h-[100vh] flex flex-col justify-end items-center select-none overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/static/hero-placeholder.jpg" // (optional placeholder)
          src="/your/video.mp4" // <-- UPDATE to your actual video file location
        />
        {/* Shadow fade at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.18) 65%,rgba(0,0,0,0.43) 100%)',
            zIndex: 2,
          }}
        />
        {/* You can add headline content here, if needed */}
      </section>

      {/* Rest of your page... */}
      <div className="bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1] px-4 sm:px-6 py-20 text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="flex flex-col mt-15 justify-center items-center md:items-start text-center md:text-left h-full animate-blur-fade">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-teal-600 mb-6">
              Sector-Specific Corporate Health & Wellness Solutions – Pan India
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-4 max-w-md">
              Revolutionize Employee Health. Boost Business Performance.
            </p>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition select-none">
              Book Free Audit
            </button>
          </div>

          {!isMobile ? (
            <div className="relative mx-auto w-[500px] h-[500px] mt-8 select-none">
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="text-center">
                  <p className="font-bold text-3xl text-teal-600 select-text">28+</p>
                  <p className="text-gray-500 text-sm select-text">Sectors</p>
                </div>
              </div>
              <div className="absolute inset-0 z-10 cursor-grab">
                {circles.map((circle, idx) => (
                  <div key={idx} className="absolute inset-0 pointer-events-auto">
                    {renderRing(circle, idx)}
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <div
                  className="absolute rounded-full border border-teal-600 opacity-30"
                  style={{ width: 200, height: 200 }}
                />
                <div
                  className="absolute rounded-full border border-teal-600 opacity-30"
                  style={{ width: 320, height: 320 }}
                />
                <div
                  className="absolute rounded-full border border-teal-600 opacity-30"
                  style={{ width: 460, height: 460 }}
                />
              </div>
            </div>
          ) : (
            <div className="mt-8 w-full overflow-x-auto">
              <div className="flex justify-center items-center space-x-3 px-4 py-2 w-max mx-auto">
                {sectors.map((sector) => (
                  <div
                    key={sector.name}
                    onClick={() => navigate(sector.route)}
                    className="flex-shrink-0 bg-white border border-teal-500 rounded-full px-4 py-2 text-sm text-teal-700 font-medium cursor-pointer hover:bg-teal-50 transition whitespace-nowrap shadow-sm select-none"
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
      <HotelSectorModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default SectorLanding;