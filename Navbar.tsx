
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home', id: 'home' },
    { name: 'خدماتنا', href: '#services', id: 'services' },
    { name: 'مساعد التعافي', href: '#ai-fix', id: 'ai-fix' },
    { name: 'مكتبة التمارين', href: '#library', id: 'library' },
    { name: 'بوابة الموظفين', href: '#portal', id: 'portal' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-xl italic">BF</span>
          </div>
          <span className={`text-2xl font-bold tracking-tight brand transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
            بودي فيكس
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`font-medium text-sm transition-colors hover:text-blue-600 ${
                activeSection === link.id 
                  ? 'text-blue-600' 
                  : isScrolled ? 'text-slate-600' : 'text-slate-200'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            احجز الآن
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
