import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Cpu, BrainCircuit, Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background animated gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-luxury-cyan/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-full text-xs font-semibold tracking-widest text-luxury-cyan uppercase"
                >
                    <Sparkles size={14} className="animate-pulse" />
                    <span>Creative AI Engineering</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-tight"
                >
                    AI Developer <br />
                    <span className="text-gradient">Building the Future</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-2xl mx-auto"
                >
                    <span className="block mb-2 text-white/90 font-medium">Arush Adhikari</span>
                    AI Developer | Computer Science Student based in Nepal
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-4 bg-luxury-cyan text-black rounded-full font-bold transition-all duration-300 flex items-center gap-2 cyan-glow shadow-[0_0_15px_rgba(0,250,251,0.3)]"
                    >
                        Contact Me
                        <Rocket size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 glass text-white rounded-full font-bold transition-all duration-300 hover:bg-white/5 flex items-center gap-2"
                    >
                        View Projects
                    </motion.a>
                </motion.div>

                {/* Floating Elements Simulation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/3 left-10 md:left-20 p-4 glass rounded-2xl opacity-20 hidden md:block"
                    >
                        <Cpu size={32} className="text-luxury-cyan" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/3 right-10 md:right-20 p-4 glass rounded-2xl opacity-20 hidden md:block"
                    >
                        <BrainCircuit size={32} className="text-luxury-cyan" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-1 h-8 rounded-full bg-gradient-to-b from-luxury-cyan to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
