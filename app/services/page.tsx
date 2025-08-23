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
    <div className="bg-gradient-to-b from-[#1e293b] via-[#87ceeb] to-[#0f172a] min-h-screen overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-[#87ceeb] scrollbar-thumb-[#1e293b] scroll-smooth text-white">


      <section className="text-center py-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center" id="services">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate__animated animate__pulse">Our Expertise</h1>
        <p className="text-lg mb-12 text-gray-200">Discover Our Comprehensive Suite of Business Solutions Designed to Accelerate Your Success</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Business Name Registration (BN)</h3>
          </motion.div>
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
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Registration of Companies (CR1, CR12)</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Tax Management (Filing Returns, PIN, TCC)</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">NSSF, NHIF & NITA Registration</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Driving License Renewal & Conversion (NTSA)</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Police Clearance Certificate (Good Conduct)</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Registration of Societies & Trusts</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Website Design & Development</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Business Profile Creation</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Logo & Letter Head Design</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Invoice Template Design</h3>
          </motion.div>
          <motion.div 
            className="service-card bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Mobile Applications</h3>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-[#0f172a] via-[#1a2c3b] to-[#0f172a] text-white" id="why-choose-us">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600 animate__animated animate__fadeIn">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <NeonGradientCard className="hover:scale-105 transition-transform duration-300">
            <div className="p-6 text-center bg-white/10 rounded-2xl shadow-lg space-y-3 h-full animate__animated animate__zoomIn">
              <div className="relative w-16 h-16 mx-auto">
                <Image src={Rocket} alt="Lightning Fast" fill className="object-contain" />
              </div>
              <h6 className="text-xl font-semibold text-cyan-300">Lightning Fast</h6>
              <p className="text-sm text-gray-600">24-Hour Delivery Guarantee</p>
            </div>
          </NeonGradientCard>
          <NeonGradientCard className="hover:scale-105 transition-transform duration-300">
            <div className="p-6 text-center bg-white/10 rounded-2xl shadow-lg space-y-3 h-full animate__animated animate__zoomIn" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-16 h-16 mx-auto">
                <Image src={Team} alt="Expert Team" fill className="object-contain" />
              </div>
              <h6 className="text-xl font-semibold text-teal-300">Expert Team</h6>
              <p className="text-sm text-gray-600">Certified Professionals</p>
            </div>
          </NeonGradientCard>
          <NeonGradientCard className="hover:scale-105 transition-transform duration-300">
            <div className="p-6 text-center bg-white/10 rounded-2xl shadow-lg space-y-3 h-full animate__animated animate__zoomIn" style={{ animationDelay: '0.4s' }}>
              <div className="relative w-16 h-16 mx-auto">
                <Image src={Support} alt="24/7 Support" fill className="object-contain" />
              </div>
              <h6 className="text-xl font-semibold text-indigo-300">24/7 Support</h6>
              <p className="text-sm text-gray-600">Always Here to Help</p>
            </div>
          </NeonGradientCard>
          <NeonGradientCard className="hover:scale-105 transition-transform duration-300">
            <div className="p-6 text-center bg-white/10 rounded-2xl shadow-lg space-y-3 h-full animate__animated animate__zoomIn" style={{ animationDelay: '0.6s' }}>
              <div className="relative w-16 h-16 mx-auto">
                <Image src={Guarantee} alt="100% Guarantee" fill className="object-contain" />
              </div>
              <h6 className="text-xl font-semibold text-yellow-300">100% Guaranteed</h6>
              <p className="text-sm text-gray-600">Money-back Assurance</p>
            </div>
          </NeonGradientCard>
        </div>
      </section>
    </div>
  );
}



















// import { useEffect } from 'react';
// import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
// import Image from 'next/image';
// import Rocket from "@/app/assets/rocket.png";
// import Team from "@/app/assets/team.png";
// import Guarantee from "@/app/assets/guarantee.png";
// import Support from "@/app/assets/support.png";
// import { motion } from 'framer-motion';

// export default function Page() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const cards = document.querySelectorAll('.service-card');
//       cards.forEach(card => {
//         const cardTop = card.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         if (cardTop < windowHeight * 0.75) {
//           card.classList.add('animate__fadeInUp');
//         }
//       });
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="bg-gradient-to-b from-[#1e293b] via-[#87ceeb] to-[#0f172a] min-h-screen overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-[#87ceeb] scrollbar-thumb-[#1e293b] scroll-smooth text-white">


//       <section className="text-center py-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center" id="services">
//         <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate__animated animate__pulse">Our Expertise</h1>
//         <p className="text-lg mb-12 text-gray-200">Discover Our Comprehensive Suite of Business Solutions Designed to Accelerate Your Success</p>
       
//       </section>

//       <section className="py-20 px-6 bg-gradient-to-r from-[#0f172a] via-[#1a2c3b] to-[#0f172a] text-white" id="why-choose-us">
//         <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600 animate__animated animate__fadeIn">Why Choose Us</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//           <NeonGradientCard className="hover:scale-105 transition-transform duration-300">
//             <div className="p-6 text-center bg-white/10 rounded-2xl shadow-lg space-y-3 h-full animate__animated animate__zoomIn">
//               <div className="relative w-16 h-16 mx-auto">
//                 <Image src={Rocket} alt="Lightning Fast" fill className="object-contain" />
//               </div>
//               <h6 className="text-xl font-semibold text-cyan-300">Lightning Fast</h6>
//               <p className="text-sm text-gray-600">24-Hour Delivery Guarantee</p>
//             </div>
//           </NeonGradientCard>
//           <NeonGradientCard className="hover:scale-105 transition-transform duration-300">
//             <div className="p-6 text-center bg-white/10 rounded-2xl shadow-lg space-y-3 h-full animate__animated animate__zoomIn" style={{ animationDelay: '0.2s' }}>
//               <div className="relative w-16 h-16 mx-auto">
//                 <Image src={Team} alt="Expert Team" fill className="object-contain" />
//               </div>
//               <h6 className="text-xl font-semibold text-teal-300">Expert Team</h6>
//               <p className="text-sm text-gray-600">Certified Professionals</p>
//             </div>
//           </NeonGradientCard>
//           <NeonGradientCard className="hover:scale-105 transition-transform duration-300">
//             <div className="p-6 text-center bg-white/10 rounded-2xl shadow-lg space-y-3 h-full animate__animated animate__zoomIn" style={{ animationDelay: '0.4s' }}>
//               <div className="relative w-16 h-16 mx-auto">
//                 <Image src={Support} alt="24/7 Support" fill className="object-contain" />
//               </div>
//               <h6 className="text-xl font-semibold text-indigo-300">24/7 Support</h6>
//               <p className="text-sm text-gray-600">Always Here to Help</p>
//             </div>
//           </NeonGradientCard>
//           <NeonGradientCard className="hover:scale-105 transition-transform duration-300">
//             <div className="p-6 text-center bg-white/10 rounded-2xl shadow-lg space-y-3 h-full animate__animated animate__zoomIn" style={{ animationDelay: '0.6s' }}>
//               <div className="relative w-16 h-16 mx-auto">
//                 <Image src={Guarantee} alt="100% Guarantee" fill className="object-contain" />
//               </div>
//               <h6 className="text-xl font-semibold text-yellow-300">100% Guaranteed</h6>
//               <p className="text-sm text-gray-600">Money-back Assurance</p>
//             </div>
//           </NeonGradientCard>
//         </div>
//       </section>
//     </div>
//   );
// }