import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'María González',
      role: 'CEO',
      company: 'TechStart México',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'DevStack transformó completamente nuestra visión en una aplicación móvil increíble. El equipo es excepcional y los resultados superaron nuestras expectativas.',
      rating: 5,
      project: 'App Móvil E-commerce'
    },
    {
      name: 'Carlos Mendoza',
      role: 'CTO',
      company: 'FinanceFlow',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'La arquitectura que desarrollaron para nuestra plataforma fintech es robusta y escalable. Código limpio y documentación impecable.',
      rating: 5,
      project: 'Plataforma Web Fintech'
    },
    {
      name: 'Ana Rodríguez',
      role: 'Fundadora',
      company: 'EduTech Solutions',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Desde el primer día, el equipo de DevStack entendió nuestra visión. La plataforma educativa que crearon ha revolucionado cómo enseñamos.',
      rating: 5,
      project: 'Plataforma Educativa'
    },
    {
      name: 'Roberto Silva',
      role: 'Director de Tecnología',
      company: 'RetailPro',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'La migración de nuestro sistema legacy fue perfecta. Cero downtime y una mejora del 300% en performance. Altamente recomendados.',
      rating: 5,
      project: 'Migración de Sistema'
    },
    {
      name: 'Laura Jiménez',
      role: 'Product Manager',
      company: 'HealthTech',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'El dashboard que desarrollaron para nuestros médicos es intuitivo y potente. La experiencia de usuario es excepcional.',
      rating: 5,
      project: 'Dashboard Médico'
    },
    {
      name: 'Diego Herrera',
      role: 'CEO',
      company: 'LogisTech',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'La app de logística que crearon optimizó nuestras operaciones en un 40%. ROI increíble en menos de 6 meses.',
      rating: 5,
      project: 'App de Logística'
    }
  ];

  const companies = [
    'Microsoft', 'Google', 'Amazon', 'Meta', 'Netflix', 'Spotify', 'Uber', 'Airbnb'
  ];

  const stats = [
    { number: '150+', label: 'Proyectos Completados' },
    { number: '98%', label: 'Satisfacción del Cliente' },
    { number: '50+', label: 'Empresas Confiaron en Nosotros' },
    { number: '24/7', label: 'Soporte Técnico' }
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
            Clientes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">satisfechos</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Desde startups hasta empresas Fortune 500, nuestros clientes confían en nosotros para sus proyectos más importantes.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Project Tag */}
              <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {testimonial.project}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-blue-100 dark:ring-blue-800"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Companies Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wide font-medium mb-12">
            Tecnologías que utilizan empresas líderes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center text-gray-400 dark:text-gray-500 font-semibold text-lg hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;