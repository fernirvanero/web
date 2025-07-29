
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  ShoppingCart, 
  Target,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const MetricsGrid = ({ dateRange }) => {
  const metrics = [
    {
      title: 'Ingresos Totales',
      value: '$124,580',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      description: 'vs mes anterior'
    },
    {
      title: 'Usuarios Activos',
      value: '8,429',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-cyan-600',
      description: 'usuarios únicos'
    },
    {
      title: 'Conversiones',
      value: '1,247',
      change: '-2.1%',
      trend: 'down',
      icon: Target,
      color: 'from-purple-500 to-pink-600',
      description: 'tasa del 14.8%'
    },
    {
      title: 'Ventas',
      value: '2,891',
      change: '+15.3%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-600',
      description: 'pedidos completados'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === 'up' ? ArrowUpRight : ArrowDownRight;
        
        return (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="metric-card group hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                metric.trend === 'up' 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-red-500/20 text-red-400'
              }`}>
                <TrendIcon className="w-3 h-3" />
                <span>{metric.change}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-slate-400">{metric.title}</h3>
              <p className="text-3xl font-bold text-white">{metric.value}</p>
              <p className="text-xs text-slate-500">{metric.description}</p>
            </div>

            <div className="mt-4 h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.random() * 100}%` }}
                transition={{ delay: index * 0.2, duration: 1 }}
                className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MetricsGrid;
