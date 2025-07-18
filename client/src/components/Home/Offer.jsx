import React, { useRef, useState } from 'react';
import {
  FaBullseye,
  FaStethoscope,
  FaChartBar,
  FaPrayingHands,
  FaUsers,
  FaAmbulance,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const offerList = [
  { icon: <FaBullseye className="text-3xl text-teal-600" />, text: 'Sector-Specific Health Packages (Onsite & Offsite)' },
  { icon: <FaStethoscope className="text-3xl text-teal-600" />, text: 'Annual & Bi-Annual Preventive Health Checks' },
  { icon: <FaChartBar className="text-3xl text-teal-600" />, text: 'Health Risk Assessment & Dashboards' },
  { icon: <FaPrayingHands className="text-3xl text-teal-600" />, text: 'Stress, Mental Health & Lifestyle Coaching' },
  { icon: <FaUsers className="text-3xl text-teal-600" />, text: 'Family Wellness Programs' },
  { icon: <FaAmbulance className="text-3xl text-teal-600" />, text: 'Telemedicine & Chronic Disease Management' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.88,
    y: 60,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 230,
      damping: 18,
      mass: 0.8,
    },
  },
  hover: {
    scale: 1.06,
    boxShadow: "0 16px 38px 0 rgba(20,184,166,0.13),0 1.5px 9px #5eead49a",
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 13,
    },
  },
};

const blobSettings = [
  // Top-left
  {
    className: "absolute top-[-70px] left-[-90px] w-72 h-72 z-0",
    style: {
      filter: "blur(36px)",
      background: "radial-gradient(circle at 60% 50%, #99f6e4 56%, #14b8a6 96%, transparent 100%)",
      borderRadius: "58% 62% 46% 62% / 61% 49% 63% 54%",
    },
    variants: {
      initial: { scale: 1.02, x: 0, y: 0, rotate: 0, opacity: 0.21 },
      animate: {
        scale: [1.02, 1.08, 1],
        x: [0, 18, -12, 0],
        y: [0, -14, 7, 0],
        rotate: [0, 20, -18, 0],
        opacity: [0.16, 0.25, 0.13, 0.21],
        transition: { duration: 19, repeat: Infinity, ease: "easeInOut" },
      },
    },
  },
  // Top-right
  {
    className: "absolute top-[-60px] right-[-85px] w-64 h-64 z-0",
    style: {
      filter: "blur(30px)",
      background: "radial-gradient(circle at 45% 60%, #5eead4 54%, #2dd4bf 94%, transparent 100%)",
      borderRadius: "61% 59% 52% 67% / 65% 42% 68% 47%",
    },
    variants: {
      initial: { scale: 1.08, x: 0, y: 0, rotate: 0, opacity: 0.19 },
      animate: {
        scale: [1.08, 1.13, 1.04, 1.08],
        x: [0, -20, -13, 0],
        y: [0, 9, -8, 0],
        rotate: [0, -17, 26, 0],
        opacity: [0.12, 0.20, 0.19, 0.19],
        transition: { duration: 22, repeat: Infinity, ease: "easeInOut" },
      },
    },
  },
  // Bottom-left
  {
    className: "absolute bottom-[-42px] left-[-58px] w-64 h-64 z-0",
    style: {
      filter: "blur(23px)",
      background: "radial-gradient(circle at 80% 40%, #14b8a6 61%, #99f6e4 100%, transparent 100%)",
      borderRadius: "56% 62% 51% 71% / 54% 33% 81% 51%",
    },
    variants: {
      initial: { scale: 0.89, x: 0, y: 0, rotate: 0, opacity: 0.13 },
      animate: {
        scale: [0.89, 1, 0.92, 0.89],
        x: [0, 16, -18, 0],
        y: [0, 15, -9, 0],
        rotate: [0, 19, -12, 0],
        opacity: [0.09, 0.17, 0.13, 0.13],
        transition: { duration: 20, repeat: Infinity, ease: "easeInOut" },
      },
    },
  },
  // Bottom-right
  {
    className: "absolute bottom-[-42px] right-[-62px] w-56 h-56 z-0",
    style: {
      filter: "blur(30px)",
      background: "radial-gradient(circle at 75% 20%, #a7f3d0 58%, #2dd4bf 98%, transparent 100%)",
      borderRadius: "56% 57% 71% 61% / 53% 49% 81% 59%",
    },
    variants: {
      initial: { scale: 1.01, x: 0, y: 0, rotate: 0, opacity: 0.17 },
      animate: {
        scale: [1.01, 1.11, 1.05, 1.01],
        x: [0, -11, 7, 0],
        y: [0, 10, -8, 0],
        rotate: [0, -13, 16, 0],
        opacity: [0.11, 0.18, 0.14, 0.17],
        transition: { duration: 16, repeat: Infinity, ease: "easeInOut" },
      },
    },
  }
];

const Offer = () => {
  const sectionRef = useRef(null);
  const [glow, setGlow] = useState({
    x: 0,
    y: 0,
    glowing: false,
  });

  // Move the glow based on mouse position
  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    setGlow(gl => ({
      ...gl,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }));
  };

  // On click, intensify the glow
  const handleMouseDown = () => setGlow(gl => ({ ...gl, glowing: true }));
  const handleMouseUp = () => setGlow(gl => ({ ...gl, glowing: false }));

  return (
    <section
      ref={sectionRef}
      id='services'
      className="relative bg-gradient-to-br from-[#e0f7fa] to-[#e0f2f1] py-16 px-4 sm:px-6 lg:px-12 text-gray-800 overflow-hidden min-h-[820px] select-none"
      style={{ position: "relative" }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // remove glow if mouse leaves
    >
      {/* Animated Blobs in Background, one for each corner */}
      {blobSettings.map((blob, idx) => (
        <motion.div
          key={idx}
          className={blob.className}
          initial={blob.variants.initial}
          animate={blob.variants.animate}
          style={blob.style}
          aria-hidden
        />
      ))}

      {/* Mouse-following glow */}
      <motion.div
        className="pointer-events-none absolute z-10"
        style={{
          left: glow.x - 200,
          top: glow.y - 200,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #5eead4 0%, #14b8a6 70%, transparent 100%)',
          opacity: glow.glowing ? 0.38 : 0.19,
          filter: glow.glowing ? 'blur(49px)' : 'blur(32px)',
          transition: 'opacity 0.14s, filter 0.19s'
        }}
        animate={{
          opacity: glow.glowing ? 0.38 : 0.19,
          scale: glow.glowing ? 1.14 : 1,
          transition: { type: 'spring', stiffness: 150, damping: 18 },
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, type: 'spring', stiffness: 120 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-teal-700 mb-4"
        >
          What We Offer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.68 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-10"
        >
          Our corporate wellness offerings are comprehensive, customizable, and crafted to make your workforce healthier and happier—no matter your industry or size.
        </motion.p>

        {/* Offer Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {offerList.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-5 rounded-xl shadow-md transition-all flex items-start space-x-4 cursor-pointer group relative z-10"
            >
              <span className="w-11 h-11 flex items-center justify-center rounded-full bg-teal-50 shadow group-hover:scale-105 transition">
                {item.icon}
              </span>
              <span className="text-lg font-medium text-gray-700">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="my-12">
          <hr className="border-t border-gray-300 w-1/2 mx-auto" />
        </div>

        {/* CTA Section */}
        <motion.div
          whileInView={{ scale: [0.96, 1], opacity: [0, 1] }}
          initial={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.61, delay: 0.08 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 23 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.17 }}
            className="text-2xl sm:text-3xl font-semibold text-teal-700 mb-4"
          >
            Join 100+ Corporates Across India
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.21 }}
            className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-6"
          >
            Whether you're managing a 50-member startup or a 10,000-strong enterprise,
            Nizcare ensures pan-India wellness coordination across branches and factories.
          </motion.p>
         
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
