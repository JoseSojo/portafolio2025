import { motion } from 'framer-motion';
import React from 'react';
import { Target, List, Clock, DollarSign, BarChart3, Palette, Settings, FileText } from 'lucide-react';

const guidelines = [
  {
    icon: Target,
    title: "Objetivos del Proyecto",
    emoji: "🎯",
    questions: [
      "¿Cuál es el propósito principal del software?",
      "¿Qué problema busca resolver?",
      "¿Cuál es el público objetivo (usuarios finales)?"
    ],
    example: "Crear una plataforma para agendar consultas médicas en línea para clínicas pequeñas."
  },
  {
    icon: List,
    title: "Características y Funcionalidades",
    emoji: "📋",
    questions: [
      "Lista de funciones esperadas (login, panel de administración, pagos, notificaciones, etc).",
      "¿El sistema será web, móvil, o ambos?",
      "¿Se requiere integración con otros sistemas o servicios externos?"
    ],
    example: "Panel para pacientes, calendario médico, pagos por Stripe, envío de recordatorios por WhatsApp."
  },
  {
    icon: Clock,
    title: "Tiempo Estimado o Plazo Deseado",
    emoji: "⏱️",
    questions: [
      "¿Tienes una fecha límite para lanzar el proyecto?",
      "¿Necesitas una entrega por fases?"
    ],
    example: "Primera versión en 6 semanas, versión completa en 3 meses."
  },
  {
    icon: DollarSign,
    title: "Presupuesto Disponible",
    emoji: "💰",
    questions: [
      "¿Cuál es tu presupuesto estimado o rango disponible?",
      "¿Estás abierto a ajustar el alcance según el presupuesto?"
    ],
    example: "Aclarar el presupuesto permite ofrecer soluciones más realistas y eficientes."
  },
  {
    icon: BarChart3,
    title: "Nivel de Complejidad y Escalabilidad",
    emoji: "🧩",
    questions: [
      "¿Se espera que el sistema escale con el tiempo?",
      "¿Cuántos usuarios esperas manejar en el corto y largo plazo?"
    ],
    example: "Esto ayuda a definir bien la arquitectura y tecnologías adecuadas."
  },
  {
    icon: Palette,
    title: "Requisitos de Diseño",
    emoji: "🎨",
    questions: [
      "¿Tienes un diseño ya hecho (figma, wireframes)?",
      "¿Necesitas que se proponga una identidad visual o branding?"
    ],
    example: ""
  },
  {
    icon: Settings,
    title: "Mantenimiento y Soporte",
    emoji: "🛠️",
    questions: [
      "¿Necesitas soporte posterior al desarrollo?",
      "¿Requieres capacitación para el uso del sistema?"
    ],
    example: ""
  },
  {
    icon: FileText,
    title: "Archivos o Documentos de Referencia",
    emoji: "📎",
    questions: [
      "Adjunta cualquier documento, diseño, esquema o ejemplo que ayude a entender mejor el proyecto."
    ],
    example: ""
  }
];

export const GuidelinesSection: React.FC = () => {

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
      <div className="mt-20"></div>
      <div className="text-center mb-20">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          variants={itemVariants}
        >
          Guía para Solicitar <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> tu Cotización</span>
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          variants={itemVariants}
        >
          Para ofrecerte una propuesta adecuada y ajustada a tus necesidades, es importante que nos proporciones la siguiente información.
        </motion.p>
      </div>
      <section id="guidelines" className="py-20 bg-base-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guidelines.map((guideline, index) => {
              const IconComponent = guideline.icon;
              return (
                <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 text-white/70 rounded">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold dark:text-white text-black mb-2 flex items-center gap-2">
                          <span className="text-2xl">{guideline.emoji}</span>
                          {guideline.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {guideline.questions.map((question, qIndex) => (
                        <div key={qIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          </div>
                          <p className="dark:text-white/80 text-black leading-relaxed">{question}</p>
                        </div>
                      ))}

                      {guideline.example && (
                        <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-950 rounded-lg border-l-4 border-amber-500">
                          <p className="text-sm font-medium text-amber-500 mb-1">Ejemplo:</p>
                          <p className="text-sm text-black/70 dark:text-white/70 italic">"{guideline.example}"</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};