import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineEmail, MdOutlineBusinessCenter } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import CALogo from "./CALogo";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialIcons = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      url: "https://facebook.com/cayashshukla",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      url: "https://twitter.com/cayashshukla",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      url: "https://linkedin.com/in/cayashshukla",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://instagram.com/cayashshukla",
    },
  ];

  const navItems = [
    { label: "HOME", path: "/" },
    {
      label: "ABOUT US",
      submenu: [
        { label: "About Us", path: "/about#us" },
        { label: "Our Mission", path: "/about#mission" },
        { label: "Leadership", path: "/about#leadership" },
      ],
    },
    {
      label: "SECTORS",
      path: "/sectors",
    },
    {
      label: "SERVICES",
      submenu: [
        { label: "Tax Planning & Advisory", path: "/services/tax" },
        { label: "Audit & Assurance", path: "/services/audit" },
        { label: "Legal Compliance", path: "/services/legal" },
        { label: "Business Consulting", path: "/services/consulting" },
        { label: "Specialised Services", path: "/services/specialised" },
      ],
    },
    { label: "BLOGS", path: "/blogs" },
    { label: "CONTACT", path: "/contact" },
  ];

  const quickLinks = [
    { label: "About Us", path: "/about#us" },
    { label: "Our Services", path: "/services/tax" },
    { label: "Our Mission", path: "/about#mission" },
    { label: "Leadership", path: "/about#leadership" },
    { label: "Blogs", path: "/blogs" },
  ];

  const services = [
    { label: "Tax Planning & Advisory", path: "/services/tax" },
    { label: "Audit & Assurance", path: "/services/audit" },
    { label: "Legal Compliance", path: "/services/legal" },
    { label: "Business Consulting", path: "/services/consulting" },
    { label: "Specialised Services", path: "/services/specialised" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-6">
            <CALogo />
          </div>
          <p className="text-gray-300 mb-6">
            CA Yash Shukla provides comprehensive financial and business
            advisory services with expertise in tax planning, audit, compliance,
            and strategic consulting.
          </p>
          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, label, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full text-white transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-6 text-blue-400">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="text-blue-400 mr-2">•</span>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-6 text-blue-400">
            Our Services
          </h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="text-blue-400 mr-2">•</span>
                <Link
                  to={service.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {service.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-6 text-blue-400">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <IoLocationOutline
                size={20}
                className="text-blue-400 mt-1 flex-shrink-0"
              />
              <span>
                Office Address: [Your Office Address Here], City - [PIN Code]
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineEmail size={20} className="text-blue-400" />
              <a
                href="mailto:info@cayashshukla.com"
                className="hover:text-white transition-colors"
              >
                info@cayashshukla.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IoCallOutline size={20} className="text-blue-400" />
              <a
                href="tel:+919876543210"
                className="hover:text-white transition-colors"
              >
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineBusinessCenter size={20} className="text-blue-400" />
              <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-800 pt-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">CA Yash Shukla</span>. All
          Rights Reserved By Rich System Solutions.{" "}
          <Link to="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="text-blue-400 hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
