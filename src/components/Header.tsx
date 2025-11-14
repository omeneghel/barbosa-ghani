import { Phone } from "lucide-react";
import logo from "@/assets/logo-header.png";

interface HeaderProps {
  onWhatsAppClick?: () => void;
}

const Header = ({ onWhatsAppClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Barbosa & Ghani Advogados" className="h-20 md:h-24 w-auto" />
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={onWhatsAppClick}
              className="flex items-center gap-2 text-sm md:text-base text-primary hover:text-whatsapp transition-smooth font-medium cursor-pointer"
              aria-label="WhatsApp"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">(61) 98488-5377</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
