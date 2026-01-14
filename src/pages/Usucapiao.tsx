import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Scale, Building2, Tractor, Heart, FileCheck, ArrowRight, Laptop, MessageSquare, CheckCircle, Building } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import najuaImage from "@/assets/najua-ghani.jpg";
import edivamImage from "@/assets/edivam-barbosa.jpg";
import heroImage from "@/assets/hero-law.jpg";
import logo from "@/assets/logo-footer.png";

const Usucapiao = () => {
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
      title: "Usucapião Extraordinário",
      description: "Trabalhamos com a regularização de propriedades através da modalidade extraordinária. Esta opção é ideal para quem ocupa um imóvel de maneira contínua e pacífica por um período mínimo de 15 anos, não sendo exigida a apresentação de nenhum título de posse."
    },
    {
      icon: Home,
      title: "Usucapião Ordinário",
      description: "Prestamos assessoria integral para processos de usucapião ordinário. É voltado para aqueles que detêm a posse do bem de forma mansa e ininterrupta há pelo menos 10 anos, sendo necessário comprovar a boa-fé e possuir algum justo título."
    },
    {
      icon: Building2,
      title: "Usucapião Especial Urbano",
      description: "Realizamos a regularização de imóveis na zona urbana através da usucapião especial. Este serviço é direcionado a quem reside no local (sozinho ou com a família) por 5 anos consecutivos sem interrupção, desde que não possua outro imóvel em seu nome."
    },
    {
      icon: Tractor,
      title: "Usucapião Especial Rural",
      description: "Oferecemos suporte ao trabalhador do campo que usa a terra para moradia e sustento próprio. É necessário comprovar a posse ininterrupta por 5 anos e que a terra é produtiva, além de o solicitante não ser dono de outro imóvel."
    },
    {
      icon: Heart,
      title: "Usucapião Familiar",
      description: "Modalidade específica para quem permaneceu residindo no imóvel por 2 anos seguidos após o ex-cônjuge ou companheiro abandonar o lar. O bem deve ser utilizado como moradia da família e a posse deve ser ininterrupta."
    },
    {
      icon: FileCheck,
      title: "Usucapião Administrativo",
      description: "Esta via permite regularizar a propriedade diretamente em cartório, de forma mais rápida e com menos burocracia. Apesar de ser um processo extrajudicial, requer atenção rigorosa à documentação e às leis, tornando indispensável o acompanhamento de advogados especializados."
    }
  ];

  const differentials = [
    {
      icon: Building,
      title: "Atendimento Especializado",
      description: "Experiência e personalização para atender sua demanda relacionada ao Direito Imobiliário."
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
      question: "O que é preciso para ter direito ao usucapião?",
      answer: "O requisito principal é a posse do imóvel com \"ânimo de dono\" (animus domini), ou seja, agir como se fosse o proprietário (pagando contas, reformando, morando). Além disso, a posse deve ser mansa (sem oposição do dono original), pacífica e ininterrupta pelo tempo exigido pela lei, que varia de 2 a 15 anos dependendo da modalidade."
    },
    {
      question: "Pago aluguel ou moro de favor há muitos anos. Posso pedir usucapião?",
      answer: "Em regra, não. A lei entende que quem paga aluguel ou mora de favor (comodato) reconhece que o imóvel pertence a outra pessoa. Falta, portanto, a intenção de ser dono. O usucapião só é possível se houver uma mudança drástica na relação, onde você para de pagar/obedecer e passa a agir como proprietário sem oposição por um longo período."
    },
    {
      question: "É possível fazer usucapião direto no cartório, sem juiz?",
      answer: "Sim, existe o Usucapião Extrajudicial (ou Administrativo). Se não houver disputa (o antigo dono concorda ou não é encontrado para se opor) e a documentação estiver perfeita, o processo é feito diretamente no Cartório de Registro de Imóveis. É uma via muito mais rápida que a judicial."
    },
    {
      question: "Quais documentos são necessários para iniciar o processo?",
      answer: "Os principais são: planta e memorial descritivo do imóvel (assinados por engenheiro/arquiteto), certidões negativas, comprovantes de residência antigos e atuais (contas de luz, água, IPTU), documentos pessoais e, se houver, o contrato de \"gaveta\" ou recibos de compra e venda."
    },
    {
      question: "Posso somar o tempo do posseiro anterior ao meu?",
      answer: "Sim, isso se chama acessio possessionis. Se você comprou a posse de alguém que já morava lá, pode somar o tempo dela ao seu para atingir o prazo exigido, desde que ambas as posses sejam contínuas e pacíficas."
    },
    {
      question: "Imóveis de herança podem sofrer usucapião por um dos herdeiros?",
      answer: "Sim, é possível, mas é um caso delicado. Se um herdeiro mora sozinho no imóvel, arca com todas as despesas e manutenção exclusiva sem a oposição ou ajuda dos demais herdeiros pelo tempo exigido em lei, ele pode pleitear o reconhecimento da propriedade exclusiva via usucapião."
    },
    {
      question: "É possível fazer usucapião de terreno público?",
      answer: "Não. A Constituição Federal e o Código Civil brasileiro proíbem expressamente o usucapião de bens públicos (terrenos da Prefeitura, Estado ou União). Mesmo que você more lá há 50 anos, a propriedade não pode ser adquirida dessa forma."
    },
    {
      question: "Quanto custa um processo de usucapião?",
      answer: "Os custos envolvem: honorários advocatícios (tabelados pela OAB de cada estado), taxas de cartório (emolumentos), custos com engenheiro para a planta do imóvel e, ao final, o imposto de transmissão (em alguns casos) e o registro. É um investimento para regularizar um patrimônio que vale muito mais."
    },
    {
      question: "O que acontece se o dono aparecer e contestar o processo?",
      answer: "Se o processo for extrajudicial (cartório), ele será remetido ao Poder Judiciário. Lá, o processo segue como uma ação judicial comum, onde o juiz analisará as provas de ambos os lados (quem tem a melhor posse, se houve abandono, se os requisitos foram cumpridos) para decidir a quem pertence o imóvel."
    },
    {
      question: "Não tenho nenhum documento de compra (contrato). Ainda assim posso regularizar?",
      answer: "Sim. Para isso serve o Usucapião Extraordinário. Nele, não é exigido \"justo título\" (contrato) nem boa-fé. Basta comprovar a posse ininterrupta e pacífica por 15 anos (ou 10 anos, se for sua moradia habitual e tiver realizado obras)."
    },
    {
      question: "Meu ex-marido/esposa saiu de casa. Posso pedir usucapião da parte dele(a)?",
      answer: "Sim, através do Usucapião Familiar. Se o ex-cônjuge ou companheiro abandonar o lar por 2 anos ininterruptos e você permanecer cuidando da família e arcando com as despesas do imóvel (que deve ter até 250m²), você pode adquirir a propriedade integral."
    },
    {
      question: "Quanto tempo demora para sair o registro do imóvel?",
      answer: "Depende da via escolhida e da complexidade. No Extrajudicial (Cartório), pode levar de 6 meses a 1 ano, em média. Na via Judicial, devido aos prazos de citação e acúmulo de processos nos fóruns, pode levar de 2 a 5 anos ou mais."
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
                Advogados Especialistas em Usucapião
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Expertise em direito imobiliário para te ajudar em causas envolvendo usucapião
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

        {/* Services Section */}
        <section className="py-20 bg-background -mt-1">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Áreas de Atuação
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border-primary/10 hover:border-primary/30 transition-smooth hover:shadow-lg">
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
                className="w-full sm:w-auto font-semibold text-sm sm:text-base px-8 sm:px-10 py-5 sm:py-6 h-auto transition-spring group"
              >
                <span className="text-center">FALAR COM ADVOGADO ESPECIALISTA</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth flex-shrink-0" />
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
                Temos compromisso na defesa dos seus direitos na área imobiliária.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {differentials.map((differential, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-white/10 rounded-full">
                      <differential.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{differential.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="whatsapp"
                className="px-8 py-6 h-auto text-base font-semibold transition-spring shadow-strong"
              >
                Falar com um Advogado
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
                  <ContactForm 
                    variant="default" 
                    redirectMessage="Olá! Vim pelo site e gostaria de tirar uma dúvida sobre usucapião."
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
        <WhatsAppButton 
          ref={whatsAppButtonRef} 
          message="Olá! Vim pelo site e gostaria de tirar uma dúvida sobre usucapião."
        />
      )}
    </div>
  );
};

export default Usucapiao;
