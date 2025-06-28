import { Github, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HourglassIcon from './HourglassIcon';

const Footer = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const footerSections = [
    {
      title: 'Servicios',
      links: [
        { name: 'Desarrollo Web', href: '#web' },
        { name: 'Apps Móviles', href: '#mobile' },
        { name: 'Backend & APIs', href: '#backend' },
        { name: 'Consultoría', href: '#consulting' },
      ],
    },
    {
      title: 'Tecnologías',
      links: [
        { name: 'React, Tailwind', href: '#react' },
        { name: 'React Native', href: '#react-native' },
        { name: 'NestJs, Python, Postgres Docker', href: '#backend-tech' },
        { name: 'VPS, AWS, DigitalOcean', href: '#cloud' },
        { name: 'Grafana, Prometheus, InfluxDB', href: '#monitoring' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nosotros', href: '#about' },
        // { name: 'Portfolio', href: '#portfolio' },
        { name: 'Blog', href: '#blog' },
        { name: 'Carreras', href: '#careers' },
      ],
    },
  ];

  const contactInfo = [
    { icon: Mail, text: 'Correo: josesojo2828@gmail.com', href: 'mailto:josesojo2828@gmail.com' },
    { icon: MessageCircle, text: 'Whastapp: +58 412 860 6734', href: 'https://api.whatsapp.com/send/?phone=584128606734' },
    { icon: MapPin, text: 'San Juan de los Morros, Venezuela', href: '#' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/JoseSojo/' },
    { name: 'Correo: josesojo2828@gmail.com', icon: Mail, href: 'mailto:josesojo2828@gmail.com' },
    { name: 'Telegram: @josesojo18', icon: Send, href: 'https://web.telegram.org/k/#@josesojo18' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3 mb-6">
              <HourglassIcon size={40} />
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Jose Sojo
              </span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Desarrollador de ideas en soluciones digitales innovadoras. 
              Somos tu socio tecnológico para el crecimiento digital.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    whileHover={{ x: 5 }}
                  >
                    <IconComponent className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    <span>{contact.text}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div 
              key={section.title} 
              className="lg:col-span-1"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-white mb-6 text-lg">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: (sectionIndex * 0.1) + (linkIndex * 0.05) 
                    }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 mb-12 border border-blue-800/30"
          variants={itemVariants}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para tu próximo proyecto?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contáctame para una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar
              </motion.button>
              {/* <motion.button 
                className="text-gray-300 px-8 py-3 rounded-lg font-semibold border border-gray-600 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Llamada
              </motion.button> */}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            @JoseSojo. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            {/* <a href="#terms" className="text-gray-400 hover:text-gray-300 text-sm transition-colors duration-200">
              Términos
            </a>
            <a href="#privacy" className="text-gray-400 hover:text-gray-300 text-sm transition-colors duration-200">
              Privacidad
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-gray-300 text-sm transition-colors duration-200">
              Cookies
            </a> */}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;