import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowUp, Cpu } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 border-t border-white/5 relative bg-luxury-black overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-luxury-cyan/[0.02] blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col items-center md:items-start">
                        <a href="#home" className="text-2xl font-bold text-gradient mb-4 flex items-center gap-2">
                            <Cpu size={24} className="text-luxury-cyan" /> ARUSH.DEV
                        </a>
                        <p className="text-gray-600 text-sm max-w-xs text-center md:text-left leading-relaxed">
                            Pioneering intelligent digital experiences through the convergence of AI and Modern Full Stack Engineering.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-8">
                            <a href="https://github.com/arushadhikari" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-luxury-cyan transition-all transform hover:scale-110">
                                <Github size={22} />
                            </a>
                            <a href="https://linkedin.com/in/arushadhikari" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-luxury-cyan transition-all transform hover:scale-110">
                                <Linkedin size={22} />
                            </a>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-700">© 2026 Arush Adhikari</p>
                    </div>

                    <motion.button
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="p-5 glass rounded-full text-luxury-cyan border border-luxury-cyan/20 cyan-glow hover:border-luxury-cyan/50 transition-all"
                    >
                        <ArrowUp size={24} />
                    </motion.button>
                </div>

                <div className="mt-16 text-center">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                    <div className="mt-8 flex justify-center gap-8 opacity-20 filter grayscale hover:grayscale-0 transition-all duration-700">
                        {/* Fake "Built with" icons area for style */}
                        <div className="text-[10px] uppercase tracking-widest text-white/50">React 19</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/50">Framer Motion</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/50">Tailwind CSS</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
