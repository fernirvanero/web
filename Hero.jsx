import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "🚀 ¡Solicitud de Demo Próximamente!",
      description: "Esta función estará disponible muy pronto. ¡Gracias por tu interés!",
    });
  };

  const handleWatchDemo = () => {
    toast({
      title: "🚧 ¡Video no disponible!",
      description: "El video de demostración aún no está listo, ¡pero llegará pronto!",
    });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 hero-bg">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="gradient-text">Transforma Datos</span>
            <br />
            en Decisiones Inteligentes
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
            Nuestra plataforma de Business Intelligence te brinda las herramientas para descubrir insights, optimizar procesos y acelerar el crecimiento de tu negocio.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button onClick={handleDemoRequest} size="lg" className="cta-gradient font-bold text-lg px-8 py-6">
              Solicitar una Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button onClick={handleWatchDemo} size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-600 hover:bg-slate-800 hover:text-white">
              <PlayCircle className="mr-2 w-5 h-5" /> Ver Demo
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default Hero;