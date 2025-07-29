
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Download, Eye, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const DataTable = ({ dateRange }) => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('fecha');
  const [sortDirection, setSortDirection] = useState('desc');

  const sampleData = [
    {
      id: 1,
      fecha: '2024-01-15',
      cliente: 'Empresa ABC',
      producto: 'Software Premium',
      ingresos: 15420,
      estado: 'Completado',
      region: 'Norte'
    },
    {
      id: 2,
      fecha: '2024-01-14',
      cliente: 'Tech Solutions',
      producto: 'Consultoría',
      ingresos: 8750,
      estado: 'Pendiente',
      region: 'Sur'
    },
    {
      id: 3,
      fecha: '2024-01-13',
      cliente: 'Global Corp',
      producto: 'Licencia Anual',
      ingresos: 25600,
      estado: 'Completado',
      region: 'Centro'
    },
    {
      id: 4,
      fecha: '2024-01-12',
      cliente: 'StartUp XYZ',
      producto: 'Plan Básico',
      ingresos: 2400,
      estado: 'Cancelado',
      region: 'Este'
    },
    {
      id: 5,
      fecha: '2024-01-11',
      cliente: 'Mega Industries',
      producto: 'Enterprise',
      ingresos: 45000,
      estado: 'Completado',
      region: 'Oeste'
    },
  ];

  const handleAction = (action, item) => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  const getStatusColor = (estado) => {
    switch (estado) {
      case 'Completado':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Pendiente':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Cancelado':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const filteredData = sampleData.filter(item =>
    item.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.producto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header de la tabla */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold gradient-text">Reportes Detallados</h2>
            <p className="text-slate-400 mt-1">Análisis completo de transacciones y datos</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              />
            </div>
            
            <Button
              onClick={() => handleAction('filter')}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtrar
            </Button>
            
            <Button
              onClick={() => handleAction('export')}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-slate-300 font-medium">Fecha</th>
                <th className="text-left py-4 px-4 text-slate-300 font-medium">Cliente</th>
                <th className="text-left py-4 px-4 text-slate-300 font-medium">Producto</th>
                <th className="text-left py-4 px-4 text-slate-300 font-medium">Ingresos</th>
                <th className="text-left py-4 px-4 text-slate-300 font-medium">Estado</th>
                <th className="text-left py-4 px-4 text-slate-300 font-medium">Región</th>
                <th className="text-left py-4 px-4 text-slate-300 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4 text-slate-300">{item.fecha}</td>
                  <td className="py-4 px-4">
                    <div className="font-medium text-white">{item.cliente}</div>
                  </td>
                  <td className="py-4 px-4 text-slate-300">{item.producto}</td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-green-400">
                      ${item.ingresos.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.estado)}`}>
                      {item.estado}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-300">{item.region}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={() => handleAction('view', item)}
                        variant="ghost"
                        size="sm"
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleAction('edit', item)}
                        variant="ghost"
                        size="sm"
                        className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleAction('delete', item)}
                        variant="ghost"
                        size="sm"
                        className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
          <div className="text-sm text-slate-400">
            Mostrando {filteredData.length} de {sampleData.length} registros
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => handleAction('prev')}
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => handleAction('next')}
            >
              Siguiente
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DataTable;
