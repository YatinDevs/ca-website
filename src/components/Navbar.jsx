import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CALogo from "./CALogo";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    submenu: [
      { label: "About Us", path: "/about#us" },
      { label: "Our Mission", path: "/about#mission" },
      { label: "Leadership", path: "/about#leadership" },
    ],
  },
  {
    label: "Sectors",
    path: "/sectors",
  },
  {
    label: "Services",
    submenu: [
      { label: "Tax Planning", path: "/services/tax" },
      { label: "Audit & Assurance", path: "/services/audit" },
      { label: "Legal Compliance", path: "/services/legal" },
      { label: "Business Consulting", path: "/services/consulting" },
      { label: "Specialised Services", path: "/services/specialised" },
    ],
  },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleNavItemClick = (item, index) => {
    if (item.submenu) {
      toggleDropdown(index);
    } else {
      navigate(item.path);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative z-50">
      {/* Top Contact Bar */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -40 : 0 }}
        transition={{ duration: 0.3 }}
        className="bg-blue-800 text-white text-sm px-4 fixed top-0 left-0 w-full z-[100]"
      >
        <div className="container mx-auto flex justify-between items-center py-2">
          <div className="flex items-center space-x-4">
            <a
              href="mailto:info@cayashshukla.com"
              className="hover:text-blue-200 text-xs md:text-sm transition-colors flex items-center"
            >
              <Mail size={14} className="mr-1" />
              info@cayashshukla.com
            </a>
            <a
              href="tel:+919876543210"
              className="hover:text-blue-200 text-xs md:text-sm transition-colors flex items-center"
            >
              <Phone size={14} className="mr-1" />
              +91 98765 43210
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Clock size={14} className="text-blue-200" />
            <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full left-0 transition-all duration-300 z-[90] ${
          scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
        }`}
        style={{ top: scrolled ? "0" : "40px" }}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo with enhanced animation */}
          <motion.div
            onClick={() => navigate("/")}
            className="cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <CALogo />
            <motion.div
              className="h-1 w-16 bg-yellow-500 mx-auto mt-1"
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-1 font-medium text-gray-800 relative">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenDropdown(index)}
                onMouseLeave={() => item.submenu && setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleNavItemClick(item, index)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-all ${
                    openDropdown === index
                      ? "text-blue-600 bg-blue-50"
                      : "hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {openDropdown === index && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-12 left-0 bg-white rounded-lg shadow-xl py-2 min-w-[220px] z-[120] border border-gray-100"
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <motion.div
                          key={subIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: subIndex * 0.05 }}
                          onClick={() => {
                            navigate(subItem.path);
                            setOpenDropdown(null);
                          }}
                          className="px-4 py-2 text-sm text-gray-700 cursor-pointer transition-all hover:bg-blue-50 hover:text-blue-600 hover:pl-5"
                        >
                          {subItem.label}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Consultation
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-600 p-2 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-[110] shadow-xl p-6 space-y-4 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <div onClick={() => navigate("/")} className="cursor-pointer">
                <CALogo />
                <motion.div
                  className="h-1 w-16 bg-yellow-500 mx-auto mt-1"
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </div>
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-blue-600 p-2"
              >
                <X size={28} />
              </button>
            </div>

            <div className="space-y-2">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-2">
                  <button
                    onClick={() => handleNavItemClick(item, index)}
                    className={`w-full text-left font-medium text-gray-800 py-3 flex justify-between items-center ${
                      item.submenu ? "" : "hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {/* Mobile Submenu */}
                  {item.submenu && openDropdown === index && (
                    <div className="ml-4 space-y-2 mb-2">
                      {item.submenu.map((sub, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => {
                            navigate(sub.path);
                            setIsMenuOpen(false);
                          }}
                          className="pl-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer flex items-center"
                        >
                          <span className="text-blue-500 mr-2">•</span>
                          {sub.label}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate("/contact");
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Consultation
              </motion.button>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
              <div className="space-y-3">
                <a
                  href="mailto:info@cayashshukla.com"
                  className="text-gray-700 hover:text-blue-600 flex items-center"
                >
                  <Mail size={16} className="mr-2" />
                  info@cayashshukla.com
                </a>
                <a
                  href="tel:+919876543210"
                  className="text-gray-700 hover:text-blue-600 flex items-center"
                >
                  <Phone size={16} className="mr-2" />
                  +91 98765 43210
                </a>
                <div className="text-gray-700 flex items-center">
                  <Clock size={16} className="mr-2" />
                  Mon-Sat: 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
