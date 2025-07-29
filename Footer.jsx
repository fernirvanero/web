import React from 'react';
import { Database, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Facebook, href: '#' },
  ];

  const footerSections = [
    {
      title: 'Producto',
      links: [
        { name: 'Soluciones', href: '#features' },
        { name: 'Precios', href: '#' },
        { name: 'Demo', href: '#' },
        { name: 'Actualizaciones', href: '#' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { name: 'Sobre Nosotros', href: '#' },
        { name: 'Carreras', href: '#' },
        { name: 'Prensa', href: '#' },
        { name: 'Contacto', href: '#' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Casos de Éxito', href: '#' },
        { name: 'Documentación', href: '#' },
        { name: 'Soporte', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Términos y Condiciones', href: '#' },
        { name: 'Política de Privacidad', href: '#' },
        { name: 'Cookies', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Database className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold gradient-text">Binamics</span>
            </Link>
            <p className="text-slate-400 text-sm">Potenciando negocios con datos.</p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-slate-400 hover:text-white">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="font-semibold text-white mb-4">{section.title}</p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Binamics. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;