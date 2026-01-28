
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { COMPANY_DETAILS, COLORS } from '../constants';


const Logo: React.FC<{ isScrolled?: boolean; light?: boolean }> = ({ isScrolled, light }) => (
  <div className="flex items-center gap-3 group">
    <div className="relative flex items-center justify-center">
      {/* Modern Industrial Icon */}
      <div className="w-10 h-10 bg-blue-900 rounded-xl relative overflow-hidden flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-950"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-orange-600 transform rotate-45 translate-x-3 translate-y-3"></div>
        <span className="relative z-10 text-white font-black text-xl tracking-tighter italic">V</span>
      </div>
      {/* Accent bar */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></div>
    </div>
    <div className="flex flex-col leading-none">
      <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${light ? 'text-white' : 'text-blue-900'
        }`}>
        VSK <span className="text-orange-600">TRADERS</span>
      </span>
      <span className={`text-[9px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 ${light ? 'text-blue-200' : 'text-slate-500'
        }`}>
        Demolition & Materials
      </span>
    </div>
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo isScrolled={isScrolled} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${location.pathname === link.path
                  ? 'text-orange-600'
                  : 'text-slate-700 hover:text-orange-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              REQUEST QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-2"
            >
              {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-8 px-8 flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-slate-900 p-2"><XMarkIcon className="h-8 w-8" /></button>
        </div>
        <div className="px-8 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)}><Logo isScrolled={true} /></Link>
          <div className="pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-2xl font-bold text-slate-900 py-4 border-b border-gray-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/quote"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-blue-900 text-white text-center py-5 rounded-xl font-bold text-xl mt-8"
          >
            Request a Quote
          </Link>
          <div className="pt-8 text-center text-slate-500">
            <p className="mb-2">Call us for immediate assistance:</p>
            <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-xl font-bold text-blue-900">
              {COMPANY_DETAILS.phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="mb-8 block">
              <Logo light />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Specializing in professional building demolition and high-quality construction material supply in Chennai for over a decade.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Our Services</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Product Catalog</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-500 transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Building Demolition</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Roofing Solutions</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Site Excavation</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Industrial Fabrication</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Materials Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 font-bold shrink-0">ADDRESS</span>
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-500 font-bold shrink-0">PHONE</span>
                <span>{COMPANY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-500 font-bold shrink-0">EMAIL</span>
                <span>{COMPANY_DETAILS.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-orange-500 font-bold shrink-0">TIME</span>
                <span>{COMPANY_DETAILS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 VSK Traders. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${COMPANY_DETAILS.whatsapp.replace('+', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
      title="Chat with us on WhatsApp"
    >
      {/* WhatsApp Icon SVG */}
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      <span className="ml-2 hidden md:inline font-bold">Chat with us</span>
    </a>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
