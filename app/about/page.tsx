
'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaUsers, FaShieldAlt, FaHeadset } from 'react-icons/fa';

export default function AboutPage() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.about-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
          section.classList.add('fade-in');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1e293b] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-[#e0f7fa]/20 scrollbar-thumb-[#a3bffa]/40 text-gray-100">
      {/* Main Content */}
      <div className="relative z-20 py-24 px-6">
        {/* Hero Section */}
        <section className="text-center about-section max-w-4xl mx-auto">
          <motion.h1
            className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Solvex Solutions
          </motion.h1>
          <motion.p
            className="text-lg mb-12 text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            At Solvex Solutions, we redefine business success with cutting-edge strategies and bespoke services. Established with a passion for innovation, our team of experts crafts tailored solutions to propel your enterprise into the future.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.button
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="py-20 about-section max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-8 text-teal-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            To empower businesses with innovative, scalable solutions that enhance efficiency and foster growth. We are dedicated to excellence, delivering results that exceed expectations.
          </motion.p>
        </section>

        {/* Team Section */}
        <section className="py-20 about-section">
          <motion.h2
            className="text-4xl font-bold mb-12 text-teal-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <motion.div
              className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-28 h-28 mx-auto rounded-full bg-teal-400/20 flex items-center justify-center mb-4">
                <FaUsers className="text-teal-300 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-300">Rose Njambi</h3>
              <p className="text-sm text-gray-400">CEO & Visionary</p>
            </motion.div>
            <motion.div
              className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-28 h-28 mx-auto rounded-full bg-teal-400/20 flex items-center justify-center mb-4">
                <FaRocket className="text-teal-300 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-300">John Kamiru</h3>
              <p className="text-sm text-gray-400">Lead Technologist</p>
            </motion.div>
            <motion.div
              className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-28 h-28 mx-auto rounded-full bg-teal-400/20 flex items-center justify-center mb-4">
                <FaHeadset className="text-teal-300 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-teal-300">Emily Brown</h3>
              <p className="text-sm text-gray-400">Client Success Lead</p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 about-section max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-teal-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FaRocket className="text-teal-300 text-2xl mb-2" />
              <h3 className="text-xl font-semibold text-teal-300">Innovation</h3>
              <p className="text-sm text-gray-400">Pushing boundaries with creative and advanced technologies.</p>
            </motion.div>
            <motion.div
              className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FaShieldAlt className="text-teal-300 text-2xl mb-2" />
              <h3 className="text-xl font-semibold text-teal-300">Integrity</h3>
              <p className="text-sm text-gray-400">Building trust through transparency and ethical practices.</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
