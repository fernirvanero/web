import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Target, Users } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Decisiones más Acertadas',
    description: 'Basa tus estrategias en datos concretos, no en intuiciones. Reduce riesgos y aumenta la probabilidad de éxito.',
  },
  {
    icon: Clock,
    title: 'Ahorro de Tiempo y Recursos',
    description: 'Automatiza la recolección y análisis de datos, liberando a tu equipo para que se enfoque en tareas estratégicas.',
  },
  {
    icon: TrendingUp,
    title: 'Identifica Oportunidades',
    description: 'Descubre patrones y tendencias ocultas en tus datos para encontrar nuevas vías de crecimiento y optimización.',
  },
  {
    icon: Users,
    title: 'Mejora la Colaboración',
    description: 'Centraliza la información y proporciona una única fuente de verdad para todos los departamentos de tu empresa.',
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-slate-900/70">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Impulsa tu Crecimiento con Inteligencia de Negocios</h2>
            <p className="text-lg text-slate-300 mb-8">
              Implementar una solución de Business Intelligence no es un gasto, es una inversión estratégica que genera un retorno medible en todas las áreas de tu negocio.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{benefit.title}</h4>
                    <p className="text-slate-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative h-96"
          >
            <img  class="w-full h-full object-cover rounded-2xl shadow-2xl" alt="Gráficos de datos y análisis en un dashboard digital" src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;