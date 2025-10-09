import { Card, CardContent } from "@/components/ui/card";
import { Scale } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="sobre">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Conheça a Barbosa e Ghani Advogados
          </h2>
        </div>

        <Card className="max-w-4xl mx-auto shadow-medium">
          <CardContent className="p-8 md:p-12">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Scale className="h-10 w-10 text-secondary" />
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-foreground leading-relaxed mb-6">
                <strong className="text-primary">Najua Ghani</strong> e <strong className="text-primary">Edivam Barbosa</strong> possuem 
                vasta experiência atuando em causas envolvendo planos de saúde e erros médicos, áreas que exigem 
                conhecimento técnico aprofundado e atuação estratégica.
              </p>
              
              <p className="text-foreground leading-relaxed mb-6">
                Com um histórico de sucesso e dedicação, o escritório nasceu da união de propósitos para oferecer 
                uma <strong className="text-secondary">advocacia combativa e, ao mesmo tempo, humana</strong>.
              </p>
              
              <p className="text-foreground leading-relaxed">
                Além da especialização em Direito da Saúde, o escritório também possui sólida atuação em áreas 
                cíveis comuns, como <strong>Direito do Consumidor, Contratos e Responsabilidade Civil</strong>, 
                garantindo um suporte jurídico completo aos seus clientes.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
