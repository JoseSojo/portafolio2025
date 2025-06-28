import { useState } from 'react';
import { Copy, Check, Code, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from '@tanstack/react-router';

const CodeDemo = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
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

  const projects = [
    {
      name: 'Web',
      title: 'Aplicación Web Moderna',
      description: 'React + TypeScript para máximo rendimiento',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      code: `import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function ProductCatalog() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}`
    },
    {
      name: 'Backend',
      title: 'API Escalable',
      description: 'Node.js + Express + PostgreSQL en la nube',
      icon: Cloud,
      gradient: 'from-green-500 to-emerald-500',
      code: `// API REST con Node.js + Express + TypeScript
import express from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticate, authorize } from './middleware'

const app = express()
const prisma = new PrismaClient()

// Endpoint para crear producto
app.post('/api/products', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { name, price, description, categoryId } = req.body
    
    const product = await prisma.product.create({
      data: {
        name,
        price,
        description,
        categoryId,
        createdBy: req.user.id
      },
      include: {
        category: true,
        reviews: true
      }
    })

    res.status(201).json({ success: true, data: product })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})`
    }
  ];

  const copyToClipboard = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl"></div>
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
            Código que <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">funciona</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Ejemplos reales de nuestros proyectos. Código limpio, escalable y mantenible.
          </motion.p>
        </div>

        {/* Code Examples */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.name}
                className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-2xl transition-all duration-500 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="px-8 py-6 bg-gray-50/80 dark:bg-gray-800/80 border-b border-gray-200/50 dark:border-gray-600/50 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          @JoseSojo {project.name}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                        {project.description}
                      </p>
                    </div>
                    <motion.button
                      onClick={() => copyToClipboard(project.code, index)}
                      className="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                      title="Copiar código"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {copiedIndex === index ? (
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* Code */}
                <div className="p-8 bg-gray-900/95 dark:bg-gray-800/95 backdrop-blur-sm">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-gray-300 font-mono leading-relaxed">
                      {project.code}
                    </code>
                  </pre>
                </div>
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-orange-500/5"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                ¿Te gusta lo que ves?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Este es solo una muestra de lo que podemos crear juntos. Cada proyecto es único y personalizado.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to='/cotizar'
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300"
                  // whileHover={{ scale: 1.05 }}
                  // whileTap={{ scale: 0.95 }}
                >
                  ve a cotizar
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CodeDemo;