import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#020617] via-[#020617] to-black text-gray-400">
      
      {/* Top Glow */}
      <div className="absolute -top-24 left-0 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-indigo-500">
              Unnikrishnan P M
            </h3>
            <p className="text-sm mt-1">
              Full-Stack Web Developer
            </p>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:unnikrish1011@gmail.com"
              className="hover:text-white transition"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

            <a
              href="https://github.com/unni-web"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/unnikrishnan-p-m-5b3345384/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom */}
        <p className="text-center text-sm">
          © 2026 Unnikrishnan P M . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
