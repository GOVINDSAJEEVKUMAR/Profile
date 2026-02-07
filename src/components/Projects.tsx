import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Museum Management System',
            description: 'A comprehensive platform for digital artifact cataloging, visitor ticket management, and Exhibition scheduling with real-time analytics.',
            tech: ['React', 'Sass', 'Firebase'],
            color: 'from-blue-500 to-cyan-500' // Fallback gradient
        },
        {
            id: 2,
            title: 'Venue Booking System',
            description: 'Streamlined facility reservation system featuring real-time availability calendaring, automated booking confirmations, and user management.',
            tech: ['React', 'Tailwind css', 'Next Js', 'Firebase'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 3,
            title: 'Laundary Management System',
            description: 'Mobile application for on-demand laundry services including geolocation-based pickup scheduling, order tracking, and service provider listings.',
            tech: ['React Native', 'Nativewind ', 'Expo', 'Google Mpas', 'Firebase'],
            color: 'from-orange-500 to-red-500'
        },
        
    ];

    return (
        <section id="projects" className="py-20 bg-dark text-white bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all group"
                        >
                            {/* Project Image Placeholder */}
                            <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs bg-dark border border-gray-700 text-gray-300 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* <div className="flex justify-between">
                                    <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                        <Github size={16} /> Code
                                    </button>
                                    <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-indigo-400 transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </button>
                                </div> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
