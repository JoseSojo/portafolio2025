import { motion } from 'framer-motion';
import React from 'react';
import { Mail, CheckCircle2, Calendar, CreditCard, FileCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
    const deliverables = [
        { icon: CheckCircle2, text: "Alcance del proyecto", color: "text-blue-500" },
        { icon: Calendar, text: "Cronograma de trabajo por fases", color: "text-emerald-500" },
        { icon: CreditCard, text: "Costos estimados", color: "text-cyan-500" },
        { icon: FileCheck, text: "Condiciones de pago", color: "text-orange-500" },
        { icon: FileCheck, text: "Términos y condiciones", color: "text-purple-500" }
    ];

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

    return (
        <>
            <div className="px-10">
                <motion.div
                    className="mt-20 text-center lg:mx-10"
                    variants={itemVariants}
                >
                    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-orange-900/20 rounded-3xl p-12 border border-blue-100 dark:border-blue-800/50 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-orange-500/5"></div>

                        <div>
                            <Mail className="h-12 w-12 text-blue-600 dark:text-blue-400 m-auto mb-7" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                📬 Una vez recopilada esta información:
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                                Puedes enviarla a través del formulario de contacto o al correo indicado. En un plazo de 24 a 72 horas recibirás una cotización detallada con:
                            </p>
                        </div>

                        <div className="m-auto lg:max-w-xl flex flex-wrap gap-4 justify-center items-center">
                            {deliverables.map((item, index) => {
                                const IconComponent = item.icon;
                                const clsIco = `h-5 w-5 ${item.color} flex-shrink-0`;
                                return (
                                    <div key={index} className="flex items-center justify-center space-x-3 p-4 dark:bg-gray-950 rounded-lg shadow-sm">
                                        <IconComponent className={clsIco} />
                                        <span className="text-sm font-medium text-white">{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};