import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-card rounded-2xl p-8 md:p-12 border border-gray-800 shadow-xl overflow-hidden">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Let's Talk
                        </h3>
                        <p className="text-gray-400 text-lg">
                            I'm open to new opportunities and collaborations. Feel free to reach out to me via phone, whatsapp or email.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="font-medium">+91 9562238623</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">WhatsApp</p>
                                    <p className="font-medium">+91 9562238623</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href='mailto:govindsajeev2001@gmail.com'>
                                        <p className="font-medium">govindsajeev2001@gmail.com</p>
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                <div className="w-12 h-12 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">Ernakulam,Kerala,India (Ready to relocate)</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default Contact;
