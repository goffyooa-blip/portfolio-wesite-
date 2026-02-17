import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Eye, Server, X, CheckCircle, Info } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="glass-card w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[2.5rem] border border-luxury-cyan/20 flex flex-col md:flex-row relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 p-2 glass rounded-full text-white hover:text-luxury-cyan transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Left: Visuals */}
                    <div className="md:w-1/2 bg-gradient-to-br from-luxury-black to-luxury-gray flex items-center justify-center p-12 min-h-[300px]">
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                        >
                            <div className="w-48 h-96 glass rounded-[3rem] border border-white/20 shadow-2xl p-4 flex flex-col gap-4 overflow-hidden relative">
                                <div className="w-full h-48 bg-luxury-cyan/10 rounded-[2rem] flex items-center justify-center">
                                    <Smartphone size={64} className="text-luxury-cyan opacity-40" />
                                </div>
                                <div className="space-y-3">
                                    <div className="w-3/4 h-3 bg-white/10 rounded-full"></div>
                                    <div className="w-full h-2 bg-white/5 rounded-full"></div>
                                    <div className="w-2/3 h-2 bg-white/5 rounded-full"></div>
                                </div>
                                <div className="mt-auto w-full h-10 bg-luxury-cyan/80 rounded-2xl flex items-center justify-center text-black font-bold text-xs">
                                    TRY ON NOW
                                </div>
                                {/* Simulation scanner line */}
                                <motion.div
                                    animate={{ top: ['0%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-0.5 bg-luxury-cyan/50 shadow-[0_0_10px_#00FAFB]"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Info */}
                    <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-500/20">
                                {project.status}
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-white">{project.name}</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed text-sm overflow-hidden">
                            {project.description}
                        </p>

                        <div className="space-y-6 mb-8">
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-luxury-cyan mb-3 flex items-center gap-2">
                                    <Info size={14} /> Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-3 py-1 glass rounded-lg text-xs text-gray-300 border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-luxury-cyan mb-3 flex items-center gap-2">
                                    <CheckCircle size={14} /> Core Performance
                                </h4>
                                <ul className="space-y-2">
                                    {['Real-time Body Tracking', 'WebCL/Metal Acceleration', 'Dynamic Texture Mapping'].map(item => (
                                        <li key={item} className="text-xs text-gray-400 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-luxury-cyan"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="flex-1 py-4 bg-white text-black text-center rounded-xl font-bold hover:bg-luxury-cyan transition-all flex items-center justify-center gap-2">
                                <Github size={18} /> Code
                            </a>
                            <a href="#" className="flex-1 py-4 glass text-white text-center rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <Eye size={18} /> Demo
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            name: 'VirtuFit',
            description: 'An AI-powered virtual try-on mobile application that allows users to try clothes digitally from home using artificial intelligence and computer vision.',
            technologies: ['React Native', 'AI', 'Computer Vision', 'Python'],
            status: 'Completed',
            icon: Smartphone
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-4"
                        >
                            <div className="w-12 h-px bg-luxury-cyan"></div>
                            <span className="text-luxury-cyan font-bold tracking-widest uppercase text-xs">Featured Works</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold"
                        >
                            Impactful <span className="text-luxury-cyan">Solutions</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-luxury-cyan/30 to-blue-500/30 rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-700"></div>
                            <div className="relative glass-card overflow-hidden rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row">
                                <div className="md:w-2/5 h-64 md:h-96 relative bg-gradient-to-br from-luxury-black to-luxury-gray overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <project.icon size={150} className="text-luxury-cyan/10 group-hover:text-luxury-cyan/20 transition-all duration-700 group-hover:scale-110" />
                                    </div>
                                    {/* Fake UI floating element */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-64 glass rounded-3xl border border-white/10 p-4"
                                    >
                                        <div className="w-full h-32 bg-luxury-cyan/10 rounded-2xl mb-4"></div>
                                        <div className="space-y-2">
                                            <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
                                            <div className="w-full h-1 bg-white/5 rounded-full"></div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-luxury-cyan font-bold text-xs uppercase tracking-widest">{project.status}</span>
                                        <div className="h-4 w-px bg-white/10"></div>
                                        <div className="flex gap-2">
                                            {project.technologies.slice(0, 2).map(t => (
                                                <span key={t} className="text-[10px] text-gray-500 uppercase font-bold">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-6 group-hover:text-luxury-cyan transition-colors">{project.name}</h3>
                                    <p className="text-gray-400 mb-8 max-w-xl text-lg leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <span className="text-white font-bold text-sm tracking-widest uppercase transition-all flex items-center gap-2 group-hover:gap-4">
                                            View Details <ExternalLink size={16} className="text-luxury-cyan" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
