import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Mail, Linkedin, Github, MapPin } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-luxury-gray/30 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="h-full w-full bg-[radial-gradient(#00FAFB_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden glass-card p-4 relative">
                            {/* Profile Placeholder Image with Cyan Glow */}
                            <div className="w-full h-full bg-gradient-to-br from-luxury-gray to-luxury-black rounded-2xl flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-luxury-cyan/5 group-hover:bg-luxury-cyan/10 transition-colors duration-500"></div>
                                <div className="z-10 text-center">
                                    <h3
                                        className="text-8xl font-black tracking-tighter text-transparent"
                                        style={{ WebkitTextStroke: '1px rgba(0, 250, 251, 0.3)' }}
                                    >
                                        AA
                                    </h3>
                                    <div className="mt-4 text-xs tracking-[0.4em] text-luxury-cyan uppercase font-bold">Arush Adhikari</div>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-luxury-cyan/20 blur-3xl rounded-full"></div>
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
                            </div>

                            {/* Floating Card Decorative Element */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-6 -left-6 p-4 glass rounded-2xl border border-luxury-cyan/20 shadow-xl"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Available for Hire</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Passionate <span className="text-luxury-cyan">AI Developer</span> & Computer Science Student
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            I am focused on building intelligent, real-world solutions. I specialize in creating AI-powered applications, modern web apps, and mobile experiences. My goal is to use artificial intelligence to solve meaningful problems and build impactful products.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="flex items-start gap-4 p-4 glass rounded-2xl">
                                <div className="p-3 bg-luxury-cyan/10 rounded-xl text-luxury-cyan">
                                    <GraduationCap size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">BSc (Hons) CS AI</h4>
                                    <p className="text-gray-500 text-xs">Started 2025</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 glass rounded-2xl">
                                <div className="p-3 bg-luxury-cyan/10 rounded-xl text-luxury-cyan">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Location</h4>
                                    <p className="text-gray-500 text-xs">Nepal</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 glass-card rounded-2xl mb-10 border-l-4 border-l-luxury-cyan">
                            <h4 className="text-luxury-cyan font-bold mb-2 uppercase tracking-widest text-xs">What I'm looking for</h4>
                            <p className="text-gray-300 text-sm">AI internships, freelance projects, and opportunities to work on innovative AI products.</p>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://linkedin.com/in/arushadhikari" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-gray-400 hover:text-luxury-cyan hover:border-luxury-cyan/50 transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/arushadhikari" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-gray-400 hover:text-luxury-cyan hover:border-luxury-cyan/50 transition-all duration-300">
                                <Github size={20} />
                            </a>
                            <a href="mailto:arush@example.com" className="p-3 glass rounded-xl text-gray-400 hover:text-luxury-cyan hover:border-luxury-cyan/50 transition-all duration-300">
                                <Mail size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
