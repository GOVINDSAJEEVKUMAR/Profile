import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-dark to-dark opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-medium text-lg mb-4"
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Govind S Kumar
                        </span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl md:text-4xl text-gray-300 font-semibold mb-8"
                    >
                        Software Developer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-10 text-lg leading-relaxed"
                    >
                        I build exceptional digital experiences that are fast, accessible, lovely, and responsive.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex gap-4 justify-center md:justify-start"
                    >
                        <Link to="projects" smooth={true} duration={500} className="bg-primary hover:bg-indigo-600 text-white px-8 py-3 rounded-full font-medium transition-all cursor-pointer shadow-lg shadow-indigo-500/30">
                            View Work
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className="border border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-full font-medium transition-all cursor-pointer">
                            Contact Me
                        </Link>
                    </motion.div>
                </div>

                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
                        <img
                            src="/img.jpg"
                            alt="Govind Profile"
                            className="relative w-full h-full object-cover rounded-full border-4 border-dark ring-2 ring-primary/50 shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
                <Link to="about" smooth={true} duration={500} className="cursor-pointer">
                    <ArrowDown size={32} />
                </Link>
            </div>
        </section>
    );
};

export default Hero;
