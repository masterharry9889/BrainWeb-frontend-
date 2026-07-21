'use client';

import { motion } from 'framer-motion';
import { Download, Link as LinkIcon, Sparkles } from 'lucide-react';

const steps = [
  {
    title: 'Install the app',
    description: 'Download the native installer for your OS and get started in seconds.',
    icon: Download,
    color: 'text-brand-violet',
    bg: 'bg-brand-violet/10',
    border: 'border-brand-violet/20'
  },
  {
    title: 'Connect your models',
    description: 'Link your favorite local or cloud models to power your AI workforce.',
    icon: LinkIcon,
    color: 'text-brand-magenta',
    bg: 'bg-brand-magenta/10',
    border: 'border-brand-magenta/20'
  },
  {
    title: 'Work in your workspace',
    description: 'Orchestrate agents, run scripts, and solve complex tasks all in one place.',
    icon: Sparkles,
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10',
    border: 'border-brand-cyan/20'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-white/60 text-lg">
            A simple flow to get your autonomous agents up and running locally.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-brand-violet via-brand-magenta to-brand-cyan opacity-20" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-2xl ${step.bg} ${step.border} border backdrop-blur-md flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>
                
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-bold mb-4">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
