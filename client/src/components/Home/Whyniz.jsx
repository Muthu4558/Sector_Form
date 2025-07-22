import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHeartbeat, FaUserCheck, FaChartLine, FaBriefcaseMedical } from 'react-icons/fa';

// Helper for svg arc
function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");

  return d;
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

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

  // For scroll progress and animating steps
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  // Update activeStep based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = rect.top - windowHeight / 6;
      const end = rect.bottom - windowHeight / 2.2;

      if (start > 0) {
        setActiveStep(0);
        return;
      }

      if (end < 0) {
        setActiveStep(benefits.length);
        return;
      }

      // Progress 0 to 1 as we scroll through
      const progress = Math.min(1, Math.max(0, (windowHeight / 2 - rect.top) / (rect.height - windowHeight / 6)));
      // Step zones: 0,1,2,3,4 (4 = all done)
      const step = Math.floor(progress * benefits.length + 0.15);
      setActiveStep(step);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, []);

  // Mobile: stacked, Desktop: split with sticky
  return (
    <div
      id="about"
      className="relative bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1] py-16 px-4 sm:px-6 lg:px-12"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4 text-center"
          data-aos="fade-up"
        >
          Why Choose Nizcare for Corporate Wellness?
        </h2>
        <p
          className="text-gray-600 text-base sm:text-lg mb-10 max-w-2xl mx-auto text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Empower your employees. Strengthen your business. See measurable change with our health-first, data-driven wellness approach.
        </p>
        <div className="mt-12 flex flex-col md:flex-row md:space-x-10 items-stretch justify-between relative">
          {/* LEFT COLUMN: RING MODEL */}
          <div className="md:w-2/5 flex-shrink-0 flex flex-col items-center md:items-end relative mt-25">
            <div
              className={`
                hidden md:flex
                sticky top-28 self-start
                flex-col items-center
                z-10
                transition-all duration-700
              `}
              style={{ minHeight: 390 }}
            >
              {/* SVG Ring with 4 segments */}
              <RingProgress steps={4} active={activeStep} />
              {/* Step indicators */}
              <div className="flex flex-col items-center mt-7 space-y-2">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className={`
                      w-2.5 h-2.5 rounded-full
                      ${activeStep > i ? 'bg-teal-600' : 'bg-teal-200'} 
                      transition-all duration-500
                    `}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CARDS */}
          <div className="md:w-3/5 flex flex-col gap-8">
            {benefits.map((item, index) => (
              <div
                key={index}
                className={`
                  bg-white p-6 rounded-xl shadow-md
                  transition-all duration-500
                  text-left flex items-start space-x-4
                  opacity-100
                  ${activeStep > index ? 'opacity-100 scale-100 translate-y-0'
                    : activeStep === index ? 'opacity-100 scale-105 translate-y-0'
                    : 'opacity-60 scale-95 translate-y-5'}
                  z-[${index + 1}]
                `}
                data-aos="zoom-in"
                data-aos-delay={index * 180}
              >
                <div>{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-700">{item.title}</h3>
                  <div className="text-gray-700 mt-1 text-sm leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// SVG ring, fills up to step 'active'
function RingProgress({ steps = 4, active }) {
  const size = 210, r = 80, stroke = 22, center = size / 2;
  // Colors
  const baseColor = '#b2dfdb';
  const activeColor = '#14b8a6';

  // Each segment is 90deg for 4 steps
  const segmentAngles = Array.from({ length: steps }, (_, i) => ({
    start: i * 90,
    end: (i + 1) * 90 - 7, // gap of 7deg for visual separation
  }));

  return (
    <svg width={size} height={size} className="mb-2">
      {/* All segments as background */}
      {segmentAngles.map((seg, i) => (
        <path
          key={i}
          d={describeArc(center, center, r, seg.start, seg.end)}
          fill="none"
          stroke={baseColor}
          strokeWidth={stroke}
          strokeLinecap="round"
          style={{
            filter: 'drop-shadow(0 2px 6px rgba(52,142,175,0.08))',
            opacity: 0.5,
          }}
        />
      ))}
      {/* Filled segments */}
      {segmentAngles.map((seg, i) =>
        i < active ? (
          <path
            key={i}
            d={describeArc(center, center, r, seg.start, seg.end)}
            fill="none"
            stroke={activeColor}
            strokeWidth={stroke}
            strokeLinecap="round"
            style={{
              filter: 'drop-shadow(0 2px 12px #14b8a655)',
              transition: 'all 0.6s cubic-bezier(.7,1.4,.3,.9)',
              opacity: 1,
            }}
          />
        ) : null
      )}
      <circle
        cx={center}
        cy={center}
        r={60}
        fill="#fff"
        stroke="#e0f2f1"
        strokeWidth="2"
      />
      <text
        x={center}
        y={center}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="28px"
        fontWeight="bold"
        fill="#14b8a6"
      >
        {active}
      </text>
      <text
        x={center}
        y={center + 38}
        textAnchor="middle"
        fontSize="15px"
        fill="#455a64"
      >Benefits</text>
    </svg>
  );
}

export default Whyniz;