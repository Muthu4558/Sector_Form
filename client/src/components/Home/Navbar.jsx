import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import NizLogo from '../../assets/logo.png';

const sectorList = [
  { name: 'Cement', path: '/cement' },
  { name: 'Fertilizer', path: '/fertilizer' },
  { name: 'Automobile', path: '/automobile' },
  { name: 'Pharma', path: '/pharma' },
  { name: 'Hotels', path: '/hotel' },
  { name: 'Banks', path: '/banks' },
  { name: 'Airlines', path: '/airlines' },
  { name: 'Leather', path: '/leather-industry' },
  { name: 'Cottage', path: '/cottage' },
  { name: 'Chemical', path: '/chemical' },
  { name: 'Mining', path: '/mining' },
  { name: 'Heavy', path: '/heavy-industry' },
  { name: 'Textile', path: '/textile' },
  { name: 'ITES / IT', path: '/ites&it' },
  { name: 'Food', path: '/food' },
  { name: 'Port', path: '/shipping' },
  { name: 'Petroleum', path: '/petroleum' },
  { name: 'Telecom', path: '/telecom' },
  { name: 'Water Treatment', path: '/water-treatment' },
  { name: 'Dairy', path: '/dairy' },
  { name: 'Tourism', path: '/tourism' },
  { name: 'Steel', path: '/steel' },
  { name: 'Aerospace', path: '/aerospace' },
  { name: 'Paper', path: '/paper' },
  { name: 'Real Estate', path: '/real-estate' },
  { name: 'Sports', path: '/sports' },
  { name: 'Metals', path: '/metals' },
  { name: 'EdTech', path: '/edu' },
];

const Navbar = ({ transparent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSectorOpen, setIsSectorOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSectorDropdown = () => setIsSectorOpen(!isSectorOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= lastScrollY || currentScrollY < 80);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Sectors', path: '/sectors', isDropdown: true },
    { name: 'Services', path: '#services' },
  ];

  return (
    <nav
      className={
        `fixed top-0 left-0 w-full z-50 transition-transform duration-300 
        ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
        ${transparent 
          ? 'bg-transparent shadow-none border-none backdrop-blur-0'
          : 'bg-white/30 backdrop-blur-lg shadow-md border-b border-white/10 animate-fade-in'
        }`
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/">
            <img src={NizLogo} width={150} alt="Nizcare Logo" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) =>
              item.isDropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={toggleSectorDropdown}
                    className="flex items-center text-gray-800 hover:text-teal-600 font-medium transition cursor-pointer"
                  >
                    <span>{item.name}</span>
                    <FiChevronDown className={`ml-1 transform transition ${isSectorOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSectorOpen && (
                    <div className="absolute left-0 mt-2 bg-white backdrop-blur-lg border border-gray-200 shadow-lg rounded-md z-50 w-64 max-h-80 overflow-y-auto">
                      {sectorList.map((sector) => (
                        <Link
                          key={sector.name}
                          to={sector.path}
                          onClick={() => setIsSectorOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                        >
                          {sector.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.path.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => handleScrollTo(item.path)}
                  className="text-gray-800 hover:text-teal-600 font-medium transition"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-800 hover:text-teal-600 font-medium transition"
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
              className="text-gray-800 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white/80 backdrop-blur-lg shadow space-y-2">
          {navItems.map((item) =>
            item.isDropdown ? (
              <div key={item.name}>
                <div
                  onClick={toggleSectorDropdown}
                  className="flex items-center justify-between py-2 cursor-pointer text-gray-800 hover:text-teal-600 font-medium"
                >
                  <span>Sectors</span>
                  <FiChevronDown
                    className={`transform transition ${isSectorOpen ? 'rotate-180' : ''}`}
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
                        className="block py-1 text-sm text-gray-800 hover:text-teal-600"
                      >
                        {sector.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : item.path.startsWith('#') ? (
              <button
                key={item.name}
                onClick={() => handleScrollTo(item.path)}
                className="block w-full text-left py-2 text-gray-800 hover:text-teal-600 font-medium transition"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-800 hover:text-teal-600 font-medium transition"
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