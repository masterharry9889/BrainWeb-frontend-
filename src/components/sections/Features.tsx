'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Cpu, Monitor, Zap, Globe, Layers, ArrowRight } from 'lucide-react';

const featuresList = [
  {
    id: 1,
    title: 'Multi-Agent Orchestration',
    description: 'Coordinate multiple AI agents in a single workspace. Let them collaborate, debate, and solve complex problems together.',
    icon: BrainCircuit,
    color: 'from-brand-violet to-brand-magenta'
  },
  {
    id: 2,
    title: 'Native Desktop App',
    description: 'Not just another browser tab. Runs fully natively via Electron for a seamless, persistent, and fast desktop experience.',
    icon: Monitor,
    color: 'from-brand-magenta to-brand-cyan'
  },
  {
    id: 3,
    title: 'Python Backend Power',
    description: 'Leverages a robust FastAPI Python backend to run actual processing, execute complex scripts, and interface with local AI models.',
    icon: Cpu,
    color: 'from-brand-cyan to-brand-violet'
  },
  {
    id: 4,
    title: 'Next.js Performance',
    description: 'A blazing fast, reactive UI built on Next.js. Enjoy smooth transitions and real-time updates as your agents work.',
    icon: Zap,
    color: 'from-brand-amber to-brand-magenta'
  },
  {
    id: 5,
    title: 'Cross-Platform',
    description: 'First-class support out of the box for Windows, macOS (Intel & Apple Silicon), and Linux. Work wherever you want.',
    icon: Globe,
    color: 'from-brand-violet to-brand-cyan'
  },
  {
    id: 6,
    title: 'Open Source Foundation',
    description: 'Fully extensible and open-source. Inspect the code, build your own plugins, or contribute back to the community.',
    icon: Layers,
    color: 'from-brand-cyan to-brand-amber'
  }
];

export default function Features() {
  const [features, setFeatures] = useState(featuresList);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeatures((prev) => {
        const newFeatures = [...prev];
        const first = newFeatures.shift();
        if (first) newFeatures.push(first);
        return newFeatures;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFeatures((prev) => {
      const newFeatures = [...prev];
      const first = newFeatures.shift();
      if (first) newFeatures.push(first);
      return newFeatures;
    });
  };

  return (
    <section id="features" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text content */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Everything you need for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan">
              agentic workflows
            </span>
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-lg leading-relaxed">
            BrainWeb.ai combines the speed of modern web tech with the raw power of a native Python backend. Experience true multi-agent collaboration right on your desktop.
          </p>
          
          <button 
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white group"
          >
            Next feature
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side: Animated Stack */}
        <div className="relative h-[350px] md:h-[400px] w-full flex items-center justify-center">
          <div className="relative w-full max-w-md h-[250px]">
            <AnimatePresence mode="popLayout">
              {features.map((feature, index) => {
                const isTop = index === 0;
                
                // Only show top 3 cards in the stack, hide the rest
                if (index > 2) return null;

                return (
                  <motion.div
                    key={feature.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 100 }}
                    animate={{
                      top: index * 20,
                      scale: 1 - index * 0.05,
                      zIndex: features.length - index,
                      opacity: 1 - index * 0.15,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      y: -100,
                      transition: { duration: 0.2 }
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 25,
                      mass: 1,
                    }}
                    className={`absolute w-full bg-[#111115] border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${isTop ? 'cursor-pointer' : ''}`}
                    onClick={() => { if (isTop) handleNext() }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-[1px] mb-6 shadow-lg`}>
                        <div className="w-full h-full bg-[#0D0E12] rounded-[11px] flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed text-base">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
