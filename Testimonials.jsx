import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Binamics revolucionó nuestra forma de ver los datos. Ahora tomamos decisiones más rápidas y seguras. El impacto en nuestras ventas fue casi inmediato.",
    name: 'Laura Gómez',
    title: 'CEO, Tech Innovators',
    avatar: 'mujer sonriendo en una oficina moderna',
  },
  {
    quote: "La capacidad de integrar todas nuestras fuentes de datos en un solo lugar nos ahorró cientos de horas. El equipo de soporte es excepcional.",
    name: 'Carlos Rodríguez',
    title: 'Director de Operaciones, Global Logistics',
    avatar: 'hombre de negocios con traje sonriendo',
  },
  {
    quote: "Pasamos de reportes manuales en Excel a dashboards dinámicos y automáticos. Es un antes y un después para nuestro departamento de marketing.",
    name: 'Ana Fernández',
    title: 'Gerente de Marketing, Creative Solutions',
    avatar: 'mujer creativa en un estudio de diseño',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text">Nuestros Clientes nos Avalan</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Descubre por qué empresas líderes confían en nosotros para potenciar su inteligencia de negocios.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <p className="text-slate-300 flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center">
                <img  class="w-12 h-12 rounded-full object-cover" alt={testimonial.name} src="https://images.unsplash.com/photo-1649399045831-40bfde3ef21d" />
                <div className="ml-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;