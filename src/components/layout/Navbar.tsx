'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) setMobileSubmenu(null);
  }, [isMobileMenuOpen]);

  const toggleMobileSubmenu = (label: string) => {
    if (mobileSubmenu === label) {
      setMobileSubmenu(null);
    } else {
      setMobileSubmenu(label);
    }
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' 
            : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm'
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
              <div key={idx} className="relative group">
                {/* SỬA ĐỔI: Luôn dùng link.href thật và xóa e.preventDefault() để cho phép click chuyển trang */}
                <Link 
                  href={link.href} 
                  className={`flex items-center gap-1 transition hover:text-blue-600 relative py-2 ${
                    link.highlight ? 'text-blue-500 hover:text-orange-500' : ''
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300"/>}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </Link>

                {/* Desktop Dropdown */}
                {link.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 min-w-[200px] overflow-hidden">
                      {link.children.map((child, childIdx) => (
                        <Link 
                          key={childIdx}
                          href={child.href}
                          className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white mr-2 px-8 py-2.5 rounded-full font-bold text-sm shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition transform hover:scale-105 active:scale-95">
              Đăng nhập 
            </button>

            <button className="bg-yellow-400 text-white px-8 py-2.5 rounded-full font-bold text-sm shadow-lg  hover:shadow-blue-500/30 transition transform hover:scale-105 active:scale-95">
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link, idx) => (
                <div key={idx} className="border-b border-slate-50 pb-2">
                  <div 
                    className={`font-bold text-lg p-3 rounded-xl flex items-center justify-between ${
                        link.highlight ? 'text-orange-500 bg-orange-50' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {/* SỬA ĐỔI MOBILE: Tách tên Link và nút mũi tên */}
                    <Link 
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex-1"
                    >
                      {link.label}
                    </Link>

                    {/* Nếu có con thì hiển thị nút mũi tên riêng biệt để toggle menu */}
                    {link.children ? (
                        <div 
                            className="p-2 -mr-2 cursor-pointer hover:bg-slate-200 rounded-full transition"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleMobileSubmenu(link.label);
                            }}
                        >
                             <ChevronDown 
                                size={20} 
                                className={`transition-transform duration-300 ${mobileSubmenu === link.label ? 'rotate-180' : ''}`}
                            />
                        </div>
                    ) : (
                        <ChevronRight size={16} className="text-slate-400" />
                    )}
                  </div>

                  {/* Phần hiển thị Menu con */}
                  <AnimatePresence>
                    {link.children && mobileSubmenu === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50 rounded-lg mx-2 mt-1"
                      >
                         {link.children.map((child, childIdx) => (
                           <Link
                             key={childIdx}
                             href={child.href}
                             onClick={() => setIsMobileMenuOpen(false)}
                             className="block p-3 pl-8 text-slate-600 font-medium hover:text-blue-600 border-l-2 border-transparent hover:border-blue-500 transition"
                           >
                             {child.label}
                           </Link>
                         ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pb-10">
               <button className="w-full bg-blue-600 text-white px-5 py-4 rounded-xl font-bold shadow-lg text-lg mb-4">
                Đăng nhập
              </button>
              <button className="w-full bg-yellow-400 text-white px-5 py-4 rounded-xl font-bold shadow-lg text-lg">
                Đăng kí miễn phí
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;