import Link from 'next/link';
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5 5 0 0 0-.15-3.8s-1.18-.38-3.9 1.46a13.3 13.3 0 0 0-7 0c-2.72-1.84-3.9-1.46-3.9-1.46a5 5 0 0 0-.15 3.8A5.5 5.5 0 0 0 2 8.5c0 5.22 3 6.42 6 6.76A4.8 4.8 0 0 0 7 18.5v3.5" />
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const MessageCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-brand-dark overflow-hidden pt-16 pb-8">
      {/* Background motif glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-violet/20 blur-[120px] rounded-[100%] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-violet to-brand-cyan flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-brand-dark rounded-[7px] flex items-center justify-center group-hover:bg-brand-dark/80 transition-colors">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-violet to-brand-cyan font-bold text-lg leading-none">B</span>
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">BrainWeb.ai</span>
            </Link>
            <p className="text-white/60 text-sm max-w-sm mb-6">
              A multi-agent AI workspace that ships as a native desktop app for Windows, macOS, and Linux. Built for performance and extensibility.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/masterharry9889/BrainWeb.ai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/80 hover:text-white border border-white/10 hover:border-white/20">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/80 hover:text-white border border-white/10 hover:border-white/20">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/80 hover:text-white border border-white/10 hover:border-white/20">
                <MessageCircleIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-sm text-white/60 hover:text-brand-cyan transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="text-sm text-white/60 hover:text-brand-cyan transition-colors">How it Works</Link></li>
              <li><Link href="#download" className="text-sm text-white/60 hover:text-brand-cyan transition-colors">Download</Link></li>
              <li><a href="https://github.com/masterharry9889/BrainWeb.ai/releases" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-brand-cyan transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-white/60 hover:text-brand-cyan transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-white/60 hover:text-brand-cyan transition-colors">Terms of Service</Link></li>
              <li><a href="https://github.com/masterharry9889/BrainWeb.ai/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-brand-cyan transition-colors">License</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} BrainWeb.ai. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-2">
            Open-source under MIT License
          </p>
        </div>
      </div>
    </footer>
  );
}
