import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoRequest = () => {
    toast({
      title: "🚀 ¡Solicitud de Demo Próximamente!",
      description: "Esta función estará disponible muy pronto. ¡Gracias por tu interés!",
    });
  };

  const navLinks = [
    { name: 'Soluciones', href: '#features' },
    { name: 'Beneficios', href: '#benefits' },
    { name: 'Clientes', href: '#testimonials' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Database className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-bold gradient-text">Binamics</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/dashboard">
            <Button variant="ghost">Iniciar Sesión</Button>
          </Link>
          <Button onClick={handleDemoRequest} className="cta-gradient font-bold">
            Solicitar Demo
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900/95 pb-4"
        >
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
              <Button variant="ghost" className="w-full">Iniciar Sesión</Button>
            </Link>
            <Button onClick={() => { handleDemoRequest(); setIsMenuOpen(false); }} className="cta-gradient font-bold w-3/4">
              Solicitar Demo
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;