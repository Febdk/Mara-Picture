import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BookingPage } from './pages/BookingPage';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      
      {/* Page Router */}
      {currentPage === 'home' && <HomePage onNavigate={handleNavigation} />}
      {currentPage === 'portfolio' && <PortfolioPage onNavigate={handleNavigation} />}
      {currentPage === 'about' && <AboutPage onNavigate={handleNavigation} />}
      {currentPage === 'services' && <ServicesPage onNavigate={handleNavigation} />}
      {currentPage === 'booking' && <BookingPage onNavigate={handleNavigation} />}
      
      <Footer onNavigate={handleNavigation} />
      <FloatingWhatsApp />
      <Toaster />
    </div>
  );
}
