'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion'; // Dùng framer-motion cho mượt

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Khóa cuộn trang khi mở menu mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' 
            : 'bg-white/50 backdrop-blur-sm py-4 border-b border-transparent' 
            // Sửa lại mặc định có background nhẹ để dễ nhìn trên mọi nền
        }`}
      >
        <div className="container mx-auto px-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black text-blue-800 tracking-tighter cursor-pointer flex items-center group relative z-50">
            momtek<span className="text-orange-500 text-3xl leading-none group-hover:animate-bounce">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-bold text-slate-600 text-sm items-center">
            {NAV_LINKS.map((link, idx) => (
              <Link 
                key={idx} 
                href={link.href} 
                className={`transition hover:text-blue-600 relative group py-2 ${
                  link.highlight ? 'text-blue-500 hover:text-orange-500' : ''
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white mr-2 px-8 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition transform hover:scale-105 active:scale-95">
              Đăng nhập 
            </button>

            <button className="bg-yellow-400 text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition transform hover:scale-105 active:scale-95">
              Đăng kí miễn phí 
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-bold text-lg p-4 rounded-xl flex items-center justify-between border-b border-slate-50 ${
                    link.highlight ? 'text-orange-500 bg-orange-50' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  <ChevronRight size={16} />
                </Link>
              ))}
            </div>
            
            <div className="mt-8">
               <button className="w-full bg-blue-600 text-white px-5 py-4 rounded-xl font-bold shadow-lg text-lg mb-4">
                Vào học ngay
              </button>
              <p className="text-center text-xs text-slate-400">
                &copy; 2025 Momtek Education
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;