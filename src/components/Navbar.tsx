"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Zap } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "خدماتنا", href: "#services" },
    { name: "أعمالنا", href: "#portfolio" },
    { name: "اتصل بنا", href: "#contact" },
  ];

  // الألوان الجديدة:
  // الكحلي الملكي: #0f172a (slate-900)
  // الأصفر الذهبي: #fbbf24 (amber-400)

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-slate-900 shadow-lg py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-3 group">
            <div className="bg-amber-400 p-2 rounded-lg shadow-[0_0_15px_rgba(251,191,36,0.4)] transition-transform group-hover:scale-110">
              <Zap className="text-slate-900" size={22} fill="currentColor" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className={`text-xl font-black tracking-tight ${
                isScrolled ? "text-white" : "text-amber-500" 
              }`}>
                كهربائي <span className="text-amber-500">الرياض</span>
              </span>
              <span className={`text-[9px] font-bold tracking-[0.3em] ${
                isScrolled ? "text-slate-400" : "text-slate-600"
              }`}>
                PROFESSIONAL SERVICES
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold transition-all hover:text-amber-400 ${
                  isScrolled ? "text-slate-300" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href="tel:+966500000000" 
              className="flex items-center gap-2 bg-amber-400 text-slate-900 px-6 py-2.5 rounded-full font-black shadow-lg hover:bg-amber-500 hover:shadow-amber-500/20 transition-all active:scale-95"
            >
              <Phone size={18} />
              <span>اتصل الآن</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={isScrolled ? "text-white" : "text-white"}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col items-center justify-center space-y-8 z-[-1] animate-in fade-in duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-black text-white hover:text-amber-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel: 009660573209001"
              className="flex items-center gap-3 bg-amber-400 text-slate-900 px-10 py-4 rounded-full font-black text-xl shadow-2xl shadow-amber-500/20"
            >
              <Phone size={24} />
              اتصل الآن
            </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;