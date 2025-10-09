import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary">
              Barbosa & Ghani
            </h1>
            <span className="ml-2 text-sm text-muted-foreground hidden md:inline">
              Advogados
            </span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="https://wa.me/5561999999999"
              className="flex items-center gap-2 text-sm md:text-base text-primary hover:text-secondary transition-smooth"
              aria-label="WhatsApp"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">(61) 99999-9999</span>
            </a>
            <a
              href="mailto:contato@barbosaghani.adv.br"
              className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-smooth hidden lg:flex"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
              <span>contato@barbosaghani.adv.br</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
