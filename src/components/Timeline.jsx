import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Brain, Rocket, Code } from 'lucide-react';

const TimelineItem = ({ year, title, icon: Icon, delay, isLast }) => (
    <div className="relative flex gap-8 md:gap-12 group pb-12 md:pb-20">
        {/* Connector Line */}
        {!isLast && (
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: delay + 0.5 }}
                className="absolute left-6 md:left-8 top-12 bottom-0 w-px bg-gradient-to-b from-luxury-cyan/50 via-luxury-cyan/20 to-transparent"
            />
        )}

        {/* Year Label - Hidden on mobile, shown on right of icon/line on desktop or similar */}
        <div className="hidden md:flex flex-col items-end pt-2 w-24">
            <span className="text-xl font-bold text-luxury-cyan">{year}</span>
        </div>

        {/* Icon / Marker */}
        <div className="relative z-10">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay }}
                className="w-12 h-12 md:w-16 md:h-16 glass rounded-2xl flex items-center justify-center border border-luxury-cyan/30 cyan-glow group-hover:border-luxury-cyan transition-all duration-500"
            >
                <Icon className="text-luxury-cyan" size={24} />
            </motion.div>
        </div>

        {/* Content */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className="pt-2"
        >
            <span className="md:hidden block text-luxury-cyan font-bold mb-1 text-sm">{year}</span>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-luxury-cyan transition-colors">{title}</h3>
            <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
                Focused on pushing boundaries in Artificial Intelligence and developing scalable digital products.
            </p>
        </motion.div>
    </div>
);

const Timeline = () => {
    const events = [
        {
            year: '2025',
            title: 'Started BSc (Hons) Computer Science with Artificial Intelligence',
            icon: Calendar
        },
        {
            year: '2026',
            title: 'Built AI Virtual Try-On App "VirtuFit"',
            icon: Brain
        },
        {
            year: '2026',
            title: 'Developed multiple AI-based applications',
            icon: Rocket
        }
    ];

    return (
        <section id="timeline" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="w-12 h-px bg-luxury-cyan"></div>
                        <span className="text-luxury-cyan font-bold tracking-widest uppercase text-xs">My Journey</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        Career <span className="text-luxury-cyan">Timeline</span>
                    </motion.h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {events.map((event, index) => (
                        <TimelineItem
                            key={index}
                            {...event}
                            delay={index * 0.2}
                            isLast={index === events.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
