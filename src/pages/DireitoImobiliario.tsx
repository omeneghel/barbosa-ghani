import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Home, Scale, Users, Gavel, Clock, FileCheck, Building } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import najuaImage from "@/assets/najua-ghani.jpg";
import edivamImage from "@/assets/edivam-barbosa.jpg";

const DireitoImobiliario = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWhatsApp(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: FileCheck,
      title: "Regularização de Imóveis",
      description: "Organizamos toda a documentação do seu imóvel, corrigindo registros em cartório e junto aos órgãos públicos, para que a propriedade fique 100% regularizada, pronta para venda, financiamento ou partilha."
    },
    {
      icon: Home,
      title: "Reintegração e Manutenção de Posse",
      description: "Atuamos quando terceiros ocupam ou ameaçam o seu imóvel, propondo ações de reintegração ou manutenção de posse para garantir que você volte a exercer plenamente o seu direito de propriedade."
    },
    {
      icon: Scale,
      title: "Usucapião",
      description: "Se você mora ou utiliza um imóvel há muitos anos sem contestação, avaliamos seu caso e conduzimos o processo de usucapião para transformar a posse em propriedade, com matrícula em seu nome."
    },
    {
      icon: Users,
      title: "Inventários",
      description: "Acompanhamos todo o inventário envolvendo imóveis, desde a organização dos documentos até a partilha final, reduzindo conflitos entre herdeiros e garantindo que a divisão dos bens siga a lei e a vontade da família."
    },
    {
      icon: Gavel,
      title: "Leilões",
      description: "Orientamos na compra e defesa de imóveis em leilão, analisando riscos, dívidas ocultas e situação ocupacional, para que você tome decisões seguras e evite surpresas após o arremate."
    },
    {
      icon: Clock,
      title: "Atrasos de Entrega de Imóveis",
      description: "Defendemos os direitos de compradores prejudicados por atraso na entrega de imóveis na planta, buscando indenizações por danos materiais e morais, além da revisão de cláusulas abusivas nos contratos."
    },
    {
      icon: FileText,
      title: "Assessoria de Contratos",
      description: "Fazemos a análise, elaboração e revisão de contratos imobiliários (compra e venda, locação, permuta, cessão de direitos), prevenindo problemas futuros e assegurando cláusulas equilibradas para todas as partes."
    }
  ];

  const differentials = [
    {
      icon: Building,
      title: "Atendimento Especializado",
      description: "Experiência e personalização para atender sua demanda relacionada ao Direito Imobiliário."
    },
    {
      icon: Home,
      title: "Advocacia 100% Digital",
      description: "Atendemos clientes de todo o Brasil de forma online, sem a necessidade de deslocamento. Agilidade e conforto para você."
    },
    {
      icon: Users,
      title: "Comunicação Transparente",
      description: "Você será atualizado sobre cada etapa do seu processo, com acesso direto aos advogados via WhatsApp."
    },
    {
      icon: FileCheck,
      title: "Análise de Caso Sem Compromisso",
      description: "Oferecemos uma primeira consulta para avaliar a viabilidade do seu caso sem custo."
    }
  ];

  const faqItems = [
    {
      question: "Quando eu preciso de um advogado para regularizar meu imóvel?",
      answer: "Você deve buscar a Barbosa e Ghani quando o imóvel não tem escritura, está apenas \"de gaveta\", foi herdado sem inventário, tem metragem diferente da matrícula ou qualquer pendência em cartório ou prefeitura. Quanto antes a regularização for feita, mais simples e barata tende a ser a solução e menor o risco de perder negócios por causa da documentação."
    },
    {
      question: "Qual a diferença entre reintegração e manutenção de posse?",
      answer: "A manutenção de posse é usada quando alguém ameaça ou perturba sua posse, mas você ainda está no imóvel; já a reintegração de posse é proposta quando você foi efetivamente tirado do bem e precisa voltar a ocupá-lo. A equipe da Barbosa e Ghani analisa a situação concreta e indica qual medida é mais rápida e eficiente para proteger o seu direito."
    },
    {
      question: "Moro há muitos anos em um imóvel. Posso entrar com usucapião?",
      answer: "Em muitos casos, sim. É preciso comprovar tempo de posse contínua, sem oposição, e outros requisitos legais (que variam conforme o tipo de usucapião). A Barbosa e Ghani avalia documentos, testemunhas e histórico do imóvel para verificar se o seu caso se encaixa e se é melhor seguir pela via judicial ou extrajudicial."
    },
    {
      question: "Inventário é sempre demorado? Dá para fazer de forma mais simples?",
      answer: "Nem sempre. Quando os herdeiros estão de acordo e a documentação está em ordem, é possível fazer inventário extrajudicial em cartório, que costuma ser mais rápido. A atuação da Barbosa e Ghani ajuda a organizar documentos, prevenir conflitos e escolher o caminho juridicamente mais seguro para partilhar os imóveis da família."
    },
    {
      question: "É seguro comprar imóvel em leilão?",
      answer: "Pode ser uma ótima oportunidade, desde que haja análise técnica prévia. É fundamental verificar dívidas do imóvel, situação do antigo proprietário, ocupação, prazos e riscos de eventual disputa judicial. A Barbosa e Ghani faz o estudo completo do edital, da matrícula e dos processos relacionados para que você decida com segurança antes de arrematar."
    },
    {
      question: "A construtora atrasou a entrega do meu imóvel. Tenho direito a indenização?",
      answer: "Em muitos casos, sim. Atrasos além do prazo contratual podem gerar direito a indenização por aluguel, taxa de evolução de obra, danos materiais e até morais, além da revisão de cláusulas abusivas. A Barbosa e Ghani analisa o contrato, o cronograma da obra e a sua situação concreta para calcular os possíveis valores e definir a melhor estratégia."
    },
    {
      question: "Preciso de advogado para analisar contrato de compra e venda ou locação?",
      answer: "É altamente recomendável. Contratos imobiliários costumam ter cláusulas técnicas e desequilibradas, que podem trazer prejuízos no futuro. A Barbosa e Ghani faz a revisão ou elaboração completa do contrato, ajustando multas, prazos, garantias e responsabilidades para proteger seus interesses, seja você comprador, vendedor, locador ou locatário."
    },
    {
      question: "Já assinei o contrato, mas percebi cláusulas abusivas. Ainda dá para resolver?",
      answer: "Em muitos casos, sim. Dependendo da situação, é possível negociar alterações, firmar aditivos contratuais ou até discutir judicialmente cláusulas abusivas, especialmente em relações de consumo. A Barbosa e Ghani avalia o contrato assinado, o histórico da negociação e os riscos envolvidos para indicar o caminho mais adequado."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 animate-fade-up">
                Advogados Especialistas em Direito Imobiliário
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Assessoria jurídica experiente e especializada na defesa de direitos de imóveis.
              </p>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="whatsapp"
                className="px-8 py-6 h-auto text-base md:text-lg font-semibold transition-spring animate-fade-up shadow-strong"
                style={{ animationDelay: "0.2s" }}
              >
                Falar com um Advogado Especialista
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-background"/>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Áreas de Atuação
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <service.icon className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="whatsapp"
                className="px-8 py-6 h-auto text-base font-semibold transition-spring shadow-strong"
              >
                Falar com um Advogado Especialista
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Conheça a Barbosa e Ghani Advogados
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Uma advocacia combativa e humana, com vasta experiência em <strong>Direito Imobiliário</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
                      <img
                        src={najuaImage}
                        alt="Nájua Ghani"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                      Nájua Ghani
                    </h3>
                    <p className="text-sm font-semibold text-secondary mb-4">
                      Advogada e Professora de Direito
                    </p>
                  </div>
                  <div className="text-muted-foreground space-y-3 text-sm leading-relaxed">
                    <p>Doutoranda em Direito pelo IDP e Professora de Direito do IDP.</p>
                    <p>Advogada militante no Distrito Federal desde 2014 e Orientadora do Núcleo de Prática Jurídica do UniCEUB desde julho de 2021.</p>
                    <p>Mestre em Direito na área de Pesquisa sobre Direitos de personalidade, novas Tecnologias de Comunicação e Informação e Responsabilidade Civil do IDP (2023).</p>
                    <p>Pós-graduada em Direito Digital e Compliance pelo Instituto Damásio de Direito (2020-2021), em Processo Civil pelo IDP (2017-2019) e em Advocacia Empresarial, Contratos, Responsabilidade Civil e Família pelo IDP (2015-2016).</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
                      <img
                        src={edivamImage}
                        alt="Edivam Barbosa"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                      Edivam Barbosa
                    </h3>
                    <p className="text-sm font-semibold text-secondary mb-4">
                      Advogado Especialista em Direito Imobiliário
                    </p>
                  </div>
                  <div className="text-muted-foreground space-y-3 text-sm leading-relaxed">
                    <p>Advogado Especialista com vasta experiência em todo território nacional no âmbito do direito imobiliário</p>
                    <p>Orientador do Núcleo de Prática Jurídica do Centro Universitário de Brasília UniCEUB, Professor Universitário e de Cursos Preparatórios para Concursos nas disciplinas de Direito Civil e Administrativo.</p>
                    <p>Assessor Jurídico em Autarquia Federal.</p>
                    <p>Mestre em Direito pelo Centro Universitário de Brasília UniCEUB. Pós-graduado em Direito Penal e Processo Penal pela Universidade Estácio de Sá.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="whatsapp"
                className="px-8 py-6 h-auto text-base font-semibold transition-spring shadow-strong"
              >
                Fale com um Advogado
              </Button>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-50"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Por que escolher a Barbosa & Ghani?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Temos compromisso na defesa dos seus direitos na área imobiliária.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {differentials.map((item, index) => (
                <Card key={index} className="border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg bg-card/80 backdrop-blur">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <item.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="whatsapp"
                className="px-8 py-6 h-auto text-base font-semibold transition-spring shadow-strong"
              >
                Falar com um Advogado Especialista
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
                  Fale Conosco Agora e Garanta Seus Direitos
                </h2>
                <p className="text-lg text-muted-foreground">
                  Nossa equipe está pronta para analisar seu caso.
                </p>
              </div>

              <Card className="shadow-strong">
                <CardContent className="p-8 md:p-10">
                  <ContactForm 
                    variant="default" 
                    redirectMessage="Olá, gostaria de falar com um advogado especialista em direito imobiliário."
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection items={faqItems} />
      </main>

      <Footer />
      {showWhatsApp && (
        <WhatsAppButton message="Olá, gostaria de falar com um advogado especialista em direito imobiliário." />
      )}
    </div>
  );
};

export default DireitoImobiliario;
