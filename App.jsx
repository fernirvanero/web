import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import LandingPage from '@/pages/LandingPage';
import Dashboard from '@/components/Dashboard';

function App() {
  return (
    <>
      <Helmet>
        <title>Binamics - Potenciamos tu Negocio con Datos</title>
        <meta name="description" content="Transforma tus datos en decisiones inteligentes. Descubre insights, optimiza procesos y acelera el crecimiento con nuestra plataforma de Business Intelligence." />
      </Helmet>
      <Router>
        <div className="min-h-screen bg-slate-900 text-white">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </>
  );
}

export default App;