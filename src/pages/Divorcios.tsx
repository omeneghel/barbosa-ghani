import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, FileCheck, Scale, Users, Home as HomeIcon, FolderOpen, Clock, Laptop, MessageSquare, CheckCircle, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import heroImage from "@/assets/hero-law-health.jpg";
import logo from "@/assets/logo-footer.png";
import najuaPhoto from "@/assets/najua-ghani.jpg";
import edivamPhoto from "@/assets/edivam-barbosa.jpg";

const Divorcios = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const whatsAppButtonRef = useRef<{ openPopup: () => void }>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowWhatsApp(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    whatsAppButtonRef.current?.openPopup();
  };

  const services = [
    {
      icon: Scale,
      title: "Divórcio pela via judicial",
      description: "Ação usada para encerrar o casamento quando ao menos um dos cônjuges deseja a separação, mesmo sem o consentimento do outro. Nela são definidos o fim do vínculo, a divisão dos bens, a pensão alimentícia, guarda, visitas dos filhos e demais ajustes necessários."
    },
    {
      icon: FileCheck,
      title: "Divórcio em cartório (extrajudicial)",
      description: "Modalidade de divórcio realizada diretamente no cartório, possível quando o casal está de acordo sobre todos os pontos e não possui filhos menores de 18 anos, desde que ambos estejam assistidos por advogado."
    },
    {
      icon: Heart,
      title: "Pensão alimentícia",
      description: "Ação destinada a solicitar o pagamento de pensão alimentícia ou a revisão do valor que já foi fixado anteriormente, adequando-o à realidade atual das partes."
    },
    {
      icon: Users,
      title: "Guarda e direito de visitas",
      description: "Processo para definir com qual dos pais os filhos irão residir após o divórcio e como será organizado o regime de visitas do outro genitor, garantindo a convivência familiar."
    },
    {
      icon: HomeIcon,
      title: "União estável: reconhecimento e dissolução",
      description: "Procedimento para declarar a existência da união estável e seus efeitos jurídicos, como direito à herança, pensão alimentícia e à partilha dos bens, bem como para formalizar o seu término."
    },
    {
      icon: FolderOpen,
      title: "Inventário e partilha de bens",
      description: "Processo realizado após o falecimento de alguém que deixa herdeiros, no qual todo o patrimônio do falecido é identificado, avaliado e dividido entre os sucessores conforme as regras da lei."
    }
  ];

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

  const faqItems = [
    {
      question: "Quanto tempo demora um divórcio?",
      answer: "O prazo varia. Um divórcio consensual pode ser resolvido em dias ou semanas, especialmente em cartório. Já o divórcio litigioso, com discussões sobre guarda, pensão e bens, pode levar meses ou até anos, dependendo da complexidade e da Vara em que tramita."
    },
    {
      question: "Preciso do consentimento do meu cônjuge para me divorciar?",
      answer: "Não. O divórcio é um direito de qualquer dos cônjuges. Se o outro não concordar, é possível ingressar com divórcio litigioso, e o juiz poderá decretar o fim do casamento mesmo sem o consentimento da outra parte."
    },
    {
      question: "Posso me divorciar em cartório?",
      answer: "Sim, desde que haja acordo entre as partes, não existam filhos menores ou incapazes e ambos estejam assistidos por advogado (que pode ser o mesmo). Se algum desses requisitos não for atendido, o divórcio deve ser feito pela via judicial."
    },
    {
      question: "Como fica a guarda dos filhos no divórcio?",
      answer: "A regra geral é a guarda compartilhada, em que pai e mãe dividem as responsabilidades sobre a vida dos filhos. Isso não significa tempo igual de convivência, mas decisões conjuntas. Situações de risco, como violência ou abandono, podem justificar outro modelo de guarda."
    },
    {
      question: "Quem paga pensão alimentícia e como é definido o valor?",
      answer: "A pensão pode ser destinada aos filhos e, em alguns casos, ao ex-cônjuge que comprove necessidade. O valor é fixado com base na necessidade de quem recebe e na capacidade financeira de quem paga, sempre buscando um equilíbrio justo."
    },
    {
      question: "Como funciona a partilha de bens no divórcio?",
      answer: "A divisão dos bens depende do regime de bens do casamento. Em comunhão parcial, por exemplo, em regra são partilhados os bens adquiridos durante a união. Cada caso é analisado individualmente, considerando documentos, provas e possíveis exceções previstas em lei."
    },
    {
      question: "E as dívidas do casal, como ficam?",
      answer: "Assim como os bens, as dívidas também podem ser divididas, principalmente quando foram contraídas em benefício da família. A responsabilidade de cada um será definida de acordo com o regime de bens e as circunstâncias em que a dívida foi feita."
    },
    {
      question: "Posso continuar morando no imóvel após o divórcio?",
      answer: "Em muitos casos, sim. Especialmente quando há filhos menores morando no local, o juiz pode autorizar que um dos cônjuges permaneça no imóvel. Essa situação pode ser regulada por acordo ou decisão judicial, prevendo compensações ou futura venda para divisão do valor."
    },
    {
      question: "É obrigatório ter advogado para fazer o divórcio?",
      answer: "Sim. Tanto no divórcio em cartório quanto no judicial é indispensável a presença de advogado. No consensual, as partes podem compartilhar o mesmo profissional; no litigioso, cada lado normalmente é representado por seu próprio advogado."
    },
    {
      question: "Quanto custa um divórcio?",
      answer: "O custo varia conforme o tipo de divórcio, a existência de bens, filhos, discussões mais complexas e o tempo de processo. Envolve honorários advocatícios e, eventualmente, taxas de cartório ou custas judiciais. O valor exato é definido após análise detalhada do caso."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header onWhatsAppClick={handleWhatsAppClick} />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
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

          {/* Content */}
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <img src={logo} alt="Barbosa & Ghani Advogados" className="h-48 md:h-56 w-auto" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Advocacia Especializada em Divórcios
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Estamos ao seu lado em todas as fases do divórcio, seja amigável ou contencioso, assegurando segurança jurídica, transparência em cada passo, estratégia na condução do caso e o menor impacto emocional possível.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  variant="whatsapp"
                  className="w-full sm:w-auto font-semibold text-sm sm:text-lg px-6 sm:px-10 py-5 sm:py-6 h-auto transition-spring group"
                >
                  <span className="text-center">FALAR COM UM ADVOGADO</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
                </Button>
              </div>

              <p className="text-white/70 text-sm mt-6">Análise de caso sem compromisso • Atendimento 100% digital</p>
            </div>
          </div>

          {/* Decorative Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Dores Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Perdido em meio a brigas familiares que parecem não ter fim?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conflitos dentro da família cansam, desgastam e muitas vezes dão a sensação de que nada vai mudar. Nossa equipe especializada vai além da parte jurídica: acompanha você com orientação clara e segura, ajudando a aliviar o estresse e a recuperar a tranquilidade necessária para seguir em frente.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background" id="servicos">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Somos Especialistas em Divórcios
              </h2>
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
                          <h2 className="font-semibold text-primary text-lg mb-2">
                            {service.title}
                          </h2>
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
                <span className="text-center">FALAR COM UM ADVOGADO</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-muted/30" id="sobre">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Conheça a Barbosa e Ghani Advogados
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-4">
                Uma <strong className="text-secondary">advocacia combativa e humana</strong>, com vasta experiência em 
                Direito da Saúde, Direito do Consumidor, Contratos e Responsabilidade Civil.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
              {/* Card Nájua Ghani */}
              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
                      <img 
                        src={najuaPhoto} 
                        alt="Nájua Ghani - Advogada especialista em Direito da Saúde" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-serif font-bold text-primary mb-2">Nájua Ghani</h3>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <GraduationCap className="h-5 w-5 text-secondary" />
                        <p className="text-sm text-secondary font-semibold">Advogada e Professora de Direito</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                    <p>Doutoranda em Direito pelo IDP e Professora de Direito do IDP.</p>
                    <p>Advogada militante no Distrito Federal desde 2014 e Orientadora do Núcleo de Prática Jurídica do UniCEUB desde julho de 2021.</p>
                    <p>Mestre em Direito na área de Pesquisa sobre Direitos de personalidade, novas Tecnologias de Comunicação e Informação e Responsabilidade Civil do IDP (2023).</p>
                    <p>Pós-graduada em Direito Digital e Compliance pelo Instituto Damásio de Direito (2020-2021), em Processo Civil pelo IDP (2017-2019) e em Advocacia Empresarial, Contratos, Responsabilidade Civil e Família pelo IDP (2015-2016).</p>
                  </div>
                </CardContent>
              </Card>

              {/* Card Edivam Barbosa */}
              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
                      <img 
                        src={edivamPhoto} 
                        alt="Edivam Barbosa - Advogado especialista em Direito da Saúde" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-serif font-bold text-primary mb-2">Edivam Barbosa</h3>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <GraduationCap className="h-5 w-5 text-secondary" />
                        <p className="text-sm text-secondary font-semibold">Advogado Especialista em Saúde Suplementar</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                    <p>Advogado Especialista com vasta experiência em todo território nacional no âmbito da saúde suplementar.</p>
                    <p>Orientador do Núcleo de Prática Jurídica do Centro Universitário de Brasília UniCEUB, Professor Universitário e de Cursos Preparatórios para Concursos nas disciplinas de Direito Civil e Administrativo.</p>
                    <p>Assessor Jurídico em Autarquia Federal.</p>
                    <p>Mestre em Direito pelo Centro Universitário de Brasília UniCEUB. Pós-graduado em Direito Penal e Processo Penal pela Universidade Estácio de Sá.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                variant="whatsapp"
                className="w-full sm:w-auto font-semibold text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 h-auto transition-spring group"
              >
                <span className="text-center">AGENDE SUA CONSULTA</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Differentials Section */}
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
                className="w-full sm:w-auto font-semibold text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 h-auto transition-spring group"
              >
                <span className="text-center">FALAR COM UM ADVOGADO</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* FAQ Section */}
        <FAQSection items={faqItems} />
      </main>

      <Footer />
      {showWhatsApp && <WhatsAppButton ref={whatsAppButtonRef} message="Olá, gostaria de falar com um advogado especialista em divórcios." />}
    </div>
  );
};

export default Divorcios;
