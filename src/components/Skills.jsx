import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Globe, Layout, Layers, Terminal, Sparkles, Smartphone, Figma } from 'lucide-react';

const SkillCard = ({ name, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -10, rotate: [0, 1, -1, 0] }}
        className="group p-6 glass-card rounded-3xl flex flex-col items-center text-center gap-4 relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="p-4 rounded-2xl bg-luxury-black border border-white/5 group-hover:border-luxury-cyan/30 transition-all duration-300 relative z-10">
            <Icon className="text-luxury-cyan group-hover:scale-110 transition-transform duration-300" size={32} />
        </div>

        <h3 className="font-bold text-white group-hover:text-luxury-cyan transition-colors relative z-10 text-sm md:text-base">{name}</h3>

        <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden relative z-10">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: delay + 0.3 }}
                className="h-full bg-luxury-cyan"
            />
        </div>
    </motion.div>
);

const Skills = () => {
    const skills = [
        { name: 'AI Development', icon: Brain },
        { name: 'Web Development', icon: Globe },
        { name: 'Mobile App Dev', icon: Smartphone },
        { name: 'React', icon: Layout },
        { name: 'JavaScript', icon: Code2 },
        { name: 'Python', icon: Terminal },
        { name: 'UI/UX Design', icon: Figma },
        { name: 'AI Engineering', icon: Sparkles },
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-luxury-cyan/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 glass rounded-full text-xs font-bold text-luxury-cyan uppercase tracking-widest mb-4"
                    >
                        Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        Technical <span className="text-luxury-cyan">Skills</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Mastering the intersection of Artificial Intelligence and Modern Software Engineering
                        to build the next generation of digital products.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} delay={index * 0.05} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
