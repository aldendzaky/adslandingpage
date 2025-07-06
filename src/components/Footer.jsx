import React from "react";
import { Link } from "react-router-dom";

import igicon from '../assets/icon/footer/instagram.png'
import webicon from '../assets/icon/footer/web.png'
import linkedinicon from '../assets/icon/footer/linkedin.png'
import footerlogo from '../assets/logo/footer/footer_logo.png'
import pointicon from '../assets/icon/footer/point_icon.png'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Social */}
        <div>
          <img src={footerlogo} alt="ADS Logo" className="w-24 mb-8" />
          <p className="text-sm mb-4">Your Digital Transformation Partner.</p>
          <div className="flex space-x-3">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={webicon} alt="web" className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/company/admadigitalsolusi" target="_blank" rel="noopener noreferrer">
              <img src={linkedinicon} alt="linkedin" className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/admadigitalsolusi" target="_blank" rel="noopener noreferrer">
              <img src={igicon} alt="instagram" className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:underline">Disclaimer</Link></li>
            <li><Link to="/terms-condition" className="hover:underline">Terms of Condition</Link></li>
            <li><Link to="/terms-service" className="hover:underline">Term of Service</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-semibold mb-3">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/it-consultant" className="hover:underline">IT Consultant</Link></li>
            <li><Link to="/it-outsource" className="hover:underline">IT Outsource</Link></li>
            <li><Link to="/training-center" className="hover:underline">Training Center</Link></li>
            <li><Link to="/startup-incubator" className="hover:underline">Startup Incubator</Link></li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-semibold mb-3">Location</h4>
          <div className="text-sm space-y-4">
            <div className="flex items-start gap-2">
              <img src={pointicon} alt="location" className="w-5 h-5 mt-1" />
              <p>
                Marketing Office - Jl. KH Abdullah Syafei No.27, Jakarta Selatan, Tebet
                (Cervino Village Apartement 1st Floor 1-J)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <img src={pointicon} alt="location" className="w-5 h-5 mt-1" />
              <p>
                Research Lab - Jl. Sidosermo Aidas No.48, Surabaya, Jawa Timur 60239
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-300 mt-15">
        Crafted with ❤ by ADS Digital Partner.
      </div>
    </footer>
  );
}
