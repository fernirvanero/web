
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import MetricsGrid from '@/components/MetricsGrid';
import ChartsSection from '@/components/ChartsSection';
import DataTable from '@/components/DataTable';
import Header from '@/components/Header';

const Dashboard = () => {
  const [activeView, setActiveView] = useState('overview');
  const [dateRange, setDateRange] = useState('7d');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <h2 className="text-2xl font-bold gradient-text">Cargando Dashboard...</h2>
          <p className="text-slate-400">Preparando tus datos empresariales</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <div className="flex-1 flex flex-col">
        <Header dateRange={dateRange} setDateRange={setDateRange} />
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {activeView === 'overview' && (
              <>
                <MetricsGrid dateRange={dateRange} />
                <ChartsSection dateRange={dateRange} />
              </>
            )}
            
            {activeView === 'analytics' && (
              <ChartsSection dateRange={dateRange} detailed={true} />
            )}
            
            {activeView === 'reports' && (
              <DataTable dateRange={dateRange} />
            )}
            
            {activeView === 'settings' && (
              <div className="glass-effect rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Configuración</h2>
                <p className="text-slate-400">Panel de configuración del sistema</p>
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
