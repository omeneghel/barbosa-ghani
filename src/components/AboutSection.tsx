import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import najuaPhoto from "@/assets/najua-ghani.jpg";
import edivamPhoto from "@/assets/edivam-barbosa.jpg";

const AboutSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
  );
};

export default AboutSection;
