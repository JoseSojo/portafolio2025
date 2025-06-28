import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Shield, 
  Users,
  Palette,
  Database,
  BarChart2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from '@tanstack/react-router';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      icon: Code2,
      title: 'Desarrollo Web Frontend',
      description: 'Aplicaciones web modernas con React, y las últimas tecnologías. Landing pages, e-commerce, CRM, etc.',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Apps Móviles',
      description: 'Desarrollo multiplataforma para iOS y Android, React Native.',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Infraestructura escalable en VPS (aws, digitalocean, linode, etc), PaaS (heroku, aws, azure, google cloud, etc) y IaaS (aws, azure, google cloud, etc).',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Backend & APIs',
      description: 'APIs robustas con Node.js, Python, bases de datos. Sistemas Backend, APIs para apps móviles, CRUD, etc.',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Diseño centrado en el usuario con Figma y herramientas modernas. Con diseño de interfaces, e-commerce, CRM, etc.',
      color: 'text-pink-600 dark:text-pink-400',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Implementación de mejores prácticas de seguridad y compliance. Seguridad en aplicaciones, sistemas, y VPS.',
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: BarChart2,
      title: 'Monitoreo y Alertas',
      description: 'Monitoreo de recursos, servidores, aplicaciones, con alertas personalizadas. Monitoreo en tiempo real, con grafana y prometheus.',
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Consultoría',
      description: 'Asesoramiento técnico y estratégico para tu transformación digital.',
      color: 'text-teal-600 dark:text-teal-400',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        ref={ref}
        className="relative max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
            variants={itemVariants}
          >
            Que puedo hacer <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> por ti</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Desarrollo, despliegue, soporte y mantenimiento de aplicaciones web, móviles y backend.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-orange-900/20 rounded-3xl p-12 border border-blue-100 dark:border-blue-800/50 backdrop-blur-sm relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-orange-500/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                ¿Listo para transformar tu idea?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Trabajemos juntos para crear la solución perfecta para tu negocio. 
                Desde el concepto hasta el lanzamiento.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/cotizar"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300"
                  // whileHover={{ scale: 1.05 }}
                  // whileTap={{ scale: 0.95 }}
                >
                  Solicitar Cotización
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;