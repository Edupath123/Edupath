import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-r from-indigo-700 to-indigo-200 to-slate-600 text-white overflow-hidden pt-10 pb-10">
      {/* Decorative Blob Background */}
      <div className="h-[700px] w-[900px] bg-indigo-500/20 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section: Contact & Links */}
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-3">EduPath </h2>
          <p className="text-indigo-200 mb-6">
            Subscribe for updates, news, and support.
          </p>

         <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 w-full px-4 sm:px-0">
  <input
    type="email"
    placeholder="Enter your email"
    className="px-4 py-2 rounded-md w-full sm:w-72 text-black focus:outline-none shadow-md"
  />
  <a href="#/" target="_blank" rel="noreferrer">
    <FiSend className="text-3xl sm:text-4xl md:text-5xl p-2 rounded-full
      bg-gradient-to-r from-indigo-500 via-pink-500 to-slate-500 
      hover:from-pink-500 hover:via-indigo-500 hover:to-indigo-900 
      hover:scale-110 hover:shadow-[0_0_25px_rgba(199,21,133,0.6)] 
      transition-all duration-300" />
  </a>
</div>


          {/* Links */}
          <div className="flex gap-6 text-sm text-indigo-300 flex-wrap mb-6">
            <a href="#about" className="hover:text-white transition-all">
              About Us
            </a>
            <a href="#privacy" className="hover:text-white transition-all">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-all">
              Terms of Service
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl text-indigo-300" data-aos="fade-up" data-aos-delay="100">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-white transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Right Section: App Download */}
        <div className="text-center md:text-right flex flex-col justify-center" data-aos="fade-left">
          <h2 className="text-2xl md:text-4xl  text-white font-semibold mb-6"data-aos="fade-down">Download Our App</h2>
          <div className="flex justify-center md:justify-end gap-4 flex-wrap">
            <a
              href="#"
              className="bg-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a
              href="#"
              className="bg-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm md:text-[20px] text-indigo-300 mt-12 border-t border-indigo-800 pt-6">
        © 2025 EduPath. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
