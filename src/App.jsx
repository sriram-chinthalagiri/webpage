//Jai Maa Danteswari

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, FileText, Globe, GraduationCap, Code, Menu, X, BookOpen } from 'lucide-react';

const App = () => {
  // State for controlling the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use a modern, clean color palette for a professional look.
  const accentColor = 'bg-cyan-500';
  const textColor = 'text-gray-900'; // Changed to a dark text color

  // Function to toggle the mobile menu and close it when a link is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Set the overall page background to a light gray
    <div className={`min-h-screen bg-gray-100 font-inter text-base relative`}>
      {/* Header with navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-900 tracking-tight">
            Sriram C V
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-gray-900">
            <a href="#about" className={`hover:text-cyan-600 transition-colors duration-200`}>About</a>
            <a href="#research" className={`hover:text-cyan-600 transition-colors duration-200`}>Research</a>
            <a href="#publications" className={`hover:text-cyan-600 transition-colors duration-200`}>Publications</a>
            <a href="#teaching" className={`hover:text-cyan-600 transition-colors duration-200`}>Teaching</a>
            <a href="#talks" className={`hover:text-cyan-600 transition-colors duration-200`}>Notes/Slides</a>
            <a href="#contact" className={`hover:text-cyan-600 transition-colors duration-200`}>Contact</a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
        {/* Mobile Menu Dropdown */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white/90 py-4`}>
          <div className="flex flex-col items-center space-y-4 text-gray-900">
            <a href="#about" onClick={toggleMenu} className={`hover:text-cyan-600 transition-colors duration-200`}>About</a>
            <a href="#research" onClick={toggleMenu} className={`hover:text-cyan-600 transition-colors duration-200`}>Research</a>
            <a href="#publications" onClick={toggleMenu} className={`hover:text-cyan-600 transition-colors duration-200`}>Publications</a>
            <a href="#teaching" onClick={toggleMenu} className={`hover:text-cyan-600 transition-colors duration-200`}>Teaching</a>
            <a href="#talks" onClick={toggleMenu} className={`hover:text-cyan-600 transition-colors duration-200`}>Notes/Slides</a>
            <a href="#contact" onClick={toggleMenu} className={`hover:text-cyan-600 transition-colors duration-200`}>Contact</a>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className={`py-20 md:py-32 bg-white/70 backdrop-blur-md text-gray-900`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            <p className="mb-4">
              I am a 4th-year PhD candidate in the Department of Mathematics at Ruprecht Karls Institute, Universität Heidelberg, specializing in Function Field Arithmetic. In particular, I am interested in studying the action of arithmetic subgroups on suitable geometric objects like the Bruhat-Tits building or the Drinfeld period domain and 
              its consequences on objects of arithmetic interest like the harmonic cochains on the building or the modular forms(and its variants) on the Drinfeld period domain.   
            </p>
            
          </div>
        </div>
      </section>

      
      {/* Publications Section */}
      <section id="publications" className={`py-20 md:py-32 bg-white/70 backdrop-blur-md text-gray-900`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Publications & Preprints</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6">
              {/* Publication Item 1 */}
              <li className="bg-gray-200 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">On nearly holomorphic Drinfeld modular forms over admissible coefficient rings</h3>
                <p className="text-gray-700 italic mb-2">Research in Number Theory</p>
                <p className="text-gray-700">
                  <a href="https://link.springer.com/article/10.1007/s40993-025-00666-2?utm_source=rct_congratemailt&utm_medium=email&utm_campaign=oa_20250909&utm_content=10.1007%2Fs40993-025-00666-2#article-info" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-500">
                    Article link
                  </a>
                </p>
              </li>
              <li className="bg-gray-200 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Derived equivalence and rational points</h3>
                <p className="text-gray-700 italic mb-2">Submitted as part of requirement of a master's thesis at CMI, India</p>
                <p className="text-gray-700">
                  <a href="/Msc_thesis.pdf" target="_blank" rel="noopener noreferrer" download className="text-cyan-600 hover:text-cyan-500">
                    MSc Thesis
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Notes/Slides of Talks Section */}
      <section id="talks" className={`py-20 md:py-32 bg-white/70 backdrop-blur-md text-gray-900`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Notes/Slides of Talks</h2>
          <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
            A collection of handwritten notes/slides from talks, I gave in research seminars and courses in my department during PhD/MSc.
          </p>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6">
              {/* Talk Item 1 */}
              <li className="bg-gray-200 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">SS2025: 𝓓-elliptic sheaves and the Hasse principle</h3>
                <p className="text-gray-700 italic mb-2">Gave three talks in a learning seminar based on a paper by Arai-Hattori-Kondo-Papikian with same title.</p>
                <div className="flex flex-wrap gap-4 text-gray-700">
                  <a href="webpage/D_elliptic/Notes_Talk_0-D_ell.pdf" target="_blank" rel="noopener noreferrer" download className="text-cyan-600 hover:text-cyan-500">
                    Overview Talk
                  </a>
                  <a href="/D_elliptic/Notes_Talk_3-D_ell.pdf" target="_blank" rel="noopener noreferrer" download className="text-cyan-600 hover:text-cyan-500">
                    Talk 3
                  </a>
                  <a href="/D_elliptic/Notes_Talk_9-D_ell.pdf" target="_blank" rel="noopener noreferrer" download className="text-cyan-600 hover:text-cyan-500">
                    Talk 9
                  </a>
                </div>
              </li>
              {/* Talk Item 2 */}
              <li className="bg-gray-200 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">WS2024-25: Tate resolutions</h3>
                <p className="text-gray-700 italic mb-2">Below are the notes for a talk covering some commutative algebraic background in a learning seminar on the work of Khare-Iyengar-Manning.</p>
                <div className="flex flex-wrap gap-4 text-gray-700">
                  <a href="/KMI/Notes_Talk3_IKM.pdf" target="_blank" rel="noopener noreferrer" download className="text-cyan-600 hover:text-cyan-500">
                    Talk 3
                  </a>
                  
                </div>
              </li>
              {/* Talk Item 3*/}
              <li className="bg-gray-200 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">WS2023-24: Rigid mermorphic cocyles</h3>
                <p className="text-gray-700 italic mb-2">Presented a talk in a learning seminar on rigid mermorphic cocyles after Darmon-Vonk.</p>
                <div className="flex flex-wrap gap-4 text-gray-700">
                  <a href="/RMC/Notes_Talk 3.pdf" target="_blank" rel="noopener noreferrer" download className="text-cyan-600 hover:text-cyan-500">
                    Talk 3
                  </a>
                  
                </div>
              </li>
              {/* Talk Item 4*/}
              <li className="bg-gray-200 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">(Aug-Nov 2019)Rigid Analytic Geometry</h3>
                <p className="text-gray-700 italic mb-2">Gave a talk, as part of the final exam, on a proof of rigid analytic GAGA, emulating the argument of Neeman in his excellent book "Algebraic and Analytic Geometry".</p>
                <div className="flex flex-wrap gap-4 text-gray-700">
                  <a href="/Rigid_GAGA.pdf" target="_blank" rel="noopener noreferrer" download className="text-cyan-600 hover:text-cyan-500">
                    Rigid GAGA
                  </a>
                  
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 md:py-32 bg-white/70 backdrop-blur-md text-gray-900`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
           <p className="text-lg text-gray-700 mb-8">
            first_name.chinthalagiri@iwr.uni-heidelberg.de
           </p>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 bg-white/80 border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} Sriram C V. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
