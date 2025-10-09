import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { 
  Stethoscope, 
  Pill, 
  Heart, 
  FileText, 
  Home, 
  Brain, 
  TrendingUp, 
  XCircle,
  AlertTriangle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Negativa de Cirurgias",
      description: "Bariátrica, reparadoras e outros procedimentos cirúrgicos negados"
    },
    {
      icon: Pill,
      title: "Medicamentos de Alto Custo",
      description: "Fornecimento de medicamentos especiais e tratamentos específicos"
    },
    {
      icon: Heart,
      title: "Tratamentos para Câncer",
      description: "Quimioterapia, radioterapia e outros tratamentos oncológicos"
    },
    {
      icon: FileText,
      title: "Autorização de Exames",
      description: "Liberação de exames e procedimentos diagnósticos essenciais"
    },
    {
      icon: Home,
      title: "Home Care",
      description: "Internação domiciliar e atendimento médico residencial"
    },
    {
      icon: Brain,
      title: "Tratamentos para Autismo (TEA)",
      description: "Terapias e tratamentos para Transtorno do Espectro Autista"
    },
    {
      icon: TrendingUp,
      title: "Reajustes Abusivos",
      description: "Contestação de aumentos indevidos de mensalidade"
    },
    {
      icon: XCircle,
      title: "Cancelamento Indevido",
      description: "Reversão de cancelamentos injustificados do plano"
    },
    {
      icon: AlertTriangle,
      title: "Erro Médico",
      description: "Responsabilização e reparação por erros médicos e odontológicos"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Nossos Serviços: Como Podemos Ajudar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atuamos com expertise em casos que exigem conhecimento técnico e agilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-secondary hover:shadow-medium transition-smooth group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-smooth">
                      <Icon className="h-6 w-6 text-primary group-hover:text-secondary transition-smooth" />
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
            <span className="text-center">FALE CONOSCO SOBRE SEU CASO</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
