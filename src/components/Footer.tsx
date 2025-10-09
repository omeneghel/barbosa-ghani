import logo from "@/assets/logo-footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Barbosa & Ghani Advogados" className="h-16 w-auto" />
          </div>
          <p className="text-white/80 mb-8">
            Advogados Associados
          </p>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm text-white/70">
              © {currentYear} Barbosa & Ghani Advogados. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/60 mt-2">
              OAB/DF - Advocacia especializada em Planos de Saúde e Direito Médico
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
