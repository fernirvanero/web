
import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const ChartsSection = ({ dateRange, detailed = false }) => {
  const revenueData = [
    { name: 'Ene', ingresos: 4000, gastos: 2400, usuarios: 240 },
    { name: 'Feb', ingresos: 3000, gastos: 1398, usuarios: 221 },
    { name: 'Mar', ingresos: 2000, gastos: 9800, usuarios: 229 },
    { name: 'Abr', ingresos: 2780, gastos: 3908, usuarios: 200 },
    { name: 'May', ingresos: 1890, gastos: 4800, usuarios: 218 },
    { name: 'Jun', ingresos: 2390, gastos: 3800, usuarios: 250 },
    { name: 'Jul', ingresos: 3490, gastos: 4300, usuarios: 210 },
  ];

  const categoryData = [
    { name: 'Tecnología', value: 400, color: '#3B82F6' },
    { name: 'Marketing', value: 300, color: '#8B5CF6' },
    { name: 'Ventas', value: 300, color: '#10B981' },
    { name: 'Operaciones', value: 200, color: '#F59E0B' },
  ];

  const performanceData = [
    { name: 'Lun', conversiones: 65, visitas: 120 },
    { name: 'Mar', conversiones: 59, visitas: 110 },
    { name: 'Mié', conversiones: 80, visitas: 140 },
    { name: 'Jue', conversiones: 81, visitas: 160 },
    { name: 'Vie', conversiones: 56, visitas: 90 },
    { name: 'Sáb', conversiones: 55, visitas: 85 },
    { name: 'Dom', conversiones: 40, visitas: 70 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <p className="text-white font-medium">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Ingresos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="chart-container"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Ingresos vs Gastos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="ingresos"
                stroke="#3B82F6"
                fillOpacity={1}
                fill="url(#colorIngresos)"
              />
              <Area
                type="monotone"
                dataKey="gastos"
                stroke="#EF4444"
                fillOpacity={1}
                fill="url(#colorGastos)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Gráfico de Categorías */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="chart-container"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Distribución por Categoría</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {detailed && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gráfico de Rendimiento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="chart-container"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Rendimiento Semanal</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="conversiones" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="visitas" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Gráfico de Tendencias */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="chart-container"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Tendencia de Usuarios</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="usuarios"
                  stroke="#F59E0B"
                  strokeWidth={3}
                  dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#F59E0B', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ChartsSection;
