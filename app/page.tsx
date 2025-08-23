
'use client';

import { useEffect } from 'react';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import Image from 'next/image';
import Rocket from "@/app/assets/rocket.png";
import Team from "@/app/assets/team.png";
import Guarantee from "@/app/assets/guarantee.png";
import Support from "@/app/assets/support.png";
import { motion } from 'framer-motion';

export default function Page() {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.service-card');
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight * 0.75) {
          card.classList.add('animate__fadeInUp');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-[#e0f7fa] scrollbar-thumb-[#a3bffa] text-gray-100 relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#1e293b]/50 via-[#87ceeb]/30 to-[#0f172a]/50"
          animate={{
            background: [
              'linear-gradient(45deg, #1e293b/50%, #87ceeb/30%, #0f172a/50%)',
              'linear-gradient(45deg, #87ceeb/50%, #1e293b/30%, #0f172a/50%)',
              'linear-gradient(45deg, #0f172a/50%, #87ceeb/30%, #1e293b/50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <section className="text-center py-24 px-6">
          <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400">Welcome to Solvex Solutions</h1>
          <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">Elevate your business with our sleek, modern solutions designed to drive success with elegance and efficiency.</p>
          <motion.button
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </section>

        <section className="py-20 px-6" id="services">
          <h2 className="text-4xl font-bold mb-12 text-center text-teal-200">Our Expertise</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mb-6 mx-auto px-6">
       
            <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Work Permit/ Foreign Certificate/ Entry Pass</h3>
          </motion.div>
            <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Special Pass</h3>
          </motion.div>
            <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Dependent Pass</h3>
          </motion.div>
            <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Alien Card Application/ Foreign Resident Card</h3>
          </motion.div>


          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Registration of Companies (NGOs, Societies & Trust)</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Tax Management (Filing Returns, Processing PIN, TCC)</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Processing Police Clearance Certificate</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Website/Mobile Design and Development</h3>
          </motion.div>
        
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Business Profile Creation (Logo & Letter Head Design)</h3>
          </motion.div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-r from-[#1e293b]/80 via-[#87ceeb]/20 to-[#0f172a]/80 text-white" id="why-choose-us">
          <h2 className="text-4xl font-bold mb-12 text-center text-teal-200">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <NeonGradientCard className="hover:scale-105 transition-transform duration-300">
              <div className="p-6 text-center bg-gradient-to-r from-green-900 to-black rounded-xl shadow-lg space-y-3 h-full">
                <div className="relative w-16 h-16 mx-auto">
                  <Image src={Rocket} alt="Lightning Fast" fill className="object-contain" />
                </div>
                <h6 className="text-xl font-semibold text-teal-300">Lightning Fast</h6>
                <p className="text-sm text-gray-400">24-Hour Delivery Guarantee</p>
              </div>
            </NeonGradientCard>
            <NeonGradientCard className="hover:scale-105 transition-transform duration-300">
              <div className="p-6 text-center bg-gradient-to-r from-green-900 to-black rounded-xl shadow-lg space-y-3 h-full">
                <div className="relative w-16 h-16 mx-auto">
                  <Image src={Team} alt="Expert Team" fill className="object-contain" />
                </div>
                <h6 className="text-xl font-semibold text-teal-300">Expert Team</h6>
                <p className="text-sm text-gray-400">Certified Professionals</p>
              </div>
            </NeonGradientCard>
            <NeonGradientCard className="hover:scale-105 transition-transform duration-300">
              <div className="p-6 text-center bg-gradient-to-r from-green-900 to-black rounded-xl shadow-lg space-y-3 h-full">
                <div className="relative w-16 h-16 mx-auto">
                  <Image src={Support} alt="24/7 Support" fill className="object-contain" />
                </div>
                <h6 className="text-xl font-semibold text-teal-300">24/7 Support</h6>
                <p className="text-sm text-gray-400">Always Here to Help</p>
              </div>
            </NeonGradientCard>
            <NeonGradientCard className="hover:scale-105 transition-transform duration-300">
              <div className="p-6 text-center bg-gradient-to-r from-green-900 to-black rounded-xl shadow-lg space-y-3 h-full">
                <div className="relative w-16 h-16 mx-auto">
                  <Image src={Guarantee} alt="100% Guarantee" fill className="object-contain" />
                </div>
                <h6 className="text-xl font-semibold text-teal-300">100% Guaranteed</h6>
                <p className="text-sm text-gray-400">Money-back Assurance</p>
              </div>
            </NeonGradientCard>
          </div>
        </section>
      </div>
    </div>
  );
}
