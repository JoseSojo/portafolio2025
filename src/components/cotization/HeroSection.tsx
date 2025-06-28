import { motion } from 'framer-motion';
import React from 'react';
import { Zap, Shield, Code, FileArchive } from 'lucide-react';

export const HeroSection: React.FC = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.6,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const services = [
        {
            icon: Zap,
            title: 'Respuesta Rápida',
            description: 'Cotización en 24-72 horas.',
            color: 'text-orange-600 dark:text-orange-400',
            bgColor: 'bg-orange-50 dark:bg-orange-900/20',
            gradient: 'from-orange-500 to-cyan-500'
        },
        {
            icon: Shield,
            title: 'Proceso Transparente',
            description: 'Sin costos ocultos.',
            color: 'text-purple-600 dark:text-purple-400',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: FileArchive,
            title: 'Propuesta Detallada',
            description: 'Cronograma y costos claros.',
            color: 'text-green-600 dark:text-green-400',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
            gradient: 'from-green-500 to-emerald-500'
        }
    ];

    return (
        <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300 overflow-hidden">
            <motion.div
                className="relative max-w-7xl mx-auto"
                initial="hidden"
                animate={'visible'}
            >
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 border border-blue-200 dark:border-blue-800"
                    >
                        <Code className="w-4 h-4 mr-2" />
                        <span>Cotizaciones de Proyectos de <strong>software</strong></span>
                    </motion.div>

                    {/* Main Heading with Hourglass */}
                    <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-6xl mx-auto mb-8">
                        <motion.div className="lg:flex-1">
                            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                                Cotizar <strong>proyecto</strong> de software
                            </h1>
                        </motion.div>
                    </div>

                    {/* Subheading */}
                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
                    >
                        Obtén una propuesta detallada y personalizada para tu proyecto de software.
                        Nuestro proceso transparente te garantiza el mejor valor para tu inversión.
                    </motion.p>

                </div>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
            >
                {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                        <motion.div
                            key={service.title}
                            className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className={`inline-flex items-center justify-center w-14 h-14 ${service.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className={`w-7 h-7 ${service.color}`} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};