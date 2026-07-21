'use client';

import { motion } from 'framer-motion';
import { Download as DownloadIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const platforms = [
  {
    id: 'windows',
    name: 'Windows',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
    note: 'Windows 10/11 · 64-bit',
    url: '/downloads/BrainWeb.ai%20Setup%201.0.0.exe',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'mac',
    name: 'macOS',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M16.4 12.55c0-3.32 2.7-4.94 2.82-5.02-1.54-2.26-3.95-2.57-4.81-2.61-2.06-.21-4.04 1.22-5.1 1.22-1.05 0-2.69-1.18-4.38-1.15-2.22.04-4.27 1.29-5.42 3.3C-2.88 12.44 1.14 21.08 5.61 27.53c1.08 1.57 2.34 3.32 4.02 3.26 1.63-.07 2.25-1.05 4.22-1.05 1.95 0 2.52 1.05 4.24 1.01 1.76-.03 2.85-1.59 3.91-3.13 1.22-1.79 1.73-3.53 1.76-3.62-.04-.01-3.36-1.28-3.36-5.12zM15.15 4.67c.9-1.09 1.5-2.6 1.34-4.11-1.31.05-2.88.87-3.8 1.97-.73.85-1.45 2.39-1.26 3.88 1.47.11 2.83-.65 3.72-1.74z" transform="scale(0.85) translate(2 2)" />
      </svg>
    ),
    note: 'macOS 12+ · Apple Silicon & Intel',
    url: '/downloads/BrainWeb.ai-1.0.0-arm64.dmg',
    color: 'from-gray-300 to-gray-500',
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    note: 'AppImage / .deb',
    url: '/downloads/BrainWeb.ai-1.0.0.AppImage',
    color: 'from-yellow-400 to-orange-500',
  }
];

export default function Download() {
  const [os, setOs] = useState('unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) setOs('windows');
    else if (userAgent.includes('mac')) setOs('mac');
    else if (userAgent.includes('linux')) setOs('linux');
  }, []);

  return (
    <section id="download" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Download BrainWeb.ai
          </h2>
          <p className="text-white/60 text-lg">
            Choose the right installer for your operating system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, index) => {
            const isRecommended = os === platform.id;
            
            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group rounded-2xl p-[1px] transition-all duration-300 ${
                  isRecommended ? 'scale-[1.02] md:scale-105 z-10' : 'hover:scale-105'
                }`}
              >
                {/* Border gradient for recommended card */}
                {isRecommended && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-violet to-brand-cyan opacity-100" />
                )}
                {!isRecommended && (
                  <div className="absolute inset-0 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors" />
                )}

                <div className={`relative h-full bg-brand-dark rounded-[15px] p-8 flex flex-col items-center text-center ${
                  isRecommended ? 'bg-brand-dark/90 backdrop-blur-xl' : ''
                }`}>
                  {isRecommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-violet to-brand-cyan text-[10px] font-bold text-white uppercase tracking-wider shadow-lg">
                      Recommended
                    </div>
                  )}

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} p-[1px] mb-6 flex-shrink-0`}>
                    <div className="w-full h-full bg-brand-darker rounded-[15px] flex items-center justify-center group-hover:bg-brand-darker/50 transition-colors">
                      <platform.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{platform.name}</h3>
                  <p className="text-white/50 text-sm mb-8 flex-grow">{platform.note}</p>

                  <a
                    href={platform.url}
                    download
                    className={`w-full py-3 rounded-full flex items-center justify-center gap-2 font-medium transition-all ${
                      isRecommended 
                        ? 'bg-gradient-to-r from-brand-violet to-brand-cyan text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-[1.02]' 
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <DownloadIcon className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
