
'use client';
import React from 'react';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-green-900 to-black text-white py-14 px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">Connect With Solvex Solutions</h2>
        <p className="text-sm text-gray-200 mb-6 max-w-xl mx-auto">
          Partner with us to streamline your business operations across East Africa. Schedule a consultation to explore how our automation solutions can drive your success.
        </p>

        <div className="flex justify-center items-center gap-3 flex-wrap">
          <Link href="/demonstration">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded flex items-center gap-2 text-sm">
              Schedule a Free Consultation <Calendar size={16} />
            </button>
          </Link>
          <input
            readOnly
            type="text"
            placeholder="Enter your email for updates"
            className="rounded px-3 py-2 text-black text-sm w-60 border-amber-300 border-[1px]"
          />
        </div>
      </div>

      <div className="mt-1 absolute bottom-0 right-0 left-0  text-gray-300 py-8 px-6 md:px-20 text-sm bg-gradient-to-r from-black to-green-900">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-6">
          {/* Brand Info */}
          <div>
            <div className="text-green-500 font-bold text-lg mb-2 flex items-center gap-1">
              <span className="text-white text-xl">Solvenix</span> <span className="text-green-500">Solutions</span>
            </div>
            <p className="text-xs mb-4">
              Empowering East African businesses with innovative automation solutions to optimize processes, enhance productivity, and foster sustainable growth.
            </p>
            <div className="flex gap-4 text-white text-sm">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/contact">Contact</Link>
            
            
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-2">Solutions</h4>
            <ul className="space-y-1">
              <li>Work Permit Application</li>
              <li>Special Pass</li>
              <li>Dependent Pass</li>
              <li>Alien Card Application</li>
              <li>Web/Mobile Design and Development</li>
              <li>Business Profile Creation</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-semibold mb-2">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-500">📍</span>
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">📞</span>
                <span>+254 746 741 528 / +254 746 172 014</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✉️</span>
                <span>infosolvenixsolutions@gmail.com</span>
              </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">🕒</span>
              <span>Mon - Fri: 8:00 AM - 6:00 PM EAT</span>
            </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-xs text-gray-500 mt-6">
          © 2025 Solvex Solutions. All rights reserved. <br />
          <span className="mt-1 block">
            <a href="#" className="hover:underline mx-1">Privacy Policy</a> | 
            <a href="#" className="hover:underline mx-1">Terms of Service</a> | 
            <a href="#" className="hover:underline mx-1">Cookie Policy</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
