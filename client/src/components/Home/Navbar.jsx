import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import NizLogo from '../../assets/nizcare-logo.png';

const sectorList = [
  { name: 'Cement', path: '/cement' },
  { name: 'Fertilizer', path: '/fertilizer' },
  { name: 'Food Processing', path: '/food-processing' },
  { name: 'Steel', path: '/steel' },
  { name: 'Pharma', path: '/pharma' },
  { name: 'Hotels', path: '/hotels' },
  { name: 'IT', path: '/it' },
  { name: 'Banks', path: '/banks' },
  { name: 'Airlines', path: '/airlines' },
  { name: 'Leather Industry', path: '/leather-industry' },
  { name: 'Heavy Industry', path: '/heavy-industry' },
  { name: 'Cottage', path: '/cottage' },
  { name: 'Chemical', path: '/chemical' },
  { name: 'Mining', path: '/mining' },
  { name: 'Textile', path: '/textile' },
  { name: 'Automobile', path: '/automobile' },
  { name: 'ITES', path: '/ites' },
  { name: 'Aerospace & Defense', path: '/aerospace-defense' },
  { name: 'Metals', path: '/metals' },
  { name: 'Petroleum Industry', path: '/petroleum' },
  { name: 'Telecommunication', path: '/telecom' },
  { name: 'Ports, Shipping & Maritime', path: '/shipping' },
  { name: 'Water Treatment & Sanitation Services', path: '/water-treatment' },
  { name: 'Dairy & Livestock Industry', path: '/dairy' },
  { name: 'Tourism & Travel', path: '/tourism' },
  { name: 'Paper', path: '/paper' },
  { name: 'Real Estate Tech', path: '/real-estate' },
  { name: 'Sports Industry', path: '/sports' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSectorOpen, setIsSectorOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSectorDropdown = () => setIsSectorOpen(!isSectorOpen);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Sectors', path: '/sectors', isDropdown: true },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`bg-white shadow-md fixed w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-teal-600 font-bold text-2xl">
              <img src={NizLogo} width={150} alt="Nizcare Logo" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) =>
              item.isDropdown ? (
                <div key={item.name} className="relative group">
                  <div className="flex items-center text-gray-700 hover:text-teal-600 font-medium transition cursor-pointer">
                    <span>Sectors</span>
                    <FiChevronDown className="ml-1" />
                  </div>
                  <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded-md z-50 hidden group-hover:block w-64 max-h-80 overflow-y-auto">
                    {sectorList.map((sector) => (
                      <Link
                        key={sector.name}
                        to={sector.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                      >
                        {sector.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-teal-600 font-medium transition"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow space-y-2">
          {navItems.map((item) =>
            item.isDropdown ? (
              <div key={item.name}>
                <div
                  onClick={toggleSectorDropdown}
                  className="flex items-center justify-between py-2 cursor-pointer text-gray-700 hover:text-teal-600 font-medium"
                >
                  <span>Sectors</span>
                  <FiChevronDown
                    className={`transform transition ${
                      isSectorOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {isSectorOpen && (
                  <div className="pl-4 max-h-60 overflow-y-auto">
                    {sectorList.map((sector) => (
                      <Link
                        key={sector.name}
                        to={sector.path}
                        onClick={() => {
                          setIsOpen(false);
                          setIsSectorOpen(false);
                        }}
                        className="block py-1 text-sm text-gray-700 hover:text-teal-600"
                      >
                        {sector.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-teal-600 font-medium transition"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;