import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Scale, FileCheck, Users, MapPin, DollarSign, Gavel, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-law.jpg";
import logo from "@/assets/logo-footer.png";

const Consorcios = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const credibilityItems = [
    {
      icon: Scale,
      text: "Experiência consolidada em Direito do Consumidor"
    },
    {
      icon: FileCheck,
      text: "+15 anos de experiência combinada"
    },
    {
      icon: Users,
      text: "Atendimento Humanizado e Personalizado"
    },
    {
      icon: MapPin,
      text: "Atuação em Todo o Brasil"
    }
  ];

  const services = [
    {
      icon: DollarSign,
      title: "Recuperação de Valores Pagos",
      description: "Analisamos seu contrato e buscamos judicialmente a restituição de valores pagos indevidamente em consórcios cancelados ou encerrados."
    },
    {
      icon: Gavel,
      title: "Ações Judiciais Contra Administradoras",
      description: "Atuamos contra cláusulas abusivas, cobranças indevidas e práticas ilegais realizadas por administradoras de consórcios."
    },
    {
      icon: FileText,
      title: "Análise Contratual e Orientação Jurídica",
      description: "Avaliação técnica detalhada do contrato para identificar irregularidades e orientar o melhor caminho jurídico."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onWhatsAppClick={scrollToContact} />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Barbosa & Ghani Advogados" className="h-48 md:h-56 w-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Advogados Especialistas em Consórcios
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Atuação jurídica estratégica para defender seus direitos em contratos de consórcio e recuperar valores pagos de forma indevida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Button
                size="lg"
                onClick={scrollToContact}
                variant="whatsapp"
                className="w-full sm:w-auto font-semibold text-sm sm:text-lg px-6 sm:px-10 py-5 sm:py-6 h-auto transition-spring group"
              >
                <span className="text-center">FALAR COM ADVOGADO ESPECIALISTA</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
              </Button>
            </div>

            {/* Credibility Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {credibilityItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-white/90 justify-center sm:justify-start">
                    <Icon className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background -mt-1" id="servicos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Soluções Jurídicas Completas para Consumidores de Consórcios
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="border-2 hover:border-secondary hover:shadow-medium transition-smooth group"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-smooth">
                        <Icon className="h-8 w-8 text-primary group-hover:text-secondary transition-smooth" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary text-lg mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              variant="whatsapp"
              className="w-full sm:w-auto font-semibold text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 h-auto transition-spring group"
            >
              <span className="text-center">FALAR COM ADVOGADO ESPECIALISTA</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50" id="contato">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Fale com um Advogado Especialista
              </h2>
              <p className="text-lg text-muted-foreground">
                Nossa equipe está pronta para analisar seu caso.
              </p>
            </div>

            <Card className="shadow-strong">
              <CardContent className="p-8 md:p-10">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Preencha o formulário abaixo e entraremos em contato para uma análise inicial do seu caso.
                  </p>
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    variant="whatsapp"
                    className="w-full sm:w-auto font-semibold text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 h-auto transition-spring group"
                  >
                    <span className="text-center">FALAR VIA WHATSAPP</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton message="Olá! Vim pelo site e gostaria de tirar uma dúvida sobre consórcios." />
    </div>
  );
};

export default Consorcios;
