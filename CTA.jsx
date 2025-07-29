import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "🚀 ¡Solicitud de Demo Próximamente!",
      description: "Esta función estará disponible muy pronto. ¡Gracias por tu interés!",
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="cta-gradient rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">¿Listo para Desbloquear el Poder de tus Datos?</h2>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto mb-8">
            Agenda una demostración personalizada y descubre cómo Binamics puede transformar tu negocio. Sin compromisos.
          </p>
          <Button onClick={handleDemoRequest} size="lg" className="bg-white text-blue-600 hover:bg-slate-200 font-bold text-lg px-8 py-6">
            Hablar con un Experto <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;