import { ArrowRight, Code, Server, BarChart2, Smartphone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HourglassIcon from './HourglassIcon';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const hourglassVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        className="relative max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 border border-blue-200 dark:border-blue-800"
            variants={itemVariants}
          >
            <Code className="w-4 h-4 mr-2" />
            <span>Desarrollador <strong>web</strong> com +1 año de experiencia</span>
          </motion.div>

          {/* Main Heading with Hourglass */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-6xl mx-auto mb-8">
            <motion.div className="lg:flex-1" variants={itemVariants}>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                Desarrollador <strong>web</strong> con 
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  experiencia en múltiples tecnologías
                </span>
              </h1>
            </motion.div>

            {/* 3D Hourglass */}
            <motion.div
              className="lg:flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0"
              variants={hourglassVariants}
            >
              <div className="relative">
                <HourglassIcon
                  size={140}
                  className="hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                />
                {/* Enhanced Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-orange-500/30 rounded-full blur-3xl scale-150 animate-pulse"></div>
                {/* Floating particles */}
                <motion.div
                  className="absolute -top-4 -right-4 w-3 h-3 bg-blue-400 rounded-full"
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-6 -left-2 w-2 h-2 bg-purple-400 rounded-full"
                  animate={{
                    y: [10, -10, 10],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                ></motion.div>
                <motion.div
                  className="absolute top-1/2 -right-8 w-2 h-2 bg-orange-400 rounded-full"
                  animate={{
                    x: [-5, 5, -5],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>

          {/* Subheading */}
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Con experiencia en aplicaciones web, móviles y software personalizado que impulsan el crecimiento de tu negocio. 
            Con proyectos realizados a modo de practicas y desarrollos de código abierto, y proyectos para privados.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
            variants={itemVariants}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar Proyecto
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
          >
            {[
              {
                icon: Code,
                title: 'Desarrollo Frontend',
                desc: 'desarrollo web moderno y escalable, adaptable a cualquier proyecto y disponible en todas las plataformas',
                gradient: 'from-blue-500 to-cyan-500',
                skils: [
                  'react','nextjs','typescript','tailwindcss',
                  'typescript', 'javascript', 'node.js', 'html', 
                  'css'
                ]
              },
              {
                icon: Server,
                title: 'Desarrollo Backend',
                desc: 'iOS y Android nativas',
                gradient: 'from-purple-500 to-pink-500',
                skils: [
                  'typescript', 'javascript', 'node.js', 'express',
                  'nestjs', 'python', 'fastapi', 'flask',
                  'postgresql', 'redis', 'aws', 'firebase', 'mongodb',
                  'docker',
                ]
              },
              {
                icon: Smartphone,
                title: 'Desarrollo Mobil',
                desc: 'Dessarrollo de aplicaciones multiplataforma',
                gradient: 'from-purple-500 to-pink-500',
                skils: [
                  'reactnative', 'expo', 'typescript', 'javascript'
                ]
              },
              {
                icon: BarChart2,
                title: 'Monitorización y Analítica',
                desc: 'Monitorizacion de recursos, servidores, aplicaciones, con alertas personalizadas', 
                gradient: 'from-orange-500 to-red-500',
                skils: [
                  'grafana', 'prometheus',
                  'influxdb', 'prometheus',
                ]
              }
            ].map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
                  <div className='flex flex-wrap justify-center items-center gap-3 mt-3'>
                    {service.skils.map((skill) => (
                      <div key={skill} className='bg-gray-200 dark:bg-gray-700 rounded-xl px-3 py-1 text-sm font-medium'>
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Code Demo Section */}
      <motion.div
        className="max-w-5xl mx-auto mt-24"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="relative">
          <div className="bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-800/50 dark:border-gray-700/50">
            <div className="flex items-center px-6 py-4 bg-gray-800/90 dark:bg-gray-700/90 border-b border-gray-700/50 dark:border-gray-600/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-gray-400 text-sm font-mono">index.tsx</div>
            </div>
            <div className="p-8 text-sm font-mono">
              <div className="text-gray-500 mb-2">// Quieres desarrollar u proyecto?</div>
              <div className="text-green-400 mb-4 flex items-center gap-3">$ contactar a: josesojo2828@gmail.com <Mail /></div>
              <div className="text-gray-500 mb-2">// Tecnologías</div>
              <div className="text-cyan-400 mb-2">import &#123; React, NextJS, ReactNative &#125; from 'me.frontend'</div>
              <div className="text-blue-400 mb-2">import &#123; Grafana, Prometheus, InfluxDB &#125; from 'me.monitoring'</div>
              <div className="text-purple-400 mb-2">import &#123; NodeJS, NestJs, Python, AWS, Docker, Bash &#125; from 'me.backend'</div>
              <div className="text-purple-400 mb-2">import &#123; PostgreSQL, Mysql, Redis &#125; from 'me.database'</div>
              <div className="text-gray-300 mb-2">
                <span className="text-purple-400">const</span> <span className="text-yellow-300">solution</span> = <span className="text-yellow-300">createApp</span>(&#123;
              </div>
              <div className="text-gray-300 mb-2 ml-4">
                frontend: <span className="text-green-300">'React + TypeScript'</span>,
              </div>
              <div className="text-gray-300 mb-2 ml-4">
                mobile: <span className="text-green-300">'React Native + Expo'</span>,
              </div>
              <div className="text-gray-300 mb-2 ml-4">
                backend: <span className="text-green-300">'NestJs + Node'</span>,
              </div>
              <div className="text-gray-300 mb-2 ml-4">
                database: <span className="text-green-300">'PostgreSQL + Redis'</span>
              </div>
              <div className="text-gray-300 mb-2 ml-4">
                deploy: <span className="text-green-300">'VPS + CI/CD'</span>
              </div>
              <div className="text-gray-300 mb-2 ml-4">
                monitoring: <span className="text-green-300">'Grafana + Prometheus'</span>
              </div>
              <div className="text-gray-300 mb-4">&#125;)</div>
              <div className="text-green-400">✨ Tu idea, se puede desarrollar, éxito garantizado.</div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 rounded-2xl blur-xl"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;