'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5 5 0 0 0-.15-3.8s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0c-2.72-1.84-3.9-1.46-3.9-1.46a5 5 0 0 0-.15 3.8A5.5 5.5 0 0 0 2 8.5c0 5.22 3 6.42 6 6.76A4.8 4.8 0 0 0 7 18.5v3.5" />
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-brand-dark/70 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
          <img src="/spider-logo.webp" alt="BrainWeb Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
          <span className="font-display font-bold text-xl tracking-tight text-white">BrainWeb.ai</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            How it Works
          </Link>
          <a
            href="https://github.com/masterharry9889/BrainWeb.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </nav>

        {/* Desktop Download Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link
              href="#download"
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-violet focus:ring-offset-2 focus:ring-offset-brand-dark group"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#950101_50%,#FF0000_100%)] opacity-70 group-hover:opacity-100 transition-opacity" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-brand-darker px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-brand-darker/80 transition-colors gap-2">
                <Download className="w-4 h-4" />
                Download
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-brand-darker/95 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-2xl">
          <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white/80 hover:text-white py-2">Features</Link>
          <Link href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-white/80 hover:text-white py-2">How it Works</Link>
          <a href="https://github.com/masterharry9889/BrainWeb.ai" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-white/80 hover:text-white py-2 flex items-center gap-2">
            <GithubIcon className="w-5 h-5" /> GitHub
          </a>
          <Link href="#download" onClick={() => setMobileMenuOpen(false)} className="mt-4 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full text-white font-medium">
            <Download className="w-5 h-5" /> Download
          </Link>
        </div>
      )}
    </header>
  );
}
