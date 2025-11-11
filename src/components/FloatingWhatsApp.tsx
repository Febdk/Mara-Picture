import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { contactInfo } from '../data/mockData';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white border-2 border-black p-4 rounded-lg shadow-lg max-w-xs animate-in fade-in slide-in-from-bottom-2">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-black/50 hover:text-black"
            >
              <X size={16} />
            </button>
            <p className="text-sm mb-3 pr-4 text-black">
              <strong className="text-black">Butuh bantuan?</strong><br />
              Hubungi kami via WhatsApp untuk konsultasi gratis!
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white border-2 border-[#25D366]"
            >
              <MessageCircle size={18} className="mr-2" />
              Chat WhatsApp
            </Button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] hover:bg-[#20BD5A] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border-2 border-white"
          aria-label="WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </>
  );
}
