'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Download, ChevronRight } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5 5 0 0 0-.15-3.8s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0c-2.72-1.84-3.9-1.46-3.9-1.46a5 5 0 0 0-.15 3.8A5.5 5.5 0 0 0 2 8.5c0 5.22 3 6.42 6 6.76A4.8 4.8 0 0 0 7 18.5v3.5" />
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
  </svg>
);
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';



export default function Hero() {
  const [os, setOs] = useState<'windows' | 'mac' | 'linux' | 'unknown'>('unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) setOs('windows');
    else if (userAgent.includes('mac')) setOs('mac');
    else if (userAgent.includes('linux')) setOs('linux');
  }, []);

  const getOsName = () => {
    switch (os) {
      case 'windows': return 'Windows';
      case 'mac': return 'macOS';
      case 'linux': return 'Linux';
      default: return 'your OS';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">


      {/* Background overlay to ensure text is legible over the model */}
      <div className="absolute inset-0 bg-brand-dark/40 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_80%)] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-sm font-medium backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            BrainWeb.ai is now available
          </div>
          
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Your multi-agent <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-brand-magenta to-brand-cyan">
              AI workspace.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed text-center">
            Run autonomous AI agents natively on your own machine. A fast Next.js UI paired with a powerful Python backend, packaged elegantly for desktop.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href="#download"
              className="relative group overflow-hidden rounded-full p-[1px]"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#950101_50%,#FF0000_100%)] opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full w-full bg-brand-darker px-8 py-3 rounded-full flex items-center justify-center gap-2 group-hover:bg-brand-darker/80 transition-colors backdrop-blur-3xl shadow-[0_0_20px_rgba(255,0,0,0.2)]">
                <Download className="w-5 h-5 text-white" />
                <span className="font-semibold text-white">Download for {getOsName()}</span>
              </div>
            </Link>
            
            <a
              href="https://github.com/masterharry9889/BrainWeb.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-white font-medium flex items-center gap-2 group backdrop-blur-md"
            >
              <GithubIcon className="w-5 h-5" />
              View on GitHub
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
