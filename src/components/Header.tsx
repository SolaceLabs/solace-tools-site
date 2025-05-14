import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-gray-900 text-white" style={{backgroundColor: "#2d353d" }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
    {/* Logo */}
    <a href="/" className="flex items-center">
      <img
        src="https://www.solace.dev/static/solace-developers-logo-white-6ea7f689ecb529c10ae9fc2c84ed12a5.png"
        alt="Solace Developers"
        width="125"
        height="36"
        className="h-9"
      />
    </a>

    {/* Mobile Toggle (non-functional placeholder) */}
    <button
      aria-label="Toggle navigation"
      type="button"
      className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
    >
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    {/* Nav Links */}
    <div className="hidden lg:flex flex-1 items-center justify-between">
      <ul className="flex space-x-6 text-sm font-medium m-auto">
        <li><a href="https://solace.community" target="_blank" rel="noopener noreferrer" className="hover:underline whitespace-nowrap">Community</a></li>
        <li><a href="https://solace.com/events/" target="_blank" rel="noopener noreferrer" className="hover:underline whitespace-nowrap">Events</a></li>
        <li><a href="https://tutorials.solace.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline">API Tutorials</a></li>
        <li><a href="https://docs.solace.com/" target="_blank" rel="noopener noreferrer" className="hover:underline whitespace-nowrap">Docs</a></li>
        <li><a href="https://solace.com/downloads/" target="_blank" rel="noopener noreferrer" className="hover:underline whitespace-nowrap">Downloads</a></li>
        <li><a href="https://codelabs.solace.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline whitespace-nowrap">Codelabs</a></li>
      </ul>

      {/* Login Button */}
      <ul className="flex items-center">
        <li>
          <a
            href="https://console.solace.cloud/login"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-block bg-white text-gray-900 font-semibold py-1 px-4 rounded hover:bg-gray-100 text-sm"
          >
            Login
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

interface NavLinkProps {
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label }) => {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-solace-cool-gray-12 hover:text-solace-classic-green transition-colors">
        <span>{label}</span>
        <ChevronDown size={16} className="group-hover:text-solace-classic-green transition-colors" />
      </button>
    </div>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ label }) => {
  return (
    <div className="py-2">
      <button className="flex items-center justify-between w-full text-solace-cool-gray-12">
        <span>{label}</span>
        <ChevronDown size={16} />
      </button>
    </div>
  );
};