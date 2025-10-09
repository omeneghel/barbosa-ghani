import { Clock, Laptop, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Clock,
      title: "Atendimento de Urgência",
      description: "Priorizamos casos urgentes e atuamos rapidamente para obter liminares que garantam seu tratamento."
    },
    {
      icon: Laptop,
      title: "Advocacia 100% Digital",
      description: "Atendemos clientes de todo o Brasil de forma online, sem a necessidade de deslocamento. Agilidade e conforto para você."
    },
    {
      icon: MessageSquare,
      title: "Comunicação Transparente",
      description: "Você será atualizado sobre cada etapa do seu processo, com acesso direto aos advogados via WhatsApp."
    },
    {
      icon: CheckCircle,
      title: "Análise de Caso Sem Compromisso",
      description: "Oferecemos uma primeira consulta para avaliar a viabilidade do seu caso sem custo."
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Por que escolher a Barbosa & Ghani?
          </h2>
          <p className="text-xl text-white/90">
            Nosso compromisso é com seu direito à saúde
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-smooth"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            variant="whatsapp"
            className="w-full sm:w-auto font-semibold text-sm sm:text-base px-4 sm:px-8 py-4 sm:py-6 h-auto transition-spring group"
          >
            <span className="text-center">GARANTA SEU DIREITO À SAÚDE</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
