"use client"

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-2 md:py-3' : 'py-2 md:py-6'
          }`}>          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={68}
              height={68}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-14">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/quienes-somos">Quiénes somos</NavLink>
            {/* <NavLink href="/proyectos" disabled>Proyectos</NavLink> */}
          </div>

          {/* Mobile Menu Button */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden p-2"
              aria-label="Menu"
            >              <div className="w-6 flex flex-col gap-1">
                <span className={`block h-0.5 w-full bg-[#5E17EB] transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`} />
                <span className={`block h-0.5 w-full bg-[#5E17EB] transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                  }`} />
                <span className={`block h-0.5 w-full bg-[#5E17EB] transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`sm:hidden transition-all duration-300 ease-in-out px-4 ${isOpen
            ? 'max-h-64 opacity-100 py-4'
            : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <div className="flex flex-col gap-6">
            <NavLink href="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink href="/quienes-somos" onClick={() => setIsOpen(false)}>
              Quiénes somos
            </NavLink>            
            {/* <NavLink href="/proyectos" onClick={() => setIsOpen(false)} disabled>
              Proyectos
            </NavLink> */}
          </div>
        </div>
    </nav>
  );
}

// Update MobileNavLink to use NavLink component
function NavLink({ href, children, onClick, disabled }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (disabled) {
    return (
      <span className="relative inline-block text-gray-400 cursor-not-allowed font-medium tracking-wide">
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group inline-block hover:text-[#5E17EB] transition-all duration-300 font-medium tracking-wide"
    >
      <span className={`${isActive ? 'text-[#5E17EB]' : 'text-gray-600'}`}>
        {children}
      </span>
      <span
        className={`absolute -bottom-0.5 left-0 w-full h-[2px] bg-[#F6A717] transform origin-left transition-all duration-300 ease-in-out ${isActive
            ? 'scale-x-100'
            : 'scale-x-0'
          }`}
        style={{ transform: `translateY(8px) scaleX(${isActive ? 1 : 0})` }}
      />
    </Link>
  );
}