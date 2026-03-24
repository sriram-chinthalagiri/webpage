//Jai Maa Danteswari

import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Globe, GraduationCap, Code, Menu, X, BookOpen } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const accentColor = 'bg-cyan-500';
  const textColor = 'text-gray-900';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-inter text-base relative">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-900 tracking-tight">
            Sriram C V
          </a>
          <div className="hidden md:flex space-x-6 text-gray-900 font-medium">
            <a href="#about" className="hover:text-cyan-600 transition-colors duration-200">About</a>
            <a href="#research" className="hover:text-cyan-600 transition-colors duration-200">Research</a>
            <a href="#publications" className="hover:text-cyan-600 transition-colors duration-200">Publications</a>
            <a href="#teaching" className="hover:text-cyan-600 transition-colors duration-200">Teaching</a>
            <a href="#talks" className="hover:text-cyan-600 transition-colors duration-200">Notes/Slides</a>
            <a href="#contact" className="hover:text-cyan-600 transition-colors duration-200">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-gray-200 py-4 shadow-xl`}>
          <div className="flex flex-col items-center space-y-4 text-gray-900 font-medium">
            <a href="#about" onClick={toggleMenu} className="hover:text-cyan-600 transition-colors duration-200">About</a>
            <a href="#research" onClick={toggleMenu} className="hover:text-cyan-600 transition-colors duration-200">Research</a>
            <a href="#publications" onClick={toggleMenu} className="hover:text-cyan-600 transition-colors duration-200">Publications</a>
            <a href="#teaching" onClick={toggleMenu} className="hover:text-cyan-600 transition-colors duration-200">Teaching</a>
            <a href="#talks" onClick={toggleMenu} className="hover:text-cyan-600 transition-colors duration-200">Notes/Slides</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-cyan-600 transition-colors duration-200">Contact</a>
          </div>
        </div>
      </header>

      <section id="about" className="py-20 md:py-32 bg-white/70 backdrop-blur-md text-gray-900 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            <p className="mb-4 text-gray-700">
              I am a 4th-year PhD candidate in the Department of Mathematics at Ruprecht Karls Institute, Universität Heidelberg, specializing in Function Field Arithmetic. 
              In particular, I am interested in studying the action of arithmetic subgroups on suitable geometric objects like the Bruhat-Tits building or the Drinfeld period domain and 
              its consequences on objects of arithmetic interest like the harmonic cochains on the building or the modular forms (and its variants) on the Drinfeld period domain.
            </p>
          </div>
        </div>
      </section>

      <section id="publications" className="py-20 md:py-32 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Publications & Thesis</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6">
              <li className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">The unstable complex in Bruhat-Tits buildings for arithmetic groups over function fields</h3>
                <p className="text-gray-600 italic mb-2">Preprint</p>
                <a href="https://arxiv.org/abs/2603.09754v2" target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-semibold hover:underline">
                  arXiv:2603.09754[math.NT]
                </a>
              </li>
              <li className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">On nearly holomorphic Drinfeld modular forms over admissible coefficient rings</h3>
                <p className="text-gray-600 italic mb-2">Research in Number Theory</p>
                <a href="https://rdcu.be/eFiWu" target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-semibold hover:underline">
                  Article link
                </a>
              </li>
              <li className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Derived equivalence and rational points</h3>
                <p className="text-gray-600 italic mb-2">MSc Thesis, CMI India</p>
                <a 
                  href="/webpage/masters_thesis.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 font-semibold hover:underline">
                Master's Thesis
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="teaching" className="py-20 md:py-32 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Teaching</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { year: "WS 2023/24", title: "Proseminar on Quadratic forms", role: "Co-organizer" },
              { year: "SS 2023", title: "Proseminar on p-adic numbers", role: "Co-organizer" },
              { year: "WS 2022/23", title: "Seminar on affine algebraic groups", role: "Co-organizer" },
              { year: "SS 2022", title: "Proseminar on prime numbers and cryptography", role: "Co-organizer" },
              { year: "WS 2021/22", title: "Étale Cohomology by Prof. G. Böckle", role: "Teaching Assistant" }
            ].map((course, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center">
                <BookOpen size={24} className="text-cyan-500 mb-4" />
                <h3 className="text-lg font-bold mb-1">{course.year}</h3>
                <p className="text-sm text-gray-500 mb-2">{course.role}</p>
                <p className="text-gray-700 font-medium">{course.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="talks" className="py-20 md:py-32 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Notes & Slides</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-2">SS2025: D-elliptic sheaves and the Hasse principle</h3>
              <p className="text-gray-600 mb-4 text-sm">Gave three talks in a learning seminar based on Arai-Hattori-Kondo-Papikian.</p>
              <div className="flex gap-4">
                <a
                  href="/webpage/Delliptic/overview.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 font-semibold hover:underline"
               >
                Overview
               </a>
               <a
                 href="/webpage/Delliptic/talk-3.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-cyan-600 font-semibold hover:underline"
               >
                Talk 3
               </a>
               <a
                 href="/webpage/Delliptic/talk-9.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-cyan-600 font-semibold hover:underline"
               >
                 Talk 9
               </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-32 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            first_name.chinthalagiri@iwr.uni-heidelberg.de
          </p>
          <div className="flex justify-center space-x-6">
            <Mail className="text-cyan-500 cursor-pointer" />
            <Github className="text-gray-700 cursor-pointer" />
            <Linkedin className="text-blue-600 cursor-pointer" />
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 bg-white border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} Sriram C V. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;