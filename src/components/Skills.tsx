
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "AI & LLM Integration": [
            "LLM API Integration",
            "AI-Driven Features",
            "Agentic AI Workflows",
            "RAG Systems",
            "Vector Databases"
        ],

        "Backend & APIs": [
            "Node.js",
            "Express.js",
            "REST APIs",
            "JSON Payload Handling",
            "Backend Integration"
        ],

        "Frontend Development": [
            "React.js",
            "JavaScript (ES6+)",
            "TypeScript",
            "Next.js",
            "HTML5",
            "CSS3"
        ],

        "UI & Styling": [
            "Tailwind CSS",
            "Responsive Design",
            "Admin Dashboards",
            "Business Management Portals"
        ],

        "Databases & Data": [
            "SQL",
            "Data Extraction & Querying",
            "MongoDB",
            "Data Pipelines",
            "Data Handling"
        ],

        "Tools & DevOps": [
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "CI/CD Basics",
            "Deployment"
        ],

        "Software Engineering": [
            "Object-Oriented Programming",
            "Enterprise Applications",
            "Application Architecture",
            "Debugging",
            "Technical Documentation"
        ],

        "Development Practices": [
            "Agile / Scrum",
            "SDLC",
            "Version Control",
            "API Integration",
            "Problem Solving",
            "Team Collaboration"
        ]
    };

    return (
        <section
            id="skills"
            className="py-20 bg-dark text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                        My Technical Expertise
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Skills
                    </h2>

                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        Technologies and tools I work with to build
                        enterprise applications, integrate AI services,
                        manage data, and develop modern web solutions.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skills).map(
                        ([category, items], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: (index % 3) * 0.1
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2
                                }}
                                className="bg-card p-6 md:p-8 rounded-2xl
                                border border-gray-800
                                hover:border-primary/50
                                hover:-translate-y-1
                                transition-all duration-300"
                            >
                                <h3 className="text-lg font-bold mb-5 text-primary">
                                    {category}
                                </h3>

                                <div className="flex flex-wrap gap-2.5">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-dark border border-gray-700
                                            hover:border-secondary
                                            hover:text-white
                                            text-gray-300 px-3 py-2
                                            rounded-lg text-sm font-medium
                                            transition-colors duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    )}
                </div>

                {/* Professional Focus */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-400 text-sm">
                        Professional focus:{" "}
                        <span className="text-primary font-semibold">
                            AI Integration, LLM APIs, Backend Data Flow,
                            and Enterprise Software Development
                        </span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;