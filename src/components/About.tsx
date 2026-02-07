import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-gray-800"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-2/3">
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                I am a passionate Software Developer with a strong focus on creating scalable and efficient web applications. With expertise in React and modern CSS frameworks like Tailwind, I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                My journey involves continuous learning and applying new technologies to build real-world solutions. Whether it's backend logic or frontend aesthetics, I strive for excellence in every line of code I write.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="flex items-center gap-2 bg-white text-dark hover:bg-gray-200 px-6 py-3 rounded-lg font-medium transition-colors"
                                >
                                    <Download size={20} />
                                    Download CV
                                </a>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    className="flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-all cursor-pointer"
                                >
                                    <Mail size={20} />
                                    Contact Me
                                </Link>
                            </div>
                        </div>

                        {/* Optional decorative element or stats */}
                        <div className="w-full md:w-1/3 flex flex-col gap-6">
                            <div className="bg-dark/50 p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors">
                                <h3 className="text-4xl font-bold text-primary mb-2">4+</h3>
                                <p className="text-gray-400">Years of Experience</p>
                            </div>
                            <div className="bg-dark/50 p-6 rounded-xl border border-gray-800 hover:border-secondary/50 transition-colors">
                                <h3 className="text-4xl font-bold text-secondary mb-2">10+</h3>
                                <p className="text-gray-400">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
