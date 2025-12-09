import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: 'B Voc Software Development and System Administration',
            institution: 'MG University , Kottayam',
            year: '2020 - 2023',
            description: 'Studied Software Development and System Administration.'
        },

    ];

    return (
        <section id="education" className="py-20 bg-dark text-white bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-xl border border-gray-800 hover:border-secondary transition-colors relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <GraduationCap className="text-secondary mb-4" size={40} />
                                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                                <p className="text-primary font-medium mb-4">{edu.institution}</p>
                                <div className="flex justify-between items-center text-sm text-gray-400">
                                    <span>{edu.year}</span>
                                </div>
                                <p className="mt-4 text-gray-400 text-sm">
                                    {edu.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
