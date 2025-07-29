
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  FileText, 
  Settings, 
  Database,
  PieChart,
  Activity
} from 'lucide-react';

const Sidebar = ({ activeView, setActiveView }) => {
  const menuItems = [
    { id: 'overview', label: 'Resumen', icon: BarChart3 },
    { id: 'analytics', label: 'Análisis', icon: TrendingUp },
    { id: 'reports', label: 'Reportes', icon: FileText },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ];

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 sidebar-gradient border-r border-white/10 p-6"
    >
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-3"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Database className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">DataVision</h1>
            <p className="text-xs text-slate-400">Pro Analytics</p>
          </div>
        </motion.div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-300' 
                  : 'hover:bg-white/5 text-slate-300 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          );
        })}
      </nav>

      <div className="mt-8 p-4 glass-effect rounded-xl">
        <div className="flex items-center space-x-3 mb-3">
          <Activity className="w-5 h-5 text-green-400" />
          <span className="text-sm font-medium">Estado del Sistema</span>
        </div>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-400">Conexión</span>
            <span className="text-green-400">Activa</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Última actualización</span>
            <span className="text-slate-300">Hace 2 min</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
