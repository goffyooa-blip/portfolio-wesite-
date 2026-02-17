import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-luxury-cyan/5 rounded-full blur-[150px]"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-1 glass rounded-full text-xs font-bold text-luxury-cyan uppercase tracking-widest mb-6"
                        >
                            Get in touch
                        </motion.div>
                        <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
                            Build the <br /><span className="text-luxury-cyan">Impactful</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
                            Interested in AI collaboration or have a project vision? Let's connect and build something
                            intelligent together.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            <div className="flex flex-col gap-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Direct</span>
                                <a href="mailto:arush@example.com" className="text-xl font-bold text-white hover:text-luxury-cyan transition-colors">
                                    arush@example.com
                                </a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Location</span>
                                <span className="text-xl font-bold text-white">Nepal</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="https://github.com/arushadhikari" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl text-gray-400 hover:text-luxury-cyan hover:border-luxury-cyan/30 transition-all">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/arushadhikari" target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl text-gray-400 hover:text-luxury-cyan hover:border-luxury-cyan/30 transition-all">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 rounded-[3rem] border border-white/5 relative"
                    >
                        {/* Decorative form highlight */}
                        <div className="absolute top-0 right-10 w-20 h-1 bg-luxury-cyan rounded-full"></div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-luxury-black/30 border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-gray-700 focus:outline-none focus:border-luxury-cyan/30 transition-all backdrop-blur-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-luxury-black/30 border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-gray-700 focus:outline-none focus:border-luxury-cyan/30 transition-all backdrop-blur-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Your Vision</label>
                                <textarea
                                    rows="5"
                                    placeholder="Describe your project or just say hi!"
                                    className="w-full bg-luxury-black/30 border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-gray-700 focus:outline-none focus:border-luxury-cyan/30 transition-all resize-none backdrop-blur-md"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-6 bg-white text-black rounded-2xl font-bold text-lg hover:bg-luxury-cyan transition-all duration-500 transform hover:scale-[1.02] flex items-center justify-center gap-3 active:scale-95 cyan-glow"
                            >
                                Contact Me
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
