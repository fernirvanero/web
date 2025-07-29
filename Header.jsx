
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, Filter, Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = ({ dateRange, setDateRange }) => {
  const { toast } = useToast();

  const dateRanges = [
    { value: '7d', label: 'Últimos 7 días' },
    { value: '30d', label: 'Últimos 30 días' },
    { value: '90d', label: 'Últimos 3 meses' },
    { value: '1y', label: 'Último año' },
  ];

  const handleExport = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  const handleFilter = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect border-b border-white/10 p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold gradient-text">Dashboard Empresarial</h1>
          <p className="text-slate-400 mt-1">Análisis de datos en tiempo real</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar datos..."
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            />
          </div>

          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          >
            {dateRanges.map((range) => (
              <option key={range.value} value={range.value} className="bg-slate-800">
                {range.label}
              </option>
            ))}
          </select>

          <Button
            onClick={handleFilter}
            variant="outline"
            size="sm"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>

          <Button
            onClick={handleExport}
            variant="outline"
            size="sm"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="border-white/20 text-white hover:bg-white/10 relative"
            onClick={() => toast({
              title: "🚧 Esta función no está implementada aún",
              description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
            })}
          >
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
