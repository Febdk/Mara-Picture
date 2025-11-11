import { Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';
import { socialMedia, contactInfo } from '../data/mockData';

interface FooterProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (page: string, sectionId?: string) => {
    onNavigate(page);
    
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'instagram':
        return <Instagram size={20} />;
      case 'facebook':
        return <Facebook size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="tracking-widest mb-4">MARA PICTURE</h3>
            <p className="text-gray-400 mb-4">
              Fotografer profesional untuk wisuda di Yogyakarta & Solo. Abadikan momen kelulusan Anda dengan hasil berkualitas tinggi.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>{contactInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => handleNavigation('home', 'home')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('portfolio')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavigation('services')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Services & Pricing
              </button>
              <button 
                onClick={() => handleNavigation('booking')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Booking
              </button>
              <button 
                onClick={() => handleNavigation('home', 'contact')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4">Connect With Us</h4>
            <p className="text-gray-400 text-sm mb-4">
              Follow kami untuk update portfolio terbaru dan promo menarik
            </p>
            <div className="flex gap-4">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-gray-400 hover:border-white flex items-center justify-center transition-colors text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-gray-400 hover:border-white flex items-center justify-center transition-colors text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="w-10 h-10 border-2 border-gray-400 hover:border-white flex items-center justify-center transition-colors text-gray-400 hover:text-white"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-gray-400 hover:border-white flex items-center justify-center transition-colors text-gray-400 hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            &copy; 2025 Mara Picture. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Fotografer Wisuda Profesional di Yogyakarta & Solo | Semua foto adalah hak cipta Mara Picture dan tidak boleh digunakan tanpa izin
          </p>
        </div>
      </div>
    </footer>
  );
}
