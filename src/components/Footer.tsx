const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold mb-2">
            Barbosa & Ghani
          </h2>
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
