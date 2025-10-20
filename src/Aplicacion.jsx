import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginCard from './componentes/login/Login.jsx';
import LanguageSelector from './componentes/botones/LanguageSelector.jsx';
import ThemeToggler from './componentes/botones/ThemeToggler.jsx';
import Dashboard from './componentes/dashboard/Dashboard.jsx';
import Register from './componentes/register/Register.jsx';
import SidebarMenu from './componentes/botones/SlidebarMenu.jsx';
import './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class Aplicacion extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <SidebarMenu />
            <header className="app-header">
              <LanguageSelector />
              <ThemeToggler />
            </header>
            
            <div className="login-wrapper">
              <Routes>
                  <Route path="/" element={<LoginCard />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/Register" element={<Register />} />
              </Routes>
            </div>
        </div>
      </Router>
    );    
  }
}
 
export default Aplicacion;

const root = createRoot(document.getElementById('root'));
root.render(<Aplicacion />);