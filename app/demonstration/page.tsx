
"use client";

import React, { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import axios from "axios";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    await axios.post("/api/demo", formData);

    // Reset form data
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });

    setSubmitted(true); // triggers a success UI state
  } catch (error: any) {
    console.error("Error submitting form:", error);
    setError("There was an error submitting your form. Please try again later.");
  }

  // Reset success message after 5 seconds
  setTimeout(() => {
    setSubmitted(false);
    setError("");
  }, 5000);
};


  return (
    <div className="min-h-screen overflow-y-auto bg-[#1e293b] overflow-x-hidden scrollbar-thin scrollbar-track-[#e0f7fa]/20 scrollbar-thumb-[#a3bffa]/40 text-gray-100">
      <div className="relative z-20 py-24 px-6">
        <section className="max-w-2xl mx-auto text-center">
          <motion.h1
            className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Schedule a Demo/ Service Inquiry Follow up
          </motion.h1>
          <motion.p
            className="text-lg mb-12 text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover how Solvex Solutions can transform your business with our automation services. Fill out the form below to schedule a personalized demonstration.
          </motion.p>

          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-teal-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-teal-600/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-teal-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-teal-600/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-teal-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-teal-600/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-teal-300 mb-1">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-teal-900 border border-teal-600/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Work Permit Application">Work Permit Application</option>
                  <option value="Special Pass">Special Pass</option>
                  <option value="Dependent Pass">Dependent Pass</option>
                  <option value="Alien Card Application">Alien Card Application</option>
                  <option value="Web/Mobile Solutions">Web/Mobile Solutions</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-teal-300 mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-teal-600/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 h-24 resize-none"
                  placeholder="Let us know any specific requirements or questions"
                />
              </div>

              <motion.button
                type="submit"
                
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo <Calendar size={18} />
              </motion.button>

              {submitted && (
                <motion.p
                  className="text-green-400 text-sm text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Thank you! We will contact you soon to schedule your demo.
                </motion.p>
              )}
            </form>
          </motion.div>
        </section>
      </div>
      {error && (
        <motion.div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {error}
        </motion.div>
      )}
    </div>
  );
}
