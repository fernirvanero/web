import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Zap, Share2, LayoutDashboard, BrainCircuit, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Dashboards Interactivos',
    description: 'Visualiza tus KPIs más importantes en tiempo real con dashboards personalizables y fáciles de usar.',
  },
  {
    icon: BrainCircuit,
    title: 'Análisis Predictivo',
    description: 'Anticípate al futuro. Utiliza nuestros modelos de IA para predecir tendencias y tomar decisiones proactivas.',
  },
  {
    icon: Zap,
    title: 'Integración de Datos Simplificada',
    description: 'Conecta todas tus fuentes de datos (CRM, ERP, redes sociales, etc.) en una única plataforma unificada.',
  },
  {
    icon: Share2,
    title: 'Colaboración y Reportes',
    description: 'Comparte insights con tu equipo, programa reportes automáticos y fomenta una cultura data-driven.',
  },
  {
    icon: BarChart2,
    title: 'Visualizaciones Avanzadas',
    description: 'Desde gráficos de barras hasta mapas de calor, crea visualizaciones impactantes para entender tus datos.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad y Gobernanza',
    description: 'Tus datos están seguros. Gestiona permisos, roles y accesos con nuestros robustos controles de seguridad.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text">Una Solución Completa para tu Empresa</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Todo lo que necesitas para convertir tus datos en tu activo más valioso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;