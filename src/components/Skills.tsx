import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "Technical Skills": [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML/CSS",
            "Next Js (Basics)",
            "React Native (Basics)"
        ],
        "Version Control": ["Git", "GitHub"],
        "Framework": [
            "Tailwind CSS",
            "Sass",
            "Bootstrap",
            "Material UI",
            "Ant Design",
            "NativeWind"
        ],
        "State Management": ["Redux", "Context API", "Zustand", "Tan-Stack Query"],
        "Soft Skills": ["Team Work", "Problem Solving", "Communication", "Time Management"],
        "Back-end": ["Node Js", "Express Js", "RESTful API"],
        "Database": ["MongoDB", "Firebase"],
        "Development Process": ["SDLC"]
    };


    return (
        <section id="skills" className="py-20 bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center text-primary">{category}</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-dark border border-gray-700 hover:border-secondary text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
