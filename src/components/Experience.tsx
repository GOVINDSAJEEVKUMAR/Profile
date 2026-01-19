import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            
        id: 1,
        role: 'AI Software Engineer',
        company: 'BizFirst | India',
        period: '11/2025 - Present',
        description: 'Develop and maintain production-ready applications aligned with business requirements. Apply clean architecture and reusable components while participating in code reviews. Debug and support deployed systems to ensure reliability and performance. Collaborate with Product, UX, and Data teams in agile development cycles. Use AI tools and agents for code optimization, debugging, and documentation.'
    
        },
        {
            id: 2,
            role: 'Software Engineer',
            company: 'Fawrit Technologies Pvt Ltd , Ernakulam',
            period: '06/2025 - 11/2025',
            description: 'Developed user interfaces for Mobile applications using React Native and Narivewind.'
        },
        {
            id: 3,
            role: 'Software  Developer - React Js',
            company: 'Aventus Informativs , Info-park Koratty',
            period: '10/2024 - 05/2025',
            description: 'Collaborated with designers to implement responsive user interfaces. Migrated legacy codebases to modern React frameworks.'
        },
        {
            id: 4,
            role: 'React Developer',
            company: 'Otome Innovations Solutions Pvt Ltd',
            period: '4 Month Contract',
            description: 'Developed admin dashboard. Gained proficiency in HTML, CSS, JavaScript, and basic React.'
        }
    ];

    return (
        <section id="experience" className="py-20 bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="relative border-l border-gray-700 ml-4 md:ml-0 md:pl-0 md:grid md:grid-cols-1 md:gap-12 max-w-4xl mx-auto pl-4">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="mb-10 last:mb-0 ml-6 md:ml-0 md:relative"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[29px] mt-1.5 w-4 h-4 rounded-full bg-primary border-4 border-dark"></div>

                            <div className="bg-card p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors shadow-lg">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <Briefcase size={20} className="text-primary" />
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm text-gray-400 bg-dark px-3 py-1 rounded-full border border-gray-700 mt-2 md:mt-0 w-fit">
                                        {exp.period}
                                    </span>
                                </div>
                                <h4 className="text-lg text-secondary font-medium mb-2">{exp.company}</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
